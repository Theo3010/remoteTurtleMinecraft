import { eventListener } from "./abstract/eventListenerAbstract.js";
import Turtle from "./abstract/turtle.js";


export default class Turtles extends eventListener {
    TurtlesArray: Set<Turtle>

    constructor() {
        super()
        this.TurtlesArray = new Set();
    }

    update(update: Turtle): void {
        super.update(update)
    }

    add(turtle: Turtle): void {
        this.TurtlesArray.add(turtle)
    }

    remove(turtle: Turtle): void {
        this.TurtlesArray.delete(turtle)
    }

    getAll(): Set<Turtle> {
        return this.TurtlesArray;
    }

    find(func: CallableFunction): Turtle | null {
        for (const t of this.TurtlesArray) {
            if(func(t)){
                return t
            }
        }
    }
    
}