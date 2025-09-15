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
    totalSocketCount: 7,
    engineMaxSocketCount: 6,
    warheadMaxSocketCount: 3,

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
      
      - T. Meadows, LT`,
  },
  {
    designation: 'SDM-100',
    name: 'Lunge',
    descriptionShort: 'Size 1 Missile',
    size: 1,

    description: `This missile takes the tried-and-true SGM-1 Riposte body and adds a high speed boost stage, allowing the missile to get out to long range quickly before switching to a more maneuverable but slower second stage.
      
      This missile is significantly longer than the basic Riposte, and doesn't fit into the compact VLS systems.`,

    baseHealth: 10,
    wallThickness: 0.05,
    socketWeight: 0.33,
    totalSocketCount: 7,
    engineMaxSocketCount: 6,
    warheadMaxSocketCount: 5,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 0,
    warheadAsSupportSlot: 'No',
    warheadLock: 'BF-EL',

    factions: 'All',
    loreBlurb: `Few years back, there was an Alliance Trident pilot who was quoted saying, "Out in the Black, there's only two kinds of spacecraft : Fighters and tagets.
      
      He wasn't joking. When Alliance fighters started to shit into more of an interceptor role, anything that wasn't packing high agility missiles might as well be scrap metal.
      Now you'll notice I said 'Trident' and not 'Tanto', meaning that the SDM Lunge was developed back when the Protectorate was still willing to give the Alliance the time of day. Both sides have it in their armories.

      And you can bet I'm scared as hell about it.

      - T. Meadows, LT`,
  },
  {
    designation: 'SGM-200',
    name: 'Tempest',
    descriptionShort: 'Size 2 Missile',
    size: 2,

    description: `The SGM-2 body has been a tried and true mainstay of the Alliance fleet for over a century. Missiles built on this frame has a healthy balance of speed, flight time, and explosive power.`,

    baseHealth: 30,
    wallThickness: 0.05,
    socketWeight: 1.0,
    totalSocketCount: 10,
    engineMaxSocketCount: 9,
    warheadMaxSocketCount: 6,

    fixedSocketCostMult: 0.75,
    varSocketCostMult: 1,

    baseBodyCost: 2,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 1,
    warheadAsSupportSlot: 'Yes',

    factions: 'All',
    loreBlurb: `This is a Graznovian design, the Naval Office can't fool me. I don't know which design it is, but I'd put my money on the Constrictor, just now it doesn't have those ridiculous steering fins for atmospheric flight.
      Honestly there's so many Tempests sitting around that some of them could be aged in the double-digits, they're just that ubiquitous. I probably sound like I'm criticizing this thing but it's really a timeless piece of military hardware, you could design the Tempest for any role as long as the Naval Office has the parts for it and Winchester's in a good mood.
      
      See, there's positives and negatives to designing something so generalist. You have countless mission profiles to pick from but you're always going to be sacrificing something if you try to refine it any further, much to the Naval Office's chagrin. 
      Whatever the case, it's better to be sending these than to be on the receiving end.
      
      - T. Meadows, LT`,
  },
  {
    designation: 'SDM-200',
    name: 'Typhoon',
    descriptionShort: 'Size 2 Missile',
    size: 2,

    description: `A cut-down version of the SGM-2 series of missiles with a booster attached, designed for defensive purposes. This missile can get out to long range quickly and then transition to a highly maneuverable final stage excellent for taking out small threats like missiles and spacecraft.`,

    baseHealth: 25,
    wallThickness: 0.05,
    socketWeight: 0.75,
    totalSocketCount: 7,
    engineMaxSocketCount: 6,
    warheadMaxSocketCount: 5,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 2,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 1,
    warheadAsSupportSlot: 'No',
    warheadLock: 'BF',

    factions: 'All',
    loreBlurb: `Probably the last time you'll ever see a collaboration between the Otdel and the Naval Office. About as divisive as the Superbrain when that was being offered up for military use. 
      Lightweight, hyper-agile, only designed to be used by - and against - spacecraft. Nobody's realy sure who rolled out the original design in Elshout, but the Alliance will make sure you know that they did the lion's share of the work, which isn't true at all.
      
      Which is also funny as hell, but I'm not really supposed to say that. You can't go five minutes on the StellarNet before you see some blurry Alliance Navy recording of a typhoon doing pirouettes and blowing up a Sturgeon somewhere out in Bethel's backwater.
      
      Funny that the ANO never talks about how deadly Typhoons really are when they're in the hands of a Barracuda pilot, but I guess that's just a messed-up way to describe poetic justice. 
      Thing is if you're really into hardware like myself, you can pretty much get a bead on the war situation just by reading hardware specs. 
      Knowing some war history is good too, since after all, war is the great innovator - it just helps when you can spin it your way.
      
      - T. Meadows, LT`,
  },
  {
    designation: 'SGT-300',
    name: 'Pilum',
    descriptionShort: 'Size 3 Torpedo',
    size: 3,

    description: `Torpedos focus on dealing incredible damage at short ranges, and the SGT-3 is no exception. They are usually launched inside a target's point defense range, and thus must dedicate significant weight to protection in order to minimize their chance of being immediately destroyed.
      This makes torpedos extremely heavy and slow.`,

    baseHealth: 160,
    wallThickness: 0.25,
    socketWeight: 3,
    totalSocketCount: 14,
    engineMaxSocketCount: 13,
    warheadMaxSocketCount: 9,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 1,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 1,
    warheadAsSupportSlot: 'Yes',

    factions: 'All',
    loreBlurb: `Space/Guided Torpedo, Mk300 Common Broadband Guidance System, but everybody just calls them Pilums. Not satisfied until it could be mounted on every platform imaginable, the Brass demanded munitions that could field enough of a payload to crack open stations like a tin can. The Naval Office, in return, brought out an oversized metal tube filled with high-grade explosives.

      Everybody thought it was a joke, you know? Most of the space for propellant was replaced by the payload and to cut costs the Naval Office stripped out the high agility thruster rig. Slow, difficult to aim, none of the usual doctrinen of Alliance missile design to be found here.

      This changed when the Graznovians rolled around and decided to start throwing on blowout panels on their ships. It looked dumb as hell but it turned out that preventing our missiles from actually impacting the hull made the penetration quality absolutely tank, until Admiral Locke and the ANO make a purpose-built Pilum (now known as the 350-Mace) direct its actual payload forward on impact, drilling through spaced armor and delivering its entire warhead at full effectiveness. 
      Everybody stopped complaining after that.

      - T. Meadows, LT`,
  },
  {
    designation: 'SGM-H-200',
    name: 'Cyclone',
    descriptionShort: 'Size 2 Hybrid Missile',
    size: 2,

    description: `Hybrid missiles combine the characteristics found in two other classes of missiles. The SGM-H-2 is a Size 2 missile built from a long-range cruise bus which offers moderate speed and long range to deliver a Size 1 sprint vehicle to the target at high speed.
      These missiles excel at punching through dense point defense networks and dealing moderate damage.`,

    baseHealth: 25,
    wallThickness: 0.05,
    socketWeight: 0.8,
    totalSocketCount: 8,
    engineMaxSocketCount: 7,
    warheadMaxSocketCount: 7,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 4,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 1,
    warheadAsSupportSlot: 'No',

    factions: 'ANS',
    loreBlurb: `Someone in the Alliance really liked what the OSP did with the Balestra, so much that they formed a team to try their hand at a larger variant of it. Everybody knows the shape of the Balestra but it doesn't have that needed punch to actually intimidate the more grizzled pirates and outlaws. So, take the Balestra and strip out most of the agility rigging, stick on a Tempest lower, done, you've got a Cyclone Sprint Missile.
      
      I can't tell if this was the Alliance trying to one-up the OSP, some way to clear up the overfilled stocks of Tempest missile frames sitting around, or just the usual Alliance doctrine of upsizing everything, but the Cyclone makes for a surprisingly effective asset when it's being used for long-range precision strikes.
      Winchester's personal engineering bureau always complains about the fuel efficiency but that doesn't mean there's something wrong about it. More than plenty of revisionists cooped up in there. 
      
      - T. Meadows, LT`,
  },
  {
    designation: 'SGM-H-300',
    name: 'Atlatl',
    descriptionShort: 'Size 3 Hybrid Missile',
    size: 3,

    description: `Hybrid missiles combine the characteristics found in two other classes of missiles. The SGM-H-3 is a Size 3 missile built from a long-range cruise bus which offers moderate speed and long range to deliver a Size 2 sprint vehicle to the target at high speed.
      These are some of the most expensive and dangerous missiles that can be found, and only two or three are required to destroy a heavy target.`,

    baseHealth: 60,
    wallThickness: 0.05,
    socketWeight: 1.8,
    totalSocketCount: 10,
    engineMaxSocketCount: 9,
    warheadMaxSocketCount: 9,

    fixedSocketCostMult: 1,
    varSocketCostMult: 1,

    baseBodyCost: 5,
    seekerSlots: 1,
    supportSlots: 1,
    multifunctionSlots: 1,
    warheadAsSupportSlot: 'No',

    factions: 'ANS',
    loreBlurb: `Even backed by the combined might of Falke-Tethys and New Cydonia, the Naval Office just cannot find a decent way to improve on the Tempest missile. The absolute disaster that was the Sidearm Missile development project and its merciless cost overruns pretty much put the nail in the coffin and, rightly-so, had caused Admiral Arke Winchester to swear off any further evolution of the Tempest for quite a while.

    But the Naval Office wasn't done, in high morale from the Cyclone, the same design team managed to negotiate and attempt for a low-cost 'hybrid' of both the Tempest and the Pilum, which Winchester begrudgingly agreed to.
    The result was taking a modified Tempest, swapping out the standard engine for the one you'd find on the Marine FROG, stuffing all of that into a hollowed out Pilum shell, and stamping 'Atlatl' right on the fuselage. 
    An elegant solution if trite - for a missile - and an incredibly effective sprint missile that has racked up more sunk ships than Winchester would care to admit. Atlatls are becoming increasingly common and an unwelcome presence in OSP space.

    - T. Meadows, LT
    `,
  },
  {
    designation: 'CM-400',
    name: 'Container',
    descriptionShort: 'Container Torpedo',
    size: 4,

    description: `At the opening of the conflict the Protectorate found themselves with a plethora of storage capacity but little use for it. 
      The CM-4 Container Missile was a hastily engineered fever dream, taking the shipping containers filling merchant stations around the system and converting them into makeshift missiles which could take advantage of the massive container racks adorning many of the commandeered ships.

      Due to their size, they have incredible explosive potential and fuel capacity. Additionally, the lack of size constraints on electronics allows for easier integration of seekers and support modules using COTS components.`,

    baseHealth: 150,
    wallThickness: 0.2,
    socketWeight: 4.0,
    totalSocketCount: 14,
    engineMaxSocketCount: 13,
    warheadMaxSocketCount: 11,

    fixedSocketCostMult: 0.5,
    varSocketCostMult: 0.5,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 2,
    warheadAsSupportSlot: 'No',

    factions: 'OSP',
    loreBlurb: `SAVED LOG - STELLARNET 777
      1: NOVANCE
      2: CKEYS
      
      CKEYS: I hope you're aware that turning a bunch of shipping containers into flying bombs is a great way to get the Alliance coming after your ass. You can tell your guys I'll do the job but this is not going to end well.
      
      NOVANCE: why, what's wrong
      
      CKEYS: These don't put out any obvious signal that it's a missile. Using these is going to give the Alliance justification to start destroying any container ship they come across.
      
      NOVANCE: the seeker i supplied u functions almost exactly like the Alliance Tempest, any warning radar will tag these as missiles as soon as they detect activation
      
      CKEYS: That doesn't stop solve the problem, you're risking a lot just by doing this.
      
      NOVANCE: fuuuuuuuuu shut up stop talking
      
      NOVANCE: the Alliance already does VBSS on any OSP ship they find, if they get in range and don't realize that they are AT WAR with us, they deserve whatever we fire at them, guns or containers
      
      NOVANCE: don't worry about it, constantine knows what he's doing, he has more experience combined than all of us and we need whatever edge we can get - so pls, just do ur job, ok?`,
  },
  {
    designation: 'CM-S-400',
    name: 'Container',
    descriptionShort: 'Container Torpedo',
    size: 4,

    description: `At the opening of the conflict the Protectorate found themselves with a plethora of storage capacity but little use for it. 
      The CM-4 Container Missile was a hastily engineered fever dream, taking the shipping containers filling merchant stations around the system and converting them into makeshift missiles which could take advantage of the massive container racks adorning many of the commandeered ships.

      Due to their size, they have incredible explosive potential and fuel capacity. Additionally, the lack of size constraints on electronics allows for easier integration of seekers and support modules using COTS components.
      
      This variant of the missile is primarily used for supporting salvos of other missiles, with the main warhead bay repurposed for support modules only, it contains a small warhead slot at the front for modest backup damage.`,

    baseHealth: 150,
    wallThickness: 0.2,
    socketWeight: 4.0,
    totalSocketCount: 14,
    engineMaxSocketCount: 13,
    warheadMaxSocketCount: 11,

    fixedSocketCostMult: 0.5,
    varSocketCostMult: 0.5,

    baseBodyCost: 0,
    seekerSlots: 1,
    supportSlots: 0,
    multifunctionSlots: 2,
    warheadAsSupportSlot: 'Support Only',

    factions: 'OSP',
    loreBlurb: `SAVED LOG - STELLARNET 777
      1: NOVANCE
      2: CKEYS
      
      CKEYS: I hope you're aware that turning a bunch of shipping containers into flying bombs is a great way to get the Alliance coming after your ass. You can tell your guys I'll do the job but this is not going to end well.
      
      NOVANCE: why, what's wrong
      
      CKEYS: These don't put out any obvious signal that it's a missile. Using these is going to give the Alliance justification to start destroying any container ship they come across.
      
      NOVANCE: the seeker i supplied u functions almost exactly like the Alliance Tempest, any warning radar will tag these as missiles as soon as they detect activation
      
      CKEYS: That doesn't stop solve the problem, you're risking a lot just by doing this.
      
      NOVANCE: fuuuuuuuuu shut up stop talking
      
      NOVANCE: the Alliance already does VBSS on any OSP ship they find, if they get in range and don't realize that they are AT WAR with us, they deserve whatever we fire at them, guns or containers
      
      NOVANCE: don't worry about it, constantine knows what he's doing, he has more experience combined than all of us and we need whatever edge we can get - so pls, just do ur job, ok?`,
  },
]
