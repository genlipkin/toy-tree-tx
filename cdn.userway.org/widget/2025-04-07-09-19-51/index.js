! function() {
    "use strict";
    var e, t, n, i, r, a, o, s, l, u, c, d = {},
        f = [],
        g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        h = Array.isArray;

    function _(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function p(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function v(t, n, i) {
        var r, a, o, s = {};
        for (o in n) "key" == o ? r = n[o] : "ref" == o ? a = n[o] : s[o] = n[o];
        if (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : i), "function" == typeof t && null != t.defaultProps)
            for (o in t.defaultProps) void 0 === s[o] && (s[o] = t.defaultProps[o]);
        return m(t, s, r, a, null)
    }

    function m(e, i, r, a, o) {
        var s = {
            type: e,
            props: i,
            key: r,
            ref: a,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: null == o ? ++n : o,
            __i: -1,
            __u: 0
        };
        return null == o && null != t.vnode && t.vnode(s), s
    }

    function w(e) {
        return e.children
    }

    function y(e, t) {
        this.props = e, this.context = t
    }

    function b(e, t) {
        if (null == t) return e.__ ? b(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? b(e) : null
    }

    function x(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) {
                    e.__e = e.__c.base = n.__e;
                    break
                }
            return x(e)
        }
    }

    function k(e) {
        (!e.__d && (e.__d = !0) && i.push(e) && !S.__r++ || r !== t.debounceRendering) && ((r = t.debounceRendering) || a)(S)
    }

    function S() {
        var e, n, r, a, s, l, u, c;
        for (i.sort(o); e = i.shift();) e.__d && (n = i.length, a = void 0, l = (s = (r = e).__v).__e, u = [], c = [], r.__P && ((a = _({}, s)).__v = s.__v + 1, t.vnode && t.vnode(a), O(r.__P, a, s, r.__n, r.__P.namespaceURI, 32 & s.__u ? [l] : null, u, null == l ? b(s) : l, !!(32 & s.__u), c), a.__v = s.__v, a.__.__k[a.__i] = a, R(u, a, c), a.__e != l && x(a)), i.length > n && i.sort(o));
        S.__r = 0
    }

    function C(e, t, n, i, r, a, o, s, l, u, c) {
        var g, _, p, v, y, x = i && i.__k || f,
            k = t.length;
        for (n.__d = l, function(e, t, n) {
                var i, r, a, o, s, l = t.length,
                    u = n.length,
                    c = u,
                    d = 0;
                for (e.__k = [], i = 0; i < l; i++) null != (r = t[i]) && "boolean" != typeof r && "function" != typeof r ? (o = i + d, (r = e.__k[i] = "string" == typeof r || "number" == typeof r || "bigint" == typeof r || r.constructor == String ? m(null, r, null, null, null) : h(r) ? m(w, {
                    children: r
                }, null, null, null) : void 0 === r.constructor && r.__b > 0 ? m(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r).__ = e, r.__b = e.__b + 1, a = null, -1 !== (s = r.__i = L(r, n, o, c)) && (c--, (a = n[s]) && (a.__u |= 131072)), null == a || null === a.__v ? (-1 == s && d--, "function" != typeof r.type && (r.__u |= 65536)) : s !== o && (s == o - 1 ? d-- : s == o + 1 ? d++ : (s > o ? d-- : d++, r.__u |= 65536))) : r = e.__k[i] = null;
                if (c)
                    for (i = 0; i < u; i++) null != (a = n[i]) && !(131072 & a.__u) && (a.__e == e.__d && (e.__d = b(a)), D(a, a))
            }(n, t, x), l = n.__d, g = 0; g < k; g++) null != (p = n.__k[g]) && (_ = -1 === p.__i ? d : x[p.__i] || d, p.__i = g, O(e, p, _, r, a, o, s, l, u, c), v = p.__e, p.ref && _.ref != p.ref && (_.ref && I(_.ref, null, p), c.push(p.ref, p.__c || v, p)), null == y && null != v && (y = v), 65536 & p.__u || _.__k === p.__k ? l = T(p, l, e) : "function" == typeof p.type && void 0 !== p.__d ? l = p.__d : v && (l = v.nextSibling), p.__d = void 0, p.__u &= -196609);
        n.__d = l, n.__e = y
    }

    function T(e, t, n) {
        var i, r;
        if ("function" == typeof e.type) {
            for (i = e.__k, r = 0; i && r < i.length; r++) i[r] && (i[r].__ = e, t = T(i[r], t, n));
            return t
        }
        e.__e != t && (t && e.type && !n.contains(t) && (t = b(e)), n.insertBefore(e.__e, t || null), t = e.__e);
        do {
            t = t && t.nextSibling
        } while (null != t && 8 === t.nodeType);
        return t
    }

    function N(e, t) {
        return t = t || [], null == e || "boolean" == typeof e || (h(e) ? e.some((function(e) {
            N(e, t)
        })) : t.push(e)), t
    }

    function L(e, t, n, i) {
        var r = e.key,
            a = e.type,
            o = n - 1,
            s = n + 1,
            l = t[n];
        if (null === l || l && r == l.key && a === l.type && !(131072 & l.__u)) return n;
        if (i > (null == l || 131072 & l.__u ? 0 : 1))
            for (; o >= 0 || s < t.length;) {
                if (o >= 0) {
                    if ((l = t[o]) && !(131072 & l.__u) && r == l.key && a === l.type) return o;
                    o--
                }
                if (s < t.length) {
                    if ((l = t[s]) && !(131072 & l.__u) && r == l.key && a === l.type) return s;
                    s++
                }
            }
        return -1
    }

    function A(e, t, n) {
        "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || g.test(t) ? n : n + "px"
    }

    function P(e, t, n, i, r) {
        var a;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if ("string" == typeof i && (e.style.cssText = i = ""), i)
                    for (t in i) n && t in n || A(e.style, t, "");
                if (n)
                    for (t in n) i && n[t] === i[t] || A(e.style, t, n[t])
            }
        else if ("o" === t[0] && "n" === t[1]) a = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + a] = n, n ? i ? n.u = i.u : (n.u = s, e.addEventListener(t, a ? u : l, a)) : e.removeEventListener(t, a ? u : l, a);
        else {
            if ("http://www.w3.org/2000/svg" == r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if ("width" != t && "height" != t && "href" != t && "list" != t && "form" != t && "tabIndex" != t && "download" != t && "rowSpan" != t && "colSpan" != t && "role" != t && "popover" != t && t in e) try {
                e[t] = null == n ? "" : n;
                break e
            } catch (e) {}
            "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, "popover" == t && 1 == n ? "" : n))
        }
    }

    function E(e) {
        return function(n) {
            if (this.l) {
                var i = this.l[n.type + e];
                if (null == n.t) n.t = s++;
                else if (n.t < i.u) return;
                return i(t.event ? t.event(n) : n)
            }
        }
    }

    function O(e, n, i, r, a, o, s, l, u, c) {
        var d, f, g, p, v, m, b, x, k, S, T, N, L, A, P, E, O = n.type;
        if (void 0 !== n.constructor) return null;
        128 & i.__u && (u = !!(32 & i.__u), o = [l = n.__e = i.__e]), (d = t.__b) && d(n);
        e: if ("function" == typeof O) try {
            if (x = n.props, k = "prototype" in O && O.prototype.render, S = (d = O.contextType) && r[d.__c], T = d ? S ? S.props.value : d.__ : r, i.__c ? b = (f = n.__c = i.__c).__ = f.__E : (k ? n.__c = f = new O(x, T) : (n.__c = f = new y(x, T), f.constructor = O, f.render = H), S && S.sub(f), f.props = x, f.state || (f.state = {}), f.context = T, f.__n = r, g = f.__d = !0, f.__h = [], f._sb = []), k && null == f.__s && (f.__s = f.state), k && null != O.getDerivedStateFromProps && (f.__s == f.state && (f.__s = _({}, f.__s)), _(f.__s, O.getDerivedStateFromProps(x, f.__s))), p = f.props, v = f.state, f.__v = n, g) k && null == O.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), k && null != f.componentDidMount && f.__h.push(f.componentDidMount);
            else {
                if (k && null == O.getDerivedStateFromProps && x !== p && null != f.componentWillReceiveProps && f.componentWillReceiveProps(x, T), !f.__e && (null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(x, f.__s, T) || n.__v === i.__v)) {
                    for (n.__v !== i.__v && (f.props = x, f.state = f.__s, f.__d = !1), n.__e = i.__e, n.__k = i.__k, n.__k.some((function(e) {
                            e && (e.__ = n)
                        })), N = 0; N < f._sb.length; N++) f.__h.push(f._sb[N]);
                    f._sb = [], f.__h.length && s.push(f);
                    break e
                }
                null != f.componentWillUpdate && f.componentWillUpdate(x, f.__s, T), k && null != f.componentDidUpdate && f.__h.push((function() {
                    f.componentDidUpdate(p, v, m)
                }))
            }
            if (f.context = T, f.props = x, f.__P = e, f.__e = !1, L = t.__r, A = 0, k) {
                for (f.state = f.__s, f.__d = !1, L && L(n), d = f.render(f.props, f.state, f.context), P = 0; P < f._sb.length; P++) f.__h.push(f._sb[P]);
                f._sb = []
            } else
                do {
                    f.__d = !1, L && L(n), d = f.render(f.props, f.state, f.context), f.state = f.__s
                } while (f.__d && ++A < 25);
            f.state = f.__s, null != f.getChildContext && (r = _(_({}, r), f.getChildContext())), k && !g && null != f.getSnapshotBeforeUpdate && (m = f.getSnapshotBeforeUpdate(p, v)), C(e, h(E = null != d && d.type === w && null == d.key ? d.props.children : d) ? E : [E], n, i, r, a, o, s, l, u, c), f.base = n.__e, n.__u &= -161, f.__h.length && s.push(f), b && (f.__E = f.__ = null)
        } catch (e) {
            if (n.__v = null, u || null != o) {
                for (n.__u |= u ? 160 : 128; l && 8 === l.nodeType && l.nextSibling;) l = l.nextSibling;
                o[o.indexOf(l)] = null, n.__e = l
            } else n.__e = i.__e, n.__k = i.__k;
            t.__e(e, n, i)
        } else null == o && n.__v === i.__v ? (n.__k = i.__k, n.__e = i.__e) : n.__e = M(i.__e, n, i, r, a, o, s, u, c);
        (d = t.diffed) && d(n)
    }

    function R(e, n, i) {
        n.__d = void 0;
        for (var r = 0; r < i.length; r++) I(i[r], i[++r], i[++r]);
        t.__c && t.__c(n, e), e.some((function(n) {
            try {
                e = n.__h, n.__h = [], e.some((function(e) {
                    e.call(n)
                }))
            } catch (e) {
                t.__e(e, n.__v)
            }
        }))
    }

    function M(n, i, r, a, o, s, l, u, c) {
        var f, g, _, v, m, w, y, x = r.props,
            k = i.props,
            S = i.type;
        if ("svg" === S ? o = "http://www.w3.org/2000/svg" : "math" === S ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), null != s)
            for (f = 0; f < s.length; f++)
                if ((m = s[f]) && "setAttribute" in m == !!S && (S ? m.localName === S : 3 === m.nodeType)) {
                    n = m, s[f] = null;
                    break
                }
        if (null == n) {
            if (null === S) return document.createTextNode(k);
            n = document.createElementNS(o, S, k.is && k), u && (t.__m && t.__m(i, s), u = !1), s = null
        }
        if (null === S) x === k || u && n.data === k || (n.data = k);
        else {
            if (s = s && e.call(n.childNodes), x = r.props || d, !u && null != s)
                for (x = {}, f = 0; f < n.attributes.length; f++) x[(m = n.attributes[f]).name] = m.value;
            for (f in x)
                if (m = x[f], "children" == f);
                else if ("dangerouslySetInnerHTML" == f) _ = m;
            else if (!(f in k)) {
                if ("value" == f && "defaultValue" in k || "checked" == f && "defaultChecked" in k) continue;
                P(n, f, null, m, o)
            }
            for (f in k) m = k[f], "children" == f ? v = m : "dangerouslySetInnerHTML" == f ? g = m : "value" == f ? w = m : "checked" == f ? y = m : u && "function" != typeof m || x[f] === m || P(n, f, m, x[f], o);
            if (g) u || _ && (g.__html === _.__html || g.__html === n.innerHTML) || (n.innerHTML = g.__html), i.__k = [];
            else if (_ && (n.innerHTML = ""), C(n, h(v) ? v : [v], i, r, a, "foreignObject" === S ? "http://www.w3.org/1999/xhtml" : o, s, l, s ? s[0] : r.__k && b(r, 0), u, c), null != s)
                for (f = s.length; f--;) p(s[f]);
            u || (f = "value", "progress" === S && null == w ? n.removeAttribute("value") : void 0 !== w && (w !== n[f] || "progress" === S && !w || "option" === S && w !== x[f]) && P(n, f, w, x[f], o), f = "checked", void 0 !== y && y !== n[f] && P(n, f, y, x[f], o))
        }
        return n
    }

    function I(e, n, i) {
        try {
            if ("function" == typeof e) {
                var r = "function" == typeof e.__u;
                r && e.__u(), r && null == n || (e.__u = e(n))
            } else e.current = n
        } catch (e) {
            t.__e(e, i)
        }
    }

    function D(e, n, i) {
        var r, a;
        if (t.unmount && t.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || I(r, null, n)), null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount()
            } catch (e) {
                t.__e(e, n)
            }
            r.base = r.__P = null
        }
        if (r = e.__k)
            for (a = 0; a < r.length; a++) r[a] && D(r[a], n, i || "function" != typeof e.type);
        i || p(e.__e), e.__c = e.__ = e.__e = e.__d = void 0
    }

    function H(e, t, n) {
        return this.constructor(e, n)
    }

    function F(e, t) {
        var n = {
            __c: t = "__cC" + c++,
            __: e,
            Consumer: function(e, t) {
                return e.children(t)
            },
            Provider: function(e) {
                var n, i;
                return this.getChildContext || (n = new Set, (i = {})[t] = this, this.getChildContext = function() {
                    return i
                }, this.componentWillUnmount = function() {
                    n = null
                }, this.shouldComponentUpdate = function(e) {
                    this.props.value !== e.value && n.forEach((function(e) {
                        e.__e = !0, k(e)
                    }))
                }, this.sub = function(e) {
                    n.add(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        n && n.delete(e), t && t.call(e)
                    }
                }), e.children
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n
    }

    function j(e) {
        var t = this.constructor;
        return this.then((function(n) {
            return t.resolve(e()).then((function() {
                return n
            }))
        }), (function(n) {
            return t.resolve(e()).then((function() {
                return t.reject(n)
            }))
        }))
    }

    function B(e) {
        return new this((function(t, n) {
            if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return t([]);
            var r = i.length;

            function a(e, n) {
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var o = n.then;
                    if ("function" == typeof o) return void o.call(n, (function(t) {
                        a(e, t)
                    }), (function(n) {
                        i[e] = {
                            status: "rejected",
                            reason: n
                        }, 0 == --r && t(i)
                    }))
                }
                i[e] = {
                    status: "fulfilled",
                    value: n
                }, 0 == --r && t(i)
            }
            for (var o = 0; o < i.length; o++) a(o, i[o])
        }))
    }
    e = f.slice, t = {
        __e: function(e, t, n, i) {
            for (var r, a, o; t = t.__;)
                if ((r = t.__c) && !r.__) try {
                    if ((a = r.constructor) && null != a.getDerivedStateFromError && (r.setState(a.getDerivedStateFromError(e)), o = r.__d), null != r.componentDidCatch && (r.componentDidCatch(e, i || {}), o = r.__d), o) return r.__E = r
                } catch (t) {
                    e = t
                }
            throw e
        }
    }, n = 0, y.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e && (e = e(_({}, n), this.props)), e && _(n, e), null != e && this.__v && (t && this._sb.push(t), k(this))
    }, y.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), k(this))
    }, y.prototype.render = w, i = [], a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, o = function(e, t) {
        return e.__v.__b - t.__v.__b
    }, S.__r = 0, s = 0, l = E(!1), u = E(!0), c = 0;
    var U = setTimeout;

    function z(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function W() {}

    function V(e) {
        if (!(this instanceof V)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], G(e, this)
    }

    function $(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, V._immediateFn((function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var i;
                try {
                    i = n(e._value)
                } catch (e) {
                    return void X(t.promise, e)
                }
                Y(t.promise, i)
            } else(1 === e._state ? Y : X)(t.promise, e._value)
        }))) : e._deferreds.push(t)
    }

    function Y(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof V) return e._state = 3, e._value = t, void q(e);
                if ("function" == typeof n) return void G((i = n, r = t, function() {
                    i.apply(r, arguments)
                }), e)
            }
            e._state = 1, e._value = t, q(e)
        } catch (t) {
            X(e, t)
        }
        var i, r
    }

    function X(e, t) {
        e._state = 2, e._value = t, q(e)
    }

    function q(e) {
        2 === e._state && 0 === e._deferreds.length && V._immediateFn((function() {
            e._handled || V._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) $(e, e._deferreds[t]);
        e._deferreds = null
    }

    function K(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function G(e, t) {
        var n = !1;
        try {
            e((function(e) {
                n || (n = !0, Y(t, e))
            }), (function(e) {
                n || (n = !0, X(t, e))
            }))
        } catch (e) {
            if (n) return;
            n = !0, X(t, e)
        }
    }
    V.prototype.catch = function(e) {
        return this.then(null, e)
    }, V.prototype.then = function(e, t) {
        var n = new this.constructor(W);
        return $(this, new K(e, t, n)), n
    }, V.prototype.finally = j, V.all = function(e) {
        return new V((function(t, n) {
            if (!z(e)) return n(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return t([]);
            var r = i.length;

            function a(e, o) {
                try {
                    if (o && ("object" == typeof o || "function" == typeof o)) {
                        var s = o.then;
                        if ("function" == typeof s) return void s.call(o, (function(t) {
                            a(e, t)
                        }), n)
                    }
                    i[e] = o, 0 == --r && t(i)
                } catch (e) {
                    n(e)
                }
            }
            for (var o = 0; o < i.length; o++) a(o, i[o])
        }))
    }, V.allSettled = B, V.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === V ? e : new V((function(t) {
            t(e)
        }))
    }, V.reject = function(e) {
        return new V((function(t, n) {
            n(e)
        }))
    }, V.race = function(e) {
        return new V((function(t, n) {
            if (!z(e)) return n(new TypeError("Promise.race accepts an array"));
            for (var i = 0, r = e.length; i < r; i++) V.resolve(e[i]).then(t, n)
        }))
    }, V._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        U(e, 0)
    }, V._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    };
    var Z = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }();
    "function" != typeof Z.Promise ? Z.Promise = V : Z.Promise.prototype.finally ? Z.Promise.allSettled || (Z.Promise.allSettled = B) : Z.Promise.prototype.finally = j;
    var J, Q, ee = ["en-US", "en-AU", "en-GB", "en"],
        te = [{
            value: "en-US",
            name: "English (USA)",
            iso: "US"
        }, {
            value: "az",
            name: "Azerbaijani (Azeri)",
            iso: "AZ"
        }, {
            value: "ar",
            name: "عربى (Arabic)",
            iso: "AR"
        }, {
            value: "bn",
            name: "বাঙালি (Bengali)",
            iso: "BN"
        }, {
            value: "bg",
            name: "Български (Bulgarian)",
            iso: "BG"
        }, {
            value: "zh",
            name: "中文 (Chinese)",
            iso: "ZH"
        }, {
            value: "zh-Hant",
            name: "漢語 (Chinese Traditional)",
            iso: "TW",
            extraCode: "zh-TW"
        }, {
            value: "hr",
            name: "Hrvatski (Croatian)",
            iso: "HR"
        }, {
            value: "cs",
            name: "Čeština (Czech)",
            iso: "CS"
        }, {
            value: "nl",
            name: "Nederlands (Dutch)",
            iso: "NL"
        }, {
            value: "en-AU",
            name: "English (Australian)",
            iso: "AU"
        }, {
            value: "en",
            name: "English (USA)",
            iso: "US"
        }, {
            value: "en-GB",
            name: "English (United Kingdom)",
            iso: "GB"
        }, {
            value: "et",
            name: "Eesti keel (Estonian)",
            iso: "ET"
        }, {
            value: "fi",
            name: "Suomi (Finnish)",
            iso: "FI"
        }, {
            value: "fo",
            name: "Føroyskt (Faroese)",
            iso: "FO",
            noLiveTranslation: !0
        }, {
            value: "fr",
            name: "Français (French)",
            iso: "FR"
        }, {
            value: "ka",
            name: "ქართული (Georgian)",
            iso: "KA"
        }, {
            value: "de",
            name: "Deutsch (German)",
            iso: "DE"
        }, {
            value: "el",
            name: "Ελληνικά (Greek)",
            iso: "EL"
        }, {
            value: "haw",
            name: "ʻŌlelo Hawaiʻi (Hawaiian)",
            iso: "HA"
        }, {
            value: "he",
            name: "עברית (Hebrew)",
            iso: "HE"
        }, {
            value: "hi",
            name: "हिंदी (Hindi)",
            iso: "HI"
        }, {
            value: "hu",
            name: "Magyar (Hungarian)",
            iso: "HU"
        }, {
            value: "it",
            name: "Italiano (Italian)",
            iso: "IT"
        }, {
            value: "id",
            name: "Bahasa Indonesia (Indonesian)",
            iso: "ID"
        }, {
            value: "ja",
            name: "日本語 (Japanese)",
            iso: "JA"
        }, {
            value: "ko",
            name: "한국어 (Korean)",
            iso: "KO"
        }, {
            value: "lt",
            name: "Lietuvių (Lithuanian)",
            iso: "LT"
        }, {
            value: "lv",
            name: "Latviešu (Latvian)",
            iso: "LV"
        }, {
            value: "mgo",
            name: "Crnogorski (Montenegrin)",
            iso: "ME",
            noLiveTranslation: !0
        }, {
            value: "no",
            name: "Norsk (Norwegian)",
            iso: "NO"
        }, {
            value: "fa",
            name: "فارسی (Persian)",
            iso: "FA"
        }, {
            value: "pl",
            name: "Polski (Polish)",
            iso: "PL"
        }, {
            value: "pt-BR",
            name: "Português (Brazil)",
            iso: "BR"
        }, {
            value: "pt",
            name: "Português (Portugal)",
            iso: "PT"
        }, {
            value: "pa",
            name: "ਪੰਜਾਬੀ (Punjabi)",
            iso: "PA"
        }, {
            value: "ro",
            name: "Română (Romanian)",
            iso: "RO"
        }, {
            value: "ru",
            name: "Русский (Russian)",
            iso: "RU"
        }, {
            value: "sk",
            name: "Slovenský (Slovak)",
            iso: "SK"
        }, {
            value: "sl",
            name: "Slovenščina (Slovenian)",
            iso: "SI"
        }, {
            value: "sr",
            name: "Српски (Serbian)",
            iso: "SR"
        }, {
            value: "sr-Latn",
            name: "Serbian (Latin)",
            iso: "SR",
            noLiveTranslation: !0
        }, {
            value: "es",
            name: "Español (Spanish)",
            iso: "ES"
        }, {
            value: "es-MX",
            name: "Español (Mexico)",
            iso: "MX"
        }, {
            value: "sv",
            name: "Svenska (Swedish)",
            iso: "SV"
        }, {
            value: "tr",
            name: "Türkçe (Turkish)",
            iso: "TR"
        }, {
            value: "th",
            name: "ภาษาไทย (Thai)",
            iso: "TH"
        }, {
            value: "tl",
            name: "Tagalog (Filipino)",
            iso: "TL"
        }, {
            value: "uk",
            name: "Українська (Ukrainian)",
            iso: "UK"
        }, {
            value: "cy",
            name: "Cymraeg (Welsh)",
            iso: "CY"
        }, {
            value: "ceb",
            name: "Cebuano (Filipino)",
            iso: "CE"
        }, {
            value: "sm",
            name: "Gagana faʻa Sāmoa (Samoan)",
            iso: "SM"
        }, {
            value: "vi",
            name: "Việt Nam (Vietnamese)",
            iso: "VI"
        }, {
            value: "da",
            name: "Dansk (Danish)",
            iso: "DA"
        }, {
            value: "ca",
            name: "Catalan (Català)",
            iso: "CA"
        }, {
            value: "ht",
            name: "Creole (Haitian)",
            iso: "HT"
        }, {
            value: "ilo",
            name: "Ilocano (Filipino)",
            iso: "ILO"
        }, {
            value: "ps",
            name: "پښتو (Pashto)",
            iso: "PS"
        }, {
            value: "prs",
            name: "دری (Dari)",
            iso: "PRS"
        }, {
            value: "eu",
            name: "Basque (Basque)",
            iso: "EU"
        }, {
            value: "hmn",
            name: "Hmong (Hmong)",
            iso: "HMN"
        }, {
            value: "hy",
            name: "հայոց լեզու (Armenian)",
            iso: "HY"
        }];
    ! function(e) {
        e.OneButton = "1", e.TwoButtons = "2"
    }(J || (J = {})),
    function(e) {
        e.Flag = "flag", e.Earth = "earth", e.Characters = "characters"
    }(Q || (Q = {}));
    var ne = function() {
        this.languages = te
    };
    window.languagesStore = new ne;
    var ie = function() {
        function e(e) {
            var t = e.url;
            this.intervalTimeout = 5e3, this.eventsStore = [], this.apiUrl = "", this.apiUrl = t, this.initEventTracking()
        }
        return e.prototype.track = function(e) {
            this.eventsStore.push(e)
        }, e.prototype.initInterval = function() {
            var t = this;
            this.interval = setInterval((function() {
                t.eventsStore.length && e.sendStatRequest({
                    events: t.eventsStore,
                    baseUrl: t.apiUrl
                }).then((function() {
                    t.eventsStore = []
                })).catch((function(e) {
                    console.error(e)
                }))
            }), this.intervalTimeout)
        }, e.sendStatRequest = function(e) {
            var t = e.events,
                n = e.baseUrl;
            return fetch("".concat(n, "abn/widget-adm"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    events: t
                })
            })
        }, e.prototype.initEventTracking = function() {
            this.interval || this.initInterval()
        }, e
    }();
    window.eventTracking = new ie({
        url: "https://api.userway.org/api/"
    });
    var re = function(e, t) {
        return re = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, re(e, t)
    };
    var ae = function() {
        return ae = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }, ae.apply(this, arguments)
    };

    function oe(e, t) {
        var n = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]])
        }
        return n
    }

    function se(e, t, n, i) {
        return new(n || (n = Promise))((function(r, a) {
            function o(e) {
                try {
                    l(i.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function s(e) {
                try {
                    l(i.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function l(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                    e(t)
                }))).then(o, s)
            }
            l((i = i.apply(e, t || [])).next())
        }))
    }

    function le(e, t) {
        var n, i, r, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0]) throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            },
            o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return o.next = s(0), o.throw = s(1), o.return = s(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function s(s) {
            return function(l) {
                return function(s) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; o && (o = 0, s[0] && (a = 0)), a;) try {
                        if (n = 1, i && (r = 2 & s[0] ? i.return : s[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, s[1])).done) return r;
                        switch (i = 0, r && (s = [2 & s[0], r.value]), s[0]) {
                            case 0:
                            case 1:
                                r = s;
                                break;
                            case 4:
                                return a.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = s[1], s = [0];
                                continue;
                            case 7:
                                s = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === s[0] && (!r || s[1] > r[0] && s[1] < r[3])) {
                                    a.label = s[1];
                                    break
                                }
                                if (6 === s[0] && a.label < r[1]) {
                                    a.label = r[1], r = s;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(s);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        s = t.call(e, a)
                    } catch (e) {
                        s = [6, e], i = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, l])
            }
        }
    }

    function ue(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && i >= e.length && (e = void 0), {
                    value: e && e[i++],
                    done: !e
                }
            }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function ce(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, a = n.call(e),
            o = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = a.next()).done;) o.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = a.return) && n.call(a)
            } finally {
                if (r) throw r.error
            }
        }
        return o
    }

    function de(e, t, n) {
        if (n || 2 === arguments.length)
            for (var i, r = 0, a = t.length; r < a; r++) !i && r in t || (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
        return e.concat(i || Array.prototype.slice.call(t))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var fe, ge, he, _e, pe = 0,
        ve = [],
        me = t,
        we = me.__b,
        ye = me.__r,
        be = me.diffed,
        xe = me.__c,
        ke = me.unmount,
        Se = me.__;

    function Ce(e, t) {
        me.__h && me.__h(ge, e, pe || t), pe = 0;
        var n = ge.__H || (ge.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({}), n.__[e]
    }

    function Te(e) {
        return pe = 1, Ne(je, e)
    }

    function Ne(e, t, n) {
        var i = Ce(fe++, 2);
        if (i.t = e, !i.__c && (i.__ = [n ? n(t) : je(void 0, t), function(e) {
                var t = i.__N ? i.__N[0] : i.__[0],
                    n = i.t(t, e);
                t !== n && (i.__N = [n, i.__[1]], i.__c.setState({}))
            }], i.__c = ge, !ge.u)) {
            var r = function(e, t, n) {
                if (!i.__c.__H) return !0;
                var r = i.__c.__H.__.filter((function(e) {
                    return !!e.__c
                }));
                if (r.every((function(e) {
                        return !e.__N
                    }))) return !a || a.call(this, e, t, n);
                var o = !1;
                return r.forEach((function(e) {
                    if (e.__N) {
                        var t = e.__[0];
                        e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0)
                    }
                })), !(!o && i.__c.props === e) && (!a || a.call(this, e, t, n))
            };
            ge.u = !0;
            var a = ge.shouldComponentUpdate,
                o = ge.componentWillUpdate;
            ge.componentWillUpdate = function(e, t, n) {
                if (this.__e) {
                    var i = a;
                    a = void 0, r(e, t, n), a = i
                }
                o && o.call(this, e, t, n)
            }, ge.shouldComponentUpdate = r
        }
        return i.__N || i.__
    }

    function Le(e, t) {
        var n = Ce(fe++, 3);
        !me.__s && Fe(n.__H, t) && (n.__ = e, n.i = t, ge.__H.__h.push(n))
    }

    function Ae(e) {
        return pe = 5, Pe((function() {
            return {
                current: e
            }
        }), [])
    }

    function Pe(e, t) {
        var n = Ce(fe++, 7);
        return Fe(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
    }

    function Ee(e, t) {
        return pe = 8, Pe((function() {
            return e
        }), t)
    }

    function Oe(e) {
        var t = ge.context[e.__c],
            n = Ce(fe++, 9);
        return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(ge)), t.props.value) : e.__
    }

    function Re() {
        for (var e; e = ve.shift();)
            if (e.__P && e.__H) try {
                e.__H.__h.forEach(De), e.__H.__h.forEach(He), e.__H.__h = []
            } catch (t) {
                e.__H.__h = [], me.__e(t, e.__v)
            }
    }
    me.__b = function(e) {
        ge = null, we && we(e)
    }, me.__ = function(e, t) {
        e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Se && Se(e, t)
    }, me.__r = function(e) {
        ye && ye(e), fe = 0;
        var t = (ge = e.__c).__H;
        t && (he === ge ? (t.__h = [], ge.__h = [], t.__.forEach((function(e) {
            e.__N && (e.__ = e.__N), e.i = e.__N = void 0
        }))) : (t.__h.forEach(De), t.__h.forEach(He), t.__h = [], fe = 0)), he = ge
    }, me.diffed = function(e) {
        be && be(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (1 !== ve.push(t) && _e === me.requestAnimationFrame || ((_e = me.requestAnimationFrame) || Ie)(Re)), t.__H.__.forEach((function(e) {
            e.i && (e.__H = e.i), e.i = void 0
        }))), he = ge = null
    }, me.__c = function(e, t) {
        t.some((function(e) {
            try {
                e.__h.forEach(De), e.__h = e.__h.filter((function(e) {
                    return !e.__ || He(e)
                }))
            } catch (n) {
                t.some((function(e) {
                    e.__h && (e.__h = [])
                })), t = [], me.__e(n, e.__v)
            }
        })), xe && xe(e, t)
    }, me.unmount = function(e) {
        ke && ke(e);
        var t, n = e.__c;
        n && n.__H && (n.__H.__.forEach((function(e) {
            try {
                De(e)
            } catch (e) {
                t = e
            }
        })), n.__H = void 0, t && me.__e(t, n.__v))
    };
    var Me = "function" == typeof requestAnimationFrame;

    function Ie(e) {
        var t, n = function() {
                clearTimeout(i), Me && cancelAnimationFrame(t), setTimeout(e)
            },
            i = setTimeout(n, 100);
        Me && (t = requestAnimationFrame(n))
    }

    function De(e) {
        var t = ge,
            n = e.__c;
        "function" == typeof n && (e.__c = void 0, n()), ge = t
    }

    function He(e) {
        var t = ge;
        e.__c = e.__(), ge = t
    }

    function Fe(e, t) {
        return !e || e.length !== t.length || t.some((function(t, n) {
            return t !== e[n]
        }))
    }

    function je(e, t) {
        return "function" == typeof t ? t(e) : t
    }
    var Be = function(e) {
            var t = e.data,
                n = t.action,
                i = t.lang;
            "setHtmlLangAttribute" === n && document.documentElement.setAttribute("lang", i)
        },
        Ue = function(e) {
            window.parent.postMessage(ae({
                isUserWay: !0
            }, e), "*")
        },
        ze = "WHITE_LABEL",
        We = "CUSTOM_BRANDING",
        Ve = "MODIFY_MENU",
        $e = "VOICE_NAVIGATION",
        Ye = "main.home",
        Xe = "main.report",
        qe = "main.about",
        Ke = ["s9", "s11", "s18", "s21", "s24", "s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108"],
        Ge = "s101|s102|s103|s104|s105|s106|s107|s108",
        Ze = "s9|s24|s3|s18|s6|s4|s14|s13|s25|s7|s2|s12|s11|s17|s19|s21|s23|".concat(Ge),
        Je = function() {
            function e(e) {
                this.options = e, this.subscribers = {}, this.dataPull = null, this.lastValue = null, (null == e ? void 0 : e.replay) && (this.dataPull = []), void 0 !== (null == e ? void 0 : e.initialState) && (this.lastValue = e.initialState, e.replay && this.checkReplyPull(this.lastValue))
            }
            return e.prototype.applyOptions = function(e) {
                var t;
                (null === (t = this.options) || void 0 === t ? void 0 : t.replay) && this.dataPull.length && this.dataPull.forEach((function(t) {
                    return e(t)
                }))
            }, e.prototype.checkReplyPull = function(e) {
                var t, n;
                if (null === (t = this.options) || void 0 === t ? void 0 : t.replay) {
                    var i = Number(null === (n = this.options) || void 0 === n ? void 0 : n.replay);
                    this.dataPull.push(e);
                    var r = this.dataPull.length;
                    if (i > r) return;
                    this.dataPull = this.dataPull.slice(r - i, r)
                }
            }, e.prototype.subscribe = function(e) {
                var t = this,
                    n = Math.round(Math.random() * Math.pow(36, 12)).toString(36);
                return this.subscribers[n] = e, this.applyOptions(e),
                    function() {
                        delete t.subscribers[n]
                    }
            }, e.prototype.next = function(e) {
                var t = this;
                Object.keys(this.subscribers).forEach((function(n) {
                    return t.subscribers[n](e)
                })), this.lastValue = e, this.checkReplyPull(e)
            }, e.prototype.clear = function() {
                this.subscribers = {}, this.dataPull.length && (this.dataPull = [])
            }, e
        }(),
        Qe = "authToken",
        et = "refreshToken",
        tt = function() {
            function e() {
                this.token$ = new Je({
                    replay: !0
                }), this.refreshToken$ = new Je({
                    replay: !0
                }), this.tokenInvalid$ = new Je
            }
            return e.prototype.hasToken = function() {
                return !!this.getToken()
            }, e.prototype.setToken = function(e) {
                nt.token$.next(e);
                try {
                    e ? window.localStorage.setItem(Qe, e) : window.localStorage.removeItem(Qe)
                } catch (e) {
                    console.warn("Could not write to the localStorage. Widget can work incorrectly.")
                }
            }, e.prototype.getToken = function() {
                try {
                    return window.localStorage.getItem(Qe)
                } catch (e) {
                    return console.warn("Could not read from the localStorage. Widget can work incorrectly."), this.token$.lastValue
                }
            }, e.prototype.setRefreshToken = function(e) {
                this.refreshToken$.next(e);
                try {
                    e ? window.localStorage.setItem(et, e) : window.localStorage.removeItem(et)
                } catch (e) {
                    console.warn("Could not write to the localStorage. Widget can work incorrectly.")
                }
            }, e.prototype.getRefreshToken = function() {
                try {
                    return window.localStorage.getItem(et)
                } catch (e) {
                    return console.warn("Could not read from the localStorage. Widget can work incorrectly."), this.refreshToken$.lastValue
                }
            }, e
        }();
    window.tokenStore = new tt;
    var nt = window.tokenStore,
        it = function() {
            this.config$ = new Je({
                replay: !0
            }), this.lstConfig$ = new Je({
                replay: !0
            }), this.lstOperate$ = new Je({
                replay: !0
            }), this.siteCount$ = new Je({
                replay: !0
            })
        };
    window.configStore = new it;
    var rt = window.configStore,
        at = "https://api.userway.org/api/";
    var ot = function() {
            var e = function(e, t) {
                var n, i = !1;
                e.match(/^https?:\/\//) && (i = !0), rt.lstConfig$.subscribe((function(e) {
                    (null == e ? void 0 : e.language) && (n = e.language)
                }));
                var r = ae(ae({
                    "X-Auth-Language": n
                }, nt.hasToken() ? {
                    "X-Auth-Token": nt.getToken()
                } : {}), t.headers);
                return function(e, t) {
                    return new Promise((function(n, i) {
                        var r = new XMLHttpRequest;
                        r.open(t.method, e), r.onload = function() {
                            this.status >= 200 && this.status < 300 ? n(r.response) : i({
                                status: this.status,
                                statusText: r.statusText
                            })
                        }, r.onerror = function() {
                            i({
                                status: this.status,
                                statusText: r.statusText
                            })
                        }, t.headers && Object.keys(t.headers).forEach((function(e) {
                            r.setRequestHeader(e, t.headers[e])
                        }));
                        var a = t.body;
                        a && "object" == typeof a && (a = Object.keys(a).map((function(e) {
                            return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(a[e]))
                        })).join("&")), r.send(a)
                    }))
                }(i ? e : at + e, ae(ae({}, t), {
                    headers: r
                })).then((function(e) {
                    if (401 === e.status && nt.tokenInvalid$.next(), !e) return null;
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return console.error("Invalid response:", e), null
                    }
                })).catch((function(e) {
                    if (401 === e.status) return nt.tokenInvalid$.next(), null;
                    throw e
                }))
            };
            return {
                post: function(t, n) {
                    return e(t, {
                        headers: {
                            "Content-Type": "application/json"
                        },
                        method: "POST",
                        body: JSON.stringify(n)
                    })
                },
                get: function(t, n, i) {
                    return e(t + (n ? "?".concat(function(e) {
                        return Object.keys(e).map((function(t) {
                            return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t]))
                        })).join("&")
                    }(n)) : ""), ae({
                        method: "GET"
                    }, i))
                },
                sendFormData: function(e, t) {
                    return new Promise((function(n, i) {
                        var r = new XMLHttpRequest;
                        r.open("POST", at + e), r.onload = function() {
                            if (this.status >= 200 && this.status < 300) n(r.response);
                            else {
                                var e = void 0;
                                try {
                                    var t = JSON.parse(r.response);
                                    e = (null == t ? void 0 : t.errors) || null
                                } catch (t) {
                                    e = null
                                }
                                i({
                                    status: this.status,
                                    statusText: r.statusText,
                                    errors: e
                                })
                            }
                        }, r.onerror = function(e) {
                            console.log("Network error: ", e), i({
                                status: this.status,
                                statusText: r.statusText,
                                errors: {
                                    email: "Client error. Looks like something went wrong...",
                                    text: "Client error. Looks like something went wrong..."
                                }
                            })
                        }, r.send(t)
                    })).then((function(e) {
                        if (!e) return null;
                        try {
                            return JSON.parse(e)
                        } catch (t) {
                            return console.error("Invalid response:", e), null
                        }
                    }))
                }
            }
        },
        st = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function lt(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }
    var ut = "object" == typeof st && st && st.Object === Object && st,
        ct = "object" == typeof self && self && self.Object === Object && self,
        dt = ut || ct || Function("return this")(),
        ft = dt.Symbol,
        gt = ft,
        ht = Object.prototype,
        _t = ht.hasOwnProperty,
        pt = ht.toString,
        vt = gt ? gt.toStringTag : void 0;
    var mt = function(e) {
            var t = _t.call(e, vt),
                n = e[vt];
            try {
                e[vt] = void 0;
                var i = !0
            } catch (e) {}
            var r = pt.call(e);
            return i && (t ? e[vt] = n : delete e[vt]), r
        },
        wt = Object.prototype.toString;
    var yt = mt,
        bt = function(e) {
            return wt.call(e)
        },
        xt = ft ? ft.toStringTag : void 0;
    var kt = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : xt && xt in Object(e) ? yt(e) : bt(e)
    };
    var St = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        },
        Ct = kt,
        Tt = St;
    var Nt, Lt = function(e) {
            if (!Tt(e)) return !1;
            var t = Ct(e);
            return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
        },
        At = dt["__core-js_shared__"],
        Pt = (Nt = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Nt : "";
    var Et = function(e) {
            return !!Pt && Pt in e
        },
        Ot = Function.prototype.toString;
    var Rt = Lt,
        Mt = Et,
        It = St,
        Dt = function(e) {
            if (null != e) {
                try {
                    return Ot.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        },
        Ht = /^\[object .+?Constructor\]$/,
        Ft = Function.prototype,
        jt = Object.prototype,
        Bt = Ft.toString,
        Ut = jt.hasOwnProperty,
        zt = RegExp("^" + Bt.call(Ut).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Wt = function(e) {
            return !(!It(e) || Mt(e)) && (Rt(e) ? zt : Ht).test(Dt(e))
        },
        Vt = function(e, t) {
            return null == e ? void 0 : e[t]
        };
    var $t = function(e, t) {
            var n = Vt(e, t);
            return Wt(n) ? n : void 0
        },
        Yt = $t(Object, "create"),
        Xt = Yt;
    var qt = function() {
        this.__data__ = Xt ? Xt(null) : {}, this.size = 0
    };
    var Kt = function(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        },
        Gt = Yt,
        Zt = Object.prototype.hasOwnProperty;
    var Jt = function(e) {
            var t = this.__data__;
            if (Gt) {
                var n = t[e];
                return "__lodash_hash_undefined__" === n ? void 0 : n
            }
            return Zt.call(t, e) ? t[e] : void 0
        },
        Qt = Yt,
        en = Object.prototype.hasOwnProperty;
    var tn = Yt;
    var nn = qt,
        rn = Kt,
        an = Jt,
        on = function(e) {
            var t = this.__data__;
            return Qt ? void 0 !== t[e] : en.call(t, e)
        },
        sn = function(e, t) {
            var n = this.__data__;
            return this.size += this.has(e) ? 0 : 1, n[e] = tn && void 0 === t ? "__lodash_hash_undefined__" : t, this
        };

    function ln(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    ln.prototype.clear = nn, ln.prototype.delete = rn, ln.prototype.get = an, ln.prototype.has = on, ln.prototype.set = sn;
    var un = ln;
    var cn = function() {
        this.__data__ = [], this.size = 0
    };
    var dn = function(e, t) {
        return e === t || e != e && t != t
    };
    var fn = function(e, t) {
            for (var n = e.length; n--;)
                if (dn(e[n][0], t)) return n;
            return -1
        },
        gn = fn,
        hn = Array.prototype.splice;
    var _n = fn;
    var pn = fn;
    var vn = fn;
    var mn = cn,
        wn = function(e) {
            var t = this.__data__,
                n = gn(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : hn.call(t, n, 1), --this.size, !0)
        },
        yn = function(e) {
            var t = this.__data__,
                n = _n(t, e);
            return n < 0 ? void 0 : t[n][1]
        },
        bn = function(e) {
            return pn(this.__data__, e) > -1
        },
        xn = function(e, t) {
            var n = this.__data__,
                i = vn(n, e);
            return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
        };

    function kn(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    kn.prototype.clear = mn, kn.prototype.delete = wn, kn.prototype.get = yn, kn.prototype.has = bn, kn.prototype.set = xn;
    var Sn = kn,
        Cn = $t(dt, "Map"),
        Tn = un,
        Nn = Sn,
        Ln = Cn;
    var An = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    };
    var Pn = function(e, t) {
            var n = e.__data__;
            return An(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
        },
        En = Pn;
    var On = Pn;
    var Rn = Pn;
    var Mn = Pn;
    var In = function() {
            this.size = 0, this.__data__ = {
                hash: new Tn,
                map: new(Ln || Nn),
                string: new Tn
            }
        },
        Dn = function(e) {
            var t = En(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        },
        Hn = function(e) {
            return On(this, e).get(e)
        },
        Fn = function(e) {
            return Rn(this, e).has(e)
        },
        jn = function(e, t) {
            var n = Mn(this, e),
                i = n.size;
            return n.set(e, t), this.size += n.size == i ? 0 : 1, this
        };

    function Bn(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var i = e[t];
            this.set(i[0], i[1])
        }
    }
    Bn.prototype.clear = In, Bn.prototype.delete = Dn, Bn.prototype.get = Hn, Bn.prototype.has = Fn, Bn.prototype.set = jn;
    var Un = Bn,
        zn = function(e) {
            return this.__data__.set(e, "__lodash_hash_undefined__"), this
        },
        Wn = function(e) {
            return this.__data__.has(e)
        };

    function Vn(e) {
        var t = -1,
            n = null == e ? 0 : e.length;
        for (this.__data__ = new Un; ++t < n;) this.add(e[t])
    }
    Vn.prototype.add = Vn.prototype.push = zn, Vn.prototype.has = Wn;
    var $n = Vn;
    var Yn = function(e, t, n, i) {
            for (var r = e.length, a = n + (i ? 1 : -1); i ? a-- : ++a < r;)
                if (t(e[a], a, e)) return a;
            return -1
        },
        Xn = function(e) {
            return e != e
        },
        qn = function(e, t, n) {
            for (var i = n - 1, r = e.length; ++i < r;)
                if (e[i] === t) return i;
            return -1
        };
    var Kn = function(e, t, n) {
        return t == t ? qn(e, t, n) : Yn(e, Xn, n)
    };
    var Gn = function(e, t) {
        return !!(null == e ? 0 : e.length) && Kn(e, t, 0) > -1
    };
    var Zn = function(e, t, n) {
        for (var i = -1, r = null == e ? 0 : e.length; ++i < r;)
            if (n(t, e[i])) return !0;
        return !1
    };
    var Jn = function(e, t) {
        return e.has(t)
    };
    var Qn = function(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            })), n
        },
        ei = $t(dt, "Set"),
        ti = function() {},
        ni = ei && 1 / Qn(new ei([, -0]))[1] == 1 / 0 ? function(e) {
            return new ei(e)
        } : ti,
        ii = $n,
        ri = Gn,
        ai = Zn,
        oi = Jn,
        si = ni,
        li = Qn;
    var ui = function(e, t, n) {
            var i = -1,
                r = ri,
                a = e.length,
                o = !0,
                s = [],
                l = s;
            if (n) o = !1, r = ai;
            else if (a >= 200) {
                var u = t ? null : si(e);
                if (u) return li(u);
                o = !1, r = oi, l = new ii
            } else l = t ? [] : s;
            e: for (; ++i < a;) {
                var c = e[i],
                    d = t ? t(c) : c;
                if (c = n || 0 !== c ? c : 0, o && d == d) {
                    for (var f = l.length; f--;)
                        if (l[f] === d) continue e;
                    t && l.push(d), s.push(c)
                } else r(l, d, n) || (l !== s && l.push(d), s.push(c))
            }
            return s
        },
        ci = ui;
    var di = lt((function(e) {
            return e && e.length ? ci(e) : []
        })),
        fi = {
            s2: {
                description: "Cursor / Reading Guide",
                googleAnalyticsEventName: "userway_cursor",
                modifyMenuLabel: "Big Cursor",
                actionStates: {
                    0: {
                        iconClass: "cursor-1",
                        iconAlt: "",
                        label: "widget.menu.cursor.label",
                        aria: "widget.menu.cursor.aria"
                    },
                    1: {
                        iconClass: "cursor-1",
                        iconAlt: "",
                        label: "widget.menu.big_cursor.label",
                        aria: "widget.menu.big_cursor.aria"
                    },
                    2: {
                        iconClass: "reading-mask",
                        iconAlt: "",
                        label: "widget.menu.reading_mask.label",
                        aria: "widget.menu.reading_mask.aria"
                    },
                    3: {
                        iconClass: "reading-guide",
                        iconAlt: "",
                        label: "widget.menu.reading_guide.label",
                        aria: "widget.menu.reading_guide.aria"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s2"
                    };
                    return 0 !== e && e ? 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.reading_mask.aria") : 2 === e ? (t.actionState = 3, t.toRead = "widget.menu.reading_guide.aria") : (t.actionState = 0, t.toRead = "widget.menu.cursor.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.big_cursor.aria"), t
                }
            },
            s3: {
                description: "Contrast",
                googleAnalyticsEventName: "userway_contrast",
                modifyMenuLabel: "Contrast",
                actionStates: {
                    0: {
                        iconClass: "contrast-plus",
                        iconAlt: "",
                        label: "widget.menu.contrast.label.v0",
                        aria: "widget.menu.contrast.aria.v0"
                    },
                    1: {
                        iconClass: "contrast-2",
                        iconAlt: "",
                        label: "widget.menu.contrast.label.v1",
                        aria: "widget.menu.contrast.aria.v1"
                    },
                    2: {
                        iconClass: "contrast-3",
                        iconAlt: "",
                        label: "widget.menu.contrast.label.v2",
                        aria: "widget.menu.contrast.aria.v2"
                    },
                    3: {
                        iconClass: "contrast-4",
                        iconAlt: "",
                        label: "widget.menu.contrast.label.v3",
                        aria: "widget.menu.contrast.aria.v3"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s3"
                    };
                    return 0 === e ? (t.actionState = 1, t.toRead = "widget.menu.contrast.aria.v1") : 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.contrast.aria.v2") : 2 === e ? (t.actionState = 3, t.toRead = "widget.menu.contrast.aria.v3") : (t.actionState = 0, t.toRead = "widget.menu.contrast.aria_off_action"), t
                }
            },
            s4: {
                description: "Bigger Text",
                googleAnalyticsEventName: "userway_bigger_text",
                modifyMenuLabel: "Bigger Text",
                actionStates: {
                    0: {
                        iconClass: "bigger-text-1",
                        iconWrapClass: "bigger-text",
                        iconAlt: "widget.menu.bigger_text.alt.img",
                        label: "widget.menu.bigger_text.label",
                        aria: "widget.menu.bigger_text.aria.v0"
                    },
                    1: {
                        iconClass: "bigger-text-2",
                        iconWrapClass: "bigger-text",
                        iconAlt: "widget.menu.bigger_text.alt.img",
                        label: "widget.menu.bigger_text.label",
                        aria: "widget.menu.bigger_text.aria.v1"
                    },
                    2: {
                        iconClass: "bigger-text-3",
                        iconWrapClass: "bigger-text",
                        iconAlt: "widget.menu.bigger_text.alt.img",
                        label: "widget.menu.bigger_text.label",
                        aria: "widget.menu.bigger_text.aria.v2"
                    },
                    3: {
                        iconClass: "bigger-text-4",
                        iconWrapClass: "bigger-text",
                        iconAlt: "widget.menu.bigger_text.alt.img",
                        label: "widget.menu.bigger_text.label",
                        aria: "widget.menu.bigger_text.aria.v3"
                    },
                    4: {
                        iconClass: "bigger-text-5",
                        iconWrapClass: "bigger-text",
                        iconAlt: "widget.menu.bigger_text.alt.img",
                        label: "widget.menu.bigger_text.label",
                        aria: "widget.menu.bigger_text.aria.v4"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s4"
                    };
                    return 0 !== e && e ? 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.bigger_text.aria.v2") : 2 === e ? (t.actionState = 3, t.toRead = "widget.menu.bigger_text.aria.v3") : 3 === e ? (t.actionState = 4, t.toRead = "widget.menu.bigger_text.aria.v4") : (t.actionState = 0, t.toRead = "widget.menu.bigger_text.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.bigger_text.aria.v1"), t
                }
            },
            s6: {
                description: "Highlight links",
                googleAnalyticsEventName: "userway_highlight_links",
                modifyMenuLabel: "Highlight Links",
                actionStates: {
                    0: {
                        iconClass: "highlight-links",
                        iconAlt: "widget.menu.underline_links.alt",
                        label: "widget.menu.underline_links.label",
                        aria: "widget.menu.underline_links.aria"
                    },
                    1: {
                        iconClass: "highlight-links",
                        iconAlt: "widget.menu.underline_links.alt",
                        label: "widget.menu.underline_links.label",
                        aria: "widget.menu.underline_links.aria_on_action"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s6"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.underline_links.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.underline_links.aria_on_action"), t
                }
            },
            s7: {
                description: "Legible fonts",
                googleAnalyticsEventName: "userway_dyslexia",
                modifyMenuLabel: "Dyslexia/Legible Fonts",
                actionStates: {
                    0: {
                        iconClass: "font-1",
                        iconAlt: "widget.menu.dyslexia_friendly.alt",
                        label: "widget.menu.dyslexia_friendly.label",
                        aria: "widget.menu.dyslexia_friendly.aria"
                    },
                    1: {
                        iconClass: "font-2",
                        iconAlt: "widget.menu.dyslexia_friendly.alt",
                        label: "widget.menu.dyslexia_friendly.label",
                        aria: "widget.menu.dyslexia_friendly.aria_on_action"
                    },
                    2: {
                        iconClass: "font-3",
                        iconAlt: "widget.menu.legible_fonts.alt",
                        label: "widget.menu.legible_fonts.label",
                        aria: "widget.menu.legible_fonts.aria"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s7"
                    };
                    return 0 !== e && e ? 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.legible_fonts.aria_on_action") : (t.actionState = 0, t.toRead = "widget.menu.legible_fonts.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.dyslexia_friendly.aria_on_action"), t
                }
            },
            s8: {
                description: "Reset All",
                modifyMenuLabel: "Reset All",
                actionStates: {
                    0: {
                        iconClass: "reload",
                        iconAlt: "widget.menu.reset.labelV2",
                        label: "widget.menu.reset.labelV2",
                        aria: "widget.menu.reset.aria"
                    }
                },
                onActionTrigger: function() {
                    return {
                        feature: "s8",
                        actionState: 0,
                        toRead: "widget.menu.reset.aria_off_action"
                    }
                }
            },
            s9: {
                description: "Screen Reader",
                googleAnalyticsEventName: "userway_screen_reader",
                modifyMenuLabel: "Screen Reader",
                actionStates: {
                    0: {
                        iconClass: "reading-1",
                        iconAlt: "",
                        label: "widget.menu.responsive_voice.label.v0",
                        aria: "widget.menu.responsive_voice.aria.v0",
                        aria_wl: "widget.menu.responsive_voice.aria_wl.v0"
                    },
                    1: {
                        iconClass: "reading-2",
                        iconAlt: "",
                        label: "widget.menu.responsive_voice.label.v1",
                        aria: "widget.menu.responsive_voice.aria.v1",
                        aria_wl: "widget.menu.responsive_voice.aria_wl.v1"
                    },
                    2: {
                        iconClass: "reading-3",
                        iconAlt: "",
                        label: "widget.menu.responsive_voice.label.v2",
                        aria: "widget.menu.responsive_voice.aria.v2",
                        aria_wl: "widget.menu.responsive_voice.aria_wl.v2"
                    },
                    3: {
                        iconClass: "reading-4",
                        iconAlt: "",
                        label: "widget.menu.responsive_voice.label.v3",
                        aria: "widget.menu.responsive_voice.aria.v3",
                        aria_wl: "widget.menu.responsive_voice.aria_wl.v3"
                    }
                },
                onActionTrigger: function(e, t) {
                    var n = t.isWhiteLabeled,
                        i = {
                            feature: "s9"
                        };
                    return 0 !== e && e ? 1 === e ? (i.actionState = 2, i.toRead = n ? "widget.menu.responsive_voice.aria_wl.v2" : "widget.menu.responsive_voice.aria.v2") : 2 === e ? (i.actionState = 3, i.toRead = n ? "widget.menu.responsive_voice.aria_wl.v3" : "widget.menu.responsive_voice.aria.v3") : (i.actionState = 0, i.toRead = n ? "widget.menu.responsive_voice.aria_off_action_wl" : "widget.menu.responsive_voice.aria_off_action") : (i.actionState = 1, i.toRead = n ? "widget.menu.responsive_voice.aria_wl.v1" : "widget.menu.responsive_voice.aria.v1"), i
                }
            },
            s12: {
                description: "Tooltips",
                googleAnalyticsEventName: "userway_tooltips",
                modifyMenuLabel: "Tooltips",
                actionStates: {
                    0: {
                        iconClass: "tooltips",
                        iconAlt: "",
                        label: "widget.menu.tooltips.label",
                        aria: "widget.menu.tooltips.aria"
                    },
                    1: {
                        iconClass: "tooltips",
                        iconAlt: "",
                        label: "widget.menu.tooltips.label",
                        aria: "widget.menu.tooltips.aria_on_action"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s12"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.tooltips.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.tooltips.aria_on_action"), t
                }
            },
            s11: {
                description: "Page structure",
                googleAnalyticsEventName: "userway_page_structure",
                modifyMenuLabel: "Page Structure",
                actionStates: {
                    0: {
                        iconClass: "page-structure",
                        iconAlt: "",
                        label: "widget.menu.page_structure.label",
                        aria: "widget.menu.page_structure.aria"
                    },
                    1: {
                        iconClass: "page-structure",
                        iconAlt: "",
                        label: "widget.menu.page_structure.label",
                        aria: "widget.menu.page_structure.aria_on_action"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s11"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.page_structure.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.page_structure.aria_on_action"), t
                }
            },
            s13: {
                description: "Pause Animations",
                googleAnalyticsEventName: "userway_pause_animations",
                modifyMenuLabel: "Pause Animations",
                actionStates: {
                    0: {
                        iconClass: "pause",
                        iconAlt: "",
                        label: "widget.menu.stop_animations.label.v0",
                        aria: "widget.menu.stop_animations.aria"
                    },
                    1: {
                        iconClass: "play",
                        iconAlt: "",
                        label: "widget.menu.stop_animations.label.v1",
                        aria: "widget.menu.stop_animations.aria_on_action"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s13"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.stop_animations.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.stop_animations.aria_on_action"), t
                }
            },
            s14: {
                description: "Text Spacing",
                googleAnalyticsEventName: "userway_text_spacing",
                modifyMenuLabel: "Text Spacing",
                actionStates: {
                    0: {
                        iconClass: "spacing-1",
                        iconAlt: "widget.menu.spacing_text.alt",
                        label: "widget.menu.spacing_text.label.v0",
                        aria: "widget.menu.spacing_text.aria.v0"
                    },
                    1: {
                        iconClass: "spacing-2",
                        iconAlt: "widget.menu.spacing_text.alt",
                        label: "widget.menu.spacing_text.label.v1",
                        aria: "widget.menu.spacing_text.aria.v1"
                    },
                    2: {
                        iconClass: "spacing-3",
                        iconAlt: "widget.menu.spacing_text.alt",
                        label: "widget.menu.spacing_text.label.v2",
                        aria: "widget.menu.spacing_text.aria.v2"
                    },
                    3: {
                        iconClass: "spacing-4",
                        iconAlt: "widget.menu.spacing_text.alt",
                        label: "widget.menu.spacing_text.label.v3",
                        aria: "widget.menu.spacing_text.aria.v3"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s14"
                    };
                    return 0 !== e && e ? 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.spacing_text.aria.v2") : 2 === e ? (t.actionState = 3, t.toRead = "widget.menu.spacing_text.aria.v3") : (t.actionState = 0, t.toRead = "widget.menu.spacing_text.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.spacing_text.aria.v1"), t
                }
            },
            s17: {
                description: "Line Height",
                googleAnalyticsEventName: "userway_line_height",
                modifyMenuLabel: "Line Height",
                actionStates: {
                    0: {
                        iconClass: "line-height-1",
                        iconAlt: "widget.menu.line_height.alt",
                        label: "widget.menu.line_height.label.v0",
                        aria: "widget.menu.line_height.aria.v0"
                    },
                    1: {
                        iconClass: "line-height-2",
                        iconAlt: "widget.menu.line_height.alt",
                        label: "widget.menu.line_height.label.v1",
                        aria: "widget.menu.line_height.aria.v1"
                    },
                    2: {
                        iconClass: "line-height-3",
                        iconAlt: "widget.menu.line_height.alt",
                        label: "widget.menu.line_height.label.v2",
                        aria: "widget.menu.line_height.aria.v2"
                    },
                    3: {
                        iconClass: "line-height-4",
                        iconAlt: "widget.menu.line_height.alt",
                        label: "widget.menu.line_height.label.v3",
                        aria: "widget.menu.line_height.aria.v3"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s17"
                    };
                    return 0 !== e && e ? 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.line_height.aria.v2") : 2 === e ? (t.actionState = 3, t.toRead = "widget.menu.line_height.aria.v3") : (t.actionState = 0, t.toRead = "widget.menu.line_height.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.line_height.aria.v1"), t
                }
            },
            s18: {
                description: "Smart Contrast",
                googleAnalyticsEventName: "userway_smart_contrast",
                modifyMenuLabel: "Smart Contrast",
                actionStates: {
                    0: {
                        iconClass: "smart-contrast",
                        iconAlt: "",
                        label: "widget.menu.smart_contrast.label",
                        aria: "widget.menu.smart_contrast.aria"
                    },
                    1: {
                        iconClass: "smart-contrast",
                        iconAlt: "",
                        label: "widget.menu.smart_contrast.label",
                        aria: "widget.menu.smart_contrast.aria"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s18"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.smart_contrast.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.smart_contrast.aria_on_action"), t
                }
            },
            s19: {
                description: "Text Align",
                googleAnalyticsEventName: "userway_text_align",
                modifyMenuLabel: "Text Align",
                actionStates: {
                    0: {
                        iconClass: "text-align-1",
                        iconAlt: "widget.menu.text_align.alt",
                        label: "widget.menu.text_align.label.v0",
                        aria: "widget.menu.text_align.aria.v0"
                    },
                    1: {
                        iconClass: "text-align-2",
                        iconAlt: "widget.menu.text_align.alt",
                        label: "widget.menu.text_align.label.v1",
                        aria: "widget.menu.text_align.aria.v1"
                    },
                    2: {
                        iconClass: "text-align-3",
                        iconAlt: "widget.menu.text_align.alt",
                        label: "widget.menu.text_align.label.v2",
                        aria: "widget.menu.text_align.aria.v2"
                    },
                    3: {
                        iconClass: "text-align-4",
                        iconAlt: "widget.menu.text_align.alt",
                        label: "widget.menu.text_align.label.v3",
                        aria: "widget.menu.text_align.aria.v3"
                    },
                    4: {
                        iconClass: "text-align-5",
                        iconAlt: "widget.menu.text_align.alt",
                        label: "widget.menu.text_align.label.v4",
                        aria: "widget.menu.text_align.aria.v4"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s19"
                    };
                    return 0 !== e && e ? 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.text_align.aria.v2") : 2 === e ? (t.actionState = 3, t.toRead = "widget.menu.text_align.aria.v3") : 3 === e ? (t.actionState = 4, t.toRead = "widget.menu.text_align.aria.v4") : (t.actionState = 0, t.toRead = "widget.menu.text_align.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.text_align.aria.v1"), t
                }
            },
            s21: {
                description: "Dictionary",
                googleAnalyticsEventName: "userway_dictionary",
                modifyMenuLabel: "Dictionary",
                actionStates: {
                    0: {
                        iconClass: "dictionary",
                        iconAlt: "widget.menu.dictionary.alt",
                        label: "widget.menu.dictionary.label.v0",
                        aria: "widget.menu.dictionary.aria.v0"
                    },
                    1: {
                        iconClass: "dictionary",
                        iconAlt: "widget.menu.dictionary.alt",
                        label: "widget.menu.dictionary.label.v1",
                        aria: "widget.menu.dictionary.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s21"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.dictionary.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.dictionary.aria.v1"), t
                }
            },
            s23: {
                description: "Saturation",
                googleAnalyticsEventName: "userway_saturation",
                modifyMenuLabel: "Saturation",
                actionStates: {
                    0: {
                        iconClass: "saturation-1",
                        iconAlt: "widget.menu.saturation.alt",
                        label: "widget.menu.saturation.label.v0",
                        aria: "widget.menu.saturation.aria.v0"
                    },
                    1: {
                        iconClass: "saturation-2",
                        iconAlt: "widget.menu.saturation.alt",
                        label: "widget.menu.saturation.label.v1",
                        aria: "widget.menu.saturation.aria.v1"
                    },
                    2: {
                        iconClass: "saturation-3",
                        iconAlt: "widget.menu.saturation.alt",
                        label: "widget.menu.saturation.label.v2",
                        aria: "widget.menu.saturation.aria.v2"
                    },
                    3: {
                        iconClass: "saturation-4",
                        iconAlt: "widget.menu.saturation.alt",
                        label: "widget.menu.saturation.label.v3",
                        aria: "widget.menu.saturation.aria.v3"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s23"
                    };
                    return 0 !== e && e ? 1 === e ? (t.actionState = 2, t.toRead = "widget.menu.saturation.aria.v2") : 2 === e ? (t.actionState = 3, t.toRead = "widget.menu.saturation.aria.v3") : (t.actionState = 0, t.toRead = "widget.menu.saturation.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.saturation.aria.v1"), t
                }
            },
            s24: {
                description: "Voice Navigation",
                googleAnalyticsEventName: "userway_voice_navigation",
                modifyMenuLabel: "Voice Navigation",
                actionStates: {
                    0: {
                        iconClass: "voice-navigation",
                        iconAlt: "widget.menu.voiceNavigation.alt",
                        label: "widget.menu.voiceNavigation.label",
                        aria: "widget.menu.voiceNavigation.aria"
                    },
                    1: {
                        iconClass: "voice-navigation",
                        iconAlt: "widget.menu.voiceNavigation.alt",
                        label: "widget.menu.voiceNavigation.label",
                        aria: "widget.menu.voiceNavigation.aria"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s24"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.voiceNavigation.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.voiceNavigation.aria_on_action"), t
                }
            },
            s25: {
                description: "Hide Images",
                googleAnalyticsEventName: "userway_hide_images",
                modifyMenuLabel: "Hide Images",
                actionStates: {
                    0: {
                        iconClass: "hide-images",
                        iconAlt: "widget.menu.hide_images.alt",
                        label: "widget.menu.hide_images.label",
                        aria: "widget.menu.hide_images.aria"
                    },
                    1: {
                        iconClass: "hide-images",
                        iconAlt: "widget.menu.hide_images.alt",
                        label: "widget.menu.hide_images.label",
                        aria: "widget.menu.hide_images.aria"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s25"
                    };
                    return e ? (t.actionState = 0, t.toRead = "widget.menu.hide_images.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.hide_images.aria_on_action"), t
                }
            },
            s101: {
                description: "Motor Impaired",
                googleAnalyticsEventName: "userway_motor_impaired_profile",
                modifyMenuLabel: "Motor Impaired",
                isProfile: !0,
                icon: "MotorImparedIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.motorImpaired.label.v0",
                        aria: "widget.menu.motorImpaired.aria.v0",
                        iconClass: "motor-impared"
                    },
                    1: {
                        label: "widget.menu.motorImpaired.label.v1",
                        aria: "widget.menu.motorImpaired.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s101"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.motorImpaired.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.motorImpaired.aria.v1"), t
                }
            },
            s102: {
                description: "Blind",
                googleAnalyticsEventName: "userway_blind_profile",
                modifyMenuLabel: "Blind",
                isProfile: !0,
                icon: "BlindReaderIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.blindReader.label.v0",
                        aria: "widget.menu.blindReader.aria.v0",
                        iconClass: "blind-reader"
                    },
                    1: {
                        label: "widget.menu.blindReader.label.v1",
                        aria: "widget.menu.blindReader.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s102"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.blindReader.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.blindReader.aria.v1"), t
                }
            },
            s103: {
                description: "Color Blind",
                googleAnalyticsEventName: "userway_color_blind_profile",
                modifyMenuLabel: "Color Blind",
                isProfile: !0,
                icon: "ColorBlindIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.colorBlind.label.v0",
                        aria: "widget.menu.colorBlind.aria.v0",
                        iconClass: "color-blind"
                    },
                    1: {
                        label: "widget.menu.colorBlind.label.v1",
                        aria: "widget.menu.colorBlind.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s103"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.colorBlind.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.colorBlind.aria.v1"), t
                }
            },
            s104: {
                description: "Dyslexia",
                googleAnalyticsEventName: "userway_dyslexia_profile",
                modifyMenuLabel: "Dyslexia",
                isProfile: !0,
                icon: "DyslexiaIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.dyslexia.label.v0",
                        aria: "widget.menu.dyslexia.aria.v0",
                        iconClass: "dyslexia"
                    },
                    1: {
                        label: "widget.menu.dyslexia.label.v1",
                        aria: "widget.menu.dyslexia.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s104"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.dyslexia.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.dyslexia.aria.v1"), t
                }
            },
            s105: {
                description: "Low vision",
                googleAnalyticsEventName: "userway_visually_impaired_profile",
                modifyMenuLabel: "Low vision",
                isProfile: !0,
                icon: "VisuallyImpairedIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.visuallyImpaired.label.v0",
                        aria: "widget.menu.visuallyImpaired.aria.v0",
                        iconClass: "visually-impaired"
                    },
                    1: {
                        label: "widget.menu.visuallyImpaired.label.v1",
                        aria: "widget.menu.visuallyImpaired.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s105"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.visuallyImpaired.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.visuallyImpaired.aria.v1"), t
                }
            },
            s106: {
                description: "Cognitive & Learning",
                googleAnalyticsEventName: "userway_cognitive_and_learning_profile",
                modifyMenuLabel: "Cognitive & Learning",
                isProfile: !0,
                icon: "CognitiveLearningIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.cognitiveLearning.label.v0",
                        aria: "widget.menu.cognitiveLearning.aria.v0",
                        iconClass: "cognitive-learning"
                    },
                    1: {
                        label: "widget.menu.cognitiveLearning.label.v1",
                        aria: "widget.menu.cognitiveLearning.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s106"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.cognitiveLearning.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.cognitiveLearning.aria.v1"), t
                }
            },
            s107: {
                description: "Seizure & Epileptic",
                googleAnalyticsEventName: "userway_seizure_and_epileptic_profile",
                modifyMenuLabel: "Seizure & Epileptic",
                isProfile: !0,
                icon: "SeizureIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.seizure.label.v0",
                        aria: "widget.menu.seizure.aria.v0",
                        iconClass: "seizure"
                    },
                    1: {
                        label: "widget.menu.seizure.label.v1",
                        aria: "widget.menu.seizure.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s107"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.seizure.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.seizure.aria.v1"), t
                }
            },
            s108: {
                description: "ADHD",
                googleAnalyticsEventName: "userway_ADHD_profile",
                modifyMenuLabel: "ADHD",
                isProfile: !0,
                icon: "AdhdIcon",
                actionStates: {
                    0: {
                        label: "widget.menu.adhd.label.v0",
                        aria: "widget.menu.adhd.aria.v0",
                        iconClass: "adhd"
                    },
                    1: {
                        label: "widget.menu.adhd.label.v1",
                        aria: "widget.menu.adhd.aria.v1"
                    }
                },
                onActionTrigger: function(e) {
                    var t = {
                        feature: "s108"
                    };
                    return 0 !== e && e ? (t.actionState = 0, t.toRead = "widget.menu.adhd.aria_off_action") : (t.actionState = 1, t.toRead = "widget.menu.adhd.aria.v1"), t
                }
            }
        },
        gi = function() {
            function e() {
                this.state = new Je({
                    replay: !0,
                    initialState: Ye
                }), this.angularStateChanges$ = new Je({
                    replay: !0
                }), this.onClose$ = new Je, this.onOpen$ = new Je
            }
            return Object.defineProperty(e.prototype, "isOnHomePage", {
                get: function() {
                    return this.state.lastValue === Ye
                },
                enumerable: !1,
                configurable: !0
            }), e
        }();
    window.stateStore = new gi;
    var hi = window.stateStore,
        _i = null,
        pi = function() {
            function e() {
                var e = this;
                this.Api = ot(), this.user = null, this.refreshProcessInProgress = null, this.userAccountData = null, this.isLogged$ = new Je({
                    replay: !0,
                    initialState: !1
                }), this.isLoggedMember$ = new Je({
                    replay: !0,
                    initialState: !1
                }), nt.tokenInvalid$.subscribe((function() {
                    return e.handleInvalidToken()
                })), nt.token$.subscribe((function() {
                    return e.checkLogin()
                })), this.isLogged$.subscribe((function(t) {
                    e.isLoggedMember$.next(t && e.isMember())
                }))
            }
            return e.prototype.handleInvalidToken = function() {
                this.clearUserData(), hi.isOnHomePage || hi.state.next("main.login")
            }, e.prototype.checkLogin = function() {
                var e = nt.hasToken() && !!vi.getUser();
                this.isLogged$.next(e)
            }, e.prototype.getUser = function() {
                return this.user
            }, e.prototype.setUser = function(e) {
                this.user = e, this.checkLogin()
            }, e.prototype.setUserAccountData = function(e) {
                this.userAccountData = e
            }, e.prototype.isMember = function() {
                var e;
                return "MEMBER_LOGIN_AS" === (null === (e = this.userAccountData) || void 0 === e ? void 0 : e.loginType)
            }, e.prototype.isCsrExpert = function() {
                var e;
                return null === (e = this.user) || void 0 === e ? void 0 : e.csrConfig
            }, e.prototype.isCsrExpertExternal = function() {
                var e, t = null === (e = this.user) || void 0 === e ? void 0 : e.csrConfig;
                return t && (t.scopeParentAccounts.length || t.scopeAccounts.length || t.scopeSites.length)
            }, e.prototype.login = function(e) {
                void 0 === e && (e = {}), this.setUser(e.user), this.setUserAccountData(e.jwtUserDetails), rt.siteCount$.next(e.user.sitesCount), nt.setToken(e.token), e.refreshToken && nt.setRefreshToken(e.refreshToken), this.initTokenRefresh()
            }, e.prototype.logout = function() {
                this.clearUserData()
            }, e.prototype.refreshWidget = function(e) {
                var t, n = this,
                    i = void 0 === e ? {} : e,
                    r = i.code,
                    a = void 0 === r ? null === (t = rt.config$.lastValue) || void 0 === t ? void 0 : t.accountIdCode : r,
                    o = i.force,
                    s = void 0 !== o && o;
                return this.refreshProcessInProgress || (this.refreshProcessInProgress = new Promise((function(e) {
                    var t = nt.getToken();
                    return nt.token$.next(t), a && nt.hasToken() ? n.user && !s ? e(n.user) : void n.refreshToken().then((function() {
                        return n.Api.get("users/info-widget", {
                            code: a
                        }).then((function(t) {
                            401 === t.code && n.logout(), 200 === t.code && (n.setUser(t.data.user), n.setUserAccountData(t.data.jwtUserDetails), rt.siteCount$.next(t.data.user.sitesCount)), e(n.user)
                        }))
                    })).catch((function(t) {
                        console.log("[Error] Refresh Token:", t), nt.tokenInvalid$.next(), e(null)
                    })) : e(null)
                })).finally((function() {
                    n.refreshProcessInProgress = null
                }))), this.refreshProcessInProgress
            }, e.prototype.refreshToken = function() {
                var e = this;
                return new Promise((function(t, n) {
                    var i = nt.getRefreshToken();
                    i ? e.Api.get("sso/v0/public/service-user/refresh-token", null, {
                        headers: {
                            Authorization: i,
                            "X-Sso-Request-Origin": "WIDGET_ORIGIN"
                        }
                    }).then((function(e) {
                        nt.setToken(e.payload.accessToken), nt.setRefreshToken(e.payload.refreshToken), t()
                    }), (function(e) {
                        nt.tokenInvalid$.next(), n(e)
                    })) : t(null)
                }))
            }, e.prototype.clearUserData = function() {
                this.setUser(null), nt.setToken(null), nt.setRefreshToken(null), this.cancelTokenRefresh()
            }, e.prototype.initTokenRefresh = function() {
                var e = this;
                _i || (_i = setInterval((function() {
                    e.refreshToken()
                }), 9e5))
            }, e.prototype.cancelTokenRefresh = function() {
                _i && clearInterval(_i), _i = null
            }, e
        }();
    window.sessionStore = new pi;
    var vi = window.sessionStore,
        mi = function() {
            function e() {
                var e = this;
                this.readerProgressValue = {}, this.internalReaderStopped$ = new Je, this.internalReaderStopped$.subscribe((function() {
                    Object.keys(e.readerProgressValue).forEach((function(t) {
                        e.readerProgressValue[t] = !1
                    }))
                }))
            }
            return e.prototype.forceReaderToRead = function(e, t) {
                void 0 === t && (t = {});
                var n = ae(ae({}, t), {
                    action: "on_demand_reader",
                    contentToRead: e,
                    isAlert: !1
                });
                n.caller && (this.readerProgressValue[n.caller] = !0);
                var i = rt.config$.lastValue.paidAi,
                    r = rt.lstConfig$.lastValue,
                    a = r.languageInfo,
                    o = r.lstOptions;
                !n.menuLanguage && o.is_enabled && a && (n.menuLanguage = a.value), i && Ue(n)
            }, e.prototype.forceReaderToStop = function() {
                Ue({
                    action: "on_demand_reader_stop"
                })
            }, e
        }();
    window.readerInteractionStore = new mi;
    var wi, yi = window.readerInteractionStore;
    ! function(e) {
        e.Lst = "lst", e.Main = "main"
    }(wi || (wi = {}));
    var bi, xi = function(e, t) {
            return -1 !== e.indexOf(t)
        },
        ki = function(e, t) {
            return function(n) {
                var i = (t || {}).preventEnabled,
                    r = void 0 === i || i;
                xi(["Space", "Enter"], n.code) && (r && n.preventDefault(), e(n))
            }
        },
        Si = function() {
            function e(e) {
                this.classes$ = new Je({
                    initialState: []
                }), e && this.classes$.next([e])
            }
            return e.prototype.getValue = function() {
                return this.classes$.lastValue.join(" ")
            }, e.prototype.hasClass = function(e) {
                var t = this.classes$.lastValue;
                return xi(t, e)
            }, e.prototype.addClass = function(e) {
                var t = this.classes$.lastValue;
                if (!this.hasClass(e)) {
                    var n = de(de([], ce(t), !1), [e], !1);
                    this.classes$.next(n)
                }
            }, e.prototype.removeClass = function(e) {
                var t = this.classes$.lastValue.filter((function(t) {
                    return t !== e
                }));
                this.classes$.next(t)
            }, e.prototype.toggleClass = function(e) {
                this.hasClass(e) ? this.removeClass(e) : this.addClass(e)
            }, e
        }(),
        Ci = function(e, t) {
            return e.filter((function(e) {
                return !!t[e]
            }))
        },
        Ti = function(e, t) {
            return Ci(e.split("|"), t).join("|")
        },
        Ni = ["services", "tunings", "language", "account", "widgetPageLang", "site-language"],
        Li = function() {
            var e = window.location.search,
                t = new URLSearchParams(e),
                n = {};
            return t.forEach((function(e, t) {
                if (Ni.includes(t)) try {
                    n[t] = JSON.parse(e)
                } catch (i) {
                    n[t] = e
                }
            })), n
        },
        Ai = F(null),
        Pi = function() {
            var e = ot(),
                t = Ae({}),
                n = ce(Te(!1), 2),
                i = n[0],
                r = n[1],
                a = ce(Te(null), 2),
                o = a[0],
                s = a[1],
                l = ce(Te(null), 2),
                u = l[0],
                c = l[1],
                d = ce(Te(null), 2),
                f = d[0],
                g = d[1],
                h = ce(Te(null), 2),
                _ = h[0],
                p = h[1],
                v = ce(Te(null), 2),
                m = v[0],
                w = v[1],
                y = ce(Te(!1), 2),
                b = y[0],
                x = y[1],
                k = Pe((function() {
                    return Ci(Ke, fi)
                }), []),
                S = Pe((function() {
                    return Ti("s3|s6|s4|s14|s13|s25|s7|s2|s12|s17|s19|s23", fi)
                }), []),
                C = Pe((function() {
                    return Ti(Ze, fi)
                }), []),
                T = ce(Te(null), 2),
                N = T[0],
                L = T[1],
                A = ce(Te(!1), 2),
                P = A[0],
                E = A[1],
                O = ce(Te(null), 2),
                R = O[0],
                M = O[1],
                I = ce(Te(null), 2),
                D = I[0],
                H = I[1],
                F = ce(Te(null), 2),
                j = F[0],
                B = F[1],
                U = ce(Te(null), 2),
                z = U[0],
                W = U[1],
                V = ce(Te(null), 2),
                $ = V[0],
                Y = V[1],
                X = ce(Te(null), 2),
                q = X[0],
                K = X[1],
                G = ce(Te(null), 2),
                Z = G[0],
                J = G[1],
                Q = ce(Te(null), 2),
                ee = Q[0],
                te = Q[1],
                ne = ce(Te(null), 2),
                ie = ne[0],
                re = ne[1],
                oe = ce(Te(null), 2),
                ue = oe[0],
                de = oe[1],
                fe = ce(Te(!0), 2),
                ge = fe[0],
                he = fe[1],
                _e = ce(Te("full"), 2),
                pe = _e[0],
                ve = _e[1],
                me = ce(Te(null), 2),
                we = me[0],
                ye = me[1],
                be = ce(Te({
                    custom_logo_image_path: "",
                    custom_logo_image_link: "",
                    custom_logo_image_link_no_schema: ""
                }), 2),
                xe = be[0],
                ke = be[1],
                Se = Ae({
                    featuresPattern: S
                }),
                Ce = ce(Te(!1), 2),
                Ne = Ce[0],
                Oe = Ce[1],
                Re = Ae(null),
                Me = Ae([]),
                Ie = ce(Te(null), 2),
                De = Ie[0],
                He = Ie[1],
                Fe = ce(Te(!1), 2),
                je = Fe[0],
                Be = Fe[1],
                Ye = ce(Te({
                    WHITE_LABEL: !1,
                    CUSTOM_BRANDING: !1,
                    MODIFY_MENU: !1,
                    USAGE_STATS: !1,
                    REMEDIATION: !1,
                    LIVE_TRANSLATIONS: !1,
                    VOICE_NAVIGATION: !1
                }), 2),
                Xe = Ye[0],
                qe = Ye[1],
                Je = function() {
                    var e = ce(Te(!1), 2),
                        t = e[0],
                        n = e[1],
                        i = ce(Te(!1), 2),
                        r = i[0],
                        a = i[1],
                        o = ce(Te(null), 2),
                        s = o[0],
                        l = o[1];
                    return Le((function() {
                        var e = function(e) {
                            var t = (void 0 === e ? {
                                data: {}
                            } : e).data;
                            "toggled" === t.action && ("show" === t.state && (setTimeout((function() {
                                n(!0)
                            })), a(!1), l((function() {
                                return t.trigger || wi.Main
                            })), hi.onOpen$.next(), Ue({
                                action: "widgetOpened"
                            })), "hide" === t.state && (a(!0), n(!1), Ue({
                                action: "widgetClosed"
                            })))
                        };
                        return window.addEventListener("message", e), Ue({
                                action: "isWidgetOpened"
                            }),
                            function() {
                                return window.removeEventListener("message", e)
                            }
                    }), []), {
                        close: Ee((function() {
                            Ue({
                                action: "on_demand_reader_stop"
                            }), Ue({
                                action: "close"
                            }), n(!1), s === wi.Main && a(!0), hi.onClose$.next()
                        }), [t, r]),
                        isOpen: t,
                        trigger: s,
                        isClosedByUser: r
                    }
                }(),
                Qe = Je.close,
                et = Je.isOpen,
                tt = Je.trigger,
                nt = Je.isClosedByUser;
            Le((function() {
                var e;
                (null === (e = document.fonts) || void 0 === e ? void 0 : e.ready) ? document.fonts.ready.then((function() {
                    E(!0)
                })): E(!0)
            }), []);
            var it = function(e, t) {
                    qe((function(e) {
                            return ae(ae({}, e), {
                                MODIFY_MENU: !0
                            })
                        })),
                        function(e, t) {
                            var n = e.features_pattern.split("|").filter((function(e) {
                                    return !!fi[e]
                                })),
                                i = t ? rt(n) : n.filter((function(e) {
                                    return !xi(k, e)
                                }));
                            Se.current = {
                                featuresPattern: di(i).join("|"),
                                colorMode: e.color_mode
                            }
                        }(e, t)
                },
                rt = function(e) {
                    var t = Ge.split("|");
                    return e.find((function(e) {
                        return xi(t, e)
                    })) ? e : e.concat(t)
                };

            function at(t, n, i, r) {
                var a, o;
                (a = t, o = {
                    o: n,
                    op: !0,
                    pa: i
                }, se(void 0, void 0, void 0, (function() {
                    return le(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, e.post("v1/tunings/".concat(a), o).catch((function(e) {
                                    console.error(e)
                                }))];
                            case 1:
                                return [2, t.sent().data]
                        }
                    }))
                }))).then((function(e) {
                    var t;
                    e && (ut(e.services, null !== (t = e.remediationV2) && void 0 !== t ? t : e.remediation), de(e.orgInfo))
                })).finally((function() {
                    return he(!1)
                }))
            }
            var st = function(e) {
                    qe((function(e) {
                        return ae(ae({}, e), {
                            WHITE_LABEL: !0
                        })
                    })), ye({
                        wlHideReport: e.hide_report,
                        wlHideManage: e.hide_manage,
                        wlHideLogo: e.hide_logo,
                        wlHideAsterisk: e.hide_asterisk
                    })
                },
                lt = function(e) {
                    qe((function(e) {
                        return ae(ae({}, e), {
                            CUSTOM_BRANDING: !0
                        })
                    })), ke({
                        custom_logo_image_path: e.custom_logo_image_path,
                        custom_logo_image_link: e.custom_logo_image_link,
                        custom_logo_image_link_no_schema: e.custom_logo_image_link ? e.custom_logo_image_link.replace(/(http|https):\/\//g, "") : null
                    })
                };

            function ut(e, t) {
                if (e) {
                    if (te(e.siteId), e[ze]) {
                        var n = e[ze];
                        st(n)
                    }
                    if (e[We]) {
                        n = e[We];
                        lt(n)
                    }
                    t && Object.keys(t).length && qe((function(e) {
                        return ae(ae({}, e), {
                            REMEDIATION: !0
                        })
                    }))
                }
            }
            var ct = function(e) {
                var t = function(e) {
                    var t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
                    if (!t) return [0, 0, 0];
                    var n = t[0];
                    3 === t[0].length && (n = n.split("").map((function(e) {
                        return e + e
                    })).join(""));
                    var i = parseInt(n, 16);
                    return [i >> 16 & 255, i >> 8 & 255, 255 & i]
                }(e.replace("#", ""));
                return function(e, t, n) {
                    return 1 - (.299 * e + .587 * t + .114 * n) / 255 < .5
                }(t[0], t[1], t[2])
            };

            function dt(e, t) {
                if (e) {
                    var n = Se.current.featuresPattern.split("|").filter((function(e) {
                            return !!e.trim() && !!fi[e]
                        })),
                        i = t ? n : n.filter((function(e) {
                            return !xi(k, e)
                        }));
                    Re.current = i.reduce((function(t, n) {
                        return t["userway-".concat(n)] = e["userway-".concat(n)], "s2" === n && (t["userway-s10"] = e["userway-s10"], t["userway-s16"] = e["userway-s16"]), "s7" === n && (t["userway-s15"] = e["userway-s15"]), t
                    }), {}), Oe(!0), Me.current = i
                }
            }
            var ft = function(e) {
                    var n, i, a, o;
                    t.current = e || {}, ve(e.widgetLayout), B(e.account), re(e.uid), ut(e.services, null);
                    var l, u = e.onPrem;
                    if (u && (ut(e.services, e.remediation), he(!1)), !u && e.account && e.origin) {
                        W(e.origin);
                        var d = (null === (n = e._userway_config) || void 0 === n ? void 0 : n.platfAppInstalledSiteId) || null;
                        at(e.account, e.origin, d, e.href)
                    }
                    vi.refreshWidget({
                        code: e.account
                    }), e.tunings && (! function(e, t) {
                        (e.widget_no_logo || t.noLogo) && K(!0), (e.widget_no_manage || t.noManage) && Y(!0), e.widget_no_report && J(!0)
                    }(e.tunings, e.services), l = e.tunings, H(l), l.widget_blocked_for_site && "on" === l.widget_blocked_for_site && r(!0), x((null === (i = e.tunings) || void 0 === i ? void 0 : i.widget_no_follow) || !1)), e.partner && w(e.partner);
                    var f = e.position,
                        h = e.userSpecificPosition;
                    h && s(+h), f && c(+f), g(e.href), p(null == e ? void 0 : e.account);
                    var _ = null;
                    !e.statement_url && !e.tunings.accessibility_url || e.tunings.accessibility_link_text || e.statement_text || !e.tunings.site_name || (_ = "widget.footer.statement.label"), M((function() {
                        var t = {};
                        t.text = e.statement_text || e.tunings.accessibility_link_text || _, t.link = e.statement_url || e.tunings.accessibility_url, t.link && !t.link.match("^http") && (t.link = "http://".concat(t.link));
                        var n = e.statement_url && e.statement_text;
                        return t.enabled = n || t.text && t.link && (!e.tunings.accessibility_link_enabled || "on" === e.tunings.accessibility_link_enabled), t
                    }));
                    var v = e.services,
                        m = v && !!v.paidAi;
                    v && v[$e] && v[$e].is_enabled && qe((function(e) {
                        return ae(ae({}, e), {
                            VOICE_NAVIGATION: !0
                        })
                    })), v && v[Ve] ? it(v[Ve], m) : m && (Se.current.featuresPattern = C), Be(m), dt(e.settings, m);
                    var y = (null === (a = t.current._userway_config) || void 0 === a ? void 0 : a.color) || (null == l ? void 0 : l.widget_color) || null,
                        b = (null === (o = t.current._userway_config) || void 0 === o ? void 0 : o.gradient) || (null == l ? void 0 : l.widget_color_gradient) || null;
                    He({
                        mainBfColor: y || "#0048FF",
                        gradient: b,
                        isLightColour: !!y && ct(y)
                    })
                },
                gt = Pe((function() {
                    return (null == D ? void 0 : D.hasOwnProperty("widget_sounds")) && (null == D ? void 0 : D.widget_sounds)
                }), [D]);
            return Le((function() {
                ! function() {
                    var e = Li(),
                        t = e.services,
                        n = e.tunings,
                        i = e.account;
                    ft({
                        services: t,
                        tunings: n,
                        account: i
                    }), Ue({
                        action: "getConfig"
                    }), window.addEventListener("message", (function(e) {
                        var t, n, i, r, a, o, s, l = e.data || {};
                        if ("sendConfig" === l.action) ft((null === (t = l.data) || void 0 === t ? void 0 : t.config) || l.config || {});
                        else if ("setWidgetColour" === l.action) {
                            var u = (null === (i = null === (n = l.config) || void 0 === n ? void 0 : n._userway_config) || void 0 === i ? void 0 : i.color) || (null === (r = l.payload) || void 0 === r ? void 0 : r.color) || null,
                                c = (null === (o = null === (a = l.config) || void 0 === a ? void 0 : a._userway_config) || void 0 === o ? void 0 : o.gradient) || (null === (s = l.payload) || void 0 === s ? void 0 : s.gradient) || null;
                            He({
                                mainBfColor: u || "#0048FF",
                                gradient: c,
                                isLightColour: !!u && ct(u)
                            })
                        } else "on_demand_reader_end" === l.action && yi.internalReaderStopped$.next()
                    }))
                }()
            }), []), {
                config: t,
                tunings: D,
                setTunings: H,
                settings: Re,
                settingsLoaded: Ne,
                tuningsFromServerInProgress: ge,
                accountIdCode: j,
                targetPageOrigin: z,
                widgetBlocked: i,
                widgetColors: De,
                whiteLabelOptions: we,
                updateWhiteLabelOptions: st,
                customBrandingOptions: xe,
                updateCustomBrandingOptions: lt,
                customMenuOptions: Se,
                enabledMenuFeatures: Me,
                modifyMenu: it,
                userSpecificPosition: o,
                setUserSpecificPosition: s,
                position: u,
                href: f,
                code: _,
                thisSiteId: ee,
                userId: ie,
                orgInfo: ue,
                accessibilityStatement: R,
                soundEffectsEnabled: gt,
                sendEvent: function() {
                    Ue({
                        action: "setProperties",
                        settings: Re.current,
                        pattern: Me.current
                    })
                },
                isOpen: et,
                isClosedByUser: nt,
                trigger: tt,
                close: Qe,
                paidProductsEnabled: Xe,
                setPaidProductsEnabled: qe,
                paidAi: je,
                setPaidAi: Be,
                noManage: $,
                noReport: Z,
                noLogo: q,
                previewCustomLogo: N,
                setPreviewCustomLogo: L,
                setAccessibilityStatement: M,
                areResourcesLoaded: P,
                refreshAccessibilityMenuConfig: dt,
                paidFeatures: k,
                defaultPattern: S,
                paidPattern: C,
                partner: m,
                widgetLayout: pe,
                isNoFollowEnabled: b,
                setIsNoFollowEnabled: x
            }
        };
    ! function(e) {
        e[e.Top = 0] = "Top", e[e.Bottom = 1] = "Bottom"
    }(bi || (bi = {}));
    var Ei = function() {
        function e() {
            this.viewUpdate$ = new Je, this.scrollContainer$ = new Je({
                replay: !0
            }), this.contentClass$ = new Je({
                initialState: ""
            }), this.mainContainer = new Si
        }
        return e.prototype.scrollTop = function(e, t) {
            void 0 === t && (t = !0);
            var n = this.scrollContainer$.lastValue;
            n && (t && n.scrollTo ? n.scrollTo({
                top: e,
                behavior: "smooth"
            }) : n.scrollTop = e)
        }, e.prototype.makeSureElementVisible = function(e) {
            var t = this.scrollContainer$.lastValue;
            if (t) {
                var n = function(e, t) {
                    var n = t.getBoundingClientRect(),
                        i = e.getBoundingClientRect();
                    return n.top - i.top < 0 ? bi.Top : n.bottom > i.bottom ? bi.Bottom : null
                }(t, e);
                if (null !== n) {
                    if (n === bi.Top) return e.scrollIntoView(!0), t.scroll(0, t.scrollTop - 10);
                    if (n === bi.Bottom) {
                        var i = e.getBoundingClientRect(),
                            r = t.getBoundingClientRect(),
                            a = i.bottom - r.bottom;
                        return t.scroll(0, t.scrollTop + a + 10)
                    }
                }
            }
        }, e
    }();
    window.layoutStore = new Ei;
    var Oi = window.layoutStore,
        Ri = function(e, t) {
            void 0 === t && (t = null);
            var n = ce(Te(t || e.lastValue), 2),
                i = n[0],
                r = n[1];
            Le((function() {
                var t = e.subscribe((function(e) {
                    r(e)
                }));
                return function() {
                    t()
                }
            }), [e, t, r]);
            return [i, function(t) {
                e.next(t)
            }]
        };
    var Mi = function(e, t) {
        return new Promise((function(n, i) {
            try {
                ! function(e, t, n, i) {
                    var r = document.body || document.head,
                        a = document.createElement("script");
                    a.onload = function() {
                        t()
                    }, a.onerror = function(e) {
                        n(e)
                    }, a.src = e, i && i.charset && (a.charset = i.charset), i && i.id && (a.id = i.id), r.appendChild(a)
                }(e, n, i, t)
            } catch (e) {
                i(e)
            }
        }))
    };
    var Ii, Di = function(e) {
        return new Promise((function(t, n) {
            try {
                i = e, r = t, a = n, o = document.head || document.querySelector("head"), (s = document.createElement("link")).rel = "stylesheet", s.href = i, s.onload = function() {
                    r && r()
                }, s.onerror = function(e) {
                    a(e)
                }, o.appendChild(s)
            } catch (e) {
                n(e)
            }
            var i, r, a, o, s
        }))
    };
    ! function(e) {
        e[e.X = 0] = "X", e[e.Y = 1] = "Y", e[e.XY = 2] = "XY"
    }(Ii || (Ii = {}));
    var Hi, Fi = function(e, t, n) {
            void 0 === n && (n = Ii.XY);
            var i = function() {
                    var e = ce(Te(window.innerWidth), 2),
                        t = e[0],
                        n = e[1],
                        i = ce(Te(window.innerHeight), 2),
                        r = i[0],
                        a = i[1];
                    return Le((function() {
                        var e = function() {
                            n(window.innerWidth), a(window.innerHeight)
                        };
                        return window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }), []), {
                        width: t,
                        height: r
                    }
                }(),
                r = i.width,
                a = i.height,
                o = Ae(),
                s = ce(Te(!1), 2),
                l = s[0],
                u = s[1],
                c = ce(Te(null), 2),
                d = c[0],
                f = c[1],
                g = Ae({
                    positionX: null,
                    positionY: null,
                    windowWidth: null,
                    windowHeight: null,
                    isStickedToRight: !1
                }),
                h = function(e, n) {
                    var i = window.innerWidth,
                        r = window.innerHeight,
                        a = t.offsetWidth,
                        o = t.offsetHeight,
                        s = n === Ii.X;
                    return function(t) {
                        var n = t.draggableAreaSize,
                            i = t.limit;
                        return e < 0 ? 0 : e + n > i ? i - n : e
                    }({
                        draggableAreaSize: s ? a : o,
                        limit: s ? i : r
                    })
                },
                _ = function(e, n) {
                    var i = g.current,
                        r = i.positionX,
                        a = i.positionY,
                        o = i.windowWidth,
                        s = i.windowHeight,
                        l = i.isStickedToRight;
                    switch (n) {
                        case Ii.X:
                            return l ? window.innerWidth - t.offsetWidth : Number(r) * window.innerWidth / Number(o);
                        case Ii.Y:
                            return Number(a) * window.innerHeight / Number(s);
                        default:
                            return e
                    }
                },
                p = function(e, i) {
                    switch (n) {
                        case Ii.X:
                            t.style.left = "".concat(e, "px");
                            break;
                        case Ii.Y:
                            t.style.top = "".concat(i, "px");
                            break;
                        case Ii.XY:
                        default:
                            t.style.left = "".concat(e, "px"), t.style.top = "".concat(i, "px")
                    }
                    g.current = {
                        windowWidth: window.innerWidth,
                        windowHeight: window.innerHeight,
                        positionX: e,
                        positionY: i,
                        isStickedToRight: e + t.offsetWidth === window.innerWidth
                    }
                },
                v = function() {
                    var e = window.getComputedStyle(t);
                    return {
                        draggableAreaPositionX: +e.left.slice(0, -2),
                        draggableAreaPositionY: +e.top.slice(0, -2)
                    }
                },
                m = function(e) {
                    if (d) {
                        var t = d.mouseStartPositionX,
                            n = d.mouseStartPositionY,
                            i = d.draggableAreaPositionX,
                            r = d.draggableAreaPositionY,
                            a = e.clientX - t,
                            s = e.clientY - n;
                        if (!(Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2)) < 8)) {
                            var l = Date.now(),
                                u = l - Number(o.current),
                                c = h(i + a, Ii.X),
                                f = h(r + s, Ii.Y);
                            u > 10 && (o.current = l, p(c, f))
                        }
                    }
                },
                w = function(e) {
                    u(!1), m(e)
                },
                y = function(e) {
                    var t = v(),
                        n = t.draggableAreaPositionX,
                        i = t.draggableAreaPositionY;
                    o.current = Date.now(), u(!0), f({
                        mouseStartPositionX: e.clientX,
                        mouseStartPositionY: e.clientY,
                        draggableAreaPositionX: n,
                        draggableAreaPositionY: i
                    })
                },
                b = function() {
                    if (t) {
                        var e = v(),
                            n = e.draggableAreaPositionX,
                            i = e.draggableAreaPositionY,
                            r = _(n, Ii.X),
                            a = _(i, Ii.Y),
                            s = h(r, Ii.X),
                            l = h(a, Ii.Y);
                        o.current = Date.now(), p(s, l)
                    }
                };
            return Le((function() {
                e && (e.onmousedown = y)
            }), [e]), Le((function() {
                if (t) {
                    var e = v(),
                        n = e.draggableAreaPositionX,
                        i = e.draggableAreaPositionY;
                    n && i || (t.style.position = "absolute");
                    var r = new ResizeObserver((function() {
                        return b()
                    }));
                    return r.observe(t),
                        function() {
                            return r.unobserve(t)
                        }
                }
            }), [t]), Le((function() {
                if (d) {
                    var e = function() {
                        document.removeEventListener("mousemove", m), document.removeEventListener("mouseup", w)
                    };
                    return l ? (document.addEventListener("mousemove", m), document.addEventListener("mouseup", w)) : e(), e
                }
            }), [d, l]), Le((function() {
                b()
            }), [r, a]), {
                resetPosition: function() {
                    var e = t.style,
                        n = e.left,
                        i = e.top;
                    g.current = {
                        windowWidth: window.innerWidth,
                        windowHeight: window.innerHeight,
                        positionX: +n.slice(0, -2),
                        positionY: +i.slice(0, -2),
                        isStickedToRight: !1
                    }
                }
            }
        },
        ji = function() {
            var e = ce(Te(null), 2),
                t = e[0],
                n = e[1];
            return [t, Ee((function(e) {
                n(e)
            }), [n])]
        },
        Bi = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    ! function(e) {
        e.FirstElement = "setFirstFocusableElement", e.BeforeLastElement = "setBeforeLastFocusableElement", e.LastElement = "setLastFocusableElement"
    }(Hi || (Hi = {}));
    var Ui = F({
            setFirstFocusableElement: function() {},
            setBeforeLastFocusableElement: function() {},
            setLastFocusableElement: function() {}
        }),
        zi = function(e, t) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            var r = Oe(Ui);
            return Ee((function(n) {
                if (t && (t.current = n), n) {
                    var i = null,
                        a = Array.from(n.querySelectorAll(Bi));
                    a = a.filter((function(e) {
                        return !e.tabIndex || -1 !== e.tabIndex
                    })), n.matches(Bi) && (a = de([n], ce(a), !1)), i = e === Hi.FirstElement ? a[0] : a[a.length - 1], r[e](i)
                }
            }), de([r], ce(n), !1))
        },
        Wi = function(e, t) {
            var n, i, r = e;
            try {
                for (var a = ue(t), o = a.next(); !o.done; o = a.next()) {
                    if (null == (r = r[o.value])) return null
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (i = a.return) && i.call(a)
                } finally {
                    if (n) throw n.error
                }
            }
            return r
        },
        Vi = "ontouchstart" in document.documentElement,
        $i = function(e, t, n) {
            return (t = t || 0 === t ? t : e) > (n = n || 0 === n ? n : e) ? (console.error("min limit is greater than max limit"), e) : e < t ? t : e > n ? n : e
        };

    function Yi(e, t) {
        return e.clientX > t.left && e.clientX < t.right && e.clientY > t.top && e.clientY < t.top + t.height
    }
    var Xi = function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.innerContainerRef = {
                current: null
            }, n.customScrollbarRef = {
                current: null
            }, n.scrollHandleRef = {
                current: null
            }, n.contentWrapperRef = {
                current: null
            }, n.containerRef = {
                current: null
            }, n.adjustFreezePosition = function(e) {
                if (n.contentWrapperRef.current) {
                    var t = n.getScrolledElement(),
                        i = n.contentWrapperRef.current;
                    n.props.freezePosition && (i.scrollTop = n.state.scrollPos), e.freezePosition && (t.scrollTop = n.state.scrollPos)
                }
            }, n.toggleScrollIfNeeded = function() {
                var e = n.contentHeight - n.visibleHeight > 1;
                n.hasScroll !== e && (n.hasScroll = e, n.forceUpdate())
            }, n.updateScrollPosition = function(e) {
                var t = n.getScrolledElement(),
                    i = $i(e, 0, n.contentHeight - n.visibleHeight);
                t.scrollTop = i, n.setState({
                    scrollPos: i
                })
            }, n.onClick = function(e) {
                if (n.hasScroll && n.isMouseEventOnCustomScrollbar(e) && !n.isMouseEventOnScrollHandle(e)) {
                    var t = n.calculateNewScrollHandleTop(e),
                        i = n.getScrollValueFromHandlePosition(t);
                    n.updateScrollPosition(i)
                }
            }, n.isMouseEventOnCustomScrollbar = function(e) {
                if (!n.customScrollbarRef.current) return !1;
                var t = n.containerRef.current.getBoundingClientRect(),
                    i = n.customScrollbarRef.current.getBoundingClientRect(),
                    r = n.props.rtl ? {
                        left: t.left,
                        right: i.right
                    } : {
                        left: i.left,
                        width: t.right
                    };
                return Yi(e, Object.assign({}, {
                    left: t.left,
                    right: t.right,
                    top: t.top,
                    height: t.height
                }, r))
            }, n.isMouseEventOnScrollHandle = function(e) {
                return !!n.scrollHandleRef.current && function(e, t) {
                    return Yi(e, t.getBoundingClientRect())
                }(e, n.scrollHandleRef.current)
            }, n.calculateNewScrollHandleTop = function(e) {
                var t = n.containerRef.current.getBoundingClientRect().top + window.pageYOffset,
                    i = e.pageY - t,
                    r = n.getScrollHandleStyle().top;
                return i > r + n.scrollHandleHeight ? r + Math.min(n.scrollHandleHeight, n.visibleHeight - n.scrollHandleHeight) : r - Math.max(n.scrollHandleHeight, 0)
            }, n.getScrollValueFromHandlePosition = function(e) {
                return e / n.scrollRatio
            }, n.getScrollHandleStyle = function() {
                var e = n.state.scrollPos * n.scrollRatio;
                return n.scrollHandleHeight = n.visibleHeight * n.scrollRatio, {
                    height: n.scrollHandleHeight,
                    top: e
                }
            }, n.adjustCustomScrollPosToContentPos = function(e) {
                n.setState({
                    scrollPos: e
                })
            }, n.onScroll = function(e) {
                n.props.freezePosition || (n.hideScrollThumb(), n.adjustCustomScrollPosToContentPos(e.currentTarget.scrollTop), n.props.onScroll && n.props.onScroll(e))
            }, n.getScrolledElement = function() {
                return n.scrollContainerRef.current
            }, n.onMouseDown = function(e) {
                n.hasScroll && n.isMouseEventOnScrollHandle(e) && (n.startDragHandlePos = n.getScrollHandleStyle().top, n.startDragMousePos = e.pageY, n.setState({
                    onDrag: !0
                }), document.addEventListener("mousemove", n.onHandleDrag, {
                    passive: !1
                }), document.addEventListener("mouseup", n.onHandleDragEnd, {
                    passive: !1
                }))
            }, n.onTouchStart = function() {
                n.setState({
                    onDrag: !0
                })
            }, n.onHandleDrag = function(e) {
                e.preventDefault();
                var t = e.pageY - n.startDragMousePos,
                    i = $i(n.startDragHandlePos + t, 0, n.visibleHeight - n.scrollHandleHeight),
                    r = n.getScrollValueFromHandlePosition(i);
                n.updateScrollPosition(r)
            }, n.onHandleDragEnd = function(e) {
                n.setState({
                    onDrag: !1
                }), e.preventDefault(), document.removeEventListener("mousemove", n.onHandleDrag), document.removeEventListener("mouseup", n.onHandleDragEnd)
            }, n.blockOuterScroll = function(e) {
                if (!n.props.allowOuterScroll) {
                    var t = e.currentTarget,
                        i = t.scrollHeight - t.offsetHeight,
                        r = e.deltaY % 3 ? e.deltaY : 10 * e.deltaY;
                    t.scrollTop + r <= 0 ? (t.scrollTop = 0, e.preventDefault()) : t.scrollTop + r >= i && (t.scrollTop = i, e.preventDefault()), e.stopPropagation()
                }
            }, n.getInnerContainerClasses = function() {
                return n.state.scrollPos && n.props.addScrolledClass ? "inner-container content-scrolled" : "inner-container"
            }, n.getScrollStyles = function() {
                var e = n.scrollbarYWidth || 0,
                    t = n.props.rtl ? "marginLeft" : "marginRight",
                    i = {
                        height: n.props.heightRelativeToParent || n.props.flex ? "100%" : ""
                    },
                    r = {
                        height: n.props.heightRelativeToParent || n.props.flex ? "100%" : "",
                        overflowY: n.props.freezePosition ? "hidden" : "visible"
                    };
                return e && (i[t] = -1 * e, r[t] = 0), {
                    innerContainer: i,
                    contentWrapper: r
                }
            }, n.getOuterContainerStyle = function() {
                return {
                    height: n.props.heightRelativeToParent || n.props.flex ? "100%" : ""
                }
            }, n.getRootStyles = function() {
                var e = {};
                return n.props.heightRelativeToParent || n.props.flex && (e.flex = n.props.flex), e
            }, n.enforceMinHandleHeight = function(e) {
                var t = Number(n.props.minScrollHandleHeight);
                if (e.height >= t) return e;
                var i = (t - e.height) * (n.state.scrollPos / (n.contentHeight - n.visibleHeight));
                return {
                    height: t,
                    top: e.top - i
                }
            }, n.scrollbarYWidth = 0, n.state = {
                scrollPos: 0,
                onDrag: !1
            }, n.hideScrollThumb = function(e, t) {
                var n;

                function i() {
                    clearTimeout(n)
                }

                function r() {
                    for (var r = [], a = 0; a < arguments.length; a++) r[a] = arguments[a];
                    i(), n = setTimeout((function() {
                        e.apply(void 0, de([], ce(r), !1))
                    }), t)
                }
                return r.cancel = i, r
            }((function() {
                n.setState({
                    onDrag: !1
                })
            }), 500), n
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function n() {
                this.constructor = e
            }
            re(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }(t, e), Object.defineProperty(t.prototype, "scrollContainerRef", {
            get: function() {
                return this.props.scrollContainerRef || this.innerContainerRef
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.componentDidMount = function() {
            void 0 !== this.props.scrollTo && null !== this.props.scrollTo ? this.updateScrollPosition(this.props.scrollTo) : this.forceUpdate(), this.scrollContainerRef.current && this.scrollContainerRef.current.addEventListener("wheel", this.blockOuterScroll, {
                passive: !1
            })
        }, t.prototype.componentDidUpdate = function(e, t) {
            var n = this.contentHeight,
                i = this.visibleHeight,
                r = this.getScrolledElement(),
                a = t.scrollPos >= n - i;
            this.contentHeight = r.scrollHeight, this.scrollbarYWidth = r.offsetWidth - r.clientWidth, this.visibleHeight = r.clientHeight, this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 1, this.toggleScrollIfNeeded();
            var o = this.state === t;
            (this.props.freezePosition || e.freezePosition) && this.adjustFreezePosition(e), void 0 !== this.props.scrollTo && this.props.scrollTo !== e.scrollTo && null !== this.props.scrollTo ? this.updateScrollPosition(this.props.scrollTo) : this.props.keepAtBottom && o && a && this.updateScrollPosition(this.contentHeight - this.visibleHeight)
        }, t.prototype.componentWillUnmount = function() {
            this.hideScrollThumb.cancel(), document.removeEventListener("mousemove", this.onHandleDrag), document.removeEventListener("mouseup", this.onHandleDragEnd), this.scrollContainerRef.current && this.scrollContainerRef.current.removeEventListener("wheel", this.blockOuterScroll)
        }, t.prototype.render = function() {
            var e, t = this.getScrollStyles(),
                n = this.getRootStyles(),
                i = this.enforceMinHandleHeight(this.getScrollHandleStyle()),
                r = [this.props.className || "", "custom-scroll", this.state.onDrag ? "scroll-handle-dragged" : ""].join(" "),
                a = null === (e = this.containerRef.current) || void 0 === e ? void 0 : e.offsetHeight;
            return v("div", {
                className: r,
                style: n,
                ref: this.containerRef
            }, v("div", {
                className: "outer-container",
                style: this.getOuterContainerStyle(),
                onMouseDown: this.onMouseDown,
                onTouchStart: this.onTouchStart,
                onClick: this.onClick
            }, this.hasScroll ? v("div", {
                className: "positioning"
            }, v("div", {
                ref: this.customScrollbarRef,
                style: {
                    height: "".concat(a, "px")
                },
                className: "custom-scrollbar ".concat(this.props.rtl ? "custom-scrollbar-rtl" : ""),
                key: "scrollbar"
            }, v("div", {
                ref: this.scrollHandleRef,
                className: "custom-scroll-handle",
                style: i
            }, v("div", {
                className: this.props.handleClass
            })))) : null, v("div", {
                ref: this.scrollContainerRef,
                className: this.getInnerContainerClasses(),
                style: t.innerContainer,
                onScroll: this.onScroll,
                tabIndex: -1
            }, v("div", {
                className: "content-wrapper",
                ref: this.contentWrapperRef,
                style: t.contentWrapper
            }, this.props.children))))
        }, t.defaultProps = {
            handleClass: "inner-handle",
            minScrollHandleHeight: 38
        }, t
    }(y);

    function qi(e, t) {
        for (var n in e)
            if ("__source" !== n && !(n in t)) return !0;
        for (var i in t)
            if ("__source" !== i && e[i] !== t[i]) return !0;
        return !1
    }

    function Ki(e, t) {
        this.props = e, this.context = t
    }(Ki.prototype = new y).isPureReactComponent = !0, Ki.prototype.shouldComponentUpdate = function(e, t) {
        return qi(this.props, e) || qi(this.state, t)
    };
    var Gi = t.__b;
    t.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Gi && Gi(e)
    };
    var Zi = t.__e;
    t.__e = function(e, t, n, i) {
        if (e.then)
            for (var r, a = t; a = a.__;)
                if ((r = a.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
        Zi(e, t, n, i)
    };
    var Ji = t.unmount;

    function Qi(e, t, n) {
        return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
            "function" == typeof e.__c && e.__c()
        })), e.__c.__H = null), null != (e = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map((function(e) {
            return Qi(e, t, n)
        }))), e
    }

    function er(e, t, n) {
        return e && n && (e.__v = null, e.__k = e.__k && e.__k.map((function(e) {
            return er(e, t, n)
        })), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e
    }

    function tr() {
        this.__u = 0, this.t = null, this.__b = null
    }

    function nr(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e)
    }

    function ir() {
        this.u = null, this.o = null
    }
    t.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ji && Ji(e)
    }, (tr.prototype = new y).__c = function(e, t) {
        var n = t.__c,
            i = this;
        null == i.t && (i.t = []), i.t.push(n);
        var r = nr(i.__v),
            a = !1,
            o = function() {
                a || (a = !0, n.__R = null, r ? r(s) : s())
            };
        n.__R = o;
        var s = function() {
            if (!--i.__u) {
                if (i.state.__a) {
                    var e = i.state.__a;
                    i.__v.__k[0] = er(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (i.setState({
                        __a: i.__b = null
                    }); t = i.t.pop();) t.forceUpdate()
            }
        };
        i.__u++ || 32 & t.__u || i.setState({
            __a: i.__b = i.__v.__k[0]
        }), e.then(o, o)
    }, tr.prototype.componentWillUnmount = function() {
        this.t = []
    }, tr.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"),
                    i = this.__v.__k[0].__c;
                this.__v.__k[0] = Qi(this.__b, n, i.__O = i.__P)
            }
            this.__b = null
        }
        var r = t.__a && v(w, null, e.fallback);
        return r && (r.__u &= -33), [v(w, null, t.__a ? null : e.children), r]
    };
    var rr = function(e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
            for (n = e.u; n;) {
                for (; n.length > 3;) n.pop()();
                if (n[1] < n[0]) break;
                e.u = n = n[2]
            }
    };
    (ir.prototype = new y).__a = function(e) {
        var t = this,
            n = nr(t.__v),
            i = t.o.get(e);
        return i[0]++,
            function(r) {
                var a = function() {
                    t.props.revealOrder ? (i.push(r), rr(t, e, i)) : r()
                };
                n ? n(a) : a()
            }
    }, ir.prototype.render = function(e) {
        this.u = null, this.o = new Map;
        var t = N(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
        return e.children
    }, ir.prototype.componentDidUpdate = ir.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach((function(t, n) {
            rr(e, n, t)
        }))
    };
    var ar = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
        or = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        sr = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
        lr = /[A-Z0-9]/g,
        ur = "undefined" != typeof document,
        cr = function(e) {
            return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e)
        };
    y.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
        Object.defineProperty(y.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e]
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                })
            }
        })
    }));
    var dr = t.event;

    function fr() {}

    function gr() {
        return this.cancelBubble
    }

    function hr() {
        return this.defaultPrevented
    }
    t.event = function(e) {
        return dr && (e = dr(e)), e.persist = fr, e.isPropagationStopped = gr, e.isDefaultPrevented = hr, e.nativeEvent = e
    };
    var _r = {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return this.class
            }
        },
        pr = t.vnode;
    t.vnode = function(e) {
        "string" == typeof e.type && function(e) {
            var t = e.props,
                n = e.type,
                i = {},
                r = -1 === n.indexOf("-");
            for (var a in t) {
                var o = t[a];
                if (!("value" === a && "defaultValue" in t && null == o || ur && "children" === a && "noscript" === n || "class" === a || "className" === a)) {
                    var s = a.toLowerCase();
                    "defaultValue" === a && "value" in t && null == t.value ? a = "value" : "download" === a && !0 === o ? o = "" : "translate" === s && "no" === o ? o = !1 : "o" === s[0] && "n" === s[1] ? "ondoubleclick" === s ? a = "ondblclick" : "onchange" !== s || "input" !== n && "textarea" !== n || cr(t.type) ? "onfocus" === s ? a = "onfocusin" : "onblur" === s ? a = "onfocusout" : sr.test(a) && (a = s) : s = a = "oninput" : r && or.test(a) ? a = a.replace(lr, "-$&").toLowerCase() : null === o && (o = void 0), "oninput" === s && i[a = s] && (a = "oninputCapture"), i[a] = o
                }
            }
            "select" == n && i.multiple && Array.isArray(i.value) && (i.value = N(t.children).forEach((function(e) {
                e.props.selected = -1 != i.value.indexOf(e.props.value)
            }))), "select" == n && null != i.defaultValue && (i.value = N(t.children).forEach((function(e) {
                e.props.selected = i.multiple ? -1 != i.defaultValue.indexOf(e.props.value) : i.defaultValue == e.props.value
            }))), t.class && !t.className ? (i.class = t.class, Object.defineProperty(i, "className", _r)) : (t.className && !t.class || t.class && t.className) && (i.class = i.className = t.className), e.props = i
        }(e), e.$$typeof = ar, pr && pr(e)
    };
    var vr = t.__r;
    t.__r = function(e) {
        vr && vr(e), e.__c
    };
    var mr = t.diffed;
    t.diffed = function(e) {
        mr && mr(e);
        var t = e.props,
            n = e.__e;
        null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value)
    };
    var wr, yr = function() {
            return Math.round(Math.random() * Math.pow(36, 12)).toString(36)
        },
        br = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        xr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), v("g", {
                fill: "none",
                "fill-rule": "evenodd",
                stroke: "currentColor",
                transform: "translate(1 1)"
            }, v("circle", {
                cx: 7,
                cy: 7,
                r: 7,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 1.5
            }), v("circle", {
                cx: 7,
                cy: 7,
                r: 3.5,
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 1.5
            }), v("circle", {
                cx: 7,
                cy: 7,
                r: 1,
                fill: "currentColor"
            })))
        },
        kr = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, br), r)
            }, v(xr, ae({}, i)))
        },
        Sr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Cr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 8 14"
            }, e), v("path", {
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 2,
                d: "M7 1 1 7l6 6"
            }))
        },
        Tr = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Sr), r)
            }, v(Cr, ae({}, i)))
        },
        Nr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Lr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 13"
            }, e), v("path", {
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 1.5,
                d: "M1 7.3823532h3.6V5.5211767c0-.5964675.48353247-1.08 1.08-1.08.5964675 0 1.08.4835325 1.08 1.08v5.4169853c0 .60268073.4885693 1.09125 1.09125 1.09125.6026807 0 1.09125-.48856927 1.09125-1.09125V2.5687502c0-.5902543.4784957-1.06875 1.06875-1.06875s1.06875.4784957 1.06875 1.06875v6.85125c0 .5964676.4835325 1.08 1.08 1.08.5964675 0 1.08-.4835324 1.08-1.08V5.5211767c0-.5964675.4835325-1.08 1.08-1.08.5964675 0 1.08.4835325 1.08 1.08v1.8611765H19"
            }))
        },
        Ar = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Nr), r)
            }, v(Lr, ae({}, i)))
        },
        Pr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Er = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 9"
            }, e), v("path", {
                fill: "currentColor",
                d: "M9.61611652.61611652c.48815538-.48815536 1.27961158-.48815536 1.76776698 0 .4881553.48815537.4881553 1.27961159 0 1.76776696l-6.00000002 6c-.48815537.48815536-1.27961159.48815536-1.76776696 0l-3-3c-.48815536-.48815537-.48815536-1.27961159 0-1.76776696.48815537-.48815536 1.27961159-.48815536 1.76776696 0L4.5 5.733 9.61611652.61611652Z"
            }))
        },
        Or = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Pr), r)
            }, v(Er, ae({}, i)))
        },
        Rr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Mr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 6 11"
            }, e), v("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "m.5 10.5 5-5-5-5"
            }))
        },
        Ir = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Rr), r)
            }, v(Mr, ae({}, i)))
        },
        Dr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Hr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 11 11"
            }, e), v("path", {
                fill: "currentColor",
                d: "M1.11611652 1.11611652c.48815537-.48815536 1.27961159-.48815536 1.76776696 0L5.5 3.733l2.61611652-2.61688348c.48815537-.48815536 1.27961159-.48815536 1.76776696 0 .48815536.48815537.48815536 1.27961159 0 1.76776696L7.267 5.5l2.61688348 2.61611652c.45561167.45561168.48598578 1.1754321.09112233 1.66627161l-.09112233.10149535c-.48815537.48815536-1.27961159.48815536-1.76776696 0L5.5 7.267 2.88388348 9.88388348c-.48815537.48815536-1.2796116.48815536-1.76776696 0-.48815536-.48815537-.48815536-1.27961159 0-1.76776696L3.733 5.5 1.11611652 2.88388348c-.45561167-.45561168-.48598578-1.1754321-.09112233-1.6662716Z"
            }))
        },
        Fr = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Dr), r)
            }, v(Hr, ae({}, i)))
        },
        jr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Br = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 14"
            }, e), v("path", {
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-width": 2,
                d: "m2.30436241 2.30436238 9.39127515 9.39127515m-9.39127518 6e-8 9.39127515-9.39127515"
            }))
        },
        Ur = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, jr), r)
            }, v(Br, ae({}, i)))
        },
        zr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Wr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 12"
            }, e), v("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "M3.4305674 2.28495811c0-.29900421-.0035071-.5816392.0006908-.86416789.0100965-.6746462.4400452-1.21600009 1.0909996-1.37910779.8740855-.2190182 1.7499778.45334269 1.7616153 1.35434135.0037729.29124478.0005845.58259585.0005845.88893433h.1520311c.6906493 0 1.3812986-.00031888 2.0719479.00015944.3570418.00021259.6691279.10900421.91208.38255108.1933733.21779582.2903522.47321957.2909368.76340147.0015941.7084476.0005313 1.4168952.0005313 2.1252896v.1565707c.2715941 0 .5314976-.0022853.7912949.0006378.254377.0028699.5002517.0418797.7295471.1649146.5329323.2859833.8426803.8785176.751281 1.448996-.1033024.6442993-.5548788 1.129849-1.1788385 1.2169567-.3001298.0418797-.6095589.0175916-.9148432.0229594-.0562744.0010098-.112655.0001063-.1784413.0001063v.161407c0 .6995721.0006377 1.3991442-.0002125 2.0987163-.000744.6465315-.4531174 1.1385651-1.0996612 1.159877-.5881439.0193986-1.1774569.0128615-1.766079.0028699-.3425349-.005793-.556101-.251172-.5632217-.5945007-.0040386-.1982378.0014348-.4022686-.0430958-.5930127-.1534127-.6571609-.7408127-1.1027973-1.4051581-1.0894574-.6564808.0132867-1.21763.4804476-1.3617434 1.1497791-.0368254.1711329-.0409171.3509819-.04469.5271637-.0077051.3596979-.2220153.5979553-.5828831.6018881-.6019069.006484-1.204239.0084504-1.8058802-.0078657-.51922249-.0140839-1.00156639-.4718909-1.02255635-.9932616-.0256662-.6364868-.01626057-1.2747805-.00797087-1.9120645.00334777-.2564336.23147406-.4753455.48739212-.4978266.16287144-.0143496.32717763-.0114266.49047418-.0220559.61556372-.0402854 1.12729352-.495063 1.26736832-1.1232589.1313599-.5889203-.1487896-1.2059553-.6753453-1.5050127-.2987482-.1696979-.61923025-.2269902-.95714199-.2183804-.23540635.0060056-.42771687-.0807301-.54106264-.2924671-.04410548-.0823777-.073332-.1834098-.07434164-.2763637-.00653612-.5755273-.00919307-1.1512672-.00138162-1.7267414.00903365-.65971191.50338699-1.12788258 1.18728759-1.13123083.6906493-.00334825 1.3812455-.00074406 2.0718948-.00074406h.1665911Z"
            }))
        },
        Vr = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, zr), r)
            }, v(Wr, ae({}, i)))
        },
        $r = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Yr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 16"
            }, e), v("g", {
                fill: "none",
                "fill-rule": "evenodd"
            }, v("path", {
                stroke: "currentColor",
                "stroke-linejoin": "round",
                "stroke-width": 1.5,
                d: "M10.18462518 7.77262463 6 1 1.749375 7.8845C1.2775 8.59733333 1 9.43383333 1 10.33333333 1 12.9105 3.23875 15 6 15s5-2.0895 5-4.66666667c0-.88617554-.74237577-2.438274-.749375-2.44883333l-.06599982-.11187537Z"
            }), v("path", {
                fill: "currentColor",
                d: "M6 15c2.76125 0 5-2.0895 5-4.66666667 0-.88617554-.74237577-2.438274-.749375-2.44883333l-.06599982-.11187537L6 1"
            })))
        },
        Xr = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, $r), r)
            }, v(Yr, ae({}, i)))
        },
        qr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Kr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 13"
            }, e), v("g", {
                fill: "none",
                "fill-rule": "evenodd",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 1.5
            }, v("path", {
                d: "M13 7v5H1V7"
            }), v("path", {
                d: "m4 6 3 3 3-3M7 1v8"
            })))
        },
        Gr = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, qr), r)
            }, v(Kr, ae({}, i)))
        },
        Zr = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Jr = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 11"
            }, e), v("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                stroke: "currentColor",
                "stroke-width": .5,
                d: "M1 10V1.4125h2.8968759c2.7220645 0 4.6449908 1.775 4.6449908 4.2875 0 2.5125-1.9229263 4.3-4.6449908 4.3H1Zm.97395-1.7631818h1.9229263c2.1476839 0 3.6585545-1.1706833 3.6585545-2.9740909C7.5554308 3.470591 6.0445602 2.3 3.8968763 2.3H1.97395v5.9368182ZM11.809437 2.65l.004584.8875h1.605048v.8375h-1.600688L12.008 10h-1.414166L10.812 4.375h-.969534v-.8375h1.023692l.030044-.8875c.0320746-.9625.6440977-1.65 1.482911-1.65.396736 0 .7919618.15 1.120887.4125l-.385091.6875c-.1391915-.15-.3806405-.2625-.651108-.2625-.3527837 0-.6568024.3375-.654364.8125Z"
            }))
        },
        Qr = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Zr), r)
            }, v(Jr, ae({}, i)))
        },
        ea = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        ta = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 10 8"
            }, e), v("path", {
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 1.75,
                d: "m1.5 4.5 2 2 5-5"
            }))
        },
        na = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, ea), r)
            }, v(ta, ae({}, i)))
        },
        ia = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        ra = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 12"
            }, e), v("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "M3.81818182 6c0-1.2049091.97690908-2.18181818 2.18181818-2.18181818S8.1818182 4.7950909 8.1818182 6 7.2049091 8.1818182 6 8.1818182 3.81818182 7.2049091 3.81818182 6ZM12 7.0909091V4.9090909l-1.5763636-.2956364c-.0823637-.264-.1903637-.5170909-.3169091-.75872723l.9070909-1.326L9.4712727.98618182l-1.326.90709091c-.2416363-.12654546-.4947272-.23454546-.7587272-.31690909L7.0909091 0H4.9090909l-.2956364 1.57636364c-.264.08236363-.5170909.19036363-.75872723.31690909l-1.326-.90709091L.98618182 2.52872727l.90709091 1.326c-.12654546.24163633-.23454546.49472723-.31690909.75872723L0 4.9090909v2.1818182l1.57636364.2956364c.08236363.264.19036363.5170909.31690909.7587272l-.90709091 1.326 1.54254545 1.5425455 1.326-.9070909c.24163633.1265454.49472723.2345454.75872723.3169091L4.9090909 12h2.1818182l.2956364-1.5763636c.264-.0823637.5170909-.1903637.7587272-.3169091l1.326.9070909 1.5425455-1.5425455-.9070909-1.326c.1265454-.2416363.2345454-.4947272.3169091-.7587272L12 7.0909091Z"
            }))
        },
        aa = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, ia), r)
            }, v(ra, ae({}, i)))
        },
        oa = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        sa = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 2 9"
            }, e), v("g", {
                fill: "none",
                "fill-rule": "evenodd",
                transform: "translate(.13 .63)"
            }, v("path", {
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-width": 1.75,
                d: "M.87 3.37v4"
            }), v("circle", {
                cx: .875,
                cy: .875,
                r: 1,
                fill: "currentColor"
            })))
        },
        la = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, oa), r)
            }, v(sa, ae({}, i)))
        },
        ua = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        ca = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "xMidYMid",
                viewBox: "0 0 100 100"
            }, e), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4
            }, v("animate", {
                attributeName: "opacity",
                begin: "-0.875s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4,
                transform: "rotate(45 50 50)"
            }, v("animate", {
                attributeName: "opacity",
                begin: "-0.75s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4,
                transform: "rotate(90 50 50)"
            }, v("animate", {
                attributeName: "opacity",
                begin: "-0.625s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4,
                transform: "rotate(135 50 50)"
            }, v("animate", {
                attributeName: "opacity",
                begin: "-0.5s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4,
                transform: "rotate(180 50 50)"
            }, v("animate", {
                attributeName: "opacity",
                begin: "-0.375s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4,
                transform: "rotate(225 50 50)"
            }, v("animate", {
                attributeName: "opacity",
                begin: "-0.25s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4,
                transform: "rotate(270 50 50)"
            }, v("animate", {
                attributeName: "opacity",
                begin: "-0.125s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })), v("rect", {
                width: 8,
                height: 20,
                x: 46,
                y: 10,
                fill: "currentColor",
                rx: 4,
                ry: 4,
                transform: "rotate(315 50 50)"
            }, v("animate", {
                attributeName: "opacity",
                begin: "0s",
                dur: "1s",
                keyTimes: "0;1",
                repeatCount: "indefinite",
                values: "1;0"
            })))
        },
        da = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, ua), r)
            }, v(ca, ae({}, i)))
        },
        fa = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        ga = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 15"
            }, e), v("g", {
                fill: "currentColor",
                "fill-rule": "evenodd"
            }, v("path", {
                d: "M4.50345823 7.64209974c0-.41467465-.00120904-.82930278.00023251-1.24397742.00330162-.94907699.63060841-1.71912059 1.56450035-1.87294326 1.06084135-.17466105 1.98041079.53189058 2.15428033 1.5192023.02134424.1213092.02938902.24629302.02976103.36969535.00255759.81767421.00306911 1.63539493-.00083703 2.45306913-.00051152.10121504.0259014.13396108.1296.13261216.42223467-.00530262.84465534.00372115 1.26684351-.00390719.39121807-.00702366.65548677.15847409.82912377.5137035.4690153.95972879.9528646 1.91224779 1.4295062 2.86825539.2241843.4495139.0312956.9351228-.4283264 1.0852708-.3444375.112518-.7322609-.04884-.8960396-.3759283-.4054476-.8098598-.81201122-1.6191614-1.2114601-2.4319516-.05738299-.1167043-.12122971-.1600091-.25427083-.1592183-1.00731799.0063724-2.01463598.0042328-3.02200047.0031164-.3655492-.0004186-.70914964-.083121-.99987774-.3150876-.37010635-.2951795-.58592035-.67631736-.59103553-1.15839117-.00483616-.46114239-.00102303-.92233129-.00102303-1.38352019h.00102303Z"
            }), v("path", {
                d: "M0 10.4944147c.0432465-1.47519978.63781615-2.67424442 1.80826181-3.58029572.33137051-.25652615.77625147-.19196436 1.04665836.13693799.24250592.29494693.20521163.7335299-.08714403 1.00801056-.17219548.16154403-.36145705.30778487-.51667945.48416695-.62149408.70622604-.86107041 1.53431942-.69868677 2.45860432.19865491 1.1307617.85655976 1.9065266 1.92414384 2.3144566 1.22108592.4665846 2.6397107.0301878 3.41335807-1.0244301.24445899-.3332746.69464113-.4168608 1.03284738-.1918248.34136835.2270827.44478795.674922.20958278 1.0230812-.3568069.5280299-.8289378.9372159-1.37658732 1.2613272-.82763575.4897487-1.72548894.6831085-2.67616796.5948709-1.89731241-.176103-3.35304547-1.5186441-3.85307734-3.0891516C.08184284 11.4358169.00237158 10.9732325 0 10.4944147m6.75159277-7.49842122c-.83851712-.00177087-1.50167666-.67036687-1.49880292-1.51101912C5.25563581.66460233 5.93023474-.00241218 6.75470838 0c.83884264.00251833 1.50149066.6706957 1.49875555 1.51134795-.00265908.81986037-.676886 1.48636323-1.50187116 1.48464553"
            })))
        },
        ha = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, fa), r)
            }, v(ga, ae({}, i)))
        },
        _a = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        pa = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 34 21"
            }, e), v("path", {
                fill: "currentColor",
                stroke: "currentColor",
                "stroke-width": .68827024,
                d: "M14.360628 20c.170275 0 .327107-.048417.470497-.145251.179237-.123243.286779-.294903.322627-.514981.044809-.211274 0-.409343-.134428-.594208l-5.941708-8.239691 5.941708-8.252896c.134428-.176062.179237-.374131.134428-.594209-.035848-.211274-.14339-.382934-.322627-.51498-.179237-.123243-.380879-.167259-.604925-.132047-.215084.035213-.38984.145251-.524268.330116L8.08285 9.132587 2.463769 1.341853c-.125466-.184865-.300222-.294903-.524268-.330116-.215085-.035212-.416726.008804-.604925.132047-.179237.132046-.286779.303706-.322627.51498-.035847.220078.008962.418147.134428.594209l5.955151 8.252896-5.955151 8.239691c-.125466.184865-.170275.382934-.134428.594208.035848.220078.14339.391738.322627.514981.143389.096834.300222.145251.470497.145251.277817 0 .497383-.110039.658696-.330116l5.619081-7.803938 5.619082 7.803938c.161313.220077.380878.330116.658696.330116Zm17.832805 0c.224047 0 .412246-.074826.564597-.224479.161313-.158455.24197-.347722.24197-.567799 0-.211274-.080657-.396139-.24197-.554595-.152351-.149652-.34055-.224478-.564597-.224478H23.46907V1.896448c0-.220077-.076175-.404942-.228527-.554595-.161313-.158455-.349512-.237683-.564597-.237683-.224046 0-.416726.079228-.578039.237683-.152352.149653-.228527.334518-.228527.554595v17.311274c0 .220077.076175.409344.228527.567799.161313.149653.353993.224479.578039.224479h9.517487Z"
            }))
        },
        va = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, _a), r)
            }, v(pa, ae({}, i)))
        },
        ma = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        wa = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 7 8"
            }, e), v("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "M.5 1.124643v5.750714c0 .414214.33579.75.75.75.13593 0 .26931-.036943.38587-.10688L6.42813 4.64312c.35519-.213111.47036-.673807.25725-1.028992-.06334-.105562-.15168-.19391-.25725-.257248L1.63587.481523C1.28069.268412.81999.383586.60688.738771.53694.855333.5.98871.5 1.124643Z"
            }))
        },
        ya = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, ma), r)
            }, v(wa, ae({}, i)))
        },
        ba = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        xa = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, e), v("g", {
                fill: "none",
                "fill-rule": "evenodd"
            }, v("path", {
                fill: "currentColor",
                d: "M12 0c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12S0 18.627417 0 12 5.372583 0 12 0Zm4.7354808 9.47152282-.1085206.01347095c-3.0596685.57466383-6.200379.57466383-9.26330946-.00062883-.09333203-.01864939-.19242039-.01812858-.28846682.00208394-.09593384.02018882-.18682634.05958112-.26734205.11584443-.08029086.056136-.14860503.12780464-.20100307.21081558-.0522611.08286116-.08766334.17524393-.10423122.27189211-.01724873.092197-.01629673.1908309.00352393.2864083.01977268.0955923.05806351.1864428.11270512.2672263.05484222.0810605.12499841.1503344.2065445.203869.08178229.0536896.17331929.0904256.26934485.1080471 1.05753607.1977158 2.12658791.3310378 3.20056122.3990866.0655501.0046117.1312823.0232382.1914777.0546822.0604064.0315636.1140183.0754124.1574985.1289151.0436926.053764.0762327.1161308.0955899.1833301.0193726.0673169.0250825.1380548.0167486.2077853l-.0930524.8126589-.0466642.3803831-.0549404.374039c-.158359.9955974-.4113792 1.9758184-.75546409 2.9248369l-.5801849 1.5773596-.02344642.0770503-.01552299.0868134c-.01809935.1433761.00241892.2798303.05789612.4039962.08054821.1802784.2287431.3211011.41227036.3911064.18417884.0702973.38854412.0633157.56766262-.0193475.1783359-.0823021.3167379-.2327306.3851182-.4179393l.132573-.2722052.2774285-.6119827.2691827-.6167871.1745867-.4131228c.1150781-.2758957.2275188-.552725.3372517-.8303222l.1997945-.5172516.1547774.4016017c.3341951.8508075.7005073 1.7096002 1.1016307 2.5860868l.148306.3221275.035186.0702665.0497248.0757382c.0517528.0706012.1097786.1262939.1757777.1716018.1180312.081057.2569842.1257226.3998576.1283785.0957982-.0007119.1836954-.0179553.2662741-.0508323.0830796-.0290811.1683605-.0801996.2411479-.146682.0725663-.0662848.1312809-.1464644.1727703-.2358314.0414046-.0892272.0648238-.1857927.0689566-.2841549.0041311-.0983223-.01109-.1964983-.0448023-.2888656l-.5808499-1.5790749-.1248882-.3590352-.1156442-.3594946c-.2970897-.9623716-.5036651-1.9538501-.6160163-2.9589316l-.0899595-.8168245-.0041118-.0665552.0021549-.0430116c.0030732-.0307866.0094345-.0650698.0191721-.0984822.0194475-.066648.0520023-.128536.0955871-.1817954.0433983-.0530315.0967961-.0964037.156956-.1275732.059925-.0310756.125295-.0493709.1922177-.053854 1.0641002-.0674537 2.1242314-.1987717 3.1739231-.3932155.1721701-.0296953.3313055-.120966.4468688-.25719.1149797-.1355362.1797169-.3071568.1833218-.4854424 0-.1149573-.0237748-.22332759-.0698726-.32263252-.0462729-.09968218-.1138303-.18783713-.1978901-.2580962-.0844397-.07054096-.1833017-.12125287-.2895034-.1483992-.1064178-.02721249-.2175245-.03011298-.325203-.00846921Zm-3.4239963-3.92821291c-.7252221-.73705689-1.9027746-.73705689-2.6279686.00000409-.72291791.73468261-.72291791 1.92418279.000008 2.65887358.7251891.7370234 1.9027354.7370234 2.6279566 0 .722897-.73469389.722897-1.92418787.000004-2.65887767Z"
            }), v("circle", {
                cx: 12,
                cy: 12,
                r: 10.3636364,
                stroke: "currentColor",
                "stroke-width": .54545455
            })))
        },
        ka = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, ba), r)
            }, v(xa, ae({}, i)))
        },
        Sa = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Ca = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 19 16"
            }, e), v("g", {
                fill: "none",
                "fill-rule": "evenodd",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-width": 1.84
            }, v("path", {
                d: "M16.20106 8c0 .9667-.189683 1.8872-.5324673 2.7251-.3427843.8372-.8386698 1.5911-1.4517524 2.2246-.6130825.6335-1.3426846 1.1459-2.152902 1.5001-.8108948.3542-1.70172746.5502-2.6372711.5502-.93554365 0-1.8263763-.196-2.63727112-.5502-.81021738-.3542-1.53981948-.8666-2.15290203-1.5001M2.6522744 8c0-.9667.189683-1.8872.53246728-2.7251.34278427-.8372.83866982-1.5911 1.45175237-2.2246.61308255-.6335 1.34268465-1.1459 2.15290203-1.5001C7.6002909 1.196 8.49112355 1 9.4266672 1c.93554364 0 1.8263763.196 2.6372711.5502.8102174.3542 1.5398195.8666 2.152902 1.5001"
            }), v("path", {
                "stroke-linejoin": "round",
                d: "m4.92576062 6.96092-2.48958935 1.484L1 5.87242m13.0125924 2.93832 2.3886509-1.652L18 9.62694"
            })))
        },
        Ta = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Sa), r)
            }, v(Ca, ae({}, i)))
        },
        Na = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        La = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 16 16"
            }, e), v("path", {
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-width": 2,
                d: "M6.67908563 12.3581713c3.13647239 0 5.67908567-2.54261328 5.67908567-5.67908567S9.81555802 1 6.67908563 1 1 3.54261324 1 6.67908563s2.54261324 5.67908567 5.67908563 5.67908567ZM15 15l-4.13033661-4.13033661"
            }))
        },
        Aa = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Na), r)
            }, v(La, ae({}, i)))
        },
        Pa = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Ea = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 15"
            }, e), v("g", {
                fill: "currentColor",
                "fill-rule": "evenodd"
            }, v("path", {
                d: "M12.6685391 7.05850295c.0618316-.19052057.1261678-.37674459.1827945-.56531581.1901517-.63298661.0691105-1.20892447-.3105667-1.73811736-.2320249-.32343543-.5267033-.57804635-.8488928-.80063199-.4551274-.31444449-.949193-.54968111-1.4690478-.73240423-.0926691-.03258224-.1837338-.08716445-.25828386-.15209024-.11458409-.09985522-.15238745-.24005036-.15485288-.3932943-.00579182-.36170664-.02320641-.72257784-.15453982-1.06550692-.08781649-.22926918-.22419817-.41752213-.47082008-.47986202-.45430556-.11477383-.8951882-.08736337-1.29388448.1876562-.21590179.14894739-.35893623.34408279-.35870172.63298662.00293533 3.74608251.00187872 7.49216503.00273966 11.2382475.00003914.0758264.00113489.1539999.01823641.2270414.07020623.2999635.29510882.4285022.56403705.4781115.36421931.0671935.72820381.0273309 1.08487027-.065244.32899879-.0853742.51555014-.3113812.5669721-.6475074.02547618-.166253.03349863-.3357682.04156021-.5042092.01267939-.2651932.16279707-.4605275.41751974-.5162236.3201153-.070018.627747-.1711463.91589-.3323071.5559363-.3109436.9714602-.7461293 1.1581681-1.3741431.1915213-.64412581.1881558-1.2948954.0078268-1.94057279-.1229979-.44071558-.3600711-.80739509-.7503928-1.05416877-.4400217-.27820221-1.0393575-.32439023-1.4937022.10045196-.12542419.11728016-.22764196.26272665-.32821611.40431419-.10284392.14469061-.2257244.24852413-.40440984.26395991-.21410162.0184593-.38531248-.06810842-.49837035-.2509111-.11153164-.18041571-.10660077-.37018041-.00183929-.55588725.15594863-.27633241.35686213-.51300122.60242742-.71112034.83977457-.67758331 2.11737937-.75225592 2.98399987.105027.0788156.0779746.1591184.15427831.2494786.24172124M1.33117128 7.04079954c.2056487-.17345369.3867213-.36715691.60340577-.50166308.82568638-.51248404 1.65254678-.45718573 2.46034896.05283177.3388214.21395273.60047072.5097788.78749168.86702974.12812443.24466519.03557273.54371367-.19386939.68546034-.23312071.14405409-.53531276.08270877-.69713148-.14230363-.04418219-.06150445-.08515539-.1253561-.12922018-.18694012-.39161304-.54713499-.99051841-.71609321-1.57995337-.43383313-.40660133.194658-.67102917.52911332-.83085206.94894285-.22920731.60215483-.24004741 1.22260982-.12436757 1.84911182.10319612.5589903.37071554 1.022422.81320267 1.3731883.37259396.2953884.79117027.4946215 1.25623766.5918113.35564898.0743145.48698239.2434319.49559185.6144477.00273937.1157684.00994001.2318551.02344121.346788.04844778.413345.23711236.6374026.62892108.73686.3122886.0792874.63224746.1071752.95118883.068546.36985459-.0447558.67678185-.2368677.67549449-.7603319-.00931793-3.71962682-.00622635-7.43925366-.00227383-11.15884073.00031308-.26666515-.099361-.46725082-.29733945-.62618373-.3210546-.25775377-.69364857-.32208281-1.08866626-.28401052-.4610366.04443756-.66746798.22584784-.79148334.67869723-.08030279.29320039-.10080896.5928854-.10190471.89551435-.00105661.29439387-.12922017.46991628-.4022966.56519646-.1015525.03540683-.20314413.07121149-.30285733.11143206-.60665388.24446626-1.17757851.55011872-1.65943435 1.00730445-.30461836.28898339-.54990971.61906258-.6827302 1.02592288-.19367373.59320366-.01592751 1.14105475.18905592 1.67502159m5.66741207 7.44816506c-.28849519.2665458-.62625997.4362997-1.00632851.4715474-.33205123.0307522-.66985515.014481-1.00413701-.0017505-.2780073-.0135659-.5421612-.0983434-.79664902-.218289-.37952067-.1789438-.63486944-.472542-.77594718-.8643245-.07787649-.2162204-.12526765-.4441768-.17895938-.668672-.01487088-.0624194-.03592493-.093291-.09916533-.1123073-.86133737-.2591064-1.56739139-.7393264-2.05715228-1.5177993-.43810413-.6964007-.59831836-1.4663998-.5677939-2.28429758.01267938-.33958731.07337608-.67097934.17246314-.99477282.02034963-.06643753.01224891-.11620601-.02230633-.17500522C.36299833 7.6132365.14005244 7.0728646.04429176 6.48300271c-.1419387-.87446916.0588574-1.66336519.57718605-2.37030832.39568297-.53961602.89871026-.95666075 1.46685637-1.29473631.32939013-.19605041.67298586-.36305926 1.03728344-.48189095.05596149-.01826038.07294561-.04726215.07791561-.10454961.03197241-.36747517.09885226-.72751092.22916818-1.07370221.24924388-.6619486.72327294-1.04068235 1.4098774-1.1297564.48404734-.06281728.96347688-.02558043 1.4213045.16661103.27652022.11608667.5238074.27903765.73587406.49637195.51198895-.51646234 1.14141877-.69472977 1.83925467-.68800645.34484802.00334177.67232058.0711717.97768249.23861817.41622827.22823482.65948467.59913132.78897877 1.04342738.0864077.29654215.1285158.60684921.1819335.91250167.0133056.07658219.0311506.11811559.1103577.14663997.8877919.31965606 1.66957.80938425 2.2922688 1.53494581.7690596.89599174.9932969 1.9198459.6599934 3.06519721-.1189671.40873009-.2932304.79239693-.5023229 1.16015057-.0401514.07069432-.0512654.12985157-.0279025.21144642.2663454.92925029.2396952 1.84990746-.1370078 2.74152306-.4371258 1.0346354-1.217182 1.6900198-2.2678884 2.0190248-.1016699.0318662-.1391993.0773381-.1626014.1813307-.0513045.2279962-.1091053.4573051-.1935954.6742814-.2175454.558672-.66077611.8470189-1.21393393.9716589-.46424558.1046292-.93663102.1289763-1.40842945.0479782-.33056414-.0567702-.62716005-.195573-.88403504-.4174823-.01682758-.0146003-.03412477-.0287233-.05392653-.0453128"
            }), v("path", {
                d: "M5.58862769 11.5399893c.01952782.1658154-.02504571.3549436-.19958295.494343-.16369715.1307268-.34711779.1524881-.5335126.0699783-.18248143-.0807992-.29084323-.2281155-.31072325-.4353051-.0243413-.253497-.04473006-.5075112-.07713294-.7599341-.01068356-.0833055-.04586494-.1660143-.08261169-.2426362-.11892795-.2480865-.334908-.3621045-.60309269-.3153993-.18979947.0330198-.36069726-.0008752-.49653106-.1398769-.14557815-.1489872-.19891767-.33019852-.13364231-.53802468.06895395-.21944279.22693755-.33206834.43974776-.3743974.6623023-.1316418 1.30765962.17520414 1.64788984.78197378.24525222.4373738.33060328.9156047.34919189 1.4592786M3.93288758 5.72742491c-.24458694.01965278-.45172273-.05553701-.57213777-.29662172-.16788448-.33616598.06222291-.73984364.43199924-.76474777.14624342-.00982639.29260425-.01929473.43845633-.03349725.40832322-.03974317.53734773-.30246982.50290989-.70944946-.00880513-.10375395-.01643625-.21443013.00888339-.31305208.06124457-.23798165.25945783-.37801765.50091406-.37809725.230577-.00007953.4363431.1438552.49441783.37702311.16694526.67070086-.00770938 1.46699651-.80960235 1.87349876-.31154506.15793834-.64167873.23523662-.99584062.24494366m4.48415915 5.69321559c.02066271-.5199235.12409363-1.0172105.41470205-1.45800561.34958323-.53034659.97153847-.78957233 1.58488422-.66286362.2862646.05915726.4635803.27903766.451801.5602236-.0108401.25823113-.2097969.47222373-.4707809.50062873-.0541222.0059276-.1106707-.0005968-.1650277-.0087523-.30289649-.0454719-.52138111.074235-.64199182.362383-.11607118.2772076-.12953325.5723574-.12972892.8677856-.0001174.1843144-.059327.3371606-.20224405.4523322-.15994029.1288968-.34003455.1508968-.52431613.0735985-.18068127-.0757468-.29397394-.2174934-.31569326-.4197102-.0094704-.0881988-.00160449-.178347-.00160449-.2676199m1.65053917-5.69259498c-.49437865-.01698732-.95506305-.14266168-1.33779269-.47461066-.49919217-.43295792-.61088035-.99672219-.47567269-1.62183178.06230119-.28778991.35048331-.4521333.62449895-.3891171.27773336.06389143.43892594.33791643.40006597.63752188-.0177668.13673402-.00277851.28281703.02387168.41927257.03467265.17731264.16706267.27748612.33506454.3064879.18541647.03202528.37439414.04459669.56231514.0592766.2284638.01786255.4087146.1603651.4714462.38167769.0620664.21904495-.0144012.44739912-.1947694.58154725-.1053094.07833264-.2178585.10562375-.4090277.09977565"
            })))
        },
        Oa = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Pa), r)
            }, v(Ea, ae({}, i)))
        },
        Ra = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Ma = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 12 8"
            }, e), v("path", {
                fill: "none",
                stroke: "currentColor",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 1.75,
                d: "m1.625 4.625 2.5 2.5 6.25-6.25"
            }))
        },
        Ia = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Ra), r)
            }, v(Ma, ae({}, i)))
        },
        Da = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Ha = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 22 17"
            }, e), v("path", {
                fill: "currentColor",
                "fill-rule": "evenodd",
                d: "M154 16H21.242641c-.79565 0-1.558712-.3160705-2.121321-.8786797l-14-13.99999996c-1.171573-1.17157287-3.071067-1.17157287-4.24264 0C.316071 1.68392948 0 2.44699122 0 3.24264069V48c0 6.627417 5.372583 12 12 12h142c6.627417 0 12-5.372583 12-12V28c0-6.627417-5.372583-12-12-12Z"
            }))
        },
        Fa = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, Da), r)
            }, v(Ha, ae({}, i)))
        },
        ja = {
            width: "24px",
            height: "24px",
            display: "flex"
        },
        Ba = function(e) {
            return v("svg", ae({
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 14 10"
            }, e), v("g", {
                fill: "none",
                "fill-rule": "evenodd",
                stroke: "currentColor"
            }, v("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": 1.25,
                d: "m1 4.99999994 2.20371699-2.57100316C5.00082774.33236757 8.15732765.08955988 10.25395687 1.88667064a4.99999938 4.99999938 0 0 1 .54232614.54232614L13 4.99999994h0l-2.20371699 2.57100315c-1.79711075 2.09662921-4.95361066 2.3394369-7.05023988.54232614a4.99999938 4.99999938 0 0 1-.54232614-.54232614L1 4.99999994h0Z"
            }), v("path", {
                "stroke-width": 1.75,
                d: "M7 3.37499994c.44873136 0 .85498136.18188432 1.14904852.47595148S8.625 4.55126858 8.625 4.99999994c0 .44873135-.18188432.85498135-.47595148 1.14904851C7.85498136 6.44311561 7.44873136 6.62499994 7 6.62499994s-.85498136-.18188433-1.14904852-.47595149S5.375 5.44873129 5.375 4.99999994c0-.44873136.18188432-.85498136.47595148-1.14904852S6.55126864 3.37499994 7 3.37499994Z"
            })))
        },
        Ua = function(e) {
            var t = e.className,
                n = e.svgAttrs,
                i = void 0 === n ? {
                    width: "100%",
                    height: "100%"
                } : n;
            e.key, e.jsx, e.children, e.ref;
            var r = oe(e, ["className", "svgAttrs", "key", "jsx", "children", "ref"]);
            return v("span", {
                className: t,
                style: ae(ae({}, ja), r)
            }, v(Ba, ae({}, i)))
        },
        za = function(e, t) {
            function n(e) {
                var n = this.props.ref,
                    i = n == e.ref;
                return !i && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !i : qi(this.props, e)
            }

            function i(t) {
                return this.shouldComponentUpdate = n, v(e, t)
            }
            return i.displayName = "Memo(" + (e.displayName || e.name) + ")", i.prototype.isReactComponent = !0, i.__f = !0, i
        }((function(e) {
            var t = e.checked,
                n = e.onChange,
                i = e.ariaLabel,
                r = e.reference,
                a = e.label;
            e.labelOn, e.labelOff;
            var o, s, l = e.color,
                u = void 0 === l ? "#0050FF" : l,
                c = oe(e, ["checked", "onChange", "ariaLabel", "reference", "label", "labelOn", "labelOff", "color"]),
                d = Pe(yr, []);
            return v("div", {
                className: "uwaw-switcher ".concat(a ? "uwaw-switcher_has-label" : "")
            }, v("label", {
                className: "uwaw-switcher__input-label"
            }, a && v("span", {
                className: "uwaw-switcher__label"
            }, a), v("input", ae({
                id: "uwaw-".concat(d),
                ref: r,
                type: "checkbox",
                className: "uwaw-switcher__input",
                checked: t,
                onInput: function(e) {
                    return n(e)
                },
                onKeyDown: (o = function(e) {
                    return n(e)
                }, function(e) {
                    var t = (s || {}).preventEnabled,
                        n = void 0 === t || t;
                    ["Enter", " ", "Spacebar"].includes(e.key) && (n && e.preventDefault(), o(e))
                }),
                "aria-label": i
            }, c)), v("span", {
                className: "uwaw-switcher__outline"
            }, v("span", {
                className: "uwaw-switcher__body"
            }, v("span", {
                className: "uwaw-switcher__trigger"
            }, v("span", {
                "aria-hidden": !0,
                className: "uwaw-switcher__state uwaw-switcher__state_on"
            }, v(Or, {
                height: 12,
                width: 12,
                color: u
            })), v("span", {
                "aria-hidden": !0,
                className: "uwaw-switcher__state uwaw-switcher__state_off"
            }, v(Fr, {
                height: 12,
                width: 12,
                color: "#313D5C"
            })))))))
        })),
        Wa = function(e) {
            var t = e.title,
                n = e.ariaLabel,
                i = e.icon,
                r = e.children,
                a = ce(Te(yr()), 1)[0],
                o = ce(Te(!1), 2),
                s = o[0],
                l = o[1],
                u = Ae(null),
                c = Ae(null),
                d = function() {
                    u.current && clearTimeout(u.current), l(!0)
                };
            return v("span", {
                ref: c,
                onMouseOut: function() {
                    u.current && clearTimeout(u.current), c.current && !c.current.contains(document.activeElement) && (u.current = setTimeout((function() {
                        l(!1)
                    }), 300))
                },
                onMouseOver: d,
                onFocusOut: function(e) {
                    c.current && !c.current.contains(e.relatedTarget) && l(!1)
                },
                className: "uwaw-main-tooltip-container"
            }, v("span", {
                id: "uwaw-tooltip-icon-".concat(a),
                tabIndex: 0,
                role: "button",
                "aria-expanded": s,
                "aria-describedby": "uwaw-tooltip-".concat(a),
                "aria-label": n,
                className: "uwaw-main-tooltip-icon",
                onFocus: d,
                onMouseOver: d
            }, i), v("span", {
                id: "uwaw-tooltip-".concat(a),
                role: "tooltip",
                className: "uwaw-main-tooltip ".concat(s ? "" : "uwaw-main-tooltip__hidden")
            }, v(Fa, {
                svgAttrs: {
                    "aria-hidden": "true"
                },
                className: "uwaw-main-tooltip__tail"
            }), v("span", {
                className: "uwaw-main-tooltip__i"
            }, v("span", {
                className: "uwaw-main-tooltip__title"
            }, t), r)))
        };
    ! function(e) {
        e.altKey = "altKey", e.ctrlKey = "ctrlKey", e.shiftKey = "shiftKey"
    }(wr || (wr = {}));
    var Va, $a = [wr.ctrlKey, "KeyU"],
        Ya = function(e) {
            var t, n = JSON.parse(e && (null === (t = null == e ? void 0 : e.tunings) || void 0 === t ? void 0 : t.widget_open_hotkey) || "null");
            return n && (n = n.filter(Boolean)), (null == n ? void 0 : n.length) >= 2 ? n : $a
        },
        Xa = function() {
            var e = ce(Te([]), 2),
                t = e[0],
                n = e[1],
                i = ce(Te(null), 2),
                r = i[0],
                a = i[1];
            return Le((function() {
                if (0 !== t.length) {
                    var e = ce(t, 1)[0];
                    e.id !== (null == r ? void 0 : r.id) && (a(e), setTimeout((function() {
                        1 === t.length && a(null), n((function(e) {
                            return e.slice(1, e.length)
                        }))
                    }), 3e3))
                }
            }), [t, r]), {
                showToast: function(e, t) {
                    n((function(n) {
                        return n.concat({
                            type: e,
                            text: t,
                            id: yr()
                        })
                    }))
                },
                activeToast: r
            }
        },
        qa = F({}),
        Ka = function(e) {
            var t = e.children;
            return v(qa.Provider, {
                value: Xa()
            }, t)
        };
    ! function(e) {
        e.Success = "success", e.Error = "error"
    }(Va || (Va = {}));
    var Ga = function(e) {
            var t = e.className,
                n = void 0 === t ? "" : t,
                i = Oe(qa).activeToast;
            if (!i) return null;
            var r = function(e) {
                switch (e) {
                    case Va.Error:
                        return Ur;
                    case Va.Success:
                    default:
                        return Ia
                }
            }(i.type);
            return v("div", {
                className: "toast toast_".concat(i.type, " ").concat(n),
                role: "alert",
                "aria-live": "assertive"
            }, v("div", {
                className: "toast__icon-wrapper"
            }, v(r, {
                width: 14,
                height: 14
            })), v("p", {
                className: "toast__text"
            }, i.text))
        },
        Za = function(e) {
            var t = Ee((function(e) {
                    var t = document.createElement("textarea");
                    t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "2em", t.style.height = "2em", t.style.padding = "0", t.style.border = "none", t.style.outline = "none", t.style.boxShadow = "none", t.style.background = "transparent", t.value = e, document.body.appendChild(t), t.focus(), t.select();
                    try {
                        var n = document.execCommand("copy") ? "successful" : "unsuccessful";
                        console.log("Copying text command was ".concat(n))
                    } catch (e) {
                        console.log("Oops, unable to copy")
                    }
                    document.body.removeChild(t)
                }), []),
                n = Ee((function(n) {
                    var i;
                    if (76 === n.keyCode && n.ctrlKey && (n.preventDefault(), e.trigger === wi.Main && hi.state.next("main.login")), function(e, t) {
                            var n = Ya(e);
                            return null == n ? void 0 : n.every((function(e) {
                                return t.code === e || t[e]
                            }))
                        }(e, n) || 27 === n.keyCode) {
                        var r = document.activeElement;
                        (null === (i = null == r ? void 0 : r.classList) || void 0 === i ? void 0 : i.contains("uwaw-main-tooltip-icon")) && 27 === n.keyCode ? r.blur() : (n.preventDefault(), e.close())
                    }
                    if (75 === n.keyCode && n.ctrlKey) {
                        n.preventDefault();
                        var a = e.code;
                        t(a)
                    }
                    if (74 === n.keyCode && n.ctrlKey) {
                        n.preventDefault();
                        a = e.config.current.services.userId;
                        t(a)
                    }
                }), [t, e]);
            Le((function() {
                return e.isOpen && window.addEventListener("keydown", n),
                    function() {
                        window.removeEventListener("keydown", n)
                    }
            }), [n, null == e ? void 0 : e.isOpen])
        },
        Ja = "widget.home.title",
        Qa = "widget.dashboard.title",
        eo = "widget.login.title",
        to = function() {
            function e() {
                this.clickBack = new Je, this.backState = new Je({
                    replay: !0,
                    initialState: ""
                }), this.title = new Je({
                    replay: !0,
                    initialState: ""
                }), this.isMainMenu = new Je({
                    replay: !0,
                    initialState: !0
                })
            }
            return e.prototype.setBackStateToHomePage = function() {
                this.backState.next(Ye)
            }, e.prototype.setIsMainMenu = function(e) {
                this.isMainMenu.next(e)
            }, e
        }();
    window.headerStore = new to;
    var no = window.headerStore,
        io = function() {
            function e() {
                this.resetFeature$ = new Je
            }
            return Object.defineProperty(e.prototype, "features", {
                get: function() {
                    return Object.keys(fi).filter((function(e) {
                        return !fi[e].isProfile
                    })).reduce((function(e, t) {
                        return e[t] = fi[t], e
                    }), {})
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "profiles", {
                get: function() {
                    return Object.keys(fi).filter((function(e) {
                        return fi[e].isProfile
                    })).reduce((function(e, t) {
                        return e[t] = fi[t], e
                    }), {})
                },
                enumerable: !1,
                configurable: !0
            }), e
        }();
    window.allyFeaturesStore = new io;
    var ro = window.allyFeaturesStore,
        ao = function(e) {
            var t = e.data;
            Ue({
                event: "customEvent",
                eventCategory: "userway",
                eventAction: "widget open",
                eventLabel: t
            })
        },
        oo = function(e) {
            var t = e.data;
            Ue({
                event: "customEvent",
                eventCategory: "userway",
                eventAction: "profile selection",
                eventLabel: t
            })
        },
        so = function(e) {
            var t = e.data;
            Ue({
                event: "customEvent",
                eventCategory: "userway",
                eventAction: "ability enablement",
                eventLabel: t
            })
        },
        lo = {
            s101: {
                features: {
                    s13: 1,
                    s12: 1
                }
            },
            s102: {
                features: {
                    s9: 1
                }
            },
            s103: {
                features: {
                    s18: 1,
                    s23: 2
                }
            },
            s104: {
                features: {
                    s7: 1,
                    s13: 1
                }
            },
            s105: {
                features: {
                    s4: 1,
                    s23: 2,
                    s13: 1,
                    s7: 2,
                    s2: 1,
                    s12: 1
                }
            },
            s106: {
                features: {
                    s18: 1,
                    s4: 1,
                    s12: 1,
                    s13: 1,
                    s2: 3
                }
            },
            s107: {
                features: {
                    s13: 1,
                    s23: 1
                }
            },
            s108: {
                features: {
                    s13: 1,
                    s2: 2,
                    s23: 1
                }
            }
        },
        uo = F(null),
        co = function() {
            var e = ot(),
                t = Oe(Ai),
                n = t.thisSiteId,
                i = t.accountIdCode,
                r = t.isOpen,
                a = t.href,
                o = t.isClosedByUser,
                s = t.paidAi,
                l = t.userId,
                u = t.config,
                c = t.widgetLayout,
                d = u.current.onPrem,
                f = Ae(!1),
                g = Ae([]),
                h = Ae({}),
                _ = function(t, r) {
                    void 0 === r && (r = !0), d || e.post("v1/stats/enabled-feature", {
                        uid: l,
                        siteId: n,
                        account: i,
                        type: s ? "paid" : "free",
                        feat: t,
                        real: r,
                        widgetLayout: c
                    }).catch((function(e) {
                        return console.error(e)
                    }))
                },
                p = function(e, t) {
                    void 0 === t && (t = !0), i === atob("eExxdFhtQVRSdw==") || (n ? _(e, t) : g.current.push(e))
                };
            Le((function() {
                n && i && g.current.length && (g.current.forEach((function(e) {
                    _(e)
                })), g.current = [])
            }), [n, i]);
            var v = Ee((function() {
                f.current || (ao({
                    data: rt.config$.lastValue.href
                }), p("opens"), f.current = !0)
            }), [n, i, e, a]);
            return Le((function() {
                r && v()
            }), [r, v]), Le((function() {
                if (o) {
                    var e = Object.keys(h.current);
                    e.length && (e.forEach((function(e) {
                        p(e, h.current[e])
                    })), h.current = {})
                }
            }), [o, p]), {
                onFeatureTrigger: function(e, t) {
                    if ("s8" !== e) {
                        if (0 !== t) {
                            var n = Boolean(lo[e]),
                                i = fi[e].description;
                            if (n)
                                for (var r in oo({
                                        data: i
                                    }), h.current) h.current.hasOwnProperty(r) && (h.current[r] = !1);
                            else so({
                                data: i
                            })
                        }(0 !== t || h.current[e]) && (h.current[e] = 0 !== t)
                    } else
                        for (var a in h.current) h.current.hasOwnProperty(a) && (h.current[a] = !1)
                },
                sendStatistics: p
            }
        },
        fo = function(e) {
            var t = e.children,
                n = co();
            return v(uo.Provider, {
                value: n
            }, t)
        },
        go = function() {
            var e = Oe(Ai).setPaidProductsEnabled,
                t = ce(Te(null), 2),
                n = t[0],
                i = t[1],
                r = ce(Te(null), 2),
                a = r[0],
                o = r[1],
                s = ce(Te(null), 2),
                l = s[0],
                u = s[1],
                c = ce(Te(null), 2),
                d = c[0],
                f = c[1],
                g = ce(Te(null), 2),
                h = g[0],
                _ = g[1],
                p = ce(Te(null), 2),
                v = p[0],
                m = p[1],
                w = ce(Te(null), 2),
                y = w[0],
                b = w[1],
                x = ce(Te(null), 2),
                k = x[0],
                S = x[1],
                C = ce(Te(null), 2),
                T = C[0],
                N = C[1],
                L = function(e) {
                    var t = e.allowedActionsList,
                        n = e.type,
                        i = e.action,
                        r = ce(Te(null), 2),
                        a = r[0],
                        o = r[1];
                    return Le((function() {
                        window.addEventListener("message", (function(e) {
                            var r = e.data;
                            if (r) {
                                var a = r.isUserWay,
                                    s = r.action,
                                    l = t.includes(s);
                                a && l && (n && r.type === n && o(r.data || {}), i && r.action === i && o(r.data || {}), n || i || o(r.data || {}))
                            }
                        }))
                    }), [n]), a
                }({
                    allowedActionsList: ["sendConfig"]
                }),
                A = ce(Te({
                    is_enabled: !1,
                    is_renewable: !1,
                    remainingChars: null,
                    translationAllowed: !1,
                    autoTranslation: !1
                }), 2),
                P = A[0],
                E = A[1];
            Le((function() {
                var e = te.filter((function(e) {
                    return e.value === n
                }))[0];
                e && (f(e), P.is_enabled && Ue({
                    action: "translateWebsite",
                    value: e.extraCode || e.value
                }))
            }), [n]);
            var O = function(t) {
                e((function(e) {
                    return ae(ae({}, e), {
                        LIVE_TRANSLATIONS: !0
                    })
                })), E(t)
            };
            Le((function() {
                var e;
                if (null == L ? void 0 : L.config) {
                    var t = L.config,
                        n = t.language,
                        r = t.widgetPageLang,
                        a = t.services,
                        s = t.tunings,
                        l = t.widgetCustomLanguages;
                    i(n);
                    var c = null != r ? r : te[0].value;
                    o(c);
                    var d = null === (e = null == s ? void 0 : s.widget_language) || void 0 === e ? void 0 : e.toLowerCase();
                    u(d && !("auto" === d) ? d : c);
                    var f = null == a ? void 0 : a.LIVE_TRANSLATIONS;
                    if (f && O(f), s) {
                        var g = s.widget_live_language_enabled,
                            h = s.widget_lst_button_enabled,
                            p = s.widget_lst_button_type,
                            v = s.widget_lst_button_icon_type;
                        _(null == g || g), m(h), b(p), S(v), N(null != l ? l : [])
                    }
                }
            }), [L]);
            Le((function() {
                ! function() {
                    var e = Li(),
                        t = e.language,
                        n = e.widgetPageLang;
                    t && i(t), n && o(n)
                }()
            }), []);
            var R = Pe((function() {
                return {
                    language: n,
                    setLanguage: i,
                    originalSiteLang: a,
                    lstOptions: P,
                    isLangSelectorVisible: h,
                    setIsLangSelectorVisible: _,
                    setupLstOptions: O,
                    languageInfo: d,
                    isLstButtonEnabled: v,
                    lstButtonType: y,
                    lstButtonIcon: k,
                    widgetCustomLanguages: T,
                    hostSiteLang: l,
                    setHostSiteLang: u
                }
            }), [n, a, P, h, d, v, y, k, T, l, u]);
            return Le((function() {
                rt.lstConfig$.next(R)
            }), [n, h, d, P]), R
        },
        ho = F(null),
        _o = function(e) {
            var t = e.children;
            return v(ho.Provider, {
                value: go()
            }, t)
        },
        po = function() {
            var e = Oe(ho),
                t = e.language,
                n = e.setLanguage,
                i = function(e) {
                    return Ee((function(t, n) {
                        var i, r = window.locales;
                        if (!e || !r || !t) return null;
                        var a = t.split("."),
                            o = null !== (i = Wi(r[e], a)) && void 0 !== i ? i : Wi(r.en, a),
                            s = n && Object.keys(n);
                        if (!o) return t;
                        var l = o;
                        return o && s && 0 !== (null == s ? void 0 : s.length) && s.forEach((function(e) {
                            l = l.replace("{".concat(e, "}"), n[e])
                        })), l
                    }), [e])
                }(t);
            return {
                translate: i,
                setLanguage: n
            }
        },
        vo = function() {
            var e = Oe(Ai),
                t = e.code,
                n = e.href,
                i = e.settings,
                r = ce(Te(!1), 2),
                a = r[0],
                o = r[1],
                s = ce(Te(null), 2),
                l = s[0],
                u = s[1],
                c = ce(Te(""), 2),
                d = c[0],
                f = c[1],
                g = ce(Te(""), 2),
                h = g[0],
                _ = g[1],
                p = Ae(null),
                m = Ae(null),
                w = ot(),
                y = po().translate,
                b = function() {
                    hi.state.next(Ye)
                },
                x = function(e) {
                    e.target.parentElement && e.target.parentElement.classList.add("focused")
                },
                k = function(e) {
                    e.target.parentElement && e.target.parentElement.classList.remove("focused")
                };
            return Le((function() {
                return Oi.viewUpdate$.next()
            }), []), v("div", {
                class: "widget-form widget-form_report"
            }, v("form", {
                name: "form",
                role: "form",
                onSubmit: function(e) {
                    e.preventDefault(), o(!0);
                    var r, a = new FormData;
                    return t && a.append("code", t), n && a.append("url", n), d && a.append("text", d), h ? a.append("email", h) : a.append("email", ""), i && a.append("features", JSON.stringify((r = i.current, Object.keys(r).reduce((function(e, t) {
                        return r[t].value && (e[t] = !0), e
                    }), {})))), w.sendFormData("reports", a).then((function(e) {
                        u(null), e.errors && u(e.errors), 200 === e.code && (f(""), b())
                    })).catch((function(e) {
                        var t = e.errors;
                        "Cannot be empty" === t.text && (t.text = "widget.report.text.errors.required"), "Cannot be empty" === t.email && (t.email = "widget.report.email.errors.required"), "Invalid email address" === t.email && (t.email = "widget.report.email.errors.invalid"), u(t), t.text ? setTimeout((function() {
                            return p.current.focus()
                        }), 0) : t.email && setTimeout((function() {
                            return m.current.focus()
                        }), 0)
                    })).finally((function() {
                        o(!1)
                    }))
                },
                noValidate: !0,
                autocomplete: "off"
            }, v("fieldset", {
                disabled: a
            }, v("div", {
                "input-focus": !0,
                "auto-focus": "true",
                class: "widget-input ".concat((null == l ? void 0 : l.text) ? "has-error" : "")
            }, v("label", {
                id: "report-txt",
                class: "label",
                for: "text"
            }, y("widget.report.text.label")), v("textarea", {
                ref: p,
                onInput: function(e) {
                    return f(e.target.value)
                },
                onFocus: x,
                onBlur: k,
                "aria-labelledby": "report-txt".concat((null == l ? void 0 : l.text) ? " report-txt-err" : ""),
                "aria-invalid": !!(null == l ? void 0 : l.text),
                title: y("widget.report.text.label"),
                id: "text",
                name: "text",
                className: "input input_textarea",
                autoComplete: "off"
            }), (null == l ? void 0 : l.text) && v("div", {
                id: "report-txt-err",
                role: "alert",
                class: "help-block"
            }, y(l.text))), v("div", {
                "input-focus": !0,
                class: "widget-input ".concat((null == l ? void 0 : l.email) ? "has-error" : "")
            }, v("label", {
                id: "report-email",
                class: "label",
                for: "email"
            }, y("widget.report.email.label")), v("input", {
                ref: m,
                onInput: function(e) {
                    return _(e.target.value)
                },
                onFocus: x,
                onBlur: k,
                "aria-labelledby": "report-email".concat((null == l ? void 0 : l.email) ? " report-email-err" : ""),
                "aria-invalid": !!(null == l ? void 0 : l.email),
                title: y("widget.report.email.label"),
                id: "email",
                name: "email",
                className: "input",
                placeholder: y("widget.report.email.placeholder"),
                type: "email",
                autoComplete: "email"
            }), (null == l ? void 0 : l.email) && v("div", {
                id: "report-email-err",
                role: "alert",
                class: "help-block"
            }, y(l.email))), v("div", {
                class: "buttons"
            }, v("button", {
                class: "btn btn_blue btn_border",
                onClick: b,
                type: "button",
                "aria-label": y("widget.report.buttons.cancel.aria")
            }, y("widget.report.buttons.cancel.label")), v("button", {
                class: "btn btn_blue ".concat(a ? "processing" : ""),
                type: "submit",
                "aria-label": y(a ? "widget.report.buttons.submit.processing" : "widget.report.buttons.submit.aria")
            }, y(a ? "widget.report.buttons.submit.processing" : "widget.report.buttons.submit.label"))))))
        },
        mo = function() {
            var e = Oe(Ai).settings;
            return {
                sendNavigationReaderRequest: Ee((function(t, n) {
                    var i;
                    void 0 === n && (n = {});
                    var r = n.isAlert,
                        a = void 0 !== r && r,
                        o = n.isReader,
                        s = void 0 !== o && o,
                        l = n.menuLanguage,
                        u = n.readingSpeedRate;
                    (s || !!e && !!(null === (i = e.current) || void 0 === i ? void 0 : i["userway-s9"]) && e.current["userway-s9"].value) && yi.forceReaderToRead(t, {
                        isAlert: a,
                        menuLanguage: l,
                        readingSpeedRate: s ? u : e.current["userway-s9"].value
                    })
                }), [])
            }
        },
        wo = function(e) {
            var t, n = e.children;
            return t = mo().sendNavigationReaderRequest, Le((function() {
                var e = function() {
                    var e = document.activeElement,
                        n = e.getAttribute("data-uw-reader-language"),
                        i = e.getAttribute("data-uw-reader-content") || e.getAttribute("aria-label");
                    i && t(i, {
                        menuLanguage: n
                    })
                };
                return document.addEventListener("focus", e, !0),
                    function() {
                        document.removeEventListener("focus", e, !0)
                    }
            }), []), v(w, null, n)
        };

    function yo() {
        return -1 !== (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "opera" : -1 !== navigator.userAgent.indexOf("Edge") ? "edge" : -1 !== navigator.userAgent.indexOf("Chrome") ? "chrome" : -1 !== navigator.userAgent.indexOf("Safari") ? "safari" : -1 !== navigator.userAgent.indexOf("Firefox") ? "firefox" : -1 !== navigator.userAgent.indexOf("MSIE") || document.documentMode ? "ie" : "unknown"
    }

    function bo() {
        return "ie" === yo()
    }
    var xo = "ontouchstart" in document.documentElement;

    function ko() {
        var e = navigator.userAgent || navigator.vendor;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substring(0, 4)) || xo
    }
    var So = "oversized",
        Co = "uwaw_oversized",
        To = function() {
            try {
                return JSON.parse(window.localStorage.getItem(So) || "false")
            } catch (e) {
                return !1
            }
        },
        No = new function() {
            this.isOversized$ = new Je({
                replay: !0,
                initialState: To()
            }), this.isOversized$.subscribe((function(e) {
                ! function(e) {
                    try {
                        window.localStorage.setItem(So, JSON.stringify(e))
                    } catch (e) {}
                }(e)
            }))
        },
        Lo = function() {
            var e = ce(Ri(No.isOversized$), 1)[0];
            return Ee((function(t, n) {
                return e ? n : t
            }), [e])
        },
        Ao = function() {
            var e, t, n = po().translate,
                i = mo().sendNavigationReaderRequest,
                r = Oe(Ai),
                a = r.config,
                o = r.widgetColors,
                s = Oe(ho).language,
                l = a.current.services,
                u = null == l ? void 0 : l.paidAi,
                c = null === (e = null == l ? void 0 : l.LIVE_TRANSLATIONS) || void 0 === e ? void 0 : e.is_enabled,
                d = u || c,
                f = Lo(),
                g = ce(Ri(No.isOversized$), 2),
                h = g[0],
                _ = g[1],
                p = Ae(null),
                m = (null == o ? void 0 : o.isLightColour) ? null : null == o ? void 0 : o.mainBfColor;
            Le((function() {
                h ? Oi.mainContainer.addClass(Co) : Oi.mainContainer.removeClass(Co)
            }), [h]);
            if (ko() || (null === (t = a.current.services) || void 0 === t ? void 0 : t.MODIFY_MENU) && !a.current.services.MODIFY_MENU.oversized) return _(!1), null;
            var w = Ee((function() {
                    return function(e) {
                        var t = !e;
                        _(t);
                        var r = n(t ? "widget.oversized_widget.toggle_button.enabled" : "widget.oversized_widget.toggle_button.disabled");
                        i(r)
                    }(h)
                }), [h]),
                y = Pe((function() {
                    return n("widget.oversized_widget.toggle_button.label")
                }), [s]),
                b = Pe((function() {
                    return n("widget.oversized_widget.toggle_button.ariaLabel")
                }), [s]),
                x = Pe((function() {
                    return f(24, 32)
                }), [h]);
            return v("div", {
                className: "uwaw-oversized"
            }, v("div", {
                className: "uwaw-option"
            }, v("div", {
                className: "uwaw-option__i"
            }, v("div", {
                className: "uwaw-oversized__wrapper uwaw-switcher-wrap uwaw-switcher-wrap_fw"
            }, d && v(va, {
                svgAttrs: {
                    "aria-hidden": "true"
                },
                className: "uwaw-oversized__icon",
                width: x,
                height: x
            }), v(za, {
                reference: p,
                label: y,
                "data-uw-reader-content": b,
                ariaLabel: b,
                checked: h,
                color: m,
                onChange: w
            })))))
        },
        Po = function() {
            this.setPerSiteSettingsFlowThisSite$ = new Je({
                replay: !0
            }), this.updateState$ = new Je({
                replay: !0
            })
        };
    window.widgetScreensRoutingStore = new Po;
    var Eo = window.widgetScreensRoutingStore,
        Oo = {
            fetched: !1,
            site: null,
            totalCount: 0,
            list: null,
            A: {
                count: 0,
                percentage: 0,
                offset: 0
            },
            AA: {
                count: 0,
                percentage: 0,
                offset: 0
            },
            AAA: {
                count: 0,
                percentage: 0,
                offset: 0
            }
        },
        Ro = function() {
            function e() {
                var e = this;
                this.countByType$ = new Je({
                    replay: !0
                }), this.totalFixed$ = new Je({
                    replay: !0,
                    initialState: 0
                }), this.allRemediations$ = new Je({
                    replay: !0
                }), this.violations$ = new Je({
                    replay: !0,
                    initialState: Oo
                }), window.addEventListener("message", (function(t) {
                    var n = t.data || {};
                    if ("remediation" === n.action) {
                        if ("remediation-count" === n.type) {
                            var i = n.data,
                                r = Object.keys(i).map((function(e) {
                                    return i[e]
                                })).reduce((function(e, t) {
                                    return e + t
                                }), 0);
                            e.countByType$.next(i), e.totalFixed$.next(r)
                        }
                        "all-data" === n.type && e.allRemediations$.next(n.data)
                    }
                })), Ue({
                    action: "remediation",
                    type: "remediation-count"
                }), Ue({
                    action: "remediation",
                    type: "all-data"
                })
            }
            return e.prototype.setAllRemediations = function(e) {
                this.allRemediations$.next(e)
            }, e
        }();
    window.remediationStore = new Ro;
    var Mo, Io = window.remediationStore,
        Do = function(e) {
            var t = encodeURIComponent(e);
            return "".concat(applicationConfig.base.api, "a11y-data/v0/site/").concat(t, "/acc-report-pdf")
        },
        Ho = function() {
            var e = ot(),
                t = Oe(Ai).targetPageOrigin,
                n = ce(Te(!1), 2),
                i = n[0],
                r = n[1],
                a = function(e) {
                    var n, i = Do(t);
                    return Ue({
                        action: "download_pdf",
                        url: "".concat(i, "/").concat(e)
                    }), n = 1e3, new Promise((function(e) {
                        return setTimeout(e, n)
                    }))
                };
            return {
                downloadPdfReport: function() {
                    var n;
                    if (!i) return r(!0), (n = Do(t), e.get(n, {
                        uwAiWidgetState: "WIDGET_OFF"
                    })).then((function(e) {
                        var t, n = null === (t = null == e ? void 0 : e.payload) || void 0 === t ? void 0 : t.accReportPdfName;
                        if (!n) throw new Error("No PDF Report found!");
                        return n
                    })).then(a).catch((function(e) {
                        return console.error("PDF Report Error:", e)
                    })).finally((function() {
                        return r(!1)
                    }))
                },
                isReportLoading: i
            }
        },
        Fo = ["A", "AA", "AAA"],
        jo = function(e) {
            return e < 1e3 ? e : e >= 1e3 ? "".concat(+(e / 1e3).toFixed(1), "K") : void 0
        },
        Bo = function() {
            var e = po().translate,
                t = ce(Ri(Io.violations$, null), 1)[0],
                n = ce(Te(!1), 2),
                i = n[0],
                r = n[1],
                a = ce(Te(!1), 2),
                o = a[0],
                s = a[1],
                l = vi.getUser(),
                u = Ho(),
                c = u.downloadPdfReport,
                d = u.isReportLoading,
                f = Ee((function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var i = t.totalCount;
                    if (!i) return "";
                    var r = [t.A.count, t.AA.count, t.AAA.count].map((function(e) {
                        return +(100 * e / i).toFixed(2)
                    })).reduce((function(t, n, i, r) {
                        var a = +r.slice(0, i).reduce((function(e, t) {
                                return e + t
                            }), 0),
                            o = a + n;
                        return 0 === i ? "".concat(e[i], " ").concat(a, "% ").concat(o, "%") : "".concat(t, ", ").concat(e[i], " ").concat(a, "% ").concat(o, "%")
                    }), "");
                    return "conic-gradient(".concat(r, ")")
                }), [t]);
            return v("div", {
                className: "uwaw-violations uwaw-violations_initial ".concat(i ? "uwaw-violations_hide" : "")
            }, v("div", {
                className: "uwaw-violations__i"
            }, v("p", {
                className: "uwaw-violations__title"
            }, v("strong", null, l.first_name), ", ", e("widget.violations.initial_question")), v("p", {
                className: "uwaw-violations__title"
            }, e("widget.violations.visible_info")), v("button", {
                type: "button",
                className: "uwaw-violations__close",
                onClick: function() {
                    return r(!0)
                }
            }, v(Ur, null)), v("button", {
                type: "button",
                className: "uwaw-violations__info",
                onClick: function() {
                    s(!o)
                }
            }, v("div", {
                className: "uwaw-violations__chart",
                style: {
                    background: f("#D60F0F", "#A40C0C", "#5B0808")
                }
            }, v("div", {
                className: "uwaw-violations__chart__i"
            }, jo(t.totalCount))), v("div", {
                className: "uwaw-violations__chart__title",
                dangerouslySetInnerHTML: {
                    __html: e("widget.violations.chart_title")
                }
            }), v("span", {
                className: "uwaw-violations__drop-icon ".concat(o ? "uwaw-violations__drop-icon_active" : "")
            }, v(Ir, null))), o && v("div", {
                className: "uwaw-violations__main"
            }, v("div", {
                className: "uwaw-violations__data"
            }, Fo.map((function(n) {
                return v("div", {
                    className: "uwaw-violations__item",
                    key: n
                }, v("div", {
                    className: "uwaw-violations__item__issue-type"
                }, v("div", {
                    className: "uwaw-violations__item__lvl uwaw-violations__item__lvl_".concat(n.toLowerCase())
                }, n), v("div", {
                    class: "uwaw-violations__item__value"
                }, jo(t[n].count))), v("div", {
                    className: "uwaw-shortcut-tooltip"
                }, v("div", {
                    className: "uwaw-shortcut-tooltip__i"
                }, v("p", {
                    className: "uwaw-shortcut-tooltip__title-value"
                }, t[n].count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), v("p", {
                    class: "uwaw-shortcut-tooltip__title"
                }, " ", e("widget.remediation.violations.tooltip_title")))))
            }))), v("div", {
                className: "uwaw-violations__btns"
            }, v("button", {
                onClick: c,
                type: "button",
                className: "uwaw-btn uwaw-btn_border"
            }, v(d ? da : Gr, null), e("widget.violations.report_button.label")), v("button", {
                onClick: function() {
                    Eo.setPerSiteSettingsFlowThisSite$.next(), Eo.updateState$.next({
                        path: "siteRemediationUpgradeView",
                        value: "main.logged.dashboard"
                    }), hi.state.next("main.logged.site_remediation_upgrade")
                },
                type: "button",
                className: "uwaw-btn uwaw-btn_blue"
            }, e("widget.violations.fix_button.label"))))))
        },
        Uo = function() {
            var e = po().translate,
                t = Ho().downloadPdfReport,
                n = ce(Ri(Io.violations$, null), 1)[0],
                i = ce(Te(!1), 2),
                r = i[0],
                a = i[1];
            return v("div", {
                className: "uwaw-about"
            }, v("h2", {
                className: "uwaw-about__title",
                dangerouslySetInnerHTML: {
                    __html: e("widget.about.title")
                }
            }), v("div", {
                className: "uwaw-video"
            }, r ? v("iframe", {
                className: "uwaw-video__poster",
                width: "100%",
                height: "305",
                src: "https://www.youtube.com/embed/5n6_PtaYo0s?autoplay=1&mute=1",
                title: e("widget.about.video.iframe_title"),
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0
            }) : v("button", {
                className: "uwaw-video__poster",
                type: "button",
                tabIndex: 0,
                onClick: function() {
                    a(!0)
                }
            }, v("img", {
                src: "./frontend/images/widget-v4.jpg",
                srcSet: "./frontend/images/widget-v4.jpg 1x, ./frontend/images/widget-v4@2x.jpg 2x",
                alt: e("widget.about.video.img_alt")
            }), v("span", {
                className: "uwaw-video__btn"
            }, v(ya, null)))), v("div", {
                className: "uwaw-about__cta"
            }, v("button", {
                onClick: function() {
                    Eo.setPerSiteSettingsFlowThisSite$.next(), Eo.updateState$.next({
                        path: "siteRemediationUpgradeView",
                        value: "main.logged.dashboard"
                    }), hi.state.next("main.logged.site_remediation_upgrade")
                },
                type: "button",
                className: "uwaw-btn uwaw-btn_blue"
            }, e("widget.about.upgrade_button.label")), v("a", {
                href: "https://userway.org/demo/",
                target: "_blank",
                className: "uwaw-btn uwaw-btn_border"
            }, e("widget.about.upgrade_button.link"))), v("p", {
                className: "uwaw-about__description"
            }, v("a", {
                href: "",
                onClick: t
            }, e("widget.about.description.link")), " ", v("strong", null, "ADA"), " report showing", " ", !!n.totalCount && v("span", {
                className: "uwaw-about__violations"
            }, n.totalCount), e("widget.about.description.text")))
        },
        zo = function() {
            var e = po().translate;
            return v("div", {
                className: "uwaw-how-it-works"
            }, v("h1", {
                className: "uwaw-how-it-works__title"
            }, e("widget.howItWorks.page.title")), v("div", {
                className: "uwaw-video"
            }, v("a", {
                href: "https://youtu.be/5n6_PtaYo0s",
                target: "_blank",
                type: "button",
                className: "uwaw-video__poster",
                "aria-label": e("widget.howItWorks.page.video_link.aria")
            }, v("img", {
                src: "./frontend/images/widget-v4.jpg",
                srcSet: "./frontend/images/widget-v4.jpg 1x, ./frontend/images/widget-v4@2x.jpg 2x",
                alt: e("widget.howItWorks.page.video_link.img_alt")
            }), v("span", {
                className: "uwaw-video__btn"
            }, v(ya, null)))), v("p", {
                className: "uwaw-how-it-works__description"
            }, e("widget.howItWorks.page.description")), v("a", {
                href: "https://userway.org/get",
                className: "uwaw-btn uwaw-btn_blue"
            }, e("widget.howItWorks.page.getUW_btn")))
        },
        Wo = function() {
            var e = po().translate;
            return v("div", {
                className: "uwaw-upgrade uwaw-upgrade_initial"
            }, v("div", {
                className: "uwaw-upgrade__i"
            }, v("div", {
                className: "uwaw-upgrade__l"
            }, v("h2", {
                className: "uwaw-upgrade__title"
            }, e("widget.upgrade.title")), v("p", {
                className: "uwaw-upgrade__description"
            }, e("widget.upgrade.description")), v("button", {
                type: "button",
                className: "btn btn_white",
                onClick: function() {
                    Eo.setPerSiteSettingsFlowThisSite$.next(), Eo.updateState$.next({
                        path: "siteRemediationUpgradeView",
                        value: "main.logged.dashboard"
                    }), hi.state.next("main.logged.site_remediation_upgrade")
                }
            }, e("widget.upgrade.button"))), v("div", {
                className: "uwaw-upgrade__r"
            }, v("img", {
                src: "./frontend/images/ai-chip.svg",
                alt: "",
                "aria-hidden": "true"
            }))))
        },
        Vo = function() {
            var e = Oe(Ai),
                t = e.whiteLabelOptions,
                n = e.customBrandingOptions,
                i = e.tunings;
            return {
                isWhiteLabeled: Boolean((null == t ? void 0 : t.wlHideLogo) || (null == i ? void 0 : i.widget_no_logo) || (null == n ? void 0 : n.custom_logo_image_link) || (null == n ? void 0 : n.custom_logo_image_path))
            }
        },
        $o = function(e) {
            var t = e.onClick,
                n = po().translate;
            return Vo().isWhiteLabeled ? null : v("button", {
                onClick: t,
                className: "uwaw-learn-more-btn"
            }, v("span", {
                dangerouslySetInnerHTML: {
                    __html: n("widget.menu.learn_more_btn")
                }
            }), v(Ir, {
                width: 6,
                height: 11
            }))
        },
        Yo = function() {
            var e = po().translate,
                t = Oe(Ai),
                n = t.tunings,
                i = t.targetPageOrigin,
                r = t.config,
                a = t.paidProductsEnabled,
                o = t.tuningsFromServerInProgress,
                s = t.paidAi,
                l = ce(Ri(vi.isLogged$), 1)[0],
                u = Pe((function() {
                    var e, t, a = ko() ? "".concat(applicationConfig.base.frontend, "pre-mobile-widget") : "".concat(applicationConfig.base.frontend, "how-it-works"),
                        o = 46522 === (null === (t = null === (e = r.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.userId) ? "" : "?".concat(["utm_medium=widget_footer", "utm_campaign=how_it_works", "utm_source=".concat(null == n ? void 0 : n.site_name), "url=".concat(i)].map((function(e) {
                            return encodeURI(e)
                        })).join("&"));
                    return "".concat(a).concat(o)
                }), [n, i]),
                c = Pe((function() {
                    var e, t;
                    if (!a) return !1;
                    var n = !!(null === (t = null === (e = r.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.affiliateLink);
                    return !(o || a.WHITE_LABEL || a.CUSTOM_BRANDING || a.REMEDIATION || n || l || s)
                }), [a, o, l, s]);
            return c ? v("div", {
                class: "uwaw-how-it-works"
            }, v("a", {
                class: "uwaw-btn uwaw-btn_blue",
                target: "_blank",
                "aria-label": e("widget.howItWorks.ariaLabel"),
                href: u
            }, v("span", {
                class: "uwaw-btn__icon"
            }, v(ya, null)), e("widget.howItWorks.videoButton"))) : null
        };
    ! function(e) {
        e[e.ADD = 0] = "ADD", e[e.UPDATE = 1] = "UPDATE", e[e.RESET_ALL = 2] = "RESET_ALL"
    }(Mo || (Mo = {}));
    var Xo = function(e) {
            return {
                type: Mo.ADD,
                data: e
            }
        },
        qo = function(e) {
            return {
                type: Mo.UPDATE,
                data: e
            }
        },
        Ko = function() {
            return {
                type: Mo.RESET_ALL
            }
        },
        Go = F(null),
        Zo = function(e) {
            var t = e.children,
                n = function() {
                    var e = ce(Ne((function(e, t) {
                            var n, i;
                            switch (t.type) {
                                case Mo.ADD:
                                    return fi[t.data.name] ? ae(ae({}, e), ((n = {})[t.data.name] = ae(ae({}, t.data), {
                                        actionState: t.data.actionState || 0,
                                        onTriggerFn: fi[t.data.name].onActionTrigger,
                                        actionStatesMeta: fi[t.data.name].actionStates,
                                        isProfile: fi[t.data.name].isProfile,
                                        icon: fi[t.data.name].icon
                                    }), n)) : (console.error("Unexpected ally feature: ".concat(t.data.name)), e);
                                case Mo.UPDATE:
                                    return ae(ae({}, e), ((i = {})[t.data.name] = ae(ae({}, e[t.data.name]), t.data), i));
                                case Mo.RESET_ALL:
                                    return Object.keys(e).reduce((function(t, n) {
                                        var i;
                                        return ae(ae({}, t), ((i = {})[n] = ae(ae({}, e[n]), {
                                            actionState: 0
                                        }), i))
                                    }), {});
                                default:
                                    return e
                            }
                        }), {}), 2),
                        t = e[0],
                        n = e[1];
                    return {
                        allyFeaturesList: Pe((function() {
                            return Object.keys(t).map((function(e) {
                                return t[e]
                            }))
                        }), [t]),
                        allyFeaturesState: t,
                        allyFeatureDispatch: n
                    }
                }();
            return v(Go.Provider, {
                value: n
            }, t)
        },
        Jo = dt,
        Qo = /\s/;
    var es = function(e) {
            for (var t = e.length; t-- && Qo.test(e.charAt(t)););
            return t
        },
        ts = /^\s+/;
    var ns = kt,
        is = function(e) {
            return null != e && "object" == typeof e
        };
    var rs = function(e) {
            return e ? e.slice(0, es(e) + 1).replace(ts, "") : e
        },
        as = St,
        os = function(e) {
            return "symbol" == typeof e || is(e) && "[object Symbol]" == ns(e)
        },
        ss = /^[-+]0x[0-9a-f]+$/i,
        ls = /^0b[01]+$/i,
        us = /^0o[0-7]+$/i,
        cs = parseInt;
    var ds = St,
        fs = function() {
            return Jo.Date.now()
        },
        gs = function(e) {
            if ("number" == typeof e) return e;
            if (os(e)) return NaN;
            if (as(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = as(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = rs(e);
            var n = ls.test(e);
            return n || us.test(e) ? cs(e.slice(2), n ? 2 : 8) : ss.test(e) ? NaN : +e
        },
        hs = Math.max,
        _s = Math.min;
    var ps, vs = function(e, t, n) {
            var i, r, a, o, s, l, u = 0,
                c = !1,
                d = !1,
                f = !0;
            if ("function" != typeof e) throw new TypeError("Expected a function");

            function g(t) {
                var n = i,
                    a = r;
                return i = r = void 0, u = t, o = e.apply(a, n)
            }

            function h(e) {
                var n = e - l;
                return void 0 === l || n >= t || n < 0 || d && e - u >= a
            }

            function _() {
                var e = fs();
                if (h(e)) return p(e);
                s = setTimeout(_, function(e) {
                    var n = t - (e - l);
                    return d ? _s(n, a - (e - u)) : n
                }(e))
            }

            function p(e) {
                return s = void 0, f && i ? g(e) : (i = r = void 0, o)
            }

            function v() {
                var e = fs(),
                    n = h(e);
                if (i = arguments, r = this, l = e, n) {
                    if (void 0 === s) return function(e) {
                        return u = e, s = setTimeout(_, t), c ? g(e) : o
                    }(l);
                    if (d) return clearTimeout(s), s = setTimeout(_, t), g(l)
                }
                return void 0 === s && (s = setTimeout(_, t)), o
            }
            return t = gs(t) || 0, ds(n) && (c = !!n.leading, a = (d = "maxWait" in n) ? hs(gs(n.maxWait) || 0, t) : a, f = "trailing" in n ? !!n.trailing : f), v.cancel = function() {
                void 0 !== s && clearTimeout(s), u = 0, i = l = r = s = void 0
            }, v.flush = function() {
                return void 0 === s ? o : p(fs())
            }, v
        },
        ms = lt(vs),
        ws = function(e) {
            var t = e.icon,
                n = e.title,
                i = e.control,
                r = e.isOpen,
                a = void 0 !== r && r,
                o = e.onToggle,
                s = e.innerRef,
                l = void 0 === s ? null : s,
                u = e.scrollDown,
                c = void 0 !== u && u,
                d = e.readerText,
                f = void 0 === d ? "" : d,
                g = e.readerLang,
                h = void 0 === g ? "" : g,
                _ = e.children,
                p = e.renderRight,
                m = e.isDisabled,
                w = void 0 !== m && m,
                y = e.isCircledIcon,
                b = void 0 === y || y,
                x = e.hideArrowIcon,
                k = void 0 !== x && x,
                S = ce(Te(a), 2),
                C = S[0],
                T = S[1],
                N = Ae(null);
            Le((function() {
                T(a)
            }), [a]), Le((function() {
                c && N.current && C && N.current.scrollIntoView({
                    block: "end",
                    behavior: "smooth"
                })
            }), [C]);
            var L = function(e) {
                if (o) return o(e);
                T((function(e) {
                    return !e
                }))
            };
            return v("div", {
                className: "uwaw-option",
                ref: N
            }, v("div", {
                className: "uwaw-option__i"
            }, v("button", {
                type: "button",
                className: "uwaw-option__drop-btn",
                "aria-expanded": C,
                "aria-label": f,
                onClick: L,
                onKeyDown: ki(L),
                ref: l,
                disabled: w,
                "data-uw-reader-content": f,
                "data-uw-reader-language": h
            }, v("span", {
                className: "expanded_panel__wrapper ".concat(w ? "disabled" : "")
            }, v("span", {
                className: "expanded_panel__wrapper__icon ".concat(b ? "circle" : "")
            }, t), v("span", {
                className: "expanded_panel__wrapper__lang"
            }, n)), !k && v("span", {
                className: "uwaw-option__drop-icon"
            }, v(Ir, {
                svgAttrs: {
                    "aria-hidden": "true",
                    focusable: "false"
                }
            }))), i, p && p()), C && v("div", {
                className: "uwaw-option__dropdown"
            }, _))
        },
        ys = function(e) {
            var t = Lo(),
                n = v(la, {
                    svgAttrs: {
                        "aria-hidden": "true"
                    },
                    width: t(2, 2),
                    height: t(8, 10)
                });
            return v(Wa, ae({
                icon: n
            }, e))
        },
        bs = ["s2", "s4", "s6", "s7", "s12", "s13", "s14", "s23"],
        xs = ["s23"],
        ks = "s21";
    ! function(e) {
        e[e.DISABLED = 0] = "DISABLED", e[e.ENABLED = 1] = "ENABLED"
    }(ps || (ps = {}));
    var Ss;
    ! function(e) {
        e[e.Pos2 = 2] = "Pos2", e[e.Pos3 = 3] = "Pos3", e[e.Pos6 = 6] = "Pos6", e[e.Left = 7] = "Left", e[e.Center = 5] = "Center", e[e.Right = 1] = "Right"
    }(Ss || (Ss = {}));
    var Cs = function(e) {
        void 0 === e && (e = function() {});
        var t = Oe(Ai),
            n = t.setUserSpecificPosition,
            i = t.userSpecificPosition,
            r = t.position,
            a = t.tunings,
            o = ce(Te(null), 2),
            s = o[0],
            l = o[1],
            u = function(e) {
                return l(e >= Ss.Center ? Ss.Left : Ss.Right)
            };
        Le((function() {
            var e = i || r || +(null == a ? void 0 : a.widget_position);
            u(e)
        }), [i, r, a]);
        return {
            currentPosition: s,
            savePosition: function(t) {
                var i = +a.widget_position;
                switch (t) {
                    case 1:
                        switch (i) {
                            case 2:
                            case 6:
                                t = 2;
                                break;
                            case 3:
                            case 4:
                            case 5:
                                t = 3;
                                break;
                            case 7:
                            case 8:
                                t = 1;
                                break;
                            default:
                                console.log("Default position case")
                        }
                        break;
                    case 7:
                        switch (i) {
                            case 2:
                            case 6:
                                t = 6;
                                break;
                            case 3:
                            case 4:
                            case 5:
                                t = 5;
                                break;
                            case 7:
                            case 8:
                                t = 7;
                                break;
                            default:
                                console.log("Default position case")
                        }
                        break;
                    default:
                        console.log("Default position case")
                }
                l(t), n(t), e(), Ue({
                    action: "setWidgetPosition",
                    position: t,
                    byUser: !0,
                    byMoveHideSection: !0
                })
            },
            setDefaultPosition: function() {
                var e = r || (ko() ? +(null == a ? void 0 : a.widget_position_mobile) : +(null == a ? void 0 : a.widget_position));
                e && (u(e), n(null), Ue({
                    action: "setWidgetPosition",
                    position: e,
                    isSetDefault: !0,
                    byUser: !0
                }))
            }
        }
    };
    var Ts = function() {
            var e = document.documentElement.classList;
            xi(["ie", "edge"], yo()) ? e.add("userway-s2-ie") : e.add("userway-s2")
        },
        Ns = function() {
            var e = po().translate,
                t = Cs().setDefaultPosition,
                n = Oe(Ai),
                i = n.config,
                r = n.tunings,
                a = n.settings,
                o = n.settingsLoaded,
                s = n.soundEffectsEnabled,
                l = n.sendEvent,
                u = n.enabledMenuFeatures,
                c = Oe(uo).onFeatureTrigger,
                d = mo().sendNavigationReaderRequest,
                f = Vo().isWhiteLabeled,
                g = ce(Te(!1), 2),
                h = g[0],
                _ = g[1],
                p = Oe(Go),
                v = p.allyFeaturesList,
                m = p.allyFeaturesState,
                w = p.allyFeatureDispatch,
                y = v.filter((function(e) {
                    return e.isProfile
                })),
                b = [];
            y.forEach((function(e) {
                b.push(e.name)
            })), Le((function() {
                o && x()
            }), [o]), Le((function() {
                a.current && (C(v), l())
            }), [v]), Le((function() {
                var e = function(e) {
                    "s8" === e.data.name && N()
                };
                return window.addEventListener("message", e),
                    function() {
                        return window.removeEventListener("message", e)
                    }
            }), []);
            var x = function() {
                    var e = function(e) {
                        var t = {};
                        return Object.keys(e).map((function(t) {
                            return [t, e[t]]
                        })).forEach((function(e) {
                            var n = ce(e, 2),
                                i = n[0],
                                r = n[1];
                            r || (r = {}), !1 === r.value && (r.value = 0);
                            var a = i.split("-")[1],
                                o = r.value;
                            o && ("s10" === a && (a = "s2", o = 3), "s16" === a && (a = "s2", o = 2), "s7" === a && (a = "s7", o = 2), "s15" === a && (a = "s7", o = 1)), t[a] = o, "userway-s2" === i && r.value && Ts(), "userway-s4" === i && ko() && r.value && document.querySelector(".uwaw-app").classList.add("".concat(i, "-").concat(r.value))
                        })), t
                    }(a.current);
                    k(u.current, e).forEach((function(e) {
                        w(Xo(e))
                    })), document.querySelector(".uwaw-app").style.visibility = "visible";
                    var t = !r || !r.hasOwnProperty("widget_dictionary") || r.widget_dictionary;
                    _(t)
                },
                k = function(t, n) {
                    var a = [];
                    return (t = t.filter((function(e) {
                        return -1 === xs.indexOf(e) || !("firefox" === yo())
                    }))).forEach((function(t) {
                        var o = "userway-".concat(t);
                        if (!S(o)) {
                            var s = function(e, t, n) {
                                    var i = n.widget_s4;
                                    if ("userway-s3" === e && bo()) return [1, 4];
                                    if ("userway-s17" === e) {
                                        var r = n.widget_custom_line_height_lvls_count || 3;
                                        return [1, 2, 3].slice(r)
                                    }
                                    if ("userway-s4" === e) {
                                        if (i) {
                                            var a = JSON.parse(i);
                                            return ko() ? a.mobile.hiddenStates : a.desktop.hiddenStates
                                        }
                                        if (ko()) return [3, 4]
                                    }
                                    if ("userway-s14" === e) return r = n.widget_custom_text_spacing_lvls_count || 3, [1, 2, 3].slice(r);
                                    return []
                                }(o, 0, r),
                                l = !! function(e, t) {
                                    var n;
                                    return "userway-s9" === e && !(null === (n = t.reader) || void 0 === n ? void 0 : n.enabled)
                                }(o, i.current) && {
                                    reason: e("widget.responsive_voice.language_is_not_supported")
                                };
                            a.push({
                                name: t,
                                disabledSlot: !1,
                                disabledSteps: s,
                                temporaryDisabled: l,
                                actionState: n[t]
                            })
                        }
                    })), a
                },
                S = function(e) {
                    var t, n, r = i.current.onPrem;
                    if (r && "userway-s9" === e && !(null === (t = i.current.reader) || void 0 === t ? void 0 : t.enabled)) return !0;
                    if (r && "userway-s21" === e) return !0;
                    if ("userway-s5" === e && bo()) return !0;
                    if (a.current[e] && a.current[e].disabled) return !0;
                    if ("userway-s24" === e) {
                        var o = i.current.services,
                            s = (null == o ? void 0 : o.VOICE_NAVIGATION) && (null === (n = null == o ? void 0 : o.VOICE_NAVIGATION) || void 0 === n ? void 0 : n.is_enabled);
                        if (!(Boolean(window.chrome) || "safari" === yo()) || !s) return !0
                    }
                    return !(!ko() || !xi(["userway-s1", "userway-s12", "userway-s2", "userway-s24"], e))
                },
                C = function(e) {
                    a.current = Object.keys(a.current).reduce((function(e, t) {
                        var n;
                        return ae(ae({}, e), ((n = {})[t] = ae(ae({}, a.current[t]), {
                            value: 0
                        }), n))
                    }), {}), Object.keys(e).forEach((function(t) {
                        var n = e[t],
                            i = n.name,
                            r = n.actionState;
                        "s2" === i ? 1 === r ? (a.current["userway-s2"].value = 1, a.current["userway-s10"].value = 0, a.current["userway-s16"].value = 0, Ts()) : 2 === r ? (a.current["userway-s2"].value = 0, a.current["userway-s10"].value = 0, a.current["userway-s16"].value = 1) : 3 === r ? (a.current["userway-s2"].value = 0, a.current["userway-s10"].value = 1, a.current["userway-s16"].value = 0) : (a.current["userway-s2"].value = 0, a.current["userway-s10"].value = 0, a.current["userway-s16"].value = 0) : "s7" === i ? 1 === r ? (a.current["userway-s7"].value = 0, a.current["userway-s15"].value = 1) : 2 === r ? (a.current["userway-s7"].value = 1, a.current["userway-s15"].value = 0) : (a.current["userway-s7"].value = 0, a.current["userway-s15"].value = 0) : "s3" === i ? 1 === r ? a.current["userway-s3"].value = 1 : 2 === r ? a.current["userway-s3"].value = 2 : 3 === r ? a.current["userway-s3"].value = 3 : 4 === r && (a.current["userway-s3"].value = 4) : "s8" === i || a.current["userway-".concat(i)] && (a.current["userway-".concat(i)].value = r)
                    }))
                },
                T = function(t) {
                    var n = t.name,
                        i = m[n],
                        r = i.actionState,
                        a = i.onTriggerFn,
                        o = i.disabledSlot,
                        s = i.disabledSteps;
                    if (a && !o) {
                        var l = function(e) {
                                var t = a(e, {
                                    isWhiteLabeled: f
                                });
                                return xi(s, t.actionState) ? l(t.actionState) : t
                            },
                            u = function() {
                                d(e(f ? "widget.menu.responsive_voice.aria_wl.v1" : "widget.menu.responsive_voice.aria.v1"))
                            },
                            g = l(r);
                        w(qo({
                            name: n,
                            actionState: g.actionState
                        })), c(n, g.actionState);
                        var h = fi[n].googleAnalyticsEventName;
                        if (h && Ue({
                                action: "sendEventToGoogleAnalytics",
                                name: h,
                                state: g.actionState
                            }), g.toRead) {
                            var _ = e(g.toRead);
                            d(_, {
                                isReader: "s9" === n,
                                readingSpeedRate: g.actionState
                            })
                        }
                        if ("s9" === n && g.actionState && window.localStorage.setItem("readerSpeed", g.actionState.toString()), -1 !== b.indexOf(n) && g.actionState ? function(e) {
                                N({
                                    isProfileDisable: !0,
                                    shouldSetDefaultPosition: !1
                                }), Object.keys(lo[e].features).forEach((function(t) {
                                    var n = lo[e].features[t];
                                    w(qo({
                                        name: t,
                                        actionState: n
                                    }))
                                })), w(qo({
                                    name: e,
                                    actionState: 1
                                })), setTimeout((function() {
                                    "s102" === e && u()
                                }), 100)
                            }(n) : -1 === b.indexOf(n) || g.actionState ? b.forEach((function(e) {
                                c(e, 0), w(qo({
                                    name: e,
                                    actionState: 0
                                }))
                            })) : N({
                                isProfileDisable: !0
                            }), "s2" === n) {
                            var p = document.documentElement.classList;
                            1 === g.actionState ? Ts() : (p.remove("userway-s2"), p.remove("userway-s2-ie"))
                        } else if ("s4" === n) {
                            if (ko()) {
                                var v = document.querySelector(".uwaw-app").classList;
                                v.remove("userway-s4-1"), v.remove("userway-s4-2"), v.remove("userway-s4-3"), v.remove("userway-s4-4"), g.actionState && v.add("userway-s4-".concat(g.actionState))
                            }
                        } else if ("s8" === n) return N()
                    }
                },
                N = function(n) {
                    var r = void 0 === n ? {} : n,
                        a = r.isProfileDisable,
                        o = void 0 !== a && a,
                        l = r.shouldSetDefaultPosition,
                        u = void 0 === l || l;
                    if (o || c("s8"), w(Ko()), s) try {
                        new Audio("".concat(i.current.cdn, "widgetapp/sounds/reset.mp3")).play()
                    } catch (e) {
                        console.error(e)
                    }
                    var g = document.documentElement;
                    g.classList.remove("userway-s2-ie"), g.classList.remove("userway-s2");
                    var h = document.querySelector(".uwaw-app");
                    h.classList.remove("userway-s4-1"), h.classList.remove("userway-s4-2"), h.classList.remove("userway-s4-3"), h.classList.remove("userway-s4-4"), u && t(), d(e(o ? f ? "widget.menu.responsive_voice.aria_off_action_wl" : "widget.responsive_voice.disabledScreenReader" : f ? "widget.menu.responsive_voice.aria_off_action_wl" : "widget.menu.reset.aria_off_action"))
                };
            return function(e) {
                    var t = e.onResetAll,
                        n = e.allyFeaturesState,
                        i = e.allyFeatureDispatch,
                        r = po().translate,
                        a = Vo().isWhiteLabeled,
                        o = mo().sendNavigationReaderRequest,
                        s = Ee((function() {
                            i(qo({
                                name: "s9",
                                temporaryDisabled: !1
                            }))
                        }), [i]),
                        l = Ee((function() {
                            var e = r(a ? "widget.responsive_voice.language_is_not_supported_wl" : "widget.responsive_voice.language_is_not_supported");
                            i(qo({
                                name: "s9",
                                actionState: 0,
                                temporaryDisabled: {
                                    reason: e
                                }
                            }))
                        }), [i, o, a, r]),
                        u = Ee((function() {
                            var e = window.localStorage.getItem("readerSpeed") || "1",
                                t = parseInt(e, 10);
                            i(qo({
                                name: "s9",
                                actionState: t,
                                temporaryDisabled: !1
                            }));
                            var n = r(a ? "widget.responsive_voice.enabled_wl" : "widget.responsive_voice.enabled");
                            o(n, {
                                isReader: !0
                            })
                        }), [i, o, a, r]),
                        c = Ee((function() {
                            i(qo({
                                name: "s9",
                                actionState: 0,
                                temporaryDisabled: !1
                            }));
                            var e = r(a ? "widget.responsive_voice.disabledScreenReader_wl" : "widget.responsive_voice.disabledScreenReader");
                            o(e, {
                                isReader: !0
                            })
                        }), [i, o, a, r]),
                        d = Ee((function() {
                            var e = n.s9;
                            if (e)
                                if (e.temporaryDisabled) {
                                    var t = r(a ? "widget.responsive_voice.language_is_not_supported_wl" : "widget.responsive_voice.language_is_not_supported");
                                    o(t, {
                                        isReader: !0
                                    })
                                } else e.actionState ? c() : u()
                        }), [n, u, c, o, a, r]),
                        f = Ee((function() {
                            i(qo({
                                name: "s24",
                                actionState: 1
                            }))
                        }), [i]),
                        g = Ee((function() {
                            i(qo({
                                name: "s24",
                                actionState: 0
                            }))
                        }), [i]),
                        h = Ee((function() {
                            var e = n.s24;
                            e && (e.actionState ? g() : f())
                        }), [n, f, g]),
                        _ = Ee((function(e) {
                            "Period" !== e.code && "." !== e.key || !e.ctrlKey || d(), "Space" !== e.code && 32 !== e.which || !e.ctrlKey || t(), "Comma" !== e.code && "," !== e.key || !e.ctrlKey || h()
                        }), [d, t]),
                        p = Ee((function(e) {
                            var t = e.data || {};
                            if ("feature_use" === t.action) {
                                var r = t.name.split("-")[1],
                                    a = n[r],
                                    o = t.value || 0;
                                a && i(qo({
                                    name: r,
                                    actionState: o
                                }))
                            } else if ("close_ps_popup" === t.action && (n.s11 && i(qo({
                                    name: "s11",
                                    actionState: 0
                                })), t.force_focus)) {
                                var u = document.querySelector(".button.ally-action.page-structure-small.ally-action-item__ready");
                                u && u.focus()
                            }
                            var c = !!n.s9;
                            "toggleReader" === t.action && c ? d() : "screen_reader_available" === t.action && c ? s() : "screen_reader_not_available" === t.action && c ? l() : "closeVoiceNavigation" === t.action ? g() : "openVoiceNavigation" === t.action && f()
                        }), [d, s, l, n, i]);
                    Le((function() {
                        return window.addEventListener("keydown", _), window.addEventListener("message", p),
                            function() {
                                window.removeEventListener("keydown", _), window.removeEventListener("message", p)
                            }
                    }), [d, _])
                }({
                    allyFeaturesState: m,
                    allyFeatureDispatch: w,
                    onResetAll: N
                }),
                function(e, t) {
                    var n = Oe(Ai).enabledMenuFeatures,
                        i = Ee((function(t) {
                            t.forEach((function(t) {
                                e(qo({
                                    name: t,
                                    actionState: "s7" === t || "s23" === t ? 2 : 1
                                }))
                            }))
                        }), [e]),
                        r = Ee((function(e) {
                            var r = e.data || {};
                            if (r.isUserWay && "updateVisuallyImpairedState" === r.action && (t({
                                    isProfileDisable: !0
                                }), r.config)) {
                                var a = bs.filter((function(e) {
                                    return xi(n.current, e)
                                }));
                                i(a)
                            }
                        }), [i, t]);
                    Le((function() {
                        return window.addEventListener("message", r),
                            function() {
                                window.removeEventListener("message", r)
                            }
                    }), [r])
                }(w, N),
                function(e) {
                    var t = e.allyFeaturesList,
                        n = e.allyFeaturesState,
                        i = e.allyFeatureDispatch,
                        r = Oe(Ai),
                        a = r.tunings,
                        o = r.accountIdCode,
                        s = Oe(ho).language,
                        l = Pe((function() {
                            return null == t ? void 0 : t.length
                        }), [t]),
                        u = Pe((function() {
                            return !!n[ks]
                        }), [n]);
                    Le((function() {
                        if (s && l && u) {
                            var e = [atob("eExxdFhtQVRSdw==")].includes(o),
                                t = !0 === a.widget_hide_dictionary,
                                r = ee.find((function(e) {
                                    return e === s
                                })) && !t && !e,
                                c = n[ks].actionState;
                            i(qo({
                                name: ks,
                                actionState: r && c ? ps.ENABLED : ps.DISABLED,
                                temporaryDisabled: !r && {
                                    reason: ""
                                }
                            }))
                        }
                    }), [s, l, u])
                }({
                    allyFeaturesState: m,
                    allyFeaturesList: v,
                    allyFeatureDispatch: w
                }), {
                    onFeatureMouseClick: function(e) {
                        var t = e.event,
                            n = e.name;
                        if (Oi.makeSureElementVisible(t.currentTarget), "s8" === n) return N();
                        T({
                            name: n
                        })
                    },
                    triggerFeature: T,
                    onResetAll: N,
                    isDictionaryOn: h,
                    allyFeaturesList: v,
                    allyFeaturesState: m
                }
        },
        Ls = F(null),
        As = function(e) {
            var t = e.children,
                n = Ns();
            return v(Ls.Provider, {
                value: n
            }, t)
        },
        Ps = function() {
            var e, t, n, i, r = Oe(Ls),
                a = r.allyFeaturesList,
                o = r.onFeatureMouseClick,
                s = r.triggerFeature,
                l = Oe(Ai),
                u = l.config,
                c = l.paidAi,
                d = ce(Ri(No.isOversized$), 1)[0],
                f = Lo(),
                g = po().translate,
                h = Vo().isWhiteLabeled,
                _ = null === (t = null === (e = u.current) || void 0 === e ? void 0 : e.tunings) || void 0 === t ? void 0 : t.widget_no_logo,
                p = !1 === (null === (i = null === (n = u.current.services) || void 0 === n ? void 0 : n.MODIFY_MENU) || void 0 === i ? void 0 : i.profiles),
                m = Pe((function() {
                    return a.filter((function(e) {
                        return !e.isProfile
                    }))
                }), [a]),
                w = Pe((function() {
                    return function(e, t) {
                        var n = e.filter((function(e) {
                                return e.isProfile
                            })),
                            i = t.map((function(e) {
                                return e.name
                            }));
                        return n.filter((function(e) {
                            var t = lo[e.name].features;
                            return Object.keys(t).every((function(e) {
                                return -1 !== i.indexOf(e)
                            }))
                        }))
                    }(a, m)
                }), [a, m]),
                y = Pe((function() {
                    return w.find((function(e) {
                        return !!e.actionState
                    }))
                }), [w]),
                b = Pe((function() {
                    var e;
                    return g((null === (e = null == y ? void 0 : y.actionStatesMeta[y.actionState]) || void 0 === e ? void 0 : e.label) || "")
                }), [y, g]),
                x = g("widget.profiles.profile_active"),
                k = Pe((function() {
                    return b ? "".concat(b, " ").concat(x) : g("widget.profiles.list_label")
                }), [b, g]);
            return c && !!(null == w ? void 0 : w.length) && !p && v("div", {
                className: "uwaw-profiles-component"
            }, v(ws, {
                title: k,
                readerText: k,
                icon: v(ka, {
                    color: "white",
                    width: f(30, 32),
                    height: f(30, 32)
                }),
                renderRight: function() {
                    return v(ys, {
                        title: g("widget.profiles.tooltipTitle"),
                        ariaLabel: g("widget.profiles.tooltipTitle")
                    }, !h && !_ && v("a", {
                        className: "uwaw-main-tooltip__link",
                        target: "_blank",
                        "data-uw-reader-content": g("widget.profiles.tooltipLink"),
                        href: "https://help.userway.org/en/articles/6241171-what-are-userway-s-ai-powered-pro-widget-accessibility-profiles"
                    }, g("widget.profiles.tooltipLink")))
                }
            }, v("ul", {
                className: "uwaw-profiles__list"
            }, w.map((function(e) {
                var t = e.actionStatesMeta[e.actionState],
                    n = e.name === (null == y ? void 0 : y.name);
                return v("li", {
                    key: e.name,
                    className: "uwaw-profiles__item"
                }, v("button", {
                    type: "button",
                    id: "btn-".concat(e.name),
                    className: "uwaw-profiles__btn  ".concat(n ? "active" : ""),
                    onKeyDown: ki((function() {
                        return s({
                            name: e.name
                        })
                    })),
                    onClick: function(t) {
                        return o({
                            event: t,
                            name: e.name
                        })
                    },
                    "aria-pressed": n,
                    "data-uw-reader-content": g(t.label)
                }, v("span", {
                    className: "uwaw-profiles__btn__ico"
                }, function(e, t) {
                    var n = function(e) {
                        return t ? e + 9 : e
                    };
                    switch (e) {
                        case "MotorImparedIcon":
                            return v(ha, {
                                width: n(12),
                                height: n(15)
                            });
                        case "BlindReaderIcon":
                            return v(Ar, {
                                width: n(18),
                                height: n(12)
                            });
                        case "ColorBlindIcon":
                            return v(Xr, {
                                width: n(12),
                                height: n(16)
                            });
                        case "DyslexiaIcon":
                            return v(Qr, {
                                width: n(15),
                                height: n(12)
                            });
                        case "VisuallyImpairedIcon":
                            return v(Ua, {
                                width: n(16),
                                height: n(16)
                            });
                        case "CognitiveLearningIcon":
                            return v(Vr, {
                                width: n(16),
                                height: n(16)
                            });
                        case "SeizureIcon":
                            return v(Oa, {
                                width: n(16),
                                height: n(16)
                            });
                        case "AdhdIcon":
                            return v(kr, {
                                width: n(16),
                                height: n(16)
                            });
                        default:
                            return null
                    }
                }(e.icon, d)), v("span", {
                    className: "uwaw-profiles__btn__name"
                }, g(t.label)), v("span", {
                    className: "uwaw-profiles__btn__active-icon"
                }, v(Ia, {
                    width: f(11, 17),
                    height: f(7, 11)
                }))))
            })))))
        },
        Es = function(e) {
            var t = e.name,
                n = e.disabledSlot,
                i = e.actionState,
                r = void 0 === i ? 0 : i,
                a = e.disabledSteps,
                o = void 0 === a ? [] : a,
                s = e.actionStatesMeta,
                l = e.onClick,
                u = e.temporaryDisabled,
                c = void 0 !== u && u,
                d = e.children;
            if (c) return null;
            var f = po().translate,
                g = Lo(),
                h = Vo().isWhiteLabeled,
                _ = Pe((function() {
                    return Object.keys(s).length - o.length
                }), [o, s]),
                p = Pe((function() {
                    return c ? "ally-action-item__disabled" : ""
                }), [c]),
                m = Pe((function() {
                    return r ? o.length ? Object.keys(s).map((function(e) {
                        return parseInt(e)
                    })).filter((function(e) {
                        return !xi(o, e)
                    })).indexOf(r) : r : 0
                }), [r, o]),
                w = Pe((function() {
                    return n ? "disabled" : ""
                }), [n]),
                y = Pe((function() {
                    return s["".concat(r)]
                }), [s, r]),
                b = Pe((function() {
                    return c && "object" == typeof c ? c.reason : f("s9" === t ? h ? y.aria_wl : y.aria : y.aria || y.label)
                }), [y, h, f, c]);
            return v("div", {
                className: "uwaw-features__item ".concat(w, " ").concat(p, " ").concat(0 !== m ? "uwaw-features__item_active" : "").replace(/\s+/, " ").trim()
            }, v("button", {
                id: "btn-".concat(t),
                className: "uwaw-features__item__i",
                onClick: function(e) {
                    return !c && l(e)
                },
                "data-uw-reader-content": b,
                "aria-label": b,
                "aria-pressed": !!r,
                "aria-live": "assertive"
            }, v("span", {
                className: "uwaw-features__item__icon ".concat(y.iconWrapClass ? y.iconWrapClass : "")
            }, v("span", {
                className: "icon icon-".concat(y.iconClass)
            })), v("span", {
                className: "uwaw-features__item__name"
            }, f(y.label)), d, 0 !== m && v("span", {
                className: "uwaw-features__item__enabled"
            }, v(na, {
                width: g(9, 11),
                height: g(6, 8)
            })), v("span", {
                className: "uwaw-features__item__steps ".concat(0 !== m && _ > 2 ? "uwaw-features__item__steps_visible" : "")
            }, function(e) {
                return Array.apply(null, Array(e - 1))
            }(_).map((function(e, t) {
                return v("span", {
                    key: t,
                    className: "uwaw-features__step ".concat(t + 1 <= m ? "uwaw-features__step_active" : "")
                }, v("span", {
                    className: "uwaw-features__step__i"
                }))
            })))))
        },
        Os = function(e) {
            var t = e.primaryKey,
                n = e.secondaryKey,
                i = oe(e, ["primaryKey", "secondaryKey"]);
            return v(ys, ae({}, i), v("span", {
                className: "uwaw-main-tooltip__keys"
            }, v("span", {
                className: "uwaw-main-tooltip__key"
            }, t), v("span", {
                className: "uwaw-main-tooltip__plus"
            }, "+"), v("span", {
                className: "uwaw-main-tooltip__key"
            }, n)))
        },
        Rs = function() {
            var e = po().translate,
                t = Lo(),
                n = Oe(Ls),
                i = n.allyFeaturesList,
                r = n.onFeatureMouseClick,
                a = n.onResetAll,
                o = Oe(Ai),
                s = o.areResourcesLoaded,
                l = o.tunings,
                u = Vo().isWhiteLabeled,
                c = Oe(qa).showToast,
                d = Ee((function(n) {
                    var i = n.name,
                        r = n.temporaryDisabled;
                    return "s7" !== i || u || l.widget_no_logo ? "s9" !== i || r ? "s21" === i ? v(Os, {
                        ariaLabel: e("widget.menu.info_icons.s21.aria_label"),
                        title: e("widget.menu.shortcut.label"),
                        primaryKey: "CTRL",
                        secondaryKey: "M"
                    }) : "s24" === i ? v(Os, {
                        ariaLabel: e("widget.menu.info_icons.s24.aria_label"),
                        title: e("widget.menu.shortcut.label"),
                        primaryKey: "CTRL",
                        secondaryKey: ","
                    }) : null : v(Os, {
                        ariaLabel: e("widget.menu.info_icons.s9.aria_label"),
                        title: e("widget.menu.shortcut.label"),
                        primaryKey: "CTRL",
                        secondaryKey: "."
                    }) : v("a", {
                        href: "https://userway.org/udf",
                        target: "_blank",
                        "aria-label": e("widget.menu.info_icons.s7.aria_label"),
                        className: "uwaw-features__info-icon-wrap",
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        onKeyDown: function(e) {
                            e.stopPropagation(), 32 !== e.keyCode && "Space" !== e.code || e.preventDefault()
                        }
                    }, v("span", {
                        className: "uwaw-features__info-icon"
                    }, v(la, {
                        width: t(2, 2),
                        height: t(8, 10)
                    })))
                }), [e, t]),
                f = Pe((function() {
                    return i.filter((function(e) {
                        return !e.isProfile
                    }))
                }), [i]),
                g = ki((function() {
                    a(), c(Va.Success, e("widget.menu.reset.notification"))
                }));
            return v(w, null, v("div", {
                className: "uwaw-features"
            }, !!f.length && f.map((function(e) {
                return v(Es, ae({
                    key: e.name
                }, e, {
                    isLoading: !s,
                    onClick: function(t) {
                        return r({
                            event: t,
                            name: e.name
                        })
                    }
                }), d(e))
            }))), !!f.length && v("button", {
                id: "btn-s8",
                className: "uwaw-btn uwaw-btn_blue uwaw-btn_reset-widget",
                "data-uw-reader-content": e("widget.menu.reset.aria"),
                onKeyDown: g,
                onClick: function() {
                    a(), c(Va.Success, e("widget.menu.reset.notification"))
                }
            }, v(Ta, null), e("widget.menu.reset.labelV2")))
        };

    function Ms(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Is(e, t) {
        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
    }
    /*!
     * GSAP 3.12.7
     * https://gsap.com
     *
     * @license Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ds, Hs, Fs, js, Bs, Us, zs, Ws, Vs, $s, Ys, Xs = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        qs = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        Ks = 1e8,
        Gs = 1e-8,
        Zs = 2 * Math.PI,
        Js = Zs / 4,
        Qs = 0,
        el = Math.sqrt,
        tl = Math.cos,
        nl = Math.sin,
        il = function(e) {
            return "string" == typeof e
        },
        rl = function(e) {
            return "function" == typeof e
        },
        al = function(e) {
            return "number" == typeof e
        },
        ol = function(e) {
            return void 0 === e
        },
        sl = function(e) {
            return "object" == typeof e
        },
        ll = function(e) {
            return !1 !== e
        },
        ul = function() {
            return "undefined" != typeof window
        },
        cl = function(e) {
            return rl(e) || il(e)
        },
        dl = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        fl = Array.isArray,
        gl = /(?:-?\.?\d|\.)+/gi,
        hl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        _l = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        pl = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        vl = /[+-]=-?[.\d]+/,
        ml = /[^,'"\[\]\s]+/gi,
        wl = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        yl = {},
        bl = {},
        xl = function(e) {
            return (bl = Zl(e, yl)) && Jc
        },
        kl = function(e, t) {
            return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
        },
        Sl = function(e, t) {
            return !t && console.warn(e)
        },
        Cl = function(e, t) {
            return e && (yl[e] = t) && bl && (bl[e] = t) || yl
        },
        Tl = function() {
            return 0
        },
        Nl = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        Ll = {
            suppressEvents: !0,
            kill: !1
        },
        Al = {
            suppressEvents: !0
        },
        Pl = {},
        El = [],
        Ol = {},
        Rl = {},
        Ml = {},
        Il = 30,
        Dl = [],
        Hl = "",
        Fl = function(e) {
            var t, n, i = e[0];
            if (sl(i) || rl(i) || (e = [e]), !(t = (i._gsap || {}).harness)) {
                for (n = Dl.length; n-- && !Dl[n].targetTest(i););
                t = Dl[n]
            }
            for (n = e.length; n--;) e[n] && (e[n]._gsap || (e[n]._gsap = new fc(e[n], t))) || e.splice(n, 1);
            return e
        },
        jl = function(e) {
            return e._gsap || Fl(Au(e))[0]._gsap
        },
        Bl = function(e, t, n) {
            return (n = e[t]) && rl(n) ? e[t]() : ol(n) && e.getAttribute && e.getAttribute(t) || n
        },
        Ul = function(e, t) {
            return (e = e.split(",")).forEach(t) || e
        },
        zl = function(e) {
            return Math.round(1e5 * e) / 1e5 || 0
        },
        Wl = function(e) {
            return Math.round(1e7 * e) / 1e7 || 0
        },
        Vl = function(e, t) {
            var n = t.charAt(0),
                i = parseFloat(t.substr(2));
            return e = parseFloat(e), "+" === n ? e + i : "-" === n ? e - i : "*" === n ? e * i : e / i
        },
        $l = function(e, t) {
            for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n;);
            return i < n
        },
        Yl = function() {
            var e, t, n = El.length,
                i = El.slice(0);
            for (Ol = {}, El.length = 0, e = 0; e < n; e++)(t = i[e]) && t._lazy && (t.render(t._lazy[0], t._lazy[1], !0)._lazy = 0)
        },
        Xl = function(e, t, n, i) {
            El.length && !Hs && Yl(), e.render(t, n, i || Hs && t < 0 && (e._initted || e._startAt)), El.length && !Hs && Yl()
        },
        ql = function(e) {
            var t = parseFloat(e);
            return (t || 0 === t) && (e + "").match(ml).length < 2 ? t : il(e) ? e.trim() : e
        },
        Kl = function(e) {
            return e
        },
        Gl = function(e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e
        },
        Zl = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        },
        Jl = function e(t, n) {
            for (var i in n) "__proto__" !== i && "constructor" !== i && "prototype" !== i && (t[i] = sl(n[i]) ? e(t[i] || (t[i] = {}), n[i]) : n[i]);
            return t
        },
        Ql = function(e, t) {
            var n, i = {};
            for (n in e) n in t || (i[n] = e[n]);
            return i
        },
        eu = function(e) {
            var t, n = e.parent || js,
                i = e.keyframes ? (t = fl(e.keyframes), function(e, n) {
                    for (var i in n) i in e || "duration" === i && t || "ease" === i || (e[i] = n[i])
                }) : Gl;
            if (ll(e.inherit))
                for (; n;) i(e, n.vars.defaults), n = n.parent || n._dp;
            return e
        },
        tu = function(e, t, n, i, r) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var a, o = e[i];
            if (r)
                for (a = t[r]; o && o[r] > a;) o = o._prev;
            return o ? (t._next = o._next, o._next = t) : (t._next = e[n], e[n] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t
        },
        nu = function(e, t, n, i) {
            void 0 === n && (n = "_first"), void 0 === i && (i = "_last");
            var r = t._prev,
                a = t._next;
            r ? r._next = a : e[n] === t && (e[n] = a), a ? a._prev = r : e[i] === t && (e[i] = r), t._next = t._prev = t.parent = null
        },
        iu = function(e, t) {
            e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0
        },
        ru = function(e, t) {
            if (e && (!t || t._end > e._dur || t._start < 0))
                for (var n = e; n;) n._dirty = 1, n = n.parent;
            return e
        },
        au = function(e, t, n, i) {
            return e._startAt && (Hs ? e._startAt.revert(Ll) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
        },
        ou = function e(t) {
            return !t || t._ts && e(t.parent)
        },
        su = function(e) {
            return e._repeat ? lu(e._tTime, e = e.duration() + e._rDelay) * e : 0
        },
        lu = function(e, t) {
            var n = Math.floor(e = Wl(e / t));
            return e && n === e ? n - 1 : n
        },
        uu = function(e, t) {
            return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
        },
        cu = function(e) {
            return e._end = Wl(e._start + (e._tDur / Math.abs(e._ts || e._rts || Gs) || 0))
        },
        du = function(e, t) {
            var n = e._dp;
            return n && n.smoothChildTiming && e._ts && (e._start = Wl(n._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), cu(e), n._dirty || ru(n, e)), e
        },
        fu = function(e, t) {
            var n;
            if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (n = uu(e.rawTime(), t), (!t._dur || Su(0, t.totalDuration(), n) - t._tTime > Gs) && t.render(n, !0)), ru(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
                if (e._dur < e.duration())
                    for (n = e; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                e._zTime = -1e-8
            }
        },
        gu = function(e, t, n, i) {
            return t.parent && iu(t), t._start = Wl((al(n) ? n : n || e !== js ? bu(e, n, t) : e._time) + t._delay), t._end = Wl(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), tu(e, t, "_first", "_last", e._sort ? "_start" : 0), vu(t) || (e._recent = t), i || fu(e, t), e._ts < 0 && du(e, e._tTime), e
        },
        hu = function(e, t) {
            return (yl.ScrollTrigger || kl("scrollTrigger", t)) && yl.ScrollTrigger.create(t, e)
        },
        _u = function(e, t, n, i, r) {
            return yc(e, t, r), e._initted ? !n && e._pt && !Hs && (e._dur && !1 !== e.vars.lazy || !e._dur && e.vars.lazy) && Vs !== Qu.frame ? (El.push(e), e._lazy = [r, i], 1) : void 0 : 1
        },
        pu = function e(t) {
            var n = t.parent;
            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || e(n))
        },
        vu = function(e) {
            var t = e.data;
            return "isFromStart" === t || "isStart" === t
        },
        mu = function(e, t, n, i) {
            var r = e._repeat,
                a = Wl(t) || 0,
                o = e._tTime / e._tDur;
            return o && !i && (e._time *= a / e._dur), e._dur = a, e._tDur = r ? r < 0 ? 1e10 : Wl(a * (r + 1) + e._rDelay * r) : a, o > 0 && !i && du(e, e._tTime = e._tDur * o), e.parent && cu(e), n || ru(e.parent, e), e
        },
        wu = function(e) {
            return e instanceof hc ? ru(e) : mu(e, e._dur)
        },
        yu = {
            _start: 0,
            endTime: Tl,
            totalDuration: Tl
        },
        bu = function e(t, n, i) {
            var r, a, o, s = t.labels,
                l = t._recent || yu,
                u = t.duration() >= Ks ? l.endTime(!1) : t._dur;
            return il(n) && (isNaN(n) || n in s) ? (a = n.charAt(0), o = "%" === n.substr(-1), r = n.indexOf("="), "<" === a || ">" === a ? (r >= 0 && (n = n.replace(/=/, "")), ("<" === a ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (o ? (r < 0 ? l : i).totalDuration() / 100 : 1)) : r < 0 ? (n in s || (s[n] = u), s[n]) : (a = parseFloat(n.charAt(r - 1) + n.substr(r + 1)), o && i && (a = a / 100 * (fl(i) ? i[0] : i).totalDuration()), r > 1 ? e(t, n.substr(0, r - 1), i) + a : u + a)) : null == n ? u : +n
        },
        xu = function(e, t, n) {
            var i, r, a = al(t[1]),
                o = (a ? 2 : 1) + (e < 2 ? 0 : 1),
                s = t[o];
            if (a && (s.duration = t[1]), s.parent = n, e) {
                for (i = s, r = n; r && !("immediateRender" in i);) i = r.vars.defaults || {}, r = ll(r.vars.inherit) && r.parent;
                s.immediateRender = ll(i.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[o - 1]
            }
            return new Cc(t[0], s, t[o + 1])
        },
        ku = function(e, t) {
            return e || 0 === e ? t(e) : t
        },
        Su = function(e, t, n) {
            return n < e ? e : n > t ? t : n
        },
        Cu = function(e, t) {
            return il(e) && (t = wl.exec(e)) ? t[1] : ""
        },
        Tu = [].slice,
        Nu = function(e, t) {
            return e && sl(e) && "length" in e && (!t && !e.length || e.length - 1 in e && sl(e[0])) && !e.nodeType && e !== Bs
        },
        Lu = function(e, t, n) {
            return void 0 === n && (n = []), e.forEach((function(e) {
                var i;
                return il(e) && !t || Nu(e, 1) ? (i = n).push.apply(i, Au(e)) : n.push(e)
            })) || n
        },
        Au = function(e, t, n) {
            return Fs && !t && Fs.selector ? Fs.selector(e) : !il(e) || n || !Us && ec() ? fl(e) ? Lu(e, n) : Nu(e) ? Tu.call(e, 0) : e ? [e] : [] : Tu.call((t || zs).querySelectorAll(e), 0)
        },
        Pu = function(e) {
            return e = Au(e)[0] || Sl("Invalid scope") || {},
                function(t) {
                    var n = e.current || e.nativeElement || e;
                    return Au(t, n.querySelectorAll ? n : n === e ? Sl("Invalid scope") || zs.createElement("div") : e)
                }
        },
        Eu = function(e) {
            return e.sort((function() {
                return .5 - Math.random()
            }))
        },
        Ou = function(e) {
            if (rl(e)) return e;
            var t = sl(e) ? e : {
                    each: e
                },
                n = sc(t.ease),
                i = t.from || 0,
                r = parseFloat(t.base) || 0,
                a = {},
                o = i > 0 && i < 1,
                s = isNaN(i) || o,
                l = t.axis,
                u = i,
                c = i;
            return il(i) ? u = c = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[i] || 0 : !o && s && (u = i[0], c = i[1]),
                function(e, o, d) {
                    var f, g, h, _, p, v, m, w, y, b = (d || t).length,
                        x = a[b];
                    if (!x) {
                        if (!(y = "auto" === t.grid ? 0 : (t.grid || [1, Ks])[1])) {
                            for (m = -1e8; m < (m = d[y++].getBoundingClientRect().left) && y < b;);
                            y < b && y--
                        }
                        for (x = a[b] = [], f = s ? Math.min(y, b) * u - .5 : i % y, g = y === Ks ? 0 : s ? b * c / y - .5 : i / y | 0, m = 0, w = Ks, v = 0; v < b; v++) h = v % y - f, _ = g - (v / y | 0), x[v] = p = l ? Math.abs("y" === l ? _ : h) : el(h * h + _ * _), p > m && (m = p), p < w && (w = p);
                        "random" === i && Eu(x), x.max = m - w, x.min = w, x.v = b = (parseFloat(t.amount) || parseFloat(t.each) * (y > b ? b - 1 : l ? "y" === l ? b / y : y : Math.max(y, b / y)) || 0) * ("edges" === i ? -1 : 1), x.b = b < 0 ? r - b : r, x.u = Cu(t.amount || t.each) || 0, n = n && b < 0 ? ac(n) : n
                    }
                    return b = (x[e] - x.min) / x.max || 0, Wl(x.b + (n ? n(b) : b) * x.v) + x.u
                }
        },
        Ru = function(e) {
            var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
            return function(n) {
                var i = Wl(Math.round(parseFloat(n) / e) * e * t);
                return (i - i % 1) / t + (al(n) ? 0 : Cu(n))
            }
        },
        Mu = function(e, t) {
            var n, i, r = fl(e);
            return !r && sl(e) && (n = r = e.radius || Ks, e.values ? (e = Au(e.values), (i = !al(e[0])) && (n *= n)) : e = Ru(e.increment)), ku(t, r ? rl(e) ? function(t) {
                return i = e(t), Math.abs(i - t) <= n ? i : t
            } : function(t) {
                for (var r, a, o = parseFloat(i ? t.x : t), s = parseFloat(i ? t.y : 0), l = Ks, u = 0, c = e.length; c--;)(r = i ? (r = e[c].x - o) * r + (a = e[c].y - s) * a : Math.abs(e[c] - o)) < l && (l = r, u = c);
                return u = !n || l <= n ? e[u] : t, i || u === t || al(t) ? u : u + Cu(t)
            } : Ru(e))
        },
        Iu = function(e, t, n, i) {
            return ku(fl(e) ? !t : !0 === n ? !!(n = 0) : !i, (function() {
                return fl(e) ? e[~~(Math.random() * e.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((e - n / 2 + Math.random() * (t - e + .99 * n)) / n) * n * i) / i
            }))
        },
        Du = function(e, t, n) {
            return ku(n, (function(n) {
                return e[~~t(n)]
            }))
        },
        Hu = function(e) {
            for (var t, n, i, r, a = 0, o = ""; ~(t = e.indexOf("random(", a));) i = e.indexOf(")", t), r = "[" === e.charAt(t + 7), n = e.substr(t + 7, i - t - 7).match(r ? ml : gl), o += e.substr(a, t - a) + Iu(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5), a = i + 1;
            return o + e.substr(a, e.length - a)
        },
        Fu = function(e, t, n, i, r) {
            var a = t - e,
                o = i - n;
            return ku(r, (function(t) {
                return n + ((t - e) / a * o || 0)
            }))
        },
        ju = function(e, t, n) {
            var i, r, a, o = e.labels,
                s = Ks;
            for (i in o)(r = o[i] - t) < 0 == !!n && r && s > (r = Math.abs(r)) && (a = i, s = r);
            return a
        },
        Bu = function(e, t, n) {
            var i, r, a, o = e.vars,
                s = o[t],
                l = Fs,
                u = e._ctx;
            if (s) return i = o[t + "Params"], r = o.callbackScope || e, n && El.length && Yl(), u && (Fs = u), a = i ? s.apply(r, i) : s.call(r), Fs = l, a
        },
        Uu = function(e) {
            return iu(e), e.scrollTrigger && e.scrollTrigger.kill(!!Hs), e.progress() < 1 && Bu(e, "onInterrupt"), e
        },
        zu = [],
        Wu = function(e) {
            if (e)
                if (e = !e.name && e.default || e, ul() || e.headless) {
                    var t = e.name,
                        n = rl(e),
                        i = t && !n && e.init ? function() {
                            this._props = []
                        } : e,
                        r = {
                            init: Tl,
                            render: Mc,
                            add: mc,
                            kill: Dc,
                            modifier: Ic,
                            rawVars: 0
                        },
                        a = {
                            targetTest: 0,
                            get: 0,
                            getSetter: Pc,
                            aliases: {},
                            register: 0
                        };
                    if (ec(), e !== i) {
                        if (Rl[t]) return;
                        Gl(i, Gl(Ql(e, r), a)), Zl(i.prototype, Zl(r, Ql(e, a))), Rl[i.prop = t] = i, e.targetTest && (Dl.push(i), Pl[t] = 1), t = ("css" === t ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
                    }
                    Cl(t, i), e.register && e.register(Jc, i, jc)
                } else zu.push(e)
        },
        Vu = 255,
        $u = {
            aqua: [0, Vu, Vu],
            lime: [0, Vu, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, Vu],
            navy: [0, 0, 128],
            white: [Vu, Vu, Vu],
            olive: [128, 128, 0],
            yellow: [Vu, Vu, 0],
            orange: [Vu, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [Vu, 0, 0],
            pink: [Vu, 192, 203],
            cyan: [0, Vu, Vu],
            transparent: [Vu, Vu, Vu, 0]
        },
        Yu = function(e, t, n) {
            return (6 * (e += e < 0 ? 1 : e > 1 ? -1 : 0) < 1 ? t + (n - t) * e * 6 : e < .5 ? n : 3 * e < 2 ? t + (n - t) * (2 / 3 - e) * 6 : t) * Vu + .5 | 0
        },
        Xu = function(e, t, n) {
            var i, r, a, o, s, l, u, c, d, f, g = e ? al(e) ? [e >> 16, e >> 8 & Vu, e & Vu] : 0 : $u.black;
            if (!g) {
                if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), $u[e]) g = $u[e];
                else if ("#" === e.charAt(0)) {
                    if (e.length < 6 && (i = e.charAt(1), r = e.charAt(2), a = e.charAt(3), e = "#" + i + i + r + r + a + a + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(g = parseInt(e.substr(1, 6), 16)) >> 16, g >> 8 & Vu, g & Vu, parseInt(e.substr(7), 16) / 255];
                    g = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & Vu, e & Vu]
                } else if ("hsl" === e.substr(0, 3))
                    if (g = f = e.match(gl), t) {
                        if (~e.indexOf("=")) return g = e.match(hl), n && g.length < 4 && (g[3] = 1), g
                    } else o = +g[0] % 360 / 360, s = +g[1] / 100, i = 2 * (l = +g[2] / 100) - (r = l <= .5 ? l * (s + 1) : l + s - l * s), g.length > 3 && (g[3] *= 1), g[0] = Yu(o + 1 / 3, i, r), g[1] = Yu(o, i, r), g[2] = Yu(o - 1 / 3, i, r);
                else g = e.match(gl) || $u.transparent;
                g = g.map(Number)
            }
            return t && !f && (i = g[0] / Vu, r = g[1] / Vu, a = g[2] / Vu, l = ((u = Math.max(i, r, a)) + (c = Math.min(i, r, a))) / 2, u === c ? o = s = 0 : (d = u - c, s = l > .5 ? d / (2 - u - c) : d / (u + c), o = u === i ? (r - a) / d + (r < a ? 6 : 0) : u === r ? (a - i) / d + 2 : (i - r) / d + 4, o *= 60), g[0] = ~~(o + .5), g[1] = ~~(100 * s + .5), g[2] = ~~(100 * l + .5)), n && g.length < 4 && (g[3] = 1), g
        },
        qu = function(e) {
            var t = [],
                n = [],
                i = -1;
            return e.split(Gu).forEach((function(e) {
                var r = e.match(_l) || [];
                t.push.apply(t, r), n.push(i += r.length + 1)
            })), t.c = n, t
        },
        Ku = function(e, t, n) {
            var i, r, a, o, s = "",
                l = (e + s).match(Gu),
                u = t ? "hsla(" : "rgba(",
                c = 0;
            if (!l) return e;
            if (l = l.map((function(e) {
                    return (e = Xu(e, t, 1)) && u + (t ? e[0] + "," + e[1] + "%," + e[2] + "%," + e[3] : e.join(",")) + ")"
                })), n && (a = qu(e), (i = n.c).join(s) !== a.c.join(s)))
                for (o = (r = e.replace(Gu, "1").split(_l)).length - 1; c < o; c++) s += r[c] + (~i.indexOf(c) ? l.shift() || u + "0,0,0,0)" : (a.length ? a : l.length ? l : n).shift());
            if (!r)
                for (o = (r = e.split(Gu)).length - 1; c < o; c++) s += r[c] + l[c];
            return s + r[o]
        },
        Gu = function() {
            var e, t = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (e in $u) t += "|" + e + "\\b";
            return new RegExp(t + ")", "gi")
        }(),
        Zu = /hsl[a]?\(/,
        Ju = function(e) {
            var t, n = e.join(" ");
            if (Gu.lastIndex = 0, Gu.test(n)) return t = Zu.test(n), e[1] = Ku(e[1], t), e[0] = Ku(e[0], t, qu(e[1])), !0
        },
        Qu = function() {
            var e, t, n, i, r, a, o = Date.now,
                s = 500,
                l = 33,
                u = o(),
                c = u,
                d = 1e3 / 240,
                f = d,
                g = [],
                h = function n(h) {
                    var _, p, v, m, w = o() - c,
                        y = !0 === h;
                    if ((w > s || w < 0) && (u += w - l), ((_ = (v = (c += w) - u) - f) > 0 || y) && (m = ++i.frame, r = v - 1e3 * i.time, i.time = v /= 1e3, f += _ + (_ >= d ? 4 : d - _), p = 1), y || (e = t(n)), p)
                        for (a = 0; a < g.length; a++) g[a](v, r, m, h)
                };
            return i = {
                time: 0,
                frame: 0,
                tick: function() {
                    h(!0)
                },
                deltaRatio: function(e) {
                    return r / (1e3 / (e || 60))
                },
                wake: function() {
                    Ws && (!Us && ul() && (Bs = Us = window, zs = Bs.document || {}, yl.gsap = Jc, (Bs.gsapVersions || (Bs.gsapVersions = [])).push(Jc.version), xl(bl || Bs.GreenSockGlobals || !Bs.gsap && Bs || {}), zu.forEach(Wu)), n = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, e && i.sleep(), t = n || function(e) {
                        return setTimeout(e, f - 1e3 * i.time + 1 | 0)
                    }, Ys = 1, h(2))
                },
                sleep: function() {
                    (n ? cancelAnimationFrame : clearTimeout)(e), Ys = 0, t = Tl
                },
                lagSmoothing: function(e, t) {
                    s = e || 1 / 0, l = Math.min(t || 33, s)
                },
                fps: function(e) {
                    d = 1e3 / (e || 240), f = 1e3 * i.time + d
                },
                add: function(e, t, n) {
                    var r = t ? function(t, n, a, o) {
                        e(t, n, a, o), i.remove(r)
                    } : e;
                    return i.remove(e), g[n ? "unshift" : "push"](r), ec(), r
                },
                remove: function(e, t) {
                    ~(t = g.indexOf(e)) && g.splice(t, 1) && a >= t && a--
                },
                _listeners: g
            }, i
        }(),
        ec = function() {
            return !Ys && Qu.wake()
        },
        tc = {},
        nc = /^[\d.\-M][\d.\-,\s]/,
        ic = /["']/g,
        rc = function(e) {
            for (var t, n, i, r = {}, a = e.substr(1, e.length - 3).split(":"), o = a[0], s = 1, l = a.length; s < l; s++) n = a[s], t = s !== l - 1 ? n.lastIndexOf(",") : n.length, i = n.substr(0, t), r[o] = isNaN(i) ? i.replace(ic, "").trim() : +i, o = n.substr(t + 1).trim();
            return r
        },
        ac = function(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        oc = function e(t, n) {
            for (var i, r = t._first; r;) r instanceof hc ? e(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? e(r.timeline, n) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = n)), r = r._next
        },
        sc = function(e, t) {
            return e && (rl(e) ? e : tc[e] || function(e) {
                var t, n, i, r, a = (e + "").split("("),
                    o = tc[a[0]];
                return o && a.length > 1 && o.config ? o.config.apply(null, ~e.indexOf("{") ? [rc(a[1])] : (t = e, n = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", n), t.substring(n, ~r && r < i ? t.indexOf(")", i + 1) : i)).split(",").map(ql)) : tc._CE && nc.test(e) ? tc._CE("", e) : o
            }(e)) || t
        },
        lc = function(e, t, n, i) {
            void 0 === n && (n = function(e) {
                return 1 - t(1 - e)
            }), void 0 === i && (i = function(e) {
                return e < .5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2
            });
            var r, a = {
                easeIn: t,
                easeOut: n,
                easeInOut: i
            };
            return Ul(e, (function(e) {
                for (var t in tc[e] = yl[e] = a, tc[r = e.toLowerCase()] = n, a) tc[r + ("easeIn" === t ? ".in" : "easeOut" === t ? ".out" : ".inOut")] = tc[e + "." + t] = a[t]
            })), a
        },
        uc = function(e) {
            return function(t) {
                return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
            }
        },
        cc = function e(t, n, i) {
            var r = n >= 1 ? n : 1,
                a = (i || (t ? .3 : .45)) / (n < 1 ? n : 1),
                o = a / Zs * (Math.asin(1 / r) || 0),
                s = function(e) {
                    return 1 === e ? 1 : r * Math.pow(2, -10 * e) * nl((e - o) * a) + 1
                },
                l = "out" === t ? s : "in" === t ? function(e) {
                    return 1 - s(1 - e)
                } : uc(s);
            return a = Zs / a, l.config = function(n, i) {
                return e(t, n, i)
            }, l
        },
        dc = function e(t, n) {
            void 0 === n && (n = 1.70158);
            var i = function(e) {
                    return e ? --e * e * ((n + 1) * e + n) + 1 : 0
                },
                r = "out" === t ? i : "in" === t ? function(e) {
                    return 1 - i(1 - e)
                } : uc(i);
            return r.config = function(n) {
                return e(t, n)
            }, r
        };
    Ul("Linear,Quad,Cubic,Quart,Quint,Strong", (function(e, t) {
            var n = t < 5 ? t + 1 : t;
            lc(e + ",Power" + (n - 1), t ? function(e) {
                return Math.pow(e, n)
            } : function(e) {
                return e
            }, (function(e) {
                return 1 - Math.pow(1 - e, n)
            }), (function(e) {
                return e < .5 ? Math.pow(2 * e, n) / 2 : 1 - Math.pow(2 * (1 - e), n) / 2
            }))
        })), tc.Linear.easeNone = tc.none = tc.Linear.easeIn, lc("Elastic", cc("in"), cc("out"), cc()),
        function(e, t) {
            var n = 1 / t,
                i = 2 * n,
                r = 2.5 * n,
                a = function(a) {
                    return a < n ? e * a * a : a < i ? e * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? e * (a -= 2.25 / t) * a + .9375 : e * Math.pow(a - 2.625 / t, 2) + .984375
                };
            lc("Bounce", (function(e) {
                return 1 - a(1 - e)
            }), a)
        }(7.5625, 2.75), lc("Expo", (function(e) {
            return Math.pow(2, 10 * (e - 1)) * e + e * e * e * e * e * e * (1 - e)
        })), lc("Circ", (function(e) {
            return -(el(1 - e * e) - 1)
        })), lc("Sine", (function(e) {
            return 1 === e ? 1 : 1 - tl(e * Js)
        })), lc("Back", dc("in"), dc("out"), dc()), tc.SteppedEase = tc.steps = yl.SteppedEase = {
            config: function(e, t) {
                void 0 === e && (e = 1);
                var n = 1 / e,
                    i = e + (t ? 0 : 1),
                    r = t ? 1 : 0;
                return function(e) {
                    return ((i * Su(0, .99999999, e) | 0) + r) * n
                }
            }
        }, qs.ease = tc["quad.out"], Ul("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(e) {
            return Hl += e + "," + e + "Params,"
        }));
    var fc = function(e, t) {
            this.id = Qs++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Bl, this.set = t ? t.getSetter : Pc
        },
        gc = function() {
            function e(e) {
                this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, mu(this, +e.duration, 1, 1), this.data = e.data, Fs && (this._ctx = Fs, Fs.data.push(this)), Ys || Qu.wake()
            }
            var t = e.prototype;
            return t.delay = function(e) {
                return e || 0 === e ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay), this._delay = e, this) : this._delay
            }, t.duration = function(e) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
            }, t.totalDuration = function(e) {
                return arguments.length ? (this._dirty = 0, mu(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, t.totalTime = function(e, t) {
                if (ec(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (du(this, e), !n._dp || n.parent || fu(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && gu(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== e || !this._dur && !t || this._initted && Math.abs(this._zTime) === Gs || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e), Xl(this, e, t)), this
            }, t.time = function(e, t) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + su(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), t) : this._time
            }, t.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
            }, t.progress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? e : 1 - e) + su(this), t) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
            }, t.iteration = function(e, t) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (e - 1) * n, t) : this._repeat ? lu(this._tTime, n) + 1 : 1
            }, t.timeScale = function(e, t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === e) return this;
                var n = this.parent && this._ts ? uu(this.parent._time, this) : this._tTime;
                return this._rts = +e || 0, this._ts = this._ps || -1e-8 === e ? 0 : this._rts, this.totalTime(Su(-Math.abs(this._delay), this._tDur, n), !1 !== t), cu(this),
                    function(e) {
                        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
                        return e
                    }(this)
            }, t.paused = function(e) {
                return arguments.length ? (this._ps !== e && (this._ps = e, e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ec(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Gs && (this._tTime -= Gs)))), this) : this._ps
            }, t.startTime = function(e) {
                if (arguments.length) {
                    this._start = e;
                    var t = this.parent || this._dp;
                    return t && (t._sort || !this.parent) && gu(t, this, e - this._delay), this
                }
                return this._start
            }, t.endTime = function(e) {
                return this._start + (ll(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, t.rawTime = function(e) {
                var t = this.parent || this._dp;
                return t ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? uu(t.rawTime(e), this) : this._tTime : this._tTime
            }, t.revert = function(e) {
                void 0 === e && (e = Al);
                var t = Hs;
                return Hs = e, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e), this.totalTime(-.01, e.suppressEvents)), "nested" !== this.data && !1 !== e.kill && this.kill(), Hs = t, this
            }, t.globalTime = function(e) {
                for (var t = this, n = arguments.length ? e : t.rawTime(); t;) n = t._start + n / (Math.abs(t._ts) || 1), t = t._dp;
                return !this.parent && this._sat ? this._sat.globalTime(e) : n
            }, t.repeat = function(e) {
                return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e, wu(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, t.repeatDelay = function(e) {
                if (arguments.length) {
                    var t = this._time;
                    return this._rDelay = e, wu(this), t ? this.time(t) : this
                }
                return this._rDelay
            }, t.yoyo = function(e) {
                return arguments.length ? (this._yoyo = e, this) : this._yoyo
            }, t.seek = function(e, t) {
                return this.totalTime(bu(this, e), ll(t))
            }, t.restart = function(e, t) {
                return this.play().totalTime(e ? -this._delay : 0, ll(t)), this._dur || (this._zTime = -1e-8), this
            }, t.play = function(e, t) {
                return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
            }, t.reverse = function(e, t) {
                return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, t.pause = function(e, t) {
                return null != e && this.seek(e, t), this.paused(!0)
            }, t.resume = function() {
                return this.paused(!1)
            }, t.reversed = function(e) {
                return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -1e-8 : 0)), this) : this._rts < 0
            }, t.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, t.isActive = function() {
                var e, t = this.parent || this._dp,
                    n = this._start;
                return !(t && !(this._ts && this._initted && t.isActive() && (e = t.rawTime(!0)) >= n && e < this.endTime(!0) - Gs))
            }, t.eventCallback = function(e, t, n) {
                var i = this.vars;
                return arguments.length > 1 ? (t ? (i[e] = t, n && (i[e + "Params"] = n), "onUpdate" === e && (this._onUpdate = t)) : delete i[e], this) : i[e]
            }, t.then = function(e) {
                var t = this;
                return new Promise((function(n) {
                    var i = rl(e) ? e : Kl,
                        r = function() {
                            var e = t.then;
                            t.then = null, rl(i) && (i = i(t)) && (i.then || i === t) && (t.then = e), n(i), t.then = e
                        };
                    t._initted && 1 === t.totalProgress() && t._ts >= 0 || !t._tTime && t._ts < 0 ? r() : t._prom = r
                }))
            }, t.kill = function() {
                Uu(this)
            }, e
        }();
    Gl(gc.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var hc = function(e) {
        function t(t, n) {
            var i;
            return void 0 === t && (t = {}), (i = e.call(this, t) || this).labels = {}, i.smoothChildTiming = !!t.smoothChildTiming, i.autoRemoveChildren = !!t.autoRemoveChildren, i._sort = ll(t.sortChildren), js && gu(t.parent || js, Ms(i), n), t.reversed && i.reverse(), t.paused && i.paused(!0), t.scrollTrigger && hu(Ms(i), t.scrollTrigger), i
        }
        Is(t, e);
        var n = t.prototype;
        return n.to = function(e, t, n) {
            return xu(0, arguments, this), this
        }, n.from = function(e, t, n) {
            return xu(1, arguments, this), this
        }, n.fromTo = function(e, t, n, i) {
            return xu(2, arguments, this), this
        }, n.set = function(e, t, n) {
            return t.duration = 0, t.parent = this, eu(t).repeatDelay || (t.repeat = 0), t.immediateRender = !!t.immediateRender, new Cc(e, t, bu(this, n), 1), this
        }, n.call = function(e, t, n) {
            return gu(this, Cc.delayedCall(0, e, t), n)
        }, n.staggerTo = function(e, t, n, i, r, a, o) {
            return n.duration = t, n.stagger = n.stagger || i, n.onComplete = a, n.onCompleteParams = o, n.parent = this, new Cc(e, n, bu(this, r)), this
        }, n.staggerFrom = function(e, t, n, i, r, a, o) {
            return n.runBackwards = 1, eu(n).immediateRender = ll(n.immediateRender), this.staggerTo(e, t, n, i, r, a, o)
        }, n.staggerFromTo = function(e, t, n, i, r, a, o, s) {
            return i.startAt = n, eu(i).immediateRender = ll(i.immediateRender), this.staggerTo(e, t, i, r, a, o, s)
        }, n.render = function(e, t, n) {
            var i, r, a, o, s, l, u, c, d, f, g, h, _ = this._time,
                p = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                m = e <= 0 ? 0 : Wl(e),
                w = this._zTime < 0 != e < 0 && (this._initted || !v);
            if (this !== js && m > p && e >= 0 && (m = p), m !== this._tTime || n || w) {
                if (_ !== this._time && v && (m += this._time - _, e += this._time - _), i = m, d = this._start, l = !(c = this._ts), w && (v || (_ = this._zTime), (e || !t) && (this._zTime = e)), this._repeat) {
                    if (g = this._yoyo, s = v + this._rDelay, this._repeat < -1 && e < 0) return this.totalTime(100 * s + e, t, n);
                    if (i = Wl(m % s), m === p ? (o = this._repeat, i = v) : ((o = ~~(f = Wl(m / s))) && o === f && (i = v, o--), i > v && (i = v)), f = lu(this._tTime, s), !_ && this._tTime && f !== o && this._tTime - f * s - this._dur <= 0 && (f = o), g && 1 & o && (i = v - i, h = 1), o !== f && !this._lock) {
                        var y = g && 1 & f,
                            b = y === (g && 1 & o);
                        if (o < f && (y = !y), _ = y ? 0 : m % v ? v : m, this._lock = 1, this.render(_ || (h ? 0 : Wl(o * s)), t, !v)._lock = 0, this._tTime = m, !t && this.parent && Bu(this, "onRepeat"), this.vars.repeatRefresh && !h && (this.invalidate()._lock = 1), _ && _ !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (v = this._dur, p = this._tDur, b && (this._lock = 2, _ = y ? v : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !h && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        oc(this, h)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(e, t, n) {
                        var i;
                        if (n > t)
                            for (i = e._first; i && i._start <= n;) {
                                if ("isPause" === i.data && i._start > t) return i;
                                i = i._next
                            } else
                                for (i = e._last; i && i._start >= n;) {
                                    if ("isPause" === i.data && i._start < t) return i;
                                    i = i._prev
                                }
                    }(this, Wl(_), Wl(i)), u && (m -= i - (i = u._start))), this._tTime = m, this._time = i, this._act = !c, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = e, _ = 0), !_ && i && !t && !o && (Bu(this, "onStart"), this._tTime !== m)) return this;
                if (i >= _ && e >= 0)
                    for (r = this._first; r;) {
                        if (a = r._next, (r._act || i >= r._start) && r._ts && u !== r) {
                            if (r.parent !== this) return this.render(e, t, n);
                            if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, t, n), i !== this._time || !this._ts && !l) {
                                u = 0, a && (m += this._zTime = -1e-8);
                                break
                            }
                        }
                        r = a
                    } else {
                        r = this._last;
                        for (var x = e < 0 ? e : i; r;) {
                            if (a = r._prev, (r._act || x <= r._end) && r._ts && u !== r) {
                                if (r.parent !== this) return this.render(e, t, n);
                                if (r.render(r._ts > 0 ? (x - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (x - r._start) * r._ts, t, n || Hs && (r._initted || r._startAt)), i !== this._time || !this._ts && !l) {
                                    u = 0, a && (m += this._zTime = x ? -1e-8 : Gs);
                                    break
                                }
                            }
                            r = a
                        }
                    }
                if (u && !t && (this.pause(), u.render(i >= _ ? 0 : -1e-8)._zTime = i >= _ ? 1 : -1, this._ts)) return this._start = d, cu(this), this.render(e, t, n);
                this._onUpdate && !t && Bu(this, "onUpdate", !0), (m === p && this._tTime >= this.totalDuration() || !m && _) && (d !== this._start && Math.abs(c) === Math.abs(this._ts) || this._lock || ((e || !v) && (m === p && this._ts > 0 || !m && this._ts < 0) && iu(this, 1), t || e < 0 && !_ || !m && !_ && p || (Bu(this, m === p && e >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(m < p && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function(e, t) {
            var n = this;
            if (al(t) || (t = bu(this, t, e)), !(e instanceof gc)) {
                if (fl(e)) return e.forEach((function(e) {
                    return n.add(e, t)
                })), this;
                if (il(e)) return this.addLabel(e, t);
                if (!rl(e)) return this;
                e = Cc.delayedCall(0, e)
            }
            return this !== e ? gu(this, e, t) : this
        }, n.getChildren = function(e, t, n, i) {
            void 0 === e && (e = !0), void 0 === t && (t = !0), void 0 === n && (n = !0), void 0 === i && (i = -1e8);
            for (var r = [], a = this._first; a;) a._start >= i && (a instanceof Cc ? t && r.push(a) : (n && r.push(a), e && r.push.apply(r, a.getChildren(!0, t, n)))), a = a._next;
            return r
        }, n.getById = function(e) {
            for (var t = this.getChildren(1, 1, 1), n = t.length; n--;)
                if (t[n].vars.id === e) return t[n]
        }, n.remove = function(e) {
            return il(e) ? this.removeLabel(e) : rl(e) ? this.killTweensOf(e) : (e.parent === this && nu(this, e), e === this._recent && (this._recent = this._last), ru(this))
        }, n.totalTime = function(t, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Wl(Qu.time - (this._ts > 0 ? t / this._ts : (this.totalDuration() - t) / -this._ts))), e.prototype.totalTime.call(this, t, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function(e, t) {
            return this.labels[e] = bu(this, t), this
        }, n.removeLabel = function(e) {
            return delete this.labels[e], this
        }, n.addPause = function(e, t, n) {
            var i = Cc.delayedCall(0, t || Tl, n);
            return i.data = "isPause", this._hasPause = 1, gu(this, i, bu(this, e))
        }, n.removePause = function(e) {
            var t = this._first;
            for (e = bu(this, e); t;) t._start === e && "isPause" === t.data && iu(t), t = t._next
        }, n.killTweensOf = function(e, t, n) {
            for (var i = this.getTweensOf(e, n), r = i.length; r--;) _c !== i[r] && i[r].kill(e, t);
            return this
        }, n.getTweensOf = function(e, t) {
            for (var n, i = [], r = Au(e), a = this._first, o = al(t); a;) a instanceof Cc ? $l(a._targets, r) && (o ? (!_c || a._initted && a._ts) && a.globalTime(0) <= t && a.globalTime(a.totalDuration()) > t : !t || a.isActive()) && i.push(a) : (n = a.getTweensOf(r, t)).length && i.push.apply(i, n), a = a._next;
            return i
        }, n.tweenTo = function(e, t) {
            t = t || {};
            var n, i = this,
                r = bu(i, e),
                a = t,
                o = a.startAt,
                s = a.onStart,
                l = a.onStartParams,
                u = a.immediateRender,
                c = Cc.to(i, Gl({
                    ease: t.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: t.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale()) || Gs,
                    onStart: function() {
                        if (i.pause(), !n) {
                            var e = t.duration || Math.abs((r - (o && "time" in o ? o.time : i._time)) / i.timeScale());
                            c._dur !== e && mu(c, e, 0, 1).render(c._time, !0, !0), n = 1
                        }
                        s && s.apply(c, l || [])
                    }
                }, t));
            return u ? c.render(0) : c
        }, n.tweenFromTo = function(e, t, n) {
            return this.tweenTo(t, Gl({
                startAt: {
                    time: bu(this, e)
                }
            }, n))
        }, n.recent = function() {
            return this._recent
        }, n.nextLabel = function(e) {
            return void 0 === e && (e = this._time), ju(this, bu(this, e))
        }, n.previousLabel = function(e) {
            return void 0 === e && (e = this._time), ju(this, bu(this, e), 1)
        }, n.currentLabel = function(e) {
            return arguments.length ? this.seek(e, !0) : this.previousLabel(this._time + Gs)
        }, n.shiftChildren = function(e, t, n) {
            void 0 === n && (n = 0);
            for (var i, r = this._first, a = this.labels; r;) r._start >= n && (r._start += e, r._end += e), r = r._next;
            if (t)
                for (i in a) a[i] >= n && (a[i] += e);
            return ru(this)
        }, n.invalidate = function(t) {
            var n = this._first;
            for (this._lock = 0; n;) n.invalidate(t), n = n._next;
            return e.prototype.invalidate.call(this, t)
        }, n.clear = function(e) {
            void 0 === e && (e = !0);
            for (var t, n = this._first; n;) t = n._next, this.remove(n), n = t;
            return this._dp && (this._time = this._tTime = this._pTime = 0), e && (this.labels = {}), ru(this)
        }, n.totalDuration = function(e) {
            var t, n, i, r = 0,
                a = this,
                o = a._last,
                s = Ks;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -e : e));
            if (a._dirty) {
                for (i = a.parent; o;) t = o._prev, o._dirty && o.totalDuration(), (n = o._start) > s && a._sort && o._ts && !a._lock ? (a._lock = 1, gu(a, o, n - o._delay, 1)._lock = 0) : s = n, n < 0 && o._ts && (r -= n, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += n / a._ts, a._time -= n, a._tTime -= n), a.shiftChildren(-n, !1, -Infinity), s = 0), o._end > r && o._ts && (r = o._end), o = t;
                mu(a, a === js && a._time > r ? a._time : r, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, t.updateRoot = function(e) {
            if (js._ts && (Xl(js, uu(e, js)), Vs = Qu.frame), Qu.frame >= Il) {
                Il += Xs.autoSleep || 120;
                var t = js._first;
                if ((!t || !t._ts) && Xs.autoSleep && Qu._listeners.length < 2) {
                    for (; t && !t._ts;) t = t._next;
                    t || Qu.sleep()
                }
            }
        }, t
    }(gc);
    Gl(hc.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var _c, pc, vc = function(e, t, n, i, r, a, o) {
            var s, l, u, c, d, f, g, h, _ = new jc(this._pt, e, t, 0, 1, Rc, null, r),
                p = 0,
                v = 0;
            for (_.b = n, _.e = i, n += "", (g = ~(i += "").indexOf("random(")) && (i = Hu(i)), a && (a(h = [n, i], e, t), n = h[0], i = h[1]), l = n.match(pl) || []; s = pl.exec(i);) c = s[0], d = i.substring(p, s.index), u ? u = (u + 1) % 5 : "rgba(" === d.substr(-5) && (u = 1), c !== l[v++] && (f = parseFloat(l[v - 1]) || 0, _._pt = {
                _next: _._pt,
                p: d || 1 === v ? d : ",",
                s: f,
                c: "=" === c.charAt(1) ? Vl(f, c) - f : parseFloat(c) - f,
                m: u && u < 4 ? Math.round : 0
            }, p = pl.lastIndex);
            return _.c = p < i.length ? i.substring(p, i.length) : "", _.fp = o, (vl.test(i) || g) && (_.e = 0), this._pt = _, _
        },
        mc = function(e, t, n, i, r, a, o, s, l, u) {
            rl(i) && (i = i(r || 0, e, a));
            var c, d = e[t],
                f = "get" !== n ? n : rl(d) ? l ? e[t.indexOf("set") || !rl(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : d,
                g = rl(d) ? l ? Lc : Nc : Tc;
            if (il(i) && (~i.indexOf("random(") && (i = Hu(i)), "=" === i.charAt(1) && ((c = Vl(f, i) + (Cu(f) || 0)) || 0 === c) && (i = c)), !u || f !== i || pc) return isNaN(f * i) || "" === i ? (!d && !(t in e) && kl(t, i), vc.call(this, e, t, f, i, g, s || Xs.stringFilter, l)) : (c = new jc(this._pt, e, t, +f || 0, i - (f || 0), "boolean" == typeof d ? Oc : Ec, 0, g), l && (c.fp = l), o && c.modifier(o, this, e), this._pt = c)
        },
        wc = function(e, t, n, i, r, a) {
            var o, s, l, u;
            if (Rl[e] && !1 !== (o = new Rl[e]).init(r, o.rawVars ? t[e] : function(e, t, n, i, r) {
                    if (rl(e) && (e = xc(e, r, t, n, i)), !sl(e) || e.style && e.nodeType || fl(e) || dl(e)) return il(e) ? xc(e, r, t, n, i) : e;
                    var a, o = {};
                    for (a in e) o[a] = xc(e[a], r, t, n, i);
                    return o
                }(t[e], i, r, a, n), n, i, a) && (n._pt = s = new jc(n._pt, r, e, 0, 1, o.render, o, 0, o.priority), n !== $s))
                for (l = n._ptLookup[n._targets.indexOf(r)], u = o._props.length; u--;) l[o._props[u]] = s;
            return o
        },
        yc = function e(t, n, i) {
            var r, a, o, s, l, u, c, d, f, g, h, _, p, v = t.vars,
                m = v.ease,
                w = v.startAt,
                y = v.immediateRender,
                b = v.lazy,
                x = v.onUpdate,
                k = v.runBackwards,
                S = v.yoyoEase,
                C = v.keyframes,
                T = v.autoRevert,
                N = t._dur,
                L = t._startAt,
                A = t._targets,
                P = t.parent,
                E = P && "nested" === P.data ? P.vars.targets : A,
                O = "auto" === t._overwrite && !Ds,
                R = t.timeline;
            if (R && (!C || !m) && (m = "none"), t._ease = sc(m, qs.ease), t._yEase = S ? ac(sc(!0 === S ? m : S, qs.ease)) : 0, S && t._yoyo && !t._repeat && (S = t._yEase, t._yEase = t._ease, t._ease = S), t._from = !R && !!v.runBackwards, !R || C && !v.stagger) {
                if (_ = (d = A[0] ? jl(A[0]).harness : 0) && v[d.prop], r = Ql(v, Pl), L && (L._zTime < 0 && L.progress(1), n < 0 && k && y && !T ? L.render(-1, !0) : L.revert(k && N ? Ll : Nl), L._lazy = 0), w) {
                    if (iu(t._startAt = Cc.set(A, Gl({
                            data: "isStart",
                            overwrite: !1,
                            parent: P,
                            immediateRender: !0,
                            lazy: !L && ll(b),
                            startAt: null,
                            delay: 0,
                            onUpdate: x && function() {
                                return Bu(t, "onUpdate")
                            },
                            stagger: 0
                        }, w))), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Hs || !y && !T) && t._startAt.revert(Ll), y && N && n <= 0 && i <= 0) return void(n && (t._zTime = n))
                } else if (k && N && !L)
                    if (n && (y = !1), o = Gl({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && !L && ll(b),
                            immediateRender: y,
                            stagger: 0,
                            parent: P
                        }, r), _ && (o[d.prop] = _), iu(t._startAt = Cc.set(A, o)), t._startAt._dp = 0, t._startAt._sat = t, n < 0 && (Hs ? t._startAt.revert(Ll) : t._startAt.render(-1, !0)), t._zTime = n, y) {
                        if (!n) return
                    } else e(t._startAt, Gs, Gs);
                for (t._pt = t._ptCache = 0, b = N && ll(b) || b && !N, a = 0; a < A.length; a++) {
                    if (c = (l = A[a])._gsap || Fl(A)[a]._gsap, t._ptLookup[a] = g = {}, Ol[c.id] && El.length && Yl(), h = E === A ? a : E.indexOf(l), d && !1 !== (f = new d).init(l, _ || r, t, h, E) && (t._pt = s = new jc(t._pt, l, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach((function(e) {
                            g[e] = s
                        })), f.priority && (u = 1)), !d || _)
                        for (o in r) Rl[o] && (f = wc(o, r, t, h, l, E)) ? f.priority && (u = 1) : g[o] = s = mc.call(t, l, o, "get", r[o], h, E, 0, v.stringFilter);
                    t._op && t._op[a] && t.kill(l, t._op[a]), O && t._pt && (_c = t, js.killTweensOf(l, g, t.globalTime(n)), p = !t.parent, _c = 0), t._pt && b && (Ol[c.id] = 1)
                }
                u && Fc(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = x, t._initted = (!t._op || t._pt) && !p, C && n <= 0 && R.render(Ks, !0, !0)
        },
        bc = function(e, t, n, i) {
            var r, a, o = t.ease || i || "power1.inOut";
            if (fl(t)) a = n[e] || (n[e] = []), t.forEach((function(e, n) {
                return a.push({
                    t: n / (t.length - 1) * 100,
                    v: e,
                    e: o
                })
            }));
            else
                for (r in t) a = n[r] || (n[r] = []), "ease" === r || a.push({
                    t: parseFloat(e),
                    v: t[r],
                    e: o
                })
        },
        xc = function(e, t, n, i, r) {
            return rl(e) ? e.call(t, n, i, r) : il(e) && ~e.indexOf("random(") ? Hu(e) : e
        },
        kc = Hl + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Sc = {};
    Ul(kc + ",id,stagger,delay,duration,paused,scrollTrigger", (function(e) {
        return Sc[e] = 1
    }));
    var Cc = function(e) {
        function t(t, n, i, r) {
            var a;
            "number" == typeof n && (i.duration = n, n = i, i = null);
            var o, s, l, u, c, d, f, g, h = (a = e.call(this, r ? n : eu(n)) || this).vars,
                _ = h.duration,
                p = h.delay,
                v = h.immediateRender,
                m = h.stagger,
                w = h.overwrite,
                y = h.keyframes,
                b = h.defaults,
                x = h.scrollTrigger,
                k = h.yoyoEase,
                S = n.parent || js,
                C = (fl(t) || dl(t) ? al(t[0]) : "length" in n) ? [t] : Au(t);
            if (a._targets = C.length ? Fl(C) : Sl("GSAP target " + t + " not found. https://gsap.com", !Xs.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, y || m || cl(_) || cl(p)) {
                if (n = a.vars, (o = a.timeline = new hc({
                        data: "nested",
                        defaults: b || {},
                        targets: S && "nested" === S.data ? S.vars.targets : C
                    })).kill(), o.parent = o._dp = Ms(a), o._start = 0, m || cl(_) || cl(p)) {
                    if (u = C.length, f = m && Ou(m), sl(m))
                        for (c in m) ~kc.indexOf(c) && (g || (g = {}), g[c] = m[c]);
                    for (s = 0; s < u; s++)(l = Ql(n, Sc)).stagger = 0, k && (l.yoyoEase = k), g && Zl(l, g), d = C[s], l.duration = +xc(_, Ms(a), s, d, C), l.delay = (+xc(p, Ms(a), s, d, C) || 0) - a._delay, !m && 1 === u && l.delay && (a._delay = p = l.delay, a._start += p, l.delay = 0), o.to(d, l, f ? f(s, d, C) : 0), o._ease = tc.none;
                    o.duration() ? _ = p = 0 : a.timeline = 0
                } else if (y) {
                    eu(Gl(o.vars.defaults, {
                        ease: "none"
                    })), o._ease = sc(y.ease || n.ease || "none");
                    var T, N, L, A = 0;
                    if (fl(y)) y.forEach((function(e) {
                        return o.to(C, e, ">")
                    })), o.duration();
                    else {
                        for (c in l = {}, y) "ease" === c || "easeEach" === c || bc(c, y[c], l, y.easeEach);
                        for (c in l)
                            for (T = l[c].sort((function(e, t) {
                                    return e.t - t.t
                                })), A = 0, s = 0; s < T.length; s++)(L = {
                                ease: (N = T[s]).e,
                                duration: (N.t - (s ? T[s - 1].t : 0)) / 100 * _
                            })[c] = N.v, o.to(C, L, A), A += L.duration;
                        o.duration() < _ && o.to({}, {
                            duration: _ - o.duration()
                        })
                    }
                }
                _ || a.duration(_ = o.duration())
            } else a.timeline = 0;
            return !0 !== w || Ds || (_c = Ms(a), js.killTweensOf(C), _c = 0), gu(S, Ms(a), i), n.reversed && a.reverse(), n.paused && a.paused(!0), (v || !_ && !y && a._start === Wl(S._time) && ll(v) && ou(Ms(a)) && "nested" !== S.data) && (a._tTime = -1e-8, a.render(Math.max(0, -p) || 0)), x && hu(Ms(a), x), a
        }
        Is(t, e);
        var n = t.prototype;
        return n.render = function(e, t, n) {
            var i, r, a, o, s, l, u, c, d, f = this._time,
                g = this._tDur,
                h = this._dur,
                _ = e < 0,
                p = e > g - Gs && !_ ? g : e < Gs ? 0 : e;
            if (h) {
                if (p !== this._tTime || !e || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _ || this._lazy) {
                    if (i = p, c = this.timeline, this._repeat) {
                        if (o = h + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * o + e, t, n);
                        if (i = Wl(p % o), p === g ? (a = this._repeat, i = h) : (a = ~~(s = Wl(p / o))) && a === s ? (i = h, a--) : i > h && (i = h), (l = this._yoyo && 1 & a) && (d = this._yEase, i = h - i), s = lu(this._tTime, o), i === f && !n && this._initted && a === s) return this._tTime = p, this;
                        a !== s && (c && this._yEase && oc(c, l), this.vars.repeatRefresh && !l && !this._lock && i !== o && this._initted && (this._lock = n = 1, this.render(Wl(o * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (_u(this, _ ? e : i, n, t, p)) return this._tTime = 0, this;
                        if (!(f === this._time || n && this.vars.repeatRefresh && a !== s)) return this;
                        if (h !== this._dur) return this.render(e, t, n)
                    }
                    if (this._tTime = p, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (d || this._ease)(i / h), this._from && (this.ratio = u = 1 - u), i && !f && !t && !a && (Bu(this, "onStart"), this._tTime !== p)) return this;
                    for (r = this._pt; r;) r.r(u, r.d), r = r._next;
                    c && c.render(e < 0 ? e : c._dur * c._ease(i / this._dur), t, n) || this._startAt && (this._zTime = e), this._onUpdate && !t && (_ && au(this, e, 0, n), Bu(this, "onUpdate")), this._repeat && a !== s && this.vars.onRepeat && !t && this.parent && Bu(this, "onRepeat"), p !== this._tDur && p || this._tTime !== p || (_ && !this._onUpdate && au(this, e, 0, !0), (e || !h) && (p === this._tDur && this._ts > 0 || !p && this._ts < 0) && iu(this, 1), t || _ && !f || !(p || f || l) || (Bu(this, p === g ? "onComplete" : "onReverseComplete", !0), this._prom && !(p < g && this.timeScale() > 0) && this._prom()))
                }
            } else ! function(e, t, n, i) {
                var r, a, o, s = e.ratio,
                    l = t < 0 || !t && (!e._start && pu(e) && (e._initted || !vu(e)) || (e._ts < 0 || e._dp._ts < 0) && !vu(e)) ? 0 : 1,
                    u = e._rDelay,
                    c = 0;
                if (u && e._repeat && (c = Su(0, e._tDur, t), a = lu(c, u), e._yoyo && 1 & a && (l = 1 - l), a !== lu(e._tTime, u) && (s = 1 - l, e.vars.repeatRefresh && e._initted && e.invalidate())), l !== s || Hs || i || e._zTime === Gs || !t && e._zTime) {
                    if (!e._initted && _u(e, t, i, n, c)) return;
                    for (o = e._zTime, e._zTime = t || (n ? Gs : 0), n || (n = t && !o), e.ratio = l, e._from && (l = 1 - l), e._time = 0, e._tTime = c, r = e._pt; r;) r.r(l, r.d), r = r._next;
                    t < 0 && au(e, t, 0, !0), e._onUpdate && !n && Bu(e, "onUpdate"), c && e._repeat && !n && e.parent && Bu(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === l && (l && iu(e, 1), n || Hs || (Bu(e, l ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
                } else e._zTime || (e._zTime = t)
            }(this, e, t, n);
            return this
        }, n.targets = function() {
            return this._targets
        }, n.invalidate = function(t) {
            return (!t || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), e.prototype.invalidate.call(this, t)
        }, n.resetTo = function(e, t, n, i, r) {
            Ys || Qu.wake(), this._ts || this.play();
            var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || yc(this, a),
                function(e, t, n, i, r, a, o, s) {
                    var l, u, c, d, f = (e._pt && e._ptCache || (e._ptCache = {}))[t];
                    if (!f)
                        for (f = e._ptCache[t] = [], c = e._ptLookup, d = e._targets.length; d--;) {
                            if ((l = c[d][t]) && l.d && l.d._pt)
                                for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                            if (!l) return pc = 1, e.vars[t] = "+=0", yc(e, o), pc = 0, s ? Sl(t + " not eligible for reset") : 1;
                            f.push(l)
                        }
                    for (d = f.length; d--;)(l = (u = f[d])._pt || u).s = !i && 0 !== i || r ? l.s + (i || 0) + a * l.c : i, l.c = n - l.s, u.e && (u.e = zl(n) + Cu(u.e)), u.b && (u.b = l.s + Cu(u.b))
                }(this, e, t, n, i, this._ease(a / this._dur), a, r) ? this.resetTo(e, t, n, i, 1) : (du(this, 0), this.parent || tu(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, n.kill = function(e, t) {
            if (void 0 === t && (t = "all"), !(e || t && "all" !== t)) return this._lazy = this._pt = 0, this.parent ? Uu(this) : this.scrollTrigger && this.scrollTrigger.kill(!!Hs), this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(e, t, _c && !0 !== _c.vars.overwrite)._first || Uu(this), this.parent && n !== this.timeline.totalDuration() && mu(this, this._dur * this.timeline._tDur / n, 0, 1), this
            }
            var i, r, a, o, s, l, u, c = this._targets,
                d = e ? Au(e) : c,
                f = this._ptLookup,
                g = this._pt;
            if ((!t || "all" === t) && function(e, t) {
                    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n];);
                    return n < 0
                }(c, d)) return "all" === t && (this._pt = 0), Uu(this);
            for (i = this._op = this._op || [], "all" !== t && (il(t) && (s = {}, Ul(t, (function(e) {
                    return s[e] = 1
                })), t = s), t = function(e, t) {
                    var n, i, r, a, o = e[0] ? jl(e[0]).harness : 0,
                        s = o && o.aliases;
                    if (!s) return t;
                    for (i in n = Zl({}, t), s)
                        if (i in n)
                            for (r = (a = s[i].split(",")).length; r--;) n[a[r]] = n[i];
                    return n
                }(c, t)), u = c.length; u--;)
                if (~d.indexOf(c[u]))
                    for (s in r = f[u], "all" === t ? (i[u] = t, o = r, a = {}) : (a = i[u] = i[u] || {}, o = t), o)(l = r && r[s]) && ("kill" in l.d && !0 !== l.d.kill(s) || nu(this, l, "_pt"), delete r[s]), "all" !== a && (a[s] = 1);
            return this._initted && !this._pt && g && Uu(this), this
        }, t.to = function(e, n) {
            return new t(e, n, arguments[2])
        }, t.from = function(e, t) {
            return xu(1, arguments)
        }, t.delayedCall = function(e, n, i, r) {
            return new t(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: e,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: i,
                onReverseCompleteParams: i,
                callbackScope: r
            })
        }, t.fromTo = function(e, t, n) {
            return xu(2, arguments)
        }, t.set = function(e, n) {
            return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(e, n)
        }, t.killTweensOf = function(e, t, n) {
            return js.killTweensOf(e, t, n)
        }, t
    }(gc);
    Gl(Cc.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), Ul("staggerTo,staggerFrom,staggerFromTo", (function(e) {
        Cc[e] = function() {
            var t = new hc,
                n = Tu.call(arguments, 0);
            return n.splice("staggerFromTo" === e ? 5 : 4, 0, 0), t[e].apply(t, n)
        }
    }));
    var Tc = function(e, t, n) {
            return e[t] = n
        },
        Nc = function(e, t, n) {
            return e[t](n)
        },
        Lc = function(e, t, n, i) {
            return e[t](i.fp, n)
        },
        Ac = function(e, t, n) {
            return e.setAttribute(t, n)
        },
        Pc = function(e, t) {
            return rl(e[t]) ? Nc : ol(e[t]) && e.setAttribute ? Ac : Tc
        },
        Ec = function(e, t) {
            return t.set(t.t, t.p, Math.round(1e6 * (t.s + t.c * e)) / 1e6, t)
        },
        Oc = function(e, t) {
            return t.set(t.t, t.p, !!(t.s + t.c * e), t)
        },
        Rc = function(e, t) {
            var n = t._pt,
                i = "";
            if (!e && t.b) i = t.b;
            else if (1 === e && t.e) i = t.e;
            else {
                for (; n;) i = n.p + (n.m ? n.m(n.s + n.c * e) : Math.round(1e4 * (n.s + n.c * e)) / 1e4) + i, n = n._next;
                i += t.c
            }
            t.set(t.t, t.p, i, t)
        },
        Mc = function(e, t) {
            for (var n = t._pt; n;) n.r(e, n.d), n = n._next
        },
        Ic = function(e, t, n, i) {
            for (var r, a = this._pt; a;) r = a._next, a.p === i && a.modifier(e, t, n), a = r
        },
        Dc = function(e) {
            for (var t, n, i = this._pt; i;) n = i._next, i.p === e && !i.op || i.op === e ? nu(this, i, "_pt") : i.dep || (t = 1), i = n;
            return !t
        },
        Hc = function(e, t, n, i) {
            i.mSet(e, t, i.m.call(i.tween, n, i.mt), i)
        },
        Fc = function(e) {
            for (var t, n, i, r, a = e._pt; a;) {
                for (t = a._next, n = i; n && n.pr > a.pr;) n = n._next;
                (a._prev = n ? n._prev : r) ? a._prev._next = a: i = a, (a._next = n) ? n._prev = a : r = a, a = t
            }
            e._pt = i
        },
        jc = function() {
            function e(e, t, n, i, r, a, o, s, l) {
                this.t = t, this.s = i, this.c = r, this.p = n, this.r = a || Ec, this.d = o || this, this.set = s || Tc, this.pr = l || 0, this._next = e, e && (e._prev = this)
            }
            return e.prototype.modifier = function(e, t, n) {
                this.mSet = this.mSet || this.set, this.set = Hc, this.m = e, this.mt = n, this.tween = t
            }, e
        }();
    Ul(Hl + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(e) {
        return Pl[e] = 1
    })), yl.TweenMax = yl.TweenLite = Cc, yl.TimelineLite = yl.TimelineMax = hc, js = new hc({
        sortChildren: !1,
        defaults: qs,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Xs.stringFilter = Ju;
    var Bc = [],
        Uc = {},
        zc = [],
        Wc = 0,
        Vc = 0,
        $c = function(e) {
            return (Uc[e] || zc).map((function(e) {
                return e()
            }))
        },
        Yc = function() {
            var e = Date.now(),
                t = [];
            e - Wc > 2 && ($c("matchMediaInit"), Bc.forEach((function(e) {
                var n, i, r, a, o = e.queries,
                    s = e.conditions;
                for (i in o)(n = Bs.matchMedia(o[i]).matches) && (r = 1), n !== s[i] && (s[i] = n, a = 1);
                a && (e.revert(), r && t.push(e))
            })), $c("matchMediaRevert"), t.forEach((function(e) {
                return e.onMatch(e, (function(t) {
                    return e.add(null, t)
                }))
            })), Wc = e, $c("matchMedia"))
        },
        Xc = function() {
            function e(e, t) {
                this.selector = t && Pu(t), this.data = [], this._r = [], this.isReverted = !1, this.id = Vc++, e && this.add(e)
            }
            var t = e.prototype;
            return t.add = function(e, t, n) {
                rl(e) && (n = t, t = e, e = rl);
                var i = this,
                    r = function() {
                        var e, r = Fs,
                            a = i.selector;
                        return r && r !== i && r.data.push(i), n && (i.selector = Pu(n)), Fs = i, e = t.apply(i, arguments), rl(e) && i._r.push(e), Fs = r, i.selector = a, i.isReverted = !1, e
                    };
                return i.last = r, e === rl ? r(i, (function(e) {
                    return i.add(null, e)
                })) : e ? i[e] = r : r
            }, t.ignore = function(e) {
                var t = Fs;
                Fs = null, e(this), Fs = t
            }, t.getTweens = function() {
                var t = [];
                return this.data.forEach((function(n) {
                    return n instanceof e ? t.push.apply(t, n.getTweens()) : n instanceof Cc && !(n.parent && "nested" === n.parent.data) && t.push(n)
                })), t
            }, t.clear = function() {
                this._r.length = this.data.length = 0
            }, t.kill = function(e, t) {
                var n = this;
                if (e ? function() {
                        for (var t, i = n.getTweens(), r = n.data.length; r--;) "isFlip" === (t = n.data[r]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach((function(e) {
                            return i.splice(i.indexOf(e), 1)
                        })));
                        for (i.map((function(e) {
                                return {
                                    g: e._dur || e._delay || e._sat && !e._sat.vars.immediateRender ? e.globalTime(0) : -1 / 0,
                                    t: e
                                }
                            })).sort((function(e, t) {
                                return t.g - e.g || -1 / 0
                            })).forEach((function(t) {
                                return t.t.revert(e)
                            })), r = n.data.length; r--;)(t = n.data[r]) instanceof hc ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : !(t instanceof Cc) && t.revert && t.revert(e);
                        n._r.forEach((function(t) {
                            return t(e, n)
                        })), n.isReverted = !0
                    }() : this.data.forEach((function(e) {
                        return e.kill && e.kill()
                    })), this.clear(), t)
                    for (var i = Bc.length; i--;) Bc[i].id === this.id && Bc.splice(i, 1)
            }, t.revert = function(e) {
                this.kill(e || {})
            }, e
        }(),
        qc = function() {
            function e(e) {
                this.contexts = [], this.scope = e, Fs && Fs.data.push(this)
            }
            var t = e.prototype;
            return t.add = function(e, t, n) {
                sl(e) || (e = {
                    matches: e
                });
                var i, r, a, o = new Xc(0, n || this.scope),
                    s = o.conditions = {};
                for (r in Fs && !o.selector && (o.selector = Fs.selector), this.contexts.push(o), t = o.add("onMatch", t), o.queries = e, e) "all" === r ? a = 1 : (i = Bs.matchMedia(e[r])) && (Bc.indexOf(o) < 0 && Bc.push(o), (s[r] = i.matches) && (a = 1), i.addListener ? i.addListener(Yc) : i.addEventListener("change", Yc));
                return a && t(o, (function(e) {
                    return o.add(null, e)
                })), this
            }, t.revert = function(e) {
                this.kill(e || {})
            }, t.kill = function(e) {
                this.contexts.forEach((function(t) {
                    return t.kill(e, !0)
                }))
            }, e
        }(),
        Kc = {
            registerPlugin: function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                t.forEach((function(e) {
                    return Wu(e)
                }))
            },
            timeline: function(e) {
                return new hc(e)
            },
            getTweensOf: function(e, t) {
                return js.getTweensOf(e, t)
            },
            getProperty: function(e, t, n, i) {
                il(e) && (e = Au(e)[0]);
                var r = jl(e || {}).get,
                    a = n ? Kl : ql;
                return "native" === n && (n = ""), e ? t ? a((Rl[t] && Rl[t].get || r)(e, t, n, i)) : function(t, n, i) {
                    return a((Rl[t] && Rl[t].get || r)(e, t, n, i))
                } : e
            },
            quickSetter: function(e, t, n) {
                if ((e = Au(e)).length > 1) {
                    var i = e.map((function(e) {
                            return Jc.quickSetter(e, t, n)
                        })),
                        r = i.length;
                    return function(e) {
                        for (var t = r; t--;) i[t](e)
                    }
                }
                e = e[0] || {};
                var a = Rl[t],
                    o = jl(e),
                    s = o.harness && (o.harness.aliases || {})[t] || t,
                    l = a ? function(t) {
                        var i = new a;
                        $s._pt = 0, i.init(e, n ? t + n : t, $s, 0, [e]), i.render(1, i), $s._pt && Mc(1, $s)
                    } : o.set(e, s);
                return a ? l : function(t) {
                    return l(e, s, n ? t + n : t, o, 1)
                }
            },
            quickTo: function(e, t, n) {
                var i, r = Jc.to(e, Gl(((i = {})[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), n || {})),
                    a = function(e, n, i) {
                        return r.resetTo(t, e, n, i)
                    };
                return a.tween = r, a
            },
            isTweening: function(e) {
                return js.getTweensOf(e, !0).length > 0
            },
            defaults: function(e) {
                return e && e.ease && (e.ease = sc(e.ease, qs.ease)), Jl(qs, e || {})
            },
            config: function(e) {
                return Jl(Xs, e || {})
            },
            registerEffect: function(e) {
                var t = e.name,
                    n = e.effect,
                    i = e.plugins,
                    r = e.defaults,
                    a = e.extendTimeline;
                (i || "").split(",").forEach((function(e) {
                    return e && !Rl[e] && !yl[e] && Sl(t + " effect requires " + e + " plugin.")
                })), Ml[t] = function(e, t, i) {
                    return n(Au(e), Gl(t || {}, r), i)
                }, a && (hc.prototype[t] = function(e, n, i) {
                    return this.add(Ml[t](e, sl(n) ? n : (i = n) && {}, this), i)
                })
            },
            registerEase: function(e, t) {
                tc[e] = sc(t)
            },
            parseEase: function(e, t) {
                return arguments.length ? sc(e, t) : tc
            },
            getById: function(e) {
                return js.getById(e)
            },
            exportRoot: function(e, t) {
                void 0 === e && (e = {});
                var n, i, r = new hc(e);
                for (r.smoothChildTiming = ll(e.smoothChildTiming), js.remove(r), r._dp = 0, r._time = r._tTime = js._time, n = js._first; n;) i = n._next, !t && !n._dur && n instanceof Cc && n.vars.onComplete === n._targets[0] || gu(r, n, n._start - n._delay), n = i;
                return gu(js, r, 0), r
            },
            context: function(e, t) {
                return e ? new Xc(e, t) : Fs
            },
            matchMedia: function(e) {
                return new qc(e)
            },
            matchMediaRefresh: function() {
                return Bc.forEach((function(e) {
                    var t, n, i = e.conditions;
                    for (n in i) i[n] && (i[n] = !1, t = 1);
                    t && e.revert()
                })) || Yc()
            },
            addEventListener: function(e, t) {
                var n = Uc[e] || (Uc[e] = []);
                ~n.indexOf(t) || n.push(t)
            },
            removeEventListener: function(e, t) {
                var n = Uc[e],
                    i = n && n.indexOf(t);
                i >= 0 && n.splice(i, 1)
            },
            utils: {
                wrap: function e(t, n, i) {
                    var r = n - t;
                    return fl(t) ? Du(t, e(0, t.length), n) : ku(i, (function(e) {
                        return (r + (e - t) % r) % r + t
                    }))
                },
                wrapYoyo: function e(t, n, i) {
                    var r = n - t,
                        a = 2 * r;
                    return fl(t) ? Du(t, e(0, t.length - 1), n) : ku(i, (function(e) {
                        return t + ((e = (a + (e - t) % a) % a || 0) > r ? a - e : e)
                    }))
                },
                distribute: Ou,
                random: Iu,
                snap: Mu,
                normalize: function(e, t, n) {
                    return Fu(e, t, 0, 1, n)
                },
                getUnit: Cu,
                clamp: function(e, t, n) {
                    return ku(n, (function(n) {
                        return Su(e, t, n)
                    }))
                },
                splitColor: Xu,
                toArray: Au,
                selector: Pu,
                mapRange: Fu,
                pipe: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return function(e) {
                        return t.reduce((function(e, t) {
                            return t(e)
                        }), e)
                    }
                },
                unitize: function(e, t) {
                    return function(n) {
                        return e(parseFloat(n)) + (t || Cu(n))
                    }
                },
                interpolate: function e(t, n, i, r) {
                    var a = isNaN(t + n) ? 0 : function(e) {
                        return (1 - e) * t + e * n
                    };
                    if (!a) {
                        var o, s, l, u, c, d = il(t),
                            f = {};
                        if (!0 === i && (r = 1) && (i = null), d) t = {
                            p: t
                        }, n = {
                            p: n
                        };
                        else if (fl(t) && !fl(n)) {
                            for (l = [], u = t.length, c = u - 2, s = 1; s < u; s++) l.push(e(t[s - 1], t[s]));
                            u--, a = function(e) {
                                e *= u;
                                var t = Math.min(c, ~~e);
                                return l[t](e - t)
                            }, i = n
                        } else r || (t = Zl(fl(t) ? [] : {}, t));
                        if (!l) {
                            for (o in n) mc.call(f, t, o, "get", n[o]);
                            a = function(e) {
                                return Mc(e, f) || (d ? t.p : t)
                            }
                        }
                    }
                    return ku(i, a)
                },
                shuffle: Eu
            },
            install: xl,
            effects: Ml,
            ticker: Qu,
            updateRoot: hc.updateRoot,
            plugins: Rl,
            globalTimeline: js,
            core: {
                PropTween: jc,
                globals: Cl,
                Tween: Cc,
                Timeline: hc,
                Animation: gc,
                getCache: jl,
                _removeLinkedListItem: nu,
                reverting: function() {
                    return Hs
                },
                context: function(e) {
                    return e && Fs && (Fs.data.push(e), e._ctx = Fs), Fs
                },
                suppressOverwrites: function(e) {
                    return Ds = e
                }
            }
        };
    Ul("to,from,fromTo,delayedCall,set,killTweensOf", (function(e) {
        return Kc[e] = Cc[e]
    })), Qu.add(hc.updateRoot), $s = Kc.to({}, {
        duration: 0
    });
    var Gc = function(e, t) {
            for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;) n = n._next;
            return n
        },
        Zc = function(e, t) {
            return {
                name: e,
                rawVars: 1,
                init: function(e, n, i) {
                    i._onInit = function(e) {
                        var i, r;
                        if (il(n) && (i = {}, Ul(n, (function(e) {
                                return i[e] = 1
                            })), n = i), t) {
                            for (r in i = {}, n) i[r] = t(n[r]);
                            n = i
                        }! function(e, t) {
                            var n, i, r, a = e._targets;
                            for (n in t)
                                for (i = a.length; i--;)(r = e._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = Gc(r, n)), r && r.modifier && r.modifier(t[n], e, a[i], n))
                        }(e, n)
                    }
                }
            }
        },
        Jc = Kc.registerPlugin({
            name: "attr",
            init: function(e, t, n, i, r) {
                var a, o, s;
                for (a in this.tween = n, t) s = e.getAttribute(a) || "", (o = this.add(e, "setAttribute", (s || 0) + "", t[a], i, r, 0, 0, a)).op = a, o.b = s, this._props.push(a)
            },
            render: function(e, t) {
                for (var n = t._pt; n;) Hs ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), n = n._next
            }
        }, {
            name: "endArray",
            init: function(e, t) {
                for (var n = t.length; n--;) this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1)
            }
        }, Zc("roundProps", Ru), Zc("modifiers"), Zc("snap", Mu)) || Kc;
    Cc.version = hc.version = Jc.version = "3.12.7", Ws = 1, ul() && ec(), tc.Power0, tc.Power1, tc.Power2, tc.Power3, tc.Power4, tc.Linear, tc.Quad, tc.Cubic, tc.Quart, tc.Quint, tc.Strong, tc.Elastic, tc.Back, tc.SteppedEase, tc.Bounce, tc.Sine, tc.Expo, tc.Circ;
    /*!
     * CSSPlugin 3.12.7
     * https://gsap.com
     *
     * Copyright 2008-2025, GreenSock. All rights reserved.
     * Subject to the terms at https://gsap.com/standard-license or for
     * Club GSAP members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Qc, ed, td, nd, id, rd, ad, od, sd = {},
        ld = 180 / Math.PI,
        ud = Math.PI / 180,
        cd = Math.atan2,
        dd = /([A-Z])/g,
        fd = /(left|right|width|margin|padding|x)/i,
        gd = /[\s,\(]\S/,
        hd = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        _d = function(e, t) {
            return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        pd = function(e, t) {
            return t.set(t.t, t.p, 1 === e ? t.e : Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u, t)
        },
        vd = function(e, t) {
            return t.set(t.t, t.p, e ? Math.round(1e4 * (t.s + t.c * e)) / 1e4 + t.u : t.b, t)
        },
        md = function(e, t) {
            var n = t.s + t.c * e;
            t.set(t.t, t.p, ~~(n + (n < 0 ? -.5 : .5)) + t.u, t)
        },
        wd = function(e, t) {
            return t.set(t.t, t.p, e ? t.e : t.b, t)
        },
        yd = function(e, t) {
            return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t)
        },
        bd = function(e, t, n) {
            return e.style[t] = n
        },
        xd = function(e, t, n) {
            return e.style.setProperty(t, n)
        },
        kd = function(e, t, n) {
            return e._gsap[t] = n
        },
        Sd = function(e, t, n) {
            return e._gsap.scaleX = e._gsap.scaleY = n
        },
        Cd = function(e, t, n, i, r) {
            var a = e._gsap;
            a.scaleX = a.scaleY = n, a.renderTransform(r, a)
        },
        Td = function(e, t, n, i, r) {
            var a = e._gsap;
            a[t] = n, a.renderTransform(r, a)
        },
        Nd = "transform",
        Ld = Nd + "Origin",
        Ad = function e(t, n) {
            var i = this,
                r = this.target,
                a = r.style,
                o = r._gsap;
            if (t in sd && a) {
                if (this.tfm = this.tfm || {}, "transform" === t) return hd.transform.split(",").forEach((function(t) {
                    return e.call(i, t, n)
                }));
                if (~(t = hd[t] || t).indexOf(",") ? t.split(",").forEach((function(e) {
                        return i.tfm[e] = Xd(r, e)
                    })) : this.tfm[t] = o.x ? o[t] : Xd(r, t), t === Ld && (this.tfm.zOrigin = o.zOrigin), this.props.indexOf(Nd) >= 0) return;
                o.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(Ld, n, "")), t = Nd
            }(a || n) && this.props.push(t, n, a[t])
        },
        Pd = function(e) {
            e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
        },
        Ed = function() {
            var e, t, n = this.props,
                i = this.target,
                r = i.style,
                a = i._gsap;
            for (e = 0; e < n.length; e += 3) n[e + 1] ? 2 === n[e + 1] ? i[n[e]](n[e + 2]) : i[n[e]] = n[e + 2] : n[e + 2] ? r[n[e]] = n[e + 2] : r.removeProperty("--" === n[e].substr(0, 2) ? n[e] : n[e].replace(dd, "-$1").toLowerCase());
            if (this.tfm) {
                for (t in this.tfm) a[t] = this.tfm[t];
                a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (e = ad()) && e.isStart || r[Nd] || (Pd(r), a.zOrigin && r[Ld] && (r[Ld] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1)
            }
        },
        Od = function(e, t) {
            var n = {
                target: e,
                props: [],
                revert: Ed,
                save: Ad
            };
            return e._gsap || Jc.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach((function(e) {
                return n.save(e)
            })), n
        },
        Rd = function(e, t) {
            var n = ed.createElementNS ? ed.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : ed.createElement(e);
            return n && n.style ? n : ed.createElement(e)
        },
        Md = function e(t, n, i) {
            var r = getComputedStyle(t);
            return r[n] || r.getPropertyValue(n.replace(dd, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && e(t, Dd(n) || n, 1) || ""
        },
        Id = "O,Moz,ms,Ms,Webkit".split(","),
        Dd = function(e, t, n) {
            var i = (t || id).style,
                r = 5;
            if (e in i && !n) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1); r-- && !(Id[r] + e in i););
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Id[r] : "") + e
        },
        Hd = function() {
            "undefined" != typeof window && window.document && (Qc = window, ed = Qc.document, td = ed.documentElement, id = Rd("div") || {
                style: {}
            }, Rd("div"), Nd = Dd(Nd), Ld = Nd + "Origin", id.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", od = !!Dd("perspective"), ad = Jc.core.reverting, nd = 1)
        },
        Fd = function(e) {
            var t, n = e.ownerSVGElement,
                i = Rd("svg", n && n.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = e.cloneNode(!0);
            r.style.display = "block", i.appendChild(r), td.appendChild(i);
            try {
                t = r.getBBox()
            } catch (e) {}
            return i.removeChild(r), td.removeChild(i), t
        },
        jd = function(e, t) {
            for (var n = t.length; n--;)
                if (e.hasAttribute(t[n])) return e.getAttribute(t[n])
        },
        Bd = function(e) {
            var t, n;
            try {
                t = e.getBBox()
            } catch (i) {
                t = Fd(e), n = 1
            }
            return t && (t.width || t.height) || n || (t = Fd(e)), !t || t.width || t.x || t.y ? t : {
                x: +jd(e, ["x", "cx", "x1"]) || 0,
                y: +jd(e, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        Ud = function(e) {
            return !(!e.getCTM || e.parentNode && !e.ownerSVGElement || !Bd(e))
        },
        zd = function(e, t) {
            if (t) {
                var n, i = e.style;
                t in sd && t !== Ld && (t = Nd), i.removeProperty ? ("ms" !== (n = t.substr(0, 2)) && "webkit" !== t.substr(0, 6) || (t = "-" + t), i.removeProperty("--" === n ? t : t.replace(dd, "-$1").toLowerCase())) : i.removeAttribute(t)
            }
        },
        Wd = function(e, t, n, i, r, a) {
            var o = new jc(e._pt, t, n, 0, 1, a ? yd : wd);
            return e._pt = o, o.b = i, o.e = r, e._props.push(n), o
        },
        Vd = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        $d = {
            grid: 1,
            flex: 1
        },
        Yd = function e(t, n, i, r) {
            var a, o, s, l, u = parseFloat(i) || 0,
                c = (i + "").trim().substr((u + "").length) || "px",
                d = id.style,
                f = fd.test(n),
                g = "svg" === t.tagName.toLowerCase(),
                h = (g ? "client" : "offset") + (f ? "Width" : "Height"),
                _ = 100,
                p = "px" === r,
                v = "%" === r;
            if (r === c || !u || Vd[r] || Vd[c]) return u;
            if ("px" !== c && !p && (u = e(t, n, i, "px")), l = t.getCTM && Ud(t), (v || "%" === c) && (sd[n] || ~n.indexOf("adius"))) return a = l ? t.getBBox()[f ? "width" : "height"] : t[h], zl(v ? u / a * _ : u / 100 * a);
            if (d[f ? "width" : "height"] = _ + (p ? c : r), o = "rem" !== r && ~n.indexOf("adius") || "em" === r && t.appendChild && !g ? t : t.parentNode, l && (o = (t.ownerSVGElement || {}).parentNode), o && o !== ed && o.appendChild || (o = ed.body), (s = o._gsap) && v && s.width && f && s.time === Qu.time && !s.uncache) return zl(u / s.width * _);
            if (!v || "height" !== n && "width" !== n)(v || "%" === c) && !$d[Md(o, "display")] && (d.position = Md(t, "position")), o === t && (d.position = "static"), o.appendChild(id), a = id[h], o.removeChild(id), d.position = "absolute";
            else {
                var m = t.style[n];
                t.style[n] = _ + r, a = t[h], m ? t.style[n] = m : zd(t, n)
            }
            return f && v && ((s = jl(o)).time = Qu.time, s.width = o[h]), zl(p ? a * u / _ : a && u ? _ / a * u : 0)
        },
        Xd = function(e, t, n, i) {
            var r;
            return nd || Hd(), t in hd && "transform" !== t && ~(t = hd[t]).indexOf(",") && (t = t.split(",")[0]), sd[t] && "transform" !== t ? (r = of (e, i), r = "transformOrigin" !== t ? r[t] : r.svg ? r.origin : sf(Md(e, Ld)) + " " + r.zOrigin + "px") : (!(r = e.style[t]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = Jd[t] && Jd[t](e, t, n) || Md(e, t) || Bl(e, t) || ("opacity" === t ? 1 : 0)), n && !~(r + "").trim().indexOf(" ") ? Yd(e, t, r, n) + n : r
        },
        qd = function(e, t, n, i) {
            if (!n || "none" === n) {
                var r = Dd(t, e, 1),
                    a = r && Md(e, r, 1);
                a && a !== n ? (t = r, n = a) : "borderColor" === t && (n = Md(e, "borderTopColor"))
            }
            var o, s, l, u, c, d, f, g, h, _, p, v = new jc(this._pt, e.style, t, 0, 1, Rc),
                m = 0,
                w = 0;
            if (v.b = n, v.e = i, n += "", "auto" === (i += "") && (d = e.style[t], e.style[t] = i, i = Md(e, t) || i, d ? e.style[t] = d : zd(e, t)), Ju(o = [n, i]), i = o[1], l = (n = o[0]).match(_l) || [], (i.match(_l) || []).length) {
                for (; s = _l.exec(i);) f = s[0], h = i.substring(m, s.index), c ? c = (c + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (c = 1), f !== (d = l[w++] || "") && (u = parseFloat(d) || 0, p = d.substr((u + "").length), "=" === f.charAt(1) && (f = Vl(u, f) + p), g = parseFloat(f), _ = f.substr((g + "").length), m = _l.lastIndex - _.length, _ || (_ = _ || Xs.units[t] || p, m === i.length && (i += _, v.e += _)), p !== _ && (u = Yd(e, t, d, _) || 0), v._pt = {
                    _next: v._pt,
                    p: h || 1 === w ? h : ",",
                    s: u,
                    c: g - u,
                    m: c && c < 4 || "zIndex" === t ? Math.round : 0
                });
                v.c = m < i.length ? i.substring(m, i.length) : ""
            } else v.r = "display" === t && "none" === i ? yd : wd;
            return vl.test(i) && (v.e = 0), this._pt = v, v
        },
        Kd = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        Gd = function(e) {
            var t = e.split(" "),
                n = t[0],
                i = t[1] || "50%";
            return "top" !== n && "bottom" !== n && "left" !== i && "right" !== i || (e = n, n = i, i = e), t[0] = Kd[n] || n, t[1] = Kd[i] || i, t.join(" ")
        },
        Zd = function(e, t) {
            if (t.tween && t.tween._time === t.tween._dur) {
                var n, i, r, a = t.t,
                    o = a.style,
                    s = t.u,
                    l = a._gsap;
                if ("all" === s || !0 === s) o.cssText = "", i = 1;
                else
                    for (r = (s = s.split(",")).length; --r > -1;) n = s[r], sd[n] && (i = 1, n = "transformOrigin" === n ? Ld : Nd), zd(a, n);
                i && (zd(a, Nd), l && (l.svg && a.removeAttribute("transform"), o.scale = o.rotate = o.translate = "none", of (a, 1), l.uncache = 1, Pd(o)))
            }
        },
        Jd = {
            clearProps: function(e, t, n, i, r) {
                if ("isFromStart" !== r.data) {
                    var a = e._pt = new jc(e._pt, t, n, 0, 0, Zd);
                    return a.u = i, a.pr = -10, a.tween = r, e._props.push(n), 1
                }
            }
        },
        Qd = [1, 0, 0, 1, 0, 0],
        ef = {},
        tf = function(e) {
            return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e
        },
        nf = function(e) {
            var t = Md(e, Nd);
            return tf(t) ? Qd : t.substr(7).match(hl).map(zl)
        },
        rf = function(e, t) {
            var n, i, r, a, o = e._gsap || jl(e),
                s = e.style,
                l = nf(e);
            return o.svg && e.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = e.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Qd : l : (l !== Qd || e.offsetParent || e === td || o.svg || (r = s.display, s.display = "block", (n = e.parentNode) && (e.offsetParent || e.getBoundingClientRect().width) || (a = 1, i = e.nextElementSibling, td.appendChild(e)), l = nf(e), r ? s.display = r : zd(e, "display"), a && (i ? n.insertBefore(e, i) : n ? n.appendChild(e) : td.removeChild(e))), t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        af = function(e, t, n, i, r, a) {
            var o, s, l, u = e._gsap,
                c = r || rf(e, !0),
                d = u.xOrigin || 0,
                f = u.yOrigin || 0,
                g = u.xOffset || 0,
                h = u.yOffset || 0,
                _ = c[0],
                p = c[1],
                v = c[2],
                m = c[3],
                w = c[4],
                y = c[5],
                b = t.split(" "),
                x = parseFloat(b[0]) || 0,
                k = parseFloat(b[1]) || 0;
            n ? c !== Qd && (s = _ * m - p * v) && (l = x * (-p / s) + k * (_ / s) - (_ * y - p * w) / s, x = x * (m / s) + k * (-v / s) + (v * y - m * w) / s, k = l) : (x = (o = Bd(e)).x + (~b[0].indexOf("%") ? x / 100 * o.width : x), k = o.y + (~(b[1] || b[0]).indexOf("%") ? k / 100 * o.height : k)), i || !1 !== i && u.smooth ? (w = x - d, y = k - f, u.xOffset = g + (w * _ + y * v) - w, u.yOffset = h + (w * p + y * m) - y) : u.xOffset = u.yOffset = 0, u.xOrigin = x, u.yOrigin = k, u.smooth = !!i, u.origin = t, u.originIsAbsolute = !!n, e.style[Ld] = "0px 0px", a && (Wd(a, u, "xOrigin", d, x), Wd(a, u, "yOrigin", f, k), Wd(a, u, "xOffset", g, u.xOffset), Wd(a, u, "yOffset", h, u.yOffset)), e.setAttribute("data-svg-origin", x + " " + k)
        },
        of = function(e, t) {
            var n = e._gsap || new fc(e);
            if ("x" in n && !t && !n.uncache) return n;
            var i, r, a, o, s, l, u, c, d, f, g, h, _, p, v, m, w, y, b, x, k, S, C, T, N, L, A, P, E, O, R, M, I = e.style,
                D = n.scaleX < 0,
                H = "px",
                F = "deg",
                j = getComputedStyle(e),
                B = Md(e, Ld) || "0";
            return i = r = a = l = u = c = d = f = g = 0, o = s = 1, n.svg = !(!e.getCTM || !Ud(e)), j.translate && ("none" === j.translate && "none" === j.scale && "none" === j.rotate || (I[Nd] = ("none" !== j.translate ? "translate3d(" + (j.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== j.rotate ? "rotate(" + j.rotate + ") " : "") + ("none" !== j.scale ? "scale(" + j.scale.split(" ").join(",") + ") " : "") + ("none" !== j[Nd] ? j[Nd] : "")), I.scale = I.rotate = I.translate = "none"), p = rf(e, n.svg), n.svg && (n.uncache ? (N = e.getBBox(), B = n.xOrigin - N.x + "px " + (n.yOrigin - N.y) + "px", T = "") : T = !t && e.getAttribute("data-svg-origin"), af(e, T || B, !!T || n.originIsAbsolute, !1 !== n.smooth, p)), h = n.xOrigin || 0, _ = n.yOrigin || 0, p !== Qd && (y = p[0], b = p[1], x = p[2], k = p[3], i = S = p[4], r = C = p[5], 6 === p.length ? (o = Math.sqrt(y * y + b * b), s = Math.sqrt(k * k + x * x), l = y || b ? cd(b, y) * ld : 0, (d = x || k ? cd(x, k) * ld + l : 0) && (s *= Math.abs(Math.cos(d * ud))), n.svg && (i -= h - (h * y + _ * x), r -= _ - (h * b + _ * k))) : (M = p[6], O = p[7], A = p[8], P = p[9], E = p[10], R = p[11], i = p[12], r = p[13], a = p[14], u = (v = cd(M, E)) * ld, v && (T = S * (m = Math.cos(-v)) + A * (w = Math.sin(-v)), N = C * m + P * w, L = M * m + E * w, A = S * -w + A * m, P = C * -w + P * m, E = M * -w + E * m, R = O * -w + R * m, S = T, C = N, M = L), c = (v = cd(-x, E)) * ld, v && (m = Math.cos(-v), R = k * (w = Math.sin(-v)) + R * m, y = T = y * m - A * w, b = N = b * m - P * w, x = L = x * m - E * w), l = (v = cd(b, y)) * ld, v && (T = y * (m = Math.cos(v)) + b * (w = Math.sin(v)), N = S * m + C * w, b = b * m - y * w, C = C * m - S * w, y = T, S = N), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, c = 180 - c), o = zl(Math.sqrt(y * y + b * b + x * x)), s = zl(Math.sqrt(C * C + M * M)), v = cd(S, C), d = Math.abs(v) > 2e-4 ? v * ld : 0, g = R ? 1 / (R < 0 ? -R : R) : 0), n.svg && (T = e.getAttribute("transform"), n.forceCSS = e.setAttribute("transform", "") || !tf(Md(e, Nd)), T && e.setAttribute("transform", T))), Math.abs(d) > 90 && Math.abs(d) < 270 && (D ? (o *= -1, d += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (s *= -1, d += d <= 0 ? 180 : -180)), t = t || n.uncache, n.x = i - ((n.xPercent = i && (!t && n.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetWidth * n.xPercent / 100 : 0) + H, n.y = r - ((n.yPercent = r && (!t && n.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * n.yPercent / 100 : 0) + H, n.z = a + H, n.scaleX = zl(o), n.scaleY = zl(s), n.rotation = zl(l) + F, n.rotationX = zl(u) + F, n.rotationY = zl(c) + F, n.skewX = d + F, n.skewY = f + F, n.transformPerspective = g + H, (n.zOrigin = parseFloat(B.split(" ")[2]) || !t && n.zOrigin || 0) && (I[Ld] = sf(B)), n.xOffset = n.yOffset = 0, n.force3D = Xs.force3D, n.renderTransform = n.svg ? hf : od ? gf : uf, n.uncache = 0, n
        },
        sf = function(e) {
            return (e = e.split(" "))[0] + " " + e[1]
        },
        lf = function(e, t, n) {
            var i = Cu(t);
            return zl(parseFloat(t) + parseFloat(Yd(e, "x", n + "px", i))) + i
        },
        uf = function(e, t) {
            t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, gf(e, t)
        },
        cf = "0deg",
        df = "0px",
        ff = ") ",
        gf = function(e, t) {
            var n = t || this,
                i = n.xPercent,
                r = n.yPercent,
                a = n.x,
                o = n.y,
                s = n.z,
                l = n.rotation,
                u = n.rotationY,
                c = n.rotationX,
                d = n.skewX,
                f = n.skewY,
                g = n.scaleX,
                h = n.scaleY,
                _ = n.transformPerspective,
                p = n.force3D,
                v = n.target,
                m = n.zOrigin,
                w = "",
                y = "auto" === p && e && 1 !== e || !0 === p;
            if (m && (c !== cf || u !== cf)) {
                var b, x = parseFloat(u) * ud,
                    k = Math.sin(x),
                    S = Math.cos(x);
                x = parseFloat(c) * ud, b = Math.cos(x), a = lf(v, a, k * b * -m), o = lf(v, o, -Math.sin(x) * -m), s = lf(v, s, S * b * -m + m)
            }
            _ !== df && (w += "perspective(" + _ + ff), (i || r) && (w += "translate(" + i + "%, " + r + "%) "), (y || a !== df || o !== df || s !== df) && (w += s !== df || y ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + ff), l !== cf && (w += "rotate(" + l + ff), u !== cf && (w += "rotateY(" + u + ff), c !== cf && (w += "rotateX(" + c + ff), d === cf && f === cf || (w += "skew(" + d + ", " + f + ff), 1 === g && 1 === h || (w += "scale(" + g + ", " + h + ff), v.style[Nd] = w || "translate(0, 0)"
        },
        hf = function(e, t) {
            var n, i, r, a, o, s = t || this,
                l = s.xPercent,
                u = s.yPercent,
                c = s.x,
                d = s.y,
                f = s.rotation,
                g = s.skewX,
                h = s.skewY,
                _ = s.scaleX,
                p = s.scaleY,
                v = s.target,
                m = s.xOrigin,
                w = s.yOrigin,
                y = s.xOffset,
                b = s.yOffset,
                x = s.forceCSS,
                k = parseFloat(c),
                S = parseFloat(d);
            f = parseFloat(f), g = parseFloat(g), (h = parseFloat(h)) && (g += h = parseFloat(h), f += h), f || g ? (f *= ud, g *= ud, n = Math.cos(f) * _, i = Math.sin(f) * _, r = Math.sin(f - g) * -p, a = Math.cos(f - g) * p, g && (h *= ud, o = Math.tan(g - h), r *= o = Math.sqrt(1 + o * o), a *= o, h && (o = Math.tan(h), n *= o = Math.sqrt(1 + o * o), i *= o)), n = zl(n), i = zl(i), r = zl(r), a = zl(a)) : (n = _, a = p, i = r = 0), (k && !~(c + "").indexOf("px") || S && !~(d + "").indexOf("px")) && (k = Yd(v, "x", c, "px"), S = Yd(v, "y", d, "px")), (m || w || y || b) && (k = zl(k + m - (m * n + w * r) + y), S = zl(S + w - (m * i + w * a) + b)), (l || u) && (o = v.getBBox(), k = zl(k + l / 100 * o.width), S = zl(S + u / 100 * o.height)), o = "matrix(" + n + "," + i + "," + r + "," + a + "," + k + "," + S + ")", v.setAttribute("transform", o), x && (v.style[Nd] = o)
        },
        _f = function(e, t, n, i, r) {
            var a, o, s = 360,
                l = il(r),
                u = parseFloat(r) * (l && ~r.indexOf("rad") ? ld : 1) - i,
                c = i + u + "deg";
            return l && ("short" === (a = r.split("_")[1]) && (u %= s) !== u % 180 && (u += u < 0 ? s : -360), "cw" === a && u < 0 ? u = (u + 36e9) % s - ~~(u / s) * s : "ccw" === a && u > 0 && (u = (u - 36e9) % s - ~~(u / s) * s)), e._pt = o = new jc(e._pt, t, n, i, u, pd), o.e = c, o.u = "deg", e._props.push(n), o
        },
        pf = function(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        },
        vf = function(e, t, n) {
            var i, r, a, o, s, l, u, c = pf({}, n._gsap),
                d = n.style;
            for (r in c.svg ? (a = n.getAttribute("transform"), n.setAttribute("transform", ""), d[Nd] = t, i = of (n, 1), zd(n, Nd), n.setAttribute("transform", a)) : (a = getComputedStyle(n)[Nd], d[Nd] = t, i = of (n, 1), d[Nd] = a), sd)(a = c[r]) !== (o = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (s = Cu(a) !== (u = Cu(o)) ? Yd(n, r, a, u) : parseFloat(a), l = parseFloat(o), e._pt = new jc(e._pt, i, r, s, l - s, _d), e._pt.u = u || 0, e._props.push(r));
            pf(i, c)
        };
    Ul("padding,margin,Width,Radius", (function(e, t) {
        var n = "Top",
            i = "Right",
            r = "Bottom",
            a = "Left",
            o = (t < 3 ? [n, i, r, a] : [n + a, n + i, r + i, r + a]).map((function(n) {
                return t < 2 ? e + n : "border" + n + e
            }));
        Jd[t > 1 ? "border" + e : e] = function(e, t, n, i, r) {
            var a, s;
            if (arguments.length < 4) return a = o.map((function(t) {
                return Xd(e, t, n)
            })), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach((function(e, t) {
                return s[e] = a[t] = a[t] || a[(t - 1) / 2 | 0]
            })), e.init(t, s, r)
        }
    }));
    var mf, wf, yf, bf = {
        name: "css",
        register: Hd,
        targetTest: function(e) {
            return e.style && e.nodeType
        },
        init: function(e, t, n, i, r) {
            var a, o, s, l, u, c, d, f, g, h, _, p, v, m, w, y, b = this._props,
                x = e.style,
                k = n.vars.startAt;
            for (d in nd || Hd(), this.styles = this.styles || Od(e), y = this.styles.props, this.tween = n, t)
                if ("autoRound" !== d && (o = t[d], !Rl[d] || !wc(d, t, n, i, e, r)))
                    if (u = typeof o, c = Jd[d], "function" === u && (u = typeof(o = o.call(n, i, e, r))), "string" === u && ~o.indexOf("random(") && (o = Hu(o)), c) c(this, e, d, o, n) && (w = 1);
                    else if ("--" === d.substr(0, 2)) a = (getComputedStyle(e).getPropertyValue(d) + "").trim(), o += "", Gu.lastIndex = 0, Gu.test(a) || (f = Cu(a), g = Cu(o)), g ? f !== g && (a = Yd(e, d, a, g) + g) : f && (o += f), this.add(x, "setProperty", a, o, i, r, 0, 0, d), b.push(d), y.push(d, 0, x[d]);
            else if ("undefined" !== u) {
                if (k && d in k ? (a = "function" == typeof k[d] ? k[d].call(n, i, e, r) : k[d], il(a) && ~a.indexOf("random(") && (a = Hu(a)), Cu(a + "") || "auto" === a || (a += Xs.units[d] || Cu(Xd(e, d)) || ""), "=" === (a + "").charAt(1) && (a = Xd(e, d))) : a = Xd(e, d), l = parseFloat(a), (h = "string" === u && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), s = parseFloat(o), d in hd && ("autoAlpha" === d && (1 === l && "hidden" === Xd(e, "visibility") && s && (l = 0), y.push("visibility", 0, x.visibility), Wd(this, x, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)), "scale" !== d && "transform" !== d && ~(d = hd[d]).indexOf(",") && (d = d.split(",")[0])), _ = d in sd)
                    if (this.styles.save(d), p || ((v = e._gsap).renderTransform && !t.parseTransform || of (e, t.parseTransform), m = !1 !== t.smoothOrigin && v.smooth, (p = this._pt = new jc(this._pt, x, Nd, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new jc(this._pt, v, "scaleY", v.scaleY, (h ? Vl(v.scaleY, h + s) : s) - v.scaleY || 0, _d), this._pt.u = 0, b.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            y.push(Ld, 0, x[Ld]), o = Gd(o), v.svg ? af(e, o, 0, m, 0, this) : ((g = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wd(this, v, "zOrigin", v.zOrigin, g), Wd(this, x, d, sf(a), sf(o)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            af(e, o, 1, m, 0, this);
                            continue
                        }
                        if (d in ef) {
                            _f(this, v, d, l, h ? Vl(l, h + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            Wd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === d) {
                            v[d] = o;
                            continue
                        }
                        if ("transform" === d) {
                            vf(this, o, e);
                            continue
                        }
                    }
                else d in x || (d = Dd(d) || d);
                if (_ || (s || 0 === s) && (l || 0 === l) && !gd.test(o) && d in x) s || (s = 0), (f = (a + "").substr((l + "").length)) !== (g = Cu(o) || (d in Xs.units ? Xs.units[d] : f)) && (l = Yd(e, d, a, g)), this._pt = new jc(this._pt, _ ? v : x, d, l, (h ? Vl(l, h + s) : s) - l, _ || "px" !== g && "zIndex" !== d || !1 === t.autoRound ? _d : md), this._pt.u = g || 0, f !== g && "%" !== g && (this._pt.b = a, this._pt.r = vd);
                else if (d in x) qd.call(this, e, d, a, h ? h + o : o);
                else if (d in e) this.add(e, d, a || e[d], h ? h + o : o, i, r);
                else if ("parseTransform" !== d) {
                    kl(d, o);
                    continue
                }
                _ || (d in x ? y.push(d, 0, x[d]) : "function" == typeof e[d] ? y.push(d, 2, e[d]()) : y.push(d, 1, a || e[d])), b.push(d)
            }
            w && Fc(this)
        },
        render: function(e, t) {
            if (t.tween._time || !ad())
                for (var n = t._pt; n;) n.r(e, n.d), n = n._next;
            else t.styles.revert()
        },
        get: Xd,
        aliases: hd,
        getSetter: function(e, t, n) {
            var i = hd[t];
            return i && i.indexOf(",") < 0 && (t = i), t in sd && t !== Ld && (e._gsap.x || Xd(e, "x")) ? n && rd === n ? "scale" === t ? Sd : kd : (rd = n || {}) && ("scale" === t ? Cd : Td) : e.style && !ol(e.style[t]) ? bd : ~t.indexOf("-") ? xd : Pc(e, t)
        },
        core: {
            _removeProperty: zd,
            _getMatrix: rf
        }
    };
    Jc.utils.checkPrefix = Dd, Jc.core.getStyleSaver = Od, yf = Ul((mf = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (wf = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(e) {
        sd[e] = 1
    })), Ul(wf, (function(e) {
        Xs.units[e] = "deg", ef[e] = 1
    })), hd[yf[13]] = mf + "," + wf, Ul("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(e) {
        var t = e.split(":");
        hd[t[1]] = yf[t[0]]
    })), Ul("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(e) {
        Xs.units[e] = "px"
    })), Jc.registerPlugin(bf);
    var xf = Jc.registerPlugin(bf) || Jc;
    xf.core.Tween;
    var kf, Sf = "shortpoint",
        Cf = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions;
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Sf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Sf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) ? null : v("div", {
                className: "brand-footer"
            }, v("div", {
                className: "brand-footer__item"
            }, v("a", {
                href: "https://www.shortpoint.com/#uaw",
                target: "_blank"
            }, v("img", {
                height: "34.78",
                src: "/frontend/images/shortpoint-logo.svg",
                alt: "ShortPoint Accessibility Logo - Opens in a new tab"
            }))), v("div", {
                className: "brand-footer__item"
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}), v("img", {
                height: "33.32",
                src: "/frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Tf = "portCityMarketing",
        Nf = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled;
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) === Tf && Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Tf ? null : v("div", {
                className: "brand-footer"
            }, v("div", {
                className: "brand-footer__item"
            }, v("a", {
                href: "https://www.portcitymarketing.com/#uaw",
                target: "_blank"
            }, v("img", {
                height: "34.78",
                src: "/frontend/images/portcity-logo-1.png",
                alt: "Port City Accessibility Logo - Opens in a new tab"
            }))), v("div", {
                className: "brand-footer__item"
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}), v("img", {
                height: "33.32",
                src: "/frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Lf = "leos",
        Af = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions;
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Lf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Lf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) ? null : v("div", {
                className: "brand-footer"
            }, v("div", {
                className: "brand-footer__item-rtl"
            }, v("a", {
                href: "https://www.accessnet.co.il/#uaw",
                target: "_blank"
            }, v("img", {
                height: "34.78",
                src: "/frontend/images/leos-1.png",
                alt: "Leos Accessibility Logo - Opens in a new tab"
            }))), v("div", {
                className: "brand-footer__item-rtl"
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}), v("img", {
                height: "33.32",
                src: "/frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Pf = "nagishli",
        Ef = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions,
                s = i.current && i.current.language && i.current.language.includes("he"),
                l = s ? "נגיש לי" : "NagishLi",
                u = s ? "https://www.nagish.li/" : "https://www.nagish.li/en",
                c = s ? "brand-footer__item-rtl" : "brand-footer__item";
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Pf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Pf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) ? null : v("div", {
                className: "brand-footer"
            }, v("div", {
                className: c
            }, v("a", {
                style: "background-color: transparent!important; border-radius: 5px!important; padding: 5px 10px!important; color: #4169E1!important; text-decoration: none!important; font-weight: 700!important; display: inline-block!important; border: 5px solid #4169E1!important; font-family: Arial,Helvetica,sans-serif!important; text-align: center; width: 100%",
                href: u,
                target: "_blank"
            }, l)), v("div", {
                className: c
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}), v("img", {
                height: "33.32",
                src: "/frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Of = "nazooz",
        Rf = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions,
                s = i.current && i.current.language && i.current.language.includes("he") ? "brand-footer__item-rtl" : "brand-footer__item";
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Of || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Of || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) ? null : v("div", {
                className: "brand-footer"
            }, v("div", {
                className: s
            }, v("a", {
                href: "https://www.nazooz.net/#uaw",
                target: "_blank"
            }, v("img", {
                height: "34.78",
                style: "width: auto; margin: 0 auto",
                src: "/frontend/images/nazooz.png",
                alt: "Nazooz Accessibility Logo - Opens in a new tab"
            }))), v("div", {
                className: s
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}), v("img", {
                height: "33.32",
                src: "/frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Mf = "altmeyer",
        If = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions,
                s = i.current && i.current.language && i.current.language.includes("he") ? "brand-footer__item-rtl" : "brand-footer__item";
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Mf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Mf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) ? null : v("div", {
                className: "brand-footer"
            }, v("div", {
                className: s
            }, v("a", {
                href: "https://altmeyer.com/#uaw",
                target: "_blank"
            }, v("img", {
                height: "34.78",
                style: "width: auto; margin: 0 auto",
                src: "/frontend/images/altmeyer-logo.png",
                alt: "Altmeyer Accessibility Logo - Opens in a new tab"
            }))), v("div", {
                className: s
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}), v("img", {
                height: "33.32",
                src: "/frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Df = "digitouch",
        Hf = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.whiteLabelOptions,
                a = n.customBrandingOptions,
                o = n.isNoFollowEnabled;
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Df || (null == r ? void 0 : r.wlHideLogo) || (null == a ? void 0 : a.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Df || (null == r ? void 0 : r.wlHideLogo) || (null == a ? void 0 : a.custom_logo_image_path) ? null : v("div", {
                className: "brand-footer"
            }, v("div", {
                className: "brand-footer__item-rtl"
            }, v("a", {
                href: "https://digitouch.co.il/#uaw",
                target: "_blank"
            }, v("img", {
                height: "33.32",
                src: "/frontend/images/digitouch.svg",
                alt: "Digitouch Accessibility Logo - Opens in a new tab"
            }))), v("div", {
                className: "brand-footer__item-rtl"
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, o ? {
                rel: "nofollow"
            } : {}), v("img", {
                height: "33.32",
                src: "/frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Ff = function(e) {
            var t = Oe(Ai),
                n = t.partner,
                i = t.whiteLabelOptions,
                r = t.customBrandingOptions,
                a = n === e && !(null == i ? void 0 : i.wlHideLogo) && !(null == r ? void 0 : r.custom_logo_image_path);
            return a && Oi.mainContainer.addClass("uw-partner"), {
                isPartnerLogoVisible: a
            }
        },
        jf = "adaguardian",
        Bf = function() {
            return Ff(jf).isPartnerLogoVisible ? v("div", {
                className: "brand-footer-huge"
            }, v("a", {
                href: "https://adaguardian.com/#uaw",
                target: "_blank"
            }, v("img", {
                height: 126,
                src: "/frontend/images/adag-powered-by-uw.png",
                alt: "Adaguardian Accessibility Logo - Opens in a new tab"
            }))) : null
        },
        Uf = "joydigital",
        zf = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions;
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Uf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Uf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) ? null : v("div", {
                className: "brand-footer",
                style: "padding-bottom: 1rem; justify-content: center; font-size: 50%;"
            }, v("div", {
                style: "display: flex; justify-content: center; width: 40%;",
                className: "brand-footer__item-rtl"
            }, v("a", {
                style: "width: 50%;",
                href: "https://joydigital.co.il/#uaw",
                target: "_blank"
            }, v("img", {
                src: "./frontend/images/joydigital.png",
                alt: "JoyDigital Accessibility Logo - Opens in a new tab"
            }))), v("div", {
                style: "width: 40%; display: flex; justify-content: center;",
                className: "brand-footer__item-rtl"
            }, v("a", ae({
                style: "width: 80%;",
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}), v("img", {
                src: "./frontend/images/logo.svg",
                alt: "UserWay Logo - Opens in a new tab"
            }))))
        },
        Wf = "madebycat",
        Vf = ["he", "ar", "fa"],
        $f = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.whiteLabelOptions,
                a = n.customBrandingOptions,
                o = n.isNoFollowEnabled,
                s = i.current && i.current.language && Vf.some((function(e) {
                    return i.current.language.includes(e)
                })) ? "brand-footer__item-rtl" : "brand-footer__item";
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Wf || (null == r ? void 0 : r.wlHideLogo) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Wf || (null == r ? void 0 : r.wlHideLogo) || (null == a ? void 0 : a.custom_logo_image_path) ? null : v("div", {
                className: "madebycat-logo"
            }, v("div", {
                className: s
            }, v("a", {
                href: "https://madebycat.com/",
                target: "_blank",
                "aria-label": "go to made by cat website - opens in a new tab"
            }, v("img", {
                src: "./frontend/images/custom-logo/madebycat/madebycat_logo.svg",
                alt: "MadeByCat Accessibility Logo"
            }))), v("div", {
                className: s
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, o ? {
                rel: "nofollow"
            } : {}, {
                "aria-label": "go to UserWay website - opens in a new tab"
            }), v("img", {
                src: "./frontend/images/logo.svg",
                alt: "UserWay Logo"
            }))))
        },
        Yf = "xperients",
        Xf = ["he", "ar", "fa"],
        qf = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions,
                s = i.current && i.current.language && Xf.some((function(e) {
                    return i.current.language.includes(e)
                })) ? "brand-footer__item-rtl" : "brand-footer__item";
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Yf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Yf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) ? null : v("div", {
                className: "xperients-footer"
            }, v("div", {
                className: s
            }, v("a", {
                href: "https://xperients.com/#uaw",
                target: "_blank",
                "aria-label": "go to Xperients website - Opens in a new tab"
            }, v("img", {
                src: "./frontend/images/custom-logo/xperients-logo.svg",
                alt: "Xperients Accessibility Logo"
            }))), v("div", {
                className: s
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}, {
                "aria-label": "go to UserWay website - Opens in a new tab"
            }), v("img", {
                src: "./frontend/images/logo.svg",
                alt: "UserWay Logo"
            }))))
        },
        Kf = "sorceintranet",
        Gf = ["he", "ar", "fa"],
        Zf = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.isNoFollowEnabled,
                a = n.whiteLabelOptions,
                o = n.customBrandingOptions;
            if ((null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Kf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path)) return null;
            var s = Gf.some((function(e) {
                    var t, n;
                    return null === (n = null === (t = null == i ? void 0 : i.current) || void 0 === t ? void 0 : t.language) || void 0 === n ? void 0 : n.includes(e)
                })),
                l = s ? "brand-footer__item-rtl" : "brand-footer__item";
            return Le((function() {
                var e, t;
                (null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) !== Kf || (null == a ? void 0 : a.wlHideLogo) || (null == o ? void 0 : o.custom_logo_image_path) || Oi.mainContainer.addClass("uw-partner")
            }), []), v("div", {
                className: "sorce-footer"
            }, v("div", {
                className: l
            }, v("a", {
                href: "https://sorceintranet.co.uk/#uaw",
                target: "_blank",
                "aria-label": "go to Sorce website - Opens in a new tab"
            }, v("img", {
                src: "./frontend/images/custom-logo/sorce.png",
                alt: "Sorce Accessibility Logo"
            }))), v("div", {
                className: l
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, r ? {
                rel: "nofollow"
            } : {}, {
                "aria-label": "go to UserWay website - Opens in a new tab"
            }), v("img", {
                src: "./frontend/images/logo.svg",
                alt: "UserWay Logo"
            }))))
        },
        Jf = "octec",
        Qf = ["he", "ar", "fa"],
        eg = function() {
            var e = Oe(Ai),
                t = e.config,
                n = e.isNoFollowEnabled,
                i = Qf.some((function(e) {
                    var n, i;
                    return null === (i = null === (n = null == t ? void 0 : t.current) || void 0 === n ? void 0 : n.language) || void 0 === i ? void 0 : i.includes(e)
                })),
                r = i ? "brand-footer__item-rtl" : "brand-footer__item";
            return Ff(Jf).isPartnerLogoVisible ? v("div", {
                className: "octec-footer"
            }, v("div", {
                className: r
            }, v("a", ae({
                href: "https://userway.org#uaw",
                target: "_blank"
            }, n ? {
                rel: "nofollow"
            } : {}, {
                "aria-label": "go to UserWay website - Opens in a new tab"
            }), v("img", {
                src: "./frontend/images/logo.svg",
                alt: "UserWay Logo"
            }))), v("div", {
                className: r
            }, v("a", {
                href: "https://octec.org.au/#uaw",
                target: "_blank",
                "aria-label": "go to Octec website - Opens in a new tab"
            }, v("img", {
                src: "./frontend/images/custom-logo/octec.jpg",
                alt: "Octec Accessibility Logo"
            })))) : null
        },
        tg = function(e) {
            return v("img", {
                className: "userway_custom_logo",
                src: e.logoSrc,
                alt: "Logo, decorative"
            })
        },
        ng = function(e) {
            var t = e.link,
                n = e.logoSrc;
            return v("a", {
                className: "uwaw-footer__logo-label",
                "aria-label": e.ariaLabel,
                href: t,
                target: "_blank"
            }, v(tg, {
                logoSrc: n
            }))
        },
        ig = function() {
            var e, t, n, i, r, a, o, s, l, u, c = Oe(Ai),
                d = c.config,
                f = c.paidAi,
                g = c.tunings,
                h = c.previewCustomLogo,
                _ = c.noLogo,
                p = c.whiteLabelOptions,
                m = c.customBrandingOptions,
                y = c.isNoFollowEnabled,
                b = po().translate;
            if (null == h ? void 0 : h.path) return (null == h ? void 0 : h.link) ? v(ng, {
                link: h.link,
                logoSrc: null == h ? void 0 : h.path
            }) : v(tg, {
                logoSrc: null == h ? void 0 : h.path
            });
            var x, k, S, C, T, N, L, A = !!(null === (t = null === (e = d.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) && [jf, Sf, Tf, Lf, Pf, Of, Mf, Df, Uf, Wf, Yf, Kf, Jf].includes(null === (i = null === (n = d.current) || void 0 === n ? void 0 : n.services) || void 0 === i ? void 0 : i.partner),
                P = null !== (o = null === (a = null === (r = d.current) || void 0 === r ? void 0 : r.services) || void 0 === a ? void 0 : a.affiliateLink) && void 0 !== o ? o : (x = null == g ? void 0 : g.site_name, k = f ? "widget" : "free_widget", S = null === (l = null === (s = d.current) || void 0 === s ? void 0 : s.services) || void 0 === l ? void 0 : l.userId, C = null === (u = d.current) || void 0 === u ? void 0 : u.language, T = ko() ? "".concat(applicationConfig.base.frontend, "pre-mobile-widget") : "".concat(applicationConfig.base.frontend), N = function(e) {
                    return ["es", "es-MX"].includes(e)
                }(C) ? "es" : "", L = 46522 === S ? "" : "?utm_source=".concat(x, "&utm_medium=widget_footer&utm_campaign=").concat(k), "".concat(T).concat(N).concat(L));
            if (!h && !_) {
                if (!(null == p ? void 0 : p.wlHideLogo) && !m.custom_logo_image_path && !A) return v(w, null, v("div", {
                    class: "uwaw-footer__logo"
                }, v("a", ae({
                    class: "uwaw-logo-img",
                    target: "_blank",
                    href: P
                }, y ? {
                    rel: "nofollow"
                } : {}), v("img", {
                    src: "./frontend/images/logo.svg",
                    alt: "UserWay Logo - ".concat(b("widget.new_tab"))
                }))));
                if (m.custom_logo_image_path) return m.custom_logo_image_link ? v(ng, {
                    link: m.custom_logo_image_link,
                    logoSrc: m.custom_logo_image_path,
                    ariaLabel: "Link to the ".concat(m.custom_logo_image_link_no_schema, " homepage - opens in a new tab")
                }) : v(tg, {
                    logoSrc: m.custom_logo_image_path
                })
            }
            return null
        },
        rg = [{
            name: "umichEdu",
            className: "uw-partner_umich"
        }, {
            name: "federationcja",
            className: "uw-partner_federationcja"
        }],
        ag = Object.values(rg).map((function(e) {
            return e.name
        })),
        og = function() {
            var e, t, n = Oe(Ai),
                i = n.config,
                r = n.customBrandingOptions;
            return Le((function() {
                if (null == r ? void 0 : r.custom_logo_image_path) {
                    var e = rg.find((function(e) {
                        var t, n;
                        return e.name === (null === (n = null === (t = i.current) || void 0 === t ? void 0 : t.services) || void 0 === n ? void 0 : n.partner)
                    }));
                    e && (Oi.mainContainer.addClass("uw-partner"), Oi.mainContainer.addClass(e.className))
                }
            }), []), ag.includes(null === (t = null === (e = i.current) || void 0 === e ? void 0 : e.services) || void 0 === t ? void 0 : t.partner) && (null == r ? void 0 : r.custom_logo_image_path) ? v("div", {
                className: "generic-partner-brand-footer"
            }, v("div", {
                className: "generic-partner-brand-footer__item"
            }, v("a", {
                href: r.custom_logo_image_link,
                target: "_blank"
            }, v("img", {
                src: r.custom_logo_image_path,
                alt: "Accessibility Logo - Opens in a new tab"
            })))) : null
        },
        sg = "uwaw-no-footer",
        lg = !1,
        ug = function() {
            var e = Oe(Ai),
                t = po().translate,
                n = function(e) {
                    var t = e.context,
                        n = e.translate,
                        i = t.partner,
                        r = t.tunings,
                        a = t.accessibilityStatement,
                        o = t.whiteLabelOptions,
                        s = t.noManage,
                        l = t.noReport,
                        u = t.customBrandingOptions,
                        c = t.trigger,
                        d = ce(Ri(vi.isLogged$), 1)[0],
                        f = ce(Ri(no.isMainMenu), 1)[0],
                        g = ce(Ri(no.backState), 1)[0],
                        h = ce(Ri(hi.state), 1)[0],
                        _ = zi(Hi.LastElement),
                        p = Pe((function() {
                            return !g || "main.logged.payment.servicesWL" === h
                        }), [g, h]),
                        v = Pe((function() {
                            return (null == a ? void 0 : a.enabled) && c === wi.Main
                        }), [null == a ? void 0 : a.enabled, c]),
                        m = Pe((function() {
                            return (null == a ? void 0 : a.link) && !(null == a ? void 0 : a.link.match("^http")) ? "http://".concat(a.link) : null == a ? void 0 : a.link
                        }), [null == a ? void 0 : a.link]),
                        w = Pe((function() {
                            return !l && !(null == o ? void 0 : o.wlHideReport) && c === wi.Main && "headless" !== t.widgetLayout && !t.tuningsFromServerInProgress
                        }), [l, null == o ? void 0 : o.wlHideReport, c, t.widgetLayout, t.tuningsFromServerInProgress]),
                        y = Pe((function() {
                            return !s && !(null == o ? void 0 : o.wlHideManage) && c === wi.Main && "headless" !== t.widgetLayout && !t.tuningsFromServerInProgress
                        }), [s, null == o ? void 0 : o.wlHideManage, c, t.widgetLayout, t.tuningsFromServerInProgress]),
                        b = !!i && [jf, Sf, Tf].includes(i) && !(null == o ? void 0 : o.wlHideLogo) && (!u || !u.custom_logo_image_path),
                        x = i && ag.includes(i) && !!u && !!u.custom_logo_image_path,
                        k = Pe((function() {
                            return (null == o ? void 0 : o.wlHideManage) && !(null == o ? void 0 : o.wlHideAsterisk) && xi(["main.home", "main.logged.payment.servicesWL"], h)
                        }), [null == o ? void 0 : o.wlHideManage, null == o ? void 0 : o.wlHideAsterisk, h]),
                        S = Pe((function() {
                            return a ? "widget.footer.statement.label" === a.text ? n(a.text, {
                                site: r.site_name
                            }) : a.text : ""
                        }), [null == a ? void 0 : a.text, n]),
                        C = Ee((function(e) {
                            e.stopPropagation(), hi.state.next(Ye)
                        }), [d]),
                        T = Ee((function() {
                            hi.state.next(g)
                        }), [g]);
                    return Le((function() {
                        !g && (null == o ? void 0 : o.wlHideReport) && (null == o ? void 0 : o.wlHideManage) && (null == o ? void 0 : o.wlHideLogo) && (null == o ? void 0 : o.wlHideAsterisk) && !(null == u ? void 0 : u.custom_logo_image_path) && !(null == a ? void 0 : a.enabled) ? Oi.mainContainer.addClass(sg) : Oi.mainContainer.removeClass(sg)
                    }), [g, o, null == u ? void 0 : u.custom_logo_image_path, null == a ? void 0 : a.enabled]), {
                        clickToMainMenu: C,
                        clickBack: T,
                        accessibilityStatementText: S,
                        asteriskVisible: k,
                        isPartnerDefaultLogoEnvironment: b,
                        isGenericPartnerCustomLogoEnvironment: x,
                        manageLinkVisible: y,
                        reportProblemVisible: w,
                        accessibilityStatementVisible: v,
                        isFooterNavLinksVisible: p,
                        goLogin: function() {
                            hi.state.next("main.login")
                        },
                        goReport: function() {
                            hi.state.next(Xe)
                        },
                        callbackRef: _,
                        isMainMenuUrl: f,
                        isLogged: d,
                        backState: g,
                        accessibilityStatementLink: m
                    }
                }({
                    context: e,
                    translate: t
                }),
                i = n.clickToMainMenu,
                r = n.clickBack,
                a = n.accessibilityStatementText,
                o = n.asteriskVisible,
                s = n.isPartnerDefaultLogoEnvironment,
                l = n.isGenericPartnerCustomLogoEnvironment,
                u = n.manageLinkVisible,
                c = n.reportProblemVisible,
                d = n.accessibilityStatementVisible,
                f = n.isFooterNavLinksVisible,
                g = n.goLogin,
                h = n.goReport,
                _ = n.isMainMenuUrl,
                p = n.isLogged,
                m = n.backState,
                w = n.accessibilityStatementLink,
                y = Vo().isWhiteLabeled,
                b = s || l,
                x = Ae(null);
            Le((function() {
                var e, t, n, i, r;
                lg || (e = x.current, t = .2, n = .3, i = null, r = function() {
                    lg = !0
                }, xf.fromTo(e, {
                    height: "0px"
                }, {
                    height: "auto",
                    duration: t,
                    delay: n,
                    ease: i,
                    onComplete: r
                }))
            }), []);
            var k, S, C = !(f && d) && !(f && u) && !(f && c) && !(p && m) && b;
            return e && v("div", {
                ref: x,
                className: "uwaw-footer ".concat(o ? "uwaw-footer_has-asterisk" : "", " ").concat(b ? "uwaw-footer_has-brand" : "", "  ").concat(f && d ? "uwaw-footer_has-has-statement" : "")
            }, !C && v("div", {
                className: "uwaw-footer__i"
            }, v("div", {
                className: "uwaw-footer__l"
            }, v("ul", {
                className: "uwaw-footer__nav"
            }, f && d && v("li", {
                className: "uwaw-footer__nav__item"
            }, v("a", {
                className: "uwaw-footer__nav__lnk",
                href: w,
                target: "_blank",
                "aria-label": "".concat(a, " - ").concat(t("widget.new_tab"))
            }, v("span", {
                className: "uwaw-features__nav_truncate"
            }, (S = 50, (k = a).length > S ? k.substr(0, S - 1) : k)))), f && c && v("li", {
                className: "uwaw-footer__nav__item"
            }, v("button", {
                className: "uwaw-footer__nav__lnk",
                tabIndex: 0,
                onClick: h,
                onKeyUp: ki(h)
            }, t("widget.footer.report.label"))), f && u && v("li", {
                className: "uwaw-footer__nav__item"
            }, v("button", {
                className: "uwaw-footer__nav__lnk uwaw-footer__nav__lnk_mng",
                onClick: g,
                onKeyUp: ki(g),
                tabIndex: 0,
                "aria-label": t(y ? "widget.footer.manage_whitelabel.aria" : "widget.footer.manage.aria")
            }, t("widget.footer.manage.label"))), p && m && "headless" !== e.widgetLayout && !e.tuningsFromServerInProgress && v("li", {
                className: "uwaw-footer__nav__item"
            }, v("button", {
                className: "uwaw-footer__nav__lnk uwaw-footer__nav__lnk_mng",
                onKeyUp: ki(_ ? i : r),
                onClick: _ ? i : r,
                tabIndex: 0
            }, t("widget.footer.misc.main_menu"))))), !b && v("div", {
                className: "uwaw-footer__r"
            }, v(ig, null))), v(Bf, null), v(Cf, null), v(Nf, null), v(Af, null), v(Hf, null), v(Ef, null), v(Rf, null), v(If, null), v(zf, null), v($f, null), v(qf, null), v(Zf, null), v(eg, null), o && v("button", {
                className: "uwaw-footer__asterisk",
                onClick: g,
                onKeyUp: ki(g),
                tabIndex: 0,
                "aria-label": t(y ? "widget.footer.manage_whitelabel.aria" : "widget.footer.manage.aria")
            }, "*"), v(og, null))
        };
    ! function(e) {
        e.CurrentSession = "current", e.Day = "day", e.Week = "week", e.Month = "month", e.Indefinitely = "indefinitely"
    }(kf || (kf = {}));
    var cg, dg = [{
            id: 1,
            text: "widget.manageHideMove.hideTime.current",
            type: kf.CurrentSession
        }, {
            id: 2,
            text: "widget.manageHideMove.hideTime.day",
            type: kf.Day
        }, {
            id: 3,
            text: "widget.manageHideMove.hideTime.week",
            type: kf.Week
        }, {
            id: 4,
            text: "widget.manageHideMove.hideTime.month",
            type: kf.Month
        }, {
            id: 5,
            text: "widget.manageHideMove.hideTime.indefinitely",
            type: kf.Indefinitely
        }],
        fg = function(e) {
            return 24 * e * 60 * 60 * 1e3
        },
        gg = function(e) {
            switch (e) {
                case kf.Month:
                    return fg(30);
                case kf.Week:
                    return fg(7);
                case kf.Day:
                default:
                    return fg(1)
            }
        },
        hg = function(e) {
            var t = po().translate,
                n = e.onCancel,
                i = function() {
                    var e = co().sendStatistics,
                        t = ce(Te(dg[0]), 2),
                        n = t[0];
                    return {
                        hideWidget: function() {
                            var t = n.type;
                            Ue({
                                action: "setTimeHideWidget",
                                value: {
                                    type: t,
                                    expirationTime: gg(t)
                                }
                            }), e("hides")
                        },
                        setSelectedTime: t[1],
                        selectedTime: n
                    }
                }(),
                r = i.selectedTime,
                a = i.setSelectedTime,
                o = i.hideWidget;
            return v("div", {
                className: "uwaw-hide-options"
            }, v("h2", {
                className: "uwaw-hide-options__title"
            }, t("widget.manageHideMove.hide_options.title")), v("ul", {
                className: "uwaw-hide-options__list"
            }, dg.map((function(e) {
                return v("li", {
                    key: e.id,
                    className: "uwaw-hide-options__item"
                }, v("label", {
                    htmlFor: e.type,
                    className: "uwaw-custom-radio"
                }, v("input", {
                    onInput: function() {
                        return a(e)
                    },
                    value: e.id,
                    className: "uwaw-custom-radio__inp",
                    id: e.type,
                    type: "radio",
                    "data-uw-reader-content": t(e.text),
                    name: "uwawHide",
                    checked: r.id === e.id
                }), v("span", {
                    className: "uwaw-custom-radio__icon"
                }), v("span", {
                    className: "uwaw-custom-radio__label"
                }, t(e.text))))
            }))), v("div", {
                className: "uwaw-hide-options__btn-row"
            }, v("button", {
                type: "button",
                "data-uw-reader-content": t("widget.manageHideMove.hide_options.cancel_btn"),
                className: "uwaw-btn uwaw-btn_border",
                onClick: n
            }, t("widget.manageHideMove.hide_options.cancel_btn")), v("button", {
                type: "button",
                className: "uwaw-btn uwaw-btn_border uwaw-btn_blue",
                "data-uw-reader-content": t("widget.manageHideMove.buttons.hide"),
                onClick: o
            }, t("widget.manageHideMove.buttons.hide"))))
        };
    ! function(e) {
        e[e.Left = 7] = "Left", e[e.Center = 5] = "Center", e[e.Right = 1] = "Right"
    }(cg || (cg = {}));
    var _g, pg = function() {
            var e = po().translate,
                t = Oe(Ai).tunings,
                n = ce(Te(!1), 2),
                i = n[0],
                r = n[1],
                a = Cs((function() {
                    return r(!1)
                })),
                o = a.currentPosition,
                s = a.savePosition,
                l = Ae(null),
                u = zi(Hi.BeforeLastElement, l),
                c = !t.widget_custom_trigger_enabled,
                d = c ? "" : ".onlyMove";
            return v("div", {
                ref: u,
                className: "uwaw-move-hide-component",
                "data-uw-reader-content": e("widget.menu.moveHide".concat(d, ".aria"))
            }, v(ws, {
                title: e("widget.manageHideMove".concat(d, ".title")),
                icon: v(aa, {
                    width: 16,
                    height: 16
                }),
                scrollDown: !0,
                readerText: e("widget.menu.moveHide".concat(d, ".aria"))
            }, v("div", {
                className: "uwaw-move-hide"
            }, v("ul", {
                className: "uwaw-move-hide__list"
            }, v("li", {
                className: "uwaw-move-hide__item"
            }, v("label", {
                htmlFor: "uwaw-move-l",
                className: "uwaw-custom-radio"
            }, v("input", {
                className: "uwaw-custom-radio__inp",
                type: "radio",
                name: "moveHide",
                id: "uwaw-move-l",
                "aria-label": e("widget.manageHideMove.radio_icons.icons_aria_labels.left"),
                "data-uw-reader-content": e("widget.manageHideMove.radio_icons.icons_aria_labels.left"),
                checked: o === cg.Left,
                onInput: function() {
                    return s(cg.Left)
                }
            }), v("span", {
                className: "uwaw-custom-radio__icon"
            }), v("span", {
                className: "uwaw-custom-radio__label"
            }, e("widget.manageHideMove.radio_icons.left")))), v("li", {
                className: "uwaw-move-hide__item"
            }, v("label", {
                htmlFor: "uwaw-move-r",
                className: "uwaw-custom-radio"
            }, v("input", {
                className: "uwaw-custom-radio__inp",
                type: "radio",
                name: "moveHide",
                id: "uwaw-move-r",
                "aria-label": e("widget.manageHideMove.radio_icons.icons_aria_labels.right"),
                "data-uw-reader-content": e("widget.manageHideMove.radio_icons.icons_aria_labels.right"),
                checked: o === cg.Right,
                onInput: function() {
                    return s(cg.Right)
                }
            }), v("span", {
                className: "uwaw-custom-radio__icon"
            }), v("span", {
                className: "uwaw-custom-radio__label"
            }, e("widget.manageHideMove.radio_icons.right")))), c && v("li", {
                className: "uwaw-move-hide__item"
            }, v("label", {
                htmlFor: "uwaw-move-h",
                className: "uwaw-custom-radio"
            }, v("input", {
                className: "uwaw-custom-radio__inp",
                type: "radio",
                name: "moveHide",
                id: "uwaw-move-h",
                "aria-label": e("widget.manageHideMove.radio_icons.icons_aria_labels.hide"),
                "data-uw-reader-content": e("widget.manageHideMove.radio_icons.icons_aria_labels.hide"),
                checked: i,
                onInput: function(e) {
                    return r(!0)
                }
            }), v("span", {
                className: "uwaw-custom-radio__icon"
            }), v("span", {
                className: "uwaw-custom-radio__label"
            }, e("widget.manageHideMove.radio_icons.hide"))))), c && i && v(hg, {
                onCancel: function() {
                    r(!1)
                }
            }))))
        },
        vg = function() {
            return v("div", {
                class: "uwaw-skeleton"
            }, v("div", {
                className: "uwaw-skeleton__hw"
            }), v("div", {
                className: "uwaw-skeleton__switchers"
            }, v("div", {
                className: "uwaw-skeleton__switchers__item"
            }, v("div", {
                className: "uwaw-skeleton__switchers__icon"
            }), v("div", {
                className: "uwaw-skeleton__switchers__label"
            }), v("div", {
                className: "uwaw-skeleton__switchers__trigger"
            })), v("div", {
                className: "uwaw-skeleton__switchers__item"
            }, v("div", {
                className: "uwaw-skeleton__switchers__icon"
            }), v("div", {
                className: "uwaw-skeleton__switchers__label"
            }), v("div", {
                className: "uwaw-skeleton__switchers__trigger"
            }))), v("div", {
                className: "uwaw-skeleton__features"
            }, Array(12).fill(null).map((function() {
                return v("div", {
                    className: "uwaw-skeleton__features__item"
                }, v("div", {
                    className: "uwaw-skeleton__features__item__i"
                }))
            }))), v("div", {
                className: "uwaw-skeleton__hw"
            }), v("div", {
                className: "uwaw-skeleton__switchers"
            }, v("div", {
                className: "uwaw-skeleton__switchers__item"
            }, v("div", {
                className: "uwaw-skeleton__switchers__label"
            }), v("div", {
                className: "uwaw-skeleton__switchers__trigger"
            })), v("div", {
                className: "uwaw-skeleton__switchers__item"
            }, v("div", {
                className: "uwaw-skeleton__switchers__label"
            }), v("div", {
                className: "uwaw-skeleton__switchers__trigger"
            })), v("div", {
                className: "uwaw-skeleton__switchers__item"
            }, v("div", {
                className: "uwaw-skeleton__switchers__icon"
            }), v("div", {
                className: "uwaw-skeleton__switchers__label"
            }), v("div", {
                className: "uwaw-skeleton__switchers__trigger"
            }))))
        };
    ! function(e) {
        e[e.Strict = 0] = "Strict", e[e.Medium = 1] = "Medium", e[e.Loose = 2] = "Loose"
    }(_g || (_g = {}));
    var mg = function(e) {
            var t, n = e.focusedItem,
                i = e.language,
                r = e.activeLanguage,
                a = e.selectLanguage,
                o = e.index,
                s = e.trigger,
                l = e.focusedItemByKeyboard,
                u = e.isLstTypeFlag,
                c = void 0 !== u && u,
                d = Lo(),
                f = i.value === (null == r ? void 0 : r.value),
                g = Ae(null),
                h = o === n,
                _ = ce(Te(""), 2),
                p = _[0],
                m = _[1];
            return Le((function() {
                m("url(".concat("https://cdn.userway.org/", "frontend/images/flags/").concat(null == i ? void 0 : i.iso.toLowerCase(), ".svg)"))
            }), [i]), h && s === wi.Main && (null === (t = g.current) || void 0 === t || t.scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            })), Le((function() {
                o === l && s === wi.Lst && Oi.makeSureElementVisible(g.current)
            }), [l, s, o]), v("button", {
                ref: g,
                role: "option",
                type: "button",
                "aria-selected": f,
                tabIndex: -1,
                className: "uwaw-lang-list__btn \n              ".concat(f ? "active" : "", " \n              ").concat(h ? "highlighted" : "", "\n              ").concat(s === wi.Lst ? "lst" : ""),
                onClick: function() {
                    a(i)
                }
            }, v("span", {
                className: "uwaw-lang-list__code"
            }, !c && v("span", {
                className: "uwaw-lang-list__circle"
            }, i.iso), c && v("span", {
                style: {
                    backgroundImage: p
                },
                className: "uwaw-lang-list__flag"
            })), v("span", {
                className: "uwaw-lang-list__value"
            }, v("span", {
                className: "uwaw-lang-list__name"
            }, i.name)), v("span", {
                className: "uwaw-lang-list__active-icon"
            }, v(Ia, {
                width: d(12, 16),
                height: d(12, 16)
            })))
        },
        wg = function(e) {
            var t = e.comboboxId,
                n = e.selectLanguage,
                i = e.focusedItem,
                r = e.languages,
                a = e.active,
                o = e.trigger,
                s = e.focusedItemByKeyboard,
                l = e.isLstTypeFlag,
                u = void 0 !== l && l;
            return v("ul", {
                role: "listbox",
                id: t,
                className: "uwaw-lang-list"
            }, r.map((function(e, t) {
                return v("li", {
                    role: "option",
                    key: e.value,
                    className: "uwaw-lang-list__item",
                    id: "language-item-".concat(t)
                }, v(mg, {
                    focusedItem: i,
                    focusedItemByKeyboard: s,
                    trigger: o,
                    activeLanguage: a,
                    language: e,
                    selectLanguage: n,
                    index: t,
                    isLstTypeFlag: u
                }))
            })))
        },
        yg = function(e) {
            var t = e.comboboxId,
                n = e.reference,
                i = e.isLst,
                r = oe(e, ["comboboxId", "reference", "isLst"]),
                a = po().translate;
            return v("div", {
                className: "uwaw-lang-list__search"
            }, v("div", {
                className: "uwaw-lang-list__search__i"
            }, v("input", ae({
                ref: n,
                className: "uwaw-form-control ".concat(i ? "lst" : ""),
                type: "text",
                placeholder: a("widget.language.search")
            }, r, {
                role: "combobox",
                "aria-controls": t,
                "aria-label": a("widget.language.search"),
                "aria-activedescendant": "language-item-".concat(e.focusedItem)
            })), v("span", {
                className: "uwaw-lang-list__search-ico"
            }, v(Aa, {
                width: 16,
                height: 16
            }))))
        },
        bg = function(e, t, n) {
            if ("string" == typeof e) return t(e);
            e.data && t(e.data), "deleteContentBackward" === e.inputType && t(n("widget.language.backspace")), "deleteContentForward" === e.inputType && t(n("widget.language.delete"))
        },
        xg = !1,
        kg = function() {
            var e = Oe(Ai),
                t = e.paidProductsEnabled,
                n = e.partner,
                i = e.trigger,
                r = Oe(ho),
                a = r.language,
                o = r.lstOptions,
                s = r.isLstButtonEnabled,
                l = r.isLangSelectorVisible,
                u = r.lstButtonType,
                c = r.widgetCustomLanguages,
                d = r.originalSiteLang,
                f = function() {
                    var e = Oe(ho),
                        t = e.originalSiteLang,
                        n = e.setLanguage,
                        i = e.setHostSiteLang,
                        r = Ee((function(e, t) {
                            Ue({
                                action: "setWidgetLanguage",
                                langCode: e,
                                shouldNotTriggerLiveTranslation: t
                            }), Mi("".concat("https://cdn.userway.org/frontend/locales/").concat(e, ".js")).then((function() {
                                n(e)
                            })).catch((function(e) {
                                console.error(e)
                            }))
                        }), []),
                        a = Ee((function(e) {
                            var n = "auto" === e ? t : e;
                            i(n), r(n, !0)
                        }), []),
                        o = Ee((function() {
                            var e = te.find((function(e) {
                                return e.value === t
                            }));
                            r(e.value), Ue({
                                action: "disableLiveTranslation"
                            })
                        }), []);
                    return Le((function() {
                        rt.lstOperate$.next({
                            requestLanguage: r,
                            revertLST: o,
                            changeWidgetLanguage: a
                        })
                    }), [r, o, a]), {
                        requestLanguage: r,
                        revertLST: o,
                        changeWidgetLanguage: a
                    }
                }(),
                g = f.requestLanguage,
                h = f.revertLST,
                _ = ce(Te(s && u === J.OneButton), 2),
                p = _[0],
                v = _[1],
                m = ce(Te(te.filter((function(e) {
                    return "en" !== e.value
                }))), 2),
                w = m[0],
                y = m[1],
                b = ce(Te(""), 2),
                x = b[0],
                k = b[1],
                S = ce(Te(null), 2),
                C = S[0],
                T = S[1],
                N = ce(Te(null), 2),
                L = N[0],
                A = N[1],
                P = Ae(null),
                E = Ae(null),
                O = Ae([]),
                R = Ae(!1),
                M = Ae(null),
                I = ce(Ri(vi.isLogged$), 1)[0],
                D = po().translate,
                H = mo().sendNavigationReaderRequest,
                F = Pe((function() {
                    var e = w.filter((function(e) {
                        var t = e.name,
                            n = e.value;
                        return t.toLowerCase().includes(x.toLowerCase()) || n.toLowerCase().includes(x.toLowerCase())
                    }));
                    return (null == c ? void 0 : c.length) || function(e) {
                        e.sort((function(e, t) {
                            return "en-US" === e.value ? -1 : "en-US" === t.value ? 1 : e.name.localeCompare(t.name)
                        }))
                    }(e), e.length && T(0), e
                }), [x, w]),
                j = Pe((function() {
                    return t.LIVE_TRANSLATIONS && o.is_enabled && o.translationAllowed
                }), [o, t.LIVE_TRANSLATIONS]),
                B = function() {
                    var e = !t.REMEDIATION && !t.LIVE_TRANSLATIONS,
                        n = t.REMEDIATION && !l && i === wi.Main;
                    return !(e || n)
                },
                U = function() {
                    v(!1), R.current = !0
                };
            Le((function() {
                (null == c ? void 0 : c.length) && y(c)
            }), [c]), Le((function() {
                var e, t, n, i, r;
                B() && !xg && (e = M.current, t = .15, n = null, i = null, r = function() {
                    xg = !0
                }, e && xf.fromTo(e, {
                    opacity: 0,
                    height: "0px"
                }, {
                    opacity: 1,
                    height: "auto",
                    duration: t,
                    delay: n,
                    ease: i,
                    onComplete: r
                }))
            }), [t]);
            var z = function(e) {
                    if (e) return e.value.toLowerCase() === d.toLowerCase() ? (h(), void U()) : void(!j && !I || e.noLiveTranslation ? g(e.value, !0) : W(e))
                },
                W = function(e) {
                    if (!j && I) return hi.state.next("main.logged.live-site-translations.main");
                    g(e.value, !0)
                },
                V = function(e, t) {
                    var n = e.length;
                    return {
                        focusNextLanguage: function() {
                            return t === n - 1 ? 0 : ++t
                        },
                        focusPreviousLanguage: function() {
                            return 0 === t ? n - 1 : --t
                        }
                    }
                }(F, C),
                $ = V.focusPreviousLanguage,
                Y = V.focusNextLanguage,
                X = function() {
                    var e, t = $();
                    T(t), A(t), bg(null === (e = F[t]) || void 0 === e ? void 0 : e.name, H, D)
                },
                q = function() {
                    var e, t = Y();
                    T(t), A(t), bg(null === (e = F[t]) || void 0 === e ? void 0 : e.name, H, D)
                },
                K = function() {
                    U(), P.current.focus()
                };
            return {
                partner: n,
                isLanguageSelectorVisible: B,
                panel: M,
                showLanguageMenu: p,
                toggleMenu: function(e) {
                    e && (e.preventDefault(), e.stopPropagation());
                    var t = F.findIndex((function(e) {
                        return e.value === a
                    }));
                    T(t), v((function(e) {
                        return !e
                    }))
                },
                langSelectButton: P,
                filter: x,
                inputRef: E,
                keyHandler: function(e) {
                    var t;
                    e.stopImmediatePropagation(), "ArrowUp" === e.code && X(), "ArrowDown" === e.code && q(), "Enter" === e.code && (t = F[C], z(t), 1 === F.length && (U(), k(""))), "Escape" === e.code && K()
                },
                inputHandler: function(e) {
                    k(e.target.value), bg(e, H, D)
                },
                setFilter: k,
                readContent: bg,
                languages: w,
                languagesRef: O,
                filteredLanguages: F,
                focusedItem: C,
                focusedItemByKeyboard: L,
                selectLanguage: function(e) {
                    z(e), T(w.indexOf(e)), U()
                }
            }
        },
        Sg = function(e) {
            var t = e.selectLanguage,
                n = po().translate,
                i = mo().sendNavigationReaderRequest,
                r = Oe(Ai).widgetColors,
                a = Oe(ho),
                o = a.language,
                s = a.hostSiteLang,
                l = a.widgetCustomLanguages,
                u = Ae(null),
                c = (null == r ? void 0 : r.isLightColour) ? null : null == r ? void 0 : r.mainBfColor,
                d = Pe((function() {
                    var e;
                    return null !== (e = te.find((function(e) {
                        return e.value.toLowerCase() === s.toLowerCase()
                    }))) && void 0 !== e ? e : te[0]
                }), [s]);
            o.toLowerCase() !== s.toLowerCase() && localStorage.setItem("userway-revert-language", o);
            var f = Pe((function() {
                    var e = localStorage.getItem("userway-revert-language") || s;
                    return te.find((function(t) {
                        return t.value.toLowerCase() === e.toLowerCase()
                    }))
                }), [o]),
                g = Pe((function() {
                    return !(null == l ? void 0 : l.length) || l.find((function(e) {
                        return e.value.toLowerCase() === s.toLowerCase()
                    }))
                }), [l]),
                h = n("widget.language.revert_on"),
                _ = n("widget.language.revert_off"),
                p = o.toLowerCase() !== s.toLowerCase(),
                m = !!localStorage.getItem("userway-revert-language") && f.value.toLowerCase() !== s.toLowerCase(),
                w = function(e, t) {
                    if (e && t && o) {
                        var n = window.locales;
                        Mi("".concat("https://cdn.userway.org/", "frontend/locales/").concat(t, ".js")).then((function() {
                            var r = function(e, t) {
                                var n, i, r = e,
                                    a = t.split(".");
                                try {
                                    for (var o = ue(a), s = o.next(); !s.done; s = o.next()) {
                                        if (!(r = r[s.value])) return null;
                                        if ("string" == typeof r) return r
                                    }
                                } catch (e) {
                                    n = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        s && !s.done && (i = o.return) && i.call(o)
                                    } finally {
                                        if (n) throw n.error
                                    }
                                }
                                return null
                            }(n[t], e);
                            r && i(r, {
                                menuLanguage: t
                            })
                        })).catch((function(e) {
                            return console.log(e)
                        }))
                    }
                };
            return g && (p || m) ? v(za, {
                reference: u,
                "data-uw-reader-content": p ? h : _,
                ariaLabel: p ? h : _,
                color: c,
                onChange: function() {
                    p ? (t(d), w("widget.language.revert_off", d.value)) : (t(f), w("widget.language.revert_on", f.value))
                },
                checked: p
            }) : null
        },
        Cg = "uw" + (~~(1e8 * Math.random())).toString(16),
        Tg = function() {
            var e = kg(),
                t = e.partner,
                n = e.panel,
                i = e.inputRef,
                r = e.languagesRef,
                a = e.langSelectButton,
                o = e.showLanguageMenu,
                s = e.filter,
                l = e.filteredLanguages,
                u = e.focusedItem,
                c = e.focusedItemByKeyboard,
                d = e.selectLanguage,
                f = e.toggleMenu,
                g = e.inputHandler,
                h = e.keyHandler,
                _ = e.isLanguageSelectorVisible,
                p = Oe(Ai).trigger,
                m = Oe(ho),
                w = m.lstButtonIcon,
                y = m.languageInfo,
                b = po().translate;
            if (!_()) return null;
            var x = "".concat(b("widget.language.label"), " ").concat(null == y ? void 0 : y.name),
                k = "url(".concat("https://cdn.userway.org/", "frontend/images/flags/").concat(null == y ? void 0 : y.iso.toLowerCase(), ".svg)"),
                S = w === Q.Flag,
                C = p === wi.Lst;
            return v("div", {
                className: "uwaw-lang-component ".concat(C ? "lst-menu" : ""),
                ref: n
            }, v(ws, {
                title: null == y ? void 0 : y.name,
                readerLang: null == y ? void 0 : y.value,
                isDisabled: C,
                readerText: x,
                isCircledIcon: S,
                hideArrowIcon: C,
                icon: S && C ? v("span", {
                    style: {
                        backgroundImage: k
                    },
                    className: "uwaw-lang-list__flag",
                    "data-uw-ignore-translate": "true"
                }) : v("span", {
                    className: "uwaw-lang-list__circle",
                    "data-uw-ignore-translate": "true"
                }, v("span", null, null == y ? void 0 : y.iso)),
                isOpen: !!C || o,
                onToggle: f,
                innerRef: a,
                renderRight: function() {
                    return v(Sg, {
                        selectLanguage: d
                    })
                }
            }, v("div", {
                className: "uwaw-lang-list-wrap ".concat(p === wi.Lst ? "lst-lang-view" : ""),
                "data-uw-ignore-translate": "true"
            }, v(Xi, {
                heightRelativeToParent: "100%",
                allowOuterScroll: !0
            }, t !== atob("cmFrYmFuaw==") && v(yg, {
                comboboxId: Cg,
                value: s,
                reference: i,
                onKeyDown: h,
                onInput: g,
                isLst: p === wi.Lst,
                focusedItem: u
            }), v(wg, {
                comboboxId: Cg,
                languages: l,
                active: y,
                languagesRef: r,
                selectLanguage: d,
                focusedItem: u,
                focusedItemByKeyboard: c,
                trigger: p,
                isLstTypeFlag: S && C
            })))))
        },
        Ng = function(e) {
            var t = e.config,
                n = po().translate,
                i = ce(Ri(no.backState), 1)[0],
                r = ce(Ri(no.title), 1)[0],
                a = Pe((function() {
                    return r === Ja
                }), [r]),
                o = Ae(null),
                s = Ae(null),
                l = ce(ji(), 2),
                u = l[0],
                c = l[1],
                d = "headless" === t.widgetLayout,
                f = zi(Hi.FirstElement, o, u);
            Le((function() {
                var e = hi.angularStateChanges$.subscribe((function() {
                    setTimeout((function() {
                        return null == u ? void 0 : u.focus()
                    }))
                }));
                return function() {
                    return e()
                }
            }), [u]), Le((function() {
                hi.onOpen$.subscribe((function() {
                    s.current.focus()
                }))
            }), []);
            var g = Ee((function() {
                hi.state.next(i)
            }), [i]);
            return v("div", {
                ref: f,
                class: "uwaw-header"
            }, v("div", {
                class: "uwaw-header__l"
            }, i && (!d || ![Qa, eo].includes(r)) && v("button", {
                "aria-label": "Go back",
                ref: c,
                type: "button",
                class: "uwaw-header__back-btn",
                onClick: g
            }, v(Tr, {
                svgAttrs: {
                    "aria-hidden": "true",
                    focusable: "false"
                }
            })), v("h1", {
                id: "uwaw-header",
                class: "uwaw-header__title"
            }, n(r), " ", !ko() && a && v("span", null, "(", function(e) {
                return de([], ce(Ya(e)), !1).map((function(e) {
                    switch (e) {
                        case wr.altKey:
                            return "ALT";
                        case wr.shiftKey:
                            return "SHIFT";
                        case wr.ctrlKey:
                            return "CTRL";
                        default:
                            return e.replace("Key", "")
                    }
                })).join("+")
            }(t), ")"))), v("button", {
                ref: s,
                class: "uwaw-header__close",
                type: "button",
                onClick: t.close,
                onMouseDown: function(e) {
                    e.preventDefault(), e.stopPropagation()
                },
                "aria-label": n("widget.header.close.aria")
            }, v(Ur, {
                height: 16,
                width: 16,
                svgAttrs: {
                    "aria-hidden": "true",
                    focusable: "false",
                    width: "16",
                    height: "16"
                }
            })))
        };

    function Lg(e) {
        return ["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "prs", "sd", "ug", "ur", "yi"].includes(e)
    }
    var Ag, Pg = function(e, t) {
            ! function(e, t, n) {
                void 0 === n && (n = !0), Le((function() {
                    if (n) return Vi ? document.addEventListener("touchstart", i) : document.addEventListener("mousedown", i),
                        function() {
                            Vi ? document.removeEventListener("touchstart", i) : document.removeEventListener("mousedown", i)
                        };

                    function i(n) {
                        e.current && !e.current.contains(n.target) && t()
                    }
                }), [e, n])
            }(e, t, Oe(Ai).isOpen)
        },
        Eg = function() {
            var e = po().translate;
            return v("div", {
                class: "critical-alert"
            }, v("div", {
                class: "widget-form"
            }, v("div", {
                class: "critical-alert-panel",
                style: "background-color: #faf7df; padding: 25px 20px; text-align: left"
            }, v("img", {
                src: "./frontend/images/exclamation_sign.svg",
                style: "width: 15px"
            }), v("div", {
                class: "critical-alert-desc",
                style: " font-family: 'Metropolis', sans-serif; font-size: 12px; line-height: 1.5; color: #697480;"
            }, v("p", null, "This widget has been modified in a way that violates UserWay’s terms of use."), v("p", null, "To restore functionality, ", v("b", null, "please remove or revert any code changes"), " that may affect the widget’s display or functions.")))), v("div", {
                class: "widget-footer"
            }, v("div", {
                class: "left"
            }, v("a", {
                target: "_blank",
                href: "https://userway.org/contact"
            }, e("widget.footer.report.label"))), v("div", {
                class: "right"
            }, v("div", null, v("div", {
                class: "logo"
            }, v("a", {
                class: "logo-img",
                target: "_blank",
                href: "https://userway.org"
            }, v("img", {
                src: "./frontend/images/logo.svg",
                alt: "Logo"
            })))))))
        },
        Og = function(e) {
            var t = Oe(Ai).widgetColors,
                n = ce(Te(""), 2),
                i = n[0],
                r = n[1],
                a = ce(Te(""), 2),
                o = a[0],
                s = a[1],
                l = ce(Te(""), 2),
                u = l[0],
                c = l[1];
            return Le((function() {
                if ((null == t ? void 0 : t.mainBfColor) && e) {
                    var n, i, a = function() {
                            var e, n = "#0042EC";
                            return t.gradient ? (null === (e = t.gradient) || void 0 === e ? void 0 : e.split(",")[1].trim()) || n : t.mainBfColor || n
                        }(),
                        o = (n = a) ? /^(?:white|#fff(?:fff)?|#fffff|rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(?:,\s*1\s*)?\))$/i.test(n) : null,
                        l = ce((i = a) ? i.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, n, i) {
                            return "#".concat(t).concat(t).concat(n).concat(n).concat(i).concat(i)
                        })).substring(1).match(/.{2}/g).map((function(e) {
                            return parseInt(e, 16)
                        })) : null, 3),
                        u = l[0],
                        d = l[1],
                        f = l[2];
                    document.documentElement.style.setProperty("--mainColorRgbValues", "".concat(u, ",").concat(d, ",").concat(f)), e.style.background = "".concat(t.gradient || t.mainBfColor), r(t.isLightColour ? "uw-dark-theme" : "uw-light-theme"), s(t.gradient ? "gradient-head" : ""), c(o ? "is-white" : "")
                } else r("")
            }), [t, e]), ["".concat(i, " ").concat(o, " ").concat(u)]
        },
        Rg = ["main.logged.sites", "main.logged.payment.initialDomains", "main.logged.user-management.config-sites", "main.logged.payment.activeSitesCm", "main.logged.payment.activeSitesCb", "main.logged.live-site-translations.sites"],
        Mg = function(e) {
            var t, n, i = e.header,
                r = e.footer,
                a = e.children,
                o = Oe(Ai),
                s = o.tunings,
                l = o.config,
                u = o.userSpecificPosition,
                c = o.position,
                d = o.widgetBlocked,
                f = o.close,
                g = o.paidAi,
                h = o.trigger,
                _ = Oe(ho).language,
                p = Ae(null),
                m = ce(Ri(Oi.contentClass$), 1)[0],
                w = ce(Ri(Oi.mainContainer.classes$), 1)[0],
                y = ce(Ri(No.isOversized$), 1)[0],
                b = ce(Ri(hi.state), 1)[0],
                x = ce(Te(!0), 2),
                k = x[0],
                S = x[1],
                C = ce(Te(""), 2),
                T = C[0],
                N = C[1],
                L = Pe((function() {
                    return w.join(" ")
                }), [w]),
                A = null === (n = null === (t = l.current.services) || void 0 === t ? void 0 : t.MODIFY_MENU) || void 0 === n ? void 0 : n.two_columns_layout,
                P = g ? "paid_widget" : "free_widget",
                E = ce(ji(), 2),
                O = E[0],
                R = E[1],
                M = ce(ji(), 2),
                I = M[0],
                D = M[1],
                H = po().translate,
                F = Fi(I, O, Ii.X).resetPosition;
            Pg(p, f);
            var j = Og(O),
                B = function() {
                    var e = ce(Te(null), 2),
                        t = e[0],
                        n = e[1],
                        i = ce(Te(null), 2),
                        r = i[0],
                        a = i[1],
                        o = ce(Te(null), 2),
                        s = o[0],
                        l = o[1];
                    return Le((function() {
                        var e = function(e) {
                            var n;
                            ("Tab" === e.key || 9 === e.keyCode) && (e.shiftKey ? document.activeElement === t && (null === (n = null != s ? s : r) || void 0 === n || n.focus(), e.preventDefault()) : (s && document.activeElement === s || !s && document.activeElement === r) && (null == t || t.focus(), e.preventDefault()))
                        };
                        return document.addEventListener("keydown", e),
                            function() {
                                return document.removeEventListener("keydown", e)
                            }
                    }), [t, s]), {
                        setFirstFocusableElement: n,
                        setLastFocusableElement: l,
                        setBeforeLastFocusableElement: a
                    }
                }();
            Le((function() {
                u && F()
            }), [u]);
            var U = Pe((function() {
                    return u ? "p".concat(u) : c ? "p".concat(c) : s && s.widget_position ? "p".concat(s.widget_position) : "p1"
                }), [u, s, null == s ? void 0 : s.widget_position, c]),
                z = Pe((function() {
                    return xi(["p1", "p2", "p3"], U) ? {
                        right: 0,
                        left: "auto"
                    } : xi(["p4", "p8"], U) ? {
                        left: window.innerWidth / 2 - (null == I ? void 0 : I.offsetWidth) / 2
                    } : xi(["p5", "p6", "p7"], U) ? {
                        left: 0
                    } : {}
                }), [U, I]),
                W = Pe((function() {
                    return !A && g || b !== Ye || y || h !== wi.Main ? "" : "uwaw_2-col"
                }), [g, b, y, h]);
            Le((function() {
                var e = hi.angularStateChanges$.subscribe((function(e) {
                    var t = !Rg.find((function(t) {
                        return t === e
                    }));
                    S(t)
                }));
                return function() {
                    return e()
                }
            }), []), Le((function() {
                var e = hi.onClose$.subscribe((function() {
                        N("")
                    })),
                    t = hi.onOpen$.subscribe((function() {
                        N(h === wi.Lst ? "lst" : "main")
                    }));
                return function() {
                    e(), t()
                }
            }), [h]), Le((function() {
                N(h === wi.Lst ? "lst" : "main")
            }), [h]);
            var V = Pe((function() {
                    return b === Ye && Lg(_) ? "uwaw_rtl" : ""
                }), [b, _]),
                $ = Pe((function() {
                    return b === Ye ? "uwaw-initial" : ""
                }), [b]);
            return v("main", {
                ref: R,
                className: "uwaw ".concat(T, " ").concat(L, " ").concat(W, " ").concat(j, " ").concat($, " ").concat(P, " ").concat(ko() ? "mobile" : "", " ").concat(V),
                style: z
            }, v("div", {
                ref: p,
                className: "uwaw-app",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": H("widget.on_open")
            }, v(Ui.Provider, {
                value: B
            }, v(Ka, null, v("div", {
                className: "uwaw__inner"
            }, v("div", {
                ref: D
            }, i), d && v(Eg, null), !d && v("div", {
                className: "uwaw-body ".concat(T)
            }, v(Ga, {
                className: "toast_initialPage"
            }), v(Xi, {
                rtl: Lg(_),
                ref: function(e) {
                    var t = null == e ? void 0 : e.getScrolledElement();
                    t && Oi.scrollContainer$.next(t)
                },
                heightRelativeToParent: "100%",
                allowOuterScroll: !0,
                scrollTo: k ? null : 0,
                freezePosition: !k
            }, v("div", {
                className: "widget-content ".concat(T, " ").concat(m || "")
            }, a))), !d && r)))))
        };
    ! function(e) {
        e[e.InitialPage = 0] = "InitialPage", e[e.InitialPageLst = 1] = "InitialPageLst", e[e.ReportPage = 2] = "ReportPage", e[e.AboutPage = 3] = "AboutPage", e[e.HowItWorksPage = 4] = "HowItWorksPage", e[e.SkeletonPage = 5] = "SkeletonPage"
    }(Ag || (Ag = {}));
    var Ig = function() {
            var e, t = ce(Te(!1), 2),
                n = t[0],
                i = t[1],
                r = ce(Te(!1), 2),
                a = r[0],
                o = r[1],
                s = ce(Ri(hi.state), 2),
                l = s[0],
                u = s[1],
                c = ce(Ri(vi.isLogged$), 1)[0],
                d = ce(Ri(vi.isLoggedMember$), 1)[0],
                f = ce(Ri(Io.violations$, null), 1)[0],
                g = Oe(Go).allyFeaturesState;
            Le((function() {
                return window.addEventListener("message", Be),
                    function() {
                        window.removeEventListener("message", Be)
                    }
            }), []);
            var h, _, p = Pi();
            h = p.sendEvent, _ = p.settings.current, Le((function() {
                    var e = ro.resetFeature$.subscribe((function(e) {
                        var t = e.trigger.feature,
                            n = e.trigger.actionState;
                        _["userway-".concat(t)] && ("s7" === t && (_["userway-s7"].value = 0, _["userway-s15"].value = 0), "s2" === t ? (_["userway-s2"].value = 0, _["userway-s10"].value = 0, _["userway-s16"].value = 0, document.documentElement.classList.remove("userway-s2"), document.documentElement.classList.remove("userway-s2-ie")) : _["userway-".concat(t)].value = n, h())
                    }));
                    return function() {
                        return e()
                    }
                }), [h, _]), Za(p), Le((function() {
                    rt.config$.next(p)
                }), [p]),
                function(e) {
                    Le((function() {
                        var t = ms((function(e) {
                                var t = {
                                    yPos: (e = e || window.event).pageY,
                                    xPos: e.pageX
                                };
                                Ue({
                                    action: "setReaderGuidePosition",
                                    value: t
                                })
                            }), 3, {
                                leading: !0,
                                trailing: !1
                            }),
                            n = e.s2;
                        return n && xi([2, 3], n.actionState) && document.addEventListener("mousemove", t),
                            function() {
                                return document.removeEventListener("mousemove", t)
                            }
                    }), [e])
                }(g);
            var m = Pe((function() {
                    var e;
                    return c && !d && !(null === (e = null == p ? void 0 : p.paidProductsEnabled) || void 0 === e ? void 0 : e.REMEDIATION) && !p.paidAi
                }), [c, d, p.paidProductsEnabled, p.paidAi]),
                w = Pe((function() {
                    return c && !d && !p.paidAi && !!f.totalCount
                }), [c, d, p.paidAi, f]),
                y = null === (e = null == p ? void 0 : p.tunings) || void 0 === e ? void 0 : e.widget_no_logo,
                b = null == p ? void 0 : p.trigger,
                x = Pe((function() {
                    return l === Xe ? (no.setBackStateToHomePage(), no.title.next("widget.report.title"), Ag.ReportPage) : l === qe ? (no.setBackStateToHomePage(), no.title.next("About UserWay's AI Widget"), Ag.AboutPage) : "main.how_it_works" === l ? (no.setBackStateToHomePage(), no.title.next("About UserWay Widget"), Ag.HowItWorksPage) : (l !== Ye && b === wi.Lst && hi.state.next(Ye), l === Ye && b === wi.Lst ? (no.backState.next(""), no.title.next("Live Site Translator"), Oi.scrollTop(0, !1), Oi.mainContainer.removeClass(Co), Ag.InitialPageLst) : l === Ye && b === wi.Main ? (no.backState.next(""), no.title.next(Ja), Oi.scrollTop(0, !1), Ag.InitialPage) : n && b ? null : Ag.SkeletonPage)
                }), [l, n, b]);
            Le((function() {
                var e = rt.config$.subscribe((function(t) {
                    if (!t.tuningsFromServerInProgress) {
                        var n = "headless" === t.widgetLayout ? "main.login" : Ye;
                        u(n), o(!0), Ue({
                            action: "appConfigLoaded"
                        }), e()
                    }
                }))
            }), []), Le((function() {
                var e = function(e) {
                    return "https://cdn.userway.org/" + "".concat(e, "?v=").concat(applicationConfig.staticVersion)
                };
                if ((x === Ag.SkeletonPage || c) && !n) {
                    var t = e("frontend/stylesheets/combined.css"),
                        r = e("frontend/javascripts/combined.js");
                    Promise.all([Di(t), Mi(r)]).then((function() {
                        i(!0)
                    }))
                }
            }), [x, c, n]);
            var k, S = p.accountIdCode === atob("aVVSaVVMZm1uZQ==");
            return v(Ai.Provider, {
                value: p
            }, v(_o, null, v(fo, null, v(As, null, v(Mg, {
                header: v(Ng, {
                    config: p
                }),
                footer: p && !p.tuningsFromServerInProgress && v(ug, null)
            }, v(wo, null, (x === Ag.SkeletonPage || !a) && v(vg, null), x === Ag.InitialPage && a && v("div", {
                className: "uwaw-initial-page"
            }, m && !y && v($o, {
                onClick: function() {
                    return u(qe)
                }
            }), !y && v(Yo, null), w && v(Bo, null), m && !w && v(Wo, null), v("ul", {
                className: "uwaw-options"
            }, v("li", {
                className: "uwaw-options__item"
            }, v(Tg, null)), v("li", {
                className: "uwaw-options__item"
            }, v(Ps, null)), v("li", {
                className: "uwaw-options__item"
            }, v(Ao, null))), v(Rs, null), !S && (k = g, !!Object.keys(k).length) && v("div", {
                className: "uwaw-options"
            }, v("div", {
                className: "uwaw-options__item"
            }, v(pg, null)))), x === Ag.InitialPageLst && v("div", {
                className: "uwaw-initial-page"
            }, v("ul", {
                className: "uwaw-options"
            }, v("li", {
                className: "uwaw-options__item lst"
            }, v(Tg, null)))), x === Ag.ReportPage && a && v(vo, null), x === Ag.AboutPage && a && v(Uo, null), x === Ag.HowItWorksPage && a && v(zo, null), v("div", {
                "ui-view": ""
            })))))))
        },
        Dg = function() {
            return v(Zo, null, v(Ig, null))
        };
    document.addEventListener("DOMContentLoaded", (function() {
        ! function(n, i, r) {
            var a, o, s, l;
            t.__ && t.__(n, i), o = (a = "function" == typeof r) ? null : r && r.__k || i.__k, s = [], l = [], O(i, n = (!a && r || i).__k = v(w, null, [n]), o || d, d, i.namespaceURI, !a && r ? [r] : o ? null : i.firstChild ? e.call(i.childNodes) : null, s, !a && r ? r : o ? o.__e : i.firstChild, a, l), R(s, n, l)
        }(v(Dg, null), document.body)
    }))
}(); //# sourceMappingURL=index.js.map