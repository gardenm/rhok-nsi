define(["jquery", "d3.min", "d3test", "matt", "trang", "topojson.min"], function($, ignore, d3test, matt, trang) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
            center: new google.maps.LatLng(0, 0),
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        matt.addGoogleMap(map);
    });
});
