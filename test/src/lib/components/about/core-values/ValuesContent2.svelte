<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number02 from '$lib/assets/02.png';
    import values2 from '$lib/assets/values/values-image2.webp';
</script>


<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[3.5rem] lg:text-[3rem]">
                Inspirators core values
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[#7FC8CB]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center m-4 items-center min-[1000px]:items-start gap-[5vw] text-[#05266A] min-[1000px]:flex-row md:gap-[10vw]">
        
        <div 
            class="w-1/1 order-2 min-[1000px]:order-1 flex justify-center md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
                src={values2}
                alt="Inspirators! core values"
                class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg"
                >
        </div>

        <div class="flex flex-col min-[1000px]:order-2 space-y-4 mx-10 w-5/6 text-[20px] lg:w-2/7">
            <p>
                At Inspirators!, we have three core values that guide everything we do - openness, joy, and sustainability. We believe in transparency and open communication, both within our company and with our customers and partners. Our Scandinavian approach to communication ensures that everyone is heard, respected, and valued.
            </p>
            <p>
                We also know that a positive and joyful work environment is essential to achieving our goals. That's why we combine hard work with team-building activities that take us outside and into nature. From quarterly retrospective sessions held in botanical gardens or on the beach, to team-building boat trips, we believe that work can be enjoyable and productive at the same time.
            </p>
            <p>
                Sustainability is also a key value for us. We are committed to writing clean and efficient code, and to creating smart solutions that contribute to a greener future. We believe that technology has an important role to play in solving the world's environmental challenges, and we are dedicated to doing our part.
            </p>
            <p>
                Join us at Inspirators!, and experience the benefits of openness, joy, and sustainability firsthand.
            </p>
            
        </div>
        
    </div>
</div>