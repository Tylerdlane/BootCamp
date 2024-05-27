import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const like = () => {
    setCount(count + 1);
  }
  const dislike = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(count === 0);
  }
  return (
    <>
<form>
  <label>
    Name:
    <input type="text" />
  </label>
  <button type="submit">Submit</button>
</form>
      <p>count is {count}</p>

      <button onClick={like}>Like
      </button>
      <button onClick={dislike}>Dislike
      </button>
      <button onClick={reset}>Reset
      </button>

    </>
  )
}

export default App
