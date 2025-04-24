(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.CPIGHvSH.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DdTCUGyX.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-OnePage.C20plnGT.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.Bks9A9Q2.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.CQVzKK4a.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.CnyCDWSF.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/LocalizationExtensionField.BO9Isuu-.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShopPayOptInDisclaimer.CvQS-mi3.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ShipmentBreakdown.DZomG38A.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/MerchandiseModal.Cc1ADTc0.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/StackedMerchandisePreview.BAkH2Kqq.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/PayButtonSection.B4zqPA5r.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/component-ShopPayVerificationSwitch.Bm9NTuN3.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useSubscribeMessenger.ebWktJEG.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/index.DDkQ40qu.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.CXL-GAUL.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/OnePage.PMX4OSBO.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DmqjTkNB.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.OxMVm7u-.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/StackedMerchandisePreview.CKAakmU8.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ShopPayVerificationSwitch.DW7NMDXG.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = [];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();