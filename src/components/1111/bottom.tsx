import React,{useState} from 'react'
import {BottomC } from './styled'
import { useHistory } from "react-router-dom";
import util from '@utils/util'
 
interface IProps{
    toTop?:boolean
    toTopHandler?:()=>void
    jumpPath?:string
    type?:string
}
//获得页面向左、向上卷动的距离
function getScroll(){
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}


function Index(props:IProps) {
    let history = useHistory();
    let [isToTop, setIsToTop] = useState(false)
    function toElseHandler() {
        if(!props.jumpPath)return
        history.push(props.jumpPath);
    }
    function toTopHandler(){
        util.toTopHandler(document.documentElement,1000)
    }
    window.onscroll = function () {
        if(!props.toTop)return
        var sTop = getScroll().top;
        if (sTop > 100) {
            setIsToTop(_ => true)
        } else {
            setIsToTop(_ => false)
        }
    }
    const getoAwardCard = () => {//领取返利卡
        window.location.href = '//union.egou.com/to?site=2&term=2&pos=tqk_btn&page=gonglue&url=http%3A%2F%2Fh5.egou.com%2Fhd%2F2018%2Ftqk%2Findex.html%3Factid%3D5908'
    }
    return (
        <BottomC>
            {
                isToTop && <div className='toTop' onClick={toTopHandler}></div>
            }
            {
                props.jumpPath&&<div className={props.type==='jd'?'toElse toElse1':'toElse'} onClick={toElseHandler}></div>
            }
            <div className='getAwardCard'>
                吐血补贴,下单先领卡,返上加返
                <div className='btn' onClick={getoAwardCard}>返利卡入口</div>
            </div>
        </BottomC>
    )
}


export default Index
