<script lang="ts">
import uiuxDesign from '$lib/assets/custom/uiux-design.svg';
import systemArc from '$lib/assets/custom/system-arc.svg';
import dev from '$lib/assets/custom/dev.svg';
import devops from '$lib/assets/custom/devops.svg';
import testing from '$lib/assets/custom/testing.svg';
import support from '$lib/assets/custom/support.svg';
</script>

<div class="flex flex-col justify-between mt-[10vh] md:mt-[15vh]">
    <div class="flex flex-row justify-center align-center w-full mb-20">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-3/5 xl:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] w-full text-center">
                <b>Full-cycle services</b>
            </h1>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 border-b-4 border-[#7FC8CB]"></span>
        </div>

    </div>
    <div class="w-full flex flex-wrap justify-center gap-6 mb-20 px-4">
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative"
    >       
        <img src={uiuxDesign} alt="ui/ux" class="min-w-[100px]">

        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>UI/UX design</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={systemArc} alt="send" class="min-w-[100px]">

        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>System architecture</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={dev} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Software development</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={devops} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>DevOps, CI/CD</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={testing} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Testing</b>
        </h1>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <img src={support} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Second-line support</b>
        </h1>
    </div>
</div>

</div>