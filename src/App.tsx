import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from "./component/Main/Main";

function App() {
  return (
    <div className="App">
      <header className={"header"}>
        <div className={"logo"}>logo</div>
        <div className={"navigation"}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </header>
      <Main/>
    </div>
  );
}

export default App;
