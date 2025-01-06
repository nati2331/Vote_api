const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { createServer } = require('http');
const { Server } = require('socket.io');
const db = require('./config/db');
const authRoutes = require('./routes/auth');
const voteRoutes = require('./routes/voteRoutes'); // Make sure the file name matches
const errorHandler = require('./middlewares/errorHandler');
const voteLimiter = require('./middlewares/rateLimiter');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vote', voteRoutes); // Make sure the path is correct

// Apply rate limiter for voting routes (use '/api/vote' instead of '/api/votes')
app.use('/api/vote', voteLimiter);

// Database sync and authentication
db.sync({ force: false })
    .then(() => console.log('Database synced'))
    .catch((err) => console.error('Error syncing database:', err));

// Create HTTP server and Socket.IO instance
const httpServer = createServer(app);
const io = new Server(httpServer);

// WebSocket: real-time vote updates
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => console.log('A user disconnected'));
});

// Custom error handler (must be after all routes)
app.use(errorHandler);

// Start the server
httpServer.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

