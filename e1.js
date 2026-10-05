const EventEmitter = require('events');

const button = new EventEmitter();

// Simulate click event
button.on('click', (message) => {
    console.log(`Button clicked: ${message}`);
});

// Simulate mouseover event
button.on('mouseover', () => {
    console.log('Mouse entered the button');
});

// Trigger events
button.emit('mouseover');
button.emit('click', 'Submit button was clicked');