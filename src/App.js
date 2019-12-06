import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import Login from './components/Login/login';
import Employee from './components/Login/Employee';
function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <header className="App-header">
          
          <Router>
            <Route exact path="/" component={Login}></Route>
            <Route path="/employee" component={Employee}></Route>
          </Router>
                
        </header>
      </div>
    </Provider>
    
  );
}

export default App;
