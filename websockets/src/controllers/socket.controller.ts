
const WebSocket = require('ws');
export class SocketController{
    public static  rooms = {};

     joinRoom(ws, roomName) {
        if (!SocketController.rooms[roomName]) {
            SocketController.rooms[roomName] = new Set();
        }
        SocketController.rooms[roomName].add(ws);
      }
      
       leaveRoom(ws, roomName) {
        if (SocketController.rooms[roomName]) {
            SocketController.rooms[roomName].delete(ws);
          if (SocketController.rooms[roomName].size === 0) {
            delete SocketController.rooms[roomName];
          }
        }
      }
      
       sendMessageToRoom(roomName, message) {
        if (SocketController.rooms[roomName]) {
          for (const client of SocketController.rooms[roomName]) {
            if (client.readyState === WebSocket.OPEN) {
              client.send(message);
            }
          }
        }
      }
      

    sendMessage(){
    
    }
}