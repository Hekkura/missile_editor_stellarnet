import { defineStore } from 'pinia'
import type { MissileWarhead } from '@/types/Warhead'
import type { Engine } from '@/types/Engine'
import type { MissileSupportModule } from '@/types/SupportModule'
import type { MissileSeeker } from '@/types/Seeker'
import type { Missile } from '@/types/Missile'

export const useComponentStore = defineStore('components', {
  //   state: (): {
  //     warheadsData: Warhead[]
  //     seekersData: Seeker[]
  //     engineData: Engine[]
  //   } => ({
  //     // Initialize with your const data
  //     warheadsData: [...DEFAULT_WARHEADS],
  //     seekersData: [...DEFAULT_SEEKERS],
  //     engineData: [...DEFAULT_ENGINES],
  //   }),
  //   getters: {
  //     getWarheadById: (state) => (id: string) => state.warheadsData.find((w) => w.id === id),
  //     availableWarheads: (state) => state.warheadsData.filter((w) => w.available),
  //   },
  //   actions: {
  //     addWarhead(warhead: MissileWarhead) {
  //       this.warheadsData.push(warhead)
  //     },
  //     updateWarhead(id: string, updates: Partial<MissileWarhead>) {
  //       const index = this.warheadsData.findIndex((w) => w.id === id)
  //       if (index !== -1) {
  //         this.warheadsData[index] = { ...this.warheadsData[index], ...updates }
  //       }
  //     },
  //   },
})
