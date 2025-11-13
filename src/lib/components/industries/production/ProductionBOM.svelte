<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import checkmark from '$lib/assets/checkmark.png';
    import productionImage from '$lib/assets/products/futudraw/schema2.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Automating Bill of Materials for Contract Manufacturers
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
                For <b>contract manufacturers and metal industry companies</b>, creating detailed <b>Bills of Materials (BOMs)</b> from PDFs and drawings is often slow and error-prone.
            </p>
            <p>
                With <b>FutuDraw’s AI-powered BOM Module</b>, Inspirators! automates this process — reading and interpreting documents, identifying components and materials, and generating a <b>95% accurate BOM</b> within hours instead of days.
            </p>
            <p>
                The verified BOM can be sent directly to <b>ERP or production systems</b>, ensuring accuracy, traceability, and faster handover from design to manufacturing. An <b>interactive chat</b> lets engineers query extracted data, turning static documentation into actionable insights.
            </p>
            <p><b>Results:</b></p>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Faster production planning, consistent data, and major time savings in engineering workflows.
                    </b>
                </p>
            </div>
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={productionImage}
            alt="BOM"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>