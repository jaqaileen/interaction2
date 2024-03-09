$(document).scroll(function(){
   let scrollTop = $(this).scrollTop();
   $('.left, .right').css('transform', 'translateY('+ scrollTop * 2 +'px)');
});

$(document).scroll(function(){
   let scrollTop = $(this).scrollTop();
   let scrollDirection = scrollTop > lastKnownScrollY ? 'down' : 'up';

   $('.left, .right').css('transform', 'translateY('+ scrollTop * 2 +'px)');

   if (scrollDirection === 'down') {
       $('.left, .right').removeClass('bounce'); // Remove bounce class when scrolling down
   } else {
       $('.left, .right').addClass('bounce'); // Add bounce class when scrolling up
   }

   lastKnownScrollY = scrollTop;
});
