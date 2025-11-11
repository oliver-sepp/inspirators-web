<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number02 from '$lib/assets/02.png';
    import Schema from '$lib/assets/industries/building/building-1.png';
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
        <div class="w-9/10 text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Alpha-InnoTec GmbH partner in Estonia
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-[1000px]:items-start md:gap-[10vw] text-[var(--dark-blue)] min-[1000px]:flex-row gap-[5vw]">
        
        <div class="flex flex-col min-[1000px]:order-2 space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                <b>
                Automated Heating & Cooling Design for Alpha-InnoTec GmbH’s Estonian Partner
                </b>
            </p>
            <p>
                For <b>Alpha-InnoTec GmbH’s Estonian partner</b>, Inspirators! developed a <b>fully automated heating and cooling system design solution</b> powered by <b>FutuDraw</b> technology.
            </p>
            <p>
                The system helps engineers determine the most suitable <b>heat pump configuration</b> for private houses by analyzing <b>floor area, number of residents, geographic location, and degree days</b> — ensuring optimal energy performance and system sizing.
            </p>
            <p>
                With <b>FutuDraw’s automation</b>, complete <b>CAD schematics and technical drawings</b> are generated directly from data inputs, including <b>pipe dimensions, materials, and connection layouts.</b>
            </p>
            <p>
                The solution is up to <b>20,000% more efficient</b> than traditional methods, providing heating system builders with a clear, data-driven <b>overview of installation steps and materials</b> — effectively producing a <b>ready-made shopping list</b> for each project.
            </p>
            <button 
            on:click={openVideo}
            class="bg-[var(--dark-blue)] z-49 w-full md:w-fit text-white rounded-full px-10 py-6 mt-10 md:my-10 flex items-center justify-center text-[20px] whitespace-nowrap cursor-pointer hover:bg-blue-900 transition-all duration-300 ease-in-out">
                <img 
                src={playBtn} 
                alt="Play Video" 
                class="h-8 mr-2">
                <p>
                    Watch Video
                </p>
            </button>
        </div>

        <div class="w-1/1  order-2 min-[1000px]:order-1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
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