const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

// fake DB
const messages = {
  chat1: [],
  chat2: [],
};

// socket.io server
io.on("connection", (socket) => {
  socket.on("win", () => {
    io.emit("win", {
      userID: socket.id,
      username: socket.username,
    });
  });

  socket.on("congrats", ({ to, ...content }) => {
    socket.to(to).emit("congrats", {
      from: socket.username,
      ...content,
    });
  });

  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  socket.emit("users", users);

  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    username: socket.username,
  });
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

nextApp.prepare().then(() => {
  app.get("/messages/:chat", (req, res) => {
    res.json(messages[req.params.chat]);
  });

  app.get("/hello", (req, res) => {
    res.json({ hi: "world" });
  });

  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
