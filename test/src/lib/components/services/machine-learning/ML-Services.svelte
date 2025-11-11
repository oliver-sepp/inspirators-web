<script lang="ts">
    import prediction from '$lib/assets/products/effectino/bar_chart_light.svg';
    import dashboard from '$lib/assets/products/effectino/monitoring_light.svg';
    import excel from '$lib/assets/services/machine-learning/excel.svg';
    import dataMesh from '$lib/assets/services/machine-learning/data-mesh.svg';
    import databricks from '$lib/assets/services/machine-learning/db-icon.svg';
</script>

<div class="flex flex-col justify-between mt-[10vh] md:mt-[15vh]">
    <div class="flex flex-row justify-center align-center w-full mb-20">
        <div class="w-full text-[var(--dark-blue)] mx-3 pb-14 relative md:w-3/5 xl:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] w-full text-center">
                <b>Our services</b>
            </h1>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 border-b-4 border-[var(--light-blue)]"></span>
        </div>

    </div>
    <div class="w-full flex flex-wrap justify-center gap-6 mb-20 px-4">
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={prediction} alt="bar chart" class="min-w-[100px]">

        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Real-Time Data Analytics & Predictions</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={dashboard} alt="dashboard" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Intuitive Dashboards</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={excel} alt="excel" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Excel Replacement</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={dataMesh} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Data Mesh</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={databricks} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Databricks Technology</b>
        </h1>
    </div>
</div>

</div>