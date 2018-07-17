
## Table of Contents

- [How to run the project](#run-project)
  - [npm install](#npm-install)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [If fail with the CORS error](#CORS-error)
- [Functionality Implementation](#Functionality_Implementation)



## How to run the project `run-project`

### `npm install`

Install all the dependencies for the app and read from package.JSON and install all the requiored components for the APP<br>
Once finished the projct can be deplyed and run in localhost by the following command

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

## If fail with the CORS error
If it is not able to fetch anything from the WalMart API and displaying the following error :
```angularjs
Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://api.walmartlabs.com/v1/search?query=Apple&format=json&apiKey={API_KEY}. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).

```
Then install the CORS plugin available in Google Chrome / Firefox marklet place and re run the app after enabling the CORS plugin.

Chrome : [Allow-Control-Allow-Origin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)

Firefox : [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/)

## Functionality Implementation

1. Implemented fetching of 10 items using Walmart search API
2. Implemented the popup for any item click to show the details of the item.
3. Showing the recommendation of the item within the popup as well in the bottom of the search page
4. Implemented the usage for the following 
```html
 1. 2-Day Shipping \ Free Shipping
 2. Customer rating
 3. Number of reviews
 4. Price
 5. Product Description
 6. 10 recommendations, which you can again select to open as new Popup for Item description.
 7. Clean, fluid and responsive UI same as Walmart.com
 8. Handling the API failure, so that app does not crash
 9. Handling if the used is not inputting the blank in the search text box.

 
```
## Screenshots
Figure showing the search result for apple (Medium screen)
![Alt text](./src/screenshots/S1.png?raw=true "ScreenShot 1")

Figure showing the search result for apple (Large screen)
![Alt text](./src/screenshots/S2.png?raw=true "ScreenShot 2")

Figure showing the product description and recommendation items as per the item.
![Alt text](./src/screenshots/S3.png?raw=true "ScreenShot 3")

Figure showing the minute details incorporated to make user exp good
![Alt text](./src/screenshots/S4.png?raw=true "ScreenShot 4")

Figure showinh the handling of the service failure.
![Alt text](./src/screenshots/S5.png?raw=true "ScreenShot 5")

