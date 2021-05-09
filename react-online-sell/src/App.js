import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./Firebase";
import { useStateContext } from "./StateProvider";

function App() {
  const [, dispatch] = useStateContext();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User IS >>>", authUser);
      if (authUser) {
        dispatch({ type: "SET_USER", payload: { user: authUser } });
      } else {
        dispatch({ type: "SET_USER", payload: { user: null } });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
