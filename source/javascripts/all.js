var cb = function() {
  var h = document.getElementsByTagName('head')[0];
  var foundation = document.createElement('link');
  foundation.rel = 'stylesheet';
  foundation.href = '/stylesheets/foundation.css';
  h.parentNode.insertBefore(foundation, h);

  var normalize = document.createElement('link');
  normalize.rel = 'stylesheet';
  normalize.href = '/stylesheets/normalize.css';
  var h = document.getElementsByTagName('head')[0];
  h.parentNode.insertBefore(normalize, h);

  var optimized = document.createElement('link');
  optimized.rel = 'stylesheet';
  optimized.href = '/stylesheets/optimized.css';
  h.parentNode.insertBefore(optimized, h);

  var fontawesome = document.createElement('link');
  fontawesome.rel = 'stylesheet';
  fontawesome.href = '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css';
  h.parentNode.insertBefore(fontawesome, h);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);