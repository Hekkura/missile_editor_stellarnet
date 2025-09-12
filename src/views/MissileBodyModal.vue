<script setup lang="ts">
import { ref } from 'vue'

import SelectionList from '@/components/selectModal/SelectionList.vue'
import OrangeHeader from '@/components/OrangeHeader.vue'
import AccordionDescription from '@/components/selectModal/AccordionDescription.vue'

import { missileBodyData } from '@/ts/MissileBodyData'
import type { MissileBody } from '@/types/Body'

// Currently selected missile
const activeMissileBody = ref<MissileBody | null>(null)
</script>

<template>
  <div>TESTING</div>
  <div class="flex flex-col gap-0.5">
    <OrangeHeader>Select Missile Body</OrangeHeader>

    <div id="outer-box" class="border-2 border-neutral-500 p-1 flex flex-row gap-2">
      <div id="left-box" class="flex flex-col gap-2 flex-1 h-80">
        <!-- List Card Component-->
        <SelectionList
          :listData="missileBodyData"
          :activeItem="activeMissileBody"
          @itemSelected="activeMissileBody = $event"
          @itemDeselected="activeMissileBody = null"
        ></SelectionList>
      </div>

      <!-- Missile Info Display -->
      <div class="flex flex-col flex-1 gap-2 border-1 border-neutral-400 overflow-y-scroll h-80">
        <div v-if="activeMissileBody" class="p-1">
          <!-- Main Title + Subtitle-->

          <h1 class="text-xl text-center leading-none">
            {{ activeMissileBody.designation }} {{ activeMissileBody.name }}
          </h1>
          <p class="text-xs text-center">{{ activeMissileBody.descriptionShort }}</p>
          <!-- <img></img> -->

          <!-- Start dropdowns   -->
          <AccordionDescription>
            <template #accordionTitle>DESCRIPTION </template>
            <template #accordionContent>
              <p class="font-aces text-xs leading-3.5 tracking-tight whitespace-pre-line">
                {{ activeMissileBody.description }}
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
                  <p class="font-aces">{{ activeMissileBody.baseHealth }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Wall Thickness</h1>
                  <p class="font-aces">{{ activeMissileBody.wallThickness }}cm</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Size</h1>
                  <p class="font-aces">{{ activeMissileBody.size }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Socket Weight</h1>
                  <p class="font-aces">{{ activeMissileBody.socketWeight }}x</p>
                </div>
                <div
                  v-if="activeMissileBody.fixedSocketCostMult !== 1"
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Fixed Socket Cost Multiplier</h1>
                  <p class="font-aces">{{ activeMissileBody.fixedSocketCostMult }}x</p>
                </div>
                <div
                  v-if="activeMissileBody.varSocketCostMult !== 1"
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Variable Socket Cost Multiplier</h1>
                  <p class="font-aces">{{ activeMissileBody.varSocketCostMult }}x</p>
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
                  <p class="font-aces">{{ activeMissileBody.totalSocketCount }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Max Engine Socket Count</h1>
                  <p class="font-aces">{{ activeMissileBody.engineMaxSocketCount }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Max Warhead Socket Count</h1>
                  <p class="font-aces">{{ activeMissileBody.warheadMaxSocketCount }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Factions</h1>
                  <p class="font-aces">{{ activeMissileBody.factions }}</p>
                </div>
                <br />
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Base Missile Body Cost</h1>
                  <p class="font-aces">{{ activeMissileBody.baseBodyCost }} Pts</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Seeker slots</h1>
                  <p class="font-aces">{{ activeMissileBody.seekerSlots }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Support Module Slots</h1>
                  <p class="font-aces">{{ activeMissileBody.supportSlots }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Multifunction Slots</h1>
                  <p class="font-aces">{{ activeMissileBody.multifunctionSlots }}</p>
                </div>
                <div
                  class="flex justify-between w-full border-1 px-2 border-neutral-700 bg-neutral-800"
                >
                  <h1 class="font-neb">Warhead as Support Module?</h1>
                  <p class="font-aces">{{ activeMissileBody.warheadAsSupportSlot }}</p>
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
                {{ activeMissileBody.loreBlurb }}
              </p>
            </template>
          </AccordionDescription>
        </div>
      </div>
    </div>
  </div>
</template>
