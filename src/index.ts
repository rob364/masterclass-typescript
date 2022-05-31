import  express from 'express';
import routes from './routes';
const app = express();

app.use(routes);

app.listen(3333);

//Babel, Sucrase link para aula https://www.youtube.com/watch?v=0mYq5LrQN1s&t=858s