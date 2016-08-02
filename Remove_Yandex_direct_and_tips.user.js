// ==UserScript==
// @name        Remove Yandex Direct and tips
// @namespace   http://yandex.ru/maps/
// @description Remove Yandex Direct and tips
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Yandex_direct_and_tips.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Yandex_direct_and_tips.meta.js
// @include     https://yandex.ru/maps/*
// @require     https://gist.githubusercontent.com/serge-name/cbcfd668b753049d3e4059998c16f126/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant       none
// @version     0.0.2
// ==/UserScript==

function hide_direct(jNode) {
  for (var i = 0; i < jNode.length; i++) {
    ith = jNode.eq(i);
    if (ith.attr("href") && ith.html()) {
      if (ith.attr("href").match(/yandex\.ru\//) &&
          ith.html().match(/Яндекс.Директ/)) {
        two_levels_up = ith.parent().parent();
        if (two_levels_up.html()) {
          two_levels_up.attr("style", "display:none;");
        }
      }
    }
  }
}

function hide_tips(jNode) {
  for (var i = 0; i < jNode.length; i++) {
    ith = jNode.eq(i);
    if (ith.attr("href") && ith.attr("class")) {
      if (ith.attr("href").match(/yandex\.ru\//) &&
          ith.attr("class") == "tip") {
        ith.attr("style", "display:none;");
      }
    }
  }
}

function hide_blocks(jNode) {
  hide_direct(jNode);
  hide_tips(jNode);
}

waitForKeyElements ("a", hide_blocks);
