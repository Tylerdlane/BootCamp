function Child(props) {
  return (
    <>
      <input 
        type="text" 
        placeholder="Please Enter Your Name"
        onChange={props.handleChange}
        value={props.name}
        />
    </>
  )
}
//No need to change anything here 

export default Child