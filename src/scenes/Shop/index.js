import React from "react";
// import style from "./style.scss";
// import classnames from "classnames/bind";
import LoadingSpinner from "components/LoadingSpinner";
import { inject, observer} from "mobx-react";
import { toJS} from "mobx";
import { withRouter } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
import ProductDetail from "components/ProductDetail";
// const cx = classnames.bind(style);

@withRouter
@inject("shopItemStore")
@inject("cartItemStore")
@observer
class Shop extends React.Component {

    componentWillMount() {
        this.props.shopItemStore.loadAll();
        this.props.cartItemStore.loadAll();
        this.props.setParentTitle("Shop");
    }

    addtoCart(product){
        this.props.cartItemStore.create(product);
        this.props.cartItemStore.loadAll();
    }



    render() {
        
        if (this.props.shopItemStore.isLoading)
            return <div><LoadingSpinner /></div>;
        return (
            <Row>
                <Col lg={12}>
               <h2>Cart Items</h2>
               {toJS(this.props.cartItemStore.cartItemsRegistry).map((item,key)=>
                    <div key={key}>{item.title}</div>
               )}
                {(this.props.shopItemStore.shopItemsRegistry).values().map((product,key)=>
                    <ProductDetail key={key} product={product} addItem={this.addtoCart.bind(this)}/>
                )}                              
                </Col>
            </Row>
        );
    }
}


export default Shop;
