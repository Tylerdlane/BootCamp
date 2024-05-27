// Importing Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
//Import Clerk 
import { ClerkProvider} from "@clerk/clerk-react"
//Import routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from "./routes/Homepage";
import MyBlogs from "./routes/MyBlogs"
import NewBlog from './routes/NewBlog';
import Success from './routes/Success';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
//IF key is undefined throw an Error
if(!PUBLISHABLE_KEY){
  throw new Error('Missing Publishable Key.');
}

function App() {
  return (
    <>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/myblogs" element={<MyBlogs />}/>
          <Route path="/newpost" element={<NewBlog />}/>
          <Route path="/success" element={<Success />}/>
        </Routes>
      </Router>
    </ClerkProvider>
    </>
  );
}

export default App;
