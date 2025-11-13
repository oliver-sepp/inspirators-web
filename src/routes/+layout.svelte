<script lang="ts">
	import favicon from '$lib/assets/favicon-32x32.png';
	import NavBar from '$lib/components/shared/NavBar.svelte';
	import Footer from '$lib/components/shared/Footer.svelte';
	import BottomLayer from '$lib/components/BottomLayer.svelte';
	import { page } from '$app/stores';
	import '../style.css';
	
	let { children } = $props();

	const excludedPaths = ['/products/futudraw', '/products/effectino'];

	const currentPath = $derived($page.url.pathname || '/');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

{#if !excludedPaths.includes(currentPath)}
	<BottomLayer />	
{/if}

<main>
	{@render children?.()}
</main>

<Footer />
