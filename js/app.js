
/* E-Centillionaire Store App */

var app = angular.module( 'CentillionaireStore', [ 'ngRoute' ] );

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

// Rename all files and reorganize to mimic more of an MVC pattern

/*  ///////////////////////////////////////////////////// -- Shared -- ///////////////////////////////////////////////////// */

  /* /////---------------------

    Directives

  /////---------------------- */

  // Site Nav
  app.directive( 'siteNav' , function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/shared/site-nav.html',
      link: function( scope, element, attrs ) {

        var $menuLeft = angular.element(document.getElementsByClassName('pushmenu-left'));
        var $pushMenu = angular.element(document.getElementsByClassName('pushmenu-push'));
        var $nav_list = angular.element(document.getElementById('nav_list'));

        var $cartRight = angular.element(document.getElementsByClassName('pushcart-right'));
        var $cart_list = angular.element(document.getElementById('cart_list'));

        var $contentWrapper = angular.element(document.getElementsByClassName('main-content-wrapper'));
        var $contentWrapperOverlay = angular.element(document.getElementsByClassName('main-content-wrapper-overlay'));


        var toggleMenu = function() {

          $nav_list.addClass('active');
          $pushMenu.addClass('pushmenu-push-toright');
          $menuLeft.addClass('pushmenu-open');
          $contentWrapper.addClass( 'opacity-background');
          $contentWrapperOverlay.addClass( 'opaque' );

        };

        $nav_list.on( 'click' , toggleMenu );

      } // End of link: function()
    }; // End of return
  });

  // Site Header
  app.directive( 'siteHeader' , function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/shared/siteheader.html',
    };
  });

  // Shop Dropdown Menu
  app.directive( 'shopDropdownMenu' , function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/shared/shopDropdownMenu.html',
      link: function( scope, element, attrs ) {

        var $shopHeader = angular.element(document.getElementById('shop-dropdown-menu-header'));
        var $shopHeaderGlyph = angular.element(document.getElementsByClassName('glyphicon-dropdown-menu'));

        var toggleDropdownGlyph = function() {
          $shopHeaderGlyph.toggleClass('glyphicon-menu-up');
        };

        $shopHeader.on( 'click' , toggleDropdownGlyph );

      } // End of link function
    };
  });

/*  ///////////////////////////////////////////////////// -- Homepage -- ///////////////////////////////////////////////////// */

  // Controllers 
    app.controller( 'HomepageCarouselController' , [ '$scope' ,  function( $scope ) {

      $scope.images = [  // Image Sizes are EXACTLY ( 1450 x 900 )
        {
          Image: {
            className: 'item active',
            imageSrc: 'http://i.imgur.com/38vXc2q.jpg?1',
            caption: 'Slide 1 Caption',
            subCaption: 'Slide 1 Sub-Caption'
          },
        },
        {
          Image: {
            className: 'item',
            imageSrc: 'http://i.imgur.com/2hAcyZl.jpg?1',
            caption: 'Slide 2 Caption',
            subCaption: 'Slide 2 Sub-Caption'
          },
        },
        {
          Image: {
            className: 'item',
            imageSrc: 'http://i.imgur.com/DEapTxR.jpg?1',
            caption: 'Slide 3 Caption',
            subCaption: 'Slide 3 Sub-Caption'
          },
        },
        {
          Image: {
            className: 'item',
            imageSrc: 'http://i.imgur.com/AIhTfRW.jpg?1',
            caption: 'Slide 4 Caption',
            subCaption: 'Slide 4 Sub-Caption'
          },
        }
      ];

      $scope.thumbnails = [
        {
          Thumbnail: {
            dataSlide: 0,
            className: 'active',
          }

        },
        {
          Thumbnail: {
            dataSlide: 1,
            className: '',
          }

        },
        {
          Thumbnail: {
            dataSlide: 2,
            className: '',
          }

        },
        {
          Thumbnail: {
            dataSlide: 3,
            className: '',
          }

        }
      ];

    }]);

    app.controller( 'FeaturedBrandsController' , [ '$scope' , function( $scope ) {

      $scope.logos = [ // image size 800x600 (transparent Background)
        {
          Image: {
            imageSrc: 'http://i.imgur.com/ywGFDMm.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/uuqGfBp.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/9075SQQ.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/GTZepzR.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/7DdkPHa.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/usg1thw.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/SmhuDB0.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/h10Q2E4.png?1',
            brandName: 'Brand Name'
          }
        },
            {
          Image: {
            imageSrc: 'http://i.imgur.com/NaaHXns.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/jUdxuIj.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/P4ual7v.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/GTZepzR.png?1',
            brandName: 'Brand Name'
          }
        }
      ];

    }]);

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

/*  ///////////////////////////////////////////////////// -- Category Page -- ///////////////////////////////////////////////////// */

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

/*  ///////////////////////////////////////////////////// -- Subcategory Page -- ///////////////////////////////////////////////////// */

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

/*  ///////////////////////////////////////////////////// -- Product Page -- ///////////////////////////////////////////////////// */

  app.directive( 'productBreadcrumb', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/products/products-breadcrumb.html'
    };
  });

  app.directive( 'productSlider', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/products/product-slider.html'
    };
  });

  app.directive( 'productDetails', function() {
    return {
      restrict: 'E',
      templateUrl: 'js/directives/products/product-details.html'
    };
  });



