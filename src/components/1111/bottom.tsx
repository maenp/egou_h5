import React,{useState} from 'react'
import {BottomC } from './styled'
import {connect} from 'react-redux'
import { useHistory } from "react-router-dom";
 
interface IProps{
    term:number
    isToTop?:boolean
    toTopHandler?:()=>void
    jumpPath?:string
    type?:string
}
// window.onscroll=(e)=>{
//     console.log(e);
// }
function Index(props:IProps) {
    let history = useHistory();
    function toElseHandler() {
        if(!props.jumpPath)return
        history.push(props.jumpPath);
    }
    const getoAwardCard = () => {//领取返利卡
        window.location.href = 'http://union.egou.com/to?site=2&term=2&pos=tqk_btn&page=gonglue&url=http%3A%2F%2Fh5.egou.com%2Fhd%2F2018%2Ftqk%2Findex.html%3Factid%3D5908'
    }
    return (
        <BottomC>
            {
                props.isToTop && <div className='toTop' onClick={props.toTopHandler}></div>
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

const mapStateToProps = (state) => {
    return {
        term: state.user.getIn(['term'])
    }
}
export default connect(mapStateToProps)(Index);
