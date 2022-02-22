const getButtonManually = document.getElementById('get-button-manually');
const getButton = document.getElementById('get-button');
const postButton = document.getElementById('post-button');

// GET OR POST Data Manualy
const getDataManuallty = function() {
    // create a xmlHttpRequest
    const xhr = new XMLHttpRequest();
    // setUp Link to the Api
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    //call request
    xhr.send();
    // Get the data by onLoad
    xhr.onload = function() {
        const result = xhr.response;
        console.log(JSON.parse(result));
    }
};

// GET OR POST Data Dynamically
const sendRequest = function(method, url, ifPost) {
    const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send(ifPost);
    xhr.onload = function() {
        resolve(JSON.parse(xhr.response));
    }   
    })

    return promise;
}

const getData = function() {
    sendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1').then((res => {
        console.log(res);
    }))
};

const postData = function() {
    sendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        "id": 1,
        "title": "suntt",
        "userId": 100
    })).then((res) => console.log(res))
};

getButtonManually.addEventListener('click', getDataManuallty);
getButton.addEventListener('click', getData);
postButton.addEventListener('click', postData);