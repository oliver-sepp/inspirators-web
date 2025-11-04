<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import img2024 from '$lib/assets/about/story/2024-image.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                In 2024
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4">
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center m-4 items-center min-[1000px]:items-start gap-[5vw] text-[#05266A] min-[1000px]:flex-row md:gap-[10vw]">
        
        <div class="flex flex-col space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                2024 was a groundbreaking year of innovation for <b>Inspirators!</b>
            </p>
            <ul class="list-disc list-inside">
                <li class="mb-4">
                    In <i>November</i> - our product <b>FutuDraw</b> won <b>first place</b> in the <b>Innovative Products Competition</b> organized by <b>Cooperants</b> at <b>Space Tech Expo Bremen</b>, the largest annual space event in Europe.
                </li>
                <li class="mb-4">
                    In <i>September</i>, we successfully co-organized the <b>largest AI & Databricks Users Conference in the Baltics</b> in collaboration with our partner <b>Databricks</b>, the industry leader in <b>data science and machine learning platforms</b>, as recognized by <b>Gartner</b>.
                </li>
                <li class="mb-4">
                In <i>May</i>, FutuDraw was recognized and funded at the <b>Technopol AI Competition</b>. With the industry generating and processing over <b>10,000 technical drawings annually</b>, automation is essential—precisely what FutuDraw delivers. Our ambitious goal was to interpret technical drawings using AI, achieving an impressive <b>95%</b> accuracy, compared to the industry average of <b>60–70%</b>.
                </li>
            </ul>
            <p>
                2024 was also a remarkable year financially for Inspirators!. Our revenue grew, and we successfully expanded our products and services to <b>Norway</b>, marking a significant milestone in our international growth.
            </p>
            
        </div>

        <div 
            class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
                src={img2024} 
                alt="2024"
                class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg"
                >
        </div>
        
    </div>
</div>