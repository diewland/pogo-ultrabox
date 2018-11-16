/*
TODO generate data from ULTRABOXES
var data = ULTRABOXES.map(o => {
  return {
    name: 'xxx',
    type: 'spline',
    showInLegend: true,
    dataPoints: [
			{ x: new Date(2017,6,24), y: 31 },
			{ x: new Date(2017,6,25), y: 31 },
			{ x: new Date(2017,6,26), y: 29 },
      { x: 'LuckyEgg', y: 20 },
      { x: 'Raidpass', y: 30 },
    ]
  }
});
*/

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		// text: "Ultrabox Items Comparision"
	},
	axisX: {
		//valueFormatString: "DD MMM,YY"
	},
	axisY: {
		title: "Qty",
		includeZero: false,
		//suffix: " °C"
	},
	legend:{
		cursor: "pointer",
		fontSize: 16,
		itemclick: toggleDataSeries
	},
	toolTip:{
		shared: true
	},
	data: [
    {
      name: "Lure",
      type: "spline",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2018, 9-1, 13), y: 0 },
        { x: new Date(2018, 11-1, 7), y: 0 },
        { x: new Date(2018, 11-1, 16), y: 5 },
      ]
    },
    {
      name: "Lucky Egg",
      type: "spline",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2018, 9-1, 13), y: 6 },
        { x: new Date(2018, 11-1, 7), y: 0 },
        { x: new Date(2018, 11-1, 16), y: 6 },
      ]
    },
    {
      name: "Star Piece",
      type: "spline",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2018, 9-1, 13), y: 0 },
        { x: new Date(2018, 11-1, 7), y: 14 },
        { x: new Date(2018, 11-1, 16), y: 0 },
      ]
    },
    {
      name: "Raidboss",
      type: "spline",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2018, 9-1, 13), y: 8 },
        { x: new Date(2018, 11-1, 7), y: 10 },
        { x: new Date(2018, 11-1, 16), y: 8 },
      ]
    },
    {
      name: "Super Incubator",
      type: "spline",
      showInLegend: true,
      dataPoints: [
        { x: new Date(2018, 9-1, 13), y: 12 },
        { x: new Date(2018, 11-1, 7), y: 9 },
        { x: new Date(2018, 11-1, 16), y: 12 },
      ]
    },
  ]
});
chart.render();

function toggleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else{
		e.dataSeries.visible = true;
	}
	chart.render();
}
