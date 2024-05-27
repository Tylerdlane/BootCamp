//Bringing in the styling from App.css
import './App.css'
//importing the Heroes and Villains Components
import Heroes from './components/Heroes'
import Villains from './components/Villains'
//useState is a hook to add state to a functional component
import { useState } from 'react'
import { useEffect } from 'react'



function App() {
  //assgin heroes to an empty array and the setHeroes function that will update the data we recive from the server to the heroes array
  const [heroes, setHeroes] = useState([])
  //Calling to our backend server
  const baseURL = "http://localhost:3000/heroes"
  //Route for the provided Heroes 
  const route = "/?ids=489,333,70,470,566"
  //Endpoint that will call to our server
  const endpoint = baseURL + route;
  //useEffect with an empty array as the second argument will only run after the first render 
  useEffect(() => {
    //make a fetch call to our backend
    fetch(endpoint)
      //Take our response and parsing it to a Js Object
      .then(res => res.json())
      //taking the data returned from the server and assgining it to our heroes array
      .then(data => {
        setHeroes(data)
      })
      //catching errors
      .catch(err => console.log("Error:", err))
  }, [])
  //assgin villains to an empty array and the setVillains function that will update the data we recive from the server to the villains array
  const [villains, setVillains] = useState([])
  //Route for the provided Villains
  const villainRoute = "/?ids=35,234,386,687,546"
  //Endpoint that will call to our server
  const villainEndpoint = baseURL + villainRoute;
  //useEffect with an empty array as the second argument will only run after the first render 
  useEffect(() => {
    fetch(villainEndpoint)
      //Take our response and parsing it to a Js Object
      .then(res => res.json())
      //taking the data returned from the server and assgining it to our villains array
      .then(data => {
        setVillains(data)
      })
      //catching errors
      .catch(err => console.log("Error:", err))
  }, [])



  return (
    <>
      <h1>Heroes</h1>
      <div>
        {
          //Mapping over the heroes array 
          heroes.map((hero) => (
            //Passing id, name, url, and full_name as props to the Heroes component
            < Heroes key={hero.id}
              id={hero.id}
              name={hero.name}
              image={hero.image.url}
              full_name={hero.biography["full-name"]} />
          ))
        }
      </div>
      <h1>Villains</h1>
      <div>
        {
          //Mapping over the villains array 
          villains.map((villain) => (
            //Passing id, name, url, and full_name as props to the Villains component
            < Villains key={villain.id}
              id={villain.id}
              name={villain.name}
              image={villain.image.url}
              full_name={villain.biography["full-name"]} />
          ))
        }
      </div>
    </>
  )
}

export default App
