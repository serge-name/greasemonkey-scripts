// ==UserScript==
// @name        Skyscanner price check uncheck
// @namespace   http://www.skyscanner.ru/
// @description Uncheck skyscanner «price check» checkbox
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/Skyscanner_price_check_uncheck.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/Skyscanner_price_check_uncheck.meta.js
// @include     http://www.skyscanner.tld/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @require     https://gist.githubusercontent.com/serge-name/cbcfd668b753049d3e4059998c16f126/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant       none
// @version     0.0.8
// ==/UserScript==


function uncheck_price_check(jNode) {
  for (var i = 0; i < jNode.length; i++) {
    jNode.eq(i).prop("checked", false).trigger("change");
  }
}

waitForKeyElements ("input.compare_unit_box", uncheck_price_check, false);
