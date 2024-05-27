$(document).ready(()=>{
    $('#enter').on('click', ()=>{

        const endpoint = 'https://pokeapi.co/api/v2/pokemon'

        fetch(endpoint)
        .then(response => {
             return response.json()
        })
        .then(data => {
            for(let i = 0; i < 10; i++){
            let poke = data.results[i].name;
            console.log(poke)
            $('span').html(poke);
            }
        })
    })

})