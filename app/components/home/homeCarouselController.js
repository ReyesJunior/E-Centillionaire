

  // Controllers 
    app.controller( 'HomepageCarouselController' , [ '$scope' ,  function( $scope ) {

      $scope.images = [  // Image Sizes are EXACTLY ( 1450 x 900 )
        {
          Image: {
            className: 'item active',
            imageSrc: 'http://i.imgur.com/38vXc2q.jpg?1',
            caption: 'Slide 1 Caption',
            subCaption: 'Slide 1 Sub-Caption'
          },
        },
        {
          Image: {
            className: 'item',
            imageSrc: 'http://i.imgur.com/2hAcyZl.jpg?1',
            caption: 'Slide 2 Caption',
            subCaption: 'Slide 2 Sub-Caption'
          },
        },
        {
          Image: {
            className: 'item',
            imageSrc: 'http://i.imgur.com/DEapTxR.jpg?1',
            caption: 'Slide 3 Caption',
            subCaption: 'Slide 3 Sub-Caption'
          },
        },
        {
          Image: {
            className: 'item',
            imageSrc: 'http://i.imgur.com/AIhTfRW.jpg?1',
            caption: 'Slide 4 Caption',
            subCaption: 'Slide 4 Sub-Caption'
          },
        }
      ];

      $scope.thumbnails = [
        {
          Thumbnail: {
            dataSlide: 0,
            className: 'active',
          }

        },
        {
          Thumbnail: {
            dataSlide: 1,
            className: '',
          }

        },
        {
          Thumbnail: {
            dataSlide: 2,
            className: '',
          }

        },
        {
          Thumbnail: {
            dataSlide: 3,
            className: '',
          }

        }
      ];

    }]);

    app.controller( 'FeaturedBrandsController' , [ '$scope' , function( $scope ) {

      $scope.logos = [ // image size 800x600 (transparent Background)
        {
          Image: {
            imageSrc: 'http://i.imgur.com/ywGFDMm.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/uuqGfBp.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/9075SQQ.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/GTZepzR.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/7DdkPHa.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/usg1thw.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/SmhuDB0.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/h10Q2E4.png?1',
            brandName: 'Brand Name'
          }
        },
            {
          Image: {
            imageSrc: 'http://i.imgur.com/NaaHXns.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/jUdxuIj.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/P4ual7v.png?1',
            brandName: 'Brand Name'
          }
        },
        {
          Image: {
            imageSrc: 'http://i.imgur.com/GTZepzR.png?1',
            brandName: 'Brand Name'
          }
        }
      ];

    }]);