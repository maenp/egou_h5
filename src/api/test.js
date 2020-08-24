// eslint-disable-next-line no-unused-vars
import {egouGet,jsonp} from "@utils/http";



/*
* status 1 进行中 2 已结束  --
* page_no 第几页
* page_size 一页多少条
* */

export const getHomeNowList = (data) => egouGet(
    'act.cj.mice.get',
    data,
)
export const AdApi = () => jsonp('https://api.egou.com/rest?method=ad.list.get&site=0&names=APPACT_CHENGYU&term=2&v=2')