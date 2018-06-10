//Javascript file for FESC project 4-28-18

//create variable to hold state of clickable menu
var dispFlag = false;

function dispUniv() {
  let univ = ["uf", "fsu", "ucf", "usf", "fam", "fau", "fgc", "fiu", "ncf", "unf", "uwf", "fpu"];
  //get DIV element
  e = document.getElementById("partUniv");
  var univIcon = "<li><img src=\"images\\univ\\" + univ[0] + ".jpg\" alt=\" " + univ[0] + "\"></li>"
  for (i=1; i<univ.length; i++) {
   univIcon = univIcon + "<li><img src=\"images\\univ\\" + univ[i] + ".jpg\" alt=\" " + univ[i] + "\"></li>"
  }
  e.innerHTML = univIcon;
}

//Function for drop down menu, takes argument
function dispMenu(y) {
  let dispMenu = y;
  //create variable w to hold browser width.  Use client width for IE8 and earlier
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  //create variable x to get projects element
  var x = document.getElementById(dispMenu);

  //if client width less than or equal to 980 (media query break width to stack navigation links) run code for clickable menu.  If over 980 do not use clickable menu
  if (w <= 980){

    //check state of clickable menu.  If false open menu on click, if true close menu on click
    if (dispFlag == false){
      x.style.display = "block";
      x.style.marginTop = 15 + "px";
      x.style.maxWidth = 100 + "%";
      dispFlag = true;
    }else{
      x.style.display = "none";
      dispFlag = false;
    }
  }else {
    dispFlag = false;
  }
}

//GOOGLE CHARTS SCRIPT

function dispLineChart(){

  let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let chartW = 800;
  let chartH = 600;

  if (w < 981){
    chartW = 225;
    chartH = 500;
  }
  let chartSize = [chartW, chartH];
  console.log("Chart Parameters : " + chartSize[0] + " x " + chartSize[1]);
  return chartSize;
}

//google charts for line graph - Energy Consumption
google.charts.load('current', {'packages':['corechart']});
//Add new callback function
google.charts.setOnLoadCallback(getData);



function drawLineChart(newData) {

    let displaySize = dispLineChart();

    newData.unshift(["Year", "Energy Consumption"])

    var data = google.visualization.arrayToDataTable(newData);

    var options = {
      title: 'Florida Electricity Consumption',
      width: displaySize[0],
      height: displaySize[1],
      curveType: 'function',
      legend: { position: 'bottom' },
      backgroundColor: 'rgb(215,215,215)',
      vAxis: {
        title: 'Billion/BTU',
      },
      hAxis: {
        title: 'Year',
      },
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }

  //google charts for bar graph - Energy Production
  google.charts.load("current", {packages:["corechart"]});

  google.charts.setOnLoadCallback(getDataBar);
function getDataBar(){
  //create new request object
  let request = new XMLHttpRequest()

  let requestUrl = "https://api.eia.gov/series/?api_key=07ee2112c06a1e33695c74d0f4d41f04&series_id=SEDS.REPRB.FL.A"

  request.open('GET', requestUrl, true)

  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawBarChart(theActualData)
  }
  //Callback for error handling
  request.error = function(err){
    console.log("error is: ", err)
  }
  //Send the request
  request.send()
}


function getData(){
  //create new request object
  let request = new XMLHttpRequest()
  let requestBar = new XMLHttpRequest()

  let requestUrl = "https://api.eia.gov/series/?api_key=07ee2112c06a1e33695c74d0f4d41f04&series_id=SEDS.TETCB.FL.A"
  let requestBarUrl = "https://api.eia.gov/series/?api_key=07ee2112c06a1e33695c74d0f4d41f04&series_id=SEDS.REPRB.FL.A"

  request.open('GET', requestUrl, true)

  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    drawLineChart(theActualData)
  }
  //Callback for error handling
  request.error = function(err){
    console.log("error is: ", err)
  }
  //Send the request
  request.send()
}

// function dispBarChart() {
//
//   var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//   var chartW = chartW;
//   var chartH = chartH;
//
//   if (w < 981){
//     chartW = 265;
//     chartH = 500;
//   }
//}


      function drawBarChart(newData) {

    //    let decChange = {'2010': 10674, '2000': 28566, '1990': 5128, '1980': 142212, '1970': 18384, '1960': 15809};
        let barColor = "rgb(250,20,0)";

      newData.unshift(["Year", "Energy Production"])
        var data = google.visualization.arrayToDataTable(newData);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                       ]);

        var options = {
          title: "Florida Growth of RE Production vs Growth of Energy Consumption by Decade",
          width: 800,
          height: 600,
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
          backgroundColor: 'rgb(215,215,215)',
          fontSize: 18,
          vAxis: {
            title: 'Decade',
          },
          hAxis: {
            title: 'Billion/BTU',
          },

        };
        var chart = new google.visualization.BarChart(document.getElementById("bar_chart"));
        chart.draw(view, options);
    }

function fescLoad(){

  dispUniv();
  // dispBarChart();
  // drawLineChart();

}

window.addEventListener("resize", function() {
  fescLoad();
});
