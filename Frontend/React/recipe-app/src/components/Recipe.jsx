import React from 'react'
import PropTypes from 'prop-types';
import './Recipe.css'
//ADD props as an ARGUMENT
const Recipe = ({title, ingredients, image, steps}) => {
  //MAP OVER OUR INGRDIENTS ARRAY => RETURN <li>
  const ingredientList = ingredients.map((item, index)=>{
    return <li key={index}>{item}</li>
  })
//Iteratinig over our array of objects
const stepsList = steps.map((step, index)=>{
  //DO STUFF HERE
  //GRAB THE KEY FROM THE FIRST OBJECT IN THE ARRAY
  let stepName = Object.keys(step) [0];
  //GRAB THE VALUE OF THE STEP
  let stepValue = step[stepName];
  return (
    <div key={index} className="steps">
      <strong>{stepName}</strong>
      <br />
      <p key={index}>{stepValue}</p>
    </div>
  )
})

  return (
    <div className="recipe-card">
        <h2>Recipe for {title}</h2>
        <img src={image} alt={title} />
        <h3>Ingredients Needed:</h3>
        <ul>
          {ingredientList}
        </ul>
          {stepsList}
    </div>
  )
}

//PROP VALIDATION
Recipe.propTypes ={
  title: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  steps: PropTypes.arrayOf(PropTypes.object)
}

//DEFAULT PROPS
Recipe.defaultProps ={
  title: "Test",
  ingredients : ['Ingredients1', 'Ingredients2'],
  steps: [
    {"Step 1": "Sauce"},
    {"Step 2": "Toss"}
  ]
}

export default Recipe