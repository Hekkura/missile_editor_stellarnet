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
    <OrangeHeader>Select Missile</OrangeHeader>

    <div class="border-2 border-neutral-500 p-1 flex flex-row gap-2">
      <div class="flex flex-col gap-2 flex-1">
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
            <h1 class="text-md leading-none">
              {{ missileBody.designation }} {{ missileBody.name }}
            </h1>
            <p class="font-sans text-md tracking-tight leading-none">
              {{ missileBody.descriptionShort }}
            </p>
          </div>
        </div>
        <!-- Missile Card -->
        <!-- buttons -->
        <div>
          <button
            class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-950 border-neutral-500 border-[1.5px] text-neutral-300"
          >
            SELECT
          </button>

          <button
            class="w-full flex flex-col gap-1 px-1 py-1 bg-neutral-950 border-rose-800 border-[1.5px] text-rose-800"
          >
            CANCEL
          </button>
        </div>
        <!-- buttons end -->
      </div>
      <!-- Missile Card end -->

      <!-- Missile Info Display -->
      <div class="flex flex-col flex-1 gap-2 border-1 border-neutral-400 overflow-y-scroll">
        <div v-if="activeMissileBody" class="p-1">
          <h1 class="text-xl text-center leading-none">
            {{ activeMissileBody.designation }} {{ activeMissileBody.name }}
          </h1>
          <p class="text-[0.7rem] text-center">{{ activeMissileBody.descriptionShort }}</p>
          <!-- <img></img> -->
          <p class="font-sans text-xs">
            {{ activeMissileBody.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
