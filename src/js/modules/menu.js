
const menu = async () =>{
	const menuButton = document.querySelector(".menu__button");
	const parent = document.querySelector(".products");
	const menu = document.querySelector(".menu");
	menu.classList.add(`h-[0]`);
		parent.addEventListener('click', function handleClick(e) {
			if (e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button')) {
				menu.classList.add("hidden");
				menuButton.classList.remove("rotate-180");
			} else if(!e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button')){
				menu.classList.remove("hidden");
				menuButton.classList.add("rotate-180");
			}
		});
		
}

export default menu;