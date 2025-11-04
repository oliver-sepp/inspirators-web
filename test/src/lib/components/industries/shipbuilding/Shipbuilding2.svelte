<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number02 from '$lib/assets/02.png';
    import checkmark from '$lib/assets/checkmark.png';
    import shipSchema from '$lib/assets/industries/shipbuilding/ship-diagram.png';
    import ship3D from '$lib/assets/industries/shipbuilding/ship3D.png';

</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                2D layout to 3D environment with the help of AI
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-[1000px]:items-start md:gap-[10vw] text-[#05266A] min-[1000px]:flex-row gap-[5vw]">
        
        <div class="w-1/1 order-2 min-[1000px]:order-1 flex flex-col justify-center items-center lg:items-start gap-4 md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={shipSchema} 
            alt=""
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg">
            <img 
            src={ship3D} 
            alt=""
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg">
        </div>

        <div class="flex flex-col min-[1000px]:order-2 space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p class="text-[22px]">
                <b>
                From 2D Layouts to 3D Environments with AI
                </b>
            </p>
            <p >
                <b>
                    Challenge:
                </b>
            </p>
            <p>
                Shipyards and their partners often share only <b>2D diagrams</b>, making it difficult to visualize and coordinate designs without access to full 3D models.
            </p>
            <p>
                <b>
                    Solution:
                </b>
            </p>
            <p>
                Using <b>AI-assisted engineering tools</b> and deep technical expertise, Inspirators! transforms <b>2D schematics into fully detailed 3D models</b> — quickly and accurately.<br> What used to take <b>days</b> can now be achieved in <b>hours per schematic</b>.
            </p>
            <p>
                The resulting <b>3D environment</b> is accessible through a <b>web-based application</b> and can be <b>integrated with third-party systems</b> for further engineering, collaboration, or production use.
            </p>
            <p>
                <b>
                    Outcome:
                </b>
            </p>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    
                    A <b>3D, virtual reality–like environment</b> accurately mirroring the original 2D layout
                    
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Enhanced visualization and collaboration for design and review
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    3D model ready to be used as an <b>input for digital twin solutions</b>
                </p>
            </div>
        </div>
        
    </div>
</div>