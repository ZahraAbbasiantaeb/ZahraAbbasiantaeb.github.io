 !(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                for (var i in t)
                    n.d(
                        r,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 101));
})([
    function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
    },
    function (t, e) {
        var n = Array.isArray;
        t.exports = n;
    },
    function (t, e, n) {
        "use strict";
        var r = {},
            i = {},
            o = [],
            a = window.Webflow || [],
            u = window.jQuery,
            c = u(window),
            s = u(document),
            f = u.isFunction,
            l = (r._ = n(103)),
            d = (r.tram = n(54) && u.tram),
            p = !1,
            v = !1;
        function E(t) {
            r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)),
                f(t.destroy) && c.on("__wf_destroy", t.destroy),
                t.ready &&
                    f(t.ready) &&
                    (function (t) {
                        if (p) return void t.ready();
                        if (l.contains(o, t.ready)) return;
                        o.push(t.ready);
                    })(t);
        }
        function h(t) {
            f(t.design) && c.off("__wf_design", t.design),
                f(t.preview) && c.off("__wf_preview", t.preview),
                f(t.destroy) && c.off("__wf_destroy", t.destroy),
                t.ready &&
                    f(t.ready) &&
                    (function (t) {
                        o = l.filter(o, function (e) {
                            return e !== t.ready;
                        });
                    })(t);
        }
        (d.config.hideBackface = !1),
            (d.config.keepInherited = !0),
            (r.define = function (t, e, n) {
                i[t] && h(i[t]);
                var r = (i[t] = e(u, l, n) || {});
                return E(r), r;
            }),
            (r.require = function (t) {
                return i[t];
            }),
            (r.push = function (t) {
                p ? f(t) && t() : a.push(t);
            }),
            (r.env = function (t) {
                var e = window.__wf_design,
                    n = void 0 !== e;
                return t
                    ? "design" === t
                        ? n && e
                        : "preview" === t
                        ? n && !e
                        : "slug" === t
                        ? n && window.__wf_slug
                        : "editor" === t
                        ? window.WebflowEditor
                        : "test" === t
                        ? window.__wf_test
                        : "frame" === t
                        ? window !== window.top
                        : void 0
                    : n;
            });
        var _,
            g = navigator.userAgent.toLowerCase(),
            I = (r.env.touch = "ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
            T = (r.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10)),
            y = (r.env.ios = /(ipod|iphone|ipad)/.test(g));
        (r.env.safari = /safari/.test(g) && !T && !y),
            I &&
                s.on("touchstart mousedown", function (t) {
                    _ = t.target;
                }),
            (r.validClick = I
                ? function (t) {
                      return t === _ || u.contains(t, _);
                  }
                : function () {
                      return !0;
                  });
        var m,
            O = "resize.webflow orientationchange.webflow load.webflow";
        function A(t, e) {
            var n = [],
                r = {};
            return (
                (r.up = l.throttle(function (t) {
                    l.each(n, function (e) {
                        e(t);
                    });
                })),
                t && e && t.on(e, r.up),
                (r.on = function (t) {
                    "function" == typeof t && (l.contains(n, t) || n.push(t));
                }),
                (r.off = function (t) {
                    n = arguments.length
                        ? l.filter(n, function (e) {
                              return e !== t;
                          })
                        : [];
                }),
                r
            );
        }
        function S(t) {
            f(t) && t();
        }
        function b() {
            m && (m.reject(), c.off("load", m.resolve)), (m = new u.Deferred()), c.on("load", m.resolve);
        }
        (r.resize = A(c, O)),
            (r.scroll = A(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow")),
            (r.redraw = A()),
            (r.location = function (t) {
                window.location = t;
            }),
            r.env() && (r.location = function () {}),
            (r.ready = function () {
                (p = !0), v ? ((v = !1), l.each(i, E)) : l.each(o, S), l.each(a, S), r.resize.up();
            }),
            (r.load = function (t) {
                m.then(t);
            }),
            (r.destroy = function (t) {
                (t = t || {}), (v = !0), c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, h), r.resize.off(), r.scroll.off(), r.redraw.off(), (o = []), (a = []), "pending" === m.state() && b();
            }),
            u(r.ready),
            b(),
            (t.exports = window.Webflow = r);
    },
    function (t, e, n) {
        "use strict";
        var r = n(16);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2Interactions = e.IX2Events = e.IX2ElementsReducer = e.IX2EngineConstants = e.IX2EngineItemTypes = e.IX2EngineEventTypes = e.IX2EngineActionTypes = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0);
        var i = r(n(31));
        e.IX2BrowserSupport = i;
        var o = r(n(84));
        e.IX2Easings = o;
        var a = r(n(86));
        e.IX2EasingUtils = a;
        var u = r(n(88));
        e.IX2EngineActionTypes = u;
        var c = r(n(89));
        e.IX2EngineEventTypes = c;
        var s = r(n(48));
        e.IX2EngineItemTypes = s;
        var f = r(n(49));
        e.IX2EngineConstants = f;
        var l = r(n(189));
        e.IX2ElementsReducer = l;
        var d = r(n(190));
        e.IX2Events = d;
        var p = r(n(191));
        e.IX2Interactions = p;
        var v = r(n(90));
        e.IX2VanillaPlugins = v;
        var E = r(n(193));
        e.IX2VanillaUtils = E;
    },
    function (t, e, n) {
        var r = n(66),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    function (t, e, n) {
        var r = n(121),
            i = n(175),
            o = n(45),
            a = n(1),
            u = n(182);
        t.exports = function (t) {
            return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? (a(t) ? i(t[0], t[1]) : r(t)) : u(t);
        };
    },
    function (t, e, n) {
        var r = n(133),
            i = n(138);
        t.exports = function (t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return null != t && "object" == typeof t;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(134),
            o = n(135),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? (void 0 === t ? u : a) : c && c in Object(t) ? i(t) : o(t);
        };
    },
    function (t, e, n) {
        var r = n(65),
            i = n(39);
        t.exports = function (t) {
            return null != t && i(t.length) && !r(t);
        };
    },
    function (t, e, n) {
        var r = n(4).Symbol;
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(25),
            i = 1 / 0;
        t.exports = function (t) {
            if ("string" == typeof t || r(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -i ? "-0" : e;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                      return typeof t;
                  }
                : function (t) {
                      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                  };
        (e.clone = c),
            (e.addLast = l),
            (e.addFirst = d),
            (e.removeLast = p),
            (e.removeFirst = v),
            (e.insert = E),
            (e.removeAt = h),
            (e.replaceAt = _),
            (e.getIn = g),
            (e.set = I),
            (e.setIn = T),
            (e.update = y),
            (e.updateIn = m),
            (e.merge = O),
            (e.mergeDeep = A),
            (e.mergeIn = S),
            (e.omit = b),
            (e.addDefaults = w);
        /*!
         * Timm
         *
         * Immutability helpers with fast reads and acceptable writes.
         *
         * @copyright Guillermo Grau Panea 2016
         * @license MIT
         */
        var i = "INVALID_ARGS";
        function o(t) {
            throw new Error(t);
        }
        function a(t) {
            var e = Object.keys(t);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
        }
        var u = {}.hasOwnProperty;
        function c(t) {
            if (Array.isArray(t)) return t.slice();
            for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                n[i] = t[i];
            }
            return n;
        }
        function s(t, e, n) {
            var r = n;
            null == r && o(i);
            for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
            for (var v = 0; v < d.length; v++) {
                var E = d[v];
                if (null != E) {
                    var h = a(E);
                    if (h.length)
                        for (var _ = 0; _ <= h.length; _++) {
                            var g = h[_];
                            if (!t || void 0 === r[g]) {
                                var I = E[g];
                                e && f(r[g]) && f(I) && (I = s(t, e, r[g], I)), void 0 !== I && I !== r[g] && (u || ((u = !0), (r = c(r))), (r[g] = I));
                            }
                        }
                }
            }
            return r;
        }
        function f(t) {
            var e = void 0 === t ? "undefined" : r(t);
            return null != t && ("object" === e || "function" === e);
        }
        function l(t, e) {
            return Array.isArray(e) ? t.concat(e) : t.concat([e]);
        }
        function d(t, e) {
            return Array.isArray(e) ? e.concat(t) : [e].concat(t);
        }
        function p(t) {
            return t.length ? t.slice(0, t.length - 1) : t;
        }
        function v(t) {
            return t.length ? t.slice(1) : t;
        }
        function E(t, e, n) {
            return t
                .slice(0, e)
                .concat(Array.isArray(n) ? n : [n])
                .concat(t.slice(e));
        }
        function h(t, e) {
            return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
        }
        function _(t, e, n) {
            if (t[e] === n) return t;
            for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
            return (i[e] = n), i;
        }
        function g(t, e) {
            if ((!Array.isArray(e) && o(i), null != t)) {
                for (var n = t, r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (void 0 === (n = null != n ? n[a] : void 0)) return n;
                }
                return n;
            }
        }
        function I(t, e, n) {
            var r = null == t ? ("number" == typeof e ? [] : {}) : t;
            if (r[e] === n) return r;
            var i = c(r);
            return (i[e] = n), i;
        }
        function T(t, e, n) {
            return e.length
                ? (function t(e, n, r, i) {
                      var o = void 0,
                          a = n[i];
                      o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
                      return I(e, a, o);
                  })(t, e, n, 0)
                : n;
        }
        function y(t, e, n) {
            return I(t, e, n(null == t ? void 0 : t[e]));
        }
        function m(t, e, n) {
            return T(t, e, n(g(t, e)));
        }
        function O(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o);
        }
        function A(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o);
        }
        function S(t, e, n, r, i, o, a) {
            var u = g(t, e);
            null == u && (u = {});
            for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
            return T(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a));
        }
        function b(t, e) {
            for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
                if (u.call(t, n[i])) {
                    r = !0;
                    break;
                }
            if (!r) return t;
            for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
                var f = c[s];
                n.indexOf(f) >= 0 || (o[f] = t[f]);
            }
            return o;
        }
        function w(t, e, n, r, i, o) {
            for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
            return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o);
        }
        var R = { clone: c, addLast: l, addFirst: d, removeLast: p, removeFirst: v, insert: E, removeAt: h, replaceAt: _, getIn: g, set: I, setIn: T, update: y, updateIn: m, merge: O, mergeDeep: A, mergeIn: S, omit: b, addDefaults: w };
        e.default = R;
    },
    function (t, e) {
        function n(t) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        function r(e) {
            return (
                "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                    ? (t.exports = r = function (t) {
                          return n(t);
                      })
                    : (t.exports = r = function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t);
                      }),
                r(e)
            );
        }
        t.exports = r;
    },
    function (t, e, n) {
        "use strict";
        var r = n(27);
        function i(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var o = window.jQuery,
            a = {},
            u = {
                reset: function (t, e) {
                    r.triggers.reset(t, e);
                },
                intro: function (t, e) {
                    r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
                },
                outro: function (t, e) {
                    r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
                },
            };
        (a.triggers = {}), (a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }), o.extend(a.triggers, u), (t.exports = a);
    },
    function (t, e) {
        t.exports = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
                    }
            return (e.default = t), e;
        };
    },
    function (t, e, n) {
        var r = n(123),
            i = n(124),
            o = n(125),
            a = n(126),
            u = n(127);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e, n) {
        var r = n(32);
        t.exports = function (t, e) {
            for (var n = t.length; n--; ) if (r(t[n][0], e)) return n;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(7)(Object, "create");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(147);
        t.exports = function (t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
    },
    function (t, e, n) {
        var r = n(73),
            i = n(40),
            o = n(10);
        t.exports = function (t) {
            return o(t) ? r(t) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(165),
            i = n(8),
            o = Object.prototype,
            a = o.hasOwnProperty,
            u = o.propertyIsEnumerable,
            c = r(
                (function () {
                    return arguments;
                })()
            )
                ? r
                : function (t) {
                      return i(t) && a.call(t, "callee") && !u.call(t, "callee");
                  };
        t.exports = c;
    },
    function (t, e, n) {
        var r = n(43);
        t.exports = function (t, e, n) {
            var i = null == t ? void 0 : r(t, e);
            return void 0 === i ? n : i;
        };
    },
    function (t, e, n) {
        var r = n(1),
            i = n(44),
            o = n(176),
            a = n(79);
        t.exports = function (t, e) {
            return r(t) ? t : i(t, e) ? [t] : o(a(t));
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(8),
            o = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || (i(t) && r(t) == o);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = window.jQuery,
            i = {},
            o = [],
            a = {
                reset: function (t, e) {
                    e.__wf_intro = null;
                },
                intro: function (t, e) {
                    e.__wf_intro || ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
                },
                outro: function (t, e) {
                    e.__wf_intro && ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
                },
            };
        (i.triggers = {}),
            (i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
            (i.init = function () {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n[0](0, n[1]);
                }
                (o = []), r.extend(i.triggers, a);
            }),
            (i.async = function () {
                for (var t in a) {
                    var e = a[t];
                    a.hasOwnProperty(t) &&
                        (i.triggers[t] = function (t, n) {
                            o.push([e, n]);
                        });
                }
            }),
            i.async(),
            (t.exports = i);
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "ActionTypes", function () {
                return o;
            }),
            n.d(e, "default", function () {
                return a;
            });
        var r = n(56),
            i = n(116),
            o = { INIT: "@@redux/INIT" };
        function a(t, e, n) {
            var u;
            if (("function" == typeof e && void 0 === n && ((n = e), (e = void 0)), void 0 !== n)) {
                if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
                return n(a)(t, e);
            }
            if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
            var c = t,
                s = e,
                f = [],
                l = f,
                d = !1;
            function p() {
                l === f && (l = f.slice());
            }
            function v() {
                return s;
            }
            function E(t) {
                if ("function" != typeof t) throw new Error("Expected listener to be a function.");
                var e = !0;
                return (
                    p(),
                    l.push(t),
                    function () {
                        if (e) {
                            (e = !1), p();
                            var n = l.indexOf(t);
                            l.splice(n, 1);
                        }
                    }
                );
            }
            function h(t) {
                if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                    (d = !0), (s = c(s, t));
                } finally {
                    d = !1;
                }
                for (var e = (f = l), n = 0; n < e.length; n++) e[n]();
                return t;
            }
            return (
                h({ type: o.INIT }),
                ((u = {
                    dispatch: h,
                    subscribe: E,
                    getState: v,
                    replaceReducer: function (t) {
                        if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                        (c = t), h({ type: o.INIT });
                    },
                })[i.default] = function () {
                    var t,
                        e = E;
                    return (
                        ((t = {
                            subscribe: function (t) {
                                if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");
                                function n() {
                                    t.next && t.next(v());
                                }
                                return n(), { unsubscribe: e(n) };
                            },
                        })[i.default] = function () {
                            return this;
                        }),
                        t
                    );
                }),
                u
            );
        }
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            if (0 === e.length)
                return function (t) {
                    return t;
                };
            if (1 === e.length) return e[0];
            var r = e[e.length - 1],
                i = e.slice(0, -1);
            return function () {
                return i.reduceRight(function (t, e) {
                    return e(t);
                }, r.apply(void 0, arguments));
            };
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0);
        var i = r(n(62)),
            o = "undefined" != typeof window;
        e.IS_BROWSER_ENV = o;
        var a = function (t, e) {
            return o ? t() : e;
        };
        e.withBrowser = a;
        var u = a(function () {
            return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
                return t in Element.prototype;
            });
        });
        e.ELEMENT_MATCHES = u;
        var c = a(function () {
            var t = document.createElement("i"),
                e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (((t.style.display = i), t.style.display === i)) return i;
                }
                return "";
            } catch (t) {
                return "";
            }
        }, "flex");
        e.FLEX_PREFIXED = c;
        var s = a(function () {
            var t = document.createElement("i");
            if (null == t.style.transform)
                for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                    var i = e[r] + "Transform";
                    if (void 0 !== t.style[i]) return i;
                }
            return "transform";
        }, "transform");
        e.TRANSFORM_PREFIXED = s;
        var f = s.split("transform")[0],
            l = f ? f + "TransformStyle" : "transformStyle";
        e.TRANSFORM_STYLE_PREFIXED = l;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t === e || (t != t && e != e);
        };
    },
    function (t, e, n) {
        var r = n(7)(n(4), "Map");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(139),
            i = n(146),
            o = n(148),
            a = n(149),
            u = n(150);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r; ) t[i + n] = e[n];
            return t;
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(4),
                i = n(166),
                o = e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || i;
            t.exports = c;
        }.call(this, n(74)(t)));
    },
    function (t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
            var i = typeof t;
            return !!(e = null == e ? n : e) && ("number" == i || ("symbol" != i && r.test(t))) && t > -1 && t % 1 == 0 && t < e;
        };
    },
    function (t, e, n) {
        var r = n(167),
            i = n(168),
            o = n(169),
            a = o && o.isTypedArray,
            u = a ? i(a) : r;
        t.exports = u;
    },
    function (t, e) {
        var n = 9007199254740991;
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        };
    },
    function (t, e, n) {
        var r = n(41),
            i = n(170),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return i(t);
            var e = [];
            for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
            return e;
        };
    },
    function (t, e) {
        var n = Object.prototype;
        t.exports = function (t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || n);
        };
    },
    function (t, e, n) {
        var r = n(171),
            i = n(33),
            o = n(172),
            a = n(173),
            u = n(76),
            c = n(9),
            s = n(67),
            f = s(r),
            l = s(i),
            d = s(o),
            p = s(a),
            v = s(u),
            E = c;
        ((r && "[object DataView]" != E(new r(new ArrayBuffer(1)))) || (i && "[object Map]" != E(new i())) || (o && "[object Promise]" != E(o.resolve())) || (a && "[object Set]" != E(new a())) || (u && "[object WeakMap]" != E(new u()))) &&
            (E = function (t) {
                var e = c(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? s(n) : "";
                if (r)
                    switch (r) {
                        case f:
                            return "[object DataView]";
                        case l:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case p:
                            return "[object Set]";
                        case v:
                            return "[object WeakMap]";
                    }
                return e;
            }),
            (t.exports = E);
    },
    function (t, e, n) {
        var r = n(24),
            i = n(12);
        t.exports = function (t, e) {
            for (var n = 0, o = (e = r(e, t)).length; null != t && n < o; ) t = t[i(e[n++])];
            return n && n == o ? t : void 0;
        };
    },
    function (t, e, n) {
        var r = n(1),
            i = n(25),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        t.exports = function (t, e) {
            if (r(t)) return !1;
            var n = typeof t;
            return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || (null != e && t in Object(e));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return t;
        };
    },
    function (t, e, n) {
        var r = n(185);
        t.exports = function (t) {
            var e = r(t),
                n = e % 1;
            return e == e ? (n ? e - n : e) : 0;
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(25),
            o = NaN,
            a = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            f = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (i(t)) return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = c.test(t);
            return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.PLUGIN_LOTTIE = e.PLUGIN_LOTTIE_EFFECT = e.JELLO_EFFECT = e.RUBBER_BAND_EFFECT = e.FLIP_RIGHT_TO_LEFT_EFFECT = e.FLIP_LEFT_TO_RIGHT_EFFECT = e.BOUNCE_EFFECT = e.BLINK_EFFECT = e.DROP_EFFECT = e.PULSE_EFFECT = e.JIGGLE_EFFECT = e.FLIP_EFFECT = e.POP_EFFECT = e.FLY_EFFECT = e.SPIN_EFFECT = e.SHRINK_BIG_EFFECT = e.SHRINK_EFFECT = e.GROW_BIG_EFFECT = e.GROW_EFFECT = e.BLUR_EFFECT = e.SLIDE_EFFECT = e.FADE_EFFECT = e.OBJECT_VALUE = e.GENERAL_LOOP = e.GENERAL_STOP_ACTION = e.GENERAL_START_ACTION = e.GENERAL_CONTINUOUS_ACTION = e.GENERAL_DISPLAY = e.GENERAL_COMBO_CLASS = e.STYLE_TEXT_COLOR = e.STYLE_BORDER = e.STYLE_BACKGROUND_COLOR = e.STYLE_FILTER = e.STYLE_BOX_SHADOW = e.STYLE_SIZE = e.STYLE_OPACITY = e.TRANSFORM_SKEW = e.TRANSFORM_ROTATE = e.TRANSFORM_SCALE = e.TRANSFORM_MOVE = void 0);
        e.TRANSFORM_MOVE = "TRANSFORM_MOVE";
        e.TRANSFORM_SCALE = "TRANSFORM_SCALE";
        e.TRANSFORM_ROTATE = "TRANSFORM_ROTATE";
        e.TRANSFORM_SKEW = "TRANSFORM_SKEW";
        e.STYLE_OPACITY = "STYLE_OPACITY";
        e.STYLE_SIZE = "STYLE_SIZE";
        e.STYLE_BOX_SHADOW = "STYLE_BOX_SHADOW";
        e.STYLE_FILTER = "STYLE_FILTER";
        e.STYLE_BACKGROUND_COLOR = "STYLE_BACKGROUND_COLOR";
        e.STYLE_BORDER = "STYLE_BORDER";
        e.STYLE_TEXT_COLOR = "STYLE_TEXT_COLOR";
        e.GENERAL_COMBO_CLASS = "GENERAL_COMBO_CLASS";
        e.GENERAL_DISPLAY = "GENERAL_DISPLAY";
        e.GENERAL_CONTINUOUS_ACTION = "GENERAL_CONTINUOUS_ACTION";
        e.GENERAL_START_ACTION = "GENERAL_START_ACTION";
        e.GENERAL_STOP_ACTION = "GENERAL_STOP_ACTION";
        e.GENERAL_LOOP = "GENERAL_LOOP";
        e.OBJECT_VALUE = "OBJECT_VALUE";
        e.FADE_EFFECT = "FADE_EFFECT";
        e.SLIDE_EFFECT = "SLIDE_EFFECT";
        e.BLUR_EFFECT = "BLUR_EFFECT";
        e.GROW_EFFECT = "GROW_EFFECT";
        e.GROW_BIG_EFFECT = "GROW_BIG_EFFECT";
        e.SHRINK_EFFECT = "SHRINK_EFFECT";
        e.SHRINK_BIG_EFFECT = "SHRINK_BIG_EFFECT";
        e.SPIN_EFFECT = "SPIN_EFFECT";
        e.FLY_EFFECT = "FLY_EFFECT";
        e.POP_EFFECT = "POP_EFFECT";
        e.FLIP_EFFECT = "FLIP_EFFECT";
        e.JIGGLE_EFFECT = "JIGGLE_EFFECT";
        e.PULSE_EFFECT = "PULSE_EFFECT";
        e.DROP_EFFECT = "DROP_EFFECT";
        e.BLINK_EFFECT = "BLINK_EFFECT";
        e.BOUNCE_EFFECT = "BOUNCE_EFFECT";
        e.FLIP_LEFT_TO_RIGHT_EFFECT = "FLIP_LEFT_TO_RIGHT_EFFECT";
        e.FLIP_RIGHT_TO_LEFT_EFFECT = "FLIP_RIGHT_TO_LEFT_EFFECT";
        e.RUBBER_BAND_EFFECT = "RUBBER_BAND_EFFECT";
        e.JELLO_EFFECT = "JELLO_EFFECT";
        e.PLUGIN_LOTTIE_EFFECT = "PLUGIN_LOTTIE_EFFECT";
        e.PLUGIN_LOTTIE = "PLUGIN_LOTTIE";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e.HTML_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0);
        e.IX2_ID_DELIMITER = "|";
        e.WF_PAGE = "data-wf-page";
        e.W_MOD_JS = "w-mod-js";
        e.W_MOD_IX = "w-mod-ix";
        e.BOUNDARY_SELECTOR = ".w-dyn-item";
        e.CONFIG_X_VALUE = "xValue";
        e.CONFIG_Y_VALUE = "yValue";
        e.CONFIG_Z_VALUE = "zValue";
        e.CONFIG_VALUE = "value";
        e.CONFIG_X_UNIT = "xUnit";
        e.CONFIG_Y_UNIT = "yUnit";
        e.CONFIG_Z_UNIT = "zUnit";
        e.CONFIG_UNIT = "unit";
        e.TRANSFORM = "transform";
        e.TRANSLATE_X = "translateX";
        e.TRANSLATE_Y = "translateY";
        e.TRANSLATE_Z = "translateZ";
        e.TRANSLATE_3D = "translate3d";
        e.SCALE_X = "scaleX";
        e.SCALE_Y = "scaleY";
        e.SCALE_Z = "scaleZ";
        e.SCALE_3D = "scale3d";
        e.ROTATE_X = "rotateX";
        e.ROTATE_Y = "rotateY";
        e.ROTATE_Z = "rotateZ";
        e.SKEW = "skew";
        e.SKEW_X = "skewX";
        e.SKEW_Y = "skewY";
        e.OPACITY = "opacity";
        e.FILTER = "filter";
        e.WIDTH = "width";
        e.HEIGHT = "height";
        e.BACKGROUND_COLOR = "backgroundColor";
        e.BACKGROUND = "background";
        e.BORDER_COLOR = "borderColor";
        e.COLOR = "color";
        e.DISPLAY = "display";
        e.FLEX = "flex";
        e.WILL_CHANGE = "willChange";
        e.AUTO = "AUTO";
        e.COMMA_DELIMITER = ",";
        e.COLON_DELIMITER = ":";
        e.BAR_DELIMITER = "|";
        e.CHILDREN = "CHILDREN";
        e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
        e.SIBLINGS = "SIBLINGS";
        e.PARENT = "PARENT";
        e.PRESERVE_3D = "preserve-3d";
        e.HTML_ELEMENT = "HTML_ELEMENT";
        e.PLAIN_OBJECT = "PLAIN_OBJECT";
        e.ABSTRACT_NODE = "ABSTRACT_NODE";
        e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
        e.RENDER_GENERAL = "RENDER_GENERAL";
        e.RENDER_STYLE = "RENDER_STYLE";
        e.RENDER_PLUGIN = "RENDER_PLUGIN";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0);
        var r = n(3),
            i = r.IX2EngineActionTypes,
            o = i.IX2_RAW_DATA_IMPORTED,
            a = i.IX2_SESSION_INITIALIZED,
            u = i.IX2_SESSION_STARTED,
            c = i.IX2_SESSION_STOPPED,
            s = i.IX2_PREVIEW_REQUESTED,
            f = i.IX2_PLAYBACK_REQUESTED,
            l = i.IX2_STOP_REQUESTED,
            d = i.IX2_CLEAR_REQUESTED,
            p = i.IX2_EVENT_LISTENER_ADDED,
            v = i.IX2_TEST_FRAME_RENDERED,
            E = i.IX2_EVENT_STATE_CHANGED,
            h = i.IX2_ANIMATION_FRAME_CHANGED,
            _ = i.IX2_PARAMETER_CHANGED,
            g = i.IX2_INSTANCE_ADDED,
            I = i.IX2_INSTANCE_STARTED,
            T = i.IX2_INSTANCE_REMOVED,
            y = i.IX2_ELEMENT_STATE_CHANGED,
            m = i.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            O = i.IX2_VIEWPORT_WIDTH_CHANGED,
            A = i.IX2_MEDIA_QUERIES_DEFINED,
            S = r.IX2EngineItemTypes,
            b = S.GENERAL_START_ACTION,
            w = (S.GENERAL_CONTINUOUS_ACTION, r.IX2VanillaUtils.reifyState);
        e.rawDataImported = function (t) {
            return { type: o, payload: Object.assign({}, w(t)) };
        };
        e.sessionInitialized = function (t) {
            var e = t.hasBoundaryNodes;
            return { type: a, payload: { hasBoundaryNodes: e } };
        };
        e.sessionStarted = function () {
            return { type: u };
        };
        e.sessionStopped = function () {
            return { type: c };
        };
        e.previewRequested = function (t) {
            var e = t.rawData,
                n = t.defer;
            return { type: s, payload: { defer: n, rawData: e } };
        };
        e.playbackRequested = function (t) {
            var e = t.actionTypeId,
                n = void 0 === e ? b : e,
                r = t.actionListId,
                i = t.actionItemId,
                o = t.eventId,
                a = t.allowEvents,
                u = t.immediate,
                c = t.testManual,
                s = t.verbose,
                l = t.rawData;
            return { type: f, payload: { actionTypeId: n, actionListId: r, actionItemId: i, testManual: c, eventId: o, allowEvents: a, immediate: u, verbose: s, rawData: l } };
        };
        e.stopRequested = function (t) {
            return { type: l, payload: { actionListId: t } };
        };
        e.clearRequested = function () {
            return { type: d };
        };
        e.eventListenerAdded = function (t, e) {
            return { type: p, payload: { target: t, listenerParams: e } };
        };
        e.testFrameRendered = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return { type: v, payload: { step: t } };
        };
        e.eventStateChanged = function (t, e) {
            return { type: E, payload: { stateKey: t, newState: e } };
        };
        e.animationFrameChanged = function (t, e) {
            return { type: h, payload: { now: t, parameters: e } };
        };
        e.parameterChanged = function (t, e) {
            return { type: _, payload: { key: t, value: e } };
        };
        e.instanceAdded = function (t) {
            return { type: g, payload: Object.assign({}, t) };
        };
        e.instanceStarted = function (t, e) {
            return { type: I, payload: { instanceId: t, time: e } };
        };
        e.instanceRemoved = function (t) {
            return { type: T, payload: { instanceId: t } };
        };
        e.elementStateChanged = function (t, e, n, r) {
            return { type: y, payload: { elementId: t, actionTypeId: e, current: n, actionItem: r } };
        };
        e.actionListPlaybackChanged = function (t) {
            var e = t.actionListId,
                n = t.isPlaying;
            return { type: m, payload: { actionListId: e, isPlaying: n } };
        };
        e.viewportWidthChanged = function (t) {
            var e = t.width,
                n = t.mediaQueries;
            return { type: O, payload: { width: e, mediaQueries: n } };
        };
        e.mediaQueriesDefined = function () {
            return { type: A };
        };
    },
    function (t, e, n) {
        var r = n(98),
            i = n(52);
        function o(t, e) {
            (this.__wrapped__ = t), (this.__actions__ = []), (this.__chain__ = !!e), (this.__index__ = 0), (this.__values__ = void 0);
        }
        (o.prototype = r(i.prototype)), (o.prototype.constructor = o), (t.exports = o);
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e, n) {
        var r = n(98),
            i = n(52),
            o = 4294967295;
        function a(t) {
            (this.__wrapped__ = t), (this.__actions__ = []), (this.__dir__ = 1), (this.__filtered__ = !1), (this.__iteratees__ = []), (this.__takeCount__ = o), (this.__views__ = []);
        }
        (a.prototype = r(i.prototype)), (a.prototype.constructor = a), (t.exports = a);
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(14));
        window.tram = (function (t) {
            function e(t, e) {
                return new j.Bare().init(t, e);
            }
            function n(t) {
                return t.replace(/[A-Z]/g, function (t) {
                    return "-" + t.toLowerCase();
                });
            }
            function i(t) {
                var e = parseInt(t.slice(1), 16);
                return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            }
            function o(t, e, n) {
                return "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1);
            }
            function a() {}
            function u(t, e, n) {
                s("Units do not match [" + t + "]: " + e + ", " + n);
            }
            function c(t, e, n) {
                if ((void 0 !== e && (n = e), void 0 === t)) return n;
                var r = n;
                return $.test(t) || !Z.test(t) ? (r = parseInt(t, 10)) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n;
            }
            function s(t) {
                H.debug && window && window.console.warn(t);
            }
            var f = (function (t, e, n) {
                    function i(t) {
                        return "object" == (0, r.default)(t);
                    }
                    function o(t) {
                        return "function" == typeof t;
                    }
                    function a() {}
                    return function r(u, c) {
                        function s() {
                            var t = new f();
                            return o(t.init) && t.init.apply(t, arguments), t;
                        }
                        function f() {}
                        c === n && ((c = u), (u = Object)), (s.Bare = f);
                        var l,
                            d = (a[t] = u[t]),
                            p = (f[t] = s[t] = new a());
                        return (
                            (p.constructor = s),
                            (s.mixin = function (e) {
                                return (f[t] = s[t] = r(s, e)[t]), s;
                            }),
                            (s.open = function (t) {
                                if (((l = {}), o(t) ? (l = t.call(s, p, d, s, u)) : i(t) && (l = t), i(l))) for (var n in l) e.call(l, n) && (p[n] = l[n]);
                                return o(p.init) || (p.init = u), s;
                            }),
                            s.open(c)
                        );
                    };
                })("prototype", {}.hasOwnProperty),
                l = {
                    ease: [
                        "ease",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t);
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t);
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
                        },
                    ],
                    linear: [
                        "linear",
                        function (t, e, n, r) {
                            return (n * t) / r + e;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t + e;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (t, e, n, r) {
                            return -n * (t /= r) * (t - 2) + e;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t + e : (-n / 2) * (--t * (t - 2) - 1) + e;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t + e;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t + e : (n / 2) * ((t -= 2) * t * t + 2) + e;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t + e;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (t, e, n, r) {
                            return -n * ((t = t / r - 1) * t * t * t - 1) + e;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t * t + e : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t * t + e;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (n / 2) * t * t * t * t * t + e : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (t, e, n, r) {
                            return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (t, e, n, r) {
                            return n * Math.sin((t / r) * (Math.PI / 2)) + e;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (t, e, n, r) {
                            return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (t, e, n, r) {
                            return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (t, e, n, r) {
                            return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (t, e, n, r) {
                            return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (t, e, n, r) {
                            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (t, e, n, r) {
                            return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1 ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e;
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e;
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (t, e, n, r, i) {
                            return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e : (n / 2) * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e;
                        },
                    ],
                },
                d = { "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)", "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)", "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)" },
                p = document,
                v = window,
                E = "bkwld-tram",
                h = /[\-\.0-9]/g,
                _ = /[A-Z]/,
                g = "number",
                I = /^(rgb|#)/,
                T = /(em|cm|mm|in|pt|pc|px)$/,
                y = /(em|cm|mm|in|pt|pc|px|%)$/,
                m = /(deg|rad|turn)$/,
                O = "unitless",
                A = /(all|none) 0s ease 0s/,
                S = /^(width|height)$/,
                b = " ",
                w = p.createElement("a"),
                R = ["Webkit", "Moz", "O", "ms"],
                N = ["-webkit-", "-moz-", "-o-", "-ms-"],
                C = function (t) {
                    if (t in w.style) return { dom: t, css: t };
                    var e,
                        n,
                        r = "",
                        i = t.split("-");
                    for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                    for (e = 0; e < R.length; e++) if ((n = R[e] + r) in w.style) return { dom: n, css: N[e] + t };
                },
                L = (e.support = { bind: Function.prototype.bind, transform: C("transform"), transition: C("transition"), backface: C("backface-visibility"), timing: C("transition-timing-function") });
            if (L.transition) {
                var x = L.timing.dom;
                if (((w.style[x] = l["ease-in-back"][0]), !w.style[x])) for (var D in d) l[D][0] = d[D];
            }
            var P = (e.frame = (function () {
                    var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                    return t && L.bind
                        ? t.bind(v)
                        : function (t) {
                              v.setTimeout(t, 16);
                          };
                })()),
                M = (e.now = (function () {
                    var t = v.performance,
                        e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return e && L.bind
                        ? e.bind(t)
                        : Date.now ||
                              function () {
                                  return +new Date();
                              };
                })()),
                F = f(function (e) {
                    function i(t, e) {
                        var n = (function (t) {
                                for (var e = -1, n = t ? t.length : 0, r = []; ++e < n; ) {
                                    var i = t[e];
                                    i && r.push(i);
                                }
                                return r;
                            })(("" + t).split(b)),
                            r = n[0];
                        e = e || {};
                        var i = Q[r];
                        if (!i) return s("Unsupported property: " + r);
                        if (!e.weak || !this.props[r]) {
                            var o = i[0],
                                a = this.props[r];
                            return a || (a = this.props[r] = new o.Bare()), a.init(this.$el, n, i, e), a;
                        }
                    }
                    function o(t, e, n) {
                        if (t) {
                            var o = (0, r.default)(t);
                            if ((e || (this.timer && this.timer.destroy(), (this.queue = []), (this.active = !1)), "number" == o && e)) return (this.timer = new B({ duration: t, context: this, complete: a })), void (this.active = !0);
                            if ("string" == o && e) {
                                switch (t) {
                                    case "hide":
                                        f.call(this);
                                        break;
                                    case "stop":
                                        u.call(this);
                                        break;
                                    case "redraw":
                                        l.call(this);
                                        break;
                                    default:
                                        i.call(this, t, n && n[1]);
                                }
                                return a.call(this);
                            }
                            if ("function" == o) return void t.call(this, this);
                            if ("object" == o) {
                                var s = 0;
                                p.call(
                                    this,
                                    t,
                                    function (t, e) {
                                        t.span > s && (s = t.span), t.stop(), t.animate(e);
                                    },
                                    function (t) {
                                        "wait" in t && (s = c(t.wait, 0));
                                    }
                                ),
                                    d.call(this),
                                    s > 0 && ((this.timer = new B({ duration: s, context: this })), (this.active = !0), e && (this.timer.complete = a));
                                var v = this,
                                    E = !1,
                                    h = {};
                                P(function () {
                                    p.call(v, t, function (t) {
                                        t.active && ((E = !0), (h[t.name] = t.nextStyle));
                                    }),
                                        E && v.$el.css(h);
                                });
                            }
                        }
                    }
                    function a() {
                        if ((this.timer && this.timer.destroy(), (this.active = !1), this.queue.length)) {
                            var t = this.queue.shift();
                            o.call(this, t.options, !0, t.args);
                        }
                    }
                    function u(t) {
                        var e;
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1),
                            "string" == typeof t ? ((e = {})[t] = 1) : (e = "object" == (0, r.default)(t) && null != t ? t : this.props),
                            p.call(this, e, v),
                            d.call(this);
                    }
                    function f() {
                        u.call(this), (this.el.style.display = "none");
                    }
                    function l() {
                        this.el.offsetHeight;
                    }
                    function d() {
                        var t,
                            e,
                            n = [];
                        for (t in (this.upstream && n.push(this.upstream), this.props)) (e = this.props[t]).active && n.push(e.string);
                        (n = n.join(",")), this.style !== n && ((this.style = n), (this.el.style[L.transition.dom] = n));
                    }
                    function p(t, e, r) {
                        var o,
                            a,
                            u,
                            c,
                            s = e !== v,
                            f = {};
                        for (o in t) (u = t[o]), o in q ? (f.transform || (f.transform = {}), (f.transform[o] = u)) : (_.test(o) && (o = n(o)), o in Q ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
                        for (o in f) {
                            if (((u = f[o]), !(a = this.props[o]))) {
                                if (!s) continue;
                                a = i.call(this, o);
                            }
                            e.call(this, a, u);
                        }
                        r && c && r.call(this, c);
                    }
                    function v(t) {
                        t.stop();
                    }
                    function h(t, e) {
                        t.set(e);
                    }
                    function g(t) {
                        this.$el.css(t);
                    }
                    function I(t, n) {
                        e[t] = function () {
                            return this.children
                                ? function (t, e) {
                                      var n,
                                          r = this.children.length;
                                      for (n = 0; r > n; n++) t.apply(this.children[n], e);
                                      return this;
                                  }.call(this, n, arguments)
                                : (this.el && n.apply(this, arguments), this);
                        };
                    }
                    (e.init = function (e) {
                        if (((this.$el = t(e)), (this.el = this.$el[0]), (this.props = {}), (this.queue = []), (this.style = ""), (this.active = !1), H.keepInherited && !H.fallback)) {
                            var n = z(this.el, "transition");
                            n && !A.test(n) && (this.upstream = n);
                        }
                        L.backface && H.hideBackface && Y(this.el, L.backface.css, "hidden");
                    }),
                        I("add", i),
                        I("start", o),
                        I("wait", function (t) {
                            (t = c(t, 0)), this.active ? this.queue.push({ options: t }) : ((this.timer = new B({ duration: t, context: this, complete: a })), (this.active = !0));
                        }),
                        I("then", function (t) {
                            return this.active ? (this.queue.push({ options: t, args: arguments }), void (this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().");
                        }),
                        I("next", a),
                        I("stop", u),
                        I("set", function (t) {
                            u.call(this, t), p.call(this, t, h, g);
                        }),
                        I("show", function (t) {
                            "string" != typeof t && (t = "block"), (this.el.style.display = t);
                        }),
                        I("hide", f),
                        I("redraw", l),
                        I("destroy", function () {
                            u.call(this), t.removeData(this.el, E), (this.$el = this.el = null);
                        });
                }),
                j = f(F, function (e) {
                    function n(e, n) {
                        var r = t.data(e, E) || t.data(e, E, new F.Bare());
                        return r.el || r.init(e), n ? r.start(n) : r;
                    }
                    e.init = function (e, r) {
                        var i = t(e);
                        if (!i.length) return this;
                        if (1 === i.length) return n(i[0], r);
                        var o = [];
                        return (
                            i.each(function (t, e) {
                                o.push(n(e, r));
                            }),
                            (this.children = o),
                            this
                        );
                    };
                }),
                G = f(function (t) {
                    function e() {
                        var t = this.get();
                        this.update("auto");
                        var e = this.get();
                        return this.update(t), e;
                    }
                    function n(t) {
                        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                        return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    var i = 500,
                        a = "ease",
                        u = 0;
                    (t.init = function (t, e, n, r) {
                        (this.$el = t), (this.el = t[0]);
                        var o = e[0];
                        n[2] && (o = n[2]),
                            K[o] && (o = K[o]),
                            (this.name = o),
                            (this.type = n[1]),
                            (this.duration = c(e[1], this.duration, i)),
                            (this.ease = (function (t, e, n) {
                                return void 0 !== e && (n = e), t in l ? t : n;
                            })(e[2], this.ease, a)),
                            (this.delay = c(e[3], this.delay, u)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = S.test(this.name)),
                            (this.unit = r.unit || this.unit || H.defaultUnit),
                            (this.angle = r.angle || this.angle || H.defaultAngle),
                            H.fallback || r.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition), (this.string = this.name + b + this.duration + "ms" + ("ease" != this.ease ? b + l[this.ease][0] : "") + (this.delay ? b + this.delay + "ms" : "")));
                    }),
                        (t.set = function (t) {
                            (t = this.convert(t, this.type)), this.update(t), this.redraw();
                        }),
                        (t.transition = function (t) {
                            (this.active = !0), (t = this.convert(t, this.type)), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), (this.nextStyle = t);
                        }),
                        (t.fallback = function (t) {
                            var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                            (t = this.convert(t, this.type)),
                                this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))),
                                (this.tween = new k({ from: n, to: t, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this }));
                        }),
                        (t.get = function () {
                            return z(this.el, this.name);
                        }),
                        (t.update = function (t) {
                            Y(this.el, this.name, t);
                        }),
                        (t.stop = function () {
                            (this.active || this.nextStyle) && ((this.active = !1), (this.nextStyle = null), Y(this.el, this.name, this.get()));
                            var t = this.tween;
                            t && t.context && t.destroy();
                        }),
                        (t.convert = function (t, e) {
                            if ("auto" == t && this.auto) return t;
                            var i,
                                o = "number" == typeof t,
                                a = "string" == typeof t;
                            switch (e) {
                                case g:
                                    if (o) return t;
                                    if (a && "" === t.replace(h, "")) return +t;
                                    i = "number(unitless)";
                                    break;
                                case I:
                                    if (a) {
                                        if ("" === t && this.original) return this.original;
                                        if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case T:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit)";
                                    break;
                                case y:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case m:
                                    if (o) return t + this.angle;
                                    if (a && e.test(t)) return t;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case O:
                                    if (o) return t;
                                    if (a && y.test(t)) return t;
                                    i = "number(unitless) or string(unit or %)";
                            }
                            return (
                                (function (t, e) {
                                    s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e);
                                })(i, t),
                                t
                            );
                        }),
                        (t.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                U = f(G, function (t, e) {
                    t.init = function () {
                        e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), I));
                    };
                }),
                V = f(G, function (t, e) {
                    (t.init = function () {
                        e.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (t.get = function () {
                            return this.$el[this.name]();
                        }),
                        (t.update = function (t) {
                            this.$el[this.name](t);
                        });
                }),
                X = f(G, function (t, e) {
                    function n(t, e) {
                        var n, r, i, o, a;
                        for (n in t) (i = (o = q[n])[0]), (r = o[1] || n), (a = this.convert(t[n], i)), e.call(this, r, a, i);
                    }
                    (t.init = function () {
                        e.init.apply(this, arguments), this.current || ((this.current = {}), q.perspective && H.perspective && ((this.current.perspective = H.perspective), Y(this.el, this.name, this.style(this.current)), this.redraw()));
                    }),
                        (t.set = function (t) {
                            n.call(this, t, function (t, e) {
                                this.current[t] = e;
                            }),
                                Y(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (t.transition = function (t) {
                            var e = this.values(t);
                            this.tween = new W({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease });
                            var n,
                                r = {};
                            for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                            (this.active = !0), (this.nextStyle = this.style(r));
                        }),
                        (t.fallback = function (t) {
                            var e = this.values(t);
                            this.tween = new W({ current: this.current, values: e, duration: this.duration, delay: this.delay, ease: this.ease, update: this.update, context: this });
                        }),
                        (t.update = function () {
                            Y(this.el, this.name, this.style(this.current));
                        }),
                        (t.style = function (t) {
                            var e,
                                n = "";
                            for (e in t) n += e + "(" + t[e] + ") ";
                            return n;
                        }),
                        (t.values = function (t) {
                            var e,
                                r = {};
                            return (
                                n.call(this, t, function (t, n, i) {
                                    (r[t] = n), void 0 === this.current[t] && ((e = 0), ~t.indexOf("scale") && (e = 1), (this.current[t] = this.convert(e, i)));
                                }),
                                r
                            );
                        });
                }),
                k = f(function (e) {
                    function n() {
                        var t,
                            e,
                            r,
                            i = c.length;
                        if (i) for (P(n), e = M(), t = i; t--; ) (r = c[t]) && r.render(e);
                    }
                    var r = { ease: l.ease[1], from: 0, to: 1 };
                    (e.init = function (t) {
                        (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                        var e = t.ease || r.ease;
                        l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), (this.ease = e), (this.update = t.update || a), (this.complete = t.complete || a), (this.context = t.context || this), (this.name = t.name);
                        var n = t.from,
                            i = t.to;
                        void 0 === n && (n = r.from),
                            void 0 === i && (i = r.to),
                            (this.unit = t.unit || ""),
                            "number" == typeof n && "number" == typeof i ? ((this.begin = n), (this.change = i - n)) : this.format(i, n),
                            (this.value = this.begin + this.unit),
                            (this.start = M()),
                            !1 !== t.autoplay && this.play();
                    }),
                        (e.play = function () {
                            var t;
                            this.active || (this.start || (this.start = M()), (this.active = !0), (t = this), 1 === c.push(t) && P(n));
                        }),
                        (e.stop = function () {
                            var e, n, r;
                            this.active && ((this.active = !1), (e = this), (r = t.inArray(e, c)) >= 0 && ((n = c.slice(r + 1)), (c.length = r), n.length && (c = c.concat(n))));
                        }),
                        (e.render = function (t) {
                            var e,
                                n = t - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay;
                            }
                            if (n < this.duration) {
                                var r = this.ease(n, 0, 1, this.duration);
                                return (
                                    (e = this.startRGB
                                        ? (function (t, e, n) {
                                              return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]));
                                          })(this.startRGB, this.endRGB, r)
                                        : (function (t) {
                                              return Math.round(t * s) / s;
                                          })(this.begin + r * this.change)),
                                    (this.value = e + this.unit),
                                    void this.update.call(this.context, this.value)
                                );
                            }
                            (e = this.endHex || this.begin + this.change), (this.value = e + this.unit), this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
                        }),
                        (e.format = function (t, e) {
                            if (((e += ""), "#" == (t += "").charAt(0))) return (this.startRGB = i(e)), (this.endRGB = i(t)), (this.endHex = t), (this.begin = 0), void (this.change = 1);
                            if (!this.unit) {
                                var n = e.replace(h, "");
                                n !== t.replace(h, "") && u("tween", e, t), (this.unit = n);
                            }
                            (e = parseFloat(e)), (t = parseFloat(t)), (this.begin = this.value = e), (this.change = t - e);
                        }),
                        (e.destroy = function () {
                            this.stop(), (this.context = null), (this.ease = this.update = this.complete = a);
                        });
                    var c = [],
                        s = 1e3;
                }),
                B = f(k, function (t) {
                    (t.init = function (t) {
                        (this.duration = t.duration || 0), (this.complete = t.complete || a), (this.context = t.context), this.play();
                    }),
                        (t.render = function (t) {
                            t - this.start < this.duration || (this.complete.call(this.context), this.destroy());
                        });
                }),
                W = f(k, function (t, e) {
                    (t.init = function (t) {
                        var e, n;
                        for (e in ((this.context = t.context), (this.update = t.update), (this.tweens = []), (this.current = t.current), t.values))
                            (n = t.values[e]), this.current[e] !== n && this.tweens.push(new k({ name: e, from: this.current[e], to: n, duration: t.duration, delay: t.delay, ease: t.ease, autoplay: !1 }));
                        this.play();
                    }),
                        (t.render = function (t) {
                            var e,
                                n,
                                r = !1;
                            for (e = this.tweens.length; e--; ) (n = this.tweens[e]).context && (n.render(t), (this.current[n.name] = n.value), (r = !0));
                            return r ? void (this.update && this.update.call(this.context)) : this.destroy();
                        }),
                        (t.destroy = function () {
                            if ((e.destroy.call(this), this.tweens)) {
                                var t;
                                for (t = this.tweens.length; t--; ) this.tweens[t].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                H = (e.config = { debug: !1, defaultUnit: "px", defaultAngle: "deg", keepInherited: !1, hideBackface: !1, perspective: "", fallback: !L.transition, agentTests: [] });
            (e.fallback = function (t) {
                if (!L.transition) return (H.fallback = !0);
                H.agentTests.push("(" + t + ")");
                var e = new RegExp(H.agentTests.join("|"), "i");
                H.fallback = e.test(navigator.userAgent);
            }),
                e.fallback("6.0.[2-5] Safari"),
                (e.tween = function (t) {
                    return new k(t);
                }),
                (e.delay = function (t, e, n) {
                    return new B({ complete: e, duration: t, context: n });
                }),
                (t.fn.tram = function (t) {
                    return e.call(null, this, t);
                });
            var Y = t.style,
                z = t.css,
                K = { transform: L.transform && L.transform.css },
                Q = {
                    color: [U, I],
                    background: [U, I, "background-color"],
                    "outline-color": [U, I],
                    "border-color": [U, I],
                    "border-top-color": [U, I],
                    "border-right-color": [U, I],
                    "border-bottom-color": [U, I],
                    "border-left-color": [U, I],
                    "border-width": [G, T],
                    "border-top-width": [G, T],
                    "border-right-width": [G, T],
                    "border-bottom-width": [G, T],
                    "border-left-width": [G, T],
                    "border-spacing": [G, T],
                    "letter-spacing": [G, T],
                    margin: [G, T],
                    "margin-top": [G, T],
                    "margin-right": [G, T],
                    "margin-bottom": [G, T],
                    "margin-left": [G, T],
                    padding: [G, T],
                    "padding-top": [G, T],
                    "padding-right": [G, T],
                    "padding-bottom": [G, T],
                    "padding-left": [G, T],
                    "outline-width": [G, T],
                    opacity: [G, g],
                    top: [G, y],
                    right: [G, y],
                    bottom: [G, y],
                    left: [G, y],
                    "font-size": [G, y],
                    "text-indent": [G, y],
                    "word-spacing": [G, y],
                    width: [G, y],
                    "min-width": [G, y],
                    "max-width": [G, y],
                    height: [G, y],
                    "min-height": [G, y],
                    "max-height": [G, y],
                    "line-height": [G, O],
                    "scroll-top": [V, g, "scrollTop"],
                    "scroll-left": [V, g, "scrollLeft"],
                },
                q = {};
            L.transform && ((Q.transform = [X]), (q = { x: [y, "translateX"], y: [y, "translateY"], rotate: [m], rotateX: [m], rotateY: [m], scale: [g], scaleX: [g], scaleY: [g], skew: [m], skewX: [m], skewY: [m] })),
                L.transform && L.backface && ((q.z = [y, "translateZ"]), (q.rotateZ = [m]), (q.scaleZ = [g]), (q.perspective = [T]));
            var $ = /ms/,
                Z = /s|\./;
            return (t.tram = e);
        })(window.jQuery);
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(28);
        n.d(e, "createStore", function () {
            return r.default;
        });
        var i = n(58);
        n.d(e, "combineReducers", function () {
            return i.default;
        });
        var o = n(60);
        n.d(e, "bindActionCreators", function () {
            return o.default;
        });
        var a = n(61);
        n.d(e, "applyMiddleware", function () {
            return a.default;
        });
        var u = n(30);
        n.d(e, "compose", function () {
            return u.default;
        });
        n(59);
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(108),
            i = n(113),
            o = n(115),
            a = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            s = u.toString,
            f = c.hasOwnProperty,
            l = s.call(Object);
        e.default = function (t) {
            if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
            var e = Object(i.default)(t);
            if (null === e) return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && s.call(n) == l;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(109).default.Symbol;
        e.default = r;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(28);
        n(56), n(59);
        function i(t, e) {
            var n = e && e.type;
            return "Given action " + ((n && '"' + n.toString() + '"') || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
        }
        function o(t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var a = e[o];
                0, "function" == typeof t[a] && (n[a] = t[a]);
            }
            var u,
                c = Object.keys(n);
            try {
                !(function (t) {
                    Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        if (void 0 === n(void 0, { type: r.ActionTypes.INIT }))
                            throw new Error(
                                'Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                            );
                        if (void 0 === n(void 0, { type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".") }))
                            throw new Error(
                                'Reducer "' +
                                    e +
                                    "\" returned undefined when probed with a random type. Don't try to handle " +
                                    r.ActionTypes.INIT +
                                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
                            );
                    });
                })(n);
            } catch (t) {
                u = t;
            }
            return function () {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    e = arguments[1];
                if (u) throw u;
                for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                    var s = c[a],
                        f = n[s],
                        l = t[s],
                        d = f(l, e);
                    if (void 0 === d) {
                        var p = i(s, e);
                        throw new Error(p);
                    }
                    (o[s] = d), (r = r || d !== l);
                }
                return r ? o : t;
            };
        }
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            "undefined" != typeof console && "function" == typeof console.error && console.error(t);
            try {
                throw new Error(t);
            } catch (t) {}
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        function r(t, e) {
            return function () {
                return e(t.apply(void 0, arguments));
            };
        }
        function i(t, e) {
            if ("function" == typeof t) return r(t, e);
            if ("object" != typeof t || null === t)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
                var a = n[o],
                    u = t[a];
                "function" == typeof u && (i[a] = r(u, e));
            }
            return i;
        }
        n.r(e),
            n.d(e, "default", function () {
                return i;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(30),
            i =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };
        function o() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return function (t) {
                return function (n, o, a) {
                    var u,
                        c = t(n, o, a),
                        s = c.dispatch,
                        f = {
                            getState: c.getState,
                            dispatch: function (t) {
                                return s(t);
                            },
                        };
                    return (
                        (u = e.map(function (t) {
                            return t(f);
                        })),
                        (s = r.default.apply(void 0, u)(c.dispatch)),
                        i({}, c, { dispatch: s })
                    );
                };
            };
        }
    },
    function (t, e, n) {
        var r = n(63)(n(184));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(6),
            i = n(10),
            o = n(21);
        t.exports = function (t) {
            return function (e, n, a) {
                var u = Object(e);
                if (!i(e)) {
                    var c = r(n, 3);
                    (e = o(e)),
                        (n = function (t) {
                            return c(u[t], t, u);
                        });
                }
                var s = t(e, n, a);
                return s > -1 ? u[c ? e[s] : s] : void 0;
            };
        };
    },
    function (t, e, n) {
        var r = n(17),
            i = n(128),
            o = n(129),
            a = n(130),
            u = n(131),
            c = n(132);
        function s(t) {
            var e = (this.__data__ = new r(t));
            this.size = e.size;
        }
        (s.prototype.clear = i), (s.prototype.delete = o), (s.prototype.get = a), (s.prototype.has = u), (s.prototype.set = c), (t.exports = s);
    },
    function (t, e, n) {
        var r = n(9),
            i = n(5),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = function (t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == a || e == u || e == o || e == c;
        };
    },
    function (t, e, n) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }.call(this, n(29)));
    },
    function (t, e) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return n.call(t);
                } catch (t) {}
                try {
                    return t + "";
                } catch (t) {}
            }
            return "";
        };
    },
    function (t, e, n) {
        var r = n(151),
            i = n(8);
        t.exports = function t(e, n, o, a, u) {
            return e === n || (null == e || null == n || (!i(e) && !i(n)) ? e != e && n != n : r(e, n, o, a, t, u));
        };
    },
    function (t, e, n) {
        var r = n(152),
            i = n(155),
            o = n(156),
            a = 1,
            u = 2;
        t.exports = function (t, e, n, c, s, f) {
            var l = n & a,
                d = t.length,
                p = e.length;
            if (d != p && !(l && p > d)) return !1;
            var v = f.get(t);
            if (v && f.get(e)) return v == e;
            var E = -1,
                h = !0,
                _ = n & u ? new r() : void 0;
            for (f.set(t, e), f.set(e, t); ++E < d; ) {
                var g = t[E],
                    I = e[E];
                if (c) var T = l ? c(I, g, E, e, t, f) : c(g, I, E, t, e, f);
                if (void 0 !== T) {
                    if (T) continue;
                    h = !1;
                    break;
                }
                if (_) {
                    if (
                        !i(e, function (t, e) {
                            if (!o(_, e) && (g === t || s(g, t, n, c, f))) return _.push(e);
                        })
                    ) {
                        h = !1;
                        break;
                    }
                } else if (g !== I && !s(g, I, n, c, f)) {
                    h = !1;
                    break;
                }
            }
            return f.delete(t), f.delete(e), h;
        };
    },
    function (t, e, n) {
        var r = n(35),
            i = n(1);
        t.exports = function (t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t));
        };
    },
    function (t, e, n) {
        var r = n(163),
            i = n(72),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            u = a
                ? function (t) {
                      return null == t
                          ? []
                          : ((t = Object(t)),
                            r(a(t), function (e) {
                                return o.call(t, e);
                            }));
                  }
                : i;
        t.exports = u;
    },
    function (t, e) {
        t.exports = function () {
            return [];
        };
    },
    function (t, e, n) {
        var r = n(164),
            i = n(22),
            o = n(1),
            a = n(36),
            u = n(37),
            c = n(38),
            s = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var n = o(t),
                f = !n && i(t),
                l = !n && !f && a(t),
                d = !n && !f && !l && c(t),
                p = n || f || l || d,
                v = p ? r(t.length, String) : [],
                E = v.length;
            for (var h in t) (!e && !s.call(t, h)) || (p && ("length" == h || (l && ("offset" == h || "parent" == h)) || (d && ("buffer" == h || "byteLength" == h || "byteOffset" == h)) || u(h, E))) || v.push(h);
            return v;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                    ((t.deprecate = function () {}),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return t(e(n));
            };
        };
    },
    function (t, e, n) {
        var r = n(7)(n(4), "WeakMap");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function (t) {
            return t == t && !r(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n));
            };
        };
    },
    function (t, e, n) {
        var r = n(80);
        t.exports = function (t) {
            return null == t ? "" : r(t);
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(81),
            o = n(1),
            a = n(25),
            u = 1 / 0,
            c = r ? r.prototype : void 0,
            s = c ? c.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return i(e, t) + "";
            if (a(e)) return s ? s.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -u ? "-0" : n;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r; ) i[n] = e(t[n], n, t);
            return i;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t];
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; ) if (e(t[o], o, t)) return o;
            return -1;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.inQuad = function (t) {
                return Math.pow(t, 2);
            }),
            (e.outQuad = function (t) {
                return -(Math.pow(t - 1, 2) - 1);
            }),
            (e.inOutQuad = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
                return -0.5 * ((t -= 2) * t - 2);
            }),
            (e.inCubic = function (t) {
                return Math.pow(t, 3);
            }),
            (e.outCubic = function (t) {
                return Math.pow(t - 1, 3) + 1;
            }),
            (e.inOutCubic = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
                return 0.5 * (Math.pow(t - 2, 3) + 2);
            }),
            (e.inQuart = function (t) {
                return Math.pow(t, 4);
            }),
            (e.outQuart = function (t) {
                return -(Math.pow(t - 1, 4) - 1);
            }),
            (e.inOutQuart = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
                return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
            }),
            (e.inQuint = function (t) {
                return Math.pow(t, 5);
            }),
            (e.outQuint = function (t) {
                return Math.pow(t - 1, 5) + 1;
            }),
            (e.inOutQuint = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
                return 0.5 * (Math.pow(t - 2, 5) + 2);
            }),
            (e.inSine = function (t) {
                return 1 - Math.cos(t * (Math.PI / 2));
            }),
            (e.outSine = function (t) {
                return Math.sin(t * (Math.PI / 2));
            }),
            (e.inOutSine = function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
            (e.inExpo = function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            }),
            (e.outExpo = function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            }),
            (e.inOutExpo = function (t) {
                if (0 === t) return 0;
                if (1 === t) return 1;
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
                return 0.5 * (2 - Math.pow(2, -10 * --t));
            }),
            (e.inCirc = function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
            }),
            (e.outCirc = function (t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2));
            }),
            (e.inOutCirc = function (t) {
                if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
                return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
            (e.outBounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.inBack = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.outBack = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.inOutBack = function (t) {
                var e = o;
                if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
                return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.inElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n);
            }),
            (e.outElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1;
            }),
            (e.inOutElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (2 == (t /= 0.5)) return 1;
                n || (n = 0.3 * 1.5);
                r < 1 ? ((r = 1), (e = n / 4)) : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * -0.5;
                return r * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t - e) * (2 * Math.PI)) / n) * 0.5 + 1;
            }),
            (e.swingFromTo = function (t) {
                var e = o;
                return (t /= 0.5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.swingFrom = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.swingTo = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.bounce = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.bouncePast = function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
        var i = r(n(85)),
            o = 1.70158,
            a = (0, i.default)(0.25, 0.1, 0.25, 1);
        e.ease = a;
        var u = (0, i.default)(0.42, 0, 1, 1);
        e.easeIn = u;
        var c = (0, i.default)(0, 0, 0.58, 1);
        e.easeOut = c;
        var s = (0, i.default)(0.42, 0, 0.58, 1);
        e.easeInOut = s;
    },
    function (t, e) {
        var n = 4,
            r = 0.001,
            i = 1e-7,
            o = 10,
            a = 11,
            u = 1 / (a - 1),
            c = "function" == typeof Float32Array;
        function s(t, e) {
            return 1 - 3 * e + 3 * t;
        }
        function f(t, e) {
            return 3 * e - 6 * t;
        }
        function l(t) {
            return 3 * t;
        }
        function d(t, e, n) {
            return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
        }
        function p(t, e, n) {
            return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
        }
        t.exports = function (t, e, s, f) {
            if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var l = c ? new Float32Array(a) : new Array(a);
            if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);
            function E(e) {
                for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
                var E = c + ((e - l[--f]) / (l[f + 1] - l[f])) * u,
                    h = p(E, t, s);
                return h >= r
                    ? (function (t, e, r, i) {
                          for (var o = 0; o < n; ++o) {
                              var a = p(e, r, i);
                              if (0 === a) return e;
                              e -= (d(e, r, i) - t) / a;
                          }
                          return e;
                      })(e, E, t, s)
                    : 0 === h
                    ? E
                    : (function (t, e, n, r, a) {
                          var u,
                              c,
                              s = 0;
                          do {
                              (u = d((c = e + (n - e) / 2), r, a) - t) > 0 ? (n = c) : (e = c);
                          } while (Math.abs(u) > i && ++s < o);
                          return c;
                      })(e, c, c + u, t, s);
            }
            return function (n) {
                return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(E(n), e, f);
            };
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(87)),
            i = n(0),
            o = n(16);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.optimizeFloat = c),
            (e.createBezierEasing = function (t) {
                return u.default.apply(void 0, (0, r.default)(t));
            }),
            (e.applyEasing = function (t, e, n) {
                if (0 === e) return 0;
                if (1 === e) return 1;
                if (n) return c(e > 0 ? n(e) : e);
                return c(e > 0 && t && a[t] ? a[t](e) : e);
            });
        var a = o(n(84)),
            u = i(n(85));
        function c(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Math.pow(n, e),
                i = Number(Math.round(t * r) / r);
            return Math.abs(i) > 1e-4 ? i : 0;
        }
    },
    function (t, e, n) {
        var r = n(186),
            i = n(187),
            o = n(188);
        t.exports = function (t) {
            return r(t) || i(t) || o();
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0);
        e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
        e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
        e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
        e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
        e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
        e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
        e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
        e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
        e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
        e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
        e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
        e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
        e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
        e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
        e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
        e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
        e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
        e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ECOMMERCE_CART_CLOSE = e.ECOMMERCE_CART_OPEN = e.PAGE = e.VIEWPORT = e.ELEMENT = e.PAGE_SCROLL = e.PAGE_SCROLL_DOWN = e.PAGE_SCROLL_UP = e.PAGE_FINISH = e.PAGE_START = e.COMPONENT_INACTIVE = e.COMPONENT_ACTIVE = e.DROPDOWN_CLOSE = e.DROPDOWN_OPEN = e.SLIDER_INACTIVE = e.SLIDER_ACTIVE = e.NAVBAR_CLOSE = e.NAVBAR_OPEN = e.TAB_INACTIVE = e.TAB_ACTIVE = e.SCROLLING_IN_VIEW = e.SCROLL_OUT_OF_VIEW = e.SCROLL_INTO_VIEW = e.MOUSE_MOVE = e.MOUSE_OUT = e.MOUSE_OVER = e.MOUSE_UP = e.MOUSE_DOWN = e.MOUSE_SECOND_CLICK = e.MOUSE_CLICK = void 0);
        e.MOUSE_CLICK = "MOUSE_CLICK";
        e.MOUSE_SECOND_CLICK = "MOUSE_SECOND_CLICK";
        e.MOUSE_DOWN = "MOUSE_DOWN";
        e.MOUSE_UP = "MOUSE_UP";
        e.MOUSE_OVER = "MOUSE_OVER";
        e.MOUSE_OUT = "MOUSE_OUT";
        e.MOUSE_MOVE = "MOUSE_MOVE";
        e.SCROLL_INTO_VIEW = "SCROLL_INTO_VIEW";
        e.SCROLL_OUT_OF_VIEW = "SCROLL_OUT_OF_VIEW";
        e.SCROLLING_IN_VIEW = "SCROLLING_IN_VIEW";
        e.TAB_ACTIVE = "TAB_ACTIVE";
        e.TAB_INACTIVE = "TAB_INACTIVE";
        e.NAVBAR_OPEN = "NAVBAR_OPEN";
        e.NAVBAR_CLOSE = "NAVBAR_CLOSE";
        e.SLIDER_ACTIVE = "SLIDER_ACTIVE";
        e.SLIDER_INACTIVE = "SLIDER_INACTIVE";
        e.DROPDOWN_OPEN = "DROPDOWN_OPEN";
        e.DROPDOWN_CLOSE = "DROPDOWN_CLOSE";
        e.COMPONENT_ACTIVE = "COMPONENT_ACTIVE";
        e.COMPONENT_INACTIVE = "COMPONENT_INACTIVE";
        e.PAGE_START = "PAGE_START";
        e.PAGE_FINISH = "PAGE_FINISH";
        e.PAGE_SCROLL_UP = "PAGE_SCROLL_UP";
        e.PAGE_SCROLL_DOWN = "PAGE_SCROLL_DOWN";
        e.PAGE_SCROLL = "PAGE_SCROLL";
        e.ELEMENT = "ELEMENT";
        e.VIEWPORT = "VIEWPORT";
        e.PAGE = "PAGE";
        e.ECOMMERCE_CART_OPEN = "ECOMMERCE_CART_OPEN";
        e.ECOMMERCE_CART_CLOSE = "ECOMMERCE_CART_CLOSE";
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(26));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isPluginType = function (t) {
                return t === o.PLUGIN_LOTTIE;
            }),
            (e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0);
        var i = n(192),
            o = n(48),
            a = n(31),
            u = (0, r.default)({}, o.PLUGIN_LOTTIE, {
                getConfig: i.getPluginConfig,
                getOrigin: i.getPluginOrigin,
                getDuration: i.getPluginDuration,
                getDestination: i.getPluginDestination,
                createInstance: i.createPluginInstance,
                render: i.renderPlugin,
                clear: i.clearPlugin,
            });
        var c = function (t) {
                return function (e) {
                    if (!a.IS_BROWSER_ENV)
                        return function () {
                            return null;
                        };
                    var n = u[e];
                    if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                    var r = n[t];
                    if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                    return r;
                };
            },
            s = c("getConfig");
        e.getPluginConfig = s;
        var f = c("getOrigin");
        e.getPluginOrigin = f;
        var l = c("getDuration");
        e.getPluginDuration = l;
        var d = c("getDestination");
        e.getPluginDestination = d;
        var p = c("createInstance");
        e.createPluginInstance = p;
        var v = c("render");
        e.renderPlugin = v;
        var E = c("clear");
        e.clearPlugin = E;
    },
    function (t, e, n) {
        var r = n(92),
            i = n(199)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(197),
            i = n(21);
        t.exports = function (t, e) {
            return t && r(t, e, i);
        };
    },
    function (t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r,
            i = n(203),
            o = (r = i) && r.__esModule ? r : { default: r };
        e.default = o.default;
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(87)),
            i = n(16),
            o = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.observeRequests = function (t) {
                j({
                    store: t,
                    select: function (t) {
                        var e = t.ixRequest;
                        return e.preview;
                    },
                    onChange: it,
                }),
                    j({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.playback;
                        },
                        onChange: ut,
                    }),
                    j({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.stop;
                        },
                        onChange: ct,
                    }),
                    j({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.clear;
                        },
                        onChange: st,
                    });
            }),
            (e.startEngine = ft),
            (e.stopEngine = lt),
            (e.stopAllActionGroups = It),
            (e.stopActionGroup = Tt),
            (e.startActionGroup = yt);
        var a = o(n(208)),
            u = o(n(62)),
            c = o(n(23)),
            s = o(n(209)),
            f = o(n(215)),
            l = o(n(227)),
            d = o(n(228)),
            p = o(n(229)),
            v = o(n(232)),
            E = o(n(233)),
            h = o(n(93)),
            _ = n(3),
            g = n(50),
            I = i(n(236)),
            T = o(n(237)),
            y = _.IX2EngineEventTypes,
            m = y.MOUSE_CLICK,
            O = y.MOUSE_SECOND_CLICK,
            A = _.IX2EngineConstants,
            S = A.COLON_DELIMITER,
            b = A.BOUNDARY_SELECTOR,
            w = A.HTML_ELEMENT,
            R = A.RENDER_GENERAL,
            N = A.W_MOD_IX,
            C = _.IX2EngineItemTypes,
            L = C.GENERAL_START_ACTION,
            x = C.GENERAL_CONTINUOUS_ACTION,
            D = _.IX2VanillaUtils,
            P = D.getAffectedElements,
            M = D.getElementId,
            F = D.getDestinationValues,
            j = D.observeStore,
            G = D.getInstanceId,
            U = D.renderHTMLElement,
            V = D.clearAllStyles,
            X = D.getMaxDurationItemIndex,
            k = D.getComputedStyle,
            B = D.getInstanceOrigin,
            W = D.reduceListToGroup,
            H = D.shouldNamespaceEventParameter,
            Y = D.getNamespacedParameterId,
            z = D.shouldAllowMediaQuery,
            K = D.cleanupHTMLElement,
            Q = D.stringifyTarget,
            q = D.mediaQueriesEqual,
            $ = _.IX2VanillaPlugins,
            Z = $.isPluginType,
            J = $.createPluginInstance,
            tt = $.getPluginDuration,
            et = navigator.userAgent,
            nt = et.match(/iPad/i) || et.match(/iPhone/),
            rt = 12;
        function it(t, e) {
            var n = t.rawData,
                r = function () {
                    ft({ store: e, rawData: n, allowEvents: !0 }), ot();
                };
            t.defer ? setTimeout(r, 0) : r();
        }
        function ot() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function at(t) {
            return t && (0, v.default)(t, "_EFFECT");
        }
        function ut(t, e) {
            var n = t.actionTypeId,
                r = t.actionListId,
                i = t.actionItemId,
                o = t.eventId,
                a = t.allowEvents,
                u = t.immediate,
                c = t.testManual,
                s = t.verbose,
                f = void 0 === s || s,
                l = t.rawData;
            if (r && i && l && u) {
                var d = l.actionLists[r];
                d && (l = W({ actionList: d, actionItemId: i, rawData: l }));
            }
            if ((ft({ store: e, rawData: l, allowEvents: a, testManual: c }), (r && n === L) || at(n))) {
                Tt({ store: e, actionListId: r }), gt({ store: e, actionListId: r, eventId: o });
                var p = yt({ store: e, eventId: o, actionListId: r, immediate: u, verbose: f });
                f && p && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u }));
            }
        }
        function ct(t, e) {
            var n = t.actionListId;
            n ? Tt({ store: e, actionListId: n }) : It({ store: e }), lt(e);
        }
        function st(t, e) {
            lt(e), V({ store: e, elementApi: I });
        }
        function ft(t) {
            var e,
                n = t.store,
                i = t.rawData,
                o = t.allowEvents,
                a = t.testManual,
                f = n.getState().ixSession;
            i && n.dispatch((0, g.rawDataImported)(i)),
                f.active ||
                    (n.dispatch((0, g.sessionInitialized)({ hasBoundaryNodes: Boolean(document.querySelector(b)) })),
                    o &&
                        ((function (t) {
                            var e = t.getState().ixData.eventTypeMap;
                            vt(t),
                                (0, p.default)(e, function (e, n) {
                                    var i = T.default[n];
                                    i
                                        ? (function (t) {
                                              var e = t.logic,
                                                  n = t.store,
                                                  i = t.events;
                                              !(function (t) {
                                                  if (nt) {
                                                      var e = {},
                                                          n = "";
                                                      for (var r in t) {
                                                          var i = t[r],
                                                              o = i.eventTypeId,
                                                              a = i.target,
                                                              u = I.getQuerySelector(a);
                                                          e[u] || (o !== m && o !== O) || ((e[u] = !0), (n += u + "{cursor: pointer;touch-action: manipulation;}"));
                                                      }
                                                      if (n) {
                                                          var c = document.createElement("style");
                                                          (c.textContent = n), document.body.appendChild(c);
                                                      }
                                                  }
                                              })(i);
                                              var o = e.types,
                                                  a = e.handler,
                                                  f = n.getState().ixData,
                                                  l = f.actionLists,
                                                  d = Et(i, _t);
                                              if ((0, s.default)(d)) {
                                                  (0, p.default)(d, function (t, e) {
                                                      var o = i[e],
                                                          a = o.action,
                                                          s = o.id,
                                                          d = o.mediaQueries,
                                                          p = void 0 === d ? f.mediaQueryKeys : d,
                                                          v = a.config.actionListId;
                                                      if ((q(p, f.mediaQueryKeys) || n.dispatch((0, g.mediaQueriesDefined)()), a.actionTypeId === x)) {
                                                          var E = Array.isArray(o.config) ? o.config : [o.config];
                                                          E.forEach(function (e) {
                                                              var i = e.continuousParameterGroupId,
                                                                  o = (0, c.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                                                                  a = (0, u.default)(o, function (t) {
                                                                      var e = t.id;
                                                                      return e === i;
                                                                  }),
                                                                  f = (e.smoothing || 0) / 100,
                                                                  d = (e.restingState || 0) / 100;
                                                              a &&
                                                                  t.forEach(function (t, i) {
                                                                      var o = s + S + i;
                                                                      !(function (t) {
                                                                          var e = t.store,
                                                                              n = t.eventStateKey,
                                                                              i = t.eventTarget,
                                                                              o = t.eventId,
                                                                              a = t.eventConfig,
                                                                              u = t.actionListId,
                                                                              s = t.parameterGroup,
                                                                              f = t.smoothing,
                                                                              l = t.restingValue,
                                                                              d = e.getState(),
                                                                              p = d.ixData,
                                                                              v = d.ixSession,
                                                                              E = p.events[o],
                                                                              h = E.eventTypeId,
                                                                              _ = {},
                                                                              g = {},
                                                                              T = [],
                                                                              y = s.continuousActionGroups,
                                                                              m = s.id;
                                                                          H(h, a) && (m = Y(n, m));
                                                                          var O = v.hasBoundaryNodes && i ? I.getClosestElement(i, b) : null;
                                                                          y.forEach(function (t) {
                                                                              var e = t.keyframe,
                                                                                  n = t.actionItems;
                                                                              n.forEach(function (t) {
                                                                                  var n = t.actionTypeId,
                                                                                      o = t.config.target;
                                                                                  if (o) {
                                                                                      var a = o.boundaryMode ? O : null,
                                                                                          u = Q(o) + S + n;
                                                                                      if (
                                                                                          ((g[u] = (function () {
                                                                                              var t,
                                                                                                  e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                                                  n = arguments.length > 1 ? arguments[1] : void 0,
                                                                                                  i = arguments.length > 2 ? arguments[2] : void 0,
                                                                                                  o = (0, r.default)(e);
                                                                                              return (
                                                                                                  o.some(function (e, r) {
                                                                                                      return e.keyframe === n && ((t = r), !0);
                                                                                                  }),
                                                                                                  null == t && ((t = o.length), o.push({ keyframe: n, actionItems: [] })),
                                                                                                  o[t].actionItems.push(i),
                                                                                                  o
                                                                                              );
                                                                                          })(g[u], e, t)),
                                                                                          !_[u])
                                                                                      ) {
                                                                                          _[u] = !0;
                                                                                          var c = t.config;
                                                                                          P({ config: c, event: E, eventTarget: i, elementRoot: a, elementApi: I }).forEach(function (t) {
                                                                                              T.push({ element: t, key: u });
                                                                                          });
                                                                                      }
                                                                                  }
                                                                              });
                                                                          }),
                                                                              T.forEach(function (t) {
                                                                                  var n = t.element,
                                                                                      r = t.key,
                                                                                      i = g[r],
                                                                                      a = (0, c.default)(i, "[0].actionItems[0]", {}),
                                                                                      s = a.actionTypeId,
                                                                                      d = Z(s) ? J(s)(n, a) : null,
                                                                                      p = F({ element: n, actionItem: a, elementApi: I }, d);
                                                                                  mt({
                                                                                      store: e,
                                                                                      element: n,
                                                                                      eventId: o,
                                                                                      actionListId: u,
                                                                                      actionItem: a,
                                                                                      destination: p,
                                                                                      continuous: !0,
                                                                                      parameterId: m,
                                                                                      actionGroups: i,
                                                                                      smoothing: f,
                                                                                      restingValue: l,
                                                                                      pluginInstance: d,
                                                                                  });
                                                                              });
                                                                      })({ store: n, eventStateKey: o, eventTarget: t, eventId: s, eventConfig: e, actionListId: v, parameterGroup: a, smoothing: f, restingValue: d });
                                                                  });
                                                          });
                                                      }
                                                      (a.actionTypeId === L || at(a.actionTypeId)) && gt({ store: n, actionListId: v, eventId: s });
                                                  });
                                                  var v = function (t) {
                                                          var e = n.getState(),
                                                              r = e.ixSession;
                                                          ht(d, function (e, o, u) {
                                                              var c = i[o],
                                                                  s = r.eventState[u],
                                                                  l = c.action,
                                                                  d = c.mediaQueries,
                                                                  p = void 0 === d ? f.mediaQueryKeys : d;
                                                              if (z(p, r.mediaQueryKey)) {
                                                                  var v = function () {
                                                                      var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                                          i = a({ store: n, element: e, event: c, eventConfig: r, nativeEvent: t, eventStateKey: u }, s);
                                                                      (0, h.default)(i, s) || n.dispatch((0, g.eventStateChanged)(u, i));
                                                                  };
                                                                  if (l.actionTypeId === x) {
                                                                      var E = Array.isArray(c.config) ? c.config : [c.config];
                                                                      E.forEach(v);
                                                                  } else v();
                                                              }
                                                          });
                                                      },
                                                      _ = (0, E.default)(v, rt),
                                                      T = function (t) {
                                                          var e = t.target,
                                                              r = void 0 === e ? document : e,
                                                              i = t.types,
                                                              o = t.throttle;
                                                          i.split(" ")
                                                              .filter(Boolean)
                                                              .forEach(function (t) {
                                                                  var e = o ? _ : v;
                                                                  r.addEventListener(t, e), n.dispatch((0, g.eventListenerAdded)(r, [t, e]));
                                                              });
                                                      };
                                                  Array.isArray(o) ? o.forEach(T) : "string" == typeof o && T(e);
                                              }
                                          })({ logic: i, store: t, events: e })
                                        : console.warn("IX2 event type not configured: ".concat(n));
                                }),
                                t.getState().ixSession.eventListeners.length &&
                                    (function (t) {
                                        var e = function () {
                                            vt(t);
                                        };
                                        pt.forEach(function (n) {
                                            window.addEventListener(n, e), t.dispatch((0, g.eventListenerAdded)(window, [n, e]));
                                        }),
                                            e();
                                    })(t);
                        })(n),
                        -1 === (e = document.documentElement).className.indexOf(N) && (e.className += " ".concat(N)),
                        n.getState().ixSession.hasDefinedMediaQueries &&
                            (function (t) {
                                j({
                                    store: t,
                                    select: function (t) {
                                        return t.ixSession.mediaQueryKey;
                                    },
                                    onChange: function () {
                                        lt(t), V({ store: t, elementApi: I }), ft({ store: t, allowEvents: !0 }), ot();
                                    },
                                });
                            })(n)),
                    n.dispatch((0, g.sessionStarted)()),
                    (function (t, e) {
                        !(function n(r) {
                            var i = t.getState(),
                                o = i.ixSession,
                                a = i.ixParameters;
                            o.active &&
                                (t.dispatch((0, g.animationFrameChanged)(r, a)),
                                e
                                    ? (function (t, e) {
                                          var n = j({
                                              store: t,
                                              select: function (t) {
                                                  return t.ixSession.tick;
                                              },
                                              onChange: function (t) {
                                                  e(t), n();
                                              },
                                          });
                                      })(t, n)
                                    : requestAnimationFrame(n));
                        })(window.performance.now());
                    })(n, a));
        }
        function lt(t) {
            var e = t.getState().ixSession;
            e.active && (e.eventListeners.forEach(dt), t.dispatch((0, g.sessionStopped)()));
        }
        function dt(t) {
            var e = t.target,
                n = t.listenerParams;
            e.removeEventListener.apply(e, n);
        }
        var pt = ["resize", "orientationchange"];
        function vt(t) {
            var e = t.getState(),
                n = e.ixSession,
                r = e.ixData,
                i = window.innerWidth;
            if (i !== n.viewportWidth) {
                var o = r.mediaQueries;
                t.dispatch((0, g.viewportWidthChanged)({ width: i, mediaQueries: o }));
            }
        }
        var Et = function (t, e) {
                return (0, f.default)((0, d.default)(t, e), l.default);
            },
            ht = function (t, e) {
                (0, p.default)(t, function (t, n) {
                    t.forEach(function (t, r) {
                        e(t, n, n + S + r);
                    });
                });
            },
            _t = function (t) {
                var e = { target: t.target };
                return P({ config: e, elementApi: I });
            };
        function gt(t) {
            var e = t.store,
                n = t.actionListId,
                r = t.eventId,
                i = e.getState(),
                o = i.ixData,
                a = i.ixSession,
                u = o.actionLists,
                s = o.events[r],
                f = u[n];
            if (f && f.useFirstGroupAsInitialState) {
                var l = (0, c.default)(f, "actionItemGroups[0].actionItems", []),
                    d = (0, c.default)(s, "mediaQueries", o.mediaQueryKeys);
                if (!z(d, a.mediaQueryKey)) return;
                l.forEach(function (t) {
                    var i = t.config,
                        o = t.actionTypeId,
                        a = P({ config: i, event: s, elementApi: I }),
                        u = Z(o);
                    a.forEach(function (i) {
                        var a = u ? J(o)(i, t) : null;
                        mt({ destination: F({ element: i, actionItem: t, elementApi: I }, a), immediate: !0, store: e, element: i, eventId: r, actionItem: t, actionListId: n, pluginInstance: a });
                    });
                });
            }
        }
        function It(t) {
            var e = t.store,
                n = e.getState().ixInstances;
            (0, p.default)(n, function (t) {
                if (!t.continuous) {
                    var n = t.actionListId,
                        r = t.verbose;
                    Ot(t, e), r && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: n, isPlaying: !1 }));
                }
            });
        }
        function Tt(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                a = e.getState(),
                u = a.ixInstances,
                s = a.ixSession.hasBoundaryNodes && r ? I.getClosestElement(r, b) : null;
            (0, p.default)(u, function (t) {
                var r = (0, c.default)(t, "actionItem.config.target.boundaryMode"),
                    a = !i || t.eventStateKey === i;
                if (t.actionListId === o && t.eventId === n && a) {
                    if (s && r && !I.elementContains(s, t.element)) return;
                    Ot(t, e), t.verbose && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: o, isPlaying: !1 }));
                }
            });
        }
        function yt(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                a = t.groupIndex,
                u = void 0 === a ? 0 : a,
                s = t.immediate,
                f = t.verbose,
                l = e.getState(),
                d = l.ixData,
                p = l.ixSession,
                v = d.events[n] || {},
                E = v.mediaQueries,
                h = void 0 === E ? d.mediaQueryKeys : E,
                _ = (0, c.default)(d, "actionLists.".concat(o), {}),
                g = _.actionItemGroups,
                T = _.useFirstGroupAsInitialState;
            if (!g || !g.length) return !1;
            u >= g.length && (0, c.default)(v, "config.loop") && (u = 0), 0 === u && T && u++;
            var y = (0 === u || (1 === u && T)) && at(v.action && v.action.actionTypeId) ? v.config.delay : void 0,
                m = (0, c.default)(g, [u, "actionItems"], []);
            if (!m.length) return !1;
            if (!z(h, p.mediaQueryKey)) return !1;
            var O = p.hasBoundaryNodes && r ? I.getClosestElement(r, b) : null,
                A = X(m),
                S = !1;
            return (
                m.forEach(function (t, a) {
                    var c = t.config,
                        l = t.actionTypeId,
                        d = Z(l),
                        p = c.target;
                    if (p) {
                        var E = p.boundaryMode ? O : null;
                        P({ config: c, event: v, eventTarget: r, elementRoot: E, elementApi: I }).forEach(function (c, p) {
                            var v = d ? J(l)(c, t) : null,
                                E = d ? tt(l)(c, t) : null;
                            S = !0;
                            var h = A === a && 0 === p,
                                _ = k({ element: c, actionItem: t }),
                                g = F({ element: c, actionItem: t, elementApi: I }, v);
                            mt({
                                store: e,
                                element: c,
                                actionItem: t,
                                eventId: n,
                                eventTarget: r,
                                eventStateKey: i,
                                actionListId: o,
                                groupIndex: u,
                                isCarrier: h,
                                computedStyle: _,
                                destination: g,
                                immediate: s,
                                verbose: f,
                                pluginInstance: v,
                                pluginDuration: E,
                                instanceDelay: y,
                            });
                        });
                    }
                }),
                S
            );
        }
        function mt(t) {
            var e = t.store,
                n = t.computedStyle,
                r = (0, a.default)(t, ["store", "computedStyle"]),
                i = !r.continuous,
                o = r.element,
                u = r.actionItem,
                c = r.immediate,
                s = r.pluginInstance,
                f = G(),
                l = e.getState(),
                d = l.ixElements,
                p = l.ixSession,
                v = M(d, o),
                E = (d[v] || {}).refState,
                h = I.getRefType(o),
                _ = B(o, E, n, u, I, s);
            e.dispatch((0, g.instanceAdded)(Object.assign({ instanceId: f, elementId: v, origin: _, refType: h }, r))),
                At(document.body, "ix2-animation-started", f),
                c
                    ? (function (t, e) {
                          var n = t.getState().ixParameters;
                          t.dispatch((0, g.instanceStarted)(e, 0)), t.dispatch((0, g.animationFrameChanged)(performance.now(), n)), St(t.getState().ixInstances[e], t);
                      })(e, f)
                    : (j({
                          store: e,
                          select: function (t) {
                              return t.ixInstances[f];
                          },
                          onChange: St,
                      }),
                      i && e.dispatch((0, g.instanceStarted)(f, p.tick)));
        }
        function Ot(t, e) {
            At(document.body, "ix2-animation-stopping", { instanceId: t.id, state: e.getState() });
            var n = t.elementId,
                r = t.actionItem,
                i = e.getState().ixElements[n] || {},
                o = i.ref;
            i.refType === w && K(o, r, I), e.dispatch((0, g.instanceRemoved)(t.id));
        }
        function At(t, e, n) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
        }
        function St(t, e) {
            var n = t.active,
                r = t.continuous,
                i = t.complete,
                o = t.elementId,
                a = t.actionItem,
                u = t.actionTypeId,
                c = t.renderType,
                s = t.current,
                f = t.groupIndex,
                l = t.eventId,
                d = t.eventTarget,
                p = t.eventStateKey,
                v = t.actionListId,
                E = t.isCarrier,
                h = t.styleProp,
                _ = t.verbose,
                T = t.pluginInstance,
                y = e.getState(),
                m = y.ixData,
                O = y.ixSession,
                A = (m.events[l] || {}).mediaQueries,
                S = void 0 === A ? m.mediaQueryKeys : A;
            if (z(S, O.mediaQueryKey) && (r || n || i)) {
                if (s || (c === R && i)) {
                    e.dispatch((0, g.elementStateChanged)(o, u, s, a));
                    var b = e.getState().ixElements[o] || {},
                        N = b.ref,
                        C = b.refType,
                        L = b.refState,
                        x = L && L[u];
                    switch (C) {
                        case w:
                            U(N, L, x, l, a, h, I, c, T);
                    }
                }
                if (i) {
                    if (E) {
                        var D = yt({ store: e, eventId: l, eventTarget: d, eventStateKey: p, actionListId: v, groupIndex: f + 1, verbose: _ });
                        _ && !D && e.dispatch((0, g.actionListPlaybackChanged)({ actionListId: v, isPlaying: !1 }));
                    }
                    Ot(t, e);
                }
            }
        }
    },
    function (t, e, n) {
        var r = n(96);
        t.exports = function (t, e, n) {
            "__proto__" == e && r ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (t[e] = n);
        };
    },
    function (t, e, n) {
        var r = n(7),
            i = (function () {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) {}
            })();
        t.exports = i;
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t;
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = Object.create,
            o = (function () {
                function t() {}
                return function (e) {
                    if (!r(e)) return {};
                    if (i) return i(e);
                    t.prototype = e;
                    var n = new t();
                    return (t.prototype = void 0), n;
                };
            })();
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(250),
            i = n(251),
            o = r
                ? function (t) {
                      return r.get(t);
                  }
                : i;
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(252),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--; ) {
                var a = n[o],
                    u = a.func;
                if (null == u || u == t) return a.name;
            }
            return e;
        };
    },
    function (t, e, n) {
        n(102), n(104), n(27), n(105), n(15), n(106), n(258), n(259), n(260), n(261), n(266), n(267), (t.exports = n(268));
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "brand",
            (t.exports = function (t) {
                var e,
                    n = {},
                    i = document,
                    o = t("html"),
                    a = t("body"),
                    u = ".w-webflow-badge",
                    c = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
                function l() {
                    var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
                    t(e).attr("style", n ? "display: none !important;" : "");
                }
                function d() {
                    var t = a.children(u),
                        n = t.length && t.get(0) === e,
                        i = r.env("editor");
                    n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
                }
                return (
                    (n.ready = function () {
                        var n,
                            r,
                            a,
                            u = o.attr("data-wf-status"),
                            p = o.attr("data-wf-domain") || "";
                        /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0),
                            u &&
                                !s &&
                                ((e =
                                    e ||
                                    ((n = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")),
                                    (r = t("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({ marginRight: "8px", width: "16px" })),
                                    (a = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow")),
                                    n.append(r, a),
                                    n[0])),
                                d(),
                                setTimeout(d, 500),
                                t(i).off(f, l).on(f, l));
                    }),
                    n
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = window.$,
            i = n(54) && r.tram;
        /*!
         * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
         * _.each
         * _.map
         * _.find
         * _.filter
         * _.any
         * _.contains
         * _.delay
         * _.defer
         * _.throttle (webflow)
         * _.debounce
         * _.keys
         * _.has
         * _.now
         *
         * http://underscorejs.org
         * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         * Underscore may be freely distributed under the MIT license.
         * @license MIT
         */
        t.exports = (function () {
            var t = { VERSION: "1.6.0-Webflow" },
                e = {},
                n = Array.prototype,
                r = Object.prototype,
                o = Function.prototype,
                a = (n.push, n.slice),
                u = (n.concat, r.toString, r.hasOwnProperty),
                c = n.forEach,
                s = n.map,
                f = (n.reduce, n.reduceRight, n.filter),
                l = (n.every, n.some),
                d = n.indexOf,
                p = (n.lastIndexOf, Array.isArray, Object.keys),
                v =
                    (o.bind,
                    (t.each = t.forEach = function (n, r, i) {
                        if (null == n) return n;
                        if (c && n.forEach === c) n.forEach(r, i);
                        else if (n.length === +n.length) {
                            for (var o = 0, a = n.length; o < a; o++) if (r.call(i, n[o], o, n) === e) return;
                        } else {
                            var u = t.keys(n);
                            for (o = 0, a = u.length; o < a; o++) if (r.call(i, n[u[o]], u[o], n) === e) return;
                        }
                        return n;
                    }));
            (t.map = t.collect = function (t, e, n) {
                var r = [];
                return null == t
                    ? r
                    : s && t.map === s
                    ? t.map(e, n)
                    : (v(t, function (t, i, o) {
                          r.push(e.call(n, t, i, o));
                      }),
                      r);
            }),
                (t.find = t.detect = function (t, e, n) {
                    var r;
                    return (
                        E(t, function (t, i, o) {
                            if (e.call(n, t, i, o)) return (r = t), !0;
                        }),
                        r
                    );
                }),
                (t.filter = t.select = function (t, e, n) {
                    var r = [];
                    return null == t
                        ? r
                        : f && t.filter === f
                        ? t.filter(e, n)
                        : (v(t, function (t, i, o) {
                              e.call(n, t, i, o) && r.push(t);
                          }),
                          r);
                });
            var E = (t.some = t.any = function (n, r, i) {
                r || (r = t.identity);
                var o = !1;
                return null == n
                    ? o
                    : l && n.some === l
                    ? n.some(r, i)
                    : (v(n, function (t, n, a) {
                          if (o || (o = r.call(i, t, n, a))) return e;
                      }),
                      !!o);
            });
            (t.contains = t.include = function (t, e) {
                return (
                    null != t &&
                    (d && t.indexOf === d
                        ? -1 != t.indexOf(e)
                        : E(t, function (t) {
                              return t === e;
                          }))
                );
            }),
                (t.delay = function (t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function () {
                        return t.apply(null, n);
                    }, e);
                }),
                (t.defer = function (e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
                }),
                (t.throttle = function (t) {
                    var e, n, r;
                    return function () {
                        e ||
                            ((e = !0),
                            (n = arguments),
                            (r = this),
                            i.frame(function () {
                                (e = !1), t.apply(r, n);
                            }));
                    };
                }),
                (t.debounce = function (e, n, r) {
                    var i,
                        o,
                        a,
                        u,
                        c,
                        s = function s() {
                            var f = t.now() - u;
                            f < n ? (i = setTimeout(s, n - f)) : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
                        };
                    return function () {
                        (a = this), (o = arguments), (u = t.now());
                        var f = r && !i;
                        return i || (i = setTimeout(s, n)), f && ((c = e.apply(a, o)), (a = o = null)), c;
                    };
                }),
                (t.defaults = function (e) {
                    if (!t.isObject(e)) return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                    }
                    return e;
                }),
                (t.keys = function (e) {
                    if (!t.isObject(e)) return [];
                    if (p) return p(e);
                    var n = [];
                    for (var r in e) t.has(e, r) && n.push(r);
                    return n;
                }),
                (t.has = function (t, e) {
                    return u.call(t, e);
                }),
                (t.isObject = function (t) {
                    return t === Object(t);
                }),
                (t.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (t.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
            var h = /(.)^/,
                _ = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                g = /\\|'|\r|\n|\u2028|\u2029/g,
                I = function (t) {
                    return "\\" + _[t];
                };
            return (
                (t.template = function (e, n, r) {
                    !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
                    var i = RegExp([(n.escape || h).source, (n.interpolate || h).source, (n.evaluate || h).source].join("|") + "|$", "g"),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, function (t, n, r, i, u) {
                        return (
                            (a += e.slice(o, u).replace(g, I)),
                            (o = u + t.length),
                            n ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'") : r ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'") : i && (a += "';\n" + i + "\n__p+='"),
                            t
                        );
                    }),
                        (a += "';\n"),
                        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                        (a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n");
                    try {
                        var u = new Function(n.variable || "obj", "_", a);
                    } catch (t) {
                        throw ((t.source = a), t);
                    }
                    var c = function (e) {
                            return u.call(this, e, t);
                        },
                        s = n.variable || "obj";
                    return (c.source = "function(" + s + "){\n" + a + "}"), c;
                }),
                t
            );
        })();
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "edit",
            (t.exports = function (t, e, n) {
                if (
                    ((n = n || {}),
                    (r.env("test") || r.env("frame")) &&
                        !n.fixture &&
                        !(function () {
                            try {
                                return window.top.__Cypress__;
                            } catch (t) {
                                return !1;
                            }
                        })())
                )
                    return { exit: 1 };
                var i,
                    o = t(window),
                    a = t(document.documentElement),
                    u = document.location,
                    c = "hashchange",
                    s =
                        n.load ||
                        function () {
                            (i = !0),
                                (window.WebflowEditor = !0),
                                o.off(c, l),
                                (function (t) {
                                    var e = window.document.createElement("iframe");
                                    (e.src = "https://webflow.com/site/third-party-cookie-check.html"), (e.style.display = "none"), (e.sandbox = "allow-scripts allow-same-origin");
                                    var n = function n(r) {
                                        "WF_third_party_cookies_unsupported" === r.data ? (_(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (_(e, n), t(!0));
                                    };
                                    (e.onerror = function () {
                                        _(e, n), t(!1);
                                    }),
                                        window.addEventListener("message", n, !1),
                                        window.document.body.appendChild(e);
                                })(function (e) {
                                    t.ajax({ url: h("https://editor-api.webflow.com/api/editor/view"), data: { siteId: a.attr("data-wf-site") }, xhrFields: { withCredentials: !0 }, dataType: "json", crossDomain: !0, success: d(e) });
                                });
                        },
                    f = !1;
                try {
                    f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
                } catch (t) {}
                function l() {
                    i || (/\?edit/.test(u.hash) && s());
                }
                function d(t) {
                    return function (e) {
                        e
                            ? ((e.thirdPartyCookiesSupported = t),
                              p(E(e.bugReporterScriptPath), function () {
                                  p(E(e.scriptPath), function () {
                                      window.WebflowEditor(e);
                                  });
                              }))
                            : console.error("Could not load editor data");
                    };
                }
                function p(e, n) {
                    t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(n, v);
                }
                function v(t, e, n) {
                    throw (console.error("Could not load editor script: " + e), n);
                }
                function E(t) {
                    return t.indexOf("//") >= 0 ? t : h("https://editor-api.webflow.com" + t);
                }
                function h(t) {
                    return t.replace(/([^:])\/\//g, "$1/");
                }
                function _(t, e) {
                    window.removeEventListener("message", e, !1), t.remove();
                }
                return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {};
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(27);
        r.define(
            "ix",
            (t.exports = function (t, e) {
                var n,
                    o,
                    a = {},
                    u = t(window),
                    c = ".w-ix",
                    s = t.tram,
                    f = r.env,
                    l = f(),
                    d = f.chrome && f.chrome < 35,
                    p = "none 0s ease 0s",
                    v = t(),
                    E = {},
                    h = [],
                    _ = [],
                    g = [],
                    I = 1,
                    T = { tabs: ".w-tab-link, .w-tab-pane", dropdown: ".w-dropdown", slider: ".w-slide", navbar: ".w-nav" };
                function y(t) {
                    t &&
                        ((E = {}),
                        e.each(t, function (t) {
                            E[t.slug] = t.value;
                        }),
                        m());
                }
                function m() {
                    !(function () {
                        var e = t("[data-ix]");
                        if (!e.length) return;
                        e.each(S), e.each(O), h.length && (r.scroll.on(b), setTimeout(b, 1));
                        _.length && r.load(w);
                        g.length && setTimeout(R, I);
                    })(),
                        i.init(),
                        r.redraw.up();
                }
                function O(n, o) {
                    var u = t(o),
                        s = u.attr("data-ix"),
                        f = E[s];
                    if (f) {
                        var d = f.triggers;
                        d &&
                            (a.style(u, f.style),
                            e.each(d, function (t) {
                                var e = {},
                                    n = t.type,
                                    o = t.stepsB && t.stepsB.length;
                                function a() {
                                    N(t, u, { group: "A" });
                                }
                                function s() {
                                    N(t, u, { group: "B" });
                                }
                                if ("load" !== n) {
                                    if ("click" === n)
                                        return (
                                            u.on("click" + c, function (n) {
                                                r.validClick(n.currentTarget) && ("#" === u.attr("href") && n.preventDefault(), N(t, u, { group: e.clicked ? "B" : "A" }), o && (e.clicked = !e.clicked));
                                            }),
                                            void (v = v.add(u))
                                        );
                                    if ("hover" === n) return u.on("mouseenter" + c, a), u.on("mouseleave" + c, s), void (v = v.add(u));
                                    if ("scroll" !== n) {
                                        var f = T[n];
                                        if (f) {
                                            var d = u.closest(f);
                                            return d.on(i.types.INTRO, a).on(i.types.OUTRO, s), void (v = v.add(d));
                                        }
                                    } else h.push({ el: u, trigger: t, state: { active: !1 }, offsetTop: A(t.offsetTop), offsetBot: A(t.offsetBot) });
                                } else t.preload && !l ? _.push(a) : g.push(a);
                            }));
                    }
                }
                function A(t) {
                    if (!t) return 0;
                    t = String(t);
                    var e = parseInt(t, 10);
                    return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = 0.999), e);
                }
                function S(e, n) {
                    t(n).off(c);
                }
                function b() {
                    for (var t = u.scrollTop(), e = u.height(), n = h.length, r = 0; r < n; r++) {
                        var i = h[r],
                            o = i.el,
                            a = i.trigger,
                            c = a.stepsB && a.stepsB.length,
                            s = i.state,
                            f = o.offset().top,
                            l = o.outerHeight(),
                            d = i.offsetTop,
                            p = i.offsetBot;
                        d < 1 && d > 0 && (d *= e), p < 1 && p > 0 && (p *= e);
                        var v = f + l - d >= t && f + p <= t + e;
                        v !== s.active && (!1 !== v || c) && ((s.active = v), N(a, o, { group: v ? "A" : "B" }));
                    }
                }
                function w() {
                    for (var t = _.length, e = 0; e < t; e++) _[e]();
                }
                function R() {
                    for (var t = g.length, e = 0; e < t; e++) g[e]();
                }
                function N(e, r, i, o) {
                    var a = (i = i || {}).done,
                        u = e.preserve3d;
                    if (!n || i.force) {
                        var c = i.group || "A",
                            f = e["loop" + c],
                            p = e["steps" + c];
                        if (p && p.length) {
                            if ((p.length < 2 && (f = !1), !o)) {
                                var v = e.selector;
                                v && ((r = e.descend ? r.find(v) : e.siblings ? r.siblings(v) : t(v)), l && r.attr("data-ix-affect", 1)), d && r.addClass("w-ix-emptyfix"), u && r.css("transform-style", "preserve-3d");
                            }
                            for (var E = s(r), h = { omit3d: !u }, _ = 0; _ < p.length; _++) C(E, p[_], h);
                            h.start ? E.then(g) : g();
                        }
                    }
                    function g() {
                        if (f) return N(e, r, i, !0);
                        "auto" === h.width && E.set({ width: "auto" }), "auto" === h.height && E.set({ height: "auto" }), a && a();
                    }
                }
                function C(t, e, n)
                {
                    var i = "add",
                        o = "start";
                    n.start && (i = o = "then");
                    var a = e.transition;
                    if (a) {
                        a = a.split(",");
                        for (var u = 0; u < a.length; u++) {
                            var c = a[u];
                            t[i](c);
                        }
                    }
                    var s = L(e, n) || {};
                    if ((null != s.width && (n.width = s.width), null != s.height && (n.height = s.height), null == a)) {
                        n.start
                            ? t.then(function () {
                                  var e = this.queue;
                                  this.set(s), s.display && (t.redraw(), r.redraw.up()), (this.queue = e), this.next();
                              })
                            : (t.set(s), s.display && (t.redraw(), r.redraw.up()));
                        var f = s.wait;
                        null != f && (t.wait(f), (n.start = !0));
                    } else {
                        if (s.display) {
                            var l = s.display;
                            delete s.display,
                                n.start
                                    ? t.then(function () {
                                          var t = this.queue;
                                          this.set({ display: l }).redraw(), r.redraw.up(), (this.queue = t), this.next();
                                      })
                                    : (t.set({ display: l }).redraw(), r.redraw.up());
                        }
                        t[o](s), (n.start = !0);
                    }
                }
                function L(t, e) {
                    var n = e && e.omit3d,
                        r = {},
                        i = !1;
                    for (var o in t) "transition" !== o && "keysort" !== o && (!n || ("z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o)) && ((r[o] = t[o]), (i = !0));
                    return i ? r : null;
                }
                return (
                    (a.init = function (t) {
                        setTimeout(function () {
                            y(t);
                        }, 1);
                    }),
                    (a.preview = function () {
                        (n = !1),
                            (I = 100),
                            setTimeout(function () {
                                y(window.__wf_ix);
                            }, 1);
                    }),
                    (a.design = function () {
                        (n = !0), a.destroy();
                    }),
                    (a.destroy = function () {
                        (o = !0), v.each(S), r.scroll.off(b), i.async(), (h = []), (_ = []), (g = []);
                    }),
                    (a.ready = function () {
                        if (l) return f("design") ? a.design() : a.preview();
                        E && o && ((o = !1), m());
                    }),
                    (a.run = N),
                    (a.style = l
                        ? function (e, n) {
                              var r = s(e);
                              if (t.isEmptyObject(n)) return;
                              e.css("transition", "");
                              var i = e.css("transition");
                              i === p && (i = r.upstream = null);
                              (r.upstream = p), r.set(L(n)), (r.upstream = i);
                          }
                        : function (t, e) {
                              s(t).set(L(e));
                          }),
                    a
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(107);
        i.setEnv(r.env),
            r.define(
                "ix2",
                (t.exports = function () {
                    return i;
                })
            );
    },
    function (t, e, n) {
        "use strict";
        var r = n(16),
            i = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setEnv = function (t) {
                t() && (0, u.observeRequests)(s);
            }),
            (e.init = function (t) {
                f(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 });
            }),
            (e.destroy = f),
            (e.actions = e.store = void 0);
        var o = n(55),
            a = i(n(119)),
            u = n(94),
            c = r(n(50));
        e.actions = c;
        var s = (0, o.createStore)(a.default);
        function f() {
            (0, u.stopEngine)(s);
        }
        e.store = s;
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(57),
            i = n(111),
            o = n(112),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            return null == t ? (void 0 === t ? u : a) : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(110),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r.default || i || Function("return this")();
        e.default = o;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.default = n;
            }.call(this, n(29));
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(57),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = Object.prototype.toString;
        e.default = function (t) {
            return r.call(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(114),
            i = Object(r.default)(Object.getPrototypeOf, Object);
        e.default = i;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t, e) {
                return function (n) {
                    return t(e(n));
                };
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t) {
                return null != t && "object" == typeof t;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t, r) {
                var i,
                    o = n(118);
                i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
                var a = Object(o.default)(i);
                e.default = a;
            }.call(this, n(29), n(117)(t));
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    Object.defineProperty(e, "exports", { enumerable: !0 }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            var e,
                n = t.Symbol;
            return "function" == typeof n ? (n.observable ? (e = n.observable) : ((e = n("observable")), (n.observable = e))) : (e = "@@observable"), e;
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var r = n(55),
            i = n(120),
            o = n(204),
            a = n(205),
            u = n(3),
            c = n(206),
            s = n(207),
            f = u.IX2ElementsReducer.ixElements,
            l = (0, r.combineReducers)({ ixData: i.ixData, ixRequest: o.ixRequest, ixSession: a.ixSession, ixElements: f, ixInstances: c.ixInstances, ixParameters: s.ixParameters });
        e.default = l;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixData = void 0);
        var r = n(3).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
        e.ixData = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case r:
                    return e.payload.ixData || Object.freeze({});
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        var r = n(122),
            i = n(174),
            o = n(78);
        t.exports = function (t) {
            var e = i(t);
            return 1 == e.length && e[0][2]
                ? o(e[0][0], e[0][1])
                : function (n) {
                      return n === t || r(n, t, e);
                  };
        };
    },
    function (t, e, n) {
        var r = n(64),
            i = n(68),
            o = 1,
            a = 2;
        t.exports = function (t, e, n, u) {
            var c = n.length,
                s = c,
                f = !u;
            if (null == t) return !s;
            for (t = Object(t); c--; ) {
                var l = n[c];
                if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
            }
            for (; ++c < s; ) {
                var d = (l = n[c])[0],
                    p = t[d],
                    v = l[1];
                if (f && l[2]) {
                    if (void 0 === p && !(d in t)) return !1;
                } else {
                    var E = new r();
                    if (u) var h = u(p, v, d, t, e, E);
                    if (!(void 0 === h ? i(v, p, o | a, u, E) : h)) return !1;
                }
            }
            return !0;
        };
    },
    function (t, e) {
        t.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (t, e, n) {
        var r = n(18),
            i = Array.prototype.splice;
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0));
        };
    },
    function (t, e, n) {
        var r = n(18);
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1];
        };
    },
    function (t, e, n) {
        var r = n(18);
        t.exports = function (t) {
            return r(this.__data__, t) > -1;
        };
    },
    function (t, e, n) {
        var r = n(18);
        t.exports = function (t, e) {
            var n = this.__data__,
                i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
        };
    },
    function (t, e, n) {
        var r = n(17);
        t.exports = function () {
            (this.__data__ = new r()), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.__data__,
                n = e.delete(t);
            return (this.size = e.size), n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.get(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e, n) {
        var r = n(17),
            i = n(33),
            o = n(34),
            a = 200;
        t.exports = function (t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var u = n.__data__;
                if (!i || u.length < a - 1) return u.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new o(u);
            }
            return n.set(t, e), (this.size = n.size), this;
        };
    },
    function (t, e, n) {
        var r = n(65),
            i = n(136),
            o = n(5),
            a = n(67),
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            s = Object.prototype,
            f = c.toString,
            l = s.hasOwnProperty,
            d = RegExp(
                "^" +
                    f
                        .call(l)
                        .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                    "$"
            );
        t.exports = function (t) {
            return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) {}
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
            return n.call(t);
        };
    },
    function (t, e, n) {
        var r,
            i = n(137),
            o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + r : "";
        t.exports = function (t) {
            return !!o && o in t;
        };
    },
    function (t, e, n) {
        var r = n(4)["__core-js_shared__"];
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t ? void 0 : t[e];
        };
    },
    function (t, e, n) {
        var r = n(140),
            i = n(17),
            o = n(33);
        t.exports = function () {
            (this.size = 0), (this.__data__ = { hash: new r(), map: new (o || i)(), string: new r() });
        };
    },
    function (t, e, n) {
        var r = n(141),
            i = n(142),
            o = n(143),
            a = n(144),
            u = n(145);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n; ) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r), (c.prototype.delete = i), (c.prototype.get = o), (c.prototype.has = a), (c.prototype.set = u), (t.exports = c);
    },
    function (t, e, n) {
        var r = n(19);
        t.exports = function () {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n;
            }
            return o.call(e, t) ? e[t] : void 0;
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t);
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = "__lodash_hash_undefined__";
        t.exports = function (t, e) {
            var n = this.__data__;
            return (this.size += this.has(t) ? 0 : 1), (n[t] = r && void 0 === e ? i : e), this;
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = function (t) {
            var e = r(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = function (t) {
            return r(this, t).get(t);
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = function (t) {
            return r(this, t).has(t);
        };
    },
    function (t, e, n) {
        var r = n(20);
        t.exports = function (t, e) {
            var n = r(this, t),
                i = n.size;
            return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
        };
    },
    function (t, e, n) {
        var r = n(64),
            i = n(69),
            o = n(157),
            a = n(161),
            u = n(42),
            c = n(1),
            s = n(36),
            f = n(38),
            l = 1,
            d = "[object Arguments]",
            p = "[object Array]",
            v = "[object Object]",
            E = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, h, _, g) {
            var I = c(t),
                T = c(e),
                y = I ? p : u(t),
                m = T ? p : u(e),
                O = (y = y == d ? v : y) == v,
                A = (m = m == d ? v : m) == v,
                S = y == m;
            if (S && s(t)) {
                if (!s(e)) return !1;
                (I = !0), (O = !1);
            }
            if (S && !O) return g || (g = new r()), I || f(t) ? i(t, e, n, h, _, g) : o(t, e, y, n, h, _, g);
            if (!(n & l)) {
                var b = O && E.call(t, "__wrapped__"),
                    w = A && E.call(e, "__wrapped__");
                if (b || w) {
                    var R = b ? t.value() : t,
                        N = w ? e.value() : e;
                    return g || (g = new r()), _(R, N, n, h, g);
                }
            }
            return !!S && (g || (g = new r()), a(t, e, n, h, _, g));
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = n(153),
            o = n(154);
        function a(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new r(); ++e < n; ) this.add(t[e]);
        }
        (a.prototype.add = a.prototype.push = i), (a.prototype.has = o), (t.exports = a);
    },
    function (t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function (t) {
            return this.__data__.set(t, n), this;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r; ) if (e(t[n], n, t)) return !0;
            return !1;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t.has(e);
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(158),
            o = n(32),
            a = n(69),
            u = n(159),
            c = n(160),
            s = 1,
            f = 2,
            l = "[object Boolean]",
            d = "[object Date]",
            p = "[object Error]",
            v = "[object Map]",
            E = "[object Number]",
            h = "[object RegExp]",
            _ = "[object Set]",
            g = "[object String]",
            I = "[object Symbol]",
            T = "[object ArrayBuffer]",
            y = "[object DataView]",
            m = r ? r.prototype : void 0,
            O = m ? m.valueOf : void 0;
        t.exports = function (t, e, n, r, m, A, S) {
            switch (n) {
                case y:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                    (t = t.buffer), (e = e.buffer);
                case T:
                    return !(t.byteLength != e.byteLength || !A(new i(t), new i(e)));
                case l:
                case d:
                case E:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case h:
                case g:
                    return t == e + "";
                case v:
                    var b = u;
                case _:
                    var w = r & s;
                    if ((b || (b = c), t.size != e.size && !w)) return !1;
                    var R = S.get(t);
                    if (R) return R == e;
                    (r |= f), S.set(t, e);
                    var N = a(b(t), b(e), r, m, A, S);
                    return S.delete(t), N;
                case I:
                    if (O) return O.call(t) == O.call(e);
            }
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(4).Uint8Array;
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t, r) {
                    n[++e] = [r, t];
                }),
                n
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t) {
                    n[++e] = t;
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(162),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, a, u, c) {
            var s = n & i,
                f = r(t),
                l = f.length;
            if (l != r(e).length && !s) return !1;
            for (var d = l; d--; ) {
                var p = f[d];
                if (!(s ? p in e : o.call(e, p))) return !1;
            }
            var v = c.get(t);
            if (v && c.get(e)) return v == e;
            var E = !0;
            c.set(t, e), c.set(e, t);
            for (var h = s; ++d < l; ) {
                var _ = t[(p = f[d])],
                    g = e[p];
                if (a) var I = s ? a(g, _, p, e, t, c) : a(_, g, p, t, e, c);
                if (!(void 0 === I ? _ === g || u(_, g, n, a, c) : I)) {
                    E = !1;
                    break;
                }
                h || (h = "constructor" == p);
            }
            if (E && !h) {
                var T = t.constructor,
                    y = e.constructor;
                T != y && "constructor" in t && "constructor" in e && !("function" == typeof T && T instanceof T && "function" == typeof y && y instanceof y) && (E = !1);
            }
            return c.delete(t), c.delete(e), E;
        };
    },
    function (t, e, n) {
        var r = n(70),
            i = n(71),
            o = n(21);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
            }
            return o;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
            return r;
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(8),
            o = "[object Arguments]";
        t.exports = function (t) {
            return i(t) && r(t) == o;
        };
    },
    function (t, e) {
        t.exports = function () {
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(39),
            o = n(8),
            a = {};
        (a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a[
            "[object Uint32Array]"
        ] = !0),
            (a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a[
                "[object Number]"
            ] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1),
            (t.exports = function (t) {
                return o(t) && i(t.length) && !!a[r(t)];
            });
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return t(e);
            };
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(66),
                i = e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = (function () {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || (a && a.binding && a.binding("util"));
                    } catch (t) {}
                })();
            t.exports = u;
        }.call(this, n(74)(t)));
    },
    function (t, e, n) {
        var r = n(75)(Object.keys, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(7)(n(4), "DataView");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(7)(n(4), "Promise");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(7)(n(4), "Set");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(77),
            i = n(21);
        t.exports = function (t) {
            for (var e = i(t), n = e.length; n--; ) {
                var o = e[n],
                    a = t[o];
                e[n] = [o, a, r(a)];
            }
            return e;
        };
    },
    function (t, e, n) {
        var r = n(68),
            i = n(23),
            o = n(179),
            a = n(44),
            u = n(77),
            c = n(78),
            s = n(12),
            f = 1,
            l = 2;
        t.exports = function (t, e) {
            return a(t) && u(e)
                ? c(s(t), e)
                : function (n) {
                      var a = i(n, t);
                      return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
                  };
        };
    },
    function (t, e, n) {
        var r = n(177),
            i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            a = r(function (t) {
                var e = [];
                return (
                    46 === t.charCodeAt(0) && e.push(""),
                    t.replace(i, function (t, n, r, i) {
                        e.push(r ? i.replace(o, "$1") : n || t);
                    }),
                    e
                );
            });
        t.exports = a;
    },
    function (t, e, n) {
        var r = n(178),
            i = 500;
        t.exports = function (t) {
            var e = r(t, function (t) {
                    return n.size === i && n.clear(), t;
                }),
                n = e.cache;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = "Expected a function";
        function o(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e)) throw new TypeError(i);
            var n = function () {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
    },
    function (t, e, n) {
        var r = n(180),
            i = n(181);
        t.exports = function (t, e) {
            return null != t && i(t, e, r);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null != t && e in Object(t);
        };
    },
    function (t, e, n) {
        var r = n(24),
            i = n(22),
            o = n(1),
            a = n(37),
            u = n(39),
            c = n(12);
        t.exports = function (t, e, n) {
            for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f; ) {
                var d = c(e[s]);
                if (!(l = null != t && n(t, d))) break;
                t = t[d];
            }
            return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
        };
    },
    function (t, e, n) {
        var r = n(82),
            i = n(183),
            o = n(44),
            a = n(12);
        t.exports = function (t) {
            return o(t) ? r(a(t)) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(43);
        t.exports = function (t) {
            return function (e) {
                return r(e, t);
            };
        };
    },
    function (t, e, n) {
        var r = n(83),
            i = n(6),
            o = n(46),
            a = Math.max;
        t.exports = function (t, e, n) {
            var u = null == t ? 0 : t.length;
            if (!u) return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
        };
    },
    function (t, e, n) {
        var r = n(47),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        t.exports = function (t) {
            return t ? ((t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0) : 0 === t ? t : 0;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.createElementState = c), (e.mergeActionState = s), (e.ixElements = void 0);
        var r = n(13),
            i = n(49),
            o = n(88),
            a = {},
            u = "refState";
        function c(t, e, n, o, a) {
            var u = n === i.PLAIN_OBJECT ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
            return (0, r.mergeIn)(t, [o], { id: o, ref: e, refId: u, refType: n });
        }
        function s(t, e, n, i, o) {
            var a = (function (t) {
                    var e = t.config;
                    return f.reduce(function (t, n) {
                        var r = n[0],
                            i = n[1],
                            o = e[r],
                            a = e[i];
                        return null != o && null != a && (t[i] = a), t;
                    }, {});
                })(o),
                c = [e, u, n];
            return (0, r.mergeIn)(t, c, i, a);
        }
        e.ixElements = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case o.IX2_SESSION_STOPPED:
                    return a;
                case o.IX2_INSTANCE_ADDED:
                    var n = e.payload,
                        i = n.elementId,
                        u = n.element,
                        f = n.origin,
                        l = n.actionItem,
                        d = n.refType,
                        p = l.actionTypeId,
                        v = t;
                    return (0, r.getIn)(v, [i, u]) !== u && (v = c(v, u, d, i, l)), s(v, i, p, f, l);
                case o.IX2_ELEMENT_STATE_CHANGED:
                    var E = e.payload;
                    return s(t, E.elementId, E.actionTypeId, E.current, E.actionItem);
                default:
                    return t;
            }
        };
        var f = [
            [i.CONFIG_X_VALUE, i.CONFIG_X_UNIT],
            [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT],
            [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT],
            [i.CONFIG_VALUE, i.CONFIG_UNIT],
        ];
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.IX2_EVENT_ENGINE_EVENT_TYPES = e.DIRECTIONS = e.EVENT_APPLIES_TO = e.EVENT_ACTION_TYPES = e.BASED_ON_TYPES = e.AXES = void 0);
        e.AXES = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
        e.BASED_ON_TYPES = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT", PAGE: "PAGE" };
        e.EVENT_ACTION_TYPES = { START: "START", STOP: "STOP", CONTINUOUS: "CONTINUOUS", CHANGE_COMBO: "CHANGE_COMBO" };
        e.EVENT_APPLIES_TO = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
        e.DIRECTIONS = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
        e.IX2_EVENT_ENGINE_EVENT_TYPES = {
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            COMPONENT_ACTIVE: "COMPONENT_ACTIVE",
            COMPONENT_INACTIVE: "COMPONENT_INACTIVE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT",
            PAGE: "PAGE",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.IX2_INTERACTION_TYPES = void 0);
        e.IX2_INTERACTION_TYPES = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0);
        e.getPluginConfig = function (t) {
            return t.value;
        };
        e.getPluginDuration = function (t, e) {
            if ("auto" !== e.config.duration) return null;
            var n = parseFloat(t.getAttribute("data-duration"));
            return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"));
        };
        e.getPluginOrigin = function (t) {
            return t || { value: 0 };
        };
        e.getPluginDestination = function (t) {
            return { value: t.value };
        };
        e.createPluginInstance = function (t) {
            var e = window.Webflow.require("lottie").createInstance(t);
            return e.stop(), e.setSubframe(!0), e;
        };
        e.renderPlugin = function (t, e, n) {
            if (t) {
                var r = e[n.actionTypeId].value / 100;
                t.goToFrame(t.frames * r);
            }
        };
        e.clearPlugin = function (t) {
            window.Webflow.require("lottie").createInstance(t).stop();
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i,
            o,
            a = n(0),
            u = a(n(14)),
            c = a(n(26)),
            s = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getInstanceId = function () {
                return "i" + b++;
            }),
            (e.getElementId = function (t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r && r.ref === e) return r.id;
                }
                return "e" + w++;
            }),
            (e.reifyState = function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.events,
                    n = t.actionLists,
                    r = t.site,
                    i = (0, l.default)(
                        e,
                        function (t, e) {
                            var n = e.eventTypeId;
                            return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
                        },
                        {}
                    ),
                    o = r && r.mediaQueries,
                    a = [];
                o
                    ? (a = o.map(function (t) {
                          return t.key;
                      }))
                    : ((o = []), console.warn("IX2 missing mediaQueries in site data"));
                return { ixData: { events: e, actionLists: n, eventTypeMap: i, mediaQueries: o, mediaQueryKeys: a } };
            }),
            (e.observeStore = function (t) {
                var e = t.store,
                    n = t.select,
                    r = t.onChange,
                    i = t.comparator,
                    o = void 0 === i ? R : i,
                    a = e.getState,
                    u = (0, e.subscribe)(function () {
                        var t = n(a());
                        if (null == t) return void u();
                        o(t, c) || r((c = t), e);
                    }),
                    c = n(a());
                return u;
            }),
            (e.getAffectedElements = C),
            (e.getComputedStyle = function (t) {
                var e = t.element,
                    n = t.actionItem;
                if (!y.IS_BROWSER_ENV) return {};
                switch (n.actionTypeId) {
                    case T.STYLE_SIZE:
                    case T.STYLE_BACKGROUND_COLOR:
                    case T.STYLE_BORDER:
                    case T.STYLE_TEXT_COLOR:
                    case T.GENERAL_DISPLAY:
                        return window.getComputedStyle(e);
                    default:
                        return {};
                }
            }),
            (e.getInstanceOrigin = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
                    o = r.actionTypeId,
                    a = r.config;
                if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
                switch (o) {
                    case T.TRANSFORM_MOVE:
                    case T.TRANSFORM_SCALE:
                    case T.TRANSFORM_ROTATE:
                    case T.TRANSFORM_SKEW:
                        return e[o] || M[o];
                    case T.STYLE_FILTER:
                        return x(e[o], r.config.filters);
                    case T.STYLE_OPACITY:
                        return { value: (0, f.default)(parseFloat(i(t, g.OPACITY)), 1) };
                    case T.STYLE_SIZE:
                        var u,
                            c,
                            s = i(t, g.WIDTH),
                            l = i(t, g.HEIGHT);
                        return (
                            (u = a.widthUnit === g.AUTO ? (L.test(s) ? parseFloat(s) : parseFloat(n.width)) : (0, f.default)(parseFloat(s), parseFloat(n.width))),
                            (c = a.heightUnit === g.AUTO ? (L.test(l) ? parseFloat(l) : parseFloat(n.height)) : (0, f.default)(parseFloat(l), parseFloat(n.height))),
                            { widthValue: u, heightValue: c }
                        );
                    case T.STYLE_BACKGROUND_COLOR:
                    case T.STYLE_BORDER:
                    case T.STYLE_TEXT_COLOR:
                        return (function (t) {
                            var e = t.element,
                                n = t.actionTypeId,
                                r = t.computedStyle,
                                i = t.getStyle,
                                o = O[n],
                                a = i(e, o),
                                u = U.test(a) ? a : r[o],
                                c = (function (t, e) {
                                    var n = t.exec(e);
                                    return n ? n[1] : "";
                                })(V, u).split(g.COMMA_DELIMITER);
                            return { rValue: (0, f.default)(parseInt(c[0], 10), 255), gValue: (0, f.default)(parseInt(c[1], 10), 255), bValue: (0, f.default)(parseInt(c[2], 10), 255), aValue: (0, f.default)(parseFloat(c[3]), 1) };
                        })({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
                    case T.GENERAL_DISPLAY:
                        return { value: (0, f.default)(i(t, g.DISPLAY), n.display) };
                    case T.OBJECT_VALUE:
                        return e[o] || { value: 0 };
                    default:
                        return;
                }
            }),
            (e.getDestinationValues = function (t) {
                var e = t.element,
                    n = t.actionItem,
                    r = t.elementApi,
                    i = n.actionTypeId;
                if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
                switch (i) {
                    case T.TRANSFORM_MOVE:
                    case T.TRANSFORM_SCALE:
                    case T.TRANSFORM_ROTATE:
                    case T.TRANSFORM_SKEW:
                        var o = n.config,
                            a = o.xValue,
                            u = o.yValue,
                            c = o.zValue;
                        return { xValue: a, yValue: u, zValue: c };
                    case T.STYLE_SIZE:
                        var s = r.getStyle,
                            f = r.setStyle,
                            l = r.getProperty,
                            d = n.config,
                            p = d.widthUnit,
                            v = d.heightUnit,
                            E = n.config,
                            h = E.widthValue,
                            I = E.heightValue;
                        if (!y.IS_BROWSER_ENV) return { widthValue: h, heightValue: I };
                        if (p === g.AUTO) {
                            var m = s(e, g.WIDTH);
                            f(e, g.WIDTH, ""), (h = l(e, "offsetWidth")), f(e, g.WIDTH, m);
                        }
                        if (v === g.AUTO) {
                            var O = s(e, g.HEIGHT);
                            f(e, g.HEIGHT, ""), (I = l(e, "offsetHeight")), f(e, g.HEIGHT, O);
                        }
                        return { widthValue: h, heightValue: I };
                    case T.STYLE_BACKGROUND_COLOR:
                    case T.STYLE_BORDER:
                    case T.STYLE_TEXT_COLOR:
                        var A = n.config,
                            S = A.rValue,
                            b = A.gValue,
                            w = A.bValue,
                            R = A.aValue;
                        return { rValue: S, gValue: b, bValue: w, aValue: R };
                    case T.STYLE_FILTER:
                        return n.config.filters.reduce(D, {});
                    default:
                        var N = n.config.value;
                        return { value: N };
                }
            }),
            (e.getRenderType = P),
            (e.getStyleProp = function (t, e) {
                return t === g.RENDER_STYLE ? e.replace("STYLE_", "").toLowerCase() : null;
            }),
            (e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
                switch (u) {
                    case g.RENDER_TRANSFORM:
                        return (function (t, e, n, r, i) {
                            var o = G.map(function (t) {
                                    var n = M[t],
                                        r = e[t] || {},
                                        i = r.xValue,
                                        o = void 0 === i ? n.xValue : i,
                                        a = r.yValue,
                                        u = void 0 === a ? n.yValue : a,
                                        c = r.zValue,
                                        s = void 0 === c ? n.zValue : c,
                                        f = r.xUnit,
                                        l = void 0 === f ? "" : f,
                                        d = r.yUnit,
                                        p = void 0 === d ? "" : d,
                                        v = r.zUnit,
                                        E = void 0 === v ? "" : v;
                                    switch (t) {
                                        case T.TRANSFORM_MOVE:
                                            return "".concat(g.TRANSLATE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(E, ")");
                                        case T.TRANSFORM_SCALE:
                                            return "".concat(g.SCALE_3D, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(E, ")");
                                        case T.TRANSFORM_ROTATE:
                                            return "".concat(g.ROTATE_X, "(").concat(o).concat(l, ") ").concat(g.ROTATE_Y, "(").concat(u).concat(p, ") ").concat(g.ROTATE_Z, "(").concat(s).concat(E, ")");
                                        case T.TRANSFORM_SKEW:
                                            return "".concat(g.SKEW, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                                        default:
                                            return "";
                                    }
                                }).join(" "),
                                a = i.setStyle;
                            X(t, y.TRANSFORM_PREFIXED, i),
                                a(t, y.TRANSFORM_PREFIXED, o),
                                (u = r),
                                (c = n),
                                (s = u.actionTypeId),
                                (f = c.xValue),
                                (l = c.yValue),
                                (d = c.zValue),
                                ((s === T.TRANSFORM_MOVE && void 0 !== d) || (s === T.TRANSFORM_SCALE && void 0 !== d) || (s === T.TRANSFORM_ROTATE && (void 0 !== f || void 0 !== l))) && a(t, y.TRANSFORM_STYLE_PREFIXED, g.PRESERVE_3D);
                            var u, c, s, f, l, d;
                        })(t, e, n, i, a);
                    case g.RENDER_STYLE:
                        return (function (t, e, n, r, i, o) {
                            var a = o.setStyle,
                                u = r.actionTypeId,
                                c = r.config;
                            switch (u) {
                                case T.STYLE_SIZE:
                                    var s = r.config,
                                        f = s.widthUnit,
                                        d = void 0 === f ? "" : f,
                                        p = s.heightUnit,
                                        v = void 0 === p ? "" : p,
                                        E = n.widthValue,
                                        h = n.heightValue;
                                    void 0 !== E && (d === g.AUTO && (d = "px"), X(t, g.WIDTH, o), a(t, g.WIDTH, E + d)), void 0 !== h && (v === g.AUTO && (v = "px"), X(t, g.HEIGHT, o), a(t, g.HEIGHT, h + v));
                                    break;
                                case T.STYLE_FILTER:
                                    !(function (t, e, n, r) {
                                        var i = (0, l.default)(
                                                e,
                                                function (t, e, r) {
                                                    return "".concat(t, " ").concat(r, "(").concat(e).concat(j(r, n), ")");
                                                },
                                                ""
                                            ),
                                            o = r.setStyle;
                                        X(t, g.FILTER, r), o(t, g.FILTER, i);
                                    })(t, n, c, o);
                                    break;
                                case T.STYLE_BACKGROUND_COLOR:
                                case T.STYLE_BORDER:
                                case T.STYLE_TEXT_COLOR:
                                    var _ = O[u],
                                        I = Math.round(n.rValue),
                                        y = Math.round(n.gValue),
                                        m = Math.round(n.bValue),
                                        A = n.aValue;
                                    X(t, _, o), a(t, _, A >= 1 ? "rgb(".concat(I, ",").concat(y, ",").concat(m, ")") : "rgba(".concat(I, ",").concat(y, ",").concat(m, ",").concat(A, ")"));
                                    break;
                                default:
                                    var S = c.unit,
                                        b = void 0 === S ? "" : S;
                                    X(t, i, o), a(t, i, n.value + b);
                            }
                        })(t, 0, n, i, o, a);
                    case g.RENDER_GENERAL:
                        return (function (t, e, n) {
                            var r = n.setStyle;
                            switch (e.actionTypeId) {
                                case T.GENERAL_DISPLAY:
                                    var i = e.config.value;
                                    return void (i === g.FLEX && y.IS_BROWSER_ENV ? r(t, g.DISPLAY, y.FLEX_PREFIXED) : r(t, g.DISPLAY, i));
                            }
                        })(t, i, a);
                    case g.RENDER_PLUGIN:
                        var s = i.actionTypeId;
                        if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i);
                }
            }),
            (e.clearAllStyles = function (t) {
                var e = t.store,
                    n = t.elementApi,
                    r = e.getState().ixData,
                    i = r.events,
                    o = void 0 === i ? {} : i,
                    a = r.actionLists,
                    u = void 0 === a ? {} : a;
                Object.keys(o).forEach(function (t) {
                    var e = o[t],
                        r = e.action.config,
                        i = r.actionListId,
                        a = u[i];
                    a && B({ actionList: a, event: e, elementApi: n });
                }),
                    Object.keys(u).forEach(function (t) {
                        B({ actionList: u[t], elementApi: n });
                    });
            }),
            (e.cleanupHTMLElement = function (t, e, n) {
                var r = n.setStyle,
                    i = n.getStyle,
                    o = e.actionTypeId;
                if (o === T.STYLE_SIZE) {
                    var a = e.config;
                    a.widthUnit === g.AUTO && r(t, g.WIDTH, ""), a.heightUnit === g.AUTO && r(t, g.HEIGHT, "");
                }
                i(t, g.WILL_CHANGE) && H({ effect: k, actionTypeId: o, elementApi: n })(t);
            }),
            (e.getMaxDurationItemIndex = z),
            (e.getActionListProgress = function (t, e) {
                var n = t.actionItemGroups,
                    r = t.useFirstGroupAsInitialState,
                    i = e.actionItem,
                    o = e.verboseTimeElapsed,
                    a = void 0 === o ? 0 : o,
                    u = 0,
                    c = 0;
                return (
                    n.forEach(function (t, e) {
                        if (!r || 0 !== e) {
                            var n = t.actionItems,
                                o = n[z(n)],
                                s = o.config,
                                f = o.actionTypeId;
                            i.id === o.id && (c = u + a);
                            var l = P(f) === g.RENDER_GENERAL ? 0 : s.duration;
                            u += s.delay + l;
                        }
                    }),
                    u > 0 ? (0, h.optimizeFloat)(c / u) : 0
                );
            }),
            (e.reduceListToGroup = function (t) {
                var e = t.actionList,
                    n = t.actionItemId,
                    r = t.rawData,
                    i = e.actionItemGroups,
                    o = e.continuousParameterGroups,
                    a = [],
                    u = function (t) {
                        return a.push((0, v.mergeIn)(t, ["config"], { delay: 0, duration: 0 })), t.id === n;
                    };
                return (
                    i &&
                        i.some(function (t) {
                            return t.actionItems.some(u);
                        }),
                    o &&
                        o.some(function (t) {
                            return t.continuousActionGroups.some(function (t) {
                                return t.actionItems.some(u);
                            });
                        }),
                    (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, { id: e.id, actionItemGroups: [{ actionItems: a }] }))
                );
            }),
            (e.shouldNamespaceEventParameter = function (t, e) {
                var n = e.basedOn;
                return (t === I.SCROLLING_IN_VIEW && (n === I.ELEMENT || null == n)) || (t === I.MOUSE_MOVE && n === I.ELEMENT);
            }),
            (e.getNamespacedParameterId = function (t, e) {
                return t + g.COLON_DELIMITER + e;
            }),
            (e.shouldAllowMediaQuery = function (t, e) {
                if (null == e) return !0;
                return -1 !== t.indexOf(e);
            }),
            (e.mediaQueriesEqual = function (t, e) {
                return (0, E.default)(t && t.sort(), e && e.sort());
            }),
            (e.stringifyTarget = function (t) {
                if ("string" == typeof t) return t;
                var e = t.id,
                    n = void 0 === e ? "" : e,
                    r = t.selector,
                    i = void 0 === r ? "" : r,
                    o = t.useEventTarget,
                    a = void 0 === o ? "" : o;
                return n + g.BAR_DELIMITER + i + g.BAR_DELIMITER + a;
            }),
            (e.getItemConfigByKey = void 0);
        var f = s(n(194)),
            l = s(n(195)),
            d = s(n(201)),
            p = s(n(23)),
            v = n(13),
            E = s(n(93)),
            h = n(86),
            _ = n(90),
            g = n(49),
            I = n(89),
            T = n(48),
            y = n(31),
            m = function (t) {
                return t.trim();
            },
            O = Object.freeze(((r = {}), (0, c.default)(r, T.STYLE_BACKGROUND_COLOR, g.BACKGROUND_COLOR), (0, c.default)(r, T.STYLE_BORDER, g.BORDER_COLOR), (0, c.default)(r, T.STYLE_TEXT_COLOR, g.COLOR), r)),
            A = Object.freeze(
                ((i = {}),
                (0, c.default)(i, y.TRANSFORM_PREFIXED, g.TRANSFORM),
                (0, c.default)(i, g.BACKGROUND_COLOR, g.BACKGROUND),
                (0, c.default)(i, g.OPACITY, g.OPACITY),
                (0, c.default)(i, g.FILTER, g.FILTER),
                (0, c.default)(i, g.WIDTH, g.WIDTH),
                (0, c.default)(i, g.HEIGHT, g.HEIGHT),
                i)
            ),
            S = {},
            b = 1;
        var w = 1;
        var R = function (t, e) {
            return t === e;
        };
        function N(t) {
            var e = (0, u.default)(t);
            return "string" === e ? { id: t } : null != t && "object" === e ? { id: t.id, objectId: t.objectId, selector: t.selector, selectorGuids: t.selectorGuids, appliesTo: t.appliesTo, useEventTarget: t.useEventTarget } : {};
        }
        function C(t) {
            var e = t.config,
                n = t.event,
                r = t.eventTarget,
                i = t.elementRoot,
                o = t.elementApi;
            if (!o) throw new Error("IX2 missing elementApi");
            var a = o.getValidDocument,
                u = o.getQuerySelector,
                c = o.queryDocument,
                s = o.getChildElements,
                f = o.getSiblingElements,
                l = o.matchSelector,
                d = o.elementContains,
                v = o.isSiblingNode,
                E = e.target;
            if (!E) return [];
            var h = N(E),
                _ = h.id,
                T = h.objectId,
                m = h.selector,
                O = h.selectorGuids,
                A = h.appliesTo,
                b = h.useEventTarget;
            if (T) return [S[T] || (S[T] = {})];
            if (A === I.PAGE) {
                var w = a(_);
                return w ? [w] : [];
            }
            var R,
                C,
                L,
                x = (0, p.default)(n, "action.config.affectedElements", {})[_ || m] || {},
                D = Boolean(x.id || x.selector),
                P = n && u(N(n.target));
            if ((D ? ((R = x.limitAffectedElements), (C = P), (L = u(x))) : (C = L = u({ id: _, selector: m, selectorGuids: O })), n && b)) {
                var M = r && (L || !0 === b) ? [r] : c(P);
                if (L) {
                    if (b === g.PARENT)
                        return c(L).filter(function (t) {
                            return M.some(function (e) {
                                return d(t, e);
                            });
                        });
                    if (b === g.CHILDREN)
                        return c(L).filter(function (t) {
                            return M.some(function (e) {
                                return d(e, t);
                            });
                        });
                    if (b === g.SIBLINGS)
                        return c(L).filter(function (t) {
                            return M.some(function (e) {
                                return v(e, t);
                            });
                        });
                }
                return M;
            }
            return null == C || null == L
                ? []
                : y.IS_BROWSER_ENV && i
                ? c(L).filter(function (t) {
                      return i.contains(t);
                  })
                : R === g.CHILDREN
                ? c(C, L)
                : R === g.IMMEDIATE_CHILDREN
                ? s(c(C)).filter(l(L))
                : R === g.SIBLINGS
                ? f(c(C)).filter(l(L))
                : c(L);
        }
        var L = /px/,
            x = function (t, e) {
                return e.reduce(function (t, e) {
                    return null == t[e.type] && (t[e.type] = F[e.type]), t;
                }, t || {});
            };
        var D = function (t, e) {
            return e && (t[e.type] = e.value || 0), t;
        };
        function P(t) {
            return /^TRANSFORM_/.test(t) ? g.RENDER_TRANSFORM : /^STYLE_/.test(t) ? g.RENDER_STYLE : /^GENERAL_/.test(t) ? g.RENDER_GENERAL : /^PLUGIN_/.test(t) ? g.RENDER_PLUGIN : void 0;
        }
        e.getItemConfigByKey = function (t, e, n) {
            if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
            switch (t) {
                case T.STYLE_FILTER:
                    var r = (0, d.default)(n.filters, function (t) {
                        return t.type === e;
                    });
                    return r ? r.value : 0;
                default:
                    return n[e];
            }
        };
        var M =
                ((o = {}),
                (0, c.default)(o, T.TRANSFORM_MOVE, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
                (0, c.default)(o, T.TRANSFORM_SCALE, Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })),
                (0, c.default)(o, T.TRANSFORM_ROTATE, Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })),
                (0, c.default)(o, T.TRANSFORM_SKEW, Object.freeze({ xValue: 0, yValue: 0 })),
                o),
            F = Object.freeze({ blur: 0, "hue-rotate": 0, invert: 0, grayscale: 0, saturate: 100, sepia: 0, contrast: 100, brightness: 100 }),
            j = function (t, e) {
                var n = (0, d.default)(e.filters, function (e) {
                    return e.type === t;
                });
                if (n && n.unit) return n.unit;
                switch (t) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%";
                }
            },
            G = Object.keys(M);
        var U = /^rgb/,
            V = RegExp("rgba?".concat("\\(([^)]+)\\)"));
        function X(t, e, n) {
            if (y.IS_BROWSER_ENV) {
                var r = A[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, g.WILL_CHANGE);
                    if (a) {
                        var u = a.split(g.COMMA_DELIMITER).map(m);
                        -1 === u.indexOf(r) && o(t, g.WILL_CHANGE, u.concat(r).join(g.COMMA_DELIMITER));
                    } else o(t, g.WILL_CHANGE, r);
                }
            }
        }
        function k(t, e, n) {
            if (y.IS_BROWSER_ENV) {
                var r = A[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, g.WILL_CHANGE);
                    a &&
                        -1 !== a.indexOf(r) &&
                        o(
                            t,
                            g.WILL_CHANGE,
                            a
                                .split(g.COMMA_DELIMITER)
                                .map(m)
                                .filter(function (t) {
                                    return t !== r;
                                })
                                .join(g.COMMA_DELIMITER)
                        );
                }
            }
        }
        function B(t) {
            var e = t.actionList,
                n = void 0 === e ? {} : e,
                r = t.event,
                i = t.elementApi,
                o = n.actionItemGroups,
                a = n.continuousParameterGroups;
            o &&
                o.forEach(function (t) {
                    W({ actionGroup: t, event: r, elementApi: i });
                }),
                a &&
                    a.forEach(function (t) {
                        t.continuousActionGroups.forEach(function (t) {
                            W({ actionGroup: t, event: r, elementApi: i });
                        });
                    });
        }
        function W(t) {
            var e = t.actionGroup,
                n = t.event,
                r = t.elementApi;
            e.actionItems.forEach(function (t) {
                var e,
                    i = t.actionTypeId,
                    o = t.config;
                (e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : H({ effect: Y, actionTypeId: i, elementApi: r })), C({ config: o, event: n, elementApi: r }).forEach(e);
            });
        }
        var H = function (t) {
            var e = t.effect,
                n = t.actionTypeId,
                r = t.elementApi;
            return function (t) {
                switch (n) {
                    case T.TRANSFORM_MOVE:
                    case T.TRANSFORM_SCALE:
                    case T.TRANSFORM_ROTATE:
                    case T.TRANSFORM_SKEW:
                        e(t, y.TRANSFORM_PREFIXED, r);
                        break;
                    case T.STYLE_FILTER:
                        e(t, g.FILTER, r);
                        break;
                    case T.STYLE_OPACITY:
                        e(t, g.OPACITY, r);
                        break;
                    case T.STYLE_SIZE:
                        e(t, g.WIDTH, r), e(t, g.HEIGHT, r);
                        break;
                    case T.STYLE_BACKGROUND_COLOR:
                    case T.STYLE_BORDER:
                    case T.STYLE_TEXT_COLOR:
                        e(t, O[n], r);
                        break;
                    case T.GENERAL_DISPLAY:
                        e(t, g.DISPLAY, r);
                }
            };
        };
        function Y(t, e, n) {
            var r = n.setStyle;
            k(t, e, n), r(t, e, ""), e === y.TRANSFORM_PREFIXED && r(t, y.TRANSFORM_STYLE_PREFIXED, "");
        }
        function z(t) {
            var e = 0,
                n = 0;
            return (
                t.forEach(function (t, r) {
                    var i = t.config,
                        o = i.delay + i.duration;
                    o >= e && ((e = o), (n = r));
                }),
                n
            );
        }
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t || t != t ? e : t;
        };
    },
    function (t, e, n) {
        var r = n(196),
            i = n(91),
            o = n(6),
            a = n(200),
            u = n(1);
        t.exports = function (t, e, n) {
            var c = u(t) ? r : a,
                s = arguments.length < 3;
            return c(t, o(e, 4), n, s, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            var i = -1,
                o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
            return n;
        };
    },
    function (t, e, n) {
        var r = n(198)();
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), u = a.length; u--; ) {
                    var c = a[t ? u : ++i];
                    if (!1 === n(o[c], c, o)) break;
                }
                return e;
            };
        };
    },
    function (t, e, n) {
        var r = n(10);
        t.exports = function (t, e) {
            return function (n, i) {
                if (null == n) return n;
                if (!r(n)) return t(n, i);
                for (var o = n.length, a = e ? o : -1, u = Object(n); (e ? a-- : ++a < o) && !1 !== i(u[a], a, u); );
                return n;
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r, i) {
            return (
                i(t, function (t, i, o) {
                    n = r ? ((r = !1), t) : e(n, t, i, o);
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(63)(n(202));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(83),
            i = n(6),
            o = n(46),
            a = Math.max,
            u = Math.min;
        t.exports = function (t, e, n) {
            var c = null == t ? 0 : t.length;
            if (!c) return -1;
            var s = c - 1;
            return void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))), r(t, i(e, 3), s, !0);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function i(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
        }
        t.exports = function (t, e) {
            if (i(t, e)) return !0;
            if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
            var n = Object.keys(t),
                o = Object.keys(e);
            if (n.length !== o.length) return !1;
            for (var a = 0; a < n.length; a++) if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(0)(n(26));
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixRequest = void 0);
        var o = n(3),
            a = n(13),
            u = o.IX2EngineActionTypes,
            c = u.IX2_PREVIEW_REQUESTED,
            s = u.IX2_PLAYBACK_REQUESTED,
            f = u.IX2_STOP_REQUESTED,
            l = u.IX2_CLEAR_REQUESTED,
            d = { preview: {}, playback: {}, stop: {}, clear: {} },
            p = Object.create(null, ((r = {}), (0, i.default)(r, c, { value: "preview" }), (0, i.default)(r, s, { value: "playback" }), (0, i.default)(r, f, { value: "stop" }), (0, i.default)(r, l, { value: "clear" }), r));
        e.ixRequest = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
                e = arguments.length > 1 ? arguments[1] : void 0;
            if (e.type in p) {
                var n = [p[e.type]];
                return (0, a.setIn)(t, [n], Object.assign({}, e.payload));
            }
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixSession = void 0);
        var r = n(3),
            i = n(13),
            o = r.IX2EngineActionTypes,
            a = o.IX2_SESSION_INITIALIZED,
            u = o.IX2_SESSION_STARTED,
            c = o.IX2_TEST_FRAME_RENDERED,
            s = o.IX2_SESSION_STOPPED,
            f = o.IX2_EVENT_LISTENER_ADDED,
            l = o.IX2_EVENT_STATE_CHANGED,
            d = o.IX2_ANIMATION_FRAME_CHANGED,
            p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            v = o.IX2_VIEWPORT_WIDTH_CHANGED,
            E = o.IX2_MEDIA_QUERIES_DEFINED,
            h = { active: !1, tick: 0, eventListeners: [], eventState: {}, playbackState: {}, viewportWidth: 0, mediaQueryKey: null, hasBoundaryNodes: !1, hasDefinedMediaQueries: !1 };
        e.ixSession = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h,
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case a:
                    var n = e.payload.hasBoundaryNodes;
                    return (0, i.set)(t, "hasBoundaryNodes", n);
                case u:
                    return (0, i.set)(t, "active", !0);
                case c:
                    var r = e.payload.step,
                        o = void 0 === r ? 20 : r;
                    return (0, i.set)(t, "tick", t.tick + o);
                case s:
                    return h;
                case d:
                    var _ = e.payload.now;
                    return (0, i.set)(t, "tick", _);
                case f:
                    var g = (0, i.addLast)(t.eventListeners, e.payload);
                    return (0, i.set)(t, "eventListeners", g);
                case l:
                    var I = e.payload,
                        T = I.stateKey,
                        y = I.newState;
                    return (0, i.setIn)(t, ["eventState", T], y);
                case p:
                    var m = e.payload,
                        O = m.actionListId,
                        A = m.isPlaying;
                    return (0, i.setIn)(t, ["playbackState", O], A);
                case v:
                    for (var S = e.payload, b = S.width, w = S.mediaQueries, R = w.length, N = null, C = 0; C < R; C++) {
                        var L = w[C],
                            x = L.key,
                            D = L.min,
                            P = L.max;
                        if (b >= D && b <= P) {
                            N = x;
                            break;
                        }
                    }
                    return (0, i.merge)(t, { viewportWidth: b, mediaQueryKey: N });
                case E:
                    return (0, i.set)(t, "hasDefinedMediaQueries", !0);
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixInstances = void 0);
        var r = n(3),
            i = n(13),
            o = r.IX2EngineActionTypes,
            a = o.IX2_RAW_DATA_IMPORTED,
            u = o.IX2_SESSION_STOPPED,
            c = o.IX2_INSTANCE_ADDED,
            s = o.IX2_INSTANCE_STARTED,
            f = o.IX2_INSTANCE_REMOVED,
            l = o.IX2_ANIMATION_FRAME_CHANGED,
            d = r.IX2EasingUtils,
            p = d.optimizeFloat,
            v = d.applyEasing,
            E = d.createBezierEasing,
            h = r.IX2EngineConstants.RENDER_GENERAL,
            _ = r.IX2VanillaUtils,
            g = _.getItemConfigByKey,
            I = _.getRenderType,
            T = _.getStyleProp,
            y = function (t, e) {
                var n = t.position,
                    r = t.parameterId,
                    o = t.actionGroups,
                    a = t.destinationKeys,
                    u = t.smoothing,
                    c = t.restingValue,
                    s = t.actionTypeId,
                    f = t.customEasingFn,
                    l = e.payload.parameters,
                    d = Math.max(1 - u, 0.01),
                    E = l[r];
                null == E && ((d = 1), (E = c));
                var h,
                    _,
                    I,
                    T,
                    y = Math.max(E, 0) || 0,
                    m = p(y - n),
                    O = p(n + m * d),
                    A = 100 * O;
                if (O === n && t.current) return t;
                for (var S = 0, b = o.length; S < b; S++) {
                    var w = o[S],
                        R = w.keyframe,
                        N = w.actionItems;
                    if ((0 === S && (h = N[0]), A >= R)) {
                        h = N[0];
                        var C = o[S + 1],
                            L = C && A !== R;
                        (_ = L ? C.actionItems[0] : null), L && ((I = R / 100), (T = (C.keyframe - R) / 100));
                    }
                }
                var x = {};
                if (h && !_)
                    for (var D = 0, P = a.length; D < P; D++) {
                        var M = a[D];
                        x[M] = g(s, M, h.config);
                    }
                else if (h && _ && void 0 !== I && void 0 !== T)
                    for (var F = (O - I) / T, j = h.config.easing, G = v(j, F, f), U = 0, V = a.length; U < V; U++) {
                        var X = a[U],
                            k = g(s, X, h.config),
                            B = (g(s, X, _.config) - k) * G + k;
                        x[X] = B;
                    }
                return (0, i.merge)(t, { position: O, current: x });
            },
            m = function (t, e) {
                var n = t,
                    r = n.active,
                    o = n.origin,
                    a = n.start,
                    u = n.immediate,
                    c = n.renderType,
                    s = n.verbose,
                    f = n.actionItem,
                    l = n.destination,
                    d = n.destinationKeys,
                    E = n.pluginDuration,
                    _ = n.instanceDelay,
                    g = n.customEasingFn,
                    I = f.config.easing,
                    T = f.config,
                    y = T.duration,
                    m = T.delay;
                null != E && (y = E), (m = null != _ ? _ : m), c === h ? (y = 0) : u && (y = m = 0);
                var O = e.payload.now;
                if (r && o) {
                    var A = O - (a + m);
                    if (s) {
                        var S = O - a,
                            b = y + m,
                            w = p(Math.min(Math.max(0, S / b), 1));
                        t = (0, i.set)(t, "verboseTimeElapsed", b * w);
                    }
                    if (A < 0) return t;
                    var R = p(Math.min(Math.max(0, A / y), 1)),
                        N = v(I, R, g),
                        C = {},
                        L = null;
                    return (
                        d.length &&
                            (L = d.reduce(function (t, e) {
                                var n = l[e],
                                    r = parseFloat(o[e]) || 0,
                                    i = (parseFloat(n) - r) * N + r;
                                return (t[e] = i), t;
                            }, {})),
                        (C.current = L),
                        (C.position = R),
                        1 === R && ((C.active = !1), (C.complete = !0)),
                        (0, i.merge)(t, C)
                    );
                }
                return t;
            };
        e.ixInstances = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case a:
                    return e.payload.ixInstances || Object.freeze({});
                case u:
                    return Object.freeze({});
                case c:
                    var n = e.payload,
                        r = n.instanceId,
                        o = n.elementId,
                        d = n.actionItem,
                        p = n.eventId,
                        v = n.eventTarget,
                        h = n.eventStateKey,
                        _ = n.actionListId,
                        g = n.groupIndex,
                        O = n.isCarrier,
                        A = n.origin,
                        S = n.destination,
                        b = n.immediate,
                        w = n.verbose,
                        R = n.continuous,
                        N = n.parameterId,
                        C = n.actionGroups,
                        L = n.smoothing,
                        x = n.restingValue,
                        D = n.pluginInstance,
                        P = n.pluginDuration,
                        M = n.instanceDelay,
                        F = d.actionTypeId,
                        j = I(F),
                        G = T(j, F),
                        U = Object.keys(S).filter(function (t) {
                            return null != S[t];
                        }),
                        V = d.config.easing;
                    return (0, i.set)(t, r, {
                        id: r,
                        elementId: o,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: A,
                        destination: S,
                        destinationKeys: U,
                        immediate: b,
                        verbose: w,
                        current: null,
                        actionItem: d,
                        actionTypeId: F,
                        eventId: p,
                        eventTarget: v,
                        eventStateKey: h,
                        actionListId: _,
                        groupIndex: g,
                        renderType: j,
                        isCarrier: O,
                        styleProp: G,
                        continuous: R,
                        parameterId: N,
                        actionGroups: C,
                        smoothing: L,
                        restingValue: x,
                        pluginInstance: D,
                        pluginDuration: P,
                        instanceDelay: M,
                        customEasingFn: Array.isArray(V) && 4 === V.length ? E(V) : void 0,
                    });
                case s:
                    var X = e.payload,
                        k = X.instanceId,
                        B = X.time;
                    return (0, i.mergeIn)(t, [k], { active: !0, complete: !1, start: B });
                case f:
                    var W = e.payload.instanceId;
                    if (!t[W]) return t;
                    for (var H = {}, Y = Object.keys(t), z = Y.length, K = 0; K < z; K++) {
                        var Q = Y[K];
                        Q !== W && (H[Q] = t[Q]);
                    }
                    return H;
                case l:
                    for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                        var tt = $[J],
                            et = t[tt],
                            nt = et.continuous ? y : m;
                        q = (0, i.set)(q, tt, nt(et, e));
                    }
                    return q;
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixParameters = void 0);
        var r = n(3).IX2EngineActionTypes,
            i = r.IX2_RAW_DATA_IMPORTED,
            o = r.IX2_SESSION_STOPPED,
            a = r.IX2_PARAMETER_CHANGED;
        e.ixParameters = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case i:
                    return e.payload.ixParameters || {};
                case o:
                    return {};
                case a:
                    var n = e.payload,
                        r = n.key,
                        u = n.value;
                    return (t[r] = u), t;
                default:
                    return t;
            }
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = {},
                o = Object.keys(t);
            for (r = 0; r < o.length; r++) (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
        };
    },
    function (t, e, n) {
        var r = n(40),
            i = n(42),
            o = n(10),
            a = n(210),
            u = n(211),
            c = "[object Map]",
            s = "[object Set]";
        t.exports = function (t) {
            if (null == t) return 0;
            if (o(t)) return a(t) ? u(t) : t.length;
            var e = i(t);
            return e == c || e == s ? t.size : r(t).length;
        };
    },
    function (t, e, n) {
        var r = n(9),
            i = n(1),
            o = n(8),
            a = "[object String]";
        t.exports = function (t) {
            return "string" == typeof t || (!i(t) && o(t) && r(t) == a);
        };
    },
    function (t, e, n) {
        var r = n(212),
            i = n(213),
            o = n(214);
        t.exports = function (t) {
            return i(t) ? o(t) : r(t);
        };
    },
    function (t, e, n) {
        var r = n(82)("length");
        t.exports = r;
    },
    function (t, e) {
        var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = function (t) {
            return n.test(t);
        };
    },
    function (t, e) {
        var n = "[\\ud800-\\udfff]",
            r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            o = "[^\\ud800-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            c = "(?:" + r + "|" + i + ")" + "?",
            s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
            f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
            l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
        t.exports = function (t) {
            for (var e = (l.lastIndex = 0); l.test(t); ) ++e;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(216),
            o = n(217);
        t.exports = function (t, e) {
            return o(t, i(r(e)));
        };
    },
    function (t, e) {
        var n = "Expected a function";
        t.exports = function (t) {
            if ("function" != typeof t) throw new TypeError(n);
            return function () {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
            };
        };
    },
    function (t, e, n) {
        var r = n(81),
            i = n(6),
            o = n(218),
            a = n(221);
        t.exports = function (t, e) {
            if (null == t) return {};
            var n = r(a(t), function (t) {
                return [t];
            });
            return (
                (e = i(e)),
                o(t, n, function (t, n) {
                    return e(t, n[0]);
                })
            );
        };
    },
    function (t, e, n) {
        var r = n(43),
            i = n(219),
            o = n(24);
        t.exports = function (t, e, n) {
            for (var a = -1, u = e.length, c = {}; ++a < u; ) {
                var s = e[a],
                    f = r(t, s);
                n(f, s) && i(c, o(s, t), f);
            }
            return c;
        };
    },
    function (t, e, n) {
        var r = n(220),
            i = n(24),
            o = n(37),
            a = n(5),
            u = n(12);
        t.exports = function (t, e, n, c) {
            if (!a(t)) return t;
            for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f; ) {
                var p = u(e[s]),
                    v = n;
                if (s != l) {
                    var E = d[p];
                    void 0 === (v = c ? c(E, p, d) : void 0) && (v = a(E) ? E : o(e[s + 1]) ? [] : {});
                }
                r(d, p, v), (d = d[p]);
            }
            return t;
        };
    },
    function (t, e, n) {
        var r = n(95),
            i = n(32),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n) {
            var a = t[e];
            (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
        };
    },
    function (t, e, n) {
        var r = n(70),
            i = n(222),
            o = n(224);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e, n) {
        var r = n(35),
            i = n(223),
            o = n(71),
            a = n(72),
            u = Object.getOwnPropertySymbols
                ? function (t) {
                      for (var e = []; t; ) r(e, o(t)), (t = i(t));
                      return e;
                  }
                : a;
        t.exports = u;
    },
    function (t, e, n) {
        var r = n(75)(Object.getPrototypeOf, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(73),
            i = n(225),
            o = n(10);
        t.exports = function (t) {
            return o(t) ? r(t, !0) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(41),
            o = n(226),
            a = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return o(t);
            var e = i(t),
                n = [];
            for (var u in t) ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
            return n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
        };
    },
    function (t, e, n) {
        var r = n(40),
            i = n(42),
            o = n(22),
            a = n(1),
            u = n(10),
            c = n(36),
            s = n(41),
            f = n(38),
            l = "[object Map]",
            d = "[object Set]",
            p = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (null == t) return !0;
            if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
            var e = i(t);
            if (e == l || e == d) return !t.size;
            if (s(t)) return !r(t).length;
            for (var n in t) if (p.call(t, n)) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        var r = n(95),
            i = n(92),
            o = n(6);
        t.exports = function (t, e) {
            var n = {};
            return (
                (e = o(e, 3)),
                i(t, function (t, i, o) {
                    r(n, i, e(t, i, o));
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(230),
            i = n(91),
            o = n(231),
            a = n(1);
        t.exports = function (t, e) {
            return (a(t) ? r : i)(t, o(e));
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t); );
            return t;
        };
    },
    function (t, e, n) {
        var r = n(45);
        t.exports = function (t) {
            return "function" == typeof t ? t : r;
        };
    },
    function (t, e, n) {
        var r = n(97),
            i = n(80),
            o = n(46),
            a = n(79);
        t.exports = function (t, e, n) {
            (t = a(t)), (e = i(e));
            var u = t.length,
                c = (n = void 0 === n ? u : r(o(n), 0, u));
            return (n -= e.length) >= 0 && t.slice(n, c) == e;
        };
    },
    function (t, e, n) {
        var r = n(234),
            i = n(5),
            o = "Expected a function";
        t.exports = function (t, e, n) {
            var a = !0,
                u = !0;
            if ("function" != typeof t) throw new TypeError(o);
            return i(n) && ((a = "leading" in n ? !!n.leading : a), (u = "trailing" in n ? !!n.trailing : u)), r(t, e, { leading: a, maxWait: e, trailing: u });
        };
    },
    function (t, e, n) {
        var r = n(5),
            i = n(235),
            o = n(47),
            a = "Expected a function",
            u = Math.max,
            c = Math.min;
        t.exports = function (t, e, n) {
            var s,
                f,
                l,
                d,
                p,
                v,
                E = 0,
                h = !1,
                _ = !1,
                g = !0;
            if ("function" != typeof t) throw new TypeError(a);
            function I(e) {
                var n = s,
                    r = f;
                return (s = f = void 0), (E = e), (d = t.apply(r, n));
            }
            function T(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || (_ && t - E >= l);
            }
            function y() {
                var t = i();
                if (T(t)) return m(t);
                p = setTimeout(
                    y,
                    (function (t) {
                        var n = e - (t - v);
                        return _ ? c(n, l - (t - E)) : n;
                    })(t)
                );
            }
            function m(t) {
                return (p = void 0), g && s ? I(t) : ((s = f = void 0), d);
            }
            function O() {
                var t = i(),
                    n = T(t);
                if (((s = arguments), (f = this), (v = t), n)) {
                    if (void 0 === p)
                        return (function (t) {
                            return (E = t), (p = setTimeout(y, e)), h ? I(t) : d;
                        })(v);
                    if (_) return clearTimeout(p), (p = setTimeout(y, e)), I(v);
                }
                return void 0 === p && (p = setTimeout(y, e)), d;
            }
            return (
                (e = o(e) || 0),
                r(n) && ((h = !!n.leading), (l = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l), (g = "trailing" in n ? !!n.trailing : g)),
                (O.cancel = function () {
                    void 0 !== p && clearTimeout(p), (E = 0), (s = v = f = p = void 0);
                }),
                (O.flush = function () {
                    return void 0 === p ? d : m(i());
                }),
                O
            );
        };
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function () {
            return r.Date.now();
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(14));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setStyle = function (t, e, n) {
                t.style[e] = n;
            }),
            (e.getStyle = function (t, e) {
                return t.style[e];
            }),
            (e.getProperty = function (t, e) {
                return t[e];
            }),
            (e.matchSelector = function (t) {
                return function (e) {
                    return e[o](t);
                };
            }),
            (e.getQuerySelector = function (t) {
                var e = t.id,
                    n = t.selector;
                if (e) {
                    var r = e;
                    if (-1 !== e.indexOf(u)) {
                        var i = e.split(u),
                            o = i[0];
                        if (((r = i[1]), o !== document.documentElement.getAttribute(f))) return null;
                    }
                    return '[data-w-id^="'.concat(r, '"]');
                }
                return n;
            }),
            (e.getValidDocument = function (t) {
                if (null == t || t === document.documentElement.getAttribute(f)) return document;
                return null;
            }),
            (e.queryDocument = function (t, e) {
                return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t));
            }),
            (e.elementContains = function (t, e) {
                return t.contains(e);
            }),
            (e.isSiblingNode = function (t, e) {
                return t !== e && t.parentNode === e.parentNode;
            }),
            (e.getChildElements = function (t) {
                for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
                    var i = t[n].children,
                        o = i.length;
                    if (o) for (var a = 0; a < o; a++) e.push(i[a]);
                }
                return e;
            }),
            (e.getSiblingElements = function () {
                for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a; ) -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
                    }
                }
                return e;
            }),
            (e.getRefType = function (t) {
                if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? c : s;
                return null;
            }),
            (e.getClosestElement = void 0);
        var i = n(3),
            o = i.IX2BrowserSupport.ELEMENT_MATCHES,
            a = i.IX2EngineConstants,
            u = a.IX2_ID_DELIMITER,
            c = a.HTML_ELEMENT,
            s = a.PLAIN_OBJECT,
            f = a.WF_PAGE;
        var l = Element.prototype.closest
            ? function (t, e) {
                  return document.documentElement.contains(t) ? t.closest(e) : null;
              }
            : function (t, e) {
                  if (!document.documentElement.contains(t)) return null;
                  var n = t;
                  do {
                      if (n[o] && n[o](e)) return n;
                      n = n.parentNode;
                  } while (null != n);
                  return null;
              };
        e.getClosestElement = l;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(0),
            o = i(n(26)),
            a = i(n(14)),
            u = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var c,
            s,
            f,
            l = u(n(238)),
            d = u(n(23)),
            p = u(n(257)),
            v = n(94),
            E = n(50),
            h = n(3),
            _ = h.IX2EngineEventTypes,
            g = _.MOUSE_CLICK,
            I = _.MOUSE_SECOND_CLICK,
            T = _.MOUSE_DOWN,
            y = _.MOUSE_UP,
            m = _.MOUSE_OVER,
            O = _.MOUSE_OUT,
            A = _.DROPDOWN_CLOSE,
            S = _.DROPDOWN_OPEN,
            b = _.SLIDER_ACTIVE,
            w = _.SLIDER_INACTIVE,
            R = _.TAB_ACTIVE,
            N = _.TAB_INACTIVE,
            C = _.NAVBAR_CLOSE,
            L = _.NAVBAR_OPEN,
            x = _.MOUSE_MOVE,
            D = _.PAGE_SCROLL_DOWN,
            P = _.SCROLL_INTO_VIEW,
            M = _.COMPONENT_ACTIVE,
            F = _.COMPONENT_INACTIVE,
            j = _.SCROLL_OUT_OF_VIEW,
            G = _.PAGE_SCROLL_UP,
            U = _.SCROLLING_IN_VIEW,
            V = _.PAGE_FINISH,
            X = _.ECOMMERCE_CART_CLOSE,
            k = _.ECOMMERCE_CART_OPEN,
            B = _.PAGE_START,
            W = _.PAGE_SCROLL,
            H = _.ELEMENT,
            Y = _.VIEWPORT,
            z = _.PAGE,
            K = h.IX2EngineConstants.COLON_DELIMITER,
            Q = h.IX2VanillaUtils.getNamespacedParameterId,
            q = function (t) {
                return function (e) {
                    return !("object" !== (0, a.default)(e) || !t(e)) || e;
                };
            },
            $ = q(function (t) {
                return t.element === t.nativeEvent.target;
            }),
            Z = q(function (t) {
                var e = t.element,
                    n = t.nativeEvent;
                return e.contains(n.target);
            }),
            J = (0, l.default)([$, Z]),
            tt = function (t, e) {
                if (e) {
                    var n = t.getState().ixData.events[e];
                    if (n && !ut[n.eventTypeId]) return n;
                }
                return null;
            },
            et = function (t, e) {
                var n = t.store,
                    r = t.event,
                    i = t.element,
                    o = t.eventStateKey,
                    a = r.action,
                    u = r.id,
                    c = a.config,
                    s = c.actionListId,
                    f = c.autoStopEventId,
                    l = tt(n, f);
                return (
                    l && (0, v.stopActionGroup)({ store: n, eventId: f, eventTarget: i, eventStateKey: f + K + o.split(K)[1], actionListId: (0, d.default)(l, "action.config.actionListId") }),
                    (0, v.stopActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }),
                    (0, v.startActionGroup)({ store: n, eventId: u, eventTarget: i, eventStateKey: o, actionListId: s }),
                    e
                );
            },
            nt = function (t, e) {
                return function (n, r) {
                    return !0 === t(n, r) ? e(n, r) : r;
                };
            },
            rt = { handler: nt(J, et) },
            it = Object.assign({}, rt, { types: [M, F].join(" ") }),
            ot = [
                { target: window, types: "resize orientationchange", throttle: !0 },
                { target: document, types: "scroll wheel readystatechange IX2_PAGE_UPDATE", throttle: !0 },
            ],
            at = { types: ot },
            ut = { PAGE_START: B, PAGE_FINISH: V },
            ct =
                ((c = void 0 !== window.pageXOffset),
                (s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body),
                function () {
                    return {
                        scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                        scrollTop: c ? window.pageYOffset : s.scrollTop,
                        stiffScrollTop: (0, p.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                        scrollWidth: s.scrollWidth,
                        scrollHeight: s.scrollHeight,
                        clientWidth: s.clientWidth,
                        clientHeight: s.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight,
                    };
                }),
            st = function (t) {
                var e = t.element,
                    n = t.nativeEvent,
                    r = n.type,
                    i = n.target,
                    o = n.relatedTarget,
                    a = e.contains(i);
                if ("mouseover" === r && a) return !0;
                var u = e.contains(o);
                return !("mouseout" !== r || !a || !u);
            },
            ft = function (t) {
                var e,
                    n,
                    r = t.element,
                    i = t.event.config,
                    o = ct(),
                    a = o.clientWidth,
                    u = o.clientHeight,
                    c = i.scrollOffsetValue,
                    s = "PX" === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
                return (e = r.getBoundingClientRect()), (n = { left: 0, top: s, right: a, bottom: u - s }), !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top);
            },
            lt = function (t) {
                return function (e, n) {
                    var r = e.nativeEvent.type,
                        i = -1 !== [M, F].indexOf(r) ? r === M : n.isActive,
                        o = Object.assign({}, n, { isActive: i });
                    return n && o.isActive === n.isActive ? o : t(e, o) || o;
                };
            },
            dt = function (t) {
                return function (e, n) {
                    var r = { elementHovered: st(e) };
                    return ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r)) || r;
                };
            },
            pt = function (t) {
                return function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = ct(),
                        i = r.stiffScrollTop,
                        o = r.scrollHeight,
                        a = r.innerHeight,
                        u = e.event,
                        c = u.config,
                        s = u.eventTypeId,
                        f = c.scrollOffsetValue,
                        l = "PX" === c.scrollOffsetUnit,
                        d = o - a,
                        p = Number((i / d).toFixed(2));
                    if (n && n.percentTop === p) return n;
                    var v,
                        E,
                        h = (l ? f : (a * (f || 0)) / 100) / d,
                        _ = 0;
                    n && ((v = p > n.percentTop), (_ = (E = n.scrollingDown !== v) ? p : n.anchorTop));
                    var g = s === D ? p >= _ + h : p <= _ - h,
                        I = Object.assign({}, n, { percentTop: p, inBounds: g, anchorTop: _, scrollingDown: v });
                    return (n && g && (E || I.inBounds !== n.inBounds) && t(e, I)) || I;
                };
            },
            vt = function (t) {
                return function (e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clickCount: 0 },
                        r = { clickCount: (n.clickCount % 2) + 1 };
                    return (r.clickCount !== n.clickCount && t(e, r)) || r;
                };
            },
            Et = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return Object.assign({}, it, {
                    handler: nt(
                        t ? J : $,
                        lt(function (t, e) {
                            return e.isActive ? rt.handler(t, e) : e;
                        })
                    ),
                });
            },
            ht = function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return Object.assign({}, it, {
                    handler: nt(
                        t ? J : $,
                        lt(function (t, e) {
                            return e.isActive ? e : rt.handler(t, e);
                        })
                    ),
                });
            },
            _t = Object.assign({}, at, {
                handler:
                    ((f = function (t, e) {
                        var n = e.elementVisible,
                            r = t.event;
                        return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : (r.eventTypeId === P) === n ? (et(t), Object.assign({}, e, { triggered: !0 })) : e;
                    }),
                    function (t, e) {
                        var n = Object.assign({}, e, { elementVisible: ft(t) });
                        return ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n)) || n;
                    }),
            }),
            gt =
                ((r = {}),
                (0, o.default)(r, b, Et()),
                (0, o.default)(r, w, ht()),
                (0, o.default)(r, S, Et()),
                (0, o.default)(r, A, ht()),
                (0, o.default)(r, L, Et(!1)),
                (0, o.default)(r, C, ht(!1)),
                (0, o.default)(r, R, Et()),
                (0, o.default)(r, N, ht()),
                (0, o.default)(r, k, { types: "ecommerce-cart-open", handler: nt(J, et) }),
                (0, o.default)(r, X, { types: "ecommerce-cart-close", handler: nt(J, et) }),
                (0, o.default)(r, g, {
                    types: "click",
                    handler: nt(
                        J,
                        vt(function (t, e) {
                            var n,
                                r,
                                i,
                                o = e.clickCount;
                            (r = (n = t).store), (i = n.event.action.config.autoStopEventId), Boolean(tt(r, i)) ? 1 === o && et(t) : et(t);
                        })
                    ),
                }),
                (0, o.default)(r, I, {
                    types: "click",
                    handler: nt(
                        J,
                        vt(function (t, e) {
                            2 === e.clickCount && et(t);
                        })
                    ),
                }),
                (0, o.default)(r, T, Object.assign({}, rt, { types: "mousedown" })),
                (0, o.default)(r, y, Object.assign({}, rt, { types: "mouseup" })),
                (0, o.default)(r, m, {
                    types: "mouseover mouseout",
                    handler: nt(
                        J,
                        dt(function (t, e) {
                            e.elementHovered && et(t);
                        })
                    ),
                }),
                (0, o.default)(r, O, {
                    types: "mouseover mouseout",
                    handler: nt(
                        J,
                        dt(function (t, e) {
                            e.elementHovered || et(t);
                        })
                    ),
                }),
                (0, o.default)(r, x, {
                    types: "mousemove mouseout scroll",
                    handler: function (t) {
                        var e = t.store,
                            n = t.element,
                            r = t.eventConfig,
                            i = t.nativeEvent,
                            o = t.eventStateKey,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                            u = r.basedOn,
                            c = r.selectedAxis,
                            s = r.continuousParameterGroupId,
                            f = r.reverse,
                            l = r.restingState,
                            d = void 0 === l ? 0 : l,
                            p = i.clientX,
                            v = void 0 === p ? a.clientX : p,
                            h = i.clientY,
                            _ = void 0 === h ? a.clientY : h,
                            g = i.pageX,
                            I = void 0 === g ? a.pageX : g,
                            T = i.pageY,
                            y = void 0 === T ? a.pageY : T,
                            m = "X_AXIS" === c,
                            O = "mouseout" === i.type,
                            A = d / 100,
                            S = s,
                            b = !1;
                        switch (u) {
                            case Y:
                                A = m ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(_, window.innerHeight) / window.innerHeight;
                                break;
                            case z:
                                var w = ct(),
                                    R = w.scrollLeft,
                                    N = w.scrollTop,
                                    C = w.scrollWidth,
                                    L = w.scrollHeight;
                                A = m ? Math.min(R + I, C) / C : Math.min(N + y, L) / L;
                                break;
                            case H:
                            default:
                                S = Q(o, s);
                                var x = 0 === i.type.indexOf("mouse");
                                if (x && !0 !== J({ element: n, nativeEvent: i })) break;
                                var D = n.getBoundingClientRect(),
                                    P = D.left,
                                    M = D.top,
                                    F = D.width,
                                    j = D.height;
                                if (
                                    !x &&
                                    !(function (t, e) {
                                        return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom;
                                    })({ left: v, top: _ }, D)
                                )
                                    break;
                                (b = !0), (A = m ? (v - P) / F : (_ - M) / j);
                        }
                        return (
                            O && (A > 0.95 || A < 0.05) && (A = Math.round(A)),
                            (u !== H || b || b !== a.elementHovered) && ((A = f ? 1 - A : A), e.dispatch((0, E.parameterChanged)(S, A))),
                            { elementHovered: b, clientX: v, clientY: _, pageX: I, pageY: y }
                        );
                    },
                }),
                (0, o.default)(r, W, {
                    types: ot,
                    handler: function (t) {
                        var e = t.store,
                            n = t.eventConfig,
                            r = n.continuousParameterGroupId,
                            i = n.reverse,
                            o = ct(),
                            a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                        (a = i ? 1 - a : a), e.dispatch((0, E.parameterChanged)(r, a));
                    },
                }),
                (0, o.default)(r, U, {
                    types: ot,
                    handler: function (t) {
                        var e = t.element,
                            n = t.store,
                            r = t.eventConfig,
                            i = t.eventStateKey,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { scrollPercent: 0 },
                            a = ct(),
                            u = a.scrollLeft,
                            c = a.scrollTop,
                            s = a.scrollWidth,
                            f = a.scrollHeight,
                            l = a.clientHeight,
                            d = r.basedOn,
                            p = r.selectedAxis,
                            v = r.continuousParameterGroupId,
                            h = r.startsEntering,
                            _ = r.startsExiting,
                            g = r.addEndOffset,
                            I = r.addStartOffset,
                            T = r.addOffsetValue,
                            y = void 0 === T ? 0 : T,
                            m = r.endOffsetValue,
                            O = void 0 === m ? 0 : m;
                        if (d === Y) {
                            var A = "X_AXIS" === p ? u / s : c / f;
                            return A !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(v, A)), { scrollPercent: A };
                        }
                        var S = Q(i, v),
                            b = e.getBoundingClientRect(),
                            w = (I ? y : 0) / 100,
                            R = (g ? O : 0) / 100;
                        (w = h ? w : 1 - w), (R = _ ? R : 1 - R);
                        var N = b.top + Math.min(b.height * w, l),
                            C = b.top + b.height * R - N,
                            L = Math.min(l + C, f),
                            x = Math.min(Math.max(0, l - N), L) / L;
                        return x !== o.scrollPercent && n.dispatch((0, E.parameterChanged)(S, x)), { scrollPercent: x };
                    },
                }),
                (0, o.default)(r, P, _t),
                (0, o.default)(r, j, _t),
                (0, o.default)(
                    r,
                    D,
                    Object.assign({}, at, {
                        handler: pt(function (t, e) {
                            e.scrollingDown && et(t);
                        }),
                    })
                ),
                (0, o.default)(
                    r,
                    G,
                    Object.assign({}, at, {
                        handler: pt(function (t, e) {
                            e.scrollingDown || et(t);
                        }),
                    })
                ),
                (0, o.default)(r, V, {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: nt(
                        $,
                        (function (t) {
                            return function (e, n) {
                                var r = { finished: "complete" === document.readyState };
                                return !r.finished || (n && n.finshed) || t(e), r;
                            };
                        })(et)
                    ),
                }),
                (0, o.default)(r, B, {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: nt(
                        $,
                        (function (t) {
                            return function (e, n) {
                                return n || t(e), { started: !0 };
                            };
                        })(et)
                    ),
                }),
                r);
        e.default = gt;
    },
    function (t, e, n) {
        var r = n(239)();
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(51),
            i = n(240),
            o = n(99),
            a = n(100),
            u = n(1),
            c = n(253),
            s = "Expected a function",
            f = 8,
            l = 32,
            d = 128,
            p = 256;
        t.exports = function (t) {
            return i(function (e) {
                var n = e.length,
                    i = n,
                    v = r.prototype.thru;
                for (t && e.reverse(); i--; ) {
                    var E = e[i];
                    if ("function" != typeof E) throw new TypeError(s);
                    if (v && !h && "wrapper" == a(E)) var h = new r([], !0);
                }
                for (i = h ? i : n; ++i < n; ) {
                    E = e[i];
                    var _ = a(E),
                        g = "wrapper" == _ ? o(E) : void 0;
                    h = g && c(g[0]) && g[1] == (d | f | l | p) && !g[4].length && 1 == g[9] ? h[a(g[0])].apply(h, g[3]) : 1 == E.length && c(E) ? h[_]() : h.thru(E);
                }
                return function () {
                    var t = arguments,
                        r = t[0];
                    if (h && 1 == t.length && u(r)) return h.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n; ) o = e[i].call(this, o);
                    return o;
                };
            });
        };
    },
    function (t, e, n) {
        var r = n(241),
            i = n(244),
            o = n(246);
        t.exports = function (t) {
            return o(i(t, void 0, r), t + "");
        };
    },
    function (t, e, n) {
        var r = n(242);
        t.exports = function (t) {
            return null != t && t.length ? r(t, 1) : [];
        };
    },
    function (t, e, n) {
        var r = n(35),
            i = n(243);
        t.exports = function t(e, n, o, a, u) {
            var c = -1,
                s = e.length;
            for (o || (o = i), u || (u = []); ++c < s; ) {
                var f = e[c];
                n > 0 && o(f) ? (n > 1 ? t(f, n - 1, o, a, u) : r(u, f)) : a || (u[u.length] = f);
            }
            return u;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(22),
            o = n(1),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
            return o(t) || i(t) || !!(a && t && t[a]);
        };
    },
    function (t, e, n) {
        var r = n(245),
            i = Math.max;
        t.exports = function (t, e, n) {
            return (
                (e = i(void 0 === e ? t.length - 1 : e, 0)),
                function () {
                    for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u; ) c[a] = o[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e; ) s[a] = o[a];
                    return (s[e] = n(c)), r(t, this, s);
                }
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
        };
    },
    function (t, e, n) {
        var r = n(247),
            i = n(249)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(248),
            i = n(96),
            o = n(45),
            a = i
                ? function (t, e) {
                      return i(t, "toString", { configurable: !0, enumerable: !1, value: r(e), writable: !0 });
                  }
                : o;
        t.exports = a;
    },
    function (t, e) {
        t.exports = function (t) {
            return function () {
                return t;
            };
        };
    },
    function (t, e) {
        var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function (t) {
            var e = 0,
                o = 0;
            return function () {
                var a = i(),
                    u = r - (a - o);
                if (((o = a), u > 0)) {
                    if (++e >= n) return arguments[0];
                } else e = 0;
                return t.apply(void 0, arguments);
            };
        };
    },
    function (t, e, n) {
        var r = n(76),
            i = r && new r();
        t.exports = i;
    },
    function (t, e) {
        t.exports = function () {};
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(53),
            i = n(99),
            o = n(100),
            a = n(254);
        t.exports = function (t) {
            var e = o(t),
                n = a[e];
            if ("function" != typeof n || !(e in r.prototype)) return !1;
            if (t === n) return !0;
            var u = i(n);
            return !!u && t === u[0];
        };
    },
    function (t, e, n) {
        var r = n(53),
            i = n(51),
            o = n(52),
            a = n(1),
            u = n(8),
            c = n(255),
            s = Object.prototype.hasOwnProperty;
        function f(t) {
            if (u(t) && !a(t) && !(t instanceof r)) {
                if (t instanceof i) return t;
                if (s.call(t, "__wrapped__")) return c(t);
            }
            return new i(t);
        }
        (f.prototype = o.prototype), (f.prototype.constructor = f), (t.exports = f);
    },
    function (t, e, n) {
        var r = n(53),
            i = n(51),
            o = n(256);
        t.exports = function (t) {
            if (t instanceof r) return t.clone();
            var e = new i(t.__wrapped__, t.__chain__);
            return (e.__actions__ = o(t.__actions__)), (e.__index__ = t.__index__), (e.__values__ = t.__values__), e;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r; ) e[n] = t[n];
            return e;
        };
    },
    function (t, e, n) {
        var r = n(97),
            i = n(47);
        t.exports = function (t, e, n) {
            return void 0 === n && ((n = e), (e = void 0)), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "links",
            (t.exports = function (t, e) {
                var n,
                    i,
                    o,
                    a = {},
                    u = t(window),
                    c = r.env(),
                    s = window.location,
                    f = document.createElement("a"),
                    l = "w--current",
                    d = /index\.(html|php)$/,
                    p = /\/$/;
                function v(e) {
                    var r = (n && e.getAttribute("href-disabled")) || e.getAttribute("href");
                    if (((f.href = r), !(r.indexOf(":") >= 0))) {
                        var a = t(e);
                        if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                            var u = t(f.hash);
                            u.length && i.push({ link: a, sec: u, active: !1 });
                        } else if ("#" !== r && "" !== r) {
                            var c = f.href === s.href || r === o || (d.test(r) && p.test(o));
                            h(a, l, c);
                        }
                    }
                }
                function E() {
                    var t = u.scrollTop(),
                        n = u.height();
                    e.each(i, function (e) {
                        var r = e.link,
                            i = e.sec,
                            o = i.offset().top,
                            a = i.outerHeight(),
                            u = 0.5 * n,
                            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                        e.active !== c && ((e.active = c), h(r, l, c));
                    });
                }
                function h(t, e, n) {
                    var r = t.hasClass(e);
                    (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
                }
                return (
                    (a.ready = a.design = a.preview = function () {
                        (n = c && r.env("design")), (o = r.env("slug") || s.pathname || ""), r.scroll.off(E), (i = []);
                        for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
                        i.length && (r.scroll.on(E), E());
                    }),
                    a
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        r.define(
            "scroll",
            (t.exports = function (t) {
                var e,
                    n = t(document),
                    i = window,
                    o = i.location,
                    a = (function () {
                        try {
                            return Boolean(i.frameElement);
                        } catch (t) {
                            return !0;
                        }
                    })()
                        ? null
                        : i.history,
                    u = /^[a-zA-Z0-9][\w:.-]*$/,
                    c = 'a[href="#"]',
                    s = 'a[href*="#"]:not(.w-tab-link):not(' + c + ")";
                function f(n) {
                    if (!(r.env("design") || (window.$.mobile && t(n.currentTarget).hasClass("ui-link")))) {
                        var c = this.href.split("#"),
                            s = c[0] === e ? c[1] : null;
                        s &&
                            (function (e, n) {
                                if (!u.test(e)) return;
                                var c = t("#" + e);
                                if (!c.length) return;
                                n && (n.preventDefault(), n.stopPropagation());
                                if (o.hash !== e && a && a.pushState && (!r.env.chrome || "file:" !== o.protocol)) {
                                    var s = a.state && a.state.hash;
                                    s !== e && a.pushState({ hash: e }, "", "#" + e);
                                }
                                var f = r.env("editor") ? ".w-editor-body" : "body",
                                    l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
                                    d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                                i.setTimeout(
                                    function () {
                                        !(function (e, n) {
                                            var r = t(i).scrollTop(),
                                                o = e.offset().top - n;
                                            if ("mid" === e.data("scroll")) {
                                                var a = t(i).height() - n,
                                                    u = e.outerHeight();
                                                u < a && (o -= Math.round((a - u) / 2));
                                            }
                                            var c = 1;
                                            t("body")
                                                .add(e)
                                                .each(function () {
                                                    var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                                    !isNaN(e) && (0 === e || e > 0) && (c = e);
                                                }),
                                                Date.now ||
                                                    (Date.now = function () {
                                                        return new Date().getTime();
                                                    });
                                            var s = Date.now(),
                                                f =
                                                    i.requestAnimationFrame ||
                                                    i.mozRequestAnimationFrame ||
                                                    i.webkitRequestAnimationFrame ||
                                                    function (t) {
                                                        i.setTimeout(t, 15);
                                                    },
                                                l = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * c;
                                            !(function t() {
                                                var e = Date.now() - s;
                                                i.scroll(
                                                    0,
                                                    (function (t, e, n, r) {
                                                        if (n > r) return e;
                                                        return t + (e - t) * ((i = n / r), i < 0.5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                                        var i;
                                                    })(r, o, e, l)
                                                ),
                                                    e <= l && f(t);
                                            })();
                                        })(c, d);
                                    },
                                    n ? 0 : 300
                                );
                            })(s, n);
                    }
                }
                return {
                    ready: function () {
                        (e = o.href.split("#")[0]),
                            n.on("click", s, f),
                            n.on("click", c, function (t) {
                                t.preventDefault();
                            });
                    },
                };
            })
        );
    },
    function (t, e, n) {
        "use strict";
        n(2).define(
            "touch",
            (t.exports = function (t) {
                var e = {},
                    n = window.getSelection;
                function r(e) {
                    var r,
                        i,
                        o = !1,
                        a = !1,
                        u = Math.min(Math.round(0.04 * window.innerWidth), 40);
                    function c(t) {
                        var e = t.touches;
                        (e && e.length > 1) || ((o = !0), e ? ((a = !0), (r = e[0].clientX)) : (r = t.clientX), (i = r));
                    }
                    function s(e) {
                        if (o) {
                            if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                            var r = e.touches,
                                c = r ? r[0].clientX : e.clientX,
                                s = c - i;
                            (i = c),
                                Math.abs(s) > u &&
                                    n &&
                                    "" === String(n()) &&
                                    (!(function (e, n, r) {
                                        var i = t.Event(e, { originalEvent: n });
                                        t(n.target).trigger(i, r);
                                    })("swipe", e, { direction: s > 0 ? "right" : "left" }),
                                    l());
                        }
                    }
                    function f(t) {
                        if (o) return (o = !1), a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void (a = !1)) : void 0;
                    }
                    function l() {
                        o = !1;
                    }
                    e.addEventListener("touchstart", c, !1),
                        e.addEventListener("touchmove", s, !1),
                        e.addEventListener("touchend", f, !1),
                        e.addEventListener("touchcancel", l, !1),
                        e.addEventListener("mousedown", c, !1),
                        e.addEventListener("mousemove", s, !1),
                        e.addEventListener("mouseup", f, !1),
                        e.addEventListener("mouseout", l, !1),
                        (this.destroy = function () {
                            e.removeEventListener("touchstart", c, !1),
                                e.removeEventListener("touchmove", s, !1),
                                e.removeEventListener("touchend", f, !1),
                                e.removeEventListener("touchcancel", l, !1),
                                e.removeEventListener("mousedown", c, !1),
                                e.removeEventListener("mousemove", s, !1),
                                e.removeEventListener("mouseup", f, !1),
                                e.removeEventListener("mouseout", l, !1),
                                (e = null);
                        });
                }
                return (
                    (t.event.special.tap = { bindType: "click", delegateType: "click" }),
                    (e.init = function (e) {
                        return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null;
                    }),
                    (e.instance = e.init(document)),
                    e
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(262)),
            i = n(2);
        i.define(
            "forms",
            (t.exports = function (t, e) {
                var n,
                    o,
                    a,
                    u,
                    c,
                    s = {},
                    f = t(document),
                    l = window.location,
                    d = window.XDomainRequest && !window.atob,
                    p = ".w-form",
                    v = /e(-)?mail/i,
                    E = /^\S+@\S+$/,
                    h = window.alert,
                    _ = i.env(),
                    g = /list-manage[1-9]?.com/i,
                    I = e.debounce(function () {
                        h("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
                    }, 100);
                function T(e, n) {
                    var r = t(n),
                        i = t.data(n, p);
                    i || (i = t.data(n, p, { form: r })), y(i);
                    var a = r.closest("div.w-form");
                    (i.done = a.find("> .w-form-done")),
                        (i.fail = a.find("> .w-form-fail")),
                        (i.fileUploads = a.find(".w-file-upload")),
                        i.fileUploads.each(function (e) {
                            !(function (e, n) {
                                if (!n.fileUploads || !n.fileUploads[e]) return;
                                var r,
                                    i = t(n.fileUploads[e]),
                                    o = i.find("> .w-file-upload-default"),
                                    a = i.find("> .w-file-upload-uploading"),
                                    u = i.find("> .w-file-upload-success"),
                                    s = i.find("> .w-file-upload-error"),
                                    f = o.find(".w-file-upload-input"),
                                    l = o.find(".w-file-upload-label"),
                                    d = l.children(),
                                    p = s.find(".w-file-upload-error-msg"),
                                    v = u.find(".w-file-upload-file"),
                                    E = u.find(".w-file-remove-link"),
                                    h = v.find(".w-file-upload-file-name"),
                                    g = p.attr("data-w-size-error"),
                                    I = p.attr("data-w-type-error"),
                                    T = p.attr("data-w-generic-error");
                                if (_)
                                    f.on("click", function (t) {
                                        t.preventDefault();
                                    }),
                                        l.on("click", function (t) {
                                            t.preventDefault();
                                        }),
                                        d.on("click", function (t) {
                                            t.preventDefault();
                                        });
                                else {
                                    E.on("click", function () {
                                        f.removeAttr("data-value"), f.val(""), h.html(""), o.toggle(!0), u.toggle(!1);
                                    }),
                                        f.on("change", function (i) {
                                            (r = i.target && i.target.files && i.target.files[0]) &&
                                                (o.toggle(!1),
                                                s.toggle(!1),
                                                a.toggle(!0),
                                                h.text(r.name),
                                                w() || m(n),
                                                (n.fileUploads[e].uploading = !0),
                                                (function (e, n) {
                                                    var r = { name: e.name, size: e.size };
                                                    t.ajax({ type: "POST", url: c, data: r, dataType: "json", crossDomain: !0 })
                                                        .done(function (t) {
                                                            n(null, t);
                                                        })
                                                        .fail(function (t) {
                                                            n(t);
                                                        });
                                                })(r, S));
                                        });
                                    var O = l.outerHeight();
                                    f.height(O), f.width(1);
                                }
                                function A(t) {
                                    var r = t.responseJSON && t.responseJSON.msg,
                                        i = T;
                                    "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? (i = I) : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = g),
                                        p.text(i),
                                        f.removeAttr("data-value"),
                                        f.val(""),
                                        a.toggle(!1),
                                        o.toggle(!0),
                                        s.toggle(!0),
                                        (n.fileUploads[e].uploading = !1),
                                        w() || y(n);
                                }
                                function S(e, n) {
                                    if (e) return A(e);
                                    var i = n.fileName,
                                        o = n.postData,
                                        a = n.fileId,
                                        u = n.s3Url;
                                    f.attr("data-value", a),
                                        (function (e, n, r, i, o) {
                                            var a = new FormData();
                                            for (var u in n) a.append(u, n[u]);
                                            a.append("file", r, i),
                                                t
                                                    .ajax({ type: "POST", url: e, data: a, processData: !1, contentType: !1 })
                                                    .done(function () {
                                                        o(null);
                                                    })
                                                    .fail(function (t) {
                                                        o(t);
                                                    });
                                        })(u, o, r, i, b);
                                }
                                function b(t) {
                                    if (t) return A(t);
                                    a.toggle(!1), u.css("display", "inline-block"), (n.fileUploads[e].uploading = !1), w() || y(n);
                                }
                                function w() {
                                    var t = (n.fileUploads && n.fileUploads.toArray()) || [];
                                    return t.some(function (t) {
                                        return t.uploading;
                                    });
                                }
                            })(e, i);
                        });
                    var u = (i.action = r.attr("action"));
                    (i.handler = null), (i.redirect = r.attr("data-redirect")), g.test(u) ? (i.handler = S) : u || (o ? (i.handler = A) : I());
                }
                function y(t) {
                    var e = (t.btn = t.form.find(':input[type="submit"]'));
                    (t.wait = t.btn.attr("data-wait") || null), (t.success = !1), e.prop("disabled", !1), t.label && e.val(t.label);
                }
                function m(t) {
                    var e = t.btn,
                        n = t.wait;
                    e.prop("disabled", !0), n && ((t.label = e.val()), e.val(n));
                }
                function O(e, n) {
                    var r = null;
                    return (
                        (n = n || {}),
                        e.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
                            var a = t(o),
                                u = a.attr("type"),
                                c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                                s = a.val();
                            if ("checkbox" === u) s = a.is(":checked");
                            else if ("radio" === u) {
                                if (null === n[c] || "string" == typeof n[c]) return;
                                s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null;
                            }
                            "string" == typeof s && (s = t.trim(s)),
                                (n[c] = s),
                                (r =
                                    r ||
                                    (function (t, e, n, r) {
                                        var i = null;
                                        "password" === e
                                            ? (i = "Passwords cannot be submitted.")
                                            : t.attr("required")
                                            ? r
                                                ? v.test(t.attr("type")) && (E.test(r) || (i = "Please enter a valid email address for: " + n))
                                                : (i = "Please fill out the required field: " + n)
                                            : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot.");
                                        return i;
                                    })(a, u, c, s));
                        }),
                        r
                    );
                }
                function A(e) {
                    y(e);
                    var n = e.form,
                        r = { name: n.attr("data-name") || n.attr("name") || "Untitled Form", source: l.href, test: i.env(), fields: {}, fileUploads: {}, dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html()) };
                    w(e);
                    var a = O(n, r.fields);
                    if (a) return h(a);
                    (r.fileUploads = (function (e) {
                        var n = {};
                        return (
                            e.find(':input[type="file"]').each(function (e, r) {
                                var i = t(r),
                                    o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                                    a = i.attr("data-value");
                                "string" == typeof a && (a = t.trim(a)), (n[o] = a);
                            }),
                            n
                        );
                    })(n)),
                        m(e),
                        o
                            ? t
                                  .ajax({ url: u, type: "POST", data: r, dataType: "json", crossDomain: !0 })
                                  .done(function (t) {
                                      t && 200 === t.code && (e.success = !0), b(e);
                                  })
                                  .fail(function () {
                                      b(e);
                                  })
                            : b(e);
                }
                function S(n) {
                    y(n);
                    var r = n.form,
                        i = {};
                    if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                        w(n);
                        var o,
                            a = O(r, i);
                        if (a) return h(a);
                        m(n),
                            e.each(i, function (t, e) {
                                v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
                            }),
                            o && !i.FNAME && ((o = o.split(" ")), (i.FNAME = o[0]), (i.LNAME = i.LNAME || o[1]));
                        var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                            c = u.indexOf("u=") + 2;
                        c = u.substring(c, u.indexOf("&", c));
                        var s = u.indexOf("id=") + 3;
                        (s = u.substring(s, u.indexOf("&", s))),
                            (i["b_" + c + "_" + s] = ""),
                            t
                                .ajax({ url: u, data: i, dataType: "jsonp" })
                                .done(function (t) {
                                    (n.success = "success" === t.result || /already/.test(t.msg)), n.success || console.info("MailChimp error: " + t.msg), b(n);
                                })
                                .fail(function () {
                                    b(n);
                                });
                    } else r.attr("method", "post");
                }
                function b(t) {
                    var e = t.form,
                        n = t.redirect,
                        r = t.success;
                    r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), y(t));
                }
                function w(t) {
                    t.evt && t.evt.preventDefault(), (t.evt = null);
                }
                return (
                    (s.ready = s.design = s.preview = function () {
                        !(function () {
                            (o = t("html").attr("data-wf-site")), (u = "https://webflow.com/api/v1/form/" + o), d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                            if (((c = "".concat(u, "/signFile")), !(n = t(p + " form")).length)) return;
                            n.each(T);
                        })(),
                            _ ||
                                a ||
                                (function () {
                                    (a = !0),
                                        f.on("submit", p + " form", function (e) {
                                            var n = t.data(this, p);
                                            n.handler && ((n.evt = e), n.handler(n));
                                        });
                                    var e = [
                                        ["checkbox", ".w-checkbox-input"],
                                        ["radio", ".w-radio-input"],
                                    ];
                                    f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (e) {
                                        t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked");
                                    }),
                                        f.on("change", p + ' form input[type="radio"]', function (e) {
                                            t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (e, n) {
                                                return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked");
                                            });
                                            var n = t(e.target);
                                            n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked");
                                        }),
                                        e.forEach(function (e) {
                                            var n = (0, r.default)(e, 2),
                                                i = n[0],
                                                o = n[1];
                                            f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                                                t(e.target).siblings(o).addClass("w--redirected-focus");
                                            }),
                                                f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (e) {
                                                    t(e.target).siblings(o).removeClass("w--redirected-focus");
                                                });
                                        });
                                })();
                    }),
                    s
                );
            })
        );
    },
    function (t, e, n) {
        var r = n(263),
            i = n(264),
            o = n(265);
        t.exports = function (t, e) {
            return r(t) || i(t, e) || o();
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) return t;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
            } catch (t) {
                (i = !0), (o = t);
            } finally {
                try {
                    r || null == u.return || u.return();
                } finally {
                    if (i) throw o;
                }
            }
            return n;
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(15);
        r.define(
            "navbar",
            (t.exports = function (t, e) {
                var n,
                    o,
                    a,
                    u,
                    c = {},
                    s = t.tram,
                    f = t(window),
                    l = t(document),
                    d = r.env(),
                    p = '<div class="w-nav-overlay" data-wf-ignore />',
                    v = ".w-nav",
                    E = "w--open",
                    h = "w--nav-dropdown-open",
                    _ = "w--nav-dropdown-toggle-open",
                    g = "w--nav-dropdown-list-open",
                    I = "w--nav-link-open",
                    T = i.triggers,
                    y = t();
                function m() {
                    r.resize.off(O);
                }
                function O() {
                    o.each(C);
                }
                function A(n, i) {
                    var o = t(i),
                        c = t.data(i, v);
                    c || (c = t.data(i, v, { open: !1, el: o, config: {} })),
                        (c.menu = o.find(".w-nav-menu")),
                        (c.links = c.menu.find(".w-nav-link")),
                        (c.dropdowns = c.menu.find(".w-dropdown")),
                        (c.dropdownToggle = c.menu.find(".w-dropdown-toggle")),
                        (c.dropdownList = c.menu.find(".w-dropdown-list")),
                        (c.button = o.find(".w-nav-button")),
                        (c.container = o.find(".w-container")),
                        (c.outside = (function (e) {
                            e.outside && l.off("click" + v, e.outside);
                            return function (n) {
                                var r = t(n.target);
                                (u && r.closest(".w-editor-bem-EditorOverlay").length) || N(e, r);
                            };
                        })(c)),
                        c.el.off(v),
                        c.button.off(v),
                        c.menu.off(v),
                        w(c),
                        a
                            ? (b(c),
                              c.el.on(
                                  "setting" + v,
                                  (function (t) {
                                      return function (n, r) {
                                          r = r || {};
                                          var i = f.width();
                                          w(t),
                                              !0 === r.open && P(t, !0),
                                              !1 === r.open && F(t, !0),
                                              t.open &&
                                                  e.defer(function () {
                                                      i !== f.width() && R(t);
                                                  });
                                      };
                                  })(c)
                              ))
                            : (!(function (e) {
                                  if (e.overlay) return;
                                  (e.overlay = t(p).appendTo(e.el)), (e.parent = e.menu.parent()), F(e, !0);
                              })(c),
                              c.button.on(
                                  "click" + v,
                                  (function (t) {
                                      return e.debounce(function () {
                                          t.open ? F(t) : P(t);
                                      });
                                  })(c)
                              ),
                              c.menu.on(
                                  "click" + v,
                                  "a",
                                  (function (e) {
                                      return function (n) {
                                          var i = t(this),
                                              o = i.attr("href");
                                          r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && F(e) : n.preventDefault();
                                      };
                                  })(c)
                              )),
                        C(n, i);
                }
                function S(e, n) {
                    var r = t.data(n, v);
                    r && (b(r), t.removeData(n, v));
                }
                function b(t) {
                    t.overlay && (F(t, !0), t.overlay.remove(), (t.overlay = null));
                }
                function w(t) {
                    var n = {},
                        r = t.config || {},
                        i = (n.animation = t.el.attr("data-animation") || "default");
                    (n.animOver = /^over/.test(i)), (n.animDirect = /left$/.test(i) ? -1 : 1), r.animation !== i && t.open && e.defer(R, t), (n.easing = t.el.attr("data-easing") || "ease"), (n.easing2 = t.el.attr("data-easing2") || "ease");
                    var o = t.el.attr("data-duration");
                    (n.duration = null != o ? Number(o) : 400), (n.docHeight = t.el.attr("data-doc-height")), (t.config = n);
                }
                function R(t) {
                    t.open && (F(t, !0), P(t, !0));
                }
                (c.ready = c.design = c.preview = function () {
                    if (((a = d && r.env("design")), (u = r.env("editor")), (n = t(document.body)), !(o = l.find(v)).length)) return;
                    o.each(A), m(), r.resize.on(O);
                }),
                    (c.destroy = function () {
                        (y = t()), m(), o && o.length && o.each(S);
                    });
                var N = e.debounce(function (t, e) {
                    if (t.open) {
                        var n = e.closest(".w-nav-menu");
                        t.menu.is(n) || F(t);
                    }
                });
                function C(e, n) {
                    var r = t.data(n, v),
                        i = (r.collapsed = "none" !== r.button.css("display"));
                    if ((!r.open || i || a || F(r, !0), r.container.length)) {
                        var o = (function (e) {
                            var n = e.container.css(L);
                            "none" === n && (n = "");
                            return function (e, r) {
                                (r = t(r)).css(L, ""), "none" === r.css(L) && r.css(L, n);
                            };
                        })(r);
                        r.links.each(o), r.dropdowns.each(o);
                    }
                    r.open && M(r);
                }
                var L = "max-width";
                function x(t, e) {
                    e.setAttribute("data-nav-menu-open", "");
                }
                function D(t, e) {
                    e.removeAttribute("data-nav-menu-open");
                }
                function P(t, e) {
                    if (!t.open) {
                        (t.open = !0), t.menu.each(x), t.links.addClass(I), t.dropdowns.addClass(h), t.dropdownToggle.addClass(_), t.dropdownList.addClass(g), t.button.addClass(E);
                        var n = t.config;
                        ("none" !== n.animation && s.support.transform) || (e = !0);
                        var i = M(t),
                            o = t.menu.outerHeight(!0),
                            u = t.menu.outerWidth(!0),
                            c = t.el.height(),
                            f = t.el[0];
                        if ((C(0, f), T.intro(0, f), r.redraw.up(), a || l.on("click" + v, t.outside), !e)) {
                            var d = "transform " + n.duration + "ms " + n.easing;
                            if ((t.overlay && ((y = t.menu.prev()), t.overlay.show().append(t.menu)), n.animOver))
                                return (
                                    s(t.menu)
                                        .add(d)
                                        .set({ x: n.animDirect * u, height: i })
                                        .start({ x: 0 }),
                                    void (t.overlay && t.overlay.width(u))
                                );
                            var p = c + o;
                            s(t.menu).add(d).set({ y: -p }).start({ y: 0 });
                        }
                    }
                }
                function M(t) {
                    var e = t.config,
                        r = e.docHeight ? l.height() : n.height();
                    return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.height()), t.overlay && t.overlay.height(r), r;
                }
                function F(t, e) {
                    if (t.open) {
                        (t.open = !1), t.button.removeClass(E);
                        var n = t.config;
                        if ((("none" === n.animation || !s.support.transform || n.duration <= 0) && (e = !0), T.outro(0, t.el[0]), l.off("click" + v, t.outside), e)) return s(t.menu).stop(), void c();
                        var r = "transform " + n.duration + "ms " + n.easing2,
                            i = t.menu.outerHeight(!0),
                            o = t.menu.outerWidth(!0),
                            a = t.el.height();
                        if (n.animOver)
                            s(t.menu)
                                .add(r)
                                .start({ x: o * n.animDirect })
                                .then(c);
                        else {
                            var u = a + i;
                            s(t.menu).add(r).start({ y: -u }).then(c);
                        }
                    }
                    function c() {
                        // t.menu.height(""),
                        //     s(t.menu).set({ x: 0, y: 0 }),
                        //     t.menu.each(D),
                        //     t.links.removeClass(I),
                        //     t.dropdowns.removeClass(h),
                        //     t.dropdownToggle.removeClass(_),
                        //     t.dropdownList.removeClass(g),
                        //     t.overlay && t.overlay.children().length && (y.length ? t.menu.insertAfter(y) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()),
                        //     t.el.triggerHandler("w-close");
                    }
                }
                return c;
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(15);
        r.define(
            "slider",
            (t.exports = function (t, e) {
                var n,
                    o,
                    a,
                    u,
                    c = {},
                    s = t.tram,
                    f = t(document),
                    l = r.env(),
                    d = ".w-slider",
                    p = '<div class="w-slider-dot" data-wf-ignore />',
                    v = i.triggers;
                function E() {
                    (n = f.find(d)).length && (n.each(g), (u = null), a || (h(), r.resize.on(_), r.redraw.on(c.redraw)));
                }
                function h() {
                    r.resize.off(_), r.redraw.off(c.redraw);
                }
                function _() {
                    n.filter(":visible").each(b);
                }
                function g(e, n) {
                    var r = t(n),
                        i = t.data(n, d);
                    if (
                        (i || (i = t.data(n, d, { index: 0, depth: 1, el: r, config: {} })),
                        (i.mask = r.children(".w-slider-mask")),
                        (i.left = r.children(".w-slider-arrow-left")),
                        (i.right = r.children(".w-slider-arrow-right")),
                        (i.nav = r.children(".w-slider-nav")),
                        (i.slides = i.mask.children(".w-slide")),
                        i.slides.each(v.reset),
                        u && (i.maskWidth = 0),
                        !s.support.transform)
                    )
                        return i.left.hide(), i.right.hide(), i.nav.hide(), void (a = !0);
                    i.el.off(d),
                        i.left.off(d),
                        i.right.off(d),
                        i.nav.off(d),
                        I(i),
                        o
                            ? (i.el.on("setting" + d, A(i)), O(i), (i.hasTimer = !1))
                            : (i.el.on("swipe" + d, A(i)),
                              i.left.on("click" + d, y(i)),
                              i.right.on("click" + d, m(i)),
                              i.config.autoplay &&
                                  !i.hasTimer &&
                                  ((i.hasTimer = !0),
                                  (i.timerCount = 1),
                                  (function t(e) {
                                      O(e);
                                      var n = e.config;
                                      var r = n.timerMax;
                                      if (r && e.timerCount++ > r) return;
                                      e.timerId = window.setTimeout(function () {
                                          null == e.timerId || o || (m(e)(), t(e));
                                      }, n.delay);
                                  })(i))),
                        i.nav.on("click" + d, "> div", A(i)),
                        l ||
                            i.mask
                                .contents()
                                .filter(function () {
                                    return 3 === this.nodeType;
                                })
                                .remove();
                    var c = r.filter(":hidden");
                    c.show();
                    var f = r.parents(":hidden");
                    f.show(), b(e, n), c.css("display", ""), f.css("display", "");
                }
                function I(t) {
                    var e = { crossOver: 0 };
                    (e.animation = t.el.attr("data-animation") || "slide"), "outin" === e.animation && ((e.animation = "cross"), (e.crossOver = 0.5)), (e.easing = t.el.attr("data-easing") || "ease");
                    var n = t.el.attr("data-duration");
                    if (
                        ((e.duration = null != n ? parseInt(n, 10) : 500),
                        T(t.el.attr("data-infinite")) && (e.infinite = !0),
                        T(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
                        T(t.el.attr("data-hide-arrows")) ? (e.hideArrows = !0) : t.config.hideArrows && (t.left.show(), t.right.show()),
                        T(t.el.attr("data-autoplay")))
                    ) {
                        (e.autoplay = !0), (e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3), (e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10));
                        var r = "mousedown" + d + " touchstart" + d;
                        o ||
                            t.el.off(r).one(r, function () {
                                O(t);
                            });
                    }
                    var i = t.right.width();
                    (e.edge = i ? i + 40 : 100), (t.config = e);
                }
                function T(t) {
                    return "1" === t || "true" === t;
                }
                function y(t) {
                    return function () {
                        S(t, { index: t.index - 1, vector: -1 });
                    };
                }
                function m(t) {
                    return function () {
                        S(t, { index: t.index + 1, vector: 1 });
                    };
                }
                function O(t) {
                    window.clearTimeout(t.timerId), (t.timerId = null);
                }
                function A(n) {
                    return function (i, a) {
                        a = a || {};
                        var u = n.config;
                        if (o && "setting" === i.type) {
                            if ("prev" === a.select) return y(n)();
                            if ("next" === a.select) return m(n)();
                            if ((I(n), w(n), null == a.select)) return;
                            !(function (n, r) {
                                var i = null;
                                r === n.slides.length && (E(), w(n)),
                                    e.each(n.anchors, function (e, n) {
                                        t(e.els).each(function (e, o) {
                                            t(o).index() === r && (i = n);
                                        });
                                    }),
                                    null != i && S(n, { index: i, immediate: !0 });
                            })(n, a.select);
                        } else {
                            if ("swipe" === i.type) {
                                if (u.disableSwipe) return;
                                if (r.env("editor")) return;
                                return "left" === a.direction ? m(n)() : "right" === a.direction ? y(n)() : void 0;
                            }
                            n.nav.has(i.target).length && S(n, { index: t(i.target).index() });
                        }
                    };
                }
                function S(e, n) {
                    n = n || {};
                    var r = e.config,
                        i = e.anchors;
                    e.previous = e.index;
                    var a = n.index,
                        c = {};
                    a < 0
                        ? ((a = i.length - 1), r.infinite && ((c.x = -e.endX), (c.from = 0), (c.to = i[0].width)))
                        : a >= i.length && ((a = 0), r.infinite && ((c.x = i[i.length - 1].width), (c.from = -i[i.length - 1].x), (c.to = c.from - c.x))),
                        (e.index = a);
                    var f = e.nav.children().eq(e.index).addClass("w-active");
                    e.nav.children().not(f).removeClass("w-active"), r.hideArrows && (e.index === i.length - 1 ? e.right.hide() : e.right.show(), 0 === e.index ? e.left.hide() : e.left.show());
                    var l = e.offsetX || 0,
                        d = (e.offsetX = -i[e.index].x),
                        p = { x: d, opacity: 1, visibility: "" },
                        E = t(i[e.index].els),
                        h = t(i[e.previous] && i[e.previous].els),
                        _ = e.slides.not(E),
                        g = r.animation,
                        I = r.easing,
                        T = Math.round(r.duration),
                        y = n.vector || (e.index > e.previous ? 1 : -1),
                        m = "opacity " + T + "ms " + I,
                        O = "transform " + T + "ms " + I;
                    if ((o || (E.each(v.intro), _.each(v.outro)), n.immediate && !u)) return s(E).set(p), void b();
                    if (e.index !== e.previous) {
                        if ("cross" === g) {
                            var A = Math.round(T - T * r.crossOver),
                                S = Math.round(T - A);
                            return (
                                (m = "opacity " + A + "ms " + I),
                                s(h).set({ visibility: "" }).add(m).start({ opacity: 0 }),
                                void s(E)
                                    .set({ visibility: "", x: d, opacity: 0, zIndex: e.depth++ })
                                    .add(m)
                                    .wait(S)
                                    .then({ opacity: 1 })
                                    .then(b)
                            );
                        }
                        if ("fade" === g)
                            return (
                                s(h).set({ visibility: "" }).stop(),
                                void s(E)
                                    .set({ visibility: "", x: d, opacity: 0, zIndex: e.depth++ })
                                    .add(m)
                                    .start({ opacity: 1 })
                                    .then(b)
                            );
                        if ("over" === g)
                            return (
                                (p = { x: e.endX }),
                                s(h).set({ visibility: "" }).stop(),
                                void s(E)
                                    .set({ visibility: "", zIndex: e.depth++, x: d + i[e.index].width * y })
                                    .add(O)
                                    .start({ x: d })
                                    .then(b)
                            );
                        r.infinite && c.x
                            ? (s(e.slides.not(h)).set({ visibility: "", x: c.x }).add(O).start({ x: d }), s(h).set({ visibility: "", x: c.from }).add(O).start({ x: c.to }), (e.shifted = h))
                            : (r.infinite && e.shifted && (s(e.shifted).set({ visibility: "", x: l }), (e.shifted = null)), s(e.slides).set({ visibility: "" }).add(O).start({ x: d }));
                    }
                    function b() {
                        (E = t(i[e.index].els)), (_ = e.slides.not(E)), "slide" !== g && (p.visibility = "hidden"), s(_).set(p);
                    }
                }
                function b(e, n) {
                    var r = t.data(n, d);
                    if (r)
                        return (function (t) {
                            var e = t.mask.width();
                            if (t.maskWidth !== e) return (t.maskWidth = e), !0;
                            return !1;
                        })(r)
                            ? w(r)
                            : void (
                                  o &&
                                  (function (e) {
                                      var n = 0;
                                      if (
                                          (e.slides.each(function (e, r) {
                                              n += t(r).outerWidth(!0);
                                          }),
                                          e.slidesWidth !== n)
                                      )
                                          return (e.slidesWidth = n), !0;
                                      return !1;
                                  })(r) &&
                                  w(r)
                              );
                }
                function w(e) {
                    var n = 1,
                        r = 0,
                        i = 0,
                        a = 0,
                        u = e.maskWidth,
                        c = u - e.config.edge;
                    c < 0 && (c = 0),
                        (e.anchors = [{ els: [], x: 0, width: 0 }]),
                        e.slides.each(function (o, s) {
                            i - r > c && (n++, (r += u), (e.anchors[n - 1] = { els: [], x: i, width: 0 })), (a = t(s).outerWidth(!0)), (i += a), (e.anchors[n - 1].width += a), e.anchors[n - 1].els.push(s);
                        }),
                        (e.endX = i),
                        o && (e.pages = null),
                        e.nav.length &&
                            e.pages !== n &&
                            ((e.pages = n),
                            (function (e) {
                                var n,
                                    r = [],
                                    i = e.el.attr("data-nav-spacing");
                                i && (i = parseFloat(i) + "px");
                                for (var o = 0; o < e.pages; o++) (n = t(p)), e.nav.hasClass("w-num") && n.text(o + 1), null != i && n.css({ "margin-left": i, "margin-right": i }), r.push(n);
                                e.nav.empty().append(r);
                            })(e));
                    var s = e.index;
                    s >= n && (s = n - 1), S(e, { immediate: !0, index: s });
                }
                return (
                    (c.ready = function () {
                        (o = r.env("design")), E();
                    }),
                    (c.design = function () {
                        (o = !0), E();
                    }),
                    (c.preview = function () {
                        (o = !1), E();
                    }),
                    (c.redraw = function () {
                        (u = !0), E();
                    }),
                    (c.destroy = h),
                    c
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(2),
            i = n(15);
        r.define(
            "tabs",
            (t.exports = function (t) {
                var e,
                    n,
                    o = {},
                    a = t.tram,
                    u = t(document),
                    c = r.env,
                    s = c.safari,
                    f = c(),
                    l = "data-w-tab",
                    d = "data-w-pane",
                    p = ".w-tabs",
                    v = "w--current",
                    E = "w--tab-active",
                    h = i.triggers,
                    _ = !1;
                function g() {
                    (n = f && r.env("design")), (e = u.find(p)).length && (e.each(y), r.env("preview") && !_ && e.each(T), I(), r.redraw.on(o.redraw));
                }
                function I() {
                    r.redraw.off(o.redraw);
                }
                function T(e, n) {
                    var r = t.data(n, p);
                    r && (r.links && r.links.each(h.reset), r.panes && r.panes.each(h.reset));
                }
                function y(e, r) {
                    var i = p.substr(1) + "-" + e,
                        o = t(r),
                        a = t.data(r, p);
                    if (
                        (a || (a = t.data(r, p, { el: o, config: {} })),
                        (a.current = null),
                        (a.tabIdentifier = i + "-" + l),
                        (a.paneIdentifier = i + "-" + d),
                        (a.menu = o.children(".w-tab-menu")),
                        (a.links = a.menu.children(".w-tab-link")),
                        (a.content = o.children(".w-tab-content")),
                        (a.panes = a.content.children(".w-tab-pane")),
                        a.el.off(p),
                        a.links.off(p),
                        a.menu.attr("role", "tablist"),
                        a.links.attr("tabindex", "-1"),
                        (function (t) {
                            var e = {};
                            e.easing = t.el.attr("data-easing") || "ease";
                            var n = parseInt(t.el.attr("data-duration-in"), 10);
                            n = e.intro = n == n ? n : 0;
                            var r = parseInt(t.el.attr("data-duration-out"), 10);
                            (r = e.outro = r == r ? r : 0), (e.immediate = !n && !r), (t.config = e);
                        })(a),
                        !n)
                    ) {
                        a.links.on(
                            "click" + p,
                            (function (t) {
                                return function (e) {
                                    e.preventDefault();
                                    var n = e.currentTarget.getAttribute(l);
                                    n && m(t, { tab: n });
                                };
                            })(a)
                        ),
                            a.links.on(
                                "keydown" + p,
                                (function (t) {
                                    return function (e) {
                                        var n = (function (t) {
                                                var e = t.current;
                                                return Array.prototype.findIndex.call(
                                                    t.links,
                                                    function (t) {
                                                        return t.getAttribute(l) === e;
                                                    },
                                                    null
                                                );
                                            })(t),
                                            r = e.key,
                                            i = { ArrowLeft: n - 1, ArrowUp: n - 1, ArrowRight: n + 1, ArrowDown: n + 1, End: t.links.length - 1, Home: 0 };
                                        if (r in i) {
                                            e.preventDefault();
                                            var o = i[r];
                                            -1 === o && (o = t.links.length - 1), o === t.links.length && (o = 0);
                                            var a = t.links[o],
                                                u = a.getAttribute(l);
                                            u && m(t, { tab: u }),
                                                setTimeout(function () {
                                                    a.focus();
                                                }, 10);
                                        }
                                    };
                                })(a)
                            );
                        var u = a.links.filter("." + v).attr(l);
                        u && m(a, { tab: u, immediate: !0 });
                    }
                }
                function m(e, n) {
                    n = n || {};
                    var i = e.config,
                        o = i.easing,
                        u = n.tab;
                    if (u !== e.current) {
                        (e.current = u),
                            e.links.each(function (r, o) {
                                var a = t(o);
                                if (n.immediate || i.immediate) {
                                    var c = e.panes[r];
                                    o.id || (o.id = e.tabIdentifier + "-" + r),
                                        c.id || (c.id = e.paneIdentifier + "-" + r),
                                        (o.href = "#" + c.id),
                                        o.setAttribute("role", "tab"),
                                        o.setAttribute("aria-controls", c.id),
                                        o.setAttribute("aria-selected", "false"),
                                        c.setAttribute("role", "tabpanel"),
                                        c.setAttribute("aria-labelledby", o.id);
                                }
                                o.getAttribute(l) === u
                                    ? a.addClass(v).removeAttr("tabindex").attr({ "aria-selected": "true" }).each(h.intro)
                                    : a.hasClass(v) && a.removeClass(v).attr({ tabindex: "-1", "aria-selected": "false" }).each(h.outro);
                            });
                        var c = [],
                            f = [];
                        e.panes.each(function (e, n) {
                            var r = t(n);
                            n.getAttribute(l) === u ? c.push(n) : r.hasClass(E) && f.push(n);
                        });
                        var d = t(c),
                            p = t(f);
                        if (n.immediate || i.immediate) return d.addClass(E).each(h.intro), p.removeClass(E), void (_ || r.redraw.up());
                        p.length && i.outro
                            ? (p.each(h.outro),
                              a(p)
                                  .add("opacity " + i.outro + "ms " + o, { fallback: s })
                                  .start({ opacity: 0 })
                                  .then(g))
                            : g();
                    }
                    function g() {
                        if ((p.removeClass(E).css({ opacity: "", transition: "", transform: "", width: "", height: "" }), d.addClass(E).each(h.intro), r.redraw.up(), !i.intro)) return a(d).set({ opacity: 1 });
                        a(d)
                            .set({ opacity: 0 })
                            .redraw()
                            .add("opacity " + i.intro + "ms " + o, { fallback: s })
                            .start({ opacity: 1 });
                    }
                }
                return (
                    (o.ready = o.design = o.preview = g),
                    (o.redraw = function () {
                        (_ = !0), g(), (_ = !1);
                    }),
                    (o.destroy = function () {
                        (e = u.find(p)).length && (e.each(T), I());
                    }),
                    o
                );
            })
        );
    },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require("ix").init([
    { slug: "initial-display-none-transparent", name: "Initial - Display none, transparent", value: { style: { display: "none", opacity: 0 }, triggers: [] } },
    {
        slug: "open-menu-3d",
        name: "Open menu - 3D",
        value: {
            style: {},
            triggers: [
                {
                    type: "navbar",
                    selector: ".content-wrapp",
                    preserve3d: true,
                    stepsA: [{ transition: "transform 500ms ease 0ms", rotateX: "0deg", rotateY: "-18deg", rotateZ: "0deg" }],
                    stepsB: [{ transition: "transform 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "0deg" }],
                },
                {
                    type: "navbar",
                    selector: ".hamb-icon",
                    preserve3d: true,
                    stepsA: [{ transition: "transform 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "360deg" }],
                    stepsB: [{ transition: "transform 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "0deg" }],
                },
            ],
        },
    },
    {
        slug: "close-3d",
        name: "Close-3D",
        value: { style: {}, triggers: [{ type: "click", selector: ".content-wrapp", preserve3d: true, stepsA: [{ transition: "transform 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "0deg" }], stepsB: [] }] },
    },
    {
        slug: "service-animation-close",
        name: "Service animation close",
        value: { style: {}, triggers: [{ type: "click", preserve3d: true, stepsA: [{ opacity: 0, transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms", rotateX: "0deg", rotateY: "90deg", rotateZ: "0deg" }], stepsB: [] }] },
    },
    {
        slug: "service-animation",
        name: "Service animation",
        value: {
            style: {},
            triggers: [
                {
                    type: "click",
                    selector: ".service-webflow",
                    preserve3d: true,
                    stepsA: [
                        { opacity: 0, rotateX: "0deg", rotateY: "-90deg", rotateZ: "0deg" },
                        { opacity: 1, transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "0deg" },
                    ],
                    stepsB: [],
                },
                { type: "hover", selector: ".divider", descend: true, stepsA: [{ width: "155px", transition: "width 500ms ease 0ms" }], stepsB: [{ width: "50px", transition: "width 500ms ease 0ms" }] },
            ],
        },
    },
    {
        slug: "service-animation-2",
        name: "Service animation 2",
        value: {
            style: {},
            triggers: [
                {
                    type: "click",
                    selector: ".service-custom",
                    preserve3d: true,
                    stepsA: [
                        { opacity: 0, rotateX: "0deg", rotateY: "-90deg", rotateZ: "0deg" },
                        { opacity: 1, transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "0deg" },
                    ],
                    stepsB: [],
                },
                { type: "hover", selector: ".divider", descend: true, stepsA: [{ width: "130px", transition: "width 500ms ease 0ms" }], stepsB: [{ width: "50px", transition: "width 500ms ease 0ms" }] },
            ],
        },
    },
    {
        slug: "service-animation-3",
        name: "Service animation 3",
        value: {
            style: {},
            triggers: [
                {
                    type: "click",
                    selector: ".service-responsive",
                    preserve3d: true,
                    stepsA: [
                        { opacity: 0, rotateX: "0deg", rotateY: "-90deg", rotateZ: "0deg" },
                        { opacity: 1, transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "0deg" },
                    ],
                    stepsB: [],
                },
                { type: "hover", selector: ".divider", descend: true, stepsA: [{ width: "100px", transition: "width 500ms ease 0ms" }], stepsB: [{ width: "50px", transition: "width 500ms ease 0ms" }] },
            ],
        },
    },
    {
        slug: "service-animation-4",
        name: "Service animation 4",
        value: {
            style: {},
            triggers: [
                {
                    type: "click",
                    selector: ".service-migration",
                    preserve3d: true,
                    stepsA: [
                        { opacity: 0, rotateX: "0deg", rotateY: "-90deg", rotateZ: "0deg" },
                        { opacity: 1, transition: "transform 500ms ease 0ms, opacity 500ms ease 0ms", rotateX: "0deg", rotateY: "0deg", rotateZ: "0deg" },
                    ],
                    stepsB: [],
                },
                { type: "hover", selector: ".divider", descend: true, stepsA: [{ width: "90px", transition: "width 500ms ease 0ms" }], stepsB: [{ width: "50px", transition: "width 500ms ease 0ms" }] },
            ],
        },
    },
    {
        slug: "project-link-hover-animation",
        name: "Project link hover animation",
        value: {
            style: {},
            triggers: [
                {
                    type: "hover",
                    selector: ".project-overlay",
                    descend: true,
                    stepsA: [{ display: "block" }, { opacity: 1, transition: "opacity 400ms ease 0ms" }],
                    stepsB: [{ opacity: 0, transition: "opacity 500ms ease 0ms" }, { display: "none" }],
                },
            ],
        },
    },
    {
        slug: "logo-shrink",
        name: "Logo shrink",
        value: {
            style: {},
            triggers: [
                {
                    type: "scroll",
                    selector: ".mobile-logo",
                    offsetTop: "20%",
                    offsetBot: "50%",
                    preserve3d: true,
                    stepsA: [{ transition: "transform 400ms ease 0ms", scaleX: 1, scaleY: 1, scaleZ: 1 }],
                    stepsB: [{ transition: "transform 400ms ease 0ms", scaleX: 0.65, scaleY: 0.65, scaleZ: 1 }],
                },
            ],
        },
    },
]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
    events: {
        e: {
            id: "e",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-41", affectedElements: {}, playInReverse: false, autoStopEventId: "e-2" } },
            mediaQueries: ["medium"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "59f8ab2d78cc2d0001fd2a89" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1509551362257,
        },
        "e-3": {
            id: "e-3",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-2", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|c2c3ff5e-270f-dfb4-91d0-48c79d5afd60" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 50, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1510021015460,
        },
        "e-4": {
            id: "e-4",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-3",
                    affectedElements: { "5a010913079aa40001b3d9df|d44d902d-ed29-5319-53d7-93d23bb804b4": { selector: ".main-title-wrap", selectorGuids: ["aca77e33-55a5-4b78-25e2-f141e88e43f9"], limitAffectedElements: null } },
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|1aec7980-4259-df84-ed8e-b608bc9de230" },
            config: [
                { continuousParameterGroupId: "a-3-p", selectedAxis: "X_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 95, restingState: 50 },
                { continuousParameterGroupId: "a-3-p-2", selectedAxis: "Y_AXIS", basedOn: "ELEMENT", reverse: false, smoothing: 95, restingState: 50 },
            ],
            createdOn: 1510072566898,
        },
        "e-5": {
            id: "e-5",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "FADE_EFFECT", config: { actionListId: "fadeIn", autoStopEventId: "e-6" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|92256f80-18e9-6db6-c29b-0094aa4192ae" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 0, direction: null, effectIn: true },
            createdOn: 1519223425734,
        },
        "e-7": {
            id: "e-7",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "FADE_EFFECT", config: { actionListId: "fadeIn", autoStopEventId: "e-8" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|91c29534-7c45-24e3-926a-b80d7236754f" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 300, direction: null, effectIn: true },
            createdOn: 1519223486978,
        },
        "e-9": {
            id: "e-9",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-10" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|da6f1c31-5fa0-2dc6-ba60-96f6487a2a25" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 600, direction: "RIGHT", effectIn: true },
            createdOn: 1519223545410,
        },
        "e-11": {
            id: "e-11",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-12" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|153af567-250c-2793-bcd9-79a08636e117" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 900, direction: "RIGHT", effectIn: true },
            createdOn: 1519223561653,
        },
        "e-13": {
            id: "e-13",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-6", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8|fd3c5b7d-090e-037e-592e-d39afc359407" },
            config: [{ continuousParameterGroupId: "a-6-p", smoothing: 95, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1519226907490,
        },
        "e-14": {
            id: "e-14",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-15" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|1aec7980-4259-df84-ed8e-b608bc9de230" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1519227806346,
        },
        "e-15": {
            id: "e-15",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-14" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|1aec7980-4259-df84-ed8e-b608bc9de230" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1519227806346,
        },
        "e-18": {
            id: "e-18",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-19" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1519229508282,
        },
        "e-19": {
            id: "e-19",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-18" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1519229508282,
        },
        "e-20": {
            id: "e-20",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-2",
                    affectedElements: { "699bd88c-641f-5f2e-ec21-661d40d91d21": { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"], limitAffectedElements: null } },
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 60, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1519229633999,
        },
        "e-22": {
            id: "e-22",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-21" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "5a8cef922d6ad4000171fc1c" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519233085240,
        },
        "e-31": {
            id: "e-31",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-11", affectedElements: {}, playInReverse: false, autoStopEventId: "e-32" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".card-link-block", originalId: "5a8d8d86689c090001cac2d8|cd7370ab-c35c-2dc5-0473-498e22073b03", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519786645981,
        },
        "e-32": {
            id: "e-32",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-12", affectedElements: {}, playInReverse: false, autoStopEventId: "e-31" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".card-link-block", originalId: "5a8d8d86689c090001cac2d8|cd7370ab-c35c-2dc5-0473-498e22073b03", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519786645983,
        },
        "e-33": {
            id: "e-33",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-34" } },
            mediaQueries: ["medium", "small"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519787070255,
        },
        "e-43": {
            id: "e-43",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-44" } },
            mediaQueries: ["main"],
            target: { selector: ".side-navbar", originalId: "3269b4c7-c75c-1c2f-38e8-800aa3657b07", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-44": {
            id: "e-44",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-43" } },
            mediaQueries: ["main"],
            target: { selector: ".side-navbar", originalId: "3269b4c7-c75c-1c2f-38e8-800aa3657b07", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-45": {
            id: "e-45",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-46" } },
            mediaQueries: ["medium"],
            target: { selector: ".side-navbar", originalId: "3269b4c7-c75c-1c2f-38e8-800aa3657b07", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-46": {
            id: "e-46",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-45" } },
            mediaQueries: ["medium"],
            target: { selector: ".side-navbar", originalId: "3269b4c7-c75c-1c2f-38e8-800aa3657b07", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-47": {
            id: "e-47",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-48" } },
            mediaQueries: ["small"],
            target: { selector: ".side-navbar", originalId: "3269b4c7-c75c-1c2f-38e8-800aa3657b07", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-48": {
            id: "e-48",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-22", affectedElements: {}, playInReverse: false, autoStopEventId: "e-47" } },
            mediaQueries: ["small"],
            target: { selector: ".side-navbar", originalId: "3269b4c7-c75c-1c2f-38e8-800aa3657b07", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-49": {
            id: "e-49",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-23", affectedElements: {}, playInReverse: false, autoStopEventId: "e-50" } },
            mediaQueries: ["tiny"],
            target: { selector: ".mobile-navbar", originalId: "a3d73d96-1c7a-0e37-160f-f755042cb408", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-50": {
            id: "e-50",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-24", affectedElements: {}, playInReverse: false, autoStopEventId: "e-49" } },
            mediaQueries: ["tiny"],
            target: { selector: ".mobile-navbar", originalId: "a3d73d96-1c7a-0e37-160f-f755042cb408", appliesTo: "CLASS" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1519924108239,
        },
        "e-51": {
            id: "e-51",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-25", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { selector: ".card-link-block", originalId: "5a8d8d86689c090001cac2d8|cd7370ab-c35c-2dc5-0473-498e22073b03", appliesTo: "CLASS" },
            config: [{ continuousParameterGroupId: "a-25-p", smoothing: 80, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1521060004299,
        },
        "e-52": {
            id: "e-52",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-26", affectedElements: {}, playInReverse: false, autoStopEventId: "e-53" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a63" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521077457149,
        },
        "e-54": {
            id: "e-54",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-27", affectedElements: {}, playInReverse: false, autoStopEventId: "e-55" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a60" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521078637848,
        },
        "e-56": {
            id: "e-56",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-28", affectedElements: {}, playInReverse: false, autoStopEventId: "e-57" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a66" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521079010396,
        },
        "e-58": {
            id: "e-58",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-29", affectedElements: {}, playInReverse: false, autoStopEventId: "e-59" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a69" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521083647556,
        },
        "e-60": {
            id: "e-60",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-30", affectedElements: {}, playInReverse: false, autoStopEventId: "e-61" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a6c" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521084024832,
        },
        "e-64": {
            id: "e-64",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-19", affectedElements: {}, playInReverse: false, autoStopEventId: "e-65" } },
            mediaQueries: ["medium"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|8b9e09a3-ca45-4c73-32a3-48ddb331198d" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521592651169,
        },
        "e-65": {
            id: "e-65",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-20", affectedElements: {}, playInReverse: false, autoStopEventId: "e-64" } },
            mediaQueries: ["medium"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|8b9e09a3-ca45-4c73-32a3-48ddb331198d" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521592651169,
        },
        "e-66": {
            id: "e-66",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-23", affectedElements: {}, playInReverse: false, autoStopEventId: "e-67" } },
            mediaQueries: ["tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|8b9e09a3-ca45-4c73-32a3-48ddb331198d" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521592651169,
        },
        "e-67": {
            id: "e-67",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-24", affectedElements: {}, playInReverse: false, autoStopEventId: "e-66" } },
            mediaQueries: ["tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|8b9e09a3-ca45-4c73-32a3-48ddb331198d" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521592651169,
        },
        "e-68": {
            id: "e-68",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-21", affectedElements: {}, playInReverse: false, autoStopEventId: "e-69" } },
            mediaQueries: ["small"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|8b9e09a3-ca45-4c73-32a3-48ddb331198d" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521592651169,
        },
        "e-69": {
            id: "e-69",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-22", affectedElements: {}, playInReverse: false, autoStopEventId: "e-68" } },
            mediaQueries: ["small"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|8b9e09a3-ca45-4c73-32a3-48ddb331198d" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1521592651169,
        },
        "e-70": {
            id: "e-70",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-2", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|c2c3ff5e-270f-dfb4-91d0-48c79d5afd60" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 50, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1521593810995,
        },
        "e-71": {
            id: "e-71",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-2", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|1aec7980-4259-df84-ed8e-b608bc9de230" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 50, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1521593922212,
        },
        "e-72": {
            id: "e-72",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-73" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|c2c3ff5e-270f-dfb4-91d0-48c79d5afd60" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 100, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1521594311922,
        },
        "e-73": {
            id: "e-73",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-72" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ab1a9494ccef619014816ef|c2c3ff5e-270f-dfb4-91d0-48c79d5afd60" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 100, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1521594311922,
        },
        "e-76": {
            id: "e-76",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-77" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|3756f18a-b27e-986c-f322-b80cc4145e2a" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 300, direction: "RIGHT", effectIn: true },
            createdOn: 1521681126686,
        },
        "e-78": {
            id: "e-78",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-79" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|3756f18a-b27e-986c-f322-b80cc4145e2f" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 600, direction: "RIGHT", effectIn: true },
            createdOn: 1521681126686,
        },
        "e-86": {
            id: "e-86",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-87" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|23b50395-09dc-cc15-5550-b5a7486c05c6" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1521681227533,
        },
        "e-88": {
            id: "e-88",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-89" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|23b50395-09dc-cc15-5550-b5a7486c05c9" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 300, direction: "RIGHT", effectIn: true },
            createdOn: 1521681227533,
        },
        "e-90": {
            id: "e-90",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "FADE_EFFECT", config: { actionListId: "fadeIn", autoStopEventId: "e-91" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|8f5b2be6-3b82-ec42-a97a-80f7003d1e03" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 550, direction: null, effectIn: true },
            createdOn: 1522282946176,
        },
        "e-92": {
            id: "e-92",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "FADE_EFFECT", config: { actionListId: "fadeIn", autoStopEventId: "e-93" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|b78f9b62-fc13-4212-102d-c8a3ef517600" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 200, direction: null, effectIn: true },
            createdOn: 1522289179647,
        },
        "e-96": {
            id: "e-96",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "FADE_EFFECT", config: { actionListId: "fadeIn", autoStopEventId: "e-97" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|a56a4274-18b9-11da-249d-6f4a93e7ad2c" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 600, direction: null, effectIn: true },
            createdOn: 1522289976891,
        },
        "e-102": {
            id: "e-102",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInLeft", autoStopEventId: "e-103" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|a2952233-c540-4606-0329-6465e538867f" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 550, direction: "LEFT", effectIn: true },
            createdOn: 1522291573716,
        },
        "e-104": {
            id: "e-104",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInLeft", autoStopEventId: "e-105" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|a2952233-c540-4606-0329-6465e538868a" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 200, direction: "LEFT", effectIn: true },
            createdOn: 1522291573716,
        },
        "e-106": {
            id: "e-106",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInLeft", autoStopEventId: "e-107" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|a2952233-c540-4606-0329-6465e5388693" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 600, direction: "LEFT", effectIn: true },
            createdOn: 1522291573716,
        },
        "e-108": {
            id: "e-108",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-109" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|82d4317c-c7e6-52af-d78a-7a71e81202ab" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1522291780925,
        },
        "e-110": {
            id: "e-110",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-111" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|82d4317c-c7e6-52af-d78a-7a71e81202ae" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 900, direction: "RIGHT", effectIn: true },
            createdOn: 1522291780925,
        },
        "e-112": {
            id: "e-112",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInLeft", autoStopEventId: "e-113" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|82d4317c-c7e6-52af-d78a-7a71e81202b8" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 400, direction: "LEFT", effectIn: true },
            createdOn: 1522291780925,
        },
        "e-114": {
            id: "e-114",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-115" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|57b1d534-7c4b-66bf-dbd8-b07e1dab012f" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1522291872742,
        },
        "e-116": {
            id: "e-116",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInRight", autoStopEventId: "e-117" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|57b1d534-7c4b-66bf-dbd8-b07e1dab0132" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 900, direction: "RIGHT", effectIn: true },
            createdOn: 1522291872742,
        },
        "e-118": {
            id: "e-118",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInLeft", autoStopEventId: "e-119" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|57b1d534-7c4b-66bf-dbd8-b07e1dab013c" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 400, direction: "LEFT", effectIn: true },
            createdOn: 1522291872742,
        },
        "e-122": {
            id: "e-122",
            eventTypeId: "NAVBAR_OPEN",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-23", affectedElements: {}, playInReverse: false, autoStopEventId: "e-123" } },
            mediaQueries: ["tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8ce5c71a5b5000018e69ab|953b82d5-f570-040e-9ccb-f33aec1b63a4" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1524778833225,
        },
        "e-123": {
            id: "e-123",
            eventTypeId: "NAVBAR_CLOSE",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-24", affectedElements: {}, playInReverse: false, autoStopEventId: "e-122" } },
            mediaQueries: ["tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8ce5c71a5b5000018e69ab|953b82d5-f570-040e-9ccb-f33aec1b63a4" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1524778833225,
        },
        "e-124": {
            id: "e-124",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "FADE_EFFECT", config: { actionListId: "fadeIn", autoStopEventId: "e-125" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8ce5c71a5b5000018e69ab|43b39bbf-1194-0e6d-87a4-a446a0ce5c9c" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 300, direction: null, effectIn: true },
            createdOn: 1524780082757,
        },
        "e-126": {
            id: "e-126",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "SLIDE_EFFECT", config: { actionListId: "slideInLeft", autoStopEventId: "e-127" }, instant: false },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8ce5c71a5b5000018e69ab|43b39bbf-1194-0e6d-87a4-a446a0ce5c9f" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: 500, direction: "LEFT", effectIn: true },
            createdOn: 1524780082757,
        },
        "e-128": {
            id: "e-128",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-31", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|fd3c5b7d-090e-037e-592e-d39afc359407" },
            config: [{ continuousParameterGroupId: "a-31-p", smoothing: 95, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1524793570713,
        },
        "e-129": {
            id: "e-129",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-32", affectedElements: {}, playInReverse: false, autoStopEventId: "e-130" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1524793570713,
        },
        "e-130": {
            id: "e-130",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-33", affectedElements: {}, playInReverse: false, autoStopEventId: "e-129" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1524793570713,
        },
        "e-131": {
            id: "e-131",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-34",
                    affectedElements: { "5ae280d08cb7533b88108053|699bd88c-641f-5f2e-ec21-661d40d91d21": { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"], limitAffectedElements: null } },
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: [{ continuousParameterGroupId: "a-34-p", smoothing: 60, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1524793570713,
        },
        "e-134": {
            id: "e-134",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-37", affectedElements: {}, playInReverse: false, autoStopEventId: "e-135" } },
            mediaQueries: ["medium", "small"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "5ae280d08cb7533b88108053" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1524793570713,
        },
        "e-141": {
            id: "e-141",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-25", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8|79eff643-af46-cc79-ae38-00ffada59bb2" },
            config: [{ continuousParameterGroupId: "a-25-p", smoothing: 91, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1525796216317,
        },
        "e-142": {
            id: "e-142",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-11", affectedElements: {}, playInReverse: false, autoStopEventId: "e-143" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8|79eff643-af46-cc79-ae38-00ffada59bb2" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1525796216317,
        },
        "e-143": {
            id: "e-143",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-12", affectedElements: {}, playInReverse: false, autoStopEventId: "e-142" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a8d8d86689c090001cac2d8|79eff643-af46-cc79-ae38-00ffada59bb2" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1525796216317,
        },
        "e-146": {
            id: "e-146",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-38", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|04523310-f00f-cda4-ee12-a783fda89a77" },
            config: [{ continuousParameterGroupId: "a-38-p", smoothing: 91, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1525797128694,
        },
        "e-147": {
            id: "e-147",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-35", affectedElements: {}, playInReverse: false, autoStopEventId: "e-148" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|04523310-f00f-cda4-ee12-a783fda89a77" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1525797128694,
        },
        "e-148": {
            id: "e-148",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-36", affectedElements: {}, playInReverse: false, autoStopEventId: "e-147" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|04523310-f00f-cda4-ee12-a783fda89a77" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1525797128694,
        },
        "e-149": {
            id: "e-149",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-42", affectedElements: {}, playInReverse: false, autoStopEventId: "e-150" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "59f8ab2d78cc2d0001fd2a89" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1528682560605,
        },
        "e-151": {
            id: "e-151",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-43", affectedElements: {}, playInReverse: false, autoStopEventId: "e-152" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697145" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1528683274479,
        },
        "e-153": {
            id: "e-153",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-44", affectedElements: {}, playInReverse: false, autoStopEventId: "e-154" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697142" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1528683274479,
        },
        "e-155": {
            id: "e-155",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-45", affectedElements: {}, playInReverse: false, autoStopEventId: "e-156" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697148" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1528683274479,
        },
        "e-157": {
            id: "e-157",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-46", affectedElements: {}, playInReverse: false, autoStopEventId: "e-158" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d66969714b" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1528683274479,
        },
        "e-159": {
            id: "e-159",
            eventTypeId: "MOUSE_CLICK",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-47", affectedElements: {}, playInReverse: false, autoStopEventId: "e-160" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d66969714e" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1528683274479,
        },
        "e-161": {
            id: "e-161",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-41", affectedElements: {}, playInReverse: false, autoStopEventId: "e-162" } },
            mediaQueries: ["medium"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1528683675419,
        },
        "e-166": {
            id: "e-166",
            eventTypeId: "PAGE_FINISH",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-165" } },
            mediaQueries: ["main"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "5a010913079aa40001b3d9df" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1530907593155,
        },
        "e-167": {
            id: "e-167",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-168" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|c566c044-d63e-4c74-50c9-d048bb30b904" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1534721466080,
        },
        "e-168": {
            id: "e-168",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-167" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|c566c044-d63e-4c74-50c9-d048bb30b904" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1534721466080,
        },
        "e-169": {
            id: "e-169",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-2",
                    affectedElements: { "699bd88c-641f-5f2e-ec21-661d40d91d21": { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"], limitAffectedElements: null } },
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|c566c044-d63e-4c74-50c9-d048bb30b904" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 60, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534721466080,
        },
        "e-170": {
            id: "e-170",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-6", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|323a5564-7a35-5ea7-edb2-1749c328a40c" },
            config: [{ continuousParameterGroupId: "a-6-p", smoothing: 95, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1534721486165,
        },
        "e-171": {
            id: "e-171",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-6", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5b8006310566a1a7828c9f1a|fd3c5b7d-090e-037e-592e-d39afc359407" },
            config: [{ continuousParameterGroupId: "a-6-p", smoothing: 95, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1535116849764,
        },
        "e-172": {
            id: "e-172",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-173" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5b8006310566a1a7828c9f1a|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1535116849764,
        },
        "e-173": {
            id: "e-173",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-172" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5b8006310566a1a7828c9f1a|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1535116849764,
        },
        "e-174": {
            id: "e-174",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-2",
                    affectedElements: { "699bd88c-641f-5f2e-ec21-661d40d91d21": { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"], limitAffectedElements: null } },
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5b8006310566a1a7828c9f1a|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 60, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1535116849764,
        },
        "e-175": {
            id: "e-175",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-176" } },
            mediaQueries: ["medium", "small"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "5b8006310566a1a7828c9f1a" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1535116849764,
        },
        "e-177": {
            id: "e-177",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-50", affectedElements: {}, playInReverse: false, autoStopEventId: "e-178" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|6c189871-a827-c5c9-d9ca-a025e20738a8" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 50, scrollOffsetUnit: "%", delay: 0, direction: "LEFT", effectIn: true },
            createdOn: 1535117543517,
        },
        "e-185": {
            id: "e-185",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-48", affectedElements: {}, playInReverse: false, autoStopEventId: "e-186" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|e2b6ec92-6089-848e-fcb0-ec7e4c84bf4c" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1535161662957,
        },
        "e-187": {
            id: "e-187",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-49", affectedElements: {}, playInReverse: false, autoStopEventId: "e-188" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a010913079aa40001b3d9df|2c86c950-4b72-78b3-45ed-fc9607e278fe" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1535162319560,
        },
        "e-189": {
            id: "e-189",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-51", affectedElements: {}, playInReverse: false, autoStopEventId: "e-190" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "575f7837ad1958ea3cdaddf1|3978feeb-6fec-7c9d-7e4d-46be7724abf4" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 50, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1535221568794,
        },
        "e-191": {
            id: "e-191",
            eventTypeId: "MOUSE_OVER",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-52", affectedElements: {}, playInReverse: false, autoStopEventId: "e-192" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5b8006310566a1a7828c9f1a|b3719e0f-6636-d192-af33-16fd0403ec24" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1535678032192,
        },
        "e-192": {
            id: "e-192",
            eventTypeId: "MOUSE_OUT",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-53", affectedElements: {}, playInReverse: false, autoStopEventId: "e-191" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5b8006310566a1a7828c9f1a|b3719e0f-6636-d192-af33-16fd0403ec24" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1535678032193,
        },
        "e-193": {
            id: "e-193",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-2",
                    affectedElements: { "699bd88c-641f-5f2e-ec21-661d40d91d21": { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"], limitAffectedElements: null } },
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a7273d69c5ef80001f637cc|217a05ba-5bd5-8490-c835-2fe5855da860" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 60, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1543171419780,
        },
        "e-194": {
            id: "e-194",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-195" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a7273d69c5ef80001f637cc|217a05ba-5bd5-8490-c835-2fe5855da860" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1543171419780,
        },
        "e-195": {
            id: "e-195",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-194" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a7273d69c5ef80001f637cc|217a05ba-5bd5-8490-c835-2fe5855da860" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1543171419780,
        },
        "e-196": {
            id: "e-196",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-6", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a7273d69c5ef80001f637cc|229b892e-f87f-7741-511e-25b2e6d90e67" },
            config: [{ continuousParameterGroupId: "a-6-p", smoothing: 95, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1543171615928,
        },
        "e-197": {
            id: "e-197",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-50", affectedElements: {}, playInReverse: false, autoStopEventId: "e-198" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a7273d69c5ef80001f637cc|229b892e-f87f-7741-511e-25b2e6d90e6a" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 50, scrollOffsetUnit: "%", delay: 0, direction: "LEFT", effectIn: true },
            createdOn: 1543171615928,
        },
        "e-199": {
            id: "e-199",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-51", affectedElements: {}, playInReverse: false, autoStopEventId: "e-200" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5a7273d69c5ef80001f637cc|229b892e-f87f-7741-511e-25b2e6d90e71" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 50, scrollOffsetUnit: "%", delay: 0, direction: "RIGHT", effectIn: true },
            createdOn: 1543171615928,
        },
        "e-201": {
            id: "e-201",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-48", affectedElements: {}, playInReverse: false, autoStopEventId: "e-202" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5ae280d08cb7533b88108053|152b1cb4-c86a-92aa-25de-7b17a7ba5f9b" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1543173121349,
        },
        "e-203": {
            id: "e-203",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: { id: "", actionTypeId: "GENERAL_CONTINUOUS_ACTION", config: { actionListId: "a-6", affectedElements: {}, duration: 0 } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5c146202e7c04622790e49fa|fd3c5b7d-090e-037e-592e-d39afc359407" },
            config: [{ continuousParameterGroupId: "a-6-p", smoothing: 95, startsEntering: true, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1544839682023,
        },
        "e-204": {
            id: "e-204",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-8", affectedElements: {}, playInReverse: false, autoStopEventId: "e-205" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5c146202e7c04622790e49fa|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1544839682023,
        },
        "e-205": {
            id: "e-205",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-7", affectedElements: {}, playInReverse: false, autoStopEventId: "e-204" } },
            mediaQueries: ["main"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5c146202e7c04622790e49fa|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 10, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1544839682023,
        },
        "e-206": {
            id: "e-206",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: {
                    actionListId: "a-2",
                    affectedElements: { "699bd88c-641f-5f2e-ec21-661d40d91d21": { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"], limitAffectedElements: null } },
                    duration: 0,
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5c146202e7c04622790e49fa|03e854c3-ebe6-bcd3-f6ad-a97c066629f7" },
            config: [{ continuousParameterGroupId: "a-2-p", smoothing: 60, startsEntering: false, addStartOffset: false, addOffsetValue: 50, startsExiting: false, addEndOffset: false, endOffsetValue: 50 }],
            createdOn: 1544839682023,
        },
        "e-207": {
            id: "e-207",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-10", affectedElements: {}, playInReverse: false, autoStopEventId: "e-208" } },
            mediaQueries: ["medium", "small"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "5c146202e7c04622790e49fa" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1544839682023,
        },
        "e-209": {
            id: "e-209",
            eventTypeId: "PAGE_START",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-54", affectedElements: {}, playInReverse: false, autoStopEventId: "e-210" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "PAGE", styleBlockIds: [], id: "5c146202e7c04622790e49fa" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: null, scrollOffsetUnit: null, delay: null, direction: null, effectIn: null },
            createdOn: 1544936931984,
        },
        "e-211": {
            id: "e-211",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-55", affectedElements: {}, playInReverse: false, autoStopEventId: "e-212" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5c146202e7c04622790e49fa|b3719e0f-6636-d192-af33-16fd0403ec22" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 20, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1544938213166,
        },
        "e-212": {
            id: "e-212",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-56", affectedElements: {}, playInReverse: false, autoStopEventId: "e-211" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5c146202e7c04622790e49fa|b3719e0f-6636-d192-af33-16fd0403ec22" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 30, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1544938213170,
        },
        "e-213": {
            id: "e-213",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: { id: "", actionTypeId: "GENERAL_START_ACTION", config: { delay: 0, easing: "", duration: 0, actionListId: "a-57", affectedElements: {}, playInReverse: false, autoStopEventId: "e-214" } },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: { appliesTo: "ELEMENT", styleBlockIds: [], id: "5c146202e7c04622790e49fa|b3719e0f-6636-d192-af33-16fd0403ec22" },
            config: { loop: false, playInReverse: false, scrollOffsetValue: 50, scrollOffsetUnit: "%", delay: null, direction: null, effectIn: null },
            createdOn: 1545094647099,
        },
    },
    actionLists: {
        "a-41": {
            id: "a-41",
            title: "Scale showcase-tablet",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-41-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 0, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 0.75, yValue: 0.75, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1528681569526,
            useFirstGroupAsInitialState: false,
        },
        "a-2": {
            id: "a-2",
            title: "Shrink/grow menu",
            continuousParameterGroups: [
                {
                    id: "a-2-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-2-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        locked: false,
                                        target: { selector: ".block-overlay", selectorGuids: ["fa234a31-fbad-efe3-313f-be00bf342b3b"] },
                                        heightValue: 50,
                                        widthUnit: "px",
                                        heightUnit: "VH",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 1,
                            actionItems: [
                                {
                                    id: "a-2-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"] }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 9.5,
                            actionItems: [
                                {
                                    id: "a-2-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"] }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                                {
                                    id: "a-2-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".arrows-wrap", selectorGuids: ["393afd31-5fe9-bc51-9a8c-1f6ffb8f8116"] }, value: 1, unit: "" },
                                },
                            ],
                        },
                        {
                            keyframe: 11,
                            actionItems: [
                                {
                                    id: "a-2-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".arrows-wrap", selectorGuids: ["393afd31-5fe9-bc51-9a8c-1f6ffb8f8116"] }, value: 0, unit: "" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-2-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        locked: false,
                                        target: { selector: ".block-overlay", selectorGuids: ["fa234a31-fbad-efe3-313f-be00bf342b3b"] },
                                        heightValue: 6,
                                        widthUnit: "px",
                                        heightUnit: "VH",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1510021033252,
        },
        "a-3": {
            id: "a-3",
            title: "Main title wrap rotating",
            continuousParameterGroups: [
                {
                    id: "a-3-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-3-n-2",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|d44d902d-ed29-5319-53d7-93d23bb804b4" }, yValue: -7, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                                {
                                    id: "a-3-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|b4879640-b7f1-f74e-0a20-e769df58bfa8" }, xValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|62bd19b0-c66c-35dc-299a-ef06569d400a" }, xValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|8f73224a-2f13-ca8e-1196-a686195991fd" }, xValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-17",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|04b96271-ea6b-5597-b260-9a00bb817a34" }, xValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-21",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|1d40bb89-6360-2746-9aa7-8bbef2c0a99e" }, yValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-3-n",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|d44d902d-ed29-5319-53d7-93d23bb804b4" }, yValue: 7, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                                {
                                    id: "a-3-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|b4879640-b7f1-f74e-0a20-e769df58bfa8" }, xValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|62bd19b0-c66c-35dc-299a-ef06569d400a" }, xValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|8f73224a-2f13-ca8e-1196-a686195991fd" }, xValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-18",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|04b96271-ea6b-5597-b260-9a00bb817a34" }, xValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-22",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|1d40bb89-6360-2746-9aa7-8bbef2c0a99e" }, yValue: 1, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "a-3-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-3-n-3",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|d44d902d-ed29-5319-53d7-93d23bb804b4" }, xValue: 8, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                                {
                                    id: "a-3-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|b4879640-b7f1-f74e-0a20-e769df58bfa8" }, yValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|62bd19b0-c66c-35dc-299a-ef06569d400a" }, yValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-15",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|8f73224a-2f13-ca8e-1196-a686195991fd" }, yValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-19",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|04b96271-ea6b-5597-b260-9a00bb817a34" }, yValue: -10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-23",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|1d40bb89-6360-2746-9aa7-8bbef2c0a99e" }, xValue: 1, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-3-n-4",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|d44d902d-ed29-5319-53d7-93d23bb804b4" }, xValue: -8, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                                {
                                    id: "a-3-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|b4879640-b7f1-f74e-0a20-e769df58bfa8" }, yValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|62bd19b0-c66c-35dc-299a-ef06569d400a" }, yValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-16",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|8f73224a-2f13-ca8e-1196-a686195991fd" }, yValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-20",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|04b96271-ea6b-5597-b260-9a00bb817a34" }, yValue: 10, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                                },
                                {
                                    id: "a-3-n-24",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5a010913079aa40001b3d9df|1d40bb89-6360-2746-9aa7-8bbef2c0a99e" }, xValue: 0, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1510071699710,
        },
        "a-6": {
            id: "a-6",
            title: "Page header animation",
            continuousParameterGroups: [
                {
                    id: "a-6-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-6-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".page-header-wrap", selectorGuids: ["df4af9a5-d82a-22a9-6fc4-40908389cfeb"] }, xValue: 1, yValue: 1, locked: true },
                                },
                                {
                                    id: "a-6-n-3",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".page-header-wrap", selectorGuids: ["df4af9a5-d82a-22a9-6fc4-40908389cfeb"] }, value: 1, unit: "" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-6-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".page-header-wrap", selectorGuids: ["df4af9a5-d82a-22a9-6fc4-40908389cfeb"] }, xValue: 1.25, yValue: 1.25, locked: true },
                                },
                                {
                                    id: "a-6-n-4",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".page-header-wrap", selectorGuids: ["df4af9a5-d82a-22a9-6fc4-40908389cfeb"] }, value: 0, unit: "" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1519226929833,
        },
        "a-8": {
            id: "a-8",
            title: "Side bar grow",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-8-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 185,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-8-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".side-navbar", selectorGuids: ["02fde974-abc9-9951-cf87-9c221e6c2f04"] }, xValue: -50, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        // "a-7": {
        //     id: "a-7",
        //     title: "Side bar shrink",
        //     actionItemGroups: [
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-7-n",
        //                     actionTypeId: "STYLE_SIZE",
        //                     config: {
        //                         delay: 0,
        //                         easing: "outQuart",
        //                         duration: 700,
        //                         locked: false,
        //                         target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
        //                         widthValue: 60,
        //                         widthUnit: "PX",
        //                         heightUnit: "PX",
        //                     },
        //                 },
        //                 {
        //                     id: "a-7-n-3",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".side-navbar", selectorGuids: ["02fde974-abc9-9951-cf87-9c221e6c2f04"] }, xValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
        //                 },
        //             ],
        //         },
        //     ],
        //     createdOn: 1519227820220,
        //     useFirstGroupAsInitialState: false,
        // },
        "a-11": {
            id: "a-11",
            title: "Thumbnail hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-11-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 300, target: { useEventTarget: "CHILDREN", selector: ".sketch-overlay", selectorGuids: ["2846c54d-b6a0-fc9b-a04f-1fb3b1df7fa2"] }, value: 0, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1519786678238,
            useFirstGroupAsInitialState: false,
        },
        "a-12": {
            id: "a-12",
            title: "Thumbnail hover out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-12-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 300, target: { useEventTarget: "CHILDREN", selector: ".sketch-overlay", selectorGuids: ["2846c54d-b6a0-fc9b-a04f-1fb3b1df7fa2"] }, value: 0.65, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1519786678238,
            useFirstGroupAsInitialState: false,
        },
        "a-10": {
            id: "a-10",
            title: "Side bar shrink - tablet",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-10-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 60,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-19": {
            id: "a-19",
            title: "Side bar grow-tablet 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-19-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 155,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-19-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".side-navbar", selectorGuids: ["02fde974-abc9-9951-cf87-9c221e6c2f04"] }, xValue: -50, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-20": {
            id: "a-20",
            title: "Side bar shrink - tablet 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-20-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 60,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-20-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".side-navbar", selectorGuids: ["02fde974-abc9-9951-cf87-9c221e6c2f04"] }, xValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-21": {
            id: "a-21",
            title: "Side bar grow-mobile-land 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-21-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 100,
                                widthUnit: "VW",
                                heightUnit: "PX",
                            },
                        },
                        { id: "a-21-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 200, target: { selector: ".block-overlay", selectorGuids: ["fa234a31-fbad-efe3-313f-be00bf342b3b"] }, value: 0, unit: "" } },
                        {
                            id: "a-21-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".side-nav-menu", selectorGuids: ["600b42aa-9041-a6c6-ce15-da6df5213a95"] }, xValue: 10, xUnit: "VW", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-21-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: { delay: 0, easing: "", duration: 500, locked: false, target: { id: "3269b4c7-c75c-1c2f-38e8-800aa3657b07" }, widthValue: 100, widthUnit: "%", heightUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-22": {
            id: "a-22",
            title: "Side bar shrink - mobile-land 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-22-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 1,
                                widthUnit: "VW",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-22-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".side-nav-menu", selectorGuids: ["600b42aa-9041-a6c6-ce15-da6df5213a95"] }, xValue: 0, xUnit: "VW", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-22-n-5", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".block-overlay", selectorGuids: ["fa234a31-fbad-efe3-313f-be00bf342b3b"] }, value: 1, unit: "" } },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-23": {
            id: "a-23",
            title: "Side bar grow-mobile-port 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-23-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: { delay: 0, easing: "", duration: 500, locked: false, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb408" }, heightValue: 80, widthUnit: "PX", heightUnit: "PX" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-23-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: { delay: 0, easing: "outQuart", duration: 700, locked: false, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb3fd" }, heightValue: 100, widthUnit: "VW", heightUnit: "VH" },
                        },
                        {
                            id: "a-23-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: { delay: 0, easing: "", duration: 500, locked: false, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb408" }, heightValue: 80, widthUnit: "PX", heightUnit: "VH" },
                        },
                        {
                            id: "a-23-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: { delay: 0, easing: "outQuart", duration: 500, locked: false, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb40c" }, widthValue: 100, widthUnit: "VW", heightUnit: "PX" },
                        },
                        { id: "a-23-n-4", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "outQuad", duration: 500, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb417" }, yValue: -18, xUnit: "PX", yUnit: "VH", zUnit: "PX" } },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: true,
        },
        "a-24": {
            id: "a-24",
            title: "Side bar shrink - mobile-port 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-24-n",
                            actionTypeId: "STYLE_SIZE",
                            config: { delay: 0, easing: "outQuart", duration: 700, locked: false, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb3fd" }, heightValue: 10, widthUnit: "VW", heightUnit: "VH" },
                        },
                        {
                            id: "a-24-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: { delay: 0, easing: "", duration: 500, locked: false, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb40c" }, widthValue: 15, widthUnit: "VW", heightUnit: "PX" },
                        },
                        { id: "a-24-n-3", actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, easing: "outQuart", duration: 500, target: { id: "a3d73d96-1c7a-0e37-160f-f755042cb417" }, yValue: 0, xUnit: "PX", yUnit: "VH", zUnit: "PX" } },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-25": {
            id: "a-25",
            title: "Project card scroll animation",
            continuousParameterGroups: [
                {
                    id: "a-25-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-25-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: { useEventTarget: "CHILDREN", selector: ".project-info", selectorGuids: ["56a7afeb-3c21-76ea-b6cd-45e3e6ae4e9b"] },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-25-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: { useEventTarget: "CHILDREN", selector: ".project-info", selectorGuids: ["56a7afeb-3c21-76ea-b6cd-45e3e6ae4e9b"] },
                                        yValue: 30,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1521060009932,
        },
        "a-26": {
            id: "a-26",
            title: "Morph to Laptop",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-26-n-7",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-26-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-26-n-25",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-26-n-24",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-26-n-23",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-26-n-18",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-26-n-17",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-26-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 765,
                                heightValue: 533,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-26-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                heightValue: 528,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-26-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -213, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-26-n-3", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-26-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 850,
                                heightValue: 533,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-26-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: -45, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-26-n-11",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-26-n-13",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-26-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 70,
                                heightValue: 52,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-26-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, yValue: -22, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-26-n-14",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-26-n-15",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-26-n-16",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        { id: "a-26-n-26", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-26-n-31", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-26-n-32", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-26-n-27", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 1, unit: "" } },
                        { id: "a-26-n-28", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-26-n-33", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-26-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-26-n-34", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-26-n-30", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-26-n-35", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-26-n-36",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a63" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-26-n-37",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a63" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-26-n-38",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-26-n-39",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-27": {
            id: "a-27",
            title: "Morph to Desktop",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-27-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-27-n-16",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-17",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 96,
                                heightValue: 90,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-19",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-23",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-24",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-27-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 990,
                                heightValue: 740,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-27-n-29",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-27-n-22",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-21",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-27-n-18",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                heightValue: 631,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-27-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-27-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 1, unit: "" } },
                        {
                            id: "a-27-n-7",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 780,
                                heightValue: 360,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-27-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-27-n-11",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-27-n-13",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-27-n-12",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-27-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 96,
                                heightValue: 90,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-27-n-14",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-27-n-15",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-27-n-20",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        { id: "a-27-n-35", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-27-n-30", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 1, unit: "" } },
                        { id: "a-27-n-31", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-27-n-36", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-27-n-32", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-27-n-37", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-27-n-33", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-27-n-38", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-27-n-34", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-27-n-39", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-27-n-40",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-27-n-42",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a60" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-27-n-41",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a60" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-27-n-44",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-27-n-43",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-28": {
            id: "a-28",
            title: "Morph to Tablet1",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-28-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-28-n-27",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-28-n-26",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-28-n-25",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-28-n-20",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-28-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 750,
                                heightValue: 500,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-28-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                heightValue: 495,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-28-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-28-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-28-n-11",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 92,
                                heightValue: 88,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-28-n-12",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 180, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-28-n-7",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-28-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 340, yValue: -378, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-28-n-13",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-28-n-14",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-28-n-15",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-28-n-16",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-28-n-19",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-28-n-17",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 213, gValue: 213, bValue: 240, aValue: 0.2 },
                        },
                        {
                            id: "a-28-n-18",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 75,
                                heightValue: 75,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        { id: "a-28-n-28", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-28-n-33", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-28-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-28-n-34", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-28-n-35", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-28-n-30", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 1, unit: "" } },
                        { id: "a-28-n-31", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-28-n-36", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-28-n-32", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-28-n-37", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-28-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 0, yValue: 6, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-28-n-38",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a66" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-28-n-39",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a66" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-28-n-40",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                        {
                            id: "a-28-n-41",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-29": {
            id: "a-29",
            title: "Morph to Tablet 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-29-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-29-n-26",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-29-n-19",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-29-n-18",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-29-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 750,
                                heightValue: 500,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-29-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                heightValue: 495,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-29-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-29-n-6", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-29-n-7",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 92,
                                heightValue: 88,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-29-n-8",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 180, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-29-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-29-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 340, yValue: -378, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-11",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-29-n-12",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-29-n-13",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-29-n-14",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-29-n-15",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-16",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 213, gValue: 213, bValue: 240, aValue: 0.2 },
                        },
                        {
                            id: "a-29-n-17",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 75,
                                heightValue: 75,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-29-n-25",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: -90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-29-n-24",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 60.5,
                                heightValue: 166.5,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-29-n-27",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 33, yValue: -20, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-29-n-28", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-29-n-33", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-29-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-29-n-34", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-29-n-30", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-29-n-35", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-29-n-36", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-29-n-31", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 1, unit: "" } },
                        { id: "a-29-n-32", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-29-n-37", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-29-n-38",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: -17, yValue: 4, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-29-n-39",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a69" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-29-n-40",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a69" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-29-n-41",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-29-n-42",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-30": {
            id: "a-30",
            title: "Morph to Phone",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-30-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-30-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-30-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-30-n-20",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-30-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 550,
                                heightValue: 300,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-30-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                heightValue: 294,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-30-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 98,
                                heightValue: 125,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        { id: "a-30-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-30-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-30-n-14",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-30-n-13",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-30-n-10",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 180, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-30-n-19",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 95,
                                heightValue: 95,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-30-n-18",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 213, gValue: 213, bValue: 240, aValue: 0.2 },
                        },
                        {
                            id: "a-30-n-15",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-30-n-16",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-30-n-17",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-30-n-11",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 35,
                                heightValue: 35,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-30-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 250, yValue: -750, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-30-n-25",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: -90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-30-n-26",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 60.5,
                                heightValue: 166,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-30-n-27",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 33, yValue: -20, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-30-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-30-n-34", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-30-n-30", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-30-n-35", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-30-n-31", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-30-n-36", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-30-n-32", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-30-n-37", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-30-n-38", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        { id: "a-30-n-33", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 1, unit: "" } },
                        {
                            id: "a-30-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: -18, yValue: 13, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-30-n-39",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a6c" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-30-n-40",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "622f71ff-d5bd-4f07-6c2c-fa1374f50a6c" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-30-n-41",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-30-n-42",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-31": {
            id: "a-31",
            title: "Page header animation 2",
            continuousParameterGroups: [
                {
                    id: "a-31-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-31-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5ae280d08cb7533b88108053|a3591ba6-c5c9-11ca-592e-d2456f38d7fb" }, xValue: 1, yValue: 1, locked: true },
                                },
                                { id: "a-31-n-2", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "5ae280d08cb7533b88108053|a3591ba6-c5c9-11ca-592e-d2456f38d7fb" }, value: 1, unit: "" } },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-31-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5ae280d08cb7533b88108053|a3591ba6-c5c9-11ca-592e-d2456f38d7fb" }, xValue: 1.25, yValue: 1.25, locked: true },
                                },
                                { id: "a-31-n-4", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { id: "5ae280d08cb7533b88108053|a3591ba6-c5c9-11ca-592e-d2456f38d7fb" }, value: 0, unit: "" } },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1519226929833,
        },
        "a-32": {
            id: "a-32",
            title: "Side bar grow 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-32-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 185,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-32-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".side-navbar", selectorGuids: ["02fde974-abc9-9951-cf87-9c221e6c2f04"] }, xValue: -50, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-33": {
            id: "a-33",
            title: "Side bar shrink 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-33-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 60,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-33-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".side-navbar", selectorGuids: ["02fde974-abc9-9951-cf87-9c221e6c2f04"] }, xValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-34": {
            id: "a-34",
            title: "Shrink/grow menu 2",
            continuousParameterGroups: [
                {
                    id: "a-34-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-34-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        locked: false,
                                        target: { selector: ".block-overlay", selectorGuids: ["fa234a31-fbad-efe3-313f-be00bf342b3b"] },
                                        heightValue: 50,
                                        widthUnit: "px",
                                        heightUnit: "VH",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 1,
                            actionItems: [
                                {
                                    id: "a-34-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"] }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 9.5,
                            actionItems: [
                                {
                                    id: "a-34-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { selector: ".arrow-color-overlay", selectorGuids: ["7fe5e828-db6e-0c26-8ffb-3354379975dc"] }, yValue: -100, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-34-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        locked: false,
                                        target: { selector: ".block-overlay", selectorGuids: ["fa234a31-fbad-efe3-313f-be00bf342b3b"] },
                                        heightValue: 6,
                                        widthUnit: "px",
                                        heightUnit: "VH",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1510021033252,
        },
        "a-37": {
            id: "a-37",
            title: "Side bar shrink - tablet 3",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-37-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 700,
                                locked: false,
                                target: { selector: ".navigation-wrap", selectorGuids: ["f28d3aa8-a057-5c30-744b-82cc5512e50b"] },
                                widthValue: 60,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-37-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 500, target: { selector: ".side-navbar", selectorGuids: ["02fde974-abc9-9951-cf87-9c221e6c2f04"] }, xValue: 12, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1519227820220,
            useFirstGroupAsInitialState: false,
        },
        "a-38": {
            id: "a-38",
            title: "Project card scroll animation 2",
            continuousParameterGroups: [
                {
                    id: "a-38-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-38-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5ae280d08cb7533b88108053|f05b3250-e32f-4a3a-055c-4fef7ba98029" }, yValue: 0, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-38-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: { delay: 0, easing: "", duration: 500, target: { id: "5ae280d08cb7533b88108053|f05b3250-e32f-4a3a-055c-4fef7ba98029" }, yValue: 30, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1521060009932,
        },
        "a-35": {
            id: "a-35",
            title: "Thumbnail hover 2",
            actionItemGroups: [
                { actionItems: [{ id: "a-35-n", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 300, target: { id: "5ae280d08cb7533b88108053|8b8d1ae0-8a76-f915-bb4c-c5fa782af72d" }, value: 0, unit: "" } }] },
            ],
            createdOn: 1519786678238,
            useFirstGroupAsInitialState: false,
        },
        "a-36": {
            id: "a-36",
            title: "Thumbnail hover out 2",
            actionItemGroups: [
                { actionItems: [{ id: "a-36-n", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 300, target: { id: "5ae280d08cb7533b88108053|8b8d1ae0-8a76-f915-bb4c-c5fa782af72d" }, value: 0.65, unit: "" } }] },
            ],
            createdOn: 1519786678238,
            useFirstGroupAsInitialState: false,
        },
        "a-42": {
            id: "a-42",
            title: "Showcase-current button",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-42-n",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { selector: ".case-link.default", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3", "f9e112b7-b583-1d53-b877-a286b8e861a9"] },
                                rValue: 255,
                                gValue: 249,
                                bValue: 248,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-42-n-2",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { selector: ".case-link.default", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3", "f9e112b7-b583-1d53-b877-a286b8e861a9"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            createdOn: 1528682564215,
            useFirstGroupAsInitialState: false,
        },
        "a-43": {
            id: "a-43",
            title: "Morph to Laptop 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-43-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-43-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-43-n-35",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 1, yValue: 1, locked: true },
                        },
                        {
                            id: "a-43-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-43-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-43-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-43-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-43-n-7",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-43-n-8",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 765,
                                heightValue: 533,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-43-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                widthValue: 100,
                                heightValue: 528,
                                widthUnit: "%",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-43-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -213, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-43-n-11", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-43-n-12",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 850,
                                heightValue: 533,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-43-n-13",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: -45, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-43-n-14",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-43-n-15",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-43-n-16",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 70,
                                heightValue: 52,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-43-n-17",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, yValue: -22, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-43-n-18",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-43-n-19",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-43-n-20",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        { id: "a-43-n-21", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-43-n-22", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-43-n-23", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-43-n-24", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 1, unit: "" } },
                        { id: "a-43-n-25", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-43-n-26", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-43-n-27", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-43-n-28", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-43-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-43-n-30", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-43-n-31",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697145" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-43-n-32",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697145" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-43-n-33",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-43-n-34",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-44": {
            id: "a-44",
            title: "Morph to Desktop 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-44-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-44-n-42",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                globalSwatchId: "4f6fea07",
                                target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697142" },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-44-n-41",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                globalSwatchId: "fecefe65",
                                target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697142" },
                                rValue: 243,
                                gValue: 243,
                                bValue: 245,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-44-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 96,
                                heightValue: 90,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-44-n-7",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 990,
                                heightValue: 740,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-44-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-44-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-10",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-44-n-11",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-12",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                widthValue: 100,
                                heightValue: 631,
                                widthUnit: "%",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-44-n-13",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-44-n-14", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 1, unit: "" } },
                        {
                            id: "a-44-n-15",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 780,
                                heightValue: 360,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-44-n-16",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-44-n-17",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-44-n-18",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-44-n-19",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-44-n-20",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 96,
                                heightValue: 90,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-21",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-44-n-22",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-44-n-23",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-44-n-24",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        { id: "a-44-n-25", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-44-n-26", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 1, unit: "" } },
                        { id: "a-44-n-27", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-44-n-28", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-44-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-44-n-30", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-44-n-31", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-44-n-32", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-44-n-33", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-44-n-34", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-44-n-35",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-44-n-36",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697142" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-44-n-37",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697142" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-44-n-38",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-44-n-39",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                        {
                            id: "a-44-n-40",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 1, yValue: 1, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-45": {
            id: "a-45",
            title: "Morph to Tablet1 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-45-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-45-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-45-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-45-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-45-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-45-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 750,
                                heightValue: 500,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-45-n-7",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                widthValue: 100,
                                heightValue: 495,
                                widthUnit: "%",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-45-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-45-n-9", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-45-n-10",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 92,
                                heightValue: 88,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-45-n-11",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 180, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-45-n-12",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-45-n-13",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                xValue: 340,
                                yValue: -378,
                                zValue: 1,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-45-n-14",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-45-n-15",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-45-n-16",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-45-n-17",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-45-n-18",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-45-n-19",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 213, gValue: 213, bValue: 240, aValue: 0.2 },
                        },
                        {
                            id: "a-45-n-20",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 75,
                                heightValue: 75,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        { id: "a-45-n-21", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-45-n-22", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-45-n-23", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-45-n-24", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-45-n-25", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-45-n-26", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 1, unit: "" } },
                        { id: "a-45-n-27", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-45-n-28", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-45-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-45-n-30", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-45-n-31",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 0, yValue: 10, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-45-n-32",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697148" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-45-n-33",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d669697148" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-45-n-34",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                        {
                            id: "a-45-n-35",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-45-n-36",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 1.2, yValue: 1.2, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-46": {
            id: "a-46",
            title: "Morph to Tablet 3",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-46-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-46-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-46-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-46-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-46-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 750,
                                heightValue: 500,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-46-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                widthValue: 100,
                                heightValue: 495,
                                widthUnit: "%",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-46-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        { id: "a-46-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-46-n-9",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 92,
                                heightValue: 88,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-46-n-10",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 180, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-46-n-11",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-46-n-12",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                xValue: 340,
                                yValue: -378,
                                zValue: 1,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-46-n-13",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-46-n-14",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 44, gValue: 44, bValue: 44, aValue: 1 },
                        },
                        {
                            id: "a-46-n-15",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-46-n-16",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-46-n-17",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-46-n-18",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 213, gValue: 213, bValue: 240, aValue: 0.2 },
                        },
                        {
                            id: "a-46-n-19",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 75,
                                heightValue: 75,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-46-n-20",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: -90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-46-n-21",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 60.5,
                                heightValue: 166.5,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-46-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 33, yValue: -20, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-46-n-23", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-46-n-24", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-46-n-25", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-46-n-26", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-46-n-27", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-46-n-28", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-46-n-29", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-46-n-30", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 1, unit: "" } },
                        { id: "a-46-n-31", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 0, unit: "" } },
                        { id: "a-46-n-32", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        {
                            id: "a-46-n-33",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: -17, yValue: 10, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-46-n-34",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d66969714b" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-46-n-35",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d66969714b" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-46-n-36",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-46-n-37",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                        {
                            id: "a-46-n-38",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 1.1, yValue: 1.1, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        "a-47": {
            id: "a-47",
            title: "Morph to Phone 2",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-47-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 60, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-47-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 100,
                                heightValue: 100,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-47-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 0, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-47-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, zValue: 90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-47-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen", selectorGuids: ["99191a60-9104-5aa0-4f78-bbfccfdbf413"] },
                                widthValue: 550,
                                heightValue: 300,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-47-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-border", selectorGuids: ["3a6fcb09-8b20-9b15-d046-0796dd48ce2b"] },
                                widthValue: 100,
                                heightValue: 294,
                                widthUnit: "%",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-47-n-7",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-glass", selectorGuids: ["0d8ee192-0455-14eb-96a1-4844a0b4ed70"] },
                                widthValue: 98,
                                heightValue: 125,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        { id: "a-47-n-8", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, value: 0, unit: "" } },
                        {
                            id: "a-47-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-stand", selectorGuids: ["9fff2bd1-8943-a7a9-ff84-17fc03512fc3"] }, yValue: -248, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-47-n-10",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-47-n-11",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, rValue: 0, gValue: 0, bValue: 0, aValue: 0 },
                        },
                        {
                            id: "a-47-n-12",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] }, xValue: 180, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-47-n-13",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] },
                                widthValue: 95,
                                heightValue: 95,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-47-n-14",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".tablet-button-ring", selectorGuids: ["8e8a1c43-8772-1a55-1145-712f8a9194b3"] }, rValue: 213, gValue: 213, bValue: 240, aValue: 0.2 },
                        },
                        {
                            id: "a-47-n-15",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] },
                                widthValue: 50,
                                heightValue: 50,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-47-n-16",
                            actionTypeId: "STYLE_BORDER",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, rValue: 143, gValue: 143, bValue: 143, aValue: 1 },
                        },
                        {
                            id: "a-47-n-17",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".keyboard-keys-block", selectorGuids: ["3e1ac231-e0d7-a345-f2c8-627c98f08f7d"] }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-47-n-18",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                widthValue: 35,
                                heightValue: 35,
                                widthUnit: "PX",
                                heightUnit: "PX",
                            },
                        },
                        {
                            id: "a-47-n-19",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { selector: ".keyboard", selectorGuids: ["7fc6dd46-8d48-893a-5852-688b76e71976"] },
                                xValue: 250,
                                yValue: -750,
                                zValue: 1,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-47-n-20",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, zValue: -90, xUnit: "DEG", yUnit: "DEG", zUnit: "DEG" },
                        },
                        {
                            id: "a-47-n-21",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                locked: false,
                                target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] },
                                widthValue: 60.5,
                                heightValue: 166,
                                widthUnit: "%",
                                heightUnit: "%",
                            },
                        },
                        {
                            id: "a-47-n-22",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".screen-content", selectorGuids: ["41374aab-708f-3522-0cad-8d5a654b4a12"] }, xValue: 33, yValue: -20, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        { id: "a-47-n-23", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] }, value: 0, unit: "" } },
                        { id: "a-47-n-24", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-desktop", selectorGuids: ["5d9d2346-9f95-c7b8-bf66-f9996ff7bfff"] } } },
                        { id: "a-47-n-25", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] }, value: 0, unit: "" } },
                        { id: "a-47-n-26", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-laptop", selectorGuids: ["8a9cfedf-6583-2e25-8983-a734dc9a5094"] } } },
                        { id: "a-47-n-27", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] }, value: 0, unit: "" } },
                        { id: "a-47-n-28", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet-1", selectorGuids: ["0ac55ee1-3449-19c8-8c2b-5b3868fda8ec"] } } },
                        { id: "a-47-n-29", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] }, value: 0, unit: "" } },
                        { id: "a-47-n-30", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "none", target: { selector: ".img-tablet2", selectorGuids: ["c0f83cff-f4ed-b7b3-2a94-3865c414987a"] } } },
                        { id: "a-47-n-31", actionTypeId: "GENERAL_DISPLAY", config: { delay: 0, easing: "", duration: 0, value: "block", target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] } } },
                        { id: "a-47-n-32", actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "", duration: 500, target: { selector: ".img-phone", selectorGuids: ["6b4f3b56-f65c-253b-4bfb-c56437f53962"] }, value: 1, unit: "" } },
                        {
                            id: "a-47-n-33",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: -18, yValue: 28, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-47-n-34",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d66969714e" }, rValue: 255, gValue: 249, bValue: 248, aValue: 1 },
                        },
                        {
                            id: "a-47-n-35",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: { delay: 0, easing: "", duration: 200, target: { useEventTarget: true, id: "575f7837ad1958ea3cdaddf1|d1a082a2-af4e-e2c9-386f-92d66969714e" }, rValue: 255, gValue: 99, bValue: 72, aValue: 1 },
                        },
                        {
                            id: "a-47-n-36",
                            actionTypeId: "STYLE_TEXT_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 255,
                                gValue: 99,
                                bValue: 72,
                                aValue: 1,
                            },
                        },
                        {
                            id: "a-47-n-37",
                            actionTypeId: "STYLE_BACKGROUND_COLOR",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 200,
                                target: { useEventTarget: "SIBLINGS", selector: ".case-link", selectorGuids: ["0418c64d-0e47-1b8b-a0ed-b1ddc11ee6b3"] },
                                rValue: 0,
                                gValue: 0,
                                bValue: 0,
                                aValue: 0,
                            },
                        },
                        {
                            id: "a-47-n-38",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { selector: ".device-wrap", selectorGuids: ["e4b7b902-2b3f-fd9c-5a01-bb050cf4d4e3"] }, xValue: 1.1, yValue: 1.1, locked: true },
                        },
                    ],
                },
            ],
            createdOn: 1521077462793,
            useFirstGroupAsInitialState: true,
        },
        // "a-50": {
        //     id: "a-50",
        //     title: "Project animated block slide from left",
        //     actionItemGroups: [
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-50-n",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "", duration: 0, target: { selector: ".project-title-block", selectorGuids: ["a11e386c-78c8-4745-aa75-c2b5cde7f9aa"] }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //                 {
        //                     id: "a-50-n-3",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 0,
        //                         easing: "",
        //                         duration: 0,
        //                         target: { useEventTarget: "CHILDREN", selector: ".project-anim-overlay-color", selectorGuids: ["fbb770ba-98b8-7b2b-c708-9d429e7ba8fb"] },
        //                         xValue: 100,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-50-n-2",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "", duration: 500, target: { selector: ".project-title-block", selectorGuids: ["a11e386c-78c8-4745-aa75-c2b5cde7f9aa"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //                 {
        //                     id: "a-50-n-4",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 400,
        //                         easing: "",
        //                         duration: 500,
        //                         target: { useEventTarget: "CHILDREN", selector: ".project-anim-overlay-color", selectorGuids: ["fbb770ba-98b8-7b2b-c708-9d429e7ba8fb"] },
        //                         xValue: 200,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //     ],
        //     createdOn: 1535222327899,
        //     useFirstGroupAsInitialState: true,
        // },
        // "a-48": {
        //     id: "a-48",
        //     title: "Color block - slide from left",
        //     actionItemGroups: [
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-48-n",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: true, id: "5a010913079aa40001b3d9df|e2b6ec92-6089-848e-fcb0-ec7e4c84bf4c" }, xValue: -100, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //                 {
        //                     id: "a-48-n-4",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 0,
        //                         easing: "",
        //                         duration: 500,
        //                         target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-left", selectorGuids: ["50436c10-a2ef-22d6-6baf-23385e108c9f"] },
        //                         xValue: 100,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-48-n-2",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "inQuint", duration: 800, target: { useEventTarget: true, id: "5a010913079aa40001b3d9df|e2b6ec92-6089-848e-fcb0-ec7e4c84bf4c" }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //             ],
        //         },
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-48-n-3",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 300,
        //                         easing: "outSine",
        //                         duration: 500,
        //                         target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-left", selectorGuids: ["50436c10-a2ef-22d6-6baf-23385e108c9f"] },
        //                         xValue: 203,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //     ],
        //     createdOn: 1535162030987,
        //     useFirstGroupAsInitialState: true,
        // },
        // "a-49": {
        //     id: "a-49",
        //     title: "Color block slide from right",
        //     actionItemGroups: [
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-49-n",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: true, id: "5a010913079aa40001b3d9df|2c86c950-4b72-78b3-45ed-fc9607e278fe" }, xValue: 100, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //                 {
        //                     id: "a-49-n-4",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 0,
        //                         easing: "",
        //                         duration: 500,
        //                         target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-right", selectorGuids: ["762f3de2-ae0b-80d0-2687-f118e58317ff"] },
        //                         xValue: -100,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-49-n-2",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "inQuint", duration: 800, target: { useEventTarget: true, id: "5a010913079aa40001b3d9df|2c86c950-4b72-78b3-45ed-fc9607e278fe" }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //             ],
        //         },
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-49-n-3",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 0,
        //                         easing: "",
        //                         duration: 500,
        //                         target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-right", selectorGuids: ["762f3de2-ae0b-80d0-2687-f118e58317ff"] },
        //                         xValue: -203,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //     ],
        //     createdOn: 1535162417613,
        //     useFirstGroupAsInitialState: true,
        // },
        // "a-51": {
        //     id: "a-51",
        //     title: "About project animated block slide from right",
        //     actionItemGroups: [
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-51-n",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "", duration: 0, target: { selector: ".about-project", selectorGuids: ["b87d867d-ad9f-902f-45c1-56a60bcf8e20"] }, xValue: 100, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //                 {
        //                     id: "a-51-n-3",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 0,
        //                         easing: "",
        //                         duration: 0,
        //                         target: { useEventTarget: "CHILDREN", selector: ".project-anim-overlay-white", selectorGuids: ["ca95382a-f6ac-f33d-b76c-e3a7dee75f28"] },
        //                         xValue: -100,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //         {
        //             actionItems: [
        //                 {
        //                     id: "a-51-n-2",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: { delay: 0, easing: "", duration: 500, target: { selector: ".about-project", selectorGuids: ["b87d867d-ad9f-902f-45c1-56a60bcf8e20"] }, xValue: 0, xUnit: "%", yUnit: "PX", zUnit: "PX" },
        //                 },
        //                 {
        //                     id: "a-51-n-4",
        //                     actionTypeId: "TRANSFORM_MOVE",
        //                     config: {
        //                         delay: 400,
        //                         easing: "",
        //                         duration: 500,
        //                         target: { useEventTarget: "CHILDREN", selector: ".project-anim-overlay-white", selectorGuids: ["ca95382a-f6ac-f33d-b76c-e3a7dee75f28"] },
        //                         xValue: -200,
        //                         xUnit: "%",
        //                         yUnit: "PX",
        //                         zUnit: "PX",
        //                     },
        //                 },
        //             ],
        //         },
        //     ],
        //     createdOn: 1535224434771,
        //     useFirstGroupAsInitialState: true,
        // },
        "a-52": {
            id: "a-52",
            title: "Project thumbnail - hover over",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-52-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".project-title-rb", selectorGuids: ["4c5d7551-1ee6-ef3e-3500-a07a5d6ff3d4"] },
                                xValue: -105,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-52-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 0, target: { useEventTarget: true, id: "5b8006310566a1a7828c9f1a|b3719e0f-6636-d192-af33-16fd0403ec24" }, value: 0, unit: "" },
                        },
                        {
                            id: "a-52-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-left.thumb", selectorGuids: ["50436c10-a2ef-22d6-6baf-23385e108c9f", "7c083977-28c7-36bb-f101-2f4595cfd733"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-52-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { useEventTarget: true, id: "5b8006310566a1a7828c9f1a|b3719e0f-6636-d192-af33-16fd0403ec24" }, value: 1, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-52-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".project-title-rb", selectorGuids: ["4c5d7551-1ee6-ef3e-3500-a07a5d6ff3d4"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-52-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 250,
                                target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-left.thumb", selectorGuids: ["50436c10-a2ef-22d6-6baf-23385e108c9f", "7c083977-28c7-36bb-f101-2f4595cfd733"] },
                                xValue: 100,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-52-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 350,
                                target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-left.thumb", selectorGuids: ["50436c10-a2ef-22d6-6baf-23385e108c9f", "7c083977-28c7-36bb-f101-2f4595cfd733"] },
                                xValue: 205,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            createdOn: 1535678036573,
            useFirstGroupAsInitialState: false,
        },
        "a-53": {
            id: "a-53",
            title: "Project thumbnail - hover out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-53-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 300, target: { useEventTarget: true, id: "5b8006310566a1a7828c9f1a|b3719e0f-6636-d192-af33-16fd0403ec24" }, value: 0, unit: "" },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-53-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".project-title-rb", selectorGuids: ["4c5d7551-1ee6-ef3e-3500-a07a5d6ff3d4"] },
                                xValue: -105,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-53-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: { useEventTarget: "CHILDREN", selector: ".animation-overlay-left.thumb", selectorGuids: ["50436c10-a2ef-22d6-6baf-23385e108c9f", "7c083977-28c7-36bb-f101-2f4595cfd733"] },
                                xValue: 0,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            createdOn: 1535678036573,
            useFirstGroupAsInitialState: false,
        },
        "a-54": {
            id: "a-54",
            title: "Project grid load",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-54-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|fbbf76f0-91f8-9ad9-f371-65e3c11153da" }, xValue: -51, yValue: 58, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-54-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|0c12dc71-ba2a-3794-c0d1-8cbe5f41c979" },
                                xValue: -178,
                                yValue: 135,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-54-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|ff14d5bb-f7b6-9c43-4d79-1e4b4e419476" }, xValue: -57, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-54-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|d319046c-60f7-db6b-f3bd-a30fcf864cef" }, yValue: -44, xUnit: "PX", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-54-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|7bac4858-ac65-4242-5154-61b49e7e9314" },
                                xValue: 109,
                                yValue: 196,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-54-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|7bac4858-ac65-4242-5154-61b49e7e9314" }, xValue: 0.5, yValue: 0.5, locked: true },
                        },
                        {
                            id: "a-54-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|b73bd097-57ef-7ee7-ab8d-866b4e11b94e" }, xValue: 67, xUnit: "%", yUnit: "PX", zUnit: "PX" },
                        },
                        {
                            id: "a-54-n-9",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|b73bd097-57ef-7ee7-ab8d-866b4e11b94e" }, xValue: 0.8, yValue: 0.8, locked: true },
                        },
                        {
                            id: "a-54-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|f1397cbd-af0d-bfae-179e-26b1c20d75b1" }, xValue: 41, yValue: 22, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-54-n-10",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|f1397cbd-af0d-bfae-179e-26b1c20d75b1" }, xValue: 0.6, yValue: 0.6, locked: true },
                        },
                        {
                            id: "a-54-n-11",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|2e14f936-5548-db3a-de4b-34b2dfadabf5" }, value: 0, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1544936937573,
            useFirstGroupAsInitialState: true,
        },
        "a-55": {
            id: "a-55",
            title: "Project - scroll in",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-55-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 700, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|2e14f936-5548-db3a-de4b-34b2dfadabf5" }, value: 0.7, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1544938223121,
            useFirstGroupAsInitialState: false,
        },
        "a-56": {
            id: "a-56",
            title: "Project - scroll out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-56-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 700, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|2e14f936-5548-db3a-de4b-34b2dfadabf5" }, value: 0, unit: "" },
                        },
                    ],
                },
            ],
            createdOn: 1544938223121,
            useFirstGroupAsInitialState: false,
        },
        "a-57": {
            id: "a-57",
            title: "Project - scroll -move",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-57-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: { delay: 0, easing: "", duration: 700, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|2e14f936-5548-db3a-de4b-34b2dfadabf5" }, value: 1, unit: "" },
                        },
                        {
                            id: "a-57-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|d319046c-60f7-db6b-f3bd-a30fcf864cef" }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-57-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|ff14d5bb-f7b6-9c43-4d79-1e4b4e419476" }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-57-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|b73bd097-57ef-7ee7-ab8d-866b4e11b94e" }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-57-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|7bac4858-ac65-4242-5154-61b49e7e9314" }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-57-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|f1397cbd-af0d-bfae-179e-26b1c20d75b1" }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-57-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|0c12dc71-ba2a-3794-c0d1-8cbe5f41c979" }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                        {
                            id: "a-57-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "", duration: 500, target: { boundaryMode: true, id: "5c146202e7c04622790e49fa|fbbf76f0-91f8-9ad9-f371-65e3c11153da" }, xValue: 0, yValue: 0, xUnit: "%", yUnit: "%", zUnit: "PX" },
                        },
                    ],
                },
            ],
            createdOn: 1544938223121,
            useFirstGroupAsInitialState: false,
        },
        fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 0 } }] },
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 1 } }] },
            ],
        },
        slideInRight: {
            id: "slideInRight",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 0 } }] },
                {
                    actionItems: [
                        { actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 100, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" } },
                    ],
                },
                {
                    actionItems: [
                        { actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 1 } },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
        },
        slideInLeft: {
            id: "slideInLeft",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                { actionItems: [{ actionTypeId: "STYLE_OPACITY", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 0 } }] },
                {
                    actionItems: [
                        { actionTypeId: "TRANSFORM_MOVE", config: { delay: 0, duration: 0, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: -100, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" } },
                    ],
                },
                {
                    actionItems: [
                        { actionTypeId: "STYLE_OPACITY", config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, value: 1 } },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: { delay: 0, easing: "outQuart", duration: 1000, target: { id: "N/A", appliesTo: "TRIGGER_ELEMENT", useEventTarget: true }, xValue: 0, yValue: 0, xUnit: "PX", yUnit: "PX", zUnit: "PX" },
                        },
                    ],
                },
            ],
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});
