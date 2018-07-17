import React from "react";
import SearchItems from "./SearchItems"
function ItemList(props) {

    return(
        <div >
            <div className="react-empty">
            </div>

            {props.itemList && props.itemList.map(c =>
                <SearchItems  key={c.itemId} itemId={c.itemId} name={c.name} customerrating={c.customerRatingImage}
                             salePrice={c.salePrice} shortDescription={c.shortDescription} thumbnailImage={c.mediumImage}
                             rItemList={props.rItemList}
                             largeImage={c.largeImage} noOfReviews={c.numReviews} twoDayShip={c.isTwoDayShippingEligible}
                />)}
            <div className="react-empty">
            </div>
            <div>
            </div>
        </div>
    );

}

export default ItemList;
