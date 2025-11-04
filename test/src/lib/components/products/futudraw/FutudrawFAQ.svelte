<script lang="ts">
  import { slide } from 'svelte/transition';
  import checkmark from '$lib/assets/checkmark.png';

  // Define the FAQ type
  type FAQ = {
    question: string;
    answer: string;
  };

  // List of FAQ items
  const faqs: FAQ[] = [
    {
      question: 'If I want to read numbers and text from PDFs customers send me, but don’t want to create new drawings, can FutuDraw help?',
      answer:
        'Yes. FutuDraw includes several modules, and you can use only the AI-Interpretation Module, which reads and interprets data directly from PDFs sent by your customers or partners. It can recognize numbers (including handwritten ones), images, lines, and text, turning them into structured, usable data.'
    },
    {
      question: 'Our customers send us many PDFs with detailed specifications and request price quotes. Can FutuDraw help us with that?',
      answer:
        "Absolutely. FutuDraw’s AI analysis module interprets and understands what is on your PDFs. You can then use the Chat Module to upload your PDFs and ask direct questions about the data inside them. We also offer a self-service configurator module, which you can introduce to your customers for faster and more accurate quotation workflows."
    },
    {
      question: 'How do I know if FutuDraw can help me with my technical documentation?',
      answer:
        'The simplest way is to send us an example document, and our team will quickly review it and let you know how FutuDraw can best support your process.'
    },
    {
      question: 'What is the difference between FutuDraw and ChatGPT or other generic AI tools?',
      answer:
        'Unlike general AI chat systems, FutuDraw is built specifically for engineering and industrial documentation. \nIt is: \n--Private – your data is never shared with third parties. \n--Accurate – up to 95% precision in interpreting technical data. \n--Customized – configured for your specific use case and document types. \n--Integrated – easily connects with your existing workflow or ERP system for higher efficiency.'
    },
    {
      question: 'Where is FutuDraw not a good fit?',
      answer:
        'FutuDraw is designed for technical and engineering applications, not for creative or artistic purposes. It focuses on data accuracy, structure, and automation, not imagination.'
    }
  ];

  // Track which item is currently open (null = none)
  let openIndex: number | null = null;

  function toggle(index: number): void {
    openIndex = openIndex === index ? null : index;
  }

  function handleKeyDown(e: KeyboardEvent, index: number): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(index);
    }
  }
</script>

<div class="flex flex-col items-center font-bold justify-center md:mt-[15vh] mb-20">
    <div class="w-8/10 flex justify-center">
        <div class="w-full text-[#05266A] pb-14 relative mx-0">
            <h1 class="text-[3rem] md:text-[3rem] lg:text-[5rem] leading-tight">
                FAQ
            </h1>
            <span class="absolute bottom-0 left-0 w-full border-b-4 border-[#7FC8CB]"
            ></span>
        </div>
    </div>
    {#each faqs as faq, i}
        <div class="w-8/10 border-b-4 border-[var(--light-blue)] mb-2">
            <!-- Clickable header -->
            <div
            class="flex flex-row justify-between cursor-pointer items-center py-6 text-[1.4rem] md:text-[1.7rem] text-[var(--dark-blue)]"
            role="button"
            tabindex="0"
            aria-expanded={openIndex === i}
            on:click={() => toggle(i)}
            on:keydown={(e) => handleKeyDown(e, i)}
            >
                <p>{faq.question}</p>
                <p class="text-[var(--light-blue)] text-[3rem] mr-4">
                    {openIndex === i ? '−' : '+'}
                </p>
            </div>

            <!-- Expandable answer -->
            {#if openIndex === i}
                <div transition:slide class="mt-2 mb-4 max-w-8/10 text-[1.4rem] font-normal text-[var(--dark-blue)]">
                  {#if faq.answer.includes('\n')}
                    
                    {#each faq.answer.split('\n') as paragraph}
                      {#if paragraph.trim().startsWith('--')}
                        <div class="flex flex-row mb-8 items-start md:mb-4">
                            <img
                            src={checkmark}
            				alt="checkmark"
            				class="w-6 object-contain mr-4 pt-1.5"
          					/>
          					<p>
            					<b>
              					{paragraph.replace('--', '').trim()}
            					</b>
          					</p>
        				</div>
                      {:else}
                        <p class="mb-4">{paragraph}</p>
                      {/if}
                    {/each}
                  {:else}
                    {faq.answer}
            {/if}
                  
                </div>
            {/if}
        </div>
    {/each}
</div>
