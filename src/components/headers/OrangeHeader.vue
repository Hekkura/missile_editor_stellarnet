<script setup lang="ts">
import { computed } from 'vue'

type FontType = 'default' | 'mono-bold' | 'mono'
interface Props {
  font?: FontType
}

const props = withDefaults(defineProps<Props>(), {
  font: 'default',
})

const fontClass = computed(() => {
  const fontMap: Record<FontType, string> = {
    'mono-bold': 'font-jetmonobold tracking-normal',
    mono: 'font-jetmono tracking-normal',
    default: '',
  }

  return fontMap[props.font]
})
</script>

<template>
  <div class="flex bg-amber-800 w-full">
    <div class="p-2 bg-amber-900 border-3 border-amber-600"></div>
    <div class="py-0 px-1 border-3 border-amber-600 w-full text-lg" :class="fontClass">
      <slot>Default</slot>
    </div>
  </div>
</template>
