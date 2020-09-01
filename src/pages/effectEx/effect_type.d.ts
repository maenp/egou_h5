interface ItopShop{
    shopName:string
    orderNum:number
    orderMoney:number
    expFx:number
    id:number
}
interface IorderType{
    orderStatus:number
    orderType:string
    orderNum:number
}
interface customOrderState{
    startDate:any
    endDate:any
    customList:customListItem[]
    customInfo:customInfo
    selectCustomShow:boolean
}
type customInfo={
    allOrderNum:number
    expAllOrderMoney:number
    expAllFxMoney:number
}
type customListItem={
    orderDate:string
    orderNum:number
    orderMoney:number
    expFx:number
    payFx:number
    key:number
}