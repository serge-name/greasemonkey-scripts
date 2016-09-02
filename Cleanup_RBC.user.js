// ==UserScript==
// @name         Cleanup RBC
// @namespace    http://rbc.ru/
// @version      0.0.0
// @downloadURL  https://github.com/serge-name/greasemonkey-scripts/raw/master/Cleanup_RBC.user.js
// @updateURL    https://github.com/serge-name/greasemonkey-scripts/raw/master/Cleanup_RBC.meta.js
// @description  Cleanup RBC
// @include      /^https?:\/\/([^.]+\.)?rbc\.ru\//
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @require      https://gist.githubusercontent.com/serge-name/cbcfd668b753049d3e4059998c16f126/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant        none
// ==/UserScript==

function cleanup_push(jNode) {
  // FIXME: removes popup_law too
  rx0 = /^(.*\s+)?popup__push(\s+.*)?$/;
  rx1 = /^(.*\s+)?popup__blackout(\s+.*)?$/;

  for (var i = 0; i < jNode.length; i++) {
    el = jNode.eq(i);
    if (rx0.test(el.attr("class")) || rx1.test(el.attr("class"))) {
      console.log('going to cleanup class "' + el.attr("class"));
      el.attr("style", "display:none;");
      el.empty();
    }
  }
}

function cleanup_div(jNode) {
  cleanup_push(jNode);
}

waitForKeyElements ("div", cleanup_div, false);
