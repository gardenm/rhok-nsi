define(["jquery", "d3.min","jquery.alpha", "jquery.beta"], function($, ignore) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta();
        console.log(d3);
    });
});
