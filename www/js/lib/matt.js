/**
 * Created by garden on 12/7/2013.
 */

define(["jquery", "world"], function ($, world) {
    var addCircles = function () {
        var circleRadii = [40, 20, 10];

        var svgContainer = d3.select("body")
            .append("svg")
            .attr({"width": 600,
                   "height": 100});

        var circles = svgContainer.selectAll("circle")
            .data(circleRadii)
            .enter()
            .append("circle");

        circles
            .attr({"cx": 50,
                   "cy": 50,
                   "r": function (d) { return d; } })
            .style("fill", function (d) {
                var color;
                if (d === 40) { color = "green" }
                else if (d === 20) { color = "purple" }
                else if (d === 10) { color = "red" }
                return color;
            });
        };

    var addMercator = function () {
        var width = 960;
        var height = 960;

        var projection = d3.geo.mercator()
            .scale((width + 1) / 2 / Math.PI)
            .translate([width / 2, height / 2])
            .precision(.1);

        var path = d3.geo.path()
            .projection(projection);

        var graticule = d3.geo.graticule();

        var svg = d3.select("body").append("svg")
            .attr({"width": width,
                   "height": height,
                   "id": "map"});

        console.log(world.world);

        svg.append("path")
            .datum(graticule)
            .attr("class", "graticule")
            .attr("d", path);

        svg.insert("path", ".graticule")
            .datum(topojson.feature(world.world, world.world.objects.land))
            .attr("class", "land")
            .attr("d", path);

        svg.insert("path", ".graticule")
            .datum(topojson.mesh(world.world, world.world.objects.countries, function (a, b) { return a !== b; }))
            .attr("class", "boundary")
            .attr("d", path);
    };

    return {
        'addCircles' : addCircles,
        'addMercator' : addMercator
    };
});