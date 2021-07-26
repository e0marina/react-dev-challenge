import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainWrapper from './components/mainWrapper';
import Confirm from './components/confirm';
import Success from './components/success';
//import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={MainWrapper} />
          <Route exact path='/confirm' component={Confirm} />
          <Route exact path='/success' component={Success} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
