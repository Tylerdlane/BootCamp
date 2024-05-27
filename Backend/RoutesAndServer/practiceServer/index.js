const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
    response.send("HELLO Tyler");
});

app.listen(PORT, () => console.log(`Basic Server on PORT: ${PORT}`));