// 3. Implement a custom event emitter (publish/subscribe pattern).

/*
Design and implement an EventEmitter class in JavaScript that allows you to:
- Subscribe to events with a method `on(eventName, callback)`.
- Unsubscribe from events with a method `off(eventName, callback)`.
- Emit events with a method `emit(eventName, ...args)`, which calls all the callbacks associated with that event name, passing any provided arguments to the callbacks.
- Support once-only event listeners with a method `once(eventName, callback)` that adds a listener that is invoked at most once for a particular event.
*/

class EventEmitter {

    constructor() {
        this.events = new Map();
    }
    on(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push({ callback, once: false });
    }

    once(eventName, callback) {
          if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
          }
        this.events.get(eventName).push({ callback, once: true });
    }

    off(eventName, callback) {
        if (!this.events.has(eventName)) return;
        const listeners = this.events.get(eventName).filter(item => item.callback !== callback);
        this.events.set(eventName, listeners);
    }

    emit(eventName, ...args) {
        if (!this.events.has(eventName)) return;

        const listeners = this.events.get(eventName);
        const remaining = [];

        for (let listener of listeners) {
            listener.callback(...args);
            if (!listener.once) {
                remaining.push(listener);
            }
        }
        this.events.set(eventName, remaining);
    }
}

// Example usage:
const emitter = new EventEmitter();

function responseToEvent(msg) {
    console.log(msg);
}

emitter.on('event1', responseToEvent);
emitter.emit('event1', 'Event 1 triggered!'); // Logs: Event 1 triggered!

emitter.once('event2', responseToEvent);
emitter.emit('event2', 'Event 2 triggered!'); // Logs: Event 2 triggered!
emitter.emit('event2', 'Event 2 triggered again!'); // No log

emitter.off('event1', responseToEvent);
emitter.emit('event1', 'Event 1 triggered again!'); // No log           