// this's the line where you call the request in 'node.js'
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// you assign the url as a variable.
let API = "https://rickandmortyapi.com/api/character/";

// create a function to bring a info from the API
funtion fetch(url_api,callback) {
    // *Type of peticion to send
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    // siguiente paso es escuchar que va hacer esa funcion
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4){
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api );
                return callback(error, null);
            }
        // detro del callback el primer valor que le vamos a pasar es el error
        //el segundo es la informacion de la ubicaciín de la API
        }
    }
    xhttp.send();
}

