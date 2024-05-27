 const apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWNmNjkxODUxMDJlZGRiZmU0ODdmM2UwMDU1NmYzMSIsInN1YiI6IjY1OTZkZTNkNjBjNTFkNmJkODk3ODg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1QUpW01-cJOBiw8Tf8K6vQqpEoUdZkOZWPPva6rV1Qs'
const findMovies = () => {
    const baseURL = `https://api.themoviedb.org/3`;
    const title = $('#movie').val().trim();
    const endpoint = `${baseURL}/search/movie?query=${title}`;
    
    const options = {
        method: 'GET',
        headers: {
            //accept is a mime type
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZWNmNjkxODUxMDJlZGRiZmU0ODdmM2UwMDU1NmYzMSIsInN1YiI6IjY1OTZkZTNkNjBjNTFkNmJkODk3ODg3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1QUpW01-cJOBiw8Tf8K6vQqpEoUdZkOZWPPva6rV1Qs'
        }
    };

    fetch(endpoint, options)
        .then(response => {
            if(!response.ok){
                throw Error('no data found')
            }else {
                return response.json()
            }
        })
        .then(data => {
            let displayData = "";
            let result = data.results[0];
            for (let key in result){
                displayData += `${key} : ${result[key]}<br>`
            }
            $("#displayMovies").html(displayData);
            // console.log(result);
        })
        .catch(error => {
            console.error(err)
            $("#movie").val("")
        });


}

$("input[type='button']").on('click', findMovies);