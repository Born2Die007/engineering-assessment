require('dotenv').config();
const app = require('express')();
const port = process.env.PORT || 3131;


app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port, () => console.log(`Server is running on port ${port}`));