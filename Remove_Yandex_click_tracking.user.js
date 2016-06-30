// ==UserScript==
// @name        Remove Yandex click tracking
// @namespace   http://www.yandex.ru/
// @description Remove Yandex click tracking
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Yandex_click_tracking.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Yandex_click_tracking.meta.js
// @include     http://yandex.ru/yandsearch?*
// @include     https://yandex.ru/yandsearch?*
// @include     http://yandex.ru/search/*
// @include     https://yandex.ru/search/*
// @include     http://yandex.ru/blogs/search?*
// @include     https://yandex.ru/blogs/search?*
// @require     https://gist.githubusercontent.com/serge-name/cbcfd668b753049d3e4059998c16f126/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant       none
// @version     0.0.10
// ==/UserScript==

function cleanup_tag(jNode, attr_name) {
  for (var i = 0; i < jNode.length; i++) {
    if (! jNode.eq(i).attr(attr_name)) {
      continue;
    }

    if (jNode.eq(i).attr(attr_name).match(/\/clck/)) {
      jNode.eq(i).attr(attr_name, null);
    }
  }
}

function cleanup_a(jNode) {
  cleanup_tag(jNode, "onmousedown");
}

function cleanup_i(jNode) {
  cleanup_tag(jNode, "style");
}

function cleanup_body_div(jNode) {
  cleanup_tag(jNode, "onclick");
}

waitForKeyElements ("a", cleanup_a);
waitForKeyElements ("i", cleanup_i);
waitForKeyElements ("body", cleanup_body_div);
waitForKeyElements ("div", cleanup_body_div);
