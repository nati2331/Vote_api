import React, { useEffect, useState } from 'react';
import { fetchVotes } from '../api';

function VoteList() {
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        const getVotes = async () => {
            const data = await fetchVotes();
            setVotes(data);
        };

        getVotes();
    }, []);

    return (
        <div>
            <h2>Vote Results</h2>
            <ul>
                {votes.map((vote) => (
                    <li key={vote.id}>
                        {vote.option}: {vote.count}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VoteList;
