<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number01 from '$lib/assets/01.png';
    import team from '$lib/assets/team/team-image.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[5vh] md:mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-full text-[#05266A] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                At Inspirators!
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
                At Inspirators!, we are constantly expanding our team to include talented individuals from all around the world. We value diversity and inclusivity, and we believe that a global team allows us to bring unique perspectives and ideas to our work.
            </p>
            <p>
                If you're interested in joining our team, please visit our careers page to see our current job openings. We welcome applicants from all backgrounds and experience levels, and we are committed to providing a supportive and inclusive work environment for all of our employees.
            </p>
            <p>
                Whether you're a seasoned professional or just starting your career, we invite you to apply and become a part of our growing team at Inspirators!. Together, we can continue to develop innovative solutions and provide exceptional service to our customers around the world.
            </p>
            
        </div>

        <div class="w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={team} 
            alt="Team at Inspirators!"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg shadow-lg">
        </div>
        
    </div>
</div>