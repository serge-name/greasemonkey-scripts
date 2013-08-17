// ==UserScript==
// @name        Remove Yandex click tracking
// @namespace   http://www.yandex.ru/
// @description Remove Yandex click tracking
// @include     http://yandex.ru/yandsearch?*
// @include     https://yandex.ru/yandsearch?*
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// @version     0.0.3
// ==/UserScript==

function cleanup_tag(jNode, attr_name) {
  for (var i = 0; i < jNode.length; i++) {
    if (! jNode.eq(i).attr(attr_name)) {
      continue;
    }

    if (jNode.eq(i).attr(attr_name).match(/yandex\.ru\/clck\//)) {
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
