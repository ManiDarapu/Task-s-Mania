import {Route, Switch} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Todo from './components/Todo'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/todo" component={Todo} />
  </Switch>
)

export default App
