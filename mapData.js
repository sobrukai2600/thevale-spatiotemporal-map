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

        startDay: 1,
        endDay: null,

        description:
            "Primary needs first",

        photos: [
        {
            day: 1,
            image: "location-images/LOC_D1_Shitta.png"
        }
        ]
    },
    {
        
        name: "P's Settlement",

        x: null,
        z: null,

        startDay: 1,
        endDay: null,

        description:
            "Undisclosed location",

    },

    //HOUSES
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

        startDay: 4,
        endDay: null,

        description:
            "The plebs sit lower"
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


    //LOCATIONS
    {
        name: "Bamboo farm",

        x: 88,
        z: -221,

        startDay: 1,
        endDay: null,

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
        name: "Storage house",

        x: 51,
        z: -236,

        startDay: 2,
        endDay: null,

        description:
            "The comunal resource storage room"
    },

    {
        name: "Main square",

        x: 42.5,
        z: -236.5,

        startDay: 2,
        endDay: null,

        description:
            "At the intersection point between all the houses, the square became the unnofficial gathering place"
    },
    {
        name: "Windmill",

        x: 2,
        z: -172,

        startDay: 2,
        endDay: null,

        description:
            ""
    },
    {
        name: "Farm terraces",

        x: 21,
        z: -180,

        startDay: 2,
        endDay: null,

        description:
            ""
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

];