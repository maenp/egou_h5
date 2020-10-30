import styled, { keyframes } from 'styled-components'
import { toJd, toTm, btn, toTop } from './../../static/img/20_618'

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

export const BottomC = styled.div`
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


