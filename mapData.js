// --------------------------------------------------
// MINECRAFT MAP DATA
// --------------------------------------------------
//
// Technical information about the Minecraft map.
// This file contains coordinates and other map-wide
// configuration values.
//
// Edit this file when the map itself changes.
// --------------------------------------------------

//top left coords
const mapOrigin = {
    x: -448,
   z: -752
};

const coordinateOffset = {
    x: 0,
    z: 1
};

// --------------------------------------------------
// LOCATIONS
// --------------------------------------------------
//
// Each location has:
// - name: the name shown to the user
// - x / z: Minecraft coordinates
// - coordinates (optional): day-stamped { day, x, z } entries; each entry
//   applies from its day until a later entry, with x / z as the fallback
// - photos (optional): day-stamped images
// - startDay: when the location first appears
// - endDay: when the location disappears
// - description: text shown when the marker is clicked
//
// Use endDay: null for locations that remain permanently.
// --------------------------------------------------

const locations = [

    //ARTIFACTS
    {
        
        name: "Shitta",

        x: 41.5,
        z: -240.5,

        coordinates: [
            { day: 6, x: 48.5, z: -243.5 }
        ],

        startDay: 1,
        endDay: null,

        description:
            "Primary needs first",

        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_Shitta.png"
        },
        {
            day: 2,
            image: "location-images/loc-D2/LOC_D2_Shitta.png"
        },
        {
            day: 6,
            image: "location-images/loc-D6/LOC_D6_Shitta.png"
        },
                {
            day: 9,
            image: "location-images/loc-D9/LOC_D9_Shitta.png"
        }
        ]
    },    
    {
        
        name: "Job board",

        x: 50.5,
        z: -227.5,

        coordinates: [
            { day: 2, x: 49.5, z: -243.5 },
            { day: 9, x: null, z: null },
            { day: 13, x: 39, z: -238 },
        ],

        startDay: 1,
        endDay: null,

        description:
            "It has been moved around more times than the jobs it advertises.",

        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_JobBoard.png"
        },
        {
            day: 2,
            image: "location-images/loc-D2/LOC_D2_JobBoard.png"
        },
        {
            day: 13,
            image: "location-images/loc-D13/LOC_D13_JobBoard.png"
        }
        ]
    },
    {
        
        name: "A's Heads",

        x: 37.5,
        z: -238.5,


        startDay: 1,
        endDay: null,

        description:
            "Resouce collecting is a pretty deadly activity...",

        photos: [
        {
            day: 3,
            image: "location-images/loc-D3/LOC_D3_AHead.png"
        }
        ]
    },
  
  
    //HOUSES
      {
        
        name: "P's Settlement",

        x: null,
        z: null,

        startDay: 1,
        endDay: null,

        description:
            "Undisclosed location",

    },
    {
        name: "S's house",

        x: 47.5,
        z: -258.5,

        startDay: 1,
        endDay: null,

        description:
            "Known for the lavish copper roof",

        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_SHouse.png"
        },
        {
            day: 14,
            image: "location-images/loc-D14/LOC_D14_SHouse.png"
        }
        ]
    },
    {
        name: "N's house",

        x: 41,
        z: -256,

        startDay: 2,
        endDay: null,

        description:
            "The plebs sit lower from the lavish copper roof",

        photos: [
        {
            day: 2,
            image: "location-images/loc-D2/LOC_D2_NHouse.png"
        }
        ]
    },
    {
        name: "L's house",

        x: 54,
        z: -247,

        startDay: 1,
        endDay: 8,

        description:
            "Had to be right in front of someone else's entrance",
        
        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_LHouse.png"
        }
        ]
    },
    {
        name: "F's house",

        x: 69,
        z: -240,

        startDay: 1,
        endDay: null,

        description:
            "Had to be the highest in the neighbourhood",
        
        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_FHouse.png"
        }
        ]
    },
    {
        name: "C's house",

        x: 57,
        z: -222,

        startDay: 1,
        endDay: null,

        description:
            "The one with weird split level",

        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_PHouse.png"
        }
        ]
    },
    {
        name: "T's house",

        x: 63,
        z: -222,

        startDay: 1,
        endDay: null,

        description:
            "Always got to have a fancy bottom",
        
        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_THouse.png"
        },
        {
            day: 2,
            image: "location-images/loc-D2/LOC_D2_THouse.png"
        }
        ]
    },
    {
        name: "M's 'haus'",

        x: 70,
        z: -222,

        startDay: 1,
        endDay: null,

        description:
            "Ambitious face lift",
        
        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_MHouse.png"
        }
        ]
    },
    {
        name: "A's house",

        x: 63,
        z: -255.5,

        startDay: 4,
        endDay: null,

        description:
            "Some say suspicious activities and entities roam around its basement...",

        photos: [
        {
            day: 4,
            image: "location-images/loc-D4/LOC_D4_AHouse.png"
        }
        ]
    },


    //LOCATIONS
    {
        name: "Bamboo farm",

        x: 88,
        z: -221,

        startDay: 1,
        endDay: 8,

        description:
            "What would we do without scaffolding",
        
        photos: [
        {
            day: 1,
            image: "location-images/loc-D1/LOC_D1_BambooFarm.png"
        }
        ]
    },
    {
        name: "Community storage",

        x: 51,
        z: -236,

        startDay: 2,
        endDay: null,

        description:
            "The communal resource storage room. Underwent expansions to accomodate the increasing amount of resources. After the End Dragon was killed, players displayed its head proudly facing the square.",
        
        photos: [
        {
            day: 2,
            image: "location-images/loc-D2/LOC_D2_CommunityStorage.png"
        },
        {
            day: 15,
            image: "location-images/loc-D15/LOC_D15_CommunityStorage.png"
        }
        ]
    },

    {
        name: "Main square",

        x: 42.5,
        z: -236.5,

        startDay: 2,
        endDay: null,

        description:
            "At the intersection point between all the houses, the square became the unnofficial gathering place. It was paved with an adorned calcite floor. With time, it became decorated with colorful banners, and even a pink Candy Floss stall.",
        
        photos: [
        {
            day: 2,
            image: "location-images/loc-D2/LOC_D2_MainSquare.png"
        },
        {
            day: 6,
            image: "location-images/loc-D6/LOC_D6_MainSquare.png"
        },
        {
            day: 7,
            image: "location-images/loc-D7/LOC_D7_MainSquare.png"
        }        
        ]
    },
    {
        name: "Windmill",

        x: 2.5,
        z: -171.5,

        startDay: 2,
        endDay: null,

        description:
            "",
        photos: [
        {
            day: 2,
            image: "location-images/loc-D2/LOC_D2_Windmill.png"
        }
        ]
    },
    {
        name: "Wheat terraces",

        x: 21,
        z: -180,

        startDay: 2,
        endDay: null,

        description:
            "",

        photos: [
        {
            day: 2, 
            image: "location-images/loc-D2/LOC_D2_WheatTerraces.png"
        },
        {
            day: 7, 
            image: "location-images/loc-D7/LOC_D7_WheatTerraces.png"
        },
        {
            day: 10, 
            image: "location-images/loc-D10/LOC_D10_WheatTerraces.png"
        }           
        ]
    },
    {
        name: "Communal enchanting table",

        x: 82.5,
        z: -240.5,

        startDay: 3,
        endDay: null,

        coordinates: [
            { day: 4, x: null, z: null },
            { day: 7, x: 55.5, z: -244.5 },
        ],
        description:
            "It fist was a simple pile of bookshelves in a corner of town. After the Cathedral's platform costruction, it was moved to an underground room accessible through the Community Storage. A ladder connects it to the Tuck'd Away Café that sits above.",

        photos: [
        {
            day: 2, 
            image: "location-images/loc-D3/LOC_D3_CommunalEnchant.png"
        },
        {
            day: 7, 
            image: "location-images/loc-D7/LOC_D7_CommunalEnchant.png"
        }
        ]
    },
    {
        name: "Vallian Clockworks",

        x: 56,
        z: -236.5,

        startDay: 4,
        endDay: null,

        description:
            "In place of a rustic potato farm, a giant clock now looms over the village",
        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_ClockHouse.png"
        }
        ]
    },
    {
        name: "Library",

        x: 82,
        z: -268.5,

        startDay: 4,
        endDay: 5,

        description:
            "A restored ruin now promises to be a warm place for knowlege and culture. The building would soon be torn down, to accommodate the platform for the Cathedral.",
        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_Library.png"
        }
        ]
    },
    {
        name: "[Wither Way n.105] Nether Hall",

        x: 31.5,
        z: -258.5,

        startDay: 4,
        endDay: null,

        description:
            "A restored ruin was used to accomodate a portal to the Nether. In later days, the building expands to be the town's staple entrance to the other dimension, and also names the street it sits on after the famous Nether's undead boss: The Wither.",
        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_NetherHub.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_NetherHub.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_NetherHub_2.png"
        }
        ]
    },
    {
        name: "S's Organic Wood Shop",

        x: 40.5,
        z: -267.5,

        startDay: 4,
        endDay: null,

        description:
            "What would we have done if wood were not organic? Looks like some vandals messed with the shop sign...",
        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_OrgWoodShop.png"
        }
        ]
    },
    {
        name: "Pub",

        x: 84,
        z: -240,

        startDay: 4,
        endDay: 5,

        description:
            "The building would soon be torn down, to accommodate the platform for the Cathedral.",
        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_Pub.png"
        }
        ]
    },
    {
        name: "The Grotto",

        x: 44.5,
        z: -220.5,

        startDay: 4,
        endDay: null,

        description:
            "A pirate cave hidden behind the waterfall...home to all the suspicious activities in the city, golden treasures, and a god old jug of beer.",
        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_TheGrotto.png"
        },        
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_TheGrotto_2.png"
        }
        ]
    },
    {
        name: "The Cathedral",

        x: 93.5,
        z: -245.5,

        startDay: 6,
        endDay: null,

        description:
            "A grand Cathedral...yet to be, as part of an abbey complex.",
        photos: [
        {
            day: 6,     
            image: "location-images/loc-D6/LOC_D6_Cathedral.png"
        },
        {
            day: 7,     
            image: "location-images/loc-D7/LOC_D7_Cathedral.png"
        }
        ]
    },
    {
        name: "Customs House",

        x: 34.5,
        z: -245.5,

        startDay: 6,
        endDay: null,

        description:
            "Right across the main bridge, ready to tax those visitors.",

        photos: [
        {
            day: 6,     
            image: "location-images/loc-D6/LOC_D6_CustomsHouse.png"
        },
        {
            day: 7,     
            image: "location-images/loc-D7/LOC_D7_CustomsHouse.png"
        },
        {
            day: 7,     
            image: "location-images/loc-D7/LOC_D7_CustomsHouse_2.png"
        }
        ]
    },
    {
        name: "Potion Shop",

        x: 51.5,
        z: -292.5,

        startDay: 7,
        endDay: null,

        description:
            "",

        photos: [
        {
            day: 7,     
            image: "location-images/loc-D7/LOC_D7_PotionShop.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_PotionShop.png"
        }
        ]
    },
    {
        name: "Crypt",

        x: 36.5,
        z: -332.5,

        startDay: 7,
        endDay: null,

        description:
            "A mysterious ruined building houses underground chambers filled with skeletal remains. Functionlly, it contains the skeleton spawner for XP farming.",

        photos: [
        {
            day: 7,     
            image: "location-images/loc-D7/LOC_D7_SkeletonSpawner.png"
        },
        {
            day: 7,     
            image: "location-images/loc-D7/LOC_D7_SkeletonSpawner_2.png"
        }
        ]
    },
    {
        name: "Tuck'd Away Café",

        x: 54.5,
        z: -244,

        startDay: 9,
        endDay: null,

        description:
            "A cosy place with suspicious trapdoors, and ridiculous prices. Sits in what was once L's House",
        photos: [
        {       
        day: 9, 
            image: "location-images/loc-D9/LOC_D9_TuckdAwayCafe.png"
        },
        {       
        day: 9, 
            image: "location-images/loc-D9/LOC_D9_TuckdAwayCafe_2.png"
        }
        ]
    },
    {
        name: "Old Mine Entrance",

        x: 68,
        z: -250,

        startDay: 9,
        endDay: null,

        description:
            "Entrance to the underground tunnels that traverse the town of the Vale",
        photos: [
        {
            day: 9,     
            image: "location-images/loc-D9/LOC_D9_OldMineEntrance.png"
        }
        ]
    },
    {
        name: "[Hawthorn Alley n.67] Bakery",

        x: 72,
        z: -211,

        startDay: 10,
        endDay: null,

        description:
            "A small bakery tucked away in Hawthorn Alley, leaving a trail of delicious baked bread warmth. Conventienly connected to T's house through a backdoor",
        photos: [
        {
            day: 10,     
            image: "location-images/loc-D10/LOC_D10_Bakery.png"
        }
        ]
    },
    {
        name: "Valedian Cheesemongers",

        x: 65.5,
        z: -207.5,

        startDay: 10,
        endDay: null,

        description:
            "The staple of the street, the cheese shop brings a variety of local and imported cheeses to the town.",
        photos: [
        {
            day: 10,     
            image: "location-images/loc-D10/LOC_D10_Cheesemonger.png"
        }
        ]
    },
    {
        name: "[Hawthorn Alley n.3]",

        x: 55,
        z: -211,

        startDay: 10,
        endDay: null,

        description:
            "A modest house. A small trapdoor allows you to peek your feet into the Cheesemonger next door. Perhaps the cheese's flavorful smell is to thank for it.",
        photos: [
        {
            day: 10,     
            image: "location-images/loc-D10/LOC_D10_HawthornN3.png"
        },
        {
            day: 10,     
            image: "location-images/loc-D10/LOC_D10_HawthornN3_2.png"
        }
        ]
    },
    {
        name: "Blacksmith",

        x: 50.5,
        z: -219.5,

        startDay: 10,
        endDay: null,

        description:
            "The one and only in town. It is said the owner carries the knowledge of far away desert lands",
        photos: [
        {
            day: 10,     
            image: "location-images/loc-D10/LOC_D10_Blacksmith.png"
        },
        {
            day: 17,     
            image: "location-images/loc-D17/LOC_D17_Blacksmith.png"
        }
        ]
    },
    {
        name: "Roman Bath House",

        x: -29.5,
        z: -220.5,

        startDay: 11,
        endDay: null,

        description:
            "An old roman bath house. Despite its overgrown condition, and holes in the roof, it is still in use today. It has an ancient aqueduct system that brings water from the ravine right below. Truly healing waters.",
        photos: [
        {
            day: 11,     
            image: "location-images/loc-D11/LOC_D11_BathHouse.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_BathHouse.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_BathHouse_1.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_BathHouse_2.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_BathHouse_3.png"
        },
        {
            day: 14,     
            image: "location-images/loc-D14/LOC_D14_BathHouse.png"
        }                           
        ]
    },
    {
        name: "[Elm Street n.235]  Visitors Center",

        x: 32.5,
        z: -254.5,

        startDay: 13,
        endDay: null,

        description:
            "Right next to the Customs House. A warm welcome...right after taxes.",
        photos: [
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_VisitorsCenter.png"
        },
        {
            day: 18,     
            image: "location-images/loc-D18/LOC_D18_VisitorsCenter.png"
        }
        ]
    },
    {
        name: "Yellow House",

        x: 41.5,
        z: -214.5,

        startDay: 13,
        endDay: null,

        description:
            "A tall bright yellow house that constrasts the stone façades of the village, standing proud in High Street",
        photos: [
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_YellowHouse.png"
        },
        {
            day: 14,     
            image: "location-images/loc-D14/LOC_D14_YellowHouse.png"
        }
        ]
    },
    {
        name: "A-Hoot Post",

        x: 86.5,
        z: -214.5,

        startDay: 13,
        endDay: null,

        description:
            "A post office managed my messenger owls",
        photos: [
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_AHootPost.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_AHootPost_1.png"
        }
        ]
    },
    {
        name: "Town Market",

        x: 16.5,
        z: -264.5,

        startDay: 17,
        endDay: null,

        description:
            "A small yet sprawling square full of pop-up stalls, right under the shade ofan old birch tree",
        photos: [
        {
            day: 17,     
            image: "location-images/loc-D17/LOC_D17_TownMarket.png"
        }
        ]
    },
    {
        name: "Old Book Shop",

        x: 25.5,
        z: -260.5,

        startDay: 17,
        endDay: null,

        description:
            "Right in the town market, sits a small and dim lit book shop, smelling of humidity and candle wax. The backdoors store secret passageways.",
        photos: [
        {
            day: 17,     
            image: "location-images/loc-D17/LOC_D17_OldBookShop.png"
        }
        ]
    },
    {
        name: "Casino",

        x: 34.5,
        z: -274.5,

        startDay: 17,
        endDay: null,

        description:
            "Underground. Under construction",

    },
    {
        name: "Apothecary",

        x: 17.5,
        z: -240.5,

        startDay: 17,
        endDay: null,

        description:
            "A store of great presence along the old Elm street, selling remedies to the citizens of the valley.",
        photos: [
        {
            day: 17,     
            image: "location-images/loc-D17/LOC_D17_Apothecary.png"
        },
        {
            day: 18,     
            image: "location-images/loc-D18/LOC_D18_Apothecary.png"
        },
        {
            day: 18,     
            image: "location-images/loc-D18/LOC_D18_Apothecary_1.png"
        }

        ]
    },
    {
        name: "Fish Store",

        x: 13.5,
        z: -254.5,

        startDay: 18,
        endDay: null,

        description:
            "Set right near the river for the freshest fish in town. It also recieves supplies from P's Settlement.",
        photos: [
        {
            day: 18,     
            image: "location-images/loc-D18/LOC_D18_FishStore.png"
        }
        ]
    },
    {
        name: "Catacombs",

        x: 96.5,
        z: -267.5,

        startDay: 20,
        endDay: null,

        description:
            "Right under the Cathedral's grounds, sitting deep in the underground, a chamber hosts eight tombs of who were said to be eminences and royalty of past days.",
        photos: [
        {
            day: 20,     
            image: "location-images/loc-D20/LOC_D20_Catacombs.png"
        }
        ]
    },
    {
        name: "Stables",

        x: 10.5,
        z: -265.5,

        startDay: 20,
        endDay: null,

        description:
            "Right at the entrance from the west side, the stable provides a modest space to house a few horses for accessible adventure departures and arrivals.",
        photos: [
        {
            day: 20,     
            image: "location-images/loc-D20/LOC_D20_Stables.png"
        }
        ]
    },



    //INFRASTRUCTURE
    {
        name: "Diagonal Bridge",

        x: 28.5,
        z: -210.5,

        startDay: 4,
        endDay: null,

        description:
            "A functional connection to the Wheat Terraces, with a unique and controversial diagonal design",

        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_DiagonalBridge.png"
        }
        ]
    },
    {
        name: "Hepburn Bridge (old Elm)",

        x: -8.5,
        z: -245.5,

        startDay: 4,
        endDay: null,

        description:
            "A grand connection to west lands, wide enough for horses, initially leading to the wild. It was named Elm Bridge after its construction, and would later on become the connection way to the Bath House. It was renamed to Hepburn",

        photos: [
        {
            day: 4,     
            image: "location-images/loc-D4/LOC_D4_WestBridge.png"
        },
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_WestBridge.png"
        }
        ]
    },
    {
        name: "Docks",

        x: 50,
        z: -197.5,

        startDay: 4,
        endDay: null,

        description:
            "Stairs come down from High Street to the stone platform beside the river.",

        photos: [
        {
            day: 13,     
            image: "location-images/loc-D13/LOC_D13_Docks.png"
        },
        {
            day: 14,     
            image: "location-images/loc-D13/LOC_D14_Docks.png"
        },
        {
            day: 15,     
            image: "location-images/loc-D13/LOC_D15_Docks.png"
        }
        ]
    },
    {
        name: "Hanging Bridge",

        x: 9,
        z: -291.5,

        startDay: 4,
        endDay: null,

        description:
            "A small wooden bridge connects the center of town with a small peninsula",

        photos: [
        {
            day: 17,     
            image: "location-images/loc-D17/LOC_D17_HangingBridge.png"
        }
        ]
    },

];