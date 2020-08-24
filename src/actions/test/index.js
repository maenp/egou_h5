export const ADD_NUM={
    type:'add_num'
}
export const MINUS_NUM = {
    type: 'minus_num'
}
export const USER = {
    type: 'user_update'
}


export const CHANGE_NUM=(value)=>{
    return (dispatch)=>{
    //处理异步请求
    //...
        dispatch({
            type: 'change_num',
            value
        })
    }
}
