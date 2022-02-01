jQuery(document).ready(function($) {
  $('#block-bluemasters-main-menu li').hover(function(){
      $(this).find('.sub-menu').toggle();
  });
});