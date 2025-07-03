// const myPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve(console.log('resolved'));
// 	}, 2000);
// });

// const myPromise2 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject('rejected');
// 	}, 2000);
// });

// const myPromise3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('fetched data 1');
// 		resolve('data 1');
// 	}, 2000);
// })
// 	.then(() => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				console.log('fetched data 2');
// 				resolve('data 2');
// 			}, 2000);
// 		});
// 	})
// 	.then(() => {
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				console.log('fetched data 3');
// 				resolve('data 3');
// 			}, 2000);
// 		});
// 	})
// 	.then(() => {
// 		console.log('done');
// 	});

// async function myfunc() {
// 	const my = await new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('resolved');
// 		}, 2000);
// 	});
// 	console.log(my);
// }

// myfunc();

// const myfunc2 = async () => {
// 	try {
// 		const my = await new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				reject('rejected');
// 			}, 2000);
// 		});
// 	} catch (e) {
// 		console.log(e);
// 	}
// };

// myfunc2();

// const API = () => {
// 	fetch('https://jsonplaceholder.typicode.com/todos/1')
// 		.then((response) => response.json())
// 		.then((json) => console.log(json));
// };

// API();

// const API2 = async () => {
// 	const response = await fetch(
// 		'https://jsonplaceholder.typicode.com/todos/1'
// 	);
// 	const data = await response.json();
// 	console.log(data);
// };

// API2();

const promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		res('1');
	}, 2000);
});

const promise2 = new Promise((res, rej) => {
	setTimeout(() => {
		res('3');
	}, 2000);
});

const promise3 = new Promise((res, rej) => {
	setTimeout(() => {
		res('3');
	}, 2000);
});

Promise.all([promise1, promise2, promise3])
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(`Error is ${e}`);
	});

const promise4 = new Promise((res, rej) => {
	setTimeout(() => {
		res('4');
	}, 2000);
});
const promise5 = new Promise((res, rej) => {
	setTimeout(() => {
		res('5');
	}, 1000);
});
const promise6 = new Promise((res, rej) => {
	setTimeout(() => {
		res('6');
	}, 3000);
});

Promise.race([promise4, promise5, promise6])
	.then((res) => {
		console.log(res);
	})
	.catch((e) => {
		console.log(`Error is ${e}`);
	});
