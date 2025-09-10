<script setup lang="ts">
import { ref } from 'vue'
import OrangeHeader from '@/components/OrangeHeader.vue'
import { missileBodyData } from '@/ts/MissileBodyData'
import type { MissileBody } from '@/types/Body'

// Currently selected missile
const activeMissileBody = ref<MissileBody | null>(null)

// Handle Click
function selectMissile(missile: MissileBody) {
  activeMissileBody.value = missile
}
function deselectMissile() {
  activeMissileBody.value = null
}
</script>

<template>
  <div>TESTING</div>
  <div class="flex flex-col gap-0.5">
    <OrangeHeader>Select Missile Body</OrangeHeader>

    <div class="border-2 border-neutral-500 p-1 flex flex-row gap-2">
      <div class="flex flex-col gap-2 flex-1 h-80">
        <!-- Missile Card -->
        <div class="border-1 border-neutral-400 overflow-y-scroll">
          <div
            v-for="missileBody in missileBodyData"
            class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-800 border-neutral-500 border-[1.5px] text-neutral-300"
            @click="selectMissile(missileBody)"
            :class="{
              'border-orange-500 bg-neutral-900':
                activeMissileBody?.designation === missileBody.designation,
            }"
          >
            <h1 class="text-lg leading-none">
              {{ missileBody.designation }} {{ missileBody.name }}
            </h1>
            <p class="font-aces text-sm tracking-tight leading-none opacity-70">
              {{ missileBody.descriptionShort }}
            </p>
          </div>
        </div>
        <!-- Missile Card End-->
        <!-- buttons -->
        <div>
          <button
            class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-950 border-neutral-500 border-[1.5px] text-lg text-neutral-300"
          >
            SELECT
          </button>

          <button
            class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-950 border-rose-800 border-[1.5px] text-lg text-rose-800"
          >
            CANCEL
          </button>
        </div>
        <!-- buttons end -->
      </div>
      <!-- Missile Card end -->

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
          <p class="font-aces text-xs leading-3.5 tracking-tight whitespace-pre-line">
            {{ activeMissileBody.description }}
          </p>
          <br />
          <div class="flex flex-col w-full text-sm">
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
          </div>
          <br />
          <!-- Lore Blurb -->
          <p
            class="font-aces italic text-xs leading-3.5 tracking-tight text-yellow-300 whitespace-pre-line"
          >
            {{ activeMissileBody.loreBlurb }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
