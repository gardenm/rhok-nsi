define(["jquery", "d3.min", "d3test", "matt", "topojson.min"], function($, ignore, d3test, matt) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {

        d3test.init();

        matt.addCircles();
        matt.addMercator();
    });
});
