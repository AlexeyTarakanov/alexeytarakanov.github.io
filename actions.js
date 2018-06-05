const quotes = [
	'Он может там и встанет, но надо засунуть.',
	'Никто не будет сосать!',
	'А ты видел мою попку?',
	'Если вам раздавать свои помпушки - себе не останется.',
	'Дело было в апреле, а сейчас апрель.',
	'Хотел выйти, но не вышел.',
	'Нашли кого нет.',
	'Раньше было лучше.',
	'Посодют.',
	'Если бы ты рожал, у тебя было бы вла****ще.',
	'И навернулся.',
	'Строгость компенсируется необязательностью.',
	'Все будет хорошо.',
	'У меня все есть, но я никогда ничего не понимал.',
	'Я должен заботиться о всех, а не о каждом.',
	'Вот так надо развивать руки на работе!',
	'Хоть что-то должно быть большим.',
	'Ничего не ожидаю, ни на что не претендую, ничего не хочу.',
	'Сначала я долго коплю, а потом бурно выплескиваю.',
	'Ну в жопе и хер с ним.',
	'Это случается когда дырочки сходятся.',
	'Ты тут не винтик, ты тут болт!',
	'Я псих, поэтому со мной трудно (я идейный).',
	'Когда стояк - держак не нужен.',
	'Горшок - это святое.',
	'Мне до Вас, как до Луны на четвереньках!',
	'Я его сейчас воткну, а он распухнет. Зачем мне такое надо?',
	'английский - не русский',
	'Если вешать нос, далеко не уйдёшь'
];

function getQuote() {
	const getQuoteId = Math.floor(Math.random() * quotes.length);
	const doc = document.getElementById('quoteContainer');
	let blockquote = document.createElement('blockquote');
	let paragraph = document.createElement('p');
	let footer = document.createElement('footer');
	let footerTxt = document.createTextNode('The Great N.');
	let paragraphTxt = document.createTextNode(quotes[getQuoteId]);

	paragraph.classList.add('lead');
	footer.classList.add('text-right');

	paragraph.appendChild(paragraphTxt);
	footer.appendChild(footerTxt);
	blockquote.appendChild(paragraph);
	blockquote.appendChild(footer);

	clearQuote();
	doc.appendChild(blockquote);
}

function clearQuote() {
	document.getElementById('quoteContainer').innerHTML = '';
}
getQuote();
