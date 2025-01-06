const express = require('express');
const Vote = require('../models/Vote');
const authenticateToken = require('../middlewares/auth');
const router = express.Router();

// Vote for an option
router.post('/vote', authenticateToken, async (req, res) => {
    const { optionId } = req.body;
    const userId = req.user.userId; // Get user ID from the token payload

    try {
        // Check if the user has already voted
        const existingVote = await Vote.findOne({ where: { userId } });
        if (existingVote) {
            return res.status(400).json({ message: 'You have already voted' });
        }

        // Create a new vote
        await Vote.create({
            userId,
            optionId,
        });

        // Increment the vote count for the selected option
        await Vote.increment('count', { where: { option: optionId } });

        res.status(200).json({ message: 'Vote recorded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
