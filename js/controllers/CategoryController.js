
// Category Controller 

app.controller( 'CategoryController', [ '$scope', 'CategoryService', 'SubcategoryService', '$routeParams', function( $scope, CategoryService, SubcategoryService, $routeParams ) {

	// Retrieve Category from $routeProvider (from dynamic $routeParam, return Object)
	var category = CategoryService.getCategoryByRoute( $routeParams.category_route );

	// Store Category's route
	var category_route = category.category_route; // ex. #/'real-estates'

	// Return Category's children (based off route)
	var subcategoryList = SubcategoryService.getSubcategoryByCategoryRoute( category_route );

	// Error message (if no Category is Found)
	if ( !category ) { console.log( ':(((( Something\'s Broken! 404! 404! 404! 404! 404! ' ); };

	// Category Info
	$scope.categoryName = category.name;
	$scope.categoryHeader = category.header;
	$scope.categoryDescription = category.description;
	$scope.categoryRoute = category.category_route;
	$scope.categoryImageList = category.sliderImages;

	// Category.image: size 800x600px (used for listing-card)
	$scope.categoryImage = category.categoryImage;
	
	// SliderImages: size: 1450 x 900px
	// $scope.categorySliderImage1 = category.sliderImages[0].Image;
	// $scope.categorySliderImage2 = category.sliderImages[1].Image;
	// $scope.categorySliderImage3 = category.sliderImages[2].Image;
	// $scope.categorySliderImage4 = category.sliderImages[3].Image;

	// Category's Children
	$scope.subcategoryList = subcategoryList;

}]);