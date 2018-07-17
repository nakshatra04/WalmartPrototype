import React from "react";
import RecommendationItem from './RecommendationItem';



function Products (props) {
    var recommendationItemsList = props.rItemList;
    var newList = [];
    if (recommendationItemsList){
        for(var i =0; i<recommendationItemsList.length; i++){
            if(i <10 )
                newList.push(recommendationItemsList[i]);
        }
    }
	return (
        <div className="similar_title_padding">
            <div className="react-empty">
            </div>
            <div class="similar_title_padding">
            {props.rItemList && <h1>Similar products : </h1>}
            </div>

            {props.rItemList && newList.map(c =>
                <RecommendationItem key={c.itemId} name={c.name.substring(0,40)}
                 customerrating={c.customerrating}
                  salePrice={c.salePrice} shortDescription={c.shortDescription} thumbnailImage={c.thumbnailImage}
                  largeImage={c.largeImage} noOfReviews={props.noOfReviews} twoDayShip={props.twoDayShip}
                  rItemList={props.rItemList}/>)}
            <div className="react-empty">
            </div>
        </div>
  );

}

export default Products;

