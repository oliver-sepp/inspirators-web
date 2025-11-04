<script lang="ts">
    import humanoidRobot from '$lib/assets/humanoid-robot.png';
</script>

<div class="absolute inset-0 z-20 flex flex-col md:flex-row justify-center md:w-8/10 items-center m-auto gap-8 md:gap-[25vh] py-[5vh] md:py-[10vh] lg:py-[20vh]">

    <div class="flex flex-col text-center md:text-left space-y-2 order-2 md:order-1">
        <h1 class="text-[3rem] text-[var(--dark-blue)] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
            AI and machine learning
        </h1>
        <p class="text-[1.7rem] text-[var(--dark-blue)] w-full md:w-1/2 text-wrap">
            Making sense of data
        </p>
    </div>
    <div class="w-4/5 order-1 md:order-2 md:w-3/5 max-h-full">
        <img src={humanoidRobot} alt="Humanoid robot" class="w-full h-full object-contain max-h-[50vh] md:max-h-[70vh] lg:max-h-[80vh]">
    </div>
</div>
