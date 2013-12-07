define(["jquery", "d3.min", "d3test", "matt", "jquery.beta"], function($, ignore, d3test, matt) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').d3test().beta();
        console.log(d3);

        matt.addCircles();
    });
});
