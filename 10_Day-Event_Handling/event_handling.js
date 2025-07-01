let para = document.querySelector('.text');
let btnChange = function () {
	para.innerHTML = 'BUTTON CLICKED!!!';
};

let image = document.querySelector('.img');
image.addEventListener('dblclick', (e) => {
	image.innerHTML = `
    			<img
				src="img.jpg"
				width="150"
				height="100"
				alt="Image is not present"
			/>`;
});

const bgchange = document.getElementById('bgchange');
bgchange.addEventListener('mouseover', (e) => {
	bgchange.setAttribute('style', 'background-color:black; color :white;');
});
bgchange.addEventListener('mouseout', (e) => {
	bgchange.setAttribute('style', 'background-color:white; text:black;');
});

const input = document.querySelector('.input');
const key = document.querySelector('#key');
const keyCode = document.querySelector('#keyCode');
input.addEventListener('keydown', (e) => {
	key.textContent = e.key;
	keyCode.textContent = e.keyCode;
});

const keyUp = document.querySelector('#keyUp');
const keyUpName = document.querySelector('#keyUpName');
const keyUpCode = document.querySelector('#keyUpCode');

keyUp.addEventListener('keyup', (e) => {
	keyUpName.textContent = e.key;
	keyUpCode.textContent = e.keyCode;
});

const regis = document.getElementById('regis');
regis.addEventListener('submit', (e) => {
	e.preventDefault();
	const data = new FormData(regis);
	for (const [key, value] of data.entries()) {
		console.log(`${key} - ${value}`);
	}
});

const change = document.querySelector('#change');
change.addEventListener(
	'change',
	(e) => {
		console.log(e.target.value);
	},
	false
);

const delegate = document.querySelector('#delegate');
delegate.addEventListener(
	'click',
	(e) => {
		const li = e.target.closest('li');
		if (li) {
			console.log(li.textContent);
		}
	},
	false
);

const dynamic = document.querySelector('#dynamic');
const btn = document.querySelector('#btn');
btn.addEventListener(
	'click',
	(e) => {
		const li = document.createElement('li');
		li.innerText = 'JS';
		dynamic.appendChild(li);
	},
	false
);

dynamic.addEventListener(
	'click',
	(e) => {
		const li = e.target.closest('li');
		if (li) {
			console.log(li.textContent);
		}
	},
	false
);
