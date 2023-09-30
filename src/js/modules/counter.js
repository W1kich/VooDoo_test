import countAll from "./countAll";

const counter = () =>{
	window.addEventListener('click', function (e) {
		if(e.target.classList.contains("delete-bin")){
			e.target.closest('.shopping__list__item').remove();
			countAll();
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

		countAll();
	}

	if (e.target.classList.contains("plus") || e.target.classList.contains("minus") && e.target.closest('.shoppingCard')) {
		countAll();
	}
	
});



}

export default counter;