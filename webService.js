
window.onload = function(){
var url = "http://localhost/gumball/ronie.json";
var request = new XMLHttpRequest();

request.onload = function(){
	if (request.status == 200){
		updateSales(request.responseText);
	}
};
request.onreadystatechange = function(){
	if (request.status == 200 && request.readyState == 4){
		updateSales(request.responseText);
	}
};
request.open("GET", url);
request.send(null);
function updateSales(responseText){
	var salesDiv = document.getElementById("sales");
	var sales = JSON.parse(responseText);
	for (var i = 0; i < sales.length; i++){
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class", "saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}
};

  