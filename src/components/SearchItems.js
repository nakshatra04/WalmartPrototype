import PropTypes from "prop-types";
import React from "react";
import Popup from "reactjs-popup";
import Item from "./Item";


const contentStyle ={

    width: "65%"
};

const setItemIdByClick = (props) => {
    console.log("a click on " + props.name);
}

function SearchItems(props) {
  var ship2day = false;
  if(props.twoDayShip === true)
    ship2day = true;
  return (
    <div className="search-result-gridview-item col-xs-4 col-md-4 col-lg-4">
      <div className="Items product-image">
        <div className="display-inline-block">
          {props.thumbnailImage && <img src={props.thumbnailImage} />}
        </div>
        <div className="product-image-title ">

            <Popup
                trigger={props.name && <a name="productId" href="#" className="item_info"> {props.name.substring(0,40)}</a>}
                modal
                contentStyle={contentStyle}
            >
                <Item itemId={props.itemId} name={props.name} customerrating={props.customerrating}
                             salePrice={props.salePrice} shortDescription={props.shortDescription} thumbnailImage={props.thumbnailImage}
                      largeImage={props.largeImage} noOfReviews={props.noOfReviews} twoDayShip={props.twoDayShip}
                      rItemList={props.rItemList}
                />            </Popup>
        </div>
      </div><div>
        {
            props.salePrice &&
            <h2> $ {props.salePrice} </h2>
        }
    </div>
      <div>
        {
          props.customerrating &&
          <img src={props.customerrating} />

        }
        {
          props.noOfReviews
        }
        { ship2day && <p className="shipping_2day"> 2 - Day shipping</p>}
        {!ship2day && <p className="shipping_not_2day"> Free shipping</p>}
      </div>
      <div>
        {props.shortDescription &&
          <p>{props.shortDescription}</p>
        }
        </div>
    </div>
  );
}

SearchItems.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SearchItems;
