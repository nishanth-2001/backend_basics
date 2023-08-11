const express = require("express")

const app = express()

const PORT = 3000

app.get("/", (req, res) => {
    res.json({ method: "GET"})
})

app.post("/", (req,res) => {
    res.json({ method: "POST"})
})

app.get("/login", (req, res) =>{
    res.send("<h1>Login Page</>")
})

app.all("*", (req, res) => {
    res.send("Not Found")
})

app.listen(PORT, () => {
    console.log(`Server Started on PORT ${PORT}`)
})


