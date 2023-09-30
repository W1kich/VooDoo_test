
const menu = async () =>{
	const menuButton = document.querySelector(".menu__button");
	const parent = document.querySelector(".products");
	const menu = document.querySelector(".menu");
	const menuHeight = await menu.clientHeight;
	menu.classList.add(`h-[0]`);
	console.log(menuHeight);
		parent.addEventListener('click', function handleClick(e) {
			if (e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button')) {
				menu.classList.add(`h-[0]`);
				menu.classList.remove(`h-[${menuHeight}px]`);
				menu.classList.remove("left-0");
				menu.classList.add("left-[-9999px]");
				menuButton.classList.remove("rotate-180");
			} else if(!e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button')){
				menu.classList.add(`h-[${menuHeight}px]`);
				menu.classList.remove(`h-[0]`);
				menu.classList.add("left-0");
				menu.classList.remove("left-[-9999px]");
				menuButton.classList.add("rotate-180");
			}
		});
		
}

export default menu;