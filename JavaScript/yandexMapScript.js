ymaps.ready(init);

var placemarks =

function init() {
    var map = new ymaps.Map("mapContainer", {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    var placemark = new ymaps.Placemark([59.97, 30.31], {
        hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46,58],
        iconImageOffset: [-23,-57]
    });
    var placemark1 = new ymaps.Placemark([59.96, 30.31], {
        hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46,58],
        iconImageOffset: [-23,-57]
    });
    var placemark2 = new ymaps.Placemark([59.99, 30.31], {
        hintContent: '<div class="map__hint">ул. Литераторов, д.19</div>',
    },
    {
        iconLayout: 'default#image',
        iconImageHref: 'img/icons/map-marker.svg',
        iconImageSize: [46,58],
        iconImageOffset: [-23,-57]
    });
    map.geoObjects.add(placemark);
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
}