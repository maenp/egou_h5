import styled, { keyframes } from 'styled-components'
import { toEnd, tianmao,toRedBtn } from '@/static/img/20_618'
import { jd_bg } from '@/static/img/2121'
import { bg,btn as getbtn,rule } from '@/static/img/2121'

export const Taobao = styled.div`
position: relative;
margin-top:-.5rem;
background:url(${tianmao}) #DE1A1D no-repeat;
background-size:contain;
width:100%;
height:22.4rem;
scroll-behavior:smooth;

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
background-image:url(${jd_bg});
height:19rem;

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
top:6.15rem;
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




/******************* */



const scaleAni = keyframes`
  0%,100%{
    transform: scale(0.9);
  }
  50%{
    transform: scale(1.2);
  }
`

export const Wrapper = styled.div`
  background:url(${bg}) no-repeat #EE1436;
  background-size:100%;
  width:100%;
  height:20.7rem;
  position:relative;
  .rule{
    height:0.36667rem;
    width:1rem;
    position:absolute;
    right:.2rem;
    top:.2rem;
    background:url(${rule}) no-repeat;
    background-size:100% 100%;
  }
  .get_btn{
    height: 2.17rem;
    width: 2.17rem;
    background:url(${getbtn}) no-repeat;
    background-size:100% 100%;
    position:absolute;
    left:50%;
    margin-left:-1.09rem;
    top:3rem;
    animation:${scaleAni} 1s linear infinite;
  }
  .copyText{
    color:#010101;
    font-size:0.2rem;
    position:absolute;
    top:9.1rem;
    width:5.45rem;
    left:0.51667rem;
  }
  .copyInp{
    /* display:none; */
    opacity:0;
  }

`
export const ActionBtn = styled.div`
  position:absolute;
  left: 50%;
  transform:translateX(-50%);
  top:7.7rem;
  width: 5.75rem;
  height: 0.66667rem;
  display:flex;
  justify-content:space-between;
  div{
    width: 2.75rem;
    height: 100%;
    border-radius: 20px;
    color:#FEF1B0;
    font-size:0.26667rem;
    
    border: 2px solid #FDF1B0;
    border-radius: 20px;
    line-height:0.66667rem;
    text-align:center;
    font-weight:600;
  }
  .action{
    border:none;
    background: linear-gradient(0deg, #FDC004 36%, #FFF68C 100%);
    box-shadow: 1px 8px 7px 0px rgba(195, 41, 13, 0.35);
    color:#EA2400;

  }
`
export const RuleWrapper = styled.div`
color:#555;
text-align:left;
p{
  margin-bottom:.2rem;
}

`