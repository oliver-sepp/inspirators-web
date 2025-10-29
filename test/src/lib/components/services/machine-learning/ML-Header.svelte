<script lang="ts">
    import humanoidRobot from '$lib/assets/humanoid-robot.png';
</script>

<div class="absolute inset-0 z-20 flex w-9/10 flex-col md:flex-row justify-center items-center pl-[10vw] md:gap-[25vh] py-[5vh] md:py-[10vh] lg:py-[25vh]">

    <div class="flex flex-col space-y-2 order-2 md:order-1 whitespace-nowrap text-center md:text-left">
        <h1 class="m-0 text-[3rem] text-[var(--dark-blue)] md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
            AI and <br> machine learning
        </h1>
        <p class="text-[1.7rem] text-[var(--dark-blue)] w-full md:w-1/2 text-wrap">
            Making sense of data
        </p>
    </div>
    <div class="w-4/5 order-1 md:order-2 md:w-3/5 max-h-full">
        <img src={humanoidRobot} alt="Effectino" class="w-full object-contain max-h-[50vh] md:max-h-[70vh] lg:max-h-[70vh]">
    </div>
</div>