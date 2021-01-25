<<<<<<< HEAD
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server started on port 3333');
=======
import app from './app';

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
>>>>>>> 4842b80e13e31d25dd3ab363580984b34c38e635
});
