const express = require("express");
const app = express();
const http = require("http");
// creating http server
const server = http.createServer(app);
const { Server } = require("socket.io");
// initialize new instance of socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// 
app.get("/", (req, res) => {
  res.send("Hello from server!");
});

io.on("connection", (socket) => {
  // send server message when user connects
  io.emit('chat message', "guest connected");
  io.emit('chat message', '(server): Hello from server!')

  //emitting new message to all users
  socket.on('chat message', (msg) => {
    io.emit('chat message', `(guest): ${msg}`);
  })
  socket.on("disconnect", () => {
    io.emit('chat message', "guest disconnected");
  });
});

server.listen(8080, () => {
  console.log("listening on *:8080");
});
