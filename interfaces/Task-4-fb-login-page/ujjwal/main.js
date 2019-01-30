var i;
for(i=1; i<=31; i++){
  var node = document.createElement("div");
  var textnode = document.createTextNode(i);
  node.appendChild(textnode);
  document.getElementById("dropdownDate").appendChild(node);
  node.className = "dates"
}
for(i=2019; i>=1904; i--){
  var node = document.createElement("div");
  var textnode = document.createTextNode(i);
  node.appendChild(textnode);
  document.getElementById("dropdownYear").appendChild(node);
  node.className = "years"
}

function dropYear() {
  var element = document.getElementsByClassName("years");
  var i;
  for(i=0 ; i<element.length ; i++)
    element[i].classList.toggle("show");
}
document.getElementById("year-pick").onclick = dropYear;


function drop() {
  var element = document.getElementsByClassName("dates");
  var i;
  for(i=0 ; i<element.length ; i++)
    element[i].classList.toggle("show");
}
document.getElementById("date-pick").onclick = drop;

function dropMonth() {
  var element = document.getElementsByClassName("months");
  var i;
  for(i=0 ; i<element.length ; i++)
    element[i].classList.toggle("show");
}
document.getElementById("month-pick").onclick = dropMonth;
