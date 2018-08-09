import React from "react";
import Progress from "components/Pace";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import TopHeader from "components/TopHeader";
import { correctHeight, detectBody } from "services/inspinia/helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import BodyModification from "components/BodyModification";
import $ from "jquery";
import { Switch, Route, withRouter } from "react-router-dom";

import Shop from "scenes/Shop";

import Page404 from "components/404";

@withRouter
class Main extends React.Component {
    state = {
        title: "",
        sweetAlert: null,
    }

    setTitle(title) {
        this.setState({...this.state, title});
    }

    showSweetAlert(sweetAlert) {
        this.setState({...this.state, sweetAlert});
    }

    hideSweetAlert() {
        this.setState({...this.state, sweetAlert: null});
    }

    render() {
        let wrapperClass = "gray-bg " + this.props.location.pathname;
        const childRenderer = (Component, routerProps) => <Component 
                                                            setParentTitle={this.setTitle.bind(this)} 
                                                            showSweetAlert={this.showSweetAlert.bind(this)} 
                                                            hideSweetAlert={this.hideSweetAlert.bind(this)} 
                                                            {...routerProps}/>;
        
        return (
            <BodyModification isWhite={false}>
                <div id="wrapper">
                    {this.state.sweetAlert}
                    <ToastContainer 
                            position="bottom-right"
                            type="default"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            pauseOnHover
                            />
                    <Progress />
                    <Navigation location={this.props.location}/>
                    <div id="page-wrapper" className={wrapperClass}>

                        <TopHeader />
                        <div className="animated fadeInDown">
                            <div className="row wrapper border-bottom white-bg page-heading">
                                <div className="col-lg-10">
                                    <h2>{this.state.title}</h2>
                                </div>
                            </div>
                            <div className="wrapper wrapper-content ">
                                <Switch>
                                    <Route name="Shop" exact path="/" render={(props) => (childRenderer(Shop, props))} />
                                    <Route render={(props) => (childRenderer(Page404, props))} />
                                </Switch>
                            </div>
                        </div>

                        <Footer />

                    </div>

                </div>
            </BodyModification>
        );
    }

    componentDidMount() {

        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // Correct height of wrapper after metisMenu animation.
        $(".metismenu a").click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300);
        });
    }
}

export default Main;
