import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [savedImage, setSavedImage] = useState("");

  const handleFileChange = (event) => {
    //Handle our input change - When user adds a image
    setFile(event.target.files[0])
  };

  const handleUpload = async () => {
    // Send off our image to the server
    try {
      const formData = new FormData();
      formData.append('image', file)

      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        const data = await response.json()
        console.log("File uploaded successfull")
        setSavedImage(data.imageUrl)
      } else {
        console.log("Failed to uplaod file", response.statusText)
      }
    } catch (error) {
      console.error("Error uploading file")
    }
  };

  return (
    <>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} >
          Upload
        </button>
      </div>
      <div>
        {/* If Image is successfully uploaded display it here*/}
        {
          savedImage ?
            (<img src={savedImage} alt="User uploaded Image" style={{ width: "200", margin: "10px" }} />) :
            ("")}
      </div>
    </>
  );
}

export default App;
