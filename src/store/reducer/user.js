import {handleActions} from "redux-actions";
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
    // add_num:(state,action)=>{
    //     let newState = Object.assign({},state);
    //     newState.n++
    //     return newState;
    // },
    add_num:(state)=>{
        console.log('add')
        return state.updateIn(['n'],(state)=>++state);
    },
    minus_num:(state)=>{
        return state.updateIn(['n'],(state)=>--state);
    },
    change_num:(state,action)=>{
        console.log(action)
        return state.updateIn(['n'],(state)=>action.value);
    },
    user_update:(state)=>{
        return state.updateIn(['term'],(state)=>NativeBridge.handler('getTerm')||3)
                    .updateIn(['deviceId'],(state)=>NativeBridge.handler('getDeviceID')||22435454)
                    .updateIn(['userId'],(state)=>NativeBridge.handler('getRuid')||100000)//1642297
                    // .updateIn(['userId'],(state)=>100000)//1642297
    }
},defaultState)