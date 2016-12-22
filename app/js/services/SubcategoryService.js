
app.factory( 'SubcategoryService', function () {

	// subcategoryImage size: 800 x 600px
	// sliderImage: size: 1450 x 900px

	// contains all Categories for the Shop: (18) Total
	// Real Estate: Islands, Mansions, Miscellaneous (3)
	// Business Ventures: Venture Capitalism, Investments, Research and development (3)
	// Excursions: Travel, Campaigns, Festivals (3)
	// Luxury Transport: Aeronautics, Terrestrial, Aquatics (3)
	// Philantropy: Global initatives, NPO, Charities (3)
	// Miscellaneous: Quantum manipulation, Space Exploration, Macroscopic Analysis (3)

	var subcategories = [

///////////////////////////////////////////// Real Estates /////////////////////////////////////////////////////////////////

	// Islands 
		{
			id: 0,
			name: 'Islands',
			header: 'Islands Header',
			description: 'Islands Description',
			subcategoryImage: 'http://i.imgur.com/cdmJ4oo.jpg?1',
			subcategory_route: 'real-estates/islands',
			parent: ['Real Estates'],
			parent_route: 'real-estates',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/WK0A70g.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IhaMmAa.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/0AiTE8T.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/VGWesq5.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Mansions
		{
			id: 1,
			name: 'Mansions',
			header: 'Mansions Header',
			description: 'Mansions Description',
			subcategoryImage: 'http://i.imgur.com/5r0rDjH.jpg?1',
			subcategory_route: 'real-estates/mansions',
			parent: [ 'Real Estates' ],
			parent_route: 'real-estates',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/eoMC5Yv.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TQjGKS4.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/0FD1EsI.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7YmDF6q.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Miscellaneous
		{
			id: 2,
			name: 'Miscellaneous',
			header: 'Miscellaneous Header',
			description: 'Miscellaneous Description',
			subcategoryImage: 'http://i.imgur.com/Hxke3S8.jpg?1',
			subcategory_route: 'real-estates/miscellaneous',
			parent: [ 'Real Estates' ],
			parent_route: 'real-estates',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/hrn9UiT.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hdL5Lr0.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Z4A7Y6t.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wrdNtPf.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

///////////////////////////////////////////// Business Ventures /////////////////////////////////////////////////////////////////

	// Start-Up Funding
		{
			id: 3,
			name: 'Venture Capitalism',
			header: 'Fund a Start-Up Header',
			description: 'Fund a Start-Up Description',
			subcategoryImage: 'http://i.imgur.com/Yan9lNj.jpg?1',
			subcategory_route: 'business-ventures/venture-capitalism',
			parent: [ 'Business Ventures' ],
			parent_route: 'business-ventures',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rMIg9zx.jpg?1',
						caption: 'Slide 1 Caption',
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
				}]
		},

	// Investments
		{
			id: 4,
			name: 'Investments',
			header: 'Investments Header',
			description: 'Investments Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'business-ventures/investments',
			parent: [ 'Business Ventures' ],
			parent_route: 'business-ventures',
			children: [ 'Technology', 'Bio/Sci', 'Environmental' ],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Research & Development
		{
			id: 5,
			name: 'Research \& Development',
			header: 'There\'s no place like home',
			description: 'R&D Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'business-ventures/research-and-development',
			parent: [ 'Business Ventures' ],
			parent_route: 'business-ventures',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

///////////////////////////////////////////// Excursions /////////////////////////////////////////////////////////////////

	// Travel
		{
			id: 6,
			name: 'Travel',
			header: 'Travel Header',
			description: 'Travel Description',
			subcategoryImage: 'http://i.imgur.com/Yan9lNj.jpg?1',
			subcategory_route: 'excursions/travel',
			parent: [ 'Excursions'],
			parent_route: 'excursions',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rMIg9zx.jpg?1',
						caption: 'Slide 1 Caption',
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
				}]
		},

	// Campaigns
		{
			id: 7,
			name: 'Campaigns',
			header: 'Campaigns Header',
			description: 'Campaigns Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'excursions/campaigns',
			parent: [ 'Excursions'],
			parent_route: 'excursions',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption:'Slide 3 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 4,
						thumbnailClassName: ''

					},
				}]
		},

	// Festivals
		{
			id: 8,
			name: 'Festivals',
			header: 'Festivals Header',
			description: 'Festivals Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'excursions/festivals',
			parent: [ 'Excursions'],
			parent_route: 'excursions',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

///////////////////////////////////////////// Luxury Transport /////////////////////////////////////////////////////////////////

	// Aeronautics
		{
			id: 9,
			name: 'Aeronautics',
			header: 'Aeronautics Header',
			description: 'Aeronautics Description',
			subcategoryImage: 'http://i.imgur.com/Yan9lNj.jpg?1',
			subcategory_route: 'luxury-transport/aeronautics',
			parent: [ 'Luxury-Transport' ],
			parent_route: 'luxury-transport',
			children: [ 'Jets', 'Helicopters' ],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rMIg9zx.jpg?1',
						caption: 'Slide 1 Caption',
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
				}]
		},

	// Terrestrial
		{
			id: 10,
			name: 'Terrestrial',
			header: 'Terrestrial Header',
			description: 'Terrestrial Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'luxury-transport/terrestrial',
			parent: [ 'Luxury-Transport' ],
			parent_route: 'luxury-transport',
			children: [ 'Cars', 'Motorcycles' ],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''


					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Aquatics
		{
			id: 11,
			name: 'Aquatics',
			header: 'Aquatics Header',
			description: 'Aquatics Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'luxury-transport/aquatics',
			parent: [ 'Luxury-Transport' ],
			parent_route: 'luxury-transport',
			children: [ 'Yachts', 'Submarines' ],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

///////////////////////////////////////////// Philantropy /////////////////////////////////////////////////////////////////

	// Global Initiatives
		{
			id: 12,
			name: 'Global Initiatives',
			header: 'Global Initiatives Header',
			description: 'Global Initiatives Description',
			subcategoryImage: 'http://i.imgur.com/Yan9lNj.jpg?1',
			subcategory_route: 'philantropy/global-initiatives',
			parent: [ 'Philantropy' ],
			parent_route: 'philantropy',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rMIg9zx.jpg?1',
						caption: 'Slide 1 Caption',
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
				}]
		},

	// Non-Profit Organizations
		{
			id: 13,
			name: 'Non-Profits',
			header: 'NPO Header',
			description: 'NPO Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'philantropy/non-profit-organizations',
			parent: [ 'Philantropy' ],
			parent_route: 'philantropy',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

	// Charities
		{
			id: 14,
			name: 'Charities',
			header: 'Charities Header',
			description: 'Charities Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'philantropy/charities',
			parent: [ 'Philantropy' ],
			parent_route: 'philantropy',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		},

///////////////////////////////////////////// Miscellaneous /////////////////////////////////////////////////////////////////

	// Quantum Manipulation
		{
			id: 15,
			name: 'Quantum manipulation',
			header: 'Quantum manipulation Header',
			description: 'Quantum manipulation Description',
			subcategoryImage: 'http://i.imgur.com/Yan9lNj.jpg?1',
			subcategory_route: 'miscellaneous/quantum-manipulation',
			parent: [ 'Miscellaneous' ],
			parent_route: 'miscellaneous',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rMIg9zx.jpg?1',
						caption: 'Slide 1 Caption',
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
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HxX07wL.jpg',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jxXmnWu.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: 'active'

					},
				}]
		},

	// Space Exploration
		{
			id: 16,
			name: 'Space Exploration',
			header: 'Space Exploration Header',
			description: 'Combatives Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'miscellaneous/space-exploration',
			parent: [ 'Miscellaneous' ],
			parent_route: 'miscellaneous',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: 'active'

					},
				}]
		},

	// Macroscopic Analysis
		{
			id: 17,
			name: 'Macroscopic Analysis',
			header: 'Macroscopic Analysis Header',
			description: 'Macroscopic Analysis Description',
			subcategoryImage: 'http://i.imgur.com/5JWrxuZ.jpg?1',
			subcategory_route: 'miscellaneous/macroscopic-analysis',
			parent: [ 'Miscellaneous' ],
			parent_route: 'miscellaneous',
			children: [],
			products: [],
			sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Q7GlQK3.jpg?1',
						caption: 'Slide 1 Caption',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TVMor23.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SbYryxz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rYjm2Go.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
		}

	
	]; // End of subcategories

///////////////////////////////////////////// Service Functions /////////////////////////////////////////////////////////////////

	return {	

		getSubcategoryByRoute: function ( route ) {
			for ( var i = 0; i < subcategories.length; i++ ) {
				if ( subcategories[ i ].subcategory_route === route ) {
					return subcategories[ i ];
				}
			}
		},

		getSubcategoryByCategoryRoute: function ( parent_route ) {

			var childrenSubcategoryList = [];

			for( var i = 0; i < subcategories.length; i ++ ) {
				if( subcategories[ i ].parent_route === parent_route ) {
					childrenSubcategoryList.push( subcategories[ i ] );
				}
			}

			return childrenSubcategoryList;
		},

		getSubcategoryProducts: function ( route ) {
			var self = this; // Context
			var category = this.getByRoute( route ); // Will return ParentSubcategory's route (ex. real-estates/islands) for function to use to retrieve it's Products
			var products = []; // Array for storing ParentCategory's products

			category.products.forEach( function ( childName ) {
				products.push( self.getByRoute( childName ) ); // push data into products Array
			} );

			return products; // returns ParentCategory's children (as an array)
		},

		// getChildrenByParentCategory: function ( parent_category ) {

		// 	var childrenList = []

		// 	for ( var i = 0; i < subcategories.length; i++ ) {
		// 		if ( subcategories[ i ].parent_category === parent_category ) { // if "subcategories.parent_category" key matches the ParentCategory's route key, (ex. "real-estates")
		// 			childrenList.push( subcategories[ i ] ); // push the matched subcategories into a new array called "childrenSubcategoryList"
		// 		}
		// 	}

		// 	return childrenList; // return childrenList Array to Controller
		// },

		getSubcategoryByName: function ( name ) {

			for ( var i = 0; i < subcategories.length; i++ ) {
				if ( subcategories[ i ].name === name ) {
					return subcategories[ i ];
				}
			}
		},

		getSubcategoryById: function ( id ) {
			return subcategory[ id ];
		},

		getAll: function () {
			return subcategories;
		}
	};

});







