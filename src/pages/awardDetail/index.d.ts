
type IFanliTz_item = {
    submit_time: string,
    order_time: string,
}
interface IProps{
    term:number
}


interface IInfo {
    act_log?: string,//LOGO
    shop_logo?: string,//LOGO
    website_alias: string,//商家名称
    top_feedback: string,//返利百分比
    noFanlidesc: {
        no_feedback_desc?: string,//无返利说明
        considerations?: string,//注意事项
        notifications?: string,//通知
    },
    feedback: {
        feedbackdesc?: string,//返利比例说明
        feedbackhistory: string,
    },
    orderNotice: string,
    fanliTz: IFanliTz_item[],//返利结算通知
}