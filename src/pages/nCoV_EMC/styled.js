import styled, { keyframes } from 'styled-components'





export const Item = styled.div`
height:100vh;
padding-top:59vw;
padding-bottom:7vw;
overflow:scroll;
background:url('//egouimg1.qutu.com/m_egou/hd/2020/nCoV_EMC/bg.png') #5681ff no-repeat;
background-size:contain;

-webkit-overflow-scrolling:touch;
position: relative;
z-index:1000;
.imgBox{
    position: relative;
    img{
        width:100%;
    }
    .toLink{
        position:absolute;
        height:3.5rem;
        width:100%;
        bottom:0;   
    }
}
`
export const Bg = styled.div`
    height:100vh;
    width:100%;
    .bottomTips{
        padding-bottom:0.1rem;
        .icon{
            height:0.35rem;
            width:0.35rem;
            margin-right:.1rem;
        }
        height:1rem;
        width:100vw;
        position:fixed;
        bottom:0;
        background-image:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.05),rgba(0,0,0,0.5),rgba(0,0,0,0.7));
        color:#fff;
        display:flex;
        align-items:flex-end;
        justify-content:center;
        transition:opacity 1s;
        font-size:0.26667rem;

    }
`
