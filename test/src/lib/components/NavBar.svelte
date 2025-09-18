<script lang="ts">
  import { onMount } from "svelte";
  import LanguagePopUp from "./LanguagePopUp.svelte";

  let active = "";
  const links = ["Products", "Services", "Industries", "Partners", "About"];
  let scrolled = false;
  let languagePopUpOpen = false;
  let menuOpen = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<div
  id="navigation"
  class="fixed top-0 bg-transparent flex items-center justify-between px-4 sm:px-8 lg:px-12 z-[50] py-4 sm:py-6 lg:py-10 pb-3 sm:pb-4 lg:pb-6 w-full min-w-fit"
  class:bg-transparent={!scrolled}
  class:bg-white={scrolled}
  style="min-height: 60px;"
>
  <div class="flex-shrink-0">
    <a href="." on:click={() => (active = "")}>
      <img src="/logo.png" alt="Inspirators Logo" class="h-8 sm:h-10 lg:h-12 w-auto" />
    </a>
  </div>

  <div class="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0">
    <div class="text-sm lg:text-[19px] flex gap-1 lg:gap-4 items-center">
      {#each links as link}
        <a
          href="."
          class="relative min-w-fit px-2 lg:px-0 lg:w-[100px] text-center transition-all duration-300 ease-in-out
            text-[#05266A] font-normal hover:font-semibold hover:scale-105 whitespace-nowrap"
          class:font-semibold={active === link}
          on:click={() => (active = link)}
        >
          {link}
          {#if active === link}
            <span
              class="absolute left-0 -bottom-1 w-full border-b-2 border-[#7FC8CB]"
            ></span>
          {/if}
        </a>
      {/each}
    </div>

    <div class="flex items-center gap-2 lg:gap-6 ml-2 lg:ml-0">
      <a
        href="."
        class="text-sm lg:text-[19px] text-[#05266A] px-8 lg:px-14 py-4 lg:py-4 bg-[#7FC8CB] rounded-full hover:bg-[#05266A] hover:text-[#7FC8CB] transition-all duration-400 ease-in-out whitespace-nowrap min-w-fit"
        >Get in touch</a
      >

      <!-- Language switch + popup -->
      <div class="relative flex-shrink-0">
        <button
          type="button"
          class="bg-[#05266A] p-2 lg:p-3 rounded-full cursor-pointer hover:bg-[#7FC8CB] transition-all min-w-fit"
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
            class="absolute top-full right-0 mt-2 w-32 bg-white shadow-xl rounded-lg border-0 p-2 z-[60]"
          >
            <LanguagePopUp on:close={() => (languagePopUpOpen = false)} />
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
  <div class="fixed z-[9999] text-center top-16 sm:top-20 left-0 right-0 w-full bg-white text-[#05266A] p-5 md:px-8 overflow-y-auto shadow-md">
    {#each links as link}
      <a
        href="."
        class="block text-lg font-medium hover:text-[#7FC8CB] mb-2"
        on:click={() => {
          active = link;
          menuOpen = false;
        }}
      >
        {link}
      </a>
    {/each}

    <a
      href="."
      class="block text-lg font-medium px-4 mb-3 py-2 bg-[#7FC8CB] rounded-lg hover:bg-[#05266A] hover:text-[#7FC8CB] transition"
      on:click={() => (menuOpen = false)}
    >
      Get in touch
    </a>
    <button
      type="button"
      class="bg-[#05266A] p-3 rounded-full cursor-pointer hover:bg-[#7FC8CB] transition-all"
      on:click={() => (menuOpen = false)}
    >
      <img
        src="/lang-switch-btn.png"
        alt="Language switch"
        class="h-8 w-auto"
      />
    </button>
  </div>
{/if}