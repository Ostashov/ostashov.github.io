$(".fast-order-block .block-btn").click(function () {
    $(".fast-order-block .block-btn.is-active").removeClass("is-active");
    $(this).addClass("is-active");
});

$( function() {
    $( "#slider-length" ).slider({
      range: true,
      min: 0,
      max: 288,
      values: [ 0, 288 ],
      slide: function( event, ui ) {
        $( "#amount-length" ).val( "(" + ui.values[ 0 ] + " ft) - (" + ui.values[ 1 ] + " ft)");
      }
    });
    $( "#amount-length" ).val( "(" + $( "#slider-length" ).slider( "values", 0 ) +
      " ft) - (" + $( "#slider-length" ).slider( "values", 1 ) + " ft)" );
  } );