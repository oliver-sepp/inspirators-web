<script lang="ts">
import Content2021 from '$lib/components/story/2021.svelte';
import Content2022 from '$lib/components/story/2022.svelte';
import Content2023 from '$lib/components/story/2023.svelte';
import Content2024 from '$lib/components/story/2024.svelte';
import StoryHeader from '$lib/components/story/StoryHeader.svelte';

</script>

<StoryHeader />

<main class="w-full">
    <Content2024 />
    <Content2023 />
    <Content2022 />
    <Content2021 />
</main>

