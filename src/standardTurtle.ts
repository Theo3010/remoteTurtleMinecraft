import WebSocket from "ws";
import Turtle from "./abstract/turtle.js";

export class standardTurtle extends Turtle {
    id: number;
    name: string;
    position: { x: number; y: number; z: number; };
    direction: "north" | "south" | "east" | "west";
    fuelLevel: number;
    inventory: { slot: number; item: string; count: number; }[];
    ws: WebSocket;

    constructor(id: number, ws: WebSocket) {
        super()

        this.id = id;
        this.ws = ws;
        this.name = `Turtle-${id}`;
        this.position = { x: 0, y: 0, z: 0 };
        this.direction = "north";
        this.fuelLevel = 100;
        this.inventory = [];
    }
};