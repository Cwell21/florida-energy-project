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
  
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var chartW = 800;
  var chartH = 600;
  
  if (w < 981){
    chartW = 225;
    chartH = 500;
  }

  
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Energy Consumption', 'Renewable Energy Production'],
        ['1960',  57344, 35680],
        ['1970',  171346, 51035],
        ['1980',  309694, 90049],
        ['1990',  489741, 198986],
        ['2000',  668216, 194952],
        ['2010',  788887, 223518],
        ['2015',  803865, 234192]
      ]);

      var options = {
        title: 'Florida Electricity Consumption Vs Renewable Energy Production',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }
}

function dispBarChart() {
  
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var chartW = chartW;
  var chartH = chartH;
  
  if (w < 981){
    chartW = 265;
    chartH = 500;
  }

    google.charts.load("current", {packages:["corechart"]});

    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

    //    let decChange = {'2010': 10674, '2000': 28566, '1990': 5128, '1980': 142212, '1970': 18384, '1960': 15809};
        let barColor = "rgb(250,20,0)";

        var data = google.visualization.arrayToDataTable([
          ['Decade', 'Renewable Energy Production Growth', 'Energy Consumption Growth', { role: "style" }],
          ['2010',  10674, 14978, barColor],
          ['2000',  98632, 120671, barColor],
          ['1990',  5128,  149225, barColor],
          ['1980',  142212, 132779, barColor],
          ['1970',  18384, 124205, barColor],
          ['1960',  15809, 95688, barColor],
        ]);

        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
                         { calc: "stringify",
                           sourceColumn: 1,
                           type: "string",
                           role: "annotation" },
                         2]);

        var options = {
          title: "Growth of Florida Renewable Energy Production by Decade",
          width: chartW,
          height: chartH,
          bar: {groupWidth: "95%"},
          legend: { position: "none" },
        };
        var chart = new google.visualization.BarChart(document.getElementById("bar_chart"));
        chart.draw(view, options);
    }
}


function fescLoad(){
    
  dispUniv();   
  dispLineChart();
  dispBarChart();
}

window.addEventListener("resize", function() {
  fescLoad();
});



