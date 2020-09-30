
function openNav() {
  document.getElementById("myLinks").style.width = "100%";
  document.getElementById("lost").style.display = "block";
} 

function closeNav() {
  document.getElementById("myLinks").style.width = "0%";
  document.getElementById("lost").style.display = "none";
}

function myFunction() {
	var y = document.getElementById("myLinks");
	if (y.style.width === "100%") {
		y.style.width = "0%";
	} 
}