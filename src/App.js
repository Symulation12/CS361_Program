import 'purecss/build/pure-min.css';
import './stylesheets/sidebar.css';
import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from './pages/mainPage';
import SettingsPage from './pages/settings';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Route path="/">
            <MainPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
