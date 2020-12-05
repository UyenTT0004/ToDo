'use strict'

//create edit button, add to each item
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
	var span1 = document.createElement("SPAN");
	var span2 = document.createElement("SPAN");
	var txt1 = document.createTextNode("\u270E");
	var txt2 = document.createTextNode("\u00D7");
	span1.className = "edit";
	span2.className = "close";
	span1.appendChild(txt1);
	span2.appendChild(txt2);
	myList[i].appendChild(span1);
	myList[i].appendChild(span2);
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

var edit = document.getElementsByClassName("edit");



for(i = 0; i < edit.length; i++) {
	edit[i].onclick = function() {
		var div = this.parentElement;
		var newdiv = document.createElement('div')

		var p = prompt("Edit your task:");
		newdiv.innerHTML = p;


		while (newdiv.firstChild) {
			div.appendChild(newdiv.firstChild);
		}
		if(div.hasChildNodes()) {
			div.removeChild(div.childNodes[0]);
		}

	}
}






//add checked symbol when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if(ev.target.tagName == 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);

function goto(url) {
	window.location=url;
}

//create new item when clicking add
function newTask(taskname, taskdesc) {
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

	//add clickable edit icon
        var span1 = document.createElement("SPAN");
        var span2 = document.createElement("SPAN");
        var txt1 = document.createTextNode("\u270E");
        var txt2 = document.createTextNode("\u00D7");
        span1.className = "edit";
        span2.className = "close";
        span1.appendChild(txt1);
        span2.appendChild(txt2);
        li.appendChild(span1);
        li.appendChild(span2);

	for(i = 0; i < edit.length; i++) {

		edit[i].onclick = function() {
			var div = this.parentElement;
			var newdiv = document.createElement('div')

			var p = prompt("Edit your task:");

			newdiv.innerHTML = p;
			

			while (newdiv.firstChild) {
				div.appendChild(newdiv.firstChild);
			}
			if(div.hasChildNodes()) {
                                div.removeChild(div.childNodes[0]);
                        }
		
		}
	}

	var j;
	for (j = 0; j < close.length; j++) {
		close[j].onclick = function() {
                	var div = this.parentElement;
                        div.style.display = "none";
                }
	}


}


function listTasks() {
	//var myList = document.getElementsByTagName("LI");
	//var i;

	for(i = 0; i < myList.length; i++) {
		document.write(myList[i].innerHTML);
		document.write("<br>");
	}
}

function deleteTask(taskname) {

}

function editTask(taskname) {

}

function goHome() {
	window.location = '/';
}
