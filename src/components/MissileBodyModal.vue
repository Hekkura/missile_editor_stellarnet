<script setup lang="ts">
import { ref, inject } from 'vue'

import SelectionList from '@/components/selectModal/SelectionList.vue'
import OrangeHeader from '@/components/headers/OrangeHeader.vue'
import AccordionDescription from '@/components/selectModal/AccordionDescription.vue'

import { missileBodyData } from '@/ts/MissileBodyData'
import type { MissileBody } from '@/types/Body'

// Currently selected missile
const activeMissileBody = ref<MissileBody | null>(null)

//inject modal controls
const modal: any = inject('modal')
//close modal handler
const closeModal = () => {
  activeMissileBody.value = null
  modal.closeModal()
}

const handleBackdropClick = () => {
  closeModal()
}

const handleModalContentClick = (event: Event) => {
  // Prevent backdrop click when clicking inside modal
  event.stopPropagation()
}

const selectMissileBody = () => {
  if (activeMissileBody.value) {
    //TODO : Save to Pinia Store becomes active missile value and render activeMissileBody null
    closeModal()
  }
}

const props = defineProps<{
  isActive: boolean
}>()
</script>

<template>
  <div
    v-if="props.isActive"
    @click="handleBackdropClick"
    class="bg-neutral-800/50 h-screen w-screen flex justify-center align-center absolute left-0 top-0 z-50"
  >
    <div class="flex flex-col gap-0.5 w-[70vw] h-[90vh] min-w-[720px] align-middle justify-center">
      <OrangeHeader>Select Missile Body</OrangeHeader>

      <div
        id="outer-box"
        class="border-2 border-neutral-500 p-1 flex flex-row gap-2 bg-gray-950"
        @click="handleModalContentClick"
      >
        <div id="left-box" class="flex flex-col gap-2 flex-1 h-80">
          <!-- List Card Component-->
          <SelectionList
            :listData="missileBodyData"
            :activeItem="activeMissileBody"
            @itemSelected="activeMissileBody = $event"
            @itemDeselected="activeMissileBody = null"
          />
          <div>
            <!-- Save to Pinia state -->
            <button
              :disabled="!activeMissileBody"
              @click="selectMissileBody"
              class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-950 border-neutral-500 border-[1.5px] text-md text-neutral-300 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              SELECT
            </button>
            <!-- Close modal -->
            <button
              @click="closeModal"
              class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-950 border-rose-800 border-[1.5px] text-md text-rose-800"
            >
              CANCEL
            </button>
          </div>
        </div>

        <!-- Missile Info Display -->
        <div
          class="flex flex-col flex-1 gap-2 border-1 border-neutral-400 scrollbar-custom overflow-y-scroll h-80"
        >
          <div v-if="activeMissileBody" class="p-1">
            <!-- Main Title + Subtitle-->

            <h1 class="text-xl text-center leading-none">
              {{ activeMissileBody.info.designation }} {{ activeMissileBody.info.name }}
            </h1>
            <p class="text-xs text-center">{{ activeMissileBody.info.descriptionShort }}</p>
            <!-- <img></img> -->

            <!-- Start dropdowns   -->
            <AccordionDescription>
              <template #accordionTitle>DESCRIPTION </template>
              <template #accordionContent>
                <p class="font-aces text-xs leading-3.5 tracking-tight whitespace-pre-line">
                  {{ activeMissileBody.info.description }}
                </p>
              </template>
            </AccordionDescription>

            <AccordionDescription>
              <template #accordionTitle>PRIMARY STATS </template>
              <template #accordionContent>
                <div class="flex flex-col w-full text-xs">
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Body Integrity</h1>
                    <p class="font-aces">{{ activeMissileBody.physics.baseHealth }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Wall Thickness</h1>
                    <p class="font-aces">{{ activeMissileBody.physics.wallThickness }}cm</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Size</h1>
                    <p class="font-aces">{{ activeMissileBody.physics.size }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Socket Weight</h1>
                    <p class="font-aces">{{ activeMissileBody.physics.socketWeight }}x</p>
                  </div>
                  <div
                    v-if="activeMissileBody.economics.fixedSocketCostMult !== 1"
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Uniform Socket Cost Multiplier</h1>
                    <p class="font-aces">{{ activeMissileBody.economics.fixedSocketCostMult }}x</p>
                  </div>
                  <div
                    v-if="activeMissileBody.economics.varSocketCostMult !== 1"
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Variable Socket Cost Multiplier</h1>
                    <p class="font-aces">{{ activeMissileBody.economics.varSocketCostMult }}x</p>
                  </div>
                  <div
                    v-if="activeMissileBody.sockets.warheadLock"
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Warhead Locked?</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.warheadLock }} Only</p>
                  </div>
                </div>
              </template>
            </AccordionDescription>

            <!-- Ancillary Stats -->
            <AccordionDescription>
              <template #accordionTitle>ANCILLARY STATS</template>
              <template #accordionContent>
                <div class="flex flex-col w-full text-xs">
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Total Socket Count</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.totalSocketCount }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Max Engine Socket Count</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.engineMaxSocketCount }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Max Warhead Socket Count</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.warheadMaxSocketCount }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Factions</h1>
                    <p class="font-aces">{{ activeMissileBody.info.factions }}</p>
                  </div>
                  <br />
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Base Missile Body Cost</h1>
                    <p class="font-aces">{{ activeMissileBody.economics.baseBodyCost }} Pts</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Seeker slots</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.seekerSlots }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Support Module Slots</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.supportSlots }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Multifunction Slots</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.multifunctionSlots }}</p>
                  </div>
                  <div
                    class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                  >
                    <h1 class="font-neb">Warhead as Support Module?</h1>
                    <p class="font-aces">{{ activeMissileBody.sockets.warheadAsSupportSlot }}</p>
                  </div>
                </div>
              </template>
            </AccordionDescription>

            <!-- Lore Blurb -->
            <AccordionDescription>
              <template #accordionTitle>LORE </template>
              <template #accordionContent>
                <p
                  class="font-aces italic text-xs leading-3.5 tracking-tight text-yellow-300 whitespace-pre-line"
                >
                  {{ activeMissileBody.info.loreBlurb }}
                </p>
              </template>
            </AccordionDescription>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>
