function linkify(string, buildHashtagUrl, buildAtUrl) {
  string = string.replace(/(http|https|ftp)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?\/?([a-zA-Z0-9\-\._\?\,\'\/\\\+&amp;%\$#\=~])*/g, "<a href=\"$&\">$&</a>");
  if (buildHashtagUrl) {
    string = string.replace(/\B#(\w+)/g, "<a href=" + buildHashtagUrl("$1") +">#$1</a>");
  }
  if (buildAtUrl) {
    string = string.replace(/\B@(\w+)/g, "<a href=" + buildAtUrl("$1") +">@$1</a>");
  }
  return string;
}

(function($) {
  $.fn.linkify = function(buildHashtagUrl,buildAtUrl) {
    return this.each(function() {
      var $this = $(this);
      $this.html(linkify($this.html(), buildHashtagUrl,buildAtUrl));
    });
  }
})(jQuery);
