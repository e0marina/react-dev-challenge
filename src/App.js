import MainWrapper from './components/mainWrapper';
import Success from './components/success';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={MainWrapper} />
          <Route exact path='/success' component={Success} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
