<script setup lang="ts">
import LeftPanel from '@/components/LeftPanel.vue'
import MissileBodyModal from '@/components/MissileBodyModal.vue'
import { ref, provide, computed } from 'vue'

const currentModal = ref<string | null>(null)

const openModal = (modalName: string) => {
  currentModal.value = modalName
}

const closeModal = () => {
  currentModal.value = null
}

const isModalOpen = (modalName: string) => {
  return computed(() => currentModal.value === modalName)
}

const modalControls = {
  currentModal,
  openModal,
  closeModal,
  isModalOpen,
}

provide('modal', modalControls)
</script>
<template>
  <LeftPanel></LeftPanel>

  <MissileBodyModal :isActive="isModalOpen('missileBody').value" @close="closeModal" />
</template>
