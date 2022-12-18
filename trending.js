let details=[]
let url= "https://636dca84b567eed48ac9262f.mockapi.io/skinstoreproducts"
fetch(url)
.then((res)=>{
	 return res.json()
}).then((data)=>{
	details=data
	console.log(data)
	display(data)
	
}).catch((er)=>{
	alert(err)
})

// let brands= document.querySelector("#Medik");
// console.log(brands.value)
//   details.forEach((el)=>{
// 	if(brands.checked){
// 		brands.value==el.name.include(brands.value)
		
// 		display(details)
// 	}
//   })
   
   function search(){
// event.preventDefault()

	let searched =document.querySelector("#search").value;
	console.log(searched) 
	 let searchedData= details.filter(function(el){
         return el.name.toLowerCase().includes(searched.toLowerCase())
	 })
   display(searchedData)
   }
   
   function sorting(){
	let sorted = document.querySelector("#sort")
	console.log("srabh")
	if(sorted.value=="LTH"){
		details.sort((a,b)=>{
			return a.price - b.price
		}) 
		}if(sorted.value=="HTL"){
		details.sort((a,b)=>{
			return b.price - a.price
		})
		}
		display(details)
   }

function display(data){
	document.querySelector("#fetched").innerHTML=null
	data.forEach((el)=>{
		// console.log("sss")
		let cards= document.createElement("div")
		let image= document.createElement("img")
		image.setAttribute("src",el.image)
		let name=document.createElement("h4")
		name.textContent=el.name;
		let gift= document.createElement("button")
		gift.textContent="Select Your Gift"
		gift.setAttribute("id","gift")
	  let price= document.createElement("h6")
	  price.textContent=el.price
	  let buy= document.createElement("button")
	  buy.textContent="Quick Buy"
	  buy.setAttribute("id","buy")
	  buy.addEventListener("click",function(){
        let cartItem= JSON.parse(localStorage.getItem("cart"))||[];
		let ald = false;
            for(let i=0; i<cartItem.length; i++){
              if(cartItem[i].name==el.name){
                ald=true
                break;
              }
            } if(ald===true){
				alert("Your Product is already in Cart")
			  }
			  else{
				cartItem.push({...el,qty:1})
				alert("Your Product is added in Cart")
					localStorage.setItem("cart",JSON.stringify(cartItem))
			  }
	  })
		cards.append(image,name,gift,price,buy)
		document.querySelector("#fetched").append(cards)
	})
}