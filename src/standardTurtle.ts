import WebSocket from "ws";
import { Turtle } from "./interfaces/turtle.js";

export class standardTurtle implements Turtle {
    id: number;
    name: string;
    position: { x: number; y: number; z: number; };
    direction: "north" | "south" | "east" | "west";
    fuelLevel: number;
    inventory: { slot: number; item: string; count: number; }[];
    returnValue: string;
    ws: WebSocket;

    constructor(id: number, ws: WebSocket) {
        this.id = id;
        this.ws = ws;
        this.name = `Turtle-${id}`;
        this.position = { x: 0, y: 0, z: 0 };
        this.direction = "north";
        this.fuelLevel = 100;
        this.inventory = [];
        this.returnValue = "NO VALUE";
    }

    setReturnValue(value: string) {
        this.returnValue = value;
    }

    getReturnValue(): string {
        return this.returnValue;
    }
};