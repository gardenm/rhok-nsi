define(["jquery", "d3.min", "d3test", "matt", "trang", "topojson.min"], function($, ignore, d3test, matt, trang) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {

        d3test.init();

        trang.pieChart([20,30,50], 250);

        matt.addCircles();
        matt.addMap(function () {
            matt.addObject('Mali', function (s, pt) {
                return s.append("circle").attr({"cx": pt.x, "cy": pt.y, "r": 10, "fill": "red"});
            });
        });
    });
});
