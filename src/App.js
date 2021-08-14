import './App.css';
import Home from './Pages/Home/Home';
import AddExpense from "./Pages/AddExpense/AddExpense"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="header">
        <h1>Expense Tracker</h1>
      </div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/add-exp' component={AddExpense}/>
      </Switch>
      <div className="footer">
        <p>Developed by Raunak Agarwal</p>
      </div>
    </Router>
  );
}

export default App;
