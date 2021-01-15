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
    shareEvent:Function 
    nativeExpressRewardedVideoAdDidClose:any
    Callback:Function
    eruda:{
        init:Function
    }
}


interface IRoute{
    key: string;
    path: string;
    name: string;
    component: (React.ComponentClass<{}, any> & LoadableExport.LoadableComponent) | (React.FunctionComponent<{}> & LoadableExport.LoadableComponent);
    meta: {
        
    };
    children: IRoute[];
}