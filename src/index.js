//Jefferson Crelia
//javascript index

var btn = document.createElement("btn");
btn.innerHTML = "Add Item";

var sidenav = document.getElementsByTagName("sidenav")[0];
sidenav.appendChild(btn);

btn.addEventListener("click", function() { alert("adding item");});
