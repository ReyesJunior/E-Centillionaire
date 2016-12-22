
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

		// // Check if cart has Product
		// hasProduct: function ( id ) {

		// 	console.log(JSON.parse(localStorage.getItem("cart")));

		// 	var passedProductId = id;

		// 	var cart = CartService.getCart();
		// 	var found = false;

		// 	console.log("call to function works, and passed ProductID: " + passedProductId );

		// 	// if cart has items,
		// 	if( cart.length > 0 ) {
		// 		console.log( "Cart has items!");
		// 		// check for duplicate ProductId's
		// 		cart.forEach( function ( item ) {
		// 			if ( item.id === passedProductId ) {
		// 				found = true;
		// 				console.log( "Test Passed, Found Duplicate ProductID, will increment quantity");
		// 			} else {
		// 				//no duplicates found, proceed to addToCart()
		// 				found = false;
		// 				console.log( "Test Failed, Unable to find Duplicate ProductID");
		// 			}
		// 		});


		// 	} else {
		// 		console.log( "Cart has no items :( ");
		// 		cart.push(passedProductId);
		// 		console.log("So, I just added ProductID: " + passedProductId );

		// 	}


		// },

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
			// for(var i = 0; i < cart.length; i++) {
			// 	if( cart[i] === id ) {
			// 		cart.splice( [i], 1 );
			// 	}
			// }

			console.log(cart);

			localStorage.setItem("cart", JSON.stringify( cart ) );
			localStorage.setItem("lastSave", new Date().getTime() + ( 3 * 24 * 60 * 60 * 1000 ) );

		},

		// 	console.log(productObjectsArray);

			// for( var i = 0; i < productObjectsArray.length; i++ ) {

			// 	if(  === productId ) {
			// 		console.log( "deleting " + productId );
			// 	} else {
			// 		console.log( "nothing to delete");
			// 	}

			// }

			// angular.forEach(productObjectsArray, function ( product ) {

			// 	var product = productObjectsArray.product[product.name];
			// 	console.log(product);
			// })

			// for ( var i = 0; i < storedProductIds.length; i++ ) {
			// 	var currProductId = storedProductIds[i];
			// 	var returnedProduct = ProductService.getProductById( currProductId );

			//     if ( storedProductIds[i] === returnedProduct ) {
			//         // remove the object with storeNumber '714389' from the array
			//         // storedAddresses.splice(i,1); 
			//         console.log( "it's working");
			//     }
			// }

			// insert the new stringified array into LocalStorage
			// localStorage.storedAddresses = JSON.stringify(storedAddresses);

			// cart.splice( id );

			// localStorage.setItem("cart", JSON.stringify( cart ) );
			// localStorage.setItem("lastSave", new Date().getTime() + ( 3 * 24 * 60 * 60 * 1000 ) );

			// console.log( "delete test Complete");
		// },

		getCart: function () {
			return cart;
		}

	};

	return CartService;
	
}); // End of CartService







