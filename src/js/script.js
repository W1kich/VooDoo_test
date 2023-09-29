import cards from './modules/cards';
import counter from './modules/counter';
import showShop from './modules/showShop';
import countAll from './modules/countAll';
import menu from './modules/menu';

window.addEventListener('DOMContentLoaded', function() {
	cards();
	counter();
	showShop();
	countAll();
	menu();
});