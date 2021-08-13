import React from 'react';


export default function SettingsPage () 
{
    return (
        <div id="layout">
            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="/">Back to articles</a>
                </div>
            </div>
            <div id="main">
                <h1 className="header">Settings</h1>
                <h2>Appearance</h2>
                    <label for="darkmode">Dark Mode</label>
                    <input type="checkbox" name="darkmode"/>
                <h2>Feed Settings</h2>
                    <label for="feedCount">Number of articles per feed</label>
                    <input type="number" name="feedCount"/>
                <h2>Advanced</h2>
                    <button type="button" >Remove all feeds</button>
            </div>
        </div>
    );
}