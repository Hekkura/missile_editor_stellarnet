import type { MissileBody } from '@/types/Body'

export const missileBodyData: MissileBody[] = [
  {
    designation: 'SGM-100',
    name: 'Balestra',
    descriptionShort: 'Size 1 Missile',
    size: 1,

    description: `Missiles based on the SGM-1 body are fast and agile, able to maneuver in tight spaces and face their target only a split second after firing.
      
    Their nimble maneuvering characteristics make them excellent for intercepting other missiles, or for use against lighter warships when fitted with the correct warhead.
      
    Unfortunately, due to the frame's small size, it has limited capacity for fuel and explosive material.`,

    baseHealth: 10,
    wallThickness: 0.05,
    socketWeight: 0.33,
    totalSocketCount: 9,
    engineMaxSocketCount: 8,
    warheadMaxSocketCount: 6,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'No',

    factions: 'All',
    loreBlurb: `Very rare to see such a specialized weapon from the OSP, let alone something the Alliance still uses considering the state of the sector. Overall, generally effective light missile, means you'll see it deployed in spades as a result. The engine is as basic as you can get so it's a little more demanding on fuel but aside from sprint missiles, you won't really be able to match a Balestra in speed and accuracy. 
    
    Filling the tank with just enough fuel to cover its usual mission profile - the Riposte - means these typically have a life expectancy of seconds since a decent hit or two from a Defender or otherwise will just vaporize it, but any self-respecting Spacer knows that.
    
    
    - T.Meadows, LT`,
  },
  {
    designation: 'SGM-200',
    name: 'Tempest',
    descriptionShort: 'Size 2 Missile',
    size: 2,

    description: 'General purpose missile body. Effective in large numbers.',

    baseHealth: 30,
    wallThickness: 0.05,
    socketWeight: 1.0,
    totalSocketCount: 10,
    engineMaxSocketCount: 5,
    warheadMaxSocketCount: 5,

    fixedSocketCostMult: 0.75,
    varSocketCostMult: 1,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 1,
    warheadAsSupportSlot: 'Yes',

    factions: 'All',
    loreBlurb: '',
  },
  {
    designation: 'SGT-300',
    name: 'Pilum',
    descriptionShort: 'Size 3 Torpedo',
    size: 3,

    description:
      'The Pilum is a heavy, slow torpedo body designed to deliver large warheads to capital ships. Its reinforced frame and thicker casing allow it to survive point-defense fire longer than lighter designs.',

    baseHealth: 160,
    wallThickness: 0.3,
    socketWeight: 3,
    totalSocketCount: 12,
    engineMaxSocketCount: 4,
    warheadMaxSocketCount: 8,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 1,
    warheadAsSupportSlot: 'Yes',

    factions: 'All',
    loreBlurb:
      'Designed for siege warfare and fleet engagements, the Pilum is a terror to any unshielded vessel caught in its slow but inevitable path.',
  },
  {
    designation: 'SGM-H-200',
    name: 'Cyclone',
    descriptionShort: 'Size 2 Hybrid Missile',
    size: 2,

    description:
      'The Cyclone is a reinforced missile body optimized for high-yield warheads. Less agile than its standard counterparts but much more durable.',

    baseHealth: 25,
    wallThickness: 0.08,
    socketWeight: 1.5,
    totalSocketCount: 11,
    engineMaxSocketCount: 4,
    warheadMaxSocketCount: 7,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 1,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'No',

    factions: 'ANS',
    loreBlurb:
      'Cyclones are often fielded in smaller numbers due to their cost, but each one packs enough punch to cripple a destroyer.',
  },
  {
    designation: 'SGM-H-300',
    name: 'Atlatl',
    descriptionShort: 'Size 3 Hybrid Missile',
    size: 3,

    description:
      'A large, durable missile frame intended for extended-range strikes. Trades maneuverability for resilience and payload capacity.',

    baseHealth: 80,
    wallThickness: 0.12,
    socketWeight: 3.0,
    totalSocketCount: 14,
    engineMaxSocketCount: 5,
    warheadMaxSocketCount: 9,

    fixedSocketCostMult: 1.3,
    varSocketCostMult: 1.25,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 1,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'No',

    factions: 'ANS',
    loreBlurb: '',
  },
  {
    designation: 'CM-400',
    name: 'Container',
    descriptionShort: 'Container Missile',
    size: 3,

    description:
      'A missile body designed to carry multiple submunitions. On detonation, it releases a swarm of smaller projectiles to overwhelm defenses.',

    baseHealth: 130,
    wallThickness: 0.06,
    socketWeight: 2.0,
    totalSocketCount: 12,
    engineMaxSocketCount: 3,
    warheadMaxSocketCount: 9,

    fixedSocketCostMult: 0.9,
    varSocketCostMult: 1.1,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 1,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'No',

    factions: 'OSP',
    loreBlurb:
      'Containers are considered inefficient against armored targets but devastating against light craft and fleets that cluster together.',
  },
  {
    designation: 'CM-S-400',
    name: 'Container',
    descriptionShort: 'Container Missile',
    size: 3,

    description:
      'An advanced variant of the Container body. Fitted with guidance systems in each submunition, allowing the swarm to track individual targets.',

    baseHealth: 45,
    wallThickness: 0.07,
    socketWeight: 2.2,
    totalSocketCount: 12,
    engineMaxSocketCount: 3,
    warheadMaxSocketCount: 9,

    fixedSocketCostMult: 1.1,
    varSocketCostMult: 1.3,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 1,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'Support Only',

    factions: 'OSP',
    loreBlurb:
      'Expensive to produce, but highly effective at bypassing point-defense networks due to the intelligent dispersal pattern.',
  },
  {
    designation: 'SDM-200',
    name: 'Typhoon',
    descriptionShort: 'Size 2 Sprint Missile',
    size: 2,

    description:
      'The Typhoon is designed for maximum speed over a short distance. It sacrifices fuel efficiency and payload space for raw acceleration.',

    baseHealth: 25,
    wallThickness: 0.04,
    socketWeight: 0.9,
    totalSocketCount: 9,
    engineMaxSocketCount: 6,
    warheadMaxSocketCount: 3,

    fixedSocketCostMult: 0.8,
    varSocketCostMult: 0.9,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 1,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'No',

    factions: 'All',
    loreBlurb:
      'Often used as an interceptor missile, the Typhoon is notorious for its short range but unmatched closing speed.',
  },
  {
    designation: 'SDM-100',
    name: 'Lunge',
    descriptionShort: 'Size 1 Sprint Missile',
    size: 1,

    description:
      'A small, ultra-light missile body intended for rapid strike missions. Extremely fast but fragile and limited in payload capacity.',

    baseHealth: 8,
    wallThickness: 0.03,
    socketWeight: 0.25,
    totalSocketCount: 7,
    engineMaxSocketCount: 5,
    warheadMaxSocketCount: 2,

    fixedSocketCostMult: 0.7,
    varSocketCostMult: 0.8,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'No',

    factions: 'All',
    loreBlurb: '',
  },
]
