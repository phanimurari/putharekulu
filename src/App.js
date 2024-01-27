import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default App
