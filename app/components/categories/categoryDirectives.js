  
  app.directive( 'categoryBreadcrumb' , function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/categories/category-breadcrumb.html'
    };
  });

  app.directive( 'categoryImagePanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/categories/category-image-panel.html'
    };
  });

  app.directive( 'categoryDescriptionPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/categories/category-description-panel.html'
    };
  });

  app.directive( 'subcategoryListingPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/categories/subcategory-listing-panel.html'
    };
  });
