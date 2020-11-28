'use strict'

//create close button, add to each item
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u270E");
	span.className = "close";
	span.appendChild(txt);
	myList[i].appendChild(span);
}

//clicked close button hides list items
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}


//add checked symbol when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if(ev.target.tagName == 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);


//create new item when clicking add
function newTask(taskname) {
	var li = document.createElement("li");
	var inVal = document.getElementById('taskname').value;
	var t = document.createTextNode(inVal);
	li.appendChild(t);
	if(inVal === '') {
		alert("no input given");
	} else {
		document.getElementById("myUL").appendChild(li);
	}

	document.getElementById("taskname").value = "";


	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u270E");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for(i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}


function listTasks() {
	var myList = document.getElementsByTagName("LI");
	var i;

	for(i = 0; i < myList.length; i++) {

	}
}

function deleteTask(taskname) {

}

function editTask(taskname) {

}
