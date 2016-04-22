// ==UserScript==
// @name        Remove Google click tracking
// @namespace   http://www.google.com/
// @description Remove Google click tracking
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Google_click_tracking.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Google_click_tracking.meta.js
// @exclude     http://www.google.com/calendar/*
// @exclude     https://www.google.com/calendar/*
// @include     http://www.google.tld/*
// @include     https://www.google.tld/*
// @include     https://encrypted.google.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @require     https://gist.githubusercontent.com/serge-name/cbcfd668b753049d3e4059998c16f126/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant       none
// @version     0.0.9
// ==/UserScript==

function clear_on_click_attr(jNode) {
  for (var i = 0; i < jNode.length; i++) {
    jNode.eq(i).attr("onmousedown", null);
  }
}

waitForKeyElements ("a", clear_on_click_attr, false);
