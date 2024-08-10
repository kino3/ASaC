import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});
const server = app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
export default server;
