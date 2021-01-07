import {createStore} from "redux";
import rootReducer from "./reduceres"
const DevTols=
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store= createStore(rootReducer,DevTols)
export default store;