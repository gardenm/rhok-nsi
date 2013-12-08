/**
 * Created by garden on 12/7/2013.
 */

define(["jquery"], function ($) {
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

    var locations = {};
    var projection;
    var path;
    var graticule;

    var addMap = function (callback) {
        var width = 960;
        var height = 960;

        projection = d3.geo.mercator()
            .scale((width + 1) / 2 / Math.PI)
            .translate([width / 2, height / 2])
            .precision(.1);

        path = d3.geo.path()
            .projection(projection);

        graticule = d3.geo.graticule();

        var svg = d3.select("body").append("svg")
            .attr({"width": width,
                   "height": height,
                   "id": "map"});

        d3.json('data/fullworld.json', function (error, world) {
              svg.append("path", ".graticule")
                  .datum(topojson.feature(world, world.objects.subunits))
                  .attr("d", path)
                  .attr("class", "land");

            svg.insert("path", ".graticule")
                .datum(topojson.mesh(world, world.objects.subunits, function (a, b) { return a !== b; }))
                .attr("class", "boundary")
                .attr("d", path);

            svg.selectAll(".subunit-label")
                .data(topojson.feature(world, world.objects.subunits).features)
                .enter().append("text")
                .attr("class", function (d) { return "subunit-label " + d.id; })
                .attr("transform", function (d) {
                    var centroid = path.centroid(d);
                    locations[d.properties.name] = centroid;

                    return "translate(" + path.centroid(d) + ")";
                })
                .attr("dy", ".35em")
                .text(function (d) { return d.properties.name; });

            if (callback) {
                callback();
            }
        });
    };

    var addObject = function (country, svgCreator) {
        if (!locations.hasOwnProperty(country)) {
            console.log(locations);
            return;
        }

        var svg = d3.select("#map");
        var obj = svgCreator(svg, {"x": locations[country][0], "y": locations[country][1]});
//        svg.append("circle").attr({"cx": locations[country][0], "cy": locations[country][1], "r": 20, "fill": "red"}).attr("d", path);
        obj.attr("d", path);

    };

    return {
        'addCircles' : addCircles,
        'addMap' : addMap,
        'addObject' : addObject,
        'locations' : locations
    };
});