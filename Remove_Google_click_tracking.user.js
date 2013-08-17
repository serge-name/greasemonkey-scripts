// ==UserScript==
// @name        Remove Google click tracking
// @namespace   http://www.google.com/
// @description Remove Google click tracking
// @include     http://www.google.tld/search?*
// @include     https://www.google.tld/search?*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// @version     0.0.2
// ==/UserScript==

function clear_on_click_attr(jNode) {
  for (var i = 0; i < jNode.length; i++) {
    jNode.eq(i).attr("onmousedown", null);
  }
}

waitForKeyElements ("a", clear_on_click_attr, false);
