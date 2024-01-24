import mongooseUrl from "dotenv";
import express from 'express';
import connect from './schemas/index.js';
import router from './routes/products.routers.js'
mongooseUrl.config();


const app = express();
const PORT = 3000;

connect();

app.use(express.json());

router.get('/', (req, res) => {
  return res.json({ message: 'Hi!' });
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});