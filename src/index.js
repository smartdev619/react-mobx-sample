import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import momentLocalizer from "react-widgets/lib/localizers/moment";
import registerServiceWorker from "registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import promiseFinally from "promise.prototype.finally";
import store from "stores";
import App from "components/Root";
import jQuery from "jquery";
window.$ = jQuery;
window.jQuery = jQuery;
require("jquery");
require("metismenu");
require("bootstrap");

import "style/app.scss";

moment.locale("de");
momentLocalizer(moment);

promiseFinally.shim();

ReactDOM.render(
    <Provider {...store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById("root"));
registerServiceWorker();


