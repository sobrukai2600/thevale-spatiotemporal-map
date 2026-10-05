// --------------------------------------------------
// LOCATION DATABASE VIEW
// --------------------------------------------------

function renderLocationGallery() {

    const gallery = document.getElementById('locationGallery');
    const sortOrder = document.getElementById('locationSort').value;
    const sortedLocations = [...locations].sort((a, b) => {
        if (sortOrder.startsWith('name')) {
            const comparison = a.name.localeCompare(b.name, undefined, {
                sensitivity: 'base',
                numeric: true
            });
            return sortOrder === 'name-asc' ? comparison : -comparison;
        }

        const comparison = a.startDay - b.startDay;
        if (comparison !== 0) {
            return sortOrder === 'day-asc' ? comparison : -comparison;
        }

        return a.name.localeCompare(b.name, undefined, {
            sensitivity: 'base',
            numeric: true
        });
    });

    gallery.replaceChildren();

    sortedLocations.forEach(location => {

        const photos = [...(location.photos || [])]
            .sort((a, b) => a.day - b.day);
        let photoIndex = 0;

        const card = document.createElement('article');
        card.className = 'location-card';

        const photoArea = document.createElement('div');
        photoArea.className = 'location-card-photo';

        const image = document.createElement('img');
        image.className = 'location-card-image';
        image.alt = location.name;

        const placeholder = document.createElement('div');
        placeholder.className = 'location-card-placeholder';
        placeholder.textContent = 'No image available';

        const dayLabel = document.createElement('span');
        dayLabel.className = 'location-card-day';

        const updatePhoto = () => {
            const photo = photos[photoIndex];

            if (photo) {
                image.src = photo.image;
                image.alt = `${location.name} — Day ${photo.day}`;
                image.hidden = false;
                placeholder.hidden = true;
                dayLabel.textContent = `Day ${photo.day}`;
            } else {
                image.removeAttribute('src');
                image.hidden = true;
                placeholder.hidden = false;
                dayLabel.textContent = `From day ${location.startDay}`;
            }
        };

        if (photos.length > 0) {
            photoArea.appendChild(image);

            const previousPhoto = document.createElement('button');
            previousPhoto.type = 'button';
            previousPhoto.className = 'location-photo-arrow previous';
            previousPhoto.textContent = '‹';
            previousPhoto.setAttribute(
                'aria-label',
                `Previous photo for ${location.name}`
            );
            previousPhoto.disabled = photos.length < 2;
            previousPhoto.addEventListener('click', () => {
                photoIndex = (photoIndex - 1 + photos.length) % photos.length;
                updatePhoto();
            });

            const nextPhoto = document.createElement('button');
            nextPhoto.type = 'button';
            nextPhoto.className = 'location-photo-arrow next';
            nextPhoto.textContent = '›';
            nextPhoto.setAttribute(
                'aria-label',
                `Next photo for ${location.name}`
            );
            nextPhoto.disabled = photos.length < 2;
            nextPhoto.addEventListener('click', () => {
                photoIndex = (photoIndex + 1) % photos.length;
                updatePhoto();
            });

            photoArea.append(previousPhoto, nextPhoto);
        } else {
            image.hidden = true;
            photoArea.appendChild(placeholder);
        }

        photoArea.appendChild(dayLabel);
        updatePhoto();

        const content = document.createElement('div');
        content.className = 'location-card-content';

        const title = document.createElement('h3');
        title.className = 'location-card-title';
        title.textContent = location.name;

        const description = document.createElement('p');
        description.className = 'location-card-description';
        description.textContent =
            location.description || 'No description available.';

        const coordinates = document.createElement('div');
        coordinates.className = 'location-card-coordinates';
        coordinates.textContent = `X: ${location.x}   Z: ${location.z}`;

        content.append(title, description, coordinates);
        card.append(photoArea, content);
        gallery.appendChild(card);
    });
}

renderLocationGallery();
document.getElementById('locationSort').addEventListener(
    'change',
    renderLocationGallery
);

const viewToggle = document.getElementById('viewToggle');
const mapView = document.getElementById('mapView');
const databaseView = document.getElementById('databaseView');

viewToggle.addEventListener('click', function () {

    const databaseIsVisible = databaseView.hidden;

    databaseView.hidden = !databaseIsVisible;
    mapView.hidden = databaseIsVisible;

    viewToggle.setAttribute('aria-pressed', String(databaseIsVisible));

    const label = databaseIsVisible
        ? 'Show map view'
        : 'Open database view';
    viewToggle.setAttribute('aria-label', label);
    viewToggle.title = label;

    if (!databaseIsVisible) {
        document.dispatchEvent(new Event('mapviewshown'));
    }
});
