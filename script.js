
//document.querySelector('h1'); We are spesifiing the css selector to be manipulated
$('h1');

//document.querySelectorAll('button');
$('button');

//document.querySelextor('h1').style.color = 'green'; is the same as what follows with the use of a css method where a single property in the parenthesis gets the valude but if you pass a second propertiy you are setting the value. 
$('h1').css('color', 'green');


//due to seperation of concerns, we dont want to manipulate css in js file but rather add a class in the css and toggle it on or off as needed within the jsn such as this:  document.querySelector('h1').classList.add('big-title');
$('h1').addClass('big-title');

// you can remove the class which would be written in js as: doxument.querySelector('h1').classList.remove('big-title');
$('h1').removeClass('big-title');


// you can add or remove multiple xalsses with the following the class which would be written in js as: document.querySelector('h1').classList.add('big-title');
$('h1').addClass('big-title margin-50');

//you can also query to see if the selector has a class which returns a boolean example:
console.log($('h1').hasClass('margin-50'));

// change text of html  document.querySelector('h1').innerHTML = new text
$('h1').text('new text');

// to implement new text with html elements 
$('button').html('<em>Display new text</em>');

//change attribute value for documement.querySelector('img').setAttrivute('src','./path/image.png');
// $('img').attr('src', 'image.png');
// console.log($('img').attr('src'));

// manipulate classes sing attriute
//document.querySelector('h2').setAttribute('class', 'other');
$('h2').attr('class', 'other');

// document.querySelector('h2').addEventListener('click', function(){
//     console.log('I was clicked');
// });
$('h2').click(function () {
    console.log('jQuery clicked me');
});

// for (let i = 0; i < 5; i++){
//     document.querySelectorAll('button')[i].addEventListener('click', function(){
//         document.querySelector('h3').style.color = 'purple';
//     });
// }

$('button').click(function(){
    $('h3').css('color', 'purple');
})
 //to add event listeners and console log the event key we did
// document.addEventListener('keydown', function (event) {
//   console.log(event.key);
// });

// $(document).keypress(function(event){
//     console.log(event.key);
// });
// $(document).keypress(function(event){
//     $('h1').text(event.key);
// });
//or
// $(document).on('click', function (){
//     $('h1').css('color', 'purple');
// });

// add elements on the fly. You also have options of .after, .prepend, .append. Worth noting prepend and append add the content within the element indicated. 
// $('h1').before('<button>New Button</button>');

//remove all of the indicated element with:
// $('button').remove();

//     -----     Animations with jQuery     -----

//to hide an element
// $('button').on('click', function (){
//     $('h1').hide();
// })

//to show the element then 
// $('button').on('click', function (){
//     $('h1').show();
// })



//we can toggle display of element with
// $('button').on('click', function (){
//     $('h1').toggle();
// })

//we can fade in or out with the following
// $('button').on('click', function(){
//     $('h1').fadeOut();
// });

// $('button').on('click', function (){
//     $('h1').fadeIn();
// });
 
//or

// $('button').on('click',function(){
//     $('h1').fadeToggle();
// });

// to slide up and down
// $('button').on('click', function(){
//     $('h1').slideToggle();
// })

//to change css settings. Worth noting in animate method, you can only manipulate css properties that have a numeric value

// $('button').on('click', function(){
//     $('h1').animate({
//         opacity: 0.5
//     });
// });

//You can chain animation
$('button').on('click', function (){
    $('h1').slideUp().slideDown().animate({opacity:0.5});
})