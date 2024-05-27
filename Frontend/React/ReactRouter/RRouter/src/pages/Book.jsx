import {useParams} from 'react-router-dom'

const Book = () => {

    const { id } = useParams();

        console.log("Tada", id)

  return (
    <div>Book</div>
  )
}

export default Book