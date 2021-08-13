import React from 'react';
import ArticleList from '../components/articleList';
import Sidebar from '../components/sidebar';
import { useState, useEffect } from 'react';


//const testSources = ["https://majorspoilers.com/category/critical-hit/feed", "http://critrole.nerdistind.libsynpro.com/rss"]


export default function MainPage ()
{

    const [sources, setSources] = useState([]);
    const [selectedSource, setSelectedSource] = useState("");

    const addSource = function ()
    {
        const newSource = prompt("Enter a URL to add to the feed", "")
        setSources(sources.concat([newSource]))
    }

    const removeSource = function ()
    {
        console.log("test")
        if(selectedSource !== "")
        {
            const input = prompt("Are you sure you want to remove this feed? (Type 'yes' to confirm)","")
            if( input.toLowerCase() === "yes" )
            {
                const i = sources.indexOf(selectedSource)
                if(i >= 0)
                {
                    setSources(sources.splice(i-1, 1))
                    setSelectedSource("");
                    alert("Feed Removed!")
                }
            }
        }
        else
        {
            alert("Please select a source to remove first")
        }
        
    }

    const setSource = function (s)
    {
        setSelectedSource(s.target.innerText === selectedSource ? "" : s.target.innerText);
    }

    useEffect(() => {
    }, [sources,selectedSource])


    return (
        <div id="layout">
            <Sidebar selectedSource={selectedSource} setSource={setSource} addSource={addSource} removeSource={removeSource} sources={sources}/>
            <ArticleList sources={sources} selectedSource={selectedSource}/>
        </div>
    );
}