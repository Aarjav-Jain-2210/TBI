//Getting elements easily by using function

const elem = (x) =>{
	return document.querySelector(x);
}


//Menu bar for mobile users

var menu_part = elem(".menu_part");

const openMenu = () =>{
	menu_part.classList.add("active");
}
const closeMenu = () =>{
	menu_part.classList.remove("active");
}
//Switching images preview
var image_preview = document.querySelectorAll(".image_preview"),
	
	images_smallbox = document.querySelectorAll(".images_smallbox"),

	images1 = images_smallbox[0].querySelectorAll("img");//The first thumbnails images
	images2 = images_smallbox[1].querySelectorAll("img");//Lightbox thumbnails images

	images1[0].className = "active";


const changeImage = (x) =>{
	let src = x.src;
	let alt = x.alt;//Get alt value inorder to replace the image preview with the number alt
	

	switch(alt){
		case "image_1":
				for(let i=0;i<image_preview.length;i++){
					image_preview[i].src = "./images/image-product-1.jpg";
					image_preview[i].alt = "image_1";
				}//To change both images on both sides 

				for(let i=0;i<images1.length;i++){//For first div
					if(images1[i].alt == "image_1"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}

				
				
		break;
		case "image_2":
				for(let i=0;i<image_preview.length;i++){
					image_preview[i].src = "./images/image-product-2.jpg";
					image_preview[i].alt = "image_2";

				}

				for(let i=0;i<images1.length;i++){
					if(images1[i].alt == "image_2"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}

				

		break;
		case "image_3":
				for(let i=0;i<image_preview.length;i++){
					image_preview[i].src = "./images/image-product-3.jpg";
					image_preview[i].alt = "image_3";

				}

				for(let i=0;i<images1.length;i++){
					if(images1[i].alt == "image_3"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}

				

		break;
		case "image_4":
				for(let i=0;i<image_preview.length;i++){
					image_preview[i].src = "./images/image-product-4.jpg";
					image_preview[i].alt = "image_4";

				}
				for(let i=0;i<images1.length;i++){
					if(images1[i].alt == "image_4"){
						images1[i].className = "active";
						images2[i].className = "active";
					}else{
						images1[i].classList.remove("active");
						images2[i].classList.remove("active");
					}
				}

				

		break;

	}//Wonderful :)
}


//For lightbox gallery
var lighbox = elem("#light_box"),
	styleElem = document.head.appendChild(document.createElement("style"));

	styleElem.innerHTML = `
		#light_box{
			display: none;

		}

		@media (max-width: 800px){
			#light_box{
				display: none;
			}
		}

	`;//To prevent showing the lightbox at first load up

const openGallery = (x) =>{
	
	styleElem.innerHTML = `
		#light_box{
			display: flex;

		}

		@media (max-width: 800px){
			#light_box{
				display: none;
			}
		}

	`;//Make lightbox visible only on large screens
	let src = x.src;
	let alt = x.alt;
	image_preview[1].src = src;//Make the current clicked preview image to be shown

	for(let i=0;i<images2.length;i++){//Make active the current clicked image
		if(images2[i].alt == alt){
			images2[i].className = "active";
		}else{
			images2[i].classList.remove("active");

		}
	}

	
	
}

const closeGallery = () =>{
	styleElem.innerHTML = `
		#light_box{
			display: none;
		}

		@media (max-width: 800px){
			#light_box{
				display: none;
			}
		}

	`;
	
}	

//Next and prev buttons slideshow
var i = 0;
const change = (n) =>{
	
	let images = ["./images/image-product-1.jpg","./images/image-product-2.jpg",
					"./images/image-product-3.jpg","./images/image-product-4.jpg"];//to store the src of the images
	
	
	let calc = eval(i+(n));

	i = calc;

	if(i < 0 || i >= images.length){//I think there is a small bug here I can't figure it out meen :(
		i = 0;
		for(let j=0;j<image_preview.length;j++){//Change both sides preview
			image_preview[j].src = images[i];
		}
	}
	else{
		for(let j=0;j<image_preview.length;j++){//Change both sides preview
			image_preview[j].src = images[i];
		}
		
	}

}


//Quantity for item
var quantity_value = elem(".quantity_value");
let val = quantity_value.textContent;

const quantity = (n) =>{

	let res = eval(val+(n));

	val = res;

	if(val<0){//Make it not to be -ve
		val=0;
	}else if(val>50){
		alert("Sorry the maximum stock available is 50 :(");
		val=50;
	}
	
	quantity_value.innerText = val;

}


//To add to cart script

var item_value = elem(".item_value");
let price = "125";

const addCart = () =>{
	if(val>0){//Check if quantity is set to atleast greater than 0

		item_value.style.display = "block";
		item_value.innerText = val;
		let total_cost = eval(price * val);

		item_part.innerHTML = `

			<div class="item_img">
    			<img src="images/image-product-1-thumbnail.jpg" alt="item image">
    		</div>

    		<div class="item_info">
    			<p>Fall Limited Edition Sneakers</p>
    			<p>$125.00 x <span class="quantity">${val}</span> <span class="total">$${total_cost}.00</span></p>
    		</div>

    		<div class="delete_btn">
    			<button onclick="Remove()"><img src="images/icon-delete.svg" alt="delete button"></button>
    		</div>

				`;
		checkout_part.style.display = "block";

	}else{
		item_value.style.display = "none";

	}
}

//To open the cart
var checkout_box = elem("#checkout_box"),
	item_part = checkout_box.querySelector(".item_part");
	checkout_part = checkout_box.querySelector(".checkout_part");

const openCart = () =>{
	
	if(checkout_box.style.display == "block"){//Toggle open and close the cart
		checkout_box.style.display = "none";
	}else{
		checkout_box.style.display = "block";
	}

	if(item_value.style.display == "none" || val == 0){

		item_part.style.display = "block";

		item_part.innerHTML = `
			<div>
				<p class="empty_text">Your cart is empty.</p>
			</div>
			`;
		checkout_part.style.display = "none";
	}else{

		let total_cost = eval(price * val);

		item_part.innerHTML = `

			<div class="item_img">
    			<img src="images/image-product-1-thumbnail.jpg" alt="item image">
    		</div>

    		<div class="item_info">
    			<p>Fall Limited Edition Sneakers</p>
    			<p>$125.00 x <span class="quantity">${val}</span> <span class="total">$${total_cost}.00</span></p>
    		</div>

    		<div class="delete_btn">
    			<button onclick="Remove()"><img src="images/icon-delete.svg" alt="delete button"></button>
    		</div>

				`;
		item_part.style.display = "flex";
		checkout_part.style.display = "block";

	}
}

//To remove the item on cart

const Remove = ()=>{
	
	item_value.style.display = "none";
	item_part.style.display = "block";
	item_part.innerHTML = `
			<div>
				<p class="empty_text">Your cart is empty.</p>
			</div>
			`;
	checkout_part.style.display = "none";

}

//Checkout script

const checkout = () =>{
	item_part.style.display = "block";
	item_part.innerHTML = `
			<div>
				<p class="empty_text">Thanks your order for ${val} has been received :)</p>
			</div>
			`;
	checkout_part.style.display = "none";
}



