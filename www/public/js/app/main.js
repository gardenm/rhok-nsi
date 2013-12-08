define(["jquery", "d3.min", "d3test", "map", "trang"], function($, ignore, d3test, map, trang) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        var mapCanvas = $('#map_canvas').get(0);
        var mapOptions = {
            center: new google.maps.LatLng(0, 0),
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        var gmap = new google.maps.Map(mapCanvas, mapOptions);

        map.padding = 30;
        map.addOverlay(gmap, function (country, marker, pos) {
            marker.append("svg:circle")
                .attr({"r": map.padding/3,
                       "cx": map.padding/2,
                       "cy": map.padding/2})
                .on('click', function () {
                    console.log('click: ' + country);
                })
                .on('mouseover', function () {
                    console.log('over: ' + country);
                });
        });
    });
});
