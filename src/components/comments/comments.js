import React from 'react';

const Comments = ({comments}) => {
    return (
        <div>
            <h1>Comments</h1>
            {comments.map(item => {
                const {id, name} =item;
                return (
                    <div key={id} >{id} ----{name}</div>
                )
            })}
        </div>
    );
};

export default Comments;