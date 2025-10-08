<script lang="ts">
	import favicon from '$lib/assets/favicon-32x32.png';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BottomLayer from '$lib/components/BottomLayer.svelte';


	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />
<BottomLayer />


<main>
	{@render children?.()}
</main>


<Footer />