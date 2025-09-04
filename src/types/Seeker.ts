export interface MissileSeekerDesc {
  name: string
  baseCost: number
  validatorCost: number
  isVal: boolean //is seeker set to validator?

  desc: string
  type: {
    prefix: string
    main: string
    mainColor?: string
  }
  range: number
  fov: number
  isSteerable: 'Yes' | 'No'
  valReliability: number
  gain: number
  power: number

  isTrackTgt: 'Yes' | 'No'
  isPosTgt: 'Yes' | 'No'
  isSupportTrp: 'Yes' | 'No'
  isMeasurePos: 'Yes' | 'No' | 'Direction Only'
  isMeasureVel: 'Yes' | 'No'
  isValMem: 'No' | number
  factions: 'ANS' | 'OSP' | 'all'
}

export interface MissileSeekerShort {
  name: string
  cost: number
  isVal: boolean
  abbrev: string
  mainColor?: string
}
