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

  loreBlurb: string
}
