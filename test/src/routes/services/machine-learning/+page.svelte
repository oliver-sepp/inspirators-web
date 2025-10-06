<script lang="ts">
    import BottomLayer from '$lib/components/BottomLayer.svelte';
    import VectorLayer from '$lib/components/VectorLayer.svelte';
    import TopLayer from '$lib/components/TopLayer.svelte';
    import MainContent_1 from '$lib/components/ContentSection-1.svelte';
    import MainContent_2 from '$lib/components/ContentSection-2.svelte';
</script>


<div class=" min-h-screen w-full">
    
    <BottomLayer />
    <VectorLayer />
    <TopLayer />

    <main class="w-full">
        <MainContent_1 />
        <MainContent_2 />
    </main>

</div>

