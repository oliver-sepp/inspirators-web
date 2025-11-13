<script lang="ts">
import RepresentHeader from '$lib/components/partners/represent/RepresentHeader.svelte';
import RepresentContent from '$lib/components/partners/represent/RepresentContent.svelte';
import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
</script>

<svelte:head>
    <title>Partners | We represent | Inspirators!</title>
    <meta name="description" content="" />
</svelte:head>

<RepresentHeader />
<VectorLayer />

<main class="w-full">
    <RepresentContent />
</main>