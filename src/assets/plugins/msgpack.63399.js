!function(t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).msgpack = t();
}(function() {
return function t(r, e, n) {
function i(f, u) {
if (!e[f]) {
if (!r[f]) {
var a = "function" == typeof require && require;
if (!u && a) return a(f, !0);
if (o) return o(f, !0);
var s = new Error("Cannot find module '" + f + "'");
throw s.code = "MODULE_NOT_FOUND", s;
}
var c = e[f] = {
exports: {}
};
r[f][0].call(c.exports, function(t) {
return i(r[f][1][t] || t);
}, c, c.exports, t, r, e, n);
}
return e[f].exports;
}
for (var o = "function" == typeof require && require, f = 0; f < n.length; f++) i(n[f]);
return i;
}({
1: [ function(t, r, e) {
e.encode = t("./encode").encode, e.decode = t("./decode").decode, e.Encoder = t("./encoder").Encoder, 
e.Decoder = t("./decoder").Decoder, e.createCodec = t("./ext").createCodec, e.codec = t("./codec").codec;
}, {
"./codec": 10,
"./decode": 12,
"./decoder": 13,
"./encode": 15,
"./encoder": 16,
"./ext": 20
} ],
2: [ function(t, r) {
(function(t) {
function e(t) {
return t && t.isBuffer && t;
}
r.exports = e("undefined" != typeof t && t) || e(this.Buffer) || e("undefined" != typeof window && window.Buffer) || this.Buffer;
}).call(this, t("buffer").Buffer);
}, {
buffer: 29
} ],
3: [ function(t, r, e) {
e.copy = function(t, r, e, n) {
var i;
e || (e = 0), n || 0 === n || (n = this.length), r || (r = 0);
var o = n - e;
if (t === this && e < r && r < n) for (i = o - 1; i >= 0; i--) t[i + r] = this[i + e]; else for (i = 0; i < o; i++) t[i + r] = this[i + e];
return o;
}, e.toString = function(t, r, e) {
var n = this, i = 0 | r;
e || (e = n.length);
for (var o = "", f = 0; i < e; ) (f = n[i++]) < 128 ? o += String.fromCharCode(f) : (192 == (224 & f) ? f = (31 & f) << 6 | 63 & n[i++] : 224 == (240 & f) ? f = (15 & f) << 12 | (63 & n[i++]) << 6 | 63 & n[i++] : 240 == (248 & f) && (f = (7 & f) << 18 | (63 & n[i++]) << 12 | (63 & n[i++]) << 6 | 63 & n[i++]), 
f >= 65536 ? (f -= 65536, o += String.fromCharCode(55296 + (f >>> 10), 56320 + (1023 & f))) : o += String.fromCharCode(f));
return o;
}, e.write = function(t, r) {
for (var e = this, n = r || (r |= 0), i = t.length, o = 0, f = 0; f < i; ) (o = t.charCodeAt(f++)) < 128 ? e[n++] = o : o < 2048 ? (e[n++] = 192 | o >>> 6, 
e[n++] = 128 | 63 & o) : o < 55296 || o > 57343 ? (e[n++] = 224 | o >>> 12, e[n++] = 128 | o >>> 6 & 63, 
e[n++] = 128 | 63 & o) : (o = 65536 + (o - 55296 << 10 | t.charCodeAt(f++) - 56320), 
e[n++] = 240 | o >>> 18, e[n++] = 128 | o >>> 12 & 63, e[n++] = 128 | o >>> 6 & 63, 
e[n++] = 128 | 63 & o);
return n - r;
};
}, {} ],
4: [ function(t, r, e) {
function n(t) {
return new Array(t);
}
var i = t("./bufferish");
(e = r.exports = n(0)).alloc = n, e.concat = i.concat, e.from = function(t) {
if (!i.isBuffer(t) && i.isView(t)) t = i.Uint8Array.from(t); else if (i.isArrayBuffer(t)) t = new Uint8Array(t); else {
if ("string" == typeof t) return i.from.call(e, t);
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
}
return Array.prototype.slice.call(t);
};
}, {
"./bufferish": 8
} ],
5: [ function(t, r, e) {
function n(t) {
return new o(t);
}
var i = t("./bufferish"), o = i.global;
(e = r.exports = i.hasBuffer ? n(0) : []).alloc = i.hasBuffer && o.alloc || n, e.concat = i.concat, 
e.from = function(t) {
if (!i.isBuffer(t) && i.isView(t)) t = i.Uint8Array.from(t); else if (i.isArrayBuffer(t)) t = new Uint8Array(t); else {
if ("string" == typeof t) return i.from.call(e, t);
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
}
return o.from && 1 !== o.from.length ? o.from(t) : new o(t);
};
}, {
"./bufferish": 8
} ],
6: [ function(t, r, e) {
function n(t, r, e, n) {
var u = f.isBuffer(this), a = f.isBuffer(t);
if (u && a) return this.copy(t, r, e, n);
if (s || u || a || !f.isView(this) || !f.isView(t)) return o.copy.call(this, t, r, e, n);
var c = e || null != n ? i.call(this, e, n) : this;
return t.set(c, r), c.length;
}
function i(t, r) {
var e = this.slice || !s && this.subarray;
if (e) return e.call(this, t, r);
var i = f.alloc.call(this, r - t);
return n.call(this, i, 0, t, r), i;
}
var o = t("./buffer-lite");
e.copy = n, e.slice = i, e.toString = function(t, r, e) {
return (!a && f.isBuffer(this) ? this.toString : o.toString).apply(this, arguments);
}, e.write = function(t) {
return function() {
return (this[t] || o[t]).apply(this, arguments);
};
}("write");
var f = t("./bufferish"), u = f.global, a = f.hasBuffer && "TYPED_ARRAY_SUPPORT" in u, s = a && !u.TYPED_ARRAY_SUPPORT;
}, {
"./buffer-lite": 3,
"./bufferish": 8
} ],
7: [ function(t, r, e) {
function n(t) {
return new Uint8Array(t);
}
var i = t("./bufferish");
(e = r.exports = i.hasArrayBuffer ? n(0) : []).alloc = n, e.concat = i.concat, e.from = function(t) {
if (i.isView(t)) {
var r = t.byteOffset, n = t.byteLength;
(t = t.buffer).byteLength !== n && (t.slice ? t = t.slice(r, r + n) : (t = new Uint8Array(t)).byteLength !== n && (t = Array.prototype.slice.call(t, r, r + n)));
} else {
if ("string" == typeof t) return i.from.call(e, t);
if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
}
return new Uint8Array(t);
};
}, {
"./bufferish": 8
} ],
8: [ function(t, r, e) {
function n(t) {
return o(this).alloc(t);
}
function i(t) {
var r = 3 * t.length, e = n.call(this, r), i = v.write.call(e, t);
return r !== i && (e = v.slice.call(e, 0, i)), e;
}
function o(t) {
return l(t) ? y : p(t) ? g : h(t) ? d : s ? y : c ? g : d;
}
function f() {
return !1;
}
function u(t, r) {
return t = "[object " + t + "]", function(e) {
return null != e && {}.toString.call(r ? e[r] : e) === t;
};
}
var a = e.global = t("./buffer-global"), s = e.hasBuffer = a && !!a.isBuffer, c = e.hasArrayBuffer = "undefined" != typeof ArrayBuffer, h = e.isArray = t("isarray");
e.isArrayBuffer = c ? function(t) {
return t instanceof ArrayBuffer || b(t);
} : f;
var l = e.isBuffer = s ? a.isBuffer : f, p = e.isView = c ? ArrayBuffer.isView || u("ArrayBuffer", "buffer") : f;
e.alloc = n, e.concat = function(t, r) {
r || (r = 0, Array.prototype.forEach.call(t, function(t) {
r += t.length;
}));
var i = this !== e && this || t[0], o = n.call(i, r), f = 0;
return Array.prototype.forEach.call(t, function(t) {
f += v.copy.call(t, o, f);
}), o;
}, e.from = function(t) {
return "string" == typeof t ? i.call(this, t) : o(this).from(t);
};
var d = e.Array = t("./bufferish-array"), y = e.Buffer = t("./bufferish-buffer"), g = e.Uint8Array = t("./bufferish-uint8array"), v = e.prototype = t("./bufferish-proto"), b = u("ArrayBuffer");
}, {
"./buffer-global": 2,
"./bufferish-array": 4,
"./bufferish-buffer": 5,
"./bufferish-proto": 6,
"./bufferish-uint8array": 7,
isarray: 34
} ],
9: [ function(t, r, e) {
function n(t) {
return this instanceof n ? (this.options = t, void this.init()) : new n(t);
}
function i(t, r) {
return t && r ? function() {
return t.apply(this, arguments), r.apply(this, arguments);
} : t || r;
}
function o(t) {
function r(t, r) {
return r(t);
}
return t = t.slice(), function(e) {
return t.reduce(r, e);
};
}
function f(t) {
return new n(t);
}
var u = t("isarray");
e.createCodec = f, e.install = function(t) {
for (var r in t) n.prototype[r] = i(n.prototype[r], t[r]);
}, e.filter = function(t) {
return u(t) ? o(t) : t;
};
var a = t("./bufferish");
n.prototype.init = function() {
var t = this.options;
return t && t.uint8array && (this.bufferish = a.Uint8Array), this;
}, e.preset = f({
preset: !0
});
}, {
"./bufferish": 8,
isarray: 34
} ],
10: [ function(t, r, e) {
t("./read-core"), t("./write-core"), e.codec = {
preset: t("./codec-base").preset
};
}, {
"./codec-base": 9,
"./read-core": 22,
"./write-core": 25
} ],
11: [ function(t, r, e) {
function n(t) {
if (!(this instanceof n)) return new n(t);
if (t && (this.options = t, t.codec)) {
var r = this.codec = t.codec;
r.bufferish && (this.bufferish = r.bufferish);
}
}
e.DecodeBuffer = n;
var i = t("./read-core").preset;
t("./flex-buffer").FlexDecoder.mixin(n.prototype), n.prototype.codec = i, n.prototype.fetch = function() {
return this.codec.decode(this);
};
}, {
"./flex-buffer": 21,
"./read-core": 22
} ],
12: [ function(t, r, e) {
e.decode = function(t, r) {
var e = new n(r);
return e.write(t), e.read();
};
var n = t("./decode-buffer").DecodeBuffer;
}, {
"./decode-buffer": 11
} ],
13: [ function(t, r, e) {
function n(t) {
return this instanceof n ? void o.call(this, t) : new n(t);
}
e.Decoder = n;
var i = t("event-lite"), o = t("./decode-buffer").DecodeBuffer;
n.prototype = new o(), i.mixin(n.prototype), n.prototype.decode = function(t) {
arguments.length && this.write(t), this.flush();
}, n.prototype.push = function(t) {
this.emit("data", t);
}, n.prototype.end = function(t) {
this.decode(t), this.emit("end");
};
}, {
"./decode-buffer": 11,
"event-lite": 31
} ],
14: [ function(t, r, e) {
function n(t) {
if (!(this instanceof n)) return new n(t);
if (t && (this.options = t, t.codec)) {
var r = this.codec = t.codec;
r.bufferish && (this.bufferish = r.bufferish);
}
}
e.EncodeBuffer = n;
var i = t("./write-core").preset;
t("./flex-buffer").FlexEncoder.mixin(n.prototype), n.prototype.codec = i, n.prototype.write = function(t) {
this.codec.encode(this, t);
};
}, {
"./flex-buffer": 21,
"./write-core": 25
} ],
15: [ function(t, r, e) {
e.encode = function(t, r) {
var e = new n(r);
return e.write(t), e.read();
};
var n = t("./encode-buffer").EncodeBuffer;
}, {
"./encode-buffer": 14
} ],
16: [ function(t, r, e) {
function n(t) {
return this instanceof n ? void o.call(this, t) : new n(t);
}
e.Encoder = n;
var i = t("event-lite"), o = t("./encode-buffer").EncodeBuffer;
n.prototype = new o(), i.mixin(n.prototype), n.prototype.encode = function(t) {
this.write(t), this.emit("data", this.read());
}, n.prototype.end = function(t) {
arguments.length && this.encode(t), this.flush(), this.emit("end");
};
}, {
"./encode-buffer": 14,
"event-lite": 31
} ],
17: [ function(t, r, e) {
e.ExtBuffer = function t(r, e) {
return this instanceof t ? (this.buffer = n.from(r), void (this.type = e)) : new t(r, e);
};
var n = t("./bufferish");
}, {
"./bufferish": 8
} ],
18: [ function(t, r, e) {
function n(r) {
return u || (u = t("./encode").encode), u(r);
}
function i(t) {
return t.valueOf();
}
function o(t) {
(t = RegExp.prototype.toString.call(t).split("/")).shift();
var r = [ t.pop() ];
return r.unshift(t.join("/")), r;
}
function f(t) {
var r = {};
for (var e in h) r[e] = t[e];
return r;
}
e.setExtPackers = function(t) {
t.addExtPacker(14, Error, [ f, n ]), t.addExtPacker(1, EvalError, [ f, n ]), t.addExtPacker(2, RangeError, [ f, n ]), 
t.addExtPacker(3, ReferenceError, [ f, n ]), t.addExtPacker(4, SyntaxError, [ f, n ]), 
t.addExtPacker(5, TypeError, [ f, n ]), t.addExtPacker(6, URIError, [ f, n ]), t.addExtPacker(10, RegExp, [ o, n ]), 
t.addExtPacker(11, Boolean, [ i, n ]), t.addExtPacker(12, String, [ i, n ]), t.addExtPacker(13, Date, [ Number, n ]), 
t.addExtPacker(15, Number, [ i, n ]), "undefined" != typeof Uint8Array && (t.addExtPacker(17, Int8Array, c), 
t.addExtPacker(18, Uint8Array, c), t.addExtPacker(19, Int16Array, c), t.addExtPacker(20, Uint16Array, c), 
t.addExtPacker(21, Int32Array, c), t.addExtPacker(22, Uint32Array, c), t.addExtPacker(23, Float32Array, c), 
"undefined" != typeof Float64Array && t.addExtPacker(24, Float64Array, c), "undefined" != typeof Uint8ClampedArray && t.addExtPacker(25, Uint8ClampedArray, c), 
t.addExtPacker(26, ArrayBuffer, c), t.addExtPacker(29, DataView, c)), a.hasBuffer && t.addExtPacker(27, s, a.from);
};
var u, a = t("./bufferish"), s = a.global, c = a.Uint8Array.from, h = {
name: 1,
message: 1,
stack: 1,
columnNumber: 1,
fileName: 1,
lineNumber: 1
};
}, {
"./bufferish": 8,
"./encode": 15
} ],
19: [ function(t, r, e) {
function n(r) {
return a || (a = t("./decode").decode), a(r);
}
function i(t) {
return RegExp.apply(null, t);
}
function o(t) {
return function(r) {
var e = new t();
for (var n in h) e[n] = r[n];
return e;
};
}
function f(t) {
return function(r) {
return new t(r);
};
}
function u(t) {
return new Uint8Array(t).buffer;
}
e.setExtUnpackers = function(t) {
t.addExtUnpacker(14, [ n, o(Error) ]), t.addExtUnpacker(1, [ n, o(EvalError) ]), 
t.addExtUnpacker(2, [ n, o(RangeError) ]), t.addExtUnpacker(3, [ n, o(ReferenceError) ]), 
t.addExtUnpacker(4, [ n, o(SyntaxError) ]), t.addExtUnpacker(5, [ n, o(TypeError) ]), 
t.addExtUnpacker(6, [ n, o(URIError) ]), t.addExtUnpacker(10, [ n, i ]), t.addExtUnpacker(11, [ n, f(Boolean) ]), 
t.addExtUnpacker(12, [ n, f(String) ]), t.addExtUnpacker(13, [ n, f(Date) ]), t.addExtUnpacker(15, [ n, f(Number) ]), 
"undefined" != typeof Uint8Array && (t.addExtUnpacker(17, f(Int8Array)), t.addExtUnpacker(18, f(Uint8Array)), 
t.addExtUnpacker(19, [ u, f(Int16Array) ]), t.addExtUnpacker(20, [ u, f(Uint16Array) ]), 
t.addExtUnpacker(21, [ u, f(Int32Array) ]), t.addExtUnpacker(22, [ u, f(Uint32Array) ]), 
t.addExtUnpacker(23, [ u, f(Float32Array) ]), "undefined" != typeof Float64Array && t.addExtUnpacker(24, [ u, f(Float64Array) ]), 
"undefined" != typeof Uint8ClampedArray && t.addExtUnpacker(25, f(Uint8ClampedArray)), 
t.addExtUnpacker(26, u), t.addExtUnpacker(29, [ u, f(DataView) ])), s.hasBuffer && t.addExtUnpacker(27, f(c));
};
var a, s = t("./bufferish"), c = s.global, h = {
name: 1,
message: 1,
stack: 1,
columnNumber: 1,
fileName: 1,
lineNumber: 1
};
}, {
"./bufferish": 8,
"./decode": 12
} ],
20: [ function(t, r, e) {
t("./read-core"), t("./write-core"), e.createCodec = t("./codec-base").createCodec;
}, {
"./codec-base": 9,
"./read-core": 22,
"./write-core": 25
} ],
21: [ function(t, r, e) {
function n() {
if (!(this instanceof n)) return new n();
}
function i() {
if (!(this instanceof i)) return new i();
}
function o() {
return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch();
}
function f(t) {
(this.buffers || (this.buffers = [])).push(t);
}
function u(t) {
return function(r) {
for (var e in t) r[e] = t[e];
return r;
};
}
e.FlexDecoder = n, e.FlexEncoder = i;
var a = t("./bufferish"), s = "BUFFER_SHORTAGE";
n.mixin = u({
bufferish: a,
write: function(t) {
var r = this.offset ? a.prototype.slice.call(this.buffer, this.offset) : this.buffer;
this.buffer = r ? t ? this.bufferish.concat([ r, t ]) : r : t, this.offset = 0;
},
fetch: function() {
throw new Error("method not implemented: fetch()");
},
flush: function() {
for (;this.offset < this.buffer.length; ) {
var t, r = this.offset;
try {
t = this.fetch();
} catch (t) {
if (t && t.message != s) throw t;
this.offset = r;
break;
}
this.push(t);
}
},
push: f,
pull: function() {
return (this.buffers || (this.buffers = [])).shift();
},
read: o,
reserve: function(t) {
var r = this.offset, e = r + t;
if (e > this.buffer.length) throw new Error(s);
return this.offset = e, r;
},
offset: 0
}), n.mixin(n.prototype), i.mixin = u({
bufferish: a,
write: function() {
throw new Error("method not implemented: write()");
},
fetch: function() {
var t = this.start;
if (t < this.offset) {
var r = this.start = this.offset;
return a.prototype.slice.call(this.buffer, t, r);
}
},
flush: function() {
for (;this.start < this.offset; ) {
var t = this.fetch();
t && this.push(t);
}
},
push: f,
pull: function() {
var t = this.buffers || (this.buffers = []), r = t.length > 1 ? this.bufferish.concat(t) : t[0];
return t.length = 0, r;
},
read: o,
reserve: function(t) {
var r = 0 | t;
if (this.buffer) {
var e = this.buffer.length, n = 0 | this.offset, i = n + r;
if (i < e) return this.offset = i, n;
this.flush(), t = Math.max(t, Math.min(2 * e, this.maxBufferSize));
}
return t = Math.max(t, this.minBufferSize), this.buffer = this.bufferish.alloc(t), 
this.start = 0, this.offset = r, 0;
},
send: function(t) {
var r = t.length;
if (r > this.minBufferSize) this.flush(), this.push(t); else {
var e = this.reserve(r);
a.prototype.copy.call(t, this.buffer, e);
}
},
maxBufferSize: 65536,
minBufferSize: 2048,
offset: 0,
start: 0
}), i.mixin(i.prototype);
}, {
"./bufferish": 8
} ],
22: [ function(t, r, e) {
function n(t) {
var r = a.getReadToken(t);
return function(t) {
var e = u(t), n = r[e];
if (!n) throw new Error("Invalid type: " + (e ? "0x" + e.toString(16) : e));
return n(t);
};
}
function i() {
var t = this.options;
return this.decode = n(t), t && t.preset && f.setExtUnpackers(this), this;
}
var o = t("./ext-buffer").ExtBuffer, f = t("./ext-unpacker"), u = t("./read-format").readUint8, a = t("./read-token"), s = t("./codec-base");
s.install({
addExtUnpacker: function(t, r) {
(this.extUnpackers || (this.extUnpackers = []))[t] = s.filter(r);
},
getExtUnpacker: function(t) {
return (this.extUnpackers || (this.extUnpackers = []))[t] || function(r) {
return new o(r, t);
};
},
init: i
}), e.preset = i.call(s.preset);
}, {
"./codec-base": 9,
"./ext-buffer": 17,
"./ext-unpacker": 19,
"./read-format": 23,
"./read-token": 24
} ],
23: [ function(t, r, e) {
function n(t, r) {
var e, n = {}, i = new Array(r), o = new Array(r), f = t.codec.decode;
for (e = 0; e < r; e++) i[e] = f(t), o[e] = f(t);
for (e = 0; e < r; e++) n[i[e]] = o[e];
return n;
}
function i(t, r) {
var e, n = new Map(), i = new Array(r), o = new Array(r), f = t.codec.decode;
for (e = 0; e < r; e++) i[e] = f(t), o[e] = f(t);
for (e = 0; e < r; e++) n.set(i[e], o[e]);
return n;
}
function o(t, r) {
for (var e = new Array(r), n = t.codec.decode, i = 0; i < r; i++) e[i] = n(t);
return e;
}
function f(t, r) {
var e = t.reserve(r), n = e + r;
return k.toString.call(t.buffer, "utf-8", e, n);
}
function u(t, r) {
var e = t.reserve(r), n = e + r, i = k.slice.call(t.buffer, e, n);
return R.from(i);
}
function a(t, r) {
var e = t.reserve(r), n = e + r, i = k.slice.call(t.buffer, e, n);
return R.Uint8Array.from(i).buffer;
}
function s(t, r) {
var e = t.reserve(r + 1), n = t.buffer[e++], i = e + r, o = t.codec.getExtUnpacker(n);
if (!o) throw new Error("Invalid ext type: " + (n ? "0x" + n.toString(16) : n));
return o(k.slice.call(t.buffer, e, i));
}
function c(t) {
var r = t.reserve(1);
return t.buffer[r];
}
function h(t) {
var r = t.reserve(1), e = t.buffer[r];
return 128 & e ? e - 256 : e;
}
function l(t) {
var r = t.reserve(2), e = t.buffer;
return e[r++] << 8 | e[r];
}
function p(t) {
var r = t.reserve(2), e = t.buffer, n = e[r++] << 8 | e[r];
return 32768 & n ? n - 65536 : n;
}
function d(t) {
var r = t.reserve(4), e = t.buffer;
return 16777216 * e[r++] + (e[r++] << 16) + (e[r++] << 8) + e[r];
}
function y(t) {
var r = t.reserve(4), e = t.buffer;
return e[r++] << 24 | e[r++] << 16 | e[r++] << 8 | e[r];
}
function g(t, r) {
return function(e) {
var n = e.reserve(t);
return r.call(e.buffer, n, T);
};
}
function v(t) {
return new U(this, t).toNumber();
}
function b(t) {
return new P(this, t).toNumber();
}
function w(t) {
return new U(this, t);
}
function E(t) {
return new P(this, t);
}
function A(t) {
return x.read(this, t, !1, 23, 4);
}
function m(t) {
return x.read(this, t, !1, 52, 8);
}
var x = t("ieee754"), B = t("int64-buffer"), U = B.Uint64BE, P = B.Int64BE;
e.getReadFormat = function(t) {
var r = R.hasArrayBuffer && t && t.binarraybuffer, e = t && t.int64;
return {
map: _ && t && t.usemap ? i : n,
array: o,
str: f,
bin: r ? a : u,
ext: s,
uint8: c,
uint16: l,
uint32: d,
uint64: g(8, e ? w : v),
int8: h,
int16: p,
int32: y,
int64: g(8, e ? E : b),
float32: g(4, A),
float64: g(8, m)
};
}, e.readUint8 = c;
var R = t("./bufferish"), k = t("./bufferish-proto"), _ = "undefined" != typeof Map, T = !0;
}, {
"./bufferish": 8,
"./bufferish-proto": 6,
ieee754: 32,
"int64-buffer": 33
} ],
24: [ function(t, r, e) {
function n(t) {
var r, e = new Array(256);
for (r = 0; r <= 127; r++) e[r] = o(r);
for (r = 128; r <= 143; r++) e[r] = u(r - 128, t.map);
for (r = 144; r <= 159; r++) e[r] = u(r - 144, t.array);
for (r = 160; r <= 191; r++) e[r] = u(r - 160, t.str);
for (e[192] = o(null), e[193] = null, e[194] = o(!1), e[195] = o(!0), e[196] = f(t.uint8, t.bin), 
e[197] = f(t.uint16, t.bin), e[198] = f(t.uint32, t.bin), e[199] = f(t.uint8, t.ext), 
e[200] = f(t.uint16, t.ext), e[201] = f(t.uint32, t.ext), e[202] = t.float32, e[203] = t.float64, 
e[204] = t.uint8, e[205] = t.uint16, e[206] = t.uint32, e[207] = t.uint64, e[208] = t.int8, 
e[209] = t.int16, e[210] = t.int32, e[211] = t.int64, e[212] = u(1, t.ext), e[213] = u(2, t.ext), 
e[214] = u(4, t.ext), e[215] = u(8, t.ext), e[216] = u(16, t.ext), e[217] = f(t.uint8, t.str), 
e[218] = f(t.uint16, t.str), e[219] = f(t.uint32, t.str), e[220] = f(t.uint16, t.array), 
e[221] = f(t.uint32, t.array), e[222] = f(t.uint16, t.map), e[223] = f(t.uint32, t.map), 
r = 224; r <= 255; r++) e[r] = o(r - 256);
return e;
}
function i(t) {
var r, e = n(t).slice();
for (e[217] = e[196], e[218] = e[197], e[219] = e[198], r = 160; r <= 191; r++) e[r] = u(r - 160, t.bin);
return e;
}
function o(t) {
return function() {
return t;
};
}
function f(t, r) {
return function(e) {
var n = t(e);
return r(e, n);
};
}
function u(t, r) {
return function(e) {
return r(e, t);
};
}
var a = t("./read-format");
e.getReadToken = function(t) {
var r = a.getReadFormat(t);
return t && t.useraw ? i(r) : n(r);
};
}, {
"./read-format": 23
} ],
25: [ function(t, r, e) {
function n(t) {
var r = u.getWriteType(t);
return function(t, e) {
var n = r[typeof e];
if (!n) throw new Error('Unsupported type "' + typeof e + '": ' + e);
n(t, e);
};
}
function i() {
var t = this.options;
return this.encode = n(t), t && t.preset && f.setExtPackers(this), this;
}
var o = t("./ext-buffer").ExtBuffer, f = t("./ext-packer"), u = t("./write-type"), a = t("./codec-base");
a.install({
addExtPacker: function(t, r, e) {
function n(r) {
return e && (r = e(r)), new o(r, t);
}
e = a.filter(e);
var i = r.name;
i && "Object" !== i ? (this.extPackers || (this.extPackers = {}))[i] = n : (this.extEncoderList || (this.extEncoderList = [])).unshift([ r, n ]);
},
getExtPacker: function(t) {
var r = this.extPackers || (this.extPackers = {}), e = t.constructor, n = e && e.name && r[e.name];
if (n) return n;
for (var i = this.extEncoderList || (this.extEncoderList = []), o = i.length, f = 0; f < o; f++) {
var u = i[f];
if (e === u[0]) return u[1];
}
},
init: i
}), e.preset = i.call(a.preset);
}, {
"./codec-base": 9,
"./ext-buffer": 17,
"./ext-packer": 18,
"./write-type": 27
} ],
26: [ function(t, r, e) {
function n() {
var t = i();
return t[202] = s(202, 4, l), t[203] = s(203, 8, p), t;
}
function i() {
var t = b.slice();
return t[196] = f(196), t[197] = u(197), t[198] = a(198), t[199] = f(199), t[200] = u(200), 
t[201] = a(201), t[202] = s(202, 4, m.writeFloatBE || l, !0), t[203] = s(203, 8, m.writeDoubleBE || p, !0), 
t[204] = f(204), t[205] = u(205), t[206] = a(206), t[207] = s(207, 8, c), t[208] = f(208), 
t[209] = u(209), t[210] = a(210), t[211] = s(211, 8, h), t[217] = f(217), t[218] = u(218), 
t[219] = a(219), t[220] = u(220), t[221] = a(221), t[222] = u(222), t[223] = a(223), 
t;
}
function o() {
var t = b.slice();
return t[196] = s(196, 1, E.prototype.writeUInt8), t[197] = s(197, 2, E.prototype.writeUInt16BE), 
t[198] = s(198, 4, E.prototype.writeUInt32BE), t[199] = s(199, 1, E.prototype.writeUInt8), 
t[200] = s(200, 2, E.prototype.writeUInt16BE), t[201] = s(201, 4, E.prototype.writeUInt32BE), 
t[202] = s(202, 4, E.prototype.writeFloatBE), t[203] = s(203, 8, E.prototype.writeDoubleBE), 
t[204] = s(204, 1, E.prototype.writeUInt8), t[205] = s(205, 2, E.prototype.writeUInt16BE), 
t[206] = s(206, 4, E.prototype.writeUInt32BE), t[207] = s(207, 8, c), t[208] = s(208, 1, E.prototype.writeInt8), 
t[209] = s(209, 2, E.prototype.writeInt16BE), t[210] = s(210, 4, E.prototype.writeInt32BE), 
t[211] = s(211, 8, h), t[217] = s(217, 1, E.prototype.writeUInt8), t[218] = s(218, 2, E.prototype.writeUInt16BE), 
t[219] = s(219, 4, E.prototype.writeUInt32BE), t[220] = s(220, 2, E.prototype.writeUInt16BE), 
t[221] = s(221, 4, E.prototype.writeUInt32BE), t[222] = s(222, 2, E.prototype.writeUInt16BE), 
t[223] = s(223, 4, E.prototype.writeUInt32BE), t;
}
function f(t) {
return function(r, e) {
var n = r.reserve(2), i = r.buffer;
i[n++] = t, i[n] = e;
};
}
function u(t) {
return function(r, e) {
var n = r.reserve(3), i = r.buffer;
i[n++] = t, i[n++] = e >>> 8, i[n] = e;
};
}
function a(t) {
return function(r, e) {
var n = r.reserve(5), i = r.buffer;
i[n++] = t, i[n++] = e >>> 24, i[n++] = e >>> 16, i[n++] = e >>> 8, i[n] = e;
};
}
function s(t, r, e, n) {
return function(i, o) {
var f = i.reserve(r + 1);
i.buffer[f++] = t, e.call(i.buffer, o, f, n);
};
}
function c(t, r) {
new g(this, r, t);
}
function h(t, r) {
new v(this, r, t);
}
function l(t, r) {
d.write(this, t, r, !1, 23, 4);
}
function p(t, r) {
d.write(this, t, r, !1, 52, 8);
}
var d = t("ieee754"), y = t("int64-buffer"), g = y.Uint64BE, v = y.Int64BE, b = t("./write-uint8").uint8, w = t("./bufferish"), E = w.global, A = w.hasBuffer && "TYPED_ARRAY_SUPPORT" in E && !E.TYPED_ARRAY_SUPPORT, m = w.hasBuffer && E.prototype || {};
e.getWriteToken = function(t) {
return t && t.uint8array ? n() : A || w.hasBuffer && t && t.safe ? o() : i();
};
}, {
"./bufferish": 8,
"./write-uint8": 28,
ieee754: 32,
"int64-buffer": 33
} ],
27: [ function(t, r, e) {
var n = t("isarray"), i = t("int64-buffer"), o = i.Uint64BE, f = i.Int64BE, u = t("./bufferish"), a = t("./bufferish-proto"), s = t("./write-token"), c = t("./write-uint8").uint8, h = t("./ext-buffer").ExtBuffer, l = "undefined" != typeof Uint8Array, p = "undefined" != typeof Map, d = [];
d[1] = 212, d[2] = 213, d[4] = 214, d[8] = 215, d[16] = 216, e.getWriteType = function(t) {
function r(t, r) {
A[207](t, r.toArray());
}
function e(t, r) {
A[211](t, r.toArray());
}
function i(t, i) {
if (null === i) return y(t, i);
if (B(i)) return U(t, i);
if (n(i)) return g(t, i);
if (o.isUint64BE(i)) return r(t, i);
if (f.isInt64BE(i)) return e(t, i);
var u = t.codec.getExtPacker(i);
return u && (i = u(i)), i instanceof h ? b(t, i) : void P(t, i);
}
function y(t, r) {
A[192](t, r);
}
function g(t, r) {
var e = r.length;
A[e < 16 ? 144 + e : e <= 65535 ? 220 : 221](t, e);
for (var n = t.codec.encode, i = 0; i < e; i++) n(t, r[i]);
}
function v(t, r) {
var e = r.length;
A[e < 255 ? 196 : e <= 65535 ? 197 : 198](t, e), t.send(r);
}
function b(t, r) {
var e = r.buffer, n = e.length, i = d[n] || (n < 255 ? 199 : n <= 65535 ? 200 : 201);
A[i](t, n), c[r.type](t), t.send(e);
}
function w(t, r) {
var e = Object.keys(r), n = e.length;
A[n < 16 ? 128 + n : n <= 65535 ? 222 : 223](t, n);
var i = t.codec.encode;
e.forEach(function(e) {
i(t, e), i(t, r[e]);
});
}
function E(t, r) {
var e = r.length;
A[e < 32 ? 160 + e : e <= 65535 ? 218 : 219](t, e), t.send(r);
}
var A = s.getWriteToken(t), m = t && t.useraw, x = l && t && t.binarraybuffer, B = x ? u.isArrayBuffer : u.isBuffer, U = x ? function(t, r) {
v(t, new Uint8Array(r));
} : v, P = p && t && t.usemap ? function(t, r) {
if (!(r instanceof Map)) return w(t, r);
var e = r.size;
A[e < 16 ? 128 + e : e <= 65535 ? 222 : 223](t, e);
var n = t.codec.encode;
r.forEach(function(r, e) {
n(t, e), n(t, r);
});
} : w;
return {
boolean: function(t, r) {
A[r ? 195 : 194](t, r);
},
function: y,
number: function(t, r) {
var e = 0 | r;
return r !== e ? void A[203](t, r) : void A[-32 <= e && e <= 127 ? 255 & e : 0 <= e ? e <= 255 ? 204 : e <= 65535 ? 205 : 206 : -128 <= e ? 208 : -32768 <= e ? 209 : 210](t, e);
},
object: m ? function(t, r) {
return B(r) ? E(t, r) : void i(t, r);
} : i,
string: function(t) {
return function(r, e) {
var n = e.length, i = 5 + 3 * n;
r.offset = r.reserve(i);
var o = r.buffer, f = t(n), u = r.offset + f;
n = a.write.call(o, e, u);
var s = t(n);
if (f !== s) {
var c = u + s - f, h = u + n;
a.copy.call(o, o, c, u, h);
}
A[1 === s ? 160 + n : s <= 3 ? 215 + s : 219](r, n), r.offset += n;
};
}(m ? function(t) {
return t < 32 ? 1 : t <= 65535 ? 3 : 5;
} : function(t) {
return t < 32 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5;
}),
symbol: y,
undefined: y
};
};
}, {
"./bufferish": 8,
"./bufferish-proto": 6,
"./ext-buffer": 17,
"./write-token": 26,
"./write-uint8": 28,
"int64-buffer": 33,
isarray: 34
} ],
28: [ function(t, r, e) {
function n(t) {
return function(r) {
var e = r.reserve(1);
r.buffer[e] = t;
};
}
for (var i = e.uint8 = new Array(256), o = 0; o <= 255; o++) i[o] = n(o);
}, {} ],
29: [ function(t, r, e) {
(function(r) {
"use strict";
function n() {
return o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function i(t, r) {
if (n() < r) throw new RangeError("Invalid typed array length");
return o.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(r)).__proto__ = o.prototype : (null === t && (t = new o(r)), 
t.length = r), t;
}
function o(t, r, e) {
if (!(o.TYPED_ARRAY_SUPPORT || this instanceof o)) return new o(t, r, e);
if ("number" == typeof t) {
if ("string" == typeof r) throw new Error("If encoding is specified then the first argument must be a string");
return s(this, t);
}
return f(this, t, r, e);
}
function f(t, r, e, n) {
if ("number" == typeof r) throw new TypeError('"value" argument must not be a number');
return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer ? l(t, r, e, n) : "string" == typeof r ? c(t, r, e) : p(t, r);
}
function u(t) {
if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
if (t < 0) throw new RangeError('"size" argument must not be negative');
}
function a(t, r, e, n) {
return u(r), r <= 0 ? i(t, r) : void 0 !== e ? "string" == typeof n ? i(t, r).fill(e, n) : i(t, r).fill(e) : i(t, r);
}
function s(t, r) {
if (u(r), t = i(t, r < 0 ? 0 : 0 | d(r)), !o.TYPED_ARRAY_SUPPORT) for (var e = 0; e < r; ++e) t[e] = 0;
return t;
}
function c(t, r, e) {
if ("string" == typeof e && "" !== e || (e = "utf8"), !o.isEncoding(e)) throw new TypeError('"encoding" must be a valid string encoding');
var n = 0 | y(r, e), f = (t = i(t, n)).write(r, e);
return f !== n && (t = t.slice(0, f)), t;
}
function h(t, r) {
var e = r.length < 0 ? 0 : 0 | d(r.length);
t = i(t, e);
for (var n = 0; n < e; n += 1) t[n] = 255 & r[n];
return t;
}
function l(t, r, e, n) {
if (r.byteLength, e < 0 || r.byteLength < e) throw new RangeError("'offset' is out of bounds");
if (r.byteLength < e + (n || 0)) throw new RangeError("'length' is out of bounds");
return r = void 0 === e && void 0 === n ? new Uint8Array(r) : void 0 === n ? new Uint8Array(r, e) : new Uint8Array(r, e, n), 
o.TYPED_ARRAY_SUPPORT ? (t = r).__proto__ = o.prototype : t = h(t, r), t;
}
function p(t, r) {
if (o.isBuffer(r)) {
var e = 0 | d(r.length);
return 0 === (t = i(t, e)).length ? t : (r.copy(t, 0, 0, e), t);
}
if (r) {
if ("undefined" != typeof ArrayBuffer && r.buffer instanceof ArrayBuffer || "length" in r) return "number" != typeof r.length || G(r.length) ? i(t, 0) : h(t, r);
if ("Buffer" === r.type && K(r.data)) return h(t, r.data);
}
throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
}
function d(t) {
if (t >= n()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n().toString(16) + " bytes");
return 0 | t;
}
function y(t, r) {
if (o.isBuffer(t)) return t.length;
if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
"string" != typeof t && (t = "" + t);
var e = t.length;
if (0 === e) return 0;
for (var n = !1; ;) switch (r) {
case "ascii":
case "latin1":
case "binary":
return e;

case "utf8":
case "utf-8":
case void 0:
return V(t).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * e;

case "hex":
return e >>> 1;

case "base64":
return J(t).length;

default:
if (n) return V(t).length;
r = ("" + r).toLowerCase(), n = !0;
}
}
function g(t, r, e) {
var n = !1;
if ((void 0 === r || r < 0) && (r = 0), r > this.length) return "";
if ((void 0 === e || e > this.length) && (e = this.length), e <= 0) return "";
if ((e >>>= 0) <= (r >>>= 0)) return "";
for (t || (t = "utf8"); ;) switch (t) {
case "hex":
return S(this, r, e);

case "utf8":
case "utf-8":
return R(this, r, e);

case "ascii":
return _(this, r, e);

case "latin1":
case "binary":
return T(this, r, e);

case "base64":
return P(this, r, e);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return I(this, r, e);

default:
if (n) throw new TypeError("Unknown encoding: " + t);
t = (t + "").toLowerCase(), n = !0;
}
}
function v(t, r, e) {
var n = t[r];
t[r] = t[e], t[e] = n;
}
function b(t, r, e, n, i) {
if (0 === t.length) return -1;
if ("string" == typeof e ? (n = e, e = 0) : e > 2147483647 ? e = 2147483647 : e < -2147483648 && (e = -2147483648), 
e = +e, isNaN(e) && (e = i ? 0 : t.length - 1), e < 0 && (e = t.length + e), e >= t.length) {
if (i) return -1;
e = t.length - 1;
} else if (e < 0) {
if (!i) return -1;
e = 0;
}
if ("string" == typeof r && (r = o.from(r, n)), o.isBuffer(r)) return 0 === r.length ? -1 : w(t, r, e, n, i);
if ("number" == typeof r) return r &= 255, o.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, r, e) : Uint8Array.prototype.lastIndexOf.call(t, r, e) : w(t, [ r ], e, n, i);
throw new TypeError("val must be string, number or Buffer");
}
function w(t, r, e, n, i) {
function o(t, r) {
return 1 === u ? t[r] : t.readUInt16BE(r * u);
}
var f, u = 1, a = t.length, s = r.length;
if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
if (t.length < 2 || r.length < 2) return -1;
u = 2, a /= 2, s /= 2, e /= 2;
}
if (i) {
var c = -1;
for (f = e; f < a; f++) if (o(t, f) === o(r, -1 === c ? 0 : f - c)) {
if (-1 === c && (c = f), f - c + 1 === s) return c * u;
} else -1 !== c && (f -= f - c), c = -1;
} else for (e + s > a && (e = a - s), f = e; f >= 0; f--) {
for (var h = !0, l = 0; l < s; l++) if (o(t, f + l) !== o(r, l)) {
h = !1;
break;
}
if (h) return f;
}
return -1;
}
function E(t, r, e, n) {
e = Number(e) || 0;
var i = t.length - e;
n ? (n = Number(n)) > i && (n = i) : n = i;
var o = r.length;
if (o % 2 != 0) throw new TypeError("Invalid hex string");
n > o / 2 && (n = o / 2);
for (var f = 0; f < n; ++f) {
var u = parseInt(r.substr(2 * f, 2), 16);
if (isNaN(u)) return f;
t[e + f] = u;
}
return f;
}
function A(t, r, e, n) {
return X(V(r, t.length - e), t, e, n);
}
function m(t, r, e, n) {
return X(q(r), t, e, n);
}
function x(t, r, e, n) {
return m(t, r, e, n);
}
function B(t, r, e, n) {
return X(J(r), t, e, n);
}
function U(t, r, e, n) {
return X(W(r, t.length - e), t, e, n);
}
function P(t, r, e) {
return 0 === r && e === t.length ? H.fromByteArray(t) : H.fromByteArray(t.slice(r, e));
}
function R(t, r, e) {
e = Math.min(t.length, e);
for (var n = [], i = r; i < e; ) {
var o = t[i], f = null, u = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
if (i + u <= e) {
var a, s, c, h;
switch (u) {
case 1:
o < 128 && (f = o);
break;

case 2:
128 == (192 & (a = t[i + 1])) && (h = (31 & o) << 6 | 63 & a) > 127 && (f = h);
break;

case 3:
a = t[i + 1], s = t[i + 2], 128 == (192 & a) && 128 == (192 & s) && (h = (15 & o) << 12 | (63 & a) << 6 | 63 & s) > 2047 && (h < 55296 || h > 57343) && (f = h);
break;

case 4:
a = t[i + 1], s = t[i + 2], c = t[i + 3], 128 == (192 & a) && 128 == (192 & s) && 128 == (192 & c) && (h = (15 & o) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & c) > 65535 && h < 1114112 && (f = h);
}
}
null === f ? (f = 65533, u = 1) : f > 65535 && (f -= 65536, n.push(f >>> 10 & 1023 | 55296), 
f = 56320 | 1023 & f), n.push(f), i += u;
}
return k(n);
}
function k(t) {
var r = t.length;
if (r <= Q) return String.fromCharCode.apply(String, t);
for (var e = "", n = 0; n < r; ) e += String.fromCharCode.apply(String, t.slice(n, n += Q));
return e;
}
function _(t, r, e) {
var n = "";
e = Math.min(t.length, e);
for (var i = r; i < e; ++i) n += String.fromCharCode(127 & t[i]);
return n;
}
function T(t, r, e) {
var n = "";
e = Math.min(t.length, e);
for (var i = r; i < e; ++i) n += String.fromCharCode(t[i]);
return n;
}
function S(t, r, e) {
var n = t.length;
(!r || r < 0) && (r = 0), (!e || e < 0 || e > n) && (e = n);
for (var i = "", o = r; o < e; ++o) i += z(t[o]);
return i;
}
function I(t, r, e) {
for (var n = t.slice(r, e), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
return i;
}
function Y(t, r, e) {
if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
if (t + r > e) throw new RangeError("Trying to access beyond buffer length");
}
function C(t, r, e, n, i, f) {
if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (r > i || r < f) throw new RangeError('"value" argument is out of bounds');
if (e + n > t.length) throw new RangeError("Index out of range");
}
function D(t, r, e, n) {
r < 0 && (r = 65535 + r + 1);
for (var i = 0, o = Math.min(t.length - e, 2); i < o; ++i) t[e + i] = (r & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
}
function O(t, r, e, n) {
r < 0 && (r = 4294967295 + r + 1);
for (var i = 0, o = Math.min(t.length - e, 4); i < o; ++i) t[e + i] = r >>> 8 * (n ? i : 3 - i) & 255;
}
function L(t, r, e, n) {
if (e + n > t.length) throw new RangeError("Index out of range");
if (e < 0) throw new RangeError("Index out of range");
}
function M(t, r, e, n, i) {
return i || L(t, 0, e, 4), Z.write(t, r, e, n, 23, 4), e + 4;
}
function N(t, r, e, n, i) {
return i || L(t, 0, e, 8), Z.write(t, r, e, n, 52, 8), e + 8;
}
function F(t) {
if ((t = j(t).replace($, "")).length < 2) return "";
for (;t.length % 4 != 0; ) t += "=";
return t;
}
function j(t) {
return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
}
function z(t) {
return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function V(t, r) {
r = r || 1 / 0;
for (var e, n = t.length, i = null, o = [], f = 0; f < n; ++f) {
if ((e = t.charCodeAt(f)) > 55295 && e < 57344) {
if (!i) {
if (e > 56319) {
(r -= 3) > -1 && o.push(239, 191, 189);
continue;
}
if (f + 1 === n) {
(r -= 3) > -1 && o.push(239, 191, 189);
continue;
}
i = e;
continue;
}
if (e < 56320) {
(r -= 3) > -1 && o.push(239, 191, 189), i = e;
continue;
}
e = 65536 + (i - 55296 << 10 | e - 56320);
} else i && (r -= 3) > -1 && o.push(239, 191, 189);
if (i = null, e < 128) {
if ((r -= 1) < 0) break;
o.push(e);
} else if (e < 2048) {
if ((r -= 2) < 0) break;
o.push(e >> 6 | 192, 63 & e | 128);
} else if (e < 65536) {
if ((r -= 3) < 0) break;
o.push(e >> 12 | 224, e >> 6 & 63 | 128, 63 & e | 128);
} else {
if (!(e < 1114112)) throw new Error("Invalid code point");
if ((r -= 4) < 0) break;
o.push(e >> 18 | 240, e >> 12 & 63 | 128, e >> 6 & 63 | 128, 63 & e | 128);
}
}
return o;
}
function q(t) {
for (var r = [], e = 0; e < t.length; ++e) r.push(255 & t.charCodeAt(e));
return r;
}
function W(t, r) {
for (var e, n, i, o = [], f = 0; f < t.length && !((r -= 2) < 0); ++f) n = (e = t.charCodeAt(f)) >> 8, 
i = e % 256, o.push(i), o.push(n);
return o;
}
function J(t) {
return H.toByteArray(F(t));
}
function X(t, r, e, n) {
for (var i = 0; i < n && !(i + e >= r.length || i >= t.length); ++i) r[i + e] = t[i];
return i;
}
function G(t) {
return t != t;
}
var H = t("base64-js"), Z = t("ieee754"), K = t("isarray");
e.Buffer = o, e.SlowBuffer = function(t) {
return +t != t && (t = 0), o.alloc(+t);
}, e.INSPECT_MAX_BYTES = 50, o.TYPED_ARRAY_SUPPORT = void 0 !== r.TYPED_ARRAY_SUPPORT ? r.TYPED_ARRAY_SUPPORT : function() {
try {
var t = new Uint8Array(1);
return t.__proto__ = {
__proto__: Uint8Array.prototype,
foo: function() {
return 42;
}
}, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
} catch (t) {
return !1;
}
}(), e.kMaxLength = n(), o.poolSize = 8192, o._augment = function(t) {
return t.__proto__ = o.prototype, t;
}, o.from = function(t, r, e) {
return f(null, t, r, e);
}, o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, 
"undefined" != typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
value: null,
configurable: !0
})), o.alloc = function(t, r, e) {
return a(null, t, r, e);
}, o.allocUnsafe = function(t) {
return s(null, t);
}, o.allocUnsafeSlow = function(t) {
return s(null, t);
}, o.isBuffer = function(t) {
return !(null == t || !t._isBuffer);
}, o.compare = function(t, r) {
if (!o.isBuffer(t) || !o.isBuffer(r)) throw new TypeError("Arguments must be Buffers");
if (t === r) return 0;
for (var e = t.length, n = r.length, i = 0, f = Math.min(e, n); i < f; ++i) if (t[i] !== r[i]) {
e = t[i], n = r[i];
break;
}
return e < n ? -1 : n < e ? 1 : 0;
}, o.isEncoding = function(t) {
switch (String(t).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
}, o.concat = function(t, r) {
if (!K(t)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === t.length) return o.alloc(0);
var e;
if (void 0 === r) for (r = 0, e = 0; e < t.length; ++e) r += t[e].length;
var n = o.allocUnsafe(r), i = 0;
for (e = 0; e < t.length; ++e) {
var f = t[e];
if (!o.isBuffer(f)) throw new TypeError('"list" argument must be an Array of Buffers');
f.copy(n, i), i += f.length;
}
return n;
}, o.byteLength = y, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
var t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var r = 0; r < t; r += 2) v(this, r, r + 1);
return this;
}, o.prototype.swap32 = function() {
var t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var r = 0; r < t; r += 4) v(this, r, r + 3), v(this, r + 1, r + 2);
return this;
}, o.prototype.swap64 = function() {
var t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var r = 0; r < t; r += 8) v(this, r, r + 7), v(this, r + 1, r + 6), v(this, r + 2, r + 5), 
v(this, r + 3, r + 4);
return this;
}, o.prototype.toString = function() {
var t = 0 | this.length;
return 0 === t ? "" : 0 === arguments.length ? R(this, 0, t) : g.apply(this, arguments);
}, o.prototype.equals = function(t) {
if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
return this === t || 0 === o.compare(this, t);
}, o.prototype.inspect = function() {
var t = "", r = e.INSPECT_MAX_BYTES;
return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), 
this.length > r && (t += " ... ")), "<Buffer " + t + ">";
}, o.prototype.compare = function(t, r, e, n, i) {
if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
if (void 0 === r && (r = 0), void 0 === e && (e = t ? t.length : 0), void 0 === n && (n = 0), 
void 0 === i && (i = this.length), r < 0 || e > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
if (n >= i && r >= e) return 0;
if (n >= i) return -1;
if (r >= e) return 1;
if (this === t) return 0;
for (var f = (i >>>= 0) - (n >>>= 0), u = (e >>>= 0) - (r >>>= 0), a = Math.min(f, u), s = this.slice(n, i), c = t.slice(r, e), h = 0; h < a; ++h) if (s[h] !== c[h]) {
f = s[h], u = c[h];
break;
}
return f < u ? -1 : u < f ? 1 : 0;
}, o.prototype.includes = function(t, r, e) {
return -1 !== this.indexOf(t, r, e);
}, o.prototype.indexOf = function(t, r, e) {
return b(this, t, r, e, !0);
}, o.prototype.lastIndexOf = function(t, r, e) {
return b(this, t, r, e, !1);
}, o.prototype.write = function(t, r, e, n) {
if (void 0 === r) n = "utf8", e = this.length, r = 0; else if (void 0 === e && "string" == typeof r) n = r, 
e = this.length, r = 0; else {
if (!isFinite(r)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
r |= 0, isFinite(e) ? (e |= 0, void 0 === n && (n = "utf8")) : (n = e, e = void 0);
}
var i = this.length - r;
if ((void 0 === e || e > i) && (e = i), t.length > 0 && (e < 0 || r < 0) || r > this.length) throw new RangeError("Attempt to write outside buffer bounds");
n || (n = "utf8");
for (var o = !1; ;) switch (n) {
case "hex":
return E(this, t, r, e);

case "utf8":
case "utf-8":
return A(this, t, r, e);

case "ascii":
return m(this, t, r, e);

case "latin1":
case "binary":
return x(this, t, r, e);

case "base64":
return B(this, t, r, e);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return U(this, t, r, e);

default:
if (o) throw new TypeError("Unknown encoding: " + n);
n = ("" + n).toLowerCase(), o = !0;
}
}, o.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
var Q = 4096;
o.prototype.slice = function(t, r) {
var e, n = this.length;
(t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), (r = void 0 === r ? n : ~~r) < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n), 
r < t && (r = t);
if (o.TYPED_ARRAY_SUPPORT) (e = this.subarray(t, r)).__proto__ = o.prototype; else {
var i = r - t;
e = new o(i, void 0);
for (var f = 0; f < i; ++f) e[f] = this[f + t];
}
return e;
}, o.prototype.readUIntLE = function(t, r, e) {
t |= 0, r |= 0, e || Y(t, r, this.length);
for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); ) n += this[t + o] * i;
return n;
}, o.prototype.readUIntBE = function(t, r, e) {
t |= 0, r |= 0, e || Y(t, r, this.length);
for (var n = this[t + --r], i = 1; r > 0 && (i *= 256); ) n += this[t + --r] * i;
return n;
}, o.prototype.readUInt8 = function(t, r) {
return r || Y(t, 1, this.length), this[t];
}, o.prototype.readUInt16LE = function(t, r) {
return r || Y(t, 2, this.length), this[t] | this[t + 1] << 8;
}, o.prototype.readUInt16BE = function(t, r) {
return r || Y(t, 2, this.length), this[t] << 8 | this[t + 1];
}, o.prototype.readUInt32LE = function(t, r) {
return r || Y(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, o.prototype.readUInt32BE = function(t, r) {
return r || Y(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, o.prototype.readIntLE = function(t, r, e) {
t |= 0, r |= 0, e || Y(t, r, this.length);
for (var n = this[t], i = 1, o = 0; ++o < r && (i *= 256); ) n += this[t + o] * i;
return n >= (i *= 128) && (n -= Math.pow(2, 8 * r)), n;
}, o.prototype.readIntBE = function(t, r, e) {
t |= 0, r |= 0, e || Y(t, r, this.length);
for (var n = r, i = 1, o = this[t + --n]; n > 0 && (i *= 256); ) o += this[t + --n] * i;
return o >= (i *= 128) && (o -= Math.pow(2, 8 * r)), o;
}, o.prototype.readInt8 = function(t, r) {
return r || Y(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, o.prototype.readInt16LE = function(t, r) {
r || Y(t, 2, this.length);
var e = this[t] | this[t + 1] << 8;
return 32768 & e ? 4294901760 | e : e;
}, o.prototype.readInt16BE = function(t, r) {
r || Y(t, 2, this.length);
var e = this[t + 1] | this[t] << 8;
return 32768 & e ? 4294901760 | e : e;
}, o.prototype.readInt32LE = function(t, r) {
return r || Y(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, o.prototype.readInt32BE = function(t, r) {
return r || Y(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, o.prototype.readFloatLE = function(t, r) {
return r || Y(t, 4, this.length), Z.read(this, t, !0, 23, 4);
}, o.prototype.readFloatBE = function(t, r) {
return r || Y(t, 4, this.length), Z.read(this, t, !1, 23, 4);
}, o.prototype.readDoubleLE = function(t, r) {
return r || Y(t, 8, this.length), Z.read(this, t, !0, 52, 8);
}, o.prototype.readDoubleBE = function(t, r) {
return r || Y(t, 8, this.length), Z.read(this, t, !1, 52, 8);
}, o.prototype.writeUIntLE = function(t, r, e, n) {
(t = +t, r |= 0, e |= 0, n) || C(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
var i = 1, o = 0;
for (this[r] = 255 & t; ++o < e && (i *= 256); ) this[r + o] = t / i & 255;
return r + e;
}, o.prototype.writeUIntBE = function(t, r, e, n) {
(t = +t, r |= 0, e |= 0, n) || C(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
var i = e - 1, o = 1;
for (this[r + i] = 255 & t; --i >= 0 && (o *= 256); ) this[r + i] = t / o & 255;
return r + e;
}, o.prototype.writeUInt8 = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 1, 255, 0), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
this[r] = 255 & t, r + 1;
}, o.prototype.writeUInt16LE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, 
this[r + 1] = t >>> 8) : D(this, t, r, !0), r + 2;
}, o.prototype.writeUInt16BE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 2, 65535, 0), o.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, 
this[r + 1] = 255 & t) : D(this, t, r, !1), r + 2;
}, o.prototype.writeUInt32LE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[r + 3] = t >>> 24, 
this[r + 2] = t >>> 16, this[r + 1] = t >>> 8, this[r] = 255 & t) : O(this, t, r, !0), 
r + 4;
}, o.prototype.writeUInt32BE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 4, 4294967295, 0), o.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, 
this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, this[r + 3] = 255 & t) : O(this, t, r, !1), 
r + 4;
}, o.prototype.writeIntLE = function(t, r, e, n) {
if (t = +t, r |= 0, !n) {
var i = Math.pow(2, 8 * e - 1);
C(this, t, r, e, i - 1, -i);
}
var o = 0, f = 1, u = 0;
for (this[r] = 255 & t; ++o < e && (f *= 256); ) t < 0 && 0 === u && 0 !== this[r + o - 1] && (u = 1), 
this[r + o] = (t / f >> 0) - u & 255;
return r + e;
}, o.prototype.writeIntBE = function(t, r, e, n) {
if (t = +t, r |= 0, !n) {
var i = Math.pow(2, 8 * e - 1);
C(this, t, r, e, i - 1, -i);
}
var o = e - 1, f = 1, u = 0;
for (this[r + o] = 255 & t; --o >= 0 && (f *= 256); ) t < 0 && 0 === u && 0 !== this[r + o + 1] && (u = 1), 
this[r + o] = (t / f >> 0) - u & 255;
return r + e;
}, o.prototype.writeInt8 = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 1, 127, -128), o.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 
t < 0 && (t = 255 + t + 1), this[r] = 255 & t, r + 1;
}, o.prototype.writeInt16LE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, 
this[r + 1] = t >>> 8) : D(this, t, r, !0), r + 2;
}, o.prototype.writeInt16BE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 2, 32767, -32768), o.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 8, 
this[r + 1] = 255 & t) : D(this, t, r, !1), r + 2;
}, o.prototype.writeInt32LE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 4, 2147483647, -2147483648), o.TYPED_ARRAY_SUPPORT ? (this[r] = 255 & t, 
this[r + 1] = t >>> 8, this[r + 2] = t >>> 16, this[r + 3] = t >>> 24) : O(this, t, r, !0), 
r + 4;
}, o.prototype.writeInt32BE = function(t, r, e) {
return t = +t, r |= 0, e || C(this, t, r, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
o.TYPED_ARRAY_SUPPORT ? (this[r] = t >>> 24, this[r + 1] = t >>> 16, this[r + 2] = t >>> 8, 
this[r + 3] = 255 & t) : O(this, t, r, !1), r + 4;
}, o.prototype.writeFloatLE = function(t, r, e) {
return M(this, t, r, !0, e);
}, o.prototype.writeFloatBE = function(t, r, e) {
return M(this, t, r, !1, e);
}, o.prototype.writeDoubleLE = function(t, r, e) {
return N(this, t, r, !0, e);
}, o.prototype.writeDoubleBE = function(t, r, e) {
return N(this, t, r, !1, e);
}, o.prototype.copy = function(t, r, e, n) {
if (e || (e = 0), n || 0 === n || (n = this.length), r >= t.length && (r = t.length), 
r || (r = 0), n > 0 && n < e && (n = e), n === e) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (r < 0) throw new RangeError("targetStart out of bounds");
if (e < 0 || e >= this.length) throw new RangeError("sourceStart out of bounds");
if (n < 0) throw new RangeError("sourceEnd out of bounds");
n > this.length && (n = this.length), t.length - r < n - e && (n = t.length - r + e);
var i, f = n - e;
if (this === t && e < r && r < n) for (i = f - 1; i >= 0; --i) t[i + r] = this[i + e]; else if (f < 1e3 || !o.TYPED_ARRAY_SUPPORT) for (i = 0; i < f; ++i) t[i + r] = this[i + e]; else Uint8Array.prototype.set.call(t, this.subarray(e, e + f), r);
return f;
}, o.prototype.fill = function(t, r, e, n) {
if ("string" == typeof t) {
if ("string" == typeof r ? (n = r, r = 0, e = this.length) : "string" == typeof e && (n = e, 
e = this.length), 1 === t.length) {
var i = t.charCodeAt(0);
i < 256 && (t = i);
}
if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
} else "number" == typeof t && (t &= 255);
if (r < 0 || this.length < r || this.length < e) throw new RangeError("Out of range index");
if (e <= r) return this;
r >>>= 0, e = void 0 === e ? this.length : e >>> 0, t || (t = 0);
var f;
if ("number" == typeof t) for (f = r; f < e; ++f) this[f] = t; else {
var u = o.isBuffer(t) ? t : V(new o(t, n).toString()), a = u.length;
for (f = 0; f < e - r; ++f) this[f + r] = u[f % a];
}
return this;
};
var $ = /[^+\/0-9A-Za-z-_]/g;
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {
"base64-js": 30,
ieee754: 32,
isarray: 34
} ],
30: [ function(t, r, e) {
"use strict";
function n(t) {
var r = t.length;
if (r % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
return "=" === t[r - 2] ? 2 : "=" === t[r - 1] ? 1 : 0;
}
function i(t) {
return f[t >> 18 & 63] + f[t >> 12 & 63] + f[t >> 6 & 63] + f[63 & t];
}
function o(t, r, e) {
for (var n, o = [], f = r; f < e; f += 3) n = (t[f] << 16) + (t[f + 1] << 8) + t[f + 2], 
o.push(i(n));
return o.join("");
}
e.byteLength = function(t) {
return 3 * t.length / 4 - n(t);
}, e.toByteArray = function(t) {
var r, e, i, o, f, s, c = t.length;
f = n(t), s = new a(3 * c / 4 - f), i = f > 0 ? c - 4 : c;
var h = 0;
for (r = 0, e = 0; r < i; r += 4, e += 3) o = u[t.charCodeAt(r)] << 18 | u[t.charCodeAt(r + 1)] << 12 | u[t.charCodeAt(r + 2)] << 6 | u[t.charCodeAt(r + 3)], 
s[h++] = o >> 16 & 255, s[h++] = o >> 8 & 255, s[h++] = 255 & o;
return 2 === f ? (o = u[t.charCodeAt(r)] << 2 | u[t.charCodeAt(r + 1)] >> 4, s[h++] = 255 & o) : 1 === f && (o = u[t.charCodeAt(r)] << 10 | u[t.charCodeAt(r + 1)] << 4 | u[t.charCodeAt(r + 2)] >> 2, 
s[h++] = o >> 8 & 255, s[h++] = 255 & o), s;
}, e.fromByteArray = function(t) {
for (var r, e = t.length, n = e % 3, i = "", u = [], a = 16383, s = 0, c = e - n; s < c; s += a) u.push(o(t, s, s + a > c ? c : s + a));
return 1 === n ? (r = t[e - 1], i += f[r >> 2], i += f[r << 4 & 63], i += "==") : 2 === n && (r = (t[e - 2] << 8) + t[e - 1], 
i += f[r >> 10], i += f[r >> 4 & 63], i += f[r << 2 & 63], i += "="), u.push(i), 
u.join("");
};
for (var f = [], u = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = 0, h = s.length; c < h; ++c) f[c] = s[c], 
u[s.charCodeAt(c)] = c;
u["-".charCodeAt(0)] = 62, u["_".charCodeAt(0)] = 63;
}, {} ],
31: [ function(t, r) {
!function(t) {
function e(t) {
for (var r in f) t[r] = f[r];
return t;
}
function n(t, r) {
var e, f = this;
if (arguments.length) {
if (r) {
if (e = i(f, t, !0)) {
if (!(e = e.filter(function(t) {
return t !== r && t.originalListener !== r;
})).length) return n.call(f, t);
f[o][t] = e;
}
} else if ((e = f[o]) && (delete e[t], !Object.keys(e).length)) return n.call(f);
} else delete f[o];
return f;
}
function i(t, r, e) {
if (!e || t[o]) {
var n = t[o] || (t[o] = {});
return n[r] || (n[r] = []);
}
}
"undefined" != typeof r && (r.exports = t);
var o = "listeners", f = {
on: function(t, r) {
return i(this, t).push(r), this;
},
once: function(t, r) {
function e() {
n.call(o, t, e), r.apply(this, arguments);
}
var o = this;
return e.originalListener = r, i(o, t).push(e), o;
},
off: n,
emit: function(t, r) {
var e = this, n = i(e, t, !0);
if (!n) return !1;
var o = arguments.length;
if (1 === o) n.forEach(function(t) {
t.call(e);
}); else if (2 === o) n.forEach(function(t) {
t.call(e, r);
}); else {
var f = Array.prototype.slice.call(arguments, 1);
n.forEach(function(t) {
t.apply(e, f);
});
}
return !!n.length;
}
};
e(t.prototype), t.mixin = e;
}(function t() {
if (!(this instanceof t)) return new t();
});
}, {} ],
32: [ function(t, r, e) {
e.read = function(t, r, e, n, i) {
var o, f, u = 8 * i - n - 1, a = (1 << u) - 1, s = a >> 1, c = -7, h = e ? i - 1 : 0, l = e ? -1 : 1, p = t[r + h];
for (h += l, o = p & (1 << -c) - 1, p >>= -c, c += u; c > 0; o = 256 * o + t[r + h], 
h += l, c -= 8) ;
for (f = o & (1 << -c) - 1, o >>= -c, c += n; c > 0; f = 256 * f + t[r + h], h += l, 
c -= 8) ;
if (0 === o) o = 1 - s; else {
if (o === a) return f ? NaN : 1 / 0 * (p ? -1 : 1);
f += Math.pow(2, n), o -= s;
}
return (p ? -1 : 1) * f * Math.pow(2, o - n);
}, e.write = function(t, r, e, n, i, o) {
var f, u, a, s = 8 * o - i - 1, c = (1 << s) - 1, h = c >> 1, l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = n ? 0 : o - 1, d = n ? 1 : -1, y = r < 0 || 0 === r && 1 / r < 0 ? 1 : 0;
for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (u = isNaN(r) ? 1 : 0, f = c) : (f = Math.floor(Math.log(r) / Math.LN2), 
r * (a = Math.pow(2, -f)) < 1 && (f--, a *= 2), (r += f + h >= 1 ? l / a : l * Math.pow(2, 1 - h)) * a >= 2 && (f++, 
a /= 2), f + h >= c ? (u = 0, f = c) : f + h >= 1 ? (u = (r * a - 1) * Math.pow(2, i), 
f += h) : (u = r * Math.pow(2, h - 1) * Math.pow(2, i), f = 0)); i >= 8; t[e + p] = 255 & u, 
p += d, u /= 256, i -= 8) ;
for (f = f << i | u, s += i; s > 0; t[e + p] = 255 & f, p += d, f /= 256, s -= 8) ;
t[e + p - d] |= 128 * y;
};
}, {} ],
33: [ function(t, r, e) {
(function(t) {
!function(r) {
function e(t, e, w) {
function m(t, r, e, n) {
return this instanceof m ? x(this, t, r, e, n) : new m(t, r, e, n);
}
function x(t, r, e, n, i) {
if (g && v && (r instanceof v && (r = new g(r)), n instanceof v && (n = new g(n))), 
r || e || n || p) {
f(r, e) || (i = e, n = r, e = 0, r = new (p || Array)(8));
t.buffer = r, t.offset = e |= 0, d !== typeof n && ("string" == typeof n ? B(r, e, n, i || 10) : f(n, i) ? u(r, e, n, i) : "number" == typeof i ? (P(r, e + k, n), 
P(r, e + _, i)) : n > 0 ? C(r, e, n) : n < 0 ? D(r, e, n) : u(r, e, b, 0));
} else t.buffer = a(b, 0);
}
function B(t, r, e, n) {
var i = 0, o = e.length, f = 0, u = 0;
"-" === e[0] && i++;
for (var a = i; i < o; ) {
var s = parseInt(e[i++], n);
if (!(s >= 0)) break;
u = u * n + s, f = f * n + Math.floor(u / E), u %= E;
}
a && (f = ~f, u ? u = E - u : f++), P(t, r + k, f), P(t, r + _, u);
}
function U() {
var t = this.buffer, r = this.offset, e = R(t, r + k), n = R(t, r + _);
return w || (e |= 0), e ? e * E + n : n;
}
function P(t, r, e) {
t[r + Y] = 255 & e, e >>= 8, t[r + I] = 255 & e, e >>= 8, t[r + S] = 255 & e, e >>= 8, 
t[r + T] = 255 & e;
}
function R(t, r) {
return t[r + T] * A + (t[r + S] << 16) + (t[r + I] << 8) + t[r + Y];
}
var k = e ? 0 : 4, _ = e ? 4 : 0, T = e ? 0 : 3, S = e ? 1 : 2, I = e ? 2 : 1, Y = e ? 3 : 0, C = e ? s : h, D = e ? c : l, O = m.prototype, L = "is" + t, M = "_" + L;
return O.buffer = void 0, O.offset = 0, O[M] = !0, O.toNumber = U, O.toString = function(t) {
var r = this.buffer, e = this.offset, n = R(r, e + k), i = R(r, e + _), o = "", f = !w && 2147483648 & n;
for (f && (n = ~n, i = E - i), t = t || 10; ;) {
var u = n % t * E + i;
if (n = Math.floor(n / t), i = Math.floor(u / t), o = (u % t).toString(t) + o, !n && !i) break;
}
return f && (o = "-" + o), o;
}, O.toJSON = U, O.toArray = n, y && (O.toBuffer = i), g && (O.toArrayBuffer = o), 
m[L] = function(t) {
return !(!t || !t[M]);
}, r[t] = m, m;
}
function n(t) {
var r = this.buffer, e = this.offset;
return p = null, !1 !== t && 0 === e && 8 === r.length && w(r) ? r : a(r, e);
}
function i(r) {
var e = this.buffer, n = this.offset;
if (p = y, !1 !== r && 0 === n && 8 === e.length && t.isBuffer(e)) return e;
var i = new y(8);
return u(i, 0, e, n), i;
}
function o(t) {
var r = this.buffer, e = this.offset, n = r.buffer;
if (p = g, !1 !== t && 0 === e && n instanceof v && 8 === n.byteLength) return n;
var i = new g(8);
return u(i, 0, r, e), i.buffer;
}
function f(t, r) {
var e = t && t.length;
return r |= 0, e && r + 8 <= e && "string" != typeof t[r];
}
function u(t, r, e, n) {
r |= 0, n |= 0;
for (var i = 0; i < 8; i++) t[r++] = 255 & e[n++];
}
function a(t, r) {
return Array.prototype.slice.call(t, r, r + 8);
}
function s(t, r, e) {
for (var n = r + 8; n > r; ) t[--n] = 255 & e, e /= 256;
}
function c(t, r, e) {
var n = r + 8;
for (e++; n > r; ) t[--n] = 255 & -e ^ 255, e /= 256;
}
function h(t, r, e) {
for (var n = r + 8; r < n; ) t[r++] = 255 & e, e /= 256;
}
function l(t, r, e) {
var n = r + 8;
for (e++; r < n; ) t[r++] = 255 & -e ^ 255, e /= 256;
}
var p, d = "undefined", y = d !== typeof t && t, g = d !== typeof Uint8Array && Uint8Array, v = d !== typeof ArrayBuffer && ArrayBuffer, b = [ 0, 0, 0, 0, 0, 0, 0, 0 ], w = Array.isArray || function(t) {
return !!t && "[object Array]" == Object.prototype.toString.call(t);
}, E = 4294967296, A = 16777216;
e("Uint64BE", !0, !0), e("Int64BE", !0, !1), e("Uint64LE", !1, !0), e("Int64LE", !1, !1);
}("object" == typeof e && "string" != typeof e.nodeName ? e : this || {});
}).call(this, t("buffer").Buffer);
}, {
buffer: 29
} ],
34: [ function(t, r) {
var e = {}.toString;
r.exports = Array.isArray || function(t) {
return "[object Array]" == e.call(t);
};
}, {} ]
}, {}, [ 1 ])(1);
});