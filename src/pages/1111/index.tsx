import React, { useState, useEffect, RefObject } from 'react';
import { useHistory } from "react-router-dom";
import { Wrapper ,RuleWrapper} from './styled'
import util from './../../utils/util'
import {connect} from 'react-redux'
import { Modal , Toast} from 'antd-mobile';
import nativeBridge from './../../utils/nativeBridge'
import {luckDrawApi} from "./../../api/publicApi"

const actId = util.getUrlParams(window.location.href).actId ||'1015';  //分享活动id
const NativeBridge = nativeBridge.getInstance()
const startTime=new Date('2020/10/23').getTime()
// const startTime=new Date().getTime()+10000

const toTaobao=()=>{//领 按钮
  util.btnEvent('2020d11','gethb')
  util.toTaobaoHandler('https://s.click.taobao.com/DPdEKvu')
}

const openRaward=(isTimeOut:boolean)=>{//天天开彩蛋
  util.btnEvent('2020d11','gettbegg')
  if(isTimeOut)util.toTaobaoHandler('https://s.click.taobao.com/oJfmCvu')
}
const ruleList=[
  "1、超级红包活动从10.21日至11.11日，每日可以领取3次双11超级红包，至高1111元；",
  "2、每次首次分享红包口令到微信 QQ 朋友圈，即可获得随机数量易豆，至高1111易豆；",
  "3、天天开彩蛋活动从10.23日至11.10日，每日可参与且参与越多红包膨胀系数越大；",
  "4、如有恶意刷易豆或者其他作弊行为，平台将扣除所有奖励或封禁账户；",
  "5、本活动解释权归易购APP所有。",
]




const shareEvent=()=> {
  let sharetitle = "在吗？一年一次的双11大促又双叒叕来了， 双11超级红包每日可领！赶紧抢！",
    sharetype = 1,
    sharecontent = "淘宝天猫双十一超级红包，最高1111元！",
    sharepicUrl = "https://egouimg1.qutu.com/m_egou/hd/2019/double11/hb/share.png",
    shareLink = window.location.href.replace('h5.egou.com','h5.qixinban.com')
      

  let obj = { "title": sharetitle, "type": sharetype, "content": sharecontent, "picUrl": sharepicUrl, "shareLink": shareLink }
  let shareCallBack = { "type": 'sea', "module": 'main', "method": 'shareCallBack' };
  try {
    NativeBridge.handler('share',true,obj,[JSON.stringify(obj), JSON.stringify(shareCallBack)])
  } catch (erro) {
    console.log(erro);
  }
}

function shareEventApp(){
  var objxq = { "type": "prototype", "method": "shareEvent" }
  var params = { "shareMethod": objxq }
  try {
    NativeBridge.handler('html2AppMaps',true,params)
  } catch (e) {
    console.log(e);
  }
}
shareEventApp()
//@ts-ignore
window.shareEvent=shareEvent

function Index() {
  let [isTimeOut,setTimeOut]=useState<boolean>(false)
  let [modal,setModal]=useState<boolean>(false)
  let copyInp: RefObject<HTMLInputElement> = React.createRef()
  let daojishiHandler=()=>{
    let expire=(startTime-new Date().getTime())/1000

    let timer=setInterval(()=>{
      if(expire<0){
        clearInterval(timer)
        setTimeOut(true)
      }
      expire--
    },1000)

  }
  let onWrapTouchStart = (e) => {
    
  }
  let copyTextHandler=()=> {//点击复制文案
    util.btnEvent('2020d11','copytkl')
    let current = copyInp.current!
    
    current.value = "6fu植这行话￥y2kJc7mVVtl￥转移至氵匋寳或点几链街 https://m.tb.cn/h.40CuODY 至浏.览览.器【2020天猫双11—主会场（满300减40，还能领红I包，最高1111元！）】"
    current.select();
    document.execCommand('Copy')
    Toast.success('已复制好，可粘贴',0.5)

    // const range = document.createRange();
    // range.selectNode(current);
    // const selection = window.getSelection()!;
    // if (selection.rangeCount > 0) selection.removeAllRanges();
    // selection.addRange(range);

    current.style.display='none'; // 将input隐藏
    current.remove(); // 将input销毁

    luckDrawApi({actId}).then(data=>{
      if(data.code==0){
        if(data.data&&data.data.luckInfo){
          let luckInfo = data.data.luckInfo;
          NativeBridge.handler('showRewardAlert',true,luckInfo)
        }
      }else if(data.data){
        // Toast.info(data.data.msg, 1);
      }
      
    })

  }
  useEffect(() => {
    daojishiHandler()
  }, [])
  return(
    <Wrapper>
      <Modal
        visible={modal}
        transparent
        maskClosable={false}
        onClose={()=>{setModal(false)}}
        title="活动规则"
        wrapProps={{ onTouchStart: onWrapTouchStart }}
        footer={[{ text: '我知道了', onPress: () => { console.log('ok'); setModal(false) } }]}
      >
        <RuleWrapper>
          {
            ruleList.map(t=>{
              return(
              <p key={t}>{t}</p>
              )
            })
          }
        </RuleWrapper>
      </Modal>
      {
        NativeBridge._isEnv?<div className='rule' onClick={()=>{setModal(true)}}></div>:''
      }
      
      <div className='get_btn' onClick={toTaobao}/>
      <div className='action_btn'>
        <div className="action" onClick={copyTextHandler}>{NativeBridge._isEnv?'分享口令赚易豆':'复制口令领取'}</div>
        <div className={isTimeOut?"action":""} onClick={()=>{openRaward(isTimeOut)}}>{isTimeOut?'天天开彩蛋':'10.24开始敬请期待'}</div>
      </div>
      <div className="copyText">
        6fu植这行话￥y2kJc7mVVtl￥转移至氵匋寳或点几链街 https://m.tb.cn/h.40CuODY 至浏.览览.器【2020天猫双11—主会场（满300减40，还能领红I包，最高1111元！）】
      </div>
      <input className="copyInp" ref={copyInp} type="text"/>
    </Wrapper>
  )
}
export default  Index
