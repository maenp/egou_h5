import {egouGet,get} from "@utils/http";
//判断是否绑定淘宝
export const isTaobaoBindApi = () => egouGet(
    'act.tbuser.state.get',
)
export const btnEventApi = (data) => get(
    'https://union.egou.com/rest',data
)

export const luckDrawApi = (data) => egouGet(
    'act.luck.draw',data
)