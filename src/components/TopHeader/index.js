import React from "react";
import { smoothlyMenu } from "services/inspinia/helpers";
import $ from "jquery";

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " onClick={this.toggleNavigation} href="#"><i className="fa fa-bars"></i> </a>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="" onClick={() => true}>
                                <i className="fa fa-sign-out"></i> Logout
                            </a>
                        </li>
                    </ul>
                    {/* <ul className="nav navbar-top-links text-center">
                        <li>
                            wuff
                        </li>
                    </ul> */}
                    
                </nav>
            </div>
        );
    }
}

export default TopHeader;
