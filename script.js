// --------------------------------------------------
// MAP SETUP
// --------------------------------------------------

const imageWidth = 1040;
const imageHeight = 1040;

const bounds = [
    [0, 0],
    [imageHeight, imageWidth]
];

const map = L.map('map', {
    crs: L.CRS.Simple,

    zoomControl: true,

    scrollWheelZoom: true,
    doubleClickZoom: true,
    dragging: true
});

// --------------------------------------------------
// MINECRAFT COORDINATES
// --------------------------------------------------

const coordinateDisplay =
    document.getElementById('coordinateDisplay');


map.on('mousemove', function (event) {

    // Convert Leaflet map position into
    // image pixel coordinates

    const pixelX = event.latlng.lng;
    const pixelZ = event.latlng.lat;


    // Convert image coordinates into
    // Minecraft coordinates

    const minecraftX =
        Math.floor(mapOrigin.x + pixelX) +
        coordinateOffset.x;

    const minecraftZ =
        Math.floor(
            mapOrigin.z +
            (imageHeight - 1) -
            pixelZ
        ) +
        coordinateOffset.z;

    // Display coordinates

    coordinateDisplay.textContent =
        `X: ${minecraftX}   Z: ${minecraftZ}`;

});

// --------------------------------------------------
// AVAILABLE MAP DAYS
// --------------------------------------------------

const availableDays = [
    0, 1, 2, 3, 4, 5, 6, 7,
    9, 10, 11,
    13, 14, 15,
    17, 18, 19, 20
];

// --------------------------------------------------
// PRELOAD MAP IMAGES
// --------------------------------------------------

availableDays.forEach(day => {

    const image = new Image();

    image.onerror = function () {
        console.error(`Failed to preload map image for day ${day}.`);
    };
    image.src =
        `maps/TheVale_map_overworld_D${day}.png`;

});


// --------------------------------------------------
// HISTORICAL MAPS
// --------------------------------------------------

const maps = {};

availableDays.forEach(day => {
    maps[day] = L.imageOverlay(
        `maps/TheVale_map_overworld_D${day}.png`,
        bounds
    );
});

// --------------------------------------------------
// MAP LABELS AND LOCATION MARKERS
// --------------------------------------------------

const mapTextPane = map.createPane('mapTextPane');
mapTextPane.style.zIndex = '550';
mapTextPane.style.pointerEvents = 'none';

const mapTextLabelLayer = L.layerGroup().addTo(map);
let mapTextLabelDefinitions = [];
let areMapTextLabelsVisible = false;
const mapTextToggleButton =
    document.getElementById('mapTextToggle');

mapTextToggleButton.addEventListener('click', function () {
    areMapTextLabelsVisible = !areMapTextLabelsVisible;
    mapTextToggleButton.setAttribute(
        'aria-pressed',
        String(areMapTextLabelsVisible)
    );

    const label = areMapTextLabelsVisible
        ? 'Hide map text labels'
        : 'Show map text labels';
    mapTextToggleButton.setAttribute('aria-label', label);
    mapTextToggleButton.title = label;

    updateMapTextLabels();
});

fetch('mapTextLabels.json', { cache: 'no-store' })
    .then(response => {
        if (!response.ok) {
            throw new Error(
                `Unable to load mapTextLabels.json (${response.status})`
            );
        }
        return response.json();
    })
    .then(data => {
        if (!Array.isArray(data)) {
            throw new TypeError(
                'mapTextLabels.json must contain an array of label objects.'
            );
        }

        data.forEach((entry, index) => {
            if (
                !entry ||
                typeof entry.text !== 'string' ||
                !entry.text.trim() ||
                !Number.isInteger(entry.startDay) ||
                (entry.endDay !== null &&
                    (!Number.isInteger(entry.endDay) ||
                        entry.endDay < entry.startDay)) ||
                !Number.isFinite(entry.x) ||
                !Number.isFinite(entry.z) ||
                !Number.isFinite(entry.angle) ||
                (entry.size !== undefined &&
                    !['small', 'medium', 'large'].includes(entry.size))
            ) {
                throw new TypeError(
                    `Invalid map text label at index ${index}; expected text, integer startDay, endDay (integer or null), finite x/z coordinates, finite angle, and optional size of small, medium, or large.`
                );
            }
        });

        mapTextLabelDefinitions = data;
        updateMapTextLabels();
    })
    .catch(error => {
        console.error('Map text labels could not be loaded.', error);
        mapTextToggleButton.disabled = true;
        mapTextToggleButton.title = 'Map text labels could not be loaded';
    });

const locationMarkers = L.layerGroup().addTo(map);
let areLocationMarkersVisible = true;
const locationMarkersToggle =
    document.getElementById('locationMarkersToggle');

locationMarkersToggle.addEventListener('click', function () {
    areLocationMarkersVisible = !areLocationMarkersVisible;
    locationMarkersToggle.setAttribute(
        'aria-pressed',
        String(areLocationMarkersVisible)
    );

    const label = areLocationMarkersVisible
        ? 'Hide location markers'
        : 'Show location markers';
    locationMarkersToggle.setAttribute('aria-label', label);
    locationMarkersToggle.title = label;
    locationMarkersToggle.innerHTML = areLocationMarkersVisible
        ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"></path><circle cx="12" cy="12" r="3"></circle></svg>'
        : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15 15 0 0 1-3 3.8M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7a10 10 0 0 0 3.1-.5"></path><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"></path></svg>';

    updateLocationMarkers();
});

// --------------------------------------------------
// INITIAL MAP
// --------------------------------------------------

let currentIndex = 0;
let currentDay = availableDays[currentIndex];
let isChangingMap = true;

maps[currentDay].once('load', function () {
    isChangingMap = false;
    updateControls();
});
maps[currentDay].once('error', function (event) {
    console.error(`Failed to load map image for day ${currentDay}.`, event);
    isChangingMap = false;
    updateControls();
});
maps[currentDay].addTo(map);

map.setView([520, 520], -1);

// --------------------------------------------------
// INITIAL VIEW
// --------------------------------------------------

// Center of the 1040 × 1040 image
map.setView([520, 520], -1);

// --------------------------------------------------
// TIMELINE
// --------------------------------------------------

const slider = document.getElementById('daySlider');
const dayLabel = document.getElementById('dayLabel');
const timelineTrack = document.getElementById('timelineTrack');


// Historical information

const historyTitle = document.getElementById('historyTitle');
const historyDescription =
    document.getElementById('historyDescription');

const eventList =
    document.getElementById('eventList');

const historyNotes =
    document.getElementById('historyNotes');


// --------------------------------------------------
// CONFIGURE SLIDER
// --------------------------------------------------

slider.min = 0;
slider.max = availableDays.length - 1;
slider.step = 1;
slider.value = currentIndex;


// --------------------------------------------------
// CREATE TIMELINE MARKERS
// --------------------------------------------------

availableDays.forEach((day, index) => {

    const marker = document.createElement('div');

    marker.classList.add('timeline-marker');

    // Position marker according to its timeline position
    //const position = (index / (availableDays.length - 1)) * 100;
    //-->
    // Position marker according to the actual Minecraft day
    const firstDay = availableDays[0];
    const lastDay = availableDays[availableDays.length - 1];

    const position =
        ((day - firstDay) / (lastDay - firstDay)) * 100;
    

    marker.style.left = `${position}%`;

     // Click marker to change day
    marker.addEventListener('click', function () {
    changeDay(index);
    
    label.addEventListener('click', function () {
    changeDay(index);
});
});

    // Day number
    marker.textContent = '';

    // Create label
    const label = document.createElement('div');

    label.classList.add('timeline-day-label');

    label.textContent = `D${day}`;

    label.style.left = `${position}%`;

    timelineTrack.appendChild(marker);
    timelineTrack.appendChild(label);
});

// --------------------------------------------------
// UPDATE HISTORICAL INFORMATION
// --------------------------------------------------

function updateHistory() {

    const data = dayData[currentDay];


    // Title

    historyTitle.textContent = data.title;


    // Description

    historyDescription.textContent =
        data.description;


    // Events

    eventList.innerHTML = '';


    data.events.forEach(event => {

        const listItem =
            document.createElement('li');

        listItem.textContent = event;

        eventList.appendChild(listItem);

    });


    // Notes

    historyNotes.textContent =
        data.notes || '';

}

// --------------------------------------------------
// GET LOCATION COORDINATES
// --------------------------------------------------

function getLocationCoordinates(location, day) {

    const coordinateHistory = [...(location.coordinates || [])]
        .filter(coordinates => coordinates.day <= day)
        .sort((a, b) => b.day - a.day);
    const coordinates = coordinateHistory[0] || location;

    if (!Number.isFinite(coordinates.x) || !Number.isFinite(coordinates.z)) {
        return null;
    }

    return coordinates;
}

// --------------------------------------------------
// GET LOCATION PHOTO
// --------------------------------------------------

function getLocationPhoto(location) {

    // No photos available

    if (!location.photos || location.photos.length === 0) {
        return null;
    }


    // Find the latest photo whose day
    // is not later than the current day

    const availablePhotos =
        location.photos.filter(photo =>
            photo.day <= currentDay
        );


    // No photo exists yet for this day

    if (availablePhotos.length === 0) {
        return null;
    }


    // Get the most recent available photo

    availablePhotos.sort((a, b) =>
        b.day - a.day
    );


    return availablePhotos[0];
}

// --------------------------------------------------
// UPDATE LOCATION MARKERS
// --------------------------------------------------

function updateLocationMarkers() {

    // Remove existing markers

    locationMarkers.clearLayers();

    if (!areLocationMarkersVisible) {
        return;
    }


    // Get all locations

    const allLocations = locations;


    // Check which locations exist
    // on the current day

    allLocations.forEach(location => {

        const startsOnDay =
            currentDay >= location.startDay;

        const endsOnDay =
            location.endDay === null ||
            currentDay <= location.endDay;


        // Don't display locations that
        // don't exist yet or have already ended

        if (!startsOnDay || !endsOnDay) {
            return;
        }

        const coordinates =
            getLocationCoordinates(location, currentDay);

        if (!coordinates) {
            return;
        }


        // Convert Minecraft coordinates
        // into Leaflet map coordinates

        const pixelX =
            coordinates.x - mapOrigin.x;

        const pixelZ =
            (mapOrigin.z + (imageHeight - 1))
            - coordinates.z
            + coordinateOffset.z;


        // Create marker
        /*const marker = L.marker([
            pixelZ,
            pixelX
        ]);*/

        // Create custom marker icon
        const locationIcon = L.divIcon({

            className: '',

            html: `
                <div class="location-marker"></div>
            `,

            iconSize: [18, 18],

            iconAnchor: [9, 9],

            popupAnchor: [0, -12]

        });


        // Create marker

        const marker = L.marker(
            [
                pixelZ,
                pixelX
            ],
            {
                icon: locationIcon
            }
        );


        // Create popup
        /*marker.bindPopup(`
            <strong>${location.name}</strong>
            <br>
            ${location.description}
            <br><br>
            X: ${location.x}
            <br>
            Z: ${location.z}
        `);
        marker.bindPopup(`
            <div class="location-popup">

                <div class="location-popup-title">
                    ${location.name}
                </div>

                <div class="location-popup-description">
                    ${location.description}
                </div>

                <div class="location-popup-coordinates">
                    X: ${coordinates.x}
                    &nbsp;&nbsp;
                    Z: ${coordinates.z}
                </div>

            </div>
        `);*/

        // Get the appropriate photo for the current day
        const currentPhoto =
            getLocationPhoto(location);


        // Build photo HTML

        const photoHTML = currentPhoto
            ? `
                <img
                    class="location-popup-image"
                    src="${currentPhoto.image}"
                    alt="${location.name}"
                >
            `
            : '';


        // Create popup

        marker.bindPopup(`
            <div class="location-popup">

                <div class="location-popup-title">
                    ${location.name}
                </div>

                <div class="location-popup-description">
                    ${location.description}
                </div>

                ${photoHTML}

                <div class="location-popup-coordinates">
                    X: ${location.x}
                    &nbsp;&nbsp;
                    Z: ${location.z}
                </div>

            </div>
        `);

        // Add marker
        locationMarkers.addLayer(marker);

    });
}

function escapeMapLabelText(text) {
    return text.replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function updateMapTextLabels() {
    mapTextLabelLayer.clearLayers();

    if (!areMapTextLabelsVisible) {
        return;
    }

    mapTextLabelDefinitions.forEach(entry => {
        const startsOnDay = currentDay >= entry.startDay;
        const endsOnDay =
            entry.endDay === null || currentDay <= entry.endDay;

        if (!startsOnDay || !endsOnDay) {
            return;
        }

        const pixelX = entry.x - mapOrigin.x;
        const pixelZ =
            (mapOrigin.z + (imageHeight - 1))
            - entry.z
            + coordinateOffset.z;
        const labelSize = entry.size || 'medium';
        const icon = L.divIcon({
            className: 'map-text-label-icon',
            html: `<span class="map-text-label map-text-label--${labelSize}" style="--map-label-angle:${entry.angle}deg">${escapeMapLabelText(entry.text)}</span>`,
            iconSize: [0, 0],
            iconAnchor: [0, 0]
        });

        mapTextLabelLayer.addLayer(L.marker(
            [pixelZ, pixelX],
            {
                pane: 'mapTextPane',
                icon,
                interactive: false,
                keyboard: false
            }
        ));
    });
}

// --------------------------------------------------
// UPDATE TIMELINE
// --------------------------------------------------

function updateTimeline() {

    const markers =
        document.querySelectorAll('.timeline-marker');

    // Update active timeline marker
    markers.forEach((marker, index) => {

        marker.classList.toggle(
            'active',
            index === currentIndex
        );

    });

    // Update current day
    dayLabel.textContent = `Day ${currentDay}`;

    // Update historical information
    updateHistory();

    // Update location markers
    updateLocationMarkers();
    updateMapTextLabels();

}


// Initial state
updateTimeline();


// --------------------------------------------------
// TIMELINE CONTROLS
// --------------------------------------------------

const previousButton = document.getElementById('previousButton');
const playButton = document.getElementById('playButton');
const nextButton = document.getElementById('nextButton');

let isPlaying = false;
let playInterval = null;


// --------------------------------------------------
// CHANGE DAY
// --------------------------------------------------

async function changeDay(newIndex) {

    if (isChangingMap) {
        return;
    }

    // Keep index inside available range
    if (newIndex < 0) {
        newIndex = 0;
    }

    if (newIndex >= availableDays.length) {
        newIndex = availableDays.length - 1;
    }


    // Don't do anything if we're already on this day
    if (newIndex === currentIndex) {
        updateTimeline();
        return;
    }


    const newDay = availableDays[newIndex];
    const previousMap = maps[currentDay];
    const nextMap = maps[newDay];

    isChangingMap = true;
    updateControls();

    try {
        const nextMapLoaded = await new Promise(resolve => {
            const handleLoad = function () {
                nextMap.off('error', handleError);
                resolve(true);
            };
            const handleError = function (event) {
                nextMap.off('load', handleLoad);
                console.error(
                    `Failed to load map image for day ${newDay}.`,
                    event
                );
                resolve(false);
            };

            nextMap.once('load', handleLoad);
            nextMap.once('error', handleError);

            // Keep the current image visible until the new overlay has loaded.
            nextMap.addTo(map);
        });

        if (!nextMapLoaded) {
            nextMap.removeFrom(map);
            return;
        }

        previousMap.removeFrom(map);

        // Update state only after the new image is ready.
        currentIndex = newIndex;
        currentDay = newDay;


        // Update slider
        slider.value = currentIndex;


        // Update timeline
        updateTimeline();
    } finally {
        isChangingMap = false;
        updateControls();
    }
}


// --------------------------------------------------
// SLIDER
// --------------------------------------------------

slider.addEventListener('input', function () {

    const newIndex = Number(this.value);

    changeDay(newIndex);

});


// --------------------------------------------------
// PREVIOUS
// --------------------------------------------------

previousButton.addEventListener('click', function () {

    changeDay(currentIndex - 1);

});


// --------------------------------------------------
// NEXT
// --------------------------------------------------

nextButton.addEventListener('click', function () {

    changeDay(currentIndex + 1);

});


// --------------------------------------------------
// UPDATE BUTTONS
// --------------------------------------------------

function updateControls() {

    // Previous button
    previousButton.disabled =
        isChangingMap || currentIndex === 0;


    // Next button
    nextButton.disabled =
        isChangingMap || currentIndex === availableDays.length - 1;

    slider.disabled = isChangingMap;


    // Play button
    playButton.disabled = isChangingMap;
    playButton.textContent =
        isPlaying ? '❚❚ Pause' : '▶ Play';
}


// --------------------------------------------------
// PLAY / PAUSE
// --------------------------------------------------

playButton.addEventListener('click', function () {

    if (isPlaying) {

        // Pause
        clearInterval(playInterval);

        playInterval = null;

        isPlaying = false;

    } else {

        // Play
        isPlaying = true;


        playInterval = setInterval(function () {

            // Stop when we reach the final map
            if (currentIndex >= availableDays.length - 1) {

                clearInterval(playInterval);

                playInterval = null;

                isPlaying = false;

                updateControls();

                return;
            }


            changeDay(currentIndex + 1);

        }, 1500);
    }


    updateControls();
});


// --------------------------------------------------
// UPDATE CONTROLS WHEN TIMELINE CHANGES
// --------------------------------------------------

const originalUpdateTimeline = updateTimeline;

updateTimeline = function () {

    originalUpdateTimeline();

    updateControls();

};


// Initial controls state
updateControls();

// Refresh Leaflet's layout after the map becomes visible again.
document.addEventListener('mapviewshown', function () {
    requestAnimationFrame(() => map.invalidateSize());
});