import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainWrapper from './components/mainWrapper';
import Confirm from './components/confirm';
import Success from './components/success';
import Finish from './components/finish';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={MainWrapper} />
          <Route exact path='/confirm' component={Confirm} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/finish' component={Finish} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
