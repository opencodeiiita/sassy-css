var chats = document.getElementById("chats");
var links = chats.getElementsByClassName("person");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
var chat1 = document.getElementById("Thanos");
var chat2 = document.getElementById("ironMan");
var chat3 = document.getElementById("captain");
var chat4 = document.getElementById("thor");
var x = 1;
function hello(){
  if(chat1.classList.contains("active")){
    x = 1;question = 0;
    var myNode = document.getElementById("middles");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    var image = document.getElementById("image")
    if(image.src != "thanos.jpg")
      image.src = "thanos.jpg";
    document.getElementById("display").innerHTML = "Thanos"
  }
  else if(chat2.classList.contains("active")){
    x = 2;question = 0;
    var myNode = document.getElementById("middles");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    var image = document.getElementById("image")
    if(image.src != "ironMan.png")
      image.src = "ironMan.png";
    document.getElementById("display").innerHTML = "Tony Stark"
  }
  else if(chat3.classList.contains("active")){
    x = 3;question = 0;
    var myNode = document.getElementById("middles");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    var image = document.getElementById("image")
    if(image.src != "captain.jpg")
      image.src = "captain.jpg";
    document.getElementById("display").innerHTML = "Captain"
  }
  else if(chat4.classList.contains("active")){
    x = 4;question = 0;
    var myNode = document.getElementById("middles");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
    var image = document.getElementById("image")
    if(image.src != "thor.jpg")
      image.src = "thor.jpg";
    document.getElementById("display").innerHTML = "Thor"
  }
}
  var question = 0;
  function Thanos1(){
  if(question == 1){
    var node = document.createElement("div");
    var textnode = document.createTextNode("hello! who is this");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 2){
    var node = document.createElement("div");
    var textnode = document.createTextNode("What you want to know?");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 3){
    var node = document.createElement("div");
    var textnode = document.createTextNode("To make perfect balance");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 4){
    var node = document.createElement("div");
    var textnode = document.createTextNode("I will fight The Avengers");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 5){
    var node = document.createElement("div");
    var textnode = document.createTextNode("Stark is not dead and i know he is the strongest, but this time i will kill him");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"
  }
  else if(question == 6){
    var node = document.createElement("div");
    var textnode = document.createTextNode("I dont think so. i have all the infinity stones that exist in universe");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"
  }
  else if(question == 7){
    var node = document.createElement("div");
    var textnode = document.createTextNode("maybe this is not an ENDGAME for me");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide";
  }
  else if(question == 8){
    var node = document.createElement("div");
    var textnode = document.createTextNode("we will see, now time to go little one...Bye");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide";
  }
  }
  function ironMan1(){
  if(question == 1){
    var node = document.createElement("div");
    var textnode = document.createTextNode("who are you");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide";
  }
  else if(question == 2){
    var node = document.createElement("div");
    var textnode = document.createTextNode("I am dying can you save me");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 3){
    var node = document.createElement("div");
    var textnode = document.createTextNode("somewher around planet Gliese 667Cc");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 4){
    var node = document.createElement("div");
    var textnode = document.createTextNode("just send the details to captain I know he will help me");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 5){
    var node = document.createElement("div");
    var textnode = document.createTextNode("and in case i died can you pass a message to pepper?");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 6){
    var node = document.createElement("div");
    var textnode = document.createTextNode("tell her When I drift off I will dream about her and It’s always her");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 7){
    var node = document.createElement("div");
    var textnode = document.createTextNode("i think the connection will break soon...bye maybe we can still save the world...bye");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  }

  function captain1(){
  if(question == 1){
    var node = document.createElement("div");
    var textnode = document.createTextNode("hello, do i know you?");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide";
  }
  else if(question == 2){
    var node = document.createElement("div");
    var textnode = document.createTextNode("go on");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 3){
    var node = document.createElement("div");
    var textnode = document.createTextNode("I don't know what i will do if it does not");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 4){
    var node = document.createElement("div");
    var textnode = document.createTextNode("our only last hope is Ant Man");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 5){
    var node = document.createElement("div");
    var textnode = document.createTextNode("may be its an ENDGAME for all the avengers but a new rise to the universe");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 6){
    var node = document.createElement("div");
    var textnode = document.createTextNode("yeah, if avengers get united again we will defeat the mad titan");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 7){
    var node = document.createElement("div");
    var textnode = document.createTextNode("now time to go buddy....we have to assemble the Avengers");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  }

  function thor1(){
  if(question == 1){
    var node = document.createElement("div");
    var textnode = document.createTextNode("hey is this loki?");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide";
  }
  else if(question == 2){
    var node = document.createElement("div");
    var textnode = document.createTextNode("then what you want?");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 3){
    var node = document.createElement("div");
    var textnode = document.createTextNode("maybe this is what dr strange saw in the future and he wants the same");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 4){
    var node = document.createElement("div");
    var textnode = document.createTextNode("he had the power of time");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 5){
    var node = document.createElement("div");
    var textnode = document.createTextNode("yeah i lost everything and now i am alone");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 6){
    var node = document.createElement("div");
    var textnode = document.createTextNode("yeah i hope the same");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  else if(question == 7){
    var node = document.createElement("div");
    var textnode = document.createTextNode("i think i should go to Nidavellir for some more wepor to fight against thanos...this time i will not miss");
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    node.className = "botSide"

  }
  }

  function sent(){
    var input = document.getElementById("user").value;
    var node = document.createElement("div");
    var textnode = document.createTextNode(input);
    node.className = "userSide"
    node.appendChild(textnode);
    document.getElementById("middles").appendChild(node);
    document.getElementById("user").value = "";
    if(x == 1){
      question++;
      setTimeout(Thanos1, 2000);
    }
    else if(x == 2){
      question++;
      setTimeout(ironMan1, 2000);
    }
    else if(x == 3){
      question++;
      setTimeout(captain1, 2000);
    }
    else if(x == 4){
      question++;
      setTimeout(thor1, 2000);
1   }
  }
