<script lang="ts">
import bigArrow from '$lib/assets/products/futudraw/_.svg';
import bigF from '$lib/assets/products/futudraw/F.svg';
import bigD from '$lib/assets/products/futudraw/D.svg';
import bigDark from '$lib/assets/bg-big-dark.png';
</script>
<div class="absolute w-full -z-10 overflow-hidden flex flex-col md:flex-row mt-[10vh] md:mt-[35vh] lg:mt-[30vh]">
  
    <div class="sm:w-1/12">

    </div>

    <div class="w-full relative flex justify-center items-center lg:w-11/12">
        
        <div class="flex w-full gap-1">
            <img src={bigArrow} alt="Big Arrow right" class="h-[25vh] sm:h-[30vh] md:h-[65vh] flex-1 min-w-0 object-contain">
            <img src={bigF} alt="Big F" class="h-[25vh] sm:h-[30vh] md:h-[50vh] md:h-[65vh] flex-1 min-w-0 object-contain">
            <img src={bigD} alt="Big D" class="h-[25vh] sm:h-[30vh] md:h-[50vh] md:h-[65vh] flex-1 min-w-0 object-contain">
        </div>
    
    </div>

    <img src={bigDark} alt="Big Dark" class="absolute hidden min-[800px]:inline mt-20 md:mt-0 right-0 h-[25vh] md:h-[70vh] max-w-full pt-4">

</div>



