<script lang="ts">
import ProductionHeader from "$lib/components/industries/production/ProductionHeader.svelte";
import VectorLayer from "$lib/components/shared/VectorLayer.svelte";
import ProductionContent1 from "$lib/components/industries/production/ProductionContent1.svelte";
import ProductionContent2 from "$lib/components/industries/production/ProductionContent2.svelte";
</script>


<div class="min-h-screen w-full">
    <ProductionHeader />
    <VectorLayer />


    <main class="w-full">
        <ProductionContent1 />
        <ProductionContent2 />
    </main>

</div>