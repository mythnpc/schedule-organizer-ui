import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import AttendanceContainer from './AttendanceContainer'
import HeroContainer from './HeroContainer'

import Navbar from '../components/Navbar'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={AttendanceContainer} />
        <Route path="/attendance" component={AttendanceContainer} />
        <Route path="/hero" component={HeroContainer} />
        <Route path="/music" component={HeroContainer} />
      </Switch>

    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
