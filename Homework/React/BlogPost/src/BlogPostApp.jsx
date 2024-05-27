import './BlogPostApp.css'
import Header from './components/Header.jsx'
import Article from './components/Article.jsx'
import PropTypes from 'prop-types'

function BlogPostApp() {

  return (
    <>
      <Header title={"Scars from the Line"} />
      <Article content={"The burns cover the inside of my arms, the cuts held bound by paper towels and tape. Only Redbull keeps me alive!"}/>
    </>
  )
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
}
Article.propTypes = {
  content: PropTypes.string.isRequired,
}
export default BlogPostApp;