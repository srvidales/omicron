export const functionA = function () {
    console.log('Hello, from function A!');
}

export const fetchPerson = async function (id) {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const person = await response.json();
    console.log(person);
}
