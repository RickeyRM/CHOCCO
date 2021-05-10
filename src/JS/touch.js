// $('.wrapper').on('touchmove', e => e.preventDefault());

// $('body').swipe ( {
//   swipe:function(event, direction) {
//     const scroller = viewportScroller();
//     let scrollDirection = '';
    
//     if (direction === 'up') scrollDirection = 'next';
//     if (direction === 'down') scrollDirection = 'prev';

//     scroller[scrollDirection]();
//   }
// })

const md = new MobileDetect();
let isMobile = md.mobile();
if (isMobile) {
$("body").swipe( swipeOptions );
  $('body').swipe({
    swipe: function (event, direction) {
      const scroller = viewportScroller();
      let scrollDirection = '';
      
      if (direction === 'up') scrollDirection = 'next';
      if (direction === 'down') scrollDirection = 'prev';
  
      scroller[scrollDirection]();
    }
  })
}