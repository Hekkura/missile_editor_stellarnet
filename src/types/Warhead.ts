export interface MissileWarhead {
  name: string
  socketCost: number
  desc: string

  penetration: number
  damage: number
  damagePerFragment?: number
  blastRadius?: number
  penetrator?: Penetrator
  faction: 'ANS' | 'OSP' | 'all'
}

export interface Penetrator {
  damage: number
  penetration: number
}
