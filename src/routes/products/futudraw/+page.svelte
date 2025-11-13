<script lang="ts">
import FutudrawHeader from '$lib/components/products/futudraw/FutudrawHeader.svelte';
import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
import FutudrawBottomLayer from '$lib/components/products/futudraw/FutudrawBottomLayer.svelte';
import FutudrawIntro from '$lib/components/products/futudraw/FutudrawIntro.svelte';
import WhyFutudraw from '$lib/components/products/futudraw/WhyFutudraw.svelte';
import FutudrawBenefits from '$lib/components/products/futudraw/FutudrawBenefits.svelte';
import FutudrawOnboarding from '$lib/components/products/futudraw/FutudrawOnboarding.svelte';
import FutudrawUseCases from '$lib/components/products/futudraw/FutudrawUseCases.svelte';
import FutudrawFAQ from '$lib/components/products/futudraw/FutudrawFAQ.svelte';
import FutudrawBOM from '$lib/components/products/futudraw/FutudrawBOM.svelte';
</script>

<svelte:head>
    <title>Products | Futudraw | Inspirators!</title>
    <meta name="description" content="" />
</svelte:head>

<div class="min-h-screen w-full">
    
    <FutudrawBottomLayer />
    <VectorLayer />
    <FutudrawHeader />

    <main class="w-full">
        <FutudrawIntro />
        <WhyFutudraw />
        <FutudrawBOM />
        <FutudrawBenefits />
        <FutudrawOnboarding />
        <FutudrawUseCases />
        <FutudrawFAQ />
    </main>

</div>


