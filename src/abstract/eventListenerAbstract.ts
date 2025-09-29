import { eventListenerInterface } from "../interfaces/eventListenerInterface.js";


export abstract class eventListener implements eventListenerInterface {
    listener: Set<CallableFunction>;

    constructor() {
        this.listener = new Set();
    }
    
    addEventListener(func: CallableFunction) {
        this.listener.add(func)
    }
    
    removeEventListener(func: CallableFunction) {
        this.listener.delete(func)
    }
    
    update(update: any) {
        this.listener.forEach(element => {
            element(update)
        });
    }
    
}