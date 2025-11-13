<script lang="ts">
import MemberHeader from '$lib/components/partners/member/MemberHeader.svelte';
import MemberContent1 from '$lib/components/partners/member/MemberContent1.svelte';
import MemberContent2 from '$lib/components/partners/member/MemberContent2.svelte';
import VectorLayer from '$lib/components/shared/VectorLayer.svelte';

</script>

<MemberHeader />
<VectorLayer />

<main class="w-full">
    <MemberContent1 />
    <MemberContent2 />
</main>