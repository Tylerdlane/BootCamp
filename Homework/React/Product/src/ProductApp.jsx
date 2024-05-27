import './ProductApp.css'
import Inventory from './components/Inventory.jsx'
import PropTypes from 'prop-types'
function ProductApp() {

  return (
    <>
        <h1>Grocery List</h1>

      <Inventory name={"Apple 12ct."} price={2} isInStock={true} />
      <Inventory name={"Beer 6 pack"} price={12} isInStock={false} />
      <Inventory name={"Candy Bar"} price={1} isInStock={true} />

    </>
  )
}

Inventory.propsTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isInStock: PropTypes.bool.isRequired,
}

export default ProductApp
