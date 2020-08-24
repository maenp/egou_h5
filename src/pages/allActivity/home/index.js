import React, {Component} from 'react';
import {Contain} from './styled'
class Index extends Component {
    render() {
        return (
            <Contain>
                <div className="bgBox" ref={"bgBox"} id="map-wrap">
                    <div className="bg" ref="bg" id="bg">
                    </div>
                </div>
            </Contain>
        );
    }
    componentDidMount(){
        this.goMiddleHandler()
    }
    goMiddleHandler() {//定位初始界面位置
        let bgBox=this.refs.bgBox
        bgBox.scrollBy(500,100)
    }
}

export default Index;