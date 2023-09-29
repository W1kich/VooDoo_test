const showShop = () =>{
	window.addEventListener("click", (e) =>{
		const shopList = document.querySelector(".shoppingCard");
		if(e.target.classList.contains("button") || e.target.classList.contains("shopping-card") ){
			shopList.classList.remove("right-[-100%]");
			shopList.classList.add("right-[0]");
		}else if(e.target.classList.contains("close-shopping-card")){
			shopList.classList.add("right-[-100%]");
			shopList.classList.remove("right-[0]");
		}
	});
}

export default showShop;