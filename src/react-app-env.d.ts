/// <reference types="react-scripts" />

interface LocJs{
    showRewardAlert:(obj:string)=>{}
    showRewardedVideoADWithSlotId:(adId:string)=>{}
    getRuid:()=>{}
    [key:string]:(param?:string)=>{}
}

interface MessageHandlers{
    
}

interface Window{
    locJs:LocJs
    webkit:{
        messageHandlers:MessageHandlers
    }
    prompt:{
        nativeMethod:string
        param:any
    }

    nativeExpressRewardedVideoAdDidClose:any
    Callback:Function
    eruda:{
        init:Function
    }
}