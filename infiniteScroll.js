;(function($) {
  // instantiate with a css selector
  var InfiniteScroll = function(selector, debug) {
    this.selector = selector;
    this.debug = debug;
  };

  InfiniteScroll.prototype.setup = function() {
    // cache all css selectors
    var $document = $(document);
    var $window = $(window);  
    var $selected = $(this.selector);
    var debug = this.debug;

    var didScroll = false;
    var timer = false;

    // every time the window scrolls, this method gets called
    // be very very wary of all the stuff that you do in here
    $window.scroll(function(scrollEvent) {

      if(!didScroll) {

        var onScroll = function() {
          if(didScroll) {
            didScroll = false;
            clearTimeout(timer);

            // check your page position
            var actualHeight = $document.height() - $window.height();

            // this difference of 500 may be increased or decreased as per convinience
            if(Math.abs(actualHeight - $window.scrollTop()) <= 500) {
              // close to the end of the page
              if(debug) {
                console.log("Dispatching Scroll Event", scrollEvent);
              }
              // trigger event
              $selected.trigger("infinite-scroll", [scrollEvent]);
            }
          }
        };

        // throttling the rate of notifications to 250ms
        // you can reduce it further, if that is not sufficient
        timer = setInterval(onScroll, 250);

      }

      didScroll = true;

    });
  };

  // add it as the jQuery plugin
  $.InfiniteScroll = InfiniteScroll;

})(jQuery);