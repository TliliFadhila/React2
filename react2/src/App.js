import React from 'react'
import { ReactVideo } from "reactjs-media";
import logo from './logo.svg';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black' , maxWidth: '100vw'}}>
        <h1 className="title red">Your Name Here</h1>
        <img alt="Logo" src={logo}/>
        <img alt="Logo" src="/logo512.png" />
      </div>
      <div>
            <ReactVideo
                src="https://www.youtube.com/watch?v=ZH9wNQlnukY"
                poster="https://www.example.com/poster.png"
                primaryColor="red"
            />
        </div>
    </div>
);
}

export default App;
