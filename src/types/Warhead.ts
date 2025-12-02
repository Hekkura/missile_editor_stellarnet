export interface MissileWarhead {
  id: string
  info: WarheadInfo
  cost: WarheadCost

  damage: WarheadDamage
  penetrator?: Penetrator
}

interface WarheadInfo {
  name: string
  desc: string
  faction: 'ANS' | 'OSP' | 'all'
  abbrev: string
}

interface WarheadCost {
  baseCost: number
}

interface WarheadDamage {
  penetration: number
  damage: number
  damagePerFragment?: number
  blastRadius?: number
}

interface Penetrator {
  damage: number
  penetration: number
  penDepth: number
}
