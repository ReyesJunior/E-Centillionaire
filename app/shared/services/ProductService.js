
app.factory( 'ProductService', function () { 

	// ProductImage size: 800 x 600px
	// sliderImage: size: 1450 x 900px

	// contains all Products for the Shop: (150) Total
	// Real Estate: Islands (6), Mansions (12), Miscellaneous (12)
	// Business Ventures: Venture Capitalism (6), Investments  (12), Research and development (12)
	// Excursions: Travel (12), Campaigns (12), Festivals (12)
	// Luxury Transport: Aeronautics (6), Terrestrial (6), Aquatics (6)
	// Philantropy: Global initatives (6), NPO (6), Charities (6)
	// Miscellaneous: Quantum manipulation (6), Space Exploration (6), Macroscopic Analysis (6)
	
	var products = [ 

///////////////////////////////////////////// Real Estates /////////////////////////////////////////////////////////////////

// Islands (6)

	{	
		id: 0,
		name: 'World Islands',
		header: 'World Islands',
		description: 'World Islands Description',
		productImage: 'http://i.imgur.com/cAA51nK.jpg?1',
		productRoute: 'real-estates/islands/world-islands',
		parentSubcategory: [ 'Islands' ],
		parentSubcategoryRoute: 'real-estates/islands',
		type: 'Island',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/4TsMdWh.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TGerHX8.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/l35LpZt.jpg?1',
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
	{
		id: 1,
		name: 'Jellyfish',
		header: 'Jellyfish Header',
		description: 'Jellyfish Description',
		productImage: 'http://i.imgur.com/4hgzE8B.jpg?1',
		productRoute: 'real-estates/islands/jellyfish',
		parentSubcategory: [ 'Islands' ],
		parentSubcategoryRoute: 'real-estates/islands',
		type: 'Island',
		size: '83 acres',
		price: 17950000000.00, /* 17.95 Billion, 3 Buildings */
		vendor: 'Peanut Butter',
		stock: 2,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rabQz0S.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1LR91kl.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vBpAsQ5.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/iWQlhqE.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 2,
		name: 'Tetris',
		header: 'Tetris Header',
		description: 'Tetris Description',
		productImage: 'http://i.imgur.com/YiCXLpa.jpg?1',
		productRoute: 'real-estates/islands/tetris',
		parentSubcategory: [ 'Islands' ],
		parentSubcategoryRoute: 'real-estates/islands',
		type: 'Island',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 3,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/uxZAGEO.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/lfuMe06.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/OEopQSk.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/R5DEuYH.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 3,
		name: 'InGen',
		header: 'InGen Header',
		description: 'InGen Description',
		productImage: 'http://i.imgur.com/UZqWdNR.jpg?1',
		productRoute: 'real-estates/islands/ingen',
		parentSubcategory: [ 'Islands' ],
		parentSubcategoryRoute: 'real-estates/islands',
		type: 'Island',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/18WSNpD.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/l0wkPNt.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/UAtNBRx.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/bCDRqMa.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 4,
		name: 'Zodiac',
		header: 'Zodiac Header',
		description: 'Zodiac Description',
		productImage: 'http://i.imgur.com/BOd5nQO.jpg?1',
		productRoute: 'real-estates/islands/zodiac',
		parentSubcategory: [ 'Islands' ],
		parentSubcategoryRoute: 'real-estates/islands',
		type: 'Island',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 4,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/fLss4gI.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/uQk6QlU.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/mIoMIQK.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/B9M2Ose.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 5,
		name: 'Manta Ray',
		header: 'Manta Ray Header',
		description: 'Manta Ray Description',
		productImage: 'http://i.imgur.com/ru6blxx.jpg?1',
		productRoute: 'real-estates/islands/manta-ray',
		parentSubcategory: [ 'Islands' ],
		parentSubcategoryRoute: 'real-estates/islands',
		type: 'Island',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/53aqr5H.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/xlU7UCa.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/R93xv6Q.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ejsAlTV.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Mansions (12)

	{
		id: 6,
		name: 'Rust',
		header: 'Rust Header',
		description: 'Rust Description',
		productImage: 'http://i.imgur.com/7ri6TZU.jpg?1',
		productRoute: 'real-estates/mansions/rust',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/ZKIXSjI.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/51Y1E4H.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KpzHWLl.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/BUA6tho.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 7,
		name: 'Pine',
		header: 'Pine Header',
		description: 'Mansion Description',
		productImage: 'http://i.imgur.com/YbFb4DY.jpg?1',
		productRoute: 'real-estates/mansions/pine',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 4,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/p6Ix73i.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ePWOBhW.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/YSwpzLx.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/c2QhKno.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 8,
		name: 'Bunker',
		header: 'Bunnker Header',
		description: 'Bunker Description',
		productImage: 'http://i.imgur.com/IU40gs9.jpg?1',
		productRoute: 'real-estates/mansions/bunker',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 3,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/RXtbQg8.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/BSbi5um.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/FIkiYNp.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/LxkkWxb.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 9,
		name: 'Samurai',
		header: 'Samurai Header',
		description: 'Samurai Description',
		productImage: 'http://i.imgur.com/n6Us1aV.jpg?1',
		productRoute: 'real-estates/mansions/samurai',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/KMO9NLI.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/oNRw3Xl.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ZEVKGo3.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Ds9VA7j.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 10,
		name: 'Sandstorm',
		header: 'Sandstorm Header',
		description: 'Sansdtorm Description',
		productImage: 'http://i.imgur.com/hUGlkSn.jpg?1',
		productRoute: 'real-estates/mansions/sandstorm',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/xn5UlDV.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/8Be3U63.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/JhriXRf.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1iMmLBG.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 11,
		name: 'Kamino',
		header: 'Kamino Header',
		description: 'Kamino Description',
		productImage: 'http://i.imgur.com/FK79O49.jpg?1',
		productRoute: 'real-estates/mansions/kamino',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 2,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/HU5aPSx.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/y3HZxIW.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/II2q20i.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/iKLXGVR.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 12,
		name: 'Minimal',
		header: 'Minimal Header',
		description: 'Minimal Description',
		productImage: 'http://i.imgur.com/Pd65JV0.jpg?1',
		productRoute: 'real-estates/mansions/minimal',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 2,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/LGliD9J.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/CC54O6z.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/05jknsR.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1bvAHp8.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 13,
		name: 'Tropic',
		header: 'Tropic Header',
		description: 'Tropic Description',
		productImage: 'http://i.imgur.com/oSCdIam.jpg?1',
		productRoute: 'real-estates/mansions/tropic',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Kq7ybTT.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/S7cawH1.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IkUUqEp.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/N9qy9Zn.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 14,
		name: 'Keiser',
		header: 'Keiser Header',
		description: 'Keiser Description',
		productImage: 'http://i.imgur.com/b7StArf.jpg?1',
		productRoute: 'real-estates/mansions/keiser',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 3,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/WSFJlFw.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/f23IZ5R.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hdNe6cW.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/55ism4A.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 15,
		name: 'Titanium Falcon',
		header: 'Titanium Falcon Header',
		description: 'Titanium Falcon Description',
		productImage: 'http://i.imgur.com/XAXbbBU.jpg?1',
		productRoute: 'real-estates/mansions/titanium-falcon',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/sbN30U6.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/UHWTAWd.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/R074Zve.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IHqrUiA.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 16,
		name: 'Waterfall',
		header: 'Waterfall Header',
		description: 'Waterfall Description',
		productImage: 'http://i.imgur.com/sayAnpE.jpg?1',
		productRoute: 'real-estates/mansions/waterfall',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/tJ4Kgnm.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/FqxyaIE.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/syjZilp.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/FgqnNn8.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 17,
		name: 'Ice',
		header: 'Ice Header',
		description: 'Ice Description',
		productImage: 'http://i.imgur.com/DJ3JHX0.jpg?1',
		productRoute: 'real-estates/mansions/ice',
		parentSubcategory: [ 'Mansions' ],
		parentSubcategoryRoute: 'real-estates/mansions',
		type: 'Mansion',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rxpG1GC.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/bcVWcaw.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/gfl9BnB.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/zgw4rf1.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Miscellaneous (12)

	{
		id: 18,
		name: 'Tree House',
		header: 'Tree House Header',
		description: 'Tree House Description',
		productImage: 'http://i.imgur.com/IpAEsbt.jpg?1',
		productRoute: 'real-estates/miscellaneous/tree-house',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Ij7R0O2.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/3QKxmbq.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jN74913.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/bxPcKAU.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 19,
		name: 'Bubble',
		header: 'Bubble Header',
		description: 'Bubble Description',
		productImage: 'http://i.imgur.com/bmQqYd4.jpg?1',
		productRoute: 'real-estates/miscellaneous/bubble',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/lecrTct.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fEBNdpv.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/zqYGekq.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ms32OKt.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 20,
		name: 'Crawler',
		header: 'Crawler Header',
		description: 'Crawler Description',
		productImage: 'http://i.imgur.com/m2Er5Kb.jpg?1',
		productRoute: 'real-estates/miscellaneous/crawler',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 12,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/1WOB6Cg.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/oHJU9Ln.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/zV3R9QM.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/CnVLELx.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 21,
		name: 'Deep Sea',
		header: 'Deep Sea Header',
		description: 'Deep Sea Description',
		productImage: 'http://i.imgur.com/9AvBGhU.jpg?1',
		productRoute: 'real-estates/miscellaneous/deep-sea',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 11,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/pOfuywn.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Qhmgf4f.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/RO3PVOj.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/yx44xeY.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 22,
		name: 'Tron',
		header: 'Tron Header',
		description: 'Tron Description',
		productImage: 'http://i.imgur.com/MGsWoZ7.jpg?1',
		productRoute: 'real-estates/miscellaneous/tron',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 3,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Zfrt81K.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Yp7uSmZ.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1gk7rSJ.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/utHMMuC.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 23,
		name: 'Jenga',
		header: 'Jenga Header',
		description: 'Jenga Description',
		productImage: 'http://i.imgur.com/0kJdCfv.jpg?1',
		productRoute: 'real-estates/miscellaneous/jenga',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/4QPTh8G.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/gHDlbTh.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vAyLMao.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/T3XkJHu.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 24,
		name: 'Mirror',
		header: 'Mirror Header',
		description: 'Mirror Description',
		productImage: 'http://i.imgur.com/fWE5atL.jpg?1',
		productRoute: 'real-estates/miscellaneous/mirror',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/aqEjSMl.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/OrRTzoQ.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/z4AwTXh.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HmsENhc.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 25,
		name: 'Chill',
		header: 'Chill Header',
		description: 'Chill Description',
		productImage: 'http://i.imgur.com/xXbIIrU.jpg?1',
		productRoute: 'real-estates/miscellaneous/chill',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/BICwMFf.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/iUgmPAU.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/AxdYjHh.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Hjs4SVV.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 26,
		name: 'Virtual Reality',
		header: 'Virtual Reality Header',
		description: 'Virtual Reality Description',
		productImage: 'http://i.imgur.com/wUGiGQH.jpg?1',
		productRoute: 'real-estates/miscellaneous/virtual-reality',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/PXokFX9.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/owv53wo.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/txO3XSo.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/GoHqHJi.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 27,
		name: 'Meteor',
		header: 'Meteor Header',
		description: 'Meteor Description',
		productImage: 'http://i.imgur.com/yZZTpKd.jpg?1',
		productRoute: 'real-estates/miscellaneous/meteor',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 10,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Jfw5wps.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/FV3gcLK.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/q7dANjP.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/3ihKbac.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 28,
		name: 'Golem',
		header: 'Golem Header',
		description: 'Golem Description',
		productImage: 'http://i.imgur.com/F1ZFk83.jpg?1',
		productRoute: 'real-estates/miscellaneous/golem',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/HZuTVbh.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7dTxlqC.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/RYwsRzw.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/WqSznt8.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 29,
		name: 'Gravity',
		header: 'Gravity Header',
		description: 'Gravity Description',
		productImage: 'http://i.imgur.com/ViHdWHg.jpg?1',
		productRoute: 'real-estates/miscellaneous/gravity',
		parentSubcategory: [ 'Miscellaneous' ],
		parentSubcategoryRoute: 'real-estates/miscellaneous',
		type: 'Miscellaneous',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/VRDAVCk.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/nfwauHh.jpg?2',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/U0kL378.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/v31dk9F.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

///////////////////////////////////////////// Business Ventures /////////////////////////////////////////////////////////////////

// Venture Capitalism (6)

	{	
		id: 30,
		name: 'Car-roomba',
		header: 'Car-roomba Header',
		description: 'Car-roomba Description',
		productImage: 'http://i.imgur.com/JlDYuR2.jpg?1',
		productRoute: 'business-ventures/venture-capitalism/car-roomba',
		parentSubcategory: [ 'Venture-Capitalism' ],
		parentSubcategoryRoute: 'business-ventures/venture-capitalism',
		type: 'Venture Capitalism',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/hy9srz6.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/FdPj5Cr.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/kWSA1dO.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/AJJBM9v.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 31,
		name: 'Drone Coffee Delivery',
		header: 'Drone Coffee Delivery Capitalism Header',
		description: 'Drone Coffee Delivery Description',
		productImage: 'http://i.imgur.com/QzgUhxo.jpg?1',
		productRoute: 'business-ventures/venture-capitalism/drone-coffee-delivery',
		parentSubcategory: [ 'Venture-Capitalism' ],
		parentSubcategoryRoute: 'business-ventures/venture-capitalism',
		type: 'Venture Capitalism',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/EenU9CC.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/DfRiOit.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Tazas8m.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fiU3MtX.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 32,
		name: 'Stroller League',
		header: 'Stroller League Header',
		description: 'Stroller League Description',
		productImage: 'http://i.imgur.com/qppjIke.jpg?1',
		productRoute: 'business-ventures/venture-capitalism/stroller-league',
		parentSubcategory: [ 'Venture-Capitalism' ],
		parentSubcategoryRoute: 'business-ventures/venture-capitalism',
		type: 'Venture Capitalism',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 10,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/myMOyL3.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1ElA5iq.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ALmf15j.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/73tuY1m.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 33,
		name: 'Animal Tails',
		header: 'Animal Tails Header',
		description: 'Animal Tails Description',
		productImage: 'http://i.imgur.com/jKrVshF.jpg?1',
		productRoute: 'business-ventures/venture-capitalism/animal-tails',
		parentSubcategory: [ 'Venture-Capitalism' ],
		parentSubcategoryRoute: 'business-ventures/venture-capitalism',
		type: 'Venture Capitalism',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/PiL4aF5.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/2Iivv7E.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/3VXCE6H.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rhmlBYA.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 34,
		name: 'Cloud Pillows',
		header: 'Cloud Pillows Header',
		description: 'Cloud Pillows Description',
		productImage: 'http://i.imgur.com/yDxUnXJ.jpg?1',
		productRoute: 'business-ventures/venture-capitalism/cloud-pillows',
		parentSubcategory: [ 'Venture-Capitalism' ],
		parentSubcategoryRoute: 'business-ventures/venture-capitalism',
		type: 'Venture Capitalism',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 10,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Pvm7ZOC.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/CxCwwC8.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/A5jznOd.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7UsyDIl.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 35,
		name: 'Smart Fridge',
		header: 'Smart Fridge Header',
		description: 'Smart Fridge Description',
		productImage: 'http://i.imgur.com/60RXZVL.jpg?1',
		productRoute: 'business-ventures/venture-capitalism/smart-fridge',
		parentSubcategory: [ 'Venture-Capitalism' ],
		parentSubcategoryRoute: 'business-ventures/venture-capitalism',
		type: 'Venture Capitalism',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 8,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/oT4JuxK.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/bW1IMUW.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/DrAGXAl.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/FOqICzP.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Investments (12)

	{
		id: 36,
		name: 'Bionic Enhancements',
		header: 'Bionic Enhancements Header',
		description: 'Bionic Enhancements Description',
		productImage: 'http://i.imgur.com/8UMKRGz.jpg?2',
		productRoute: 'business-ventures/investments/bionic-enhancements',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 15,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/3YWCu8a.jpg?2',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ACuS8j3.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/JUjvWbD.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IegSeO3.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 37,
		name: 'Virtual Reality',
		header: 'Virtual Reality Header',
		description: 'Virtual Reality Description',
		productImage: 'http://i.imgur.com/x08GxI5.jpg?1',
		productRoute: 'business-ventures/investments/virtual-reality',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 6,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/P5uQZGr.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/UQbBhfa.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rPhL2ad.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/cHFlfuc.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 38,
		name: 'Wireless Electricity',
		header: 'Wireless Electricity Header',
		description: 'Wireless Electricity Description',
		productImage: 'http://i.imgur.com/y5r7CwE.jpg?1',
		productRoute: 'business-ventures/investments/wireless-electricity',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 16,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/szHeFYl.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vXHn4tE.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1P2QWAn.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/JJcO3FF.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 38,
		name: 'Bio-mimicking Solar Leaves',
		header: 'Bio-mimicking Solar Leaves Header',
		description: 'Bio-mimicking Solar Leaves Description',
		productImage: 'http://i.imgur.com/RLu0LdB.jpg?1',
		productRoute: 'business-ventures/investments/bio-mimicking-solar-leaves',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 4,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/5fLMLkj.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KYUiEIl.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/mz7UPKW.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hiu7tyX.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 40,
		name: 'Printable Solar Panels',
		header: 'Printable Solar Panels Header',
		description: 'Printable Paper Solar Panels Description',
		productImage: 'http://i.imgur.com/TdAYGc0.jpg?1',
		productRoute: 'business-ventures/investments/printable-solar-panels',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/YPQR7qC.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/qEtiCOt.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/UhzWxhT.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/PlNR4zw.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 41,
		name: 'Exercise Generators',
		header: 'Exercise Generators Header',
		description: 'Exercise Generators Description',
		productImage: 'http://i.imgur.com/MkiOpV9.jpg?1',
		productRoute: 'business-ventures/investments/exercise-generators',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 0,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/qO1bb50.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/LJtloiy.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/P4pHxHo.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/FZ4u5DQ.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 42,
		name: 'Solar Paint',
		header: 'Solar Paint Header',
		description: 'Solar Paint Description',
		productImage: 'http://i.imgur.com/PZZziZs.jpg?1',
		productRoute: 'business-ventures/investments/solar-paint',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 12,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/RIOfnj8.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/3DaQrys.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/AWVvYKu.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Eeq2Uld.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 43,
		name: 'Airwaves Mask 8',
		header: 'Airwaves Mask Header',
		description: 'Airwaves Mask Description',
		productImage: 'http://i.imgur.com/rhEDJYQ.jpg?1',
		productRoute: 'business-ventures/investments/airwaves-mask',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/I8XZ0Oq.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/G6QsPWd.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/phWsnCv.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/X9OS7cQ.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 44,
		name: 'Myo-Band',
		header: 'Myo-Band Header',
		description: 'Myo-Band Description',
		productImage: 'http://i.imgur.com/ayjRscd.jpg?1',
		productRoute: 'business-ventures/investments/myo-band',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 13,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/xyIdP8t.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/G06QJ04.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/YigWysj.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/QT5rqgm.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 45,
		name: 'Projection Mapping',
		header: 'Projection Mapping Header',
		description: 'Projection Mapping Description',
		productImage: 'http://i.imgur.com/zIIlNLI.jpg?1',
		productRoute: 'business-ventures/investments/projection-mapping',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 15,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/baL6YpJ.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/P4sv5gs.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IfE8vp7.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/lO1Ttc2.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 46,
		name: 'Combat Readiness',
		header: 'Combat Readiness Header',
		description: 'Combat Readiness Description',
		productImage: 'http://i.imgur.com/1D2tDxT.jpg?1',
		productRoute: 'business-ventures/investments/combat-readiness',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 3,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/wZdXPew.jpg?2',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/RClmrLx.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Lcxn44C.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hexGGfw.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 47,
		name: 'Floating Furniture',
		header: 'Floating Furniture Header',
		description: 'Floating Furniture Description',
		productImage: 'http://i.imgur.com/ildpTbj.jpg?1',
		productRoute: 'business-ventures/investments/floating-furniture',
		parentSubcategory: [ 'Investments' ],
		parentSubcategoryRoute: 'business-ventures/investments',
		type: 'Investments',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 3,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/bEMmXvR.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ORlLDC6.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/kEFwiqF.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rvJztVw.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Research & Development (12)

	{
		id: 48,
		name: 'Cybernetics',
		header: 'Cybernetics Header',
		description: 'Cybernetics Description',
		productImage: 'http://i.imgur.com/rkjOsyc.jpg?1',
		productRoute: 'business-ventures/research-and-development/cybernetics',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		stock: 1,
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/IXt84d5.jpg?2',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/c4lNE4V.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6obF9nX.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XkL0Ciz.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 49,
		name: 'Organ Growth',
		header: 'Organ Growth Header',
		description: 'Organ Growth Description',
		productImage: 'http://i.imgur.com/FcZZmpY.jpg?1',
		productRoute: 'business-ventures/research-and-development/organ-growth',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/WrOxZCe.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jpjjB0S.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/tg7OfyS.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hP1zuSD.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 50,
		name: 'Mind Uploading',
		header: 'Mind Uploading Header',
		description: 'Mind Uploading Description',
		productImage: 'http://i.imgur.com/hIr9trj.jpg?1',
		productRoute: 'business-ventures/research-and-development/mind-uploading',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/euRsOEp.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Khv2Kg9.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ALZeXIQ.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wKLijLu.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 51,
		name: 'Renewable Energy',
		header: 'Renewable Energy Header',
		description: 'Renewable Energy Description',
		productImage: 'http://i.imgur.com/3eVtuOG.jpg?1',
		productRoute: 'business-ventures/research-and-development/renewable-energy',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/OatOMwe.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/iG7g2Sp.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/t1Y8XON.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/c9OLU9I.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 52,
		name: 'Robotics',
		header: 'Robotics Header',
		description: 'Robotics Description',
		productImage: 'http://i.imgur.com/nnDUcSp.jpg?1',
		productRoute: 'business-ventures/research-and-development/robotics',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/WoCbP0b.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/cJRvFf3.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/qX7Whlr.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XnNCEN6.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 53,
		name: 'Drought-resistant Plants',
		header: 'Drought-resistant Plants Header',
		description: 'Drought-resistant Plants Description',
		productImage: 'http://i.imgur.com/W6oYZFL.jpg?1',
		productRoute: 'business-ventures/research-and-development/drought-resistant-plants',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/KWkCuoP.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/NDn8xz5.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/YnslWX8.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/bFLKzrr.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 54,
		name: 'Artificial Intelligence',
		header: 'Artificial Intelligence Header',
		description: 'Artificial Intelligence Description',
		productImage: 'http://i.imgur.com/0G8oJSd.jpg?1',
		productRoute: 'business-ventures/research-and-development/artificial-intelligence',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/z4ScFGw.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7vvSZgo.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XUgGVOM.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/WqDoSRh.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 55,
		name: 'Exoskeletons',
		header: 'Exoskeletons Header',
		description: 'Exoskeletons Description',
		productImage: 'http://i.imgur.com/XxIFR8V.jpg?1',
		productRoute: 'business-ventures/research-and-development/exoskeletons',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/QZRqr0y.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/0gIxak2.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/phuLWb6.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vC2Azv6.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 56,
		name: 'Augmented Reality',
		header: 'Augmented Reality Header',
		description: 'Augmented Reality Description',
		productImage: 'http://i.imgur.com/hp6a17Y.jpg?1',
		productRoute: 'business-ventures/research-and-development/augmented-reality',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/D1uhzMh.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/pbSh78l.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/uGHJWOc.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/D88D8tE.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 57,
		name: 'Cryogenics',
		header: 'Cryogenics Header',
		description: 'Research \& Development Description',
		productImage: 'http://i.imgur.com/9quoTGc.jpg?1',
		productRoute: 'business-ventures/research-and-development/cryogenics',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/JKRCBE4.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/J7zbLG0.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/dcNWLgL.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6j66N5R.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 58,
		name: 'Biospheres',
		header: 'Biospheres Header',
		description: 'Biospheres Description',
		productImage: 'http://i.imgur.com/Vo8VDoW.jpg?1',
		productRoute: 'business-ventures/research-and-development/biospheres',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/eRKIqqE.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/YVzWNPx.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/U9PMRYG.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/JqDzylL.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 59,
		name: 'Nano-materials',
		header: 'Nano-materials Header',
		description: 'Nano-materials Description',
		productImage: 'http://i.imgur.com/ERlhNOV.jpg?1',
		productRoute: 'business-ventures/research-and-development/nano-materials',
		parentSubcategory: [ 'Research-and-Development' ],
		parentSubcategoryRoute: 'business-ventures/research-and-development',
		type: 'Research \& Development',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/8jkVswx.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/yuD9ZDm.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/UeHHOtM.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/a9WnC4V.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

///////////////////////////////////////////// Excursions /////////////////////////////////////////////////////////////////

// Travel (12)

	{	
		id: 60,
		name: 'Turkmenistan',
		header: 'Turkmenistan Header',
		description: 'Turkmenistan Description',
		productImage: 'http://i.imgur.com/t1OSUgW.jpg?1',
		productRoute: 'excursions/travel/turkmenistan',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rcUx204.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ETmGRVi.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/pn5rG4V.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/d6nQts5.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 61,
		name: 'Nauru',
		header: 'Nauru Header',
		description: 'Nauru Description',
		productImage: 'http://i.imgur.com/pRWemay.jpg?1',
		productRoute: 'excursions/travel/nauru',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/gwhIhpX.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/owSrDYH.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/mJFiZAs.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/2ReyrWw.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 62,
		name: 'Jan Mayen',
		header: 'Jan Mayen Header',
		description: 'Jan Mayen Description',
		productImage: 'http://i.imgur.com/0H7xS7A.jpg?1',
		productRoute: 'excursions/travel/jan-mayen',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/RjCjsVg.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/LPz1AKl.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/RqzH6rR.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/yiBdfe8.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 63,
		name: 'Cueva de los Cristales',
		header: 'Cueva de los Cristales Header',
		description: 'Cueva de los Cristales Description',
		productImage: 'http://i.imgur.com/DLTjnmZ.jpg?1',
		productRoute: 'excursions/travel/cueva-de-los-cristales',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Mirgh7D.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HRpWqxy.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SyGwgku.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Y0487Rq.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 64,
		name: 'Chernobyl',
		header: 'Chernobyl Header',
		description: 'Chernobyl Description',
		productImage: 'http://i.imgur.com/eRf7lzI.jpg?1',
		productRoute: 'excursions/travel/chernobyl',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/BWlgfhp.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XM9mWTO.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rzwrvuV.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/o5X8uVy.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 65,
		name: 'Area 51',
		header: 'Area 51 Header',
		description: 'Area 51 Description',
		productImage: 'http://i.imgur.com/3nO64it.jpg?1',
		productRoute: 'excursions/travel/area-fifty-one',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/8M5kqM2.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/mC7wj9B.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KUiALye.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IwB9UUS.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 66,
		name: 'Dark Side of the Moon',
		header: 'Dark Side of the Moon Header',
		description: 'Dark Side of the Moon Description',
		productImage: 'http://i.imgur.com/iqmyMHd.jpg?1',
		productRoute: 'excursions/travel/dark-side-of-the-moon',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/qJzDAoh.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vU88i2J.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/URSpQOK.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Mp5t2xa.png?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 67,
		name: 'Bohemian Grove',
		header: 'Bohemian Grove Header',
		description: 'Bohemian Grove Description',
		productImage: 'http://i.imgur.com/irJx3Nk.jpg?1',
		productRoute: 'excursions/travel/bohemian-grove',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Hp0etW3.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/DSMCbN6.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/WeFh1yS.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/gI5Xiif.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 68,
		name: 'Mars',
		header: 'Mars Header',
		description: 'Travel Description',
		productImage: 'http://i.imgur.com/y2D96qs.jpg?1',
		productRoute: 'excursions/travel/mars',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/7rHphp2.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/dX9kAOH.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vK17Bur.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vaovFMQ.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 69,
		name: 'Lascaux',
		header: 'Lascaux Header',
		description: 'Lascaux Description',
		productImage: 'http://i.imgur.com/Tn2PhfH.jpg?1',
		productRoute: 'excursions/travel/lascaux',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/GuKwMd1.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Iz2diJu.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/NA6VFQP.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/L4xLQ7A.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 70,
		name: 'Mariana Trench',
		header: 'Mariana Trench Header',
		description: 'Mariana Trench Description',
		productImage: 'http://i.imgur.com/WdknJpn.jpg?1',
		productRoute: 'excursions/travel/mariana-trench',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/7vNc6Nh.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/UFA2d9X.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/LkGmn9o.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/lkKm5Hm.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 71,
		name: '4th Dimension',
		header: '4th Dimension Header',
		description: '4th Dimension Description',
		productImage: 'http://i.imgur.com/OPJIEIn.jpg?1',
		productRoute: 'excursions/travel/fourth-dimension',
		parentSubcategory: [ 'Travel' ],
		parentSubcategoryRoute: 'excursions/travel',
		type: 'Travel',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/2w3w3YX.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/22D4Xud.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Ammc2Sm.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vDRuf43.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Campaigns (12)

	{
		id: 72,
		name: 'Map Out French Catacombs',
		header: 'Map Out French Catacombs Header',
		description: 'Map Out French Catacombs Description',
		productImage: 'http://i.imgur.com/Tpke7F4.jpg?1',
		productRoute: 'excursions/campaigns/map-out-french-catacombs',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/UqPNrEk.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6fZAx6K.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IwwQBzn.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/9YJ9vJD.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 73,
		name: 'Climb Mt. Everest',
		header: 'Climb Mt. Everest Header',
		description: 'Climb Mt. Everest Description',
		productImage: 'http://i.imgur.com/nDjQbEE.jpg?1',
		productRoute: 'excursions/campaigns/climb-mt-everest',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/2C7RCsD.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Jra96Q0.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vBe0zwa.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HnpMUa4.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 74,
		name: 'Walk the Great Wall of China',
		header: 'Walk the Great Wall of China Header',
		description: 'Walk the Great Wall of China Description',
		productImage: 'http://i.imgur.com/bfNfmLh.jpg?1',
		productRoute: 'excursions/campaigns/walk-the-great-wall-of-china',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/ZZE3FHd.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/xjvpRrX.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/tr5KwiF.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1i3gT9D.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 75,
		name: 'Cross Sahara Desert',
		header: 'Cross Sahara Desert Header',
		description: 'Cross Sahara Desert Description',
		productImage: 'http://i.imgur.com/16ZI7Ay.jpg?1',
		productRoute: 'excursions/campaigns/cross-sahara-desert',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/QPVAhXW.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/tvIjz7V.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/WKmYO9I.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/pz9Smbp.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 76,
		name: 'Complete an Ironman',
		header: 'Complete an Ironman Header',
		description: 'Complete an Ironman Description',
		productImage: 'http://i.imgur.com/kydT4r0.jpg?1',
		productRoute: 'excursions/campaigns/complete-an-ironman',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/f6HzV2o.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/gpQD1rT.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1lXHGQw.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/yw30Oq3.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 77,
		name: 'L.A.R.P. in the Roman Coliseum',
		header: 'L.A.R.P. in the Roman Coliseum Header',
		description: 'L.A.R.P. in the Roman Coliseum Description',
		productImage: 'http://i.imgur.com/PHla75h.jpg?1',
		productRoute: 'excursions/campaigns/larp-in-the-roman-coliseum',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/RPOrzJf.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/uJbDLg0.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/xc1h2Oh.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vEhBD09.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 78,
		name: 'Complete Great Serengeti Migration',
		header: 'Complete Great Serengeti Migration Header',
		description: 'Complete Great Serengeti Migration Description',
		productImage: 'http://i.imgur.com/cViE0hU.jpg?1',
		productRoute: 'excursions/campaigns/complete-great-serengeti-migration',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/bXVfSaU.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/M9wF70i.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/QdF6ppT.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ZFF03dX.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 79,
		name: 'Trade in the Silk Road',
		header: 'Trade in the Silk Road Header',
		description: 'Trade in the Silk Road Description',
		productImage: 'http://i.imgur.com/O0Z5hw4.jpg?1',
		productRoute: 'excursions/campaigns/trade-in-the-silk-road',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/p7KWb5f.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/00puqgy.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/oadfym9.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jb77nSP.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 80,
		name: 'Trip Across the Americas',
		header: 'Trip Across the Americas Header',
		description: 'Trip Across the Americas Description',
		productImage: 'http://i.imgur.com/zKoNnsv.jpg?1',
		productRoute: 'excursions/campaigns/trip-across-the-americas',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/K3rwOrI.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jG9dg9A.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/0mblA5a.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7ampxsn.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 81,
		name: 'Trip Across Europe and Asia',
		header: 'Trip Across Europe and Asia Header',
		description: 'Trip Across Europe and Asia Description',
		productImage: 'http://i.imgur.com/sviwWmm.jpg?1',
		productRoute: 'excursions/campaigns/trip-across-europe-and-asia',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/LCRJSRs.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/5kNqAZ0.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/zNy3JEt.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/uaYf8YT.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 82,
		name: 'Trip Across Africa',
		header: 'Trip Across Africa Header',
		description: 'Trip Across Africa Description',
		productImage: 'http://i.imgur.com/YYbWBtx.jpg?1',
		productRoute: 'excursions/campaigns/trip-across-africa',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/szg616l.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/0jz3pDe.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hYMCguB.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XuQ95Fm.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 83,
		name: 'Trip Across Australia and Antarctica',
		header: 'Trip Across Australia and Antarctica Header',
		description: 'Trip Across Australia and Antarctica Description',
		productImage: 'http://i.imgur.com/NlXnEnQ.jpg?1',
		productRoute: 'excursions/campaigns/trip-across-australia-and-antarctica',
		parentSubcategory: [ 'Campaigns' ],
		parentSubcategoryRoute: 'excursions/campaigns',
		type: 'Campaign',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/O1MY6gj.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/l0xJ9rD.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/xsYKjNj.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/yBAi6ae.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Festivals (12)

	{
		id: 84,
		name: 'Snow + Ice Festival',
		header: 'Snow + Ice Festival Header',
		description: 'Snow + Ice Festival Description',
		productImage: 'http://i.imgur.com/8kA3oWd.jpg?1',
		productRoute: 'excursions/festivals/snow-and-ice-festival',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/fAAFxE2.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/RVgmAeQ.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wRmdLjV.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Dp7vDON.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 85,
		name: 'Holi Festival',
		header: 'Holi Festival Header',
		description: 'Holi Festival Description',
		productImage: 'http://i.imgur.com/Szoq2Yu.jpg?1',
		productRoute: 'excursions/festivals/holi-festival',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/zD01ZkK.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/oHHsr2C.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jn1p7TY.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/zQMllXd.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 86,
		name: 'Cascamorras',
		header: 'Cascamorras Header',
		description: 'Cascamorras Description',
		productImage: 'http://i.imgur.com/LxGCRFh.jpg?1',
		productRoute: 'excursions/festivals/cascamorras',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/ylBWOPy.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Sb573uK.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/lSbHbdS.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TPlhsmo.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 87,
		name: 'Carneval',
		header: 'Carneval Header',
		description: 'Carneval Description',
		productImage: 'http://i.imgur.com/c5Pu7jE.jpg?1',
		productRoute: 'excursions/festivals/carneval',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/WlEcO2m.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/8QZTqpy.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fbSl0rC.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7AoGh1O.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 88,
		name: 'Up Helly Aa Fire',
		header: 'Up Helly Aa Fire Header',
		description: 'Up Helly Aa Fire Description',
		productImage: 'http://i.imgur.com/xBd4jYm.jpg?1',
		productRoute: 'excursions/festivals/up-helly-aa-fire',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/c2X9vce.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6SUnWzj.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/qOmARg9.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ZtOzYWJ.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 89,
		name: 'Mardi Gras',
		header: 'Mardi Gras Header',
		description: 'Mardi Gras Description',
		productImage: 'http://i.imgur.com/CwXOHDx.jpg?1',
		productRoute: 'excursions/festivals/mardi-gras',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/v03iXah.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/y02MTrI.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/4IlfxWI.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/gW3e4CZ.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 90,
		name: 'Oktoberfest',
		header: 'Oktoberfest Header',
		description: 'Oktoberfest Description',
		productImage: 'http://i.imgur.com/OsEbDCa.jpg?1',
		productRoute: 'excursions/festivals/oktoberfest',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Ve9NeO2.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ple1W2z.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ORYjK83.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/jiiQe45.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 91,
		name: 'La Tomatina',
		header: 'La Tomatina Header',
		description: 'La Tomatina Description',
		productImage: 'http://i.imgur.com/SiRHIl9.jpg?1',
		productRoute: 'excursions/festivals/la-tomatina',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/6CJfdhN.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/gQAxdam.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/geoipcl.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/v38UgWr.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 92,
		name: 'Carnival',
		header: 'Carnival Header',
		description: 'Carnival Description',
		productImage: 'http://i.imgur.com/c2NqTg6.jpg?1',
		productRoute: 'excursions/festivals/carnival',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/9FDHyjk.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ejhXzTa.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/PLZGevc.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/BiHP99z.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 93,
		name: 'Running of the Bulls',
		header: 'Running of the Bulls Header',
		description: 'Running of the Bulls Description',
		productImage: 'http://i.imgur.com/YC4Ct7g.jpg?1',
		productRoute: 'excursions/festivals/running-of-the-bulls',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/S5D38kK.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/X9K4pt2.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/T1s8cdA.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/biwKgJm.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 94,
		name: 'Burning Man',
		header: 'Burning Man Header',
		description: 'Burning Man Description',
		productImage: 'http://i.imgur.com/Q6YV7DZ.jpg?1',
		productRoute: 'excursions/festivals/burning-man',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/ZACwRaq.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/DaEyan2.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/iFowHwb.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1NQ9l6U.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 95,
		name: 'Lantern Festival',
		header: 'Lantern Festival Header',
		description: 'Lantern Festival Description',
		productImage: 'http://i.imgur.com/xG4RDwy.jpg?1',
		productRoute: 'excursions/festivals/lantern-festival',
		parentSubcategory: [ 'Festivals' ],
		parentSubcategoryRoute: 'excursions/festivals',
		type: 'Festival',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/RfW8WwT.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TcJv9u5.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/4mMVMzt.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/9bzCqMI.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

///////////////////////////////////////////// Luxury Transport /////////////////////////////////////////////////////////////////

// Aeronautics (6)

	{	
		id: 96,
		name: 'Progress Eagle',
		header: 'Progress Eagle Header',
		description: 'Progress Eagle Description',
		productImage: 'http://i.imgur.com/z5NAbAI.jpg?1',
		productRoute: 'luxury-transport/aeronautics/progress-eagle',
		parentSubcategory: [ 'Aeronautics' ],
		parentSubcategoryRoute: 'luxury-transport/aeronautics',
		type: 'Aeronautics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/fU2rLth.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/q9OhM6r.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/G4jDQwr.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/70Em9cC.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 97,
		name: 'FA-37 Talon',
		header: 'FA-37 Talon Header',
		description: 'FA-37 Talon Description',
		productImage: 'http://i.imgur.com/9uwwjmm.jpg?1',
		productRoute: 'luxury-transport/aeronautics/fa-37-talon',
		parentSubcategory: [ 'Aeronautics' ],
		parentSubcategoryRoute: 'luxury-transport/aeronautics',
		type: 'Aeronautics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/uJFXii5.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/yZzVIqd.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rWlZeC7.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/lPWKiaA.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 98,
		name: 'Aether Airship',
		header: 'Aether Airship Header',
		description: 'Aether Airship Description',
		productImage: 'http://i.imgur.com/Up4z9C2.jpg?1',
		productRoute: 'luxury-transport/aeronautics/aether-airship',
		parentSubcategory: [ 'Aeronautics' ],
		parentSubcategoryRoute: 'luxury-transport/aeronautics',
		type: 'Aeronautics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/BYuG1nn.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wtalVhp.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/avoUtgn.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/N12EgAw.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 99,
		name: 'Cobalt Valkyrie',
		header: 'Cobalt Valkyrie Header',
		description: 'Cobalt Valkyrie Description',
		productImage: 'http://i.imgur.com/Sjgtba9.jpg?1',
		productRoute: 'luxury-transport/aeronautics/cobalt-valkyrie',
		parentSubcategory: [ 'Aeronautics' ],
		parentSubcategoryRoute: 'luxury-transport/aeronautics',
		type: 'Aeronautics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/uMjWeBN.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ZvTUP0G.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Qq6vhqB.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hF9Q22G.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 105,
		name: 'L Craft',
		header: 'L Craft Header',
		description: 'L Craft Description',
		productImage: 'http://i.imgur.com/jHKJoQT.jpg?1',
		productRoute: 'luxury-transport/aeronautics/l-craft',
		parentSubcategory: [ 'Aeronautics' ],
		parentSubcategoryRoute: 'luxury-transport/aeronautics',
		type: 'Aeronautics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/dRuPuu2.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/GuTUX3v.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/d3tZVzF.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Bu4WvjR.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 101,
		name: 'Encher Craft',
		header: 'Encher Craft Header',
		description: 'Encher Craft Description',
		productImage: 'http://i.imgur.com/B1X0f7O.jpg?1',
		productRoute: 'luxury-transport/aeronautics/encher-craft',
		parentSubcategory: [ 'Aeronautics' ],
		parentSubcategoryRoute: 'luxury-transport/aeronautics',
		type: 'Aeronautics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/0UzW3XM.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SFt60J2.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7oYSflx.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fB7N3xy.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Terrestrial (6)

	{
		id: 102,
		name: 'Scarab-E',
		header: 'Scarab-E Header',
		description: 'Scarab-E Description',
		productImage: 'http://i.imgur.com/xowoKyk.jpg?1',
		productRoute: 'luxury-transport/terrestrial/scarab-e',
		parentSubcategory: [ 'Terrestrial' ],
		parentSubcategoryRoute: 'luxury-transport/terrestrial',
		type: 'Terrestrial',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/5JTvAes.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/R2XiAD9.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/coqiszG.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/u6CP9ol.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 103,
		name: 'Nike One',
		header: 'Nike One Header',
		description: 'Nike One Description',
		productImage: 'http://i.imgur.com/rupdlbL.jpg?1',
		productRoute: 'luxury-transport/terrestrial/nike-one',
		parentSubcategory: [ 'Terrestrial' ],
		parentSubcategoryRoute: 'luxury-transport/terrestrial',
		type: 'Terrestrial',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/R9ENdjb.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vUYkRmZ.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IBOaYYD.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1pbg34S.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 104,
		name: 'Audi Avatar',
		header: 'Audi Avatar Header',
		description: 'Audi Avatar Description',
		productImage: 'http://i.imgur.com/zMbmDCs.jpg?1',
		productRoute: 'luxury-transport/terrestrial/audi-avatar',
		parentSubcategory: [ 'Terrestrial' ],
		parentSubcategoryRoute: 'luxury-transport/terrestrial',
		type: 'Terrestrial',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/bHbXl14.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/5N9291P.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/NOoxGYz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/GiyA8yS.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 105,
		name: 'Sidewinder',
		header: 'Sidewinder Header',
		description: 'Sidewinder Description',
		productImage: 'http://i.imgur.com/2wr9cpv.jpg?2',
		productRoute: 'luxury-transport/terrestrial/sidewinder',
		parentSubcategory: [ 'Terrestrial' ],
		parentSubcategoryRoute: 'luxury-transport/terrestrial',
		type: 'Terrestrial',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/hd1Lzhd.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ShNQSiK.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/3yN4SFM.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wVVkPdC.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 106,
		name: 'FNR',
		header: 'FNR Header',
		description: 'FNR Description',
		productImage: 'http://i.imgur.com/vl2VSX4.jpg?1',
		productRoute: 'luxury-transport/terrestrial/fnr',
		parentSubcategory: [ 'Terrestrial' ],
		parentSubcategoryRoute: 'luxury-transport/terrestrial',
		type: 'Terrestrial',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/mk3dfCX.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fZrlVop.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fK0Oxbg.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/hd4EzfK.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 107,
		name: 'Honda Air',
		header: 'Honda Air Header',
		description: 'Honda Air Description',
		productImage: 'http://i.imgur.com/7152kJq.jpg?1',
		productRoute: 'luxury-transport/terrestrial/honda-air',
		parentSubcategory: [ 'Terrestrial' ],
		parentSubcategoryRoute: 'luxury-transport/terrestrial',
		type: 'Terrestrial',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/oZoSzIs.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Jfdu0SB.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KcyLINP.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1o36HiO.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Aquatics (6)

	{
		id: 108,
		name: 'Iguana-29',
		header: 'Iguana-29 Header',
		description: 'Iguana-29 Description',
		productImage: 'http://i.imgur.com/hT0z8PH.jpg?1',
		productRoute: 'luxury-transport/aquatics/iguana-29',
		parentSubcategory: [ 'Aquatics' ],
		parentSubcategoryRoute: 'luxury-transport/aquatics',
		type: 'Aquatics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/c5VJHEc.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wtFk3UO.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IMZrpyv.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XPyaO5P.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 109,
		name: 'Volitan',
		header: 'Volitan Header',
		description: 'Volitan Description',
		productImage: 'http://i.imgur.com/UmpwzH4.jpg?1',
		productRoute: 'luxury-transport/aquatics/volitan',
		parentSubcategory: [ 'Aquatics' ],
		parentSubcategoryRoute: 'luxury-transport/aquatics',
		type: 'Aquatics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/44uDiOd.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/LeQNjN7.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6cA351u.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/YP01K2G.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 110,
		name: 'Archipelago Cinema',
		header: 'Archipelago Cinema Header',
		description: 'Archipelago Cinema Description',
		productImage: 'http://i.imgur.com/16aGeO1.jpg?1',
		productRoute: 'luxury-transport/aquatics/archipelago-cinema',
		parentSubcategory: [ 'Aquatics' ],
		parentSubcategoryRoute: 'luxury-transport/aquatics',
		type: 'Aquatics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/SkBAn7g.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TBVfAax.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XEf9qwU.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wVFo0qs.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 111,
		name: 'Oros Island',
		header: 'Oros Island Header',
		description: 'Oros Island Description',
		productImage: 'http://i.imgur.com/ygps7Yt.jpg?1',
		productRoute: 'luxury-transport/aquatics/oros-island',
		parentSubcategory: [ 'Aquatics' ],
		parentSubcategoryRoute: 'luxury-transport/aquatics',
		type: 'Aquatics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/jk2Ov7U.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/d75T4oy.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/65NsLe6.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HH5Ia6e.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 112,
		name: 'Sveti',
		header: 'Sveti Header',
		description: 'Sveti Description',
		productImage: 'http://i.imgur.com/Rk571Th.jpg?1',
		productRoute: 'luxury-transport/aquatics/sveti',
		parentSubcategory: [ 'Aquatics' ],
		parentSubcategoryRoute: 'luxury-transport/aquatics',
		type: 'Aquatics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Av2K70b.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6l7Hjkn.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/W2EhxTf.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/CnaG5tb.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 113,
		name: 'Nouveau',
		header: 'Nouveau Header',
		description: 'Nouveau Description',
		productImage: 'http://i.imgur.com/ncB6OcZ.jpg?1',
		productRoute: 'luxury-transport/aquatics/nouveau',
		parentSubcategory: [ 'Aquatics' ],
		parentSubcategoryRoute: 'luxury-transport/aquatics',
		type: 'Aquatics',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/OGIKDu9.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/xuOP45k.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/PAtaShB.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/H4tCwn2.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

///////////////////////////////////////////// Philantropy /////////////////////////////////////////////////////////////////

// Global Initiatives (6)

	{	
		id: 114,
		name: 'Ecological Balance',
		header: 'Ecological Balance Header',
		description: 'Ecological Balance Description',
		productImage: 'http://i.imgur.com/U3egDkL.jpg?1',
		productRoute: 'philantropy/global-initiatives/ecological-balance',
		parentSubcategory: [ 'Global Initiatives' ],
		parentSubcategoryRoute: 'philantropy/global-initiatives',
		type: 'Global Initiative',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/wREewnW.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vL0Z9i3.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1biMPa1.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/07LqOkK.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 115,
		name: 'Global Health Initiative',
		header: 'Global Health Initiative Header',
		description: 'Global Health Initiative Description',
		productImage: 'http://i.imgur.com/SFSOOBs.jpg?1',
		productRoute: 'philantropy/global-initiatives/global-health-initiative',
		parentSubcategory: [ 'Global Initiatives' ],
		parentSubcategoryRoute: 'philantropy/global-initiatives',
		type: 'Global Initiative',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Uf30xMw.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/YnuSYse.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/4wp1ws9.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/DPDsNtq.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 116,
		name: 'Clean and Renewable Energy',
		header: 'Clean and Renewable Energy Header',
		description: 'Clean and Renewable Energy Description',
		productImage: 'http://i.imgur.com/bah8wtk.jpg?1',
		productRoute: 'philantropy/global-initiatives/clean-and-renewable-energy',
		parentSubcategory: [ 'Global Initiatives' ],
		parentSubcategoryRoute: 'philantropy/global-initiatives',
		type: 'Global Initiative',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/8aPukps.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/5eR6bpB.jpg?2',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/i9xxN26.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/cDxz9ss.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 117,
		name: 'Climate Change',
		header: 'Climate Change Header',
		description: 'Climate Change Description',
		productImage: 'http://i.imgur.com/GJOBpem.jpg?1',
		productRoute: 'philantropy/global-initiatives/climate-change',
		parentSubcategory: [ 'Global Initiatives' ],
		parentSubcategoryRoute: 'philantropy/global-initiatives',
		type: 'Global Initiative',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/NSdoHVz.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/q67VRC4.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/VUasVsx.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ODVUKL4.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 118,
		name: 'Clean Ocean Project',
		header: 'Clean Ocean Project Header',
		description: 'Clean Ocean Project Description',
		productImage: 'http://i.imgur.com/dGmT2Yv.jpg?1',
		productRoute: 'philantropy/global-initiatives/clean-ocean-project',
		parentSubcategory: [ 'Global Initiatives' ],
		parentSubcategoryRoute: 'philantropy/global-initiatives',
		type: 'Global Initiative',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/zYOxbUv.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HQzYZFF.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vnBSeWR.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Zghk3ok.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 119,
		name: 'Space Exploration',
		header: 'Space Exploration Header',
		description: 'Space Exploration Description',
		productImage: 'http://i.imgur.com/vCJQAkc.jpg?1',
		productRoute: 'philantropy/global-initiatives/space-exploration',
		parentSubcategory: [ 'Global Initiatives' ],
		parentSubcategoryRoute: 'philantropy/global-initiatives',
		type: 'Global Initiative',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/o7zYoPI.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/LyJhfvP.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/HJbEMFW.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6Rmemxa.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Non-profits (6)

	{
		id: 120,
		name: 'UNICEF',
		header: 'UNICEF Header',
		description: 'UNICEF Description',
		productImage: 'http://i.imgur.com/xgBAuQ3.png?1',
		productRoute: 'philantropy/non-profit-organizations/unicef',
		parentSubcategory: [ 'NPO' ],
		parentSubcategoryRoute: 'philantropy/non-profit-organizations',
		type: 'NPO',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/JezIvJ6.png?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/8dUK41x.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rQUjaTo.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/dafGsM0.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 121,
		name: 'Human Rights Campaign',
		header: 'Human Rights Campaign Header',
		description: 'Human Rights Campaign Description',
		productImage: 'http://i.imgur.com/56onscF.png?1',
		productRoute: 'philantropy/non-profit-organizations/human-rights-campaign',
		parentSubcategory: [ 'NPO' ],
		parentSubcategoryRoute: 'philantropy/non-profit-organizations',
		type: 'NPO',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/YQzB9G5.png?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/XA8XGe7.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/fa87IiD.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KDpUe52.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 122,
		name: 'Conservation International Foundation',
		header: 'Conservation International Foundation Header',
		description: 'Conservation International Foundation Description',
		productImage: 'http://i.imgur.com/ubS9hIr.jpg?1',
		productRoute: 'philantropy/non-profit-organizations/conservation-international-foundation',
		parentSubcategory: [ 'NPO' ],
		parentSubcategoryRoute: 'philantropy/non-profit-organizations',
		type: 'NPO',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/A77vcyG.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/rwI9CNY.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/24t575u.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/yQE4RsJ.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 123,
		name: 'Make-a-Wish Foundation',
		header: 'Make-a-Wish Foundation Header',
		description: 'Make-a-Wish Foundation Description',
		productImage: 'http://i.imgur.com/1H6L3Va.jpg?1',
		productRoute: 'philantropy/non-profit-organizations/make-a-wish-foundation',
		parentSubcategory: [ 'NPO' ],
		parentSubcategoryRoute: 'philantropy/non-profit-organizations',
		type: 'NPO',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/nRDQ5F2.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/nzpsPpJ.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vkLFdtG.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/n7HmfH4.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 124,
		name: 'TED Talks',
		header: 'TED Talks Header',
		description: 'TED Talks Description',
		productImage: 'http://i.imgur.com/eEigF6t.png?1',
		productRoute: 'philantropy/non-profit-organizations/ted-talks',
		parentSubcategory: [ 'NPO' ],
		parentSubcategoryRoute: 'philantropy/non-profit-organizations',
		type: 'NPO',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/IrJdIWy.png?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/xgbqm9w.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/5JK4pgK.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/cJcehQq.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 125,
		name: 'Wildlife Conservation Society',
		header: 'Wildlife Conservation Society Header',
		description: 'Wildlife Conservation Society Description',
		productImage: 'http://i.imgur.com/AoF6gIi.jpg?1',
		productRoute: 'philantropy/non-profit-organizations/wildlife-conservation-society',
		parentSubcategory: [ 'NPO' ],
		parentSubcategoryRoute: 'philantropy/non-profit-organizations',
		type: 'NPO',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/GrxxUcT.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/WSHSU68.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ZKVeN0J.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/BjqtHRm.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Charities (6)

	{
		id: 126,
		name: 'Natural Resource Defense Council',
		header: 'Natural Resource Defense Council Header',
		description: 'Natural Resource Defense Council Description',
		productImage: 'http://i.imgur.com/nx7X7k5.jpg?1',
		productRoute: 'philantropy/charities/natural-resource-defense-council',
		parentSubcategory: [ 'Charities' ],
		parentSubcategoryRoute: 'philantropy/charities',
		type: 'Charity',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/7mg9Ffe.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vacmQGB.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/AwBTcFL.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Bh9aiRg.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 127,
		name: 'Institute of International Education',
		header: 'Institute of International Education Header',
		description: 'Institute of International Education Description',
		productImage: 'http://i.imgur.com/VfTdiRt.jpg?1',
		productRoute: 'philantropy/charities/institute-of-international-education',
		parentSubcategory: [ 'Charities' ],
		parentSubcategoryRoute: 'philantropy/charities',
		type: 'Charity',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/PbNyKBg.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SBJYaoy.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/45uKrHm.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/S3Vt0Dq.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 128,
		name: 'Action Against Hunger',
		header: 'Action Against Hunger Header',
		description: 'Action Against Hunger Description',
		productImage: 'http://i.imgur.com/WQFCE1o.jpg?1',
		productRoute: 'philantropy/charities/action-against-hunger',
		parentSubcategory: [ 'Charities' ],
		parentSubcategoryRoute: 'philantropy/charities',
		type: 'Charity',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/ZtJZIth.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1yOkHhY.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1bIhEox.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/7vptt7y.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 129,
		name: 'Animal Welfare Institute',
		header: 'Animal Welfare Institute Header',
		description: 'Animal Welfare Institute Description',
		productImage: 'http://i.imgur.com/274spI3.png?1',
		productRoute: 'philantropy/charities/animal-welfare-institute',
		parentSubcategory: [ 'Charities' ],
		parentSubcategoryRoute: 'philantropy/charities',
		type: 'Charity',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/kKWVj4c.png?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Lg16z3n.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/eytM1m8.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/pajZuEb.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 130,
		name: 'Carnege Institute for Science',
		header: 'Carnege Institute for Science Header',
		description: 'Carnege Institute for Science Description',
		productImage: 'http://i.imgur.com/zL7btiR.jpg?1',
		productRoute: 'philantropy/charities/carnege-institute-for-science',
		parentSubcategory: [ 'Charities' ],
		parentSubcategoryRoute: 'philantropy/charities',
		type: 'Charity',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/pgBbXNR.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wTGr2Yr.png?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/BYf6C9B.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/nEEZkgl.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 131,
		name: 'Heart to Heart International',
		header: 'Heart to Heart International Header',
		description: 'Heart to Heart International Description',
		productImage: 'http://i.imgur.com/jPPzOWU.jpg?1',
		productRoute: 'philantropy/charities/heart-to-heart-international',
		parentSubcategory: [ 'Charities' ],
		parentSubcategoryRoute: 'philantropy/charities',
		type: 'Charity',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/rRJiRUa.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/xPeXZF9.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/34MAxiJ.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/pFR605f.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

///////////////////////////////////////////// Miscellaneous /////////////////////////////////////////////////////////////////

// Quantum Manipulation (6)
	
	{	
		id: 132,
		name: 'Quantum Optics',
		header: 'Quantum Optics Header',
		description: 'Quantum Optics Description',
		productImage: 'http://i.imgur.com/8kiXuuW.jpg?1',
		productRoute: 'miscellaneous/quantum-manipulation/quantum-optics',
		parentSubcategory: [ 'Quantum Manipulation' ],
		parentSubcategoryRoute: 'miscellaneous/quantum-manipulation',
		type: 'Quantum Manipulation',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/zNJUiVl.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/JBfg0hp.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/vn0tdCQ.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/j2RdM6F.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 133,
		name: 'Localize Quantum Physics',
		header: 'Localize Quantum Physics Header',
		description: 'Localize Quantum Physics Description',
		productImage: 'http://i.imgur.com/I2KUb4U.jpg?1',
		productRoute: 'miscellaneous/quantum-manipulation/localize-quantum-physics',
		parentSubcategory: [ 'Quantum Manipulation' ],
		parentSubcategoryRoute: 'miscellaneous/quantum-manipulation',
		type: 'Quantum Manipulation',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/AkiU0g3.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Op7VoXK.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/6AqqA0v.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/e90Ws8X.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 134,
		name: 'Control Superposition',
		header: 'Control Superposition Header',
		description: 'Control Superposition Description',
		productImage: 'http://i.imgur.com/xYOeSMw.jpg?1',
		productRoute: 'miscellaneous/quantum-manipulation/control-superposition',
		parentSubcategory: [ 'Quantum Manipulation' ],
		parentSubcategoryRoute: 'miscellaneous/quantum-manipulation',
		type: 'Quantum Manipulation',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/E2qoKKD.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/MzbBrgb.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/DwdIqzD.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/DstYOzh.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 135,
		name: 'Control Particle-Waves',
		header: 'Control Particle-Waves Header',
		description: 'Control Particle-Waves Description',
		productImage: 'http://i.imgur.com/7KybXpD.jpg?1',
		productRoute: 'miscellaneous/quantum-manipulation/control-particle-waves',
		parentSubcategory: [ 'Quantum Manipulation' ],
		parentSubcategoryRoute: 'miscellaneous/quantum-manipulation',
		type: 'Quantum Manipulation',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/4ciXMU4.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/3HJtgRC.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/h0h4q2V.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/d9U6mW0.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 136,
		name: 'Wormhole Research',
		header: 'Wormhole Research Header',
		description: 'Wormhole Research Description',
		productImage: 'http://i.imgur.com/0sM79Qa.jpg?1',
		productRoute: 'miscellaneous/quantum-manipulation/wormhole-research',
		parentSubcategory: [ 'Quantum Manipulation' ],
		parentSubcategoryRoute: 'miscellaneous/quantum-manipulation',
		type: 'Quantum Manipulation',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/1MMiNAQ.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/KqW8q6L.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/3JGglO9.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/mZrHgZf.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{	
		id: 137,
		name: 'Quantum Technology',
		header: 'Quantum Technology Header',
		description: 'Quantum Technology Description',
		productImage: 'http://i.imgur.com/8i0eTWN.jpg?1',
		productRoute: 'miscellaneous/quantum-manipulation/quantum-technology',
		parentSubcategory: [ 'Quantum Manipulation' ],
		parentSubcategoryRoute: 'miscellaneous/quantum-manipulation',
		type: 'Quantum Manipulation',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/p7mVeL8.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/8tiTOZM.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/712yNHr.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/5UsMrZq.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Space Exploration (6)

	{
		id: 138,
		name: 'TARS',
		header: 'TARS Header',
		description: 'TARS Description',
		productImage: 'http://i.imgur.com/PbktRsB.jpg?1',
		productRoute: 'miscellaneous/space-exploration/tars',
		parentSubcategory: [ 'Space Exploration' ],
		parentSubcategoryRoute: 'miscellaneous/space-exploration',
		type: 'Space Exploration',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/CjIbMPl.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/4A9dqmH.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/oo6N3xO.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/lcSJWUu.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 139,
		name: 'NASA Moonstream',
		header: 'NASA Moonstream Header',
		description: 'NASA Moonstream Description',
		productImage: 'http://i.imgur.com/zFJFJxz.jpg?1',
		productRoute: 'miscellaneous/space-exploration/nasa-moonstream',
		parentSubcategory: [ 'Space Exploration' ],
		parentSubcategoryRoute: 'miscellaneous/space-exploration',
		type: 'Space Exploration',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/BWOzS95.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/uWtC16w.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/PATddSV.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IPEGCpQ.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 140,
		name: 'Terraforming Research',
		header: 'Terraforming Research Header',
		description: 'Terraforming Research Description',
		productImage: 'http://i.imgur.com/QvjQTY9.jpg?1',
		productRoute: 'miscellaneous/space-exploration/terraforming-research',
		parentSubcategory: [ 'Space Exploration' ],
		parentSubcategoryRoute: 'miscellaneous/space-exploration',
		type: 'Space Exploration',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/KrHdbw7.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/BLhfFjx.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/klwrulf.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/9Puizbk.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 141,
		name: 'Gravity Manipulation',
		header: 'Gravity Manipulation Header',
		description: 'Gravity Manipulation Description',
		productImage: 'http://i.imgur.com/fgV0mi5.jpg?1',
		productRoute: 'miscellaneous/space-exploration/gravity-manipulation',
		parentSubcategory: [ 'Space Exploration' ],
		parentSubcategoryRoute: 'miscellaneous/space-exploration',
		type: 'Space Exploration',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/bhDeBXO.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/n79Z2jP.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/zyzt3dt.png?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/4G1ImQh.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 142,
		name: 'Warp Drive',
		header: 'Warp Drive Header',
		description: 'Warp Drive Description',
		productImage: 'http://i.imgur.com/tCjroEx.jpg?1',
		productRoute: 'miscellaneous/space-exploration/warp-drive',
		parentSubcategory: [ 'Space Exploration' ],
		parentSubcategoryRoute: 'miscellaneous/space-exploration',
		type: 'Space Exploration',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/eWYAMwb.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SOnSF7V.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/ZMRHKVz.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/mAnX8cW.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 143,
		name: 'Radiation Protection',
		header: 'Radiation Protection Header',
		description: 'Radiation Protection Description',
		productImage: 'http://i.imgur.com/OXfjOXg.jpg?1',
		productRoute: 'miscellaneous/space-exploration/radiation-protection',
		parentSubcategory: [ 'Space Exploration' ],
		parentSubcategoryRoute: 'miscellaneous/space-exploration',
		type: 'Space Exploration',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/r5ih0W8.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/u12BO5F.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/boBQPLi.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1JOFAu2.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},

// Macroscopic Analysis (6)

	{
		id: 144,
		name: 'Black Hole Research',
		header: 'Black Hole Research Header',
		description: 'Black Hole Research Description',
		productImage: 'http://i.imgur.com/ezv9ofP.jpg?1',
		productRoute: 'miscellaneous/macroscopic-analysis/black-hole-research',
		parentSubcategory: [ 'Macroscopic Analysis' ],
		parentSubcategoryRoute: 'miscellaneous/macroscopic-analysis',
		type: 'Macroscopic Analysis',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/b8o5ZrO.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/wFDfRs8.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/0azGlZj.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/1vU5rFL.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 145,
		name: 'Interstellar Travel',
		header: 'Interstellar Travel Header',
		description: 'Interstellar Travel Description',
		productImage: 'http://i.imgur.com/TF8v69z.jpg?1',
		productRoute: 'miscellaneous/macroscopic-analysis/interstellar-travel',
		parentSubcategory: [ 'Macroscopic Analysis' ],
		parentSubcategoryRoute: 'miscellaneous/macroscopic-analysis',
		type: 'Macroscopic Analysis',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/8Sfj0Ta.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/TYSX7QB.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/cKFzV1Y.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/T6CAR1d.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 146,
		name: 'Time Travel Research',
		header: 'Time Travel Research Header',
		description: 'Time Travel Research Description',
		productImage: 'http://i.imgur.com/jsrgizG.jpg?1',
		productRoute: 'miscellaneous/macroscopic-analysis/time-travel-research',
		parentSubcategory: [ 'Macroscopic Analysis' ],
		parentSubcategoryRoute: 'miscellaneous/macroscopic-analysis',
		type: 'Macroscopic Analysis',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/Jjl93vD.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/SkCgz4j.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/db1IlAr.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/eW5ORD5.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 147,
		name: 'Dark Mass/Energy Research',
		header: 'Dark Mass/Energy Research Header',
		description: 'Dark Mass/Energy Research Description',
		productImage: 'http://i.imgur.com/pniH5y9.jpg?1',
		productRoute: 'miscellaneous/macroscopic-analysis/dark-mass-energy-research',
		parentSubcategory: [ 'Macroscopic Analysis' ],
		parentSubcategoryRoute: 'miscellaneous/macroscopic-analysis',
		type: 'Macroscopic Analysis',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/kFzIKhp.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/BAObAJz.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/n6TgOoB.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/dQ4B98V.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 148,
		name: 'Manipulate Space-Time',
		header: 'Manipulate Space-Time Header',
		description: 'Manipulate Space-Time Description',
		productImage: 'http://i.imgur.com/8I5vUCs.jpg?1',
		productRoute: 'miscellaneous/macroscopic-analysis/manipulate-space-time',
		parentSubcategory: [ 'Macroscopic Analysis' ],
		parentSubcategoryRoute: 'miscellaneous/macroscopic-analysis',
		type: 'Macroscopic Analysis',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/AAF09TW.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IWd014J.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/aWcCugM.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/4LVcL7G.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	},
	{
		id: 149,
		name: 'Gravitational Wave Mapping',
		header: 'Gravitational Wave Mapping Header',
		description: 'Gravitational Wave Mapping Description',
		productImage: 'http://i.imgur.com/lW2Jd1a.jpg?1',
		productRoute: 'miscellaneous/macroscopic-analysis/gravitational-wave-mapping',
		parentSubcategory: [ 'Macroscopic Analysis' ],
		parentSubcategoryRoute: 'miscellaneous/macroscopic-analysis',
		type: 'Macroscopic Analysis',
		size: '25.13 acres',
		price: 484800000.00, /* 484.8 Million, 32 Buildings */
		vendor: 'Rolex',
		sliderImages: [
				{
					Image: {
						className: 'item active',
						imageSrc: 'http://i.imgur.com/m8PQv8X.jpg?1',
						caption: 'Slide 1 Caption (subcategory)',
						subCaption: 'Slide 1 subCaption',
						dataSlide: 0,
						thumbnailClassName: 'active'

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/euwMYjQ.jpg?1',
						caption: 'Slide 2 Caption',
						subCaption: 'Slide 2 subCaption',
						dataSlide: 1,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/IBumUgc.jpg?1',
						caption: 'Slide 3 Caption',
						subCaption: 'Slide 3 subCaption',
						dataSlide: 2,
						thumbnailClassName: ''

					},
				},
				{
					Image: {
						className: 'item',
						imageSrc: 'http://i.imgur.com/Z18rA9A.jpg?1',
						caption: 'Slide 4 Caption',
						subCaption: 'Slide 4 subCaption',
						dataSlide: 3,
						thumbnailClassName: ''

					},
				}]
	}

	]; // End of products

///////////////////////////////////////////// Service Functions /////////////////////////////////////////////////////////////////

	return {	

		getProductByRoute: function ( route ) {
			for ( var i = 0; i < products.length; i++ ) {
				if ( products[ i ].productRoute === route ) {
					return products[ i ];
				}
			}
		},

		getProductBySubcategoryRoute: function ( parent_route ) {

			var ProductList = [];

			for( var i = 0; i < products.length; i ++ ) {
				if( products[ i ].parentSubcategoryRoute === parent_route ) {
					ProductList.push( products[ i ] );
				}
			}

			return ProductList;
		},

		getProductByName: function ( name ) {
			for ( var i = 0; i < products.length; i++ ) {
				if ( products[ i ].name.toUpperCase() === name ) {
					return products[ i ];
				}
			}
		},

		getProductById: function ( id ) {
			for( var i = 0; i < products.length; i++ ) {
				if ( products[ i ].id === id ) {
					return products[ i ];
				}
			}
		},

		getAll: function () {
			return products;
		}
	};

	return products;

});










