import React from 'react';
import ArticleList from '../components/articleList';
import Sidebar from '../components/sidebar';
import { useState, useEffect } from 'react';
import Session from 'react-session-api';


//const testSources = ["https://majorspoilers.com/category/critical-hit/feed", "http://critrole.nerdistind.libsynpro.com/rss"]


export default function MainPage ({dark})
{

    const [sources, setSources] = useState([]);
    const [selectedSource, setSelectedSource] = useState("");


    //Prompt user to add a new source
    const addSource = function ()
    {
        const newSource = prompt("Enter a URL to add to the feed", "")
        if(newSource !== "")
        {
            setSources(sources.concat([newSource]))
            const curFeeds = Session.get("feeds")
            Session.set("feeds", curFeeds.concat([newSource]))
        }
    }

    //Add a new source without prompting the user
    const addSourceManual = function(newSource)
    {
            setSources(sources.concat([newSource]))
            const curFeeds = Session.get("feeds")
            Session.set("feeds", curFeeds.concat([newSource]))
    }

    //Prompt a user for confirmation to delete the currently selected source
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
                    const newSources = sources.splice(i-1, 1)
                    Session.set("feeds", newSources)
                    setSources(newSources)
                    setSelectedSource("");
                    alert("Feed Removed!")
                    Session.set("lastRemovedFeed", selectedSource);
                }
            }
        }
        else
        {
            alert("Please select a source to remove first")
        }
        
    }

    //Undo the previous removeSource function call
    const undoSource = function () {
        const undo = Session.get("lastRemovedFeed")
        if(undo)
        {
            addSourceManual(undo);
            Session.set("lastRemovedFeed", false)
        }
        else
        {
            alert("There is no previously removed feed")
        }
    }

    const setSource = function (s)
    {
        setSelectedSource(s.target.innerText === selectedSource ? "" : s.target.innerText);
    }

    //Update the dark mode state of the page and reload the page
    useEffect(() => {
        if(dark)
        {
            document.body.classList.add('dark');
        }
        else
        {
            document.body.classList.remove('dark');
        }
    }, [sources,selectedSource, dark])

    //Make sure the sources are kept when the user return from changing the settings
    useEffect(() => {
        setSources(Session.get("feeds"))
    }, [])


    return (
        <div id="layout">
            <Sidebar undoSource = {undoSource} selectedSource={selectedSource} setSource={setSource} addSource={addSource} removeSource={removeSource} sources={sources}/>
            <ArticleList setSources={setSources} sources={sources} selectedSource={selectedSource}/>
            
        </div>
    );
}