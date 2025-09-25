// Basic info
interface SeekerInfo {
  name: string
  desc: string
  factions: 'ANS' | 'OSP' | 'all'
  prefix: string
  mainColor?: string
  abbrev: string
}

// Cost structure
interface SeekerCost {
  baseCost: number
  validatorCost: number
}

// Technical specs
interface SeekerSpecs {
  range: number
  fov: number
  gain: number
  power: number
  valReliability: number
}

// Capabilities (boolean flags)
interface SeekerCapabilities {
  sigType: string
  isSteerable: 'Yes' | 'No'
  isTrackTgt: 'Yes' | 'No'
  isPosTgt: 'Yes' | 'No'
  isSupportTrp: 'Yes' | 'No'
  isMeasurePos: 'Yes' | 'No' | 'Direction Only'
  isMeasureVel: 'Yes' | 'No'
  isValMem: 'No' | number
  allAspectVal?: number
}

export interface MissileSeeker {
  id: string
  info: SeekerInfo
  cost: SeekerCost
  specs: SeekerSpecs
  capabilities: SeekerCapabilities
}

// Configuration state / User settings in build.
interface SeekerUserConfig {
  seekerBaseId: string // reference to SeekerBase
  isVal: boolean // is seeker set to validator?

  // User toggles (only available if base seeker supports them)
  settings: {
    smallTarget: boolean
    validatedOnly?: 'reject' | 'accept' // only available if validator present
  }
  effectiveCost: number
}

// export interface MissileSeekerDesc {
//   name: string
//   baseCost: number
//   validatorCost: number
//   isVal: boolean //is seeker set to validator?

//   desc: string
//   type: {
//     prefix: string
//     main: string
//     mainColor?: string
//   }
//   range: number
//   fov: number
//   isSteerable: 'Yes' | 'No'
//   valReliability: number
//   gain: number
//   power: number

//   isTrackTgt: 'Yes' | 'No'
//   isPosTgt: 'Yes' | 'No'
//   isSupportTrp: 'Yes' | 'No'
//   isMeasurePos: 'Yes' | 'No' | 'Direction Only'
//   isMeasureVel: 'Yes' | 'No'
//   isValMem: 'No' | number
//   factions: 'ANS' | 'OSP' | 'all'
// }

// export interface MissileSeekerShort {
//   name: string
//   cost: number
//   isVal: boolean
//   abbrev: string
//   mainColor?: string
// }
