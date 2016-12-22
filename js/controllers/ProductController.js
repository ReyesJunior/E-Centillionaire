

app.controller( 'ProductController', [ '$scope', '$routeParams', 'CategoryService', 'SubcategoryService', 'ProductService', function( $scope, $routeParams, CategoryService, SubcategoryService, ProductService ) {


/* /////---------------------

	Retrieve GrandParent Category Details

/////---------------------- */

	var category = CategoryService.getCategoryByRoute( $routeParams.category_route );
	var category_name = category.name;
	var category_route = category.category_route;

/* /////---------------------

	Retrieve Parent Subcategory Details

/////---------------------- */

	var returnSubcategoryList = SubcategoryService.getSubcategoryByCategoryRoute( category_route );

	// // Retrieve Subcategories (in Array Form)
	// var parent_category_children = CategoryService.getCategoryChildren( grandparentCategoryRoute ); // ex. ["islands", "mansions", "miscellaneous"]
	var subcategoryRouteParam = $routeParams.subcategory_route;
	var selectedSubcategory = SubcategoryService.getSubcategoryByRoute( category_route + "/" + subcategoryRouteParam );
	var selectedSubcategoryRoute = selectedSubcategory.subcategory_route;


/* /////---------------------

	Retrieve ProductList + Product Details

/////---------------------- */

	// Return Product Objects (based off Subcategory route)
	var returnProductList = ProductService.getProductBySubcategoryRoute( selectedSubcategoryRoute ); // returns Products of selected Subcategory

	// Isolate Product $routeParam
	var productRouteParam = $routeParams.product_route; // ex. "Zodiac"

	// Return Product Object by productRoute
	var productObject = ProductService.getProductByName( productRouteParam.toUpperCase() ); // ex. "Zodiac" returns Zodiac Product Object;

	// Retrieve Product (based off Product $routeParams) // ex. returns "Zodiac" Product Object
	var selectedProduct = ProductService.getProductByRoute( selectedSubcategoryRoute + "/" + productRouteParam );

	// Error message (if no selectedProduct is Found)
	if ( !selectedProduct) {
		console.log( ':(((( 404040404044' );
	};

	// Returned Grandparent Category Info
	$scope.grandparentCategoryRoute = category_route;
	$scope.grandparentCategoryName = category_name;

	// Returned Parent Subategory Info
	$scope.parentSubcategoryRoute = selectedSubcategory.subcategory_route;
	$scope.parentSubcategoryName = selectedSubcategory.name;

	// Returned ProductList
	$scope.productList = returnProductList;
	
	// Selected Product
	$scope.selectedProduct = selectedProduct;
	$scope.productName = selectedProduct.name;
	$scope.productDescription = selectedProduct.description;
	$scope.productCost = selectedProduct.price;
	$scope.productRoute = selectedProduct.productRoute;
	$scope.productImage = selectedProduct.productImage;
	$scope.productImageList = selectedProduct.sliderImages;
	$scope.productStock = selectedProduct.stock;

	var productStock = selectedProduct.stock;

	// Check Product Stock
	$scope.inStock = function() {

		var inStock = productStock;

		if ( productStock === 0 ) {
			inStock === false;
		} else {
			inStock === true;
		}

		return inStock;
	}

}]);










