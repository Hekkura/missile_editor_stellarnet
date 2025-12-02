export interface Avionics {
  id: string
  info: AvionicsInfo
  cost: AvionicsCost

  terminal: TerminalManeuver
}

interface AvionicsInfo {
  designation: string
  name: string
  desc: string
}

interface AvionicsCost {
  basecost: number
}

interface TerminalManeuver {
  designation: string
  name: string
  cost: number
}
