const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4717775fc4msh966a4bdb253d820p1b5e4bjsn0a1f9a560c1d',
        'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));