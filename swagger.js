const swaggerAutogen = require('swagger-autogen')();

const doc = (
    {
        info: {
        title: "Contacts API",
        description: "API to manage contacts",
        },
        host: "cse-341-project1-se7z.onrender.com",
        schemes: ['https'],
    });

    const outputFile = './swagger.json';
    const endpointsFiles = ['./routes/index.js'];

    swaggerAutogen(outputFile, endpointsFiles, doc);