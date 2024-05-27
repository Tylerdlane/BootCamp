// Homepage component
import Navbar from "../components/Navbar"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Link } from "react-router-dom"; 

const Homepage = () => {
    return (
        <>
            <SignedOut>
                <Navbar />
                <div className="text-center mt-5">
                    <h1>Welcome to the Bootcamp Blog</h1>
                    <p>Please sign in to view your collection of thoughts and experiences</p>
                    <SignInButton afterSignInUrl="/" className="px-3 py-1 rounded-1" />
                </div>
            </SignedOut>
            <SignedIn>
            <Navbar />
                <div className="text-center mt-5">
                    <h1>Welcome to the Bootcamp Blog</h1>
                    <p>Create and Post your own Blogs!</p>
                <Link to="/newpost" className="btn btn-dark">Add a new Blog!</Link>
                </div>
            </SignedIn>
        </>
    )
}

export default Homepage