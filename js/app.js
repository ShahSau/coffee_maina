$(document).ready(function() {
  var docWidth = $('body').width(),
    $wrap = $('#wrap'),
    $images = $('#wrap .block'),
    slidesWidth = $wrap.width();

  $(window).on('resize', function() {
    docWidth = $('body').width();
    slidesWidth = $wrap.width();
  });

  $(document).mousemove(function(e) {
    var mouseX = e.pageX,
      offset = mouseX / docWidth * slidesWidth - mouseX / 2;

    $images.css({
      '-wrbkit-transform': 'translate3d(' + -offset + 'px,0,0)',
      'transform': 'translate3d(' + -offset + 'px,0,0)'
    });
  });
});

var t1 = new TimelineMax({
  paused: true
});

TweenMax.from(".logo", 0.5, {
  opacity: 0,
  y: 10,
  delay: 1
});

TweenMax.from(".menu", 0.5, {
  opacity: 0,
  y: 10,
  delay: 1.2
});

TweenMax.from(".title", 3, {
  opacity: 0,
  delay: 1.4
});

TweenMax.from(".tagline", 3, {
  opacity: 0,
  delay: 1.6
});

TweenMax.from(".morewine", 0.5, {
  opacity: 0,
  y: 4,
  delay: 1.8
});

t1.to(".wines", 1, {
  autoAlpha: 1
});

t1.from(".one", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.1
}, "-=1");

t1.from(".two", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.3
}, "-=1");

t1.from(".three", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.5
}, "-=1");

t1.from(".four", 0.5, {
  opacity: 0,
  y: 20,
  delay: 0.7
}, "-=1");

t1.reverse();
$(document).on("click", ".morewine", function() {
  t1.reversed(!t1.reversed());
});

$(document).on("click", "a", function() {
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".close-btn a", function() {
  t1.reversed(!t1.reversed());
});
