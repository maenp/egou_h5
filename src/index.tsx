import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import store from "./store";
import { HashRouter ,Route} from "react-router-dom"
import {USER} from "./actions/test";
store.dispatch(USER)//更新请求的公共参数
ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <Route path='/' component={App}/>
            </HashRouter>
        </Provider>
        ,document.getElementById('root'),
        ()=>{console.log('渲染成功')}
    );


