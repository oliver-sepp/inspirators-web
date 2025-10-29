<script lang="ts">
    import { onMount } from 'svelte';
    import kitchen from '$lib/assets/products/futudraw/kitchen.jpg';
    import heatPump from '$lib/assets/products/futudraw/heat-pump.jpg';
    import chip from '$lib/assets/products/futudraw/chip.jpg';
    import checkmark from '$lib/assets/checkmark.png';    

  onMount(() => {
    const heatPumpDiv = document.getElementById('heat-pump');
    const kitchenDiv = document.getElementById('kitchen');
    const chipDiv = document.getElementById('chip');

    function matchHeight() {
      if (heatPumpDiv && kitchenDiv && chipDiv) {
        const height = heatPumpDiv.offsetHeight;
        kitchenDiv.style.height = `${height}px`;
        chipDiv.style.height = `${height}px`;
      }
    }

    // Run initially
    if (window.innerWidth >= 640) {
        matchHeight();
    }

    // Update on window resize
    window.addEventListener('resize', matchHeight);

    // Clean up listener when component unmounts
    return () => window.removeEventListener('resize', matchHeight);
  });
</script>

<div class="flex flex-col md:flex-row flex-wrap justify-center w-screen sm:w-full md:mt-[15vh] px-10 gap-[2rem] text-[var(--dark-blue)] pb-20">
    <div class="w-full md:w-1/4 flex flex-col justify-start">
        <div class="w-full border-b-3 pb-5 border-[var(--light-blue)] mb-10"
        id="kitchen">
            <img class="h-[100px]" src={kitchen} alt="Kitchen">
            <h1 class="text-[2.2rem] line-height-[0.5] pt-6">
                <b>FutuDraw for Kitchen Canopy Configuration</b>
            </h1>
        </div>
        <div class="flex flex-col w-full">
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    FutuDraw analyzes data, calculates and creates correct options of kitchen canopies that meet all the necessary Rules
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    FutuDraw calculates the air amount by taking into consideration the size and number of sections of the canopy, adding the correct number of modules and lamps, and showing leading module options
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Creating PDF schematics that electrical engineers can use to assemble the canopy on site
                </p>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/4 flex flex-col justify-start">
        <div class="w-full border-b-3 pb-5 border-[var(--light-blue)] mb-10"
        id="heat-pump">
            <img class="h-[100px]" src={heatPump} alt="Kitchen">
            <h1 class="text-[2.2rem] line-height-[0.5] pt-6">
                <b>Heat Pump Selection for New or Renovated Private Houses</b>
            </h1>
        </div>
        <div class="flex flex-col w-full">
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    FutuDraw uses degree days, the number of people living in the house, and the preferred heating type (radiator or floor) to calculate and shortlist suitable heat pumps and pressure tanks for new and renovated private houses
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    It creates CAD diagrams (dxf and pdf files). The system provides all the materials with parameters, such as pipe measurements, etc.
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Algorithms execute all the complex heating calculations instantly
                </p>
            </div>
        </div>
    </div>
    <div class="w-full md:w-1/4 flex flex-col justify-start">
        <div class="w-full border-b-3 pb-5 border-[var(--light-blue)] mb-10"
        id="chip">
            <img class="h-[100px]" src={chip} alt="Kitchen">
            <h1 class="text-[2.2rem] line-height-[0.5] pt-6">
                <b>Electrical Schematics Automation for Ships</b>
            </h1>
        </div>
        <div class="flex flex-col w-full">
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Import your CAD to FutuDraw, and a template will be created
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    The process of making changes by switching components on and off and replacing them on the schematics is fast, as changes will be generated using data and algorithms
                </p>
            </div>
        </div>
    </div>
    
    
</div>