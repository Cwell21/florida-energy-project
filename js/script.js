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
    dispFlag = flase;
  }
}



