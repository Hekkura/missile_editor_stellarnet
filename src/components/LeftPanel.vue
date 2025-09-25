<script setup lang="ts">
import { ref, inject } from 'vue'
import OrangeHeader from '@/components/headers/OrangeHeader.vue'
import GrayHeader from '@/components/headers/GrayHeader.vue'

import type { Missile } from '@/types/Missile'
import { missileData } from '@/ts/MissileData'
const missileList = ref<Missile | null>(null)
const modal: any = inject('modal')

const openMissileModal = () => {
  modal.openModal('missileBody')
  console.log(modal)
}
</script>
<template>
  <div class="flex flex-col gap-0.5 h-[100vh] w-[25vw] min-w-[320px] align-middle justify-center">
    <OrangeHeader font="mono-bold">AVAILABLE WEAPONS</OrangeHeader>
    <div
      id="outer-box"
      class="border-2 border-neutral-700 p-1 flex flex-col gap-2 bg-gray-950 h-[90vh]"
    >
      <!-- ==== -->
      <GrayHeader>Currently Saved Designs</GrayHeader>
      <div class="overflow-y-scroll scrollbar-custom flex-grow">
        <!-- Missile list div here (vfor)  -->
        <div class="border-1 border-neutral-400 flex flex-col bg-neutral-700">
          <div class="flex flex-row border-b border-neutral-400">
            <div class="border-r border-neutral-400 w-10 h-10"></div>
            <div class="px-1">SDM-222 Naginata XRC</div>
          </div>
          <div class="px-1 font-aces text-sm truncate tracking-tight">
            DIRECT - ACT (<span class="text-green-500">RADAR</span>) /PSV(<span class="text-red-500"
              >WAKE</span
            >) - HE FRAG
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col"></div>
      <button
        @click="openMissileModal"
        class="w-full gap-1 px-1 py-1 bg-neutral-950 border-neutral-500 border-[1.5px] text-md text-neutral-300"
      >
        CREATE NEW
      </button>
      <!-- <div></div> -->
      <!-- ==== -->
    </div>
  </div>
</template>
