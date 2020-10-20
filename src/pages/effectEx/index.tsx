/// <reference types="./effect_type" />
import React, { useState, useEffect, useRef } from 'react'
import { useHistory } from "react-router-dom";
import { Picker, List, Toast } from 'antd-mobile';
import { Container, Order, TopShop } from './styled'
import F2 from '@antv/f2';
import util from './../../utils/util'
import { getChartInfoApi, getTopShopApi } from './../../api/order'

let chart
export default function Effect() {
    let history = useHistory();
    const [selectOrderDate, setOrderDate] = useState<number[]>([1])//报表日期下标

    const latestOrderDateIndex = useRef<number>(1);
    latestOrderDateIndex.current = selectOrderDate[0];

    const [selectOrderType, setOrderType] = useState<number>(0)//报表类型下标
    const latestOrderType = useRef<number>(0);
    latestOrderType.current = selectOrderType;



    const [selectTopShopDate, setTopShopDate] = useState<number>(1)//今日 1 昨日0
    const [topShopList, setTopShopList] = useState<ItopShop[]>([ //下单商家列表
        // {
        //     shopName: '京东高佣',
        //     orderCount: 908200,//订单数量
        //     orderPrice: 1000,//订单金额
        //     orderFanli: 1000,//预计返利收入
        //     UNION_CAMPAIGN_ID: 1,
        // },

    ])
    const [orderTypeList, setOrderTypeList] = useState<IorderType[]>([//订单报表类型列表
        {
            orderStatus: 0,
            orderType: '订单数',
            orderNum: 0,
        },
        {
            orderStatus: 1,
            orderType: '订单金额',
            orderNum: 0,
        },
        {
            orderStatus: 2,
            orderType: '预计返利收入',
            orderNum: 0,
        },
        {
            orderStatus: 3,
            orderType: '结算收入',
            orderNum: 0,
        }
    ])
    const selectList = [//订单报表日期选择列表
        {
            label: '今日',
            value: 1,
            distance: 3,
        },
        {
            label: '昨日',
            value: 2,
            distance: 3,
        },
        {
            label: '近7天',
            value: 3,
            distance: 1,
        },
        {
            label: '近30天',
            value: 4,
            distance: 4,
        },
        {
            label: '自定义',
            value: 0,
            distance: 1,
        },
    ]

    const [data, setData] = useState<chartData>([[], [], [], []])
    const latestData = useRef<chartData>(data);
    latestData.current = data;

    const setOrderDateHandler = (value) => {//选择日期
        if (value > 0) {
            getChartInfoHandler(value)
        } else {//进入自定义日期
            history.push("/customOrder");
        }
    }
    const setTopShopDateHandler = (value) => {
        getTopShopHandler(value)
    }
    function setChartSourceHandelr(index?) {//创建表格or表格数据改变
        let isIndex = typeof index === 'number'
        if (chart) {
            chart.changeData(latestData.current[isIndex ? index : latestOrderType.current])
        } else {
            setChartHandler()
        }
        if (isIndex) setOrderType(_ => index)
    }
    const getTopShopHandler = (value = selectTopShopDate) => {//top商家接口
        let dataType = value ? 1 : 2
        Toast.loading('Loading...', 10);
        getTopShopApi(dataType).then(data => {
            if (data.code === 0) {
                Toast.hide();
                setTopShopDate(_ => value)
                setTopShopList(() => data.data.top)
            } else {
                Toast.fail(data.sub_msg || data.msg, 1);
            }
        })
    }
    const getChartInfoHandler = (dateIndex?) => {//表格数据接口
        Toast.loading('Loading...', 10);
        let dateType = dateIndex || selectOrderDate
        getChartInfoApi(dateType[0]).then(data => {
            if (data.code === 0) {
                setOrderDate(_ => dateType)
                Toast.hide();
                // console.log(data);
                let chart = data.data.chart
                let arr: chartData = []
                arr[0] = chart.orderNum
                arr[1] = chart.orderMoney
                arr[2] = chart.expFx
                arr[3] = chart.payFx
                setData(() => arr)
                setChartSourceHandelr()
                let info = data.data.orderInfo
                setOrderTypeList(() => [
                    {
                        orderStatus: 0,
                        orderType: '订单数',
                        orderNum: info.orderNum,
                    },
                    {
                        orderStatus: 1,
                        orderType: '订单金额',
                        orderNum: info.orderMoney,
                    },
                    {
                        orderStatus: 2,
                        orderType: '预计返利收入',
                        orderNum: info.expFx,
                    },
                    {
                        orderStatus: 3,
                        orderType: '结算收入',
                        orderNum: info.payFx,
                    },
                ])

            } else {
                Toast.fail(data.sub_msg || data.msg, 1);
            }

        })
    }
    const setChartHandler = () => {         
        chart = new F2.Chart({
            id: 'myChart',
            pixelRatio: window.devicePixelRatio // 指定分辨率
        });
        chart.source(latestData.current[latestOrderType.current], {
            total: {
                tickCount: 5,//y轴刻度数量
                min: 0
            },
            time: {
                range: [0, 1]//x轴范围
            }
        });
        chart.axis('total', {
            label: function label(text, index, total) {
                let textCfg = { text };
                textCfg.text = util.numToWanYuanHandler(text, 1);  // 文本格式化处理
                return textCfg;
            }
        });
        chart.axis('time', {
            label: function label(text, index, total) {
                let diatance: number = selectList[latestOrderDateIndex.current - 1].distance //y轴显示间隔
                let textCfg = { text };
                if (index % diatance !== 0) {
                    textCfg.text = ''
                }
                return textCfg;
            }
        });
        chart.tooltip({
            alwaysShow: true,// 当移出触发区域，是否仍显示提示框内容
            showCrosshairs: true,// 是否显示辅助线，点图、路径图、线图、面积图默认展示
            showItemMarker: false,// 是否展示每条记录项前面的 marker
            showTitle: true,// 是否展示标题，默认不展示
            offsetY: 30, // y 方向的偏移
            triggerOn: ['touchstart', 'touchmove'],// tooltip 出现的触发行为
            background: {
                radius: 2,
                fill: '#FFA461',
                padding: [6, 10]
            }, // tooltip 内容框的背景样式
            crosshairsStyle: {
                stroke: '#FFA461',
                lineWidth: 2
            }, // 配置辅助线的样式
            onShow: function onShow(ev) {
                const items = ev.items[0];
                items.name = '';
                items.value = items.value + (latestOrderType.current ? '元' : '单');
            }
        });
        chart.line().position('time*total');
        chart.point().position('time*total').style({
            stroke: '#fff',
            lineWidth: 1
        });
        chart.render();
    }

    useEffect(() => {
        getChartInfoHandler()
        getTopShopHandler()
        return()=>{
            if(chart){
                chart.destroy()
                chart=null
            }
        }
    }, [])
    return (
        <Container>
            <Order>
                <div className="order_head">
                    <Picker
                        data={selectList}
                        value={selectOrderDate}
                        cols={1}
                        onChange={setOrderDateHandler}
                    >
                        <List.Item arrow="horizontal">订单报表</List.Item>
                    </Picker>
                </div>
                <div className='order_info'>
                    <ul>
                        {
                            orderTypeList.map((t, i) => (
                                <li className={selectOrderType === i ? '_info_order' : ''} onClick={() => { setChartSourceHandelr(i) }} key={t.orderStatus}>
                                    <p className='_info_name'>{t.orderType}</p>
                                    <p className='_info_num'>{t.orderStatus ? '￥' : ''}<span>{t.orderNum + (t.orderStatus ? '元' : '单')}</span></p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <canvas id="myChart" style={{ margin: '-0.16rem 0 0 -0.3rem ' }}></canvas>
            </Order>
            <TopShop>
                <div className='shop_head'>
                    <div className='am-list-content'>下单TOP商家</div>
                    <ul className='_head_selectDay'>
                        <li className={selectTopShopDate ? 'active' : ''} onClick={() => { setTopShopDateHandler(1) }}>今日</li>
                        <li className={selectTopShopDate ? '' : 'active'} onClick={() => { setTopShopDateHandler(0) }}>昨日</li>
                    </ul>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>商家名称</td>
                            <td>订单量</td>
                            <td>订单金额</td>
                            <td>预计返利收入</td>
                        </tr>
                        {
                            topShopList.map((t, i) => (
                                <tr style={{ backgroundColor: i % 2 ? '#f2f2f2' : '' }} key={t.UNION_CAMPAIGN_ID}>
                                    <td>{t.shopName}</td>
                                    <td>{t.orderCount}</td>
                                    <td>{t.orderPrice}</td>
                                    <td>{t.orderFanli}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </TopShop>
        </Container>
    )
}
