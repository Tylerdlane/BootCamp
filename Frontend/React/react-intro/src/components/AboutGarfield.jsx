import React from 'react'
const AboutGarfield = (props) => {
  console.log(props)
  return (
    <>
    <h1>{props.title}</h1>
    <ul>
     {
      props.data.map((element)=>{
return <li>{element}</li>
      })
     }
    </ul>
</>
  )
}

export default AboutGarfield
