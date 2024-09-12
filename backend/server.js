// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const http = require('http');
// const { Server } = require('socket.io');
// require('dotenv').config();

// // Initialize express app
// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Create a MySQL connection
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     process.exit(1);
//   }
//   console.log('Connected to MySQL');
// });

// // Create HTTP server and Socket.IO server
// const server = http.createServer(app);
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000", // Replace with your frontend URL
//     methods: ["GET", "POST"]
//   }
// });

// // Socket.IO connection
// io.on('connection', (socket) => {
//   console.log('New client connected:', socket.id);

//   socket.on('sendMessage', (message) => {
//     console.log('Received message:', message);

//     // Broadcast the message to all clients
//     io.emit('receiveMessage', message);
    
//   });

//   socket.on('disconnect', () => {
//     console.log('Client disconnected:', socket.id);
//   });
// });

// // Start server
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// // Route to save user data
// app.post('/api/AddUser', (req, res) => {
//   const { mobileNumber, name } = req.body;

//   if (!mobileNumber || !name) {
//     return res.status(400).json({ error: 'Mobile number and name are required.' });
//   }

//   const query = 'INSERT INTO users (mobileNumber, name) VALUES (?, ?)';
//   db.query(query, [mobileNumber, name], (err, results) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       return res.status(500).json({ error: 'Failed to save user data.' });
//     }
//     res.status(201).json({ message: 'User data saved successfully!' });
//   });
// });

// // Route to fetch user data
// app.get('/api/chats', (req, res) => {
//   const query = 'SELECT * FROM users';
//   db.query(query, (err, results) => {
//     if (err) {
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// });

// // Route to save a message
// app.post('/api/messages', (req, res) => {
//   const { sender_mobile, receiver_mobile, sender_name, receiver_name, message } = req.body;

//   if (!sender_mobile || !receiver_mobile || !sender_name || !receiver_name || !message) {
//     return res.status(400).json({ error: 'All fields are required.' });
//   }

//   const query = 'INSERT INTO messages (sender_mobile, receiver_mobile, sender_name, receiver_name, message) VALUES (?, ?, ?, ?, ?)';
//   db.query(query, [sender_mobile, receiver_mobile, sender_name, receiver_name, message], (err) => {
//     if (err) {
//       console.error('Error saving message:', err);
//       return res.status(500).json({ success: false, message: 'Failed to save message' });
//     }

//     res.status(200).json({ success: true });
//   });
// });

// // Route to fetch messages between sender and receiver
// app.get('/api/messages', (req, res) => {
//   const { sender_mobile, receiver_mobile } = req.query;

//   if (!sender_mobile || !receiver_mobile) {
//     return res.status(400).json({ error: 'Sender and receiver mobile numbers are required.' });
//   }

//   const query = 'SELECT * FROM messages WHERE (sender_mobile = ? AND receiver_mobile = ?) OR (sender_mobile = ? AND receiver_mobile = ?)';
//   db.query(query, [sender_mobile, receiver_mobile, receiver_mobile, sender_mobile], (err, results) => {
//     if (err) {
//       console.error('Error fetching messages:', err);
//       return res.status(500).json({ message: 'Failed to fetch messages' });
//     }
//     res.status(200).json(results);
//   });
// });







const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();

// Initialize express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL');
});

// Create HTTP server and Socket.IO server
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL
    methods: ["GET", "POST"]
  }
});

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  socket.on('sendMessage', (message) => {
    console.log('Received message:', message);

    // Broadcast the message to all clients
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Start server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.send("Server is running");
});


// Route to save user data
app.post('/api/AddUser', (req, res) => {
  const { mobileNumber, name } = req.body;

  if (!mobileNumber || !name) {
    return res.status(400).json({ error: 'Mobile number and name are required.' });
  }

  const query = 'INSERT INTO users (mobileNumber, name) VALUES (?, ?)';
  db.query(query, [mobileNumber, name], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'Failed to save user data.' });
    }
    res.status(201).json({ message: 'User data saved successfully!' });
  });
});

// Route to fetch user data with the last message sent by the current user
app.get('/api/chats', (req, res) => {
  const currentUserMobile = req.query.current_user_mobile; // Get the current user's mobile number from the query params
  if (!currentUserMobile) {
    return res.status(400).json({ error: 'current_user_mobile is required.' });
  }
  const query = `
    SELECT 
      u.*, 
      m.message AS lastMessage, 
      m.time AS lastMessageTime
    FROM 
      users u
    LEFT JOIN 
      (SELECT 
          sender_mobile, 
          message, 
          time 
       FROM 
          messages 
       WHERE 
          sender_mobile = ? 
       ORDER BY 
          time DESC 
       LIMIT 1) m
    ON 
      u.mobileNumber = m.sender_mobile
  `;

  db.query(query, [currentUserMobile], (_err, results) => {
    res.status(200).json(results);
  });
});
// Route to save a message
app.post('/api/messages', (req, res) => {
  const { sender_mobile, receiver_mobile, sender_name, receiver_name, message } = req.body;

  if (!sender_mobile || !receiver_mobile || !sender_name || !receiver_name || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const query = 'INSERT INTO messages (sender_mobile, receiver_mobile, sender_name, receiver_name, message) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [sender_mobile, receiver_mobile, sender_name, receiver_name, message], (err) => {
    if (err) {
      console.error('Error saving message:', err);
      return res.status(500).json({ success: false, message: 'Failed to save message' });
    }

    res.status(200).json({ success: true });
  });
});

// Route to fetch messages between sender and receiver
app.get('/api/messages', (req, res) => {
  const { sender_mobile, receiver_mobile } = req.query;

  if (!sender_mobile || !receiver_mobile) {
    return res.status(400).json({ error: 'Sender and receiver mobile numbers are required.' });
  }

  const query = 'SELECT * FROM messages WHERE (sender_mobile = ? AND receiver_mobile = ?) OR (sender_mobile = ? AND receiver_mobile = ?)';
  db.query(query, [sender_mobile, receiver_mobile, receiver_mobile, sender_mobile], (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err);
      return res.status(500).json({ message: 'Failed to fetch messages' });
    }
    res.status(200).json(results);
  });
});
