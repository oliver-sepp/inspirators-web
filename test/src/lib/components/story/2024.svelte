<script lang="ts">
  import { onMount } from 'svelte';
  
  let imageElement: HTMLElement;
  let scale = 1;
  
  onMount(() => {
    const handleScroll = () => {
      if (!imageElement) return;
      
      const rect = imageElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far past the element we've scrolled (0 to 1)
      // 0 = element at bottom of screen, 1 = element at top of screen
      const scrollProgress = Math.max(0, Math.min(1, 
        1 - (rect.top / windowHeight)
      ));
      
      // Scale from 1 to 1.2 as we scroll past it
      scale = 1 + (scrollProgress * 0.2);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="flex flex-col justify-between md:mt-[15vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[5vh] md:text-[8vh] lg:text-[8vh]">
                In 2024
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src="/stopwatch.png" alt="stopwatch" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src="/arrow-right.png" alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src="/01.png" alt="01" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center gap-[10vw] text-[#05266A] md:flex-row gap-[5vw]">
        
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[20px] md:w-1/6 lg:w-2/7">
            <p>
                2024 was a groundbreaking year of innovation for Inspirators!
            </p>
            <ul class="list-disc list-inside">
                <li class="mb-4">
                    In November - our product FutuDraw won first place in the Innovative Products Competition organized by Cooperants at Space Tech Expo Bremen, the largest annual space event in Europe.
                </li>
                <li class="mb-4">
                    In September, we successfully co-organized the largest AI & Databricks Users Conference in the Baltics in collaboration with our partner Databricks, the industry leader in data science and machine learning platforms, as recognized by Gartner.
                </li>
                <li class="mb-4">
                In May, FutuDraw was recognized and funded at the Technopol AI Competition. With the industry generating and processing over 10,000 technical drawings annually, automation is essential—precisely what FutuDraw delivers. Our ambitious goal was to interpret technical drawings using AI, achieving an impressive 95% accuracy, compared to the industry average of 60–70%.
                </li>
            </ul>
            <p>
                2024 was also a remarkable year financially for Inspirators!. Our revenue grew, and we successfully expanded our products and services to Norway, marking a significant milestone in our international growth.
            </p>
            
        </div>

        <div 
            bind:this={imageElement}
            class="text-[20px] w-5/6 md:w-1/6 lg:w-2/7 overflow-hidden">
            <img 
                src="/story/2024-image.png" 
                alt=""
                class="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-200 ease-out"
                style="transform: scale({scale});">
        </div>
        
    </div>
</div>