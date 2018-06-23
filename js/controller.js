window.addEventListener('load', init);

function init() {
    bindEvents();
    fillDefault();
}

function bindEvents() {
    document.querySelector('#searchButton').addEventListener('click', callAPI);
}

function fillDefault() {
    document.querySelector('#searchText').value = 'cars';
    document.querySelector('#searchAmount').value = 6;

}

function callAPI() {
    var search = document.querySelector('#searchText').value;
    var amount = document.querySelector('#searchAmount').value;
    var url = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=ci8fx4iAngKeyEFvZMkXhXTH7JpqrcVk&limit=" + amount;
    console.log(url);
    fetch(url).then(received => {
        console.log('recieved is ', received);
        received.json().then(data => {
            console.log('data is : ', data);
            printImage(data.data);
        }).catch(err => {
            console.log('error in data is ', err);
        })
    }).catch(err => {
        console.log('err in received is ', err);
    })


}

function printImage(data) {
    document.querySelector('#imageDiv').innerHTML = "";
    if (data.length != 0) {
        for (image of data) {
            url = image.images.original.url;
            var img = document.createElement('img');
            img.src = url;
            img.className = 'imageRecieved'
            document.querySelector('#imageDiv').appendChild(img);
        }
    } else {
        window.alert('enter something first');
    }

}