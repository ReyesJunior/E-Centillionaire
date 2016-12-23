  
  app.directive( 'subcategoryBreadcrumb' , function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/subcategories/breadcrumb.html'
    };
  });

  app.directive( 'subcategoryImagePanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/subcategories/subcategory-image-panel.html'
    };
  });

  app.directive( 'subcategoryDescriptionPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/subcategories/subcategory-description-panel.html'
    };
  });

    app.directive( 'subcategoryListingPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/subcategories/subcategory-listing-panel.html'
    };
  });
