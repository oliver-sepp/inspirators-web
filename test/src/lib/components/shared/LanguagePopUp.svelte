<div class="flex flex-col text-[3.5vw] bg-gray-100 text-[var(--dark-blue)] md:text-[1rem]">
  <button class="submenu-item rounded-md p-2 hover:bg-[var(--light-blue)]">English</button>
  <button class="submenu-item rounded-md p-2 hover:bg-[var(--dark-blue)]">Deutsch</button>
</div>

<style>
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