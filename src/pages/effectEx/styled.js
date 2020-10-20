import styled from 'styled-components'
export const Container = styled.div`
background-color:#F1F2F3;
min-height:100%;
width:100%;
font-size:0.2rem;
padding:0.08333rem 0.16667rem 0;

.am-list-item{
    padding-left:0;
}
.am-list-line{
    padding-right:0;
}
.am-list-content{
    position:relative;
}
.am-list-content:after{
    content:'';
    display:block;
    position:absolute;
    z-index:5;
    left:-0.16667rem;
    top:50%;
    transform:translateY(-50%);
    width:0.06667rem;
    height:0.26667rem;
    background:linear-gradient(90deg,rgba(252,182,67,1) 0%,rgba(255,26,26,1) 100%);
    border-radius:0rem 0.05rem 0.05rem 0px;
}
.am-list-item,
.am-list-line,
.am-list-content{
    overflow:visible !important;
    font-size:0.26667rem !important;
}
`
export const Order = styled.div`
padding:0.16667rem;
padding-top:0;
background-color:#Fff;
height:72vw;
border-radius:0.16667rem;
.order_head{
    align-items:center;
    justify-content:space-between;
    line-height:0.4rem;
}
.order_info{
    overflow-x:scroll;
    ul{
        width:max-content;
    }
    li{
        float:left;
        margin-right:5px;
        height:1.16667rem;
        min-width:21.3vw;
        width:max-content;
        background-color:#F4F4F4;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        border-radius:0.08333rem;
        ._info_num{
            padding:0 .1rem;
            span{
                font-size:0.26667rem;
                font-weight:800;
            }
        }
    }
    ._info_order{
        color:#Fff;
        background-color:#FFA461;
    }
}
#myChart{
    width:96vw;
    height:42.66667vw;
}
`
export const TopShop=styled.div`
margin-top:0.08333rem;
padding:0.16667rem 0.08333rem 0.23333rem;
padding-top:0;
background-color:#Fff;
border-radius:0.16667rem;
.shop_head{
    padding:0 0.0833rem;
    display:flex;
    height:0.66667rem;
    align-items:center;
    justify-content:space-between;
    ._head_selectDay{
        width:1.53333rem;
        display:flex;
        justify-content:space-between;
        li{
            width:0.75rem;
            text-align:center;
            height:0.4rem;
            background-color:#f5f5f5;
            line-height:.4rem;
            border-radius: 0.21667rem 0px 0px 0.21667rem;
        }
        li:nth-child(2){
            border-radius: 0 0.21667rem 0.21667rem 0;
        }
        .active{
            color:#Fff;
            background:#FFA461;
        }
    }
}
table{
    margin-top:0.18333rem;
    width:100%;
    font-size:0.21667rem;
    border-collapse: separate;
border-spacing: 0;
        border-radius:0.08333rem;
        overflow:hidden;
    tr:nth-child(1){
        font-weight:800;
        background-color:#f2f2f2;
    }
    tr{
        height:.5rem;
        border-radius:0.08333rem;
    }
    td{
        width:25%;
        text-align:center;
    }
}
`








export const CustomContainer=styled.div`


.am-list-item{
    padding-left:0;
    .am-list-line{
        padding-right:0;
        .am-list-extra{
            flex-basis:auto !important;
            color:#FF1403;
        }
    }
}
.am-activity-indicator{
    justify-content:center;
}

min-height:100%;
width:100%;
background-color:#F1F2F3;
.head{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#Fff;
    .date_text{
        margin:0 0.08333rem;
        display:flex;
        align-items:center;

    }
}
.info{
    overflow-x:scroll;
    background-color:#FFF;
    ul{
        padding:0 .17rem .2rem;
        width:max-content;
        overflow:hidden;
    }
    li{
        float:left;
        margin-right:5px;
        height:1.333rem;
        min-width:24vw;
        /* width:max-content; */
        background-color:#F4F4F4;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        border-radius:0.08333rem;
        ._info_name{
            padding:0 .1rem;

        }
        ._info_num{
            padding:0 .1rem;
            span{
                font-size:0.26667rem;
                font-weight:800;
            }
        }
    }
    li:nth-child(2){
        ._info_num{
            color:#FFA461;
        }
    }
    li:nth-child(3){
        ._info_num{
            color:#FF1403;
        }
    }
}
/* .info{
    display:flex;
    justify-content:space-between;
    background-color:#FFF;
    padding:0 .17rem .2rem;
    li{
        height:1.33333rem;
        width:31.5%;
        background-color:#F4F4F4;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        border-radius:0.08333rem;
        ._info_num{
            color:#59E757;
            span{
                font-size:0.31667rem;
                font-weight:800;
            }
        }
    }
    li:nth-child(2){
        ._info_num{
            color:#FFA461;
        }
    }
    li:nth-child(3){
        ._info_num{
            color:#FF1403;
        }
    }
} */
.list{
    margin:0.1rem 0.16667rem;

    ul{
        li{
            width: 100%;
            height: 1.78333rem;
            background: #FFFFFF;
            border-radius: 0.16667rem;
            padding:0 0.16667rem;
            margin-bottom:.1rem;
            .list_head{
                height:0.68333rem;
                line-height: 0.68333rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                border-bottom:1px solid #F1F2F3;
                .list_head_l{
                    font-size:0.23333rem;
                    font-weight:700;
                    span{
                        font-size:0.2rem;
                        font-weight:400;
                        margin-left:.17rem;
                    }
                }
                .list_head_r{
                    height:100%;
                    display:flex;
                    align-items:center;
                    span{
                        display:block;
                        line-height:0.33333rem;
                    }
                }
            }
            .list_info{
                display:flex;
                justify-content:space-between;
                .list_info_item{
                    width:50%;
                    height:0.83333rem;
                    margin:0.11667rem 0;
                    border-right:1px solid #F1F2F3;
                    text-align:center;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-between;
                    padding:.05rem 0;
                    ._info_item_name{
                        font-size:0.18333rem;
                    }
                    ._info_item_num{
                        color:#000;
                        font-size:0.25rem;
                        font-weight:700;
                    }
                }
                .list_info_item:last-child{
                    border-right:none;
                    ._info_item_num{
                        color:#FF1403;
                    }
                }
                .list_info_item:nth-child(3){
                    ._info_item_num{
                        color:#FFA461;
                    }
                    
                }
            }
        }
    }

}
`
export const DateSelect=styled.div`
height:38vw;
display:flex;
flex-direction:column;
align-items:center;
/* justify-content:center; */
position: relative;
padding-top:.4rem;
p{
    position: absolute;
    top:0;
    left:0;
    z-index:10
}
.selectView{
    height:80%;
    width:100%;
    overflow:hidden;
    margin-top:.3rem;
    .am-picker{
        height:100%;
        /* .am-picker-col-content{ */
            /* top:0.05rem; */
        /* } */
    }
}
`
//alt+z px->rem