<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import DataBricks from '$lib/assets/pmain/partners/partners-image1.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Partners globally
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center gap-[10vw] text-[#05266A] md:flex-row gap-[5vw]">
        
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[20px] md:w-1/6 lg:w-2/7">
            <p>
                We at Inspirators! are proud to belong to Databricks Consulting and Integration Partners community. Please find us here: 
                <a class="underline break-words" href="https://www.databricks.com/company/partners/consulting-and-si/">
                    https://www.databricks.com/company/partners/consulting-and-si/
                </a>
            </p>
            <p>
                Inspirators! is an engaged Consulting and System Integration partner with Databricks, actively collaborating to bring advanced solutions to clients in Northern Europe and Germany. We leverage Databricks Lakehouse technology, a proven, scalable, and user-friendly technology, to craft our machine learning solutions. Designed for data analysts, it seamlessly integrates with your existing systems, making the implementation of our solutions effortless.
            </p>
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={DataBricks} 
            alt="Databricks"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg">
        </div>
        
    </div>
</div>