const functionA = function () {
    console.log('Hello, from function A!');
}

const fetchPerson = function (id) {
    fetch(`https://swapi.dev/api/${id}`).then(function (response) {
        console.log(response);
    })
}

export default functionA;

