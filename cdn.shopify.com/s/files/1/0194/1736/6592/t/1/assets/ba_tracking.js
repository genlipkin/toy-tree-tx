! function() {
    function t(t, e) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), o.push.apply(o, r)
        }
        return o
    }

    function e(t, e, o) {
        return (e = function(t) {
            var e = function(t, e) {
                if ("object" != typeof t || null === t) return t;
                var o = t[Symbol.toPrimitive];
                if (void 0 !== o) {
                    var r = o.call(t, "string");
                    if ("object" != typeof r) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == typeof e ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = o, t
    }
    window.baMet = function() {
        var o = function(t, e, o, r) {
                var n = "",
                    a = "";
                if (o) {
                    var i = new Date;
                    i.setTime(i.getTime() + 60 * o * 1e3), n = "; expires=" + i.toGMTString()
                }
                r && (a = "; domain=" + r), document.cookie = t + "=" + escape(e) + n + a + "; path=/"
            },
            r = {
                urlPrefix: "",
                visitsUrl: window.Rivo.global_config.proxy_paths.app_metrics,
                baEvsUrl: window.Rivo.global_config.proxy_paths.app_metrics,
                page: null,
                useBeacon: !1,
                startOnReady: !0,
                applyVisits: !0,
                cookies: !0,
                cookieDomain: null,
                headers: {},
                visitParams: {},
                withCredentials: !1,
                pv: window.Rivo.global_config.pv,
                bam: window.Rivo.global_config.bam,
                batc: window.Rivo.global_config.batc
            },
            n = window.baMet || {};
        n.configure = function(t) {
            for (var e in t) t.hasOwnProperty(e) && (r[e] = t[e])
        }, n.configure(n);
        var a = !1,
            i = [],
            c = "undefined" != typeof JSON && void 0 !== JSON.stringify,
            s = [];

        function u() {
            return r.urlPrefix + r.baEvsUrl
        }

        function l() {
            for (var t; t = i.shift();) t();
            a = !0
        }

        function g(t) {
            a ? t() : i.push(t)
        }
        n.setCookie = function(t, e, n) {
            o(t, e, n, r.cookieDomain || r.domain)
        }, n.getCookie = function(t) {
            return function(t) {
                var e, o, r = t + "=",
                    n = document.cookie.split(";");
                for (e = 0; e < n.length; e++) {
                    for (o = n[e];
                        " " === o.charAt(0);) o = o.substring(1, o.length);
                    if (0 === o.indexOf(r)) return unescape(o.substring(r.length, o.length))
                }
                return null
            }(t)
        }, n.destroyCookie = function(t) {
            o(t, "", -1)
        }, n.log = function(t) {
            n.getCookie("baMet_debug") && window.console.log(t)
        };
        const d = ["a", "div"];

        function m(t, e) {
            let o = t;
            var r = o.matches || o.matchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector || o.webkitMatchesSelector;
            if (r) {
                if (r.apply(o, [e])) return o;
                if (!d.includes(o.tagName.toLowerCase())) {
                    for (; !d.includes(o.tagName.toLowerCase());) o = o.parentElement;
                    return m(o, [e])
                }
                return !1
            }
            return n.log("Unable to match"), !1
        }

        function f(t, e) {
            var o = [];
            for (x = 0; x < e.items.length; x++) {
                var r = e.items[x];
                o.push({
                    id: r.id,
                    properties: r.properties,
                    quantity: r.quantity,
                    variant_id: r.variant_id,
                    product_id: r.product_id,
                    final_price: r.final_price,
                    image: r.image,
                    handle: r.handle,
                    title: r.title
                })
            }
            return {
                token: t,
                total_price: e.total_price,
                items: o,
                currency: e.currency
            }
        }

        function v() {
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16)
            })) + Math.floor(Date.now()).toString()
        }

        function p() {
            r.cookies && c && n.setCookie("baMet_baEvs", JSON.stringify(s), 1)
        }

        function h(o) {
            var r = o;
            return r.common = function(o) {
                for (var r = 1; r < arguments.length; r++) {
                    var n = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? t(Object(n), !0).forEach((function(t) {
                        e(o, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
                        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return o
            }({}, window.Rivo.common), delete r.common.product, r.api = {}, r
        }

        function b(t) {
            g((function() {
                n.sendRequest(u(), h(t), (function() {
                    for (var e = 0; e < s.length; e++)
                        if (s[e].id == t.id) {
                            s.splice(e, 1);
                            break
                        }
                    p()
                }))
            }))
        }

        function w(t) {
            var e, o;
            (r.useBeacon || r.applyNow) && (o = r.headers, 0 === Object.keys(o).length) && c && void 0 !== window.navigator.sendBeacon && !r.withCredentials ? (e = t, g((function() {
                var t, o = h(e),
                    r = (t = document.querySelector("meta[name=csrf-param]")) && t.content,
                    n = function() {
                        var t = document.querySelector("meta[name=csrf-token]");
                        return t && t.content
                    }();
                r && n && (o[r] = n), window.navigator.sendBeacon(u(), JSON.stringify(o))
            }))) : (s.push(t), p(), setTimeout((function() {
                b(t)
            }), 1e3))
        }

        function _() {
            return window.location.pathname
        }

        function y(t) {
            return t && t.length > 0 ? t : null
        }

        function C(t) {
            var e = t.target;
            return function(t) {
                for (var e in t) t.hasOwnProperty(e) && null === t[e] && delete t[e];
                return t
            }({
                tag: e.tagName.toLowerCase(),
                id: y(e.id),
                class: y(e.className),
                page: _()
            })
        }

        function S() {
            var t = new Date,
                e = t.toISOString().slice(0, 10),
                o = n.getBrowserInfo(),
                a = {
                    shop_id: window.Rivo.common.shop.id,
                    name: "create_visit",
                    params: {
                        landing_page: window.location.href,
                        screen_width: window.screen.width,
                        screen_height: window.screen.height,
                        browser: o.browser,
                        os: o.os,
                        timezone: o.timezone
                    },
                    timestamp: parseInt(t.getTime()),
                    date: e,
                    hour: t.getUTCHours(),
                    id: v(),
                    visit_token: n.getVisitId(),
                    visitor_token: n.getVisitorId(),
                    app: "ba"
                };
            for (var i in document.referrer.length > 0 && (a.referrer = document.referrer), r.visitParams) r.visitParams.hasOwnProperty(i) && (a[i] = r.visitParams[i]);
            n.log(a), r.bam || w(a)
        }

        function k() {
            var t = function() {
                    var t = n.getVisitId(),
                        e = n.getVisitorId() && !t;
                    n.log("current visit_token"), n.log(t);
                    var o = new Date,
                        r = new Date;
                    r.setUTCHours(23, 59, 59, 59);
                    var a = (r - o) / 1e3,
                        i = a / 60;
                    return (i > 30 || a < 2) && (i = 30), !t || a < 2 ? (t = v(), n.setCookie("baMet_visit", t, i), e && S()) : n.setCookie("baMet_visit", t, i), t
                }(),
                e = n.getVisitorId();
            !1 === r.cookies || !1 === r.applyVisits ? (n.log("Visit applying disabled"), l()) : t && e ? (n.log("Active visit"), l()) : n.getCookie("baMet_visit") ? (n.log("Visit started"), e || (e = v(), localStorage.setItem("baMet_visitor", e)), S(), l()) : (n.log("baCookies disabled"), l())
        }
        n.onBaEv = function(t, e, o) {
            document.addEventListener(t, (function(t) {
                const r = m(t.target, e);
                r && o({
                    target: r
                })
            }))
        }, n.sendRequest = function(t, e, o) {
            fetch(t, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            }).then((function(t) {
                console.log(t), o(t)
            })).catch((function(t) {
                console.log(t)
            }))
        }, n.getCartData = function(t) {
            fetch("/cart.js?ba_request=1", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then((function(e) {
                200 === e.status ? e.json().then((function(e) {
                    t(e)
                })) : console.log("Looks like there was a problem. Status Code: " + e.status)
            })).catch((function(t) {
                console.log(t)
            }))
        }, n.syncCsId = function() {
            var t = n.getCookie("baMet_cs_id");
            return t || (t = v()), n.setCookie("baMet_cs_id", t, 20160), t
        }, n.getVisitId = n.getVisitToken = function() {
            return n.getCookie("baMet_visit")
        }, n.getVisitorId = n.getVisitorToken = function() {
            return localStorage.getItem("baMet_visitor")
        }, n.getCustomerId = function() {
            return localStorage.getItem("baMet_customer_id")
        }, n.isAdmin = function() {
            return n.getCookie("ba_admin")
        }, n.reset = function() {
            return n.destroyCookie("baMet_visit"), localStorage.removeItem("baMet_visitor"), n.destroyCookie("baMet_baEvs"), n.destroyCookie("baMet_apply"), !0
        }, n.debug = function(t) {
            return !1 === t ? n.destroyCookie("baMet_debug") : n.setCookie("baMet_debug", "t", 525600), !0
        }, n.getBrowserInfo = function() {
            var t = {
                options: [],
                header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
                dataos: [{
                    name: "Windows Phone",
                    value: "Windows Phone",
                    version: "OS"
                }, {
                    name: "Windows",
                    value: "Win",
                    version: "NT"
                }, {
                    name: "iPhone",
                    value: "iPhone",
                    version: "OS"
                }, {
                    name: "iPad",
                    value: "iPad",
                    version: "OS"
                }, {
                    name: "Android",
                    value: "Android",
                    version: "Android"
                }, {
                    name: "Mac OS",
                    value: "Mac",
                    version: "OS X"
                }, {
                    name: "Linux",
                    value: "Linux",
                    version: "rv"
                }, {
                    name: "Palm",
                    value: "Palm",
                    version: "PalmOS"
                }],
                databrowser: [{
                    name: "Chrome",
                    value: "Chrome",
                    version: "Chrome"
                }, {
                    name: "Firefox",
                    value: "Firefox",
                    version: "Firefox"
                }, {
                    name: "Safari",
                    value: "Safari",
                    version: "Version"
                }, {
                    name: "Internet Explorer",
                    value: "MSIE",
                    version: "MSIE"
                }, {
                    name: "Opera",
                    value: "Opera",
                    version: "Opera"
                }, {
                    name: "BlackBerry",
                    value: "CLDC",
                    version: "CLDC"
                }, {
                    name: "Mozilla",
                    value: "Mozilla",
                    version: "Mozilla"
                }],
                init: function() {
                    var t = this.header.join(" "),
                        e = this.matchItem(t, this.dataos),
                        o = this.matchItem(t, this.databrowser),
                        r = (new Date).getTimezoneOffset() / 60;
                    return timezone = Intl.DateTimeFormat().resolvedOptions().timeZone, {
                        os: e,
                        browser: o,
                        tz_offset: r,
                        timezone: timezone
                    }
                },
                matchItem: function(t, e) {
                    var o, r, n = 0,
                        a = 0;
                    for (n = 0; n < e.length; n += 1)
                        if (new RegExp(e[n].value, "i").test(t)) {
                            if (o = new RegExp(e[n].version + "[- /:;]([\\d._]+)", "i"), "", (r = t.match(o)) && r[1] && (r = r[1]), r)
                                for (r = r.split(/[._]+/), a = 0; a < r.length; a += 1) 0 === a ? r[a] + "." : r[a];
                            else "0";
                            return e[n].name
                        }
                    return "Unknown"
                }
            };
            return t.init()
        }, n.register = function(t, e, o) {
            try {
                var a = new Date,
                    i = a.toISOString().slice(0, 10),
                    c = {
                        shop_id: window.Rivo.common.shop.id,
                        name: t,
                        params: e || {},
                        timestamp: parseInt(a.getTime()),
                        date: i,
                        hour: a.getUTCHours(),
                        id: v(),
                        app: o
                    };
                g((function() {
                    r.cookies && !n.getVisitId() && k(), g((function() {
                        n.log(c), c.visit_token = n.getVisitId(), c.visitor_token = n.getVisitorId(), w(c)
                    }))
                }))
            } catch (t) {
                n.log(t), n.log("error applying")
            }
            return !0
        }, n.registerAppClicks = function() {
            n.onBaEv("click", ".ba-met-handler", (function(t) {
                try {
                    var e = t.target,
                        o = e.getAttribute("data-ba-met-name");
                    if (o) {
                        var r = C(t),
                            a = e.getAttribute("data-ba-met-app");
                        if (r.text = "input" == r.tag ? e.value : (e.textContent || e.innerText || e.innerHTML).replace(/[\s\r\n]+/g, " ").trim(), r.href = e.href, i = e.getAttribute("data-ba-met-extras")) {
                            var i = cleanNumbers(JSON.parse(i));
                            for (var c in i) i.hasOwnProperty(c) && (r[c] = i[c])
                        }
                        n.register(o, r, a)
                    }
                } catch (t) {
                    n.log("applyAppClicks exception"), n.log(t)
                }
            }))
        }, n.registerAtc = function() {
            n.onBaEv("click", ".product-form__cart-submit, #AddToCart-product-template, .product-atc-btn, .product-menu-button.product-menu-button-atc, .button-cart, .product-add, .add-to-cart input, .btn-addtocart, [name=add]", (function(t) {
                Date.now();
                var e = t.target,
                    o = C(t);
                o.text = "input" == o.tag ? e.value : (e.textContent || e.innerText || e.innerHTML).replace(/[\s\r\n]+/g, " ").trim(), o.href = e.href, n.register("atc", o, "ba")
            }))
        }, n.saveBaCartData = function(t) {
            if (c) {
                var e = n.getBaCartData();
                e.push(t), localStorage.setItem("baMet_cartData", JSON.stringify(e))
            }
        }, n.getBaCartData = function() {
            try {
                if (localStorage.getItem("baMet_cartData")) {
                    var t = parseInt((new Date).getTime()) - 2592e5,
                        e = JSON.parse(localStorage.getItem("baMet_cartData")).filter((function(e) {
                            return parseInt(e.ts) > t
                        })).reverse();
                    return localStorage.setItem("baMet_cartData", JSON.stringify(e)), e
                }
                return []
            } catch (t) {
                n.log(t), n.log("error getting ba")
            }
        }, n.updateBaCart = function(t) {
            n.log("checking if cart is out of sync with db");
            var e = n.getCookie("cart"),
                o = n.getCookie("ba_cart_token"),
                a = localStorage.getItem("baMet_latest_cart"),
                i = localStorage.getItem("baMsg_synced_cart");
            0 != (t || a != i || e != o) ? (n.setCookie("ba_cart_token", e, 2880), r.bam || n.register("update_cart_db", {}, "ba"), localStorage.setItem("baMsg_synced_cart", a), n.log("cart token changed -posting to the API from here")) : n.log("cart is in sync with db")
        }, n.setCartAttributes = function(t, e) {
            try {
                if (n.log("setting cart attributes"), "string" == typeof e) var o = JSON.parse(e);
                else o = e;
                var r = n.getCookie("cart"),
                    a = localStorage.getItem("baMet_latest_cart");
                if (!r && !a) return;
                if (t) {
                    n.log("set cart attributes identified ajax cart update"), n.log(o);
                    var i = f(r, o);
                    window.Rivo.common.cart = i
                } else v = r, window.Rivo.common.cart = f(v, window.Rivo.common.cart), i = window.Rivo.common.cart;
                localStorage.setItem("baMet_latest_cart", JSON.stringify(i));
                var c = i.items,
                    s = n.getBaCartData();
                if (s.length > 0) {
                    var u = {
                        visit_token: n.getVisitId(),
                        visitor_token: n.getVisitorToken(),
                        items: [],
                        cart_token: r
                    };
                    for (x = 0; x < c.length; x++) {
                        var l = c[x];
                        if (l) {
                            var g = s.find((function(t) {
                                return t.id == l.id
                            }));
                            g && (l.ba_conversion_data = g, u.items.push(g), window.Rivo.common.has_ba_conversion = !0)
                        }
                    }
                    var d = JSON.stringify(u)
                }
                var m = localStorage.getItem("ba_conversion_data");
                window.Rivo.common.ba_conversion_data = u, m != d || window.Rivo.common.ba_conversion_data && "cart" == window.Rivo.common.template ? (n.log("saving ba_conversion_data"), localStorage.setItem("ba_conversion_data", d), n.updateBaCart(!0)) : n.updateBaCart(!1)
            } catch (t) {
                n.log("setCartAttributes exception"), n.log(t)
            }
            var v
        }, n.registerAll = function() {
            document.referrer.indexOf("/admin/shops/") > 0 && n.setCookie("ba_admin", 1, 1051200), n.setCartAttributes(!1, {}), n.registerAppClicks()
        };
        try {
            s = JSON.parse(n.getCookie("baMet_baEvs") || "[]")
        } catch (t) {}
        for (var x = 0; x < s.length; x++) b(s[x]);
        var O;
        return r.batc || (function() {
            n.log("awaiting ajax cart update");
            try {
                var t = XMLHttpRequest.prototype.open;
                XMLHttpRequest.prototype.open = function() {
                    this.addEventListener("load", (function() {
                        var t;
                        this._url && this._url.search(/cart.*js/) >= 0 && "GET" != this._method && (n.log("its a cart endpoint thats not a get request"), (t = this)._url.indexOf("/cart/add") >= 0 ? n.getCartData((function(t) {
                            n.log(t), n.setCartAttributes(!0, t)
                        })) : n.setCartAttributes(!0, t.response))
                    })), t.apply(this, arguments)
                }
            } catch (t) {
                n.log(t), n.log("error catching ajax cart")
            }
        }(), function() {
            n.log("awaiting cart fetch update");
            try {
                var t = fetch;
                fetch = function(e, o) {
                    var r = !1;
                    e && "function" == typeof e.search && e.search(/cart.*js|cart\/add|cart\/change/) >= 0 && e.search("ba_request") < 0 && o && ("POST" == o.method || "PUT" == o.method) && (n.log("caught a fetch cart event", e, o), r = !0);
                    var a = t(e, o);
                    return a.then((function(t) {
                        r && n.getCartData((function(t) {
                            n.setCartAttributes(!0, t)
                        }))
                    })), a
                }
            } catch (t) {
                n.log(t), n.log("error catching cart fetch")
            }
        }()), n.start = function() {
            var t;
            r.bam && n.log("SESSIONS ARE RATE LIMITED - THE APP WILL NOT WORK UNTIL 00:00 UTC"), k(), n.start = function() {}, r.page_views && (t = n.page_hash, n.register("page_view", t, "ba")), window.Rivo.common.customer && !n.getCustomerId() && (n.register("sync_customer", {}, "ba"), localStorage.setItem("baMet_customer_id", window.Rivo.common.customer.id))
        }, O = function() {
            r.startOnReady && n.start()
        }, "interactive" === document.readyState || "complete" === document.readyState ? O() : document.addEventListener("DOMContentLoaded", O), n.page_hash = {
            url: window.location.href,
            page: _(),
            template: window.Rivo.common.template
        }, n.registerAll(), n
    }()
}();
//# sourceMappingURL=https://d15d3imw3mjndz.cloudfront.net/assets/storefront/ba_tracking.js-6933edb599e566b743199bb56c7a7c39cf80797c79e7225303c1bd4af0d45516.map
//!
;