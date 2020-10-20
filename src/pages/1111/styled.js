import styled, { keyframes } from 'styled-components'
import { toEnd, jd, tianmao, toJd, toTm, btn, toRedBtn, toTop } from './../../static/img/20_618'


const shake = keyframes`
  0%{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
  10%{
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
  }
  20%{
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  30%{
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  40%{
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  50%{
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  60%{
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }
  70%{
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
  80%{
    -webkit-transform: rotate(-8deg);
    transform: rotate(-8deg);
  }
  90%{
    -webkit-transform: rotate(8deg);
    transform: rotate(8deg);
  }
  100%{
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }
`

export const Bottom = styled.div`
.toTop{
    width:0.8rem;
    height:0.8rem;
    background:url(${toTop}) no-repeat;
    background-size:cover;
    position: fixed;
    right:0.16667rem;
    top:70%;

}
.toElse{
    height:1.23333rem;
    width:0.95rem;
    background:url(${toJd}) no-repeat;
    background-size:contain;
    position: fixed;
    right:0.16667rem;
    top:55%;
    animation:${shake} 1s infinite;
}
.toElse1{
  background-image:url(${toTm});
}
.getAwardCard{
    position:fixed;
    bottom:0;
    height:0.8rem;
    width:100%;
    background-color:#fff;
    color:#FB441B;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 0.15rem;
    font-size:0.22rem;
    .btn{
      font-size:0.23333rem;
      color:#fff;
      height:0.66667rem;
      width:2.58333rem;
      background:url(${btn}) no-repeat;
      background-size:contain;
      display:flex;
      justify-content:center;
      align-items:center;
    }
}
`
export const Taobao = styled.div`
position: relative;
margin-top:-.5rem;
background:url(${tianmao}) #DE1A1D no-repeat;
background-size:contain;
width:100%;
height:22.4rem;
scroll-behavior:smooth;


.toElse{
  height:1.23333rem;
  width:0.95rem;
  background:url(${toJd}) no-repeat;
  background-size:contain;
  position: fixed;
  right:0.16667rem;
  top:55%;
  animation:${shake} 1s infinite;
}
.daojishi{
    position: absolute;
    top:7.75rem;
    left:50%;
    transform:translateX(-50%);
    ul{
        color:#fff;
        width:3.25rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        li{
            height:0.33333rem;
            width:0.33333rem;
            background:#fff;
            border-radius:0.08333rem;
            display:flex;
            justify-content:center;
            align-items:center;
            color:#EC383F;
        }
        li:nth-of-type(2){
            margin-left:0.05rem;
        }
    }
}
`
export const JD = styled(Taobao)`
background-image:url(${jd});
height:19rem;
.toElse{
}

`



const btnAnimation = keyframes`
0%, 100% {
    transform: scale(.9);
}
50% {
    transform: scale(1.1);
}
`
export const ToRed = styled.div`
width:3.08333rem;
height:1.23333rem;
animation:${btnAnimation} 0.7s infinite;
background:url(${toRedBtn});
background-size:contain;
position: absolute;
left:0;
right:0;
margin:0 auto;
top:6.55rem;
color:#F72A44;
font-size:0.26667rem;
font-weight:600;
display:flex;
justify-content:center;
align-items:center;
padding-bottom:.05rem;
`
export const ToEnd = styled(ToRed)`
animation:none;
color:#bebebe;
background-image:url(${toEnd});
`