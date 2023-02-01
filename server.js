 
const express = require('express');
const useSocket = require('socket.io');

const app = express();
const cors = require('cors');
const server = require ('http').Server(app);
const io = useSocket(server);

app.use(express.json());
app.use(cors())

const rooms = new Map();


app.get('/rooms', (req, res) => {
    res.json(rooms)
  });


app.post('/rooms', (req, res)=>{
  const {roomId, userName} =req.body;
  if (!rooms.has(roomId)) {
      rooms.set(roomId, {
        room:roomId,
        users:[userName],
        messages:[]
      })
  } 
  res.send(rooms.get(roomId))

  
});

  io.on('connection', socket=> {
    console.log('user connected', socket.id)
  });

  server.listen(8080, (err)=>{
   if (err) {
    throw Error (err)
   }
   console.log('Server runs ')
  })


  
// const rooms = {
//     rooms: [],
//     messages : ['hello'],
// }
// app.get('/',(req,res)=>{
//     res.send('Esim')
//   })

