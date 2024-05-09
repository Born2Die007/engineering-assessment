require('dotenv').config();
const app = require('express')();
const port = process.env.PORT || 3131;
const { parseCSV } = require('./helpers/parseCSV');
const fs = require('fs');

const csvFile = fs.readFileSync('./Mobile_Food_Facility_Permit.csv', 'utf8');
// Parse CSV data into an array of objects
const foodTrucks = parseCSV(csvFile);
// Extract column headers from the first object in the foodTrucks array
const columns = Object.keys(foodTrucks[0]);

app.get('/v1/foodtrucks/search', (req, res) => {

    // Filters out all invalid column headers from the request query parameters
    const filteredColumns = Object.keys(req.query).filter(type => columns.includes(type));

    let filteredFoodTrucks = foodTrucks;

    // Apply filters based on the request query parameters
    filteredColumns.forEach(column => {
        filteredFoodTrucks = filteredFoodTrucks.filter(row => {
            if (typeof row[column] === 'string') return row[column].toLowerCase().includes(req.query[column].toLowerCase());
            if (typeof row[column] === 'number') return parseFloat(row[column]) === parseFloat(req.query[column]);
            return false
        });
    });

    // Send the filtered food trucks data as a JSON response
    res.json(filteredFoodTrucks);
    
});

app.server = app.listen(port, () => console.log(`Server is running on port ${port}`));
app.foodTrucks = foodTrucks;

module.exports = app;