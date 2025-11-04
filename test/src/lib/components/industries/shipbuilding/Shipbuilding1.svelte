<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import checkmark from '$lib/assets/checkmark.png';
    import diagram from '$lib/assets/industries/shipbuilding/diagram.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Automating Electrical Diagram Updates in Shipbuilding
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-[1000px]:items-start md:gap-[10vw] text-[#05266A] min-[1000px]:flex-row gap-[5vw]">
        
        <div class="flex flex-col space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                In the final phase of shipbuilding, engineers often face the challenge of reviewing and updating hundreds of pages of electrical diagrams in PDF format — a process that is time-consuming and prone to human error.
            </p>
            <p>
                FutuDraw solved this by using AI to convert diagrams — including geometry, symbols, and technical features — into structured data. <br> The FutuDraw engine then analyzes this data and instantly generates updated versions of the diagrams, allowing engineers to review, modify, and recreate documentation in moments.
            </p>
            <p>
                <b>Outcome:</b>
            </p>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        95% of components were made machine-readable and interpretable
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Significant reduction in manual editing time
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Faster and more reliable final documentation before delivery
                    </b>
                </p>
            </div>
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={diagram}
            alt="Effectino"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>