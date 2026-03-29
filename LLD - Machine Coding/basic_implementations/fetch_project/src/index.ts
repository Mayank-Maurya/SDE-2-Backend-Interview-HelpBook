import express from "express";
import fetch from './controllers/fetch';

const app = express();

app.use("/health", (req, res, next) => {
    return res.send("Ok");
});

// routes
app.use('/api/v1/fetch', fetch);


app.listen(3001, () => {
    console.log("server listening on 3000");
});