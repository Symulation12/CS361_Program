import React from 'react';



export default function Article({articleInfo})
{
    return (
        <div className="articleBlock">
            <h2 className="content-subhead">{articleInfo["title"]}</h2>
            <p>{articleInfo["content"]}</p>
        </div>
    );
}