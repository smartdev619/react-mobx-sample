import React from "react";

export default ({product,addItem}) => {
        return (
        <div className="ibox product-detail">
        <div className="ibox-content">
            <div className="row">
                <div className="col-md-5">
                    <div className="product-images">
                        <div>
                             <img src={product.image_url} alt="product_img"/>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <h2 className="font-bold m-b-xs">
                        {product.title}
                    </h2>
                    <small>Many desktop publishing packages and web page editors now.</small>
                    <div className="m-t-md">
                        <h2 className="product-main-price">${product.price} <small className="text-muted">Exclude Tax</small> </h2>
                    </div>
                    <hr/>
                    <h4>Product description</h4>
                    <div className="small text-muted">
                        {product.description}
                    </div>
                    <hr/>
                    <div>
                        <div className="btn-group">
                            <button className="btn btn-primary btn-sm" onClick={()=>addItem(product)}><i className="fa fa-cart-plus"></i> Add to cart</button>
                            <button className="btn btn-white btn-sm"><i className="fa fa-star"></i> Add to wishlist </button>
                            <button className="btn btn-white btn-sm"><i className="fa fa-envelope"></i> Contact with author </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
