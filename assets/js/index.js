/**
 * Main JS file
 */

/* globals jQuery, document */
(function ($, undefined) {
    'use strict';
    var mobileWidth = 640;
    var tabletWidth = 992;
    var desktopWidth = 1025;

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $('.post-content');
        var $windowWidth = $(window).width();
        
        function collapseMainHeader() {
            var $collapsableHeader = $('.collapsable-header');
            var $windowTop = $(window).scrollTop();
            var $mobileWindow = $windowWidth < mobileWidth;
            var $stickyHeader = $( '.sticky-shrinknav-header' );

            if ($windowTop >= 30 && !$mobileWindow && !$collapsableHeader.hasClass('sticky-shrinknav-wrapper')) {
                $collapsableHeader.addClass('sticky-shrinknav-wrapper');
            }
            
            if ($windowTop <= 30 && !$mobileWindow && $collapsableHeader.hasClass('sticky-shrinknav-wrapper')) {
                $collapsableHeader.removeClass('sticky-shrinknav-wrapper');
            }
        }

        $(window).scroll(collapseMainHeader);

        $postContent.fitVids();

        $('[data-curtain-menu-button]').click(function(){
            $('body').toggleClass('curtain-menu-open');
        });

    });
  
})(jQuery);
