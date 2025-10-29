<script lang="ts">
import FutuDrawVideo from "./FutuDrawVideo.svelte";
import playBtn from '$lib/assets/products/futudraw/play-video.svg';
let showVideo= false;
let videoSource = 'https://www.youtube.com/embed/idqoF-MWngs';

function openVideo() {
    showVideo = true;
  }
  
  function closeVideo() {
    showVideo = false;
  }

</script>

<div class="flex flex-col justify-between md:mt-[15vh]">
    <div class="flex flex-row justify-center align-center pl-5 lg:pl-0 w-full mb-20">
        <div class="w-9-10 text-[#05266A] pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] w-9-10 text-center">
                <b>What is FutuDraw?</b>
            </h1>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 border-b-4 border-[#7FC8CB]"></span>
        </div>

    </div>
    <div class="flex flex-col justify-center text-[#05266A] md:flex-row">
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[24px] md:w-3/6 align-center">
            <p class="text-center">
                FutuDraw is an innovative cloud-based or on-premises solution that revolutionizes the creation of technical diagrams, schematics, and drawings. Powered by AI, FutuDraw automates the process by analyzing data and business rules to generate accurate, ready-to-use diagrams and technical documents - eliminating the need for manual repetitive work!
            </p>
        </div>
    </div>
    <div class="flex flex-col md:flex-row gap-[2rem] justify-center items-center">
        <button 
        on:click={openVideo}
        class="bg-[var(--dark-blue)] text-white rounded-full px-10 py-6 mt-10 my-10 flex items-center text-[20px] whitespace-nowrap cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
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
            Save time, scale the quality and automate CAD & technical documentation process with FutuDraw
        </p>
    </div>

</div>

<FutuDrawVideo 
    videoSrc={videoSource} 
    isOpen={showVideo} 
    onClose={closeVideo} 
/>