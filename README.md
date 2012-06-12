# Linkify jQuery Plugin

Linkify is jQuery plugin to formatting the text that contains URL or hashtag into a clickable HTML content.

## Usage

Include the plugin script

``` html
<script src="jquery.linkify.js" type="text/javascript"></script>
```

``` js
$("#content").linkify();
```
  
or to enable the hashtag link

``` js
function toHashtagUrl(hashtag) {
  return "http://myservice.com?q=" + hashtag;
}

$("#content-with-hashtag").linkify(toHashtagUrl);
```

or to enable the screen name link

``` js
function toAtUrl(at) {
  return "http://myservice.com?q=" + at;
}

$("#content-with-hashtag").linkify(undefined, toAtUrl);
```
