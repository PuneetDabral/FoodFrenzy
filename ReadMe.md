/\* Components of Our Food-Order App

- Header
- - Logo
- - Nav Items
- Body
- - Search Bar
- - Restaurant-Container
- - Restaurant-Card
- - Img
- - Name of Res, Star Rating, cuisine, delivery time.
- Footer
- - Copyright
- - Links
- - Address
- - Contact
    \*/

    <!-- #there is two types of routing  -->
    <!-- one is server side routing  so basically when i click on anchor tag it reloads the whole page it send the network call to about.html and rended the html that is sever side routing -->

<!-- second is client side basically we are not loading our page (whole app data) it already have the about us page code
only api call only happen when i make a network call through api
 -->

<!-- redux tool kit -->

<!-- install
build out store
connect our store to app
slice (cart slice for add item)
dispatch(action)
selector (read) -->

<!-- parcel is using babel behind the seen -->

<!-- types of testing -->

unit testing
integration testing
end to end testing - e2e testing

<!-- setting up testing in our app -->

install react testing lib
installed jest
installed babel dependencies
configure babel
config parcel config file to use disable default babel transpilation
jest config (npx jest --init)
installed jsdom library ( --save-dev jest-environment-jsdom)
install @babel/preset-react to make jsx work in test cases
include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom

<!-- jsdom (its like a run time environment and gives power of browser ) -->
