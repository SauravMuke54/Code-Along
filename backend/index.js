const express = require("express");
const app = express();
const http = require("http"); // Import the HTTP module
const server = http.createServer(app); // Create an HTTP server
const { Server } = require("socket.io");
const io = new Server(server);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const roomRoutes = require("./routes/room");

require("dotenv").config();
const port = 4000;
const mongoose = require("mongoose");
const { ACTIONS } = require("./Actions");
const DB = process.env.DATABASE;
const userSocketMap = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(DB).then(() => {
  console.log("DB connected");
});

app.use("/api", authRoutes);
app.use("/api", roomRoutes);


function getAllConnectedClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        name: userSocketMap[socketId],
      };
    }
  );
}

io.on("connection", (socket) => {
  // console.log("socket connected", socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, name }) => {
    userSocketMap[socket.id] = name;
    socket.join(roomId);

    const clients = getAllConnectedClients(roomId);
    console.log(clients);

    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        name,
        socketId: socket.id,
      });
    });


  });

  socket.on(ACTIONS.CODE_CHANGE,({roomId,code})=>{
    
    io.to(roomId).emit(ACTIONS.CODE_CHANGE,{code})

  })

  socket.on(ACTIONS.SYNC_CODE,({socketId,code})=>{

    console.log(socketId)
    
    io.to(socketId).emit(ACTIONS.CODE_CHANGE,{code})

  })

  socket.on('disconnecting',()=>{

    const rooms=[...socket.rooms]

    rooms.forEach((roomId)=>{

      socket.in(roomId).emit(ACTIONS.DISCONNECTED,{
        socketId:socket.id,
        name:userSocketMap[socket.id]
      })


    })

    delete userSocketMap[socket.id]
    socket.leave()

  })

});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
