import Loadable from "react-loadable";
import Loading from "@common/loading";

export const awardDetail  = Loadable({
    loader:()=>import("./awardDetail"),
    loading:Loading,
    // delay: 100,
    // timeout: 10000
})
export const noPage  = Loadable({
    loader:()=>import("./noPage/noPage"),
    loading:Loading
})
export const myOrder  = Loadable({
    loader:()=>import("./myOrder"),
    loading:Loading
})
export const effectEx  = Loadable({
    loader:()=>import("./effectEx"),
    loading:Loading
})
export const customOrder  = Loadable({
    loader:()=>import("./effectEx/customOrder"),
    loading:Loading
})
// export const JD618  = Loadable({
//     loader:()=>import("./618/JD"),
//     loading:Loading
// })
// export const Taobao618  = Loadable({
//     loader:()=>import("./618/taobao"),
//     loading:Loading
// })
// export const double11  = Loadable({
//     loader:()=>import("./1111/taobao"),
//     loading:Loading
// })
// export const JDdouble11  = Loadable({
//     loader:()=>import("./1111/JD"),
//     loading:Loading
// })
// export const TaoDouble12  = Loadable({
//     loader:()=>import("./1212/taobao"),
//     loading:Loading
// })
// export const JDdouble12  = Loadable({
//     loader:()=>import("./1212/JD"),
//     loading:Loading
// })
export const TaoDouble21  = Loadable({
    loader:()=>import("./2121/taobao"),
    loading:Loading
})
export const JDdouble21  = Loadable({
    loader:()=>import("./2121/JD"),
    loading:Loading
})