import React from 'react';
import {useHistory} from 'react-router';

const Post = (props) => {
    const {id, title,body} = props.post;
    const history = useHistory();
    const showCommenets = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h3><strong>id: {id}</strong>{title}</h3>
            <p>{body}</p>
            <button onclick={()=> showCommenets(id)}>Show Comments</button>
        </div>
    );
};

export default Post;