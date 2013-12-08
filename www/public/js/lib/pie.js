
define(["jquery"], function ($) {
    var pieChart = function(precentages, size, object) { 
      var h = size;
      var w = size;

      var dataset = precentages;

      var pie = d3.layout.pie();
      var color = d3.scale.category10();

      var outerRadius = w / 2;
      var innerRadius = 0;
      var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

      var arcs = object.selectAll("g.arc")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");
    
      arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);

      arcs.append("text")
        .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d) {
            return d.value;
        });

      return arcs;
    }

    return {
      "pieChart": pieChart
    };
});