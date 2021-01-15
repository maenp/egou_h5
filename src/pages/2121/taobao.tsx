import React, { useState, useEffect, RefObject } from 'react';
import { Wrapper ,RuleWrapper,ActionBtn } from './styled'
import util from '@utils/util'
import { Modal , Toast} from 'antd-mobile';
import nativeBridge from '@utils/nativeBridge'
import {luckDrawApi} from "@api/publicApi"
import BottomComponent from '@components/1111/bottom'

const NativeBridge = nativeBridge.getInstance()

const actId = util.getUrlParams(window.location.href).actId ||'1015';  //分享活动id
const startTime=new Date('2020/1/17 0:00').getTime();
const UnStartBtnText='1月17号开抢';
const startBtnText='领红包';
const copyText='9.0￥7w6qcG6MIo3￥哒楷tἍo宝或點҉击҉url链 https://m.tb.cn/h.4iHdwBl 至浏览er【2021天喵年货节——超级红包主会场（每满300减30，更有超级红包等你来抢）】';
const getRedPacketLink='https://s.click.taobao.com/4AOx7su';//领红包链接
const openLotteryLink='https://s.click.taobao.com/Gg7FDsu';//开彩蛋链接
const ruleList=[
  "1、超级红包活动从1.17日至1.25日，每日可以领取3次年货节超级红包，至高2021元；",
  "2、每次首次分享红包口令到微信 QQ 朋友圈，即可获得随机数量易豆，至高2021易豆；",
  "3、1元购活动从1.15日至1.31日，每日可参与且限量，先到先得，红包当天可用，每周做多可下两单；",
  "4、如有恶意刷易豆或者其他作弊行为，平台将扣除所有奖励或封禁账户；",
  "5、本活动解释权归易购APP所有。",
]
// const startTime=new Date().getTime()+10000

const toTaobao=()=>{//领 按钮
  util.btnEvent('2020d11','gethb')
  util.toTaobaoHandler(getRedPacketLink)
}

const openRaward=(isTimeOut:boolean)=>{//快乐开彩蛋
  util.btnEvent('2020d11','gettbegg')
  if(isTimeOut)util.toTaobaoHandler(openLotteryLink)
}

const shareEvent=()=> {
  let sharetitle = "2021年开年惊喜派送中...",
    sharetype = 1,
    sharecontent = "淘宝&京东年货大狂欢 最高2021元红包！",
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

window.shareEvent=shareEvent

function Index() {
  let [isTimeOut,setTimeOut]=useState<boolean>(false)
  let [modal,setModal]=useState<boolean>(false)
  let copyInp: RefObject<HTMLInputElement> = React.createRef()
  let daojishiHandler=()=>{
    let expire=(startTime-new Date().getTime())/1000
    if(expire<0){
      setTimeOut(true)
      return
    }
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
    
    current.value = copyText
    current.select();
    document.execCommand('Copy')
    Toast.success('已复制好，可粘贴',1)

    current.style.display='none'; // 将input隐藏
    current.remove(); // 将input销毁
    luckDrawApi({actId}).then(data=>{
      if(data.code==0&&data.data&&data.data.luckInfo){
          let luckInfo = data.data.luckInfo;
          NativeBridge.handler('showRewardAlert',true,luckInfo)
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
      <ActionBtn>
        <div className="action" onClick={copyTextHandler}>{NativeBridge._isEnv?'分享口令赚易豆':'复制口令领取'}</div>
        <div className={isTimeOut?"action":""} onClick={()=>{openRaward(isTimeOut)}}>{isTimeOut?startBtnText:UnStartBtnText}</div>
      </ActionBtn>

      <div className="copyText">{copyText}</div>
      <input className="copyInp" ref={copyInp} type="text"/>
      <BottomComponent toTop={true} jumpPath={'/JD2021'} type="tao"/>
    </Wrapper>
  )
}
export default  Index
