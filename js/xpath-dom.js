! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.xpath = t() : e.xpath = t()
}(this, function () {
    return function (e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var r = o[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "", t(0)
    }([function (e, t) {
        t.find = function (e, t) {
            var o = document.evaluate(e, t || document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            return o.snapshotItem(0)
        }, t.findAll = function (e, t) {
            for (var o = document.evaluate(e, t || document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), n = [], r = 0; r < o.snapshotLength; r++) n.push(o.snapshotItem(r));
            return n
        }, t.getUniqueXPath = function (e, o) {
            return t.getXPath(e, o, !0)
        }, t.getXPath = function (e, t, o) {
            t = t || document.body;
            for (var n = 0, r = ""; e !== t;) {
                if (n++ > 1e3) throw new Error("Got to maximum traversal level without reaching the root node.");
                for (var u = 1, a = e.parentNode.children, d = 0; d < a.length && a[d] !== e; d++) a[d].nodeName === e.nodeName && u++;
                var l;
                l = o ? "[" + u + "]" : u > 1 ? "[" + u + "]" : "", r = e.nodeName + l + "/" + r, e = e.parentNode
            }
            return r = r.slice(0, -1), r.toLowerCase()
        }
    }])
});