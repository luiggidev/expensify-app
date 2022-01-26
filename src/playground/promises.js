const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Luiggi',
        //     age: 30
        // });

        reject('Something went wrong!')
    }, 1500);
});

console.log('before');

promise.then((data) =>{
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error);
})


console.log('after');
