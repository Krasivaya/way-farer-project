import express from 'express';
import morgan from 'morgan';
import routes from './routes'

const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',routes);
app.get('/', (req, res) => {
    return res.status(200).send({ message: "Yahhhhh! Look at me now! Now I can book a trip"});
});

app.listen(port, () => {
    console.log(`server is running on port 3000`);
});
export default app;
