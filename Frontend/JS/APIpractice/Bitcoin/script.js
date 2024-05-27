$(document).ready(() => {

    $('#btn').on('click', () => {
        const endpoint = 'https://api.coindesk.com/v1/bpi/currentprice.json'
    fetch(endpoint)
    .then(response => {
        if(!response.ok){
            throw Error(response.statusText);
        } else{
        return response.json();
        }
    })
    .then(data => {
        let country = $('input[name="country"]:checked').val();
        let rate = data.bpi[country].rate_float.toFixed(2);
        let symbol = data.bpi[country].symbol;
        $('#displayPrice').html(symbol +""+ rate + " "+ country);
        // console.log(country);
        // console.log(rate);
        // console.log(symbol);


    })
    .catch()
//report error to the user 
    })

})
