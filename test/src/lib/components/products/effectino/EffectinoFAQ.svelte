<script lang="ts">
  import { slide } from 'svelte/transition';
  // Define the FAQ type
  type FAQ = {
    question: string;
    answer: string;
  };

  // List of FAQ items
  const faqs: FAQ[] = [
    {
      question: 'Can the Effectino app be used for individual or team work?',
      answer:
        'Yes — Effectino supports both. You can use it individually or in teams, depending on your factory setup and workflow.'
    },
    {
      question: 'Is Effectino software or hardware?',
      answer:
        "Effectino is a software application that runs on tablets and mobile devices. If your device can open a news portal with images, it’s powerful enough for Effectino. Most devices from around €100 already meet the requirements."
    },
    {
      question: 'How do team leads track production progress in Effectino?',
      answer:
        'Effectino offers a real-time dashboard that shows the status of all active and completed work orders. It compares actual vs. estimated time (ETA), and progress reports can even be shared with customers for full transparency.'
    },
    {
      question: 'Does the Effectino app integrate with ERP systems?',
      answer:
        'Yes — Effectino integrates directly with your ERP. All work orders are imported automatically into the app, eliminating manual data entry.'
    },
    {
      question: 'Is the Effectino app available in multiple languages?',
      answer:
        'Absolutely. Effectino can be customized to support most major languages, making it ideal for international manufacturing teams.'
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

<div class="flex flex-col items-center font-bold justify-center mt-10 md:mt-[15vh] mb-20">
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
                    {faq.answer}
                </div>
            {/if}
        </div>
    {/each}
</div>
