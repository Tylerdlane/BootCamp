import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  //LIST OF ALL of OUR CURRENT BUCKETLIST ITEMS
  const [list, setList] = useState([
    { id: 1, description: "Visit New Zealand", isComplete: false },
    { id: 2, description: "Backpack through Europe", isComplete: false }
  ]);

  // USER INPUT - CURRENT ITEM
  const [newItem, setNewitem] = useState("")


  const handleChange = (event) => {
    setNewitem(event.target.value)
  }
  //HANDLER FOR TOGGLE ITEMS COMPLETE OR NOT COMPLETE
  const handleClick = (idArg) => {
    //MAKE A COPY OF CURRENT LIST STATE
    let copyOfList = [...list]
    //LOOP THROUGH OUR ARRAY OF OBJECTS - LOOK AT THEIR IDS AND FIND ONE THAT MATCHES THE idArg AND RETURN IT TO ME
    let Item = copyOfList.find(item => item.id === idArg)
    // TAKE THE FOUND OBJECT AND TOGGLE ITS KEY COMPLETED
    Item.isComplete = !Item.isComplete;
    //UPDATE OUR STATE WITH THE MODIFIED COPY
    setList(copyOfList);
  }

  const handleDelete = (id) => {
    //MAKE A COPY OF CURRENT LIST STATE
    // let listCopy = [...list];
    //CREATE A FILTER LIST REJECTING THE ITEM WE ARE DELETING
    // let filteredItems = list.filter(item => item.id !== id)
    //setList(filteredItems)
    setList(list.filter(item => item.id !== id))
  }

  const handleSubmit = (event) => {
    //PREVENT THE PAGE REFRESH
    event.preventDefault()
    setList((list) => [...list, { description: newItem, isComplete: false, id: Date.now() }])
    //CLEAR OUT INPUT BOX
    setNewitem(" ")
  }
  //DISPLAY OUR CURRENT LIST ITEMS
  //LOOP OVER LIST AND DISPLAY THEM AS List Items
  const bucketList = list.map((item, index) => {
    return <li className={item.isComplete ? "completed" : ""} key={index} onClick={() => { handleClick(item.id) }}>
      
      {item.description}
      
      <span className="delete-icon" onClick={(event) =>{event.stopPropagation(); handleDelete(item.id)}}><FontAwesomeIcon icon={faTrashAlt} /></span>
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
