// We need to import useEffect and UseState to store the vaules of for the gifs and what the user is searching for 
import { useEffect, useState } from 'react';
import './App.css'




function App() {
  //giphys is holding the gifs we are going to display 
const [giphys, setGiphys] = useState([]);
//gifSearch is the value of search term the user inputs
const [gifSearch, setGifSearch] = useState("");
// API key needed for API.GIPHY
const API_KEY = "73H9V6lKlhDik4GLmoJG2CeTj9eTRuUS"

//useEffect will with the empty array will only run when the app first loads
  useEffect(() => {
  //Send a GET request to aip giphy using the API_KEY and limit to just show 6 gifs on the initial load
 fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=6`)
    .then((res) => res.json())
    .then(data => {
      //Set giphys to data being returned. You need the .data to access the array of the data object thsi gives us the info of the gif
      setGiphys(data.data);
    })
    .catch(error => {
      console.error("Error fetching giphys:", error)
    });
   
  },[])

  //This where our submit button on the search bar will search by the userTerm
  const handleSubmit = (event) => {
    event.preventDefault();
//GET request for search
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${gifSearch}&limit=25`)
    .then((res) => res.json())
    .then(data => {
      //Set giphys to data.data this gives us the info about our gif
      setGiphys(data.data);
    })
    .catch(error => {
      console.error("Error fetching giphys:", error)
    });

  }

  //Reload Button sets a new 25 gifs based on the user search term
  const handleRelaod = (event) => {
    event.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${gifSearch}&limit=25&offset=25&total_count=250`)
    .then((res) => res.json())
    .then(data => {
      setGiphys(data.data);
    })
    .catch(error => {
      console.error("Error fetching giphys:", error)
    });

  }
  //Sets the vaule of what the user is searching for
  const changeHandler = (event) => {
    setGifSearch(event.target.value)
  }
console.log(giphys[0])
  return (
    <>
    {/* We have our continer to hold the elements with a form on the form we have the onSubmit, on our input we have our onChange to catch the user input */}
     <div className="container">
        <h1 className="text-center my-4">Giphy Search</h1>
          <form onSubmit={handleSubmit} className='d-flex' role='search'>
            <input id='searchBar'
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={changeHandler}/>
            <button className='btn' type='submit'>
              Search
            </button>
          </form>
          <div className="img-box">
            {/* Here we are looping over the giphys array and pulling out the img url and assigning it to the *img src* */}
            {!giphys ? (
                <p>Loading...</p>
              ) : (
              giphys.map((gif) => {
                return (
                  <div 
                  className="col-lg-4 gif-img"
                  key={gif.id}>
                    <img src={gif.images.downsized_medium.url} id={gif.id} />
                    </div>
                )
              })
            )
            }
          </div>
              {/* Button to load more gifs */}
          <div className="d-flex">
            <button className="btn btn-load" onClick={handleRelaod} type="submit">
              Load More
            </button>
          </div>
        </div>
    </>
  )
}

export default App
