/**
 * Created by garden on 12/7/2013.
 */

define(function () {

    var padding = 10;
    var objs = [];

    var addOverlay = function (map, callback) {
        d3.json('data/mnch-countries.json', function (countries) {
            var overlay = new google.maps.OverlayView();

            overlay.onAdd = function () {
                var layer = d3.select(this.getPanes().overlayMouseTarget).append("div")
                    .attr("class", "mnch");

                overlay.draw = function () {
                    var projection = this.getProjection();

                    var marker = layer.selectAll("svg")
                        .data(d3.entries(countries))
                        .each(transform)
                        .enter().append("svg:svg")
                        .each(transform)
                        .attr("class", "marker");

                    marker.each(function (d) {
                        if (callback) {
                            var d3obj = d3.select(this);
                            objs.push(callback(d.key, d3obj, {'left': d3obj.style("left"), 'top': d3obj.style("top")}));
                        }
                    });

                    function transform(d) {
                        d = new google.maps.LatLng(d.value[1], d.value[0]);
                        d = projection.fromLatLngToDivPixel(d);

                        return d3.select(this)
                            .style("left", (d.x - padding) + "px")
                            .style("top", (d.y - padding) + "px");
                    }
                }
            }
            overlay.setMap(map);
        });
    };

    return {
        'padding': padding,
        'addOverlay': addOverlay
    };
});