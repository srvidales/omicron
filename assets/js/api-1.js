export const functionA = function () {
    console.log('Hello, from function A!');
}

export const fetchPerson = async function (id) {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    return await response.json();
}

export const fetchPlanet = async function (id) {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    return await response.json();
}
