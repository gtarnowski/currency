import React from 'react'
import NavBar from '../NavBar'
import { Route, Switch } from 'react-router-dom'
import { URLS } from '../../constants/urls'
import Converter from '../../containers/Converter'
import Home from '../../components/Home'
import Compare from '../../containers/Compare'


const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path={URLS.HOME} component={Home} />
      <Route exact path={URLS.CONVERT} component={Converter} />
      <Route exact path={URLS.COMPARE} component={Compare} />
    </Switch>
  </div>
)
export default App
