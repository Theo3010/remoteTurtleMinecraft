import WebSocket, { WebSocketServer } from 'ws';
import { standardTurtle as Turtle } from './standardTurtle.js';
import Turtles from './Turtles.js';
const wss = new WebSocketServer({ port: 8080 });

export let turtles = new Turtles()

let wsToTurtle = new Map<WebSocket, Turtle>();
let nextId = 1;

export function webSocket() {
    wss.on('connection', function connection(ws: WebSocket) {
        
        console.log("New client connected");
        
        const turtle = new Turtle(nextId++, ws);
        wsToTurtle.set(ws, turtle);
        turtles.add(turtle);
    
        ws.on('message', function incoming(message) {
            const turtle = wsToTurtle.get(ws);

            console.log('received: %s', message);
            turtle.update(message.toString())
        });
    
        ws.on('close', function() {
            const turtle = wsToTurtle.get(ws);

            console.log('Client disconnected');
            turtles.remove(turtle)
            wsToTurtle.delete(ws);
        });
    });
}

export function sendMessage(message: string, arg: number = 0, turtleid: number = 1) {
    // message = `return ${message}(${arg});`;
    message = `return ${message};`;
    const turtle = turtles.find(t => t.id === turtleid);
    if (turtle) {
        turtle.ws.send(message);
    } else {
        console.log(`No such turtle with id: ${turtleid}`);
    }
}
