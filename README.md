# MCturtle

MCturtle is a JavaScript/Node.js library for controlling Minecraft turtles (inspired by ComputerCraft) via scripts.

## Features

- Program Minecraft turtles using JavaScript
- Easy-to-use API for movement, digging, and placing blocks
- Event-driven scripting

## Installation

```bash
npm install mcturtle
```

## Usage

```js
const mcturtle = require('mcturtle');

const turtle = new mcturtle.Turtle();

turtle.forward();
turtle.dig();
turtle.place();
```

## Documentation

See the [Wiki](./docs) for full API documentation and examples.

## Contributing

Pull requests are welcome! For major changes, please open an issue first.

## License

[MIT](LICENSE)