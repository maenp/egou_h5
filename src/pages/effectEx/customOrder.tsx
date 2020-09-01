import React, { Component } from 'react';
import { DatePicker, List, Icon, DatePickerView, Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { CustomContainer,DateSelect } from './styled'
import util from './../../utils/util'
import { date } from './../../static/img/order'
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
const nowTimeStamp = Date.now();
const startDate = new Date(nowTimeStamp - (30 * 86400000))
const endDate = new Date(nowTimeStamp)
class customOrder extends Component<{}, customOrderState> {
    constructor(props) {
        super(props)
        this.state = {
            startDate,
            endDate,
            selectCustomShow:true,
            customInfo: {
                allOrderNum: 9999,
                expAllOrderMoney: 95845,
                expAllFxMoney: 84651,
            },
            customList: [
                {
                    orderDate: '2020-07-15',//下单日期
                    orderNum: 1000,//订单数
                    orderMoney: 10000,//订单金额
                    expFx: 1000,//预计返利
                    payFx: 500,//结算收入
                    key: 1,
                },
                {
                    orderDate: '2020-07-16',//下单日期
                    orderNum: 2000,//订单数
                    orderMoney: 20000,//订单金额
                    expFx: 2000,//预计返利
                    payFx: 500,//结算收入
                    key: 2,
                },
                {
                    orderDate: '2020-07-17',//下单日期
                    orderNum: 3000,//订单数
                    orderMoney: 30000,//订单金额
                    expFx: 3000,//预计返利
                    payFx: 500,//结算收入
                    key: 3,
                },
            ]
        }
    }
    setCustomDateHandler(value, date) {//选择自定义日期
        if (value === 'startDate') {
            this.setState({
                startDate: date
            })
        } else if (value === 'endDate') {
            this.setState({
                endDate: date
            })
        }
    }
    selectCustomShowHandler=()=>{
        let {selectCustomShow}=this.state
        this.setState({selectCustomShow:!selectCustomShow})
    }
    render() {
        let { customList, customInfo ,selectCustomShow} = this.state
        let numToWanYuan = util.numToWanYuanHandler
        return (
            <CustomContainer>
                <div className='head' onClick={this.selectCustomShowHandler}>
                    <div className='date_text' >自定义:</div>
                    <DatePicker
                        mode="date"
                        value={this.state.startDate}
                        >
                        <List.Item></List.Item>
                    </DatePicker>
                    <div className='date_text'>~</div>
                    <DatePicker
                        mode="date"
                        value={this.state.endDate}
                    >
                        <List.Item></List.Item>
                    </DatePicker>
                    <img className='date_text' src={date} alt="" style={{height:'0.27rem',width:'auto'}}/>
                </div>
                <div className='info'>
                    <li>
                        <p className='_info_name'>总订单数</p>
                        <p className='_info_num'><span>{numToWanYuan(customInfo.allOrderNum, 1)}单</span></p>
                    </li>
                    <li>
                        <p className='_info_name'>预计总订单金额</p>
                        <p className='_info_num'>￥<span>{numToWanYuan(customInfo.expAllFxMoney, 1)}元</span></p>
                    </li>
                    <li>
                        <p className='_info_name'>预计总返利金额</p>
                        <p className='_info_num'>￥<span>{numToWanYuan(customInfo.expAllOrderMoney, 1)}元</span></p>
                    </li>
                </div>
                <div className='list'>
                    <ul>
                        {
                            customList.map((t, i) => (
                                <li key={t.orderDate}>
                                    <div className='list_head'>
                                        <div className='list_head_l'>
                                            下单日期
                                        <span>{t.orderDate}</span>
                                        </div>
                                        <div className='list_head_r'>
                                            <span> 订单明细 </span>
                                            <Icon type="right" />
                                        </div>
                                    </div>
                                    <div className='list_info'>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>订单数</p>
                                            <p className='_info_item_num'>{numToWanYuan(t.orderNum, 1)}单</p>
                                        </div>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>订单金额</p>
                                            <p className='_info_item_num'>{numToWanYuan(t.orderMoney, 1)}元</p>
                                        </div>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>预计返利收入</p>
                                            <p className='_info_item_num'>{numToWanYuan(t.expFx, 1)}元</p>
                                        </div>
                                        <div className='list_info_item'>
                                            <p className='_info_item_name'>结算收入</p>
                                            <p className='_info_item_num'>{numToWanYuan(t.payFx, 1)}元</p>
                                        </div>
                                    </div>
                                </li>
                            ))
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
                                    value={this.state.startDate}
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
                                    value={this.state.endDate}
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

