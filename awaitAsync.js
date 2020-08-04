const fs = require('fs');
const util = require('util');
const read = util.promisify(fs.readFile);

var run = async() => {
	// promise version
	read('data1.txt').then(data =>{
		console.log(data.toString());
	});


	const data = await read('data2.txt')
	console.log(data.toString());
}


run();