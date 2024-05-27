import { useState, useEffect } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function App() {

  const baseURL = 'https://83yhfie1o0.execute-api.us-east-1.amazonaws.com/dev/bucket'


  //LIST OF ALL of OUR CURRENT BUCKETLIST ITEMS
  const [list, setList] = useState([
    { id: 1, description: "Visit New Zealand", isComplete: false },
    { id: 2, description: "Backpack through Europe", isComplete: false }
  ]);

  // USER INPUT - CURRENT ITEM
  const [newItem, setNewitem] = useState("")


  //UseEffect- READ- Call on intial load
  useEffect(() => {
    fetch(baseURL)
      .then(response => response.json())
      .then(data => {
        //Update our state
        setList(data)
        console.log(data)
      })
      .catch(error => console.log("Oops something went worong reading: ", error))
  }, [])


  const handleChange = (event) => {
    setNewitem(event.target.value)
  }



  //HANDLER FOR TOGGLE ITEMS COMPLETE OR NOT COMPLETE
  const handleClick = (idArg) => {
    fetch(`${baseURL}/${idArg}`, {
      method: "PUT"
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        if (data.message === "Success") {
          //MAKE A COPY OF CURRENT LIST STATE
          let copyOfList = [...list]
          //LOOP THROUGH OUR ARRAY OF OBJECTS - LOOK AT THEIR IDS AND FIND ONE THAT MATCHES THE idArg AND RETURN IT TO ME
          let Item = copyOfList.find(item => item.id === idArg)
          // TAKE THE FOUND OBJECT AND TOGGLE ITS KEY COMPLETED
          Item.isComplete = !Item.isComplete;
          //UPDATE OUR STATE WITH THE MODIFIED COPY
          setList(copyOfList);
        }
      })
      .catch(error => console.log('Error', error))
  }

  const handleDelete = (event, id) => {
    event.preventDefault();

    fetch(`${baseURL}/${id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      if(data.message === 'Success'){
        
      setList(list.filter(item => item.id !== id))
      }
    })
    .catch(error => console.log("Error:", error))
    //MAKE A COPY OF CURRENT LIST STATE
    // let listCopy = [...list];
    //CREATE A FILTER LIST REJECTING THE ITEM WE ARE DELETING
    // let filteredItems = list.filter(item => item.id !== id)
    //setList(filteredItems)
  }

  const handleSubmit = (event) => {
    //PREVENT THE PAGE REFRESH
    event.preventDefault()

    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ description: newItem })//Take the current value stored in state aka what the user typed in 
    })
      .then(response => response.json())
      .then(data => {
        //once its successfully recived on the server we will update the client
        if (data.message === "Success") {
          // console.log(data)
          //add what tyhe user typed in
          setList((list) => [...list, data.newItem])
          //CLEAR OUT INPUT BOX
          setNewitem(" ")
        }
      })
      .catch(error => console.log("error creating:", error))

  }


  //DISPLAY OUR CURRENT LIST ITEMS
  //LOOP OVER LIST AND DISPLAY THEM AS List Items
  const bucketList = list.map((item, index) => {
    return <li className={item.isComplete ? "completed" : ""} key={index} onClick={() => { handleClick(item.id) }}>

      {item.description}

      <span className="delete-icon" onClick={(event) => { event.stopPropagation(); handleDelete(item.id) }}><FontAwesomeIcon icon={faTrashAlt} /></span>
    </li>
  })

  return (
    <div className="App">

      <h1>Bucketlist App</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          className="item-input"
          autoComplete='off'
          name="newItem"
          placeholder='What do you want to do?'
          onChange={handleChange}
          value={newItem} />

        <input
          type="submit"
          className="save-button"
          value="Add Item" />

      </form>

      <div className="item-content">
        <ol>{bucketList}</ol>
      </div>

    </div>
  )
}

export default App
