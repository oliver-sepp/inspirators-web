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
      class="absolute inset-0 bg-black bg-opacity-75 cursor-default"
      on:click={onClose}
      aria-label="Close video overlay"
      type="button"
      tabindex="-1"
    ></button>
    
    <div class="relative w-full max-w-4xl z-10" role="dialog" aria-modal="true">
      <button 
        on:click={onClose}
        class="absolute -top-12 right-0 text-white hover:bg-gray-500 text-2xl rounded-full px-3 py-2"
        aria-label="Close video"
        type="button"
      >
        ✕
      </button>
      
      <div class="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
        <video 
          src={videoSrc}
          controls
          autoplay
          class="w-full h-full"
        >
          <track kind="captions" />
          Your browser doesn't support video playback.
        </video>
      </div>
    </div>
  </div>
{/if}