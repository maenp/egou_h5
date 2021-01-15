import React, {Component} from 'react';
import Loadable, { LoadingComponentProps } from "react-loadable";
import './index.scss'

class Loading extends Component<LoadingComponentProps> {
    render() {
        return (
            <div className="loader">
            </div>
        );
    }
}

export default Loading;
