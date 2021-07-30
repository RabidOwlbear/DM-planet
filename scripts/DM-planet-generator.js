class DMPGen {
  static RollPool = {
    tier: 6,
    tierResult: 12,
    name: 100,
    quirk: 20,
    trait: 12
  };
  static Folder = 'Dark Matter Planets';
  static Names = {
    1: 'Accretia',
    2: 'Aestoria',
    3: 'Agamemnon',
    4: 'Arcta',
    5: 'Argonautica',
    6: 'Argosa',
    7: 'Avadon',
    8: 'Barakus',
    9: 'Basilious',
    10: 'Caliburn',
    11: 'Capra',
    12: 'Card',
    13: 'Carthage',
    14: 'Cheryr',
    15: 'Creeste',
    16: 'Dirac',
    17: 'Dolketh',
    18: 'Dral',
    19: 'Dundaeleth',
    20: 'Ebras',
    21: 'Etevon',
    22: 'Eudoxus',
    23: 'Falkenraeth',
    24: 'Fractalus',
    25: 'Gaozu',
    26: 'Gauss',
    27: 'Geist',
    28: 'Gilgamesh',
    29: 'Gorroth',
    30: 'Gygaxia',
    31: 'Hadrian',
    32: 'Haipha',
    33: 'Halis',
    34: 'Hertzsprung',
    35: 'Hexaton',
    36: 'Honshu',
    37: 'Iouneria',
    38: 'Jazolan',
    39: 'Jiangshen',
    40: 'Jurani',
    41: 'Kesuat',
    42: 'Khas',
    43: 'Kierkegaard',
    44: 'Knara',
    45: 'Kryd',
    46: 'Lambdakai',
    47: 'Leto',
    48: 'Lithios',
    49: 'Locke',
    50: 'Mantra',
    51: 'Meazix',
    52: 'Mesioth',
    53: 'Miragis',
    54: 'Neversun',
    55: 'Niyrus',
    56: 'Nocoma',
    57: 'Numeoi',
    58: 'Orthos',
    59: 'Pallavaya',
    60: 'Parth',
    61: 'Petra',
    62: 'Praetorius',
    63: 'Prism',
    64: 'Quotica',
    65: 'Rama',
    66: 'Rendov',
    67: 'Respite',
    68: 'Rhoshimi',
    69: 'Roni',
    70: 'Rostenbar',
    71: 'Rutketh',
    72: 'Saqor',
    73: 'Sarte',
    74: "Sh'noras",
    75: 'Shrike',
    76: 'Sinh’non',
    77: 'Smotali',
    78: 'Solvus',
    79: 'Taizu',
    80: 'Tenebra',
    81: 'Tetrarka',
    82: 'Titanomach',
    83: 'Turnalis',
    84: 'Tycho',
    85: 'Tygan',
    86: 'Uighan',
    87: 'Velmarine',
    88: 'Verbina',
    89: 'Verrous',
    90: 'Vinfall',
    91: 'Voltaire',
    92: 'Voxiax',
    93: 'Weere',
    94: 'Wung Ma',
    95: 'Xanotea',
    96: 'Xenova',
    97: 'Yamato',
    98: 'Zagrazat',
    99: 'Zetatau',
    100: 'Zolda'
  };
  static NameModA = 'Prime';
  static NameModB = {
    1: 'I',
    6: 'VI',
    2: 'II',
    7: 'VII',
    3: 'III',
    8: 'VIII',
    4: 'IV',
    9: 'IX',
    5: 'V',
    10: 'X'
  };
  static NameModC = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z'
  };
  static Tier = {
    1: {
      name: 'tier1',
      results: {
        1: 'This planet is an elven resort world. Its true inhabitants number only a few thousand, but tourists flock to this place at certain times of the year, swelling its population to millions.',
        2: 'This planet is an elven resort world. Its true inhabitants number only a few thousand, but tourists flock to this place at certain times of the year, swelling its population to millions.',
        3: 'Megacities of impressive skyscrapers line this planet’s coasts, while the rest of its land is carefully districted into farms, which are worked by automatons to feed the populace.',
        4: 'Megacities of impressive skyscrapers line this planet’s coasts, while the rest of its land is carefully districted into farms, which are worked by automatons to feed the populace.',
        5: 'This planet is very similar to a younger High Terra or Earth, down to its inhabitants and their culture. However, it appears history took a different course here or that it has simply developed more slowly, granting a glimpse into an alternate future or a world of yesteryear. ',
        6: 'This planet is very similar to a younger High Terra or Earth, down to its inhabitants and their culture. However, it appears history took a different course here or that it has simply developed more slowly, granting a glimpse into an alternate future or a world of yesteryear. ',
        7: 'This planet already has millions of humanoid inhabitants, a young race which has already spread to the far corners of the globe, but only just mastered the finer points of making bronze tools.',
        8: 'This planet already has millions of humanoid inhabitants, a young race which has already spread to the far corners of the globe, but only just mastered the finer points of making bronze tools.',
        9: 'This world is large, wet, and fertile, creating excellent conditions for life, and indeed, it is home to many different plants and animals. It can comfortably support tens of millions of humanoids with only a modest amount of agricultural development.',
        10: 'This world is large, wet, and fertile, creating excellent conditions for life, and indeed, it is home to many different plants and animals. It can comfortably support tens of millions of humanoids with only a modest amount of agricultural development.',
        11: "Although this world looks rocky and lifeless on the surface, a close examination reveals the telltale signs of humanoid activity: road networks, canals, careful management of the planet's hardy native plant life. The hills and mountains of this planet host massive subterranean cities, fed by intense underground farming. The inhabitants come to the surface only rarely and harbor strange superstitions about what happens to people who are exposed to too much sunlight.",
        12: "Although this world looks rocky and lifeless on the surface, a close examination reveals the telltale signs of humanoid activity: road networks, canals, careful management of the planet's hardy native plant life. The hills and mountains of this planet host massive subterranean cities, fed by intense underground farming. The inhabitants come to the surface only rarely and harbor strange superstitions about what happens to people who are exposed to too much sunlight."
      }
    },
    2: {
      name: 'tier2',
      results: {
        1: 'With clean air, fresh water, fertile soil, and propitious seasons, this planet could be a Tier 1 world—if only it were bigger. Unfortunately, it is so tiny that it can house only a few hundred thousand comfortably',
        2: "This world is covered with savannas and semi- arid grasslands. It isn't such a bad place, but the thin soil and occasional, but severe droughts mean that humanoid colonists will never be able to develop this world into a lush Eden. ",
        3: "This planet's broken surface is riddled with jagged mountains, crags, and gorges. Other than that, it is quite suitable for colonization, but it will never be an easy place to drive a trade caravan or build a city. ",
        4: 'Once a Tier 1 world, this planet had to be downrated some time ago due to environmental degradation. Poor farming techniques created a dustbowl effect, and untreated industrial waste now fouls the once-beautiful forests. ',
        5: 'For centuries, the autocratic dynasty that has ruled this planet has refused to allow its population to grow either naturally or by immigration, in order to preserve the planet as a private pleasure resort. Other peoples have long since given up trying to change things. ',
        6: 'The immense mineral wealth of this planet, combined with plentiful geothermal energy, has made it so valuable to interstellar industrialists that they have taken up all the prime real estate, leaving little room for residential complexes. ',
        7: 'This planet has comfortable temperatures, fertile land, and abundant natural life; however, everything grown on this planet is nutritionally poor, containing a fraction of the calories that it should. ',
        8: 'All the fresh water on this planet is concentrated in polar ice caps, which means that the inhabitants are forced to live in tight clusters around the rivers of meltwater that trickle down toward the arid equator.',
        9: 'This planet, famous for its luxurious hot springs and stunning mountain vistas, remains sparsely populated. This is mainly because the air is laced with sulfur and ammonia, constantly belched out by thousands of volcanoes, creating a foul stench that few people can tolerate for long. ',
        10: 'A zealous conclave of rangers protects this lush, forested world, preserving it as a sanctuary for rare beasts and monsters. Small villages scattered along rivers and coastlines are tolerated for the services they provide, but the rangers are notoriously hostile to new arrivals. ',
        11: 'For some yet unexplained reason, half of the humanoids that die on this planet instantly reanimate as zombies. This constant threat hampers the total population of the planet, as zombie outbreaks periodically claim swathes of its inhabitants. ',
        12: 'Even though this planet has water, air, and habitable temperatures, three-quarters of its land is covered in “Black Glass,” a crystal-like mineral that permeates the top soil and allows no vegetation to grow.'
      }
    },
    3: {
      name: 'tier3',
      results: {
        1: 'This planet is overgrown with reddish alien plants, covering every inch of available land, all of which share a single, complex root system. Steadily, and with intent, these plants grow to strangle and envelop any foreign colonists, apparently driven by a psionic source originating within the planet itself. With proper management, and counter-psionic measures, it is possible to maintain a colony and keep the plants at bay, but it is unavoidable that the roots will sometimes steal people away at night. ',
        2: 'Only a few small specks of land can be found on this world, for it is home to vast oceans, populated by titanic sea creatures. Perhaps hidden splendors await beneath the waves, but its surface is plagued by periodic monsoons and vast tidal waves.',
        3: "The vast sand dunes and salt fields of this desert planet conceal some of the most profitable minerals in all of existence: underground caches of void crystals. However, those who head out into the desert alone also quickly learn that the land is ravaged by w'rnocturs, which slumber beneath the sands. ",
        4: ' The deep swamps and fetid bogs of this dark world may be able to support some life, but few will find it a pleasant place to live. On the other hand, it would be the perfect hideaway for hermits and monks that wish to escape the hustle and bustle of Tier 1 and 2 worlds. ',
        5: "This planet's thick jungles produce plenty of food and valuable exotic lumber, but colonization is made difficult by the gigantic, carnivorous plants. Life here is a constant battle to keep the man- eating weeds at bay.",
        6: " Situated right on the edge of its star's habitable zone, this planet is cold and unforgiving. Herds of hardy goats and moose roam its boreal regions, but even they must migrate south to escape the icy jaws of winter.",
        7: 'This planet is scarred by the legacy of a mage war. Vast regions have been reduced to uninhabitable plague-wrought lands or dangerous wild magic zones, ravaged by living spells. Only a handful of islands remain untouched by the devastation. ',
        8: ' On the surface, this world looks barren and lifeless, but a deeper scan reveals that it may be habitable—at least underground. Shimmering lakes of fresh water and huge caverns open the possibility of subterranean life, provided one is able to survive the many monsters that lurk in the dark. ',
        9: 'The wildlife on this planet has been afflicted by a demonic curse, causing animals to be larger and ferociously aggressive. Humanoid settlement is limited to a handful of fortified outposts—mainly in mountains and other easily-defensible terrain— at least until the curse can be lifted. ',
        10: 'The air here is thin and unwelcoming, meaning that this planet cannot sustain animal life without either technological or magical breathing apparatus. What buildings there are will be either airtight gnomish bunkers or else protected by a hallow spell.',
        11: 'Orbiting a binary star, this planet suffers from long, hot days with only the briefest of nights in which to gain some respite. Those who can adapt their sleeping patterns, however, are able to enjoy a complex calendar of solstices, perihelions, and apogees that grants great power to druids and plentiful inspiration for bards. ',
        12: 'Every twenty days, an ever-punctual electrical mega-storm sweeps across this planet. Its intense winds and barrage of lightning destroys crops and tears down all but the sturdiest of structures.'
      }
    },
    4: {
      name: 'tier4',
      results: {
        1: 'This planet is tidally-locked—that is to say, the same side of it always faces its star—causing extremely hot temperatures on one side, and bitterly cold temperatures on the other. Its atmosphere is also extremely thin, which accentuates the temperature gradient, and places another considerable hurdle in the way of survival. ',
        2: "The very chemical nature of this planet is hostile; its atmosphere is toxic to almost all living things (with the exception of certain insects), and it's also corrosive to specific metals and alloys. A ship entering the atmosphere might dissolve completely, or only lose a few critical nuts and bolts, depending on its composition. Moreover, the planet has a considerable amount of liquid water, but all of it is laden with dissolved metals, which must be filtered extensively before consumption. ",
        3: 'This world, as well as the others in its system, are newborns, only recently solidified from clumps of molten metal into true terrestrial bodies. Every inch of its surface is a rocky desert, blasted by windstorms and scorched by frequent volcanic eruptions. Perhaps it will be quite habitable in a billion years, but until then, it is a desolate, ever- shifting, lifeless wasteland. ',
        4: 'This rogue world was once ejected from its home system, and now flies aimlessly through the lifeless Black. It is a frozen ball of rock, bitterly cold, even on a cosmological scale. 5 With liquid water, suitable farmland, and moderate temperatures, this planet would undoubtedly be suitable as a Tier 2 or Tier 3 world, that is, were it not for the mega tarrasque (as per the tarrasque statistics, but Mega sized, occupying a 2,000 × 2,000 ft. square, with mega hit points, dealing mega damage, capable of swallowing any creature or ship that can fit within a 1,000-ft. square). A creature of unimaginable power and ferocity, it roams this planet, slaughtering anyone who steps foot on it. Powerful spells, orbital bombardments, and even arcane warheads have been rained down upon it, to no effect.',
        6: "Though it has been perhaps a thousand years since anything crawled across this planet's surface, its face is still marred by its last foolish inhabitants. The remnants of civilization here have long since crumbled away, but one thing is evidently clear: those who lived here managed to create an arsenal of arcane warheads, including one large enough to take a chunk out of the planet visible from space. There is no water here anymore, and little atmosphere. Dead magic pockets litter the world where the bombs detonated; the only remaining monument to the civilization's folly. ",
        7: 'At first blush, this world appears to be an undiscovered Tier 2, or even Tier 1, world. It is lush with life, and its surface is covered by jungles brimming with mega-trees. However, an uneasy silence meets any traveler here—despite abundant plant life, there are no animals to speak of; no birds, no fish, and no scurrying rodents. The only other living things are microorganisms—extremely dangerous ones at that. Any animal that is exposed directly to any part of this planet is sure to die from its diseases within a day. ',
        8: 'A sinister presence plagues this planet. Little more than a barren rock with a breathable atmosphere, it is otherwise simply lifeless, but those who remain on it too long discover that the entire world is connected to the Lower Planes and is replete with infernal power. By degrees, the planet drains the life-force of its residents, visiting them with nightmares and hallucinations which grow more frequent and more intense with time. At last, those on the planet go violently insane or merely wither away. ',
        9: 'A type of living crystal has taken root on this world, resulting in a dazzling spectacle of glass deserts and diamond-spike gardens that cover most of the world. Unfortunately, the crystal is extremely lethal to living creatures, crystallizing and spreading inside an exposed creature’s blood, killing it in mere minutes.',
        10: 'Though this planet is the perfect size for humanoids, its core contains an unknown and incredibly dense material, causing its gravity to be almost six times that of Earth’s. ',
        11: 'This planet’s star periodically releases massive bursts of radiation. No amount of magic can shield someone caught in one of these ion storms; the only hope is to retreat deep underground when they occur. Consequently, any kind of meaningful agriculture and colonization is impossible. ',
        12: 'Seismic activity on this planet is off the scale. No building can last more than a few days before being brought down by earthquakes, and anyone walking its surface must watch their step, for the ground is liable to swallow them up at any time'
      }
    },
    5: {
      name: 'tier5',
      results: {
        1: 'This planet has spectacular, mineral-rich rings, which sit dangerously on the precipice of an almost inescapable gravity well. ',
        2: "This planet's atmosphere is scoured with brilliantly- hued, persistent mega-storms that reach to the edge of space. ",
        3: 'Sitting just below the limit of stellar mass, this planet (called a brown dwarf) produces an abundance of harmful radiation and has a gravity well comparable to that of a star. ',
        4: 'This planet orbits close to its parent star, creating an almost binary system. In addition to being massive and uninhabitable, it is also incomprehensibly hot.',
        5: "Dark and bitterly cold, this gas giant orbits far from its star on a strange plane of motion, as if it were captured from another system long ago. Though its atmosphere contains a number of rare metals not found elsewhere in its system, it also contains a number of compounds that can eat away at a ship's hull. ",
        6: "This planet emits a field of arcane flux, which alternates between strengthening and destroying magic energy. The ship's Dark Matter engine and all of its magically-powered instruments malfunction every five to six seconds. ",
        7: 'Deep within layers of clouds, this planet contains a portal to the Elemental Plane of Fire, which violently and endlessly ejects a miles-wide spout of flame, occasionally scorching its moons and nearby spacecraft.',
        8: 'For unknown reasons, this planet, which emits a high-pitched buzzing on all lines of communication, has a twisted vector of gravity, intensely pulling nearby objects, not at all pulling objects of medium distance, and weakly repelling objects that are very distant to it. Rather than orbit, its numerous moons simply congregate in an uneasy stasis about its neutral region. ',
        9: "Made of etherstone, this planet's thousands of moons have perplexing characteristics. Depending on their rotations and velocities, two moons can collide, pass through one another, or even merge into a single larger moon. Because of this, the planet's orbit is a frenetic debris field of seemingly random collisions. ",
        10: "One of this planet's moons is large enough to be considered its own planet. Roll on the Tier 4 Traits table to determine its characteristics. ",
        11: "This gas giant is somewhat temperate, and certain layers of its atmosphere are breathable and adequately pressurized for animal life. Floating 'cloud cities' drift through these layers, along with rootless 'air trees' that drink water vapor using sail- like leaves. ",
        12: "The highly pressurized liquid in this planet's core happens to be a rare and incredibly valuable source of alchemical reagents. Despite the many logistical hurdles—the toxic atmosphere, punishing cold, constant hurricane winds—an intrepid mage has taken up residence here in a magically-shielded bubble, hoping to develop a way to extract the liquid gold."
      }
    },
    6: {
      name: 'tierX',
      results: {
        1: 'Seemingly less a planet and more a tightly- compacted asteroid field, this planetoid consists of thousands of floating islands of rock, metal, and ice floating in layered orbits around a ball of solid iron. Perhaps the planetoid used to be solid, but encountered a catastrophe of epic proportions, shattering the planet and heavily magnetizing the core. It seems this magnetization, as well as the heavy iron content found in every bit of rock and ice in orbit within the planetoid, is what holds the disparate chunks of land in their orbit.',
        2: 'Almost without explanation, this planetoid (if it can be called that) is shaped as an immense, circular plane, like a coin constantly flipping in its orbit, revealing first one face, then the other. It seems to be constructed of some unbelievably dense exotic metal, buried under some miles of soil and rock. No force maintains an artificial gravity on the flat planetoid, so all of its water congregates in a spherical ocean, atop the gravitational center. On this small ocean, gravity would appear to behave normally, but venturing further out onto the coin would reveal that gravity always points to the center, making the flat surface feel like a slope that grows ever steeper as one nears the edge. ',
        3: "All of the natural beasts on this planet are huge; they would be considered 'giant' or 'dire' beasts anywhere else in the 'verse.",
        4: "In contrast to being spherical (or even a vaguely globular shape), this planet has six faces, as a regular cube. Other than this bizarre construction, which relegates its north and south poles to the top and bottom faces of the cube, and bombards the other faces with intermittent but immense storms, this planet seems devoid of construction. How it maintains this shape is a mystery. The rest of its solar system, too, has perplexing geometries. It's nearest neighboring planet (whose orbit is closer to the parent star) is shaped as a tetrahedron, and its next nearest neighbor (further away from the star) is octahedral. The other two more distant planets have equally geometrical constructions. Most perplexing, the star itself (named Icosahedrax) has 20 sides, and radiates varying amounts of heat from its edges and its vertices. This star, too, seems more like a divine accident than a physical construction.",
        5: 'This planet is a single, colossal living creature— possibly the largest living thing in the ‘verse. Its face, which takes up almost an entire hemisphere, is vaguely humanoid, with a pair of eyes the size of oceans and a gaping maw lined with jagged mountain ranges. What it eats and how it propels itself through space is a mystery. With powerful psionics, it might even be possible to communicate with the planet (thereby discovering that its motives are irredeemably evil), but doing so would no doubt enrage the planet, which despises all lesser lifeforms.',
        6: 'This planet suffers from a mysterious temporal anomaly that randomly speeds up or slows down time on different parts of its surface. Two people separated by only a few miles could be the same age on one day, and ten years apart on the next. Communication across this world is routinely scrambled, as messages can arrive before they are even sent.',
        7: 'This planet is a luxury world, fabricated from scratch to have beautiful and diverse scenic vistas as far as the eye can see. It is climate-controlled to have year-round balmy weather and mild seasons. Even the wild food growing here is abundant and delicious. As perfect as it might seem, underneath the ground is a mechanical hellscape in charge of maintaining conditions on the surface. Those that live here are little more than a servant population, held under despotic rule and charged with maintenance on the "Paradise Machine."',
        8: 'This planet is clearly artificial, for its entire surface is constructed of mile-wide hexagonal tiles. Each tile is raised to its own height and seems to consist of only one biome or terrain type. For example, the north pole of the planet is covered in similar- looking tundra tiles, but one coast abruptly gives way to mountain tiles and another forms a steep cliff where the sea meets the land.',
        9: 'This small, gray world might appear to be a moon, but is actually a space station of incredible size, housing a weapon capable of razing entire worlds. ',
        10: 'This planet appears to be a normal Tier 2 or Tier 3 world, with vibrant plant life, comfortable temperatures, and plentiful liquid oceans. Upon closer inspection, it becomes evident that these oceans are not liquid water, but some other form of exotic fluid (liquid methane, blood, healing potion, mercury, tears, etc.) ',
        11: "This planet is simultaneously two worlds: an idyllic Garden World by day, and a nightmarish hellscape by night. It is not simply that the land takes on a grim or beautiful aspect as its light changes; it seems that two planets literally occupy the same space here, alternating at dawn and dusk. Moreover, the two worlds are fully disparate, for where one might have a temple and a shaded forest, the other has a lake of lava and a craggy mountain. Only visitors to this world seem to notice the shift. Unattended objects, including those brought by visitors, and the planet's residents (monstrous and otherwise) simply vanish when the shift occurs, and reappear when their world returns. ",
        12: 'This majestic ringworld was clearly the creation of an extremely advanced race. At its center is a small artificial sun, which bathes the ring in ever-present sunshine, and powers its numerous hidden mechanisms.'
      }
    }
  };
  static CivQuirk = {
    1: 'The inhabitants of this planet have built rapid transit systems all over its surface. ',
    2: 'The people of this planet are famous through the sector thanks to their incredibly catchy pop music. ',
    3: 'Parts of this planet are inhospitable due to centuries of uncompromising warfare. ',
    4: 'The people of this planet have domesticated a wide range of monsters. ',
    5: 'This planet is a hive of scum and villainy.',
    6: 'This planet is ruled by a wizarding bureaucracy whose rules are as arcane as its magics. ',
    7: 'An ancient, eternal dragon considers this entire planet to be part of its hoard. ',
    8: 'Major warring factions on this planet recently made peace with each other. ',
    9: 'This planet has been quarantined by scientists from a neighboring star system. ',
    10: 'Foundries, factories, and generators cover vast tracts of this industrial planet. ',
    11: "There is a bitter and rancorous dispute over what this planet's official name should be. ",
    12: "Interplanetary treaties enforce this planet's status as a secular haven. ",
    13: 'This planet has one massive city but no other significant conurbations. ',
    14: 'Sorcerers are born at an unusually high rate on this planet. ',
    15: 'Alcohol (and similar intoxicants) are expressly forbidden on this planet. ',
    16: 'The water-loving inhabitants of this planet prefer to build floating cities on its seas or oceans, and shun the land. ',
    17: 'The people of this planet exchange slips of paper as currency, rather than gold or silver. ',
    18: 'The people of this planet keep outrageous, hugely impractical fashion trends. ',
    19: 'This planet’s sole leader is selected through an annual lottery, stripped of all property, and forced to live on alms, but is otherwise all-powerful.',
    20: 'Levity of any sort is outlawed here. Laughter is punishable through public lashings, and dancing is punishable by death.'
  };
  static NatQuirk = {
    1: 'This planet is subject to an unusually high rate of meteorite strikes. ',
    2: 'All the native lifeforms on this planet are constructs. ',
    3: 'Something about this planet allows fossils to be preserved in large numbers and excellent condition.',
    4: 'This planet is dotted with ruined structures belonging to a long-dead humanoid culture. ',
    5: 'This planet has a pair of moons that have formed their own binary system. ',
    6: 'This planet has bright, rainbow-colored rings. ',
    7: 'The dawn chorus on this planet is sung not by birds, but by trees. ',
    8: 'Parts of this planet are subject to a hurricane season that is terrifyingly intense but mercifully brief. ',
    9: 'The naturally-occurring water on this planet tastes like grape juice. ',
    10: 'This planet is notable for producing several rare foodstuffs. ',
    11: 'Multicellular life recently evolved on this planet. ',
    12: 'This planet’s gravity varies from place to place. ',
    13: 'This planet is under the protection of a specific demigod.',
    14: 'Sunrise and sunset on this planet are incredibly beautiful. ',
    15: 'On this planet, wild magic zones and Feywild crossings are mainly found in deserts and mountains; the forests are entirely mundane. ',
    16: 'Mild but frequent planet-wide earthquakes have worn this planet’s rocks into smooth stones. ',
    17: 'The wildlife is cuddly and friendly, often taking to following around visitors. ',
    18: 'All of the flora, and even some of the wildlife, are mushrooms of incredible size and variety. ',
    19: 'This planet’s breeze sounds eerily like someone whispering just out of earshot. ',
    20: 'Flowers on this planet flee when approached.'
  };
  static StarTrait = {
    1: 'The star is nearing the end of its life, burning the last of its remaining hydrogen and compressing into a white dwarf. Its nearest planets are still warm, and will remain so for many millennia.',
    2: 'This staggering colossus of a star burns brightly and will not likely burn for long. Within perhaps ten million years, it will collapse into a supernova, consuming all its planets and burning dozens of other nearby systems to nothingness.',
    3: 'The two stars at the center of this system form a binary pair. They are locked in a dance of increasing rotational speed that sees one of the two being devoured by the other through constant stellar accretion. 4 Nestled within a nebula of astonishing size, this star is a newborn, casting its first rays and drawing in as much gas as it can from the surrounding cloud. Its planets are newly formed as well, and predictably hostile.',
    4: 'Nestled within a nebula of astonishing size, this star is a newborn, casting its first rays and drawing in as much gas as it can from the surrounding cloud. Its planets are newly formed as well, and predictably hostile.',
    5: 'This star is young and yellow, a mainline star that will nourish its planets for billions of years to come. However, it has a worrisome and mysterious dark spot that combs across its surface.',
    6: 'This star is extremely active, spewing unusually deadly radiation and producing multiple solar flares at once.',
    7: 'A blinding line of radiation ejects from either pole of this pulsar.',
    8: 'This neutron star is dead, but still clings to much of its heat. Its innermost planets may still be warmed by it for a few million years, but soon they too will freeze.',
    9: "An abandoned dyson ring from an ancient and forgotten civilization still wraps this star's circumference. Strange magic or technology must affix it in place.",
    10: 'This star, usually blue, periodically shifts to a yellow color and produces strange radio frequencies.',
    11: 'This star is swelling to its penultimate size, consuming its nearest planets as it grows until it eventually collapses in a dramatic supernova. Such a process takes millennia; now is just the slow expansion.',
    12: 'This star is a newborn, only recently exploded into existence among a cloud of interstellar gas, which it now hungrily and steadily devours'
  };
  static async initialize() {
    let folder = game.folders?.contents?.find((f) => f.name == DMPGen.Folder);
    if (!folder) {
      await Folder.create({
        name: 'Dark Matter Planets',
        type: 'JournalEntry'
      });
      folder = game.folders.contents.find((f) => f.name == 'Dark Matter Planets');
    }
    this.folderId = folder.id;
  }
  //dice roll function
  static roll(num) {
    return Math.floor(Math.random() * num + 1);
  }

  //quick roll all dice
  static get tableRolls() {
    return {
      id: this?.tableId,
      tier: DMPGen.roll(this.RollPool.tier),
      tierResult: DMPGen.roll(this.RollPool.tierResult),
      name: DMPGen.roll(this.RollPool.name),
      nameMod: DMPGen.roll(this.RollPool.name),
      quirkA: DMPGen.roll(this.RollPool.quirk),
      quirkB: DMPGen.roll(this.RollPool.quirk),
      trait: DMPGen.roll(this.RollPool.trait)
    };
  }

  static suffix(num) {
    //mod options
    let retStr = '';
    if (num > 50) {
      let rolls = {
        numA: DMPGen.roll(10) - 1,
        numB: DMPGen.roll(10) - 1,
        letter: DMPGen.roll(26),
        letterPlace: DMPGen.roll(3)
      };

      //arrange suffix characters
      if (rolls.letterPlace == 3) {
        retStr = `${rolls.numA}` + `${rolls.numB}` + `${this.NameModC[rolls.letter]}`;
      } else if (rolls.letterPlace == 2) {
        retStr = `${rolls.numA}` + `${this.NameModC[rolls.letter]}` + `${rolls.numB}`;
      } else {
        retStr = `${this.NameModC[rolls.letter]}` + `${rolls.numA}` + `${rolls.numB}`;
      }
    } else if (num > 20) {
      retStr = this.NameModB[DMPGen.roll(10)];
    } else {
      retStr = this.NameModA;
    }

    return retStr;
  }

  static makePlanet(obj, id) {
    const planetObj = {};
    const name = obj.tier == 6 ? this.Names[obj.name] + `-X` : this.Names[obj.name];
    const tierInfo =
      obj.tier == 6
        ? this.Tier[obj.tier].results[obj.tierResult] +
          `<br/>` +
          `<br/>` +
          this.Tier[DMPGen.roll(5)].results[DMPGen.roll(12)]
        : this.Tier[obj.tier].results[obj.tierResult];

    console.log(`
        ---------------------------------
        name: ${name} 
        Tier: ${obj.tier}
        civQuirk: ${obj.quirkA}
        natQuirk: ${obj.quirkB}
        starTrait: ${obj.trait}
        ---------------------------------
        `);

    planetObj.suffix = this.suffix(obj.nameMod);
    planetObj.name = name;
    planetObj.tier = obj.tier;
    planetObj.tierInfo = tierInfo;
    planetObj.civQuirk = this.CivQuirk[obj.quirkA];
    planetObj.natQuirk = this.NatQuirk[obj.quirkB];
    planetObj.starTrait = this.StarTrait[obj.trait];
    if (id) {
      planetObj.folder = id;
    }
    return planetObj;
  }

  static async planetJournal(journalObj) {
    console.log(`
    ---------------------------------
    name: ${journalObj.name} 
    Tier: ${journalObj.tier}
    tierInfo: ${journalObj.tierInfo}
    civQuirk: ${journalObj.civQuirk}
    natQuirk: ${journalObj.natQuirk}
    starTrait: ${journalObj.starTrait}
    ---------------------------------
    `);
    let name = journalObj.name + ' ' + journalObj.suffix;
    let img = DMPGen.planetImage();
    let content = `
          
          <h1>${name} - Tier ${journalObj.tier}</h1>
          <div style="display: flex; justify-content: space-between;">
            <div style="width: 50%;">
              <p>${journalObj.tierInfo}</p>
            </div>
            <div>
              <img src="/modules/DM-planet/images/planet/${img}" height="300" width="300">
            </div>  
          </div>
          <div>
          <br/>
          <h2>Civilization Quirk:</h2>
          <p>${journalObj.civQuirk}</p>
          <br/>
          <h2>Natuarl Quirk:</h2>
          <p>${journalObj.natQuirk}</p>
          <br/>
          <h2>Star Trait:</h2>
          <p>${journalObj.starTrait}</p>
          </div>
          `;
    await JournalEntry.create({
      content: content,
      folder: journalObj.folder,
      name: `Planet ${name}`
    });
  }

  static async genPlanet() {
    await DMPGen.initialize();
    DMPGen.planetJournal(DMPGen.makePlanet(DMPGen.tableRolls, this.folderId));
  }
  static planetImage() {
    let num = Math.floor(Math.random() * 50 + 1);
    num >= 10 ? (num = `00${num}.webp`) : (num = `000${num}.webp`);
    return num;
  }
}
