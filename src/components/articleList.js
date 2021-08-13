import React from 'react';
import Article from './article';
import Parser from 'rss-parser';
import { useState, useEffect } from 'react';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
const numArticlesPerFeed = 10

export default function ArticleList ({sources})
{
    const [articles, setArticles] = useState([]);

    //Generate Articles
    const parser = new Parser();
    

    const getFeeds = async () => {
        let newArticles = []
        for(let i = 0; i < sources.length; i++)
        {
            const feed = await parser.parseURL(CORS_PROXY + sources[i])
            for(let j = 0; j < numArticlesPerFeed; j++)
            {
                newArticles.push(<Article key={i*numArticlesPerFeed+j} articleInfo={feed.items[j]} />);
            }
        }
        setArticles(newArticles);
    }

    useEffect(() => {
        getFeeds();
    }, []);

    return (
        <div id="main">
            <div className="content">
                {articles}
            </div>
        </div>
    );
}