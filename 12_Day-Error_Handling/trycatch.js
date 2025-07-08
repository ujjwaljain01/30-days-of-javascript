function task1() {
	try {
		throw new Error('Error');
	} catch (e) {
		console.log(`Error caught is ${e}`);
	}
}
task1();

function divide(num1, num2) {
	try {
		if (num2 === 0) {
			throw new Error('cannot divide by 0');
		}
		return num1 / num2;
	} catch (e) {
		return `Error is ${e.message}`;
	}
}

console.log(divide(3, 0));

function message() {
	try {
		console.log('try block');
	} catch {
		console.log('catch block');
	} finally {
		console.log('finally block');
	}
}
message();

class myError extends Error {
	constructor(message) {
		super(message);
		this.name = 'My custom error';
	}
}

function myFunc() {
	try {
		throw new myError('My custom error has occured');
	} catch (e) {
		console.log(e.name);
		console.log(e.message);
	}
}
myFunc();

const mypromise = new Promise((res, rej) => {
	const random = Math.floor(Math.random() * 10);
	if (random >= 5) {
		res('promise resolved');
	}
	rej('promise rejected');
});

mypromise
	.then((res) => {
		console.log(`${res}`);
	})
	.catch((e) => {
		console.log(`${e}`);
	});

async function func2() {
	try {
		return await new Promise((res, rej) => {
			const random = Math.floor(Math.random() * 10);
			if (random >= 5) {
				res('promise resolved');
			}
			rej(`promise rejected ${random}`);
		});
	} catch (e) {
		return `the error is ${e}`;
	}
}

const result = func2();
result.then((res) => {
	console.log(res);
});

fetch('https://invalidexample.com')
	.then((res) => {
		if (!res.ok) {
			throw new Error('404 page not found ');
		}
		return res.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((e) => {
		console.log(e.message);
	});

async function func3() {
	try {
		const res = await fetch('https://invalidexample.com');
		if (!res.ok) {
			throw new Error(`Error is ${res.status}`);
		}
		const data = await res.json();
		return data;
	} catch (e) {
		return e.message;
	}
}
async function result() {
	try {
		const result = await func3();
		console.log(result);
	} catch (e) {
		console.log(e);
	}
}
result();
