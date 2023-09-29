
const menu = () =>{
	const menuButton = document.querySelector(".menu__button");
	const parent = document.querySelector(".products");
	const menu = document.querySelector(".menu");
	
		parent.addEventListener('click', function handleClick(e) {
			if (e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button')) {
				menu.classList.add("hidden");
				menu.classList.remove("left-0");
				menu.classList.add("left-[-100%]");
				menuButton.classList.remove("rotate-180");
			} else if(!e.target.classList.contains('rotate-180') && e.target.classList.contains('menu__button')){
				menu.classList.remove("hidden");
				menu.classList.add("left-0");
				menu.classList.remove("left-[-100%]");
				menuButton.classList.add("rotate-180");
			}
		});
		
}

export default menu;