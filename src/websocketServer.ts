import WebSocket, { WebSocketServer } from 'ws';
import { standardTurtle as Turtle } from './standardTurtle.js';
const wss = new WebSocketServer({ port: 8080 });

export let Turtles: Array<Turtle> = [];
let wsToTurtle = new Map<WebSocket, Turtle>();
let nextId = 1;

export function webSocket() {
    wss.on('connection', function connection(ws: WebSocket) {
        
        console.log("New client connected");
        
        const turtle = new Turtle(nextId++, ws);
        wsToTurtle.set(ws, turtle);
        Turtles.push(turtle);
    
        ws.on('message', function incoming(message) {
            const turtle = wsToTurtle.get(ws);

            console.log('received: %s', message);
            turtle.setReturnValue(message.toString());
        });
    
        ws.on('close', function() {
            const turtle = wsToTurtle.get(ws);

            console.log('Client disconnected');
            Turtles = Turtles.filter(t => t.id !== turtle.id);
            wsToTurtle.delete(ws);
        });
    });
}

export function sendMessage(message: string, arg: number = 0, turtleid: number = 0) {
    // message = `return ${message}(${arg});`;
    message = `return ${message};`;
    const turtle = Turtles.find(t => t.id === turtleid) || Turtles[0];
    if (turtle) {
        turtle.ws.send(message);
    } else {
        console.log("No turtles connected");
    }
}
