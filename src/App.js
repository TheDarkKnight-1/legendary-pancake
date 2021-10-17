import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar title="Sentiment Analyzer" />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="container my-3">
              <TextForm heading="Enter the text to analyze" />
            </div>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
