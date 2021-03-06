/// <reference types="./" />
import React, { useState, useEffect, RefObject } from 'react';
import { JD, ToRed,ActionBtn} from './styled'
import util from '@utils/util'
import BottomComponent from '@components/1111/bottom'

const TIME = new Date('2021/1/18 00:00').getTime()
const UnStartBtnText='1月18日开始';
const startBtnText='去领取';


function Index() {
    let JDInterval: any = null
    let [isEnd, setIsEnd] = useState(false)
    let [timeObj, setObj] = useState({
        day: '0',
        hour: '0',
        minute: '0',
        second: '0'
    })
    const setInter = () => {//设置定时器
        let resTime = (TIME - new Date().getTime()) / 1000
        // resTime=5
        clearHandelr()
        JDInterval = setInterval(_ => {
            util.daojishi(resTime).then((timeObj: ITimeObj) => {
                resTime--
                setObj(() => timeObj)
            }).catch(_ => {
                clearHandelr()
                setIsEnd(_ => true)
            })

        }, 1000)
    }
    function clearHandelr(){
        if(JDInterval){
            JDInterval=null
            clearInterval(JDInterval)
        }
    }
    function toRedHandler() {
        window.location.href = '//union.egou.com/to?site=2&term=2&shop=492767&pos=jdhb_btn&page=jdgonglue&url=https%3A%2F%2Fstory.m.jd.com%2FbabelDiy%2FZeus%2F2HxATPMr9wQsKhqm3oe7vshuJYDS%2Findex.html';
    }
    function toOneHandler() {
        window.location.href = '//www.eqifa.com/earner/mini/productActivity/coupon/#/jxlj.html/150';
    }
    useEffect(() => {//ditmount
        setInter()
        return () => {//销毁前
            console.log('销毁');
            clearHandelr()
        }
    }, [])
    return (
        <>
            <JD>
                <ToRed onClick={toRedHandler}>{isEnd?startBtnText:UnStartBtnText}</ToRed>
                
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
            <ActionBtn style={{top:'9.15rem'}}>
                <div className="action" onClick={toRedHandler}>京享红包</div>
                <div className="action" onClick={toOneHandler}>京享1元购</div>
            </ActionBtn>
            <BottomComponent toTop={true} jumpPath={'/2021'} type="jd"/>
        </>
    );
}
export default Index

