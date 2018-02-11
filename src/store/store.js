import {applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import reducer from "../reducers/index";

const middleware = applyMiddleware(thunk, logger);

export default createStore(reducer, middleware)