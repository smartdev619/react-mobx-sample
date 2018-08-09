import React from "react";

export const Progress = ({progress, height = 20}) => (
    <div className="progress" style={{"height": `${height}px`}}>
        <div style={{"width": `${progress}%`}} role="progressbar" className="progress-bar progress-bar-success">
        </div>
    </div>
);