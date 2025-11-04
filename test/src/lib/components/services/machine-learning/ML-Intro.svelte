<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import introImg from '$lib/assets/services/machine-learning/ML-1.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                At the forefront of transforming the landscape of gas, oil, and energy companies
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
            <img src={number01} alt="01" class="max-h-10 md:max-h-15 lg:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center items-center min-[1000px]:items-start md:gap-[10vw] text-[#05266A] min-[1000px]:flex-row gap-[5vw]">
        
        <div class="flex flex-col space-y-4 lg:mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                Led by a team of seasoned experts, we specialize in harnessing the power of artificial intelligence and machine learning to drive unparalleled innovation and efficiency in your operations.
            </p>
            <p>
                Inspirators! as your AI partner is creating custom solutions that are tailored to meet the unique needs of board members responsible for numbers, analysts of AI teams and traders navigating volatile markets, and IT managers steering the technological backbone of your enterprise.
            </p>
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={introImg} 
            alt=""
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>