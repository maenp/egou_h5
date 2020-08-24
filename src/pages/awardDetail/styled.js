import styled from 'styled-components'
import { toRight, notifications } from './../../static/img/awardDetail'
import { toTop } from './../../static/img/20_618'
export const Header = styled.div`
position:fixed;
width:100%;
background:#fff;
z-index:3;
._head_info{
        height:2.5rem;
        transition:all 1s;
        color:#333333;
        letter-spacing:1px;
    ._info_logo{
        position: absolute;
        transition:all 1s;
        right:0;
        left:0;
        margin:0 auto;
        /* left:50%;
        transform:translateX(-50%); */
        top:0.5rem;
        width:1.86667rem; 
        height:0.66667rem;
        border-radius:0.08333rem;
        box-shadow:0.05rem 0.1rem 0.1rem 0 #F3F3F3;
    }
    ._info_name{
        transition:all 1s;
        position: absolute;
        left:50%;
        transform:translateX(-50%);
        top:1.4rem;
        font-size:0.23333rem;
    }
    ._info_maxAward{
        transition:all 1s;
        position: absolute;
        right:0;
        left:0;
        margin:0 auto;
        top:1.65rem;
        
        font-size:0.3333rem;
        font-weight:800;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        height:0.86667rem;
        ._info_maxAward_box{
            text-align:center;
        }
        span{
            color:#FC2F2F;
        }
    }

}
.isAnimation{
        box-shadow:0px 0.06667rem 0.1rem 0px rgba(241,242,243,0.5);
        height:1.5rem;
        ._info_logo{
            left:-3.7rem;
        }
        ._info_name{
            opacity:0;
            top:.2rem;
        }
        ._info_maxAward{
            top:.42rem;
            width:3.33333rem;
            right:-2.5rem;
        }
}
.toTop{
    width:0.8rem;
    height:0.8rem;
    background:url(${toTop}) no-repeat;
    background-size:cover;
    position: fixed;
    right:0.16667rem;
    bottom:23pt;
}

`

export const Container = styled.div`
padding:2.6rem 0.16667rem 0.6rem 0.16667rem;
box-sizing:border-box;
.message{
    padding:0.16667rem;
    width:5.91667rem;
    background:rgba(253,226,226,1);
    border-radius:0.08333rem;
    margin-bottom:0.26667rem;
    line-height:1.3;
    h3{
        color:#FF1A1A;
        font-size:0.23333rem;
    }
}
ul{
    color:#333;
    li{
        h3{
            font-size:0.26667rem;
            position: relative;
            width:50%;
            left:0.5rem;
            margin-bottom:0.21rem;
        }
        h3:before{
            content:attr(data-index);
            display:flex;
            position:absolute;
            left:-0.46667rem;
            justify-content:center;
            align-items:center;
            font-weight:400;
            width:0.26667rem;
            height:0.26667rem;
            background:linear-gradient(90deg,rgba(252,182,67,1) 0%,rgba(255,26,26,1) 100%);
            border-radius:0.05rem;
            top:0.05rem;
            color:#fff;
        }
        
        ._con_progess_box{
            margin-top:0.18333rem;
            height:.5rem;
            width:100%;
            display:flex;
            justify-content:space-between;
            ._progess_box_item{
                position: relative;
                height:1.16667rem;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                width:0.9rem;
                text-align:center;
                img{
                    flex-shrink:0;
                    height:.5rem;
                    width:.5rem;
                }
                span{
                    display:block;
                    width:1.2rem;
                    height:0.6rem;
                    font-size:0.2rem;
                }
            }
            ._progess_box_item:nth-of-type(-n+3):before{
                position:absolute;
                right:-0.71333rem;
                top:0.08333rem;
                content:'跳转商城';
                display:block;
                color:#999;
                font-size:0.16667rem;
            }
            ._progess_box_item:nth-of-type(2):before{
                content:'订单返回';
            }
            ._progess_box_item:nth-of-type(3):before{
                content:'确认结算';
            }
            ._progess_box_item:nth-of-type(-n+3):after{
                position:absolute;
                right:-0.88333rem;
                top:0.35rem;
                content:'';
                display:block;
                height:0.11667rem;
                width:1rem;
                background:url(${toRight}) no-repeat;
                background-size:contain;
                color:#999;
                font-size:0.16667rem;
            }

        }
        .notifications{
            padding-left:0.05rem;
            margin-top:0.83333rem;
            display:flex;
            justify-content:space-between;
            align-items:flex-start;
            img{
                margin-top:.05rem;
                height:0.2rem;
                width:0.2rem;
            }
            p{
                width:5.41667rem;
            }
        }
    }
    ._con_progess{
            padding-bottom:0.33333rem;
    }
    ._con_explain{
        overflow:hidden;
        margin-top:0.41667rem;
        /* h3:before{
            content:'2'
        } */
        #explainBox{
            padding-left:0.05rem;
        }
    }
    ._con_giveMessage{
        margin-top:0.25rem;
        /* h3:before{
            content:'3'
        } */
        ul{
            .item{
                padding-left:.05rem;
                color:#000;
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:.1rem;

                height: 0.6rem;
                line-height: 0.6rem;
                img{
                    margin-right:0.23333rem;
                    height:0.2rem;
                    width:0.2rem;
                }
                P{
                    flex:1;
                }
            }
        }
    }
    ._con_noAwardExp{
        margin-top:0.3rem;
        /* h3:before{
            content:'4'
        } */
    }
    #noAwardExpBox,#elseAffairBox{
        padding-left:0.05rem;
        line-height:0.29rem;
        /* p{
            position: relative;
        }
        p:before{
            content:'';
            height:0.2rem;
            width:0.2rem;
            background:url(${notifications});
            background-size:contain;
            display:block;
            position:absolute;
            top:0.05rem;
            left:-0.4rem;

        } */
    }
    ._con_elseAffair{
        margin-top:0.5rem;
        /* h3:before{
            content:'5'
        } */
    }
}


`