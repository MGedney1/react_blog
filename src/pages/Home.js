import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <header>
                <h1>
                    Job Hunt Blog
                </h1>
            </header>
            <body>
                <h2>
                    Home
                </h2>
                <div>
                    <h4>Post 1</h4>
                    <Link to="/post">Post</Link>
                </div>
            </body>
        </div>
    )
}

export default Home;