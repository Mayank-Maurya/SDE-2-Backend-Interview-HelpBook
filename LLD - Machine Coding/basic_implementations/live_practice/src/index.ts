import express from "express";
import userRoutes from './routes/index.ts';

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1/', userRoutes);

// health
app.use('/health', (req, res) => {
    res.send("OK");
});


// listen
app.listen(3000, () => {
    console.log('server is listening at 3000');
});