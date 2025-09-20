const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Configuration
const PORT = '/dev/ttyUSB0';  // Adjust this to match your USB device
const BAUD_RATE = 9600;       // Match this to your device's baud rate

// Create serial port instance
const port = new SerialPort({
  path: PORT,
  baudRate: BAUD_RATE,
  autoOpen: false
});

// Create line parser
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Handle port opening
port.open((err) => {
  if (err) {
    console.error('Error opening port:', err.message);
    return;
  }
  console.log('Serial port opened successfully');
});

// Listen for data
parser.on('data', (data) => {
  console.log('Received data:', data);
  // Add your data processing logic here
});

// Handle errors
port.on('error', (err) => {
  console.error('Serial port error:', err.message);
});

// Handle port closing
port.on('close', () => {
  console.log('Serial port closed');
});

// Clean up on process exit
process.on('SIGINT', () => {
  port.close(() => {
    console.log('Serial port closed on application exit');
    process.exit(0);
  });
});