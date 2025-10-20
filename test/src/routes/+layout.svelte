<script lang="ts">
	import favicon from '$lib/assets/favicon-32x32.png';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BottomLayer from '$lib/components/BottomLayer.svelte';
	import { page } from '$app/stores';


	let { children } = $props();

	const excludedPaths = [	'/products/futudraw', '/products/effectino',];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />
{#if !excludedPaths.includes($page.url.pathname)}
<BottomLayer />	
{/if}



<main>
	{@render children?.()}
</main>


<Footer />