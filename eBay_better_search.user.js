// ==UserScript==
// @name        eBay better search
// @namespace   http://www.ebay.com/
// @description eBay better search
// @downloadURL https://github.com/serge-name/greasemonkey-scripts/raw/master/eBay_better_search.user.js
// @updateURL   https://github.com/serge-name/greasemonkey-scripts/raw/master/eBay_better_search.meta.js
// @include     http://www.ebay.tld/sch/*
// @include     http://www.ebay.tld/itm/*
// @grant       none
// @version     0.0.1
// ==/UserScript==

/*
 * _pppn=v3       — use old search engine 'Viking' instead of 'Cassini'
 * LH_PrefLoc=2   — set LOCATION to UK/USA/etc. ONLY
 * LH_TitleDesc=1 — set INCLUDE DESCRIPTION search
 */

// **** Update links in the document ****
var links = content.document.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
  links[i].href = update_get_param(links[i].href, '/i.html', '_pppn', 'v3');
  links[i].href = update_get_param(links[i].href, '/m.html', '_pppn', 'v3');
  links[i].href = update_get_param(links[i].href, '/itm/', 'LH_PrefLoc', '2');
}

// **** Update location ****
var locationOrig = location.href;
var locationNew = update_get_param(locationOrig, '/i.html', '_pppn', 'v3');
var locationNew = update_get_param(locationNew,  '/i.html', 'LH_PrefLoc', '2');
var locationNew = update_get_param(locationNew,  '/itm/', 'LH_PrefLoc', '2');

if (locationNew != locationOrig) {
  location.href = locationNew;
}

// **** Helper functions ****
function update_get_param(url, string, param, value) {
  var arr1, arr2;
  var uri;
  var params;

  arr1 = url.split('?', 2);
  uri = arr1[0];
  params = arr1[1] || '';

  if (uri.indexOf(string) == -1) {
    return url;
  }

  arr2 = params.split('&').filter(arrayRemoveEmpty).map(arraySplitEachParam);
  arr2 = arraySetParam(arr2, param, value);

  arr1[1] = arr2.map(arrayJoinEachParam).join('&');

  return arr1.join('?');
}

function arrayRemoveEmpty(element) {
  return element.length > 0;
}

function arraySplitEachParam(element) {
  var arr = element.split('=');
  var param = arr[0];
  var value = arr[1] || '';
  return [param, value];
}

function arrayJoinEachParam(element) {
  return element.join('=');
}

function arraySetParam(arr, param, value) {
  var res;

  res = arr.every(function(element, index, array) {
    if (element[0] == param) {
      array[index][1] = value;
      return false;
    }
    return true;
  });

  if (res == true) {
    return arr.concat([[param, value]]);
  } else {
    return arr;
  }
}
