import type { MissileBody } from '@/types/Body'

export const missileBodyData: MissileBody[] = [
  {
    designation: 'SGM-100',
    name: 'Balestra',
    descriptionShort: 'Size 1 Missile',

    description:
      "Missiles based on the SGM-1 body are fast and agile, able to maneuver in tight spaces and face their taget only a split second after firing. Their nimble maneuvering characteristics make them excellent for intercepting other missiles, or for use against lighter warships when fitted with the correct warhead. Unfortunately, due to the frame's small size, it has limited capacity for fuel and explosive material.",

    baseHealth: 10,
    wallThickness: 0.05,
    socketWeight: 0.33,
    totalSocketCount: 9,
    engineMaxSocketCount: 5,
    warheadMaxSocketCount: 4,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    loreBlurb: `Very rare to see such a specialized weapon from the OSP, let alone something the Alliance still uses considering the state of the sector. Overall, generally effective light missile, means you'll see it deployed in spades as a result. The engine is as basic as you can get so it's a little more demanding on fuel but aside from sprint missiles, you won't really be able to match a Balestra in speed and accuracy.`,
  },
  {
    designation: 'SGM-200',
    name: 'Tempest',
    descriptionShort: 'Size 2 Missile',

    description: 'General purpose missile body. Effective in large numbers.',

    baseHealth: 30,
    wallThickness: 0.05,
    socketWeight: 1.0,
    totalSocketCount: 10,
    engineMaxSocketCount: 5,
    warheadMaxSocketCount: 5,

    fixedSocketCostMult: 0.75,
    varSocketCostMult: 1,

    loreBlurb: '',
  },
]
