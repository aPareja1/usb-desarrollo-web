const express = require('express');
const router = express.Router();

// Este módulo exporta una función que recibe una instancia de expressWs
module.exports = (expressWs) => {
    expressWs.applyTo(router);

    const rooms = {};

    router.ws('/room/:roomName', (ws, req) => {
        const roomName = req.params.roomName;
        if (!rooms[roomName]) {
            rooms[roomName] = new Set();
        }
        rooms[roomName].add(ws);
        ws.on('message', function(msg) {
            if (rooms[roomName]) {
                rooms[roomName].forEach(client => {
                    if (client !== ws && client.readyState === ws.OPEN) {
                      console.log(ws.OPEN);
                        client.send(msg);
                    }
                });
            }
        });
        ws.on('close', function() {
            rooms[roomName].delete(ws);
            if (rooms[roomName].size === 0) {
                delete rooms[roomName];
            }
        });
    });

    return router;
};