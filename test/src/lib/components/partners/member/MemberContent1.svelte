<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import Cooperants from '$lib/assets/pmain/member/member-image1.png';
    import CooperantsMembers from '$lib/assets/pmain/member/cooperants.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Cooperants
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-start gap-[10vw] text-[var(--dark-blue)] md:flex-row gap-[5vw]">
        
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[20px] md:w-1/6 lg:w-2/7">
            <p>
                The COOPERANTS (Collaborative Processes and Services for Aeronautics and Space) lighthouse project will accelerate the digitization of processes in the aerospace industry. The aim of the national consortium is to develop more efficient, decentralized forms for future working methods and processes across the entire lifecycle of space or air vehicles. This serves to increase the competitiveness of the industry in Germany and the European Union. The project is embedded in the initiative of the German Federal Ministry of Economics and Climate Protection (BMWK) to develop innovative and practical applications and data spaces in the Gaia-X digital ecosystem.
            </p>
        </div>

        <div class="flex w-1/1 md:w-1/6 lg:w-2/7 justify-center overflow-hidden">
            <img 
            src={Cooperants} 
            alt="Cooperants"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>

    <div class="flex justify-center mx-auto text-center text-[var(--dark-blue)] w-9/10 lg:w-3/5 flex-col gap-6 mt-15 lg:mt-30">
        <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem] border-b-4 w-fit mx-auto pb-6 border-[var(--light-blue)]">
            Members of Cooperants project
        </h1>
        <img 
        class="bg-white rounded-xl shadow-lg"
        src={CooperantsMembers} alt="Cooperants Members">
    </div>
</div>