import {egouGet,jsonp} from "./../utils/http";
export const getChartInfoApi = (dateType:number) => egouGet(
    'act.order.chart.get',{dateType}
)
export const getTopShopApi = (dateType:number) => egouGet(
    'act.order.top.get',{dateType,top:5}
)
export const getCustomSectionApi = (st:string,ed:string) => egouGet(
    'act.order.section.get',{st,ed}
)