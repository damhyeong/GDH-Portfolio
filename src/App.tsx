import React from 'react';
import logo from './logo.svg';
import spin from './spin-face.png'
import './App.scss';
import Main from "./component/Main/Main";
import Introduce from "./component/Introduce/Introduce";

function App() {

  return (
    <div className="App">
      <div className={"header"}>
        <div className={"logo"}>Gong Dam Hyeong</div>
        <nav className={"navi"}>
            <a href={"#Main"} className={"nav"}>Main</a>
            <a href={"#Introduce"} className={"nav"}>Introduce</a>
        </nav>
      </div>
        <div id={"Main"}>
            <Main/>
        </div>
        <div id={"Introduce"}>
            <Introduce/>
        </div>
    </div>
  );
}

export default App;
