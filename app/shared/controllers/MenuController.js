/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
/* Home Controller */

app.controller( 'MenuController', [ '$scope', 'ProductService', 'CategoryService', 'SubcategoryService', 'CartService', '$rootScope', function( $scope, ProductService, CategoryService, SubcategoryService, CartService, $rootScope ) {
	
	$scope.title = 'Shop Categories';
	$scope.header = 'WELCOME TO THE CLUB';
	$scope.description = 'Description description description description description description description description description description description description description description description description description description description description description description description description description description.';
	$scope.shopCategories = {
		categories: CategoryService.getAll()
	};
	$scope.shopSubcategories = {
		subcategories: SubcategoryService.getAll()
	};

	$scope.closeMenu = function() {

		var $nav_list = angular.element(document.getElementById('nav_list'));
		var $pushMenu = angular.element(document.getElementsByClassName('pushmenu-push'));
		var $menuLeft = angular.element(document.getElementsByClassName('pushmenu-left'));
		var $contentWrapper = angular.element(document.getElementsByClassName('main-content-wrapper'));
      	var $contentWrapperOverlay = angular.element(document.getElementsByClassName('main-content-wrapper-overlay'));

	    $nav_list.removeClass('active');
	    $pushMenu.removeClass('pushmenu-push-toright');
	    $menuLeft.removeClass('pushmenu-open');
	    $contentWrapper.removeClass( 'opacity-background');
        $contentWrapperOverlay.removeClass( 'opaque' );
	};

	$scope.closeCart = function() {

		var $cart_list = angular.element(document.getElementById('cart_list'));
		var $pushMenu = angular.element(document.getElementsByClassName('pushmenu-push'));
		var $cartRight = angular.element(document.getElementsByClassName('pushcart-right'));
		var $contentWrapper = angular.element(document.getElementsByClassName('main-content-wrapper'));
    	var $contentWrapperOverlay = angular.element(document.getElementsByClassName('main-content-wrapper-overlay'));

	    $cart_list.removeClass('active');
	    $pushMenu.removeClass('pushmenu-push-toleft');
	    $cartRight.removeClass('pushcart-open');
	   	$contentWrapper.removeClass( 'opacity-background');
        $contentWrapperOverlay.removeClass( 'opaque' );
	};

	$scope.openCart = function() {
		$scope.shoppingCart.product = cartToProducts();

		var $cart_list = angular.element(document.getElementById('cart_list'));
		var $pushMenu = angular.element(document.getElementsByClassName('pushmenu-push'));
		var $cartRight = angular.element(document.getElementsByClassName('pushcart-right'));
		var $contentWrapper = angular.element(document.getElementsByClassName('main-content-wrapper'));
		var $contentWrapperOverlay = angular.element(document.getElementsByClassName('main-content-wrapper-overlay'));
		$cart_list.addClass('active');
		$pushMenu.addClass('pushmenu-push-toleft');
		$cartRight.addClass('pushcart-open');
		$contentWrapper.addClass( 'opacity-background');
		$contentWrapperOverlay.addClass( 'opaque' );
	};


/* /////---------------------

	Cart

/////---------------------- */

	$scope.shoppingCart = {
		product: cartToProducts()
	};

	function cartToProducts() {
		var productIds = CartService.getCart();

		var returnedProducts = [];
		var returnedProductsIndex = 0;

		// Keep track of index of each product in the returnedProducts array
		var productIndexes = {};

		// Iterate over each product id
		for(var i = 0; i < productIds.length; i++) {
			var productId = productIds[i];

			// If we haven't seen the product before (which we know by looking at productIndexes[productId])
			if (productIndexes[productId] === undefined) {
				// Set the index of the product to i
				productIndexes[productId] = returnedProductsIndex++;

				// Get product by id
				var originalProduct = ProductService.getProductById(productId);
				// Create a copy so we don't mutate the original
				var product = angular.copy(originalProduct);
				// Set the quantity
				product.quantity = 1;
				// Push the thing into the array
				returnedProducts.push(product);
			} else {
				// Otherwise, if we have seen it, just update the quantity directly onto the
				// copy of the product
				returnedProducts[productIndexes[productId]].quantity++;
			}
		}


		return returnedProducts;


	};

	$scope.grandTotal = function () {

		var cartWithProductIds = CartService.getCart();
		var productObjectsArray = [];
		var total = 0;

		for( var i = 0; i < cartWithProductIds.length; i++ ) {

			var productId = cartWithProductIds[i];
			var returnedProduct = ProductService.getProductById( productId );

			if(!returnedProduct) {
				console.log( "Could not retrieve products at this time");
			} else {
				productObjectsArray.push( returnedProduct );
			}
		}

		angular.forEach(productObjectsArray, function ( product ) {
			var productPrice = product.price;
			total += productPrice;
		})

		$rootScope.total = total;

		return total;

	}; // End of GrandTotal


/* /////---------------------

	Edit Cart

/////---------------------- */

	$scope.editCartTitle = 'MyCart';

	$scope.removeItem = function(id)  { // ex: "0"

		// Product that will be removed
		var selectedProductId = id;

		CartService.removeProduct( selectedProductId );

		$scope.shoppingCart.product = cartToProducts();
	};

	$scope.emptyCart = function() {

		var cart = CartService.getCart();

		// cart.splice();
		localStorage.clear();
		cart = [];
		localStorage.setItem("cart", JSON.stringify( cart ) );
		localStorage.setItem("lastSave", new Date().getTime() + ( 3 * 24 * 60 * 60 * 1000 ) );

		$scope.shoppingCart.product = cartToProducts();
		//refresh window too
		window.location.reload();

	}


}]);

































