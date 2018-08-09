import React from "react";
import "./style.scss";
import Wave from "./components/Wave";
import RotatingPlane from "./components/RotatingPlane";
import DoubleBounce from "./components/DoubleBounce";
import {randomInt} from "utils/helpers";

class LoadingSpinner extends React.Component {
    defaultProps = {
        random: true
    }

    spinners = {
        "wave": Wave,
        "bounce": DoubleBounce,
        "plane": RotatingPlane,
    }

    render() {
        if (this.props.spinner) {
            const Spinner = this.spinners[this.props.spinner];
            return <div><Spinner /></div>;     
        }

        const randomIdx = randomInt(1, Object.keys(this.spinners).length);
        const Spinner = this.spinners[Object.keys(this.spinners)[randomIdx - 1]];
        return <div><Spinner /></div>;    
    
        
    }
}

export default LoadingSpinner;
