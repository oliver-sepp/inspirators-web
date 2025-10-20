<script lang="ts">
import TeamHeader from '$lib/components/about/team/TeamHeader.svelte';
import TeamContent from '$lib/components/about/team/TeamContent.svelte';
import VectorLayer from '$lib/components/VectorLayer.svelte';
</script>

<div class="min-h-screen w-full">

<VectorLayer />
<TeamHeader />

    <main class="w-full">
        <TeamContent />
    </main>
</div>