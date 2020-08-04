const promise = new Promise((resolve, reject) => {
	resolve("good");
	//reject("bad");
})
	.then((value) => {
		console.log(value);
		return 1;
	})
	.then((value) => {
		console.log(value);
		return 2;
	})
	.then((value) => {
		console.log(value);
		return 3;
	})
	.then((value) => {
		console.log(value);
		return 4;
	})
	.catch((err) => {
		console.log(err);
	});
