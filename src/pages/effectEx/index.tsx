/// <reference types="./effect_type" />
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import {  Picker, List } from 'antd-mobile';
import { Container,Order,TopShop} from './styled'
import F2 from '@antv/f2';
import util from './../../utils/util'

export default function Effect() {
    let chart
    let history = useHistory();
    const [selectOrderDate, setOrderDate] = useState<number[]>([1])
    const [selectOrderType, setOrderType] = useState<number>(0)
    const [selectTopShopDate, setTopShopDate] = useState<number>(1)//今日 1 昨日0
    const [topShopList,setTopShopList]=useState<ItopShop[]>([ //下单商家列表
        {
            shopName:'京东高佣',
            orderNum:908200,//订单数量
            orderMoney:1000,//订单金额
            expFx:1000,//预计返利收入
            id:1,
        },
        {
            shopName:'京东高佣',
            orderNum:10800,//订单数量
            orderMoney:1000,//订单金额
            expFx:1000,//预计返利收入
            id:2,
        },
        {
            shopName:'京东高佣',
            orderNum:10050,//订单数量
            orderMoney:1000,//订单金额
            expFx:1000,//预计返利收入
            id:3,
        },

    ])
    const [orderTypeList,setOrderTypeList]=useState<IorderType[]>([//订单报表类型列表
        {
            orderStatus:0,
            orderType:'订单数',
            orderNum:45000,
        },
        {
            orderStatus:1,
            orderType:'订单金额',
            orderNum:14800,
        },
        {
            orderStatus:2,
            orderType:'预计返利收入',
            orderNum:10480,
        },
        {
            orderStatus:3,
            orderType:'结算收入',
            orderNum:1000,
        },
    ])
    const selectList = [//订单报表日期选择
        {
            label: '今日',
            value: 1,
        },
        {
            label: '近7天',
            value: 7,
        },
        {
            label: '近30天',
            value: 30,
        },
        {
            label: '自定义',
            value: 0,
        },
    ]
    const setOrderDateHandler = (value) => {//选择日期
        if(value>0){
            setOrderDate(_ => value)
        }else{//进入自定义日期
            history.push("/customOrder");
        }
    }
    const setTopShopDateHandler = (value) => {
        setTopShopDate(_ => value)
    }
    const data = [
        [
            {
                date:'0:00',
                value:0
            },
            {
                date:'3:00',
                value:30
            },
            {
                date:'6:00',
                value:40
            },
            {
                date:'9:00',
                value:40
            },
            {
                date:'12:00',
                value:60
            },
            {
                date:'15:00',
                value:70
            },
            {
                date:'18:00',
                value:80
            },
            {
                date:'21:00',
                value:90
            },
            {
                date:'24:00',
                value:100
            },
        ],
        [
            {
                date:'0:00',
                value:0
            },
            {
                date:'3:00',
                value:26
            },
            {
                date:'6:00',
                value:48
            },
            {
                date:'9:00',
                value:26
            },
            {
                date:'12:00',
                value:91
            },
            {
                date:'15:00',
                value:95
            },
            {
                date:'18:00',
                value:15
            },
            {
                date:'21:00',
                value:49
            },
            {
                date:'24:00',
                value:130
            },
        ],
        [],
        [],
    ]
    function setChartSourceHandelr(index){
      if(chart){
        chart.changeData(data[index])
      }else{
        setChartHandler(index)
      }
      setOrderType(_=>index)
    }
    const setChartHandler=(index=0)=>{
        chart = new F2.Chart({
            id: 'myChart',
            pixelRatio: window.devicePixelRatio // 指定分辨率
        });
        chart.source(data[index], {
            value: {
                tickCount: 5,//y轴刻度数量
                min: 0
            },
            date: {
                range: [0, 1]
            }
        });
        chart.tooltip({
            alwaysShow: true,// 当移出触发区域，是否仍显示提示框内容
            showCrosshairs: true,// 是否显示辅助线，点图、路径图、线图、面积图默认展示
            showItemMarker: false,// 是否展示每条记录项前面的 marker
            showTitle: true,// 是否展示标题，默认不展示
            offsetY: 40, // y 方向的偏移
            background: {
                radius: 2,
                fill: '#FFA461',
                padding: [ 6, 10 ]
            }, // tooltip 内容框的背景样式
            crosshairsStyle: {
                stroke: '#FFA461',
                lineWidth: 2
            }, // 配置辅助线的样式
            onShow: function onShow(ev) {
                const items = ev.items[0];
                items.name = '';
                items.value = items.value+'单';
            }
        });
        chart.axis('date', {
            label: function label(text, index, total) {
              const textCfg = {
                textAlign:''
              };
              if (index === 0) {
                textCfg.textAlign = 'left';
              } else if (index === total - 1) {
                textCfg.textAlign = 'right';
              }
              return textCfg;
            }
          });
        chart.line().position('date*value');
        chart.point().position('date*value').style({
            stroke: '#fff',
            lineWidth: 1
        });
        chart.render();

    }
    
    useEffect(() => {   
        setChartHandler()
    }, [])
    let numToWanYuan=util.numToWanYuanHandler
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
                <ul className='order_info'>
                    {
                        orderTypeList.map((t,i)=>(
                        <li className={selectOrderType===i?'_info_order':''} onClick={()=>{setChartSourceHandelr(i)}} key={t.orderStatus}>
                            <p className='_info_name'>{t.orderType}</p>
                            <p className='_info_num'>{t.orderStatus?'￥':''}<span>{numToWanYuan(t.orderNum,1)+(t.orderStatus?'元':'单')}</span></p>
                        </li>
                        ))
                    }
                </ul>
                <canvas id="myChart" width="355" height="160" style={{margin:'-0.16rem 0 0 -0.35rem '}}></canvas>
            </Order>
            <TopShop>
                <div className='shop_head'>
                    <div className='am-list-content'>下单TOP商家</div>
                    <ul className='_head_selectDay'>
                        <li className={selectTopShopDate?'active':''} onClick={()=>{setTopShopDate(_ => 1)}}>今日</li>
                        <li className={selectTopShopDate?'':'active'} onClick={()=>{setTopShopDate(_ => 0)}}>昨日</li>
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
                        topShopList.map((t,i)=>(
                            <tr style={{backgroundColor:i%2?'#f2f2f2':''}} key={t.id}>
                                <td>{t.shopName}</td>
                                <td>{numToWanYuan(t.orderNum,1)}</td>
                                <td>{numToWanYuan(t.orderMoney,1)}</td>
                                <td>{numToWanYuan(t.expFx,1)}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </TopShop>

        </Container>
    )
}
