"use strict";
(self.webpackChunkGOptions = self.webpackChunkGOptions || []).push([
    [425], {
        5961: (e, t, a) => {
            a.d(t, {
                default: () => i
            });
            const i = {
                initThemeHelper: function() {
                    this.handleChangeMainImage()
                },
                findProductMediaIdByAlt: function(e) {
                    if (!GPOConfigs ? .product ? .media ? .length) return !1;
                    const t = GPOConfigs ? .product ? .media ? .find((t => t.alt === e));
                    return t ? .id
                },
                handleChangeMainImage: function() {
                    switch (this.themeInfo.theme_store_id) {
                        case 887:
                        case 1891:
                        case 2699:
                        case 1368:
                        case 1356:
                        case 1567:
                        case 1431:
                        case 1500:
                        case 1841:
                        case 1864:
                        case 1434:
                        case 1363:
                        case 1499:
                            document.addEventListener("globoSwapProductImage", (e => {
                                try {
                                    if (console.log(e.detail), e.detail.mediaId || e.detail.value) {
                                        const {
                                            value: t
                                        } = e.detail, a = e.detail.mediaId ? e.detail.mediaId : this.findProductMediaIdByAlt(t);
                                        if (console.log("mediaId", a), a) {
                                            const e = document.querySelector("product-info");
                                            if (e) {
                                                const t = `${e.getAttribute("data-section")}-${a}`,
                                                    i = document.querySelector("media-gallery");
                                                if (i) {
                                                    if (i.elements && i.elements.thumbnails) {
                                                        const e = i.elements.thumbnails.querySelector(`[data-target="${t}"]`);
                                                        e && "function" == typeof i.setActiveThumbnail && i.setActiveThumbnail(e)
                                                    }
                                                    "function" == typeof i.setActiveMedia && i.setActiveMedia(t, !0)
                                                }
                                            }
                                        }
                                    }
                                } catch (e) {
                                    console.error(e)
                                }
                            }))
                    }
                }
            }
        }
    }
]);