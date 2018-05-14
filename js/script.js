//Javascript file for FESC project 4-28-18

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

function dispMenu() {
    var x = document.getElementById("projects");
  if (dispFlag == false){
    x.style.display = "block";    
    dispFlag = true;
  }else {
    x.tyle.display = "none";
    dispFlag = false;
  }
}

