// $('.wrapper').on('touchmove', e => e.preventDefault());

$('body').swipe ( {
  swipe:function(event, direction) {
    const scroller = viewportScroller();
    let scrollDirection = '';
    
    if (direction === 'up') scrollDirection = 'next';
    if (direction === 'down') scrollDirection = 'prev';

    scroller[scrollDirection]();
  }
})

