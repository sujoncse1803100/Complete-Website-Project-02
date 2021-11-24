import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {

  const [loggedInsUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInsUser,setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;
