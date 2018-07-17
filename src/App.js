import React from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import Products from "./components/Products";
import Error from"./components/Error";
import {Navbar} from 'react-bootstrap';
import logo1 from "./walmart-logo/wmt_h_r_c.png";



const API_KEY = "kqng3chq485br36pp8aef4ds";
class App extends React.Component{

  state = {
    itemId:undefined,
    itemList:undefined,
    rItemList:undefined,
    error:undefined

  }

    getItems = async (e) => {
        e.preventDefault();
        const searchText = e.target.elements.searchText.value;
        const api_call = await fetch(`http://api.walmartlabs.com/v1/search?query=${searchText}&format=json&apiKey=${API_KEY}`);
        console.log(JSON.stringify(api_call));
        if (api_call.status == 200) {
            console.log("API fetched . . . working on data");
        }
        else {
            console.log("Unable to fetch API, Error : " + JSON.stringify(api_call.body));
        }
        const data = await api_call.json();
        console.log(api_call.status + " " +api_call.statusText);

          if (searchText) {
          if(data.items) {
              this.getRecommendations(data.items[0].itemId);
              this.setState({
                  itemId: data.items[0].itemId,
                  itemList: data.items,
                  error: undefined
              });
          }
          else {
              this.setState({
                  itemList:undefined,
                  rItemList:undefined,
                  error: api_call.status + " " +api_call.statusText
              });
          }
        }
        else {
           this.setState({
               itemId: undefined,
               itemList: undefined,
               error: "Please Enter the values"
            });
        }

  }

    getRecommendations = async (params,e) => {
        const itemId = params;
        const apiCall = await fetch(`http://api.walmartlabs.com/v1/nbp?apiKey=${API_KEY}&format=json&itemId=${params}`);

        const recommendationData = await apiCall.json();
        this.setState(
            {
                rItemList:recommendationData
            }
        );
    }

  render(){

    return(
      <div>
          <Navbar>
              <Navbar.Header>
                  <a href="#"><img className="walmart_logo" src={logo1} alt="logo" />
                  </a>
              </Navbar.Header>
                  <Navbar.Form pullLeft>
                      <Form getItems={this.getItems}/>
                  </Navbar.Form>

          </Navbar>
            <div className="wrapper">
            <div className="main">
            <div>
              <div className="row">

                  <Error error={this.state.error} />
                  <div className="container" >
                  <ItemList rItemList={this.state.rItemList} itemList={this.state.itemList} />
                </div>
              </div>
            </div>
              <div>
                  <div className="product-info">
                  <Products rItemList={this.state.rItemList}/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
