import React from 'react';
import Session from 'react-session-api'
import { useEffect } from 'react';
import { useHistory } from 'react-router';

export default function SettingsPage ({setDark}) 
{
    const history = useHistory();
    function removeFeeds()
    {
        console.log(Session)
        const input = prompt("Are you sure you want to remove all feeds? Type 'yes' to confirm", "")
        if(input && input.toLowerCase() === "yes")
        {
            console.log("Removing feeds")
            Session.set("feeds",[])
        }
        
    }

    function changeDark(e)
    {
        Session.set("darkmode", e.target.checked); 
        setDark(e.target.checked);
    }

    useEffect(() => {
        if(Session.get("darkmode"))
            document.getElementById("darkmode").checked = true;
    }, [])
    return (
        <div id="layout">
            <div id="menu">
                <div className="pure-menu">
                    <button className="pure-menu-heading" onClick={() => {history.push("/")}} >Back to articles</button>
                </div>
            </div>
            <div id="main">
                <h1 className="header">Settings</h1>
                <h2>Appearance</h2>
                    <label for="darkmode">Dark Mode</label>
                    <input id="darkmode" onChange={changeDark} type="checkbox" name="darkmode"/>
                <h2>Feed Settings</h2>
                    <label for="feedCount">Number of articles per feed</label>
                    <input placeholder={Session.get("articlesPerFeed")} 
                    onChange={(e) => {Session.set("articlesPerFeed", parseInt(e.target.value))}} 
                    type="number" name="feedCount"/>
                <h2>Advanced</h2>
                    <button onClick={removeFeeds} type="button" >Remove all feeds</button>
            </div>
        </div>
    );
}