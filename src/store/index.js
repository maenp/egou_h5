import {createStore,combineReducers,applyMiddleware} from "redux";
import user from "./reducer/user"
import reduxThunk from "redux-thunk"

//用来合并 reducer
const reducer = combineReducers({
    user,
})

//applyMiddleware是用来使用中间件的，reduxThunk是用来处理异步的action
const store = createStore(reducer,applyMiddleware(reduxThunk));

export default store;