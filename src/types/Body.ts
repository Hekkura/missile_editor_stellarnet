//Basic identification and metadata
interface MissileBodyInfo {
  designation: string //Primary Key
  name: string
  descriptionShort: string
  description: string
  loreBlurb: string
  factions: 'ANS' | 'OSP' | 'All'
}

// Physical characteristics
interface MissileBodyPhysics {
  size: number
  baseHealth: number
  wallThickness: number
  socketWeight: number
}

// Socket/mounting system
interface MissileBodySockets {
  totalSocketCount: number
  engineMaxSocketCount: number
  warheadMaxSocketCount: number
  seekerSlots: number
  supportSlots: number
  multifunctionSlots: number
  warheadAsSupportSlot: 'Yes' | 'No' | 'Support Only'
  warheadLock?: 'BF-EL' | 'BF' | 'No'
}

// Economic/cost system
interface MissileBodyEconomics {
  baseBodyCost: number
  fixedSocketCostMult: number
  varSocketCostMult: number
}

//==========================================================================
export interface MissileBody {
  id: string // Add unique ID
  info: MissileBodyInfo
  physics: MissileBodyPhysics
  sockets: MissileBodySockets
  economics: MissileBodyEconomics
}

//==========================================================================

// export interface MissileBody {
//   designation: string
//   name: string
//   descriptionShort: string
//   description: string
//   size: number

//   baseHealth: number
//   wallThickness: number
//   socketWeight: number

//   totalSocketCount: number
//   engineMaxSocketCount: number
//   warheadMaxSocketCount: number

//   fixedSocketCostMult: number
//   varSocketCostMult: number

//   baseBodyCost: number
//   seekerSlots: number
//   supportSlots: number
//   multifunctionSlots: number
//   warheadAsSupportSlot: 'Yes' | 'No' | 'Support Only'
//   warheadLock?: 'BF-EL' | 'BF' | 'No'

//   loreBlurb: string
//   factions: 'ANS' | 'OSP' | 'All'
// }
