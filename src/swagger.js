const swaggerAutogen = require('swagger-autogen')()

const generalDocumentation = {
  info: {
    title: 'Swagger para Node/Express',
    description: 'Api Node/Express documentada com Swagger - Experts Club',
    version: '1.0.0'
  },
  host: 'localhost:3333'
}

const outputFile = 'swagger-output.json'
const endpointsFiles = ['src/routes.js']

swaggerAutogen(outputFile, endpointsFiles, generalDocumentation)