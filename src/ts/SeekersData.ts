import type { MissileSeeker } from '@/types/Seeker'

export const missileSeekerData: MissileSeeker[] = [
  {
    id: 'CMD',
    info: {
      name: 'Command Receiver',
      desc: `Command-guided missiles are steered by a communications signal from the launching ship. Directing them towards a sensor track that the ship or craft holds. These seekers are extremely difficult to defeat through soft-kill methods and cannot be decoyed, requiring the command signal itself to be jammed or the launching platform destroyed. 
      
      Note: Validation seekers have no benefit for Command-guided seekers, as they are only following steering commands and do not acquire a target on their own.`,
      factions: 'all',
      prefix: '',
      abbrev: 'CMD',
      mainColor: 'yellow',
    },
    cost: {
      baseCost: 3.5,
      validatorCost: 3,
    },
    specs: {
      range: 4000,
      fov: 0,
      gain: 0,
      power: 0,
      valReliability: 1, // 95%
    },
    capabilities: {
      sigType: '',
      isSteerable: 'No',
      isTrackTgt: 'Yes',
      isPosTgt: 'No',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
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
  {
    id: 'SACT',
    info: {
      name: 'Steerable Active Radar Seeker',
      desc: `Active radar seekers find targets by sending out bursts of radio waves and listening for the return. Their major advantage is that they allow missiles to be fully autonomous, as they guide the missile to the target platform without backup and jam them in for the kill. Unfortunately, active seekers without backup are also easy to decoy and jam.
      
      This seeker is an upgrarde over the fixed version. The radar emitter is mounted on a swivel head, allowing it to point in a different direction from the missile's direction of travel. This means it can widen its effective field of view by performing a conical scan, making it more likely to find a target. Additionally it can keep its seeker pointed at the target while performing evasive maneuvers, or just leading the target at an extreme angle of approach. `,
      factions: 'all',
      prefix: 'ACT',
      abbrev: 'RADAR',
      mainColor: 'green',
    },
    cost: {
      baseCost: 1.5,
      validatorCost: 0.25,
    },
    specs: {
      range: 2000,
      fov: 40,
      gain: 25,
      power: 150,
      valReliability: 0.95, // 95%
    },
    capabilities: {
      sigType: 'Active',
      isSteerable: 'Yes',
      steerAngle: 12,
      isTrackTgt: 'Yes',
      isPosTgt: 'Yes',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
  {
    id: 'SEACT',
    info: {
      name: 'Steerable Extended Active Radar Seeker',
      desc: `Active radar seekers find targets by sending out bursts of radio waves and listening for the return. Their major advantage is that they allow missiles to be fully autonomous, as they guide the missile to the target platform without backup and jam them in for the kill. Unfortunately, active seekers without backup are also easy to decoy and jam.
      
      This seeker is an upgrarde over the fixed version. The radar emitter is mounted on a swivel head, allowing it to point in a different direction from the missile's direction of travel. This means it can widen its effective field of view by performing a conical scan, making it more likely to find a target. Additionally it can keep its seeker pointed at the target while performing evasive maneuvers, or just leading the target at an extreme angle of approach. `,
      factions: 'all',
      prefix: 'ACT',
      abbrev: 'RADAR',
      mainColor: 'green',
    },
    cost: {
      baseCost: 3,
      validatorCost: 0.25,
    },
    specs: {
      range: 5000,
      fov: 40,
      gain: 25,
      power: 150,
      valReliability: 0.95, // 95%
    },
    capabilities: {
      sigType: 'Active',
      isSteerable: 'Yes',
      steerAngle: 12,
      isTrackTgt: 'Yes',
      isPosTgt: 'Yes',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
  // TEMP DATA NOT YET CORRECTED TO IN GAME VERSION
  {
    id: 'SAH',
    info: {
      name: 'Fixed Semi Active Radar Seeker',
      desc: `Lorem ipsum`,
      factions: 'all',
      prefix: 'SAH',
      abbrev: 'RADAR',
      mainColor: 'green',
    },
    cost: {
      baseCost: 0.5,
      validatorCost: 1,
    },
    specs: {
      range: 4000,
      fov: 50,
      gain: 0,
      power: 0,
      valReliability: 1, // 95%
    },
    capabilities: {
      sigType: 'Radar',
      isSteerable: 'No',
      isTrackTgt: 'Yes',
      isPosTgt: 'No',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
  {
    id: 'ARAD',
    info: {
      name: 'Fixed Anti-Radiation Seeker',
      desc: `Lorem ipsum`,
      factions: 'all',
      prefix: 'ARAD',
      abbrev: 'RADAR',
      mainColor: 'green',
    },
    cost: {
      baseCost: 2,
      validatorCost: 2,
    },
    specs: {
      range: 3000,
      fov: 50,
      gain: 0,
      power: 0,
      valReliability: 1, // 95%
    },
    capabilities: {
      sigType: 'Radar',
      isSteerable: 'No',
      isTrackTgt: 'Yes',
      isPosTgt: 'No',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
  {
    id: 'EO',
    info: {
      name: 'Electro-Optical Seeker',
      desc: `Lorem ipsum`,
      factions: 'ANS',
      prefix: 'PSV',
      abbrev: 'EO',
      mainColor: 'blue',
    },
    cost: {
      baseCost: 8,
      validatorCost: 5,
    },
    specs: {
      range: 3000,
      fov: 50,
      gain: 0,
      power: 0,
      valReliability: 1, // 95%
    },
    capabilities: {
      sigType: 'Radar',
      isSteerable: 'No',
      isTrackTgt: 'Yes',
      isPosTgt: 'No',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
  {
    id: 'WAKE',
    info: {
      name: 'Wake-Homing Seeker',
      desc: `Lorem ipsum`,
      factions: 'all',
      prefix: 'PSV',
      abbrev: 'WAKE',
      mainColor: 'red',
    },
    cost: {
      baseCost: 0.25,
      validatorCost: 0.5,
    },
    specs: {
      range: 1500,
      fov: 120,
      gain: 0,
      power: 0,
      valReliability: 1, // 95%
    },
    capabilities: {
      sigType: 'Radar',
      isSteerable: 'No',
      isTrackTgt: 'Yes',
      isPosTgt: 'No',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
  {
    id: 'THERM',
    info: {
      name: 'Wake-Thermal Seeker',
      desc: `Lorem ipsum`,
      factions: 'OSP',
      prefix: 'PSV',
      abbrev: 'THERM',
      mainColor: 'red',
    },
    cost: {
      baseCost: 0.25,
      validatorCost: 4,
    },
    specs: {
      range: 1500,
      fov: 120,
      gain: 0,
      power: 0,
      valReliability: 1, // 95%
    },
    capabilities: {
      sigType: 'Radar',
      isSteerable: 'No',
      isTrackTgt: 'Yes',
      isPosTgt: 'No',
      isSupportTrp: 'Yes',
      isMeasurePos: 'Yes',
      isMeasureVel: 'Yes',
      isValMem: 'No',
    },
  },
]
