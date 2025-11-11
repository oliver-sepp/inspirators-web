<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import values1 from '$lib/assets/about/values/values-image1.jpg';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3.5rem] lg:text-[3rem]">
                We create products people love to use
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center m-4 items-center min-[1000px]:items-start gap-[5vw] text-[var(--dark-blue)] min-[1000px]:flex-row md:gap-[10vw]">
        
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                We are committed to creating software that people love to use. To achieve this, we go the extra mile to understand our customers' needs and preferences. We visit their sites and factories to see how our software is being used and to speak directly with end-users. By doing so, we are able to design and create products that are tailored to our customers' unique requirements.
            </p>
            <p>
                Our ultimate goal is to make our software as user-friendly as possible. We understand that people use our products all day, so it is crucial that they enjoy working with them. To achieve this, we design our work processes to be seamlessly integrated with existing ERPs or other production systems. We also strive to minimize the amount of work required of users, often requiring only 1 or 2 inputs per day.
            </p>
            
        </div>

        <div 
            class="w-1/1 order-2 min-[1000px]:order-1 flex justify-center md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
                src={values1} 
                alt="Testing"
                class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg"
                >
        </div>
        
    </div>
</div>