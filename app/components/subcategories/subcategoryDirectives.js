  
  app.directive( 'subcategoryBreadcrumb' , function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/subcategories/breadcrumb.html'
    };
  });

  app.directive( 'subcategoryImagePanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/subcategories/subcategory-image-panel.html'
    };
  });

  app.directive( 'subcategoryDescriptionPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/subcategories/subcategory-description-panel.html'
    };
  });

  app.directive( 'productListingPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/subcategories/product-listing-panel.html'
    };
  });