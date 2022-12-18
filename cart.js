
let cartItem = JSON.parse(localStorage.getItem("cart")) || [];

function display(data) {
	document.querySelector("#cartContainer").innerHTML = null
	data.forEach((el) => {
		// console.log("sss")
		let cards = document.createElement("div")
		let image = document.createElement("img")
		image.setAttribute("src", el.image)
		let name = document.createElement("h4")
		name.textContent = el.name;
		let gift = document.createElement("button")
		gift.textContent = "Select Your Gift"
		let price = document.createElement("h6")
		price.textContent = el.price


		cards.append(image, name, gift, price)
		document.querySelector("#cartContainer").append(cards)
		// cards.append(image,price)
		// document.querySelector(".right_side").append(cards)
		
	})
}
 
function sideCart(data) {
	document.querySelector("#right_side").innerHTML = null
	data.forEach((el, i) => {
		// console.log("sss")
		let cards = document.createElement("div")
		let image = document.createElement("img")
		image.setAttribute("src", el.image)
		let pri = document.createElement("h4")
		pri.textContent ="$" +el.price
		pri.setAttribute("id", "price")
		let btn1 = document.createElement("button")
		btn1.textContent = "+"
		btn1.setAttribute("id","plus")
		btn1.addEventListener("click", function () {
			// let cartItem= JSON.parse(localStorage.getItem("cart"))||[];

			el.qty++
			localStorage.setItem("cart", JSON.stringify(cartItem))
			window.location.reload()

		})
		let quantity = document.createElement("span")
		quantity.textContent = el.qty
		let btn2 = document.createElement("button")
		btn2.textContent = "-"
		btn2.setAttribute("id","min")
		let total= document.createElement("h4")
		total.setAttribute("id","total")
		total.textContent= "$"+el.price*el.qty
		btn2.addEventListener("click", function () {

			if (el.qty > 1) {
				el.qty--
				localStorage.setItem("cart", JSON.stringify(cartItem))

			} else {
				cartItem.splice(i, 1)
				localStorage.setItem("cart", JSON.stringify(cartItem))
			}
			window.location.reload()
		})

		cards.append(image,  btn1, quantity, btn2,pri,total)
		document.querySelector("#right_side").append(cards)

	})
}    
       let ttl=document.querySelector("#sumOfamount")
	   let sum=0; 
	     cartItem.forEach((el)=>{
			sum+=el.price * el.qty
		 })
		 ttl.textContent=sum
		  
     
document.querySelector("#checkout").addEventListener("click",function(){
	window.open("checkout.html")
})

sideCart(cartItem)
display(cartItem)