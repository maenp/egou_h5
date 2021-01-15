import {
    myOrder,effectEx,customOrder,awardDetail
} from "@/pages";

export default [
    {
        key: "myOrder",
        path: "/myOrder",
        name: "myOrder",
        component: myOrder,
        meta: {
            title:'我的订单'
        },
        children:[
        ]
    },
    {
        key: "effectEx",
        path: "/effectEx",
        name: "effectEx",
        component: effectEx,
        meta: {
            title:'效果报表'
        },
    },
    {
        key: "customOrder",
        path: "/customOrder",
        name: "customOrder",
        component: customOrder,
        meta: {
            title:'效果报表'
        },
    },
    {
        key: "/awardDetail",
        path: "/awardDetail",
        name: "awardDetail",
        component: awardDetail,
        meta: {
            title:'返利详情'
        },
    },
]