import React, { useState, useEffect} from 'react';
import { Item, Bg } from './styled'
import { Carousel, Toast } from 'antd-mobile';


function Index() {
    let [bottomShow, setShow] = useState<boolean>(true)
    let [index, setIndex] = useState<0 | 1>(0)

    let timeout: any = null
    const scrollHandler = (e) => {
        timeout && clearTimeout(timeout)
        setShow(false)
        timeout = setTimeout(_ => {
            timeout && clearTimeout(timeout)
            timeout = null
            setShow(true)
        }, 1000)
    }
    const afterChange = (index) => {
        setIndex(_ => index)
    }
    const toLinkHandler = (i) => {
        if (i === 1) return
        Toast.loading('正在跳转中...', 2000)
        window.location.href = 'https://mall.ikang.com/searchList?product_first_type_id=674'
    }
    function noHandleTouch(el) {
        el.addEventListener('touchmove',function(e){
            e.isSCROLL = true;
        })
        document.body.addEventListener('touchmove',function(e){
            if((e as any).isSCROLL){
                //需要滑动的区域
                var top = el.scrollTop; //对象最顶端和窗口最顶端之间的距离 
                var scrollH = el.scrollHeight; //含滚动内容的元素大小
                var offsetH = el.offsetHeight; //网页可见区域高
                var cScroll = top + offsetH; //当前滚动的距离
                //被滑动到最上方和最下方的时候
                if(top == 0){
                    el.scrollTop = 1; //0～1之间的小数会被当成0
                }else if(cScroll === scrollH){
                    el.scrollTop = top-1
                }
            }else{
                e.preventDefault(); //阻止默认事件(上下滑动)
            }
        },{passive: false})
    }
    useEffect(() => {
        var iphone = navigator.userAgent.toLowerCase().indexOf('iphone');//判断是否为iphone
        if(iphone>-1){
            var divEl = Array.from(document.querySelectorAll(".item"))//给所有需要滚动的元素添加事件
            divEl.forEach((t)=>{
                noHandleTouch(t);
            })
        }
    },[])
    return (
        <Bg>
            <Carousel
                autoplay={false}
                dots={false}
                infinite
                afterChange={afterChange}
            >
                {[1, 2].map((t, i) => (
                    <Item key={t} onScroll={scrollHandler} className='item'>
                        <div className='imgBox'>
                            <img src={`//egouimg1.qutu.com/m_egou/hd/2020/nCoV_EMC/${t}.png?222`} alt="" />
                            <div className='toLink' onClick={toLinkHandler.bind(null, i)}></div>
                        </div>
                    </Item>
                ))}
            </Carousel>
            <div className='bottomTips' style={{ opacity: bottomShow ? 1 : 0 }}>
                <img className='icon' src="//egouimg1.qutu.com/m_egou/hd/2020/nCoV_EMC/toRight.png" alt="" />
                向右滑动“查看核酸检测{index ? '最全攻略' : '机构列表'}”
            </div>
        </Bg>
    );
}

export default Index;

