/*!
 * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function(a, b, c) {
    var d = window.matchMedia;
    typeof module != "undefined" && module.exports ? module.exports = c(d) : typeof define == "function" && define.amd ? define(function() {
        return b[a] = c(d)
    }) : b[a] = c(d)
})("enquire", this, function(a) {
    "use strict";

    function b(a2, b2) {
        var c2, d2 = 0,
            e2 = a2.length;
        for (d2; e2 > d2 && (c2 = b2(a2[d2], d2), c2 !== !1); d2++);
    }

    function c(a2) {
        return Object.prototype.toString.apply(a2) === "[object Array]"
    }

    function d(a2) {
        return typeof a2 == "function"
    }

    function e(a2) {
        this.options = a2, !a2.deferSetup && this.setup()
    }

    function f(b2, c2) {
        this.query = b2, this.isUnconditional = c2, this.handlers = [], this.mql = a(b2);
        var d2 = this;
        this.listener = function(a2) {
            d2.mql = a2, d2.assess()
        }, this.mql.addListener(this.listener)
    }

    function g() {
        if (!a) throw new Error("matchMedia not present, legacy browsers require a polyfill");
        this.queries = {}, this.browserIsIncapable = !a("only all").matches
    }
    return e.prototype = {
        setup: function() {
            this.options.setup && this.options.setup(), this.initialised = !0
        },
        on: function() {
            !this.initialised && this.setup(), this.options.match && this.options.match()
        },
        off: function() {
            this.options.unmatch && this.options.unmatch()
        },
        destroy: function() {
            this.options.destroy ? this.options.destroy() : this.off()
        },
        equals: function(a2) {
            return this.options === a2 || this.options.match === a2
        }
    }, f.prototype = {
        addHandler: function(a2) {
            var b2 = new e(a2);
            this.handlers.push(b2), this.matches() && b2.on()
        },
        removeHandler: function(a2) {
            var c2 = this.handlers;
            b(c2, function(b2, d2) {
                return b2.equals(a2) ? (b2.destroy(), !c2.splice(d2, 1)) : void 0
            })
        },
        matches: function() {
            return this.mql.matches || this.isUnconditional
        },
        clear: function() {
            b(this.handlers, function(a2) {
                a2.destroy()
            }), this.mql.removeListener(this.listener), this.handlers.length = 0
        },
        assess: function() {
            var a2 = this.matches() ? "on" : "off";
            b(this.handlers, function(b2) {
                b2[a2]()
            })
        }
    }, g.prototype = {
        register: function(a2, e2, g2) {
            var h = this.queries,
                i = g2 && this.browserIsIncapable;
            return h[a2] || (h[a2] = new f(a2, i)), d(e2) && (e2 = {
                match: e2
            }), c(e2) || (e2 = [e2]), b(e2, function(b2) {
                d(b2) && (b2 = {
                    match: b2
                }), h[a2].addHandler(b2)
            }), this
        },
        unregister: function(a2, b2) {
            var c2 = this.queries[a2];
            return c2 && (b2 ? c2.removeHandler(b2) : (c2.clear(), delete this.queries[a2])), this
        }
    }, new g
}),
function(a) {
    a.fn.equalHeights = function() {
        var b = 0,
            c = a(this);
        return c.each(function() {
            var c2 = a(this).innerHeight();
            c2 > b && (b = c2)
        }), c.css("height", b)
    }, a("[data-equal]").each(function() {
        var b = a(this),
            c = b.data("equal");
        b.find(c).equalHeights()
    })
}(jQuery);
var afterResize = function() {
    var t = {};
    return function(callback, ms, uniqueId) {
        uniqueId || (uniqueId = "Don't call this twice without a uniqueId"), t[uniqueId] && clearTimeout(t[uniqueId]), t[uniqueId] = setTimeout(callback, ms)
    }
}();
window.theme = window.theme || {}, theme.Sections = function() {
    this.constructors = {}, this.instances = [], $(document).on("shopify:section:load", this._onSectionLoad.bind(this)).on("shopify:section:unload", this._onSectionUnload.bind(this)).on("shopify:section:select", this._onSelect.bind(this)).on("shopify:section:deselect", this._onDeselect.bind(this)).on("shopify:block:select", this._onBlockSelect.bind(this)).on("shopify:block:deselect", this._onBlockDeselect.bind(this))
}, theme.Sections.prototype = _.assignIn({}, theme.Sections.prototype, {
    _createInstance: function(container, constructor) {
        var $container = $(container),
            id = $container.attr("data-section-id"),
            type = $container.attr("data-section-type");
        if (constructor = constructor || this.constructors[type], !_.isUndefined(constructor)) {
            var instance = _.assignIn(new constructor(container), {
                id: id,
                type: type,
                container: container
            });
            this.instances.push(instance)
        }
    },
    _onSectionLoad: function(evt) {
        var container = $("[data-section-id]", evt.target)[0];
        container && this._createInstance(container)
    },
    _onSectionUnload: function(evt) {
        this.instances = _.filter(this.instances, function(instance) {
            var isEventInstance = instance.id === evt.detail.sectionId;
            return isEventInstance && _.isFunction(instance.onUnload) && instance.onUnload(evt), !isEventInstance
        })
    },
    _onSelect: function(evt) {
        var instance = _.find(this.instances, function(instance2) {
            return instance2.id === evt.detail.sectionId
        });
        !_.isUndefined(instance) && _.isFunction(instance.onSelect) && instance.onSelect(evt)
    },
    _onDeselect: function(evt) {
        var instance = _.find(this.instances, function(instance2) {
            return instance2.id === evt.detail.sectionId
        });
        !_.isUndefined(instance) && _.isFunction(instance.onDeselect) && instance.onDeselect(evt)
    },
    _onBlockSelect: function(evt) {
        var instance = _.find(this.instances, function(instance2) {
            return instance2.id === evt.detail.sectionId
        });
        !_.isUndefined(instance) && _.isFunction(instance.onBlockSelect) && instance.onBlockSelect(evt)
    },
    _onBlockDeselect: function(evt) {
        var instance = _.find(this.instances, function(instance2) {
            return instance2.id === evt.detail.sectionId
        });
        !_.isUndefined(instance) && _.isFunction(instance.onBlockDeselect) && instance.onBlockDeselect(evt)
    },
    register: function(type, constructor) {
        this.constructors[type] = constructor, $("[data-section-type=" + type + "]").each(function(index, container) {
            this._createInstance(container, constructor)
        }.bind(this))
    }
}), theme.a11y = {
    pageLinkFocus: function($element) {
        var focusClass = "js-focus-hidden";
        $element.first().attr("tabIndex", "-1").focus().addClass(focusClass).one("blur", callback);

        function callback() {
            $element.first().removeClass(focusClass).removeAttr("tabindex")
        }
    },
    focusHash: function() {
        var hash = window.location.hash;
        hash && document.getElementById(hash.slice(1)) && this.pageLinkFocus($(hash))
    },
    bindInPageLinks: function() {
        $("a[href*=#]").on("click", function(evt) {
            this.pageLinkFocus($(evt.currentTarget.hash))
        }.bind(this))
    },
    trapFocus: function(options) {
        var eventName = options.namespace ? "focusin." + options.namespace : "focusin";
        options.$elementToFocus || (options.$elementToFocus = options.$container), options.$container.attr("tabindex", "-1"), options.$elementToFocus.focus(), $(document).on(eventName, function(evt) {
            options.$container[0] !== evt.target && !options.$container.has(evt.target).length && options.$container.focus()
        })
    },
    removeTrapFocus: function(options) {
        var eventName = options.namespace ? "focusin." + options.namespace : "focusin";
        options.$container && options.$container.length && options.$container.removeAttr("tabindex"), $(document).off(eventName)
    }
}, window.timber = window.timber || {}, timber.cacheSelectors = function() {
    timber.cache = {
        $html: $("html"),
        $body: $("body"),
        $window: $(window),
        $breadcrumbs: $(".breadcrumb"),
        $navigation: $("#AccessibleNav"),
        $mobileNav: $("#MobileNav"),
        $hasDropdownItem: $(".site-nav--has-dropdown"),
        $menuToggle: $(".menu-toggle"),
        $productImageWrap: $("#productPhoto"),
        $productImage: $("#productPhotoImg"),
        $thumbImages: $("#productThumbs").find("a.product-photo-thumb"),
        $shareButtons: $(".social-sharing"),
        $collectionFilters: $("#collectionFilters"),
        $advancedFilters: $(".advanced-filters"),
        $toggleFilterBtn: $("#toggleFilters"),
        $emptyCart: $("#EmptyCart"),
        $ajaxCartContainer: $("#ajaxifyCart"),
        cartNoCookies: "cart--no-cookies",
        $featuredBoxImages: $(".featured-box--inner"),
        $featuredBoxTitles: $(".featured-box--title")
    }
}, timber.cacheVariables = function() {
    timber.vars = {
        bpLarge: 769,
        mediaQueryLarge: "screen and (min-width: 769px)",
        isLargeBp: !1,
        isTouch: timber.cache.$html.hasClass("supports-touch")
    }
}, timber.init = function() {
    timber.cacheSelectors(), timber.cacheVariables(), timber.cache.$html.removeClass("no-js").addClass("js"), "ontouchstart" in window && timber.cache.$html.removeClass("no-touch").addClass("touch"), timber.initCart(), timber.responsiveVideos(), timber.toggleFilters()
}, timber.mobileNav = function() {
    var classes = {
            active: "nav-active",
            dropdownButton: "mobile-nav--button"
        },
        selectors = {
            parentLink: '[data-meganav-type="parent"]',
            dropdownButton: "." + classes.dropdownButton
        },
        $mobileNav = timber.cache.$mobileNav,
        $mobileNavBtn = $mobileNav.find(selectors.dropdownButton);
    $mobileNavBtn.on("click", function(evt) {
        var $el = $(this),
            $parentLink = $el.closest("li");
        if (!$el.hasClass(classes.active)) {
            showDropdown($el, $parentLink);
            return
        }
        if ($el.hasClass(classes.active)) {
            hideDropdowns($el, $parentLink);
            return
        }
    });

    function showDropdown($el, $dropdown2) {
        $el.addClass(classes.active);
        var $parent = $dropdown2.find("> " + selectors.parentLink);
        $dropdown2.addClass(classes.active), $el.attr("aria-expanded", "true")
    }

    function hideDropdowns($el, $parentLink) {
        $el.removeClass(classes.active), $parentLink.removeClass(classes.active), $.each($parentLink, function() {
            var $dropdown2 = $(this),
                $parent = $dropdown2.find("> " + selectors.parentLink);
            $dropdown2.removeClass(classes.active), $el.attr("aria-expanded", "false")
        })
    }
}, timber.accessibleNav = function() {
    var classes = {
            active: "nav-hover",
            focus: "nav-focus",
            outside: "nav-outside",
            hasDropdown: "site-nav--has-dropdown",
            link: "site-nav--link"
        },
        selectors = {
            active: "." + classes.active,
            hasDropdown: "." + classes.hasDropdown,
            dropdown: "[data-meganav-dropdown]",
            link: "." + classes.link,
            nextLink: "> ." + classes.link,
            parentLink: '[data-meganav-type="parent"]',
            childLink: '[data-meganav-type="child"]'
        },
        $nav = timber.cache.$navigation,
        $allLinks = $nav.find(selectors.link),
        $parents = $nav.find(selectors.hasDropdown),
        $childLinks = $nav.find(selectors.childLink),
        $topLevel = $parents.find(selectors.nextLink),
        $dropdowns = $nav.find(selectors.dropdown),
        $subMenuLinks = $dropdowns.find(selectors.link);
    $parents.on("mouseenter touchstart", function(evt) {
        var $el = $(this),
            evtType = evt.type,
            $dropdowns2 = $nav.find(selectors.active);
        $el.hasClass(classes.active) || (evt.preventDefault(), evt.stopImmediatePropagation()), evtType === "touchstart" && $dropdowns2.length > 0 && hideDropdown($el), showDropdown($el)
    }), $childLinks.on("touchstart", function(evt) {
        evt.stopImmediatePropagation()
    }), $parents.on("mouseleave", function() {
        hideDropdown($(this))
    }), $allLinks.on("focus", function() {
        handleFocus($(this))
    }), $allLinks.on("blur", function() {
        removeFocus($topLevel)
    });

    function handleFocus($el) {
        var $newFocus = null,
            $previousItem = $el.parent().prev();
        $allLinks.attr("tabindex", ""), $previousItem.hasClass(classes.hasDropdown) && $previousItem.find(selectors.dropdown + " " + selectors.link).attr("tabindex", -1), $newFocus = $el.parents(selectors.hasDropdown).find("> " + selectors.link), addFocus($newFocus)
    }

    function showDropdown($el) {
        var $toplevel = $el.find(selectors.nextLink);
        $toplevel.attr("aria-expanded", !0), $el.addClass(classes.active), setTimeout(function() {
            timber.cache.$body.on("touchstart.MegaNav", function() {
                hideDropdowns()
            })
        }, 250)
    }

    function hideDropdown($el) {
        var $dropdowns2 = $el.parent().find(selectors.active),
            $parentLink = $dropdowns2.find(selectors.nextLink);
        $parentLink.attr("aria-expanded", !1), $dropdowns2.removeClass(classes.active), timber.cache.$body.off("touchstart.MegaNav")
    }

    function hideDropdowns() {
        var $dropdowns2 = $nav.find(selectors.active);
        $.each($dropdowns2, function() {
            hideDropdown($(this))
        })
    }

    function addFocus($el) {
        $el.addClass(classes.focus), $el.attr("aria-expanded") !== void 0 && $el.attr("aria-expanded", !0)
    }

    function removeFocus($el) {
        $el.removeClass(classes.focus), $subMenuLinks.attr("tabindex", -1), $el.attr("aria-expanded") !== void 0 && $el.attr("aria-expanded", !1)
    }

    function handleDropdownOffset($dropdowns2) {
        var viewportSize = $(window).width();
        $dropdowns2.removeClass(classes.outside), $.each($dropdowns2, function() {
            $dropdown = $(this);
            var dropdownOffset = $dropdown.offset().left + $dropdown.width();
            dropdownOffset > viewportSize && $dropdown.addClass(classes.outside)
        })
    }
    timber.cache.$window.load(function() {
        handleDropdownOffset($dropdowns)
    }), timber.cache.$window.resize(function() {
        afterResize(function() {
            handleDropdownOffset($dropdowns)
        }, 250)
    })
}, timber.responsiveNav = function() {
    $(window).resize(function() {
        afterResize(function() {
            timber.cache.$navigation.append($("#moreMenu--list").html()), $("#moreMenu").remove(), timber.alignMenu(), timber.accessibleNav()
        }, 200, "uniqueID")
    }), timber.alignMenu(), timber.accessibleNav(), timber.mobileNav()
}, timber.alignMenu = function() {
    var $nav = timber.cache.$navigation,
        w = 0,
        i = 0;
    wrapperWidth = $nav.outerWidth() - 101, menuhtml = "", !(window.innerWidth < timber.vars.bpLarge) && ($.each($nav.children(), function() {
        var $el = $(this);
        $el.hasClass("large-hide") || (w += $el.outerWidth(!0)), wrapperWidth < w && (menuhtml += $("<div>").append($el.clone()).html(), $el.remove(), $el.hasClass("large-hide") || i++)
    }), wrapperWidth < w && ($nav.append('<li id="moreMenu" class="site-nav--has-dropdown"><button class="site-nav--link" data-meganav-type="parent" aria-expanded="false">' + theme.strings.navigation.more_link + '<span class="icon icon-arrow-down" aria-hidden="true"></span></button><ul id="moreMenu--list" class="site-nav--dropdown site-nav--has-grandchildren site-nav--dropdown--more">' + menuhtml + "</ul></li>"), $("#moreMenu").find("a").attr("tabindex", "-1"), i <= 1 && (timber.cache.$navigation.append($("#moreMenu--list").html()), $("#moreMenu").remove())))
}, timber.toggleMenu = function() {
    var $mainHeader = $("#shopify-section-header"),
        $navBar = $("#navBar"),
        $siteHeader = $mainHeader.find(".site-header"),
        showNavClass = "show-nav",
        hiddenClass = "site-header--hidden";
    timber.cache.$menuToggle.on("click", function() {
        var $el = $(this),
            isExpanded = $el.attr("aria-expanded") === "true";
        timber.cache.$html.toggleClass(showNavClass), $el.attr("aria-expanded", !isExpanded), isExpanded ? ($siteHeader.removeClass(hiddenClass), theme.a11y.removeTrapFocus({
            $container: $mainHeader,
            namespace: "mobileMenuToggle"
        })) : (setTimeout(function() {
            $siteHeader.addClass(hiddenClass)
        }, 450), theme.a11y.trapFocus({
            $container: $mainHeader,
            $elementToFocus: $("#MobileNav > li:first-child a"),
            namespace: "mobileMenuToggle"
        }), $navBar.scrollTop(0)), $("#ajaxifyModal").hasClass("is-visible") && ($("#ajaxifyModal").removeClass("is-visible"), timber.cache.$html.addClass(showNavClass))
    })
}, timber.initCart = function() {
    theme.settings.cartType != "page" && ajaxifyShopify.init({
        method: theme.settings.cartType,
        wrapperClass: "wrapper",
        formSelector: "[data-product-form]",
        addToCartSelector: "#addToCart",
        cartCountSelector: ".cart-count",
        toggleCartButton: ".cart-toggle",
        useCartTemplate: !0,
        btnClass: "btn",
        moneyFormat: moneyFormat,
        disableAjaxCart: !1,
        enableQtySelectors: !0
    }), timber.cookiesEnabled() || (timber.cache.$emptyCart.addClass(timber.cache.cartNoCookies), timber.cache.$ajaxCartContainer.addClass(timber.cache.cartNoCookies))
}, timber.cookiesEnabled = function() {
    var cookieEnabled = navigator.cookieEnabled;
    return cookieEnabled || (document.cookie = "testcookie", cookieEnabled = document.cookie.indexOf("testcookie") !== -1), cookieEnabled
}, timber.equalHeights = function(el) {
    $(window).load(function() {
        timber.resizeElements(this)
    }), $(window).resize(function(el2) {
        afterResize(function() {
            timber.resizeElements(this)
        }, 250, "id")
    }), timber.resizeElements(this)
}, timber.resizeElements = function($container, id) {
    var $id = $container.attr("data-section-id", id),
        $grid = $container.find(".grid-uniform"),
        $gridImages = $id.find(".product-grid-image");
    $gridImages.css("height", "auto").equalHeights(this);
    var $featuredBoxImages = $container.find(".featured-box--inner"),
        $featuredBoxTitles = $container.find(".featured-box--title");
    $featuredBoxImages.css("height", "auto").equalHeights(this), $featuredBoxTitles.css("height", "auto").equalHeights(this)
}, timber.responsiveVideos = function() {
    var $iframeVideo = $('iframe[src*="youtube.com/embed"], iframe[src*="player.vimeo"]'),
        $iframeReset = $iframeVideo.add("iframe#admin_bar_iframe");
    $iframeVideo.each(function() {
        $(this).parent("div.video-wrapper").length || $(this).wrap('<div class="video-wrapper"></div>')
    }), $iframeReset.each(function() {
        this.src = this.src
    })
}, timber.toggleFilters = function() {
    timber.cache.$collectionFilters.length && timber.cache.$toggleFilterBtn.on("click", function() {
        timber.cache.$toggleFilterBtn.toggleClass("is-active"), timber.cache.$collectionFilters.slideToggle(200), $(window).scrollTop() > timber.cache.$breadcrumbs.offset().top && $("html, body").animate({
            scrollTop: timber.cache.$breadcrumbs.offset().top
        })
    })
}, timber.sortFilters = function() {
    timber.cache.$advancedFilters.each(function() {
        var $el = $(this),
            $tags = $el.find("li"),
            aNumber = /\d+/,
            sorted = !1;
        $tags.sort(function(a, b) {
            if (a = parseInt(aNumber.exec($(a).text()), 10), b = parseInt(aNumber.exec($(b).text()), 10), !(isNaN(a) || isNaN(b))) return sorted = !0, a - b
        }), sorted && $el.append($tags)
    })
}, timber.formatMoney = function(val) {
    return moneyFormat.indexOf("money") === -1 && (moneyFormat.indexOf("{{amount}}") > -1 && moneyFormat.indexOf(".") === -1 || moneyFormat.indexOf("{{ amount }}") > -1 && moneyFormat.indexOf(".") === -1 ? val = val.replace(".", "<sup>") + "</sup>" : (moneyFormat.indexOf("{{ amount_with_comma_separator }}") > -1 || moneyFormat.indexOf("{{amount_with_comma_separator}}") > -1) && (val = val.replace(",", "<sup>") + "</sup>")), val
}, timber.formatSaleTag = function(val) {
    if (moneyFormat.indexOf("money") === -1) {
        if (moneyFormat.replace(/\s/g, "").indexOf("{{amount}}") > -1 && moneyFormat.indexOf(".") === -1) {
            if (val.indexOf(".00") > -1) return val.replace(".00", "")
        } else if (moneyFormat.replace(/\s/g, "").indexOf("{{amount_with_comma_separator}}") > -1 && val.indexOf(",00") > -1) return val.replace(",00", "")
    }
    return val
}, $(timber.init);
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(t, e) {
    typeof define == "function" && define.amd ? define("ev-emitter/ev-emitter", e) : typeof module == "object" && module.exports ? module.exports = e() : t.EvEmitter = e()
})(typeof window != "undefined" ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t2, e2) {
        if (t2 && e2) {
            var i = this._events = this._events || {},
                n = i[t2] = i[t2] || [];
            return n.indexOf(e2) == -1 && n.push(e2), this
        }
    }, e.once = function(t2, e2) {
        if (t2 && e2) {
            this.on(t2, e2);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t2] = i[t2] || {};
            return n[e2] = !0, this
        }
    }, e.off = function(t2, e2) {
        var i = this._events && this._events[t2];
        if (i && i.length) {
            var n = i.indexOf(e2);
            return n != -1 && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t2, e2) {
        var i = this._events && this._events[t2];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e2 = e2 || [];
            for (var r = this._onceEvents && this._onceEvents[t2]; o;) {
                var s = r && r[o];
                s && (this.off(t2, o), delete r[o]), o.apply(this, e2), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    typeof define == "function" && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : typeof module == "object" && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i(t2, e2) {
        for (var i2 in e2) t2[i2] = e2[i2];
        return t2
    }

    function n(t2) {
        var e2 = [];
        if (Array.isArray(t2)) e2 = t2;
        else if (typeof t2.length == "number")
            for (var i2 = 0; i2 < t2.length; i2++) e2.push(t2[i2]);
        else e2.push(t2);
        return e2
    }

    function o(t2, e2, r2) {
        return this instanceof o ? (typeof t2 == "string" && (t2 = document.querySelectorAll(t2)), this.elements = n(t2), this.options = i({}, this.options), typeof e2 == "function" ? r2 = e2 : i(this.options, e2), r2 && this.on("always", r2), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(t2, e2, r2)
    }

    function r(t2) {
        this.img = t2
    }

    function s(t2, e2) {
        this.url = t2, this.element = e2, this.img = new Image
    }
    var h = t.jQuery,
        a = t.console;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(t2) {
        t2.nodeName == "IMG" && this.addImage(t2), this.options.background === !0 && this.addElementBackgroundImages(t2);
        var e2 = t2.nodeType;
        if (e2 && d[e2]) {
            for (var i2 = t2.querySelectorAll("img"), n2 = 0; n2 < i2.length; n2++) {
                var o2 = i2[n2];
                this.addImage(o2)
            }
            if (typeof this.options.background == "string") {
                var r2 = t2.querySelectorAll(this.options.background);
                for (n2 = 0; n2 < r2.length; n2++) {
                    var s2 = r2[n2];
                    this.addElementBackgroundImages(s2)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t2) {
        var e2 = getComputedStyle(t2);
        if (e2)
            for (var i2 = /url\((['"])?(.*?)\1\)/gi, n2 = i2.exec(e2.backgroundImage); n2 !== null;) {
                var o2 = n2 && n2[2];
                o2 && this.addBackground(o2, t2), n2 = i2.exec(e2.backgroundImage)
            }
    }, o.prototype.addImage = function(t2) {
        var e2 = new r(t2);
        this.images.push(e2)
    }, o.prototype.addBackground = function(t2, e2) {
        var i2 = new s(t2, e2);
        this.images.push(i2)
    }, o.prototype.check = function() {
        function t2(t3, i2, n2) {
            setTimeout(function() {
                e2.progress(t3, i2, n2)
            })
        }
        var e2 = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e3) {
            e3.once("progress", t2), e3.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t2, e2, i2) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t2.isLoaded, this.emitEvent("progress", [this, t2, e2]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t2), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i2, t2, e2)
    }, o.prototype.complete = function() {
        var t2 = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t2, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e2 = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e2](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t2 = this.getIsImageComplete();
        return t2 ? void this.confirm(this.img.naturalWidth !== 0, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth !== void 0
    }, r.prototype.confirm = function(t2, e2) {
        this.isLoaded = t2, this.emitEvent("progress", [this, this.img, e2])
    }, r.prototype.handleEvent = function(t2) {
        var e2 = "on" + t2.type;
        this[e2] && this[e2](t2)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t2 = this.getIsImageComplete();
        t2 && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t2, e2) {
        this.isLoaded = t2, this.emitEvent("progress", [this, this.element, e2])
    }, o.makeJQueryPlugin = function(e2) {
        e2 = e2 || t.jQuery, e2 && (h = e2, h.fn.imagesLoaded = function(t2, e3) {
            var i2 = new o(this, t2, e3);
            return i2.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
}), window.theme = window.theme || {}, theme.FeaturedCollections = function() {
    function FeaturedCollections(container) {
        var $container = this.$container = $(container);
        timber.cacheSelectors(), timber.resizeElements($container), $(window).resize(function() {
            timber.resizeElements($container)
        })
    }
    return FeaturedCollections
}(), window.theme = window.theme || {}, theme.CollectionRows = function() {
    function CollectionRows(container) {
        var $container = this.$container = $(container),
            id = this.id = $container.attr("data-section-id");
        timber.cacheSelectors(), timber.resizeElements($container, id), $(window).resize(function() {
            timber.resizeElements($container, id)
        })
    }
    return CollectionRows
}(), window.theme = window.theme || {}, theme.Collection = function() {
    function Collection(container) {
        var $container = this.$container = $(container),
            id = this.id = $container.attr("data-section-id");
        timber.cacheSelectors(), timber.resizeElements($container, id), $(window).resize(function() {
            timber.resizeElements($container, id)
        })
    }
    return Collection
}(), window.theme = window.theme || {}, theme.HeaderSection = function() {
    function Header() {
        timber.cacheSelectors(), timber.toggleMenu(), $(window).on("load", timber.responsiveNav).resize()
    }
    return Header
}(), window.theme = window.theme || {}, theme.ListCollections = function() {
    function ListCollections(container) {
        var $container = this.$container = $(container);
        timber.cacheSelectors(), timber.resizeElements($container), $(window).resize(function() {
            timber.resizeElements($container)
        })
    }
    return ListCollections
}(), theme.Maps = function() {
    var config = {
            zoom: 14
        },
        apiStatus = null,
        mapsToLoad = [];

    function Map(container) {
        theme.$currentMapContainer = this.$container = $(container);
        var key = this.$container.data("api-key");
        if (!(typeof key != "string" || key === ""))
            if (apiStatus === "loaded") {
                var self = this,
                    $script = $('script[src*="' + key + '&"]');
                $script.length === 0 ? $.getScript("https://maps.googleapis.com/maps/api/js?key=" + key).then(function() {
                    apiStatus = "loaded", self.createMap()
                }) : this.createMap()
            } else mapsToLoad.push(this), apiStatus !== "loading" && (apiStatus = "loading", typeof window.google == "undefined" && $.getScript("https://maps.googleapis.com/maps/api/js?key=" + key).then(function() {
                apiStatus = "loaded", initAllMaps()
            }))
    }

    function initAllMaps() {
        $.each(mapsToLoad, function(index, instance) {
            instance.createMap()
        })
    }

    function geolocate($map) {
        var deferred = $.Deferred(),
            geocoder = new google.maps.Geocoder,
            address = $map.data("address-setting");
        return geocoder.geocode({
            address: address
        }, function(results, status2) {
            status2 !== google.maps.GeocoderStatus.OK && deferred.reject(status2), deferred.resolve(results)
        }), deferred
    }
    return Map.prototype = _.assignIn({}, Map.prototype, {
        createMap: function() {
            var $map = this.$container.find(".map-section__container");
            return geolocate($map).then(function(results) {
                var mapOptions = {
                        zoom: config.zoom,
                        styles: config.styles,
                        center: results[0].geometry.location,
                        draggable: !1,
                        clickableIcons: !1,
                        scrollwheel: !1,
                        disableDoubleClickZoom: !0,
                        disableDefaultUI: !0
                    },
                    map = this.map = new google.maps.Map($map[0], mapOptions),
                    center = this.center = map.getCenter(),
                    marker = new google.maps.Marker({
                        map: map,
                        position: center
                    });
                google.maps.event.addDomListener(window, "resize", function() {
                    google.maps.event.trigger(map, "resize"), map.setCenter(center)
                })
            }.bind(this)).fail(function() {
                var errorMessage;
                switch (status) {
                    case "ZERO_RESULTS":
                        errorMessage = theme.strings.map.addressNoResults;
                        break;
                    case "OVER_QUERY_LIMIT":
                        errorMessage = theme.strings.map.addressQueryLimit;
                        break;
                    default:
                        errorMessage = theme.strings.map.addressError;
                        break
                }
                if (Shopify.designMode) {
                    var $mapContainer = $map.parents(".map-section");
                    $mapContainer.addClass("page-width map-section--load-error"), $mapContainer.find(".map-section__content-wrapper").remove(), $mapContainer.find(".map-section__wrapper").html('<div class="errors text-center" style="width: 100%;">' + errorMessage + "</div>")
                }
            })
        },
        onUnload: function() {
            typeof window.google != "undefined" && google.maps.event.clearListeners(this.map, "resize")
        }
    }), Map
}();

function gm_authFailure() {
    Shopify.designMode && (theme.$currentMapContainer.addClass("page-width map-section--load-error"), theme.$currentMapContainer.find(".map-section__content-wrapper").remove(), theme.$currentMapContainer.find(".map-section__wrapper").html('<div class="errors text-center" style="width: 100%;">' + theme.strings.map.authError + "</div>"))
}
theme.Product = function() {
    var defaults = {
        selectors: {
            addToCart: "#addToCart",
            productPrice: "#productPrice",
            comparePrice: "#comparePrice",
            addToCartText: "#addToCartText",
            quantityElements: ".quantity-selector, label + .js-qty",
            optionSelector: "productSelect"
        }
    };

    function Product(container) {
        var $container = this.$container = $(container),
            sectionId = this.sectionId = $container.attr("data-section-id");
        this.settings = $.extend({}, defaults, {
            sectionId: sectionId,
            enableHistoryState: !0,
            showComparePrice: $container.attr("data-show-compare-at-price"),
            ajaxCartMethod: $container.attr("data-ajax-cart-method"),
            stockSetting: $container.attr("data-stock"),
            incomingMessage: $container.attr("data-incoming-transfer"),
            selectors: {
                unitPriceContainer: "[data-unit-price-container]",
                unitPrice: "[data-unit-price]",
                unitPriceBaseUnit: "[data-unit-price-base-unit]",
                priceContainer: "[data-price]",
                originalSelectorId: "productSelect-" + sectionId,
                $addToCart: $("#addToCart-" + sectionId),
                $SKU: $(".variant-sku", this.$container),
                $productPrice: $("#productPrice-" + sectionId),
                $comparePrice: $("#comparePrice-" + sectionId),
                $addToCartText: $("#addToCartText-" + sectionId),
                $quantityElements: $("#quantity-selector-" + sectionId),
                $variantQuantity: $("#variantQuantity-" + sectionId),
                $variantQuantityMessage: $("#variantQuantity-" + sectionId + "__message"),
                $variantIncoming: $("#variantIncoming-" + sectionId),
                $variantIncomingMessage: $("#variantIncoming-" + sectionId + "__message"),
                $productImageContainer: $("#productPhotoContainer-" + sectionId),
                $productImageWrapper: $('[id^="productPhotoWrapper-' + sectionId + '"]'),
                $productImage: $('[id^="productPhotoImg-' + sectionId + '"]'),
                $productFullDetails: $(".full-details", this.$container),
                $thumbImages: $("#productThumbs-" + sectionId).find("a.product-photo-thumb"),
                $shopifyPaymentButton: ".shopify-payment-button"
            }
        }), $("body").hasClass("template-index") && (this.settings.enableHistoryState = !1), $("#ProductJson-" + sectionId).html() && (this.zoomEnabled = $container.attr("data-zoom-enabled"), this.productSingleObject = JSON.parse($("#ProductJson-" + sectionId).html()), this.addVariantInfo(), this.init(), Shopify.Image.preload(this.productSingleObject.images), this.settings.ajaxCartMethod != "page" && ajaxifyShopify.init({
            method: "page",
            wrapperClass: "wrapper",
            formSelector: "[data-product-form]",
            addToCartSelector: "#addToCart-" + sectionId,
            cartCountSelector: ".cart-count",
            toggleCartButton: ".cart-toggle",
            useCartTemplate: !0,
            btnClass: "btn",
            moneyFormat: moneyFormat,
            disableAjaxCart: !1,
            enableQtySelectors: !0
        }))
    }
    Product.prototype = _.assignIn({}, Product.prototype, {
        init: function() {
            this.initProductVariant(), this.addQuantityButtons(), this.productImageSwitch(), this.initBreakpoints(), timber.vars.isLargeBp && this.zoomEnabled && productImageZoom()
        },
        onUnload: function() {
            this.$container.off(this.settings.sectionId)
        },
        addVariantInfo: function() {
            if (this.productSingleObject && !(this.settings.stockSetting === "false" && this.settings.incomingMessage === "false"))
                for (var variantInfo = JSON.parse($("#VariantJson-" + this.settings.sectionId, this.$container).html()), i = 0; i < variantInfo.length; i++) $.extend(this.productSingleObject.variants[i], variantInfo[i])
        },
        addQuantityButtons: function() {
            this.settings.selectors.$quantityElements && this.settings.selectors.$quantityElements.show()
        },
        qtySelectors: function() {
            validateQty = function(qty) {
                return parseFloat(qty) == parseInt(qty) && !isNaN(qty) ? qty : 1
            };
            var numInputs = $('input[type="number"]', this.$container),
                qtyMin = 0;
            numInputs.length && (numInputs.each(function() {
                var el = $(this),
                    currentQty = parseInt(el.val()),
                    inputName = el.attr("name"),
                    inputId = el.attr("id"),
                    itemAdd = currentQty + 1,
                    itemMinus = currentQty - 1,
                    itemQty = currentQty,
                    source = $("#jsQty").html(),
                    template = Handlebars.compile(source),
                    data = {
                        key: el.data("id"),
                        itemQty: itemQty,
                        itemAdd: itemAdd,
                        itemMinus: itemMinus,
                        inputName: inputName,
                        inputId: inputId
                    };
                el.after(template(data)).remove()
            }), $(".js--qty-adjuster", this.$container).on("click", function() {
                var el = $(this),
                    id = el.data("id"),
                    qtySelector = el.siblings(".js--num"),
                    qty = parseInt(qtySelector.val()),
                    qty = validateQty(qty);
                qtyMin = timber.cache.$body.hasClass("template-product") ? 1 : qtyMin, el.hasClass("js--add") ? qty = qty + 1 : qty = qty <= qtyMin ? qtyMin : qty - 1, qtySelector.val(qty)
            }))
        },
        initBreakpoints: function() {
            var self = this,
                $container = self.$container;
            self.zoomType = $container.data("zoom-enabled"), enquire.register(timber.vars.mediaQueryLarge, {
                match: function() {
                    timber.vars.isLargeBp = !0, self.zoomType && productImageZoom()
                },
                unmatch: function() {
                    timber.vars.isLargeBp = !1, self.zoomType && self.settings.selectors.$productImage.length && (self.settings.selectors.$productImage.off(), self.settings.selectors.$productImageWrapper.trigger("zoom.destroy"))
                }
            })
        },
        productImageSwitch: function() {
            if (this.settings.selectors.$thumbImages.length) {
                var self = this;
                self.settings.selectors.$thumbImages.on("click", function(evt) {
                    evt.preventDefault();
                    var newImageId = $(this).attr("data-image-id");
                    self.switchImage(newImageId)
                })
            }
        },
        switchImage: function(imageId) {
            var $newImage = this.settings.selectors.$productImageWrapper.filter('[data-image-id="' + imageId + '"]'),
                $otherImages = this.settings.selectors.$productImageWrapper.not('[data-image-id="' + imageId + '"]');
            $newImage.removeClass("hide"), $otherImages.addClass("hide"), $newImage.find("img").attr("data-zoom") && timber.vars.isLargeBp && productImageZoom()
        },
        initProductVariant: function() {
            if (this.productSingleObject) {
                var self = this;
                this.optionSelector = new Shopify.OptionSelectors(self.settings.selectors.originalSelectorId, {
                    selectorClass: self.settings.selectors.$optionSelectorClass,
                    product: self.productSingleObject,
                    onVariantSelected: self.productVariantCallback.bind(self),
                    enableHistoryState: self.settings.enableHistoryState,
                    settings: self.settings
                }), this.simplifyVariantLabels(this.productSingleObject)
            }
        },
        simplifyVariantLabels: function(productObject) {
            productObject.variants.length === 1 && productObject.options.length === 1 && productObject.options[0].toLowerCase().indexOf("title") >= 0 && productObject.variants[0].title.toLowerCase().indexOf("default title") >= 0 && $(".selector-wrapper", this.$container).hide()
        },
        productVariantCallback: function(variant) {
            var self = this;
            if (variant) {
                var $priceContainer = $(this.settings.selectors.priceContainer, this.$container),
                    $unitPriceContainer = $(this.settings.selectors.unitPriceContainer, $priceContainer);
                if ($unitPriceContainer.removeClass("product-price-unit--available"), variant.unit_price_measurement) {
                    var $unitPrice = $(this.settings.selectors.unitPrice, $priceContainer),
                        $unitPriceBaseUnit = $(this.settings.selectors.unitPriceBaseUnit, $priceContainer);
                    $unitPrice.text(Shopify.formatMoney(variant.unit_price, moneyFormat)), $unitPriceBaseUnit.text(this.getBaseUnit(variant)), $unitPriceContainer.addClass("product-price-unit--available")
                }
                if (variant.featured_image) {
                    var newImg = variant.featured_image,
                        $newImage = this.settings.selectors.$productImageWrapper.filter('[data-image-id="' + newImg.id + '"]'),
                        $otherImages = this.settings.selectors.$productImageWrapper.not('[data-image-id="' + newImg.id + '"]');
                    $newImage.removeClass("hide"), $otherImages.addClass("hide")
                }
                if (variant.available) {
                    this.settings.selectors.$addToCart.removeClass("disabled").prop("disabled", !1), this.settings.selectors.$addToCartText.html("Add to Cart"), $(this.settings.selectors.$shopifyPaymentButton, this.$container).show(), this.settings.selectors.$variantQuantity.removeClass("is-visible"), this.settings.selectors.$variantIncoming.removeClass("is-visible");
                    var $link = this.settings.selectors.$productFullDetails;
                    $link.length && $link.attr("href", updateUrlParameter($link.attr("href"), "variant", variant.id)), variant.inventory_management && variant.inventory_quantity < 10 && variant.inventory_quantity > 0 && this.settings.stockSetting == "true" && (this.settings.selectors.$variantQuantityMessage.html(theme.strings.product.only_left.replace("1", variant.inventory_quantity)), this.settings.selectors.$variantQuantity.addClass("is-visible")), variant.inventory_quantity <= 0 && variant.incoming != null && variant.next_incoming_date != null && (this.settings.selectors.$variantIncomingMessage.html(theme.strings.product.will_be_in_stock_after.replace("[date]", variant.next_incoming_date)), this.settings.selectors.$variantIncoming.addClass("is-visible"))
                } else this.settings.selectors.$addToCart.addClass("disabled").prop("disabled", !0), this.settings.selectors.$addToCartText.html("Sold Out"), $(this.settings.selectors.$shopifyPaymentButton, this.$container).hide(), this.settings.selectors.$variantQuantity.removeClass("is-visible"), this.settings.selectors.$variantIncoming.removeClass("is-visible"), variant.inventory_management && variant.incoming && this.settings.incomingMessage == "true" && variant.incoming != null && variant.next_incoming_date != null && this.settings.selectors.$variantIncoming.html(theme.strings.product.will_be_in_stock_after.replace("[date]", variant.next_incoming_date)).addClass("is-visible"), this.settings.selectors.$quantityElements.hide();
                var customPrice = timber.formatMoney(Shopify.formatMoney(variant.price, moneyFormat)),
                    a11yPrice = Shopify.formatMoney(variant.price, moneyFormat),
                    customPriceFormat = ' <span aria-hidden="true">' + customPrice + "</span>";
                if (customPriceFormat += ' <span class="visually-hidden">' + a11yPrice + "</span>", this.settings.selectors.$SKU.html(variant.sku), this.settings.showComparePrice == "true" && variant.compare_at_price > variant.price) {
                    var comparePrice = timber.formatMoney(Shopify.formatMoney(variant.compare_at_price, moneyFormat)),
                        a11yComparePrice = Shopify.formatMoney(variant.compare_at_price, moneyFormat);
                    customPriceFormat = ' <span aria-hidden="true">' + customPrice + "</span>", customPriceFormat += ' <span aria-hidden="true"><small><s>' + comparePrice + "</s></small></span>", customPriceFormat += ' <span class="visually-hidden"><span class="visually-hidden">Regular price</span> ' + a11yComparePrice + "</span>", customPriceFormat += ' <span class="visually-hidden"><span class="visually-hidden">Sale price</span> ' + a11yPrice + "</span>"
                }
                if (this.settings.selectors.$productPrice.html(customPriceFormat), variant.compare_at_price > variant.price) {
                    var priceSaving = timber.formatSaleTag(Shopify.formatMoney(variant.compare_at_price - variant.price, moneyFormat));
                    this.settings.selectors.$comparePrice.html("Save [$]".replace("[$]", priceSaving)).show()
                } else this.settings.selectors.$comparePrice.hide()
            } else this.settings.selectors.$addToCart.addClass("disabled").prop("disabled", !0), this.settings.selectors.$addToCartText.html(theme.strings.product.unavailable), this.settings.selectors.$variantQuantity.removeClass("is-visible"), this.settings.selectors.$quantityElements.hide(), $(this.settings.selectors.$shopifyPaymentButton, this.$container).hide()
        },
        getBaseUnit: function(variant) {
            return variant.unit_price_measurement.reference_value === 1 ? variant.unit_price_measurement.reference_unit : variant.unit_price_measurement.reference_value + variant.unit_price_measurement.reference_unit
        }
    });

    function updateUrlParameter(url, key, value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i"),
            separator = url.indexOf("?") === -1 ? "?" : "&";
        return url.match(re) ? url.replace(re, "$1" + key + "=" + value + "$2") : url + separator + key + "=" + value
    }

    function productImageZoom() {
        var $productImageWrapper = $(".product__image-wrapper");
        if (timber.vars.isLargeBp) {
            if (!$productImageWrapper.length || timber.cache.$html.hasClass("supports-touch")) return;
            $productImageWrapper.trigger("zoom.destroy"), $productImageWrapper.each(function() {
                $(this).find("img").attr("data-zoom") && $(this).addClass("image-zoom").zoom({
                    url: $(this).find("img").attr("data-zoom"),
                    onZoomIn: function() {
                        $(this).prev("img").hide()
                    },
                    onZoomOut: function() {
                        $(this).css("opacity", "0"), $(this).prev("img").show()
                    }
                })
            })
        }
    }
    return Product
}(), window.theme = window.theme || {}, theme.Search = function() {
    function Search(container) {
        var $container = this.$container = $(container);
        timber.cacheSelectors(), timber.resizeElements($container), $(window).resize(function() {
            timber.resizeElements($container)
        })
    }
    return Search
}(), theme.Slideshow = function(el) {
    this.cache = {
        $slider: $(el),
        sliderArgs: {
            animation: "slide",
            animationSpeed: 500,
            pauseOnHover: !0,
            keyboard: !1,
            slideshow: $(el).data("slider-home-auto"),
            slideshowSpeed: $(el).data("slider-home-rate"),
            smoothHeight: !0,
            before: function(slider) {
                $(slider).resize(), $(slider).find(".slide").not(".flex-active-slide").removeClass("slide-hide")
            },
            after: function(slider) {
                $(slider).find(".slide").not(".flex-active-slide").addClass("slide-hide"), $(slider).resize()
            },
            start: function(slider) {
                $(slider).find(".slide").not(".flex-active-slide").addClass("slide-hide"), $(slider).find(".slide").not(".clone").length === 1 && $(slider).find(".flex-direction-nav").remove(), $(window).trigger("resize"), slider.addClass("loaded"), $("#slider").data("loaded-index") !== void 0 && $("#slider").flexslider($("#slider").data("loaded-index"))
            }
        }
    }, this.cache.$slider.find("li").length === 1 && (this.cache.sliderArgs.touch = !1), this.cache.$slider.flexslider(this.cache.sliderArgs)
}, theme.slideshows = theme.slideshows || {}, theme.SlideshowSection = function() {
    function SlideshowSection(container) {
        var $container = this.$container = $(container),
            id = $container.attr("data-section-id"),
            slideshow = this.slideshow = "#heroSlider--" + id,
            numberOfSlides = $(slideshow).find("li").length;
        numberOfSlides <= 0 || (theme.slideshows[slideshow] = new theme.Slideshow(slideshow))
    }
    return SlideshowSection
}(), theme.SlideshowSection.prototype = _.assignIn({}, theme.SlideshowSection.prototype, {
    onUnload: function() {
        delete theme.slideshows[this.slideshow]
    },
    onBlockSelect: function(evt) {
        var $slideshow = $(this.slideshow),
            $slide = $("#slide--" + evt.detail.blockId + ":not(.clone)"),
            slideIndex = $slide.data("flexslider-index"),
            $slideImg = $slide.find("img") || $slide.find("svg");
        $slide.imagesLoaded($slideImg, function() {
            $slideshow.flexslider(slideIndex), $slideshow.resize(), $slideshow.flexslider("pause")
        })
    },
    onBlockDeselect: function() {
        $(this.slideshow).flexslider("play")
    }
}), $(document).ready(function() {
    var sections = new theme.Sections;
    sections.register("collections-list-template", theme.FeaturedCollections), sections.register("collection-row-section", theme.CollectionRows), sections.register("collection-template", theme.Collection), sections.register("header-section", theme.HeaderSection), sections.register("list-collections-template", theme.ListCollections), sections.register("map-section", theme.Maps), sections.register("product-template", theme.Product), sections.register("search-template", theme.Search), sections.register("slideshow-section", theme.SlideshowSection)
});
//# sourceMappingURL=/cdn/shop/t/4/assets/theme.js.map?v=104651861431369677821630166894