export interface SlotType {
  index: number
  name: 'Seeker' | 'Warhead' | 'Support' | 'Avionics' | 'Multifunction'
  socketCount?: number
  isFixed?: boolean
}
