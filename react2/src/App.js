/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black' , maxWidth: '100vw'}}>
        <h1 className="title red">Your name here</h1>
        <img src={logo}/>
        <img src="./logo192"/>
      </div>
      <YoutubePlayer
                src="https://youtu.be/UZCO5k1Nu70" // Reqiured
                width={650}
                height={600}
      />
    </div>
);
}

export default App;
