$("#slider").slider(
{
            value: 180,
            min: 0,
            max: 360,
            step: 1,
            slide: function( event, ui ) {
                $( "#slider-value" ).html( ui.value );
            }
}
);

$( "#slider-value" ).html(  $('#slider').slider('value') );

console.log('slider loaded');
