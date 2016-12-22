
/* /////---------------------

  Route Provider + RouteParams

/////---------------------- */

// Route Provider
app.config( [ '$routeProvider', function( $routeProvider ) {

  $routeProvider

  // Home
    .when( '/home', {
      templateUrl: 'app/components/home/homepage.html',
      controller: 'MenuController' } )

  // Category Page
    .when( '/shop/:category_route', {
      templateUrl: 'app/components/categories/categorypage.html',
      controller: 'CategoryController' } )

  // Subcategory Page
    .when( '/shop/:category_route/:subcategory_route', {
      templateUrl: 'app/components/subcategories/subcategorypage.html',
      controller: 'SubcategoryController' } )

  // Product Page
    .when( '/shop/:category_route/:subcategory_route/:product_route', {
      templateUrl: 'app/components/products/productPage.html',
      controller: 'ProductController' } )

  // Edit Shopping Cart
    .when( '/cart', {
      templateUrl: 'app/components/cart/shoppingcart.html',
      controller: 'CartController' } )

  // Checkout 
    .when( '/checkout', {
      templateUrl: 'app/components/checkout/payment-interface.html',
      controller: 'CheckoutController' } )

  //Default (Back to Home) When this is on, it seems to set-up an infinite routeloop
    .otherwise( {
      redirectTo: '/home' });
  }]);
