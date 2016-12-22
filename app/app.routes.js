
/* /////---------------------

  Route Provider + RouteParams

/////---------------------- */

// Route Provider
app.config( [ '$routeProvider', function( $routeProvider ) {

  $routeProvider

  // Home
    .when( '/home', {
      templateUrl: 'js/views/homepage.html',
      controller: 'MenuController' } )

  // Category Page
    .when( '/shop/:category_route', {
      templateUrl: 'js/views/categorypage.html',
      controller: 'CategoryController' } )

  // Subcategory Page
    .when( '/shop/:category_route/:subcategory_route', {
      templateUrl: 'js/views/subcategorypage.html',
      controller: 'SubcategoryController' } )

  // Product Page
    .when( '/shop/:category_route/:subcategory_route/:product_route', {
      templateUrl: 'js/views/productPage.html',
      controller: 'ProductController' } )

  // Edit Shopping Cart
    .when( '/cart', {
      templateUrl: 'js/views/shoppingcart.html',
      controller: 'MenuController' } )

  // Checkout 
    .when( '/checkout', {
      templateUrl: 'js/views/payment-interface.html',
      controller: 'MenuController' } )

  //Default (Back to Home) When this is on, it seems to set-up an infinite routeloop
    .otherwise( {
      redirectTo: '/home' });
  }]);
