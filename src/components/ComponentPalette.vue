<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { missileSeekerData } from '@/ts/SeekersData'
import { missileSupportModuleData } from '@/ts/SupportModulesData'

import type { MissileSeeker } from '@/types/Seeker'
// import type { Engine } from '@/types/Engine'
import type { MissileWarhead } from '@/types/Warhead'
import type { MissileSupportModule } from '@/types/SupportModule'
import type { Avionics } from '@/types/Avionics'

type ActiveList =
  | { kind: 'seeker'; data: MissileSeeker[] }
  | { kind: 'support'; data: MissileSupportModule[] }
  | { kind: 'avionics'; data: Avionics[] }
  | {
      kind: 'support_container_nose'
      data: {
        seekers: MissileSeeker[]
        warheads: MissileWarhead[]
        supports: MissileSupportModule[]
      }
    }
  | {
      kind: 'multifunction'
      data: {
        seekers: MissileSeeker[]
        supports: MissileSupportModule[]
      }
    }
  | { kind: 'none' }

const seekerColors: Record<string, string> = {
  green: 'text-green-500',
  red: 'text-red-500',
  blue: 'text-sky-500',
  yellow: 'text-yellow-500',
}

const getSeekerColor = (color: string | undefined) => {
  if (!color) return 'text-neutral-200'
  return seekerColors[color]
}

//What the UI will look at to display which list.
const activeList = ref<ActiveList>({ kind: 'none' })

// Computed property to flatten the data into a single array
const flattenedData = computed(() => {
  if (activeList.value.kind === 'none') return []

  if (activeList.value.kind === 'multifunction') {
    return [...activeList.value.data.seekers, ...activeList.value.data.supports]
  }

  if (activeList.value.kind === 'support_container_nose') {
    return [
      ...activeList.value.data.seekers,
      ...activeList.value.data.warheads,
      ...activeList.value.data.supports,
    ]
  }

  // For simple types (seeker, support, avionics), just return the data
  return activeList.value.data
})

onMounted(() => {
  activeList.value = {
    kind: 'multifunction',
    data: {
      seekers: missileSeekerData,
      supports: missileSupportModuleData,
    },
  }
  console.log(flattenedData.value)
})
</script>
<template>
  <div
    class="border-1 border-neutral-400 flex flex-col bg-neutral-800"
    v-for="item in flattenedData"
  >
    <div class="flex flex-row border-b border-neutral-400">
      <div class="border-r border-neutral-400 w-10 h-10"></div>
      <div>
        <div class="px-1 text-xs">
          {{ item.info.name }}
        </div>
        <!-- <div class="font-aces px-1 text-xs">
          {{ item.info.prefix }}
          <span v-if="item.info.prefix">(</span
          ><span :class="getSeekerColor(item.info.mainColor)">{{ item.info.abbrev }} </span
          ><span v-if="item.info.prefix">)</span>
        </div> -->
      </div>
    </div>
  </div>
</template>
