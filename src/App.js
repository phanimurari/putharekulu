import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Header from './components/common/Header'
import Home from './components/Home'
import AllProductsSection from './components/products'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path='/products' component={AllProductsSection} />
  </Switch>
)

export default App
