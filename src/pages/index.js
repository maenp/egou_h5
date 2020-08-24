import Loadable from "react-loadable";
import Loading from "@common/loading";

export const JD618  = Loadable({
    loader:()=>import("./618/JD"),
    loading:Loading
})
export const Taobao618  = Loadable({
    loader:()=>import("./618/taobao"),
    loading:Loading
})
export const awardDetail  = Loadable({
    loader:()=>import("./awardDetail"),
    loading:Loading
})
export const nCoV_EMC  = Loadable({
    loader:()=>import("./nCoV_EMC"),
    loading:Loading
})
export const noPage  = Loadable({
    loader:()=>import("./noPage/noPage"),
    loading:Loading
})