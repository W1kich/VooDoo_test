import getAllnewArr from '../service/services';

const shopingCard = async (id) => {
		const parent = document.querySelector(".shopping__list");
		const listItem = document.createElement('div');
		const itemList = await getAllnewArr();
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
						<div class="shopping__list__item__price">${newArr[0].price === "Sold out" ? "Sold out" : newArr[0].price + "KR."}</div>
						<div class="counter flex flex-row items-end gap-[6px] text-center">
								<div class="minus px-[4px] pb-px min-h-[20px] min-w-[20px] hover:bg-gray-700 hover:cursor-pointer "> -</div>
								<div class="countNumber px-[3px] min-h-[20px] min-w-[20px]">1</div>
								<div class="plus px-[3px] min-h-[20px] min-w-[20px] hover:bg-gray-700 hover:cursor-pointer">+</div>
						</div>
				</div>
				<div class="delete-bin"><img class="delete-bin" src="src/img/delete-bin-6-line.svg" alt=""></div>
		`;

		parent.appendChild(listItem);
		
}

export default shopingCard;
