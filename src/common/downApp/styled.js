import styled from 'styled-components'
export const Container=styled.div`
a {
  text-decoration: none;
}
.appboxwrap {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 998;
}
.filter_bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr='#8b000000',EndColorStr='#8b000000');
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  justify-items: center;
  align-items: center;
}
.layer_main_bg {
  width: 4.5rem;
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -3rem;
  margin-left: -2.25rem;
  z-index: 999;
}
.layer_main {
  width: 4.5rem;
  position: relative;
  padding-top: 0.6rem;
}
.layer_main .layer_close {
  width: 0.4rem;
  height: 0.4rem;
  background: url(//egouimg1.qutu.com/m_egou/hd/2017/newuservip/layer_close.png)
    no-repeat left top;
  background-size: 100%;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}
.layer_main .layer_nr {
  width: 4.5rem;
  min-height: 0.8rem;
  background: #fff;
  border-radius: 0.2rem;
  padding: 0.4rem 0 0.36rem;
  color: #666;
}
.layer_main .layer_nr p {
  padding-top: 0.08rem;
}
.layer_main .layer_nr .small {
  font-size: 0.24rem;
  text-align: center;
}
.layer_main .layer_nr .big {
  font-size: 0.4rem;
  text-align: center;
  color: #333;
}
.layer_main .layer_nr .red {
  color: #ff6a00;
}
.layer_main .layer_nr .one_oline {
  font-size: 0.3rem;
  text-align: center;
  color: #333;
}
.layer_main .layer_nr .pic {
  width: 1.6rem;
  height: 1.6rem;
  margin: 0.4rem auto 0;
}
.layer_main .layer_nr .btn {
  width: 3.8rem;
  height: 0.7rem;
  line-height: 0.7rem;
  margin: 0.3rem auto 0;
  cursor: pointer;
  background: #ff6a00;
  font-size: 0.32rem;
  color: #fff;
  display: block;
  text-align: center;
  border-radius: 0.875rem;
}
.layer_main .download {
  display: block;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-top: 0.36rem;
  font-size: 0.32rem;
  text-align: center;
  border-top: 1px solid #eee;
  color: #ff6a00;
}
.layer_main .layer_nr.download_bg {
  padding-bottom: 0;
}
.filter_bgd {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  filter: progid:DXImageTransform.Microsoft.Gradient(GradientType=0,StartColorStr='#8b000000',EndColorStr='#8b000000');
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
.loading {
  text-align: center;
  color: #000;
  height: 0.4rem;
  line-height: 0.4rem;
  clear: both;
  overflow: hidden;
}
`