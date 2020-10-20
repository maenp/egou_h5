interface ItopShop {
    shopName: string
    orderCount: number
    orderPrice: number
    orderFanli: number
    UNION_CAMPAIGN_ID: number
}
interface IorderType {
    orderStatus: number
    orderType: string
    orderNum: number
}
interface customOrderState {
    startDate: any
    endDate: any
    customList: customListItem[]
    customInfo: customInfo
    selectCustomShow: boolean
    reqDate: {
        startDate: any
        endDate: any
    }
}
type customInfo = {
    orderNum: number
    orderMoney: number
    orderFanli: number
    orderConfirmFanli: number
}
type customListItem = {
    time: string
    orderNum: number
    orderMoney: number
    orderPrice?: number
    expFx: number
    payFx: number
}


interface chartData {
    [index: number]: chartDataItem[]
}
interface chartDataItem {
    time: string
    total: number
}