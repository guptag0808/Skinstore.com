let x= document.querySelector("form")
x.addEventListener("submit",function(event){
	event.preventDefault()
	alert("YOUR ORDER IS CONFIRMED")
	window.open("index.html")
    //  x.style.display="block"
})