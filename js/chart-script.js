//Javascript file to display Charts for FESC project 06/10/18

//GOOGLE CHARTS SCRIPT

function dispChart(){

  let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let chartW = 800;
  let chartH = 600;

  if (w < 981){
    chartW = 275;
    chartH = 500;
    fontSize = 8;
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

    let displaySize = dispChart();

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

  //sett callback for bar graph data.
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

function drawBarChart(newData) {

  let displaySize = dispChart();
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
    title: "Florida Growth of RE Production",
    width: displaySize[0],
    height: displaySize[1],
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
    backgroundColor: 'rgb(215,215,215)',
    fontSize: displaySize[2],
    vAxis: {
      title: 'Year',
    },
    hAxis: {
      title: 'Billion/BTU',
    },
    annotations: {
      textStyle: {
        fontSize: .01,
      },
    },

  };
  var chart = new google.visualization.BarChart(document.getElementById("bar_chart"));
  chart.draw(view, options);
}
