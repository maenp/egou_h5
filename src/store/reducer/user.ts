import { handleActions} from "redux-actions";
import {fromJS} from 'immutable'
import nativeBridge from '@utils/nativeBridge'
const NativeBridge = nativeBridge.getInstance()
const defaultState =fromJS({
    username: "未登录",
    userPic: "",
    n: 111,


    userId: '',
    term: '',//3安卓4ios
    deviceId: ''//设备id
})
export default handleActions({
    user_update:(state)=>{
        return state.updateIn(['term'],()=>NativeBridge.handler('getTerm')||3)
                    .updateIn(['deviceId'],()=>NativeBridge.handler('getDeviceID')||22435454)
                    .updateIn(['userId'],()=>NativeBridge.handler('getRuid')||100000)//1642297
                    // .updateIn(['userId'],(state)=>100000)//1642297
    }
},defaultState)