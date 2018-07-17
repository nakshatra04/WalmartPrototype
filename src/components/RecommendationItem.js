import PropTypes from "prop-types";
import React from "react";
import Popup from "reactjs-popup";
import Item from "./Item";


const contentStyle = {

    width: "65%"
};

const rItemId = undefined;
function RecommendationItem(props) {

    return (
        <div className="search-result-gridview-item col-xs-3 col-md-3 col-lg-3">

            <div className="Items product-image">
                <div className="display-inline-block">
                    {props.thumbnailImage && <img src={props.thumbnailImage} />}
                </div>
                <div className="product-image-title ">

                    <Popup
                        trigger={props.name && <a href="#" className="item_info"> {props.name.substring(0,40)}</a>}
                        modal
                        contentStyle={contentStyle}
                    >
                        <Item itemId={props.itemId} name={props.name} customerrating={props.customerrating}
                              salePrice={props.salePrice} shortDescription={props.shortDescription} thumbnailImage={props.thumbnailImage}
                              largeImage={props.largeImage} noOfReviews={props.noOfReviews} twoDayShip={props.twoDayShip}
                              rItemList={props.rItemList}
                        />            </Popup>
                </div>
            </div>
            <div className="react-empty">
            </div>
            <div>
                {
                    props.salePrice &&
                    <h2> $ {props.salePrice} </h2>
                }
            </div>



        </div>

    );
}

RecommendationItem.propTypes = {
    name: PropTypes.string.isRequired,
};

export default RecommendationItem;
