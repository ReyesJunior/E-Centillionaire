
app.factory( 'CategoryService', function () {

	// categoryImage size: 800 x 600px
	// sliderImages: size: 1450 x 900px

	// contains all Categories for the Shop: (6) Total
	// Real Estate, Business Ventures, Excursions, Luxury Transport, Philantropy, & Miscellaneous

	var categories = [

	// Real Estates
		{
			id: 0,
			name: 'Real Estates',
			class: 'close-pushmenu-button',
			header: 'There\'s no place like home',
			description: 'Real Estate Description',
			categoryImage: 'http://i.imgur.com/WywmyWc.jpg?1',
			category_route: 'real-estates',
			children: [ 'islands', 'mansions', 'miscellaneous' ], // ParentCategory's children (as determined by "getChildren" function), Only if applicable
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rMIg9zx.jpg?1',
						caption: 'Slide 1 Caption (category)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/f7snezO.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HxX07wL.jpg',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jxXmnWu.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}
			]
		},

	// Business Ventures
		{
			id: 1,
			name: 'Business Ventures',
			header: 'There\'s no place like home',
			description: 'Business Ventures Description',
			categoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			category_route: 'business-ventures',
			children: [ 'venture capitalism', 'investments', 'research and development' ], // ParentCategory's children (as determined by "getChildren" function)
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/4n1gldQ.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/kDk14R6.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wX5jok5.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/groGRYH.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Excursions
		{
			id: 3,
			name: 'Excursions',
			header: 'Excursion\'s Header',
			description: 'Excursions Description',
			categoryImage: 'http://i.imgur.com/tIneEgN.jpg?1',
			category_route: 'excursions',
			children: [ 'travel', 'campaigns', 'festivals' ],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/v8466LZ.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fXiNBI2.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IQ1FYnD.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KdRfqnB.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Luxury Transport
		{
			id: 4,
			name: 'Luxury Transport',
			header: 'Luxury Transport Header',
			description: 'Luxury Transport Description',
			categoryImage: 'http://i.imgur.com/OMchOFv.jpg?1',
			category_route: 'luxury-transport',
			children: [ 'aeronautics', 'terrestrial', 'aquatics' ],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/07Z6YmA.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/l91tLuD.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Uocypk2.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KsMdA9I.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Philantropy
		{
			id: 5,
			name: 'Philantropy',
			header: 'Philantropy Header',
			description: 'Philantrpy Description',
			categoryImage: 'http://i.imgur.com/vftw9Hp.jpg?1',
			category_route: 'philantropy',
			children: [ 'global initiatives', 'non-profit organizations', 'charities' ],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/gBNouwr.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/bzk5Ekx.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ogQyS34.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/oVuKz90.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Misciellaneous
		{
			id: 6,
			name: 'Miscellaneous',
			header: 'Miscellaneous Header',
			description: 'Miscellaneous Description',
			categoryImage: 'http://i.imgur.com/xzAuV2V.jpg?1',
			category_route: 'miscellaneous',
			children: [ 'quantum manipulation', 'space exploration', 'macroscopic analysis'],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/3Qx5Pt4.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/4NC2TIL.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1LvfY6i.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1BR4fOl.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		}

	]; // End of categories

///////////////////////////////////////////// Service Functions /////////////////////////////////////////////////////////////////

	return {

		getCategoryByRoute: function ( route ) { // will take the $routeParams of $routeProvider and return matching category_route
			for ( var i = 0; i < categories.length; i++ ) {
				if ( categories[ i ].category_route === route ) {
					return categories[ i ];
				}
			}
		},

		getCategoryByName: function ( name ) {
			for ( var i = 0; i < categories.length; i++ ) {
				if ( categories[ i ].name === name ) {
					return categories[ i ];
				}
			}
		},

		getCategoryById: function ( id ) {
			for ( var i = 0; i < categories.length; i++ ) {
				if ( categories[ i ].id === id ) {
					return categories[ i ];
				}
			}
		},

		getCategoryChildren: function ( route ) {
			var self = this; // Context
			var category = this.getCategoryByRoute( route ); // ex: "real-estates" returns "Real Estates" Object
			var childCategories = []; // Array for storing ParentCategory's children

			category.children.forEach( function ( childName ) {
				childCategories.push( ( childName ) ); // push data (children name) into childCategories Array
			});

			return childCategories; // returns category's children
		},

		getAll: function () {
			return categories;
		}
	};
	
}); // End of CategoryService







