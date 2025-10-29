<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number03 from '$lib/assets/03.png';
    import values3 from '$lib/assets/values/values-image3.png';
</script>


<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3.5rem] lg:text-[3rem]">
                SDG-s and Environmental Impact
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number03} alt="03" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center m-4 items-center min-[1000px]:items-start gap-[5vw] text-[#05266A] min-[1000px]:flex-row md:gap-[10vw]">
        
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                <b>Goal 9:</b> Industry, Innovation, and Infrastructure: We invest heavily in research and development (R&D) to continuously improve our products and services. By focusing on innovation, we aim to enhance efficiency, reduce electricity consumption, and minimize working time per technical operation, such as the creation of technical drawings.
            </p>
            <p>
                <b>Goal 12:</b> especially target 12.6: Responsible Consumption and Production: We prioritize efficiency throughout our operations, including at the code level. Our principle is to create solutions that are efficient, minimizing waste in the process. By doing so, we contribute to a more sustainable environment, as we understand that good code reduces environmental impact.
            </p>
            <p>
                <b>Goal 8:</b> especially 8.2: Achieve higher levels of economic productivity through diversification, technological upgrading and innovation, including through a focus on high-value added and labor-intensive sectors: We actively consider the environmental implications of our actions. We recognize that code quality plays a role in environmental sustainability, as bad code can negatively impact the environment. Therefore, we strive to create solutions efficiently, minimizing waste and reducing CO2 emissions associated with technical operations, such as creating technical drawings.
            </p>
            <p>
                <b>Goal 5:</b> especially 5.5: Gender Equality: We are committed to gender equality and diversity. Half of our board members and owners are female, including our CEO. Additionally, we ensure that salaries are gender agnostic, promoting equal pay for equal work.
            </p>
            <p>
                To achieve these SDG principles, we implement sustainable practices within our company. We embrace home offices, which help reduce waste, and we prioritize using conference calls instead of unnecessary travel, minimizing our carbon footprint.
            </p>
            
        </div>

        <div 
            class="w-1/1 order-2 min-[1000px]:order-1 flex justify-center md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
                src={values3}
                alt="SDGs and Environmental Impact"
                class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg"
                >
        </div>
        
    </div>
</div>