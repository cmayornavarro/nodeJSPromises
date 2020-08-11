const fs = require('fs');


//old
fs.readFile('data1.txt', (err,data) =>{
	console.log(data.toString());
});


//new
new Promise
	((resolve,reject) => {
		fs.readFile('data1.txt',(err,data)=>{
				if(err){
					reject(err);
				}else{
				  // if there is no problem with the file then the promise returns resolve
					resolve(data);
				}
		});

	})// go inside then if promise return resolve
	.then(data =>{
		console.log(data.toString());
	})
	.catch(err =>{
		console.log(err);
	});