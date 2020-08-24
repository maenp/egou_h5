/// <reference types="./" />
import React, { useState, useEffect, RefObject } from 'react';
import { useHistory } from "react-router-dom";
import { Taobao, ToRed, ToEnd, Bottom } from './styled'
import util from './../../utils/util'
import {connect} from 'react-redux'


const mapStateToProps = (state) => {
    return {
        term: state.user.getIn(['term'])
    }
}
function Index(props:IProps) {
  const TIME = 1592668799000
  let history = useHistory();
  let Interval: any = null
  const containerRef: RefObject<HTMLDivElement> = React.createRef()
  let [isEnd, setIsEnd] = useState(false)
  let [isToTop, setIsToTop] = useState(false)
  let [timeObj, setObj] = useState({
    day: '0',
    hour: '0',
    minute: '0',
    second: '0'
  })
  const setInter = () => {
    let resTime = (TIME - new Date().getTime()) / 1000
    // let resTime=5
    Interval && clearInterval(Interval)
    Interval = setInterval(_ => {
      util.daojishi(resTime).then((timeObj: ITimeObj) => {
        resTime--
        setObj(() => timeObj)
      }).catch(_ => {
        clearInterval(Interval)
        setIsEnd(_ => true)
      })

    }, 1000)
  }
  const getoAwardCard = () => {//领取返利卡
    window.location.href = 'http://union.egou.com/to?site=2&term=2&pos=tqk_btn&page=gonglue&url=http%3A%2F%2Fh5.egou.com%2Fhd%2F2018%2Ftqk%2Findex.html%3Factid%3D5908'
  }
  function toRedHandler() {//领红包
    util.isTaobaoBind().then(() => {
      window.location.href = 'http://union.egou.com/to?site=2&term=2&pos=tmlq_btn&page=tmgonglue&url=https%3A%2F%2Fs.click.taobao.com%2Ft%3Fe%3Dm%253D2%2526s%253DIgLS0q1HpvFw4vFB6t2Z2iperVdZeJviU%252F9%252F0taeK29yINtkUhsv0P4XEoQEHse%252F%252BEZwUUtCLU2jyFGmx1VEeARxtJ4dTcCQUhkgNPARYGaor7aO8rkunV9EeTtntI4431iT9rHVeinLP4XO97TuilWKPqsk%252FwWtTaysLwyTT15CBmyzWObreM7ngtD9XDUvYsNP3VsolWqIGrHgCgZNHB58Cx4Yk%252Fi8L4ur6qKSup5v6xwfWolXJEun6gFJ22woXu2rmNBz2FrM5UxHFoTvZtvy9LG2VH6wXnlbVRd724yKiLnwd4Zzu9IWCeTnd13pjST5bL4xrdlopKioI4zlfgY97VBpV3qbt7yCZi7PEwn7GorVJxucwRIkcwafgeyVFaZkvlJGNN%252FGDmntuH4VtA%253D%253D%26union_lens%3DlensId%253AOPT%25401590646943%25400b1a25bf_0e96_17259f22fda_1584%254001%26relationId%3D%7BrelationId%7D'
    })
  }
  function toElseHandler() {
    history.push("/JD618");
  }
  function toTopHandler() {
     // (containerRef as any).current.scrollTop = 0;
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
  useEffect(() => {
    setInter()
    return () => {
      clearInterval(Interval)
    }
  }, [])
  return (
    <>
      <div ref={containerRef} style={{ overflowY: "scroll", height: '100%', WebkitOverflowScrolling: 'touch' }} onScroll={scrollHandler}>
        <Taobao >
          {
            isEnd ? <ToEnd >已结束</ToEnd> : <ToRed onClick={toRedHandler}>立即领红包</ToRed>
          }
          {
            !isEnd && <div className='daojishi'>
              <ul>
                距结束:
                <li>{timeObj.day}</li>天
                <li>{timeObj.hour}</li>:
                <li>{timeObj.minute}</li>:
                <li>{timeObj.second}</li>
              </ul>
            </div>
          }
          {
            isToTop && <div className='toTop' onClick={toTopHandler}></div>
          }
        </Taobao>
      </div>
      <Bottom>
        {
          isToTop && <div className='toTop' onClick={toTopHandler}></div>
        }
        <div className='toElse' onClick={toElseHandler}></div>
        <div className='getAwardCard'>
          吐血补贴, 下单先领卡, 返上加返
          <div className='btn' onClick={getoAwardCard}>返利卡入口</div>
        </div>
      </Bottom>
    </>
  );
}
export default connect(mapStateToProps)(Index);
