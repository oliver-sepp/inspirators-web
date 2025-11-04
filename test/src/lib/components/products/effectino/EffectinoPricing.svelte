<script lang="ts">
  import { onMount } from 'svelte';

  import arrow from '$lib/assets/arrow-right-white.png';
  import number03 from '$lib/assets/03-white.png';
  import checkmark from '$lib/assets/checkmark.png';

  let smallCard: HTMLDivElement;
  let bigCard: HTMLDivElement;

  onMount(() => {
    const syncHeights = () => {
      if (window.innerWidth >= 1024) {
        smallCard.style.height = `${bigCard.offsetHeight}px`;
      } else {
        smallCard.style.height = 'auto';
      }
    };

    syncHeights();
    window.addEventListener('resize', syncHeights);

    return () => window.removeEventListener('resize', syncHeights);
  });
</script>

<div class="w-full">
  <!-- Blue Section -->
  <div class="bg-[var(--light-blue)]">
    <!-- Header Section -->
    <div class="w-full mx-auto px-6 pt-20 pb-8 lg:pb-40">
      <div class="flex flex-col md:flex-row justify-evenly items-start w-full md:items-center gap-8">
        <div class="relative pb-6 md:w-2/5">
          <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] leading-tight text-[var(--dark-blue)]">
            <b>Effectino modules</b>
          </h1>
          <div class="absolute bottom-0 left-0 w-1/2 border-b-4 border-white"></div>
        </div>
        
        <div class="flex items-center gap-6">
          <img 
            src={arrow}
            alt="arrow" 
            class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7"
          />
          <img 
            src={number03}
            alt="03" 
            class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7"
          />
        </div>
      </div>
    </div>

    <!-- Cards Section - Inside blue on mobile, overlapping on desktop -->
    <div class="max-w-7xl mx-auto px-6 pb-20 lg:pb-0">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:-mb-80">
        
        <!-- Card 1 - Effectino App -->
        <div 
          bind:this={smallCard}
          class="bg-white rounded-lg shadow-2xl p-8 md:p-12"
        >
          <div class="pb-6 mb-8 border-b-4 border-[var(--light-blue)] min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-end">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#05266A] leading-tight">
              Effectino App —<br />
              Simple. Smart. Efficient.
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <img 
                src={checkmark}
                alt="checkmark" 
                class="w-6 object-contain flex-shrink-0 mt-1"
              />
              <p class="text-lg md:text-xl text-[#05266A]">
                Select work directly from the app — choose prioritized tasks instantly.
              </p>
            </div>
            
            <div class="flex items-start gap-4">
              <img 
                src={checkmark}
                alt="checkmark" 
                class="w-6 object-contain flex-shrink-0 mt-1"
              />
              <p class="text-lg md:text-xl text-[#05266A]">
                Log your work easily — record pauses, quantities, and completion in real time.
              </p>
            </div>
            
            <div class="flex items-start gap-4">
              <img 
                src={checkmark}
                alt="checkmark" 
                class="w-6 object-contain flex-shrink-0 mt-1"
              />
              <p class="text-lg md:text-xl text-[#05266A]">
                Track progress at a glance — see live updates on orders and productivity.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 - Effectino Dashboard -->
        <div 
          bind:this={bigCard}
          class="bg-white rounded-lg shadow-2xl p-8 md:p-12"
        >
          <div class="pb-6 mb-8 border-b-4 border-[var(--light-blue)] min-h-[140px] md:min-h-[160px] lg:min-h-[180px] flex items-end">
            <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-[#05266A] leading-tight">
              Effectino Dashboard —<br />
              Dashboards & Analytics
            </h2>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <img 
                src={checkmark}
                alt="checkmark" 
                class="w-6 object-contain flex-shrink-0 mt-1"
              />
              <p class="text-lg md:text-xl text-[#05266A]">
                Real-time visibility: Factory monitors and team lead dashboards display live order progress — completed work, ongoing tasks, and ETA vs. actual performance.
              </p>
            </div>
            
            <div class="flex items-start gap-4">
              <img 
                src={checkmark}
                alt="checkmark" 
                class="w-6 object-contain flex-shrink-0 mt-1"
              />
              <p class="text-lg md:text-xl text-[#05266A]">
                Performance insights: Track productivity by employees or teams to identify bottlenecks and improve efficiency.
              </p>
            </div>
            
            <div class="flex items-start gap-4">
              <img 
                src={checkmark}
                alt="checkmark" 
                class="w-6 object-contain flex-shrink-0 mt-1"
              />
              <p class="text-lg md:text-xl text-[#05266A]">
                Transparent operations: Gain a clear overview of the entire production floor — from individual tasks to overall output.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- White section for desktop overlap -->
  <div class="hidden lg:block bg-[var(--theme-white)] pt-80 pb-20"></div>
</div>