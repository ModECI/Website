/*!
 * Start Bootstrap - Agnecy Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $("#"+$anchor.attr('href').split('#')[1]).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function() {
    $('a.anchor-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var elementClass = $anchor.attr('href').split('#')[1]
        var elementsWithSameClass = $('.'+elementClass) // get the class name from href value
        var tabLink = (elementsWithSameClass.attr('class').split(elementClass)[1]).trim()
        // test if the element includes tab info , for communities listing
        if(tabLink) {
            // open the tab first
            $('.nav-tabs a[href="#' + tabLink + '"]').tab('show');
        }
        // once the tab is visible or out of the two elements find the visible one, get its top value
        setTimeout(function(){
            var scrollTop = $(elementsWithSameClass[0]).is(':visible') ? $(elementsWithSameClass[0]).offset().top : $(elementsWithSameClass[1]).offset().top
            $('html, body').stop().animate({
                scrollTop: scrollTop - 130
            }, 1500, 'easeInOutExpo');
        }, 500)
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});