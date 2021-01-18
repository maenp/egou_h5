import {fetch as fetchPro} from "whatwg-fetch"
import qs from "qs"
import store from '@/store'
// import {USER} from "@actions/test";
// store.dispatch(USER)//更新请求的公共参数
let user=store.getState().user.toJS()
let defaultParams = { //设置默认参数
    term : user.term,
    mtag : user.deviceId,
    uid:user.userId,
    site : 1,
    chn:'',
};
console.log(defaultParams,'store')
export const get=(url:string, data:object)=>{
    if(data){
        let str="";
        for(let key in data){
            str+="&"+key+"="+data[key];
        }
        url=url+"?"+str.slice(1)
    }
    return fetchPro(url,{
        credentials:'include',
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>res.json)

};
export const post=(url:string,data:object)=>{
    return fetchPro(url,{
        method:'POST',
        credentials:'include',
        headers:{
            "content-type": "application/x-www-form-urlencoded"
        },
        body: qs.stringify(data)
    }).then(res=>res.json())
};

export const egouGet=(method:string,data)=>{
    let url="https://m.egou.com/api/rest.htm"
    data = Object.assign({...defaultParams},data);
    data.method=method
    let str="";
    for(let key in data){
        str+="&"+key+"="+data[key];
    }
    url=url+"?"+str.slice(1)

    return fetchPro(url,{
        credentials:'include',
        headers:{
            "content-type":"application/json"
        }
    }).then(res=>res.json())

};

export const jsonp = (url:string) => {
    if(!url){
        console.error('JSONP 至少需要一个url参数!')
        return;
    }
    return new Promise((resolve,reject) => {
        let time=Math.ceil(Math.random()*300);//区分多个jsonp请求
        window['jsonCallBack'+time] =(result) => {
            resolve(result)
        }
        let JSONP=document.createElement("script");
        JSONP.type="text/javascript";
        JSONP.src=`${url}&callback=jsonCallBack${time}`;
        document.getElementsByTagName("head")[0].appendChild(JSONP);
        setTimeout(() => {
            document.getElementsByTagName("head")[0].removeChild(JSONP)
        },500)
    })
}

