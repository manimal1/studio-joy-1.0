(function ($, undefined) {
    "use strict";

    var $document = $(document);
    var $videoHeader = $( '.video-header' );
    var $videoFrame = $( '.video-frame' );

    $document.ready(function () {
        var $windowTop = $(window).scrollTop();
        var $windowWidth = $(window).width();
        
        function setVideoHeader() {
            var screenWidth = window.innerWidth;
            var videoFrameHeight = screenWidth / 1.777;

            $videoFrame.css( 'width', screenWidth );
            $videoFrame.css( 'height', videoFrameHeight );
        }
        
        if ( $videoHeader ) {
            setVideoHeader();
        }

        $( window ).resize(function() {
            if ( $videoHeader ) {
                setVideoHeader();
            }
        });
    });
})(jQuery);