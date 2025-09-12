<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(true)

const toggleAccordion = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <div class="w-full">
    <!-- ACCORDION HEADER -->
    <button class="flex flex-row w-full py-1" @click="toggleAccordion" :aria-expanded="isOpen">
      <div class="flex-none w-5 h-5 bg-neutral-800 border-2 border-neutral-600 text-gray-500">
        <!-- ARROW SVG -->
        <svg
          class="transform transition-transform duration-100"
          :class="{ '-rotate-90': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <!-- Arrow SVG ENd -->
      </div>

      <div
        class="flex-2 text-left px-2 text-neutral-400 text-[0.7rem] bg-orange-950 border-2 border-amber-700"
      >
        <slot name="accordionTitle">Accordion Sample Title </slot>
      </div>
    </button>
    <!-- Header END -->
    <!-- Accordion COntent -->
    <div
      class="overflow-hidden transition-all duration-100 ease-in-out"
      :class="isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
    >
      <slot name="accordionContent"> </slot>
      <br></br>
    </div>
    <!-- COntent End -->
  </div>

  <!-- ========= -->
</template>
