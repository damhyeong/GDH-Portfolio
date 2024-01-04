import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from "./component/Main/Main";
import Introduce from "./component/Introduce/Introduce";

function App() {
  return (
    <div className="App">
      <div className={"header"}>
        <div className={"logo"}>logo</div>
        <div className={"navi"}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>
      </div>
        <div>
            <Main/>
        </div>
        <div>
            <Introduce/>
        </div>
    </div>
  );
}

export default App;
