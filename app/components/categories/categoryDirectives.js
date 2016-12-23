  
  app.directive( 'categoryBreadcrumb' , function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/categories/category-breadcrumb.html'
    };
  });

  app.directive( 'categoryImagePanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/categories/category-image-panel.html'
    };
  });

  app.directive( 'categoryDescriptionPanel', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/categories/category-description-panel.html'
    };
  });

    app.directive( 'shopCategoryList', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/categories/shopCategoryList.html'
      };
    });
