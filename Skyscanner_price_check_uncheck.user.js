// ==UserScript==
// @name        Skyscanner price check uncheck
// @namespace   http://www.skyscanner.ru/
// @description Uncheck skyscanner «price check» checkbox
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/Skyscanner_price_check_uncheck.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/Skyscanner_price_check_uncheck.meta.js
// @include     http://www.skyscanner.tld/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// @version     0.0.5
// ==/UserScript==


function uncheck_price_check(jNode) {
  for (var i = 0; i < jNode.length; i++) {
    jNode.eq(i).prop("checked", false).trigger("change");
  }
}

waitForKeyElements ("input.compare_unit_box", uncheck_price_check, false);
