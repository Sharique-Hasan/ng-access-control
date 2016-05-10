"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/**
 * @license
 * lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash category="array,collection,object,lang,number"`
 */
;(function () {
  function n(n, t) {
    return n.set(t[0], t[1]), n;
  }function t(n, t) {
    return n.add(t), n;
  }function r(n, t, r) {
    switch (r.length) {case 0:
        return n.call(t);case 1:
        return n.call(t, r[0]);case 2:
        return n.call(t, r[0], r[1]);case 3:
        return n.call(t, r[0], r[1], r[2]);}return n.apply(t, r);
  }function e(n, t, r, e) {
    for (var u = -1, o = n.length; ++u < o;) {
      var i = n[u];t(e, i, r(i), n);
    }return e;
  }function u(n, t) {
    for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n);) {}return n;
  }function o(n, t) {
    for (var r = n.length; r-- && false !== t(n[r], r, n);) {}return n;
  }function i(n, t) {
    for (var r = -1, e = n.length; ++r < e;) {
      if (!t(n[r], r, n)) return false;
    }return true;
  }function f(n, t) {
    for (var r = -1, e = n.length, u = 0, o = []; ++r < e;) {
      var i = n[r];t(i, r, n) && (o[u++] = i);
    }return o;
  }function c(n, t) {
    return !!n.length && -1 < y(n, t, 0);
  }function a(n, t, r) {
    for (var e = -1, u = n.length; ++e < u;) {
      if (r(t, n[e])) return true;
    }return false;
  }function l(n, t) {
    for (var r = -1, e = n.length, u = Array(e); ++r < e;) {
      u[r] = t(n[r], r, n);
    }return u;
  }function s(n, t) {
    for (var r = -1, e = t.length, u = n.length; ++r < e;) {
      n[u + r] = t[r];
    }return n;
  }function h(n, t, r, e) {
    var u = -1,
        o = n.length;for (e && o && (r = n[++u]); ++u < o;) {
      r = t(r, n[u], u, n);
    }return r;
  }function p(n, t, r, e) {
    var u = n.length;for (e && u && (r = n[--u]); u--;) {
      r = t(r, n[u], u, n);
    }return r;
  }function g(n, t) {
    for (var r = -1, e = n.length; ++r < e;) {
      if (t(n[r], r, n)) return true;
    }return false;
  }function v(n, t, r, e) {
    var u;return r(n, function (n, r, o) {
      return t(n, r, o) ? (u = e ? r : n, false) : void 0;
    }), u;
  }function b(n, t, r) {
    for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;) {
      if (t(n[u], u, n)) return u;
    }return -1;
  }function y(n, t, r) {
    if (t !== t) return S(n, r);--r;for (var e = n.length; ++r < e;) {
      if (n[r] === t) return r;
    }return -1;
  }function d(n, t, r, e) {
    --r;for (var u = n.length; ++r < u;) {
      if (e(n[r], t)) return r;
    }return -1;
  }function j(n, t, r, e, u) {
    return u(n, function (n, u, o) {
      r = e ? (e = false, n) : t(r, n, u, o);
    }), r;
  }function _(n, t) {
    var r = n.length;for (n.sort(t); r--;) {
      n[r] = n[r].c;
    }return n;
  }function m(n, t) {
    for (var r = -1, e = Array(n); ++r < n;) {
      e[r] = t(r);
    }return e;
  }function A(n, t) {
    return l(t, function (t) {
      return [t, n[t]];
    });
  }function w(n) {
    return function (t) {
      return n(t);
    };
  }function O(n, t) {
    return l(t, function (t) {
      return n[t];
    });
  }function x(n, t) {
    return n.has(t);
  }function I(n) {
    return n && n.Object === Object ? n : null;
  }function S(n, t, r) {
    var e = n.length;for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
      var u = n[t];if (u !== u) return t;
    }return -1;
  }function k(n) {
    var t = false;if (null != n && typeof n.toString != "function") try {
      t = !!(n + "");
    } catch (r) {}return t;
  }function B(n) {
    for (var t, r = []; !(t = n.next()).done;) {
      r.push(t.value);
    }return r;
  }function M(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n, e) {
      r[++t] = [e, n];
    }), r;
  }function W(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n) {
      r[++t] = n;
    }), r;
  }function E(n) {
    var t = -1,
        r = Array(n.size);return n.forEach(function (n) {
      r[++t] = [n, n];
    }), r;
  }function D() {}function R(n) {
    var t = -1,
        r = n ? n.length : 0;
    for (this.clear(); ++t < r;) {
      var e = n[t];this.set(e[0], e[1]);
    }
  }function F(n) {
    var t = -1,
        r = n ? n.length : 0;for (this.clear(); ++t < r;) {
      var e = n[t];this.set(e[0], e[1]);
    }
  }function L(n) {
    var t = -1,
        r = n ? n.length : 0;for (this.clear(); ++t < r;) {
      var e = n[t];this.set(e[0], e[1]);
    }
  }function z(n) {
    var t = -1,
        r = n ? n.length : 0;for (this.__data__ = new L(); ++t < r;) {
      this.add(n[t]);
    }
  }function U(n) {
    this.__data__ = new F(n);
  }function N(n, t, r, e) {
    return n === hr || Rt(n, qr[r]) && !Tr.call(e, r) ? t : n;
  }function $(n, t, r) {
    (r === hr || Rt(n[t], r)) && (typeof t != "number" || r !== hr || t in n) || (n[t] = r);
  }function P(n, t, r) {
    var e = n[t];Tr.call(n, t) && Rt(e, r) && (r !== hr || t in n) || (n[t] = r);
  }function V(n, t) {
    for (var r = n.length; r--;) {
      if (Rt(n[r][0], t)) return r;
    }return -1;
  }function q(n, t, r, e) {
    return Me(n, function (n, u, o) {
      t(e, n, r(n), o);
    }), e;
  }function C(n, t) {
    return n && Vn(t, ur(t), n);
  }function T(n, t) {
    for (var r = -1, e = null == n, u = t.length, o = Array(u); ++r < u;) {
      o[r] = e ? hr : rr(n, t[r]);
    }return o;
  }function K(n, t, r) {
    return n === n && (r !== hr && (n = r >= n ? n : r), t !== hr && (n = n >= t ? n : t)), n;
  }function G(n, t, r, e, o, i, f) {
    var c;if (e && (c = i ? e(n, o, i, f) : e(n)), c !== hr) return c;
    if (!Pt(n)) return n;if (o = au(n)) {
      if (c = it(n), !t) return Pn(n, c);
    } else {
      var a = ut(n),
          l = "[object Function]" == a || "[object GeneratorFunction]" == a;if (lu(n)) return Un(n, t);if ("[object Object]" == a || "[object Arguments]" == a || l && !i) {
        if (k(n)) return i ? n : {};if (c = ft(l ? {} : n), !t) return qn(n, C(c, n));
      } else {
        if (!Wr[a]) return i ? n : {};c = ct(n, a, G, t);
      }
    }if (f || (f = new U()), i = f.get(n)) return i;if (f.set(n, c), !o) var s = r ? en(n, ur, et) : ur(n);return u(s || n, function (u, o) {
      s && (o = u, u = n[o]), P(c, o, G(u, t, r, e, o, n, f));
    }), c;
  }function H(n) {
    return Pt(n) ? re(n) : {};
  }function J(n, t, r, e) {
    var u = -1,
        o = c,
        i = true,
        f = n.length,
        s = [],
        h = t.length;if (!f) return s;r && (t = l(t, w(r))), e ? (o = a, i = false) : t.length >= 200 && (o = x, i = false, t = new z(t));n: for (; ++u < f;) {
      var p = n[u],
          g = r ? r(p) : p,
          p = e || 0 !== p ? p : 0;if (i && g === g) {
        for (var v = h; v--;) {
          if (t[v] === g) continue n;
        }s.push(p);
      } else o(t, g, e) || s.push(p);
    }return s;
  }function Q(n, t) {
    var r = true;return Me(n, function (n, e, u) {
      return r = !!t(n, e, u);
    }), r;
  }function X(n, t) {
    var r = [];return Me(n, function (n, e, u) {
      t(n, e, u) && r.push(n);
    }), r;
  }function Y(n, t, r, e, u) {
    var o = -1,
        i = n.length;for (r || (r = lt), u || (u = []); ++o < i;) {
      var f = n[o];t > 0 && r(f) ? t > 1 ? Y(f, t - 1, r, e, u) : s(u, f) : e || (u[u.length] = f);
    }return u;
  }function Z(n, t) {
    return n && Ee(n, t, ur);
  }function nn(n, t) {
    return n && De(n, t, ur);
  }function tn(n, t) {
    return f(t, function (t) {
      return Ut(n[t]);
    });
  }function rn(n, t) {
    t = gt(t, n) ? [t] : zn(t);for (var r = 0, e = t.length; null != n && e > r;) {
      n = n[jt(t[r++])];
    }return r && r == e ? n : hr;
  }function en(n, t, r) {
    return t = t(n), au(n) ? t : s(t, r(n));
  }function un(n, t) {
    return Tr.call(n, t) || (typeof n === "undefined" ? "undefined" : _typeof(n)) == "object" && t in n && null === fe(Object(n));
  }function on(n, t) {
    return t in Object(n);
  }function fn(n, t, r) {
    for (var e = r ? a : c, u = n[0].length, o = n.length, i = o, f = Array(o), s = 1 / 0, h = []; i--;) {
      var p = n[i];i && t && (p = l(p, w(t))), s = he(p.length, s), f[i] = !r && (t || u >= 120 && p.length >= 120) ? new z(i && p) : hr;
    }var p = n[0],
        g = -1,
        v = f[0];n: for (; ++g < u && s > h.length;) {
      var b = p[g],
          y = t ? t(b) : b,
          b = r || 0 !== b ? b : 0;if (v ? !x(v, y) : !e(h, y, r)) {
        for (i = o; --i;) {
          var d = f[i];if (d ? !x(d, y) : !e(n[i], y, r)) continue n;
        }v && v.push(y), h.push(b);
      }
    }return h;
  }function cn(n, t, r) {
    var e = {};return Z(n, function (n, u, o) {
      t(e, r(n), u, o);
    }), e;
  }function an(n, t, e) {
    return gt(t, n) || (t = zn(t), n = dt(n, t), t = Ot(t)), t = null == n ? n : n[jt(t)], null == t ? hr : r(t, n, e);
  }function ln(n, t, r, e, u) {
    if (n === t) t = true;else if (null == n || null == t || !Pt(n) && !Vt(t)) t = n !== n && t !== t;else n: {
      var o = au(n),
          i = au(t),
          f = "[object Array]",
          c = "[object Array]";o || (f = ut(n), f = "[object Arguments]" == f ? "[object Object]" : f), i || (c = ut(t), c = "[object Arguments]" == c ? "[object Object]" : c);var a = "[object Object]" == f && !k(n),
          i = "[object Object]" == c && !k(t);if ((c = f == c) && !a) u || (u = new U()), t = o || Ht(n) ? Xn(n, t, ln, r, e, u) : Yn(n, t, f, ln, r, e, u);else {
        if (!(2 & e) && (o = a && Tr.call(n, "__wrapped__"), f = i && Tr.call(t, "__wrapped__"), o || f)) {
          n = o ? n.value() : n, t = f ? t.value() : t, u || (u = new U()), t = ln(n, t, r, e, u);break n;
        }if (c) {
          t: if (u || (u = new U()), o = 2 & e, f = ur(n), i = f.length, c = ur(t).length, i == c || o) {
            for (a = i; a--;) {
              var l = f[a];if (!(o ? l in t : un(t, l))) {
                t = false;break t;
              }
            }if (c = u.get(n)) t = c == t;else {
              c = true, u.set(n, t);for (var s = o; ++a < i;) {
                var l = f[a],
                    h = n[l],
                    p = t[l];if (r) var g = o ? r(p, h, l, t, n, u) : r(h, p, l, n, t, u);if (g === hr ? h !== p && !ln(h, p, r, e, u) : !g) {
                  c = false;break;
                }s || (s = "constructor" == l);
              }c && !s && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (c = false)), u["delete"](n), t = c;
            }
          } else t = false;
        } else t = false;
      }
    }return t;
  }function sn(n, t, r, e) {
    var u = r.length,
        o = u,
        i = !e;if (null == n) return !o;for (n = Object(n); u--;) {
      var f = r[u];if (i && f[2] ? f[1] !== n[f[0]] : !(f[0] in n)) return false;
    }for (; ++u < o;) {
      var f = r[u],
          c = f[0],
          a = n[c],
          l = f[1];if (i && f[2]) {
        if (a === hr && !(c in n)) return false;
      } else {
        if (f = new U(), e) var s = e(a, l, c, n, t, f);if (s === hr ? !ln(l, a, e, 3, f) : !s) return false;
      }
    }return true;
  }function hn(n) {
    return typeof n == "function" ? n : null == n ? cr : (typeof n === "undefined" ? "undefined" : _typeof(n)) == "object" ? au(n) ? bn(n[0], n[1]) : vn(n) : sr(n);
  }function pn(n) {
    n = null == n ? n : Object(n);
    var t,
        r = [];for (t in n) {
      r.push(t);
    }return r;
  }function gn(n, t) {
    var r = -1,
        e = Lt(n) ? Array(n.length) : [];return Me(n, function (n, u, o) {
      e[++r] = t(n, u, o);
    }), e;
  }function vn(n) {
    var t = tt(n);return 1 == t.length && t[0][2] ? bt(t[0][0], t[0][1]) : function (r) {
      return r === n || sn(r, n, t);
    };
  }function bn(n, t) {
    return gt(n) && t === t && !Pt(t) ? bt(jt(n), t) : function (r) {
      var e = rr(r, n);return e === hr && e === t ? er(r, n) : ln(t, e, hr, 3);
    };
  }function yn(n, t, r, e, o) {
    if (n !== t) {
      if (!au(t) && !Ht(t)) var i = or(t);u(i || t, function (u, f) {
        if (i && (f = u, u = t[f]), Pt(u)) {
          o || (o = new U());
          var c = f,
              a = o,
              l = n[c],
              s = t[c],
              h = a.get(s);if (h) $(n, c, h);else {
            var h = e ? e(l, s, c + "", n, t, a) : hr,
                p = h === hr;p && (h = s, au(s) || Ht(s) ? au(l) ? h = l : zt(l) ? h = Pn(l) : (p = false, h = G(s, true)) : Tt(s) || Ft(s) ? Ft(l) ? h = nr(l) : !Pt(l) || r && Ut(l) ? (p = false, h = G(s, true)) : h = l : p = false), a.set(s, h), p && yn(h, s, r, e, a), a["delete"](s), $(n, c, h);
          }
        } else c = e ? e(n[f], u, f + "", n, t, o) : hr, c === hr && (c = u), $(n, f, c);
      });
    }
  }function dn(n, t, r) {
    var e = -1;return t = l(t.length ? t : [cr], w(Zn())), n = gn(n, function (n) {
      return { a: l(t, function (t) {
          return t(n);
        }), b: ++e, c: n };
    }), _(n, function (n, t) {
      var e;n: {
        e = -1;for (var u = n.a, o = t.a, i = u.length, f = r.length; ++e < i;) {
          var c = $n(u[e], o[e]);if (c) {
            e = e >= f ? c : c * ("desc" == r[e] ? -1 : 1);break n;
          }
        }e = n.b - t.b;
      }return e;
    });
  }function jn(n, t) {
    return n = Object(n), h(t, function (t, r) {
      return r in n && (t[r] = n[r]), t;
    }, {});
  }function _n(n, t) {
    for (var r = -1, e = en(n, or, Le), u = e.length, o = {}; ++r < u;) {
      var i = e[r],
          f = n[i];t(f, i) && (o[i] = f);
    }return o;
  }function mn(n) {
    return function (t) {
      return null == t ? hr : t[n];
    };
  }function An(n) {
    return function (t) {
      return rn(t, n);
    };
  }function wn(n, t, r, e) {
    var u = e ? d : y,
        o = -1,
        i = t.length,
        f = n;
    for (r && (f = l(n, w(r))); ++o < i;) {
      for (var c = 0, a = t[o], a = r ? r(a) : a; -1 < (c = u(f, a, c, e));) {
        f !== n && ue.call(f, c, 1), ue.call(n, c, 1);
      }
    }return n;
  }function On(n, t) {
    for (var r = n ? t.length : 0, e = r - 1; r--;) {
      var u = t[r];if (r == e || u !== o) {
        var o = u;if (ht(u)) ue.call(n, u, 1);else if (gt(u, n)) delete n[jt(u)];else {
          var u = zn(u),
              i = dt(n, u);null != i && delete i[jt(Ot(u))];
        }
      }
    }
  }function xn(n, t) {
    return n + ie(pe() * (t - n + 1));
  }function In(n, t, r, e) {
    t = gt(t, n) ? [t] : zn(t);for (var u = -1, o = t.length, i = o - 1, f = n; null != f && ++u < o;) {
      var c = jt(t[u]);if (Pt(f)) {
        var a = r;if (u != i) {
          var l = f[c],
              a = e ? e(l, c, f) : hr;a === hr && (a = null == l ? ht(t[u + 1]) ? [] : {} : l);
        }P(f, c, a);
      }f = f[c];
    }return n;
  }function Sn(n, t, r) {
    var e = -1,
        u = n.length;for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Array(u); ++e < u;) {
      r[e] = n[e + t];
    }return r;
  }function kn(n, t) {
    var r;return Me(n, function (n, e, u) {
      return r = t(n, e, u), !r;
    }), !!r;
  }function Bn(n, t, r) {
    var e = 0,
        u = n ? n.length : e;if (typeof t == "number" && t === t && 2147483647 >= u) {
      for (; u > e;) {
        var o = e + u >>> 1,
            i = n[o];null !== i && !Gt(i) && (r ? t >= i : t > i) ? e = o + 1 : u = o;
      }return u;
    }return Mn(n, t, cr, r);
  }function Mn(n, t, r, e) {
    t = r(t);for (var u = 0, o = n ? n.length : 0, i = t !== t, f = null === t, c = Gt(t), a = t === hr; o > u;) {
      var l = ie((u + o) / 2),
          s = r(n[l]),
          h = s !== hr,
          p = null === s,
          g = s === s,
          v = Gt(s);(i ? e || g : a ? g && (e || h) : f ? g && h && (e || !p) : c ? g && h && !p && (e || !v) : p || v ? 0 : e ? t >= s : t > s) ? u = l + 1 : o = l;
    }return he(o, 4294967294);
  }function Wn(n, t) {
    for (var r = -1, e = n.length, u = 0, o = []; ++r < e;) {
      var i = n[r],
          f = t ? t(i) : i;if (!r || !Rt(f, c)) {
        var c = f;o[u++] = 0 === i ? 0 : i;
      }
    }return o;
  }function En(n, t, r) {
    var e = -1,
        u = c,
        o = n.length,
        i = true,
        f = [],
        l = f;if (r) i = false, u = a;else if (o >= 200) {
      if (u = t ? null : Re(n)) return W(u);
      i = false, u = x, l = new z();
    } else l = t ? [] : f;n: for (; ++e < o;) {
      var s = n[e],
          h = t ? t(s) : s,
          s = r || 0 !== s ? s : 0;if (i && h === h) {
        for (var p = l.length; p--;) {
          if (l[p] === h) continue n;
        }t && l.push(h), f.push(s);
      } else u(l, h, r) || (l !== f && l.push(h), f.push(s));
    }return f;
  }function Dn(n, t, r, e) {
    for (var u = n.length, o = e ? u : -1; (e ? o-- : ++o < u) && t(n[o], o, n);) {}return r ? Sn(n, e ? 0 : o, e ? o + 1 : u) : Sn(n, e ? o + 1 : 0, e ? u : o);
  }function Rn(n, t, r) {
    for (var e = -1, u = n.length; ++e < u;) {
      var o = o ? s(J(o, n[e], t, r), J(n[e], o, t, r)) : n[e];
    }return o && o.length ? En(o, t, r) : [];
  }function Fn(n, t, r) {
    for (var e = -1, u = n.length, o = t.length, i = {}; ++e < u;) {
      r(i, n[e], o > e ? t[e] : hr);
    }return i;
  }function Ln(n) {
    return zt(n) ? n : [];
  }function zn(n) {
    return au(n) ? n : ze(n);
  }function Un(n, t) {
    if (t) return n.slice();var r = new n.constructor(n.length);return n.copy(r), r;
  }function Nn(n) {
    var t = new n.constructor(n.byteLength);return new Yr(t).set(new Yr(n)), t;
  }function $n(n, t) {
    if (n !== t) {
      var r = n !== hr,
          e = null === n,
          u = n === n,
          o = Gt(n),
          i = t !== hr,
          f = null === t,
          c = t === t,
          a = Gt(t);if (!f && !a && !o && n > t || o && i && c && !f && !a || e && i && c || !r && c || !u) return 1;if (!e && !o && !a && t > n || a && r && u && !e && !o || f && r && u || !i && u || !c) return -1;
    }return 0;
  }function Pn(n, t) {
    var r = -1,
        e = n.length;for (t || (t = Array(e)); ++r < e;) {
      t[r] = n[r];
    }return t;
  }function Vn(n, t, r, e) {
    r || (r = {});for (var u = -1, o = t.length; ++u < o;) {
      var i = t[u],
          f = e ? e(r[i], n[i], i, r, n) : n[i];P(r, i, f);
    }return r;
  }function qn(n, t) {
    return Vn(n, et(n), t);
  }function Cn(n, t) {
    return function (r, u) {
      var o = au(r) ? e : q,
          i = t ? t() : {};return o(r, n, Zn(u), i);
    };
  }function Tn(n) {
    return Dt(function (t, r) {
      var e = -1,
          u = r.length,
          o = u > 1 ? r[u - 1] : hr,
          i = u > 2 ? r[2] : hr,
          o = n.length > 3 && typeof o == "function" ? (u--, o) : hr;for (i && pt(r[0], r[1], i) && (o = 3 > u ? hr : o, u = 1), t = Object(t); ++e < u;) {
        (i = r[e]) && n(t, i, e, o);
      }return t;
    });
  }function Kn(n, t) {
    return function (r, e) {
      if (null == r) return r;if (!Lt(r)) return n(r, e);for (var u = r.length, o = t ? u : -1, i = Object(r); (t ? o-- : ++o < u) && false !== e(i[o], o, i);) {}return r;
    };
  }function Gn(n) {
    return function (t, r, e) {
      var u = -1,
          o = Object(t);e = e(t);for (var i = e.length; i--;) {
        var f = e[n ? i : ++u];if (false === r(o[f], f, o)) break;
      }return t;
    };
  }function Hn(n, t) {
    return function (r, e) {
      return cn(r, n, t(e));
    };
  }function Jn(n) {
    return function (t, r) {
      return typeof t == "string" && typeof r == "string" || (t = Zt(t), r = Zt(r)), n(t, r);
    };
  }function Qn(n) {
    return function (t) {
      var r = ut(t);return "[object Map]" == r ? M(t) : "[object Set]" == r ? E(t) : A(t, n(t));
    };
  }function Xn(n, t, r, e, u, o) {
    var i = 2 & u,
        f = n.length,
        c = t.length;if (f != c && !(i && c > f)) return false;if (c = o.get(n)) return c == t;var c = -1,
        a = true,
        l = 1 & u ? new z() : hr;for (o.set(n, t); ++c < f;) {
      var s = n[c],
          h = t[c];if (e) var p = i ? e(h, s, c, t, n, o) : e(s, h, c, n, t, o);if (p !== hr) {
        if (p) continue;a = false;break;
      }if (l) {
        if (!g(t, function (n, t) {
          return l.has(t) || s !== n && !r(s, n, e, u, o) ? void 0 : l.add(t);
        })) {
          a = false;break;
        }
      } else if (s !== h && !r(s, h, e, u, o)) {
        a = false;break;
      }
    }return o["delete"](n), a;
  }function Yn(n, t, r, e, u, o, i) {
    switch (r) {case "[object DataView]":
        if (n.byteLength != t.byteLength || n.byteOffset != t.byteOffset) break;n = n.buffer, t = t.buffer;case "[object ArrayBuffer]":
        if (n.byteLength != t.byteLength || !e(new Yr(n), new Yr(t))) break;return true;case "[object Boolean]":case "[object Date]":
        return +n == +t;case "[object Error]":
        return n.name == t.name && n.message == t.message;case "[object Number]":
        return n != +n ? t != +t : n == +t;case "[object RegExp]":case "[object String]":
        return n == t + "";case "[object Map]":
        var f = M;case "[object Set]":
        if (f || (f = W), n.size != t.size && !(2 & o)) break;return (r = i.get(n)) ? r == t : (o |= 1, i.set(n, t), Xn(f(n), f(t), e, u, o, i));case "[object Symbol]":
        if (ke) return ke.call(n) == ke.call(t);}return false;
  }function Zn() {
    var n = D.iteratee || ar,
        n = n === ar ? hn : n;return arguments.length ? n(arguments[0], arguments[1]) : n;
  }function nt(n, t) {
    var r = n.__data__,
        e = typeof t === "undefined" ? "undefined" : _typeof(t);return ("string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
  }function tt(n) {
    n = Su(n);for (var t = n.length; t--;) {
      var r = n[t][1];
      n[t][2] = r === r && !Pt(r);
    }return n;
  }function rt(n, t) {
    var r = n[t];return qt(r) ? r : hr;
  }function et(n) {
    return ne(Object(n));
  }function ut(n) {
    return Gr.call(n);
  }function ot(n, t, r) {
    t = gt(t, n) ? [t] : zn(t);for (var e, u = -1, o = t.length; ++u < o;) {
      var i = jt(t[u]);if (!(e = null != n && r(n, i))) break;n = n[i];
    }return e ? e : (o = n ? n.length : 0, !!o && $t(o) && ht(i, o) && (au(n) || Kt(n) || Ft(n)));
  }function it(n) {
    var t = n.length,
        r = n.constructor(t);return t && "string" == typeof n[0] && Tr.call(n, "index") && (r.index = n.index, r.input = n.input), r;
  }function ft(n) {
    return typeof n.constructor != "function" || vt(n) ? {} : H(fe(Object(n)));
  }function ct(r, e, u, o) {
    var i = r.constructor;switch (e) {case "[object ArrayBuffer]":
        return Nn(r);case "[object Boolean]":case "[object Date]":
        return new i(+r);case "[object DataView]":
        return e = o ? Nn(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.byteLength);case "[object Float32Array]":case "[object Float64Array]":case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":
        return e = o ? Nn(r.buffer) : r.buffer, new r.constructor(e, r.byteOffset, r.length);case "[object Map]":
        return e = o ? u(M(r), true) : M(r), h(e, n, new r.constructor());case "[object Number]":case "[object String]":
        return new i(r);case "[object RegExp]":
        return e = new r.constructor(r.source, _r.exec(r)), e.lastIndex = r.lastIndex, e;case "[object Set]":
        return e = o ? u(W(r), true) : W(r), h(e, t, new r.constructor());case "[object Symbol]":
        return ke ? Object(ke.call(r)) : {};}
  }function at(n) {
    var t = n ? n.length : hr;return $t(t) && (au(n) || Kt(n) || Ft(n)) ? m(t, String) : null;
  }function lt(n) {
    return au(n) || Ft(n);
  }function st(n) {
    return au(n) && !(2 == n.length && !Ut(n[0]));
  }function ht(n, t) {
    return t = null == t ? 9007199254740991 : t, !!t && (typeof n == "number" || xr.test(n)) && n > -1 && 0 == n % 1 && t > n;
  }function pt(n, t, r) {
    if (!Pt(r)) return false;var e = typeof t === "undefined" ? "undefined" : _typeof(t);return ("number" == e ? Lt(r) && ht(t, r.length) : "string" == e && t in r) ? Rt(r[t], n) : false;
  }function gt(n, t) {
    if (au(n)) return false;var r = typeof n === "undefined" ? "undefined" : _typeof(n);return "number" == r || "symbol" == r || "boolean" == r || null == n || Gt(n) ? true : br.test(n) || !vr.test(n) || null != t && n in Object(t);
  }function vt(n) {
    var t = n && n.constructor;return n === (typeof t == "function" && t.prototype || qr);
  }function bt(n, t) {
    return function (r) {
      return null == r ? false : r[n] === t && (t !== hr || n in Object(r));
    };
  }function yt(n, t, r, e, u, o) {
    return Pt(n) && Pt(t) && yn(n, t, hr, yt, o.set(t, n)), n;
  }function dt(n, t) {
    return 1 == t.length ? n : rn(n, Sn(t, 0, -1));
  }function jt(n) {
    if (typeof n == "string" || Gt(n)) return n;var t = n + "";return "0" == t && 1 / n == -pr ? "-0" : t;
  }function _t(n) {
    if (null != n) {
      try {
        return Cr.call(n);
      } catch (t) {}return n + "";
    }return "";
  }function mt(n, t, r) {
    var e = n ? n.length : 0;
    return e ? (t = r || t === hr ? 1 : Xt(t), Sn(n, 0 > t ? 0 : t, e)) : [];
  }function At(n, t, r) {
    var e = n ? n.length : 0;return e ? (t = r || t === hr ? 1 : Xt(t), t = e - t, Sn(n, 0, 0 > t ? 0 : t)) : [];
  }function wt(n) {
    return n && n.length ? n[0] : hr;
  }function Ot(n) {
    var t = n ? n.length : 0;return t ? n[t - 1] : hr;
  }function xt(n, t) {
    return n && n.length && t && t.length ? wn(n, t) : n;
  }function It(n) {
    if (!n || !n.length) return [];var t = 0;return n = f(n, function (n) {
      return zt(n) ? (t = se(n.length, t), true) : void 0;
    }), m(t, function (t) {
      return l(n, mn(t));
    });
  }function St(n, t) {
    if (!n || !n.length) return [];var e = It(n);
    return null == t ? e : l(e, function (n) {
      return r(t, hr, n);
    });
  }function kt(n, t) {
    return (au(n) ? u : Me)(n, Zn(t, 3));
  }function Bt(n, t) {
    return (au(n) ? o : We)(n, Zn(t, 3));
  }function Mt(n, t) {
    return (au(n) ? l : gn)(n, Zn(t, 3));
  }function Wt(n, t, r) {
    var e = -1,
        u = Jt(n),
        o = u.length,
        i = o - 1;for (t = (r ? pt(n, t, r) : t === hr) ? 1 : K(Xt(t), 0, o); ++e < t;) {
      n = xn(e, i), r = u[n], u[n] = u[e], u[e] = r;
    }return u.length = t, u;
  }function Et(n, t) {
    function r() {
      var e = arguments,
          u = t ? t.apply(this, e) : e[0],
          o = r.cache;return o.has(u) ? o.get(u) : (e = n.apply(this, e), r.cache = o.set(u, e), e);
    }if (typeof n != "function" || t && typeof t != "function") throw new TypeError("Expected a function");
    return r.cache = new (Et.Cache || L)(), r;
  }function Dt(n, t) {
    if (typeof n != "function") throw new TypeError("Expected a function");return t = se(t === hr ? n.length - 1 : Xt(t), 0), function () {
      for (var e = arguments, u = -1, o = se(e.length - t, 0), i = Array(o); ++u < o;) {
        i[u] = e[t + u];
      }switch (t) {case 0:
          return n.call(this, i);case 1:
          return n.call(this, e[0], i);case 2:
          return n.call(this, e[0], e[1], i);}for (o = Array(t + 1), u = -1; ++u < t;) {
        o[u] = e[u];
      }return o[t] = i, r(n, this, o);
    };
  }function Rt(n, t) {
    return n === t || n !== n && t !== t;
  }function Ft(n) {
    return zt(n) && Tr.call(n, "callee") && (!ee.call(n, "callee") || "[object Arguments]" == Gr.call(n));
  }function Lt(n) {
    return null != n && $t(Fe(n)) && !Ut(n);
  }function zt(n) {
    return Vt(n) && Lt(n);
  }function Ut(n) {
    return n = Pt(n) ? Gr.call(n) : "", "[object Function]" == n || "[object GeneratorFunction]" == n;
  }function Nt(n) {
    return typeof n == "number" && n == Xt(n);
  }function $t(n) {
    return typeof n == "number" && n > -1 && 0 == n % 1 && 9007199254740991 >= n;
  }function Pt(n) {
    var t = typeof n === "undefined" ? "undefined" : _typeof(n);return !!n && ("object" == t || "function" == t);
  }function Vt(n) {
    return !!n && (typeof n === "undefined" ? "undefined" : _typeof(n)) == "object";
  }function qt(n) {
    return Pt(n) ? (Ut(n) || k(n) ? Hr : wr).test(_t(n)) : false;
  }function Ct(n) {
    return typeof n == "number" || Vt(n) && "[object Number]" == Gr.call(n);
  }function Tt(n) {
    return !Vt(n) || "[object Object]" != Gr.call(n) || k(n) ? false : (n = fe(Object(n)), null === n ? true : (n = Tr.call(n, "constructor") && n.constructor, typeof n == "function" && n instanceof n && Cr.call(n) == Kr));
  }function Kt(n) {
    return typeof n == "string" || !au(n) && Vt(n) && "[object String]" == Gr.call(n);
  }function Gt(n) {
    return (typeof n === "undefined" ? "undefined" : _typeof(n)) == "symbol" || Vt(n) && "[object Symbol]" == Gr.call(n);
  }function Ht(n) {
    return Vt(n) && $t(n.length) && !!Mr[Gr.call(n)];
  }function Jt(n) {
    if (!n) return [];
    if (Lt(n)) return Kt(n) ? n.match(kr) : Pn(n);if (te && n[te]) return B(n[te]());var t = ut(n);return ("[object Map]" == t ? M : "[object Set]" == t ? W : ir)(n);
  }function Qt(n) {
    return n ? (n = Zt(n), n === pr || n === -pr ? 1.7976931348623157e308 * (0 > n ? -1 : 1) : n === n ? n : 0) : 0 === n ? n : 0;
  }function Xt(n) {
    n = Qt(n);var t = n % 1;return n === n ? t ? n - t : n : 0;
  }function Yt(n) {
    return n ? K(Xt(n), 0, 4294967295) : 0;
  }function Zt(n) {
    if (typeof n == "number") return n;if (Gt(n)) return gr;if (Pt(n) && (n = Ut(n.valueOf) ? n.valueOf() : n, n = Pt(n) ? n + "" : n), typeof n != "string") return 0 === n ? n : +n;
    n = n.replace(dr, "");var t = Ar.test(n);return t || Or.test(n) ? Rr(n.slice(2), t ? 2 : 8) : mr.test(n) ? gr : +n;
  }function nr(n) {
    return Vn(n, or(n));
  }function tr(n) {
    if (null == n) n = "";else if (typeof n != "string") if (Gt(n)) n = Be ? Be.call(n) : "";else {
      var t = n + "";n = "0" == t && 1 / n == -pr ? "-0" : t;
    }return n;
  }function rr(n, t, r) {
    return n = null == n ? hr : rn(n, t), n === hr ? r : n;
  }function er(n, t) {
    return null != n && ot(n, t, on);
  }function ur(n) {
    var t = vt(n);if (!t && !Lt(n)) return le(Object(n));var r,
        e = at(n),
        u = !!e,
        e = e || [],
        o = e.length;for (r in n) {
      !un(n, r) || u && ("length" == r || ht(r, o)) || t && "constructor" == r || e.push(r);
    }return e;
  }function or(n) {
    for (var t = -1, r = vt(n), e = pn(n), u = e.length, o = at(n), i = !!o, o = o || [], f = o.length; ++t < u;) {
      var c = e[t];i && ("length" == c || ht(c, f)) || "constructor" == c && (r || !Tr.call(n, c)) || o.push(c);
    }return o;
  }function ir(n) {
    return n ? O(n, ur(n)) : [];
  }function fr(n) {
    return function () {
      return n;
    };
  }function cr(n) {
    return n;
  }function ar(n) {
    return hn(typeof n == "function" ? n : G(n, true));
  }function lr() {}function sr(n) {
    return gt(n) ? mn(jt(n)) : An(n);
  }var hr,
      pr = 1 / 0,
      gr = NaN,
      vr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      br = /^\w*$/,
      yr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,
      dr = /^\s+|\s+$/g,
      jr = /\\(\\)?/g,
      _r = /\w*$/,
      mr = /^[-+]0x[0-9a-f]+$/i,
      Ar = /^0b[01]+$/i,
      wr = /^\[object .+?Constructor\]$/,
      Or = /^0o[0-7]+$/i,
      xr = /^(?:0|[1-9]\d*)$/,
      Ir = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*",
      Sr = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",
      kr = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + Sr + Ir, "g"),
      Br = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),
      Mr = {};
  Mr["[object Float32Array]"] = Mr["[object Float64Array]"] = Mr["[object Int8Array]"] = Mr["[object Int16Array]"] = Mr["[object Int32Array]"] = Mr["[object Uint8Array]"] = Mr["[object Uint8ClampedArray]"] = Mr["[object Uint16Array]"] = Mr["[object Uint32Array]"] = true, Mr["[object Arguments]"] = Mr["[object Array]"] = Mr["[object ArrayBuffer]"] = Mr["[object Boolean]"] = Mr["[object DataView]"] = Mr["[object Date]"] = Mr["[object Error]"] = Mr["[object Function]"] = Mr["[object Map]"] = Mr["[object Number]"] = Mr["[object Object]"] = Mr["[object RegExp]"] = Mr["[object Set]"] = Mr["[object String]"] = Mr["[object WeakMap]"] = false;
  var Wr = {};Wr["[object Arguments]"] = Wr["[object Array]"] = Wr["[object ArrayBuffer]"] = Wr["[object DataView]"] = Wr["[object Boolean]"] = Wr["[object Date]"] = Wr["[object Float32Array]"] = Wr["[object Float64Array]"] = Wr["[object Int8Array]"] = Wr["[object Int16Array]"] = Wr["[object Int32Array]"] = Wr["[object Map]"] = Wr["[object Number]"] = Wr["[object Object]"] = Wr["[object RegExp]"] = Wr["[object Set]"] = Wr["[object String]"] = Wr["[object Symbol]"] = Wr["[object Uint8Array]"] = Wr["[object Uint8ClampedArray]"] = Wr["[object Uint16Array]"] = Wr["[object Uint32Array]"] = true, Wr["[object Error]"] = Wr["[object Function]"] = Wr["[object WeakMap]"] = false;var Er = { "function": true, object: true },
      Dr = parseFloat,
      Rr = parseInt,
      Fr = Er[typeof exports === "undefined" ? "undefined" : _typeof(exports)] && exports && !exports.nodeType ? exports : hr,
      Lr = Er[typeof module === "undefined" ? "undefined" : _typeof(module)] && module && !module.nodeType ? module : hr,
      zr = Lr && Lr.exports === Fr ? Fr : hr,
      Ur = I(Er[typeof self === "undefined" ? "undefined" : _typeof(self)] && self),
      Nr = I(Er[typeof window === "undefined" ? "undefined" : _typeof(window)] && window),
      $r = I(Er[_typeof(this)] && this),
      Pr = I(Fr && Lr && (typeof global === "undefined" ? "undefined" : _typeof(global)) == "object" && global) || Nr !== ($r && $r.window) && Nr || Ur || $r || Function("return this")(),
      Vr = Array.prototype,
      qr = Object.prototype,
      Cr = Function.prototype.toString,
      Tr = qr.hasOwnProperty,
      Kr = Cr.call(Object),
      Gr = qr.toString,
      Hr = RegExp("^" + Cr.call(Tr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Jr = zr ? Pr.Buffer : hr,
      Qr = Pr.Reflect,
      Xr = Pr.Symbol,
      Yr = Pr.Uint8Array,
      Zr = Qr ? Qr.f : hr,
      ne = Object.getOwnPropertySymbols,
      te = _typeof(te = Xr && Xr.iterator) == "symbol" ? te : hr,
      re = Object.create,
      ee = qr.propertyIsEnumerable,
      ue = Vr.splice,
      oe = Math.ceil,
      ie = Math.floor,
      fe = Object.getPrototypeOf,
      ce = Pr.isFinite,
      ae = Vr.join,
      le = Object.keys,
      se = Math.max,
      he = Math.min,
      pe = Math.random,
      ge = Vr.reverse,
      ve = rt(Pr, "DataView"),
      be = rt(Pr, "Map"),
      ye = rt(Pr, "Promise"),
      de = rt(Pr, "Set"),
      je = rt(Pr, "WeakMap"),
      _e = rt(Object, "create"),
      me = !ee.call({
    valueOf: 1 }, "valueOf"),
      Ae = _t(ve),
      we = _t(be),
      Oe = _t(ye),
      xe = _t(de),
      Ie = _t(je),
      Se = Xr ? Xr.prototype : hr,
      ke = Se ? Se.valueOf : hr,
      Be = Se ? Se.toString : hr;R.prototype.clear = function () {
    this.__data__ = _e ? _e(null) : {};
  }, R.prototype["delete"] = function (n) {
    return this.has(n) && delete this.__data__[n];
  }, R.prototype.get = function (n) {
    var t = this.__data__;return _e ? (n = t[n], "__lodash_hash_undefined__" === n ? hr : n) : Tr.call(t, n) ? t[n] : hr;
  }, R.prototype.has = function (n) {
    var t = this.__data__;return _e ? t[n] !== hr : Tr.call(t, n);
  }, R.prototype.set = function (n, t) {
    return this.__data__[n] = _e && t === hr ? "__lodash_hash_undefined__" : t, this;
  }, F.prototype.clear = function () {
    this.__data__ = [];
  }, F.prototype["delete"] = function (n) {
    var t = this.__data__;return n = V(t, n), 0 > n ? false : (n == t.length - 1 ? t.pop() : ue.call(t, n, 1), true);
  }, F.prototype.get = function (n) {
    var t = this.__data__;return n = V(t, n), 0 > n ? hr : t[n][1];
  }, F.prototype.has = function (n) {
    return -1 < V(this.__data__, n);
  }, F.prototype.set = function (n, t) {
    var r = this.__data__,
        e = V(r, n);return 0 > e ? r.push([n, t]) : r[e][1] = t, this;
  }, L.prototype.clear = function () {
    this.__data__ = { hash: new R(), map: new (be || F)(), string: new R() };
  }, L.prototype["delete"] = function (n) {
    return nt(this, n)["delete"](n);
  }, L.prototype.get = function (n) {
    return nt(this, n).get(n);
  }, L.prototype.has = function (n) {
    return nt(this, n).has(n);
  }, L.prototype.set = function (n, t) {
    return nt(this, n).set(n, t), this;
  }, z.prototype.add = z.prototype.push = function (n) {
    return this.__data__.set(n, "__lodash_hash_undefined__"), this;
  }, z.prototype.has = function (n) {
    return this.__data__.has(n);
  }, U.prototype.clear = function () {
    this.__data__ = new F();
  }, U.prototype["delete"] = function (n) {
    return this.__data__["delete"](n);
  }, U.prototype.get = function (n) {
    return this.__data__.get(n);
  }, U.prototype.has = function (n) {
    return this.__data__.has(n);
  }, U.prototype.set = function (n, t) {
    var r = this.__data__;return r instanceof F && 200 == r.__data__.length && (r = this.__data__ = new L(r.__data__)), r.set(n, t), this;
  };var Me = Kn(Z),
      We = Kn(nn, true),
      Ee = Gn(),
      De = Gn(true);Zr && !ee.call({ valueOf: 1 }, "valueOf") && (pn = function pn(n) {
    return B(Zr(n));
  });var Re = de && 1 / W(new de([, -0]))[1] == pr ? function (n) {
    return new de(n);
  } : lr,
      Fe = mn("length");ne || (et = function et() {
    return [];
  });var Le = ne ? function (n) {
    for (var t = []; n;) {
      s(t, et(n)), n = fe(Object(n));
    }return t;
  } : et;(ve && "[object DataView]" != ut(new ve(new ArrayBuffer(1))) || be && "[object Map]" != ut(new be()) || ye && "[object Promise]" != ut(ye.resolve()) || de && "[object Set]" != ut(new de()) || je && "[object WeakMap]" != ut(new je())) && (ut = function ut(n) {
    var t = Gr.call(n);if (n = (n = "[object Object]" == t ? n.constructor : hr) ? _t(n) : hr) switch (n) {case Ae:
        return "[object DataView]";case we:
        return "[object Map]";case Oe:
        return "[object Promise]";
      case xe:
        return "[object Set]";case Ie:
        return "[object WeakMap]";}return t;
  });var ze = Et(function (n) {
    var t = [];return tr(n).replace(yr, function (n, r, e, u) {
      t.push(e ? u.replace(jr, "$1") : r || n);
    }), t;
  }),
      Ue = Dt(function (n, t) {
    return zt(n) ? J(n, Y(t, 1, zt, true)) : [];
  }),
      Ne = Dt(function (n, t) {
    var r = Ot(t);return zt(r) && (r = hr), zt(n) ? J(n, Y(t, 1, zt, true), Zn(r)) : [];
  }),
      $e = Dt(function (n, t) {
    var r = Ot(t);return zt(r) && (r = hr), zt(n) ? J(n, Y(t, 1, zt, true), hr, r) : [];
  }),
      Pe = Dt(function (n) {
    var t = l(n, Ln);return t.length && t[0] === n[0] ? fn(t) : [];
  }),
      Ve = Dt(function (n) {
    var t = Ot(n),
        r = l(n, Ln);return t === Ot(r) ? t = hr : r.pop(), r.length && r[0] === n[0] ? fn(r, Zn(t)) : [];
  }),
      qe = Dt(function (n) {
    var t = Ot(n),
        r = l(n, Ln);return t === Ot(r) ? t = hr : r.pop(), r.length && r[0] === n[0] ? fn(r, hr, t) : [];
  }),
      Ce = Dt(xt),
      Te = Dt(function (n, t) {
    t = Y(t, 1);var r = n ? n.length : 0,
        e = T(n, t);return On(n, l(t, function (n) {
      return ht(n, r) ? +n : n;
    }).sort($n)), e;
  }),
      Ke = Dt(function (n) {
    return En(Y(n, 1, zt, true));
  }),
      Ge = Dt(function (n) {
    var t = Ot(n);return zt(t) && (t = hr), En(Y(n, 1, zt, true), Zn(t));
  }),
      He = Dt(function (n) {
    var t = Ot(n);return zt(t) && (t = hr), En(Y(n, 1, zt, true), hr, t);
  }),
      Je = Dt(function (n, t) {
    return zt(n) ? J(n, t) : [];
  }),
      Qe = Dt(function (n) {
    return Rn(f(n, zt));
  }),
      Xe = Dt(function (n) {
    var t = Ot(n);return zt(t) && (t = hr), Rn(f(n, zt), Zn(t));
  }),
      Ye = Dt(function (n) {
    var t = Ot(n);return zt(t) && (t = hr), Rn(f(n, zt), hr, t);
  }),
      Ze = Dt(It),
      nu = Dt(function (n) {
    var t = n.length,
        t = t > 1 ? n[t - 1] : hr,
        t = typeof t == "function" ? (n.pop(), t) : hr;return St(n, t);
  }),
      tu = Cn(function (n, t, r) {
    Tr.call(n, r) ? ++n[r] : n[r] = 1;
  }),
      ru = Cn(function (n, t, r) {
    Tr.call(n, r) ? n[r].push(t) : n[r] = [t];
  }),
      eu = Dt(function (n, t, e) {
    var u = -1,
        o = typeof t == "function",
        i = gt(t),
        f = Lt(n) ? Array(n.length) : [];
    return Me(n, function (n) {
      var c = o ? t : i && null != n ? n[t] : hr;f[++u] = c ? r(c, n, e) : an(n, t, e);
    }), f;
  }),
      uu = Cn(function (n, t, r) {
    n[r] = t;
  }),
      ou = Cn(function (n, t, r) {
    n[r ? 0 : 1].push(t);
  }, function () {
    return [[], []];
  }),
      iu = Dt(function (n, t) {
    if (null == n) return [];var r = t.length;return r > 1 && pt(n, t[0], t[1]) ? t = [] : r > 2 && pt(t[0], t[1], t[2]) && (t = [t[0]]), t = 1 == t.length && au(t[0]) ? t[0] : Y(t, 1, st), dn(n, t, []);
  });Et.Cache = L;var fu = Jn(function (n, t) {
    return n > t;
  }),
      cu = Jn(function (n, t) {
    return n >= t;
  }),
      au = Array.isArray,
      lu = Jr ? function (n) {
    return n instanceof Jr;
  } : fr(false),
      su = Jn(function (n, t) {
    return t > n;
  }),
      hu = Jn(function (n, t) {
    return t >= n;
  }),
      pu = Tn(function (n, t) {
    if (me || vt(t) || Lt(t)) Vn(t, ur(t), n);else for (var r in t) {
      Tr.call(t, r) && P(n, r, t[r]);
    }
  }),
      gu = Tn(function (n, t) {
    if (me || vt(t) || Lt(t)) Vn(t, or(t), n);else for (var r in t) {
      P(n, r, t[r]);
    }
  }),
      vu = Tn(function (n, t, r, e) {
    Vn(t, or(t), n, e);
  }),
      bu = Tn(function (n, t, r, e) {
    Vn(t, ur(t), n, e);
  }),
      yu = Dt(function (n, t) {
    return T(n, Y(t, 1));
  }),
      du = Dt(function (n) {
    return n.push(hr, N), r(vu, hr, n);
  }),
      ju = Dt(function (n) {
    return n.push(hr, yt), r(Ou, hr, n);
  }),
      _u = Hn(function (n, t, r) {
    n[t] = r;
  }, fr(cr)),
      mu = Hn(function (n, t, r) {
    Tr.call(n, t) ? n[t].push(r) : n[t] = [r];
  }, Zn),
      Au = Dt(an),
      wu = Tn(function (n, t, r) {
    yn(n, t, r);
  }),
      Ou = Tn(function (n, t, r, e) {
    yn(n, t, r, e);
  }),
      xu = Dt(function (n, t) {
    return null == n ? {} : (t = l(Y(t, 1), jt), jn(n, J(en(n, or, Le), t)));
  }),
      Iu = Dt(function (n, t) {
    return null == n ? {} : jn(n, l(Y(t, 1), jt));
  }),
      Su = Qn(ur),
      ku = Qn(or);D.assign = pu, D.assignIn = gu, D.assignInWith = vu, D.assignWith = bu, D.at = yu, D.castArray = function () {
    if (!arguments.length) return [];var n = arguments[0];return au(n) ? n : [n];
  }, D.chunk = function (n, t, r) {
    if (t = (r ? pt(n, t, r) : t === hr) ? 1 : se(Xt(t), 0), r = n ? n.length : 0, !r || 1 > t) return [];for (var e = 0, u = 0, o = Array(oe(r / t)); r > e;) {
      o[u++] = Sn(n, e, e += t);
    }return o;
  }, D.compact = function (n) {
    for (var t = -1, r = n ? n.length : 0, e = 0, u = []; ++t < r;) {
      var o = n[t];o && (u[e++] = o);
    }return u;
  }, D.concat = function () {
    for (var n = arguments.length, t = Array(n ? n - 1 : 0), r = arguments[0], e = n; e--;) {
      t[e - 1] = arguments[e];
    }return n ? s(au(r) ? Pn(r) : [r], Y(t, 1)) : [];
  }, D.constant = fr, D.countBy = tu, D.create = function (n, t) {
    var r = H(n);return t ? C(r, t) : r;
  }, D.defaults = du, D.defaultsDeep = ju, D.difference = Ue, D.differenceBy = Ne, D.differenceWith = $e, D.drop = mt, D.dropRight = At, D.dropRightWhile = function (n, t) {
    return n && n.length ? Dn(n, Zn(t, 3), true, true) : [];
  }, D.dropWhile = function (n, t) {
    return n && n.length ? Dn(n, Zn(t, 3), true) : [];
  }, D.fill = function (n, t, r, e) {
    var u = n ? n.length : 0;if (!u) return [];for (r && typeof r != "number" && pt(n, t, r) && (r = 0, e = u), u = n.length, r = Xt(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === hr || e > u ? u : Xt(e), 0 > e && (e += u), e = r > e ? 0 : Yt(e); e > r;) {
      n[r++] = t;
    }return n;
  }, D.filter = function (n, t) {
    return (au(n) ? f : X)(n, Zn(t, 3));
  }, D.flatMap = function (n, t) {
    return Y(Mt(n, t), 1);
  }, D.flatMapDeep = function (n, t) {
    return Y(Mt(n, t), pr);
  }, D.flatMapDepth = function (n, t, r) {
    return r = r === hr ? 1 : Xt(r), Y(Mt(n, t), r);
  }, D.flatten = function (n) {
    return n && n.length ? Y(n, 1) : [];
  }, D.flattenDeep = function (n) {
    return n && n.length ? Y(n, pr) : [];
  }, D.flattenDepth = function (n, t) {
    return n && n.length ? (t = t === hr ? 1 : Xt(t), Y(n, t)) : [];
  }, D.fromPairs = function (n) {
    for (var t = -1, r = n ? n.length : 0, e = {}; ++t < r;) {
      var u = n[t];e[u[0]] = u[1];
    }return e;
  }, D.functions = function (n) {
    return null == n ? [] : tn(n, ur(n));
  }, D.functionsIn = function (n) {
    return null == n ? [] : tn(n, or(n));
  }, D.groupBy = ru, D.initial = function (n) {
    return At(n, 1);
  }, D.intersection = Pe, D.intersectionBy = Ve, D.intersectionWith = qe, D.invert = _u, D.invertBy = mu, D.invokeMap = eu, D.iteratee = ar, D.keyBy = uu, D.keys = ur, D.keysIn = or, D.map = Mt, D.mapKeys = function (n, t) {
    var r = {};return t = Zn(t, 3), Z(n, function (n, e, u) {
      r[t(n, e, u)] = n;
    }), r;
  }, D.mapValues = function (n, t) {
    var r = {};return t = Zn(t, 3), Z(n, function (n, e, u) {
      r[e] = t(n, e, u);
    }), r;
  }, D.memoize = Et, D.merge = wu, D.mergeWith = Ou, D.omit = xu, D.omitBy = function (n, t) {
    return t = Zn(t), _n(n, function (n, r) {
      return !t(n, r);
    });
  }, D.orderBy = function (n, t, r, e) {
    return null == n ? [] : (au(t) || (t = null == t ? [] : [t]), r = e ? hr : r, au(r) || (r = null == r ? [] : [r]), dn(n, t, r));
  }, D.partition = ou, D.pick = Iu, D.pickBy = function (n, t) {
    return null == n ? {} : _n(n, Zn(t));
  }, D.property = sr, D.pull = Ce, D.pullAll = xt, D.pullAllBy = function (n, t, r) {
    return n && n.length && t && t.length ? wn(n, t, Zn(r)) : n;
  }, D.pullAllWith = function (n, t, r) {
    return n && n.length && t && t.length ? wn(n, t, hr, r) : n;
  }, D.pullAt = Te, D.reject = function (n, t) {
    var r = au(n) ? f : X;return t = Zn(t, 3), r(n, function (n, r, e) {
      return !t(n, r, e);
    });
  }, D.remove = function (n, t) {
    var r = [];
    if (!n || !n.length) return r;var e = -1,
        u = [],
        o = n.length;for (t = Zn(t, 3); ++e < o;) {
      var i = n[e];t(i, e, n) && (r.push(i), u.push(e));
    }return On(n, u), r;
  }, D.rest = Dt, D.reverse = function (n) {
    return n ? ge.call(n) : n;
  }, D.sampleSize = Wt, D.set = function (n, t, r) {
    return null == n ? n : In(n, t, r);
  }, D.setWith = function (n, t, r, e) {
    return e = typeof e == "function" ? e : hr, null == n ? n : In(n, t, r, e);
  }, D.shuffle = function (n) {
    return Wt(n, 4294967295);
  }, D.slice = function (n, t, r) {
    var e = n ? n.length : 0;return e ? (r && typeof r != "number" && pt(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Xt(t), r = r === hr ? e : Xt(r)), Sn(n, t, r)) : [];
  }, D.sortBy = iu, D.sortedUniq = function (n) {
    return n && n.length ? Wn(n) : [];
  }, D.sortedUniqBy = function (n, t) {
    return n && n.length ? Wn(n, Zn(t)) : [];
  }, D.tail = function (n) {
    return mt(n, 1);
  }, D.take = function (n, t, r) {
    return n && n.length ? (t = r || t === hr ? 1 : Xt(t), Sn(n, 0, 0 > t ? 0 : t)) : [];
  }, D.takeRight = function (n, t, r) {
    var e = n ? n.length : 0;return e ? (t = r || t === hr ? 1 : Xt(t), t = e - t, Sn(n, 0 > t ? 0 : t, e)) : [];
  }, D.takeRightWhile = function (n, t) {
    return n && n.length ? Dn(n, Zn(t, 3), false, true) : [];
  }, D.takeWhile = function (n, t) {
    return n && n.length ? Dn(n, Zn(t, 3)) : [];
  }, D.toArray = Jt, D.toPairs = Su, D.toPairsIn = ku, D.toPlainObject = nr, D.transform = function (n, t, r) {
    var e = au(n) || Ht(n);if (t = Zn(t, 4), null == r) if (e || Pt(n)) {
      var o = n.constructor;r = e ? au(n) ? new o() : [] : Ut(o) ? H(fe(Object(n))) : {};
    } else r = {};return (e ? u : Z)(n, function (n, e, u) {
      return t(r, n, e, u);
    }), r;
  }, D.union = Ke, D.unionBy = Ge, D.unionWith = He, D.uniq = function (n) {
    return n && n.length ? En(n) : [];
  }, D.uniqBy = function (n, t) {
    return n && n.length ? En(n, Zn(t)) : [];
  }, D.uniqWith = function (n, t) {
    return n && n.length ? En(n, hr, t) : [];
  }, D.unset = function (n, t) {
    var r;
    if (null == n) r = true;else {
      r = n;var e = t,
          e = gt(e, r) ? [e] : zn(e);r = dt(r, e), e = jt(Ot(e)), r = !(null != r && un(r, e)) || delete r[e];
    }return r;
  }, D.unzip = It, D.unzipWith = St, D.update = function (n, t, r) {
    return null == n ? n : In(n, t, (typeof r == "function" ? r : cr)(rn(n, t)), void 0);
  }, D.updateWith = function (n, t, r, e) {
    return e = typeof e == "function" ? e : hr, null != n && (n = In(n, t, (typeof r == "function" ? r : cr)(rn(n, t)), e)), n;
  }, D.values = ir, D.valuesIn = function (n) {
    return null == n ? [] : O(n, or(n));
  }, D.without = Je, D.xor = Qe, D.xorBy = Xe, D.xorWith = Ye, D.zip = Ze, D.zipObject = function (n, t) {
    return Fn(n || [], t || [], P);
  }, D.zipObjectDeep = function (n, t) {
    return Fn(n || [], t || [], In);
  }, D.zipWith = nu, D.entries = Su, D.entriesIn = ku, D.extend = gu, D.extendWith = vu, D.clamp = function (n, t, r) {
    return r === hr && (r = t, t = hr), r !== hr && (r = Zt(r), r = r === r ? r : 0), t !== hr && (t = Zt(t), t = t === t ? t : 0), K(Zt(n), t, r);
  }, D.clone = function (n) {
    return G(n, false, true);
  }, D.cloneDeep = function (n) {
    return G(n, true, true);
  }, D.cloneDeepWith = function (n, t) {
    return G(n, true, true, t);
  }, D.cloneWith = function (n, t) {
    return G(n, false, true, t);
  }, D.eq = Rt, D.every = function (n, t, r) {
    var e = au(n) ? i : Q;
    return r && pt(n, t, r) && (t = hr), e(n, Zn(t, 3));
  }, D.find = function (n, t) {
    if (t = Zn(t, 3), au(n)) {
      var r = b(n, t);return r > -1 ? n[r] : hr;
    }return v(n, t, Me);
  }, D.findIndex = function (n, t) {
    return n && n.length ? b(n, Zn(t, 3)) : -1;
  }, D.findKey = function (n, t) {
    return v(n, Zn(t, 3), Z, true);
  }, D.findLast = function (n, t) {
    if (t = Zn(t, 3), au(n)) {
      var r = b(n, t, true);return r > -1 ? n[r] : hr;
    }return v(n, t, We);
  }, D.findLastIndex = function (n, t) {
    return n && n.length ? b(n, Zn(t, 3), true) : -1;
  }, D.findLastKey = function (n, t) {
    return v(n, Zn(t, 3), nn, true);
  }, D.forEach = kt, D.forEachRight = Bt, D.forIn = function (n, t) {
    return null == n ? n : Ee(n, Zn(t, 3), or);
  }, D.forInRight = function (n, t) {
    return null == n ? n : De(n, Zn(t, 3), or);
  }, D.forOwn = function (n, t) {
    return n && Z(n, Zn(t, 3));
  }, D.forOwnRight = function (n, t) {
    return n && nn(n, Zn(t, 3));
  }, D.get = rr, D.gt = fu, D.gte = cu, D.has = function (n, t) {
    return null != n && ot(n, t, un);
  }, D.hasIn = er, D.head = wt, D.identity = cr, D.includes = function (n, t, r, e) {
    return n = Lt(n) ? n : ir(n), r = r && !e ? Xt(r) : 0, e = n.length, 0 > r && (r = se(e + r, 0)), Kt(n) ? e >= r && -1 < n.indexOf(t, r) : !!e && -1 < y(n, t, r);
  }, D.indexOf = function (n, t, r) {
    var e = n ? n.length : 0;return e ? (r = Xt(r), 0 > r && (r = se(e + r, 0)), y(n, t, r)) : -1;
  }, D.inRange = function (n, t, r) {
    return t = Zt(t) || 0, r === hr ? (r = t, t = 0) : r = Zt(r) || 0, n = Zt(n), n >= he(t, r) && n < se(t, r);
  }, D.invoke = Au, D.isArguments = Ft, D.isArray = au, D.isArrayBuffer = function (n) {
    return Vt(n) && "[object ArrayBuffer]" == Gr.call(n);
  }, D.isArrayLike = Lt, D.isArrayLikeObject = zt, D.isBoolean = function (n) {
    return true === n || false === n || Vt(n) && "[object Boolean]" == Gr.call(n);
  }, D.isBuffer = lu, D.isDate = function (n) {
    return Vt(n) && "[object Date]" == Gr.call(n);
  }, D.isElement = function (n) {
    return !!n && 1 === n.nodeType && Vt(n) && !Tt(n);
  }, D.isEmpty = function (n) {
    if (Lt(n) && (au(n) || Kt(n) || Ut(n.splice) || Ft(n) || lu(n))) return !n.length;if (Vt(n)) {
      var t = ut(n);if ("[object Map]" == t || "[object Set]" == t) return !n.size;
    }for (var r in n) {
      if (Tr.call(n, r)) return false;
    }return !(me && ur(n).length);
  }, D.isEqual = function (n, t) {
    return ln(n, t);
  }, D.isEqualWith = function (n, t, r) {
    var e = (r = typeof r == "function" ? r : hr) ? r(n, t) : hr;return e === hr ? ln(n, t, r) : !!e;
  }, D.isError = function (n) {
    return Vt(n) ? "[object Error]" == Gr.call(n) || typeof n.message == "string" && typeof n.name == "string" : false;
  }, D.isFinite = function (n) {
    return typeof n == "number" && ce(n);
  }, D.isFunction = Ut, D.isInteger = Nt, D.isLength = $t, D.isMap = function (n) {
    return Vt(n) && "[object Map]" == ut(n);
  }, D.isMatch = function (n, t) {
    return n === t || sn(n, t, tt(t));
  }, D.isMatchWith = function (n, t, r) {
    return r = typeof r == "function" ? r : hr, sn(n, t, tt(t), r);
  }, D.isNaN = function (n) {
    return Ct(n) && n != +n;
  }, D.isNative = qt, D.isNil = function (n) {
    return null == n;
  }, D.isNull = function (n) {
    return null === n;
  }, D.isNumber = Ct, D.isObject = Pt, D.isObjectLike = Vt, D.isPlainObject = Tt, D.isRegExp = function (n) {
    return Pt(n) && "[object RegExp]" == Gr.call(n);
  }, D.isSafeInteger = function (n) {
    return Nt(n) && n >= -9007199254740991 && 9007199254740991 >= n;
  }, D.isSet = function (n) {
    return Vt(n) && "[object Set]" == ut(n);
  }, D.isString = Kt, D.isSymbol = Gt, D.isTypedArray = Ht, D.isUndefined = function (n) {
    return n === hr;
  }, D.isWeakMap = function (n) {
    return Vt(n) && "[object WeakMap]" == ut(n);
  }, D.isWeakSet = function (n) {
    return Vt(n) && "[object WeakSet]" == Gr.call(n);
  }, D.join = function (n, t) {
    return n ? ae.call(n, t) : "";
  }, D.last = Ot, D.lastIndexOf = function (n, t, r) {
    var e = n ? n.length : 0;
    if (!e) return -1;var u = e;if (r !== hr && (u = Xt(r), u = (0 > u ? se(e + u, 0) : he(u, e - 1)) + 1), t !== t) return S(n, u, true);for (; u--;) {
      if (n[u] === t) return u;
    }return -1;
  }, D.lt = su, D.lte = hu, D.nth = function (n, t) {
    var r;if (n && n.length) {
      r = Xt(t);var e = n.length;e ? (r += 0 > r ? e : 0, r = ht(r, e) ? n[r] : hr) : r = void 0;
    } else r = hr;return r;
  }, D.noop = lr, D.random = function (n, t, r) {
    if (r && typeof r != "boolean" && pt(n, t, r) && (t = r = hr), r === hr && (typeof t == "boolean" ? (r = t, t = hr) : typeof n == "boolean" && (r = n, n = hr)), n === hr && t === hr ? (n = 0, t = 1) : (n = Zt(n) || 0, t === hr ? (t = n, n = 0) : t = Zt(t) || 0), n > t) {
      var e = n;n = t, t = e;
    }return r || n % 1 || t % 1 ? (r = pe(), he(n + r * (t - n + Dr("1e-" + ((r + "").length - 1))), t)) : xn(n, t);
  }, D.reduce = function (n, t, r) {
    var e = au(n) ? h : j,
        u = 3 > arguments.length;return e(n, Zn(t, 4), r, u, Me);
  }, D.reduceRight = function (n, t, r) {
    var e = au(n) ? p : j,
        u = 3 > arguments.length;return e(n, Zn(t, 4), r, u, We);
  }, D.result = function (n, t, r) {
    t = gt(t, n) ? [t] : zn(t);var e = -1,
        u = t.length;for (u || (n = hr, u = 1); ++e < u;) {
      var o = null == n ? hr : n[jt(t[e])];o === hr && (e = u, o = r), n = Ut(o) ? o.call(n) : o;
    }return n;
  }, D.sample = function (n) {
    n = Lt(n) ? n : ir(n);var t = n.length;
    return t > 0 ? n[xn(0, t - 1)] : hr;
  }, D.size = function (n) {
    if (null == n) return 0;if (Lt(n)) {
      var t = n.length;if (t && Kt(n)) {
        if (n && Br.test(n)) {
          for (t = kr.lastIndex = 0; kr.test(n);) {
            t++;
          }n = t;
        } else n = n.length;
      } else n = t;return n;
    }return Vt(n) && (t = ut(n), "[object Map]" == t || "[object Set]" == t) ? n.size : ur(n).length;
  }, D.some = function (n, t, r) {
    var e = au(n) ? g : kn;return r && pt(n, t, r) && (t = hr), e(n, Zn(t, 3));
  }, D.sortedIndex = function (n, t) {
    return Bn(n, t);
  }, D.sortedIndexBy = function (n, t, r) {
    return Mn(n, t, Zn(r));
  }, D.sortedIndexOf = function (n, t) {
    var r = n ? n.length : 0;
    if (r) {
      var e = Bn(n, t);if (r > e && Rt(n[e], t)) return e;
    }return -1;
  }, D.sortedLastIndex = function (n, t) {
    return Bn(n, t, true);
  }, D.sortedLastIndexBy = function (n, t, r) {
    return Mn(n, t, Zn(r), true);
  }, D.sortedLastIndexOf = function (n, t) {
    if (n && n.length) {
      var r = Bn(n, t, true) - 1;if (Rt(n[r], t)) return r;
    }return -1;
  }, D.toFinite = Qt, D.toInteger = Xt, D.toLength = Yt, D.toNumber = Zt, D.toSafeInteger = function (n) {
    return K(Xt(n), -9007199254740991, 9007199254740991);
  }, D.toString = tr, D.each = kt, D.eachRight = Bt, D.first = wt, D.VERSION = "4.12.0", (Nr || Ur || {})._ = D, typeof define == "function" && _typeof(define.amd) == "object" && define.amd ? define(function () {
    return D;
  }) : Fr && Lr ? (zr && ((Lr.exports = D)._ = D), Fr._ = D) : Pr._ = D;
}).call(undefined);;
;(function () {
  'use strict';

  var module = angular.module("ng-access-control", []);
  module.factory('ngAcl', ngAcl);
  var service = {};
  var _permissions = [];
  var _userRoles = [];
  var _currentRole = void 0;
  ngAcl.$inject = [];

  function ngAcl() {

    service = {
      populatePermission: function populatePermission(permission) {
        _permissions = _.compact(_permissions.concat(permission));
      },
      getPermission: function getPermission() {
        return _permissions;
      },
      extractPermission: _objectExtractor,
      getUserCurrentRole: function getUserCurrentRole() {
        return _currentRole;
      },
      populateUserRoles: function populateUserRoles(roles) {
        _userRoles = _.compact(_userRoles.concat(roles));
      },
      setCurrentRole: function setCurrentRole(role) {
        var incomingRoleIsInUserRoles = _.includes(_userRoles, role);
        if (!incomingRoleIsInUserRoles) {
          throw new Error('Current role does not exist in user roles');
        }
        _currentRole = role;
      },
      getSelfOrGlobalPermission: function getSelfOrGlobalPermission(permission, isAuthor) {
        var _permissions = _.find(service.getPermission(), { name: _currentRole });
        var keys = _.first(permission.split('.'));
        var allowed = service.extractPermission(_permissions, "_permissions." + keys);
        return isAuthor ? allowed.__self : allowed.__global;
      },
      canUpdate: function canUpdate(data, mode) {
        //let currentRole = service.getUserCurrentRole();
        //_canUpdate(data, mode, currentRole);
      }

    };

    return service;
  }

  function _objectExtractor(base, key) {
    var tmpKeys = key.split('.');
    var firstKey = tmpKeys[0];
    if (!firstKey) return base;
    return _objectExtractor(base[firstKey], _.tail(tmpKeys).join('.'));
  }

  function _canUpdate(data, mode, currentRole) {
    var isAuthor = data.isAuthor;
    var updateData = _.omit(_.clone(data), 'isAuthor');
    for (var key in updateData) {
      if (_.isPlainObject(updateData[key])) {
        var basePlusKey = "_permissions." + key;
        updateData[key] = _checkChildObject(basePlusKey, updateData[key], isAuthor);
      }
      //Fixme
    }
  }

  function _checkChildObject(baseKey, childObject, isAuthor) {
    var _permissions = _.find(service.getPermission(), { name: _currentRole });
    for (var key in childObject) {
      if (_.isPlainObject(childObject[key])) {
        childObject[key] = _checkChildObject(key, childObject[key]);
      } else {
        var basePlusKey = baseKey + "." + key;
        var allowed = service.extractPermission(_permissions, basePlusKey);
        //Fixme
      }
    }
  }
})();;;(function () {

  'use strict';

  var module = angular.module('ng-access-control');
  module.directive('acl', acl);

  acl.$inject = ['ngAcl'];

  function acl(ngAcl) {
    return {
      priority: 1001, // compiles first
      restrict: 'A',
      scope: {
        acl: '@',
        mode: '@',
        isAuthor: '='
      },
      link: function link(scope, element) {
        var userRole = ngAcl.getUserCurrentRole();
        var permissions = _.find(ngAcl.getPermission(), { name: userRole });
        var seekingPermission = "permissions." + scope.acl;
        var allowed = ngAcl.extractPermission(permissions, seekingPermission);
        var generalPermission = ngAcl.getSelfOrGlobalPermission(scope.acl, !!scope.isAuthor);
        var options = {
          mode: scope.mode,
          allowed: scope.isAuthor ? generalPermission : allowed,
          generalPermission: generalPermission
        };
        var decider = permissionDecider(options);
        if (decider.remove) {
          element.remove();
        }
        if (!decider.remove && decider.disable) {
          $(element).attr('disabled', true);
        }
      }
    };

    function permissionDecider(options) {
      var remove = void 0,
          disable = void 0;
      var mode = options.mode || 'READ';
      remove = !(_.pick(options.allowed, 'READ') === undefined ? options.generalPermission['READ'] : options.allowed['READ']);
      disable = !(!remove ? _.pick(options.allowed, mode) === undefined ? options.generalPermission[mode] : options.allowed[mode] : false);
      return { remove: remove, disable: disable };
    }
  }
})();
//# sourceMappingURL=ng-access-control.js.map
