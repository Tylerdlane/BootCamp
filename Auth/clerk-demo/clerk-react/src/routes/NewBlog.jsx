// Importing necessary components and hooks from react
import { SignedIn, useUser } from '@clerk/clerk-react'
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyBlogs from './MyBlogs';


// NewBlog component for creating a new blog post
function NewBlog() {
    // Using useState hook for managing local state for title, author, and description
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");
    const [userId, setUserid] = useState("");


    // How do we incoporate authentication into our posts to the database?

    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded) {
            setUserid(user.id)
            // console.log(userId)
        }
    }, [isLoaded, user, userId])


    // handleSubmit function for handling the form submission
    const handleSubmit = (event) => {
        // Preventing the default form submission behavior
        event.preventDefault();
        //Creating a blogPost object with the form data and the user id
        const blogPost = { title, author, description, userId: user.id };
        // console.log("Submitted",blogPost);

        fetch('http://localhost:3000/postblog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blogPost),
        })
            .then(res => res.json())
            .then(data => {
                console.log("Success", data)
                navigate('/success')
                setTitle("")
                setAuthor("")
                setDescription("")
            })
            .catch((error) => {
                console.log("Error Creating new blog post: ", error)
            })
    }


    return (
        <>
            <SignedIn>
                <Navbar />
                <div className="container">
                    <h1 className="text-center my-4">New Blog Post</h1>
                    {/* The form for creating a new blog post */}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text" className="form-control" id="title"
                                value={title} onChange={e => setTitle(e.target.value)}
                                placeholder='Software Blog' required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="author" className="form-label">Author</label>
                            <input
                                type="text" className="form-control" id="author"
                                value={author} onChange={e => setAuthor(e.target.value)}
                                placeholder='Full Name' required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Blog Post</label>
                            <textarea
                                row='3' className="form-control" id="description"
                                value={description} onChange={e => setDescription(e.target.value)}
                                placeholder='Limit: 1-1000 Characters' required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </SignedIn>
        </>

    )
}

export default NewBlog