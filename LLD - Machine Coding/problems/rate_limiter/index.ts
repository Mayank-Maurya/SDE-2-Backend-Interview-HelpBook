import express from 'express';
import cors from 'cors';
import { rate_limiter } from './src/controllers';

// declares the app which is server
const app = express();
// define properties like enable cors and json
app.use(cors());
app.use(express.json());

// define routes
app.use('/api/v1/rate-limiter', rate_limiter);

// listen to a specific port
app.listen(4000, () => {
    console.log('server listening on 4000 successfully');
});
