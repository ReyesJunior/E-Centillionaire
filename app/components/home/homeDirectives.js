
  // Directives

    // Homepage Breadcrumb
    app.directive( 'homepageBreadcrumb' , function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/home/breadcrumb.html'
      };
    });

    // Homepage Carousel Slider
    app.directive( 'homepageCarousel' , function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/home/homepage-carousel.html'
      };
    });

    // Featured Brands
    app.directive( 'featuredBrands' , function() {
      return {
        restrict: 'E',
        templateUrl: 'app/components/home/featured-brands.html'
      };
    });

    