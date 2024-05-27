require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const path = require('path');

const PORT = process.env.PORT || 3000;
//Foundation

//Middleware
app.use(cors());


//Bring in mongo connection
require('./connections/mongoConnection');
//Bring in Multer
const upload = require('./middleware/multer');
//Bring in cloudinary
require('./connections/cloudinary');

//DB Model
const ImageModel = require('./models/Image'); // Import the Image model

// Route to handle image upload
app.post('/upload', upload.single("image"), async (req, res) => {
  try {
    //Upload our image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path)

    //Create an image referance using Image mongoose Model
    const newImg = new ImageModel({
      imageUrl: result.secure_url
    })

    //Save image to our Mongo Database
    let savedImg = await newImg.save()

    //let the client know what the _id and image 
    res.json(savedImg)

  } catch (error) {
    console.log(error)
    res.status(500).send({ error: 'Something broke' })
  }
  //Upon successful response from cloudinary save url to DB

  // Error happens respond accordingly
});

//Listener
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



