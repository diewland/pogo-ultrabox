let data = ITEMS.map(item => {
  return {
    name: item.title,
    type: "spline",
    showInLegend: true,
    dataPoints: ULTRABOXES.map(box_by_date => {
      let o = box_by_date.items.filter(o => {
        return item.title == o.item.title;
      })[0];
      let qty = o ? o.qty : 0;
      return {
        x: box_by_date.date,
        y: qty,
      };
    }),
  }
});

let chart = new CanvasJS.Chart("chartContainer", {
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
	data: data,
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
