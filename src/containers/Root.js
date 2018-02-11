import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from '../components/App'
import Navbar from '../components/Navbar'

const Root = ({ store }) => (
  <Provider store={store}>
    <div>

      <Navbar/>
      <Route path="/" component={App} />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
