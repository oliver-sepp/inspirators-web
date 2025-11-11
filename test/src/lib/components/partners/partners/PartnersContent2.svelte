<script lang="ts">
    import arrow from '$lib/assets/arrow-right.png';
    import number02 from '$lib/assets/02.png';
    import checkmark from '$lib/assets/checkmark.png';
    import Partners from '$lib/assets/pmain/partners/3partners.png';
</script>

<div class="flex flex-col justify-between md:mt-[15vh] mb-[10vh]">
    <div class="flex flex-col justify-evenly w-full m-4 mb-20 md:flex-row">
        <div class="w-9/10 text-[var(--dark-blue)] mx-3 pb-14 relative md:w-2/5 mx-0">
            <h1 class="text-[3rem] md:text-[4rem] lg:text-[3rem]">
                Partners in Estonia
            </h1>
            <span class="absolute bottom-0 left-0 w-1/2 border-b-4 border-[var(--light-blue)]"></span>
        </div>

        <div class="flex flex-row mt-10 ml-4" >
            <img src={arrow} alt="arrow" class="max-h-10 md:max-h-20 w-auto mr-7">
            <img src={number02} alt="02" class="max-h-10 md:max-h-20 w-auto mr-7">
        </div>
    </div>
    <div class="flex flex-col justify-center gap-[10vw] text-[var(--dark-blue)] md:flex-row gap-[5vw]">

        <div class="order-2 min-[1000px]:order-1 w-1/1 flex justify-center items-start md:block md:w-2/6 lg:w-2/7 overflow-hidden">
            <img 
            src={Partners}
            alt="PArtners in Estonia"
            class="w-9/10 sm:w-full h-auto object-contain rounded-lg">
        </div>
        
        <div class="min-[1000px]:order-2 flex flex-col space-y-4 mx-10 w-5/6 text-[20px] md:w-1/6 lg:w-2/7">
            <p>
                At our company, we rely on industry-leading technologies to power our product development and hosting. We have chosen to use Mongo and Microsoft cloud products and services due to their robust capabilities, flexibility, and scalability. With Mongo, we have access to a powerful NoSQL database that enables us to store and manage large volumes of complex data. This allows us to build high-performance, data-driven applications that can scale seamlessly with our business needs. Additionally, we use Microsoft cloud products and services to host our products, taking advantage of the benefits of cloud computing such as increased security, scalability, and cost-effectiveness.
            </p>

            <div class="flex flex-row mb-4 items-start">
            <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
            <p>
                <b>
                    Microsoft (Partner Promise Baltic) 
                    <a class="underline" href="https://www.microsoft.com/de-de/">
                        https://www.microsoft.com/de-de/
                    </a>
                </b>
            </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
            <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
            <p>
                <b>
                    MongoDB 
                    <a class="underline" href="https://www.mongodb.com/">
                        https://www.mongodb.com/
                    </a>

                </b>
            </p>
            </div>
            <div class="flex flex-row mb-4 items-start">
            <img src={checkmark} alt="checkmark" class="w-6 object-contain mr-4 pt-1.5">
            <p>
                <b>
                    Promise group 
                    <a class="underline" href="https://promisegroup.com/bl/">
                        https://promisegroup.com/bl/
                    </a>

                </b>
            </p>
            </div>
            <p>
                Overall, our use of Mongo and Microsoft cloud products and services is a testament to our commitment to providing our customers with the highest quality products and services possible.
            </p>
        </div>
    </div>
</div>