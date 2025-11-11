<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import checkmark from '$lib/assets/checkmark.png';
    import futudrawSchema from '$lib/assets/products/futudraw/futudraw-schema.jpg';

</script>

<div class="flex flex-col justify-between md:mt-[15vh]">
    <div class="flex flex-col justify-evenly w-full lg:pl-0 m-4 mb-20 md:flex-row">
        <div class="w-full text-[var(--dark-blue)] pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem]">
                <b>Why FutuDraw?</b>
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center xl:items-start text-[var(--dark-blue)] xl:flex-row gap-[3vw]">
        <div class="text-[20px] w-5/6 xl:w-2/6">
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>AI-Powered Precision:</b> Equipped with an AI module that interprets PDF-format schematics with an industry-leading 95% precision (vs. 70% industry average).
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>Unmatched Efficiency:</b> Increases productivity by more than 20x, freeing engineers from repetitive, time-consuming tasks.
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>Seamless Integration:</b> Supports multiple file formats including DXF, DWG, PDF, and SVG, with additional support via converters.
                </p>
            </div>
        </div>
        <div class="text-[20px] w-5/6 xl:w-2/6">
            <p class="mb-8">
                <b>Use Cases Across Industries</b>
            </p>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>HVAC and ventilation systems:</b> Automatically design and configure complete heating, cooling, and ventilation systems based on project data such as building location, size, air flow, and occupancy. FutuDraw generates precise system diagrams, component lists, and installation documentation — all with minimal manual effort.
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>Shipbuilding:</b> Create detailed electrical, wiring, and signal cable diagrams tailored to each vessel’s specifications. FutuDraw enables quick modifications and seamless integration with existing engineering workflows, reducing design time and human error.
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>Contract Manufacturing and Metal Industry:</b> Automatically generate Bills of Materials (BOMs) from PDFs, Excel files, and ERP data. FutuDraw helps manufacturers eliminate repetitive manual tasks, save engineering time, and accelerate production planning.
                </p>
            </div>
        </div>
    </div>
    <div class="flex justify-center m-15">
        <img 
        src={futudrawSchema} 
        alt="Futudraw Schema"
        >
    </div>
</div>