<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import checkmark from '$lib/assets/checkmark.png';
    import Schema from '$lib/assets/building/building-1.png';
    import HVACVideo from "./HVACVideo.svelte";
import playBtn from '$lib/assets/products/futudraw/play-video.svg';
let showVideo= false;
let videoSource = 'https://www.youtube.com/embed/FStmzzlbfJE';

function openVideo() {
    showVideo = true;
  }
  
  function closeVideo() {
    showVideo = false;
  }
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Alpha-InnoTec GmbH partner in Estonia Ait-Nord
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
                Automatic heating/cooling technical drawing solution for Alpha-InnoTec GmbH partner in Estonia Ait-Nord
            </p>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        20,000 % more efficient compared to traditional methods
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Fully automated CAD diagrams
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        The system providing all materials with parameters like pipe measurements, etc.
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                        Heat system builders have a detailed overview of how to build and what materials to use
                    </b>
                </p>
            </div>
            <button 
            on:click={openVideo}
            class="bg-[var(--dark-blue)] z-49 w-fit text-white rounded-full px-10 py-6 mt-10 md:my-10 flex items-center text-[20px] whitespace-nowrap cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
                <img 
                src={playBtn} 
                alt="Play Video" 
                class="h-8 mr-2">
                <p>
                    Watch Video
                </p>
            </button>
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={Schema} 
            alt="Schema"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>
<HVACVideo 
    videoSrc={videoSource} 
    isOpen={showVideo} 
    onClose={closeVideo} 
/>