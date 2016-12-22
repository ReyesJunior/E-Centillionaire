

app.controller( 'SubcategoryController', [ '$scope', '$routeParams', 'CategoryService', 'SubcategoryService', 'ProductService', function( $scope, $routeParams, CategoryService, SubcategoryService, ProductService ) {

	// Retrieve Category from $routeProvider (from dynamic $routeParam, return Object)
	var category = CategoryService.getCategoryByRoute( $routeParams.category_route );

	// Retrieve Parent Category's Name
	var category_name = category.name;  // ex. "Real Estates"

	// Retrieve Parent Category's route
	var category_route = category.category_route; // ex. #/'real-estates'

	// Isolate Current Subcategory $routeParam
	var subcategoryRouteParam = $routeParams.subcategory_route; // ex. "islands"

	// Retrieve Subcategory (based off Subcategory $routeParams)
	var selectedSubcategory = SubcategoryService.getSubcategoryByRoute( category_route + "/" + subcategoryRouteParam );
	
	// Retrieve SubcategoryRoute // ex. real-estates/islands ( will be used to get productList ) 
	var selectedSubcategoryRoute = selectedSubcategory.subcategory_route;

	// Error message (if no Subcategory is Found)
	if ( !selectedSubcategory) {
		console.log( ':(((( 404040404044' );
	}

	// Returned Parent Category Info
	$scope.parentCategoryRoute = selectedSubcategory.parent_route;
	$scope.parentCategoryName = category_name;

	// Selected Subcategory
	$scope.selectedSubcategory = selectedSubcategory;
	$scope.subcategoryName = selectedSubcategory.name;
	$scope.subcategoryDescription = selectedSubcategory.description;
	$scope.subcategoryRoute = selectedSubcategory.subcategory_route;
	$scope.subcategoryImage = selectedSubcategory.subcategoryImage;
	$scope.subcategoryImageList = selectedSubcategory.sliderImages;
	$scope.subcategoryProductList = selectedSubcategory.products;

/* /////---------------------

	Retrieve ProductList

/////---------------------- */

	// Return Product Objects (based off Subcategory route)
	var returnProductList = ProductService.getProductBySubcategoryRoute( selectedSubcategoryRoute ); // returns Products of selected Subcategory

	// Returned ProductList
	$scope.productList = returnProductList;

}]);










