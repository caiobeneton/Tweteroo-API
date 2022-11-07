import express, { json } from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

const users = []
const tweets = []

app.post("/sign-up", (req, res) => {
    const user = {
        username: req.body.username,
        avatar: req.body.avatar
    }
    users.push(user)
    res.send(users)
})

app.listen(5000, () => {
    console.log("server running on port 5000")
})