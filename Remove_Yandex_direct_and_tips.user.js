// ==UserScript==
// @name        Remove Yandex Direct and tips
// @namespace   http://yandex.ru/maps/
// @description Remove Yandex Direct and tips
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Yandex_direct_and_tips.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/Remove_Yandex_direct_and_tips.meta.js
// @include     https://yandex.ru/maps/*
// @require     https://gist.githubusercontent.com/serge-name/cbcfd668b753049d3e4059998c16f126/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant       none
// @version     0.0.1
// ==/UserScript==

function hide_block(jNode, rx) {
  for (var i = 0; i < jNode.length; i++) {
    ith = jNode.eq(i);
    if (ith.attr("class")) {
      if (ith.attr("class").match(rx)) {
        ith.attr("style", "display:none;");
      }
    }
  }
}

function hide_annoying_div_blocks(jNode) {
  hide_block(jNode, /^direct\-view$/);
}

function hide_annoying_a_blocks(jNode) {
  hide_block(jNode, /^tip$/);
}

waitForKeyElements ("div", hide_annoying_div_blocks);
waitForKeyElements ("a", hide_annoying_a_blocks);
