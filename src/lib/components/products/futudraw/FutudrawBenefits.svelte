<script lang="ts">
import arrow from '$lib/assets/arrow-right.png';
import number03 from '$lib/assets/03.png';
import checkmark from '$lib/assets/checkmark.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh]">
    <div class="flex flex-col justify-evenly w-9-10 pl-5 lg:pl-0 m-5 mb-20 md:flex-row">
        <div class="flex items-center w-9-10 text-[var(--dark-blue)] pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[2rem] lg:text-[3rem] leading-[1.3]">
                <b>Core Benefits of AI-Assisted Software for Calculating, Analyzing, and Creating CAD</b>
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number03} alt="03" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center text-[var(--dark-blue)] md:flex-row gap-[3vw]">
        <div class="text-[20px] w-5/6 ml-10 md:w-2/6">
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                    Data-Driven Automation: Generate unlimited 2D/3D schematics 20x faster.
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                    Faster implementation and easier onboarding compared to traditional CAD tools, with a minimal learning curve.
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                    Enhanced Input Quality: Improves and standardizes input drawings, detecting and classifying components accurately.
                    </b>
                </p>
            </div>
        </div>
        <div class="text-[20px] w-5/6 ml-10 md:w-2/6">
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                    Error-Free Schematics – No copy-paste mistakes, as schematics are generated directly from data.
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                    Customizable Business Rules – Engineers can edit and configure business rules as needed.
                    </b>
                </p>
            </div>
            <div class="flex flex-row mb-8 items-start md:mb-4">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    <b>
                    Engineer-Approved Solutions – Ensures that only feasible configurations are generated.
                    </b>
                </p>
            </div>
        </div>
    </div>
</div>