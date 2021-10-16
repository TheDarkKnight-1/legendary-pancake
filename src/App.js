import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <NavBar />
      <div className="container my-3"> 
        <TextForm heading="Enter the text to analyze" />
      </div>
      
    </>
  );
}

export default App;
