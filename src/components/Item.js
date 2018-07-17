import React from "react";
import Products from "./Products";



const Item = (props) => {



        var ship2day = false;
        if (props.twoDayShip === true)
            ship2day = true;
        return (
            <div className="item_content">
                <div className="row">
                    <div className="Items product-image col-md-6 col-sm-6 col-lg-6">
                        <div className="display-inline-block">
                            {props.largeImage && <img src={props.largeImage}/>}
                        </div>
                    </div>
                    <div className="item_popup_info col-md-6 col-sm-6 col-lg-6">
                        <div className="product-image-title ">
                            {props.name && <h1>{props.name}</h1>}
                        </div>
                        <div className="item_details">
                            {
                                props.customerrating &&
                                <img src={props.customerrating}/>

                            }
                            {
                                props.noOfReviews &&
                                <p className="reviews"> {props.noOfReviews} customer reviews</p>
                            }

                            <div className="item_price">
                                {
                                    props.salePrice &&
                                    <h2> $ {props.salePrice} </h2>
                                }
                            </div>
                            {ship2day && <p className="shipping_2day"> 2 - Day shipping Available</p>}
                            {!ship2day && <p className="shipping_not_2day"> Free shipping Available</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    {props.shortDescription &&
                    <div className="item_description">
                        <h2>Item Description</h2>
                        <p>{props.shortDescription}</p>
                    </div>
                    }
                </div>
                <div className="row">
                    <div>
                        <div className="product-info">
                            <Products rItemList={props.rItemList} itemId={props.itemId}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

export default Item;
