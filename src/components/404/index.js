import React from "react";

export default class Page404 extends React.Component {
    componentWillMount() {
        this.props.setParentTitle("Seite nicht gefunden");
    }
    render() {
        return <h2 classNames="text-center">Seite wurde leider nicht gefunden</h2>;        
    }
}