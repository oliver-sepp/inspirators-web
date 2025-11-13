<!-- VideoLayer.svelte -->
<script lang="ts">
  export let videoSrc = '';
  export let isOpen = false;
  export let onClose = () => {};
  
  // Close on Escape key
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      onClose();
    }
  }

</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Backdrop as button -->
    <button
      class="absolute inset-0 bg-black opacity-40 cursor-default"
      on:click={onClose}
      aria-label="Close video overlay"
      type="button"
      tabindex="-1"
    ></button>
    
    <div class="relative w-full max-w-4xl z-10" role="dialog" aria-modal="true">
      <div class="flex flex-row justify-between bg-linear-to-r from-[var(--dark-blue)] to-[var(--light-blue)] text-[var(--theme-white)] w-full p-2 rounded-t-lg items-center">
        <p class="text-2xl pl-2"><b>HVAC video</b></p>
        <button 
        on:click={onClose}
        class="right-0 text-white text-2xl rounded-full px-3 py-2 transition-all duration-300
         hover:bg-white/40 hover:text-black"
        aria-label="Close video"
        type="button"
      >
        ✕
      </button>
      </div>
      
      <div class="relative w-full aspect-video bg-black rounded-b-lg overflow-hidden">
        <iframe
          src={`${videoSrc}?autoplay=1&modestbranding=1&rel=0`}
          class="w-full h-full"
          title="YouTube video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
{/if}