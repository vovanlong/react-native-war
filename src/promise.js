const getData = () => {
    let pro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('message');
            // reject('error message');
        }, 3000);
    });
    return pro;
};

getData().then((data) => {
    let message = data + 'kjsdbjksd';
    return message;
}).then(data2 => {
    console.log(data2);
}).catch(error => {
    console.log(error)
});
