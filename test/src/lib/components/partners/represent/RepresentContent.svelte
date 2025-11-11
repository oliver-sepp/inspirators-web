<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import ProgressMarkLogic from '$lib/assets/pmain/represent/marklogic-blue.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[8vh] text-wrap">
                MarkLogic Partnership
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center gap-[10vw] text-[var(--dark-blue)] md:flex-row gap-[5vw]">
        
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[20px] md:w-1/6 lg:w-2/7">
            <p>
                Inspirators! proudly represents <b>MarkLogic</b> across <b>Germany, Norway, Finland, Estonia, Latvia, and Lithuania</b>. 
            </p>
            <p>
                MarkLogic brings enterprise-grade data integration, multi-model database capabilities, and advanced search technology together in a single, secure platform. Its flexible architecture makes it an excellent fit for Inspirators!’ AI portfolio, supporting complex data-driven solutions, intelligent automation, and scalable, high-performance applications. If you’re interested in exploring how MarkLogic can support your organisation, <b>let’s schedule a call and arrange a demo</b>.
            </p>
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={ProgressMarkLogic} 
            alt="Progress MarkLogic"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>