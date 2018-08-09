import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName, exact = false) {
        if (exact)
            return this.props.location.pathname === routeName ? "active" : "";
        else
            return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
        
    }

    secondLevelActive(routeNames) {
        return routeNames.filter(v => this.props.location.pathname === v).length > 0 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    renderNavigationHeader()
    {
        return (
            <li className="nav-header">
                <div className="dropdown profile-element">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Test user</strong>
                        </span> </span> </a>
                </div>
            </li>
        );
    }

    renderNavigation()
    {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <ul className="nav metismenu" id="side-menu" ref="menu">
                    {this.renderNavigationHeader()}
                    <li className={this.activeRoute("/", true)}>
                        <Link to="/"><i className="fa fa-shopping-cart"></i> <span className="nav-label">Shop</span></Link>
                    </li>
                </ul>
            </nav>
        );
    }

    render() {
        return this.renderNavigation();
    }
}
//
// const mapStateToProps = (state) => {
//     return {
//         user: state.auth.user
//     };
// };
//
// export default connect(mapStateToProps, {logout})(Navigation);
export default Navigation;
