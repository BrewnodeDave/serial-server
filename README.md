# USB Serial Listener

A Node.js application that listens for messages from USB serial devices.

## Prerequisites

- Node.js (v14 or higher)
- Linux operating system
- USB serial device

## Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [your-repo-directory]
```

2. Install dependencies:
```bash
npm install
```

3. Add user to dialout group (required for serial port access):
```bash
sudo usermod -a -G dialout $USER
```
Note: Log out and back in for group changes to take effect.

## Configuration

Edit `serial-server.js` to match your USB device settings:

```javascript
const PORT = '/dev/ttyUSB0';  // Your USB device path
const BAUD_RATE = 9600;       // Your device baud rate
```

To find your USB device path:
```bash
ls -l /dev/ttyUSB*
# or
dmesg | grep tty
```

## Usage

Start the server:
```bash
node serial-server.js
```

The server will:
- Connect to the specified USB port
- Listen for incoming messages
- Log received data to the console
- Handle connection errors and cleanup
- Gracefully shutdown on CTRL+C

## License

["Buy Me a Beer" License](LICENSE)

Copyright (c) 2025 Brewnode Dave

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m