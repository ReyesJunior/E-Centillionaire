

  // Site Nav
  app.directive( 'siteNav' , function() {
    return {
      restrict: 'E',
      templateUrl: 'app/shared/views/site-nav.html',
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
      templateUrl: 'app/shared/views/siteheader.html'
    };
  });

  // Shop Dropdown Menu
  app.directive( 'shopDropdownMenu' , function() {
    return {
      restrict: 'E',
      templateUrl: 'app/shared/views/shopDropdownMenu.html',
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
