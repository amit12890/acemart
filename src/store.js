import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { enhancer, reducers } from '@magento/peregrine';
// custom
import storage from 'redux-persist/lib/storage'

import { compareReducer } from './data/compare/compare.reducer';
import { appStateReducer } from './data/appState/appState.reducer';
import { checkoutReducer } from './data/checkout/checkout.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["compare"]
}
// This is the connective layer between the Peregrine store and the
// venia-concept UI. You can add your own reducers/enhancers here and combine
// them with the Peregrine exports.
//
// example:
const rootReducer = combineReducers({
    ...reducers,
    compare: compareReducer,
    appState: appStateReducer,
    checkout: checkoutReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const rootEnhancer = composeEnhancers(enhancer, myEnhancer);
// export default createStore(rootReducer, rootEnhancer);
// const rootReducer = combineReducers(reducers);
const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store)
export default store
