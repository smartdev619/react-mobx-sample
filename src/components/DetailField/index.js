import React from "react";
import "./styles.scss";

export default (props) => (
    <div className={props.col}>
        <label className="detail">{props.label}</label>
        <p>{props.children}</p>
    </div>
);