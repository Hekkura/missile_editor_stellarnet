<script setup lang="ts">
import GrayHeader from '@/components/headers/GrayHeader.vue'
import OrangeHeader from '@/components/headers/OrangeHeader.vue'
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
  <div class="flex gap-1">
    <div
      class="flex flex-col flex-initial gap-0.5 h-[100vh] w-[25vw] min-w-[320px] align-middle justify-center"
    >
      <OrangeHeader font="mono-bold">AVAILABLE WEAPONS</OrangeHeader>
      <LeftPanel></LeftPanel>
    </div>

    <div class="flex flex-col gap-0.5 h-[100vh] flex-1 align-middle justify-center">
      <OrangeHeader font="mono-bold">MISSILE DESIGNER</OrangeHeader>
      <div
        id="outer-box"
        class="border-2 border-neutral-700 p-1 flex flex-row justify-between gap-0 bg-gray-950 h-[90vh]"
      >
        <!-- COMPONENT MISSILE DESIGNER DIAGRAM HERE -->
        <div id="weapon-diagram" class="h-full flex-1">
          <GrayHeader>Missile Diagram</GrayHeader>
        </div>
        <!-- COMPONENT MISSILE COMPONENT  PALETTE HERE  -->
        <div
          id="component-palette"
          class="border-l-2 border-neutral-700 h-full w-[16vw] min-w-[248px] flex-initial"
        >
          <GrayHeader>Component Palette</GrayHeader>
          <!-- Move this to component -->
          <div class="border-1 border-neutral-400 flex flex-col bg-neutral-800">
            <div class="flex flex-row border-b border-neutral-400">
              <div class="border-r border-neutral-400 w-10 h-10"></div>
              <div>
                <div class="px-1">Command Receiver</div>
                <div class="font-aces px-1 text-xs text-yellow-500">CMD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <MissileBodyModal :isActive="isModalOpen('missileBody').value" @close="closeModal" />
  </div>
</template>
