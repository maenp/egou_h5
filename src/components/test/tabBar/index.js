import React,{useState}from 'react';
import {TabBar_UL} from './styled'
function TabBar(props) {
    let [n, setN] = useState(10);
    return (
        <TabBar_UL>
            <li>{n}</li>
            <li>2</li>
            <li>3</li>
        </TabBar_UL>
    );
}

export default TabBar;