<script lang="ts">
import PartnersHeader from '$lib/components/partners/partners/PartnersHeader.svelte';
import PartnersContent1 from '$lib/components/partners/partners/PartnersContent1.svelte';
import PartnersContent2 from '$lib/components/partners/partners/PartnersContent2.svelte';
import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
</script>

<PartnersHeader />
<VectorLayer />

<main class="w-full">
    <PartnersContent1 />
    <PartnersContent2 />
</main>