<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number02 from '$lib/assets/02.png';
    import AHK from '$lib/assets/pmain/member/member-image2.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                AHK
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-start gap-[10vw] text-[var(--dark-blue)] md:flex-row gap-[5vw]">
        
        <div class="flex order-1 min-[1000px]:order-2 flex-col space-y-4 mx-10 w-5/6 text-[20px] md:w-1/6 lg:w-2/7">
            <p>
                Inspirators! is a member of the German-Baltic Chamber of Commerce in Estonia, Latvia, Lithuania (AHK). The AHK represents around 460 member companies in German-Baltic trade relations, providing them with the following services: business-to-business contacts as well as assisting them with its services.
            </p>
        </div>

        <div class="w-1/1 flex order-2 min-[1000px]:order-1 justify-center md:w-1/6 lg:w-2/7 overflow-hidden">
            <img 
            src={AHK}
            alt="AHK"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>