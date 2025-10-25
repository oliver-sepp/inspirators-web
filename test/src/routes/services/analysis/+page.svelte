<script lang="ts">
    import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
    import AnalysisHeader from '$lib/components/services/analysis/AnalysisHeader.svelte';
    import AnalysisContent1 from '$lib/components/services/analysis/AnalysisContent1.svelte';
    import AnalysisContent2 from '$lib/components/services/analysis/AnalysisContent2.svelte';
</script>


<div class=" min-h-screen w-full">
    
    <VectorLayer />
    <AnalysisHeader />

    <main class="w-full">
        <AnalysisContent1 />
        <AnalysisContent2 />
    </main>

</div>

