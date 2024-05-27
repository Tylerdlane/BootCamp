import Recipe from './components/Recipe.jsx'
import './Recipe-App.css'

function RecipeApp() {

  return (
    <>
      <h1>Recipe App</h1>

    <div className="recipeApp">
      <Recipe title={"Pasta"} 
      ingredients={['Flour','Water','Salt','Eggs']}
      image={'/src/assets/pasta.jpeg'}
      steps={[
        { "Step 1": "Combine flour and salt in a medium bowl. Make a well in the center and add beaten egg. Mix well until a stiff dough forms, adding up to 2 tablespoons water if needed." },
        { "Step 2" : "Knead dough on lightly floured surface until smooth, 3 to 4 minutes." },
        { "Step 3" : "Roll dough by hand or with a pasta machine to desired thickness, then cut into strips for desired width and length." }
      ]}
      />
      <Recipe title={"Oatmeal Cookies"}
      ingredients={['Butter','Flour', 'Sugar', 'Eggs', 'Oatmeal', 'Raisin']}
      image={'/src/assets/otamealcookie2.jpg'}
      steps={[
        { "Step 1": "Combine flour and salt in a medium bowl. Make a well in the center and add beaten egg. Mix well until a stiff dough forms, adding up to 2 tablespoons water if needed." },
        { "Step 2" : "Knead dough on lightly floured surface until smooth, 3 to 4 minutes." },
        { "Step 3" : "Roll dough by hand or with a pasta machine to desired thickness, then cut into strips for desired width and length." }
      ]}
      />

      </div>
    </>
  )
}

export default RecipeApp;
