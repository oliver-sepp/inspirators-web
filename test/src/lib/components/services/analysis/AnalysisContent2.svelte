<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import flag from '$lib/assets/flag.png';
    import number02 from '$lib/assets/02.png';
    import checkmark from '$lib/assets/checkmark.png';
</script>

<div class="flex flex-col justify-evely mt-40 mb-20">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] pb-14 relative ml-5 md:w-2/5">
            <h1 class="w-9/10 text-[3rem] md:text-[3rem] lg:text-[5rem]">
                This service is ideal for companies that:
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={flag} alt="flag" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center gap-[3vw] text-[#05266A] md:flex-row">
        
        <div class="flex flex-col space-y-4 mx-10 mb-5 w-5/6 text-[20px] md:w-2/6">
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Have legacy applications critical to business operations
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Are planning to modernize or extend exisiting systems
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Struggle to find developers familiar with old technologies
                </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
                <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
                <p>
                    Need a clear, cost-effective roadmap for future development
                </p>
            </div>
        </div>
        <div class="flex flex-col space-y-4 mx-10 w-5/6 text-[20px] md:w-2/6">
            <p>
                Lets talk.
            </p>
            <p>
                We're here to help you move faster, reduce complexity, and future-proof your systems. Contact us and see how our AI-assisted approach can support your goals.
            </p>
        </div>
    </div>
</div>