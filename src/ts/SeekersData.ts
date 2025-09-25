import type { MissileSeeker } from '@/types/Seeker'

export const missileSeekerData: MissileSeeker[] = [
  {
    id: 'ACT',
    info: {
      name: 'Fixed Active Radar Seeker',
      desc: 'Active radar seekers find targets by sending out bursts of radio waves and listening for the return. Their major advantage is that they allow missiles to be fully autonomous, as they guide the missile to the target platform without backup and jam them in for the kill. Unfortunately, active seekers without backup are also easy to decoy and jam.',
      factions: 'all',
      prefix: 'ACT',
      abbrev: 'RADAR',
      mainColor: 'green', // no special color shown
    },
    cost: {
      baseCost: 1,
      validatorCost: 0.25,
    },
    specs: {
      range: 2000,
      fov: 50,
      gain: 25,
      power: 150,
      valReliability: 0.95, // 95%
    },
    capabilities: {
      sigType: 'Active',
      isSteerable: 'No',
      isTrackTgt: 'Yes',
      isPosTgt: 'Yes',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
]
