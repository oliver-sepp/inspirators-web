<script lang="ts">
import Content2021 from '$lib/components/about/story/2021.svelte';
import Content2022 from '$lib/components/about/story/2022.svelte';
import Content2023 from '$lib/components/about/story/2023.svelte';
import Content2024 from '$lib/components/about/story/2024.svelte';
import StoryHeader from '$lib/components/about/story/StoryHeader.svelte';
import VectorLayer from '$lib/components/VectorLayer.svelte';

</script>

<div class="min-h-screen w-full">


<VectorLayer />
<StoryHeader />

<main class="w-full">
    <Content2024 />
    <Content2023 />
    <Content2022 />
    <Content2021 />
</main>

</div>

