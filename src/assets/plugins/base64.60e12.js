(function() {
"use strict";
var e = {}, o = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "=" ], n = {
A: 0,
B: 1,
C: 2,
D: 3,
E: 4,
F: 5,
G: 6,
H: 7,
I: 8,
J: 9,
K: 10,
L: 11,
M: 12,
N: 13,
O: 14,
P: 15,
Q: 16,
R: 17,
S: 18,
T: 19,
U: 20,
V: 21,
W: 22,
X: 23,
Y: 24,
Z: 25,
a: 26,
b: 27,
c: 28,
d: 29,
e: 30,
f: 31,
g: 32,
h: 33,
i: 34,
j: 35,
k: 36,
l: 37,
m: 38,
n: 39,
o: 40,
p: 41,
q: 42,
r: 43,
s: 44,
t: 45,
u: 46,
v: 47,
w: 48,
x: 49,
y: 50,
z: 51,
0: 52,
1: 53,
2: 54,
3: 55,
4: 56,
5: 57,
6: 58,
7: 59,
8: 60,
9: 61,
"+": 62,
"/": 63
};
e.encode = window.btoa ? function(e) {
return window.btoa(unescape(encodeURIComponent(e)));
} : function(e) {
var n, r, t, c, d, a, i, f, p = 0, u = 0, l = [];
n = (e = unescape(encodeURIComponent(e))).length;
for (;p < n; ) {
d = (r = e.charCodeAt(p++) || 0) >> 2 & 63;
a = (3 & r) << 4 | (t = e.charCodeAt(p++) || 0) >> 4 & 15;
i = (15 & t) << 2 | (c = e.charCodeAt(p++) || 0) >> 6 & 3;
f = 63 & c;
if (!c) {
f = 64;
t || (i = 64);
}
l[u++] = o[d];
l[u++] = o[a];
l[u++] = o[i];
l[u++] = o[f];
}
return l.join("");
};
e.decode = window.atob ? function(e) {
return decodeURIComponent(escape(window.atob(e)));
} : function(e) {
var o, r, t, c, d, a, i = 0, f = 0, p = [];
o = (e = e.replace(/\=+$/, "").split("")).length;
for (;i < o; ) {
c = (63 & (n[e[i++]] || "")) << 2 | (r = n[e[i++]] || "") >> 4 & 3;
d = (15 & r) << 4 | (t = n[e[i++]] || "") >> 2 & 15;
a = (3 & t) << 6 | 63 & (n[e[i++]] || "");
p[f++] = String.fromCharCode(c);
if (d) {
p[f++] = String.fromCharCode(d);
a && (p[f++] = String.fromCharCode(a));
}
}
return decodeURIComponent(escape(p.join("")));
};
e.encodeSafe = function(o) {
return e.encode(o).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, ".");
};
e.decodeSafe = function(o) {
return e.decode(o.replace(/-/g, "+").replace(/_/g, "/").replace(/\./g, "="));
};
"object" == typeof lego && lego.define ? lego.define("base64", [], function(o, n, r) {
r.exports = e;
}) : "object" == typeof module && module.exports ? module.exports = e : window.base64 = e;
})();