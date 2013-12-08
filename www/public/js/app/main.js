define(["jquery", "d3.min", "d3test", "map", "pie","dialouge"], function($, ignore, d3test, map, pie, dialouge) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        var mapCanvas = $('#map_canvas').get(0);
        var mapOptions = {
            center: new google.maps.LatLng(0, 5),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var gmap = new google.maps.Map(mapCanvas, mapOptions);

        map.padding = 50;

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
                var size = relativeSize * map.padding;

                pie.pieChart([spentPct,remainingPct], size, marker, false)
                    .on('click', function () {
                        
                        strIn ='{ "country":"Sudan", "max": 800 , "spent":200 }';
                        var tempJsonObj = eval ("(" + strIn + ")");
                        dialouge.drawChart(tempJsonObj, 800, 600);
                        
                });
            });
        });
        
    });
});
