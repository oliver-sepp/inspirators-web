<script lang="ts">
import VectorLayer from "$lib/components/shared/VectorLayer.svelte";
import MLHeader from "$lib/components/services/machine-learning/ML-Header.svelte";
import MLIntro from "$lib/components/services/machine-learning/ML-Intro.svelte";
import MLPredictions from "$lib/components/services/machine-learning/ML-Predictions.svelte";
import MLDashboard from "$lib/components/services/machine-learning/ML-Dashboard.svelte";
import MLExcel from "$lib/components/services/machine-learning/ML-Excel.svelte";
import MLDataMesh from "$lib/components/services/machine-learning/ML-DataMesh.svelte";
import MLDatabricks from "$lib/components/services/machine-learning/ML-Databricks.svelte";
  import MLServices from "$lib/components/services/machine-learning/ML-Services.svelte";
</script>


<div class="min-h-screen w-full">
    <MLHeader />
    <VectorLayer />


    <main class="w-full">
        <MLIntro />
        <MLServices />
        <MLPredictions />
        <MLDashboard />
        <MLExcel />
        <MLDataMesh />
        <MLDatabricks />
    </main>

</div>