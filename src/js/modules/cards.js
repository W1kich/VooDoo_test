import getAllData from '../service/services';
import shopingCard from './shoppingCart';
import countAll from './countAll';

const cards = async () =>{
	const MenuCard = (data ,parentClass = ".cards") =>{
		const element = document.createElement('div');
		const parent = document.querySelector(parentClass);

		element.innerHTML = `
		<div class="card flex flex-col gap-3 w-[300px] h-[448px] ">
			<div class="relative hover:cursor-pointer">
				<div class="w-[300px] h-[300px] p-[12px] border-solid border-black border-2 ">
					<img class="imgBox"src="${data.img}" alt=">${data.title}">
				</div>
				<div class=" rounded p-[8px] bg-black text-mainColor text-xs absolute top-[12px] left-[12px]">Used</div>
			</div>
			<div class="flex flex-row justify-between">
				<div class="flex flex-col items-start">
					<div class="">${data.title}</div>
					<div class="">${data.price === "Sold out" ? "Sold out" : data.price + "KR."} </div>
				</div>
				<div class="flex flex-col items-end">
					<div class="">Condition</div>
					<div class="">Slightly used</div>
				</div>
			</div>
			<div id="${data.id}" class="bg-black button text-mainColor p-[16px] text-sm rounded text-center cursor-pointer transition-all ease-in-out hover:bg-slate-600">
				ADD TO CART
			</div>
		</div> `;

		parent.append(element);
	}
	

	const itemList = await getAllData();
	let currentPage = 1;
	let rows = 24;
	
	const displayList = (arrData, rowPerPage, page) =>{
		const postEl = document.querySelector(".cards");
		postEl.innerHTML = "";
		page--;
		const start = rowPerPage * page;
		const end = start + rowPerPage;
		const padinationData = arrData.slice(start, end);

		padinationData.forEach(item =>{
			MenuCard(item);
		})
	}

	const displayPagination = (arrData, rowPerPage, page) =>{
	const pagesCount = Math.ceil(arrData.length / rowPerPage);

		const list = document.querySelector(".pages");
		
	function createPagination(totalPages = pagesCount, page){
		let liTag = '';
		let active;
		let beforePage = page - 1;
		let afterPage = page + 1;
		if(page >1 && page !=2){
			liTag += `<div class="page__link p-[13px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg")">1</span></div>`;
			if(page > 3){
				liTag += `<div class="p-[11px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg" >...</div>`;
			}
		}

		if (page == totalPages) {
			beforePage = beforePage - 3;
		} else if (page == totalPages - 1) {
			beforePage = beforePage - 2;
		}else if (page == totalPages - 2) {
			beforePage = beforePage - 1;
		}
		
		if (page == 1) {
			afterPage = afterPage + 3;
		} else if (page == 2) {
			afterPage  = afterPage + 2;
		}else if(page ==3){
			afterPage  = afterPage + 1;
		}

		for (let plength = beforePage; plength <= afterPage; plength++) {
			if (plength > totalPages) { 
				continue;
			}
			if (plength == 0) {
				plength = plength + 1;
			}
			if(page == plength){ 
				active = "active text-mainColor bg-black";
			}else{ 
				active = "text-black";
			}
			if(plength > 9){
				liTag += `<div class="page__link p-[6px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2   rounded-full font-light text-lg ${active}" >${plength}</div>`;
			}else{	
				liTag += `<div class="page__link p-[11px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2   rounded-full font-light text-lg ${active}" >${plength}</div>`;
			}
		}

		if(page < totalPages - 1){
			if(page < totalPages - 2){ 
				liTag += `<div class="p-[11px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg" >...</div>`;
			}
			liTag += `<div class="page__link p-[6px] hover:cursor-pointer flex flex-0 h-[39px] justify-center items-center border-solid border-black border-2 text-black  rounded-full font-light text-lg">${totalPages}</div>`;
		}

		return liTag; 
	}

		const element = createPagination(pagesCount, page);
		list.innerHTML = element;
		
	}


	displayList(itemList, rows, currentPage);
	displayPagination(itemList, rows, currentPage);
	const link = document.querySelector(".pages");

	link.addEventListener("click", (e) => {
		
			if (e.target.classList.contains("page__link")) {
					currentPage = +e.target.innerText;
					displayPagination(itemList, rows, currentPage);
					displayList(itemList, rows, currentPage);
					window.scrollTo({
							top: 0,
							behavior: 'smooth'
					});
			}
	});


	window.addEventListener("click", async (e) => {
	if (e.target.classList.contains('button')) {
				const parent = document.querySelector("#shopping__list");
				const itemInCard = parent.querySelector(`#A${e.target.id}`);
				if (itemInCard) {
						const cardCounter = itemInCard.querySelector(".countNumber");
						cardCounter.innerHTML++;
				} else {
						await shopingCard(+e.target.id); 
				}
		}
		countAll(); 
	});

}

export default cards;
