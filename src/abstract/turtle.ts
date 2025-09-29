import WebSocket from "ws";
import { eventListener } from "./eventListenerAbstract.js";

export default abstract class Turtle extends eventListener {
    id: number;
    name: string;
    position: {
        x: number;
        y: number;
        z: number;
    };
    direction: 'north' | 'south' | 'east' | 'west';
    fuelLevel: number;
    inventory: Array<{
        slot: number;
        item: string;
        count: number;
    }>;
    ws: WebSocket;

    update(update: string): void {
        super.update(update)
    }

    getName(): string {
        return this.name
    }
};