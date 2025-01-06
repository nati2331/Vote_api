const Vote = require('../models/Vote');

const getVotes = async (req, res) => {
    try {
        const votes = await Vote.findAll();
        res.json(votes);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const castVote = async (req, res) => {
    try {
        const { option } = req.body;
        const vote = await Vote.findOne({ where: { option } });

        if (vote) {
            vote.count += 1;
            await vote.save();
        } else {
            await Vote.create({ option, count: 1 });
        }

        res.json({ message: 'Vote cast successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getVotes, castVote };
