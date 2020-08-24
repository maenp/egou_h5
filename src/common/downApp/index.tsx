import React, { useEffect, useState } from 'react'
import {Container} from './styled'

const Index: React.FC = () => {
    let Timeout: any = null
    let [show, setShow] = useState(false)
    let [download, setDownload] = useState(false)
    let appClick = () => {
        clearDownClick(false)
        setDownload(_=>true)
    }
    function DownClick(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        var currUrl = window.location.href;
        e.preventDefault();
        setDownload(_=>false)
        window.location.href =
            "egouapp://?url=" + currUrl + "&channel=cjfzthd-2&page=egouapp://H5&hmsr=message&hmpl=message&hmcu=shuang11&send_id=123";
        var timer = setInterval(function () {
            window.location.href = "https://a.app.qq.com/o/simple.jsp?pkgname=com.emar.egou";
        }, 1000);
    }
    function clearDownClick(time) {
        Timeout && clearTimeout(Timeout)
        Timeout = null
        Timeout = setTimeout(_ => {
            try {
                (window as any).locJs.getRuid();
                setShow(() => false)
            } catch (e) {
                setShow(() => true)
            }

        }, time)
    }
    useEffect(() => {//ditmount
        clearDownClick(500)
    }, [])
    useEffect(() => {//销毁前
        return () => {
            Timeout && clearTimeout(Timeout)
            Timeout = null
        }
    })
    return (
        <Container>
            {
                show && (
                    <>
                        <div className="appboxwrap" onClick={appClick}></div>
                        {
                            download && (
                                <div className="filter_bg" id="download">
                                    <div className="layer_main_bg">
                                        <div className="layer_main">
                                            <a href="javascript:;" className="layer_close" onClick={() => { setDownload(_=>false) }}></a>
                                            <div className="layer_nr download_bg">
                                                <p className="one_oline">请下载易购APP<br />参加活动</p>
                                                <a href="javascript:;" className="download" onClick={DownClick} >立即下载</a>
                                            </div>
                                        </div>
                                    </div>
                                </div >
                            )
                        }

                    </>
                )
            }
        </Container>

    )
}
export default Index