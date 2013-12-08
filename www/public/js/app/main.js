define(["jquery", "d3.min", "d3test", "map", "pie"], function($, ignore, d3test, map, pie) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        var mapCanvas = $('#map_canvas').get(0);
        var mapOptions = {
            center: new google.maps.LatLng(0, 0),
            zoom: 2,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }
        var gmap = new google.maps.Map(mapCanvas, mapOptions);

        map.padding = 40;

        d3.json('data/fakedata.json', function (data) {
            var largestMax = 0;
            $.each(data, function (country, values) {
                if (values['max'] && values['max'] > largestMax) {
                    largestMax = values['max'];
                }
            });

            map.addOverlay(gmap, function (country, marker, pos) {
                if (!data[country] || !data[country]['max'] || !data[country]['spent']) {
                    return;
                }

                var max = data[country]['max'];
                var spent = data[country]['spent'];
                var spentPct = spent / max * 100;
                var remainingPct = 100 - spentPct;
                var relativeSize = max / largestMax;

                if (relativeSize < 0.4) relativeSize = 0.4;

                pie.pieChart([spentPct,remainingPct], relativeSize * map.padding, marker, false)
                    .on('click', function () {
                        console.log('click: ' + country);
                });
            });
        });
    });
});
