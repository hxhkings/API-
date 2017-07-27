var lastReportTime = 0;
window.onload = function(){
	setInterval(handlerRefresh, 3000);	
};
	function handlerRefresh(){
		var url = "http://gumball.wickedlysmart.com/?callback=updateSales" + "&lastreporttime=" + lastReportTime +
				"&random=" + (new Date()).getTime();
		var newScript = document.createElement("script");
		newScript.setAttribute("src", url);
		newScript.setAttribute("id", "jsonP");
		var head = document.getElementsByTagName("head")[0];
		var oldScript = document.getElementById("jsonP");
		if (oldScript == null){
			head.appendChild(newScript);
		} else {
			head.replaceChild(newScript, oldScript);
		}
		console.log(url);
	}
	function updateSales(sales){
		var salesDiv = document.getElementById("sales");
		for (var i = 0; i < sales.length; i++){
			var sale = sales[i];
			var div = document.createElement("div");
			div.setAttribute("class", "saleItem");
			div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
			salesDiv.appendChild(div);
		}
		if (sales.length > 0){
			lastReportTime = sales[sales.length - 1].time;
		}
	}



