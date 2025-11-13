<script lang="ts">
import arrow from '$lib/assets/arrow-right.png';
import number03 from '$lib/assets/03.png';
import dashboardImage from '$lib/assets/services/machine-learning/ML-3.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Intuitive Dashboards
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
            <img src={number03} alt="03" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-[1000px]:items-start md:gap-[10vw] text-[var(--dark-blue)] min-[1000px]:flex-row gap-[5vw]">
        
        <div class="w-1/1 order-2 min-[1000px]:order-1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={dashboardImage} 
            alt=""
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>

        <div class="flex min-[1000px]:order-2 flex-col space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                Our user-friendly dashboards act as your compass in the complex sea of data. We simplify complexity, presenting information in a visual format that matters.
            </p>
            <p>
                Easily discern whether your service is in the green or red, enabling swift responses to changing market dynamics.
            </p>
        </div>
        
    </div>
</div>