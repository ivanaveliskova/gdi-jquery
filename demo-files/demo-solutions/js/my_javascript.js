//////////////////////////////////////////////////////////////////////////////////
// Uncomment the pieces of code you want to see what they do and how they work  //
// Remember to recomment code if you want to see the next solution              //
// some pieces may conflict with one another                                    //
// and you won't be able to see the changes made                                //
// Make sure to use demo-solutions/index.html to check the solutions            //
//////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// PRACTICE 1: Include jQuery library and use the code to hide all the images //
////////////////////////////////////////////////////////////////////////////////

// $('img').hide();



//////////////////////////////////////////////////////////
// PRACTICE 2:                                          //
// Hide nav, add class 'spin' to page heading,          //
// change the link color only in the header paragraph,  //
// change just the hero image to photo of fav celeb     //
//////////////////////////////////////////////////////////

// $('nav').hide();

// $('header h1').addClass('spin');

// $('header p a').css('color', '#BF98FA');

// $('.hero img').attr('src', 'http://wallpapercave.com/wp/ZXlInQ2.png');



//////////////////////////////////////////////////////////////////////////////////
// BONUS CHALLENGE 1: Change the images in the gallery with photos of fav celeb //
// You don't have to organize your code like this                               //
// just makes it easier to read                                                 //
//////////////////////////////////////////////////////////////////////////////////

// ***** Don't uncomment this ******//
// Sets up my image vars            //
// Creates an array of the images   //
// Calls the gallery images         //
// into their own array             //
//////////////////////////////////////
// var image1 = 'http://images5.fanpop.com/image/photos/30900000/David-david-tennant-30984005-2560-1707.jpg',
//     image2 = 'http://images.huffingtonpost.com/2014-11-16-uktvsherlockbenedictcumberbatch5_1.jpg',
//     image3 = 'http://static.tumblr.com/c57bab9959c9fdf315f02a05734f1e70/gr8wtbo/60Enlxvk2/tumblr_static_6m43j8zw6n0g4cc4c4c4socko.jpg',
//     image4 = 'http://www.entertainmentoutlook.com/wp-content/uploads/2014/03/The-Musketeers-ep-8-04.jpg',
//     image5 = 'http://www.radiotimes.com/uploads/images/Original/44761.jpg',
//     image6 = 'http://www.ctvnews.ca/polopoly_fs/1.1493493.1381496833!/httpImage/image.jpg_gen/derivatives/landscape_960/image.jpg',
//     image7 = 'http://images.radiotimes.com/namedimage/Doctor_Who__What_celebrities__kids_and_critics_think_of_Peter_Capaldi.jpg?quality=85&mode=crop&width=620&height=374&404=tv&url=/uploads/images/original/60591.jpg',
//     image8 = 'http://images6.fanpop.com/image/photos/38300000/Pikachu-and-Friends-at-the-beach-pokemon-38336669-1920-1080.jpg',
//     galleryImageReplace = [image1, image2, image3, image4, image5, image6, image7, image8],
//     galleryTextReplace = ['David Tennant', 'Benedict Cumberbatch', 'Colin Morgan', 'Luke Pasqualino', 'Tom Burke', 'Matt Smith', 'Peter Capaldi', 'Cute Pokemon!'],
//     $galleryImages = $('.gallery img'),
//     $galleryOverlay = $('.gallery .overlay');

// ******* Don't uncomment this ********//
// This function changes the images     //
//////////////////////////////////////////
// $galleryImages.each(function(index){
//     var $thisImage = $(this);
//     $thisImage.attr('src', galleryImageReplace[index]);
// });

// ******* Don't uncomment this ********//
// This function changes the text       //
//////////////////////////////////////////
// $galleryOverlay.each(function(index){
//     var $thisOverlay = $(this);
//     $thisOverlay.html('<p>' + galleryTextReplace[index] + '</p>');
// });


//////////////////////////////////////////////////////////
// PRACTICE 3:                                          //
// Add credit at the end of each quote.                 //
//////////////////////////////////////////////////////////

// $('.tennant-quotes li').each(function() {
//     var $thisQuote = $(this);

//     $thisQuote.append(' &ndash;David Tennant');
// });

//////////////////////////////////////////////////////////
// Bonus:                                               //
// Add credit at the beginning of each quote.           //
//////////////////////////////////////////////////////////

// $('.tennant-quotes li').each(function() {
//     var $thisQuote = $(this);

//     $thisQuote.prepend('According to David Tennant, ');
// });

//////////////////////////////////////////////////////////
// Bonus 2:                                             //
// Make the overlay appear and disappear on hover       //
//////////////////////////////////////////////////////////

// $('.gallery li').each(function() {
//     var $thisImage = $(this);
//     $thisImage.on('mouseenter mouseleave', function() {
//         $thisImage.find('.overlay').fadeToggle('fast');
//     });
// });



//////////////////////////////////////////////////////////
// PRACTICE 4:                                          //
// Add console.logs on hover for hero image             //
// Add some text on button click                        //
//////////////////////////////////////////////////////////

// $('.hero img').on({
//     mouseenter: function() {
//         console.log('We just entered the dangerzone!');
//     }, mouseleave: function() {
//         console.log('We just left the DANGERZONE!');
//     }
// });

// $('.button-container button').on('click', function(event) {
//     event.preventDefault();

//     $(this).parent().append('<p>Button was pressed.</p>');
// });

//////////////////////////////////////////////////////////////////////
// Bonus:                                                           //
// Have the text appear and disappear when the button is clicked    //
//////////////////////////////////////////////////////////////////////

// $('.button-container button').on('click', function(event) {
//     var $this = $(this);
//     event.preventDefault();
//     if ($this.siblings('p').length === 1) {
//         $this.siblings('p').remove();
//     } else {
//         $this.parent().append('<p>Button was pressed.</p>');
//     }
// });
