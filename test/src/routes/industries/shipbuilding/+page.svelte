<script lang="ts">
import ShipbuildingHeader from "$lib/components/industries/shipbuilding/ShipbuildingHeader.svelte";
import VectorLayer from "$lib/components/shared/VectorLayer.svelte";
import Shipbuilding1 from "$lib/components/industries/shipbuilding/Shipbuilding1.svelte";
import Shipbuilding2 from "$lib/components/industries/shipbuilding/Shipbuilding2.svelte";
</script>


<div class="min-h-screen w-full">
    <ShipbuildingHeader />
    <VectorLayer />


    <main class="w-full">
        <Shipbuilding1 />
        <Shipbuilding2 />
    </main>

</div>