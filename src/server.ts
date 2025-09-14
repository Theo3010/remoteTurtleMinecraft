import express, { Request } from 'express';
import { webSocket, sendMessage, Turtles } from './websocketServer.js';
import { CommandReq } from './types/commandReq.js';

const app = express();
const port = 3000;
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
      returnValue: Turtles[0]?.getReturnValue() || "NO TURTLES CONNECTED"
    }
  );
});

webSocket();