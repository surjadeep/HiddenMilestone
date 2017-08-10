import { combineReducers } from 'redux';
import AboutUsReducer from './reducer-about-us';

const rootReducer = combineReducers({
	aboutusData: AboutUsReducer
});

export default rootReducer;
