import React from 'react';
import VoteList from './components/VoteList';
import VoteForm from './components/VoteForm';

function App() {
    return (
        <div>
            <h1>Vote Application</h1>
            <VoteForm />
            <VoteList />
        </div>
    );
}

export default App;
