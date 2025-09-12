export interface MissileBody {
  designation: string
  name: string
  descriptionShort: string
  description: string
  size: number

  baseHealth: number
  wallThickness: number
  socketWeight: number

  totalSocketCount: number
  engineMaxSocketCount: number
  warheadMaxSocketCount: number

  fixedSocketCostMult: number
  varSocketCostMult: number

  baseBodyCost: number
  seekerSlots: number
  supportSlots: number
  multifunctionSlots: number
  warheadAsSupportSlot: 'Yes' | 'No' | 'Support Only'

  loreBlurb: string
  factions: 'ANS' | 'OSP' | 'All'
}
