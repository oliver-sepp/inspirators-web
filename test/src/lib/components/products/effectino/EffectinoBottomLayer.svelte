<script lang="ts">
import bigArrow from '$lib/assets/products/futudraw/_.svg';
import bigE from '$lib/assets/products/effectino/E.png';
import bigF from '$lib/assets/products/futudraw/F.svg';
import bigDark from '$lib/assets/bg-big-dark.png';
</script>

<div class="absolute w-full -z-10 overflow-hidden flex flex-col md:flex-row mt-[10vh] md:mt-[35vh] lg:mt-[30vh]">
  
    <div class="lg:w-1/12">

    </div>

    <div class="w-full relative flex items-center lg:w-11/12">
        
        <div class="flex w-fit">
            <img src={bigArrow} alt="Big Arrow right" class="h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[65vh] flex-1 min-w-0 object-contain">
            <img src={bigE} alt="Big E" class="h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[65vh] flex-1 min-w-0 object-contain">
            <img src={bigF} alt="Big F" class="h-[25vh] sm:h-[30vh] md:h-[40vh] lg:h-[65vh] flex-1 min-w-0 object-contain">
        </div>
    
    </div>

    <img src={bigDark} alt="Big Dark" class="absolute hidden min-[800px]:inline mt-20 md:mt-0 right-0 h-[25vh] md:h-[40vh] lg:h-[70vh] max-w-full pt-4">

</div>



