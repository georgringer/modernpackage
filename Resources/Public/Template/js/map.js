function initialize() {

    // Map Styles
    var styles = [
        {
            stylers:[
                {
                    weight:0.2
                },
                {
                    hue:"#D8EAED"
                },
                {
                    saturation:-10
                }
            ]
        },{
            featureType:"administrative.country",
            elementType:"geometry.stroke",
            stylers:[
                {
                    visibility:"on"
                },
                {
                    color:"#6baebb"
                },
                {
                    weight:1.5
                }
            ]
        },{
            featureType:"administrative.country",
            elementType:"labels.text.fill",
            stylers:[
                {
                    color:"#213034"
                }
            ]
        },{
            featureType:"administrative.locality",
            elementType:"labels.text",
            stylers:[
                {
                    color:"#54919e"
                },
                {
                    weight:0.2
                }
            ]
        },{
            featureType:"poi",
            elementType:"geometry",
            stylers:[
                {
                    color:"#D1E8ED"
                }
            ]
        }
    ];


    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });
    // set position for centering
    var centerMapPosition = new google.maps.LatLng(48.31512, 14.302445);

    var locations = [
        ['<div class="content"><p class="title">Cyberouse GmbH</p><p>Hafenstraße 2a </p>4020 Linz </p><strong>Tel</strong> +43 732 781298-0</p><strong>Fax</strong> +43 732 781298-220</p></div>',
            48.31512, 14.302445],
        ['<div class="content"><p class="title">TEST GmbH</p><p>Hafenstraße 2a </p>4020 Linz </p><strong>Tel</strong> +43 732 781298-0</p><strong>Fax</strong> +43 732 781298-220</p></div>',
            48.321196, 14.298170]
    ];
    var myOptions = {
        zoom: 12,
        panControl: false,
        zoomControl: true,
        // draggable: !DeviceUtil.isMobileDevice768(),
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.RIGHT_TOP
        },
        center: centerMapPosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    var icon = new google.maps.MarkerImage('ico/marker.png');

    var infowindow = new google.maps.InfoWindow({
        minWidth: 250,
        maxWidth: 350
    });


    // add markers to map
    var marker;
    var markers = new Array();
    // Add the markers and infowindows to the map
    for (var i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon : icon,
            title: "show details"
        });
        markers.push(marker);
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }


}

