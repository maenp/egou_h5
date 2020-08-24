/// <reference types="./index" />
import React, { useState, useEffect, RefObject } from 'react';
import { Header, Container } from './styled'
import { progess1, progess2, progess3, progess4, notifications, tixing } from './../../static/img/awardDetail'
import { isTaobaoBindApi } from './../../api/awardDetail'
import util from './../../utils/util';
import { Carousel, Toast } from 'antd-mobile';
import { connect } from 'react-redux'


function Index(props: IProps) {
  let time = 0
  const containerRef: RefObject<HTMLLIElement> = React.createRef()
  const scrollRef: RefObject<HTMLDivElement> = React.createRef()
  const [isAnimation, setInA] = useState<boolean>(false)
  let [indexObj, setIndexObj] = useState<any>({
    feedbackdesc: 2,
    fanliTz: 3,//-------
    no_feedback_desc: 0,//----
    considerations: 0,
  })
  let containerHeight = 60
  let [info, setInfo] = useState<IInfo>({
    act_log: '',
    shop_logo: '',
    website_alias: '',
    top_feedback: '',
    noFanlidesc: {
      no_feedback_desc: '',//无返利说明
      considerations: '',//注意事项
      notifications: '',//通知
    },
    feedback: {
      feedbackhistory: '',
    },
    orderNotice: '',
    fanliTz: []
  })
  const headerAnimation = () => {
    setInA(_ => !isAnimation)
  }
  const containerScroll = (e) => {
    // let nowTime=new Date().getTime()
    // if(nowTime-time<300)return
    // time=nowTime
    if (e.target.scrollTop > containerHeight) {
      setInA(_ => true)
    } else {
      setInA(_ => false)
    }
  }
  function loadingToast() {
    Toast.loading('Loading...', 10, () => {
    });
  }
  async function getInfoHandler() {
    loadingToast()
    let urlParams = util.getUrlParams(window.location.href)
    let data = await isTaobaoBindApi(urlParams.shop_id)
    if (data.code === 0) {
      let Info = data.data[0]
      let indexObj = {
        feedbackdesc: 2,
        fanliTz: 3,//-------
        no_feedback_desc: 0,//----
        considerations: 2,
      }
      setInfo(_ => Info)
      if (Info.feedback && Info.feedback.feedbackdesc) {
        document.getElementById('explainBox')!.innerHTML = Info.feedback.feedbackdesc
      } else {
        indexObj.fanliTz = 2
      }
      if (!Info.fanliTz.length) indexObj.fanliTz = 0

      if (Info.noFanlidesc) {
        if (Info.noFanlidesc.no_feedback_desc) {
          document.getElementById('noAwardExpBox')!.innerHTML = Info.noFanlidesc.no_feedback_desc
          indexObj.no_feedback_desc = indexObj.fanliTz ? indexObj.fanliTz + 1 : indexObj.feedbackdesc + 1
        }
        if (Info.noFanlidesc.considerations) {
          document.getElementById('elseAffairBox')!.innerHTML = Info.noFanlidesc.considerations
          if (indexObj.no_feedback_desc) {
            indexObj.considerations = indexObj.no_feedback_desc + 1
          } else if (indexObj.fanliTz) {
            indexObj.considerations = indexObj.fanliTz + 1
          }
        }
        if (Info.noFanlidesc.notifications) document.getElementById('notifications')!.innerHTML = Info.noFanlidesc.notifications
      }
      console.log(indexObj);

      setIndexObj(indexObj)
      Toast.hide();
    } else {
      Toast.fail(data.sub_msg || data.msg, 1);
    }
  }
  function toTopHandler() {
    let current = (scrollRef as any).current
    if (props.term == 3) {//处理安卓卡顿
      current.scrollTop = 0;
    } else {
      util.toTopHandler(current, 1000)
    }
  }
  useEffect(() => {//ditmount

    getInfoHandler()
    containerHeight = (containerRef as any).current.clientHeight + 10

  }, [])

  return (
    <>
      {
        info.top_feedback && <Header>
          <div className={`_head_info ${isAnimation ? 'isAnimation' : ''}`}>

            <img className='_info_logo' src={info.shop_logo || info.act_log} alt="" />
            <div className='_info_name'>{info.website_alias}</div>
            <div className='_info_maxAward'>
              <div className='_info_maxAward_box'>
                下单最高拿<span>{info.top_feedback}</span>返利
              </div>
            </div>
          </div>
          {
            isAnimation && <div className='toTop' onClick={toTopHandler}></div>
          }

        </Header>
      }

      <div
        className='detail'
        ref={scrollRef}
        style={{ overflowY: "scroll", height: '100%', position: 'relative', WebkitOverflowScrolling: 'touch' }}
        onScroll={containerScroll} >
        <Container >
          {
            info.noFanlidesc && info.noFanlidesc.notifications && (
              <div className='message'>
                <h3>通知：</h3>
                <div id='notifications'></div>
              </div>
            )
          }
          <ul >
            <li className='_con_progess' ref={containerRef}>
              <h3 data-index='1'>怎么拿返利</h3>
              <div className='_con_progess_box'>
                <div className='_progess_box_item'>
                  <img src={progess1} alt="" />
                  <span>去购物返利</span>
                </div>
                <div className='_progess_box_item'>
                  <img src={progess2} alt="" />
                  <span>在商城下单</span>
                </div>
                <div className='_progess_box_item'>
                  <img src={progess3} alt="" />
                  <span>易购跟单</span>
                </div>
                <div className='_progess_box_item'>
                  <img src={progess4} alt="" />
                  <span>返利到账</span>
                </div>
              </div>
              {
                info.orderNotice && (
                  <div className='notifications'>
                    <img src={notifications} alt="" />
                    <p>{info.orderNotice}</p>
                  </div>
                )
              }

            </li>
            {
              info.feedback && info.feedback.feedbackdesc && <li className='_con_explain'>
                <h3 data-index='2'>返利比例说明</h3>
                <div id='explainBox'></div>
              </li>
            }
            {
              info.fanliTz.length ?
                <li className='_con_giveMessage'>
                  <h3 data-index={indexObj.fanliTz}>返利结算通知</h3>
                  <Carousel
                    className="my-carousel"
                    style={{ overflow: 'hidden' }}
                    dots={false}
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplayInterval={2000}
                    autoplay={true}
                    infinite={true}
                    vertical
                  >
                    {
                      info.fanliTz.map((t, i) => {
                        return (
                          <div className="item" key={i}>
                            <img src={tixing} alt="" />
                            <p>{t.submit_time},该商家 {t.order_time}月订单开始结算</p>
                          </div>
                        )
                      })
                    }
                  </Carousel>
                </li>
                : ''
            }
            {
              info.noFanlidesc && info.noFanlidesc.no_feedback_desc && <li className='_con_noAwardExp'>
                <h3 data-index={indexObj.no_feedback_desc}>无返利说明</h3>
                <div id='noAwardExpBox'></div>
              </li>
            }
            {
              info.noFanlidesc && info.noFanlidesc.considerations && <li className='_con_elseAffair'>
                <h3 data-index={indexObj.considerations}>其他注意事项</h3>
                <div id='elseAffairBox'></div>
              </li>
            }

          </ul>
        </Container>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    term: state.user.getIn(['term'])
  }
}
export default connect(mapStateToProps)(Index);
