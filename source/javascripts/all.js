//= require_tree .

$(function() {

  var $itemList = $('#item-list');
  $itemList.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows',
    masonry: { columnWidth : 230 }
  });

  $('#tag-list li').each(function(index, item) {
    $(item).bind('click', function() {
      $this = $(this);
      $this.addClass('active');
      $this.siblings().removeClass('active');
      
      var filter = $this.data('filter');
      $itemList.isotope({filter: filter});
    });
  });

});
