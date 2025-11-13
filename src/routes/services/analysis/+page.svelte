<script lang="ts">
    import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
    import AnalysisHeader from '$lib/components/services/analysis/AnalysisHeader.svelte';
    import AnalysisContent1 from '$lib/components/services/analysis/AnalysisContent1.svelte';
    import AnalysisContent2 from '$lib/components/services/analysis/AnalysisContent2.svelte';
</script>

<svelte:head>
    <title>Services | AI-assisted analysis | Inspirators!</title>
    <meta name="description" content="" />
</svelte:head>

<div class=" min-h-screen w-full">
    
    <VectorLayer />
    <AnalysisHeader />

    <main class="w-full">
        <AnalysisContent1 />
        <AnalysisContent2 />
    </main>

</div>

