
app.factory( 'CartService', function ( ProductService ) {

	// Define Cart (empty)
	var cart;

	/* /////---------------------

		Local Storage Config (for Cart)

	/////---------------------- */

	function checkDate( date ) {

		if( date < Date.now() ) {
	    	return false;
	  	}

	  	return true;
	};

	if (typeof(Storage) !== "undefined") {

		if (localStorage.getItem("cart") && checkDate(localStorage.getItem( "lastSave" ))) {

    		cart = JSON.parse(localStorage.getItem("cart"));

		}
	};

	if (!cart) {
		cart = [];
	}


///////////////////////////////////////////// Service Functions /////////////////////////////////////////////////////////////////

	var CartService = {

		addProduct: function (id) {

			cart.push( id );

			localStorage.setItem("cart", JSON.stringify( cart ) );
			localStorage.setItem("lastSave", new Date().getTime() + ( 3 * 24 * 60 * 60 * 1000 ) );
		},

		removeProduct: function (id) {
		// var cart = JSON.parse(localStorage.getItem( "cart") );
		console.log(id);
		console.log(cart);

			var indexOfItem = cart.indexOf(id);

			if (indexOfItem !== -1) {
				cart.splice(indexOfItem, 1);
			}

			console.log(cart);

			localStorage.setItem("cart", JSON.stringify( cart ) );
			localStorage.setItem("lastSave", new Date().getTime() + ( 3 * 24 * 60 * 60 * 1000 ) );

		},

		clearCart: function() {

			$scope.cart = CartService.getCart;

			$scope.cart = [];
			$scope.apply();
			console.log( "test");

		},

		getCart: function () {
			return cart;
		}

	};

	return CartService;
	
}); // End of CartService







