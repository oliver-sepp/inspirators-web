<script lang="ts">
import BuildingHeader from "$lib/components/industries/building/BuildingHeader.svelte";
import BuildingContent1 from "$lib/components/industries/building/BuildingContent1.svelte";
import VectorLayer from "$lib/components/VectorLayer.svelte";
import BuildingContent2 from "$lib/components/industries/building/BuildingContent2.svelte";

</script>


<div class="min-h-screen w-full">
    <BuildingHeader />
    <VectorLayer />


    <main class="w-full">
        <BuildingContent1 />
        <BuildingContent2 />        
    </main>

</div>