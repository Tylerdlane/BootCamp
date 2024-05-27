import './App.css'
import AboutJon from './components/AboutJon';
import AboutGarfield from './components/AboutGarfield';

function App() {
const theStyles = {
  color:"green",
  fontSize: "38px"
}

const dataOne = ["Pepperoni Pizza", "Spaghetti with Meatballs", "Jumbo Shrimp", "Lobster with Filet Mignon"];


 const dataTwo = ["Mondays", "Spiders", "Raisins","Jon singing in the shower"];

  return (
    <div className="App">
    <h1 style={theStyles}>About Jon Arbuckle</h1>
    <AboutJon />
    <hr />
    <br />
    <AboutGarfield title={"Garfield's Favorite Foods"} data={dataOne}/>
    <AboutGarfield title={"Things Garfield Hates"} data={dataTwo}/>

  </div>
  )
  
  } 
export default App
