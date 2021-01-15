import React, { Component } from 'react';
import { DatePicker, List, Icon, DatePickerView, Modal, Button, Toast ,ActivityIndicator} from 'antd-mobile';
import { CustomContainer,DateSelect } from './styled'
import util from './../../utils/util'
import { date } from './../../static/img/order'
import {getCustomSectionApi} from './../../api/order'

const nowTimeStamp = Date.now();
const startDate = new Date(nowTimeStamp - (30 * 86400000))
const endDate = new Date(nowTimeStamp)
class customOrder extends Component<{}, customOrderState> {
    isChangeDate: boolean;//数据是否改变
    reqDate: {
        startDate:any
        endDate:any
    };
    constructor(props) {
        super(props)
        this.state = {
            startDate,
            endDate,
            selectCustomShow:true,
            customInfo: {
                orderNum: 0,
                orderMoney: 0,
                orderFanli: 0,
                orderConfirmFanli:0,
            },
            customList: [],
            reqDate:{
                startDate,
                endDate,
            }
        }
        
    }
    setCustomDateHandler(value, date) {//选择自定义日期
        let {startDate,endDate}=this.state.reqDate
        console.log(util.dateToStringHandler(date),'---',value);
        if(value==='startDate'){
            startDate=date
        }else{
            endDate=date
        }

        this.setState({
            reqDate:{
                startDate,
                endDate
            }
        })
        this.isChangeDate=true
    }
    selectCustomShowHandler=()=>{//设置自定义日期
        let {selectCustomShow}=this.state
        this.setState({selectCustomShow:!selectCustomShow},()=>{
            if(this.isChangeDate){
                Toast.loading('Loading...', 10)
                this.getCustomSectionHandler()
                this.isChangeDate=false
            }
        })
    }
    getCustomSectionHandler(){//请求数据
        let {startDate,endDate,}=this.state.reqDate
        let dateToString = util.dateToStringHandler
        getCustomSectionApi(dateToString(startDate),dateToString(endDate)).then(data=>{
            if(data.code===0){
                Toast.hide();
                this.setState({
                    customList:data.data.chart,
                    customInfo:data.data.orderInfo,
                    startDate,
                    endDate
                })
            } else {
                Toast.fail(data.sub_msg || data.msg, 1);
                let {startDate,endDate}=this.state
                this.setState({
                    reqDate:{
                        startDate,
                        endDate
                    }
                })
            }
        })
    }
    toMyOrderHandler=()=>{//去我的订单
        window.location.href='//m.egou.com/personal/order.htm'
    }
    componentDidMount(){
        this.getCustomSectionHandler()
    }
    render() {
        let { customList, customInfo ,selectCustomShow,startDate,endDate,reqDate} = this.state
        let numToWanYuan = util.numToWanYuanHandler
        return (
            <CustomContainer>
                <div className='head' onClick={this.selectCustomShowHandler}>
                    <div className='date_text' >自定义:</div>
                    <DatePicker
                        disabled
                        mode="date"
                        value={startDate}
                        >
                        <List.Item></List.Item>
                    </DatePicker>
                    <div className='date_text'>~</div>
                    <DatePicker
                        disabled
                        mode="date"
                        value={endDate}
                    >
                        <List.Item></List.Item>
                    </DatePicker>
                    <img className='date_text' src={date} alt="" style={{height:'0.27rem',width:'auto'}}/>
                </div>
                <div className='info'>
                    <ul>
                        <li>
                            <p className='_info_name'>总订单数</p>
                            <p className='_info_num'><span>{customInfo.orderNum}单</span></p>
                        </li>
                        <li>
                            <p className='_info_name'>预计总订单金额</p>
                            <p className='_info_num'>￥<span>{customInfo.orderMoney}元</span></p>
                        </li>
                        <li>
                            <p className='_info_name'>预计总返利金额</p>
                            <p className='_info_num'>￥<span>{customInfo.orderFanli}元</span></p>
                        </li>
                        <li>
                            <p className='_info_name'>总结算金额</p>
                            <p className='_info_num'>￥<span>{customInfo.orderConfirmFanli}元</span></p>
                        </li>
                    </ul>
                </div>
                <div className='list'>
                    <ul>
                        {
                            customList.length?
                            customList.map((t, i) => (
                                <li key={t.time}>
                                    <div className='list_head'>
                                        <div className='list_head_l'>
                                            下单日期
                                        <span>{t.time}</span>
                                        </div>
                                        <div className='list_head_r' onClick={this.toMyOrderHandler}>
                                            <span> 订单明细 </span>
                                            <Icon type="right" />
                                        </div>
                                    </div>
                                    <div className='list_info'>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>订单数</p>
                                            <p className='_info_item_num'>{t.orderNum}单</p>
                                        </div>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>订单金额</p>
                                            <p className='_info_item_num'>{t.orderMoney}元</p>
                                        </div>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>预计返利收入</p>
                                            <p className='_info_item_num'>{t.expFx}元</p>
                                        </div>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>结算收入</p>
                                            <p className='_info_item_num'>{t.payFx}元</p>
                                        </div>
                                    </div>
                                </li>
                            )):
                            <ActivityIndicator text="Loading..." />
                        }
                    </ul>
                </div>

                <Modal
                    popup
                    onClose={this.selectCustomShowHandler}
                    maskClosable={true}
                    visible={selectCustomShow}
                    animationType="slide-up"
                >
                    <List renderHeader={() => <div>选择自定义日期</div>} className="popup-list">

                        <List.Item>
                            <DateSelect>
                                <p>开始时间</p>
                                <div className='selectView'>
                                <DatePickerView
                                    mode='date'
                                    value={reqDate.startDate}
                                    onChange={this.setCustomDateHandler.bind(this, 'startDate')}
                                />
                                </div>
                            </DateSelect>
                        </List.Item>
                        <List.Item>
                            <DateSelect>
                                <p>结束时间</p>
                                <div className='selectView'>
                                <DatePickerView
                                    mode='date'
                                    value={reqDate.endDate}
                                    onChange={this.setCustomDateHandler.bind(this, 'endDate')}
                                />
                                </div>
                            </DateSelect>
                        </List.Item>
                        <List.Item>
                            <Button type="primary" onClick={this.selectCustomShowHandler}>确定</Button>
                        </List.Item>
                    </List>
                </Modal>
            </CustomContainer>
        );
    }
}

export default customOrder;

