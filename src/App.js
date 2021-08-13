import React from 'react';
import 'purecss/build/pure-min.css';
import './stylesheets/sidebar.css';
import { BrowserRouter, Route } from 'react-router-dom';
import  Session from 'react-session-api';
import { useState } from 'react';

import MainPage from './pages/mainPage';
import SettingsPage from './pages/settings';

function App() {

    Session.set("darkmode", false)
    Session.set("articlesPerFeed", 10)
    Session.set("removeFeeds", false)
    Session.set("feeds",[])
    const [dark, setDark] = useState(false);
    

  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <Route path="/" exact>
              <MainPage dark={dark} />
            </Route>
            <Route path="/settings">
              <SettingsPage setDark={setDark}/>
            </Route>
            
          </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
