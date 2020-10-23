import styled, { keyframes } from 'styled-components'
import { bg,btn,rule } from './../../static/img/1111'


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
  height:24.7rem;
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
    background:url(${btn}) no-repeat;
    background-size:100% 100%;
    position:absolute;
    left:50%;
    margin-left:-1.09rem;
    top:3rem;
    animation:${scaleAni} 1s linear infinite;
  }
  .action_btn{
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
export const RuleWrapper = styled.div`
color:#555;
text-align:left;
p{
  margin-bottom:.2rem;
}

`