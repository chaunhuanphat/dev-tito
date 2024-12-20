(function(n) {
function e(n, e) {
var t = (65535 & n) + (65535 & e);
return (n >> 16) + (e >> 16) + (t >> 16) << 16 | 65535 & t;
}
function t(n, t, o, r, c, u) {
n = e(e(t, n), e(r, u));
return e(n << c | n >>> 32 - c, o);
}
function o(n, e, o, r, c, u, f) {
return t(e & o | ~e & r, n, e, c, u, f);
}
function r(n, e, o, r, c, u, f) {
return t(e & r | o & ~r, n, e, c, u, f);
}
function c(n, e, o, r, c, u, f) {
return t(o ^ (e | ~r), n, e, c, u, f);
}
function u(n, u) {
n[u >> 5] |= 128 << u % 32;
n[14 + (u + 64 >>> 9 << 4)] = u;
var f, a, i, d, h, p = 1732584193, l = -271733879, m = -1732584194, g = 271733878;
for (f = 0; f < n.length; f += 16) a = p, i = l, d = m, h = g, p = o(p, l, m, g, n[f], 7, -680876936), 
g = o(g, p, l, m, n[f + 1], 12, -389564586), m = o(m, g, p, l, n[f + 2], 17, 606105819), 
l = o(l, m, g, p, n[f + 3], 22, -1044525330), p = o(p, l, m, g, n[f + 4], 7, -176418897), 
g = o(g, p, l, m, n[f + 5], 12, 1200080426), m = o(m, g, p, l, n[f + 6], 17, -1473231341), 
l = o(l, m, g, p, n[f + 7], 22, -45705983), p = o(p, l, m, g, n[f + 8], 7, 1770035416), 
g = o(g, p, l, m, n[f + 9], 12, -1958414417), m = o(m, g, p, l, n[f + 10], 17, -42063), 
l = o(l, m, g, p, n[f + 11], 22, -1990404162), p = o(p, l, m, g, n[f + 12], 7, 1804603682), 
g = o(g, p, l, m, n[f + 13], 12, -40341101), m = o(m, g, p, l, n[f + 14], 17, -1502002290), 
p = r(p, l = o(l, m, g, p, n[f + 15], 22, 1236535329), m, g, n[f + 1], 5, -165796510), 
g = r(g, p, l, m, n[f + 6], 9, -1069501632), m = r(m, g, p, l, n[f + 11], 14, 643717713), 
l = r(l, m, g, p, n[f], 20, -373897302), p = r(p, l, m, g, n[f + 5], 5, -701558691), 
g = r(g, p, l, m, n[f + 10], 9, 38016083), m = r(m, g, p, l, n[f + 15], 14, -660478335), 
l = r(l, m, g, p, n[f + 4], 20, -405537848), p = r(p, l, m, g, n[f + 9], 5, 568446438), 
g = r(g, p, l, m, n[f + 14], 9, -1019803690), m = r(m, g, p, l, n[f + 3], 14, -187363961), 
l = r(l, m, g, p, n[f + 8], 20, 1163531501), p = r(p, l, m, g, n[f + 13], 5, -1444681467), 
g = r(g, p, l, m, n[f + 2], 9, -51403784), m = r(m, g, p, l, n[f + 7], 14, 1735328473), 
p = t((l = r(l, m, g, p, n[f + 12], 20, -1926607734)) ^ m ^ g, p, l, n[f + 5], 4, -378558), 
g = t(p ^ l ^ m, g, p, n[f + 8], 11, -2022574463), m = t(g ^ p ^ l, m, g, n[f + 11], 16, 1839030562), 
l = t(m ^ g ^ p, l, m, n[f + 14], 23, -35309556), p = t(l ^ m ^ g, p, l, n[f + 1], 4, -1530992060), 
g = t(p ^ l ^ m, g, p, n[f + 4], 11, 1272893353), m = t(g ^ p ^ l, m, g, n[f + 7], 16, -155497632), 
l = t(m ^ g ^ p, l, m, n[f + 10], 23, -1094730640), p = t(l ^ m ^ g, p, l, n[f + 13], 4, 681279174), 
g = t(p ^ l ^ m, g, p, n[f], 11, -358537222), m = t(g ^ p ^ l, m, g, n[f + 3], 16, -722521979), 
l = t(m ^ g ^ p, l, m, n[f + 6], 23, 76029189), p = t(l ^ m ^ g, p, l, n[f + 9], 4, -640364487), 
g = t(p ^ l ^ m, g, p, n[f + 12], 11, -421815835), m = t(g ^ p ^ l, m, g, n[f + 15], 16, 530742520), 
p = c(p, l = t(m ^ g ^ p, l, m, n[f + 2], 23, -995338651), m, g, n[f], 6, -198630844), 
g = c(g, p, l, m, n[f + 7], 10, 1126891415), m = c(m, g, p, l, n[f + 14], 15, -1416354905), 
l = c(l, m, g, p, n[f + 5], 21, -57434055), p = c(p, l, m, g, n[f + 12], 6, 1700485571), 
g = c(g, p, l, m, n[f + 3], 10, -1894986606), m = c(m, g, p, l, n[f + 10], 15, -1051523), 
l = c(l, m, g, p, n[f + 1], 21, -2054922799), p = c(p, l, m, g, n[f + 8], 6, 1873313359), 
g = c(g, p, l, m, n[f + 15], 10, -30611744), m = c(m, g, p, l, n[f + 6], 15, -1560198380), 
l = c(l, m, g, p, n[f + 13], 21, 1309151649), p = c(p, l, m, g, n[f + 4], 6, -145523070), 
g = c(g, p, l, m, n[f + 11], 10, -1120210379), m = c(m, g, p, l, n[f + 2], 15, 718787259), 
l = c(l, m, g, p, n[f + 9], 21, -343485551), p = e(p, a), l = e(l, i), m = e(m, d), 
g = e(g, h);
return [ p, l, m, g ];
}
function f(n) {
var e, t = "", o = 32 * n.length;
for (e = 0; e < o; e += 8) t += String.fromCharCode(n[e >> 5] >>> e % 32 & 255);
return t;
}
function a(n) {
var e, t = [];
t[(n.length >> 2) - 1] = void 0;
for (e = 0; e < t.length; e += 1) t[e] = 0;
var o = 8 * n.length;
for (e = 0; e < o; e += 8) t[e >> 5] |= (255 & n.charCodeAt(e / 8)) << e % 32;
return t;
}
function i(n) {
return f(u(a(n), 8 * n.length));
}
function d(n, e) {
var t, o = a(n), r = [], c = [];
r[15] = c[15] = void 0;
16 < o.length && (o = u(o, 8 * n.length));
for (t = 0; 16 > t; t += 1) r[t] = 909522486 ^ o[t], c[t] = 1549556828 ^ o[t];
t = u(r.concat(a(e)), 512 + 8 * e.length);
return f(u(c.concat(t), 640));
}
function h(n) {
var e, t, o = "";
for (t = 0; t < n.length; t += 1) e = n.charCodeAt(t), o += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
return o;
}
function p(n, e, t) {
return n = e ? t ? d(unescape(encodeURIComponent(e)), unescape(encodeURIComponent(n))) : h(n = d(unescape(encodeURIComponent(e)), unescape(encodeURIComponent(n)))) : t ? i(unescape(encodeURIComponent(n))) : h(i(unescape(encodeURIComponent(n))));
}
"function" == typeof define && define.amd ? define(function() {
return p;
}) : "object" == typeof module && module.exports ? module.exports = p : n.md5 = p;
})(this);