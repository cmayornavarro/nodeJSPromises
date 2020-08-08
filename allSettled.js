  const fs = require('fs');
const util = require('util');

//old
fs.readFile('data1.txt', (err,data1) =>{
	fs.readFile('data2.txt', (err,data2) =>{
		fs.readFile('data3.txt', (err,data3) =>{
			console.log(data1.toString());
			console.log(data2.toString());
			console.log(data3.toString());
		});
	});
});


//new
var read = util.promisify(fs.readFile);
//parallel, wait for all promises
Promise.allSettled([
	
	read('data1.txt'),
	read('data5.txt'),
	read('data3.txt')

	])
	.then(data =>{
		const[data1,data2,data3] = data;
			//console.log(data1.status+' '+data1.value.toString());
			console.log(data1);
			console.log(data2);
			console.log(data3);
	}).catch(err =>{
		console.log(err);
	});

