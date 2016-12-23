

app.controller( 'CartController', [ '$scope', '$routeParams', 'CategoryService', 'SubcategoryService', 'ProductService', 'CartService', '$rootScope', function( $scope, $routeParams, CategoryService, SubcategoryService, ProductService, CartService, $routeScope ) {


/* /////---------------------

	Retrieve GrandParent Category Details

/////---------------------- */

	// Retrieve Category (as an Object)
	var grandparent_category = CategoryService.getCategoryByRoute( $routeParams.category_route ); // ex. "Real Estates" Object

	// Retrieve Category's Name
	var grandparentCategoryName = grandparent_category.name;  // ex. "Real Estates"

	// Retrieve Category's route
	var grandparentCategoryRoute = grandparent_category.category_route; // ex. #/'real-estates'

/* /////---------------------

	Retrieve Parent Subcategory Details

/////---------------------- */

	// Return SubcategoryList Objects (based off Category route)
	var returnedSubcategoryList = SubcategoryService.getSubcategoryByCategoryRoute( grandparentCategoryRoute );

	// Retrieve Subcategories (in Array Form)
	var parent_category_children = CategoryService.getCategoryChildren( grandparentCategoryRoute ); // ex. ["islands", "mansions", "miscellaneous"]

	// Isolate Parent Subcategory $routeParam
	var subcategoryRouteParam = $routeParams.subcategory_route; // ex. "islands"

	// Retrieve Subcategory (based off Subcategory $routeParams) // ex. islands Object
	var selectedSubcategory = SubcategoryService.getSubcategoryByRoute( grandparentCategoryRoute + "/" + subcategoryRouteParam );

	// Retrieve SubcategoryRoute // ex. real-estates/islands ( will be used to get product ) 
	var selectedSubcategoryRoute = selectedSubcategory.subcategory_route;


/* /////---------------------

	Retrieve ProductList + Product Details

/////---------------------- */

	// Return Product Objects (based off Subcategory route)
	var returnedProductList = ProductService.getProductBySubcategoryRoute( selectedSubcategoryRoute ); // returns Products of selected Subcategory

	// Isolate Product $routeParam
	var productRouteParam = $routeParams.product_route; // ex. "Zodiac"
	console.log( productRouteParam );

	// Return Product Object by productRoute
	var productObject = ProductService.getProductByName( productRouteParam.toUpperCase() ); // ex. "Zodiac" returns Zodiac Product Object;
	console.log( productObject ); 

	// Returned ProductList
	$scope.productList = returnedProductList;

	// Retrieve Product (based off Product $routeParams) // ex. returns "Zodiac" Product Object
	var selectedProduct = ProductService.getProductByRoute( selectedSubcategoryRoute + "/" + productRouteParam );

	// Error message (if no selectedProduct is Found)
	if ( !selectedProduct) {
		console.log( ':(((( 404040404044' );
	};

	// Returned Grandparent Category Info
	$scope.grandparentCategoryRoute = grandparentCategoryRoute;
	$scope.grandparentCategoryName = grandparentCategoryName;

	// Returned Parent Subategory Info
	$scope.parentSubcategoryRoute = selectedSubcategory.subcategory_route;
	$scope.parentSubcategoryName = selectedSubcategory.name;

	// Selected Product
	$scope.selectedProduct = selectedProduct;
	$scope.productName = selectedProduct.name;
	$scope.productDescription = selectedProduct.description;
	$scope.productCost = selectedProduct.price;
	$scope.productRoute = selectedProduct.productRoute;
	$scope.productImage = selectedProduct.productImage;
	$scope.productImageList = selectedProduct.sliderImages;
	$scope.productStock = selectedProduct.stock;


/* /////---------------------

	Retrieve Cart + Add Selected Products

/////---------------------- */

	$scope.cart = CartService.getCart();

	var productId = selectedProduct.id;
	console.log( productId );


	function cartToProducts() {
		
		var returnedProducts = [];

		for(var i = 0; i < cartHoldingProductIds.length; i++) {

			var product = ProductService.getById(cartHoldingProductIds[i].id );
			returnedProducts.push(product);
		}
		console.log( returnedProducts );
		return returnedProducts;
	};

	$scope.addToCart = function () {

		// Retrieve Product + Product info
		var selectedProductObject = selectedProduct;
		var productName = selectedProductObject.name;
		var productCost = selectedProductObject.price;
		var productId = selectedProduct.id;
		var numItems = $scope.cart.length + 1;


		// Check if Product is already in cart
		// if so, increment quantity
		// if not, add to Product to Cart

		CartService.addProduct(productId); // ex. "0"

		console.log( $scope.cart );
		console.log( "There are " + numItems + " of items in the cart" );

		return $scope.cart;


	}; // End of addToCart Function

}]);































