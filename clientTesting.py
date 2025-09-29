import asyncio
import websockets

async def hello():
    uri = "ws://localhost:8080"  # Change to your server's URI
    while True:
        try:
            async with websockets.connect(uri) as websocket:
                await websocket.send("Hello, server!")
                response = await websocket.recv()
                print(f"Received: {response}")
        except Exception as e:
            print(f"Connection failed or closed: {e}")
            print("Retrying in 30 seconds...")
            await asyncio.sleep(30)

if __name__ == "__main__":
    asyncio.run(hello())