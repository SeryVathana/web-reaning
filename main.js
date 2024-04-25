const express =  require("express")

const app = express()

function helloFunction (req, res) {
    console.log("Hello ke call me")

    res.status(400).json("Hello world")
}

app.get("/hello", helloFunction)

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);  
});