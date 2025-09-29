

export interface eventListenerInterface {

    listener: Set<CallableFunction>

    addEventListener(func: CallableFunction);

    removeEventListener(func: CallableFunction);

    update(update: any);

}