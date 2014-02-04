/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */

/* Hopefully we'll be allowed to register our own helpers soon without messing with /core */
// ghost.registerThemeHelper("logger", function(myData) { 
//     console.log(data); // outputs "undefined" to console
// })

(function ($) {
    "use strict";

    $(document).foundation();

    $(document).ready(function(){

        $(".post-content").fitVids();

        $('.menu-button').click(function () {
          $(".main-section").toggleClass("full-screen");
          $(".off-canvas-wrap").toggleClass("move-right");
        });

        $('.side-bar-menu-button').click(function () {
          $(".main-section").toggleClass("full-screen");
          $(".off-canvas-wrap").toggleClass("move-right");
        });

        enquire.register("screen and (max-width:40em)", {

            // OPTIONAL
            // If supplied, triggered when a media query matches.
            match : function() {
              $(".off-canvas-wrap").toggleClass("move-right");
              $(".main-section").toggleClass("full-screen");
            },      
                                        
            // OPTIONAL
            // If supplied, triggered when the media query transitions 
            // *from a matched state to an unmatched state*.
            unmatch : function() {
              $(".off-canvas-wrap").toggleClass("move-right");
              $(".main-section").toggleClass("full-screen");      
            },    
              
        });  

    });

}(jQuery));