<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import ETSimage from '$lib/assets/industries/building/building-ETS.png';


</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                ETS Nord
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
                <b>
                Automating Kitchen Canopy Design with FutuDraw component
                </b>
            </p>
            <p>
                <b>BLUEPRINTiQ</b>, powered by <b>FutuDraw technology</b>, is an innovative configuration tool developed for <b>ETS NORD</b>, a leading HVAC company. The solution automates the design of <b>UV cleaning systems</b> in professional kitchen ventilation, helping designers quickly configure the most optimal UV setup for commercial kitchen canopies.
            </p>
            <p>
                With <b>automated electrical schematics</b> and intelligent layout generation, BLUEPRINTiQ streamlines the design process — ensuring precision, efficiency, and top-tier quality for demanding environments such as <b>Michelin-starred restaurants</b>.
            </p>
            
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={ETSimage} 
            alt="ETS Nord"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>
