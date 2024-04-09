// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');

const options = 
  {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "Song Express Api with swagger",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Apl",
        },
      },
      "paths": {
        "/song": {
          "get": {
            "summary": "Retrieve a song by its title",
            "tags": ["Song"],
            "parameters": [
              {
                "in": "query",
                "name": "title",
                "required": true,
                "schema": {
                  "type": "string"
                },
                "description": "The title of the song to retrieve"
              }
            ],
            "responses": {
              "200": {
                "description": "A song object",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "song": {
                          "type": "object",
                          "properties": {
                            "title": {
                              "type": "string"
                            },
                            "artist": {
                              "type": "string"
                            },
                            "album": {
                              "type": "string"
                            },
                            "year": {
                              "type": "integer"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "400": {
                "description": "Error message if the song could not be retrieved",
                "content": {
                  "application/json": {
                    "schema": {
                      "type": "object",
                      "properties": {
                        "error": {
                          "type": "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
      },
      servers: [
        {
          url: "http://localhost:3000/api",
        },
      ],
    },
    apis: ["./controllers/*.ts"],
  };

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
