import { formatCountdown } from "antd/lib/statistic/utils";
import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import {rootReducer} from './reducer/rootReduser'
import { composeWithDevTools } from 'redux-devtools-extension';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))


