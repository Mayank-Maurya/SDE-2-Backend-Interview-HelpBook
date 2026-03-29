import express from "express";
import { config } from "./config/index.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

// middleware
app.use(express.json());

// define routes
app.use("/api/v1/users", userRoutes);

// health check
app.use("/health", (_, res) => {
    res.send("OK");
});

app.listen(config.PORT, () => {
    console.log('server listening at 3000');
});
