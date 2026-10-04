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

    {
        name: "Storage house",

        x: 50,
        z: -237,

        startDay: 2,
        endDay: null,

        description:
            "The comunal resource storage room"
    },

    {
        name: "Widmill",

        x: 2,
        z: -172,

        startDay: 2,
        endDay: null,

        description:
            "The Windmill of the wheat farm terraces"
    }

];