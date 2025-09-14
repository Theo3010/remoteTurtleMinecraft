import WebSocket from "ws";

export interface Turtle {
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
    returnValue?: string;
    ws: WebSocket;
};