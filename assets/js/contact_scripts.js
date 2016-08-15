$(document).ready(function(){

    "use strict";

    /*
     ----------------------------------------------------------------------
     Map
     ----------------------------------------------------------------------
     */
    var map;
    function initialize_map() {

        if ($('.map').length) {
            var myLatLng = new google.maps.LatLng(26.8549, 75.8243);
            var mapOptions = {
                zoom: 15,
                center: myLatLng,
                scrollwheel: false,
                panControl: false,
                zoomControl: true,
                scaleControl: false,
                mapTypeControl: false,
                streetViewControl: false
            };
            map = new google.maps.Map(document.getElementById('map'), mapOptions);
        } else {
            return false;
        }

    }
    google.maps.event.addDomListener(window, 'load', initialize_map);

}); // End $(document).ready(function(){