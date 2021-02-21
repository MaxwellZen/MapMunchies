function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

var url = document.location;
url = url.slice(url.search("?")+1);
url = decode_utf8(url);
var fields = url.split("&");
var dict = {};
for (var s in fields) {
  s = s.split("=");
  dict[decode_utf8(s[0])] = decode_utf8(s[1]);
}