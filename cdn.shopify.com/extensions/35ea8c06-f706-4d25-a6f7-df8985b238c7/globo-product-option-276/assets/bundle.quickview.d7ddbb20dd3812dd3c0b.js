"use strict";
(self.webpackChunkGOptions = self.webpackChunkGOptions || []).push([
    [399], {
        6889: (t, e, i) => {
            i.d(e, {
                default: () => l
            });
            var o = i(701),
                c = i(836);
            const l = {
                initQuickView: function() {
                    const t = async (t, e) => {
                        document.querySelectorAll("[gpo-quickview-loaded]").forEach((t => t.removeAttribute("gpo-quickview-loaded")));
                        let i = await (0, c.z7)([t]);
                        if (GPOConfigs.quickViewProduct = !(!i || !i.length) && i[0], GPOConfigs.quickViewProduct) {
                            let t = null,
                                e = 0;
                            t = setInterval((() => {
                                e++, setTimeout((() => {
                                    let t = (0, o._G)(GPOConfigs.theme.collection.quickViewProductForm, "quickview");
                                    t && (t.hasAttribute("gpo-quickview-loaded") ? e = 11 : (GPOConfigs.loadMainScripts(GPOConfigs.quickViewProduct, GPOConfigs.customer, t), t.setAttribute("gpo-quickview-loaded", !0)))
                                }), 500), e > 10 && clearInterval(t)
                            }), 300)
                        }
                    };
                    document.querySelectorAll(GPOConfigs.theme.collection.productLink).forEach((e => {
                        let i = (0, o.Uo)(e, GPOConfigs.theme.collection.item);
                        if (i) {
                            i.querySelectorAll(GPOConfigs.theme.collection.quickViewActivator).forEach((i => {
                                let o = "";
                                if (e.hasAttribute("data-gpo-custom-product-handle")) o = e.getAttribute("data-gpo-custom-product-handle");
                                else {
                                    let t = new URL(e).pathname;
                                    o = t.split("/products/").length > 1 ? t.split("/products/")[1] : "", o = "" != o && o.indexOf("?") > -1 ? o.split("?")[0] : o
                                }
                                "" == o || i.hasAttribute("data-gpo-collection-item-handle") || (i.setAttribute("data-gpo-collection-item-handle", o), i.addEventListener("click", t.bind(this, o)))
                            }))
                        }
                    }))
                }
            }
        }
    }
]);