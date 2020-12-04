import {myOrder,effectEx,customOrder,double11,JDdouble11,
    TaoDouble12
} from "@pages";

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
        key: "1111",
        path: "/1111",
        name: "1111",
        component: double11,
        meta: {
            title:'超级红包'
        },
    },
    {
        key: "JD1111",
        path: "/JD1111",
        name: "JD1111",
        component: JDdouble11,
        meta: {
            title:'京东双11京享红包'
        },
    },
    {
        key: "1212",
        path: "/1212",
        name: "1212",
        component: TaoDouble12,
        meta: {
            title:'超级红包'
        },
    },
]