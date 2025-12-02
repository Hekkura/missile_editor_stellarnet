export interface MissileSupportModule {
  id: string
  info: SupModInfo
  cost: SupModCost
}

interface SupModInfo {
  name: string
  desc: string
  stats: string
  scalable?: boolean //Is the module sacalable in warhead slot or not?
}

interface SupModCost {
  basecost: number
}
