$(function () {
  $('.tooltip').tooltipster({
    theme: 'tooltipster-shadow'
  });

  setTimeout(function() {
    $(".eliors-container").addClass("shown");
    setTimeout(function() {
      $(".technologies").addClass("shown");
    }, 500);
  }, 10);

  $("#fullpage").fullpage({
    //Navigation
    // menu: '#menu',
    // lockAnchors: false,
    anchors:['intro', 'familyst', 'shameless', 'summary'],
    navigation: true,
    // navigationPosition: 'right',
    // navigationTooltips: ['firstSlide', 'secondSlide'],
    // showActiveTooltip: false,
    // slidesNavigation: true,
    // slidesNavPosition: 'bottom',
  });

  $('.flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 4000,
  });
});
