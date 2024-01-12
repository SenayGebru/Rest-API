// Importing the file system module with promises support from Node.js.
// This allows for asynchronous file operations like reading and writing files.
const fs = require('fs/promises');

// Importing Express, a web application framework for Node.js.
// Express simplifies the development of server-side logic and routing.
const express = require('express');

// Importing CORS (Cross-Origin Resource Sharing) middleware.
// This is used to enable cross-origin requests, making your server accessible from different domains.
const cors = require('cors');

// Importing Lodash, a utility library offering functions for manipulating and iterating over arrays, objects, and strings.
const _ = require('lodash');

// Importing the v4 function from the uuid package.
// This function is used to generate unique identifiers (UUIDs), often used for database keys or object IDs.
const { v4: uuid } = require('uuid');


const app = express()

//defining API endpoints to return outfit data
app.get('/outfit', (req, res) => {
    const tops = [
        "Black",
        "White",
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Pink",
        "Purple",
        "Orange",
        "Grey"
    ];

    const jeans = [
        "Light Blue",
        "Dark Blue",
        "Indigo",
        "Black",
        "Grey",
        "White",
        "Charcoal",
        "Stonewash Blue",
        "Acid Wash"
    ];

    const shoes = [
        "white",
        "black",
        "brown",
        "blue",
        "red",
        "green",
    ];
    
    
  //return a random outfit as a json object using lodash 
  res.json({
    top: _.sample(tops),
    jeans: _.sample(jeans),
    shoes: _.sample(shoes)
  });
});






app.listen(3000, () => console.log("API Server is running on port 3000"))
