<script lang="ts">
import quotes from '$lib/assets/products/effectino/quotes.svg';
import commentImage from '$lib/assets/products/effectino/effectino-comment-cropped.jpg';
</script>

<div class="flex flex-col justify-between mt-[10vh] md:mt-[15vh]">
    <div class="flex flex-row justify-center align-center w-full mb-20">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-3/5 xl:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] w-full text-center">
                <b>What our clients say about Effectino?</b>
            </h1>
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full sm:w-3/4 border-b-4 border-[#7FC8CB]"></span>
        </div>

    </div>
    <div class="w-full jutify-center items-center mb-20">
        <div class="w-9/10 lg:w-6/10 text-center text-[var(--dark-blue)] bg-white shadow-lg rounded-2xl flex flex-col justify-start gap-[2.5rem] items-center p-10 mx-auto relative">
            <img src={quotes} alt="Quotes"
            class="absolute top-10 left-1/2 transform -translate-x-1/2 h-[300px] opacity-40 lg:h-[450px] p-2">
            <img 
            src={commentImage}
            alt="Virve Jõgeva"
            class="max-h-[150px] lg:max-h-[250px] rounded-full object-contain mt-4 z-10">
            <p class="max-w-9/10 lg:max-w-1/2 text-[1.4rem] lg:text-[1.8rem] mt-4 z-10">
                "As we aim to pay our workers
                higher salaries every year,
                Effectino has provided us with the
                visibility we need to optimize our
                working processes and achieve
                our goals. It's a game-changer for our company."
            </p>
            <h1 class="text-[2rem] lg:text-[2.4rem]">
                <b>Virve Jõgeva</b>
            </h1>
            <p class="text-[1.2rem]">
                CEO at Glamox
            </p>
        </div>

    </div>

</div>