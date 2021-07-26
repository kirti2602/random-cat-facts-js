let catVar = document.getElementById('catFacts');

let url = 'https://catfact.ninja/fact';

document.getElementById('btn').addEventListener('click', fetchAPI);


function fetchAPI(event){
fetch(url)
.then(response => response.json())
.then(fact => {
    catVar.innerHTML = fact.fact;
})
}