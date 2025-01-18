import React, { useState } from 'react';
import { castVote } from '../api';
import "../style/voteform.css";

function VoteForm() {
    const [option, setOption] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!option) {
            alert('Please enter an option to vote for.');
            return;
        }

        setLoading(true);
        setError(null);

        try {
            await castVote(option); // Send the vote to the backend
            setOption(''); // Reset the input after successful submission
            alert('Vote submitted successfully!');
        } catch (err) {
            setError('Error submitting vote. Please try again.');
            console.error(err);
        } finally {
            setLoading(false); // Ensure the loading state is cleared
        }
    };

    return (
        <div>
            <h2>Cast Your Vote</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                    placeholder="Enter your vote option"
                    disabled={loading} // Disable input while loading
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default VoteForm;

