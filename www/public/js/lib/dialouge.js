define(["jquery"], function($) {
// Load the Visualization API and the piechart package.

function executeSample() {
  strIn ='{ "country":"Sudan", "max": 800 , "spent":200 }';
  var tempJsonObj = eval ("(" + strIn + ")");
  drawChart(tempJsonObj, 800, 600);
}

var drawChart = function(jsonObj, w, h, countryName) {
  
  var data = new google.visualization.DataTable();
  
  data.addColumn('string', 'category');
  data.addColumn('number', 'amount');
  
  //get data from json object, and use array if necessary
  var amount1 = jsonObj.spent;
  var amount2 = jsonObj.max - jsonObj.spent;
  var category1 = 'Contribution Amount Spent: $ '+amount1;
  var category2 = 'Contribution Amount Remaining: $'+ amount2;

  
  data.addRows([
    [category1, amount1],
    [category2, amount2]
  ]);

  // Set chart options
  // var title = jsonObj.country;
  //var w = 400;
  //var h = 300;
  var options = {'title':countryName,
                 'width': w,
                 'height': h};

  // Instantiate and draw our chart, passing in some options.

  var winWidth = $(window).width();
  var winHeight = $(window).height();
  
  var dialougeTop = (winHeight/3)+50;
  var dialougeLeft = winWidth/3;

  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  $('#chart_div').css('position','absolute').css('top',dialougeTop).css('left',dialougeLeft).css('display','block');
  chart.draw(data, options);
}

	 return{
	 	'drawChart':drawChart
	 };

  });
