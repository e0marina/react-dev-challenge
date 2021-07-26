import MainWrapper from './components/mainWrapper';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={MainWrapper} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
