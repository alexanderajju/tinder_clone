import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatsScreen from "./ChatsScreen";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatsScreen/>
         
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
