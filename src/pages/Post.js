import React from 'react';
import { useHistory } from "react-router-dom";
const Post = () => {
    let history = useHistory();
    return (
        <div>
            <header>
            <button onClick={() => history.goBack()}>Back</button>
                <h1>
                    Post title
                </h1>
            </header>
            <body>
                <h2>
                    Post body
                </h2>
            </body>
        </div>
    )
}

export default Post;

