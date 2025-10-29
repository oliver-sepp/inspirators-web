<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number02 from '$lib/assets/02.png';
    import checkmark from '$lib/assets/checkmark.png';
    import CraackInducer from '$lib/assets/building/building-2.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Automatic Crack Inducer calculation tool for Primostar
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-[1000px]:items-start md:gap-[10vw] text-[#05266A] min-[1000px]:flex-row gap-[5vw]">
        

        <div class="w-1/1 order-2 min-[1000px]: order-1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={CraackInducer} 
            alt="Crack Inducer"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>

        <div class="flex min-[1000px]:order-2 flex-col space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Professional; quick and easy for marketing and fieldwork
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Automatically calculates and locates the Crack Inducer for concrete work
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        3D views maximise clarity
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Concrete workers make precise calculations using the automatic tool
                    </b>
                </p>
            </div>
        </div>

        
        
    </div>
</div>