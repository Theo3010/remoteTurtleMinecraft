import express, { Request } from 'express';
import { webSocket, sendMessage, turtles } from './websocketServer.js';
import { CommandReq } from './types/commandReq.js';
import Turtle from './abstract/turtle.js';
import Turtles from './Turtles.js';

const app = express();
const port: number = 3000;

let turtleMsg: string = "";
let CurrentTurtle: Turtle = null; 

turtles.addEventListener((turtle: Turtle) => {
  CurrentTurtle = turtle;
  turtle.addEventListener((msg: string) => {
    turtleMsg = msg;
  })
})

app.use(express.static('public'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
  
app.post('/command', (req: Request<{}, {}, CommandReq>, res) => {
  const command = req.body.command;
  console.log(`Executing command: ${command}`);
  sendMessage(command);
  res.sendStatus(200);
});

app.get('/return', (req, res) => {
  res.send(
    {
      status: "success",
      returnValue: turtleMsg
    }
  );
});

app.get('/turtles', (req, res) => {
  res.send(
    {
      status: "success",
      turtle: Array.from(turtles.getAll()).map((turtle) => turtle.getName())
    }
  );
});

webSocket();