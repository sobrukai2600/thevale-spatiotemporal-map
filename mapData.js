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
            image: "location-images/LOC_D1_Shitta.png"
        },
        {
            day: 2,
            image: "location-images/LOC_D2_Shitta.png"
        }
        ]
    },    
    {
        
        name: "Job board",

        x: 50.5,
        z: -227.5,

        coordinates: [
            { day: 2, x: 49.5, z: -243.5 }
        ],

        startDay: 1,
        endDay: null,

        description:
            "It has been moved around more times than the jobs it advertises.",

        photos: [
        {
            day: 1,
            image: "location-images/LOC_D1_JobBoard.png"
        },
        {
            day: 2,
            image: "location-images/LOC_D2_JobBoard.png"
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
            image: "location-images/LOC_D3_AHead.png"
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
            image: "location-images/LOC_D1_SHouse.png"
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
            image: "location-images/LOC_D2_NHouse.png"
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
            image: "location-images/LOC_D1_LHouse.png"
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
            image: "location-images/LOC_D1_FHouse.png"
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
            image: "location-images/LOC_D1_PHouse.png"
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
            image: "location-images/LOC_D1_THouse.png"
        },
        {
            day: 2,
            image: "location-images/LOC_D2_THouse.png"
        }
        ]
    },
    {
        name: "M's house",

        x: 70,
        z: -222,

        startDay: 1,
        endDay: null,

        description:
            "Ambitious face lift",
        
        photos: [
        {
            day: 1,
            image: "location-images/LOC_D1_MHouse.png"
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
            "",

        photos: [
        {
            day: 4,
            image: "location-images/LOC_D4_AHouse.png"
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
            image: "location-images/LOC_D1_BambooFarm.png"
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
            "The communal resource storage room",
        
        photos: [
        {
            day: 2,
            image: "location-images/LOC_D2_CommunityStorage.png"
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
            "At the intersection point between all the houses, the square became the unnofficial gathering place",
        
        photos: [
        {
            day: 2,
            image: "location-images/LOC_D2_MainSquare.png"
        },
        {
            day: 6,
            image: "location-images/LOC_D6_MainSquare.png"
        },
        {
            day: 7,
            image: "location-images/LOC_D7_MainSquare.png"
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
            image: "location-images/LOC_D2_Windmill.png"
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
            image: "location-images/LOC_D2_WheatTerraces.png"
        },
        {
            day: 7, 
            image: "location-images/LOC_D7_WheatTerraces.png"
        }        
        ]
    },
    {
        name: "Communal enchanting table",

        x: 82.5,
        z: -240.5,

        startDay: 3,
        endDay: 3,

        description:
            "",

        photos: [
        {
            day: 2, 
            image: "location-images/LOC_D3_CommunalEnchant.png"
        }
        ]
    },
    {
        name: "Clock House",

        x: 56,
        z: -236.5,

        startDay: 4,
        endDay: null,

        description:
            "In place of a rustic potato farm, a giant clock now looms over the village",
        photos: [
        {
            day: 4,     
            image: "location-images/LOC_D4_ClockHouse.png"
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
            image: "location-images/LOC_D4_Library.png"
        }
        ]
    },
    {
        name: "Nether Hub",

        x: 31.5,
        z: -258.5,

        startDay: 4,
        endDay: null,

        description:
            "A restored ruin now accomodates a portal to the Nether. In later days, the building expands to be the town's staple entrance to the other dimension.",
        photos: [
        {
            day: 4,     
            image: "location-images/LOC_D4_NetherHub.png"
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
            image: "location-images/LOC_D4_OrgWoodShop.png"
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
            image: "location-images/LOC_D4_Pub.png"
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
            image: "location-images/LOC_D4_TheGrotto.png"
        },        
        {
            day: 4,     
            image: "location-images/LOC_D4_TheGrotto_2.png"
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
            "A grand Cathedral...yet to be",
        photos: [
        {
            day: 6,     
            image: "location-images/LOC_D6_Cathedral.png"
        },
        {
            day: 7,     
            image: "location-images/LOC_D7_Cathedral.png"
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
            image: "location-images/LOC_D6_CustomsHouse.png"
        },
        {
            day: 7,     
            image: "location-images/LOC_D7_CustomsHouse.png"
        },
        {
            day: 7,     
            image: "location-images/LOC_D7_CustomsHouse_2.png"
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
            image: "location-images/LOC_D7_PotionShop.png"
        }
        ]
    },
    {
        name: "Skeleton Spawner",

        x: 36.5,
        z: -332.5,

        startDay: 7,
        endDay: null,

        description:
            "",

        photos: [
        {
            day: 7,     
            image: "location-images/LOC_D7_SkeletonSpawner.png"
        },
        {
            day: 7,     
            image: "location-images/LOC_D7_SkeletonSpawner_2.png"
        }
        ]
    },
    {
        name: "Café",

        x: 54,
        z: -247,

        startDay: 9,
        endDay: null,

        description:
            "A cosy place with suspicious trapdoors"
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
            image: "location-images/LOC_D4_DiagonalBridge.png"
        }
        ]
    },
    {
        name: "West Bridge",

        x: -8.5,
        z: -245.5,

        startDay: 4,
        endDay: null,

        description:
            "A grand connection to west lands, wide enough for horses, initially leading to the wild. It would later on become the connection way to the Bathouse",

        photos: [
        {
            day: 4,     
            image: "location-images/LOC_D4_WestBridge.png"
        }
        ]
    },

];