import Loadable from "react-loadable";
import Loading from "@common/loading";

export const Home  = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})