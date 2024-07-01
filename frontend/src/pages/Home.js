import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <h2>Welcome to ArchitecGPT</h2>
                <p>This is the home page of ArchitecGPT, a tool to help you design and manage system architectures with the power of AI.</p>
            </main>
        </div>
    );
};

export default Home;
