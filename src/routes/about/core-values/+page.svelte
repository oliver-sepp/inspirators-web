<script lang="ts">
import ValuesHeader from '$lib/components/about/core-values/ValuesHeader.svelte';
import ValuesContent1 from '$lib/components/about/core-values/ValuesContent1.svelte';
import ValuesContent2 from '$lib/components/about/core-values/ValuesContent2.svelte';
import ValuesContent3 from '$lib/components/about/core-values/ValuesContent3.svelte';
import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
</script>

<div class=" min-h-screen w-full">

<VectorLayer />
<ValuesHeader />

<main class="w-full">
    <ValuesContent1 />
    <ValuesContent2 />
    <ValuesContent3 />
</main>
</div>