import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';
import About from './components/About';
import SentimentAnalyzer from './components/SentimentAnalyzer';

function App() {
  return (
    <>
      <NavBar title="Sentiment Analyzer" />
      <div className="container my-3"> 
        <TextForm heading="Enter the text to analyze" />
      </div>
      {/* <div className="container my-3"> 
        <SentimentAnalyzer/>
      </div> */}
      {/* <About/> */}
    </>
  );
}

export default App;
