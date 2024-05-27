import './GreetingApp.css'
import Greeting from './components/Greeting.jsx'
import PropTypes from 'prop-types'

function GreetingApp() {

  return (
    <>
    <Greeting name={"AJ"} /> 
    <Greeting name={"Mike"} /> 
    <Greeting name={"Adam"} /> 

    </>
  )
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
}
export default GreetingApp;
