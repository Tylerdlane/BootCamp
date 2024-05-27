import { useState } from 'react'
import './App.css'

function App() {
  // create a state var called days with a default value of 303
  // setDays is a function() that allows us to update the state
  const [days, setDays] = useState(303);
// render the app
  return (
    <>
     <div className="App">
      <h1>Birthday Party Count Down App</h1>
      <div className="card">
        <button onClick ={ () => setDays((days) => days - 1)}>
          Days remaining until Deng's Birthday are:{days}
        </button>
      </div>
     </div>
    </>
  )
}

export default App
