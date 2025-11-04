<script lang="ts">
    import cube from '$lib/assets/products/futudraw/white-hightech-electronic-cube.webp';
</script>

<div class="absolute inset-0 z-20 flex flex-col md:flex-row justify-center items-center md:pl-[10vw] gap-8 md:gap-[25vh] py-[5vh] md:py-[10vh] lg:py-[25vh]">

    <div class="flex flex-col space-y-2 order-2 md:order-1 whitespace-nowrap text-center md:text-left">
        <h1 class="m-0 text-[5vh] text-[var(--dark-blue)] md:text-[3rem] lg:text-[4rem] xl:text-[8rem]">
            Futudraw 
        </h1>
        <p class="text-[24px] text-[var(--dark-blue)] w-9-10 md:w-1/2 text-wrap">
            Software that analyses, designs and renders schematics and technical drawings.
        </p>
    </div>
    <div class="w-4/5 order-1 md:order-2 md:w-3/5 max-h-full">
        <img src={cube} alt="Humanoid robot" class="w-full object-contain max-h-[50vh] md:max-h-[70vh] lg:max-h-[80vh]">
    </div>
</div>