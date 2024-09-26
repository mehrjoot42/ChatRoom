var app = function() {
    "use strict";
    function t() {}
    function n(t) {
        return t()
    }
    function e() {
        return Object.create(null)
    }
    function o(t) {
        t.forEach(n)
    }
    function r(t) {
        return "function" == typeof t
    }
    function i(t, n) {
        return t != t ? n == n : t !== n || t && "object" == typeof t || "function" == typeof t
    }
    function c(n, e, o) {
        n.$$.on_destroy.push(function(n, ...e) {
            if (null == n)
                return t;
            const o = n.subscribe(...e);
            return o.unsubscribe ? () => o.unsubscribe() : o
        }(e, o))
    }
    let s, u = !1;
    function a(t, n, e, o) {
        for (; t < n; ) {
            const r = t + (n - t >> 1);
            e(r) <= o ? t = r + 1 : n = r
        }
        return t
    }
    function l(t, n) {
        u ? (!function(t) {
            if (t.hydrate_init)
                return;
            t.hydrate_init = !0;
            const n = t.childNodes
              , e = new Int32Array(n.length + 1)
              , o = new Int32Array(n.length);
            e[0] = -1;
            let r = 0;
            for (let t = 0; t < n.length; t++) {
                const i = a(1, r + 1, (t => n[e[t]].claim_order), n[t].claim_order) - 1;
                o[t] = e[i] + 1;
                const c = i + 1;
                e[c] = t,
                r = Math.max(c, r)
            }
            const i = []
              , c = [];
            let s = n.length - 1;
            for (let t = e[r] + 1; 0 != t; t = o[t - 1]) {
                for (i.push(n[t - 1]); s >= t; s--)
                    c.push(n[s]);
                s--
            }
            for (; s >= 0; s--)
                c.push(n[s]);
            i.reverse(),
            c.sort(( (t, n) => t.claim_order - n.claim_order));
            for (let n = 0, e = 0; n < c.length; n++) {
                for (; e < i.length && c[n].claim_order >= i[e].claim_order; )
                    e++;
                const o = e < i.length ? i[e] : null;
                t.insertBefore(c[n], o)
            }
        }(t),
        (void 0 === t.actual_end_child || null !== t.actual_end_child && t.actual_end_child.parentElement !== t) && (t.actual_end_child = t.firstChild),
        n !== t.actual_end_child ? t.insertBefore(n, t.actual_end_child) : t.actual_end_child = n.nextSibling) : n.parentNode !== t && t.appendChild(n)
    }
    function f(t, n, e) {
        u && !e ? l(t, n) : (n.parentNode !== t || e && n.nextSibling !== e) && t.insertBefore(n, e || null)
    }
    function d(t) {
        t.parentNode.removeChild(t)
    }
    function p(t) {
        return document.createElement(t)
    }
    function h(t) {
        return document.createTextNode(t)
    }
    function m() {
        return h(" ")
    }
    function g() {
        return h("")
    }
    function $(t, n, e, o) {
        return t.addEventListener(n, e, o),
        () => t.removeEventListener(n, e, o)
    }
    function b(t, n, e) {
        null == e ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e)
    }
    function v(t, n) {
        n = "" + n,
        t.wholeText !== n && (t.data = n)
    }
    function y(t, n) {
        t.value = null == n ? "" : n
    }
    function w(t, n, e) {
        t.classList[e ? "add" : "remove"](n)
    }
    function _(t) {
        s = t
    }
    function x(t) {
        (function() {
            if (!s)
                throw new Error("Function called outside component initialization");
            return s
        }
        )().$$.on_mount.push(t)
    }
    const k = []
      , S = []
      , T = []
      , j = []
      , E = Promise.resolve();
    let O = !1;
    function N(t) {
        T.push(t)
    }
    let C = !1;
    const A = new Set;
    function M() {
        if (!C) {
            C = !0;
            do {
                for (let t = 0; t < k.length; t += 1) {
                    const n = k[t];
                    _(n),
                    D(n.$$)
                }
                for (_(null),
                k.length = 0; S.length; )
                    S.pop()();
                for (let t = 0; t < T.length; t += 1) {
                    const n = T[t];
                    A.has(n) || (A.add(n),
                    n())
                }
                T.length = 0
            } while (k.length);
            for (; j.length; )
                j.pop()();
            O = !1,
            C = !1,
            A.clear()
        }
    }
    function D(t) {
        if (null !== t.fragment) {
            t.update(),
            o(t.before_update);
            const n = t.dirty;
            t.dirty = [-1],
            t.fragment && t.fragment.p(t.ctx, n),
            t.after_update.forEach(N)
        }
    }
    const I = new Set;
    let L;
    function U() {
        L = {
            r: 0,
            c: [],
            p: L
        }
    }
    function B() {
        L.r || o(L.c),
        L = L.p
    }
    function G(t, n) {
        t && t.i && (I.delete(t),
        t.i(n))
    }
    function F(t, n, e, o) {
        if (t && t.o) {
            if (I.has(t))
                return;
            I.add(t),
            L.c.push(( () => {
                I.delete(t),
                o && (e && t.d(1),
                o())
            }
            )),
            t.o(n)
        }
    }
    function P(t, n) {
        F(t, 1, 1, ( () => {
            n.delete(t.key)
        }
        ))
    }
    function W(t) {
        t && t.c()
    }
    function q(t, e, i, c) {
        const {fragment: s, on_mount: u, on_destroy: a, after_update: l} = t.$$;
        s && s.m(e, i),
        c || N(( () => {
            const e = u.map(n).filter(r);
            a ? a.push(...e) : o(e),
            t.$$.on_mount = []
        }
        )),
        l.forEach(N)
    }
    function z(t, n) {
        const e = t.$$;
        null !== e.fragment && (o(e.on_destroy),
        e.fragment && e.fragment.d(n),
        e.on_destroy = e.fragment = null,
        e.ctx = [])
    }
    function H(t, n) {
        -1 === t.$$.dirty[0] && (k.push(t),
        O || (O = !0,
        E.then(M)),
        t.$$.dirty.fill(0)),
        t.$$.dirty[n / 31 | 0] |= 1 << n % 31
    }
    function V(n, r, i, c, a, l, f=[-1]) {
        const p = s;
        _(n);
        const h = n.$$ = {
            fragment: null,
            ctx: null,
            props: l,
            update: t,
            not_equal: a,
            bound: e(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(p ? p.$$.context : r.context || []),
            callbacks: e(),
            dirty: f,
            skip_bound: !1
        };
        let m = !1;
        if (h.ctx = i ? i(n, r.props || {}, ( (t, e, ...o) => {
            const r = o.length ? o[0] : e;
            return h.ctx && a(h.ctx[t], h.ctx[t] = r) && (!h.skip_bound && h.bound[t] && h.bound[t](r),
            m && H(n, t)),
            e
        }
        )) : [],
        h.update(),
        m = !0,
        o(h.before_update),
        h.fragment = !!c && c(h.ctx),
        r.target) {
            if (r.hydrate) {
                u = !0;
                const t = function(t) {
                    return Array.from(t.childNodes)
                }(r.target);
                h.fragment && h.fragment.l(t),
                t.forEach(d)
            } else
                h.fragment && h.fragment.c();
            r.intro && G(n.$$.fragment),
            q(n, r.target, r.anchor, r.customElement),
            u = !1,
            M()
        }
        _(p)
    }
    class J {
        $destroy() {
            z(this, 1),
            this.$destroy = t
        }
        $on(t, n) {
            const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
            return e.push(n),
            () => {
                const t = e.indexOf(n);
                -1 !== t && e.splice(t, 1)
            }
        }
        $set(t) {
            var n;
            this.$$set && (n = t,
            0 !== Object.keys(n).length) && (this.$$.skip_bound = !0,
            this.$$set(t),
            this.$$.skip_bound = !1)
        }
    }
    const K = [];
    const Q = GUN()
      , R = Q.user().recall({
        sessionStorage: !0
    })
      , X = function(n, e=t) {
        let o;
        const r = [];
        function c(t) {
            if (i(n, t) && (n = t,
            o)) {
                const t = !K.length;
                for (let t = 0; t < r.length; t += 1) {
                    const e = r[t];
                    e[1](),
                    K.push(e, n)
                }
                if (t) {
                    for (let t = 0; t < K.length; t += 2)
                        K[t][0](K[t + 1]);
                    K.length = 0
                }
            }
        }
        return {
            set: c,
            update: function(t) {
                c(t(n))
            },
            subscribe: function(i, s=t) {
                const u = [i, s];
                return r.push(u),
                1 === r.length && (o = e(c) || t),
                i(n),
                () => {
                    const t = r.indexOf(u);
                    -1 !== t && r.splice(t, 1),
                    0 === r.length && (o(),
                    o = null)
                }
            }
        }
    }("");
    function Y(n) {
        let e, r, i, c, s, u, a, l, h, g, v, w, _;
        return {
            c() {
                e = p("label"),
                e.textContent = "Username",
                r = m(),
                i = p("input"),
                c = m(),
                s = p("label"),
                s.textContent = "Password",
                u = m(),
                a = p("input"),
                l = m(),
                h = p("button"),
                h.textContent = "Login",
                g = m(),
                v = p("button"),
                v.textContent = "Sign Up",
                b(e, "for", "username"),
                b(i, "name", "username"),
                b(i, "minlength", "3"),
                b(i, "maxlength", "16"),
                b(s, "for", "password"),
                b(a, "name", "password"),
                b(a, "type", "password"),
                b(h, "class", "login"),
                b(v, "class", "login")
            },
            m(t, o) {
                f(t, e, o),
                f(t, r, o),
                f(t, i, o),
                y(i, n[0]),
                f(t, c, o),
                f(t, s, o),
                f(t, u, o),
                f(t, a, o),
                y(a, n[1]),
                f(t, l, o),
                f(t, h, o),
                f(t, g, o),
                f(t, v, o),
                w || (_ = [$(i, "input", n[4]), $(a, "input", n[5]), $(h, "click", n[2]), $(v, "click", n[3])],
                w = !0)
            },
            p(t, [n]) {
                1 & n && i.value !== t[0] && y(i, t[0]),
                2 & n && a.value !== t[1] && y(a, t[1])
            },
            i: t,
            o: t,
            d(t) {
                t && d(e),
                t && d(r),
                t && d(i),
                t && d(c),
                t && d(s),
                t && d(u),
                t && d(a),
                t && d(l),
                t && d(h),
                t && d(g),
                t && d(v),
                w = !1,
                o(_)
            }
        }
    }
    function Z(t, n, e) {
        let o, r;
        function i() {
            R.auth(o, r, ( ({err: t}) => t && alert(t)))
        }
        return [o, r, i, function() {
            R.create(o, r, ( ({err: t}) => {
                t ? alert(t) : i()
            }
            ))
        }
        , function() {
            o = this.value,
            e(0, o)
        }
        , function() {
            r = this.value,
            e(1, r)
        }
        ]
    }
    R.get("alias").on((t => X.set(t))),
    Q.on("auth", (async t => {
        const n = await R.get("alias");
        X.set(n),
        console.log(`signed in as ${n}`)
    }
    ));
    class tt extends J {
        constructor(t) {
            super(),
            V(this, t, Z, Y, i, {})
        }
    }
    function nt(n) {
        let e, o, r, i, c, s, u, a, g, $ = n[0].what + "";
        return {
            c() {
                e = p("div"),
                o = p("img"),
                i = m(),
                c = p("div"),
                s = p("p"),
                u = h($),
                a = m(),
                g = p("time"),
                g.textContent = `${n[3].toLocaleTimeString()}`,
                o.src !== (r = n[2]) && b(o, "src", r),
                b(o, "alt", "avatar"),
                b(c, "class", "message-text"),
                b(e, "class", `message ${n[1]}`)
            },
            m(t, n) {
                f(t, e, n),
                l(e, o),
                l(e, i),
                l(e, c),
                l(c, s),
                l(s, u),
                l(c, a),
                l(c, g)
            },
            p(t, [n]) {
                1 & n && $ !== ($ = t[0].what + "") && v(u, $)
            },
            i: t,
            o: t,
            d(t) {
                t && d(e)
            }
        }
    }
    function et(t, n, e) {
        let {message: o} = n
          , {sender: r} = n;
        const i = o.who === r ? "sent" : "received"
          , c = `https://avatars.dicebear.com/api/initials/${o.who}.svg`
          , s = new Date(o.when);
        return t.$$set = t => {
            "message"in t && e(0, o = t.message),
            "sender"in t && e(4, r = t.sender)
        }
        ,
        [o, i, c, s, r]
    }
    class ot extends J {
        constructor(t) {
            super(),
            V(this, t, et, nt, i, {
                message: 0,
                sender: 4
            })
        }
    }
    var rt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
      , it = /^\s+|\s+$/g
      , ct = /^[-+]0x[0-9a-f]+$/i
      , st = /^0b[01]+$/i
      , ut = /^0o[0-7]+$/i
      , at = parseInt
      , lt = "object" == typeof rt && rt && rt.Object === Object && rt
      , ft = "object" == typeof self && self && self.Object === Object && self
      , dt = lt || ft || Function("return this")()
      , pt = Object.prototype.toString
      , ht = Math.max
      , mt = Math.min
      , gt = function() {
        return dt.Date.now()
    };
    function $t(t) {
        var n = typeof t;
        return !!t && ("object" == n || "function" == n)
    }
    function bt(t) {
        if ("number" == typeof t)
            return t;
        if (function(t) {
            return "symbol" == typeof t || function(t) {
                return !!t && "object" == typeof t
            }(t) && "[object Symbol]" == pt.call(t)
        }(t))
            return NaN;
        if ($t(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = $t(n) ? n + "" : n
        }
        if ("string" != typeof t)
            return 0 === t ? t : +t;
        t = t.replace(it, "");
        var e = st.test(t);
        return e || ut.test(t) ? at(t.slice(2), e ? 2 : 8) : ct.test(t) ? NaN : +t
    }
    var vt = function(t, n, e) {
        var o, r, i, c, s, u, a = 0, l = !1, f = !1, d = !0;
        if ("function" != typeof t)
            throw new TypeError("Expected a function");
        function p(n) {
            var e = o
              , i = r;
            return o = r = void 0,
            a = n,
            c = t.apply(i, e)
        }
        function h(t) {
            return a = t,
            s = setTimeout(g, n),
            l ? p(t) : c
        }
        function m(t) {
            var e = t - u;
            return void 0 === u || e >= n || e < 0 || f && t - a >= i
        }
        function g() {
            var t = gt();
            if (m(t))
                return $(t);
            s = setTimeout(g, function(t) {
                var e = n - (t - u);
                return f ? mt(e, i - (t - a)) : e
            }(t))
        }
        function $(t) {
            return s = void 0,
            d && o ? p(t) : (o = r = void 0,
            c)
        }
        function b() {
            var t = gt()
              , e = m(t);
            if (o = arguments,
            r = this,
            u = t,
            e) {
                if (void 0 === s)
                    return h(u);
                if (f)
                    return s = setTimeout(g, n),
                    p(u)
            }
            return void 0 === s && (s = setTimeout(g, n)),
            c
        }
        return n = bt(n) || 0,
        $t(e) && (l = !!e.leading,
        i = (f = "maxWait"in e) ? ht(bt(e.maxWait) || 0, n) : i,
        d = "trailing"in e ? !!e.trailing : d),
        b.cancel = function() {
            void 0 !== s && clearTimeout(s),
            a = 0,
            o = u = r = s = void 0
        }
        ,
        b.flush = function() {
            return void 0 === s ? c : $(gt())
        }
        ,
        b
    };
    function yt(t, n, e) {
        const o = t.slice();
        return o[13] = n[e],
        o
    }
    function wt(n) {
        let e, o, r;
        return o = new tt({}),
        {
            c() {
                e = p("main"),
                W(o.$$.fragment)
            },
            m(t, n) {
                f(t, e, n),
                q(o, e, null),
                r = !0
            },
            p: t,
            i(t) {
                r || (G(o.$$.fragment, t),
                r = !0)
            },
            o(t) {
                F(o.$$.fragment, t),
                r = !1
            },
            d(t) {
                t && d(e),
                z(o)
            }
        }
    }
    function _t(t) {
        let n, e, i, c, s, u, a, v, w, _, x, k, S, T, j, E = [], O = new Map, N = t[1];
        const C = t => t[13].when;
        for (let n = 0; n < N.length; n += 1) {
            let e = yt(t, N, n)
              , o = C(e);
            O.set(o, E[n] = xt(o, e))
        }
        let A = !t[3] && kt(t);
        return {
            c() {
                n = p("main");
                for (let t = 0; t < E.length; t += 1)
                    E[t].c();
                e = m(),
                i = p("div"),
                c = m(),
                s = p("form"),
                u = p("input"),
                a = m(),
                v = p("button"),
                w = h("Mehrju"),
                x = m(),
                A && A.c(),
                k = g(),
                b(i, "class", "dummy"),
                b(u, "type", "text"),
                b(u, "placeholder", "Type a message..."),
                b(u, "maxlength", "100"),
                b(v, "type", "submit"),
                v.disabled = _ = !t[0]
            },
            m(o, d) {
                f(o, n, d);
                for (let t = 0; t < E.length; t += 1)
                    E[t].m(n, null);
                var p;
                l(n, e),
                l(n, i),
                t[9](i),
                f(o, c, d),
                f(o, s, d),
                l(s, u),
                y(u, t[0]),
                l(s, a),
                l(s, v),
                l(v, w),
                f(o, x, d),
                A && A.m(o, d),
                f(o, k, d),
                S = !0,
                T || (j = [$(n, "scroll", (function() {
                    r(t[5]) && t[5].apply(this, arguments)
                }
                )), $(u, "input", t[10]), $(s, "submit", (p = t[8],
                function(t) {
                    return t.preventDefault(),
                    p.call(this, t)
                }
                ))],
                T = !0)
            },
            p(o, r) {
                t = o,
                66 & r && (N = t[1],
                U(),
                E = function(t, n, e, o, r, i, c, s, u, a, l, f) {
                    let d = t.length
                      , p = i.length
                      , h = d;
                    const m = {};
                    for (; h--; )
                        m[t[h].key] = h;
                    const g = []
                      , $ = new Map
                      , b = new Map;
                    for (h = p; h--; ) {
                        const t = f(r, i, h)
                          , s = e(t);
                        let u = c.get(s);
                        u ? o && u.p(t, n) : (u = a(s, t),
                        u.c()),
                        $.set(s, g[h] = u),
                        s in m && b.set(s, Math.abs(h - m[s]))
                    }
                    const v = new Set
                      , y = new Set;
                    function w(t) {
                        G(t, 1),
                        t.m(s, l),
                        c.set(t.key, t),
                        l = t.first,
                        p--
                    }
                    for (; d && p; ) {
                        const n = g[p - 1]
                          , e = t[d - 1]
                          , o = n.key
                          , r = e.key;
                        n === e ? (l = n.first,
                        d--,
                        p--) : $.has(r) ? !c.has(o) || v.has(o) ? w(n) : y.has(r) ? d-- : b.get(o) > b.get(r) ? (y.add(o),
                        w(n)) : (v.add(r),
                        d--) : (u(e, c),
                        d--)
                    }
                    for (; d--; ) {
                        const n = t[d];
                        $.has(n.key) || u(n, c)
                    }
                    for (; p; )
                        w(g[p - 1]);
                    return g
                }(E, r, C, 1, t, N, O, n, P, xt, e, yt),
                B()),
                1 & r && u.value !== t[0] && y(u, t[0]),
                (!S || 1 & r && _ !== (_ = !t[0])) && (v.disabled = _),
                t[3] ? A && (A.d(1),
                A = null) : A ? A.p(t, r) : (A = kt(t),
                A.c(),
                A.m(k.parentNode, k))
            },
            i(t) {
                if (!S) {
                    for (let t = 0; t < N.length; t += 1)
                        G(E[t]);
                    S = !0
                }
            },
            o(t) {
                for (let t = 0; t < E.length; t += 1)
                    F(E[t]);
                S = !1
            },
            d(e) {
                e && d(n);
                for (let t = 0; t < E.length; t += 1)
                    E[t].d();
                t[9](null),
                e && d(c),
                e && d(s),
                e && d(x),
                A && A.d(e),
                e && d(k),
                T = !1,
                o(j)
            }
        }
    }
    function xt(t, n) {
        let e, o, r;
        return o = new ot({
            props: {
                message: n[13],
                sender: n[6]
            }
        }),
        {
            key: t,
            first: null,
            c() {
                e = g(),
                W(o.$$.fragment),
                this.first = e
            },
            m(t, n) {
                f(t, e, n),
                q(o, t, n),
                r = !0
            },
            p(t, e) {
                n = t;
                const r = {};
                2 & e && (r.message = n[13]),
                64 & e && (r.sender = n[6]),
                o.$set(r)
            },
            i(t) {
                r || (G(o.$$.fragment, t),
                r = !0)
            },
            o(t) {
                F(o.$$.fragment, t),
                r = !1
            },
            d(t) {
                t && d(e),
                z(o, t)
            }
        }
    }
    function kt(t) {
        let n, e, o, r, i, c = t[4] && St();
        return {
            c() {
                n = p("div"),
                e = p("button"),
                c && c.c(),
                o = h("\r\n\r\n        👇"),
                w(e, "red", t[4]),
                b(n, "class", "scroll-button")
            },
            m(s, u) {
                f(s, n, u),
                l(n, e),
                c && c.m(e, null),
                l(e, o),
                r || (i = $(e, "click", t[7]),
                r = !0)
            },
            p(t, n) {
                t[4] ? c || (c = St(),
                c.c(),
                c.m(e, o)) : c && (c.d(1),
                c = null),
                16 & n && w(e, "red", t[4])
            },
            d(t) {
                t && d(n),
                c && c.d(),
                r = !1,
                i()
            }
        }
    }
    function St(t) {
        let n;
        return {
            c() {
                n = h("پیام 💬 پیام")
            },
            m(t, e) {
                f(t, n, e)
            },
            d(t) {
                t && d(n)
            }
        }
    }
    function Tt(t) {
        let n, e, o, r;
        const i = [_t, wt]
          , c = [];
        function s(t, n) {
            return t[6] ? 0 : 1
        }
        return e = s(t),
        o = c[e] = i[e](t),
        {
            c() {
                n = p("div"),
                o.c(),
                b(n, "class", "container")
            },
            m(t, o) {
                f(t, n, o),
                c[e].m(n, null),
                r = !0
            },
            p(t, [r]) {
                let u = e;
                e = s(t),
                e === u ? c[e].p(t, r) : (U(),
                F(c[u], 1, 1, ( () => {
                    c[u] = null
                }
                )),
                B(),
                o = c[e],
                o ? o.p(t, r) : (o = c[e] = i[e](t),
                o.c()),
                G(o, 1),
                o.m(n, null))
            },
            i(t) {
                r || (G(o),
                r = !0)
            },
            o(t) {
                F(o),
                r = !1
            },
            d(t) {
                t && d(n),
                c[e].d()
            }
        }
    }
    function jt(t, n, e) {
        let o, r, i;
        c(t, X, (t => e(6, r = t)));
        let s, u, a = [], l = !0, f = !1;
        function d() {
            setTimeout(( () => s?.scrollIntoView({
                behavior: "auto"
            })), 50),
            e(4, f = !1)
        }
        return x(( () => {
            var t = {
                ".": {
                    ">": new Date(+new Date - 108e5).toISOString()
                },
                "-": 1
            };
            Q.get("chat").map(t).once((async (t, n) => {
                if (t) {
                    const n = "#foo";
                    var o = {
                        who: await Q.user(t).get("alias"),
                        what: await SEA.decrypt(t.what, n) + "",
                        when: GUN.state.is(t, "what")
                    };
                    o.what && (e(1, a = [...a.slice(-100), o].sort(( (t, n) => t.when - n.when))),
                    l ? d() : e(4, f = !0))
                }
            }
            ))
        }
        )),
        e(5, o = vt((function(t) {
            e(3, l = (t.target.scrollTop || 1 / 0) > u),
            u = t.target.scrollTop
        }
        ), 1e3)),
        [i, a, s, l, f, o, r, d, async function() {
            const t = await SEA.encrypt(i, "#foo")
              , n = R.get("all").set({
                what: t
            })
              , o = (new Date).toISOString();
            Q.get("chat").get(o).put(n),
            e(0, i = ""),
            e(3, l = !0),
            d()
        }
        , function(t) {
            S[t ? "unshift" : "push"](( () => {
                s = t,
                e(2, s)
            }
            ))
        }
        , function() {
            i = this.value,
            e(0, i)
        }
        ]
    }
    class Et extends J {
        constructor(t) {
            super(),
            V(this, t, jt, Tt, i, {})
        }
    }
    function Ot(n) {
        let e;
        return {
            c() {
                e = p("h3"),
                e.textContent = "پیام بده در وب 3"
            },
            m(t, n) {
                f(t, e, n)
            },
            p: t,
            d(t) {
                t && d(e)
            }
        }
    }
    function Nt(t) {
        let n, e, o, r, i, c, s, u, a, g, y, w;
        return {
            c() {
                n = p("div"),
                e = p("span"),
                o = h("Hello "),
                r = p("strong"),
                i = h(t[0]),
                c = m(),
                s = p("img"),
                a = m(),
                g = p("button"),
                g.textContent = "Sign Out",
                s.src !== (u = `https://avatars.dicebear.com/api/initials/${t[0]}.svg`) && b(s, "src", u),
                b(s, "alt", "avatar"),
                b(n, "class", "user-bio"),
                b(g, "class", "signout-button")
            },
            m(u, d) {
                f(u, n, d),
                l(n, e),
                l(e, o),
                l(e, r),
                l(r, i),
                l(n, c),
                l(n, s),
                f(u, a, d),
                f(u, g, d),
                y || (w = $(g, "click", t[1]),
                y = !0)
            },
            p(t, n) {
                1 & n && v(i, t[0]),
                1 & n && s.src !== (u = `https://avatars.dicebear.com/api/initials/${t[0]}.svg`) && b(s, "src", u)
            },
            d(t) {
                t && d(n),
                t && d(a),
                t && d(g),
                y = !1,
                w()
            }
        }
    }
    function Ct(n) {
        let e, o, r;
        function i(t, n) {
            return t[0] ? Nt : Ot
        }
        let c = i(n)
          , s = c(n);
        return {
            c() {
                e = p("header"),
                o = p("h1"),
                o.textContent = "Etenity",
                r = m(),
                s.c()
            },
            m(t, n) {
                f(t, e, n),
                l(e, o),
                l(e, r),
                s.m(e, null)
            },
            p(t, [n]) {
                c === (c = i(t)) && s ? s.p(t, n) : (s.d(1),
                s = c(t),
                s && (s.c(),
                s.m(e, null)))
            },
            i: t,
            o: t,
            d(t) {
                t && d(e),
                s.d()
            }
        }
    }
    function At(t, n, e) {
        let o;
        return c(t, X, (t => e(0, o = t))),
        [o, function() {
            R.leave(),
            X.set("")
        }
        ]
    }
    class Mt extends J {
        constructor(t) {
            super(),
            V(this, t, At, Ct, i, {})
        }
    }
    function Dt(n) {
        let e, o, r, i, c;
        return o = new Mt({}),
        i = new Et({}),
        {
            c() {
                e = p("div"),
                W(o.$$.fragment),
                r = m(),
                W(i.$$.fragment),
                b(e, "class", "app")
            },
            m(t, n) {
                f(t, e, n),
                q(o, e, null),
                l(e, r),
                q(i, e, null),
                c = !0
            },
            p: t,
            i(t) {
                c || (G(o.$$.fragment, t),
                G(i.$$.fragment, t),
                c = !0)
            },
            o(t) {
                F(o.$$.fragment, t),
                F(i.$$.fragment, t),
                c = !1
            },
            d(t) {
                t && d(e),
                z(o),
                z(i)
            }
        }
    }
    return new class extends J {
        constructor(t) {
            super(),
            V(this, t, null, Dt, i, {})
        }
    }
    ({
        target: document.body
    })
}();
//# sourceMappingURL=bundle.js.map