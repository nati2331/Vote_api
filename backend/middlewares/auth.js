const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token missing.' });
    }

    try {
        // Verify the token and decode its payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            // Handle token expiration separately
            return res.status(401).json({ message: 'Token expired, please log in again.' });
        }
        res.status(403).json({ message: 'Invalid token.' }); // Handle other JWT verification errors
    }
};

module.exports = authenticateUser;

