import { combineReducers } from 'redux';
import AboutUsReducer from './reducer-about-us';

const rootReducer = combineReducers({
	aboutus: AboutUsReducer
});

export default rootReducer;