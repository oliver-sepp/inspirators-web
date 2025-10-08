<script lang="ts">
  import { onMount } from "svelte";
  import LanguagePopUp from "./LanguagePopUp.svelte";
  import Links from "../navbar-options/links.json";
import { goto } from '$app/navigation';

  const menuData = Links[0];

  let active = "";
  const links = Object.keys(menuData);
  let scrolled = false;
  let languagePopUpOpen = false;
  let menuOpen = false;
  let subMenuOpen = false;

  


  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function getSubMenuItems(category: keyof typeof menuData): string[] {
  if (!menuData[category]) return [];
  return Object.keys(menuData[category]);
}

  function toggleSubMenu(link: string) {
  console.log('Before toggle - active:', active || "null", 'link:', link, 'subMenuOpen:', subMenuOpen);
  
  if (active === link) {
    subMenuOpen = false;
	active = "";
  } else {
    active = link;
    subMenuOpen = true;
  }
  
  console.log('After toggle - active:', active, 'subMenuOpen:', subMenuOpen);
}

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (window.innerWidth >= 768 && !node.contains(event.target as Node)) {
        subMenuOpen = false;
        active = "";
		languagePopUpOpen = false;
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      }
    };
  }

  function clickOutsideMobile(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (!node.contains(event.target as Node)) {
        menuOpen = false;
      }
    };

    document.addEventListener("click", handleClick, true);

    return {
      destroy() {
        document.removeEventListener("click", handleClick, true);
      }
    };
  }
</script>

<div
  id="navigation"
  class="fixed top-0 bg-transparent flex items-center justify-between px-3 sm:px-8 lg:px-10 z-[50] py-1 sm:py-6 lg:py-10 pb-3 sm:pb-4 lg:pb-6 w-full min-w-fit"
  class:bg-transparent={!scrolled && !menuOpen}
  class:bg-white={scrolled || menuOpen}
  style="min-height: 60px;"
>
  <div class="flex-shrink-0">
    <a href="../.">
      <img src="/logo.png" alt="Inspirators Logo" class="h-6 sm:h-10 lg:h-12 w-auto" />
    </a>
  </div>

  <div class="hidden md:flex items-center md:gap-2 xl:gap-5 flex-shrink-0">
    <div class="sm:text-[.5rem] md:text-[.5rem] lg:text-[1rem] flex sm:gap-[.5rem] md:gap-[1rem] lg:gap-[0] xl:gap-[2rem] items-center">
      {#each links as link}
	  <div 
	  use:clickOutside
	  class="relative inline-block">
        <button
          class="relative text-[12px] lg:text-[15px] xl:text-[20px] min-w-fit px-2 lg:px-0 lg:w-[100px] text-center transition-all duration-300 ease-in-out
            text-[#05266A] font-normal hover:font-semibold whitespace-nowrap"
          class:font-semibold={active === link}
          on:click={() => { active = link; subMenuOpen = true; }}
        >
          {link}
          {#if active === link}
            <span
              class="absolute left-0 -bottom-1 w-full border-b-2 border-[#7FC8CB]"
            ></span>
          {/if}
        </button>

		{#if subMenuOpen && active === link}
        	<div
			class="submenu-flip absolute top-full left-1/2 -translate-x-1/2 mt-6 bg-gray-100 shadow-lg rounded-md p-2 min-w-[200px] z-50"
			>
          {#each getSubMenuItems(link as keyof typeof menuData) as item}
		  	{@const category = link as keyof typeof menuData}
  			{@const url = menuData[category][item as keyof typeof menuData[typeof category]]}
            <a 
              href={url}
              class="submenu-item block py-2 rounded-md px-4 hover:bg-[#7FC8CD] text-[#05266A] whitespace-nowrap"
			  on:click={(e) => {
				e.preventDefault();
				e.stopPropagation(); 
				goto(url); 
				}}
            >
              {item}
            </a> 
          {/each}
        </div>
		{/if}
		</div>
      {/each}
    </div>

    <div class="flex items-center gap-[clamp(0.5rem, 2vw, 2rem)] ml-1 lg:ml-0">
      <a
        href="."
        class="text-[12px] lg:text-[17px] xl:text-[20px] text-[#05266A] mr-3 py-2 px-4 lg:px-10 lg:py-4 lg:py-4 bg-[#7FC8CB] rounded-full hover:bg-[#05266A] hover:text-[#7FC8CB] transition-all duration-400 ease-in-out whitespace-nowrap min-w-fit"
        >Get in touch</a
      >

      <!-- Language switch + popup -->
      <div class="relative flex-shrink-0">
        <button
          type="button"
          class="bg-[#05266A] p-1.5 lg:p-2.5 rounded-full cursor-pointer hover:bg-[#7FC8CB] transition-all min-w-fit"
          on:click={() => (languagePopUpOpen = !languagePopUpOpen)}
        >
          <img
            src="/lang-switch-btn.png"
            alt="Language switch"
            class="h-6 lg:h-8 w-auto"
          />
        </button>

        {#if languagePopUpOpen}
          <div
		   use:clickOutside
            class="submenu-flip absolute top-full right-0 mt-6 w-32 bg-gray-100 shadow-xl rounded-lg border-0 p-2 z-[60]"
          >
            <LanguagePopUp 
			on:close={() => (languagePopUpOpen = false)} 
			/>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <div class="md:hidden flex-shrink-0">
    <button
      on:click={() => (menuOpen = !menuOpen)}
      class="rounded-full bg-transparent text-[#05266A] text-2xl sm:text-3xl p-2 min-w-fit"
    >
      ☰
    </button>
  </div>
</div>

<!-- Mobile menu -->
{#if menuOpen}
  <div
  use:clickOutsideMobile
  class="fixed z-[9999] text-center top-16 sm:top-20 left-0 right-0 w-full bg-white text-[#05266A] p-5 md:px-8 overflow-y-auto shadow-md">
    {#each links as link}
      <div class="mb-2">
        <button
          class="block text-lg w-full font-medium hover:text-[#7FC8CB]"
          	on:click={() => {
    			toggleSubMenu(link);
			}}
        >
		  {link + " " + String.fromCharCode(active === link ? 0x25B4 : 0x25BE)}
        </button>

        {#if subMenuOpen && active === link}
          <div class="submenu-fade-slide mt-2 bg-gray-100 rounded-md p-2 mx-auto max-w-[300px]">
            {#each getSubMenuItems(link as keyof typeof menuData) as item}
		  	{@const category = link as keyof typeof menuData}
  			{@const url = menuData[category][item as keyof typeof menuData[typeof category]]}
            <a 
              href={url}
              class="submenu-item block py-2 rounded-md px-4 hover:bg-[#7FC8CD] text-[#05266A] whitespace-nowrap"
			  on:click={(e) => {
				e.preventDefault();
				menuOpen = false;
				subMenuOpen = false;
				active = ""; 
				goto(url); 
				}}
            >
              {item}
            </a> 
          {/each}
          </div>
        {/if}
      </div>
    {/each}

    <a
      href="."
      class="block text-lg font-medium px-4 mb-3 py-2 bg-[#7FC8CB] rounded-lg hover:bg-[#05266A] hover:text-[#7FC8CB] transition"
      on:click={() => (menuOpen = false)}
    >
      Get in touch
    </a>
    <div class="relative inline-block">
  <button
    type="button"
    class="bg-[#05266A] p-3 rounded-full cursor-pointer hover:bg-[#7FC8CB] transition-all"
    on:click={() => (languagePopUpOpen = !languagePopUpOpen)}
  >
    <img
      src="/lang-switch-btn.png"
      alt="Language switch"
      class="h-8 w-auto"
    />
  </button>
  
  {#if languagePopUpOpen}
    <div
  class="relative mt-2 w-[300px] bg-gray-100 rounded-lg border-0 p-2 mx-auto
         before:content-[''] before:absolute before:bottom-full before:left-1/2 
         before:-translate-x-1/2 before:border-8 before:border-transparent 
         before:border-b-gray-100 before:pt-6"
>
  <LanguagePopUp on:close={() => (languagePopUpOpen = false)} />
</div>
  {/if}
</div>
  </div>
{/if}


<style>

  /* Option 4: Flip Down */
  .submenu-flip {
    animation: flipDown 0.4s ease-out;
    transform-origin: top center;
  }

  @keyframes flipDown {
    from {
      opacity: 0;
      transform: rotateX(-90deg);
    }
    to {
      opacity: 1;
      transform: rotateX(0);
    }
  }

  /* Stagger animation for menu items */
  .submenu-item {
    animation: itemFadeIn 0.2s ease-out backwards;
  }

  .submenu-item:nth-child(1) { animation-delay: 0.1s; }
  .submenu-item:nth-child(2) { animation-delay: 0.3s; }
  .submenu-item:nth-child(3) { animation-delay: 0.5s; }

  @keyframes itemFadeIn {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>