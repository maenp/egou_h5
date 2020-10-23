import {isTaobaoBindApi,btnEventApi} from './../api/publicApi'
import nativeBridge from './nativeBridge'
import store from './../store'
const NativeBridge = nativeBridge.getInstance()
let user=store.getState().user
export default {
    daojishi(time:number) { //time 单位 s
        return new Promise((res, rej) => {
            let addZero = (value) => {
                return value < 10 ? "0" + value : value;
            }
            let timer = () => {
                if (time <= 0) {
                    rej();
                }
                let day=Math.floor(time / 86400);
                let hour = Math.floor((time%86400) / (60 * 60));
                let minute = Math.floor(((time%86400) - hour * 60 * 60) / (60));
                let second = Math.floor(((time%86400) - hour * 60 * 60 - minute * 60));
                let obj = {
                    day: addZero(day),
                    hour: addZero(hour),
                    minute: addZero(minute),
                    second: addZero(second)
                }
                res(obj)
            }
            return timer();
        })
    },
    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    /*
    * 获取地址里的参数
    * @url 地址
    * */
    getUrlParams(url:string):any {
        let obj = {}
        let Params=url.split("?")[1]||url
        Params.split("&").forEach(t => {
            let arr = t.split('=')
            obj[arr[0]] = arr[1]
        })
        return obj
    },

    loadImage(imgs) {//图片的预加载  入参String[], 返回imgElement[]
        return new Promise((resolve, reject) => {
            let img = new Image();//新建一个图片标签
            let arr = []
            let i = 0
            img.addEventListener("load", loadHandler);
            img.src = imgs[i]

            function loadHandler() {
                // @ts-ignore
                arr.push(this.cloneNode(false));
                i++
                if (i > imgs.length - 1) {
                    img.removeEventListener("load", loadHandler)
                    resolve(arr)
                } else {
                    // @ts-ignore
                    this.src = imgs[i]
                }
            }
        })
    },
    /**
     * ImageHtml元素需要有标签属性 data-src:真实图片地址
     * @loadImgs ImageHtml[]
     */
    lazyLoadImage(loadImgs) {//图片懒加载
        let H = document.documentElement.clientHeight;//获取可视区域高度
        // let S = document.documentElement.scrollTop || document.body.scrollTop;
        for (let i = 0; i < loadImgs.length; i++) {//循环所有的图片，根据位置判断是否加载
            let img = loadImgs[i]
            let imgBoundingClientRect = img.getBoundingClientRect()
            // console.log(H,S,imgBoundingClientRect)
            let viewBottom = H + imgBoundingClientRect.height > imgBoundingClientRect.top //用来判断可视区域下面的图片是否显示  加了H是为了向下多加载一张图片
            let viewTop = (imgBoundingClientRect.bottom + imgBoundingClientRect.height) > 0 //用来判断可视区域上面的图片是否显示
            if (viewBottom && viewTop) {
                img.src = img.getAttribute('data-src');
            } else if (!viewBottom) {//判断到下面时就不用判断了，这里还可以优化->如何减少上面的判断
                return
            }
        }
    },


    /**
     * @fn Function
     * @timeout Number 延迟时间
     * @trailing Boolean 是否开启频繁操作延时执行fu函数
     */
    ThrottleHandler(fn:Function, timeout:number, trailing:boolean):Function {//节流处理函数
        let startTime = 0
        let timer
        return function () {//闭包  返回一个函数，调用时需执行会自动调用一次，保险起见最好再手动调用一次 fn
            let nowTime = new Date().getTime()
            if ((nowTime - startTime) > timeout) {//两次执行间隔时间>延迟时间
                timer && clearTimeout(timer)
                timer = null
                startTime = nowTime
                return fn()
            } else if (!timer && trailing) {
                timer = setTimeout(() => {
                    timer && clearTimeout(timer)
                    timer = null
                    console.log('频繁操作，定时器延时执行')
                    return fn()
                }, timeout * 1.5)
            }
        }
    },
    BindTaoHandler() {//去绑定淘宝
        let _url = encodeURIComponent(window.location.href);
        let nowUrl = 'https://oauth.taobao.com/authorize?response_type=code&client_id=23233837&redirect_uri=https://passport.egou.com/taobao/callback.htm?callback=' + _url + '&view=wap'
        
        try {
            NativeBridge.handler('goBindTao',true,nowUrl)
        } catch (err) {
            console.log(err);
        }
    },
    isTaobaoBind(){//判断是否绑定淘宝
        return new Promise((resolve,reject)=>{
            isTaobaoBindApi().then(data=>{
                if (data.data === 0) {//是否为淘宝用户，0否，大于0  是
                    this.BindTaoHandler()
                    reject()
                } else {
                    resolve()
                }
            })
        })
    },
    toTaobaoHandler(url:string){
        if(NativeBridge._isEnv){
            this.isTaobaoBind().then(()=>{
                NativeBridge.handler('schemes',true,{url})
            })
        }else{
            window.location.href=url
        }
        
    },
    toTopHandler(that:Element,time:number){//回到顶部
        let currentScroll = that.scrollTop
        let speed=currentScroll/(time/60)
        let IInterval = setInterval(_=>{
            that.scrollTop=currentScroll
            currentScroll-=speed
            if(currentScroll<0){
                that.scrollTop=0
                clearInterval(IInterval)
                console.log('清除');
            }
        },16)
    },
    numToWanYuanHandler(num:number,keepNum:number):string|number{
        let newNum:number|string=num/10000
        if(newNum>1){
            newNum=newNum.toFixed(keepNum);
            return newNum+'万'
        }else{
            return num
        }
    },
    dateToStringHandler(date,rep='-'){
        return date.toLocaleDateString().replace(/\//g, rep);
    },
    btnEvent(page:string,pos:string){//按钮埋点
        //@ts-ignore
        let userInfo=user.toJS()
        let data={
            method:"click.data.generate",
            page,
            pos,
            term:2,
            site:3,
            ori_site:3,
            fuid:userInfo.userId,
            ouid:userInfo.userId,
        }
        btnEventApi(data)
    }
}