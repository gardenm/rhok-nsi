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

    return {
        'addCircles' : addCircles
    };
});