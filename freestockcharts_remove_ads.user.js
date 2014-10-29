// ==UserScript==
// @name        Remove the right ads frame on freestockcharts.com
// @namespace   http://www.freestockcharts.com/
// @description Remove the right ads frame on freestockcharts.com
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/freestockcharts_remove_ads.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/freestockcharts_remove_ads.meta.js
// @include     http://www.freestockcharts.com/platform/v1
// @grant       none
// @version     0.0.1
// ==/UserScript==

document.getElementById('adFrame').setAttribute('style', 'display: none;');
