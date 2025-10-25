<script lang="ts">
import EnergyHeader from "$lib/components/industries/energy-util/EnergyHeader.svelte";
import VectorLayer from "$lib/components/shared/VectorLayer.svelte";
import EnergyContent1 from "$lib/components/industries/energy-util/EnergyContent1.svelte";
import EnergyContent2 from "$lib/components/industries/energy-util/EnergyContent2.svelte";
</script>


<div class="min-h-screen w-full">
    <EnergyHeader />
    <VectorLayer />


    <main class="w-full">
        <EnergyContent1 />
        <EnergyContent2 />
    </main>

</div>