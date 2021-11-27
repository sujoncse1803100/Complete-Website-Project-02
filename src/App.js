import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login/Login";
import { createContext, useEffect, useState } from "react";
import { Service } from "./Components/Service/Service/Service";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import { AddService } from "./Components/Service/AddService/AddService";
import { MakeAdmin } from "./Components/Service/MakeAdmin/MakeAdmin";
import { Order } from "./Components/Order/Order/Order";
import { OrderList } from "./Components/Order/OrderList/OrderList";
import { Review } from "./Components/Order/Review/Review";
import { NotAdmin } from "./Components/Service/NotAdmin/NotAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInsUser, setLoggedInUser] = useState({});
  const [admin, setAdmin] = useState(false);

  try{
    useEffect(() => {
      fetch("https://damp-eyrie-90120.herokuapp.com/isAdmin", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: loggedInsUser.email }),
      })
        .then((response) => response.json())
        .then((result) => setAdmin(result))
        .catch(err=> {
          // alert(err)
        })
    }, [loggedInsUser]);
  }catch(err){
    alert(err);
  }

  return (
    <UserContext.Provider value={[loggedInsUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/service">
            {admin && <Service />}
            {!admin && <NotAdmin />}
          </PrivateRoute>
          <PrivateRoute exact path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute exact path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>

          <PrivateRoute exact path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute exact path="/orderList">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute exact path="/review">
            <Review />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
