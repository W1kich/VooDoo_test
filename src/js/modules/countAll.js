const countAll = () =>{
	const cartWrapper = document.querySelector('.shoppingCard');
	const priceElements = cartWrapper.querySelectorAll('.shopping__list__item__price');
	const totalPriceEl = document.querySelector('.total');
	let priceTotal = 0;

	function extractNumbersFromString(inputString) {
		const regex = /\d+\.\d+/g;
		const matches = inputString.match(regex);

		if (matches) {
			return +matches[0];
		} else {
			return 0;
		}
	}

	priceElements.forEach(function (item) {
			const amountEl = item.closest('.shopping__list__item').querySelector('.countNumber');
		priceTotal += parseFloat(extractNumbersFromString(item.innerText)) * parseFloat(amountEl.innerText);
	});


	totalPriceEl.innerText = priceTotal.toFixed(2) + "KR.";
}

export default countAll;