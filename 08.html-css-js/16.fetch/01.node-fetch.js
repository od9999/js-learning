const fetch = require('isomorphic-fetch');

fetch('http://localhost:8090/fetch-api')
    .then(response => {
        // console.log(response);
        console.log(response.constructor.toString());
        return response.json();
    })
    .then(data => {
        console.log('--');
        console.log(data);
    });