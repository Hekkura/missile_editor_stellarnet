<script setup lang="ts">
import { defineProps, defineEmits, inject } from 'vue'

const modal: any = inject('modal')
const closeModal = () => {
  modal.closeModal()
}

//Props
const props = defineProps<{
  listData: any[]
  activeItem: any | null
}>()
//Emit events
const emit = defineEmits<{
  itemSelected: [item: any]
  itemDeselected: []
}>()

//FUnctions
const handleItemClick = (item: any) => {
  if (props.activeItem === item) {
    emit('itemDeselected')
  } else {
    emit('itemSelected', item)
  }
}
</script>
<template>
  <div class="border-1 border-neutral-400 scrollbar-custom overflow-y-scroll flex-1">
    <div
      v-for="listItem in props.listData"
      class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-800 border-neutral-500 border-[1.5px] text-neutral-300 hover:border-orange-500 hover:bg-neutral-900"
      @click="handleItemClick(listItem)"
      :class="{
        'border-orange-500 bg-neutral-900':
          props.activeItem?.info?.designation === listItem.info.designation,
      }"
    >
      <h1 class="text-md leading-none">{{ listItem.info.designation }} {{ listItem.info.name }}</h1>
      <p class="font-aces text-xs tracking-tight leading-none opacity-70">
        {{ listItem.info.descriptionShort }}
      </p>
    </div>
  </div>
</template>
