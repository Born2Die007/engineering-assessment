require('dotenv').config();
const app = require('express')();
const port = process.env.PORT || 3131;
const { parseCSV } = require('./helpers/parseCSV');

const foodTrucks = parseCSV('./Mobile_Food_Facility_Permit.csv');

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.listen(port, () => console.log(`Server is running on port ${port}`));