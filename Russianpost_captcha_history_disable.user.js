// ==UserScript==
// @name        Russianpost captcha history disable
// @namespace   http://www.russianpost.ru/
// @description Russianpost captcha history disable
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/Russianpost_captcha_history_disable.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/Russianpost_captcha_history_disable.meta.js
// @include     http://www.russianpost.ru/*/trackingpo
// @grant       none
// @version     0.0.1
// ==/UserScript==

document.getElementById('InputedCaptchaCode').setAttribute('autocomplete', 'off');
