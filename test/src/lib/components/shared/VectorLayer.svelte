<script lang="ts">
  // Import all SVG files dynamically from the folder
  const vectorModules = import.meta.glob('$lib/assets/vectors/*.svg', { eager: true });

  // Extract URLs from the imported modules
  const vectors = Object.values(vectorModules).map((mod: any) => mod.default);
</script>

<div class="relative w-full h-screen bg-transparent">
  {#each vectors as vector}
    <img
      src={vector}
      alt="Vector"
      class="absolute inset-0 w-full max-h-[150vh] opacity-8"
    />
  {/each}
</div>
