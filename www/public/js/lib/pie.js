
define(["jquery"], function ($) {
    var pieChart = function(precentages, size, object, showText) {
        var w = size;
        var border = 2;

        var dataset = precentages;

        var pie = d3.layout.pie();

        var outerRadius = w / 2;
        var innerRadius = 0;
        var arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        var arcBorder = d3.svg.arc()
            .innerRadius(outerRadius)
            .outerRadius(outerRadius + border);

        var arcs = object.selectAll("g.arc")
            .data(pie(dataset))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + (outerRadius + border) + ", " + (outerRadius + border) + ")");

         arcs.append("path")
           .attr("class", function (d, i) {
               if (i === 0) return "spent";
               else return "remaining";
           })
           .attr("d", arc);

        arcs.append("path")
            .attr("fill", "white")
            .attr("d", arcBorder);

      if (showText) {
          arcs.append("text")
            .attr("transform", function(d) {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("text-anchor", "middle")
            .text(function(d) {
                return d.value;
            });
      }

      return object;
    }

    return {
      "pieChart": pieChart
    };
});