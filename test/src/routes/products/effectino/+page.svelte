<script lang="ts">
import VectorLayer from "$lib/components/shared/VectorLayer.svelte";
import EffectinoHeader from "$lib/components/products/effectino/EffectinoHeader.svelte";
import EffectinoIntro from "$lib/components/products/effectino/EffectinoIntro.svelte";
import EffectinoBenefits from "$lib/components/products/effectino/EffectinoBenefits.svelte";
import EffectinoBottomLayer from "$lib/components/products/effectino/EffectinoBottomLayer.svelte";
import EffectinoLongDesc from "$lib/components/products/effectino/EffectinoLongDesc.svelte";
import EffectinoPricing from "$lib/components/products/effectino/EffectinoPricing.svelte";
import EffectinoFAQ from "$lib/components/products/effectino/EffectinoFAQ.svelte";
import EffectinoComment from "$lib/components/products/effectino/EffectinoComment.svelte";
import EffectinoFlowChart from "$lib/components/products/effectino/EffectinoFlowChart.svelte";
</script>


<div class="min-h-screen w-full">
    <EffectinoBottomLayer />
    <VectorLayer />
    <EffectinoHeader />

    <main class="w-full">
        <EffectinoIntro />
        <EffectinoBenefits />
        <EffectinoLongDesc />
        <EffectinoPricing />
        <EffectinoFlowChart />
        <EffectinoComment />
        <EffectinoFAQ />
    </main>

</div>