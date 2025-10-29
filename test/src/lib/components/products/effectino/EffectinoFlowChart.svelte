<script lang="ts">
import send from '$lib/assets/products/effectino/send_light.svg';
import click from '$lib/assets/products/effectino/click_light.svg';
import edit_document from '$lib/assets/products/effectino/edit_document_light.svg';
import monitoring from '$lib/assets/products/effectino/monitoring_light.svg';
import bar_chart from '$lib/assets/products/effectino/bar_chart_light.svg';
</script>

<div class="flex flex-col justify-between mt-[10vh] md:mt-[15vh]">
    <div class="flex flex-row justify-center align-center w-full mb-20">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-3/5 xl:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] w-full text-center">
                <b>Effectino Process Flow</b>
            </h1>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 border-b-4 border-[#7FC8CB]"></span>
        </div>

    </div>
    <div class="w-full flex flex-wrap justify-center gap-6 mb-20 px-4">
    <div class="w-full sm:w-[calc(50%-0.75rem)] hover:bg-[var(--light-blue)] hover:text-[var(--dark-blue)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-left text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative"
    >
        <h1 class="text-[2rem] lg:text-[2.4rem] w-full text-letf">
            <b><i>01</i></b>
        </h1>        
        <img src={send} alt="send" class="min-w-[100px]">

        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Order arrives in the Effectino app</b>
        </h1>
        <p class="text-[1.4rem] lg:text-[1.8rem] mt-4 z-10">
            Orders are sent from the ERP system directly to the app located at each workstation.
        </p>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-left text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <h1 class="text-[2rem] lg:text-[2.4rem] w-full text-left">
            <b><i>02</i></b>
        </h1>
        <img src={click} alt="send" class="min-w-[100px]">

        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Employees select work from the app</b>
        </h1>
        <p class="text-[1.4rem] lg:text-[1.8rem] mt-4 z-10">
            Workers or teams choose tasks based on a priority list created by team leads — ensuring that the most critical jobs are completed first.
        </p>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-left text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <h1 class="text-[2rem] lg:text-[2.4rem] w-full text-left">
            <b><i>03</i></b>
        </h1>
        <img src={edit_document} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Work logging (pauses, quantities, completion, etc.)</b>
        </h1>
        <p class="text-[1.4rem] lg:text-[1.8rem] mt-4 z-10">
            Employees log breaks, lunch, work sessions, and quantities produced. All data is recorded in real time for each task.
        </p>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-left text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <h1 class="text-[2rem] lg:text-[2.4rem] w-full text-left">
            <b><i>04</i></b>
        </h1>
        <img src={monitoring} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Dashboard & analytics</b>
        </h1>
        <p class="text-[1.4rem] lg:text-[1.8rem] mt-4 z-10">
            Factory monitors and team lead dashboards display order progress — completed work, ETA vs. actual performance, and ongoing tasks.
        </p>
    </div>
    <div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(20%-1.2rem)] min-w-[380px] text-left text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 relative">
        <h1 class="text-[2rem] lg:text-[2.4rem] w-full text-left">
            <b><i>05</i></b>
        </h1>
        <img src={bar_chart} alt="send" class="min-w-[100px]">
        <h1 class="text-[2rem] lg:text-[2.4rem]">
            <b>Data sent to Power BI</b>
        </h1>
        <p class="text-[1.4rem] lg:text-[1.8rem] mt-4 z-10">
            In addition to real-time analytics and dashboards, data is sent to Power BI for financial comparison, performance tracking, and ETA optimization.
        </p>
    </div>
</div>

</div>

<!-- <script lang="ts">
import processflow from '$lib/assets/products/effectino/processflow.png';
</script>

<div class="flex flex-col justify-center items-center mt-20">
    <div class="flex flex-row justify-center align-center w-full mb-20">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-4/5 xl:w-3/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] w-full text-center">
                <b>Effectino Process Flow</b>
            </h1>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 border-b-4 border-[#7FC8CB]"></span>
        </div>

    </div>
    <div class="flex flex-col min-[1000px]:flex-row gap-[3rem] justify-center items-center m-6">
        <div class="flex flex-col gap-6 text-[1.5rem] justify-center text-[var(--dark-blue)] w-5/6 min-[1000px]:max-w-2/9">
            <div>
                <p><b>1. Order arrives in the Effectino app</b></p>
                <p>
                    Orders are sent from the ERP system directly to the app located at each workstation.
                </p>
            </div>
            <div>
                <p><b>2. Employees select work from the app</b></p>
                <p>
                    Workers or teams choose tasks based on a priority list created by team leads — ensuring that the most critical jobs are completed first.
                </p>
            </div>
            <div>
                <p><b>3. Work logging (pauses, quantities, completion, etc.)</b></p>
                <p>
                    Employees log breaks, lunch, work sessions, and quantities produced. All data is recorded in real time for each task.
                </p>
            </div>
            <div>
                <p><b>4. Dashboard & analytics</b></p>
                <p>
                    Factory monitors and team lead dashboards display order progress — completed work, ETA vs. actual performance, and ongoing tasks.
                </p>
            </div>
            <div>
                <p><b>5. Data sent to Power BI</b></p>
                <p>
                    In addition to real-time analytics and dashboards, data is sent to Power BI for financial comparison, performance tracking, and ETA optimization.
                </p>
            </div>            
        </div>
        <div class="bg-transparent p-10 w-fit rounded-xl">
            <img src={processflow} alt="process flow">
        </div>
    </div>
    
</div> -->