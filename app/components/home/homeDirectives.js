
  // Directives

    // Homepage Breadcrumb
    app.directive( 'homepageBreadcrumb' , function() {
      return {
        restrict: 'E',
        templateUrl: 'js/directives/homepage/breadcrumb.html'
      };
    });

    // Homepage Carousel Slider
    app.directive( 'homepageCarousel' , function() {
      return {
        restrict: 'E',
        templateUrl: 'js/directives/homepage/homepage-carousel.html'
      };
    });

    // Featured Brands
    app.directive( 'featuredBrands' , function() {
      return {
        restrict: 'E',
        templateUrl: 'js/directives/homepage/featured-brands.html'
      };
    });

    // Shop Categories
    app.directive( 'shopCategoryList', function() {
      return {
        restrict: 'E',
        templateUrl: 'js/directives/homepage/shopCategoryList.html'
      };
    });