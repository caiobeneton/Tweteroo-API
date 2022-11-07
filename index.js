import express, { json } from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(json());

const users = [];
const tweets = [];

app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;

    if (!username || !avatar) {
        res.status(422).send("Todos os campos são obrigatórios");
        return
    };

    const user = {
        username,
        avatar
    };

    users.push(user);
    res.send("OK");
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;

    const userData = users.find((obj) => obj.username === username);

    const objTweet = {
        username,
        avatar: userData.avatar,
        tweet
    };

    tweets.push(objTweet);
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    
    if (tweets.length <= 10) {
        const reverse = [...tweets].reverse();
        res.send(reverse);
    } else {
        const recent = tweets.slice(-10)
        const reverse = [...recent].reverse();
        res.send(reverse);
    }
});

app.listen(5000, () => {
    console.log("server running on port 5000");
});