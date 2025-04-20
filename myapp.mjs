import express from 'express';
import connecToDatabese from './helpers.mjs';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');   
});

// Connect to the database
await connecToDatabese();

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Export the app for testing
export default app;
// Export the port for testing
export { port };
// Export the database connection for testing
export { connecToDatabese };
// Export the express app for testing
export { app };