const swaggerAutogen = require('swagger-autogen')(); 

const doc = {
    info: {
        title: "Temples",
        description: "Temples API"
    },
    host: "localhost:8080"
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);