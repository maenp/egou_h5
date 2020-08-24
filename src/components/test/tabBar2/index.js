import React, {Component} from 'react';
import {TabBar_UL} from './styled'
import TabBarHoc from '@hoc/test/TabBarHoc'

import {fromJS,Map} from 'immutable'
@TabBarHoc
class TabBar extends Component {
    constructor() {
        super();
        this.state={
            flag:1,
            success:false,
            map:Map({
                a:1,
                b:2
            })
        }
    }
    render() {
        let {flag}=this.state
        return (
            <TabBar_UL>
                <li>1</li>
                {flag?<li>2</li>:<li>好玩</li>}
                <li>3</li>
            </TabBar_UL>
        );
    }
    componentWillMount(){
        let {map}=this.state
        console.log(this.state.map)
        console.log(this.state.map.get('a'))
        map=map.update('a',(a)=>a+1)
        map=map.updateIn(['b'],(b)=>b+1).updateIn(['b'],(b)=>b+1)
        console.log(map)
    }
    componentDidMount(){
        setTimeout(_=>{
            this.setState({
                success:true
            })
        },2000)
    }

}

export default TabBar;
// export default TabBarHoc(TabBar);