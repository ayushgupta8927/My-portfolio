var chart;
var graph;
var categoryAxis;

var chartData = 
[
  {
	  "skill": "Web Development",
		"Rating": 90,
    "color": "#FF0F00"
	},
	{
		"skill": "Android Development",
		"Rating": 70,
    "color": "#FF6600"
	}, 
	{
		"skill": "Game Development",
		"Rating": 75,
    "color": "#FF9E01"
	}, 
	{
	  "skill": "UI/UX Design",
		"Rating": 80,
    "color": "#FCD202"
	}, 
	{
		"skill": "Machine Learning",
		"Rating": 70,
    "color": "#F8FF01"
	}, 
	{
		"skill": "Data Structures",
		"Rating": 85,
    "color": "#B0DE09"
	} 
];


AmCharts.ready(function () {
  	chart = new AmCharts.AmSerialChart();
	chart.dataProvider = chartData;
	chart.categoryField = "skill";
  	chart.position = "left";
  	chart.angle = 30;
	chart.depth3D = 15;
    chart.startDuration = 1;
  
    categoryAxis = chart.categoryAxis;
	categoryAxis.labelRotation = 45;
    categoryAxis.dashLength = 5; //
    categoryAxis.gridPosition = "start";
    categoryAxis.autoGridCount = false;
	categoryAxis.gridCount = chartData.length;
  
    
	graph = new AmCharts.AmGraph();
	graph.valueField = "Rating";
	graph.type = "column";	
    graph.colorField = "color";
	graph.lineAlpha = 0;
    graph.fillAlphas = 0.8;
    graph.balloonText = "[[category]]: <b>[[value]]</b>";
  
    chart.addGraph(graph);
  
    chart.write('chartdiv');
});