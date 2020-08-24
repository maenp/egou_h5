import {JD618,Taobao618,awardDetail,nCoV_EMC} from "@pages";

export default [
    {
        key: "/awardDetail",
        path: "/awardDetail",
        name: "awardDetail",
        component: awardDetail,
        meta: {
            title:'返利详情'
        },
        children:[
        ]
    },
    {
        key: "/JD618",
        path: "/JD618",
        name: "JD618",
        component: JD618,
        meta: {
            title:' 京东618攻略'
        },
        children:[
        ]
    },
    {
        key: "/Taobao618",
        path: "/Taobao618",
        name: "Taobao618",
        component: Taobao618,
        meta: {
            title:'淘宝618攻略'
        },
        children:[
        ]
    },
    {
        key: "/nCoV_EMC",
        path: "/nCoV_EMC",
        name: "nCoV_EMC",
        component: nCoV_EMC,
        meta: {
            title:'新冠检测攻略'
        },
    },
]