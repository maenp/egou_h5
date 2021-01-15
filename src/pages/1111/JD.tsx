/// <reference types="./" />
import React, { useState, useEffect, RefObject } from 'react';
import { useHistory } from "react-router-dom";
import { JD, ToRed } from './styled'
import util from './../../utils/util'
import {connect} from 'react-redux'
import BottomComponent from './../../components/1111/bottom'




function Index(props:IProps) {
    const containerRef: RefObject<HTMLDivElement> = React.createRef()
    const TIME = new Date('2020/10/29 18:00').getTime()
    let JDInterval: any = null
    let history = useHistory();
    let [isToTop, setIsToTop] = useState(false)
    let [isEnd, setIsEnd] = useState(false)
    let [timeObj, setObj] = useState({
        day: '0',
        hour: '0',
        minute: '0',
        second: '0'
    })
    const setInter = () => {//设置定时器
        let resTime = (TIME - new Date().getTime()) / 1000
        // let resTime=5
        JDInterval && clearInterval(JDInterval)
        JDInterval = setInterval(_ => {
            util.daojishi(resTime).then((timeObj: ITimeObj) => {
                resTime--
                setObj(() => timeObj)
            }).catch(_ => {
                clearInterval(JDInterval)
                setIsEnd(_ => true)
            })

        }, 1000)
    }
    const getoAwardCard = () => {//领取返利卡
        window.location.href = 'http://union.egou.com/to?site=2&term=2&pos=tqk_btn&page=gonglue&url=http%3A%2F%2Fh5.egou.com%2Fhd%2F2018%2Ftqk%2Findex.html%3Factid%3D5908'
    }
    function toRedHandler() {
        window.location.href = 'http://union.egou.com/to?site=2&term=2&shop=492767&pos=jdhb_btn&page=jdgonglue&url=https%3A%2F%2Fstory.m.jd.com%2FbabelDiy%2FZeus%2F3GTK33w27TxnCutHJAbrwB5z5zc2%2Findex.html'
    }
    function toElseHandler() {
        history.push("/1111");
    }
    function toTopHandler() {
        // (containerRef as any).current.scrollTop = 0;
        console.log(props.term);
        
        let current = (containerRef as any).current
        if(props.term==3){//处理安卓卡顿
            current.scrollTop = 0;
        }else{
            util.toTopHandler(current,1000)
        }
    }
    function scrollHandler(e) {
        let scrollTop = e.target.scrollTop
        if (scrollTop > 100) {
            setIsToTop(_ => true)
        } else {
            setIsToTop(_ => false)
        }
    }
    useEffect(() => {//ditmount
        console.log('加载完成');
        setInter()
        return () => {//销毁前
            console.log('销毁');
            clearInterval(JDInterval)
        }
    }, [])
    return (
        <>
            <div ref={containerRef} style={{ overflowY: "scroll", height: '100%', WebkitOverflowScrolling: 'touch' }} onScroll={scrollHandler}>
                <JD>
                    
                    <ToRed onClick={toRedHandler}>{isEnd?'去领取':'去看看'}</ToRed>
                    
                    {
                        !isEnd && <div className='daojishi'>
                            <ul>
                                距开始:
                                <li>{timeObj.day}</li>天
                                <li>{timeObj.hour}</li>:
                                <li>{timeObj.minute}</li>:
                                <li>{timeObj.second}</li>
                            </ul>
                        </div>
                    }
                </JD>
            </div>
            <BottomComponent toTop={true} toTopHandler={toTopHandler} jumpPath={'/1111'} type="jd"/>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        term: state.user.getIn(['term'])
    }
}
export default connect(mapStateToProps)(Index);

