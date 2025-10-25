<script lang="ts">
    import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
    import TopLayer from '$lib/components/TopLayer.svelte';
    import MainContent_1 from '$lib/components/ContentSection-1.svelte';
    import MainContent_2 from '$lib/components/ContentSection-2.svelte';

	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		goto('/products/futudraw');
	});

</script>


<div class="min-h-screen w-full">
    
    <VectorLayer />
    <TopLayer />

    <main class="w-full">
        <MainContent_1 />
        <MainContent_2 />
    </main>

</div>

