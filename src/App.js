import React from "react";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
export default function App() {
  return (
    <main>
      <Header>
     <nav> <Link to={"/"}>Home</Link> <Link to={'/characters'}>characters</Link>  </nav>.
        <Route exact path ="/">
            <WelcomePage/>
        </Route>
        <Route path ="/characters">
          <CharacterList/>
        </Route>  
      </Header>
    </main>
  );
}
