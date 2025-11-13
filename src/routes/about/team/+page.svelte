<script lang="ts">
import TeamHeader from '$lib/components/about/team/TeamHeader.svelte';
import TeamContent from '$lib/components/about/team/TeamContent.svelte';
import VectorLayer from '$lib/components/shared/VectorLayer.svelte';
</script>

<svelte:head>
	<title>About | Team | Inspirators!</title>
	<meta name="description" content="" />
</svelte:head>

<div class="min-h-screen w-full">

<VectorLayer />
<TeamHeader />

    <main class="w-full">
        <TeamContent />
    </main>
</div>