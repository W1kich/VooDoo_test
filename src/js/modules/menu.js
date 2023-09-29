import getAllnewArr from '../service/services';
const menu = async (id) =>{
	const menuButton = document.querySelector(".menu__button");
	const parent = document.querySelector(".products");
	const menu = document.querySelector(".menu");
	const itemList = await getAllnewArr();
	let text = '';

	let newArr = itemList.filter((item) =>{
		return item.id === id;
	})
	
	newArr[0].option.forEach(item =>{
		text += "<br>" + item ;
	})

	menu.innerHTML = `
	<div id="${newArr[0].id}" class="flex flex-col gap-3 h-[448px]  w-[300px]">
				<div class="relative ">
					<div class="w-[300px] h-[300px] p-[12px] border-solid border-mainColor border-2">
						<img src="${newArr[0].img}" alt="">
					</div>
					<div class=" rounded p-[8px] bg-mainColor text-black text-xs absolute top-[12px] left-[12px]">Used</div>
				</div>
				<div class="flex flex-row justify-between text-mainColor">
					<div class="flex flex-col items-start">
						<div class="">${newArr[0].title}</div>
						<div class="">${newArr[0].price === "Sold out" ? "Sold out" : newArr[0].price + "KR."}</div>
					</div>
					<div class="flex flex-col items-end">
						<div class="">Condition</div>
						<div class="">Slightly used</div>
					</div>
				</div>
				<div id="${newArr[0].id}" class="bg-mainColor button text-black p-[16px] text-sm rounded text-center hover:cursor-pointer">
					ADD TO CART
				</div>
			</div> 
			<div class="flex flex-col text-mainColor">
				<div class="">Option:
					${text}
				</div>
				<div class="">Product type: ${newArr[0].product_type ? newArr[0].product_type : "not found"}</div>
				<div class="">Vendor: ${newArr[0].vendor}</div>
			</div>
		</div>
		`;

		menu.classList.remove("hidden");
		menu.classList.remove("left-[-100%]");
		menu.classList.add("left-0");
		menuButton.classList.add("rotate-180");
	
		
		parent.addEventListener('click', function handleClick(e) {
			if (e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button')) {
				console.log(e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button'));
		
				menu.classList.add("hidden");
				menu.classList.remove("left-0");
				menu.classList.add("left-[-100%]");
				menuButton.classList.remove("rotate-180");
		
				parent.removeEventListener('click', handleClick); 
			} 
		});
		
}

export default menu;