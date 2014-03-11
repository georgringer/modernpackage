/**
 * jquery animation for "to-top"-link
 * use class ".top"
 * @param selector
 */
var ScrollUtil = {

    scrollToTop: function () {
        var $_topLink = $('.top');

        $($_topLink).click(function (event) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;

        });
    }
}

/**
 * jQuery form validation
 * Documetation: http://jqueryvalidation.org/documentation/
 * Language: german (transalate/messages_de.js)
 * use class ".request"
 * @type {{validateForm: Function}}
 */
var FormUtil = {
    validateForm: function(){
        var $_form = $(".request");

        $_form.validate({
            rules: {
                field: {
                    required: true,
                    digits: true
                }
            },
            lang: 'de'
        });
    }

}
/**
 * Infinite Scroll for e.g. search-results
 * Documentation: https://github.com/webcreate/infinite-ajax-scroll
 * @type {{init: Function}}
 */
var InfiniteScroll = {
    init: function(){
        jQuery.ias({
            container: '.infinite-scroll',
            item: '.list-group-item',
            pagination: '.content-container .navigation',
            triggerPageThreshold: 3,
            next: '.next-posts a',
            trigger: 'weitere Ergebnisse laden',
            loader: '<img src="ico/loader.gif"/>'
        });
    }

}
/**
 * Imports events from assets/dates.json to jQuery UI datepicker
 * @type {{init: Function, getDates: Function, showEvents: Function, openEventOnClick: Function}}
 */
var d = new Date();
Date.prototype.toString = function () {return isNaN (this) ? 'NaN' : [this.getDate(), this.getMonth(), this.getFullYear()].join('/')}
var currentYear = d.getFullYear();
var currentMonth = d.getMonth()+1;

var Calendar = {
    init:function(){
        var $_datepicker = $('#datepicker');

        Calendar.showEvents();
        $_datepicker.datepicker({
            inline: true,
            gotoCurrent: true,
            dayNames: [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" ],
            dayNamesMin: [ "SO", "MO", "DI", "MI", "DO", "FR", "SA" ],
            monthNames: [ "Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ],
            nextText: 'Vor',
            prevText: 'Zurück',
            yearRange: "2010:2016", // calendar range
            firstDay: 1, // first day is monday
            onChangeMonthYear: function(year, month, inst) {
                Calendar.getDates(year, month);
                currentMonth = month;
                currentYear = year;
            },
            onSelect:function(date, inst){
               Calendar.getDates(currentYear, currentMonth);
                this.delegate('.popover a', 'click',function(e){
                    window.location = $(this).attr("href");

                });
            }
        });
    },
    getDates: function(year, month){
        $.getJSON('assets/dates.json', function(data){
            var i = 0;
            for (i = 0; i < data.data.length; i++)
            {
                if(currentMonth === parseInt(data.data[i]['m']) && currentYear === parseInt(data.data[i]['y'])){
                    $('.ui-datepicker-calendar td a:exactly('+data.data[i]['d']+')')
                        .attr('class', 'active')
                        .attr('data-original-title', data.data[i]['title'])
                        .attr('rel', 'popover')
                        .attr('data-content', data.data[i]['description'])
                }
            }
            $(".ui-datepicker-calendar a.active").click( function(e) {
                e.stopPropagation();
                e.preventDefault();

            });
            BootstrapPopover.init(".ui-datepicker-calendar a.active");
        });

        $.expr[":"].exactly = function(el, i, m) {
            var s = m[3];
            if (!s) return false;
            return eval("/^" + s + "$/i").test($(el).text());
        };
    },
    showEvents:function(){
        Calendar.getDates(d.getFullYear(), d.getMonth()+1);
    }
}
/**
 * Popover on mouseover for Calendar Events
 * @type {{init: Function}}
 */
var BootstrapPopover = {
    init:function(trigger){
        $(trigger).popover({
            trigger: "click",
            html:  true,
            placement : 'bottom'//placement of the popover. also can use top, bottom, left or right
        });
        $(trigger).on('click', function (e) {
            $(trigger).not(this).popover('hide');
        });

    }
}

/**
 * Fancybox lightobx
 * use class ".fancybox"
 * documentation: http://fancyapps.com/fancybox/
 * @type {{init: Function}}
 */
var LightboxUtil = {
    init:function(){
        var $_lightbox  = $('.fancybox');
        $_lightbox.fancybox({
            prevEffect: 'none',
            nextEffect: 'none',
            helpers: {
                title: { type : 'inside' }
            }
        });
    }
}
/**
 * Bootstrap Accordion
 * use class ".accordion"
 * @type {{init: Function}}
 */
var BootstrapAccordion = {
    init:function(){
        var $_accordion = $('.accordion');
        $_accordion.collapse();
    }
}
/**
 * Bootstrap Tabs
 * use class ".tabs"
 * @type {{init: Function}}
 */
var BootstrapTabs = {
    init: function(){
        var $_tabs = $('.tabs a:first');
        $_tabs.tab('show');

    }
}

/**
 * Animate Elements
 * @type {{toggleElement: Function}}
 */
var HeaderDropdowns = {
    /**
     * Toggle Element (e.g. search-form on mobile devices)
     * @param trigger
     * @param listener
     * @param hideOther
     */

    // hide navigation if search-form is visible
    init:function(){
        HeaderDropdowns.toggleSearch('.search-loupe', '.navbar-form', '.navbar-collapse');
        HeaderDropdowns.hideSearch('.navbar-toggle', '.navbar-form');
    } ,
    // hide navigation if search-form is visible
    toggleSearch:function(trigger, listener, hideOther){
        var $_trigger = trigger,
            $_listener = listener,
            $_hideOther = hideOther;

        $($_trigger).bind('click',function(){
            $($_listener).slideToggle('fast');
            if(typeof $_hideOther !== 'undefined'){
                if($($_hideOther).is(':visible')){
                    $($_hideOther).height(0).removeClass('in');
                }
            }
        });
    },
    // hide search-form if navigation is visible
    hideSearch:function(trigger, hideElement){
        var $_trigger = trigger,
            $_hideElement = hideElement;

        $($_trigger).bind('click',function(){
            if(typeof $_hideElement !== 'undefined'){
                if($($_hideElement).is(':visible')){
                    console.log($_hideElement + " hide navi");
                    $($_hideElement).slideUp();
                }
            }
        });
    }
}

jQuery(window).bind('load', function() {


    if($('.request').length){
        FormUtil.validateForm();
    }
    if($('.flexslider').length){
        $('.flexslider').flexslider({
            animation: "slide"
        });
    }
    if($('#search').length){
        InfiniteScroll.init();
    }
    if($('#map_canvas').length){
        // show styled map
        initialize();
    }
    if($('#datepicker').length){
        Calendar.init();
    }
    if($('.fancybox').length){
        LightboxUtil.init();
    }
    if($('.accordion').length){
        BootstrapAccordion.init();
    }
    if($('.tabs').length){
        BootstrapTabs.init();

    }
    HeaderDropdowns.init();
    ScrollUtil.scrollToTop();

});