<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number04 from '$lib/assets/04.png';
    import img2021 from '$lib/assets/story/2021-image.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                In 2021
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number04} alt="04" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center m-4 items-center min-[1000px]:items-start gap-[5vw] text-[#05266A] min-[1000px]:flex-row md:gap-[10vw]">
        
        <div 
            class="w-1/1 order-2 min-[1000px]:order-1 flex justify-center md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
                src={img2021} 
                alt="2021"
                class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg"
                >
        </div>
        
        <div class="flex flex-col order-1 min-[1000px]:order-2 space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                In 2021, Inspirators! was founded as a tech company with a mission to provide smart and competitive solutions to industries. Our co-founders, Kristi and Allar, brought their extensive experience in IT licensing and services as well as building industrial, financial, and CAD solutions to establish a company that delivers high value to our customers.
            </p>
            <p>
                Although we received interest from investors, we decided to finance our startup from our own capital, and have since taken a practical approach in providing services and developing products that meet the needs of our customers. As a result, we have successfully launched two main products: FutuDraw, a CAD automation tool with hundreds of users, and Effectino, a factory management app used by the largest factories in the region.
            </p>
            
        </div>
    </div>
</div>