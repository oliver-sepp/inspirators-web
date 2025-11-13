<script lang="ts">
import VectorLayer from "$lib/components/shared/VectorLayer.svelte";
import CustomHeader from "$lib/components/services/custom/CustomHeader.svelte";
import CustomContent1 from "$lib/components/services/custom/CustomContent1.svelte";
import CustomContent2 from "$lib/components/services/custom/CustomContent2.svelte";
import CustomCycle from "$lib/components/services/custom/CustomCycle.svelte";
</script>

<svelte:head>
    <title>Services | Custom software | Inspirators!</title>
    <meta name="description" content="" />
</svelte:head>

<div class="min-h-screen w-full">
    <CustomHeader />
    <VectorLayer />


    <main class="w-full">
        <CustomContent1 />
        <CustomContent2 />
        <CustomCycle />
    </main>

</div>