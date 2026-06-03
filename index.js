import express from "express";



const app = express();
const port = process.env.PORT || 4003;


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Worleeezd!");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});