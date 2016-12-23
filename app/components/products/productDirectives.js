
  app.directive( 'productBreadcrumb', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/products/products-breadcrumb.html'
    };
  });

  app.directive( 'productSlider', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/products/product-slider.html'
    };
  });

    app.directive( 'productListingPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/products/product-listing-panel.html'
    };
  });

  app.directive( 'productDetails', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/products/product-details.html'
    };
  });

