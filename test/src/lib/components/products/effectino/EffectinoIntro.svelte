<script lang="ts">
import EffectinoVideo from "./EffectinoVideo.svelte";
import playBtn from '$lib/assets/products/futudraw/play-video.svg';
let showVideo= false;
let videoSource = 'https://www.youtube.com/embed/Rdi5N6nYjw8';

function openVideo() {
    showVideo = true;
  }
  
  function closeVideo() {
    showVideo = false;
  }

</script>
<div class="flex flex-col justify-between md:mt-[15vh]">
    <div class="flex flex-row justify-center align-center w-full mb-20">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] w-full text-center">
                <b>What is Effectino?</b>
            </h1>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 border-b-4 border-[#7FC8CB]"></span>
        </div>

    </div>
    <div class="flex flex-col justify-center text-[#05266A] md:flex-row">
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[24px] md:w-3/6 align-center">
            <p class="text-center">
                Effectino is a cutting-edge MES time and task management solution to boost efficiency by 20% and more
            </p>
        </div>
    </div>
    <div class="flex justify-center items-center md:py-10">
        <button 
        on:click={openVideo}
        class="bg-[var(--dark-blue)] z-49 text-white rounded-full px-10 py-6 mt-10 md:my-10 flex items-center text-[20px] whitespace-nowrap cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
            <img 
            src={playBtn} 
            alt="Play Video" 
            class="h-8 mr-2">
            <p>
                Watch Video
            </p>
        </button>
    </div>

    <div class="w-full text-center text-[24px] text-[var(--dark-blue)] mb-20 px-10 md:px-40 lg:px-60">
        <p>
            The installation process is easy - just one click needed to get started.
        </p>
    </div>

</div>

<EffectinoVideo 
    videoSrc={videoSource} 
    isOpen={showVideo} 
    onClose={closeVideo} 
/>