$(document).ready(function () {
    $('#pic').attr('src', 'https://images.dog.ceo/breeds/bulldog-english/mami.jpg');
})
$("#btn").on('click', function () {
    let endpoint = "https://dog.ceo/api/breeds/image/random";
    // make http request
    fetch(endpoint)
        .then(dog => {
            //response recived
            //parse the response
            // then returned
            if (dog.ok) {
                return dog.json()
            } else {
                throw Error(dog.json() ? "No data" : "Cannot connect!")
            }
        })
        .then(dogData => {
            // do something with the data
            // console.log("Dog Data is:", dogData)
            //check if the image exists
            //if yes, then set the image 
            //if no, then show something else(maybe the bulldog)
            $('#pic').attr("src", dogData.message)
        })
        .catch(err => {
            // what if there is an error?
            console.log("Error", err)
        })
})
