/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/services */ "./src/js/service/services.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/js/modules/menu.js");
/* harmony import */ var _shoppingCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shoppingCart */ "./src/js/modules/shoppingCart.js");
/* harmony import */ var _countAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countAll */ "./src/js/modules/countAll.js");





const cards = async () =>{	
	
	const MenuCard = (data ,parentClass = ".cards") =>{
		const element = document.createElement('div');
		const parent = document.querySelector(parentClass);

		element.innerHTML = `
		<div class="card flex flex-col gap-3 w-[300px] h-[448px] ">
			<div class="relative hover:cursor-pointer">
				<div class="w-[300px] h-[300px] p-[12px] border-solid border-black border-2 ">
					<img id="${data.id}" class="imgBox"src="${data.img}" alt="">
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
			<div id="${data.id}" class="bg-black button text-mainColor p-[16px] text-sm rounded text-center hover:cursor-pointer hover:bg-slate-600">
				ADD TO CART
			</div>
		</div> `;

		parent.append(element);
	}
	

	const itemList = await (0,_service_services__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
		if (e.target.classList.contains('imgBox')) {
			const windowWidth = window.innerWidth;

			if (windowWidth < 768) {
					return false;
			}else{
				(0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])(+e.target.id);
					window.scrollTo({
							top: 0,
							behavior: 'smooth'
					});
			}
		} else if (e.target.classList.contains('button')) {
				const parent = document.querySelector("#shopping__list");
				const itemInCard = parent.querySelector(`#A${e.target.id}`);
				if (itemInCard) {
						const cardCounter = itemInCard.querySelector(".countNumber");
						cardCounter.innerHTML++;
				} else {
						await (0,_shoppingCart__WEBPACK_IMPORTED_MODULE_2__["default"])(+e.target.id); // Очікуємо, доки shopingCard завершить роботу
				}
		}
		(0,_countAll__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Викликаємо countAll() після всіх змін
});



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./src/js/modules/countAll.js":
/*!************************************!*\
  !*** ./src/js/modules/countAll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const countAll = () =>{
	const cartWrapper = document.querySelector('.shoppingCard');
	const priceElements = cartWrapper.querySelectorAll('.shopping__list__item__price');
	const totalPriceEl = document.querySelector('.total');
	let priceTotal = 0;

	
	priceElements.forEach(function (item) {
			const amountEl = item.closest('.shopping__list__item').querySelector('.countNumber');
		priceTotal += parseFloat(item.innerText) * parseFloat(amountEl.innerText);
	});


	totalPriceEl.innerText = priceTotal.toFixed(2) + "KR.";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countAll);

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _countAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countAll */ "./src/js/modules/countAll.js");


const counter = () =>{
	window.addEventListener('click', function (e) {
		if(e.target.classList.contains("delete-bin")){
			e.target.closest('.shopping__list__item').remove();
			(0,_countAll__WEBPACK_IMPORTED_MODULE_0__["default"])();
		}
		let counter;

		if (e.target.classList.contains("plus") || e.target.classList.contains("minus")) {

		const counterWrapper = e.target.closest('.shopping__list__item');
		counter = counterWrapper.querySelector('.countNumber');
	}

	if (e.target.classList.contains("plus")) {
		counter.innerText = ++counter.innerText;
	}

	if (e.target.classList.contains("minus")) {
		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
		} else if (e.target.closest('.shopping__list__item') && parseInt(counter.innerText) === 1) {
			e.target.closest('.shopping__list__item').remove();
		}

		(0,_countAll__WEBPACK_IMPORTED_MODULE_0__["default"])();
	}

// Проверяем клик на + или - внутри коризины
	if (e.target.classList.contains("plus") || e.target.classList.contains("minus") && e.target.closest('.shoppingCard')) {
		// Пересчет общей стоимости товаров в корзине
		(0,_countAll__WEBPACK_IMPORTED_MODULE_0__["default"])();
	}
	
});



}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/services */ "./src/js/service/services.js");

const menu = async (id) =>{
	const menuButton = document.querySelector(".menu__button");
	const parent = document.querySelector(".products");
	const menu = document.querySelector(".menu");
	const itemList = await (0,_service_services__WEBPACK_IMPORTED_MODULE_0__["default"])();
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/js/modules/shoppingCart.js":
/*!****************************************!*\
  !*** ./src/js/modules/shoppingCart.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _service_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/services */ "./src/js/service/services.js");


const shopingCard = async (id) => {
		const parent = document.querySelector(".shopping__list");
		const listItem = document.createElement('div');
		const itemList = await (0,_service_services__WEBPACK_IMPORTED_MODULE_0__["default"])();
		let newArr = itemList.filter((item) => item.id === id);

		if(newArr[0].price === "Sold out"){
			return 0;
		}

		listItem.id = `A${newArr[0].id}`;

		listItem.classList = 'shopping__list__item flex flex-row gap-[18px] align-top mb-[40px]';
		listItem.innerHTML = `
				<div class="rounded border-gray-500 border-2 w-[74px] h-[74px]"><img src="${newArr[0].img}" alt=""></div>
				<div class=" text-mainColor text-sm flex flex-col gap-[12px] w-[231px]">
						<div class="">${newArr[0].title}</div>
						<div class="shopping__list__item__price">${newArr[0].price}</div>
						<div class="counter flex flex-row items-end gap-[6px] text-center">
								<div class="minus px-[4px] pb-px min-h-[20px] min-w-[20px] hover:bg-gray-700 hover:cursor-pointer "> -</div>
								<div class="countNumber px-[3px] min-h-[20px] min-w-[20px]">1</div>
								<div class="plus px-[3px] min-h-[20px] min-w-[20px] hover:bg-gray-700 hover:cursor-pointer">+</div>
						</div>
				</div>
				<div class="delete-bin"><img class="delete-bin" src="./img/delete-bin-6-line.svg" alt=""></div>
		`;

		parent.appendChild(listItem);
		
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shopingCard);


/***/ }),

/***/ "./src/js/modules/showShop.js":
/*!************************************!*\
  !*** ./src/js/modules/showShop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const showShop = () =>{
	window.addEventListener("click", (e) =>{
		const shopList = document.querySelector(".shoppingCard");
		if(e.target.classList.contains("button") || e.target.classList.contains("shopping-card") ){
			console.log('open');
			shopList.classList.remove("right-[-100%]");
			shopList.classList.add("right-[0]");
		}else if(e.target.classList.contains("close-shopping-card")){
			shopList.classList.add("right-[-100%]");
			shopList.classList.remove("right-[0]");

			console.log('close');
		}
	});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showShop);

/***/ }),

/***/ "./src/js/service/services.js":
/*!************************************!*\
  !*** ./src/js/service/services.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const _transformData = (product) => {
	return {
		id: product.id,
		title: product.title.length >= 22 ? product.title.slice(0, 19) + '...' : product.title,
		vendor: product.vendor,
		product_type: product.product_type,
		price: product.variants.length ? product.variants[0].price !== "0.00" ? product.variants[0].price: "Sold out" : "Sold out",
		img: product.images.length ? product.images[0].src : 'https://cdn.shopify.com/s/files/1/0690/0075/7529/products/AAUvwnj0ICORVuxs41ODOvnhvedArLiSV20df7r8XBjEUQ_s900-c-k-c0x00ffffff-no-rj.jpg?v=1670516994',
		option: product.options[0].values ? product.options[0].values : "no option"
	}
}
	
	const getAllData = async (offset = 500) => {
		const res = await fetch(`https://voodoo-sandbox.myshopify.com/products.json?limit=${offset}`);

	if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
	}
	const data = await res.json();
	return data['products'].map(_transformData);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllData);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter */ "./src/js/modules/counter.js");
/* harmony import */ var _modules_showShop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/showShop */ "./src/js/modules/showShop.js");
/* harmony import */ var _modules_countAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countAll */ "./src/js/modules/countAll.js");





window.addEventListener('DOMContentLoaded', function() {
	(0,_modules_cards__WEBPACK_IMPORTED_MODULE_0__["default"])();
	(0,_modules_counter__WEBPACK_IMPORTED_MODULE_1__["default"])();
	(0,_modules_showShop__WEBPACK_IMPORTED_MODULE_2__["default"])();
	(0,_modules_countAll__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map