define(["jquery", "d3.min","d3test", "jquery.beta"], function($, ignore, d3test) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').d3test().beta();
        console.log(d3);
    });
});
