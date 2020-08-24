import {egouGet,jsonp} from "./../utils/http";
export const isTaobaoBindApi = (sid:number) => egouGet(
    'shop.h.info.get',{sid}
)