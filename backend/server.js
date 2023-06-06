import express from 'express';
import dotenv from 'dotenv';
import router from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();
const port = process.env.PORT || 4200;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(notFound);
app.use(errorHandler);

app.get('/', (req, res) => res.send('API running'));

app.listen(port, () => console.log(`Server started on port ${port}`)); 

app.use('/api/users', router);

