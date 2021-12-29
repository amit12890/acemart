import { combineReducers, createStore } from 'redux';
import { enhancer, reducers } from '@magento/peregrine';
// custom
import { compareReducer } from './data/compare/compare.reducer';
import { appStateReducer } from './data/appState/appState.reducer';
import { checkoutReducer } from './data/checkout/checkout.reducer';


// This is the connective layer between the Peregrine store and the
// venia-concept UI. You can add your own reducers/enhancers here and combine
// them with the Peregrine exports.
//
// example:
const rootReducer = combineReducers({
    ...reducers,
    compare: compareReducer,
    appState: appStateReducer,
    checkout: checkoutReducer
});
// const rootEnhancer = composeEnhancers(enhancer, myEnhancer);
// export default createStore(rootReducer, rootEnhancer);
// const rootReducer = combineReducers(reducers);

export default createStore(rootReducer, enhancer);
