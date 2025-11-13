<script lang="ts">
import BuildingHeader from "$lib/components/industries/building/BuildingHeader.svelte";
import BuildingAlpha from "$lib/components/industries/building/BuildingAlpha.svelte";
import VectorLayer from "$lib/components/shared/VectorLayer.svelte";
import BuildingPrimo from "$lib/components/industries/building/BuildingPrimo.svelte";
import BuildingETSNord from "$lib/components/industries/building/BuildingETSNord.svelte";
</script>

<svelte:head>
    <title>Industries | Building | Inspirators!</title>
    <meta name="description" content="" />
</svelte:head>

<div class="min-h-screen w-full">
    <BuildingHeader />
    <VectorLayer />


    <main class="w-full">
        <BuildingETSNord />
        <BuildingAlpha />
        <BuildingPrimo />        
    </main>

</div>