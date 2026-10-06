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
// LOCATION MARKERS
// --------------------------------------------------

const locationMarkers = L.layerGroup().addTo(map);

// --------------------------------------------------
// INITIAL MAP
// --------------------------------------------------

let currentIndex = 0;
let currentDay = availableDays[currentIndex];

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

function changeDay(newIndex) {

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


    // Remove previous map
    maps[currentDay].removeFrom(map);


    // Add new map
    maps[newDay].addTo(map);


    // Update state
    currentIndex = newIndex;
    currentDay = newDay;


    // Update slider
    slider.value = currentIndex;


    // Update timeline
    updateTimeline();
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
    previousButton.disabled = currentIndex === 0;


    // Next button
    nextButton.disabled =
        currentIndex === availableDays.length - 1;


    // Play button
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