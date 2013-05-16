/**
 * Attaches an onClick event-handler on the select-element given.
 * Adds more button to selector container with more than 5 articles (maxArticle) are reached
 * Click on more button loads another 5 articles (maxArticle)
 *
 * @param selector
 */
var MoreButton = {

    showContent: function (selector) {

        var moreButtonHTML = '<div class="row-fluid morebttn"><a class="btn" id="moreNews" href="#collapseNews">More</a></div>',
            articleElements = $(selector).children('article'),
            articleArray = jQuery.makeArray(articleElements),
            hiddenArticleArray = [],
            newArray = [],
            maxArticle = 5;

        articleElements.addClass('hidden-news');

        $.each(articleArray, function (key, value) {
            if (key < maxArticle) {
                $(this).addClass('visible-news').removeClass('hidden-news');
                return;
            }
            else {
                hiddenArticleArray.push($(this));
            }

        });

        if (articleArray.length > maxArticle) {
            $(selector).append(moreButtonHTML);
        }

        $('#moreNews').on('click', function () {
            newArray = [];

            if (hiddenArticleArray.length == 0) {
                return;
            }
            else {

                $.each(hiddenArticleArray, function (key, value) {

                    if (key < maxArticle) {
                        $(this).addClass('visible-news').removeClass('hidden-news');

                        return;
                    }
                    else {
                        newArray.push($(this));
                    }
                });
            }

            hiddenArticleArray = newArray;

            if (hiddenArticleArray < maxArticle) {
                $('#moreNews').remove();
            }

        });

    }
}
/**
 * Accordion: Adds an icon (+/-) to the bootstrap accordion head-element.
 *
 * @param selector
 */
var Accordion = {

    showContent: function (accordionID) {

        $(accordionID).on('show', function () {
            $('#the-icon-element').removeClass('icon-plus').addClass('icon-minus');
        });
    },
    // Reverse it for hide:
    hideContent: function (accordionID) {

        $(accordionID).on('hide', function () {
            $('#the-icon-element').removeClass('icon-minus').addClass('icon-plus');
        });
    }
}
/**
 * ToTop Link
 *
 * @param selector
 */
var Link = {

    scrollToTop: function (linkID) {

        $(linkID).click(function (event) {

            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;

        });
    }
}

/**
 * Slideshow / Image Gallery
 *
 * @param selector
 */
var FlexSlider = {

    /**
     * Image slideshow with aktive thumbs
     */
    initSlideshow: function (flexSliderSelector) {
        $(flexSliderSelector).flexslider({
            animation: "slide",
            start    : function (slider) {
                $('body').removeClass('loading');
            }
        });
    },
    /**
     * Image Gallery
     */
    initGallery  : function (galleryID) {
        $(galleryID).flexslider({
            animation    : "slide",
            controlNav   : false,
            animationLoop: false,
            slideshow    : false,
            sync         : "#carousel"
        });
    },
    /**
     * Image Carousel: Thumbs for Image Gallery
     */
    initCarousel : function (carouselID) {
        $(carouselID).flexslider({
            animation    : "slide",
            controlNav   : false,
            animationLoop: false,
            slideshow    : false,
            itemWidth    : 210,
            itemMargin   : 5,
            asNavFor     : '#slider'
        });
    }
}
/**
 * Responsive Lightbox: Yoxview: http://yoxigen.com (date: 8.5.2013)
 * For configuration see: http://yoxigen.com/yoxview/usage.aspx
 * @param selector
 */
var Lightbox = {

    init: function (lightboxContanier) {
        $(lightboxContanier).yoxview({
            videoSize      : { maxwidth: 720, maxheight: 560 },
            autoHideInfo   : false,
            autoHideMenu   : false,
            backgroundColor: '#ffffff',
            autoHideInfo   : false,
            buttonsFadeTime: 100,
            autoPlay       : false
        });
    }
}

$(function () {

    Link.scrollToTop('#up');
    MoreButton.showContent('#load-content');
    Accordion.showContent('#accordionMobil');
    Accordion.hideContent('#accordionMobil');
    FlexSlider.initSlideshow('#slideshow');
    FlexSlider.initGallery('#slider');
    FlexSlider.initCarousel('#carousel');
    Lightbox.init('.yoxview');

//	$('div.toggle')
	$( "div.toggle" )
		.accordion({
			collapsible: true,
			heightStyle: 'content',
			active: false
		});

    var screenWidth = $(document).width();
    if (screenWidth <= 480) {
        $('.accordion .in').removeClass('in');
        $('.accordion .icon-minus').removeClass('icon-minus').addClass('icon-plus');
    }

});