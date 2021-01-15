import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {loadScript} from  '@utils/loadScript'
import nativeBridge from '@utils/nativeBridge'
import { routes } from "@/router"

const NativeBridge = nativeBridge.getInstance()
let _egtk

const beforeEnter=(route) => {//全局路由
    if(route.meta.title){
        let obj = {mainTitle: route.meta.title}
        document.title = obj.mainTitle;
        if(NativeBridge.device===3){
            //IOS加载一次title，就不在监听title的变化。用客户端方法来更改
            NativeBridge.handler('setNavbarInfo',true,obj)
        }
    }

    loadScript('//static1.egou.com/b=p/bi/js&f=alltracker.js', () => {
        _egtk = _egtk || {"site": 1};
            console.log(_egtk);
            (function() {
                if (!_egtk) return;
                let img = new Image(1, 1);
                img.src = '//ad.egou.com/track/check.htm?site='+_egtk.site
                +'&p='+encodeURIComponent(window.location.href)
                +'&s='+encodeURIComponent(document.referrer);
            })();
        console.log('统计代码执行')
    })

}


export default (routes) => {
    const eashChildrenRoute = (route) => {
        return <Route path={route.path} key={route.path} render={() => (
            <Fragment>
                <Route component={route.component} />
                <Redirect from={route.path} to={route.children[0].path} />
                <Switch>
                    {
                        route.children.map(child => {
                            if (child.children) {
                                return eashChildrenRoute(child)
                            } else {
                                if (sessionStorage.getItem('token') || child.path === '/login' || 1) {
                                    beforeEnter(child)
                                    return <Fragment key={route.path}>
                                        <Route path={child.path}  component={child.component} />
                                    </Fragment>
                                } else {
                                    return <Redirect to={{ pathname: '/login', state: { from: child.path } }} />
                                }
                            }
                        })
                    }
                </Switch>
            </Fragment>
        )} />
    }
    return routes.map(route => {
        if (route.children&&route.children.length) {
            return eashChildrenRoute(route)
        } else {            
            return <Route path={route.path} key={route.path} render={(props) => {
                beforeEnter(route)
                if (1||sessionStorage.getItem('token') || route.path === '/login') {
                    return <Fragment key={route.path}>
                        <route.component {...props}/>
                    </Fragment>

                } else {
                    return <Redirect to={{ pathname: '/login', state: { from: route.path } }} />

                }
            }} />
        }
    })
}