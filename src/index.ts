import express from 'express';
import { PORT } from './config';
import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json());

app.get('/ping', (_, res) => {
    console.log('Someone pinged here!', new Date().toLocaleDateString());
    res.send('pong');
});

app.use("/api/diaries", diaryRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});