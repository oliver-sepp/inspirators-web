<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number02 from '$lib/assets/02.png';
    import checkmark from '$lib/assets/checkmark.png';
    import futudrawSchema2 from '$lib/assets/products/futudraw/schema2.png';

</script>

<div class="flex flex-col justify-between md:mt-[15vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem]">
                <b>FutuDraw NEW BOM Module</b>
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center text-[var(--dark-blue)] md:flex-row gap-[3vw]">
        <div class="flex flex-col w-3/5 gap-4 text-[20px]">
            <p>
                The BOM Module is one of the core components of FutuDraw, Inspirators!’ AI-enabled engineering suite. It automatically generates Bills of Materials (BOMs) directly from existing documentation such as PDFs, drawings, and Excel files, saving engineers countless hours of manual work and eliminating one of the biggest production bottlenecks.
            </p>
            <p>
                Once the BOM is generated, engineers can review and verify the data before sending it directly to the production or ERP system. This ensures both accuracy and traceability, while significantly accelerating the transition from design to manufacturing.
            </p>
        </div>
    </div>
    <div class="flex justify-center m-15">
        <img 
        class="rounded-lg"
        src={futudrawSchema2} 
        alt="Futudraw Schema"
        >
    </div>
    <div class="flex flex-col justify-center items-center w-full text-[var(--dark-blue)] align-left">
        <div class="text-[20px] w-5/6 ml-10 md:w-4/6">
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>AI interpretation:</b> Reads and interprets <b>PDFs, drawings, and documents</b>, identifying components, materials, and product data.
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>ERP connection:</b> Work tasks and production data are <b>extracted directly from your ERP system</b>, ensuring accuracy and traceability.
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>Automatic generation:</b> Creates a BOM with <b>up to 95% accuracy</b>, leaving only fine adjustments for engineers.
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>Interactive chat:</b> With a <b>built-in chat interface</b>, engineers can <b>ask questions directly about the data</b> extracted from PDFs or the generated BOM — turning static documentation into actionable insight.
                </p>
            </div>
        </div>
    </div>
</div>

<!-- 
 -->