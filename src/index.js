import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";

import './index.css';
import store from "./store/store"
import Root from "./containers/Root"

ReactDOM.render(
    <Router>
        <Root store={store} />
    </Router>,
    document.getElementById('root')
);
