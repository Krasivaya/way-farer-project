import express from 'express';
import morgan from 'morgan';
const app = express();

const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.json());
app.get('/', (req, res) => {
    return res.status(200).send({ message: "Yahhhhh! Look at me now!"});
});

app.listen(port, () => {
    console.log(`server is running on port 3000`);
});
export default app;
