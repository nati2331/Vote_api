const rateLimit = require('express-rate-limit');

const voteLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many votes from this IP, please try again later.',
});

module.exports = voteLimiter;
