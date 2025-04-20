import express from 'express';
import connecToDatabese from './helpers.mjs';

const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');   
});

// Connect to the database
await connecToDatabese();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
