<script lang="ts">
  // Import all SVG files dynamically from the folder
  const vectorModules = import.meta.glob('$lib/assets/vectors/*.svg', { eager: true });
import newVector from '$lib/assets/new_vectors/final.svg';
  // Extract URLs from the imported modules
  const vectors = Object.values(vectorModules).map((mod: any) => mod.default);
</script>

<div class="relative w-full h-screen bg-transparent">
  
  <img class="opacity-90" src={newVector} alt="">
  
  <!-- {#each vectors as vector}
    <img
      src={vector}
      alt="Vector"
      class="absolute inset-0 w-full max-h-[150vh] opacity-15"
    />
  {/each} -->
</div>
