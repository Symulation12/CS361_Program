import React from 'react';
import Article from './article';
import Parser from 'rss-parser';
import { useState, useEffect } from 'react';
import Session from 'react-session-api';

const CORS_PROXY = "https://cors.bridged.cc/"

export default function ArticleList ({setSources, sources, selectedSource})
{
    const [articles, setArticles] = useState([]);
    let x_vals = [0];
    let y_vals = [0];


    //Generate Articles
    const parser = new Parser();
    

    const getFeeds = async () => {
        const numArticlesPerFeed = Session.get("articlesPerFeed")
        let newArticles = []
        if(selectedSource !== "")
        {
            const source = sources.indexOf(selectedSource)
            if(source >= 0)
            {
                const feed = await parser.parseURL(CORS_PROXY + sources[source])
                for(let j = 0; j < numArticlesPerFeed; j++)
                {
                    newArticles.push(<Article key={source*numArticlesPerFeed+j} articleInfo={feed.items[j]} />);
                }
            }
        }
        else
        {
            for(let i = 0; i < sources.length; i++)
            {
                const feed = await parser.parseURL(CORS_PROXY + sources[i])
                for(let j = 0; j < numArticlesPerFeed; j++)
                {
                    newArticles.push(<Article key={i*numArticlesPerFeed+j} articleInfo={feed.items[j]} />);
                }
            }
        }
        setArticles(newArticles);
    }

    function populateHeatmap(e)
    {
        x_vals.push(e.pageX)
        y_vals.push(e.pageY)
        if(x_vals.length %10 === 0)
        {
            retrieveHeatmap()
        }
    }

    async function retrieveHeatmap()
    {
        const dataToSend = {
            "x_vals": x_vals,
            "y_vals": y_vals,
            "x_res": 1920,
            "y_res": 1080
        }

        const res = await fetch("/heatmap", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataToSend)
        })
        
        if(res.status === 200)
        {
            document.getElementById("heatmap").innerHTML = await res.text()
        }
    }

    useEffect(() => {
        getFeeds();
    }, [sources, selectedSource]);

    useEffect(() => {
        retrieveHeatmap();
    }, [x_vals])

    return (
        <div id="main">
            <div onClick={populateHeatmap} className="content">
                {articles}
            </div>
            <div id="heatmap">

            </div>
        </div>
    );
}