<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import checkmark from '$lib/assets/checkmark.png';
    import EGImage from '$lib/assets/industries/energy/energy-1.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Near real-time analytics solution for Elenger AS
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-[1000px]:items-start md:gap-[10vw] text-[var(--dark-blue)] min-[1000px]:flex-row gap-[5vw]">
        
        <div class="flex flex-col space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                Elenger AS, a leading energy solutions provider and one of the region’s major players in the gas sector, needed a reliable and automated way to collect and analyse operational data to enable smarter, faster decision-making. Inspirators! delivered a near real-time analytics solution that operates 24/7, transforming a previously manual and time-consuming process into a fully automated and highly scalable system.
            </p>
            <p>
                With this new platform, relevant data update speed increased by 1,000%, giving Elenger’s business and IT teams actionable insights and a stronger foundation for strategic and operational decisions.
            </p>
            <p>
                <b>Technologies used:</b>
            </p>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Microsoft Azure
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Databricks
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Modern data engineering and analytics tooling (full automation)
                    </b>
                </p>
            </div>
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={EGImage} 
            alt=""
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>