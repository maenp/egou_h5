import {egouGet} from "@utils/http";
//判断是否绑定淘宝
export const isTaobaoBindApi = () => egouGet(
    'act.tbuser.state.get',
)