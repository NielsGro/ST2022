// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fJc2q":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2e2baf2cc1107ca3";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5w5Zp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _editorSdk = require("@chili-publish/editor-sdk");
var _editorSdkDefault = parcelHelpers.interopDefault(_editorSdk);
//Initialize SDK
const SDK = new (0, _editorSdkDefault.default)({
    editorId: "chili-editor"
});
//Initialise Editor
SDK.loadEditor();

},{"@chili-publish/editor-sdk":"b6D3x","@parcel/transformer-js/src/esmodule-helpers.js":"iA36X"}],"b6D3x":[function(require,module,exports) {
/*! For license information please see main.js.LICENSE.txt */ !function(root, factory) {
    module.exports = factory();
}(this, function() {
    return (()=>{
        var __webpack_modules__ = {
            977: function(module1, exports) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                !function(root) {
                    "use strict";
                    var cosh = function(x) {
                        return .5 * (Math.exp(x) + Math.exp(-x));
                    }, sinh = function(x) {
                        return .5 * (Math.exp(x) - Math.exp(-x));
                    }, parser_exit = function() {
                        throw SyntaxError("Invalid Param");
                    };
                    function logHypot(a, b) {
                        var _a = Math.abs(a), _b = Math.abs(b);
                        return 0 === a ? Math.log(_b) : 0 === b ? Math.log(_a) : _a < 3e3 && _b < 3e3 ? .5 * Math.log(a * a + b * b) : Math.log(a / Math.cos(Math.atan2(b, a)));
                    }
                    function Complex(a, b) {
                        if (!(this instanceof Complex)) return new Complex(a, b);
                        var z = function(a, b) {
                            var z = {
                                re: 0,
                                im: 0
                            };
                            if (null == a) z.re = z.im = 0;
                            else if (void 0 !== b) z.re = a, z.im = b;
                            else switch(typeof a){
                                case "object":
                                    if ("im" in a && "re" in a) z.re = a.re, z.im = a.im;
                                    else if ("abs" in a && "arg" in a) {
                                        if (!Number.isFinite(a.abs) && Number.isFinite(a.arg)) return Complex.INFINITY;
                                        z.re = a.abs * Math.cos(a.arg), z.im = a.abs * Math.sin(a.arg);
                                    } else if ("r" in a && "phi" in a) {
                                        if (!Number.isFinite(a.r) && Number.isFinite(a.phi)) return Complex.INFINITY;
                                        z.re = a.r * Math.cos(a.phi), z.im = a.r * Math.sin(a.phi);
                                    } else 2 === a.length ? (z.re = a[0], z.im = a[1]) : parser_exit();
                                    break;
                                case "string":
                                    z.im = z.re = 0;
                                    var tokens = a.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g), plus = 1, minus = 0;
                                    null === tokens && parser_exit();
                                    for(var i = 0; i < tokens.length; i++){
                                        var c = tokens[i];
                                        " " === c || "	" === c || "\n" === c || ("+" === c ? plus++ : "-" === c ? minus++ : "i" === c || "I" === c ? (plus + minus === 0 && parser_exit(), " " === tokens[i + 1] || isNaN(tokens[i + 1]) ? z.im += parseFloat((minus % 2 ? "-" : "") + "1") : (z.im += parseFloat((minus % 2 ? "-" : "") + tokens[i + 1]), i++), plus = minus = 0) : ((plus + minus === 0 || isNaN(c)) && parser_exit(), "i" === tokens[i + 1] || "I" === tokens[i + 1] ? (z.im += parseFloat((minus % 2 ? "-" : "") + c), i++) : z.re += parseFloat((minus % 2 ? "-" : "") + c), plus = minus = 0));
                                    }
                                    plus + minus > 0 && parser_exit();
                                    break;
                                case "number":
                                    z.im = 0, z.re = a;
                                    break;
                                default:
                                    parser_exit();
                            }
                            return isNaN(z.re) || isNaN(z.im), z;
                        }(a, b);
                        this.re = z.re, this.im = z.im;
                    }
                    Complex.prototype = {
                        re: 0,
                        im: 0,
                        sign: function() {
                            var abs = this.abs();
                            return new Complex(this.re / abs, this.im / abs);
                        },
                        add: function(a, b) {
                            var z = new Complex(a, b);
                            return this.isInfinite() && z.isInfinite() ? Complex.NAN : this.isInfinite() || z.isInfinite() ? Complex.INFINITY : new Complex(this.re + z.re, this.im + z.im);
                        },
                        sub: function(a, b) {
                            var z = new Complex(a, b);
                            return this.isInfinite() && z.isInfinite() ? Complex.NAN : this.isInfinite() || z.isInfinite() ? Complex.INFINITY : new Complex(this.re - z.re, this.im - z.im);
                        },
                        mul: function(a, b) {
                            var z = new Complex(a, b);
                            return this.isInfinite() && z.isZero() || this.isZero() && z.isInfinite() ? Complex.NAN : this.isInfinite() || z.isInfinite() ? Complex.INFINITY : 0 === z.im && 0 === this.im ? new Complex(this.re * z.re, 0) : new Complex(this.re * z.re - this.im * z.im, this.re * z.im + this.im * z.re);
                        },
                        div: function(a, b) {
                            var z = new Complex(a, b);
                            if (this.isZero() && z.isZero() || this.isInfinite() && z.isInfinite()) return Complex.NAN;
                            if (this.isInfinite() || z.isZero()) return Complex.INFINITY;
                            if (this.isZero() || z.isInfinite()) return Complex.ZERO;
                            a = this.re, b = this.im;
                            var t, x, c = z.re, d = z.im;
                            return 0 === d ? new Complex(a / c, b / c) : Math.abs(c) < Math.abs(d) ? new Complex((a * (x = c / d) + b) / (t = c * x + d), (b * x - a) / t) : new Complex((a + b * (x = d / c)) / (t = d * x + c), (b - a * x) / t);
                        },
                        pow: function(a, b) {
                            var z = new Complex(a, b);
                            if (a = this.re, b = this.im, z.isZero()) return Complex.ONE;
                            if (0 === z.im) {
                                if (0 === b && a > 0) return new Complex(Math.pow(a, z.re), 0);
                                if (0 === a) switch((z.re % 4 + 4) % 4){
                                    case 0:
                                        return new Complex(Math.pow(b, z.re), 0);
                                    case 1:
                                        return new Complex(0, Math.pow(b, z.re));
                                    case 2:
                                        return new Complex(-Math.pow(b, z.re), 0);
                                    case 3:
                                        return new Complex(0, -Math.pow(b, z.re));
                                }
                            }
                            if (0 === a && 0 === b && z.re > 0 && z.im >= 0) return Complex.ZERO;
                            var arg = Math.atan2(b, a), loh = logHypot(a, b);
                            return a = Math.exp(z.re * loh - z.im * arg), b = z.im * loh + z.re * arg, new Complex(a * Math.cos(b), a * Math.sin(b));
                        },
                        sqrt: function() {
                            var re, im, a = this.re, b = this.im, r = this.abs();
                            if (a >= 0) {
                                if (0 === b) return new Complex(Math.sqrt(a), 0);
                                re = .5 * Math.sqrt(2 * (r + a));
                            } else re = Math.abs(b) / Math.sqrt(2 * (r - a));
                            return im = a <= 0 ? .5 * Math.sqrt(2 * (r - a)) : Math.abs(b) / Math.sqrt(2 * (r + a)), new Complex(re, b < 0 ? -im : im);
                        },
                        exp: function() {
                            var tmp = Math.exp(this.re);
                            return this.im, new Complex(tmp * Math.cos(this.im), tmp * Math.sin(this.im));
                        },
                        expm1: function() {
                            var a = this.re, b = this.im;
                            return new Complex(Math.expm1(a) * Math.cos(b) + function(x) {
                                var b = Math.PI / 4;
                                if (-b > x || x > b) return Math.cos(x) - 1;
                                var xx = x * x;
                                return xx * (xx * (xx * (xx * (xx * (xx * (xx * (xx / 20922789888e3 - 1 / 87178291200) + 1 / 479001600) - 1 / 3628800) + 1 / 40320) - 1 / 720) + 1 / 24) - .5);
                            }(b), Math.exp(a) * Math.sin(b));
                        },
                        log: function() {
                            var a = this.re, b = this.im;
                            return new Complex(logHypot(a, b), Math.atan2(b, a));
                        },
                        abs: function() {
                            var x, y, a, b;
                            return x = this.re, y = this.im, a = Math.abs(x), b = Math.abs(y), a < 3e3 && b < 3e3 ? Math.sqrt(a * a + b * b) : (a < b ? (a = b, b = x / y) : b = y / x, a * Math.sqrt(1 + b * b));
                        },
                        arg: function() {
                            return Math.atan2(this.im, this.re);
                        },
                        sin: function() {
                            var a = this.re, b = this.im;
                            return new Complex(Math.sin(a) * cosh(b), Math.cos(a) * sinh(b));
                        },
                        cos: function() {
                            var a = this.re, b = this.im;
                            return new Complex(Math.cos(a) * cosh(b), -Math.sin(a) * sinh(b));
                        },
                        tan: function() {
                            var a = 2 * this.re, b = 2 * this.im, d = Math.cos(a) + cosh(b);
                            return new Complex(Math.sin(a) / d, sinh(b) / d);
                        },
                        cot: function() {
                            var a = 2 * this.re, b = 2 * this.im, d = Math.cos(a) - cosh(b);
                            return new Complex(-Math.sin(a) / d, sinh(b) / d);
                        },
                        sec: function() {
                            var a = this.re, b = this.im, d = .5 * cosh(2 * b) + .5 * Math.cos(2 * a);
                            return new Complex(Math.cos(a) * cosh(b) / d, Math.sin(a) * sinh(b) / d);
                        },
                        csc: function() {
                            var a = this.re, b = this.im, d = .5 * cosh(2 * b) - .5 * Math.cos(2 * a);
                            return new Complex(Math.sin(a) * cosh(b) / d, -Math.cos(a) * sinh(b) / d);
                        },
                        asin: function() {
                            var a = this.re, b = this.im, t1 = new Complex(b * b - a * a + 1, -2 * a * b).sqrt(), t2 = new Complex(t1.re - b, t1.im + a).log();
                            return new Complex(t2.im, -t2.re);
                        },
                        acos: function() {
                            var a = this.re, b = this.im, t1 = new Complex(b * b - a * a + 1, -2 * a * b).sqrt(), t2 = new Complex(t1.re - b, t1.im + a).log();
                            return new Complex(Math.PI / 2 - t2.im, t2.re);
                        },
                        atan: function() {
                            var a = this.re, b = this.im;
                            if (0 === a) {
                                if (1 === b) return new Complex(0, 1 / 0);
                                if (-1 === b) return new Complex(0, -1 / 0);
                            }
                            var d = a * a + (1 - b) * (1 - b), t1 = new Complex((1 - b * b - a * a) / d, -2 * a / d).log();
                            return new Complex(-0.5 * t1.im, .5 * t1.re);
                        },
                        acot: function() {
                            var a = this.re, b = this.im;
                            if (0 === b) return new Complex(Math.atan2(1, a), 0);
                            var d = a * a + b * b;
                            return 0 !== d ? new Complex(a / d, -b / d).atan() : new Complex(0 !== a ? a / 0 : 0, 0 !== b ? -b / 0 : 0).atan();
                        },
                        asec: function() {
                            var a = this.re, b = this.im;
                            if (0 === a && 0 === b) return new Complex(0, 1 / 0);
                            var d = a * a + b * b;
                            return 0 !== d ? new Complex(a / d, -b / d).acos() : new Complex(0 !== a ? a / 0 : 0, 0 !== b ? -b / 0 : 0).acos();
                        },
                        acsc: function() {
                            var a = this.re, b = this.im;
                            if (0 === a && 0 === b) return new Complex(Math.PI / 2, 1 / 0);
                            var d = a * a + b * b;
                            return 0 !== d ? new Complex(a / d, -b / d).asin() : new Complex(0 !== a ? a / 0 : 0, 0 !== b ? -b / 0 : 0).asin();
                        },
                        sinh: function() {
                            var a = this.re, b = this.im;
                            return new Complex(sinh(a) * Math.cos(b), cosh(a) * Math.sin(b));
                        },
                        cosh: function() {
                            var a = this.re, b = this.im;
                            return new Complex(cosh(a) * Math.cos(b), sinh(a) * Math.sin(b));
                        },
                        tanh: function() {
                            var a = 2 * this.re, b = 2 * this.im, d = cosh(a) + Math.cos(b);
                            return new Complex(sinh(a) / d, Math.sin(b) / d);
                        },
                        coth: function() {
                            var a = 2 * this.re, b = 2 * this.im, d = cosh(a) - Math.cos(b);
                            return new Complex(sinh(a) / d, -Math.sin(b) / d);
                        },
                        csch: function() {
                            var a = this.re, b = this.im, d = Math.cos(2 * b) - cosh(2 * a);
                            return new Complex(-2 * sinh(a) * Math.cos(b) / d, 2 * cosh(a) * Math.sin(b) / d);
                        },
                        sech: function() {
                            var a = this.re, b = this.im, d = Math.cos(2 * b) + cosh(2 * a);
                            return new Complex(2 * cosh(a) * Math.cos(b) / d, -2 * sinh(a) * Math.sin(b) / d);
                        },
                        asinh: function() {
                            var tmp = this.im;
                            this.im = -this.re, this.re = tmp;
                            var res = this.asin();
                            return this.re = -this.im, this.im = tmp, tmp = res.re, res.re = -res.im, res.im = tmp, res;
                        },
                        acosh: function() {
                            var res = this.acos();
                            if (res.im <= 0) {
                                var tmp = res.re;
                                res.re = -res.im, res.im = tmp;
                            } else {
                                tmp = res.im;
                                res.im = -res.re, res.re = tmp;
                            }
                            return res;
                        },
                        atanh: function() {
                            var a = this.re, b = this.im, noIM = a > 1 && 0 === b, oneMinus = 1 - a, onePlus = 1 + a, d = oneMinus * oneMinus + b * b, x = 0 !== d ? new Complex((onePlus * oneMinus - b * b) / d, (b * oneMinus + onePlus * b) / d) : new Complex(-1 !== a ? a / 0 : 0, 0 !== b ? b / 0 : 0), temp = x.re;
                            return x.re = logHypot(x.re, x.im) / 2, x.im = Math.atan2(x.im, temp) / 2, noIM && (x.im = -x.im), x;
                        },
                        acoth: function() {
                            var a = this.re, b = this.im;
                            if (0 === a && 0 === b) return new Complex(0, Math.PI / 2);
                            var d = a * a + b * b;
                            return 0 !== d ? new Complex(a / d, -b / d).atanh() : new Complex(0 !== a ? a / 0 : 0, 0 !== b ? -b / 0 : 0).atanh();
                        },
                        acsch: function() {
                            var a = this.re, b = this.im;
                            if (0 === b) return new Complex(0 !== a ? Math.log(a + Math.sqrt(a * a + 1)) : 1 / 0, 0);
                            var d = a * a + b * b;
                            return 0 !== d ? new Complex(a / d, -b / d).asinh() : new Complex(0 !== a ? a / 0 : 0, 0 !== b ? -b / 0 : 0).asinh();
                        },
                        asech: function() {
                            var a = this.re, b = this.im;
                            if (this.isZero()) return Complex.INFINITY;
                            var d = a * a + b * b;
                            return 0 !== d ? new Complex(a / d, -b / d).acosh() : new Complex(0 !== a ? a / 0 : 0, 0 !== b ? -b / 0 : 0).acosh();
                        },
                        inverse: function() {
                            if (this.isZero()) return Complex.INFINITY;
                            if (this.isInfinite()) return Complex.ZERO;
                            var a = this.re, b = this.im, d = a * a + b * b;
                            return new Complex(a / d, -b / d);
                        },
                        conjugate: function() {
                            return new Complex(this.re, -this.im);
                        },
                        neg: function() {
                            return new Complex(-this.re, -this.im);
                        },
                        ceil: function(places) {
                            return places = Math.pow(10, places || 0), new Complex(Math.ceil(this.re * places) / places, Math.ceil(this.im * places) / places);
                        },
                        floor: function(places) {
                            return places = Math.pow(10, places || 0), new Complex(Math.floor(this.re * places) / places, Math.floor(this.im * places) / places);
                        },
                        round: function(places) {
                            return places = Math.pow(10, places || 0), new Complex(Math.round(this.re * places) / places, Math.round(this.im * places) / places);
                        },
                        equals: function(a, b) {
                            var z = new Complex(a, b);
                            return Math.abs(z.re - this.re) <= Complex.EPSILON && Math.abs(z.im - this.im) <= Complex.EPSILON;
                        },
                        clone: function() {
                            return new Complex(this.re, this.im);
                        },
                        toString: function() {
                            var a = this.re, b = this.im, ret = "";
                            return this.isNaN() ? "NaN" : this.isInfinite() ? "Infinity" : (Math.abs(a) < Complex.EPSILON && (a = 0), Math.abs(b) < Complex.EPSILON && (b = 0), 0 === b ? ret + a : (0 !== a ? (ret += a, ret += " ", b < 0 ? (b = -b, ret += "-") : ret += "+", ret += " ") : b < 0 && (b = -b, ret += "-"), 1 !== b && (ret += b), ret + "i"));
                        },
                        toVector: function() {
                            return [
                                this.re,
                                this.im
                            ];
                        },
                        valueOf: function() {
                            return 0 === this.im ? this.re : null;
                        },
                        isNaN: function() {
                            return isNaN(this.re) || isNaN(this.im);
                        },
                        isZero: function() {
                            return 0 === this.im && 0 === this.re;
                        },
                        isFinite: function() {
                            return isFinite(this.re) && isFinite(this.im);
                        },
                        isInfinite: function() {
                            return !(this.isNaN() || this.isFinite());
                        }
                    }, Complex.ZERO = new Complex(0, 0), Complex.ONE = new Complex(1, 0), Complex.I = new Complex(0, 1), Complex.PI = new Complex(Math.PI, 0), Complex.E = new Complex(Math.E, 0), Complex.INFINITY = new Complex(1 / 0, 1 / 0), Complex.NAN = new Complex(NaN, NaN), Complex.EPSILON = 1e-15, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                        return Complex;
                    }).apply(exports, [])) || (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                }();
            },
            776: function(module1, exports, __webpack_require__) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                !function(globalScope) {
                    "use strict";
                    var Decimal, inexact, quadrant, EXP_LIMIT = 9e15, NUMERALS = "0123456789abcdef", LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", DEFAULTS = {
                        precision: 20,
                        rounding: 4,
                        modulo: 1,
                        toExpNeg: -7,
                        toExpPos: 21,
                        minE: -EXP_LIMIT,
                        maxE: EXP_LIMIT,
                        crypto: !1
                    }, external = !0, invalidArgument = "[DecimalError] Invalid argument: ", tag = "[object Decimal]", mathfloor = Math.floor, mathpow = Math.pow, isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, BASE = 1e7, LN10_PRECISION = LN10.length - 1, PI_PRECISION = PI.length - 1, P = {
                        toStringTag: tag
                    };
                    function digitsToString(d) {
                        var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
                        if (indexOfLastWord > 0) {
                            for(str += w, i = 1; i < indexOfLastWord; i++)(k = 7 - (ws = d[i] + "").length) && (str += getZeroString(k)), str += ws;
                            (k = 7 - (ws = (w = d[i]) + "").length) && (str += getZeroString(k));
                        } else if (0 === w) return "0";
                        for(; w % 10 == 0;)w /= 10;
                        return str + w;
                    }
                    function checkInt32(i, min, max) {
                        if (i !== ~~i || i < min || i > max) throw Error(invalidArgument + i);
                    }
                    function checkRoundingDigits(d, i, rm, repeating) {
                        var di, k, r, rd;
                        for(k = d[0]; k >= 10; k /= 10)--i;
                        return --i < 0 ? (i += 7, di = 0) : (di = Math.ceil((i + 1) / 7), i %= 7), k = mathpow(10, 7 - i), rd = d[di] % k | 0, null == repeating ? i < 3 ? (0 == i ? rd = rd / 100 | 0 : 1 == i && (rd = rd / 10 | 0), r = rm < 4 && 99999 == rd || rm > 3 && 49999 == rd || 5e4 == rd || 0 == rd) : r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || 0 == rd) && 0 == (d[di + 1] / k / 100 | 0) : i < 4 ? (0 == i ? rd = rd / 1e3 | 0 : 1 == i ? rd = rd / 100 | 0 : 2 == i && (rd = rd / 10 | 0), r = (repeating || rm < 4) && 9999 == rd || !repeating && rm > 3 && 4999 == rd) : r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1, r;
                    }
                    function convertBase(str, baseIn, baseOut) {
                        for(var j, arrL, arr = [
                            0
                        ], i = 0, strL = str.length; i < strL;){
                            for(arrL = arr.length; arrL--;)arr[arrL] *= baseIn;
                            for(arr[0] += NUMERALS.indexOf(str.charAt(i++)), j = 0; j < arr.length; j++)arr[j] > baseOut - 1 && (void 0 === arr[j + 1] && (arr[j + 1] = 0), arr[j + 1] += arr[j] / baseOut | 0, arr[j] %= baseOut);
                        }
                        return arr.reverse();
                    }
                    P.absoluteValue = P.abs = function() {
                        var x = new this.constructor(this);
                        return x.s < 0 && (x.s = 1), finalise(x);
                    }, P.ceil = function() {
                        return finalise(new this.constructor(this), this.e + 1, 2);
                    }, P.clampedTo = P.clamp = function(min, max) {
                        var x = this, Ctor = x.constructor;
                        if (min = new Ctor(min), max = new Ctor(max), !min.s || !max.s) return new Ctor(NaN);
                        if (min.gt(max)) throw Error(invalidArgument + max);
                        return x.cmp(min) < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
                    }, P.comparedTo = P.cmp = function(y) {
                        var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
                        if (!xd || !yd) return xs && ys ? xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1 : NaN;
                        if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
                        if (xs !== ys) return xs;
                        if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
                        for(i = 0, j = (xdL = xd.length) < (ydL = yd.length) ? xdL : ydL; i < j; ++i)if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
                        return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
                    }, P.cosine = P.cos = function() {
                        var pr, rm, x = this, Ctor = x.constructor;
                        return x.d ? x.d[0] ? (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 7, Ctor.rounding = 1, x = function(Ctor, x) {
                            var k, len, y;
                            if (x.isZero()) return x;
                            (len = x.d.length) < 32 ? y = (1 / tinyPow(4, k = Math.ceil(len / 3))).toString() : (k = 16, y = "2.3283064365386962890625e-10");
                            Ctor.precision += k, x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
                            for(var i = k; i--;){
                                var cos2x = x.times(x);
                                x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
                            }
                            return Ctor.precision -= k, x;
                        }(Ctor, toLessThanHalfPi(Ctor, x)), Ctor.precision = pr, Ctor.rounding = rm, finalise(2 == quadrant || 3 == quadrant ? x.neg() : x, pr, rm, !0)) : new Ctor(1) : new Ctor(NaN);
                    }, P.cubeRoot = P.cbrt = function() {
                        var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
                        if (!x.isFinite() || x.isZero()) return new Ctor(x);
                        for(external = !1, (s = x.s * mathpow(x.s * x, 1 / 3)) && Math.abs(s) != 1 / 0 ? r = new Ctor(s.toString()) : (n = digitsToString(x.d), (s = ((e = x.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"), s = mathpow(n, 1 / 3), e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (r = new Ctor(n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e)).s = x.s), sd = (e = Ctor.precision) + 3;;)if (t3plusx = (t3 = (t = r).times(t).times(t)).plus(x), r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1), digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
                            if ("9999" != (n = n.slice(sd - 3, sd + 1)) && (rep || "4999" != n)) {
                                +n && (+n.slice(1) || "5" != n.charAt(0)) || (finalise(r, e + 1, 1), m = !r.times(r).times(r).eq(x));
                                break;
                            }
                            if (!rep && (finalise(t, e + 1, 0), t.times(t).times(t).eq(x))) {
                                r = t;
                                break;
                            }
                            sd += 4, rep = 1;
                        }
                        return external = !0, finalise(r, e, Ctor.rounding, m);
                    }, P.decimalPlaces = P.dp = function() {
                        var w, d = this.d, n = NaN;
                        if (d) {
                            if (n = 7 * ((w = d.length - 1) - mathfloor(this.e / 7)), w = d[w]) for(; w % 10 == 0; w /= 10)n--;
                            n < 0 && (n = 0);
                        }
                        return n;
                    }, P.dividedBy = P.div = function(y) {
                        return divide(this, new this.constructor(y));
                    }, P.dividedToIntegerBy = P.divToInt = function(y) {
                        var Ctor = this.constructor;
                        return finalise(divide(this, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
                    }, P.equals = P.eq = function(y) {
                        return 0 === this.cmp(y);
                    }, P.floor = function() {
                        return finalise(new this.constructor(this), this.e + 1, 3);
                    }, P.greaterThan = P.gt = function(y) {
                        return this.cmp(y) > 0;
                    }, P.greaterThanOrEqualTo = P.gte = function(y) {
                        var k = this.cmp(y);
                        return 1 == k || 0 === k;
                    }, P.hyperbolicCosine = P.cosh = function() {
                        var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
                        if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
                        if (x.isZero()) return one;
                        pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 4, Ctor.rounding = 1, (len = x.d.length) < 32 ? n = (1 / tinyPow(4, k = Math.ceil(len / 3))).toString() : (k = 16, n = "2.3283064365386962890625e-10"), x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), !0);
                        for(var cosh2_x, i = k, d8 = new Ctor(8); i--;)cosh2_x = x.times(x), x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
                        return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, !0);
                    }, P.hyperbolicSine = P.sinh = function() {
                        var k, pr, rm, len, x = this, Ctor = x.constructor;
                        if (!x.isFinite() || x.isZero()) return new Ctor(x);
                        if (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 4, Ctor.rounding = 1, (len = x.d.length) < 3) x = taylorSeries(Ctor, 2, x, x, !0);
                        else {
                            k = (k = 1.4 * Math.sqrt(len)) > 16 ? 16 : 0 | k, x = taylorSeries(Ctor, 2, x = x.times(1 / tinyPow(5, k)), x, !0);
                            for(var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20); k--;)sinh2_x = x.times(x), x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
                        }
                        return Ctor.precision = pr, Ctor.rounding = rm, finalise(x, pr, rm, !0);
                    }, P.hyperbolicTangent = P.tanh = function() {
                        var pr, rm, x = this, Ctor = x.constructor;
                        return x.isFinite() ? x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + 7, Ctor.rounding = 1, divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm)) : new Ctor(x.s);
                    }, P.inverseCosine = P.acos = function() {
                        var halfPi, x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
                        return -1 !== k ? 0 === k ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN) : x.isZero() ? getPi(Ctor, pr + 4, rm).times(.5) : (Ctor.precision = pr + 6, Ctor.rounding = 1, x = x.asin(), halfPi = getPi(Ctor, pr + 4, rm).times(.5), Ctor.precision = pr, Ctor.rounding = rm, halfPi.minus(x));
                    }, P.inverseHyperbolicCosine = P.acosh = function() {
                        var pr, rm, x = this, Ctor = x.constructor;
                        return x.lte(1) ? new Ctor(x.eq(1) ? 0 : NaN) : x.isFinite() ? (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4, Ctor.rounding = 1, external = !1, x = x.times(x).minus(1).sqrt().plus(x), external = !0, Ctor.precision = pr, Ctor.rounding = rm, x.ln()) : new Ctor(x);
                    }, P.inverseHyperbolicSine = P.asinh = function() {
                        var pr, rm, x = this, Ctor = x.constructor;
                        return !x.isFinite() || x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6, Ctor.rounding = 1, external = !1, x = x.times(x).plus(1).sqrt().plus(x), external = !0, Ctor.precision = pr, Ctor.rounding = rm, x.ln());
                    }, P.inverseHyperbolicTangent = P.atanh = function() {
                        var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
                        return x.isFinite() ? x.e >= 0 ? new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN) : (pr = Ctor.precision, rm = Ctor.rounding, xsd = x.sd(), Math.max(xsd, pr) < 2 * -x.e - 1 ? finalise(new Ctor(x), pr, rm, !0) : (Ctor.precision = wpr = xsd - x.e, x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1), Ctor.precision = pr + 4, Ctor.rounding = 1, x = x.ln(), Ctor.precision = pr, Ctor.rounding = rm, x.times(.5))) : new Ctor(NaN);
                    }, P.inverseSine = P.asin = function() {
                        var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
                        return x.isZero() ? new Ctor(x) : (k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding, -1 !== k ? 0 === k ? ((halfPi = getPi(Ctor, pr + 4, rm).times(.5)).s = x.s, halfPi) : new Ctor(NaN) : (Ctor.precision = pr + 6, Ctor.rounding = 1, x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan(), Ctor.precision = pr, Ctor.rounding = rm, x.times(2)));
                    }, P.inverseTangent = P.atan = function() {
                        var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
                        if (x.isFinite()) {
                            if (x.isZero()) return new Ctor(x);
                            if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) return (r = getPi(Ctor, pr + 4, rm).times(.25)).s = x.s, r;
                        } else {
                            if (!x.s) return new Ctor(NaN);
                            if (pr + 4 <= PI_PRECISION) return (r = getPi(Ctor, pr + 4, rm).times(.5)).s = x.s, r;
                        }
                        for(Ctor.precision = wpr = pr + 10, Ctor.rounding = 1, i = k = Math.min(28, wpr / 7 + 2 | 0); i; --i)x = x.div(x.times(x).plus(1).sqrt().plus(1));
                        for(external = !1, j = Math.ceil(wpr / 7), n = 1, x2 = x.times(x), r = new Ctor(x), px = x; -1 !== i;)if (px = px.times(x2), t = r.minus(px.div(n += 2)), px = px.times(x2), void 0 !== (r = t.plus(px.div(n += 2))).d[j]) for(i = j; r.d[i] === t.d[i] && i--;);
                        return k && (r = r.times(2 << k - 1)), external = !0, finalise(r, Ctor.precision = pr, Ctor.rounding = rm, !0);
                    }, P.isFinite = function() {
                        return !!this.d;
                    }, P.isInteger = P.isInt = function() {
                        return !!this.d && mathfloor(this.e / 7) > this.d.length - 2;
                    }, P.isNaN = function() {
                        return !this.s;
                    }, P.isNegative = P.isNeg = function() {
                        return this.s < 0;
                    }, P.isPositive = P.isPos = function() {
                        return this.s > 0;
                    }, P.isZero = function() {
                        return !!this.d && 0 === this.d[0];
                    }, P.lessThan = P.lt = function(y) {
                        return this.cmp(y) < 0;
                    }, P.lessThanOrEqualTo = P.lte = function(y) {
                        return this.cmp(y) < 1;
                    }, P.logarithm = P.log = function(base) {
                        var isBase10, d, denominator, k, inf, num, sd, r, Ctor = this.constructor, pr = Ctor.precision, rm = Ctor.rounding;
                        if (null == base) base = new Ctor(10), isBase10 = !0;
                        else {
                            if (d = (base = new Ctor(base)).d, base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
                            isBase10 = base.eq(10);
                        }
                        if (d = this.d, this.s < 0 || !d || !d[0] || this.eq(1)) return new Ctor(d && !d[0] ? -1 / 0 : 1 != this.s ? NaN : d ? 0 : 1 / 0);
                        if (isBase10) {
                            if (d.length > 1) inf = !0;
                            else {
                                for(k = d[0]; k % 10 == 0;)k /= 10;
                                inf = 1 !== k;
                            }
                        }
                        if (external = !1, num = naturalLogarithm(this, sd = pr + 5), denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd), checkRoundingDigits((r = divide(num, denominator, sd, 1)).d, k = pr, rm)) do if (num = naturalLogarithm(this, sd += 10), denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd), r = divide(num, denominator, sd, 1), !inf) {
                            +digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14 && (r = finalise(r, pr + 1, 0));
                            break;
                        }
                        while (checkRoundingDigits(r.d, k += 10, rm));
                        return external = !0, finalise(r, pr, rm);
                    }, P.minus = P.sub = function(y) {
                        var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
                        if (y = new Ctor(y), !x.d || !y.d) return x.s && y.s ? x.d ? y.s = -y.s : y = new Ctor(y.d || x.s !== y.s ? x : NaN) : y = new Ctor(NaN), y;
                        if (x.s != y.s) return y.s = -y.s, x.plus(y);
                        if (xd = x.d, yd = y.d, pr = Ctor.precision, rm = Ctor.rounding, !xd[0] || !yd[0]) {
                            if (yd[0]) y.s = -y.s;
                            else {
                                if (!xd[0]) return new Ctor(3 === rm ? -0 : 0);
                                y = new Ctor(x);
                            }
                            return external ? finalise(y, pr, rm) : y;
                        }
                        if (e = mathfloor(y.e / 7), xe = mathfloor(x.e / 7), xd = xd.slice(), k = xe - e) {
                            for((xLTy = k < 0) ? (d = xd, k = -k, len = yd.length) : (d = yd, e = xe, len = xd.length), k > (i = Math.max(Math.ceil(pr / 7), len) + 2) && (k = i, d.length = 1), d.reverse(), i = k; i--;)d.push(0);
                            d.reverse();
                        } else {
                            for((xLTy = (i = xd.length) < (len = yd.length)) && (len = i), i = 0; i < len; i++)if (xd[i] != yd[i]) {
                                xLTy = xd[i] < yd[i];
                                break;
                            }
                            k = 0;
                        }
                        for(xLTy && (d = xd, xd = yd, yd = d, y.s = -y.s), len = xd.length, i = yd.length - len; i > 0; --i)xd[len++] = 0;
                        for(i = yd.length; i > k;){
                            if (xd[--i] < yd[i]) {
                                for(j = i; j && 0 === xd[--j];)xd[j] = BASE - 1;
                                --xd[j], xd[i] += BASE;
                            }
                            xd[i] -= yd[i];
                        }
                        for(; 0 === xd[--len];)xd.pop();
                        for(; 0 === xd[0]; xd.shift())--e;
                        return xd[0] ? (y.d = xd, y.e = getBase10Exponent(xd, e), external ? finalise(y, pr, rm) : y) : new Ctor(3 === rm ? -0 : 0);
                    }, P.modulo = P.mod = function(y) {
                        var q, x = this, Ctor = x.constructor;
                        return y = new Ctor(y), !x.d || !y.s || y.d && !y.d[0] ? new Ctor(NaN) : !y.d || x.d && !x.d[0] ? finalise(new Ctor(x), Ctor.precision, Ctor.rounding) : (external = !1, 9 == Ctor.modulo ? (q = divide(x, y.abs(), 0, 3, 1)).s *= y.s : q = divide(x, y, 0, Ctor.modulo, 1), q = q.times(y), external = !0, x.minus(q));
                    }, P.naturalExponential = P.exp = function() {
                        return naturalExponential(this);
                    }, P.naturalLogarithm = P.ln = function() {
                        return naturalLogarithm(this);
                    }, P.negated = P.neg = function() {
                        var x = new this.constructor(this);
                        return x.s = -x.s, finalise(x);
                    }, P.plus = P.add = function(y) {
                        var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
                        if (y = new Ctor(y), !x.d || !y.d) return x.s && y.s ? x.d || (y = new Ctor(y.d || x.s === y.s ? x : NaN)) : y = new Ctor(NaN), y;
                        if (x.s != y.s) return y.s = -y.s, x.minus(y);
                        if (xd = x.d, yd = y.d, pr = Ctor.precision, rm = Ctor.rounding, !xd[0] || !yd[0]) return yd[0] || (y = new Ctor(x)), external ? finalise(y, pr, rm) : y;
                        if (k = mathfloor(x.e / 7), e = mathfloor(y.e / 7), xd = xd.slice(), i = k - e) {
                            for(i < 0 ? (d = xd, i = -i, len = yd.length) : (d = yd, e = k, len = xd.length), i > (len = (k = Math.ceil(pr / 7)) > len ? k + 1 : len + 1) && (i = len, d.length = 1), d.reverse(); i--;)d.push(0);
                            d.reverse();
                        }
                        for((len = xd.length) - (i = yd.length) < 0 && (i = len, d = yd, yd = xd, xd = d), carry = 0; i;)carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0, xd[i] %= BASE;
                        for(carry && (xd.unshift(carry), ++e), len = xd.length; 0 == xd[--len];)xd.pop();
                        return y.d = xd, y.e = getBase10Exponent(xd, e), external ? finalise(y, pr, rm) : y;
                    }, P.precision = P.sd = function(z) {
                        var k, x = this;
                        if (void 0 !== z && z !== !!z && 1 !== z && 0 !== z) throw Error(invalidArgument + z);
                        return x.d ? (k = getPrecision(x.d), z && x.e + 1 > k && (k = x.e + 1)) : k = NaN, k;
                    }, P.round = function() {
                        var x = this, Ctor = x.constructor;
                        return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
                    }, P.sine = P.sin = function() {
                        var pr, rm, x = this, Ctor = x.constructor;
                        return x.isFinite() ? x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 7, Ctor.rounding = 1, x = function(Ctor, x) {
                            var k, len = x.d.length;
                            if (len < 3) return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
                            k = (k = 1.4 * Math.sqrt(len)) > 16 ? 16 : 0 | k, x = x.times(1 / tinyPow(5, k)), x = taylorSeries(Ctor, 2, x, x);
                            for(var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20); k--;)sin2_x = x.times(x), x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
                            return x;
                        }(Ctor, toLessThanHalfPi(Ctor, x)), Ctor.precision = pr, Ctor.rounding = rm, finalise(quadrant > 2 ? x.neg() : x, pr, rm, !0)) : new Ctor(NaN);
                    }, P.squareRoot = P.sqrt = function() {
                        var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
                        if (1 !== s || !d || !d[0]) return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
                        for(external = !1, 0 == (s = Math.sqrt(+x)) || s == 1 / 0 ? (((n = digitsToString(d)).length + e) % 2 == 0 && (n += "0"), s = Math.sqrt(n), e = mathfloor((e + 1) / 2) - (e < 0 || e % 2), r = new Ctor(n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e)) : r = new Ctor(s.toString()), sd = (e = Ctor.precision) + 3;;)if (r = (t = r).plus(divide(x, t, sd + 2, 1)).times(.5), digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
                            if ("9999" != (n = n.slice(sd - 3, sd + 1)) && (rep || "4999" != n)) {
                                +n && (+n.slice(1) || "5" != n.charAt(0)) || (finalise(r, e + 1, 1), m = !r.times(r).eq(x));
                                break;
                            }
                            if (!rep && (finalise(t, e + 1, 0), t.times(t).eq(x))) {
                                r = t;
                                break;
                            }
                            sd += 4, rep = 1;
                        }
                        return external = !0, finalise(r, e, Ctor.rounding, m);
                    }, P.tangent = P.tan = function() {
                        var pr, rm, x = this, Ctor = x.constructor;
                        return x.isFinite() ? x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + 10, Ctor.rounding = 1, (x = x.sin()).s = 1, x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0), Ctor.precision = pr, Ctor.rounding = rm, finalise(2 == quadrant || 4 == quadrant ? x.neg() : x, pr, rm, !0)) : new Ctor(NaN);
                    }, P.times = P.mul = function(y) {
                        var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
                        if (y.s *= x.s, !(xd && xd[0] && yd && yd[0])) return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : xd && yd ? 0 * y.s : y.s / 0);
                        for(e = mathfloor(x.e / 7) + mathfloor(y.e / 7), (xdL = xd.length) < (ydL = yd.length) && (r = xd, xd = yd, yd = r, rL = xdL, xdL = ydL, ydL = rL), r = [], i = rL = xdL + ydL; i--;)r.push(0);
                        for(i = ydL; --i >= 0;){
                            for(carry = 0, k = xdL + i; k > i;)t = r[k] + yd[i] * xd[k - i - 1] + carry, r[k--] = t % BASE | 0, carry = t / BASE | 0;
                            r[k] = (r[k] + carry) % BASE | 0;
                        }
                        for(; !r[--rL];)r.pop();
                        return carry ? ++e : r.shift(), y.d = r, y.e = getBase10Exponent(r, e), external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
                    }, P.toBinary = function(sd, rm) {
                        return toStringBinary(this, 2, sd, rm);
                    }, P.toDecimalPlaces = P.toDP = function(dp, rm) {
                        var x = this, Ctor = x.constructor;
                        return x = new Ctor(x), void 0 === dp ? x : (checkInt32(dp, 0, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), finalise(x, dp + x.e + 1, rm));
                    }, P.toExponential = function(dp, rm) {
                        var str, x = this, Ctor = x.constructor;
                        return void 0 === dp ? str = finiteToString(x, !0) : (checkInt32(dp, 0, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), str = finiteToString(x = finalise(new Ctor(x), dp + 1, rm), !0, dp + 1)), x.isNeg() && !x.isZero() ? "-" + str : str;
                    }, P.toFixed = function(dp, rm) {
                        var str, y, x = this, Ctor = x.constructor;
                        return void 0 === dp ? str = finiteToString(x) : (checkInt32(dp, 0, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), str = finiteToString(y = finalise(new Ctor(x), dp + x.e + 1, rm), !1, dp + y.e + 1)), x.isNeg() && !x.isZero() ? "-" + str : str;
                    }, P.toFraction = function(maxD) {
                        var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
                        if (!xd) return new Ctor(x);
                        if (n1 = d0 = new Ctor(1), d1 = n0 = new Ctor(0), k = (e = (d = new Ctor(d1)).e = getPrecision(xd) - x.e - 1) % 7, d.d[0] = mathpow(10, k < 0 ? 7 + k : k), null == maxD) maxD = e > 0 ? d : n1;
                        else {
                            if (!(n = new Ctor(maxD)).isInt() || n.lt(n1)) throw Error(invalidArgument + n);
                            maxD = n.gt(d) ? e > 0 ? d : n1 : n;
                        }
                        for(external = !1, n = new Ctor(digitsToString(xd)), pr = Ctor.precision, Ctor.precision = e = 7 * xd.length * 2; q = divide(n, d, 0, 1, 1), 1 != (d2 = d0.plus(q.times(d1))).cmp(maxD);)d0 = d1, d1 = d2, d2 = n1, n1 = n0.plus(q.times(d2)), n0 = d2, d2 = d, d = n.minus(q.times(d2)), n = d2;
                        return d2 = divide(maxD.minus(d0), d1, 0, 1, 1), n0 = n0.plus(d2.times(n1)), d0 = d0.plus(d2.times(d1)), n0.s = n1.s = x.s, r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [
                            n1,
                            d1
                        ] : [
                            n0,
                            d0
                        ], Ctor.precision = pr, external = !0, r;
                    }, P.toHexadecimal = P.toHex = function(sd, rm) {
                        return toStringBinary(this, 16, sd, rm);
                    }, P.toNearest = function(y, rm) {
                        var x = this, Ctor = x.constructor;
                        if (x = new Ctor(x), null == y) {
                            if (!x.d) return x;
                            y = new Ctor(1), rm = Ctor.rounding;
                        } else {
                            if (y = new Ctor(y), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), !x.d) return y.s ? x : y;
                            if (!y.d) return y.s && (y.s = x.s), y;
                        }
                        return y.d[0] ? (external = !1, x = divide(x, y, 0, rm, 1).times(y), external = !0, finalise(x)) : (y.s = x.s, x = y), x;
                    }, P.toNumber = function() {
                        return +this;
                    }, P.toOctal = function(sd, rm) {
                        return toStringBinary(this, 8, sd, rm);
                    }, P.toPower = P.pow = function(y) {
                        var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
                        if (!(x.d && y.d && x.d[0] && y.d[0])) return new Ctor(mathpow(+x, yn));
                        if ((x = new Ctor(x)).eq(1)) return x;
                        if (pr = Ctor.precision, rm = Ctor.rounding, y.eq(1)) return finalise(x, pr, rm);
                        if ((e = mathfloor(y.e / 7)) >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= 9007199254740991) return r = intPow(Ctor, x, k, pr), y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
                        if ((s = x.s) < 0) {
                            if (e < y.d.length - 1) return new Ctor(NaN);
                            if (0 == (1 & y.d[e]) && (s = 1), 0 == x.e && 1 == x.d[0] && 1 == x.d.length) return x.s = s, x;
                        }
                        return (e = 0 != (k = mathpow(+x, yn)) && isFinite(k) ? new Ctor(k + "").e : mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1))) > Ctor.maxE + 1 || e < Ctor.minE - 1 ? new Ctor(e > 0 ? s / 0 : 0) : (external = !1, Ctor.rounding = x.s = 1, k = Math.min(12, (e + "").length), (r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr)).d && checkRoundingDigits((r = finalise(r, pr + 5, 1)).d, pr, rm) && (e = pr + 10, +digitsToString((r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1)).d).slice(pr + 1, pr + 15) + 1 == 1e14 && (r = finalise(r, pr + 1, 0))), r.s = s, external = !0, Ctor.rounding = rm, finalise(r, pr, rm));
                    }, P.toPrecision = function(sd, rm) {
                        var str, x = this, Ctor = x.constructor;
                        return void 0 === sd ? str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos) : (checkInt32(sd, 1, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), str = finiteToString(x = finalise(new Ctor(x), sd, rm), sd <= x.e || x.e <= Ctor.toExpNeg, sd)), x.isNeg() && !x.isZero() ? "-" + str : str;
                    }, P.toSignificantDigits = P.toSD = function(sd, rm) {
                        var Ctor = this.constructor;
                        return void 0 === sd ? (sd = Ctor.precision, rm = Ctor.rounding) : (checkInt32(sd, 1, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8)), finalise(new Ctor(this), sd, rm);
                    }, P.toString = function() {
                        var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
                        return x.isNeg() && !x.isZero() ? "-" + str : str;
                    }, P.truncated = P.trunc = function() {
                        return finalise(new this.constructor(this), this.e + 1, 1);
                    }, P.valueOf = P.toJSON = function() {
                        var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
                        return x.isNeg() ? "-" + str : str;
                    };
                    var divide = function() {
                        function multiplyInteger(x, k, base) {
                            var temp, carry = 0, i = x.length;
                            for(x = x.slice(); i--;)temp = x[i] * k + carry, x[i] = temp % base | 0, carry = temp / base | 0;
                            return carry && x.unshift(carry), x;
                        }
                        function compare(a, b, aL, bL) {
                            var i, r;
                            if (aL != bL) r = aL > bL ? 1 : -1;
                            else for(i = r = 0; i < aL; i++)if (a[i] != b[i]) {
                                r = a[i] > b[i] ? 1 : -1;
                                break;
                            }
                            return r;
                        }
                        function subtract(a, b, aL, base) {
                            for(var i = 0; aL--;)a[aL] -= i, i = a[aL] < b[aL] ? 1 : 0, a[aL] = i * base + a[aL] - b[aL];
                            for(; !a[0] && a.length > 1;)a.shift();
                        }
                        return function(x, y, pr, rm, dp, base) {
                            var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
                            if (!(xd && xd[0] && yd && yd[0])) return new Ctor(x.s && y.s && (xd ? !yd || xd[0] != yd[0] : yd) ? xd && 0 == xd[0] || !yd ? 0 * sign : sign / 0 : NaN);
                            for(base ? (logBase = 1, e = x.e - y.e) : (base = BASE, logBase = 7, e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase)), yL = yd.length, xL = xd.length, qd = (q = new Ctor(sign)).d = [], i = 0; yd[i] == (xd[i] || 0); i++);
                            if (yd[i] > (xd[i] || 0) && e--, null == pr ? (sd = pr = Ctor.precision, rm = Ctor.rounding) : sd = dp ? pr + (x.e - y.e) + 1 : pr, sd < 0) qd.push(1), more = !0;
                            else {
                                if (sd = sd / logBase + 2 | 0, i = 0, 1 == yL) {
                                    for(k = 0, yd = yd[0], sd++; (i < xL || k) && sd--; i++)t = k * base + (xd[i] || 0), qd[i] = t / yd | 0, k = t % yd | 0;
                                    more = k || i < xL;
                                } else {
                                    for((k = base / (yd[0] + 1) | 0) > 1 && (yd = multiplyInteger(yd, k, base), xd = multiplyInteger(xd, k, base), yL = yd.length, xL = xd.length), xi = yL, remL = (rem = xd.slice(0, yL)).length; remL < yL;)rem[remL++] = 0;
                                    (yz = yd.slice()).unshift(0), yd0 = yd[0], yd[1] >= base / 2 && ++yd0;
                                    do k = 0, (cmp = compare(yd, rem, yL, remL)) < 0 ? (rem0 = rem[0], yL != remL && (rem0 = rem0 * base + (rem[1] || 0)), (k = rem0 / yd0 | 0) > 1 ? (k >= base && (k = base - 1), 1 == (cmp = compare(prod = multiplyInteger(yd, k, base), rem, prodL = prod.length, remL = rem.length)) && (k--, subtract(prod, yL < prodL ? yz : yd, prodL, base))) : (0 == k && (cmp = k = 1), prod = yd.slice()), (prodL = prod.length) < remL && prod.unshift(0), subtract(rem, prod, remL, base), -1 == cmp && (cmp = compare(yd, rem, yL, remL = rem.length)) < 1 && (k++, subtract(rem, yL < remL ? yz : yd, remL, base)), remL = rem.length) : 0 === cmp && (k++, rem = [
                                        0
                                    ]), qd[i++] = k, cmp && rem[0] ? rem[remL++] = xd[xi] || 0 : (rem = [
                                        xd[xi]
                                    ], remL = 1);
                                    while (((xi++) < xL || void 0 !== rem[0]) && sd--);
                                    more = void 0 !== rem[0];
                                }
                                qd[0] || qd.shift();
                            }
                            if (1 == logBase) q.e = e, inexact = more;
                            else {
                                for(i = 1, k = qd[0]; k >= 10; k /= 10)i++;
                                q.e = i + e * logBase - 1, finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
                            }
                            return q;
                        };
                    }();
                    function finalise(x, sd, rm, isTruncated) {
                        var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
                        out: if (null != sd) {
                            if (!(xd = x.d)) return x;
                            for(digits = 1, k = xd[0]; k >= 10; k /= 10)digits++;
                            if ((i = sd - digits) < 0) i += 7, j = sd, rd = (w = xd[xdi = 0]) / mathpow(10, digits - j - 1) % 10 | 0;
                            else if ((xdi = Math.ceil((i + 1) / 7)) >= (k = xd.length)) {
                                if (!isTruncated) break out;
                                for(; (k++) <= xdi;)xd.push(0);
                                w = rd = 0, digits = 1, j = (i %= 7) - 7 + 1;
                            } else {
                                for(w = k = xd[xdi], digits = 1; k >= 10; k /= 10)digits++;
                                rd = (j = (i %= 7) - 7 + digits) < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
                            }
                            if (isTruncated = isTruncated || sd < 0 || void 0 !== xd[xdi + 1] || (j < 0 ? w : w % mathpow(10, digits - j - 1)), roundUp = rm < 4 ? (rd || isTruncated) && (0 == rm || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || 5 == rd && (4 == rm || isTruncated || 6 == rm && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7)), sd < 1 || !xd[0]) return xd.length = 0, roundUp ? (sd -= x.e + 1, xd[0] = mathpow(10, (7 - sd % 7) % 7), x.e = -sd || 0) : xd[0] = x.e = 0, x;
                            if (0 == i ? (xd.length = xdi, k = 1, xdi--) : (xd.length = xdi + 1, k = mathpow(10, 7 - i), xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0), roundUp) for(;;){
                                if (0 == xdi) {
                                    for(i = 1, j = xd[0]; j >= 10; j /= 10)i++;
                                    for(j = xd[0] += k, k = 1; j >= 10; j /= 10)k++;
                                    i != k && (x.e++, xd[0] == BASE && (xd[0] = 1));
                                    break;
                                }
                                if (xd[xdi] += k, xd[xdi] != BASE) break;
                                xd[xdi--] = 0, k = 1;
                            }
                            for(i = xd.length; 0 === xd[--i];)xd.pop();
                        }
                        return external && (x.e > Ctor.maxE ? (x.d = null, x.e = NaN) : x.e < Ctor.minE && (x.e = 0, x.d = [
                            0
                        ])), x;
                    }
                    function finiteToString(x, isExp, sd) {
                        if (!x.isFinite()) return nonFiniteToString(x);
                        var k, e = x.e, str = digitsToString(x.d), len = str.length;
                        return isExp ? (sd && (k = sd - len) > 0 ? str = str.charAt(0) + "." + str.slice(1) + getZeroString(k) : len > 1 && (str = str.charAt(0) + "." + str.slice(1)), str = str + (x.e < 0 ? "e" : "e+") + x.e) : e < 0 ? (str = "0." + getZeroString(-e - 1) + str, sd && (k = sd - len) > 0 && (str += getZeroString(k))) : e >= len ? (str += getZeroString(e + 1 - len), sd && (k = sd - e - 1) > 0 && (str = str + "." + getZeroString(k))) : ((k = e + 1) < len && (str = str.slice(0, k) + "." + str.slice(k)), sd && (k = sd - len) > 0 && (e + 1 === len && (str += "."), str += getZeroString(k))), str;
                    }
                    function getBase10Exponent(digits, e) {
                        var w = digits[0];
                        for(e *= 7; w >= 10; w /= 10)e++;
                        return e;
                    }
                    function getLn10(Ctor, sd, pr) {
                        if (sd > LN10_PRECISION) throw external = !0, pr && (Ctor.precision = pr), Error("[DecimalError] Precision limit exceeded");
                        return finalise(new Ctor(LN10), sd, 1, !0);
                    }
                    function getPi(Ctor, sd, rm) {
                        if (sd > PI_PRECISION) throw Error("[DecimalError] Precision limit exceeded");
                        return finalise(new Ctor(PI), sd, rm, !0);
                    }
                    function getPrecision(digits) {
                        var w = digits.length - 1, len = 7 * w + 1;
                        if (w = digits[w]) {
                            for(; w % 10 == 0; w /= 10)len--;
                            for(w = digits[0]; w >= 10; w /= 10)len++;
                        }
                        return len;
                    }
                    function getZeroString(k) {
                        for(var zs = ""; k--;)zs += "0";
                        return zs;
                    }
                    function intPow(Ctor, x, n, pr) {
                        var isTruncated, r = new Ctor(1), k = Math.ceil(pr / 7 + 4);
                        for(external = !1;;){
                            if (n % 2 && truncate((r = r.times(x)).d, k) && (isTruncated = !0), 0 === (n = mathfloor(n / 2))) {
                                n = r.d.length - 1, isTruncated && 0 === r.d[n] && ++r.d[n];
                                break;
                            }
                            truncate((x = x.times(x)).d, k);
                        }
                        return external = !0, r;
                    }
                    function isOdd(n) {
                        return 1 & n.d[n.d.length - 1];
                    }
                    function maxOrMin(Ctor, args, ltgt) {
                        for(var y, x = new Ctor(args[0]), i = 0; ++i < args.length;){
                            if (!(y = new Ctor(args[i])).s) {
                                x = y;
                                break;
                            }
                            x[ltgt](y) && (x = y);
                        }
                        return x;
                    }
                    function naturalExponential(x, sd) {
                        var denominator, guard, j, pow, sum, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
                        if (!x.d || !x.d[0] || x.e > 17) return new Ctor(x.d ? x.d[0] ? x.s < 0 ? 0 : 1 / 0 : 1 : x.s ? x.s < 0 ? 0 : x : NaN);
                        for(null == sd ? (external = !1, wpr = pr) : wpr = sd, t = new Ctor(.03125); x.e > -2;)x = x.times(t), k += 5;
                        for(wpr += guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0, denominator = pow = sum = new Ctor(1), Ctor.precision = wpr;;){
                            if (pow = finalise(pow.times(x), wpr, 1), denominator = denominator.times(++i), digitsToString((t = sum.plus(divide(pow, denominator, wpr, 1))).d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
                                for(j = k; j--;)sum = finalise(sum.times(sum), wpr, 1);
                                if (null != sd) return Ctor.precision = pr, sum;
                                if (!(rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep))) return finalise(sum, Ctor.precision = pr, rm, external = !0);
                                Ctor.precision = wpr += 10, denominator = pow = t = new Ctor(1), i = 0, rep++;
                            }
                            sum = t;
                        }
                    }
                    function naturalLogarithm(y, sd) {
                        var c, c0, denominator, e, numerator, rep, sum, t, wpr, x1, x2, n = 1, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
                        if (x.s < 0 || !xd || !xd[0] || !x.e && 1 == xd[0] && 1 == xd.length) return new Ctor(xd && !xd[0] ? -1 / 0 : 1 != x.s ? NaN : xd ? 0 : x);
                        if (null == sd ? (external = !1, wpr = pr) : wpr = sd, Ctor.precision = wpr += 10, c0 = (c = digitsToString(xd)).charAt(0), !(Math.abs(e = x.e) < 15e14)) return t = getLn10(Ctor, wpr + 2, pr).times(e + ""), x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - 10).plus(t), Ctor.precision = pr, null == sd ? finalise(x, pr, rm, external = !0) : x;
                        for(; c0 < 7 && 1 != c0 || 1 == c0 && c.charAt(1) > 3;)c0 = (c = digitsToString((x = x.times(y)).d)).charAt(0), n++;
                        for(e = x.e, c0 > 1 ? (x = new Ctor("0." + c), e++) : x = new Ctor(c0 + "." + c.slice(1)), x1 = x, sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1), x2 = finalise(x.times(x), wpr, 1), denominator = 3;;){
                            if (numerator = finalise(numerator.times(x2), wpr, 1), digitsToString((t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1))).d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
                                if (sum = sum.times(2), 0 !== e && (sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""))), sum = divide(sum, new Ctor(n), wpr, 1), null != sd) return Ctor.precision = pr, sum;
                                if (!checkRoundingDigits(sum.d, wpr - 10, rm, rep)) return finalise(sum, Ctor.precision = pr, rm, external = !0);
                                Ctor.precision = wpr += 10, t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1), x2 = finalise(x.times(x), wpr, 1), denominator = rep = 1;
                            }
                            sum = t, denominator += 2;
                        }
                    }
                    function nonFiniteToString(x) {
                        return String(x.s * x.s / 0);
                    }
                    function parseDecimal(x, str) {
                        var e, i, len;
                        for((e = str.indexOf(".")) > -1 && (str = str.replace(".", "")), (i = str.search(/e/i)) > 0 ? (e < 0 && (e = i), e += +str.slice(i + 1), str = str.substring(0, i)) : e < 0 && (e = str.length), i = 0; 48 === str.charCodeAt(i); i++);
                        for(len = str.length; 48 === str.charCodeAt(len - 1); --len);
                        if (str = str.slice(i, len)) {
                            if (len -= i, x.e = e = e - i - 1, x.d = [], i = (e + 1) % 7, e < 0 && (i += 7), i < len) {
                                for(i && x.d.push(+str.slice(0, i)), len -= 7; i < len;)x.d.push(+str.slice(i, i += 7));
                                i = 7 - (str = str.slice(i)).length;
                            } else i -= len;
                            for(; i--;)str += "0";
                            x.d.push(+str), external && (x.e > x.constructor.maxE ? (x.d = null, x.e = NaN) : x.e < x.constructor.minE && (x.e = 0, x.d = [
                                0
                            ]));
                        } else x.e = 0, x.d = [
                            0
                        ];
                        return x;
                    }
                    function parseOther(x, str) {
                        var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
                        if (str.indexOf("_") > -1) {
                            if (str = str.replace(/(\d)_(?=\d)/g, "$1"), isDecimal.test(str)) return parseDecimal(x, str);
                        } else if ("Infinity" === str || "NaN" === str) return +str || (x.s = NaN), x.e = NaN, x.d = null, x;
                        if (isHex.test(str)) base = 16, str = str.toLowerCase();
                        else if (isBinary.test(str)) base = 2;
                        else {
                            if (!isOctal.test(str)) throw Error(invalidArgument + str);
                            base = 8;
                        }
                        for((i = str.search(/p/i)) > 0 ? (p = +str.slice(i + 1), str = str.substring(2, i)) : str = str.slice(2), isFloat = (i = str.indexOf(".")) >= 0, Ctor = x.constructor, isFloat && (i = (len = (str = str.replace(".", "")).length) - i, divisor = intPow(Ctor, new Ctor(base), i, 2 * i)), i = xe = (xd = convertBase(str, base, BASE)).length - 1; 0 === xd[i]; --i)xd.pop();
                        return i < 0 ? new Ctor(0 * x.s) : (x.e = getBase10Exponent(xd, xe), x.d = xd, external = !1, isFloat && (x = divide(x, divisor, 4 * len)), p && (x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p))), external = !0, x);
                    }
                    function taylorSeries(Ctor, n, x, y, isHyperbolic) {
                        var j, t, u, x2, pr = Ctor.precision, k = Math.ceil(pr / 7);
                        for(external = !1, x2 = x.times(x), u = new Ctor(y);;){
                            if (t = divide(u.times(x2), new Ctor((n++) * n++), pr, 1), u = isHyperbolic ? y.plus(t) : y.minus(t), y = divide(t.times(x2), new Ctor((n++) * n++), pr, 1), void 0 !== (t = u.plus(y)).d[k]) {
                                for(j = k; t.d[j] === u.d[j] && j--;);
                                if (-1 == j) break;
                            }
                            j = u, u = y, y = t, t = j;
                        }
                        return external = !0, t.d.length = k + 1, t;
                    }
                    function tinyPow(b, e) {
                        for(var n = b; --e;)n *= b;
                        return n;
                    }
                    function toLessThanHalfPi(Ctor, x) {
                        var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(.5);
                        if ((x = x.abs()).lte(halfPi)) return quadrant = isNeg ? 4 : 1, x;
                        if ((t = x.divToInt(pi)).isZero()) quadrant = isNeg ? 3 : 2;
                        else {
                            if ((x = x.minus(t.times(pi))).lte(halfPi)) return quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1, x;
                            quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
                        }
                        return x.minus(pi).abs();
                    }
                    function toStringBinary(x, baseOut, sd, rm) {
                        var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = void 0 !== sd;
                        if (isExp ? (checkInt32(sd, 1, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8)) : (sd = Ctor.precision, rm = Ctor.rounding), x.isFinite()) {
                            for(isExp ? (base = 2, 16 == baseOut ? sd = 4 * sd - 3 : 8 == baseOut && (sd = 3 * sd - 2)) : base = baseOut, (i = (str = finiteToString(x)).indexOf(".")) >= 0 && (str = str.replace(".", ""), (y = new Ctor(1)).e = str.length - i, y.d = convertBase(finiteToString(y), 10, base), y.e = y.d.length), e = len = (xd = convertBase(str, 10, base)).length; 0 == xd[--len];)xd.pop();
                            if (xd[0]) {
                                if (i < 0 ? e-- : ((x = new Ctor(x)).d = xd, x.e = e, xd = (x = divide(x, y, sd, rm, 0, base)).d, e = x.e, roundUp = inexact), i = xd[sd], k = base / 2, roundUp = roundUp || void 0 !== xd[sd + 1], roundUp = rm < 4 ? (void 0 !== i || roundUp) && (0 === rm || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (4 === rm || roundUp || 6 === rm && 1 & xd[sd - 1] || rm === (x.s < 0 ? 8 : 7)), xd.length = sd, roundUp) for(; ++xd[--sd] > base - 1;)xd[sd] = 0, sd || (++e, xd.unshift(1));
                                for(len = xd.length; !xd[len - 1]; --len);
                                for(i = 0, str = ""; i < len; i++)str += NUMERALS.charAt(xd[i]);
                                if (isExp) {
                                    if (len > 1) {
                                        if (16 == baseOut || 8 == baseOut) {
                                            for(i = 16 == baseOut ? 4 : 3, --len; len % i; len++)str += "0";
                                            for(len = (xd = convertBase(str, base, baseOut)).length; !xd[len - 1]; --len);
                                            for(i = 1, str = "1."; i < len; i++)str += NUMERALS.charAt(xd[i]);
                                        } else str = str.charAt(0) + "." + str.slice(1);
                                    }
                                    str = str + (e < 0 ? "p" : "p+") + e;
                                } else if (e < 0) {
                                    for(; ++e;)str = "0" + str;
                                    str = "0." + str;
                                } else if (++e > len) for(e -= len; e--;)str += "0";
                                else e < len && (str = str.slice(0, e) + "." + str.slice(e));
                            } else str = isExp ? "0p+0" : "0";
                            str = (16 == baseOut ? "0x" : 2 == baseOut ? "0b" : 8 == baseOut ? "0o" : "") + str;
                        } else str = nonFiniteToString(x);
                        return x.s < 0 ? "-" + str : str;
                    }
                    function truncate(arr, len) {
                        if (arr.length > len) return arr.length = len, !0;
                    }
                    function abs(x) {
                        return new this(x).abs();
                    }
                    function acos(x) {
                        return new this(x).acos();
                    }
                    function acosh(x) {
                        return new this(x).acosh();
                    }
                    function add(x, y) {
                        return new this(x).plus(y);
                    }
                    function asin(x) {
                        return new this(x).asin();
                    }
                    function asinh(x) {
                        return new this(x).asinh();
                    }
                    function atan(x) {
                        return new this(x).atan();
                    }
                    function atanh(x) {
                        return new this(x).atanh();
                    }
                    function atan2(y, x) {
                        y = new this(y), x = new this(x);
                        var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
                        return y.s && x.s ? y.d || x.d ? !x.d || y.isZero() ? (r = x.s < 0 ? getPi(this, pr, rm) : new this(0)).s = y.s : !y.d || x.isZero() ? (r = getPi(this, wpr, 1).times(.5)).s = y.s : x.s < 0 ? (this.precision = wpr, this.rounding = 1, r = this.atan(divide(y, x, wpr, 1)), x = getPi(this, wpr, 1), this.precision = pr, this.rounding = rm, r = y.s < 0 ? r.minus(x) : r.plus(x)) : r = this.atan(divide(y, x, wpr, 1)) : (r = getPi(this, wpr, 1).times(x.s > 0 ? .25 : .75)).s = y.s : r = new this(NaN), r;
                    }
                    function cbrt(x) {
                        return new this(x).cbrt();
                    }
                    function ceil(x) {
                        return finalise(x = new this(x), x.e + 1, 2);
                    }
                    function clamp(x, min, max) {
                        return new this(x).clamp(min, max);
                    }
                    function config(obj) {
                        if (!obj || "object" != typeof obj) throw Error("[DecimalError] Object expected");
                        var i, p, v, useDefaults = !0 === obj.defaults, ps = [
                            "precision",
                            1,
                            1e9,
                            "rounding",
                            0,
                            8,
                            "toExpNeg",
                            -EXP_LIMIT,
                            0,
                            "toExpPos",
                            0,
                            EXP_LIMIT,
                            "maxE",
                            0,
                            EXP_LIMIT,
                            "minE",
                            -EXP_LIMIT,
                            0,
                            "modulo",
                            0,
                            9
                        ];
                        for(i = 0; i < ps.length; i += 3)if (p = ps[i], useDefaults && (this[p] = DEFAULTS[p]), void 0 !== (v = obj[p])) {
                            if (!(mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])) throw Error(invalidArgument + p + ": " + v);
                            this[p] = v;
                        }
                        if (p = "crypto", useDefaults && (this[p] = DEFAULTS[p]), void 0 !== (v = obj[p])) {
                            if (!0 !== v && !1 !== v && 0 !== v && 1 !== v) throw Error(invalidArgument + p + ": " + v);
                            if (v) {
                                if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
                                this[p] = !0;
                            } else this[p] = !1;
                        }
                        return this;
                    }
                    function cos(x) {
                        return new this(x).cos();
                    }
                    function cosh(x) {
                        return new this(x).cosh();
                    }
                    function div(x, y) {
                        return new this(x).div(y);
                    }
                    function exp(x) {
                        return new this(x).exp();
                    }
                    function floor(x) {
                        return finalise(x = new this(x), x.e + 1, 3);
                    }
                    function hypot() {
                        var i, n, t = new this(0);
                        for(external = !1, i = 0; i < arguments.length;)if ((n = new this(arguments[i++])).d) t.d && (t = t.plus(n.times(n)));
                        else {
                            if (n.s) return external = !0, new this(1 / 0);
                            t = n;
                        }
                        return external = !0, t.sqrt();
                    }
                    function isDecimalInstance(obj) {
                        return obj instanceof Decimal || obj && obj.toStringTag === tag || !1;
                    }
                    function ln(x) {
                        return new this(x).ln();
                    }
                    function log(x, y) {
                        return new this(x).log(y);
                    }
                    function log2(x) {
                        return new this(x).log(2);
                    }
                    function log10(x) {
                        return new this(x).log(10);
                    }
                    function max() {
                        return maxOrMin(this, arguments, "lt");
                    }
                    function min() {
                        return maxOrMin(this, arguments, "gt");
                    }
                    function mod(x, y) {
                        return new this(x).mod(y);
                    }
                    function mul(x, y) {
                        return new this(x).mul(y);
                    }
                    function pow(x, y) {
                        return new this(x).pow(y);
                    }
                    function random(sd) {
                        var d, e, k, n, i = 0, r = new this(1), rd = [];
                        if (void 0 === sd ? sd = this.precision : checkInt32(sd, 1, 1e9), k = Math.ceil(sd / 7), this.crypto) {
                            if (crypto.getRandomValues) for(d = crypto.getRandomValues(new Uint32Array(k)); i < k;)(n = d[i]) >= 429e7 ? d[i] = crypto.getRandomValues(new Uint32Array(1))[0] : rd[i++] = n % 1e7;
                            else {
                                if (!crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
                                for(d = crypto.randomBytes(k *= 4); i < k;)(n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((127 & d[i + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(d, i) : (rd.push(n % 1e7), i += 4);
                                i = k / 4;
                            }
                        } else for(; i < k;)rd[i++] = 1e7 * Math.random() | 0;
                        for(sd %= 7, (k = rd[--i]) && sd && (n = mathpow(10, 7 - sd), rd[i] = (k / n | 0) * n); 0 === rd[i]; i--)rd.pop();
                        if (i < 0) e = 0, rd = [
                            0
                        ];
                        else {
                            for(e = -1; 0 === rd[0]; e -= 7)rd.shift();
                            for(k = 1, n = rd[0]; n >= 10; n /= 10)k++;
                            k < 7 && (e -= 7 - k);
                        }
                        return r.e = e, r.d = rd, r;
                    }
                    function round(x) {
                        return finalise(x = new this(x), x.e + 1, this.rounding);
                    }
                    function sign(x) {
                        return (x = new this(x)).d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
                    }
                    function sin(x) {
                        return new this(x).sin();
                    }
                    function sinh(x) {
                        return new this(x).sinh();
                    }
                    function sqrt(x) {
                        return new this(x).sqrt();
                    }
                    function sub(x, y) {
                        return new this(x).sub(y);
                    }
                    function sum() {
                        var i = 0, args = arguments, x = new this(args[i]);
                        for(external = !1; x.s && ++i < args.length;)x = x.plus(args[i]);
                        return external = !0, finalise(x, this.precision, this.rounding);
                    }
                    function tan(x) {
                        return new this(x).tan();
                    }
                    function tanh(x) {
                        return new this(x).tanh();
                    }
                    function trunc(x) {
                        return finalise(x = new this(x), x.e + 1, 1);
                    }
                    Decimal = function clone(obj) {
                        var i, p, ps;
                        function Decimal(v) {
                            var e, i, t, x = this;
                            if (!(x instanceof Decimal)) return new Decimal(v);
                            if (x.constructor = Decimal, isDecimalInstance(v)) return x.s = v.s, void (external ? !v.d || v.e > Decimal.maxE ? (x.e = NaN, x.d = null) : v.e < Decimal.minE ? (x.e = 0, x.d = [
                                0
                            ]) : (x.e = v.e, x.d = v.d.slice()) : (x.e = v.e, x.d = v.d ? v.d.slice() : v.d));
                            if ("number" === (t = typeof v)) {
                                if (0 === v) return x.s = 1 / v < 0 ? -1 : 1, x.e = 0, void (x.d = [
                                    0
                                ]);
                                if (v < 0 ? (v = -v, x.s = -1) : x.s = 1, v === ~~v && v < 1e7) {
                                    for(e = 0, i = v; i >= 10; i /= 10)e++;
                                    return void (external ? e > Decimal.maxE ? (x.e = NaN, x.d = null) : e < Decimal.minE ? (x.e = 0, x.d = [
                                        0
                                    ]) : (x.e = e, x.d = [
                                        v
                                    ]) : (x.e = e, x.d = [
                                        v
                                    ]));
                                }
                                return 0 * v != 0 ? (v || (x.s = NaN), x.e = NaN, void (x.d = null)) : parseDecimal(x, v.toString());
                            }
                            if ("string" !== t) throw Error(invalidArgument + v);
                            return 45 === (i = v.charCodeAt(0)) ? (v = v.slice(1), x.s = -1) : (43 === i && (v = v.slice(1)), x.s = 1), isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
                        }
                        if (Decimal.prototype = P, Decimal.ROUND_UP = 0, Decimal.ROUND_DOWN = 1, Decimal.ROUND_CEIL = 2, Decimal.ROUND_FLOOR = 3, Decimal.ROUND_HALF_UP = 4, Decimal.ROUND_HALF_DOWN = 5, Decimal.ROUND_HALF_EVEN = 6, Decimal.ROUND_HALF_CEIL = 7, Decimal.ROUND_HALF_FLOOR = 8, Decimal.EUCLID = 9, Decimal.config = Decimal.set = config, Decimal.clone = clone, Decimal.isDecimal = isDecimalInstance, Decimal.abs = abs, Decimal.acos = acos, Decimal.acosh = acosh, Decimal.add = add, Decimal.asin = asin, Decimal.asinh = asinh, Decimal.atan = atan, Decimal.atanh = atanh, Decimal.atan2 = atan2, Decimal.cbrt = cbrt, Decimal.ceil = ceil, Decimal.clamp = clamp, Decimal.cos = cos, Decimal.cosh = cosh, Decimal.div = div, Decimal.exp = exp, Decimal.floor = floor, Decimal.hypot = hypot, Decimal.ln = ln, Decimal.log = log, Decimal.log10 = log10, Decimal.log2 = log2, Decimal.max = max, Decimal.min = min, Decimal.mod = mod, Decimal.mul = mul, Decimal.pow = pow, Decimal.random = random, Decimal.round = round, Decimal.sign = sign, Decimal.sin = sin, Decimal.sinh = sinh, Decimal.sqrt = sqrt, Decimal.sub = sub, Decimal.sum = sum, Decimal.tan = tan, Decimal.tanh = tanh, Decimal.trunc = trunc, void 0 === obj && (obj = {}), obj && !0 !== obj.defaults) for(ps = [
                            "precision",
                            "rounding",
                            "toExpNeg",
                            "toExpPos",
                            "maxE",
                            "minE",
                            "modulo",
                            "crypto"
                        ], i = 0; i < ps.length;)obj.hasOwnProperty(p = ps[i++]) || (obj[p] = this[p]);
                        return Decimal.config(obj), Decimal;
                    }(DEFAULTS), Decimal.prototype.constructor = Decimal, Decimal.default = Decimal.Decimal = Decimal, LN10 = new Decimal(LN10), PI = new Decimal(PI), void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                        return Decimal;
                    }).call(exports, __webpack_require__, exports, module1)) || (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                }();
            },
            928: (module1)=>{
                "use strict";
                var _extends = Object.assign || function(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = arguments[i];
                        for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                    }
                    return target;
                }, defaultEscapes = {
                    "{": "\\{",
                    "}": "\\}",
                    "\\": "\\textbackslash{}",
                    "#": "\\#",
                    $: "\\$",
                    "%": "\\%",
                    "&": "\\&",
                    "^": "\\textasciicircum{}",
                    _: "\\_",
                    "~": "\\textasciitilde{}"
                }, formatEscapes = {
                    "–": "\\--",
                    "—": "\\---",
                    " ": "~",
                    "	": "\\qquad{}",
                    "\r\n": "\\newline{}",
                    "\n": "\\newline{}"
                }, defaultEscapeMapFn = function(defaultEscapes, formatEscapes) {
                    return _extends({}, defaultEscapes, formatEscapes);
                };
                module1.exports = function(str) {
                    for(var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref$preserveFormatti = _ref.preserveFormatting, preserveFormatting = void 0 !== _ref$preserveFormatti && _ref$preserveFormatti, _ref$escapeMapFn = _ref.escapeMapFn, escapeMapFn = void 0 === _ref$escapeMapFn ? defaultEscapeMapFn : _ref$escapeMapFn, runningStr = String(str), result = "", escapes = escapeMapFn(_extends({}, defaultEscapes), preserveFormatting ? _extends({}, formatEscapes) : {}), escapeKeys = Object.keys(escapes), _loop = function() {
                        var specialCharFound = !1;
                        escapeKeys.forEach(function(key, index) {
                            specialCharFound || runningStr.length >= key.length && runningStr.slice(0, key.length) === key && (result += escapes[escapeKeys[index]], runningStr = runningStr.slice(key.length, runningStr.length), specialCharFound = !0);
                        }), specialCharFound || (result += runningStr.slice(0, 1), runningStr = runningStr.slice(1, runningStr.length));
                    }; runningStr;)_loop();
                    return result;
                };
            },
            628: function(module1, exports) {
                var __WEBPACK_AMD_DEFINE_RESULT__;
                !function(root) {
                    "use strict";
                    var P = {
                        s: 1,
                        n: 0,
                        d: 1
                    };
                    function createError(name) {
                        function errorConstructor() {
                            var temp = Error.apply(this, arguments);
                            temp.name = this.name = name, this.stack = temp.stack, this.message = temp.message;
                        }
                        function IntermediateInheritor() {}
                        return IntermediateInheritor.prototype = Error.prototype, errorConstructor.prototype = new IntermediateInheritor, errorConstructor;
                    }
                    var DivisionByZero = Fraction.DivisionByZero = createError("DivisionByZero"), InvalidParameter = Fraction.InvalidParameter = createError("InvalidParameter");
                    function assign(n, s) {
                        return isNaN(n = parseInt(n, 10)) && throwInvalidParam(), n * s;
                    }
                    function throwInvalidParam() {
                        throw new InvalidParameter;
                    }
                    function factorize(num) {
                        for(var factors = {}, n = num, i = 2, s = 4; s <= n;){
                            for(; n % i == 0;)n /= i, factors[i] = (factors[i] || 0) + 1;
                            s += 1 + 2 * i++;
                        }
                        return n !== num ? n > 1 && (factors[n] = (factors[n] || 0) + 1) : factors[num] = (factors[num] || 0) + 1, factors;
                    }
                    var parse = function(p1, p2) {
                        var M, n = 0, d = 1, s = 1, v = 0, w = 0, x = 0, y = 1, z = 1, A = 0, B = 1, C = 1, D = 1, N = 1e7;
                        if (null == p1) ;
                        else if (void 0 !== p2) s = (n = p1) * (d = p2);
                        else switch(typeof p1){
                            case "object":
                                "d" in p1 && "n" in p1 ? (n = p1.n, d = p1.d, "s" in p1 && (n *= p1.s)) : 0 in p1 ? (n = p1[0], 1 in p1 && (d = p1[1])) : throwInvalidParam(), s = n * d;
                                break;
                            case "number":
                                if (p1 < 0 && (s = p1, p1 = -p1), p1 % 1 == 0) n = p1;
                                else if (p1 > 0) {
                                    for(p1 >= 1 && (p1 /= z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10))); B <= N && D <= N;){
                                        if (p1 === (M = (A + C) / (B + D))) {
                                            B + D <= N ? (n = A + C, d = B + D) : D > B ? (n = C, d = D) : (n = A, d = B);
                                            break;
                                        }
                                        p1 > M ? (A += C, B += D) : (C += A, D += B), B > N ? (n = C, d = D) : (n = A, d = B);
                                    }
                                    n *= z;
                                } else (isNaN(p1) || isNaN(p2)) && (d = n = NaN);
                                break;
                            case "string":
                                if (null === (B = p1.match(/\d+|./g)) && throwInvalidParam(), "-" === B[A] ? (s = -1, A++) : "+" === B[A] && A++, B.length === A + 1 ? w = assign(B[A++], s) : "." === B[A + 1] || "." === B[A] ? ("." !== B[A] && (v = assign(B[A++], s)), (++A + 1 === B.length || "(" === B[A + 1] && ")" === B[A + 3] || "'" === B[A + 1] && "'" === B[A + 3]) && (w = assign(B[A], s), y = Math.pow(10, B[A].length), A++), ("(" === B[A] && ")" === B[A + 2] || "'" === B[A] && "'" === B[A + 2]) && (x = assign(B[A + 1], s), z = Math.pow(10, B[A + 1].length) - 1, A += 3)) : "/" === B[A + 1] || ":" === B[A + 1] ? (w = assign(B[A], s), y = assign(B[A + 2], 1), A += 3) : "/" === B[A + 3] && " " === B[A + 1] && (v = assign(B[A], s), w = assign(B[A + 2], s), y = assign(B[A + 4], 1), A += 5), B.length <= A) {
                                    s = n = x + (d = y * z) * v + z * w;
                                    break;
                                }
                            default:
                                throwInvalidParam();
                        }
                        if (0 === d) throw new DivisionByZero;
                        P.s = s < 0 ? -1 : 1, P.n = Math.abs(n), P.d = Math.abs(d);
                    };
                    function gcd(a, b) {
                        if (!a) return b;
                        if (!b) return a;
                        for(;;){
                            if (!(a %= b)) return b;
                            if (!(b %= a)) return a;
                        }
                    }
                    function Fraction(a, b) {
                        if (!(this instanceof Fraction)) return new Fraction(a, b);
                        parse(a, b), a = gcd(P.d, P.n), this.s = P.s, this.n = P.n / a, this.d = P.d / a;
                    }
                    Fraction.prototype = {
                        s: 1,
                        n: 0,
                        d: 1,
                        abs: function() {
                            return new Fraction(this.n, this.d);
                        },
                        neg: function() {
                            return new Fraction(-this.s * this.n, this.d);
                        },
                        add: function(a, b) {
                            return parse(a, b), new Fraction(this.s * this.n * P.d + P.s * this.d * P.n, this.d * P.d);
                        },
                        sub: function(a, b) {
                            return parse(a, b), new Fraction(this.s * this.n * P.d - P.s * this.d * P.n, this.d * P.d);
                        },
                        mul: function(a, b) {
                            return parse(a, b), new Fraction(this.s * P.s * this.n * P.n, this.d * P.d);
                        },
                        div: function(a, b) {
                            return parse(a, b), new Fraction(this.s * P.s * this.n * P.d, this.d * P.n);
                        },
                        clone: function() {
                            return new Fraction(this);
                        },
                        mod: function(a, b) {
                            return isNaN(this.n) || isNaN(this.d) ? new Fraction(NaN) : void 0 === a ? new Fraction(this.s * this.n % this.d, 1) : (parse(a, b), 0 === P.n && 0 === this.d && Fraction(0, 0), new Fraction(this.s * (P.d * this.n) % (P.n * this.d), P.d * this.d));
                        },
                        gcd: function(a, b) {
                            return parse(a, b), new Fraction(gcd(P.n, this.n) * gcd(P.d, this.d), P.d * this.d);
                        },
                        lcm: function(a, b) {
                            return parse(a, b), 0 === P.n && 0 === this.n ? new Fraction : new Fraction(P.n * this.n, gcd(P.n, this.n) * gcd(P.d, this.d));
                        },
                        ceil: function(places) {
                            return places = Math.pow(10, places || 0), isNaN(this.n) || isNaN(this.d) ? new Fraction(NaN) : new Fraction(Math.ceil(places * this.s * this.n / this.d), places);
                        },
                        floor: function(places) {
                            return places = Math.pow(10, places || 0), isNaN(this.n) || isNaN(this.d) ? new Fraction(NaN) : new Fraction(Math.floor(places * this.s * this.n / this.d), places);
                        },
                        round: function(places) {
                            return places = Math.pow(10, places || 0), isNaN(this.n) || isNaN(this.d) ? new Fraction(NaN) : new Fraction(Math.round(places * this.s * this.n / this.d), places);
                        },
                        inverse: function() {
                            return new Fraction(this.s * this.d, this.n);
                        },
                        pow: function(a, b) {
                            if (parse(a, b), 1 === P.d) return P.s < 0 ? new Fraction(Math.pow(this.s * this.d, P.n), Math.pow(this.n, P.n)) : new Fraction(Math.pow(this.s * this.n, P.n), Math.pow(this.d, P.n));
                            if (this.s < 0) return null;
                            var N = factorize(this.n), D = factorize(this.d), n = 1, d = 1;
                            for(var k in N)if ("1" !== k) {
                                if ("0" === k) {
                                    n = 0;
                                    break;
                                }
                                if (N[k] *= P.n, N[k] % P.d != 0) return null;
                                N[k] /= P.d, n *= Math.pow(k, N[k]);
                            }
                            for(var k in D)if ("1" !== k) {
                                if (D[k] *= P.n, D[k] % P.d != 0) return null;
                                D[k] /= P.d, d *= Math.pow(k, D[k]);
                            }
                            return P.s < 0 ? new Fraction(d, n) : new Fraction(n, d);
                        },
                        equals: function(a, b) {
                            return parse(a, b), this.s * this.n * P.d == P.s * P.n * this.d;
                        },
                        compare: function(a, b) {
                            parse(a, b);
                            var t = this.s * this.n * P.d - P.s * P.n * this.d;
                            return (0 < t) - (t < 0);
                        },
                        simplify: function(eps) {
                            if (isNaN(this.n) || isNaN(this.d)) return this;
                            var cont = this.abs().toContinued();
                            function rec(a) {
                                return 1 === a.length ? new Fraction(a[0]) : rec(a.slice(1)).inverse().add(a[0]);
                            }
                            eps = eps || .001;
                            for(var i = 0; i < cont.length; i++){
                                var tmp = rec(cont.slice(0, i + 1));
                                if (tmp.sub(this.abs()).abs().valueOf() < eps) return tmp.mul(this.s);
                            }
                            return this;
                        },
                        divisible: function(a, b) {
                            return parse(a, b), !(!(P.n * this.d) || this.n * P.d % (P.n * this.d));
                        },
                        valueOf: function() {
                            return this.s * this.n / this.d;
                        },
                        toFraction: function(excludeWhole) {
                            var whole, str = "", n = this.n, d = this.d;
                            return this.s < 0 && (str += "-"), 1 === d ? str += n : (excludeWhole && (whole = Math.floor(n / d)) > 0 && (str += whole, str += " ", n %= d), str += n, str += "/", str += d), str;
                        },
                        toLatex: function(excludeWhole) {
                            var whole, str = "", n = this.n, d = this.d;
                            return this.s < 0 && (str += "-"), 1 === d ? str += n : (excludeWhole && (whole = Math.floor(n / d)) > 0 && (str += whole, n %= d), str += "\\frac{", str += n, str += "}{", str += d, str += "}"), str;
                        },
                        toContinued: function() {
                            var t, a = this.n, b = this.d, res = [];
                            if (isNaN(a) || isNaN(b)) return res;
                            do res.push(Math.floor(a / b)), t = a % b, a = b, b = t;
                            while (1 !== a);
                            return res;
                        },
                        toString: function(dec) {
                            var N = this.n, D = this.d;
                            if (isNaN(N) || isNaN(D)) return "NaN";
                            dec = dec || 15;
                            var cycLen = function(n, d) {
                                for(; d % 2 == 0; d /= 2);
                                for(; d % 5 == 0; d /= 5);
                                if (1 === d) return 0;
                                for(var rem = 10 % d, t = 1; 1 !== rem; t++)if (rem = 10 * rem % d, t > 2e3) return 0;
                                return t;
                            }(0, D), cycOff = function(n, d, len) {
                                for(var rem1 = 1, rem2 = function(b, e, m) {
                                    for(var r = 1; e > 0; b = b * b % m, e >>= 1)1 & e && (r = r * b % m);
                                    return r;
                                }(10, len, d), t = 0; t < 300; t++){
                                    if (rem1 === rem2) return t;
                                    rem1 = 10 * rem1 % d, rem2 = 10 * rem2 % d;
                                }
                                return 0;
                            }(0, D, cycLen), str = -1 === this.s ? "-" : "";
                            if (str += N / D | 0, N %= D, (N *= 10) && (str += "."), cycLen) {
                                for(var i = cycOff; i--;)str += N / D | 0, N %= D, N *= 10;
                                str += "(";
                                for(i = cycLen; i--;)str += N / D | 0, N %= D, N *= 10;
                                str += ")";
                            } else for(i = dec; N && i--;)str += N / D | 0, N %= D, N *= 10;
                            return str;
                        }
                    }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                        return Fraction;
                    }).apply(exports, [])) || (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
                }();
            },
            279: (module1)=>{
                function E() {}
                E.prototype = {
                    on: function(name, callback, ctx) {
                        var e = this.e || (this.e = {});
                        return (e[name] || (e[name] = [])).push({
                            fn: callback,
                            ctx
                        }), this;
                    },
                    once: function(name, callback, ctx) {
                        var self = this;
                        function listener() {
                            self.off(name, listener), callback.apply(ctx, arguments);
                        }
                        return listener._ = callback, this.on(name, listener, ctx);
                    },
                    emit: function(name) {
                        for(var data = [].slice.call(arguments, 1), evtArr = ((this.e || (this.e = {}))[name] || []).slice(), i = 0, len = evtArr.length; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
                        return this;
                    },
                    off: function(name, callback) {
                        var e = this.e || (this.e = {}), evts = e[name], liveEvents = [];
                        if (evts && callback) for(var i = 0, len = evts.length; i < len; i++)evts[i].fn !== callback && evts[i].fn._ !== callback && liveEvents.push(evts[i]);
                        return liveEvents.length ? e[name] = liveEvents : delete e[name], this;
                    }
                }, module1.exports = E, module1.exports.TinyEmitter = E;
            },
            961: (__unused_webpack_module, __webpack_exports__, __webpack_require__)=>{
                "use strict";
                var enums_MessageType, Resolution, ErrorCode, NativeErrorName, enums_NativeEventType;
                __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                    Alignment: ()=>Alignment,
                    BasicAnimationsEmphasisStyles: ()=>BasicAnimationsEmphasisStyles,
                    BlendMode: ()=>BlendMode,
                    BlendModes: ()=>BlendModes,
                    Case: ()=>Case,
                    ColorType: ()=>ColorType,
                    ColorUsageType: ()=>ColorUsageType,
                    DownloadFormats: ()=>DownloadFormats,
                    EaseTypes: ()=>EaseTypes,
                    FitMode: ()=>FitMode,
                    FlowDirection: ()=>FlowDirection,
                    FontWeights: ()=>FontWeights,
                    FrameProperyNames: ()=>FrameProperyNames,
                    FrameTypeEnum: ()=>FrameTypeEnum,
                    LayoutProperyNames: ()=>LayoutProperyNames,
                    LayoutType: ()=>LayoutType,
                    MediaDownloadType: ()=>MediaDownloadType,
                    MediaType: ()=>MediaType,
                    SDK: ()=>SDK,
                    Scripting: ()=>Scripting,
                    SelectedTextStyleSections: ()=>SelectedTextStyleSections,
                    SelectedTextStyles: ()=>SelectedTextStyles,
                    ShakeDirections: ()=>ShakeDirections,
                    SlideDirections: ()=>SlideDirections,
                    TextDirection: ()=>TextDirection,
                    TextPosition: ()=>TextPosition,
                    ToolType: ()=>ToolType,
                    TweenTypes: ()=>TweenTypes,
                    VariableType: ()=>VariableType,
                    VerticalAlign: ()=>VerticalAlign,
                    WellKnownConfigurationKeys: ()=>WellKnownConfigurationKeys,
                    default: ()=>src
                }), function(MessageType) {
                    MessageType.Call = "call", MessageType.Reply = "reply", MessageType.Syn = "syn", MessageType.SynAck = "synAck", MessageType.Ack = "ack";
                }(enums_MessageType || (enums_MessageType = {})), function(Resolution) {
                    Resolution.Fulfilled = "fulfilled", Resolution.Rejected = "rejected";
                }(Resolution || (Resolution = {})), function(ErrorCode) {
                    ErrorCode.ConnectionDestroyed = "ConnectionDestroyed", ErrorCode.ConnectionTimeout = "ConnectionTimeout", ErrorCode.NoIframeSrc = "NoIframeSrc";
                }(ErrorCode || (ErrorCode = {})), function(NativeErrorName) {
                    NativeErrorName.DataCloneError = "DataCloneError";
                }(NativeErrorName || (NativeErrorName = {})), function(NativeEventType) {
                    NativeEventType.Message = "message";
                }(enums_NativeEventType || (enums_NativeEventType = {}));
                const DEFAULT_PORT_BY_PROTOCOL = {
                    "http:": "80",
                    "https:": "443"
                }, URL_REGEX = /^(https?:)?\/\/([^/:]+)?(:(\d+))?/, opaqueOriginSchemes = [
                    "file:",
                    "data:"
                ], serializeError = ({ name , message , stack  })=>({
                        name,
                        message,
                        stack
                    });
                let id = 0;
                const generateId = ()=>++id, keyPathToSegments = (keyPath)=>keyPath ? keyPath.split(".") : [], setAtKeyPath = (subject, keyPath, value)=>{
                    const segments = keyPathToSegments(keyPath);
                    return segments.reduce((prevSubject, key, idx)=>(void 0 === prevSubject[key] && (prevSubject[key] = {}), idx === segments.length - 1 && (prevSubject[key] = value), prevSubject[key]), subject), subject;
                }, methodSerialization_serializeMethods = (methods, prefix)=>{
                    const flattenedMethods = {};
                    return Object.keys(methods).forEach((key)=>{
                        const value = methods[key], keyPath = ((key, prefix)=>{
                            const segments = keyPathToSegments(prefix || "");
                            return segments.push(key), ((segments)=>segments.join("."))(segments);
                        })(key, prefix);
                        "object" == typeof value && Object.assign(flattenedMethods, methodSerialization_serializeMethods(value, keyPath)), "function" == typeof value && (flattenedMethods[keyPath] = value);
                    }), flattenedMethods;
                }, lib_connectCallSender = (callSender, info, methodKeyPaths, destroyConnection, log)=>{
                    const { localName , local , remote , originForSending , originForReceiving  } = info;
                    let destroyed = !1;
                    log(`${localName}: Connecting call sender`);
                    const createMethodProxy = (methodName)=>(...args)=>{
                            let iframeRemoved;
                            log(`${localName}: Sending ${methodName}() call`);
                            try {
                                remote.closed && (iframeRemoved = !0);
                            } catch (e) {
                                iframeRemoved = !0;
                            }
                            if (iframeRemoved && destroyConnection(), destroyed) {
                                const error = new Error(`Unable to send ${methodName}() call due to destroyed connection`);
                                throw error.code = ErrorCode.ConnectionDestroyed, error;
                            }
                            return new Promise((resolve, reject)=>{
                                const id = generateId(), handleMessageEvent = (event)=>{
                                    if (event.source !== remote || event.data.penpal !== enums_MessageType.Reply || event.data.id !== id) return;
                                    if (event.origin !== originForReceiving) return void log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
                                    const replyMessage = event.data;
                                    log(`${localName}: Received ${methodName}() reply`), local.removeEventListener(enums_NativeEventType.Message, handleMessageEvent);
                                    let returnValue = replyMessage.returnValue;
                                    replyMessage.returnValueIsError && (returnValue = ((obj)=>{
                                        const deserializedError = new Error;
                                        return Object.keys(obj).forEach((key)=>deserializedError[key] = obj[key]), deserializedError;
                                    })(returnValue)), (replyMessage.resolution === Resolution.Fulfilled ? resolve : reject)(returnValue);
                                };
                                local.addEventListener(enums_NativeEventType.Message, handleMessageEvent);
                                const callMessage = {
                                    penpal: enums_MessageType.Call,
                                    id,
                                    methodName,
                                    args
                                };
                                remote.postMessage(callMessage, originForSending);
                            });
                        }, flattenedMethods = methodKeyPaths.reduce((api, name)=>(api[name] = createMethodProxy(name), api), {});
                    return Object.assign(callSender, ((flattenedMethods)=>{
                        const methods = {};
                        for(const keyPath in flattenedMethods)setAtKeyPath(methods, keyPath, flattenedMethods[keyPath]);
                        return methods;
                    })(flattenedMethods)), ()=>{
                        destroyed = !0;
                    };
                }, handleAckMessageFactory = (serializedMethods, childOrigin, originForSending, destructor, log)=>{
                    const { destroy , onDestroy  } = destructor;
                    let destroyCallReceiver, receiverMethodNames;
                    const callSender = {};
                    return (event)=>{
                        if (event.origin !== childOrigin) return void log(`Parent: Handshake - Received ACK message from origin ${event.origin} which did not match expected origin ${childOrigin}`);
                        log("Parent: Handshake - Received ACK");
                        const info = {
                            localName: "Parent",
                            local: window,
                            remote: event.source,
                            originForSending,
                            originForReceiving: childOrigin
                        };
                        destroyCallReceiver && destroyCallReceiver(), destroyCallReceiver = ((info, serializedMethods, log)=>{
                            const { localName , local , remote , originForSending , originForReceiving  } = info;
                            let destroyed = !1;
                            const handleMessageEvent = (event)=>{
                                if (event.source !== remote || event.data.penpal !== enums_MessageType.Call) return;
                                if (event.origin !== originForReceiving) return void log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
                                const callMessage = event.data, { methodName , args , id  } = callMessage;
                                log(`${localName}: Received ${methodName}() call`);
                                const createPromiseHandler = (resolution)=>(returnValue)=>{
                                        if (log(`${localName}: Sending ${methodName}() reply`), destroyed) return void log(`${localName}: Unable to send ${methodName}() reply due to destroyed connection`);
                                        const message = {
                                            penpal: enums_MessageType.Reply,
                                            id,
                                            resolution,
                                            returnValue
                                        };
                                        resolution === Resolution.Rejected && returnValue instanceof Error && (message.returnValue = serializeError(returnValue), message.returnValueIsError = !0);
                                        try {
                                            remote.postMessage(message, originForSending);
                                        } catch (err) {
                                            if (err.name === NativeErrorName.DataCloneError) {
                                                const errorReplyMessage = {
                                                    penpal: enums_MessageType.Reply,
                                                    id,
                                                    resolution: Resolution.Rejected,
                                                    returnValue: serializeError(err),
                                                    returnValueIsError: !0
                                                };
                                                remote.postMessage(errorReplyMessage, originForSending);
                                            }
                                            throw err;
                                        }
                                    };
                                new Promise((resolve)=>resolve(serializedMethods[methodName].apply(serializedMethods, args))).then(createPromiseHandler(Resolution.Fulfilled), createPromiseHandler(Resolution.Rejected));
                            };
                            return local.addEventListener(enums_NativeEventType.Message, handleMessageEvent), ()=>{
                                destroyed = !0, local.removeEventListener(enums_NativeEventType.Message, handleMessageEvent);
                            };
                        })(info, serializedMethods, log), onDestroy(destroyCallReceiver), receiverMethodNames && receiverMethodNames.forEach((receiverMethodName)=>{
                            delete callSender[receiverMethodName];
                        }), receiverMethodNames = event.data.methodNames;
                        const destroyCallSender = lib_connectCallSender(callSender, info, receiverMethodNames, destroy, log);
                        return onDestroy(destroyCallSender), callSender;
                    };
                }, connectToChild = (options)=>{
                    let { iframe , methods ={} , childOrigin , timeout , debug =!1  } = options;
                    const log = ((debug)=>(...args)=>{
                            debug && console.log("[Penpal]", ...args);
                        })(debug), destructor = ((localName, log)=>{
                        const callbacks = [];
                        let destroyed = !1;
                        return {
                            destroy (error) {
                                destroyed || (destroyed = !0, log(`${localName}: Destroying connection`), callbacks.forEach((callback)=>{
                                    callback(error);
                                }));
                            },
                            onDestroy (callback) {
                                destroyed ? callback() : callbacks.push(callback);
                            }
                        };
                    })("Parent", log), { onDestroy , destroy  } = destructor;
                    childOrigin || (((iframe)=>{
                        if (!iframe.src && !iframe.srcdoc) {
                            const error = new Error("Iframe must have src or srcdoc property defined.");
                            throw error.code = ErrorCode.NoIframeSrc, error;
                        }
                    })(iframe), childOrigin = ((src)=>{
                        if (src && opaqueOriginSchemes.find((scheme)=>src.startsWith(scheme))) return "null";
                        const location = document.location, regexResult = URL_REGEX.exec(src);
                        let protocol, hostname, port;
                        return regexResult ? (protocol = regexResult[1] ? regexResult[1] : location.protocol, hostname = regexResult[2], port = regexResult[4]) : (protocol = location.protocol, hostname = location.hostname, port = location.port), `${protocol}//${hostname}${port && port !== DEFAULT_PORT_BY_PROTOCOL[protocol] ? `:${port}` : ""}`;
                    })(iframe.src));
                    const originForSending = "null" === childOrigin ? "*" : childOrigin, serializedMethods = methodSerialization_serializeMethods(methods), handleSynMessage = ((log, serializedMethods, childOrigin, originForSending)=>(event)=>{
                            if (event.origin !== childOrigin) return void log(`Parent: Handshake - Received SYN message from origin ${event.origin} which did not match expected origin ${childOrigin}`);
                            log("Parent: Handshake - Received SYN, responding with SYN-ACK");
                            const synAckMessage = {
                                penpal: enums_MessageType.SynAck,
                                methodNames: Object.keys(serializedMethods)
                            };
                            event.source.postMessage(synAckMessage, originForSending);
                        })(log, serializedMethods, childOrigin, originForSending), handleAckMessage = handleAckMessageFactory(serializedMethods, childOrigin, originForSending, destructor, log), promise = new Promise((resolve, reject)=>{
                        const stopConnectionTimeout = ((timeout, callback)=>{
                            let timeoutId;
                            return void 0 !== timeout && (timeoutId = window.setTimeout(()=>{
                                const error = new Error(`Connection timed out after ${timeout}ms`);
                                error.code = ErrorCode.ConnectionTimeout, callback(error);
                            }, timeout)), ()=>{
                                clearTimeout(timeoutId);
                            };
                        })(timeout, destroy), handleMessage = (event)=>{
                            if (event.source === iframe.contentWindow && event.data) {
                                if (event.data.penpal !== enums_MessageType.Syn) {
                                    if (event.data.penpal !== enums_MessageType.Ack) ;
                                    else {
                                        const callSender = handleAckMessage(event);
                                        callSender && (stopConnectionTimeout(), resolve(callSender));
                                    }
                                } else handleSynMessage(event);
                            }
                        };
                        window.addEventListener(enums_NativeEventType.Message, handleMessage), log("Parent: Awaiting handshake"), ((iframe, destructor)=>{
                            const { destroy , onDestroy  } = destructor, checkIframeInDocIntervalId = setInterval(()=>{
                                iframe.isConnected || (clearInterval(checkIframeInDocIntervalId), destroy());
                            }, 6e4);
                            onDestroy(()=>{
                                clearInterval(checkIframeInDocIntervalId);
                            });
                        })(iframe, destructor), onDestroy((error)=>{
                            window.removeEventListener(enums_NativeEventType.Message, handleMessage), error && reject(error);
                        });
                    });
                    return {
                        promise,
                        destroy () {
                            destroy();
                        }
                    };
                }, setupFrame = (iframe, editorLink)=>{
                    const link = ((editorLink)=>{
                        let link = "";
                        return new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w]+\/$/).test(editorLink) ? link = editorLink : editorLink.indexOf("/index.html") > -1 ? link = editorLink.replace("/index.html", "/") : "/" !== editorLink.charAt(-1) && (link = `${editorLink}/`), link;
                    })(editorLink), html = `<html>\n    <head>\n      <base href="/" />\n      <meta charset="UTF-8"/>    \n      \x3c!--  use this property to override the location of assets like 'default fonts' and demo document --\x3e\n      <meta name="assetBase" content="${link}">\n    </head>\n    <body> \n    <script async src="${link}init.js"><\/script>\n    <script async src="https://unpkg.com/penpal@6.1.0/dist/penpal.min.js"><\/script>\n    <script async src="${link}main.dart.js"><\/script>     \n    </body>\n    </html>\n    `;
                    iframe.srcdoc = "test";
                    let iframeDoc = iframe.ownerDocument;
                    iframe.contentWindow && (iframeDoc = iframe.contentWindow.document), iframeDoc.open(), iframeDoc.write(html), iframeDoc.close();
                }, connector = (editorLink, params, setConnection, editorId = "chili-editor")=>{
                    const editorSelectorId = `#${editorId}`, iframe = document.createElement("iframe");
                    iframe.setAttribute("srcdoc", " "), iframe.setAttribute("title", "Chili-Editor"), iframe.setAttribute("style", "width: 100%; height: 100%;"), iframe.setAttribute("frameBorder", "0"), iframe.setAttribute("referrerpolicy", "origin");
                    const setupNewFrame = ()=>{
                        const iframeContainer = document.querySelector(editorSelectorId);
                        iframeContainer && (null == iframeContainer || iframeContainer.appendChild(iframe), setupFrame(iframe, editorLink));
                    };
                    "complete" === document.readyState || "interactive" === document.readyState ? setupNewFrame() : document.addEventListener("DOMContentLoaded", ()=>{
                        setupNewFrame();
                    }), setConnection(connectToChild({
                        iframe,
                        methods: {
                            stateChanged: params.onStateChanged,
                            selectedFrameContent: params.onSelectedFrameContentChanged,
                            selectedFrameLayout: params.onSelectedFrameLayoutChanged,
                            selectedLayoutProperties: params.onSelectedLayoutPropertiesChanged,
                            openLayoutPropertiesPanel: params.onPageSelectionChanged,
                            scrubberPositionChanged: params.onScrubberPositionChanged,
                            frameAnimationsChanged: params.onFrameAnimationsChanged,
                            selectedToolChanged: params.onSelectedToolChanged,
                            variableListChanged: params.onVariableListChanged,
                            undoStackStateChanged: params.onUndoStateChanged,
                            selectedLayoutFramesChanged: params.onSelectedLayoutFramesChanged,
                            selectedTextStyleChanged: params.onSelectedTextStyleChanged,
                            colorsChanged: params.onColorsChanged,
                            paragraphStylesChanged: params.onParagraphStylesChanged,
                            characterStylesChanged: params.onCharacterStylesChanged,
                            fontsChanged: params.onFontsChanged,
                            selectedLayoutId: params.onSelectedLayoutIdChanged,
                            layoutListChanged: params.onLayoutsChanged
                        }
                    }));
                };
                function _extends() {
                    return _extends = Object.assign || function(target) {
                        for(var i = 1; i < arguments.length; i++){
                            var source = arguments[i];
                            for(var key in source)Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                        }
                        return target;
                    }, _extends.apply(this, arguments);
                }
                function isNumber(x) {
                    return "number" == typeof x;
                }
                function isBigNumber(x) {
                    return !(!x || "object" != typeof x || "function" != typeof x.constructor) && (!0 === x.isBigNumber && "object" == typeof x.constructor.prototype && !0 === x.constructor.prototype.isBigNumber || "function" == typeof x.constructor.isDecimal && !0 === x.constructor.isDecimal(x));
                }
                function isComplex(x) {
                    return x && "object" == typeof x && !0 === Object.getPrototypeOf(x).isComplex || !1;
                }
                function isFraction(x) {
                    return x && "object" == typeof x && !0 === Object.getPrototypeOf(x).isFraction || !1;
                }
                function isUnit(x) {
                    return x && !0 === x.constructor.prototype.isUnit || !1;
                }
                function is_isString(x) {
                    return "string" == typeof x;
                }
                var isArray = Array.isArray;
                function is_isMatrix(x) {
                    return x && !0 === x.constructor.prototype.isMatrix || !1;
                }
                function is_isCollection(x) {
                    return Array.isArray(x) || is_isMatrix(x);
                }
                function isDenseMatrix(x) {
                    return x && x.isDenseMatrix && !0 === x.constructor.prototype.isMatrix || !1;
                }
                function isSparseMatrix(x) {
                    return x && x.isSparseMatrix && !0 === x.constructor.prototype.isMatrix || !1;
                }
                function isRange(x) {
                    return x && !0 === x.constructor.prototype.isRange || !1;
                }
                function isIndex(x) {
                    return x && !0 === x.constructor.prototype.isIndex || !1;
                }
                function isBoolean(x) {
                    return "boolean" == typeof x;
                }
                function isResultSet(x) {
                    return x && !0 === x.constructor.prototype.isResultSet || !1;
                }
                function isHelp(x) {
                    return x && !0 === x.constructor.prototype.isHelp || !1;
                }
                function isFunction(x) {
                    return "function" == typeof x;
                }
                function isDate(x) {
                    return x instanceof Date;
                }
                function isRegExp(x) {
                    return x instanceof RegExp;
                }
                function isObject(x) {
                    return !(!x || "object" != typeof x || x.constructor !== Object || isComplex(x) || isFraction(x));
                }
                function isNull(x) {
                    return null === x;
                }
                function isUndefined(x) {
                    return void 0 === x;
                }
                function isAccessorNode(x) {
                    return x && !0 === x.isAccessorNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isArrayNode(x) {
                    return x && !0 === x.isArrayNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isAssignmentNode(x) {
                    return x && !0 === x.isAssignmentNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isBlockNode(x) {
                    return x && !0 === x.isBlockNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isConditionalNode(x) {
                    return x && !0 === x.isConditionalNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isConstantNode(x) {
                    return x && !0 === x.isConstantNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isFunctionAssignmentNode(x) {
                    return x && !0 === x.isFunctionAssignmentNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isFunctionNode(x) {
                    return x && !0 === x.isFunctionNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isIndexNode(x) {
                    return x && !0 === x.isIndexNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isNode(x) {
                    return x && !0 === x.isNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isObjectNode(x) {
                    return x && !0 === x.isObjectNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isOperatorNode(x) {
                    return x && !0 === x.isOperatorNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isParenthesisNode(x) {
                    return x && !0 === x.isParenthesisNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isRangeNode(x) {
                    return x && !0 === x.isRangeNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isSymbolNode(x) {
                    return x && !0 === x.isSymbolNode && !0 === x.constructor.prototype.isNode || !1;
                }
                function isChain(x) {
                    return x && !0 === x.constructor.prototype.isChain || !1;
                }
                function is_typeOf(x) {
                    var t = typeof x;
                    return "object" === t ? null === x ? "null" : Array.isArray(x) ? "Array" : x instanceof Date ? "Date" : x instanceof RegExp ? "RegExp" : isBigNumber(x) ? "BigNumber" : isComplex(x) ? "Complex" : isFraction(x) ? "Fraction" : is_isMatrix(x) ? "Matrix" : isUnit(x) ? "Unit" : isIndex(x) ? "Index" : isRange(x) ? "Range" : isResultSet(x) ? "ResultSet" : isNode(x) ? x.type : isChain(x) ? "Chain" : isHelp(x) ? "Help" : "Object" : "function" === t ? "Function" : t;
                }
                function clone(x) {
                    var type = typeof x;
                    if ("number" === type || "string" === type || "boolean" === type || null == x) return x;
                    if ("function" == typeof x.clone) return x.clone();
                    if (Array.isArray(x)) return x.map(function(value) {
                        return clone(value);
                    });
                    if (x instanceof Date) return new Date(x.valueOf());
                    if (isBigNumber(x)) return x;
                    if (x instanceof RegExp) throw new TypeError("Cannot clone " + x);
                    return mapObject(x, clone);
                }
                function mapObject(object, callback) {
                    var clone = {};
                    for(var key in object)object_hasOwnProperty(object, key) && (clone[key] = callback(object[key]));
                    return clone;
                }
                function extend(a, b) {
                    for(var prop in b)object_hasOwnProperty(b, prop) && (a[prop] = b[prop]);
                    return a;
                }
                function deepExtend(a, b) {
                    if (Array.isArray(b)) throw new TypeError("Arrays are not supported by deepExtend");
                    for(var prop in b)if (object_hasOwnProperty(b, prop) && !(prop in Object.prototype) && !(prop in Function.prototype)) {
                        if (b[prop] && b[prop].constructor === Object) void 0 === a[prop] && (a[prop] = {}), a[prop] && a[prop].constructor === Object ? deepExtend(a[prop], b[prop]) : a[prop] = b[prop];
                        else {
                            if (Array.isArray(b[prop])) throw new TypeError("Arrays are not supported by deepExtend");
                            a[prop] = b[prop];
                        }
                    }
                    return a;
                }
                function deepStrictEqual(a, b) {
                    var prop, i, len;
                    if (Array.isArray(a)) {
                        if (!Array.isArray(b)) return !1;
                        if (a.length !== b.length) return !1;
                        for(i = 0, len = a.length; i < len; i++)if (!deepStrictEqual(a[i], b[i])) return !1;
                        return !0;
                    }
                    if ("function" == typeof a) return a === b;
                    if (a instanceof Object) {
                        if (Array.isArray(b) || !(b instanceof Object)) return !1;
                        for(prop in a)if (!(prop in b) || !deepStrictEqual(a[prop], b[prop])) return !1;
                        for(prop in b)if (!(prop in a)) return !1;
                        return !0;
                    }
                    return a === b;
                }
                function deepFlatten(nestedObject) {
                    var flattenedObject = {};
                    return _deepFlatten(nestedObject, flattenedObject), flattenedObject;
                }
                function _deepFlatten(nestedObject, flattenedObject) {
                    for(var prop in nestedObject)if (object_hasOwnProperty(nestedObject, prop)) {
                        var value = nestedObject[prop];
                        "object" == typeof value && null !== value ? _deepFlatten(value, flattenedObject) : flattenedObject[prop] = value;
                    }
                }
                function lazy(object, prop, valueResolver) {
                    var _value, _uninitialized = !0;
                    Object.defineProperty(object, prop, {
                        get: function() {
                            return _uninitialized && (_value = valueResolver(), _uninitialized = !1), _value;
                        },
                        set: function(value) {
                            _value = value, _uninitialized = !1;
                        },
                        configurable: !0,
                        enumerable: !0
                    });
                }
                function object_hasOwnProperty(object, property) {
                    return object && Object.hasOwnProperty.call(object, property);
                }
                function values(object) {
                    return Object.keys(object).map((key)=>object[key]);
                }
                var tiny_emitter = __webpack_require__(279);
                function factory_factory(name, dependencies, create, meta) {
                    function assertAndCreate(scope) {
                        var deps = function(object, properties) {
                            for(var copy = {}, i = 0; i < properties.length; i++){
                                var key = properties[i], value = object[key];
                                void 0 !== value && (copy[key] = value);
                            }
                            return copy;
                        }(scope, dependencies.map(stripOptionalNotation));
                        return function(name, dependencies, scope) {
                            if (!dependencies.filter((dependency)=>!function(dependency) {
                                    return dependency && "?" === dependency[0];
                                }(dependency)).every((dependency)=>void 0 !== scope[dependency])) {
                                var missingDependencies = dependencies.filter((dependency)=>void 0 === scope[dependency]);
                                throw new Error('Cannot create function "'.concat(name, '", ') + "some dependencies are missing: ".concat(missingDependencies.map((d)=>'"'.concat(d, '"')).join(", "), "."));
                            }
                        }(name, dependencies, scope), create(deps);
                    }
                    return assertAndCreate.isFactory = !0, assertAndCreate.fn = name, assertAndCreate.dependencies = dependencies.slice().sort(), meta && (assertAndCreate.meta = meta), assertAndCreate;
                }
                function isFactory(obj) {
                    return "function" == typeof obj && "string" == typeof obj.fn && Array.isArray(obj.dependencies);
                }
                function stripOptionalNotation(dependency) {
                    return dependency && "?" === dependency[0] ? dependency.slice(1) : dependency;
                }
                function isInteger(value) {
                    return "boolean" == typeof value || !!isFinite(value) && value === Math.round(value);
                }
                var sign = Math.sign || function(x) {
                    return x > 0 ? 1 : x < 0 ? -1 : 0;
                };
                Math.log2, Math.log10, Math.log1p, Math.cbrt, Math.expm1;
                function formatNumberToBase(n, base, size) {
                    var prefix = {
                        2: "0b",
                        8: "0o",
                        16: "0x"
                    }[base], suffix = "";
                    if (size) {
                        if (size < 1) throw new Error("size must be in greater than 0");
                        if (!isInteger(size)) throw new Error("size must be an integer");
                        if (n > 2 ** (size - 1) - 1 || n < -(2 ** (size - 1))) throw new Error("Value must be in range [-2^".concat(size - 1, ", 2^").concat(size - 1, "-1]"));
                        if (!isInteger(n)) throw new Error("Value must be an integer");
                        n < 0 && (n += 2 ** size), suffix = "i".concat(size);
                    }
                    var sign = "";
                    return n < 0 && (n = -n, sign = "-"), "".concat(sign).concat(prefix).concat(n.toString(base)).concat(suffix);
                }
                function format(value, options) {
                    if ("function" == typeof options) return options(value);
                    if (value === 1 / 0) return "Infinity";
                    if (value === -1 / 0) return "-Infinity";
                    if (isNaN(value)) return "NaN";
                    var precision, wordSize, notation = "auto";
                    if (options && (options.notation && (notation = options.notation), isNumber(options) ? precision = options : isNumber(options.precision) && (precision = options.precision), options.wordSize && "number" != typeof (wordSize = options.wordSize))) throw new Error('Option "wordSize" must be a number');
                    switch(notation){
                        case "fixed":
                            return toFixed(value, precision);
                        case "exponential":
                            return toExponential(value, precision);
                        case "engineering":
                            return function(value, precision) {
                                if (isNaN(value) || !isFinite(value)) return String(value);
                                var rounded = roundDigits(splitNumber(value), precision), e = rounded.exponent, c = rounded.coefficients, newExp = e % 3 == 0 ? e : e < 0 ? e - 3 - e % 3 : e - e % 3;
                                if (isNumber(precision)) for(; precision > c.length || e - newExp + 1 > c.length;)c.push(0);
                                else for(var missingZeros = Math.abs(e - newExp) - (c.length - 1), i = 0; i < missingZeros; i++)c.push(0);
                                var expDiff = Math.abs(e - newExp), decimalIdx = 1;
                                for(; expDiff > 0;)decimalIdx++, expDiff--;
                                var decimals = c.slice(decimalIdx).join(""), decimalVal = isNumber(precision) && decimals.length || decimals.match(/[1-9]/) ? "." + decimals : "", str = c.slice(0, decimalIdx).join("") + decimalVal + "e" + (e >= 0 ? "+" : "") + newExp.toString();
                                return rounded.sign + str;
                            }(value, precision);
                        case "bin":
                            return formatNumberToBase(value, 2, wordSize);
                        case "oct":
                            return formatNumberToBase(value, 8, wordSize);
                        case "hex":
                            return formatNumberToBase(value, 16, wordSize);
                        case "auto":
                            return (function(value, precision, options) {
                                if (isNaN(value) || !isFinite(value)) return String(value);
                                var lowerExp = options && void 0 !== options.lowerExp ? options.lowerExp : -3, upperExp = options && void 0 !== options.upperExp ? options.upperExp : 5, split = splitNumber(value), rounded = precision ? roundDigits(split, precision) : split;
                                if (rounded.exponent < lowerExp || rounded.exponent >= upperExp) return toExponential(value, precision);
                                var c = rounded.coefficients, e = rounded.exponent;
                                c.length < precision && (c = c.concat(zeros(precision - c.length))), c = c.concat(zeros(e - c.length + 1 + (c.length < precision ? precision - c.length : 0)));
                                var dot = e > 0 ? e : 0;
                                return dot < (c = zeros(-e).concat(c)).length - 1 && c.splice(dot + 1, 0, "."), rounded.sign + c.join("");
                            })(value, precision, options && options).replace(/((\.\d*?)(0+))($|e)/, function() {
                                var digits = arguments[2], e = arguments[4];
                                return "." !== digits ? digits + e : e;
                            });
                        default:
                            throw new Error('Unknown notation "' + notation + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
                    }
                }
                function splitNumber(value) {
                    var match = String(value).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);
                    if (!match) throw new SyntaxError("Invalid number " + value);
                    var sign = match[1], digits = match[2], exponent = parseFloat(match[4] || "0"), dot = digits.indexOf(".");
                    exponent += -1 !== dot ? dot - 1 : digits.length - 1;
                    var coefficients = digits.replace(".", "").replace(/^0*/, function(zeros) {
                        return exponent -= zeros.length, "";
                    }).replace(/0*$/, "").split("").map(function(d) {
                        return parseInt(d);
                    });
                    return 0 === coefficients.length && (coefficients.push(0), exponent++), {
                        sign,
                        coefficients,
                        exponent
                    };
                }
                function toFixed(value, precision) {
                    if (isNaN(value) || !isFinite(value)) return String(value);
                    var splitValue = splitNumber(value), rounded = "number" == typeof precision ? roundDigits(splitValue, splitValue.exponent + 1 + precision) : splitValue, c = rounded.coefficients, p = rounded.exponent + 1, pp = p + (precision || 0);
                    return c.length < pp && (c = c.concat(zeros(pp - c.length))), p < 0 && (c = zeros(1 - p).concat(c), p = 1), p < c.length && c.splice(p, 0, 0 === p ? "0." : "."), rounded.sign + c.join("");
                }
                function toExponential(value, precision) {
                    if (isNaN(value) || !isFinite(value)) return String(value);
                    var split = splitNumber(value), rounded = precision ? roundDigits(split, precision) : split, c = rounded.coefficients, e = rounded.exponent;
                    c.length < precision && (c = c.concat(zeros(precision - c.length)));
                    var first = c.shift();
                    return rounded.sign + first + (c.length > 0 ? "." + c.join("") : "") + "e" + (e >= 0 ? "+" : "") + e;
                }
                function roundDigits(split, precision) {
                    for(var rounded = {
                        sign: split.sign,
                        coefficients: split.coefficients,
                        exponent: split.exponent
                    }, c = rounded.coefficients; precision <= 0;)c.unshift(0), rounded.exponent++, precision++;
                    if (c.length > precision && c.splice(precision, c.length - precision)[0] >= 5) {
                        var i = precision - 1;
                        for(c[i]++; 10 === c[i];)c.pop(), 0 === i && (c.unshift(0), rounded.exponent++, i++), c[--i]++;
                    }
                    return rounded;
                }
                function zeros(length) {
                    for(var arr = [], i = 0; i < length; i++)arr.push(0);
                    return arr;
                }
                var DBL_EPSILON = Number.EPSILON || 2220446049250313e-31;
                function number_nearlyEqual(x, y, epsilon) {
                    if (null == epsilon) return x === y;
                    if (x === y) return !0;
                    if (isNaN(x) || isNaN(y)) return !1;
                    if (isFinite(x) && isFinite(y)) {
                        var diff = Math.abs(x - y);
                        return diff < DBL_EPSILON || diff <= Math.max(Math.abs(x), Math.abs(y)) * epsilon;
                    }
                    return !1;
                }
                Math.acosh, Math.asinh, Math.atanh, Math.cosh, Math.sinh, Math.tanh;
                function formatBigNumberToBase(n, base, size) {
                    var big2 = new n.constructor(2), suffix = "";
                    if (size) {
                        if (size < 1) throw new Error("size must be in greater than 0");
                        if (!isInteger(size)) throw new Error("size must be an integer");
                        if (n.greaterThan(big2.pow(size - 1).sub(1)) || n.lessThan(big2.pow(size - 1).mul(-1))) throw new Error("Value must be in range [-2^".concat(size - 1, ", 2^").concat(size - 1, "-1]"));
                        if (!n.isInteger()) throw new Error("Value must be an integer");
                        n.lessThan(0) && (n = n.add(big2.pow(size))), suffix = "i".concat(size);
                    }
                    switch(base){
                        case 2:
                            return "".concat(n.toBinary()).concat(suffix);
                        case 8:
                            return "".concat(n.toOctal()).concat(suffix);
                        case 16:
                            return "".concat(n.toHexadecimal()).concat(suffix);
                        default:
                            throw new Error("Base ".concat(base, " not supported "));
                    }
                }
                function formatter_format(value, options) {
                    if ("function" == typeof options) return options(value);
                    if (!value.isFinite()) return value.isNaN() ? "NaN" : value.gt(0) ? "Infinity" : "-Infinity";
                    var precision, wordSize, notation = "auto";
                    if (void 0 !== options && (options.notation && (notation = options.notation), "number" == typeof options ? precision = options : options.precision && (precision = options.precision), options.wordSize && "number" != typeof (wordSize = options.wordSize))) throw new Error('Option "wordSize" must be a number');
                    switch(notation){
                        case "fixed":
                            return function(value, precision) {
                                return value.toFixed(precision);
                            }(value, precision);
                        case "exponential":
                            return formatter_toExponential(value, precision);
                        case "engineering":
                            return function(value, precision) {
                                var e = value.e, newExp = e % 3 == 0 ? e : e < 0 ? e - 3 - e % 3 : e - e % 3, valueWithoutExp = value.mul(Math.pow(10, -newExp)), valueStr = valueWithoutExp.toPrecision(precision);
                                -1 !== valueStr.indexOf("e") && (valueStr = valueWithoutExp.toString());
                                return valueStr + "e" + (e >= 0 ? "+" : "") + newExp.toString();
                            }(value, precision);
                        case "bin":
                            return formatBigNumberToBase(value, 2, wordSize);
                        case "oct":
                            return formatBigNumberToBase(value, 8, wordSize);
                        case "hex":
                            return formatBigNumberToBase(value, 16, wordSize);
                        case "auto":
                            var lowerExp = options && void 0 !== options.lowerExp ? options.lowerExp : -3, upperExp = options && void 0 !== options.upperExp ? options.upperExp : 5;
                            if (value.isZero()) return "0";
                            var rounded = value.toSignificantDigits(precision), exp = rounded.e;
                            return (exp >= lowerExp && exp < upperExp ? rounded.toFixed() : formatter_toExponential(value, precision)).replace(/((\.\d*?)(0+))($|e)/, function() {
                                var digits = arguments[2], e = arguments[4];
                                return "." !== digits ? digits + e : e;
                            });
                        default:
                            throw new Error('Unknown notation "' + notation + '". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.');
                    }
                }
                function formatter_toExponential(value, precision) {
                    return void 0 !== precision ? value.toExponential(precision - 1) : value.toExponential();
                }
                function endsWith(text, search) {
                    var start = text.length - search.length, end = text.length;
                    return text.substring(start, end) === search;
                }
                function string_format(value, options) {
                    return "number" == typeof value ? format(value, options) : isBigNumber(value) ? formatter_format(value, options) : function(value) {
                        return value && "object" == typeof value && "number" == typeof value.s && "number" == typeof value.n && "number" == typeof value.d || !1;
                    }(value) ? options && "decimal" === options.fraction ? value.toString() : value.s * value.n + "/" + value.d : Array.isArray(value) ? formatArray(value, options) : is_isString(value) ? '"' + value + '"' : "function" == typeof value ? value.syntax ? String(value.syntax) : "function" : value && "object" == typeof value ? "function" == typeof value.format ? value.format(options) : value && value.toString(options) !== ({}).toString() ? value.toString(options) : "{" + Object.keys(value).map((key)=>'"' + key + '": ' + string_format(value[key], options)).join(", ") + "}" : String(value);
                }
                function stringify(value) {
                    for(var text = String(value), escaped = "", i = 0; i < text.length;){
                        var c = text.charAt(i);
                        "\\" === c ? (escaped += c, i++, "" !== (c = text.charAt(i)) && -1 !== '"\\/bfnrtu'.indexOf(c) || (escaped += "\\"), escaped += c) : escaped += '"' === c ? '\\"' : c, i++;
                    }
                    return '"' + escaped + '"';
                }
                function string_escape(value) {
                    var text = String(value);
                    return text = text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                }
                function formatArray(array, options) {
                    if (Array.isArray(array)) {
                        for(var str = "[", len = array.length, i = 0; i < len; i++)0 !== i && (str += ", "), str += formatArray(array[i], options);
                        return str += "]";
                    }
                    return string_format(array, options);
                }
                function DimensionError(actual, expected, relation) {
                    if (!(this instanceof DimensionError)) throw new SyntaxError("Constructor must be called with the new operator");
                    this.actual = actual, this.expected = expected, this.relation = relation, this.message = "Dimension mismatch (" + (Array.isArray(actual) ? "[" + actual.join(", ") + "]" : actual) + " " + (this.relation || "!=") + " " + (Array.isArray(expected) ? "[" + expected.join(", ") + "]" : expected) + ")", this.stack = (new Error).stack;
                }
                function IndexError_IndexError(index, min, max) {
                    if (!(this instanceof IndexError_IndexError)) throw new SyntaxError("Constructor must be called with the new operator");
                    this.index = index, arguments.length < 3 ? (this.min = 0, this.max = min) : (this.min = min, this.max = max), void 0 !== this.min && this.index < this.min ? this.message = "Index out of range (" + this.index + " < " + this.min + ")" : void 0 !== this.max && this.index >= this.max ? this.message = "Index out of range (" + this.index + " > " + (this.max - 1) + ")" : this.message = "Index out of range (" + this.index + ")", this.stack = (new Error).stack;
                }
                function array_arraySize(x) {
                    for(var s = []; Array.isArray(x);)s.push(x.length), x = x[0];
                    return s;
                }
                function _validate(array, size, dim) {
                    var i, len = array.length;
                    if (len !== size[dim]) throw new DimensionError(len, size[dim]);
                    if (dim < size.length - 1) {
                        var dimNext = dim + 1;
                        for(i = 0; i < len; i++){
                            var child = array[i];
                            if (!Array.isArray(child)) throw new DimensionError(size.length - 1, size.length, "<");
                            _validate(array[i], size, dimNext);
                        }
                    } else for(i = 0; i < len; i++)if (Array.isArray(array[i])) throw new DimensionError(size.length + 1, size.length, ">");
                }
                function validate(array, size) {
                    if (0 === size.length) {
                        if (Array.isArray(array)) throw new DimensionError(array.length, 0);
                    } else _validate(array, size, 0);
                }
                function validateIndex(index, length) {
                    if (!isNumber(index) || !isInteger(index)) throw new TypeError("Index must be an integer (value: " + index + ")");
                    if (index < 0 || "number" == typeof length && index >= length) throw new IndexError_IndexError(index, length);
                }
                function resize(array, size, defaultValue) {
                    if (!Array.isArray(array) || !Array.isArray(size)) throw new TypeError("Array expected");
                    if (0 === size.length) throw new Error("Resizing to scalar is not supported");
                    return size.forEach(function(value) {
                        if (!isNumber(value) || !isInteger(value) || value < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + string_format(size) + ")");
                    }), _resize(array, size, 0, void 0 !== defaultValue ? defaultValue : 0), array;
                }
                function _resize(array, size, dim, defaultValue) {
                    var i, elem, oldLen = array.length, newLen = size[dim], minLen = Math.min(oldLen, newLen);
                    if (array.length = newLen, dim < size.length - 1) {
                        var dimNext = dim + 1;
                        for(i = 0; i < minLen; i++)elem = array[i], Array.isArray(elem) || (elem = [
                            elem
                        ], array[i] = elem), _resize(elem, size, dimNext, defaultValue);
                        for(i = minLen; i < newLen; i++)elem = [], array[i] = elem, _resize(elem, size, dimNext, defaultValue);
                    } else {
                        for(i = 0; i < minLen; i++)for(; Array.isArray(array[i]);)array[i] = array[i][0];
                        for(i = minLen; i < newLen; i++)array[i] = defaultValue;
                    }
                }
                function reshape(array, sizes) {
                    var flatArray = function(array) {
                        if (!Array.isArray(array)) return array;
                        var flat = [];
                        return array.forEach(function callback(value) {
                            Array.isArray(value) ? value.forEach(callback) : flat.push(value);
                        }), flat;
                    }(array), currentLength = flatArray.length;
                    if (!Array.isArray(array) || !Array.isArray(sizes)) throw new TypeError("Array expected");
                    if (0 === sizes.length) throw new DimensionError(0, currentLength, "!=");
                    var newLength = product(sizes = processSizesWildcard(sizes, currentLength));
                    if (currentLength !== newLength) throw new DimensionError(newLength, currentLength, "!=");
                    try {
                        return function(array, sizes) {
                            for(var tmpArray2, tmpArray = array, sizeIndex = sizes.length - 1; sizeIndex > 0; sizeIndex--){
                                var size = sizes[sizeIndex];
                                tmpArray2 = [];
                                for(var length = tmpArray.length / size, i = 0; i < length; i++)tmpArray2.push(tmpArray.slice(i * size, (i + 1) * size));
                                tmpArray = tmpArray2;
                            }
                            return tmpArray;
                        }(flatArray, sizes);
                    } catch (e) {
                        if (e instanceof DimensionError) throw new DimensionError(newLength, currentLength, "!=");
                        throw e;
                    }
                }
                function processSizesWildcard(sizes, currentLength) {
                    var newLength = product(sizes), processedSizes = sizes.slice(), wildCardIndex = sizes.indexOf(-1);
                    if (sizes.indexOf(-1, wildCardIndex + 1) >= 0) throw new Error("More than one wildcard in sizes");
                    if (wildCardIndex >= 0) {
                        if (!(currentLength % newLength == 0)) throw new Error("Could not replace wildcard, since " + currentLength + " is no multiple of " + -newLength);
                        processedSizes[wildCardIndex] = -currentLength / newLength;
                    }
                    return processedSizes;
                }
                function product(array) {
                    return array.reduce((prev, curr)=>prev * curr, 1);
                }
                function unsqueeze(array, dims, outer, size) {
                    var s = size || array_arraySize(array);
                    if (outer) for(var i = 0; i < outer; i++)array = [
                        array
                    ], s.unshift(1);
                    for(array = _unsqueeze(array, dims, 0); s.length < dims;)s.push(1);
                    return array;
                }
                function _unsqueeze(array, dims, dim) {
                    var i, ii;
                    if (Array.isArray(array)) {
                        var next = dim + 1;
                        for(i = 0, ii = array.length; i < ii; i++)array[i] = _unsqueeze(array[i], dims, next);
                    } else for(var d = dim; d < dims; d++)array = [
                        array
                    ];
                    return array;
                }
                function map(array, callback) {
                    return Array.prototype.map.call(array, callback);
                }
                function forEach(array, callback) {
                    Array.prototype.forEach.call(array, callback);
                }
                function join(array, separator) {
                    return Array.prototype.join.call(array, separator);
                }
                function getArrayDataType(array, typeOf) {
                    for(var type, length = 0, i = 0; i < array.length; i++){
                        var item = array[i], isArray = Array.isArray(item);
                        if (0 === i && isArray && (length = item.length), isArray && item.length !== length) return;
                        var itemType = isArray ? getArrayDataType(item, typeOf) : typeOf(item);
                        if (void 0 === type) type = itemType;
                        else if (type !== itemType) return "mixed";
                    }
                    return type;
                }
                function array_contains(array, item) {
                    return -1 !== array.indexOf(item);
                }
                function ArgumentsError(fn, count, min, max) {
                    if (!(this instanceof ArgumentsError)) throw new SyntaxError("Constructor must be called with the new operator");
                    this.fn = fn, this.count = count, this.min = min, this.max = max, this.message = "Wrong number of arguments in function " + fn + " (" + count + " provided, " + min + (null != max ? "-" + max : "") + " expected)", this.stack = (new Error).stack;
                }
                function importFactory(typed, load, math, importedFactories) {
                    function _import(name, value, options) {
                        var fn;
                        if (options.wrap && "function" == typeof value && (value = function(fn) {
                            var wrapper = function() {
                                for(var args = [], i = 0, len = arguments.length; i < len; i++){
                                    var arg = arguments[i];
                                    args[i] = arg && arg.valueOf();
                                }
                                return fn.apply(math, args);
                            };
                            fn.transform && (wrapper.transform = fn.transform);
                            return wrapper;
                        }(value)), "function" == typeof (fn = value) && "string" == typeof fn.signature && (value = typed(name, {
                            [value.signature]: value
                        })), isTypedFunction(math[name]) && isTypedFunction(value)) return value = options.override ? typed(name, value.signatures) : typed(math[name], value), math[name] = value, delete importedFactories[name], _importTransform(name, value), void math.emit("import", name, function() {
                            return value;
                        });
                        if (void 0 === math[name] || options.override) return math[name] = value, delete importedFactories[name], _importTransform(name, value), void math.emit("import", name, function() {
                            return value;
                        });
                        if (!options.silent) throw new Error('Cannot import "' + name + '": already exists');
                    }
                    function _importTransform(name, value) {
                        value && "function" == typeof value.transform ? (math.expression.transform[name] = value.transform, allowedInExpressions(name) && (math.expression.mathWithTransform[name] = value.transform)) : (delete math.expression.transform[name], allowedInExpressions(name) && (math.expression.mathWithTransform[name] = value));
                    }
                    function _deleteTransform(name) {
                        delete math.expression.transform[name], allowedInExpressions(name) ? math.expression.mathWithTransform[name] = math[name] : delete math.expression.mathWithTransform[name];
                    }
                    function _importFactory(factory, options) {
                        var name = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : factory.fn;
                        if (array_contains(name, ".")) throw new Error("Factory name should not contain a nested path. Name: " + JSON.stringify(name));
                        var namespace = isTransformFunctionFactory(factory) ? math.expression.transform : math, existingTransform = name in math.expression.transform, existing = object_hasOwnProperty(namespace, name) ? namespace[name] : void 0, resolver = function() {
                            var dependencies = {};
                            factory.dependencies.map(stripOptionalNotation).forEach((dependency)=>{
                                if (array_contains(dependency, ".")) throw new Error("Factory dependency should not contain a nested path. Name: " + JSON.stringify(dependency));
                                "math" === dependency ? dependencies.math = math : "mathWithTransform" === dependency ? dependencies.mathWithTransform = math.expression.mathWithTransform : "classes" === dependency ? dependencies.classes = math : dependencies[dependency] = math[dependency];
                            });
                            var instance = factory(dependencies);
                            if (instance && "function" == typeof instance.transform) throw new Error('Transforms cannot be attached to factory functions. Please create a separate function for it with exports.path="expression.transform"');
                            if (void 0 === existing || options.override) return instance;
                            if (isTypedFunction(existing) && isTypedFunction(instance)) return typed(existing, instance);
                            if (options.silent) return existing;
                            throw new Error('Cannot import "' + name + '": already exists');
                        };
                        factory.meta && !1 === factory.meta.lazy ? (namespace[name] = resolver(), existing && existingTransform ? _deleteTransform(name) : (isTransformFunctionFactory(factory) || factoryAllowedInExpressions(factory)) && lazy(math.expression.mathWithTransform, name, ()=>namespace[name])) : (lazy(namespace, name, resolver), existing && existingTransform ? _deleteTransform(name) : (isTransformFunctionFactory(factory) || factoryAllowedInExpressions(factory)) && lazy(math.expression.mathWithTransform, name, ()=>namespace[name])), importedFactories[name] = factory, math.emit("import", name, resolver);
                    }
                    function isSupportedType(object) {
                        return "function" == typeof object || "number" == typeof object || "string" == typeof object || "boolean" == typeof object || null === object || isUnit(object) || isComplex(object) || isBigNumber(object) || isFraction(object) || is_isMatrix(object) || Array.isArray(object);
                    }
                    function isTypedFunction(fn) {
                        return "function" == typeof fn && "object" == typeof fn.signatures;
                    }
                    function allowedInExpressions(name) {
                        return !object_hasOwnProperty(unsafe, name);
                    }
                    function factoryAllowedInExpressions(factory) {
                        return !(-1 !== factory.fn.indexOf(".") || object_hasOwnProperty(unsafe, factory.fn) || factory.meta && factory.meta.isClass);
                    }
                    function isTransformFunctionFactory(factory) {
                        return void 0 !== factory && void 0 !== factory.meta && !0 === factory.meta.isTransformFunction || !1;
                    }
                    var unsafe = {
                        expression: !0,
                        type: !0,
                        docs: !0,
                        error: !0,
                        json: !0,
                        chain: !0
                    };
                    return function(functions, options) {
                        var num = arguments.length;
                        if (1 !== num && 2 !== num) throw new ArgumentsError("import", num, 1, 2);
                        function flattenImports(flatValues, value, name) {
                            if (Array.isArray(value)) value.forEach((item)=>flattenImports(flatValues, item));
                            else if ("object" == typeof value) for(var _name in value)object_hasOwnProperty(value, _name) && flattenImports(flatValues, value[_name], _name);
                            else if (isFactory(value) || void 0 !== name) {
                                var flatName = isFactory(value) ? isTransformFunctionFactory(value) ? value.fn + ".transform" : value.fn : name;
                                if (object_hasOwnProperty(flatValues, flatName) && flatValues[flatName] !== value && !options.silent) throw new Error('Cannot import "' + flatName + '" twice');
                                flatValues[flatName] = value;
                            } else if (!options.silent) throw new TypeError("Factory, Object, or Array expected");
                        }
                        options || (options = {});
                        var flatValues = {};
                        for(var name in flattenImports(flatValues, functions), flatValues)if (object_hasOwnProperty(flatValues, name)) {
                            var value = flatValues[name];
                            if (isFactory(value)) _importFactory(value, options);
                            else if (isSupportedType(value)) _import(name, value, options);
                            else if (!options.silent) throw new TypeError("Factory, Object, or Array expected");
                        }
                    };
                }
                DimensionError.prototype = new RangeError, DimensionError.prototype.constructor = RangeError, DimensionError.prototype.name = "DimensionError", DimensionError.prototype.isDimensionError = !0, IndexError_IndexError.prototype = new RangeError, IndexError_IndexError.prototype.constructor = RangeError, IndexError_IndexError.prototype.name = "IndexError", IndexError_IndexError.prototype.isIndexError = !0, ArgumentsError.prototype = new Error, ArgumentsError.prototype.constructor = Error, ArgumentsError.prototype.name = "ArgumentsError", ArgumentsError.prototype.isArgumentsError = !0;
                var DEFAULT_CONFIG = {
                    epsilon: 1e-12,
                    matrix: "Matrix",
                    number: "number",
                    precision: 64,
                    predictable: !1,
                    randomSeed: null
                }, MATRIX_OPTIONS = [
                    "Matrix",
                    "Array"
                ], NUMBER_OPTIONS = [
                    "number",
                    "BigNumber",
                    "Fraction"
                ];
                function configFactory(config, emit) {
                    function _config(options) {
                        if (options) {
                            var prev = mapObject(config, clone);
                            validateOption(options, "matrix", MATRIX_OPTIONS), validateOption(options, "number", NUMBER_OPTIONS), deepExtend(config, options);
                            var curr = mapObject(config, clone), changes = mapObject(options, clone);
                            return emit("config", curr, prev, changes), curr;
                        }
                        return mapObject(config, clone);
                    }
                    return _config.MATRIX_OPTIONS = MATRIX_OPTIONS, _config.NUMBER_OPTIONS = NUMBER_OPTIONS, Object.keys(DEFAULT_CONFIG).forEach((key)=>{
                        Object.defineProperty(_config, key, {
                            get: ()=>config[key],
                            enumerable: !0,
                            configurable: !0
                        });
                    }), _config;
                }
                function validateOption(options, name, values) {
                    var array, item;
                    void 0 !== options[name] && (array = values, item = options[name], -1 === array.indexOf(item)) && console.warn('Warning: Unknown value "' + options[name] + '" for configuration option "' + name + '". Available options: ' + values.map((value)=>JSON.stringify(value)).join(", ") + ".");
                }
                var keywords = new Set([
                    "end"
                ]);
                function getSafeProperty(object, prop) {
                    if (isPlainObject(object) && isSafeProperty(object, prop)) return object[prop];
                    if ("function" == typeof object[prop] && isSafeMethod(object, prop)) throw new Error('Cannot access method "' + prop + '" as a property');
                    throw new Error('No access to property "' + prop + '"');
                }
                function customs_setSafeProperty(object, prop, value) {
                    if (isPlainObject(object) && isSafeProperty(object, prop)) return object[prop] = value, value;
                    throw new Error('No access to property "' + prop + '"');
                }
                function isSafeProperty(object, prop) {
                    return !(!object || "object" != typeof object) && (!!object_hasOwnProperty(safeNativeProperties, prop) || !(prop in Object.prototype) && !(prop in Function.prototype));
                }
                function isSafeMethod(object, method) {
                    return null != object && "function" == typeof object[method] && !(object_hasOwnProperty(object, method) && Object.getPrototypeOf && method in Object.getPrototypeOf(object)) && (!!object_hasOwnProperty(safeNativeMethods, method) || !(method in Object.prototype) && !(method in Function.prototype));
                }
                function isPlainObject(object) {
                    return "object" == typeof object && object && object.constructor === Object;
                }
                var safeNativeProperties = {
                    length: !0,
                    name: !0
                }, safeNativeMethods = {
                    toString: !0,
                    valueOf: !0,
                    toLocaleString: !0
                };
                class ObjectWrappingMap {
                    constructor(object){
                        this.wrappedObject = object;
                    }
                    keys() {
                        return Object.keys(this.wrappedObject);
                    }
                    get(key) {
                        return getSafeProperty(this.wrappedObject, key);
                    }
                    set(key, value) {
                        return customs_setSafeProperty(this.wrappedObject, key, value), this;
                    }
                    has(key) {
                        var object;
                        return object = this.wrappedObject, key in object;
                    }
                }
                function createEmptyMap() {
                    return new Map;
                }
                function isMap(object) {
                    return !!object && (object instanceof Map || object instanceof ObjectWrappingMap || "function" == typeof object.set && "function" == typeof object.get && "function" == typeof object.keys && "function" == typeof object.has);
                }
                function map_assign(map) {
                    for(var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)objects[_key - 1] = arguments[_key];
                    for (var args of objects)if (args) {
                        if (isMap(args)) for (var key of args.keys())map.set(key, args.get(key));
                        else if (isObject(args)) for (var _key2 of Object.keys(args))map.set(_key2, args[_key2]);
                    }
                    return map;
                }
                var NodeDependencies = {
                    createNode: factory_factory("Node", [
                        "mathWithTransform"
                    ], (_ref)=>{
                        var { mathWithTransform  } = _ref;
                        function Node() {
                            if (!(this instanceof Node)) throw new SyntaxError("Constructor must be called with the new operator");
                        }
                        return Node.prototype.evaluate = function(scope) {
                            return this.compile().evaluate(scope);
                        }, Node.prototype.type = "Node", Node.prototype.isNode = !0, Node.prototype.comment = "", Node.prototype.compile = function() {
                            var expr = this._compile(mathWithTransform, {}), args = {};
                            return {
                                evaluate: function(scope) {
                                    var s = function(mapOrObject) {
                                        if (!mapOrObject) return createEmptyMap();
                                        if (isMap(mapOrObject)) return mapOrObject;
                                        if (isObject(mapOrObject)) return new ObjectWrappingMap(mapOrObject);
                                        throw new Error("createMap can create maps from objects or Maps");
                                    }(scope);
                                    return function(scope) {
                                        for (var symbol of [
                                            ...keywords
                                        ])if (scope.has(symbol)) throw new Error('Scope contains an illegal symbol, "' + symbol + '" is a reserved keyword');
                                    }(s), expr(s, args, null);
                                }
                            };
                        }, Node.prototype._compile = function(math, argNames) {
                            throw new Error("Method _compile should be implemented by type " + this.type);
                        }, Node.prototype.forEach = function(callback) {
                            throw new Error("Cannot run forEach on a Node interface");
                        }, Node.prototype.map = function(callback) {
                            throw new Error("Cannot run map on a Node interface");
                        }, Node.prototype._ifNode = function(node) {
                            if (!isNode(node)) throw new TypeError("Callback function must return a Node");
                            return node;
                        }, Node.prototype.traverse = function(callback) {
                            callback(this, null, null), function _traverse(node, callback) {
                                node.forEach(function(child, path, parent) {
                                    callback(child, path, parent), _traverse(child, callback);
                                });
                            }(this, callback);
                        }, Node.prototype.transform = function(callback) {
                            return function _transform(child, path, parent) {
                                var replacement = callback(child, path, parent);
                                return replacement !== child ? replacement : child.map(_transform);
                            }(this, null, null);
                        }, Node.prototype.filter = function(callback) {
                            var nodes = [];
                            return this.traverse(function(node, path, parent) {
                                callback(node, path, parent) && nodes.push(node);
                            }), nodes;
                        }, Node.prototype.clone = function() {
                            throw new Error("Cannot clone a Node interface");
                        }, Node.prototype.cloneDeep = function() {
                            return this.map(function(node) {
                                return node.cloneDeep();
                            });
                        }, Node.prototype.equals = function(other) {
                            return !!other && deepStrictEqual(this, other);
                        }, Node.prototype.toString = function(options) {
                            var customString = this._getCustomString(options);
                            return void 0 !== customString ? customString : this._toString(options);
                        }, Node.prototype.toJSON = function() {
                            throw new Error("Cannot serialize object: toJSON not implemented by " + this.type);
                        }, Node.prototype.toHTML = function(options) {
                            var customString = this._getCustomString(options);
                            return void 0 !== customString ? customString : this.toHTML(options);
                        }, Node.prototype._toString = function() {
                            throw new Error("_toString not implemented for " + this.type);
                        }, Node.prototype.toTex = function(options) {
                            var customString = this._getCustomString(options);
                            return void 0 !== customString ? customString : this._toTex(options);
                        }, Node.prototype._toTex = function(options) {
                            throw new Error("_toTex not implemented for " + this.type);
                        }, Node.prototype._getCustomString = function(options) {
                            if (options && "object" == typeof options) switch(typeof options.handler){
                                case "object":
                                case "undefined":
                                    return;
                                case "function":
                                    return options.handler(this, options);
                                default:
                                    throw new TypeError("Object or function expected as callback");
                            }
                        }, Node.prototype.getIdentifier = function() {
                            return this.type;
                        }, Node.prototype.getContent = function() {
                            return this;
                        }, Node;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, MatrixDependencies = {
                    createMatrixClass: factory_factory("Matrix", [], ()=>{
                        function Matrix() {
                            if (!(this instanceof Matrix)) throw new SyntaxError("Constructor must be called with the new operator");
                        }
                        return Matrix.prototype.type = "Matrix", Matrix.prototype.isMatrix = !0, Matrix.prototype.storage = function() {
                            throw new Error("Cannot invoke storage on a Matrix interface");
                        }, Matrix.prototype.datatype = function() {
                            throw new Error("Cannot invoke datatype on a Matrix interface");
                        }, Matrix.prototype.create = function(data, datatype) {
                            throw new Error("Cannot invoke create on a Matrix interface");
                        }, Matrix.prototype.subset = function(index, replacement, defaultValue) {
                            throw new Error("Cannot invoke subset on a Matrix interface");
                        }, Matrix.prototype.get = function(index) {
                            throw new Error("Cannot invoke get on a Matrix interface");
                        }, Matrix.prototype.set = function(index, value, defaultValue) {
                            throw new Error("Cannot invoke set on a Matrix interface");
                        }, Matrix.prototype.resize = function(size, defaultValue) {
                            throw new Error("Cannot invoke resize on a Matrix interface");
                        }, Matrix.prototype.reshape = function(size, defaultValue) {
                            throw new Error("Cannot invoke reshape on a Matrix interface");
                        }, Matrix.prototype.clone = function() {
                            throw new Error("Cannot invoke clone on a Matrix interface");
                        }, Matrix.prototype.size = function() {
                            throw new Error("Cannot invoke size on a Matrix interface");
                        }, Matrix.prototype.map = function(callback, skipZeros) {
                            throw new Error("Cannot invoke map on a Matrix interface");
                        }, Matrix.prototype.forEach = function(callback) {
                            throw new Error("Cannot invoke forEach on a Matrix interface");
                        }, Matrix.prototype[Symbol.iterator] = function() {
                            throw new Error("Cannot iterate a Matrix interface");
                        }, Matrix.prototype.toArray = function() {
                            throw new Error("Cannot invoke toArray on a Matrix interface");
                        }, Matrix.prototype.valueOf = function() {
                            throw new Error("Cannot invoke valueOf on a Matrix interface");
                        }, Matrix.prototype.format = function(options) {
                            throw new Error("Cannot invoke format on a Matrix interface");
                        }, Matrix.prototype.toString = function() {
                            throw new Error("Cannot invoke toString on a Matrix interface");
                        }, Matrix;
                    }, {
                        isClass: !0
                    })
                }, createDenseMatrixClass = factory_factory("DenseMatrix", [
                    "Matrix"
                ], (_ref)=>{
                    var { Matrix  } = _ref;
                    function DenseMatrix(data, datatype) {
                        if (!(this instanceof DenseMatrix)) throw new SyntaxError("Constructor must be called with the new operator");
                        if (datatype && !is_isString(datatype)) throw new Error("Invalid datatype: " + datatype);
                        if (is_isMatrix(data)) "DenseMatrix" === data.type ? (this._data = clone(data._data), this._size = clone(data._size), this._datatype = datatype || data._datatype) : (this._data = data.toArray(), this._size = data.size(), this._datatype = datatype || data._datatype);
                        else if (data && isArray(data.data) && isArray(data.size)) this._data = data.data, this._size = data.size, validate(this._data, this._size), this._datatype = datatype || data.datatype;
                        else if (isArray(data)) this._data = preprocess(data), this._size = array_arraySize(this._data), validate(this._data, this._size), this._datatype = datatype;
                        else {
                            if (data) throw new TypeError("Unsupported type of data (" + is_typeOf(data) + ")");
                            this._data = [], this._size = [
                                0
                            ], this._datatype = datatype;
                        }
                    }
                    function _get(matrix, index) {
                        if (!isIndex(index)) throw new TypeError("Invalid index");
                        if (index.isScalar()) return matrix.get(index.min());
                        var size = index.size();
                        if (size.length !== matrix._size.length) throw new DimensionError(size.length, matrix._size.length);
                        for(var min = index.min(), max = index.max(), i = 0, ii = matrix._size.length; i < ii; i++)validateIndex(min[i], matrix._size[i]), validateIndex(max[i], matrix._size[i]);
                        return new DenseMatrix(_getSubmatrix(matrix._data, index, size.length, 0), matrix._datatype);
                    }
                    function _getSubmatrix(data, index, dims, dim) {
                        var last = dim === dims - 1, range = index.dimension(dim);
                        return last ? range.map(function(i) {
                            return validateIndex(i, data.length), data[i];
                        }).valueOf() : range.map(function(i) {
                            return validateIndex(i, data.length), _getSubmatrix(data[i], index, dims, dim + 1);
                        }).valueOf();
                    }
                    function _set(matrix, index, submatrix, defaultValue) {
                        if (!index || !0 !== index.isIndex) throw new TypeError("Invalid index");
                        var sSize, iSize = index.size(), isScalar = index.isScalar();
                        if (is_isMatrix(submatrix) ? (sSize = submatrix.size(), submatrix = submatrix.valueOf()) : sSize = array_arraySize(submatrix), isScalar) {
                            if (0 !== sSize.length) throw new TypeError("Scalar expected");
                            matrix.set(index.min(), submatrix, defaultValue);
                        } else {
                            if (iSize.length < matrix._size.length) throw new DimensionError(iSize.length, matrix._size.length, "<");
                            if (sSize.length < iSize.length) {
                                for(var i = 0, outer = 0; 1 === iSize[i] && 1 === sSize[i];)i++;
                                for(; 1 === iSize[i];)outer++, i++;
                                submatrix = unsqueeze(submatrix, iSize.length, outer, sSize);
                            }
                            if (!deepStrictEqual(iSize, sSize)) throw new DimensionError(iSize, sSize, ">");
                            var size = index.max().map(function(i) {
                                return i + 1;
                            });
                            _fit(matrix, size, defaultValue);
                            var dims = iSize.length;
                            _setSubmatrix(matrix._data, index, submatrix, dims, 0);
                        }
                        return matrix;
                    }
                    function _setSubmatrix(data, index, submatrix, dims, dim) {
                        var last = dim === dims - 1, range = index.dimension(dim);
                        last ? range.forEach(function(dataIndex, subIndex) {
                            validateIndex(dataIndex), data[dataIndex] = submatrix[subIndex[0]];
                        }) : range.forEach(function(dataIndex, subIndex) {
                            validateIndex(dataIndex), _setSubmatrix(data[dataIndex], index, submatrix[subIndex[0]], dims, dim + 1);
                        });
                    }
                    function _resize(matrix, size, defaultValue) {
                        if (0 === size.length) {
                            for(var v = matrix._data; isArray(v);)v = v[0];
                            return v;
                        }
                        return matrix._size = size.slice(0), matrix._data = resize(matrix._data, matrix._size, defaultValue), matrix;
                    }
                    function _fit(matrix, size, defaultValue) {
                        for(var newSize = matrix._size.slice(0), changed = !1; newSize.length < size.length;)newSize.push(0), changed = !0;
                        for(var i = 0, ii = size.length; i < ii; i++)size[i] > newSize[i] && (newSize[i] = size[i], changed = !0);
                        changed && _resize(matrix, newSize, defaultValue);
                    }
                    function preprocess(data) {
                        for(var i = 0, ii = data.length; i < ii; i++){
                            var elem = data[i];
                            isArray(elem) ? data[i] = preprocess(elem) : elem && !0 === elem.isMatrix && (data[i] = preprocess(elem.valueOf()));
                        }
                        return data;
                    }
                    return DenseMatrix.prototype = new Matrix, DenseMatrix.prototype.createDenseMatrix = function(data, datatype) {
                        return new DenseMatrix(data, datatype);
                    }, DenseMatrix.prototype.type = "DenseMatrix", DenseMatrix.prototype.isDenseMatrix = !0, DenseMatrix.prototype.getDataType = function() {
                        return getArrayDataType(this._data, is_typeOf);
                    }, DenseMatrix.prototype.storage = function() {
                        return "dense";
                    }, DenseMatrix.prototype.datatype = function() {
                        return this._datatype;
                    }, DenseMatrix.prototype.create = function(data, datatype) {
                        return new DenseMatrix(data, datatype);
                    }, DenseMatrix.prototype.subset = function(index, replacement, defaultValue) {
                        switch(arguments.length){
                            case 1:
                                return _get(this, index);
                            case 2:
                            case 3:
                                return _set(this, index, replacement, defaultValue);
                            default:
                                throw new SyntaxError("Wrong number of arguments");
                        }
                    }, DenseMatrix.prototype.get = function(index) {
                        if (!isArray(index)) throw new TypeError("Array expected");
                        if (index.length !== this._size.length) throw new DimensionError(index.length, this._size.length);
                        for(var x = 0; x < index.length; x++)validateIndex(index[x], this._size[x]);
                        for(var data = this._data, i = 0, ii = index.length; i < ii; i++){
                            var indexI = index[i];
                            validateIndex(indexI, data.length), data = data[indexI];
                        }
                        return data;
                    }, DenseMatrix.prototype.set = function(index, value, defaultValue) {
                        if (!isArray(index)) throw new TypeError("Array expected");
                        if (index.length < this._size.length) throw new DimensionError(index.length, this._size.length, "<");
                        var i, ii, indexI, size = index.map(function(i) {
                            return i + 1;
                        });
                        _fit(this, size, defaultValue);
                        var data = this._data;
                        for(i = 0, ii = index.length - 1; i < ii; i++)validateIndex(indexI = index[i], data.length), data = data[indexI];
                        return validateIndex(indexI = index[index.length - 1], data.length), data[indexI] = value, this;
                    }, DenseMatrix.prototype.resize = function(size, defaultValue, copy) {
                        if (!is_isCollection(size)) throw new TypeError("Array or Matrix expected");
                        var sizeArray = size.valueOf().map((value)=>Array.isArray(value) && 1 === value.length ? value[0] : value);
                        return _resize(copy ? this.clone() : this, sizeArray, defaultValue);
                    }, DenseMatrix.prototype.reshape = function(size, copy) {
                        var m = copy ? this.clone() : this;
                        m._data = reshape(m._data, size);
                        var currentLength = m._size.reduce((length, size)=>length * size);
                        return m._size = processSizesWildcard(size, currentLength), m;
                    }, DenseMatrix.prototype.clone = function() {
                        return new DenseMatrix({
                            data: clone(this._data),
                            size: clone(this._size),
                            datatype: this._datatype
                        });
                    }, DenseMatrix.prototype.size = function() {
                        return this._size.slice(0);
                    }, DenseMatrix.prototype.map = function(callback) {
                        var me = this, data = function recurse(value, index) {
                            return isArray(value) ? value.map(function(child, i) {
                                return recurse(child, index.concat(i));
                            }) : callback(value, index, me);
                        }(this._data, []);
                        return new DenseMatrix(data, void 0 !== this._datatype ? getArrayDataType(data, is_typeOf) : void 0);
                    }, DenseMatrix.prototype.forEach = function(callback) {
                        var me = this;
                        !function recurse(value, index) {
                            isArray(value) ? value.forEach(function(child, i) {
                                recurse(child, index.concat(i));
                            }) : callback(value, index, me);
                        }(this._data, []);
                    }, DenseMatrix.prototype[Symbol.iterator] = function*() {
                        yield* function* recurse(value, index) {
                            if (isArray(value)) for(var i = 0; i < value.length; i++)yield* recurse(value[i], index.concat(i));
                            else yield {
                                value,
                                index
                            };
                        }(this._data, []);
                    }, DenseMatrix.prototype.rows = function() {
                        var result = [];
                        if (2 !== this.size().length) throw new TypeError("Rows can only be returned for a 2D matrix.");
                        var data = this._data;
                        for (var row of data)result.push(new DenseMatrix([
                            row
                        ], this._datatype));
                        return result;
                    }, DenseMatrix.prototype.columns = function() {
                        var _this = this, result = [], s = this.size();
                        if (2 !== s.length) throw new TypeError("Rows can only be returned for a 2D matrix.");
                        for(var data = this._data, _loop = function(i) {
                            var col = data.map((row)=>[
                                    row[i]
                                ]);
                            result.push(new DenseMatrix(col, _this._datatype));
                        }, i = 0; i < s[1]; i++)_loop(i);
                        return result;
                    }, DenseMatrix.prototype.toArray = function() {
                        return clone(this._data);
                    }, DenseMatrix.prototype.valueOf = function() {
                        return this._data;
                    }, DenseMatrix.prototype.format = function(options) {
                        return string_format(this._data, options);
                    }, DenseMatrix.prototype.toString = function() {
                        return string_format(this._data);
                    }, DenseMatrix.prototype.toJSON = function() {
                        return {
                            mathjs: "DenseMatrix",
                            data: this._data,
                            size: this._size,
                            datatype: this._datatype
                        };
                    }, DenseMatrix.prototype.diagonal = function(k) {
                        if (k) {
                            if (isBigNumber(k) && (k = k.toNumber()), !isNumber(k) || !isInteger(k)) throw new TypeError("The parameter k must be an integer number");
                        } else k = 0;
                        for(var kSuper = k > 0 ? k : 0, kSub = k < 0 ? -k : 0, rows = this._size[0], columns = this._size[1], n = Math.min(rows - kSub, columns - kSuper), data = [], i = 0; i < n; i++)data[i] = this._data[i + kSub][i + kSuper];
                        return new DenseMatrix({
                            data,
                            size: [
                                n
                            ],
                            datatype: this._datatype
                        });
                    }, DenseMatrix.diagonal = function(size, value, k, defaultValue) {
                        if (!isArray(size)) throw new TypeError("Array expected, size parameter");
                        if (2 !== size.length) throw new Error("Only two dimensions matrix are supported");
                        if (size = size.map(function(s) {
                            if (isBigNumber(s) && (s = s.toNumber()), !isNumber(s) || !isInteger(s) || s < 1) throw new Error("Size values must be positive integers");
                            return s;
                        }), k) {
                            if (isBigNumber(k) && (k = k.toNumber()), !isNumber(k) || !isInteger(k)) throw new TypeError("The parameter k must be an integer number");
                        } else k = 0;
                        var _value, kSuper = k > 0 ? k : 0, kSub = k < 0 ? -k : 0, rows = size[0], columns = size[1], n = Math.min(rows - kSub, columns - kSuper);
                        if (isArray(value)) {
                            if (value.length !== n) throw new Error("Invalid value array length");
                            _value = function(i) {
                                return value[i];
                            };
                        } else if (is_isMatrix(value)) {
                            var ms = value.size();
                            if (1 !== ms.length || ms[0] !== n) throw new Error("Invalid matrix length");
                            _value = function(i) {
                                return value.get([
                                    i
                                ]);
                            };
                        } else _value = function() {
                            return value;
                        };
                        defaultValue || (defaultValue = isBigNumber(_value(0)) ? _value(0).mul(0) : 0);
                        var data = [];
                        if (size.length > 0) {
                            data = resize(data, size, defaultValue);
                            for(var d = 0; d < n; d++)data[d + kSub][d + kSuper] = _value(d);
                        }
                        return new DenseMatrix({
                            data,
                            size: [
                                rows,
                                columns
                            ]
                        });
                    }, DenseMatrix.fromJSON = function(json) {
                        return new DenseMatrix(json);
                    }, DenseMatrix.prototype.swapRows = function(i, j) {
                        if (!(isNumber(i) && isInteger(i) && isNumber(j) && isInteger(j))) throw new Error("Row index must be positive integers");
                        if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
                        return validateIndex(i, this._size[0]), validateIndex(j, this._size[0]), DenseMatrix._swapRows(i, j, this._data), this;
                    }, DenseMatrix._swapRows = function(i, j, data) {
                        var vi = data[i];
                        data[i] = data[j], data[j] = vi;
                    }, DenseMatrix;
                }, {
                    isClass: !0
                }), DenseMatrixDependencies = {
                    MatrixDependencies,
                    createDenseMatrixClass
                }, decimal = __webpack_require__(776), BigNumberDependencies = {
                    createBigNumberClass: factory_factory("BigNumber", [
                        "?on",
                        "config"
                    ], (_ref)=>{
                        var { on , config  } = _ref, BigNumber = decimal.clone({
                            precision: config.precision,
                            modulo: decimal.EUCLID
                        });
                        return BigNumber.prototype = Object.create(BigNumber.prototype), BigNumber.prototype.type = "BigNumber", BigNumber.prototype.isBigNumber = !0, BigNumber.prototype.toJSON = function() {
                            return {
                                mathjs: "BigNumber",
                                value: this.toString()
                            };
                        }, BigNumber.fromJSON = function(json) {
                            return new BigNumber(json.value);
                        }, on && on("config", function(curr, prev) {
                            curr.precision !== prev.precision && BigNumber.config({
                                precision: curr.precision
                            });
                        }), BigNumber;
                    }, {
                        isClass: !0
                    })
                }, complex = __webpack_require__(977), createComplexClass = factory_factory("Complex", [], ()=>(complex.prototype.type = "Complex", complex.prototype.isComplex = !0, complex.prototype.toJSON = function() {
                        return {
                            mathjs: "Complex",
                            re: this.re,
                            im: this.im
                        };
                    }, complex.prototype.toPolar = function() {
                        return {
                            r: this.abs(),
                            phi: this.arg()
                        };
                    }, complex.prototype.format = function(options) {
                        var im = this.im, re = this.re, strRe = format(this.re, options), strIm = format(this.im, options), precision = isNumber(options) ? options : options ? options.precision : null;
                        if (null !== precision) {
                            var epsilon = Math.pow(10, -precision);
                            Math.abs(re / im) < epsilon && (re = 0), Math.abs(im / re) < epsilon && (im = 0);
                        }
                        return 0 === im ? strRe : 0 === re ? 1 === im ? "i" : -1 === im ? "-i" : strIm + "i" : im < 0 ? -1 === im ? strRe + " - i" : strRe + " - " + strIm.substring(1) + "i" : 1 === im ? strRe + " + i" : strRe + " + " + strIm + "i";
                    }, complex.fromPolar = function(args) {
                        switch(arguments.length){
                            case 1:
                                var arg = arguments[0];
                                if ("object" == typeof arg) return complex(arg);
                                throw new TypeError("Input has to be an object with r and phi keys.");
                            case 2:
                                var r = arguments[0], phi = arguments[1];
                                if (isNumber(r)) {
                                    if (isUnit(phi) && phi.hasBase("ANGLE") && (phi = phi.toNumber("rad")), isNumber(phi)) return new complex({
                                        r,
                                        phi
                                    });
                                    throw new TypeError("Phi is not a number nor an angle unit.");
                                }
                                throw new TypeError("Radius r is not a number.");
                            default:
                                throw new SyntaxError("Wrong number of arguments in function fromPolar");
                        }
                    }, complex.prototype.valueOf = complex.prototype.toString, complex.fromJSON = function(json) {
                        return new complex(json);
                    }, complex.compare = function(a, b) {
                        return a.re > b.re ? 1 : a.re < b.re ? -1 : a.im > b.im ? 1 : a.im < b.im ? -1 : 0;
                    }, complex), {
                    isClass: !0
                }), ComplexDependencies = {
                    createComplexClass
                }, fraction = __webpack_require__(628), FractionDependencies = {
                    createFractionClass: factory_factory("Fraction", [], ()=>(fraction.prototype.type = "Fraction", fraction.prototype.isFraction = !0, fraction.prototype.toJSON = function() {
                            return {
                                mathjs: "Fraction",
                                n: this.s * this.n,
                                d: this.d
                            };
                        }, fraction.fromJSON = function(json) {
                            return new fraction(json);
                        }, fraction), {
                        isClass: !0
                    })
                }, typed_function = __webpack_require__(287), _createTyped2 = function() {
                    return _createTyped2 = typed_function.create, typed_function;
                };
                function throwNoBignumber(x) {
                    throw new Error("Cannot convert value ".concat(x, " into a BigNumber: no class 'BigNumber' provided"));
                }
                function throwNoComplex(x) {
                    throw new Error("Cannot convert value ".concat(x, " into a Complex number: no class 'Complex' provided"));
                }
                function throwNoFraction(x) {
                    throw new Error("Cannot convert value ".concat(x, " into a Fraction, no class 'Fraction' provided."));
                }
                var typedDependencies = {
                    BigNumberDependencies,
                    ComplexDependencies,
                    DenseMatrixDependencies,
                    FractionDependencies,
                    createTyped: factory_factory("typed", [
                        "?BigNumber",
                        "?Complex",
                        "?DenseMatrix",
                        "?Fraction"
                    ], function(_ref) {
                        var { BigNumber , Complex , DenseMatrix , Fraction  } = _ref, typed = _createTyped2();
                        return typed.types = [
                            {
                                name: "number",
                                test: isNumber
                            },
                            {
                                name: "Complex",
                                test: isComplex
                            },
                            {
                                name: "BigNumber",
                                test: isBigNumber
                            },
                            {
                                name: "Fraction",
                                test: isFraction
                            },
                            {
                                name: "Unit",
                                test: isUnit
                            },
                            {
                                name: "string",
                                test: is_isString
                            },
                            {
                                name: "Chain",
                                test: isChain
                            },
                            {
                                name: "Array",
                                test: isArray
                            },
                            {
                                name: "Matrix",
                                test: is_isMatrix
                            },
                            {
                                name: "DenseMatrix",
                                test: isDenseMatrix
                            },
                            {
                                name: "SparseMatrix",
                                test: isSparseMatrix
                            },
                            {
                                name: "Range",
                                test: isRange
                            },
                            {
                                name: "Index",
                                test: isIndex
                            },
                            {
                                name: "boolean",
                                test: isBoolean
                            },
                            {
                                name: "ResultSet",
                                test: isResultSet
                            },
                            {
                                name: "Help",
                                test: isHelp
                            },
                            {
                                name: "function",
                                test: isFunction
                            },
                            {
                                name: "Date",
                                test: isDate
                            },
                            {
                                name: "RegExp",
                                test: isRegExp
                            },
                            {
                                name: "null",
                                test: isNull
                            },
                            {
                                name: "undefined",
                                test: isUndefined
                            },
                            {
                                name: "AccessorNode",
                                test: isAccessorNode
                            },
                            {
                                name: "ArrayNode",
                                test: isArrayNode
                            },
                            {
                                name: "AssignmentNode",
                                test: isAssignmentNode
                            },
                            {
                                name: "BlockNode",
                                test: isBlockNode
                            },
                            {
                                name: "ConditionalNode",
                                test: isConditionalNode
                            },
                            {
                                name: "ConstantNode",
                                test: isConstantNode
                            },
                            {
                                name: "FunctionNode",
                                test: isFunctionNode
                            },
                            {
                                name: "FunctionAssignmentNode",
                                test: isFunctionAssignmentNode
                            },
                            {
                                name: "IndexNode",
                                test: isIndexNode
                            },
                            {
                                name: "Node",
                                test: isNode
                            },
                            {
                                name: "ObjectNode",
                                test: isObjectNode
                            },
                            {
                                name: "OperatorNode",
                                test: isOperatorNode
                            },
                            {
                                name: "ParenthesisNode",
                                test: isParenthesisNode
                            },
                            {
                                name: "RangeNode",
                                test: isRangeNode
                            },
                            {
                                name: "SymbolNode",
                                test: isSymbolNode
                            },
                            {
                                name: "Map",
                                test: isMap
                            },
                            {
                                name: "Object",
                                test: isObject
                            }
                        ], typed.conversions = [
                            {
                                from: "number",
                                to: "BigNumber",
                                convert: function(x) {
                                    if (BigNumber || throwNoBignumber(x), x.toExponential().replace(/e.*$/, "").replace(/^0\.?0*|\./, "").length > 15) throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: " + x + "). Use function bignumber(x) to convert to BigNumber.");
                                    return new BigNumber(x);
                                }
                            },
                            {
                                from: "number",
                                to: "Complex",
                                convert: function(x) {
                                    return Complex || throwNoComplex(x), new Complex(x, 0);
                                }
                            },
                            {
                                from: "number",
                                to: "string",
                                convert: function(x) {
                                    return x + "";
                                }
                            },
                            {
                                from: "BigNumber",
                                to: "Complex",
                                convert: function(x) {
                                    return Complex || throwNoComplex(x), new Complex(x.toNumber(), 0);
                                }
                            },
                            {
                                from: "Fraction",
                                to: "BigNumber",
                                convert: function(x) {
                                    throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.");
                                }
                            },
                            {
                                from: "Fraction",
                                to: "Complex",
                                convert: function(x) {
                                    return Complex || throwNoComplex(x), new Complex(x.valueOf(), 0);
                                }
                            },
                            {
                                from: "number",
                                to: "Fraction",
                                convert: function(x) {
                                    Fraction || throwNoFraction(x);
                                    var f = new Fraction(x);
                                    if (f.valueOf() !== x) throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: " + x + "). Use function fraction(x) to convert to Fraction.");
                                    return f;
                                }
                            },
                            {
                                from: "string",
                                to: "number",
                                convert: function(x) {
                                    var n = Number(x);
                                    if (isNaN(n)) throw new Error('Cannot convert "' + x + '" to a number');
                                    return n;
                                }
                            },
                            {
                                from: "string",
                                to: "BigNumber",
                                convert: function(x) {
                                    BigNumber || throwNoBignumber(x);
                                    try {
                                        return new BigNumber(x);
                                    } catch (err) {
                                        throw new Error('Cannot convert "' + x + '" to BigNumber');
                                    }
                                }
                            },
                            {
                                from: "string",
                                to: "Fraction",
                                convert: function(x) {
                                    Fraction || throwNoFraction(x);
                                    try {
                                        return new Fraction(x);
                                    } catch (err) {
                                        throw new Error('Cannot convert "' + x + '" to Fraction');
                                    }
                                }
                            },
                            {
                                from: "string",
                                to: "Complex",
                                convert: function(x) {
                                    Complex || throwNoComplex(x);
                                    try {
                                        return new Complex(x);
                                    } catch (err) {
                                        throw new Error('Cannot convert "' + x + '" to Complex');
                                    }
                                }
                            },
                            {
                                from: "boolean",
                                to: "number",
                                convert: function(x) {
                                    return +x;
                                }
                            },
                            {
                                from: "boolean",
                                to: "BigNumber",
                                convert: function(x) {
                                    return BigNumber || throwNoBignumber(x), new BigNumber(+x);
                                }
                            },
                            {
                                from: "boolean",
                                to: "Fraction",
                                convert: function(x) {
                                    return Fraction || throwNoFraction(x), new Fraction(+x);
                                }
                            },
                            {
                                from: "boolean",
                                to: "string",
                                convert: function(x) {
                                    return String(x);
                                }
                            },
                            {
                                from: "Array",
                                to: "Matrix",
                                convert: function(array) {
                                    return DenseMatrix || function() {
                                        throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided");
                                    }(), new DenseMatrix(array);
                                }
                            },
                            {
                                from: "Matrix",
                                to: "Array",
                                convert: function(matrix) {
                                    return matrix.valueOf();
                                }
                            }
                        ], typed;
                    })
                };
                function nearlyEqual_nearlyEqual(x, y, epsilon) {
                    if (null == epsilon) return x.eq(y);
                    if (x.eq(y)) return !0;
                    if (x.isNaN() || y.isNaN()) return !1;
                    if (x.isFinite() && y.isFinite()) {
                        var diff = x.minus(y).abs();
                        if (diff.isZero()) return !0;
                        var max = x.constructor.max(x.abs(), y.abs());
                        return diff.lte(max.times(epsilon));
                    }
                    return !1;
                }
                var createEqualScalar = factory_factory("equalScalar", [
                    "typed",
                    "config"
                ], (_ref)=>{
                    var { typed , config  } = _ref;
                    return typed("equalScalar", {
                        "boolean, boolean": function(x, y) {
                            return x === y;
                        },
                        "number, number": function(x, y) {
                            return number_nearlyEqual(x, y, config.epsilon);
                        },
                        "BigNumber, BigNumber": function(x, y) {
                            return x.eq(y) || nearlyEqual_nearlyEqual(x, y, config.epsilon);
                        },
                        "Fraction, Fraction": function(x, y) {
                            return x.equals(y);
                        },
                        "Complex, Complex": function(x, y) {
                            return function(x, y, epsilon) {
                                return number_nearlyEqual(x.re, y.re, epsilon) && number_nearlyEqual(x.im, y.im, epsilon);
                            }(x, y, config.epsilon);
                        },
                        "Unit, Unit": function(x, y) {
                            if (!x.equalBase(y)) throw new Error("Cannot compare units with different base");
                            return this(x.value, y.value);
                        }
                    });
                }), equalScalarDependencies = (factory_factory("equalScalar", [
                    "typed",
                    "config"
                ], (_ref2)=>{
                    var { typed , config  } = _ref2;
                    return typed("equalScalar", {
                        "number, number": function(x, y) {
                            return number_nearlyEqual(x, y, config.epsilon);
                        }
                    });
                }), {
                    typedDependencies,
                    createEqualScalar
                }), createSparseMatrixClass = factory_factory("SparseMatrix", [
                    "typed",
                    "equalScalar",
                    "Matrix"
                ], (_ref)=>{
                    var { typed , equalScalar , Matrix  } = _ref;
                    function SparseMatrix(data, datatype) {
                        if (!(this instanceof SparseMatrix)) throw new SyntaxError("Constructor must be called with the new operator");
                        if (datatype && !is_isString(datatype)) throw new Error("Invalid datatype: " + datatype);
                        if (is_isMatrix(data)) !function(matrix, source, datatype) {
                            "SparseMatrix" === source.type ? (matrix._values = source._values ? clone(source._values) : void 0, matrix._index = clone(source._index), matrix._ptr = clone(source._ptr), matrix._size = clone(source._size), matrix._datatype = datatype || source._datatype) : _createFromArray(matrix, source.valueOf(), datatype || source._datatype);
                        }(this, data, datatype);
                        else if (data && isArray(data.index) && isArray(data.ptr) && isArray(data.size)) this._values = data.values, this._index = data.index, this._ptr = data.ptr, this._size = data.size, this._datatype = datatype || data.datatype;
                        else if (isArray(data)) _createFromArray(this, data, datatype);
                        else {
                            if (data) throw new TypeError("Unsupported type of data (" + is_typeOf(data) + ")");
                            this._values = [], this._index = [], this._ptr = [
                                0
                            ], this._size = [
                                0,
                                0
                            ], this._datatype = datatype;
                        }
                    }
                    function _createFromArray(matrix, data, datatype) {
                        matrix._values = [], matrix._index = [], matrix._ptr = [], matrix._datatype = datatype;
                        var rows = data.length, columns = 0, eq = equalScalar, zero = 0;
                        if (is_isString(datatype) && (eq = typed.find(equalScalar, [
                            datatype,
                            datatype
                        ]) || equalScalar, zero = typed.convert(0, datatype)), rows > 0) {
                            var j = 0;
                            do {
                                matrix._ptr.push(matrix._index.length);
                                for(var i = 0; i < rows; i++){
                                    var row = data[i];
                                    if (isArray(row)) {
                                        if (0 === j && columns < row.length && (columns = row.length), j < row.length) {
                                            var v = row[j];
                                            eq(v, zero) || (matrix._values.push(v), matrix._index.push(i));
                                        }
                                    } else 0 === j && columns < 1 && (columns = 1), eq(row, zero) || (matrix._values.push(row), matrix._index.push(i));
                                }
                                j++;
                            }while (j < columns);
                        }
                        matrix._ptr.push(matrix._index.length), matrix._size = [
                            rows,
                            columns
                        ];
                    }
                    function _getsubset(matrix, idx) {
                        if (!isIndex(idx)) throw new TypeError("Invalid index");
                        if (idx.isScalar()) return matrix.get(idx.min());
                        var i, ii, k, kk, size = idx.size();
                        if (size.length !== matrix._size.length) throw new DimensionError(size.length, matrix._size.length);
                        var min = idx.min(), max = idx.max();
                        for(i = 0, ii = matrix._size.length; i < ii; i++)validateIndex(min[i], matrix._size[i]), validateIndex(max[i], matrix._size[i]);
                        var mvalues = matrix._values, mindex = matrix._index, mptr = matrix._ptr, rows = idx.dimension(0), columns = idx.dimension(1), w = [], pv = [];
                        rows.forEach(function(i, r) {
                            pv[i] = r[0], w[i] = !0;
                        });
                        var values = mvalues ? [] : void 0, index = [], ptr = [];
                        return columns.forEach(function(j) {
                            for(ptr.push(index.length), k = mptr[j], kk = mptr[j + 1]; k < kk; k++)i = mindex[k], !0 === w[i] && (index.push(pv[i]), values && values.push(mvalues[k]));
                        }), ptr.push(index.length), new SparseMatrix({
                            values,
                            index,
                            ptr,
                            size,
                            datatype: matrix._datatype
                        });
                    }
                    function _setsubset(matrix, index, submatrix, defaultValue) {
                        if (!index || !0 !== index.isIndex) throw new TypeError("Invalid index");
                        var sSize, iSize = index.size(), isScalar = index.isScalar();
                        if (is_isMatrix(submatrix) ? (sSize = submatrix.size(), submatrix = submatrix.toArray()) : sSize = array_arraySize(submatrix), isScalar) {
                            if (0 !== sSize.length) throw new TypeError("Scalar expected");
                            matrix.set(index.min(), submatrix, defaultValue);
                        } else {
                            if (1 !== iSize.length && 2 !== iSize.length) throw new DimensionError(iSize.length, matrix._size.length, "<");
                            if (sSize.length < iSize.length) {
                                for(var i = 0, outer = 0; 1 === iSize[i] && 1 === sSize[i];)i++;
                                for(; 1 === iSize[i];)outer++, i++;
                                submatrix = unsqueeze(submatrix, iSize.length, outer, sSize);
                            }
                            if (!deepStrictEqual(iSize, sSize)) throw new DimensionError(iSize, sSize, ">");
                            if (1 === iSize.length) index.dimension(0).forEach(function(dataIndex, subIndex) {
                                validateIndex(dataIndex), matrix.set([
                                    dataIndex,
                                    0
                                ], submatrix[subIndex[0]], defaultValue);
                            });
                            else {
                                var firstDimensionRange = index.dimension(0), secondDimensionRange = index.dimension(1);
                                firstDimensionRange.forEach(function(firstDataIndex, firstSubIndex) {
                                    validateIndex(firstDataIndex), secondDimensionRange.forEach(function(secondDataIndex, secondSubIndex) {
                                        validateIndex(secondDataIndex), matrix.set([
                                            firstDataIndex,
                                            secondDataIndex
                                        ], submatrix[firstSubIndex[0]][secondSubIndex[0]], defaultValue);
                                    });
                                });
                            }
                        }
                        return matrix;
                    }
                    function _getValueIndex(i, top, bottom, index) {
                        if (bottom - top == 0) return bottom;
                        for(var r = top; r < bottom; r++)if (index[r] === i) return r;
                        return top;
                    }
                    function _insert(k, i, j, v, values, index, ptr) {
                        values.splice(k, 0, v), index.splice(k, 0, i);
                        for(var x = j + 1; x < ptr.length; x++)ptr[x]++;
                    }
                    function _resize(matrix, rows, columns, defaultValue) {
                        var value = defaultValue || 0, eq = equalScalar, zero = 0;
                        is_isString(matrix._datatype) && (eq = typed.find(equalScalar, [
                            matrix._datatype,
                            matrix._datatype
                        ]) || equalScalar, zero = typed.convert(0, matrix._datatype), value = typed.convert(value, matrix._datatype));
                        var i, j, k, ins = !eq(value, zero), r = matrix._size[0], c = matrix._size[1];
                        if (columns > c) {
                            for(j = c; j < columns; j++)if (matrix._ptr[j] = matrix._values.length, ins) for(i = 0; i < r; i++)matrix._values.push(value), matrix._index.push(i);
                            matrix._ptr[columns] = matrix._values.length;
                        } else columns < c && (matrix._ptr.splice(columns + 1, c - columns), matrix._values.splice(matrix._ptr[columns], matrix._values.length), matrix._index.splice(matrix._ptr[columns], matrix._index.length));
                        if (c = columns, rows > r) {
                            if (ins) {
                                var n = 0;
                                for(j = 0; j < c; j++){
                                    matrix._ptr[j] = matrix._ptr[j] + n, k = matrix._ptr[j + 1] + n;
                                    var p = 0;
                                    for(i = r; i < rows; i++, p++)matrix._values.splice(k + p, 0, value), matrix._index.splice(k + p, 0, i), n++;
                                }
                                matrix._ptr[c] = matrix._values.length;
                            }
                        } else if (rows < r) {
                            var d = 0;
                            for(j = 0; j < c; j++){
                                matrix._ptr[j] = matrix._ptr[j] - d;
                                var k0 = matrix._ptr[j], k1 = matrix._ptr[j + 1] - d;
                                for(k = k0; k < k1; k++)(i = matrix._index[k]) > rows - 1 && (matrix._values.splice(k, 1), matrix._index.splice(k, 1), d++);
                            }
                            matrix._ptr[j] = matrix._values.length;
                        }
                        return matrix._size[0] = rows, matrix._size[1] = columns, matrix;
                    }
                    function _toArray(values, index, ptr, size, copy) {
                        var i, j, rows = size[0], columns = size[1], a = [];
                        for(i = 0; i < rows; i++)for(a[i] = [], j = 0; j < columns; j++)a[i][j] = 0;
                        for(j = 0; j < columns; j++)for(var k0 = ptr[j], k1 = ptr[j + 1], k = k0; k < k1; k++)a[i = index[k]][j] = values ? copy ? clone(values[k]) : values[k] : 1;
                        return a;
                    }
                    return SparseMatrix.prototype = new Matrix, SparseMatrix.prototype.createSparseMatrix = function(data, datatype) {
                        return new SparseMatrix(data, datatype);
                    }, SparseMatrix.prototype.type = "SparseMatrix", SparseMatrix.prototype.isSparseMatrix = !0, SparseMatrix.prototype.getDataType = function() {
                        return getArrayDataType(this._values, is_typeOf);
                    }, SparseMatrix.prototype.storage = function() {
                        return "sparse";
                    }, SparseMatrix.prototype.datatype = function() {
                        return this._datatype;
                    }, SparseMatrix.prototype.create = function(data, datatype) {
                        return new SparseMatrix(data, datatype);
                    }, SparseMatrix.prototype.density = function() {
                        var rows = this._size[0], columns = this._size[1];
                        return 0 !== rows && 0 !== columns ? this._index.length / (rows * columns) : 0;
                    }, SparseMatrix.prototype.subset = function(index, replacement, defaultValue) {
                        if (!this._values) throw new Error("Cannot invoke subset on a Pattern only matrix");
                        switch(arguments.length){
                            case 1:
                                return _getsubset(this, index);
                            case 2:
                            case 3:
                                return _setsubset(this, index, replacement, defaultValue);
                            default:
                                throw new SyntaxError("Wrong number of arguments");
                        }
                    }, SparseMatrix.prototype.get = function(index) {
                        if (!isArray(index)) throw new TypeError("Array expected");
                        if (index.length !== this._size.length) throw new DimensionError(index.length, this._size.length);
                        if (!this._values) throw new Error("Cannot invoke get on a Pattern only matrix");
                        var i = index[0], j = index[1];
                        validateIndex(i, this._size[0]), validateIndex(j, this._size[1]);
                        var k = _getValueIndex(i, this._ptr[j], this._ptr[j + 1], this._index);
                        return k < this._ptr[j + 1] && this._index[k] === i ? this._values[k] : 0;
                    }, SparseMatrix.prototype.set = function(index, v, defaultValue) {
                        if (!isArray(index)) throw new TypeError("Array expected");
                        if (index.length !== this._size.length) throw new DimensionError(index.length, this._size.length);
                        if (!this._values) throw new Error("Cannot invoke set on a Pattern only matrix");
                        var i = index[0], j = index[1], rows = this._size[0], columns = this._size[1], eq = equalScalar, zero = 0;
                        is_isString(this._datatype) && (eq = typed.find(equalScalar, [
                            this._datatype,
                            this._datatype
                        ]) || equalScalar, zero = typed.convert(0, this._datatype)), (i > rows - 1 || j > columns - 1) && (_resize(this, Math.max(i + 1, rows), Math.max(j + 1, columns), defaultValue), rows = this._size[0], columns = this._size[1]), validateIndex(i, rows), validateIndex(j, columns);
                        var k = _getValueIndex(i, this._ptr[j], this._ptr[j + 1], this._index);
                        return k < this._ptr[j + 1] && this._index[k] === i ? eq(v, zero) ? function(k, j, values, index, ptr) {
                            values.splice(k, 1), index.splice(k, 1);
                            for(var x = j + 1; x < ptr.length; x++)ptr[x]--;
                        }(k, j, this._values, this._index, this._ptr) : this._values[k] = v : _insert(k, i, j, v, this._values, this._index, this._ptr), this;
                    }, SparseMatrix.prototype.resize = function(size, defaultValue, copy) {
                        if (!is_isCollection(size)) throw new TypeError("Array or Matrix expected");
                        var sizeArray = size.valueOf().map((value)=>Array.isArray(value) && 1 === value.length ? value[0] : value);
                        if (2 !== sizeArray.length) throw new Error("Only two dimensions matrix are supported");
                        return sizeArray.forEach(function(value) {
                            if (!isNumber(value) || !isInteger(value) || value < 0) throw new TypeError("Invalid size, must contain positive integers (size: " + string_format(sizeArray) + ")");
                        }), _resize(copy ? this.clone() : this, sizeArray[0], sizeArray[1], defaultValue);
                    }, SparseMatrix.prototype.reshape = function(sizes, copy) {
                        if (!isArray(sizes)) throw new TypeError("Array expected");
                        if (2 !== sizes.length) throw new Error("Sparse matrices can only be reshaped in two dimensions");
                        sizes.forEach(function(value) {
                            if (!isNumber(value) || !isInteger(value) || value <= -2 || 0 === value) throw new TypeError("Invalid size, must contain positive integers or -1 (size: " + string_format(sizes) + ")");
                        });
                        var currentLength = this._size[0] * this._size[1];
                        if (currentLength !== (sizes = processSizesWildcard(sizes, currentLength))[0] * sizes[1]) throw new Error("Reshaping sparse matrix will result in the wrong number of elements");
                        var m = copy ? this.clone() : this;
                        if (this._size[0] === sizes[0] && this._size[1] === sizes[1]) return m;
                        for(var colIndex = [], i = 0; i < m._ptr.length; i++)for(var j = 0; j < m._ptr[i + 1] - m._ptr[i]; j++)colIndex.push(i);
                        for(var values = m._values.slice(), rowIndex = m._index.slice(), _i = 0; _i < m._index.length; _i++){
                            var r1 = rowIndex[_i], c1 = colIndex[_i], flat = r1 * m._size[1] + c1;
                            colIndex[_i] = flat % sizes[1], rowIndex[_i] = Math.floor(flat / sizes[1]);
                        }
                        m._values.length = 0, m._index.length = 0, m._ptr.length = sizes[1] + 1, m._size = sizes.slice();
                        for(var _i2 = 0; _i2 < m._ptr.length; _i2++)m._ptr[_i2] = 0;
                        for(var h = 0; h < values.length; h++){
                            var _i3 = rowIndex[h], _j = colIndex[h], v = values[h];
                            _insert(_getValueIndex(_i3, m._ptr[_j], m._ptr[_j + 1], m._index), _i3, _j, v, m._values, m._index, m._ptr);
                        }
                        return m;
                    }, SparseMatrix.prototype.clone = function() {
                        return new SparseMatrix({
                            values: this._values ? clone(this._values) : void 0,
                            index: clone(this._index),
                            ptr: clone(this._ptr),
                            size: clone(this._size),
                            datatype: this._datatype
                        });
                    }, SparseMatrix.prototype.size = function() {
                        return this._size.slice(0);
                    }, SparseMatrix.prototype.map = function(callback, skipZeros) {
                        if (!this._values) throw new Error("Cannot invoke map on a Pattern only matrix");
                        var me = this;
                        return function(matrix, minRow, maxRow, minColumn, maxColumn, callback, skipZeros) {
                            var values = [], index = [], ptr = [], eq = equalScalar, zero = 0;
                            is_isString(matrix._datatype) && (eq = typed.find(equalScalar, [
                                matrix._datatype,
                                matrix._datatype
                            ]) || equalScalar, zero = typed.convert(0, matrix._datatype));
                            for(var invoke = function(v, x, y) {
                                v = callback(v, x, y), eq(v, zero) || (values.push(v), index.push(x));
                            }, j = minColumn; j <= maxColumn; j++){
                                ptr.push(values.length);
                                var k0 = matrix._ptr[j], k1 = matrix._ptr[j + 1];
                                if (skipZeros) for(var k = k0; k < k1; k++){
                                    var i = matrix._index[k];
                                    i >= minRow && i <= maxRow && invoke(matrix._values[k], i - minRow, j - minColumn);
                                }
                                else {
                                    for(var _values = {}, _k = k0; _k < k1; _k++)_values[matrix._index[_k]] = matrix._values[_k];
                                    for(var _i5 = minRow; _i5 <= maxRow; _i5++)invoke(_i5 in _values ? _values[_i5] : 0, _i5 - minRow, j - minColumn);
                                }
                            }
                            return ptr.push(values.length), new SparseMatrix({
                                values,
                                index,
                                ptr,
                                size: [
                                    maxRow - minRow + 1,
                                    maxColumn - minColumn + 1
                                ]
                            });
                        }(this, 0, this._size[0] - 1, 0, this._size[1] - 1, function(v, i, j) {
                            return callback(v, [
                                i,
                                j
                            ], me);
                        }, skipZeros);
                    }, SparseMatrix.prototype.forEach = function(callback, skipZeros) {
                        if (!this._values) throw new Error("Cannot invoke forEach on a Pattern only matrix");
                        for(var rows = this._size[0], columns = this._size[1], j = 0; j < columns; j++){
                            var k0 = this._ptr[j], k1 = this._ptr[j + 1];
                            if (skipZeros) for(var k = k0; k < k1; k++){
                                var i = this._index[k];
                                callback(this._values[k], [
                                    i,
                                    j
                                ], this);
                            }
                            else {
                                for(var values = {}, _k2 = k0; _k2 < k1; _k2++)values[this._index[_k2]] = this._values[_k2];
                                for(var _i7 = 0; _i7 < rows; _i7++)callback(_i7 in values ? values[_i7] : 0, [
                                    _i7,
                                    j
                                ], this);
                            }
                        }
                    }, SparseMatrix.prototype[Symbol.iterator] = function*() {
                        if (!this._values) throw new Error("Cannot iterate a Pattern only matrix");
                        for(var columns = this._size[1], j = 0; j < columns; j++)for(var k0 = this._ptr[j], k1 = this._ptr[j + 1], k = k0; k < k1; k++){
                            var i = this._index[k];
                            yield {
                                value: this._values[k],
                                index: [
                                    i,
                                    j
                                ]
                            };
                        }
                    }, SparseMatrix.prototype.toArray = function() {
                        return _toArray(this._values, this._index, this._ptr, this._size, !0);
                    }, SparseMatrix.prototype.valueOf = function() {
                        return _toArray(this._values, this._index, this._ptr, this._size, !1);
                    }, SparseMatrix.prototype.format = function(options) {
                        for(var rows = this._size[0], columns = this._size[1], density = this.density(), str = "Sparse Matrix [" + string_format(rows, options) + " x " + string_format(columns, options) + "] density: " + string_format(density, options) + "\n", j = 0; j < columns; j++)for(var k0 = this._ptr[j], k1 = this._ptr[j + 1], k = k0; k < k1; k++)str += "\n    (" + string_format(this._index[k], options) + ", " + string_format(j, options) + ") ==> " + (this._values ? string_format(this._values[k], options) : "X");
                        return str;
                    }, SparseMatrix.prototype.toString = function() {
                        return string_format(this.toArray());
                    }, SparseMatrix.prototype.toJSON = function() {
                        return {
                            mathjs: "SparseMatrix",
                            values: this._values,
                            index: this._index,
                            ptr: this._ptr,
                            size: this._size,
                            datatype: this._datatype
                        };
                    }, SparseMatrix.prototype.diagonal = function(k) {
                        if (k) {
                            if (isBigNumber(k) && (k = k.toNumber()), !isNumber(k) || !isInteger(k)) throw new TypeError("The parameter k must be an integer number");
                        } else k = 0;
                        var kSuper = k > 0 ? k : 0, kSub = k < 0 ? -k : 0, rows = this._size[0], columns = this._size[1], n = Math.min(rows - kSub, columns - kSuper), values = [], index = [], ptr = [];
                        ptr[0] = 0;
                        for(var j = kSuper; j < columns && values.length < n; j++)for(var k0 = this._ptr[j], k1 = this._ptr[j + 1], x = k0; x < k1; x++){
                            var i = this._index[x];
                            if (i === j - kSuper + kSub) {
                                values.push(this._values[x]), index[values.length - 1] = i - kSub;
                                break;
                            }
                        }
                        return ptr.push(values.length), new SparseMatrix({
                            values,
                            index,
                            ptr,
                            size: [
                                n,
                                1
                            ]
                        });
                    }, SparseMatrix.fromJSON = function(json) {
                        return new SparseMatrix(json);
                    }, SparseMatrix.diagonal = function(size, value, k, defaultValue, datatype) {
                        if (!isArray(size)) throw new TypeError("Array expected, size parameter");
                        if (2 !== size.length) throw new Error("Only two dimensions matrix are supported");
                        if (size = size.map(function(s) {
                            if (isBigNumber(s) && (s = s.toNumber()), !isNumber(s) || !isInteger(s) || s < 1) throw new Error("Size values must be positive integers");
                            return s;
                        }), k) {
                            if (isBigNumber(k) && (k = k.toNumber()), !isNumber(k) || !isInteger(k)) throw new TypeError("The parameter k must be an integer number");
                        } else k = 0;
                        var eq = equalScalar, zero = 0;
                        is_isString(datatype) && (eq = typed.find(equalScalar, [
                            datatype,
                            datatype
                        ]) || equalScalar, zero = typed.convert(0, datatype));
                        var _value, kSuper = k > 0 ? k : 0, kSub = k < 0 ? -k : 0, rows = size[0], columns = size[1], n = Math.min(rows - kSub, columns - kSuper);
                        if (isArray(value)) {
                            if (value.length !== n) throw new Error("Invalid value array length");
                            _value = function(i) {
                                return value[i];
                            };
                        } else if (is_isMatrix(value)) {
                            var ms = value.size();
                            if (1 !== ms.length || ms[0] !== n) throw new Error("Invalid matrix length");
                            _value = function(i) {
                                return value.get([
                                    i
                                ]);
                            };
                        } else _value = function() {
                            return value;
                        };
                        for(var values = [], index = [], ptr = [], j = 0; j < columns; j++){
                            ptr.push(values.length);
                            var i = j - kSuper;
                            if (i >= 0 && i < n) {
                                var v = _value(i);
                                eq(v, zero) || (index.push(i + kSub), values.push(v));
                            }
                        }
                        return ptr.push(values.length), new SparseMatrix({
                            values,
                            index,
                            ptr,
                            size: [
                                rows,
                                columns
                            ]
                        });
                    }, SparseMatrix.prototype.swapRows = function(i, j) {
                        if (!(isNumber(i) && isInteger(i) && isNumber(j) && isInteger(j))) throw new Error("Row index must be positive integers");
                        if (2 !== this._size.length) throw new Error("Only two dimensional matrix is supported");
                        return validateIndex(i, this._size[0]), validateIndex(j, this._size[0]), SparseMatrix._swapRows(i, j, this._size[1], this._values, this._index, this._ptr), this;
                    }, SparseMatrix._forEachRow = function(j, values, index, ptr, callback) {
                        for(var k0 = ptr[j], k1 = ptr[j + 1], k = k0; k < k1; k++)callback(index[k], values[k]);
                    }, SparseMatrix._swapRows = function(x, y, columns, values, index, ptr) {
                        for(var j = 0; j < columns; j++){
                            var k0 = ptr[j], k1 = ptr[j + 1], kx = _getValueIndex(x, k0, k1, index), ky = _getValueIndex(y, k0, k1, index);
                            if (kx < k1 && ky < k1 && index[kx] === x && index[ky] === y) {
                                if (values) {
                                    var v = values[kx];
                                    values[kx] = values[ky], values[ky] = v;
                                }
                            } else if (kx < k1 && index[kx] === x && (ky >= k1 || index[ky] !== y)) {
                                var vx = values ? values[kx] : void 0;
                                index.splice(ky, 0, y), values && values.splice(ky, 0, vx), index.splice(ky <= kx ? kx + 1 : kx, 1), values && values.splice(ky <= kx ? kx + 1 : kx, 1);
                            } else if (ky < k1 && index[ky] === y && (kx >= k1 || index[kx] !== x)) {
                                var vy = values ? values[ky] : void 0;
                                index.splice(kx, 0, x), values && values.splice(kx, 0, vy), index.splice(kx <= ky ? ky + 1 : ky, 1), values && values.splice(kx <= ky ? ky + 1 : ky, 1);
                            }
                        }
                    }, SparseMatrix;
                }, {
                    isClass: !0
                }), SparseMatrixDependencies = {
                    MatrixDependencies,
                    equalScalarDependencies,
                    typedDependencies,
                    createSparseMatrixClass
                }, createMatrix = factory_factory("matrix", [
                    "typed",
                    "Matrix",
                    "DenseMatrix",
                    "SparseMatrix"
                ], (_ref)=>{
                    var { typed , Matrix , DenseMatrix , SparseMatrix  } = _ref;
                    return typed("matrix", {
                        "": function() {
                            return _create([]);
                        },
                        string: function(format) {
                            return _create([], format);
                        },
                        "string, string": function(format, datatype) {
                            return _create([], format, datatype);
                        },
                        Array: function(data) {
                            return _create(data);
                        },
                        Matrix: function(data) {
                            return _create(data, data.storage());
                        },
                        "Array | Matrix, string": _create,
                        "Array | Matrix, string, string": _create
                    });
                    function _create(data, format, datatype) {
                        if ("dense" === format || "default" === format || void 0 === format) return new DenseMatrix(data, datatype);
                        if ("sparse" === format) return new SparseMatrix(data, datatype);
                        throw new TypeError("Unknown matrix type " + JSON.stringify(format) + ".");
                    }
                }), matrixDependencies = {
                    DenseMatrixDependencies,
                    MatrixDependencies,
                    SparseMatrixDependencies,
                    typedDependencies,
                    createMatrix
                };
                function _getSubstring(str, index) {
                    if (!isIndex(index)) throw new TypeError("Index expected");
                    if (1 !== index.size().length) throw new DimensionError(index.size().length, 1);
                    var strLen = str.length;
                    validateIndex(index.min()[0], strLen), validateIndex(index.max()[0], strLen);
                    var range = index.dimension(0), substr = "";
                    return range.forEach(function(v) {
                        substr += str.charAt(v);
                    }), substr;
                }
                function _setSubstring(str, index, replacement, defaultValue) {
                    if (!index || !0 !== index.isIndex) throw new TypeError("Index expected");
                    if (1 !== index.size().length) throw new DimensionError(index.size().length, 1);
                    if (void 0 !== defaultValue) {
                        if ("string" != typeof defaultValue || 1 !== defaultValue.length) throw new TypeError("Single character expected as defaultValue");
                    } else defaultValue = " ";
                    var range = index.dimension(0);
                    if (range.size()[0] !== replacement.length) throw new DimensionError(range.size()[0], replacement.length);
                    var strLen = str.length;
                    validateIndex(index.min()[0]), validateIndex(index.max()[0]);
                    for(var chars = [], i = 0; i < strLen; i++)chars[i] = str.charAt(i);
                    if (range.forEach(function(v, i) {
                        chars[v] = replacement.charAt(i[0]);
                    }), chars.length > strLen) for(var _i = strLen - 1, _len = chars.length; _i < _len; _i++)chars[_i] || (chars[_i] = defaultValue);
                    return chars.join("");
                }
                function _getObjectProperty(object, index) {
                    if (1 !== index.size().length) throw new DimensionError(index.size(), 1);
                    var key = index.dimension(0);
                    if ("string" != typeof key) throw new TypeError("String expected as index to retrieve an object property");
                    return getSafeProperty(object, key);
                }
                function _setObjectProperty(object, index, replacement) {
                    if (1 !== index.size().length) throw new DimensionError(index.size(), 1);
                    var key = index.dimension(0);
                    if ("string" != typeof key) throw new TypeError("String expected as index to retrieve an object property");
                    var updated = clone(object);
                    return customs_setSafeProperty(updated, key, replacement), updated;
                }
                var subsetDependencies = {
                    matrixDependencies,
                    typedDependencies,
                    createSubset: factory_factory("subset", [
                        "typed",
                        "matrix"
                    ], (_ref)=>{
                        var { typed , matrix  } = _ref;
                        return typed("subset", {
                            "Array, Index": function(value, index) {
                                var subset = matrix(value).subset(index);
                                return index.isScalar() ? subset : subset.valueOf();
                            },
                            "Matrix, Index": function(value, index) {
                                return value.subset(index);
                            },
                            "Object, Index": _getObjectProperty,
                            "string, Index": _getSubstring,
                            "Array, Index, any": function(value, index, replacement) {
                                return matrix(clone(value)).subset(index, replacement, void 0).valueOf();
                            },
                            "Array, Index, any, any": function(value, index, replacement, defaultValue) {
                                return matrix(clone(value)).subset(index, replacement, defaultValue).valueOf();
                            },
                            "Matrix, Index, any": function(value, index, replacement) {
                                return value.clone().subset(index, replacement);
                            },
                            "Matrix, Index, any, any": function(value, index, replacement, defaultValue) {
                                return value.clone().subset(index, replacement, defaultValue);
                            },
                            "string, Index, string": _setSubstring,
                            "string, Index, string, string": _setSubstring,
                            "Object, Index, any": _setObjectProperty
                        });
                    })
                };
                function errorTransform(err) {
                    return err && err.isIndexError ? new IndexError_IndexError(err.index + 1, err.min + 1, void 0 !== err.max ? err.max + 1 : void 0) : err;
                }
                function accessFactory(_ref) {
                    var { subset  } = _ref;
                    return function(object, index) {
                        try {
                            if (Array.isArray(object)) return subset(object, index);
                            if (object && "function" == typeof object.subset) return object.subset(index);
                            if ("string" == typeof object) return subset(object, index);
                            if ("object" == typeof object) {
                                if (!index.isObjectProperty()) throw new TypeError("Cannot apply a numeric index as object property");
                                return getSafeProperty(object, index.getObjectProperty());
                            }
                            throw new TypeError("Cannot apply index: unsupported type of object");
                        } catch (err) {
                            throw errorTransform(err);
                        }
                    };
                }
                var AccessorNodeDependencies = {
                    NodeDependencies,
                    subsetDependencies,
                    createAccessorNode: factory_factory("AccessorNode", [
                        "subset",
                        "Node"
                    ], (_ref)=>{
                        var { subset , Node  } = _ref, access = accessFactory({
                            subset
                        });
                        function AccessorNode(object, index) {
                            if (!(this instanceof AccessorNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (!isNode(object)) throw new TypeError('Node expected for parameter "object"');
                            if (!isIndexNode(index)) throw new TypeError('IndexNode expected for parameter "index"');
                            this.object = object || null, this.index = index, Object.defineProperty(this, "name", {
                                get: (function() {
                                    return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
                                }).bind(this),
                                set: function() {
                                    throw new Error("Cannot assign a new name, name is read-only");
                                }
                            });
                        }
                        function needParenthesis(node) {
                            return !(isAccessorNode(node) || isArrayNode(node) || isConstantNode(node) || isFunctionNode(node) || isObjectNode(node) || isParenthesisNode(node) || isSymbolNode(node));
                        }
                        return AccessorNode.prototype = new Node, AccessorNode.prototype.type = "AccessorNode", AccessorNode.prototype.isAccessorNode = !0, AccessorNode.prototype._compile = function(math, argNames) {
                            var evalObject = this.object._compile(math, argNames), evalIndex = this.index._compile(math, argNames);
                            if (this.index.isObjectProperty()) {
                                var prop = this.index.getObjectProperty();
                                return function(scope, args, context) {
                                    return getSafeProperty(evalObject(scope, args, context), prop);
                                };
                            }
                            return function(scope, args, context) {
                                var object = evalObject(scope, args, context), index = evalIndex(scope, args, object);
                                return access(object, index);
                            };
                        }, AccessorNode.prototype.forEach = function(callback) {
                            callback(this.object, "object", this), callback(this.index, "index", this);
                        }, AccessorNode.prototype.map = function(callback) {
                            return new AccessorNode(this._ifNode(callback(this.object, "object", this)), this._ifNode(callback(this.index, "index", this)));
                        }, AccessorNode.prototype.clone = function() {
                            return new AccessorNode(this.object, this.index);
                        }, AccessorNode.prototype._toString = function(options) {
                            var object = this.object.toString(options);
                            return needParenthesis(this.object) && (object = "(" + object + ")"), object + this.index.toString(options);
                        }, AccessorNode.prototype.toHTML = function(options) {
                            var object = this.object.toHTML(options);
                            return needParenthesis(this.object) && (object = '<span class="math-parenthesis math-round-parenthesis">(</span>' + object + '<span class="math-parenthesis math-round-parenthesis">)</span>'), object + this.index.toHTML(options);
                        }, AccessorNode.prototype._toTex = function(options) {
                            var object = this.object.toTex(options);
                            return needParenthesis(this.object) && (object = "\\left(' + object + '\\right)"), object + this.index.toTex(options);
                        }, AccessorNode.prototype.toJSON = function() {
                            return {
                                mathjs: "AccessorNode",
                                object: this.object,
                                index: this.index
                            };
                        }, AccessorNode.fromJSON = function(json) {
                            return new AccessorNode(json.object, json.index);
                        }, AccessorNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, ArrayNodeDependencies = {
                    NodeDependencies,
                    createArrayNode: factory_factory("ArrayNode", [
                        "Node"
                    ], (_ref)=>{
                        var { Node  } = _ref;
                        function ArrayNode(items) {
                            if (!(this instanceof ArrayNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (this.items = items || [], !Array.isArray(this.items) || !this.items.every(isNode)) throw new TypeError("Array containing Nodes expected");
                        }
                        return ArrayNode.prototype = new Node, ArrayNode.prototype.type = "ArrayNode", ArrayNode.prototype.isArrayNode = !0, ArrayNode.prototype._compile = function(math, argNames) {
                            var evalItems = map(this.items, function(item) {
                                return item._compile(math, argNames);
                            });
                            if ("Array" !== math.config.matrix) {
                                var matrix = math.matrix;
                                return function(scope, args, context) {
                                    return matrix(map(evalItems, function(evalItem) {
                                        return evalItem(scope, args, context);
                                    }));
                                };
                            }
                            return function(scope, args, context) {
                                return map(evalItems, function(evalItem) {
                                    return evalItem(scope, args, context);
                                });
                            };
                        }, ArrayNode.prototype.forEach = function(callback) {
                            for(var i = 0; i < this.items.length; i++)callback(this.items[i], "items[" + i + "]", this);
                        }, ArrayNode.prototype.map = function(callback) {
                            for(var items = [], i = 0; i < this.items.length; i++)items[i] = this._ifNode(callback(this.items[i], "items[" + i + "]", this));
                            return new ArrayNode(items);
                        }, ArrayNode.prototype.clone = function() {
                            return new ArrayNode(this.items.slice(0));
                        }, ArrayNode.prototype._toString = function(options) {
                            return "[" + this.items.map(function(node) {
                                return node.toString(options);
                            }).join(", ") + "]";
                        }, ArrayNode.prototype.toJSON = function() {
                            return {
                                mathjs: "ArrayNode",
                                items: this.items
                            };
                        }, ArrayNode.fromJSON = function(json) {
                            return new ArrayNode(json.items);
                        }, ArrayNode.prototype.toHTML = function(options) {
                            return '<span class="math-parenthesis math-square-parenthesis">[</span>' + this.items.map(function(node) {
                                return node.toHTML(options);
                            }).join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
                        }, ArrayNode.prototype._toTex = function(options) {
                            return function itemsToTex(items, nested) {
                                var mixedItems = items.some(isArrayNode) && !items.every(isArrayNode), itemsFormRow = nested || mixedItems, itemSep = itemsFormRow ? "&" : "\\\\", itemsTex = items.map(function(node) {
                                    return node.items ? itemsToTex(node.items, !nested) : node.toTex(options);
                                }).join(itemSep);
                                return mixedItems || !itemsFormRow || itemsFormRow && !nested ? "\\begin{bmatrix}" + itemsTex + "\\end{bmatrix}" : itemsTex;
                            }(this.items, !1);
                        }, ArrayNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                };
                var properties = [
                    {
                        AssignmentNode: {},
                        FunctionAssignmentNode: {}
                    },
                    {
                        ConditionalNode: {
                            latexLeftParens: !1,
                            latexRightParens: !1,
                            latexParens: !1
                        }
                    },
                    {
                        "OperatorNode:or": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:xor": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:and": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:bitOr": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:bitXor": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:bitAnd": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:equal": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:unequal": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:smaller": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:larger": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:smallerEq": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:largerEq": {
                            associativity: "left",
                            associativeWith: []
                        },
                        RelationalNode: {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:leftShift": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:rightArithShift": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:rightLogShift": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:to": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        RangeNode: {}
                    },
                    {
                        "OperatorNode:add": {
                            associativity: "left",
                            associativeWith: [
                                "OperatorNode:add",
                                "OperatorNode:subtract"
                            ]
                        },
                        "OperatorNode:subtract": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:multiply": {
                            associativity: "left",
                            associativeWith: [
                                "OperatorNode:multiply",
                                "OperatorNode:divide",
                                "Operator:dotMultiply",
                                "Operator:dotDivide"
                            ]
                        },
                        "OperatorNode:divide": {
                            associativity: "left",
                            associativeWith: [],
                            latexLeftParens: !1,
                            latexRightParens: !1,
                            latexParens: !1
                        },
                        "OperatorNode:dotMultiply": {
                            associativity: "left",
                            associativeWith: [
                                "OperatorNode:multiply",
                                "OperatorNode:divide",
                                "OperatorNode:dotMultiply",
                                "OperatorNode:doDivide"
                            ]
                        },
                        "OperatorNode:dotDivide": {
                            associativity: "left",
                            associativeWith: []
                        },
                        "OperatorNode:mod": {
                            associativity: "left",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:unaryPlus": {
                            associativity: "right"
                        },
                        "OperatorNode:unaryMinus": {
                            associativity: "right"
                        },
                        "OperatorNode:bitNot": {
                            associativity: "right"
                        },
                        "OperatorNode:not": {
                            associativity: "right"
                        }
                    },
                    {
                        "OperatorNode:pow": {
                            associativity: "right",
                            associativeWith: [],
                            latexRightParens: !1
                        },
                        "OperatorNode:dotPow": {
                            associativity: "right",
                            associativeWith: []
                        }
                    },
                    {
                        "OperatorNode:factorial": {
                            associativity: "left"
                        }
                    },
                    {
                        "OperatorNode:transpose": {
                            associativity: "left"
                        }
                    }
                ];
                function getPrecedence(_node, parenthesis) {
                    var node = _node;
                    "keep" !== parenthesis && (node = _node.getContent());
                    for(var identifier = node.getIdentifier(), i = 0; i < properties.length; i++)if (identifier in properties[i]) return i;
                    return null;
                }
                function getAssociativity(_node, parenthesis) {
                    var node = _node;
                    "keep" !== parenthesis && (node = _node.getContent());
                    var identifier = node.getIdentifier(), index = getPrecedence(node, parenthesis);
                    if (null === index) return null;
                    var property = properties[index][identifier];
                    if (object_hasOwnProperty(property, "associativity")) {
                        if ("left" === property.associativity) return "left";
                        if ("right" === property.associativity) return "right";
                        throw Error("'" + identifier + "' has the invalid associativity '" + property.associativity + "'.");
                    }
                    return null;
                }
                function isAssociativeWith(nodeA, nodeB, parenthesis) {
                    var a = "keep" !== parenthesis ? nodeA.getContent() : nodeA, b = "keep" !== parenthesis ? nodeA.getContent() : nodeB, identifierA = a.getIdentifier(), identifierB = b.getIdentifier(), index = getPrecedence(a, parenthesis);
                    if (null === index) return null;
                    var property = properties[index][identifierA];
                    if (object_hasOwnProperty(property, "associativeWith") && property.associativeWith instanceof Array) {
                        for(var i = 0; i < property.associativeWith.length; i++)if (property.associativeWith[i] === identifierB) return !0;
                        return !1;
                    }
                    return null;
                }
                var AssignmentNodeDependencies = {
                    matrixDependencies,
                    NodeDependencies,
                    subsetDependencies,
                    createAssignmentNode: factory_factory("AssignmentNode", [
                        "subset",
                        "?matrix",
                        "Node"
                    ], (_ref)=>{
                        var { subset , matrix , Node  } = _ref, access = accessFactory({
                            subset
                        }), assign = function(_ref) {
                            var { subset , matrix  } = _ref;
                            return function(object, index, value) {
                                try {
                                    if (Array.isArray(object)) return matrix(object).subset(index, value).valueOf();
                                    if (object && "function" == typeof object.subset) return object.subset(index, value);
                                    if ("string" == typeof object) return subset(object, index, value);
                                    if ("object" == typeof object) {
                                        if (!index.isObjectProperty()) throw TypeError("Cannot apply a numeric index as object property");
                                        return customs_setSafeProperty(object, index.getObjectProperty(), value), object;
                                    }
                                    throw new TypeError("Cannot apply index: unsupported type of object");
                                } catch (err) {
                                    throw errorTransform(err);
                                }
                            };
                        }({
                            subset,
                            matrix
                        });
                        function AssignmentNode(object, index, value) {
                            if (!(this instanceof AssignmentNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (this.object = object, this.index = value ? index : null, this.value = value || index, !isSymbolNode(object) && !isAccessorNode(object)) throw new TypeError('SymbolNode or AccessorNode expected as "object"');
                            if (isSymbolNode(object) && "end" === object.name) throw new Error('Cannot assign to symbol "end"');
                            if (this.index && !isIndexNode(this.index)) throw new TypeError('IndexNode expected as "index"');
                            if (!isNode(this.value)) throw new TypeError('Node expected as "value"');
                            Object.defineProperty(this, "name", {
                                get: (function() {
                                    return this.index ? this.index.isObjectProperty() ? this.index.getObjectProperty() : "" : this.object.name || "";
                                }).bind(this),
                                set: function() {
                                    throw new Error("Cannot assign a new name, name is read-only");
                                }
                            });
                        }
                        function needParenthesis(node, parenthesis) {
                            parenthesis || (parenthesis = "keep");
                            var precedence = getPrecedence(node, parenthesis), exprPrecedence = getPrecedence(node.value, parenthesis);
                            return "all" === parenthesis || null !== exprPrecedence && exprPrecedence <= precedence;
                        }
                        return AssignmentNode.prototype = new Node, AssignmentNode.prototype.type = "AssignmentNode", AssignmentNode.prototype.isAssignmentNode = !0, AssignmentNode.prototype._compile = function(math, argNames) {
                            var evalObject = this.object._compile(math, argNames), evalIndex = this.index ? this.index._compile(math, argNames) : null, evalValue = this.value._compile(math, argNames), name = this.object.name;
                            if (this.index) {
                                if (this.index.isObjectProperty()) {
                                    var prop = this.index.getObjectProperty();
                                    return function(scope, args, context) {
                                        var object = evalObject(scope, args, context), value = evalValue(scope, args, context);
                                        return customs_setSafeProperty(object, prop, value), value;
                                    };
                                }
                                if (isSymbolNode(this.object)) return function(scope, args, context) {
                                    var childObject = evalObject(scope, args, context), value = evalValue(scope, args, context), index = evalIndex(scope, args, childObject);
                                    return scope.set(name, assign(childObject, index, value)), value;
                                };
                                var evalParentObject = this.object.object._compile(math, argNames);
                                if (this.object.index.isObjectProperty()) {
                                    var parentProp = this.object.index.getObjectProperty();
                                    return function(scope, args, context) {
                                        var parent = evalParentObject(scope, args, context), childObject = getSafeProperty(parent, parentProp), index = evalIndex(scope, args, childObject), value = evalValue(scope, args, context);
                                        return customs_setSafeProperty(parent, parentProp, assign(childObject, index, value)), value;
                                    };
                                }
                                var evalParentIndex = this.object.index._compile(math, argNames);
                                return function(scope, args, context) {
                                    var parent = evalParentObject(scope, args, context), parentIndex = evalParentIndex(scope, args, parent), childObject = access(parent, parentIndex), index = evalIndex(scope, args, childObject), value = evalValue(scope, args, context);
                                    return assign(parent, parentIndex, assign(childObject, index, value)), value;
                                };
                            }
                            if (!isSymbolNode(this.object)) throw new TypeError("SymbolNode expected as object");
                            return function(scope, args, context) {
                                var value = evalValue(scope, args, context);
                                return scope.set(name, value), value;
                            };
                        }, AssignmentNode.prototype.forEach = function(callback) {
                            callback(this.object, "object", this), this.index && callback(this.index, "index", this), callback(this.value, "value", this);
                        }, AssignmentNode.prototype.map = function(callback) {
                            return new AssignmentNode(this._ifNode(callback(this.object, "object", this)), this.index ? this._ifNode(callback(this.index, "index", this)) : null, this._ifNode(callback(this.value, "value", this)));
                        }, AssignmentNode.prototype.clone = function() {
                            return new AssignmentNode(this.object, this.index, this.value);
                        }, AssignmentNode.prototype._toString = function(options) {
                            var object = this.object.toString(options), index = this.index ? this.index.toString(options) : "", value = this.value.toString(options);
                            return needParenthesis(this, options && options.parenthesis) && (value = "(" + value + ")"), object + index + " = " + value;
                        }, AssignmentNode.prototype.toJSON = function() {
                            return {
                                mathjs: "AssignmentNode",
                                object: this.object,
                                index: this.index,
                                value: this.value
                            };
                        }, AssignmentNode.fromJSON = function(json) {
                            return new AssignmentNode(json.object, json.index, json.value);
                        }, AssignmentNode.prototype.toHTML = function(options) {
                            var object = this.object.toHTML(options), index = this.index ? this.index.toHTML(options) : "", value = this.value.toHTML(options);
                            return needParenthesis(this, options && options.parenthesis) && (value = '<span class="math-paranthesis math-round-parenthesis">(</span>' + value + '<span class="math-paranthesis math-round-parenthesis">)</span>'), object + index + '<span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + value;
                        }, AssignmentNode.prototype._toTex = function(options) {
                            var object = this.object.toTex(options), index = this.index ? this.index.toTex(options) : "", value = this.value.toTex(options);
                            return needParenthesis(this, options && options.parenthesis) && (value = "\\left(".concat(value, "\\right)")), object + index + ":=" + value;
                        }, AssignmentNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, BlockNodeDependencies = {
                    NodeDependencies,
                    ResultSetDependencies: {
                        createResultSet: factory_factory("ResultSet", [], ()=>{
                            function ResultSet(entries) {
                                if (!(this instanceof ResultSet)) throw new SyntaxError("Constructor must be called with the new operator");
                                this.entries = entries || [];
                            }
                            return ResultSet.prototype.type = "ResultSet", ResultSet.prototype.isResultSet = !0, ResultSet.prototype.valueOf = function() {
                                return this.entries;
                            }, ResultSet.prototype.toString = function() {
                                return "[" + this.entries.join(", ") + "]";
                            }, ResultSet.prototype.toJSON = function() {
                                return {
                                    mathjs: "ResultSet",
                                    entries: this.entries
                                };
                            }, ResultSet.fromJSON = function(json) {
                                return new ResultSet(json.entries);
                            }, ResultSet;
                        }, {
                            isClass: !0
                        })
                    },
                    createBlockNode: factory_factory("BlockNode", [
                        "ResultSet",
                        "Node"
                    ], (_ref)=>{
                        var { ResultSet , Node  } = _ref;
                        function BlockNode(blocks) {
                            if (!(this instanceof BlockNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (!Array.isArray(blocks)) throw new Error("Array expected");
                            this.blocks = blocks.map(function(block) {
                                var node = block && block.node, visible = !block || void 0 === block.visible || block.visible;
                                if (!isNode(node)) throw new TypeError('Property "node" must be a Node');
                                if ("boolean" != typeof visible) throw new TypeError('Property "visible" must be a boolean');
                                return {
                                    node,
                                    visible
                                };
                            });
                        }
                        return BlockNode.prototype = new Node, BlockNode.prototype.type = "BlockNode", BlockNode.prototype.isBlockNode = !0, BlockNode.prototype._compile = function(math, argNames) {
                            var evalBlocks = map(this.blocks, function(block) {
                                return {
                                    evaluate: block.node._compile(math, argNames),
                                    visible: block.visible
                                };
                            });
                            return function(scope, args, context) {
                                var results = [];
                                return forEach(evalBlocks, function(block) {
                                    var result = block.evaluate(scope, args, context);
                                    block.visible && results.push(result);
                                }), new ResultSet(results);
                            };
                        }, BlockNode.prototype.forEach = function(callback) {
                            for(var i = 0; i < this.blocks.length; i++)callback(this.blocks[i].node, "blocks[" + i + "].node", this);
                        }, BlockNode.prototype.map = function(callback) {
                            for(var blocks = [], i = 0; i < this.blocks.length; i++){
                                var block = this.blocks[i], node = this._ifNode(callback(block.node, "blocks[" + i + "].node", this));
                                blocks[i] = {
                                    node,
                                    visible: block.visible
                                };
                            }
                            return new BlockNode(blocks);
                        }, BlockNode.prototype.clone = function() {
                            return new BlockNode(this.blocks.map(function(block) {
                                return {
                                    node: block.node,
                                    visible: block.visible
                                };
                            }));
                        }, BlockNode.prototype._toString = function(options) {
                            return this.blocks.map(function(param) {
                                return param.node.toString(options) + (param.visible ? "" : ";");
                            }).join("\n");
                        }, BlockNode.prototype.toJSON = function() {
                            return {
                                mathjs: "BlockNode",
                                blocks: this.blocks
                            };
                        }, BlockNode.fromJSON = function(json) {
                            return new BlockNode(json.blocks);
                        }, BlockNode.prototype.toHTML = function(options) {
                            return this.blocks.map(function(param) {
                                return param.node.toHTML(options) + (param.visible ? "" : '<span class="math-separator">;</span>');
                            }).join('<span class="math-separator"><br /></span>');
                        }, BlockNode.prototype._toTex = function(options) {
                            return this.blocks.map(function(param) {
                                return param.node.toTex(options) + (param.visible ? "" : ";");
                            }).join("\\;\\;\n");
                        }, BlockNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, ConditionalNodeDependencies = {
                    NodeDependencies,
                    createConditionalNode: factory_factory("ConditionalNode", [
                        "Node"
                    ], (_ref)=>{
                        var { Node  } = _ref;
                        function ConditionalNode(condition, trueExpr, falseExpr) {
                            if (!(this instanceof ConditionalNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (!isNode(condition)) throw new TypeError("Parameter condition must be a Node");
                            if (!isNode(trueExpr)) throw new TypeError("Parameter trueExpr must be a Node");
                            if (!isNode(falseExpr)) throw new TypeError("Parameter falseExpr must be a Node");
                            this.condition = condition, this.trueExpr = trueExpr, this.falseExpr = falseExpr;
                        }
                        return ConditionalNode.prototype = new Node, ConditionalNode.prototype.type = "ConditionalNode", ConditionalNode.prototype.isConditionalNode = !0, ConditionalNode.prototype._compile = function(math, argNames) {
                            var evalCondition = this.condition._compile(math, argNames), evalTrueExpr = this.trueExpr._compile(math, argNames), evalFalseExpr = this.falseExpr._compile(math, argNames);
                            return function(scope, args, context) {
                                return function(condition) {
                                    if ("number" == typeof condition || "boolean" == typeof condition || "string" == typeof condition) return !!condition;
                                    if (condition) {
                                        if (isBigNumber(condition)) return !condition.isZero();
                                        if (isComplex(condition)) return !(!condition.re && !condition.im);
                                        if (isUnit(condition)) return !!condition.value;
                                    }
                                    if (null == condition) return !1;
                                    throw new TypeError('Unsupported type of condition "' + is_typeOf(condition) + '"');
                                }(evalCondition(scope, args, context)) ? evalTrueExpr(scope, args, context) : evalFalseExpr(scope, args, context);
                            };
                        }, ConditionalNode.prototype.forEach = function(callback) {
                            callback(this.condition, "condition", this), callback(this.trueExpr, "trueExpr", this), callback(this.falseExpr, "falseExpr", this);
                        }, ConditionalNode.prototype.map = function(callback) {
                            return new ConditionalNode(this._ifNode(callback(this.condition, "condition", this)), this._ifNode(callback(this.trueExpr, "trueExpr", this)), this._ifNode(callback(this.falseExpr, "falseExpr", this)));
                        }, ConditionalNode.prototype.clone = function() {
                            return new ConditionalNode(this.condition, this.trueExpr, this.falseExpr);
                        }, ConditionalNode.prototype._toString = function(options) {
                            var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", precedence = getPrecedence(this, parenthesis), condition = this.condition.toString(options), conditionPrecedence = getPrecedence(this.condition, parenthesis);
                            ("all" === parenthesis || "OperatorNode" === this.condition.type || null !== conditionPrecedence && conditionPrecedence <= precedence) && (condition = "(" + condition + ")");
                            var trueExpr = this.trueExpr.toString(options), truePrecedence = getPrecedence(this.trueExpr, parenthesis);
                            ("all" === parenthesis || "OperatorNode" === this.trueExpr.type || null !== truePrecedence && truePrecedence <= precedence) && (trueExpr = "(" + trueExpr + ")");
                            var falseExpr = this.falseExpr.toString(options), falsePrecedence = getPrecedence(this.falseExpr, parenthesis);
                            return ("all" === parenthesis || "OperatorNode" === this.falseExpr.type || null !== falsePrecedence && falsePrecedence <= precedence) && (falseExpr = "(" + falseExpr + ")"), condition + " ? " + trueExpr + " : " + falseExpr;
                        }, ConditionalNode.prototype.toJSON = function() {
                            return {
                                mathjs: "ConditionalNode",
                                condition: this.condition,
                                trueExpr: this.trueExpr,
                                falseExpr: this.falseExpr
                            };
                        }, ConditionalNode.fromJSON = function(json) {
                            return new ConditionalNode(json.condition, json.trueExpr, json.falseExpr);
                        }, ConditionalNode.prototype.toHTML = function(options) {
                            var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", precedence = getPrecedence(this, parenthesis), condition = this.condition.toHTML(options), conditionPrecedence = getPrecedence(this.condition, parenthesis);
                            ("all" === parenthesis || "OperatorNode" === this.condition.type || null !== conditionPrecedence && conditionPrecedence <= precedence) && (condition = '<span class="math-parenthesis math-round-parenthesis">(</span>' + condition + '<span class="math-parenthesis math-round-parenthesis">)</span>');
                            var trueExpr = this.trueExpr.toHTML(options), truePrecedence = getPrecedence(this.trueExpr, parenthesis);
                            ("all" === parenthesis || "OperatorNode" === this.trueExpr.type || null !== truePrecedence && truePrecedence <= precedence) && (trueExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + trueExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>');
                            var falseExpr = this.falseExpr.toHTML(options), falsePrecedence = getPrecedence(this.falseExpr, parenthesis);
                            return ("all" === parenthesis || "OperatorNode" === this.falseExpr.type || null !== falsePrecedence && falsePrecedence <= precedence) && (falseExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + falseExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>'), condition + '<span class="math-operator math-conditional-operator">?</span>' + trueExpr + '<span class="math-operator math-conditional-operator">:</span>' + falseExpr;
                        }, ConditionalNode.prototype._toTex = function(options) {
                            return "\\begin{cases} {" + this.trueExpr.toTex(options) + "}, &\\quad{\\text{if }\\;" + this.condition.toTex(options) + "}\\\\{" + this.falseExpr.toTex(options) + "}, &\\quad{\\text{otherwise}}\\end{cases}";
                        }, ConditionalNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, dist = __webpack_require__(928), latexSymbols = {
                    Alpha: "A",
                    alpha: "\\alpha",
                    Beta: "B",
                    beta: "\\beta",
                    Gamma: "\\Gamma",
                    gamma: "\\gamma",
                    Delta: "\\Delta",
                    delta: "\\delta",
                    Epsilon: "E",
                    epsilon: "\\epsilon",
                    varepsilon: "\\varepsilon",
                    Zeta: "Z",
                    zeta: "\\zeta",
                    Eta: "H",
                    eta: "\\eta",
                    Theta: "\\Theta",
                    theta: "\\theta",
                    vartheta: "\\vartheta",
                    Iota: "I",
                    iota: "\\iota",
                    Kappa: "K",
                    kappa: "\\kappa",
                    varkappa: "\\varkappa",
                    Lambda: "\\Lambda",
                    lambda: "\\lambda",
                    Mu: "M",
                    mu: "\\mu",
                    Nu: "N",
                    nu: "\\nu",
                    Xi: "\\Xi",
                    xi: "\\xi",
                    Omicron: "O",
                    omicron: "o",
                    Pi: "\\Pi",
                    pi: "\\pi",
                    varpi: "\\varpi",
                    Rho: "P",
                    rho: "\\rho",
                    varrho: "\\varrho",
                    Sigma: "\\Sigma",
                    sigma: "\\sigma",
                    varsigma: "\\varsigma",
                    Tau: "T",
                    tau: "\\tau",
                    Upsilon: "\\Upsilon",
                    upsilon: "\\upsilon",
                    Phi: "\\Phi",
                    phi: "\\phi",
                    varphi: "\\varphi",
                    Chi: "X",
                    chi: "\\chi",
                    Psi: "\\Psi",
                    psi: "\\psi",
                    Omega: "\\Omega",
                    omega: "\\omega",
                    true: "\\mathrm{True}",
                    false: "\\mathrm{False}",
                    i: "i",
                    inf: "\\infty",
                    Inf: "\\infty",
                    infinity: "\\infty",
                    Infinity: "\\infty",
                    oo: "\\infty",
                    lim: "\\lim",
                    undefined: "\\mathbf{?}"
                }, latexOperators = {
                    transpose: "^\\top",
                    ctranspose: "^H",
                    factorial: "!",
                    pow: "^",
                    dotPow: ".^\\wedge",
                    unaryPlus: "+",
                    unaryMinus: "-",
                    bitNot: "\\~",
                    not: "\\neg",
                    multiply: "\\cdot",
                    divide: "\\frac",
                    dotMultiply: ".\\cdot",
                    dotDivide: ".:",
                    mod: "\\mod",
                    add: "+",
                    subtract: "-",
                    to: "\\rightarrow",
                    leftShift: "<<",
                    rightArithShift: ">>",
                    rightLogShift: ">>>",
                    equal: "=",
                    unequal: "\\neq",
                    smaller: "<",
                    larger: ">",
                    smallerEq: "\\leq",
                    largerEq: "\\geq",
                    bitAnd: "\\&",
                    bitXor: "\\underline{|}",
                    bitOr: "|",
                    and: "\\wedge",
                    xor: "\\veebar",
                    or: "\\vee"
                }, latexFunctions = {
                    abs: {
                        1: "\\left|${args[0]}\\right|"
                    },
                    add: {
                        2: "\\left(${args[0]}".concat(latexOperators.add, "${args[1]}\\right)")
                    },
                    cbrt: {
                        1: "\\sqrt[3]{${args[0]}}"
                    },
                    ceil: {
                        1: "\\left\\lceil${args[0]}\\right\\rceil"
                    },
                    cube: {
                        1: "\\left(${args[0]}\\right)^3"
                    },
                    divide: {
                        2: "\\frac{${args[0]}}{${args[1]}}"
                    },
                    dotDivide: {
                        2: "\\left(${args[0]}".concat(latexOperators.dotDivide, "${args[1]}\\right)")
                    },
                    dotMultiply: {
                        2: "\\left(${args[0]}".concat(latexOperators.dotMultiply, "${args[1]}\\right)")
                    },
                    dotPow: {
                        2: "\\left(${args[0]}".concat(latexOperators.dotPow, "${args[1]}\\right)")
                    },
                    exp: {
                        1: "\\exp\\left(${args[0]}\\right)"
                    },
                    expm1: "\\left(e".concat(latexOperators.pow, "{${args[0]}}-1\\right)"),
                    fix: {
                        1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
                    },
                    floor: {
                        1: "\\left\\lfloor${args[0]}\\right\\rfloor"
                    },
                    gcd: "\\gcd\\left(${args}\\right)",
                    hypot: "\\hypot\\left(${args}\\right)",
                    log: {
                        1: "\\ln\\left(${args[0]}\\right)",
                        2: "\\log_{${args[1]}}\\left(${args[0]}\\right)"
                    },
                    log10: {
                        1: "\\log_{10}\\left(${args[0]}\\right)"
                    },
                    log1p: {
                        1: "\\ln\\left(${args[0]}+1\\right)",
                        2: "\\log_{${args[1]}}\\left(${args[0]}+1\\right)"
                    },
                    log2: "\\log_{2}\\left(${args[0]}\\right)",
                    mod: {
                        2: "\\left(${args[0]}".concat(latexOperators.mod, "${args[1]}\\right)")
                    },
                    multiply: {
                        2: "\\left(${args[0]}".concat(latexOperators.multiply, "${args[1]}\\right)")
                    },
                    norm: {
                        1: "\\left\\|${args[0]}\\right\\|",
                        2: void 0
                    },
                    nthRoot: {
                        2: "\\sqrt[${args[1]}]{${args[0]}}"
                    },
                    nthRoots: {
                        2: "\\{y : $y^{args[1]} = {${args[0]}}\\}"
                    },
                    pow: {
                        2: "\\left(${args[0]}\\right)".concat(latexOperators.pow, "{${args[1]}}")
                    },
                    round: {
                        1: "\\left\\lfloor${args[0]}\\right\\rceil",
                        2: void 0
                    },
                    sign: {
                        1: "\\mathrm{${name}}\\left(${args[0]}\\right)"
                    },
                    sqrt: {
                        1: "\\sqrt{${args[0]}}"
                    },
                    square: {
                        1: "\\left(${args[0]}\\right)^2"
                    },
                    subtract: {
                        2: "\\left(${args[0]}".concat(latexOperators.subtract, "${args[1]}\\right)")
                    },
                    unaryMinus: {
                        1: "".concat(latexOperators.unaryMinus, "\\left(${args[0]}\\right)")
                    },
                    unaryPlus: {
                        1: "".concat(latexOperators.unaryPlus, "\\left(${args[0]}\\right)")
                    },
                    bitAnd: {
                        2: "\\left(${args[0]}".concat(latexOperators.bitAnd, "${args[1]}\\right)")
                    },
                    bitNot: {
                        1: latexOperators.bitNot + "\\left(${args[0]}\\right)"
                    },
                    bitOr: {
                        2: "\\left(${args[0]}".concat(latexOperators.bitOr, "${args[1]}\\right)")
                    },
                    bitXor: {
                        2: "\\left(${args[0]}".concat(latexOperators.bitXor, "${args[1]}\\right)")
                    },
                    leftShift: {
                        2: "\\left(${args[0]}".concat(latexOperators.leftShift, "${args[1]}\\right)")
                    },
                    rightArithShift: {
                        2: "\\left(${args[0]}".concat(latexOperators.rightArithShift, "${args[1]}\\right)")
                    },
                    rightLogShift: {
                        2: "\\left(${args[0]}".concat(latexOperators.rightLogShift, "${args[1]}\\right)")
                    },
                    bellNumbers: {
                        1: "\\mathrm{B}_{${args[0]}}"
                    },
                    catalan: {
                        1: "\\mathrm{C}_{${args[0]}}"
                    },
                    stirlingS2: {
                        2: "\\mathrm{S}\\left(${args}\\right)"
                    },
                    arg: {
                        1: "\\arg\\left(${args[0]}\\right)"
                    },
                    conj: {
                        1: "\\left(${args[0]}\\right)^*"
                    },
                    im: {
                        1: "\\Im\\left\\lbrace${args[0]}\\right\\rbrace"
                    },
                    re: {
                        1: "\\Re\\left\\lbrace${args[0]}\\right\\rbrace"
                    },
                    and: {
                        2: "\\left(${args[0]}".concat(latexOperators.and, "${args[1]}\\right)")
                    },
                    not: {
                        1: latexOperators.not + "\\left(${args[0]}\\right)"
                    },
                    or: {
                        2: "\\left(${args[0]}".concat(latexOperators.or, "${args[1]}\\right)")
                    },
                    xor: {
                        2: "\\left(${args[0]}".concat(latexOperators.xor, "${args[1]}\\right)")
                    },
                    cross: {
                        2: "\\left(${args[0]}\\right)\\times\\left(${args[1]}\\right)"
                    },
                    ctranspose: {
                        1: "\\left(${args[0]}\\right)".concat(latexOperators.ctranspose)
                    },
                    det: {
                        1: "\\det\\left(${args[0]}\\right)"
                    },
                    dot: {
                        2: "\\left(${args[0]}\\cdot${args[1]}\\right)"
                    },
                    expm: {
                        1: "\\exp\\left(${args[0]}\\right)"
                    },
                    inv: {
                        1: "\\left(${args[0]}\\right)^{-1}"
                    },
                    sqrtm: {
                        1: "{${args[0]}}".concat(latexOperators.pow, "{\\frac{1}{2}}")
                    },
                    trace: {
                        1: "\\mathrm{tr}\\left(${args[0]}\\right)"
                    },
                    transpose: {
                        1: "\\left(${args[0]}\\right)".concat(latexOperators.transpose)
                    },
                    combinations: {
                        2: "\\binom{${args[0]}}{${args[1]}}"
                    },
                    combinationsWithRep: {
                        2: "\\left(\\!\\!{\\binom{${args[0]}}{${args[1]}}}\\!\\!\\right)"
                    },
                    factorial: {
                        1: "\\left(${args[0]}\\right)".concat(latexOperators.factorial)
                    },
                    gamma: {
                        1: "\\Gamma\\left(${args[0]}\\right)"
                    },
                    equal: {
                        2: "\\left(${args[0]}".concat(latexOperators.equal, "${args[1]}\\right)")
                    },
                    larger: {
                        2: "\\left(${args[0]}".concat(latexOperators.larger, "${args[1]}\\right)")
                    },
                    largerEq: {
                        2: "\\left(${args[0]}".concat(latexOperators.largerEq, "${args[1]}\\right)")
                    },
                    smaller: {
                        2: "\\left(${args[0]}".concat(latexOperators.smaller, "${args[1]}\\right)")
                    },
                    smallerEq: {
                        2: "\\left(${args[0]}".concat(latexOperators.smallerEq, "${args[1]}\\right)")
                    },
                    unequal: {
                        2: "\\left(${args[0]}".concat(latexOperators.unequal, "${args[1]}\\right)")
                    },
                    erf: {
                        1: "erf\\left(${args[0]}\\right)"
                    },
                    max: "\\max\\left(${args}\\right)",
                    min: "\\min\\left(${args}\\right)",
                    variance: "\\mathrm{Var}\\left(${args}\\right)",
                    acos: {
                        1: "\\cos^{-1}\\left(${args[0]}\\right)"
                    },
                    acosh: {
                        1: "\\cosh^{-1}\\left(${args[0]}\\right)"
                    },
                    acot: {
                        1: "\\cot^{-1}\\left(${args[0]}\\right)"
                    },
                    acoth: {
                        1: "\\coth^{-1}\\left(${args[0]}\\right)"
                    },
                    acsc: {
                        1: "\\csc^{-1}\\left(${args[0]}\\right)"
                    },
                    acsch: {
                        1: "\\mathrm{csch}^{-1}\\left(${args[0]}\\right)"
                    },
                    asec: {
                        1: "\\sec^{-1}\\left(${args[0]}\\right)"
                    },
                    asech: {
                        1: "\\mathrm{sech}^{-1}\\left(${args[0]}\\right)"
                    },
                    asin: {
                        1: "\\sin^{-1}\\left(${args[0]}\\right)"
                    },
                    asinh: {
                        1: "\\sinh^{-1}\\left(${args[0]}\\right)"
                    },
                    atan: {
                        1: "\\tan^{-1}\\left(${args[0]}\\right)"
                    },
                    atan2: {
                        2: "\\mathrm{atan2}\\left(${args}\\right)"
                    },
                    atanh: {
                        1: "\\tanh^{-1}\\left(${args[0]}\\right)"
                    },
                    cos: {
                        1: "\\cos\\left(${args[0]}\\right)"
                    },
                    cosh: {
                        1: "\\cosh\\left(${args[0]}\\right)"
                    },
                    cot: {
                        1: "\\cot\\left(${args[0]}\\right)"
                    },
                    coth: {
                        1: "\\coth\\left(${args[0]}\\right)"
                    },
                    csc: {
                        1: "\\csc\\left(${args[0]}\\right)"
                    },
                    csch: {
                        1: "\\mathrm{csch}\\left(${args[0]}\\right)"
                    },
                    sec: {
                        1: "\\sec\\left(${args[0]}\\right)"
                    },
                    sech: {
                        1: "\\mathrm{sech}\\left(${args[0]}\\right)"
                    },
                    sin: {
                        1: "\\sin\\left(${args[0]}\\right)"
                    },
                    sinh: {
                        1: "\\sinh\\left(${args[0]}\\right)"
                    },
                    tan: {
                        1: "\\tan\\left(${args[0]}\\right)"
                    },
                    tanh: {
                        1: "\\tanh\\left(${args[0]}\\right)"
                    },
                    to: {
                        2: "\\left(${args[0]}".concat(latexOperators.to, "${args[1]}\\right)")
                    },
                    numeric: function(node, options) {
                        return node.args[0].toTex();
                    },
                    number: {
                        0: "0",
                        1: "\\left(${args[0]}\\right)",
                        2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
                    },
                    string: {
                        0: '\\mathtt{""}',
                        1: "\\mathrm{string}\\left(${args[0]}\\right)"
                    },
                    bignumber: {
                        0: "0",
                        1: "\\left(${args[0]}\\right)"
                    },
                    complex: {
                        0: "0",
                        1: "\\left(${args[0]}\\right)",
                        2: "\\left(\\left(${args[0]}\\right)+".concat(latexSymbols.i, "\\cdot\\left(${args[1]}\\right)\\right)")
                    },
                    matrix: {
                        0: "\\begin{bmatrix}\\end{bmatrix}",
                        1: "\\left(${args[0]}\\right)",
                        2: "\\left(${args[0]}\\right)"
                    },
                    sparse: {
                        0: "\\begin{bsparse}\\end{bsparse}",
                        1: "\\left(${args[0]}\\right)"
                    },
                    unit: {
                        1: "\\left(${args[0]}\\right)",
                        2: "\\left(\\left(${args[0]}\\right)${args[1]}\\right)"
                    }
                }, latexUnits = {
                    deg: "^\\circ"
                };
                function escapeLatex(string) {
                    return dist(string, {
                        preserveFormatting: !0
                    });
                }
                function toSymbol(name, isUnit) {
                    return (isUnit = void 0 !== isUnit && isUnit) ? object_hasOwnProperty(latexUnits, name) ? latexUnits[name] : "\\mathrm{" + escapeLatex(name) + "}" : object_hasOwnProperty(latexSymbols, name) ? latexSymbols[name] : escapeLatex(name);
                }
                var ConstantNodeDependencies = {
                    NodeDependencies,
                    createConstantNode: factory_factory("ConstantNode", [
                        "Node"
                    ], (_ref)=>{
                        var { Node  } = _ref;
                        function ConstantNode(value) {
                            if (!(this instanceof ConstantNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            this.value = value;
                        }
                        return ConstantNode.prototype = new Node, ConstantNode.prototype.type = "ConstantNode", ConstantNode.prototype.isConstantNode = !0, ConstantNode.prototype._compile = function(math, argNames) {
                            var value = this.value;
                            return function() {
                                return value;
                            };
                        }, ConstantNode.prototype.forEach = function(callback) {}, ConstantNode.prototype.map = function(callback) {
                            return this.clone();
                        }, ConstantNode.prototype.clone = function() {
                            return new ConstantNode(this.value);
                        }, ConstantNode.prototype._toString = function(options) {
                            return string_format(this.value, options);
                        }, ConstantNode.prototype.toHTML = function(options) {
                            var value = this._toString(options);
                            switch(is_typeOf(this.value)){
                                case "number":
                                case "BigNumber":
                                case "Fraction":
                                    return '<span class="math-number">' + value + "</span>";
                                case "string":
                                    return '<span class="math-string">' + value + "</span>";
                                case "boolean":
                                    return '<span class="math-boolean">' + value + "</span>";
                                case "null":
                                    return '<span class="math-null-symbol">' + value + "</span>";
                                case "undefined":
                                    return '<span class="math-undefined">' + value + "</span>";
                                default:
                                    return '<span class="math-symbol">' + value + "</span>";
                            }
                        }, ConstantNode.prototype.toJSON = function() {
                            return {
                                mathjs: "ConstantNode",
                                value: this.value
                            };
                        }, ConstantNode.fromJSON = function(json) {
                            return new ConstantNode(json.value);
                        }, ConstantNode.prototype._toTex = function(options) {
                            var value = this._toString(options);
                            switch(is_typeOf(this.value)){
                                case "string":
                                    return "\\mathtt{" + escapeLatex(value) + "}";
                                case "number":
                                case "BigNumber":
                                    if (!isFinite(this.value)) return this.value.valueOf() < 0 ? "-\\infty" : "\\infty";
                                    var index = value.toLowerCase().indexOf("e");
                                    return -1 !== index ? value.substring(0, index) + "\\cdot10^{" + value.substring(index + 1) + "}" : value;
                                case "Fraction":
                                    return this.value.toLatex();
                                default:
                                    return value;
                            }
                        }, ConstantNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, createFunctionAssignmentNode = factory_factory("FunctionAssignmentNode", [
                    "typed",
                    "Node"
                ], (_ref)=>{
                    var { typed , Node  } = _ref;
                    function FunctionAssignmentNode(name, params, expr) {
                        if (!(this instanceof FunctionAssignmentNode)) throw new SyntaxError("Constructor must be called with the new operator");
                        if ("string" != typeof name) throw new TypeError('String expected for parameter "name"');
                        if (!Array.isArray(params)) throw new TypeError('Array containing strings or objects expected for parameter "params"');
                        if (!isNode(expr)) throw new TypeError('Node expected for parameter "expr"');
                        if (keywords.has(name)) throw new Error('Illegal function name, "' + name + '" is a reserved keyword');
                        this.name = name, this.params = params.map(function(param) {
                            return param && param.name || param;
                        }), this.types = params.map(function(param) {
                            return param && param.type || "any";
                        }), this.expr = expr;
                    }
                    function needParenthesis(node, parenthesis) {
                        var precedence = getPrecedence(node, parenthesis), exprPrecedence = getPrecedence(node.expr, parenthesis);
                        return "all" === parenthesis || null !== exprPrecedence && exprPrecedence <= precedence;
                    }
                    return FunctionAssignmentNode.prototype = new Node, FunctionAssignmentNode.prototype.type = "FunctionAssignmentNode", FunctionAssignmentNode.prototype.isFunctionAssignmentNode = !0, FunctionAssignmentNode.prototype._compile = function(math, argNames) {
                        var childArgNames = Object.create(argNames);
                        forEach(this.params, function(param) {
                            childArgNames[param] = !0;
                        });
                        var evalExpr = this.expr._compile(math, childArgNames), name = this.name, params = this.params, signature = join(this.types, ","), syntax = name + "(" + join(this.params, ", ") + ")";
                        return function(scope, args, context) {
                            var signatures = {};
                            signatures[signature] = function() {
                                for(var childArgs = Object.create(args), i = 0; i < params.length; i++)childArgs[params[i]] = arguments[i];
                                return evalExpr(scope, childArgs, context);
                            };
                            var fn = typed(name, signatures);
                            return fn.syntax = syntax, scope.set(name, fn), fn;
                        };
                    }, FunctionAssignmentNode.prototype.forEach = function(callback) {
                        callback(this.expr, "expr", this);
                    }, FunctionAssignmentNode.prototype.map = function(callback) {
                        var expr = this._ifNode(callback(this.expr, "expr", this));
                        return new FunctionAssignmentNode(this.name, this.params.slice(0), expr);
                    }, FunctionAssignmentNode.prototype.clone = function() {
                        return new FunctionAssignmentNode(this.name, this.params.slice(0), this.expr);
                    }, FunctionAssignmentNode.prototype._toString = function(options) {
                        var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", expr = this.expr.toString(options);
                        return needParenthesis(this, parenthesis) && (expr = "(" + expr + ")"), this.name + "(" + this.params.join(", ") + ") = " + expr;
                    }, FunctionAssignmentNode.prototype.toJSON = function() {
                        var types = this.types;
                        return {
                            mathjs: "FunctionAssignmentNode",
                            name: this.name,
                            params: this.params.map(function(param, index) {
                                return {
                                    name: param,
                                    type: types[index]
                                };
                            }),
                            expr: this.expr
                        };
                    }, FunctionAssignmentNode.fromJSON = function(json) {
                        return new FunctionAssignmentNode(json.name, json.params, json.expr);
                    }, FunctionAssignmentNode.prototype.toHTML = function(options) {
                        for(var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", params = [], i = 0; i < this.params.length; i++)params.push('<span class="math-symbol math-parameter">' + string_escape(this.params[i]) + "</span>");
                        var expr = this.expr.toHTML(options);
                        return needParenthesis(this, parenthesis) && (expr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + expr + '<span class="math-parenthesis math-round-parenthesis">)</span>'), '<span class="math-function">' + string_escape(this.name) + '</span><span class="math-parenthesis math-round-parenthesis">(</span>' + params.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span><span class="math-operator math-assignment-operator math-variable-assignment-operator math-binary-operator">=</span>' + expr;
                    }, FunctionAssignmentNode.prototype._toTex = function(options) {
                        var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", expr = this.expr.toTex(options);
                        return needParenthesis(this, parenthesis) && (expr = "\\left(".concat(expr, "\\right)")), "\\mathrm{" + this.name + "}\\left(" + this.params.map(toSymbol).join(",") + "\\right):=" + expr;
                    }, FunctionAssignmentNode;
                }, {
                    isClass: !0,
                    isNode: !0
                }), FunctionAssignmentNodeDependencies = {
                    NodeDependencies,
                    typedDependencies,
                    createFunctionAssignmentNode
                };
                function deepMap(array, callback, skipZeros) {
                    return array && "function" == typeof array.map ? array.map(function(x) {
                        return deepMap(x, callback, skipZeros);
                    }) : callback(array);
                }
                var n1 = "number", n2 = "number, number";
                function absNumber(a) {
                    return Math.abs(a);
                }
                function addNumber(a, b) {
                    return a + b;
                }
                function multiplyNumber(a, b) {
                    return a * b;
                }
                function unaryMinusNumber(x) {
                    return -x;
                }
                function ceilNumber(x) {
                    return Math.ceil(x);
                }
                function modNumber(x, y) {
                    if (y > 0) return x - y * Math.floor(x / y);
                    if (0 === y) return x;
                    throw new Error("Cannot calculate mod for a negative divisor");
                }
                function powNumber(x, y) {
                    return x * x < 1 && y === 1 / 0 || x * x > 1 && y === -1 / 0 ? 0 : Math.pow(x, y);
                }
                function roundNumber(value) {
                    var decimals = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return parseFloat(toFixed(value, decimals));
                }
                absNumber.signature = n1, addNumber.signature = n2, multiplyNumber.signature = n2, unaryMinusNumber.signature = n1, ceilNumber.signature = n1, modNumber.signature = n2, powNumber.signature = n2, roundNumber.signature = n2;
                var absDependencies = {
                    typedDependencies,
                    createAbs: factory_factory("abs", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref;
                        return typed("abs", {
                            number: absNumber,
                            Complex: function(x) {
                                return x.abs();
                            },
                            BigNumber: function(x) {
                                return x.abs();
                            },
                            Fraction: function(x) {
                                return x.abs();
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this, !0);
                            },
                            Unit: function(x) {
                                return x.abs();
                            }
                        });
                    })
                }, addScalarDependencies = {
                    typedDependencies,
                    createAddScalar: factory_factory("addScalar", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref;
                        return typed("addScalar", {
                            "number, number": addNumber,
                            "Complex, Complex": function(x, y) {
                                return x.add(y);
                            },
                            "BigNumber, BigNumber": function(x, y) {
                                return x.plus(y);
                            },
                            "Fraction, Fraction": function(x, y) {
                                return x.add(y);
                            },
                            "Unit, Unit": function(x, y) {
                                if (null === x.value || void 0 === x.value) throw new Error("Parameter x contains a unit with undefined value");
                                if (null === y.value || void 0 === y.value) throw new Error("Parameter y contains a unit with undefined value");
                                if (!x.equalBase(y)) throw new Error("Units do not match");
                                var res = x.clone();
                                return res.value = this(res.value, y.value), res.fixPrefix = !1, res;
                            }
                        });
                    })
                }, bignumberDependencies = {
                    BigNumberDependencies,
                    typedDependencies,
                    createBignumber: factory_factory("bignumber", [
                        "typed",
                        "BigNumber"
                    ], (_ref)=>{
                        var { typed , BigNumber  } = _ref;
                        return typed("bignumber", {
                            "": function() {
                                return new BigNumber(0);
                            },
                            number: function(x) {
                                return new BigNumber(x + "");
                            },
                            string: function(x) {
                                var wordSizeSuffixMatch = x.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
                                if (wordSizeSuffixMatch) {
                                    var size = wordSizeSuffixMatch[2], n = BigNumber(wordSizeSuffixMatch[1]), twoPowSize = new BigNumber(2).pow(Number(size));
                                    if (n.gt(twoPowSize.sub(1))) throw new SyntaxError('String "'.concat(x, '" is out of range'));
                                    var twoPowSizeSubOne = new BigNumber(2).pow(Number(size) - 1);
                                    return n.gte(twoPowSizeSubOne) ? n.sub(twoPowSize) : n;
                                }
                                return new BigNumber(x);
                            },
                            BigNumber: function(x) {
                                return x;
                            },
                            Fraction: function(x) {
                                return new BigNumber(x.n).div(x.d).times(x.s);
                            },
                            null: function(x) {
                                return new BigNumber(0);
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this);
                            }
                        });
                    })
                }, fractionDependencies = {
                    FractionDependencies,
                    typedDependencies,
                    createFraction: factory_factory("fraction", [
                        "typed",
                        "Fraction"
                    ], (_ref)=>{
                        var { typed , Fraction  } = _ref;
                        return typed("fraction", {
                            number: function(x) {
                                if (!isFinite(x) || isNaN(x)) throw new Error(x + " cannot be represented as a fraction");
                                return new Fraction(x);
                            },
                            string: function(x) {
                                return new Fraction(x);
                            },
                            "number, number": function(numerator, denominator) {
                                return new Fraction(numerator, denominator);
                            },
                            null: function(x) {
                                return new Fraction(0);
                            },
                            BigNumber: function(x) {
                                return new Fraction(x.toString());
                            },
                            Fraction: function(x) {
                                return x;
                            },
                            Object: function(x) {
                                return new Fraction(x);
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this);
                            }
                        });
                    })
                };
                var numberDependencies = {
                    typedDependencies,
                    createNumber: factory_factory("number", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref, number = typed("number", {
                            "": function() {
                                return 0;
                            },
                            number: function(x) {
                                return x;
                            },
                            string: function(x) {
                                if ("NaN" === x) return NaN;
                                var input, nonDecimalWithRadixMatch, nonDecimalNumberParts = (nonDecimalWithRadixMatch = (input = x).match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/)) ? {
                                    input,
                                    radix: ({
                                        "0b": 2,
                                        "0o": 8,
                                        "0x": 16
                                    })[nonDecimalWithRadixMatch[1]],
                                    integerPart: nonDecimalWithRadixMatch[2],
                                    fractionalPart: nonDecimalWithRadixMatch[3]
                                } : null;
                                if (nonDecimalNumberParts) return function(parts) {
                                    for(var n = parseInt(parts.integerPart, parts.radix), f = 0, i = 0; i < parts.fractionalPart.length; i++)f += parseInt(parts.fractionalPart[i], parts.radix) / Math.pow(parts.radix, i + 1);
                                    var result = n + f;
                                    if (isNaN(result)) throw new SyntaxError('String "' + parts.input + '" is no valid number');
                                    return result;
                                }(nonDecimalNumberParts);
                                var size = 0, wordSizeSuffixMatch = x.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
                                wordSizeSuffixMatch && (size = Number(wordSizeSuffixMatch[2]), x = wordSizeSuffixMatch[1]);
                                var num = Number(x);
                                if (isNaN(num)) throw new SyntaxError('String "' + x + '" is no valid number');
                                if (wordSizeSuffixMatch) {
                                    if (num > 2 ** size - 1) throw new SyntaxError('String "'.concat(x, '" is out of range'));
                                    num >= 2 ** (size - 1) && (num -= 2 ** size);
                                }
                                return num;
                            },
                            BigNumber: function(x) {
                                return x.toNumber();
                            },
                            Fraction: function(x) {
                                return x.valueOf();
                            },
                            Unit: function(x) {
                                throw new Error("Second argument with valueless unit expected");
                            },
                            null: function(x) {
                                return 0;
                            },
                            "Unit, string | Unit": function(unit, valuelessUnit) {
                                return unit.toNumber(valuelessUnit);
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this);
                            }
                        });
                        return number.fromJSON = function(json) {
                            return parseFloat(json.value);
                        }, number;
                    })
                };
                function noBignumber() {
                    throw new Error('No "bignumber" implementation available');
                }
                function noFraction() {
                    throw new Error('No "fraction" implementation available');
                }
                var createNumeric = factory_factory("numeric", [
                    "number",
                    "?bignumber",
                    "?fraction"
                ], (_ref)=>{
                    var { number: _number , bignumber , fraction  } = _ref, validInputTypes = {
                        string: !0,
                        number: !0,
                        BigNumber: !0,
                        Fraction: !0
                    }, validOutputTypes = {
                        number: (x)=>_number(x),
                        BigNumber: bignumber ? (x)=>bignumber(x) : noBignumber,
                        Fraction: fraction ? (x)=>fraction(x) : noFraction
                    };
                    return function(value, outputType) {
                        var inputType = is_typeOf(value);
                        if (!(inputType in validInputTypes)) throw new TypeError("Cannot convert " + value + ' of type "' + inputType + '"; valid input types are ' + Object.keys(validInputTypes).join(", "));
                        if (!(outputType in validOutputTypes)) throw new TypeError("Cannot convert " + value + ' to type "' + outputType + '"; valid output types are ' + Object.keys(validOutputTypes).join(", "));
                        return outputType === inputType ? value : validOutputTypes[outputType](value);
                    };
                }), numericDependencies = {
                    bignumberDependencies,
                    fractionDependencies,
                    numberDependencies,
                    createNumeric
                }, divideScalarDependencies = {
                    numericDependencies,
                    typedDependencies,
                    createDivideScalar: factory_factory("divideScalar", [
                        "typed",
                        "numeric"
                    ], (_ref)=>{
                        var { typed , numeric  } = _ref;
                        return typed("divideScalar", {
                            "number, number": function(x, y) {
                                return x / y;
                            },
                            "Complex, Complex": function(x, y) {
                                return x.div(y);
                            },
                            "BigNumber, BigNumber": function(x, y) {
                                return x.div(y);
                            },
                            "Fraction, Fraction": function(x, y) {
                                return x.div(y);
                            },
                            "Unit, number | Fraction | BigNumber": function(x, y) {
                                var res = x.clone(), one = numeric(1, is_typeOf(y));
                                return res.value = this(null === res.value ? res._normalize(one) : res.value, y), res;
                            },
                            "number | Fraction | BigNumber, Unit": function(x, y) {
                                var res = y.clone();
                                res = res.pow(-1);
                                var one = numeric(1, is_typeOf(x));
                                return res.value = this(x, null === y.value ? y._normalize(one) : y.value), res;
                            },
                            "Unit, Unit": function(x, y) {
                                return x.divide(y);
                            }
                        });
                    })
                }, createAlgorithm03 = factory_factory("algorithm03", [
                    "typed"
                ], (_ref)=>{
                    var { typed  } = _ref;
                    return function(denseMatrix, sparseMatrix, callback, inverse) {
                        var adata = denseMatrix._data, asize = denseMatrix._size, adt = denseMatrix._datatype, bvalues = sparseMatrix._values, bindex = sparseMatrix._index, bptr = sparseMatrix._ptr, bsize = sparseMatrix._size, bdt = sparseMatrix._datatype;
                        if (asize.length !== bsize.length) throw new DimensionError(asize.length, bsize.length);
                        if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
                        if (!bvalues) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                        var dt, rows = asize[0], columns = asize[1], zero = 0, cf = callback;
                        "string" == typeof adt && adt === bdt && (dt = adt, zero = typed.convert(0, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        for(var cdata = [], z = 0; z < rows; z++)cdata[z] = [];
                        for(var x = [], w = [], j = 0; j < columns; j++){
                            for(var mark = j + 1, k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++){
                                var i = bindex[k];
                                x[i] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]), w[i] = mark;
                            }
                            for(var y = 0; y < rows; y++)w[y] === mark ? cdata[y][j] = x[y] : cdata[y][j] = inverse ? cf(zero, adata[y][j]) : cf(adata[y][j], zero);
                        }
                        return denseMatrix.createDenseMatrix({
                            data: cdata,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                }), createAlgorithm07 = factory_factory("algorithm07", [
                    "typed",
                    "DenseMatrix"
                ], (_ref)=>{
                    var { typed , DenseMatrix  } = _ref;
                    return function(a, b, callback) {
                        var asize = a._size, adt = a._datatype, bsize = b._size, bdt = b._datatype;
                        if (asize.length !== bsize.length) throw new DimensionError(asize.length, bsize.length);
                        if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
                        var dt, i, j, rows = asize[0], columns = asize[1], zero = 0, cf = callback;
                        "string" == typeof adt && adt === bdt && (dt = adt, zero = typed.convert(0, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        var cdata = [];
                        for(i = 0; i < rows; i++)cdata[i] = [];
                        var xa = [], xb = [], wa = [], wb = [];
                        for(j = 0; j < columns; j++){
                            var mark = j + 1;
                            for(_scatter(a, j, wa, xa, mark), _scatter(b, j, wb, xb, mark), i = 0; i < rows; i++){
                                var va = wa[i] === mark ? xa[i] : zero, vb = wb[i] === mark ? xb[i] : zero;
                                cdata[i][j] = cf(va, vb);
                            }
                        }
                        return new DenseMatrix({
                            data: cdata,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                    function _scatter(m, j, w, x, mark) {
                        for(var values = m._values, index = m._index, ptr = m._ptr, k = ptr[j], k1 = ptr[j + 1]; k < k1; k++){
                            var i = index[k];
                            w[i] = mark, x[i] = values[k];
                        }
                    }
                }), createAlgorithm12 = factory_factory("algorithm12", [
                    "typed",
                    "DenseMatrix"
                ], (_ref)=>{
                    var { typed , DenseMatrix  } = _ref;
                    return function(s, b, callback, inverse) {
                        var avalues = s._values, aindex = s._index, aptr = s._ptr, asize = s._size, adt = s._datatype;
                        if (!avalues) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                        var dt, rows = asize[0], columns = asize[1], cf = callback;
                        "string" == typeof adt && (dt = adt, b = typed.convert(b, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        for(var cdata = [], x = [], w = [], j = 0; j < columns; j++){
                            for(var mark = j + 1, k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++){
                                var r = aindex[k];
                                x[r] = avalues[k], w[r] = mark;
                            }
                            for(var i = 0; i < rows; i++)0 === j && (cdata[i] = []), w[i] === mark ? cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b) : cdata[i][j] = inverse ? cf(b, 0) : cf(0, b);
                        }
                        return new DenseMatrix({
                            data: cdata,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                }), createAlgorithm13 = factory_factory("algorithm13", [
                    "typed"
                ], (_ref)=>{
                    var { typed  } = _ref;
                    return function(a, b, callback) {
                        var dt, adata = a._data, asize = a._size, adt = a._datatype, bdata = b._data, bsize = b._size, bdt = b._datatype, csize = [];
                        if (asize.length !== bsize.length) throw new DimensionError(asize.length, bsize.length);
                        for(var s = 0; s < asize.length; s++){
                            if (asize[s] !== bsize[s]) throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
                            csize[s] = asize[s];
                        }
                        var cf = callback;
                        "string" == typeof adt && adt === bdt && (dt = adt, cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        var cdata = csize.length > 0 ? _iterate(cf, 0, csize, csize[0], adata, bdata) : [];
                        return a.createDenseMatrix({
                            data: cdata,
                            size: csize,
                            datatype: dt
                        });
                    };
                    function _iterate(f, level, s, n, av, bv) {
                        var cv = [];
                        if (level === s.length - 1) for(var i = 0; i < n; i++)cv[i] = f(av[i], bv[i]);
                        else for(var j = 0; j < n; j++)cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv[j]);
                        return cv;
                    }
                }), createAlgorithm14 = factory_factory("algorithm14", [
                    "typed"
                ], (_ref)=>{
                    var { typed  } = _ref;
                    return function(a, b, callback, inverse) {
                        var dt, adata = a._data, asize = a._size, adt = a._datatype, cf = callback;
                        "string" == typeof adt && (dt = adt, b = typed.convert(b, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        var cdata = asize.length > 0 ? _iterate(cf, 0, asize, asize[0], adata, b, inverse) : [];
                        return a.createDenseMatrix({
                            data: cdata,
                            size: clone(asize),
                            datatype: dt
                        });
                    };
                    function _iterate(f, level, s, n, av, bv, inverse) {
                        var cv = [];
                        if (level === s.length - 1) for(var i = 0; i < n; i++)cv[i] = inverse ? f(bv, av[i]) : f(av[i], bv);
                        else for(var j = 0; j < n; j++)cv[j] = _iterate(f, level + 1, s, s[level + 1], av[j], bv, inverse);
                        return cv;
                    }
                }), createEqual = factory_factory("equal", [
                    "typed",
                    "matrix",
                    "equalScalar",
                    "DenseMatrix"
                ], (_ref)=>{
                    var { typed , matrix , equalScalar , DenseMatrix  } = _ref, algorithm03 = createAlgorithm03({
                        typed
                    }), algorithm07 = createAlgorithm07({
                        typed,
                        DenseMatrix
                    }), algorithm12 = createAlgorithm12({
                        typed,
                        DenseMatrix
                    }), algorithm13 = createAlgorithm13({
                        typed
                    }), algorithm14 = createAlgorithm14({
                        typed
                    });
                    return typed("equal", {
                        "any, any": function(x, y) {
                            return null === x ? null === y : null === y ? null === x : void 0 === x ? void 0 === y : void 0 === y ? void 0 === x : equalScalar(x, y);
                        },
                        "SparseMatrix, SparseMatrix": function(x, y) {
                            return algorithm07(x, y, equalScalar);
                        },
                        "SparseMatrix, DenseMatrix": function(x, y) {
                            return algorithm03(y, x, equalScalar, !0);
                        },
                        "DenseMatrix, SparseMatrix": function(x, y) {
                            return algorithm03(x, y, equalScalar, !1);
                        },
                        "DenseMatrix, DenseMatrix": function(x, y) {
                            return algorithm13(x, y, equalScalar);
                        },
                        "Array, Array": function(x, y) {
                            return this(matrix(x), matrix(y)).valueOf();
                        },
                        "Array, Matrix": function(x, y) {
                            return this(matrix(x), y);
                        },
                        "Matrix, Array": function(x, y) {
                            return this(x, matrix(y));
                        },
                        "SparseMatrix, any": function(x, y) {
                            return algorithm12(x, y, equalScalar, !1);
                        },
                        "DenseMatrix, any": function(x, y) {
                            return algorithm14(x, y, equalScalar, !1);
                        },
                        "any, SparseMatrix": function(x, y) {
                            return algorithm12(y, x, equalScalar, !0);
                        },
                        "any, DenseMatrix": function(x, y) {
                            return algorithm14(y, x, equalScalar, !0);
                        },
                        "Array, any": function(x, y) {
                            return algorithm14(matrix(x), y, equalScalar, !1).valueOf();
                        },
                        "any, Array": function(x, y) {
                            return algorithm14(matrix(y), x, equalScalar, !0).valueOf();
                        }
                    });
                }), equalDependencies = (factory_factory("equal", [
                    "typed",
                    "equalScalar"
                ], (_ref2)=>{
                    var { typed , equalScalar  } = _ref2;
                    return typed("equal", {
                        "any, any": function(x, y) {
                            return null === x ? null === y : null === y ? null === x : void 0 === x ? void 0 === y : void 0 === y ? void 0 === x : equalScalar(x, y);
                        }
                    });
                }), {
                    DenseMatrixDependencies,
                    equalScalarDependencies,
                    matrixDependencies,
                    typedDependencies,
                    createEqual
                }), createZeros = factory_factory("zeros", [
                    "typed",
                    "config",
                    "matrix",
                    "BigNumber"
                ], (_ref)=>{
                    var { typed , config , matrix , BigNumber  } = _ref;
                    return typed("zeros", {
                        "": function() {
                            return "Array" === config.matrix ? _zeros([]) : _zeros([], "default");
                        },
                        "...number | BigNumber | string": function(size) {
                            if ("string" == typeof size[size.length - 1]) {
                                var format = size.pop();
                                return _zeros(size, format);
                            }
                            return "Array" === config.matrix ? _zeros(size) : _zeros(size, "default");
                        },
                        Array: _zeros,
                        Matrix: function(size) {
                            var format = size.storage();
                            return _zeros(size.valueOf(), format);
                        },
                        "Array | Matrix, string": function(size, format) {
                            return _zeros(size.valueOf(), format);
                        }
                    });
                    function _zeros(size, format) {
                        var hasBigNumbers = function(size) {
                            var hasBigNumbers = !1;
                            return size.forEach(function(value, index, arr) {
                                isBigNumber(value) && (hasBigNumbers = !0, arr[index] = value.toNumber());
                            }), hasBigNumbers;
                        }(size), defaultValue = hasBigNumbers ? new BigNumber(0) : 0;
                        if (function(size) {
                            size.forEach(function(value) {
                                if ("number" != typeof value || !isInteger(value) || value < 0) throw new Error("Parameters in function zeros must be positive integers");
                            });
                        }(size), format) {
                            var m = matrix(format);
                            return size.length > 0 ? m.resize(size, defaultValue) : m;
                        }
                        var arr = [];
                        return size.length > 0 ? resize(arr, size, defaultValue) : arr;
                    }
                }), zerosDependencies = {
                    BigNumberDependencies,
                    matrixDependencies,
                    typedDependencies,
                    createZeros
                };
                function _defineProperty(obj, key, value) {
                    return key in obj ? Object.defineProperty(obj, key, {
                        value,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : obj[key] = value, obj;
                }
                var createAlgorithm11 = factory_factory("algorithm11", [
                    "typed",
                    "equalScalar"
                ], (_ref)=>{
                    var { typed , equalScalar  } = _ref;
                    return function(s, b, callback, inverse) {
                        var avalues = s._values, aindex = s._index, aptr = s._ptr, asize = s._size, adt = s._datatype;
                        if (!avalues) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                        var dt, rows = asize[0], columns = asize[1], eq = equalScalar, zero = 0, cf = callback;
                        "string" == typeof adt && (dt = adt, eq = typed.find(equalScalar, [
                            dt,
                            dt
                        ]), zero = typed.convert(0, dt), b = typed.convert(b, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        for(var cvalues = [], cindex = [], cptr = [], j = 0; j < columns; j++){
                            cptr[j] = cindex.length;
                            for(var k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++){
                                var i = aindex[k], v = inverse ? cf(b, avalues[k]) : cf(avalues[k], b);
                                eq(v, zero) || (cindex.push(i), cvalues.push(v));
                            }
                        }
                        return cptr[columns] = cindex.length, s.createSparseMatrix({
                            values: cvalues,
                            index: cindex,
                            ptr: cptr,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                });
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly && (symbols = symbols.filter(function(sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        })), keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function _objectSpread(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                    return target;
                }
                var NO_INT = "Number of decimals in function round must be an integer", createRound = factory_factory("round", [
                    "typed",
                    "matrix",
                    "equalScalar",
                    "zeros",
                    "BigNumber",
                    "DenseMatrix"
                ], (_ref)=>{
                    var { typed , matrix , equalScalar , zeros , BigNumber , DenseMatrix  } = _ref, algorithm11 = createAlgorithm11({
                        typed,
                        equalScalar
                    }), algorithm12 = createAlgorithm12({
                        typed,
                        DenseMatrix
                    }), algorithm14 = createAlgorithm14({
                        typed
                    });
                    return typed("round", _objectSpread(_objectSpread({}, roundNumberSignatures), {}, {
                        Complex: function(x) {
                            return x.round();
                        },
                        "Complex, number": function(x, n) {
                            if (n % 1) throw new TypeError(NO_INT);
                            return x.round(n);
                        },
                        "Complex, BigNumber": function(x, n) {
                            if (!n.isInteger()) throw new TypeError(NO_INT);
                            var _n = n.toNumber();
                            return x.round(_n);
                        },
                        "number, BigNumber": function(x, n) {
                            if (!n.isInteger()) throw new TypeError(NO_INT);
                            return new BigNumber(x).toDecimalPlaces(n.toNumber());
                        },
                        BigNumber: function(x) {
                            return x.toDecimalPlaces(0);
                        },
                        "BigNumber, BigNumber": function(x, n) {
                            if (!n.isInteger()) throw new TypeError(NO_INT);
                            return x.toDecimalPlaces(n.toNumber());
                        },
                        Fraction: function(x) {
                            return x.round();
                        },
                        "Fraction, number": function(x, n) {
                            if (n % 1) throw new TypeError(NO_INT);
                            return x.round(n);
                        },
                        "Array | Matrix": function(x) {
                            return deepMap(x, this, !0);
                        },
                        "SparseMatrix, number | BigNumber": function(x, y) {
                            return algorithm11(x, y, this, !1);
                        },
                        "DenseMatrix, number | BigNumber": function(x, y) {
                            return algorithm14(x, y, this, !1);
                        },
                        "number | Complex | BigNumber, SparseMatrix": function(x, y) {
                            return equalScalar(x, 0) ? zeros(y.size(), y.storage()) : algorithm12(y, x, this, !0);
                        },
                        "number | Complex | BigNumber, DenseMatrix": function(x, y) {
                            return equalScalar(x, 0) ? zeros(y.size(), y.storage()) : algorithm14(y, x, this, !0);
                        },
                        "Array, number | BigNumber": function(x, y) {
                            return algorithm14(matrix(x), y, this, !1).valueOf();
                        },
                        "number | Complex | BigNumber, Array": function(x, y) {
                            return algorithm14(matrix(y), x, this, !0).valueOf();
                        }
                    }));
                }), roundNumberSignatures = {
                    number: roundNumber,
                    "number, number": function(x, n) {
                        if (!isInteger(n)) throw new TypeError(NO_INT);
                        if (n < 0 || n > 15) throw new Error("Number of decimals in function round must be in the range of 0-15");
                        return roundNumber(x, n);
                    }
                }, roundDependencies = {
                    BigNumberDependencies,
                    DenseMatrixDependencies,
                    equalScalarDependencies,
                    matrixDependencies,
                    typedDependencies,
                    zerosDependencies,
                    createRound
                }, createCeil = factory_factory("ceil", [
                    "typed",
                    "config",
                    "round",
                    "matrix",
                    "equalScalar"
                ], (_ref)=>{
                    var { typed , config , round , matrix , equalScalar  } = _ref, algorithm11 = createAlgorithm11({
                        typed,
                        equalScalar
                    }), algorithm14 = createAlgorithm14({
                        typed
                    });
                    return typed("ceil", {
                        number: function(x) {
                            return number_nearlyEqual(x, round(x), config.epsilon) ? round(x) : ceilNumber(x);
                        },
                        "number, number": function(x, n) {
                            if (number_nearlyEqual(x, round(x, n), config.epsilon)) return round(x, n);
                            var [number, exponent] = "".concat(x, "e").split("e"), result = Math.ceil(Number("".concat(number, "e").concat(Number(exponent) + n)));
                            return [number, exponent] = "".concat(result, "e").split("e"), Number("".concat(number, "e").concat(Number(exponent) - n));
                        },
                        Complex: function(x) {
                            return x.ceil();
                        },
                        "Complex, number": function(x, n) {
                            return x.ceil(n);
                        },
                        BigNumber: function(x) {
                            return nearlyEqual_nearlyEqual(x, round(x), config.epsilon) ? round(x) : x.ceil();
                        },
                        "BigNumber, BigNumber": function(x, n) {
                            return nearlyEqual_nearlyEqual(x, round(x, n), config.epsilon) ? round(x, n) : x.toDecimalPlaces(n.toNumber(), decimal.ROUND_CEIL);
                        },
                        Fraction: function(x) {
                            return x.ceil();
                        },
                        "Fraction, number": function(x, n) {
                            return x.ceil(n);
                        },
                        "Array | Matrix": function(x) {
                            return deepMap(x, this, !0);
                        },
                        "Array | Matrix, number": function(x, n) {
                            return deepMap(x, (i)=>this(i, n), !0);
                        },
                        "SparseMatrix, number | BigNumber": function(x, y) {
                            return algorithm11(x, y, this, !1);
                        },
                        "DenseMatrix, number | BigNumber": function(x, y) {
                            return algorithm14(x, y, this, !1);
                        },
                        "number | Complex | BigNumber, Array": function(x, y) {
                            return algorithm14(matrix(y), x, this, !0).valueOf();
                        }
                    });
                }), ceilDependencies = {
                    equalScalarDependencies,
                    matrixDependencies,
                    roundDependencies,
                    typedDependencies,
                    createCeil
                }, createFloor = factory_factory("floor", [
                    "typed",
                    "config",
                    "round",
                    "matrix",
                    "equalScalar"
                ], (_ref)=>{
                    var { typed , config , round , matrix , equalScalar  } = _ref, algorithm11 = createAlgorithm11({
                        typed,
                        equalScalar
                    }), algorithm14 = createAlgorithm14({
                        typed
                    });
                    return typed("floor", {
                        number: function(x) {
                            return number_nearlyEqual(x, round(x), config.epsilon) ? round(x) : Math.floor(x);
                        },
                        "number, number": function(x, n) {
                            if (number_nearlyEqual(x, round(x, n), config.epsilon)) return round(x, n);
                            var [number, exponent] = "".concat(x, "e").split("e"), result = Math.floor(Number("".concat(number, "e").concat(Number(exponent) + n)));
                            return [number, exponent] = "".concat(result, "e").split("e"), Number("".concat(number, "e").concat(Number(exponent) - n));
                        },
                        Complex: function(x) {
                            return x.floor();
                        },
                        "Complex, number": function(x, n) {
                            return x.floor(n);
                        },
                        BigNumber: function(x) {
                            return nearlyEqual_nearlyEqual(x, round(x), config.epsilon) ? round(x) : x.floor();
                        },
                        "BigNumber, BigNumber": function(x, n) {
                            return nearlyEqual_nearlyEqual(x, round(x, n), config.epsilon) ? round(x, n) : x.toDecimalPlaces(n.toNumber(), decimal.ROUND_FLOOR);
                        },
                        Fraction: function(x) {
                            return x.floor();
                        },
                        "Fraction, number": function(x, n) {
                            return x.floor(n);
                        },
                        "Array | Matrix": function(x) {
                            return deepMap(x, this, !0);
                        },
                        "Array | Matrix, number": function(x, n) {
                            return deepMap(x, (i)=>this(i, n), !0);
                        },
                        "SparseMatrix, number | BigNumber": function(x, y) {
                            return algorithm11(x, y, this, !1);
                        },
                        "DenseMatrix, number | BigNumber": function(x, y) {
                            return algorithm14(x, y, this, !1);
                        },
                        "number | Complex | BigNumber, Array": function(x, y) {
                            return algorithm14(matrix(y), x, this, !0).valueOf();
                        }
                    });
                }), fixDependencies = {
                    ComplexDependencies,
                    ceilDependencies,
                    floorDependencies: {
                        equalScalarDependencies,
                        matrixDependencies,
                        roundDependencies,
                        typedDependencies,
                        createFloor
                    },
                    matrixDependencies,
                    typedDependencies,
                    createFix: factory_factory("fix", [
                        "typed",
                        "Complex",
                        "matrix",
                        "ceil",
                        "floor"
                    ], (_ref)=>{
                        var { typed , Complex: _Complex , matrix , ceil , floor  } = _ref, algorithm14 = createAlgorithm14({
                            typed
                        });
                        return typed("fix", {
                            number: function(x) {
                                return x > 0 ? floor(x) : ceil(x);
                            },
                            "number, number | BigNumber": function(x, n) {
                                return x > 0 ? floor(x, n) : ceil(x, n);
                            },
                            Complex: function(x) {
                                return new _Complex(x.re > 0 ? Math.floor(x.re) : Math.ceil(x.re), x.im > 0 ? Math.floor(x.im) : Math.ceil(x.im));
                            },
                            "Complex, number | BigNumber": function(x, n) {
                                return new _Complex(x.re > 0 ? floor(x.re, n) : ceil(x.re, n), x.im > 0 ? floor(x.im, n) : ceil(x.im, n));
                            },
                            BigNumber: function(x) {
                                return x.isNegative() ? ceil(x) : floor(x);
                            },
                            "BigNumber, number | BigNumber": function(x, n) {
                                return x.isNegative() ? ceil(x, n) : floor(x, n);
                            },
                            Fraction: function(x) {
                                return x.s < 0 ? x.ceil() : x.floor();
                            },
                            "Fraction, number | BigNumber": function(x, n) {
                                return x.s < 0 ? x.ceil(n) : x.floor(n);
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this, !0);
                            },
                            "Array | Matrix, number | BigNumber": function(x, n) {
                                return deepMap(x, (i)=>this(i, n), !0);
                            },
                            "number | Complex | BigNumber, Array": function(x, y) {
                                return algorithm14(matrix(y), x, this, !0).valueOf();
                            }
                        });
                    })
                }, formatDependencies = {
                    typedDependencies,
                    createFormat: factory_factory("format", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref;
                        return typed("format", {
                            any: string_format,
                            "any, Object | function | number": string_format
                        });
                    })
                }, isNumericDependencies = {
                    typedDependencies,
                    createIsNumeric: factory_factory("isNumeric", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref;
                        return typed("isNumeric", {
                            "number | BigNumber | Fraction | boolean": function() {
                                return !0;
                            },
                            "Complex | Unit | string | null | undefined | Node": function() {
                                return !1;
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this);
                            }
                        });
                    })
                }, multiplyScalarDependencies = {
                    typedDependencies,
                    createMultiplyScalar: factory_factory("multiplyScalar", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref;
                        return typed("multiplyScalar", {
                            "number, number": multiplyNumber,
                            "Complex, Complex": function(x, y) {
                                return x.mul(y);
                            },
                            "BigNumber, BigNumber": function(x, y) {
                                return x.times(y);
                            },
                            "Fraction, Fraction": function(x, y) {
                                return x.mul(y);
                            },
                            "number | Fraction | BigNumber | Complex, Unit": function(x, y) {
                                var res = y.clone();
                                return res.value = null === res.value ? res._normalize(x) : this(res.value, x), res;
                            },
                            "Unit, number | Fraction | BigNumber | Complex": function(x, y) {
                                var res = x.clone();
                                return res.value = null === res.value ? res._normalize(y) : this(res.value, y), res;
                            },
                            "Unit, Unit": function(x, y) {
                                return x.multiply(y);
                            }
                        });
                    })
                }, createIdentity = factory_factory("identity", [
                    "typed",
                    "config",
                    "matrix",
                    "BigNumber",
                    "DenseMatrix",
                    "SparseMatrix"
                ], (_ref)=>{
                    var { typed , config , matrix , BigNumber , DenseMatrix , SparseMatrix  } = _ref;
                    return typed("identity", {
                        "": function() {
                            return "Matrix" === config.matrix ? matrix([]) : [];
                        },
                        string: function(format) {
                            return matrix(format);
                        },
                        "number | BigNumber": function(rows) {
                            return _identity(rows, rows, "Matrix" === config.matrix ? "dense" : void 0);
                        },
                        "number | BigNumber, string": function(rows, format) {
                            return _identity(rows, rows, format);
                        },
                        "number | BigNumber, number | BigNumber": function(rows, cols) {
                            return _identity(rows, cols, "Matrix" === config.matrix ? "dense" : void 0);
                        },
                        "number | BigNumber, number | BigNumber, string": function(rows, cols, format) {
                            return _identity(rows, cols, format);
                        },
                        Array: function(size) {
                            return _identityVector(size);
                        },
                        "Array, string": function(size, format) {
                            return _identityVector(size, format);
                        },
                        Matrix: function(size) {
                            return _identityVector(size.valueOf(), size.storage());
                        },
                        "Matrix, string": function(size, format) {
                            return _identityVector(size.valueOf(), format);
                        }
                    });
                    function _identityVector(size, format) {
                        switch(size.length){
                            case 0:
                                return format ? matrix(format) : [];
                            case 1:
                                return _identity(size[0], size[0], format);
                            case 2:
                                return _identity(size[0], size[1], format);
                            default:
                                throw new Error("Vector containing two values expected");
                        }
                    }
                    function _identity(rows, cols, format) {
                        var Big = isBigNumber(rows) || isBigNumber(cols) ? BigNumber : null;
                        if (isBigNumber(rows) && (rows = rows.toNumber()), isBigNumber(cols) && (cols = cols.toNumber()), !isInteger(rows) || rows < 1) throw new Error("Parameters in function identity must be positive integers");
                        if (!isInteger(cols) || cols < 1) throw new Error("Parameters in function identity must be positive integers");
                        var one = Big ? new BigNumber(1) : 1, defaultValue = Big ? new Big(0) : 0, size = [
                            rows,
                            cols
                        ];
                        if (format) {
                            if ("sparse" === format) return SparseMatrix.diagonal(size, one, 0, defaultValue);
                            if ("dense" === format) return DenseMatrix.diagonal(size, one, 0, defaultValue);
                            throw new TypeError('Unknown matrix type "'.concat(format, '"'));
                        }
                        for(var res = resize([], size, defaultValue), minimum = rows < cols ? rows : cols, d = 0; d < minimum; d++)res[d][d] = one;
                        return res;
                    }
                }), identityDependencies = {
                    BigNumberDependencies,
                    DenseMatrixDependencies,
                    SparseMatrixDependencies,
                    matrixDependencies,
                    typedDependencies,
                    createIdentity
                }, conjDependencies = {
                    typedDependencies,
                    createConj: factory_factory("conj", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref;
                        return typed("conj", {
                            number: function(x) {
                                return x;
                            },
                            BigNumber: function(x) {
                                return x;
                            },
                            Complex: function(x) {
                                return x.conjugate();
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this);
                            }
                        });
                    })
                }, sizeDependencies = {
                    matrixDependencies,
                    typedDependencies,
                    createSize: factory_factory("size", [
                        "typed",
                        "config",
                        "?matrix"
                    ], (_ref)=>{
                        var { typed , config , matrix  } = _ref;
                        return typed("size", {
                            Matrix: function(x) {
                                return x.create(x.size());
                            },
                            Array: array_arraySize,
                            string: function(x) {
                                return "Array" === config.matrix ? [
                                    x.length
                                ] : matrix([
                                    x.length
                                ]);
                            },
                            "number | Complex | BigNumber | Unit | boolean | null": function(x) {
                                return "Array" === config.matrix ? [] : matrix ? matrix([]) : function() {
                                    throw new Error('No "matrix" implementation available');
                                }();
                            }
                        });
                    })
                }, dotDependencies = {
                    addScalarDependencies,
                    conjDependencies,
                    multiplyScalarDependencies,
                    sizeDependencies,
                    typedDependencies,
                    createDot: factory_factory("dot", [
                        "typed",
                        "addScalar",
                        "multiplyScalar",
                        "conj",
                        "size"
                    ], (_ref)=>{
                        var { typed , addScalar , multiplyScalar , conj , size  } = _ref;
                        return typed("dot", {
                            "Array | DenseMatrix, Array | DenseMatrix": function(a, b) {
                                var N = _validateDim(a, b), adata = is_isMatrix(a) ? a._data : a, adt = is_isMatrix(a) ? a._datatype : void 0, bdata = is_isMatrix(b) ? b._data : b, bdt = is_isMatrix(b) ? b._datatype : void 0, aIsColumn = 2 === _size(a).length, bIsColumn = 2 === _size(b).length, add = addScalar, mul = multiplyScalar;
                                if (adt && bdt && adt === bdt && "string" == typeof adt) {
                                    var dt = adt;
                                    add = typed.find(addScalar, [
                                        dt,
                                        dt
                                    ]), mul = typed.find(multiplyScalar, [
                                        dt,
                                        dt
                                    ]);
                                }
                                if (!aIsColumn && !bIsColumn) {
                                    for(var c = mul(conj(adata[0]), bdata[0]), i = 1; i < N; i++)c = add(c, mul(conj(adata[i]), bdata[i]));
                                    return c;
                                }
                                if (!aIsColumn && bIsColumn) {
                                    for(var _c = mul(conj(adata[0]), bdata[0][0]), _i = 1; _i < N; _i++)_c = add(_c, mul(conj(adata[_i]), bdata[_i][0]));
                                    return _c;
                                }
                                if (aIsColumn && !bIsColumn) {
                                    for(var _c2 = mul(conj(adata[0][0]), bdata[0]), _i2 = 1; _i2 < N; _i2++)_c2 = add(_c2, mul(conj(adata[_i2][0]), bdata[_i2]));
                                    return _c2;
                                }
                                if (aIsColumn && bIsColumn) {
                                    for(var _c3 = mul(conj(adata[0][0]), bdata[0][0]), _i3 = 1; _i3 < N; _i3++)_c3 = add(_c3, mul(conj(adata[_i3][0]), bdata[_i3][0]));
                                    return _c3;
                                }
                            },
                            "SparseMatrix, SparseMatrix": function(x, y) {
                                _validateDim(x, y);
                                var xindex = x._index, xvalues = x._values, yindex = y._index, yvalues = y._values, c = 0, add = addScalar, mul = multiplyScalar, i = 0, j = 0;
                                for(; i < xindex.length && j < yindex.length;){
                                    var I = xindex[i], J = yindex[j];
                                    I < J ? i++ : I > J ? j++ : I === J && (c = add(c, mul(xvalues[i], yvalues[j])), i++, j++);
                                }
                                return c;
                            }
                        });
                        function _validateDim(x, y) {
                            var xLen, yLen, xSize = _size(x), ySize = _size(y);
                            if (1 === xSize.length) xLen = xSize[0];
                            else {
                                if (2 !== xSize.length || 1 !== xSize[1]) throw new RangeError("Expected a column vector, instead got a matrix of size (" + xSize.join(", ") + ")");
                                xLen = xSize[0];
                            }
                            if (1 === ySize.length) yLen = ySize[0];
                            else {
                                if (2 !== ySize.length || 1 !== ySize[1]) throw new RangeError("Expected a column vector, instead got a matrix of size (" + ySize.join(", ") + ")");
                                yLen = ySize[0];
                            }
                            if (xLen !== yLen) throw new RangeError("Vectors must have equal length (" + xLen + " != " + yLen + ")");
                            if (0 === xLen) throw new RangeError("Cannot calculate the dot product of empty vectors");
                            return xLen;
                        }
                        function _size(x) {
                            return is_isMatrix(x) ? x.size() : size(x);
                        }
                    })
                }, createMultiply = factory_factory("multiply", [
                    "typed",
                    "matrix",
                    "addScalar",
                    "multiplyScalar",
                    "equalScalar",
                    "dot"
                ], (_ref)=>{
                    var { typed , matrix , addScalar , multiplyScalar , equalScalar , dot  } = _ref, algorithm11 = createAlgorithm11({
                        typed,
                        equalScalar
                    }), algorithm14 = createAlgorithm14({
                        typed
                    });
                    function _validateMatrixDimensions(size1, size2) {
                        switch(size1.length){
                            case 1:
                                switch(size2.length){
                                    case 1:
                                        if (size1[0] !== size2[0]) throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");
                                        break;
                                    case 2:
                                        if (size1[0] !== size2[0]) throw new RangeError("Dimension mismatch in multiplication. Vector length (" + size1[0] + ") must match Matrix rows (" + size2[0] + ")");
                                        break;
                                    default:
                                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + size2.length + " dimensions)");
                                }
                                break;
                            case 2:
                                switch(size2.length){
                                    case 1:
                                        if (size1[1] !== size2[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix columns (" + size1[1] + ") must match Vector length (" + size2[0] + ")");
                                        break;
                                    case 2:
                                        if (size1[1] !== size2[0]) throw new RangeError("Dimension mismatch in multiplication. Matrix A columns (" + size1[1] + ") must match Matrix B rows (" + size2[0] + ")");
                                        break;
                                    default:
                                        throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has " + size2.length + " dimensions)");
                                }
                                break;
                            default:
                                throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has " + size1.length + " dimensions)");
                        }
                    }
                    function _multiplyVectorMatrix(a, b) {
                        if ("dense" !== b.storage()) throw new Error("Support for SparseMatrix not implemented");
                        return function(a, b) {
                            var dt, adata = a._data, asize = a._size, adt = a._datatype, bdata = b._data, bsize = b._size, bdt = b._datatype, alength = asize[0], bcolumns = bsize[1], af = addScalar, mf = multiplyScalar;
                            adt && bdt && adt === bdt && "string" == typeof adt && (dt = adt, af = typed.find(addScalar, [
                                dt,
                                dt
                            ]), mf = typed.find(multiplyScalar, [
                                dt,
                                dt
                            ]));
                            for(var c = [], j = 0; j < bcolumns; j++){
                                for(var sum = mf(adata[0], bdata[0][j]), i = 1; i < alength; i++)sum = af(sum, mf(adata[i], bdata[i][j]));
                                c[j] = sum;
                            }
                            return a.createDenseMatrix({
                                data: c,
                                size: [
                                    bcolumns
                                ],
                                datatype: dt
                            });
                        }(a, b);
                    }
                    var _multiplyMatrixVector = typed("_multiplyMatrixVector", {
                        "DenseMatrix, any": function(a, b) {
                            var dt, adata = a._data, asize = a._size, adt = a._datatype, bdata = b._data, bdt = b._datatype, arows = asize[0], acolumns = asize[1], af = addScalar, mf = multiplyScalar;
                            adt && bdt && adt === bdt && "string" == typeof adt && (dt = adt, af = typed.find(addScalar, [
                                dt,
                                dt
                            ]), mf = typed.find(multiplyScalar, [
                                dt,
                                dt
                            ]));
                            for(var c = [], i = 0; i < arows; i++){
                                for(var row = adata[i], sum = mf(row[0], bdata[0]), j = 1; j < acolumns; j++)sum = af(sum, mf(row[j], bdata[j]));
                                c[i] = sum;
                            }
                            return a.createDenseMatrix({
                                data: c,
                                size: [
                                    arows
                                ],
                                datatype: dt
                            });
                        },
                        "SparseMatrix, any": function(a, b) {
                            var avalues = a._values, aindex = a._index, aptr = a._ptr, adt = a._datatype;
                            if (!avalues) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                            var dt, bdata = b._data, bdt = b._datatype, arows = a._size[0], brows = b._size[0], cvalues = [], cindex = [], cptr = [], af = addScalar, mf = multiplyScalar, eq = equalScalar, zero = 0;
                            adt && bdt && adt === bdt && "string" == typeof adt && (dt = adt, af = typed.find(addScalar, [
                                dt,
                                dt
                            ]), mf = typed.find(multiplyScalar, [
                                dt,
                                dt
                            ]), eq = typed.find(equalScalar, [
                                dt,
                                dt
                            ]), zero = typed.convert(0, dt));
                            var x = [], w = [];
                            cptr[0] = 0;
                            for(var ib = 0; ib < brows; ib++){
                                var vbi = bdata[ib];
                                if (!eq(vbi, zero)) for(var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++){
                                    var ia = aindex[ka];
                                    w[ia] ? x[ia] = af(x[ia], mf(vbi, avalues[ka])) : (w[ia] = !0, cindex.push(ia), x[ia] = mf(vbi, avalues[ka]));
                                }
                            }
                            for(var p1 = cindex.length, p = 0; p < p1; p++){
                                var ic = cindex[p];
                                cvalues[p] = x[ic];
                            }
                            return cptr[1] = cindex.length, a.createSparseMatrix({
                                values: cvalues,
                                index: cindex,
                                ptr: cptr,
                                size: [
                                    arows,
                                    1
                                ],
                                datatype: dt
                            });
                        }
                    }), _multiplyMatrixMatrix = typed("_multiplyMatrixMatrix", {
                        "DenseMatrix, DenseMatrix": function(a, b) {
                            var dt, adata = a._data, asize = a._size, adt = a._datatype, bdata = b._data, bsize = b._size, bdt = b._datatype, arows = asize[0], acolumns = asize[1], bcolumns = bsize[1], af = addScalar, mf = multiplyScalar;
                            adt && bdt && adt === bdt && "string" == typeof adt && (dt = adt, af = typed.find(addScalar, [
                                dt,
                                dt
                            ]), mf = typed.find(multiplyScalar, [
                                dt,
                                dt
                            ]));
                            for(var c = [], i = 0; i < arows; i++){
                                var row = adata[i];
                                c[i] = [];
                                for(var j = 0; j < bcolumns; j++){
                                    for(var sum = mf(row[0], bdata[0][j]), x = 1; x < acolumns; x++)sum = af(sum, mf(row[x], bdata[x][j]));
                                    c[i][j] = sum;
                                }
                            }
                            return a.createDenseMatrix({
                                data: c,
                                size: [
                                    arows,
                                    bcolumns
                                ],
                                datatype: dt
                            });
                        },
                        "DenseMatrix, SparseMatrix": function(a, b) {
                            var adata = a._data, asize = a._size, adt = a._datatype, bvalues = b._values, bindex = b._index, bptr = b._ptr, bsize = b._size, bdt = b._datatype;
                            if (!bvalues) throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");
                            var dt, arows = asize[0], bcolumns = bsize[1], af = addScalar, mf = multiplyScalar, eq = equalScalar, zero = 0;
                            adt && bdt && adt === bdt && "string" == typeof adt && (dt = adt, af = typed.find(addScalar, [
                                dt,
                                dt
                            ]), mf = typed.find(multiplyScalar, [
                                dt,
                                dt
                            ]), eq = typed.find(equalScalar, [
                                dt,
                                dt
                            ]), zero = typed.convert(0, dt));
                            for(var cvalues = [], cindex = [], cptr = [], c = b.createSparseMatrix({
                                values: cvalues,
                                index: cindex,
                                ptr: cptr,
                                size: [
                                    arows,
                                    bcolumns
                                ],
                                datatype: dt
                            }), jb = 0; jb < bcolumns; jb++){
                                cptr[jb] = cindex.length;
                                var kb0 = bptr[jb], kb1 = bptr[jb + 1];
                                if (kb1 > kb0) for(var last = 0, i = 0; i < arows; i++){
                                    for(var mark = i + 1, cij = void 0, kb = kb0; kb < kb1; kb++){
                                        var ib = bindex[kb];
                                        last !== mark ? (cij = mf(adata[i][ib], bvalues[kb]), last = mark) : cij = af(cij, mf(adata[i][ib], bvalues[kb]));
                                    }
                                    last !== mark || eq(cij, zero) || (cindex.push(i), cvalues.push(cij));
                                }
                            }
                            return cptr[bcolumns] = cindex.length, c;
                        },
                        "SparseMatrix, DenseMatrix": function(a, b) {
                            var avalues = a._values, aindex = a._index, aptr = a._ptr, adt = a._datatype;
                            if (!avalues) throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");
                            var dt, bdata = b._data, bdt = b._datatype, arows = a._size[0], brows = b._size[0], bcolumns = b._size[1], af = addScalar, mf = multiplyScalar, eq = equalScalar, zero = 0;
                            adt && bdt && adt === bdt && "string" == typeof adt && (dt = adt, af = typed.find(addScalar, [
                                dt,
                                dt
                            ]), mf = typed.find(multiplyScalar, [
                                dt,
                                dt
                            ]), eq = typed.find(equalScalar, [
                                dt,
                                dt
                            ]), zero = typed.convert(0, dt));
                            for(var cvalues = [], cindex = [], cptr = [], c = a.createSparseMatrix({
                                values: cvalues,
                                index: cindex,
                                ptr: cptr,
                                size: [
                                    arows,
                                    bcolumns
                                ],
                                datatype: dt
                            }), x = [], w = [], jb = 0; jb < bcolumns; jb++){
                                cptr[jb] = cindex.length;
                                for(var mark = jb + 1, ib = 0; ib < brows; ib++){
                                    var vbij = bdata[ib][jb];
                                    if (!eq(vbij, zero)) for(var ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++){
                                        var ia = aindex[ka];
                                        w[ia] !== mark ? (w[ia] = mark, cindex.push(ia), x[ia] = mf(vbij, avalues[ka])) : x[ia] = af(x[ia], mf(vbij, avalues[ka]));
                                    }
                                }
                                for(var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++){
                                    var ic = cindex[p];
                                    cvalues[p] = x[ic];
                                }
                            }
                            return cptr[bcolumns] = cindex.length, c;
                        },
                        "SparseMatrix, SparseMatrix": function(a, b) {
                            var dt, avalues = a._values, aindex = a._index, aptr = a._ptr, adt = a._datatype, bvalues = b._values, bindex = b._index, bptr = b._ptr, bdt = b._datatype, arows = a._size[0], bcolumns = b._size[1], values = avalues && bvalues, af = addScalar, mf = multiplyScalar;
                            adt && bdt && adt === bdt && "string" == typeof adt && (dt = adt, af = typed.find(addScalar, [
                                dt,
                                dt
                            ]), mf = typed.find(multiplyScalar, [
                                dt,
                                dt
                            ]));
                            for(var ka, ka0, ka1, kb, kb0, kb1, ia, ib, cvalues = values ? [] : void 0, cindex = [], cptr = [], c = a.createSparseMatrix({
                                values: cvalues,
                                index: cindex,
                                ptr: cptr,
                                size: [
                                    arows,
                                    bcolumns
                                ],
                                datatype: dt
                            }), x = values ? [] : void 0, w = [], jb = 0; jb < bcolumns; jb++){
                                cptr[jb] = cindex.length;
                                var mark = jb + 1;
                                for(kb0 = bptr[jb], kb1 = bptr[jb + 1], kb = kb0; kb < kb1; kb++)if (ib = bindex[kb], values) for(ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++)ia = aindex[ka], w[ia] !== mark ? (w[ia] = mark, cindex.push(ia), x[ia] = mf(bvalues[kb], avalues[ka])) : x[ia] = af(x[ia], mf(bvalues[kb], avalues[ka]));
                                else for(ka0 = aptr[ib], ka1 = aptr[ib + 1], ka = ka0; ka < ka1; ka++)ia = aindex[ka], w[ia] !== mark && (w[ia] = mark, cindex.push(ia));
                                if (values) for(var p0 = cptr[jb], p1 = cindex.length, p = p0; p < p1; p++){
                                    var ic = cindex[p];
                                    cvalues[p] = x[ic];
                                }
                            }
                            return cptr[bcolumns] = cindex.length, c;
                        }
                    });
                    return typed("multiply", extend({
                        "Array, Array": function(x, y) {
                            _validateMatrixDimensions(array_arraySize(x), array_arraySize(y));
                            var m = this(matrix(x), matrix(y));
                            return is_isMatrix(m) ? m.valueOf() : m;
                        },
                        "Matrix, Matrix": function(x, y) {
                            var xsize = x.size(), ysize = y.size();
                            return _validateMatrixDimensions(xsize, ysize), 1 === xsize.length ? 1 === ysize.length ? function(a, b, n) {
                                if (0 === n) throw new Error("Cannot multiply two empty vectors");
                                return dot(a, b);
                            }(x, y, xsize[0]) : _multiplyVectorMatrix(x, y) : 1 === ysize.length ? _multiplyMatrixVector(x, y) : _multiplyMatrixMatrix(x, y);
                        },
                        "Matrix, Array": function(x, y) {
                            return this(x, matrix(y));
                        },
                        "Array, Matrix": function(x, y) {
                            return this(matrix(x, y.storage()), y);
                        },
                        "SparseMatrix, any": function(x, y) {
                            return algorithm11(x, y, multiplyScalar, !1);
                        },
                        "DenseMatrix, any": function(x, y) {
                            return algorithm14(x, y, multiplyScalar, !1);
                        },
                        "any, SparseMatrix": function(x, y) {
                            return algorithm11(y, x, multiplyScalar, !0);
                        },
                        "any, DenseMatrix": function(x, y) {
                            return algorithm14(y, x, multiplyScalar, !0);
                        },
                        "Array, any": function(x, y) {
                            return algorithm14(matrix(x), y, multiplyScalar, !1).valueOf();
                        },
                        "any, Array": function(x, y) {
                            return algorithm14(matrix(y), x, multiplyScalar, !0).valueOf();
                        },
                        "any, any": multiplyScalar,
                        "any, any, ...any": function(x, y, rest) {
                            for(var result = this(x, y), i = 0; i < rest.length; i++)result = this(result, rest[i]);
                            return result;
                        }
                    }, multiplyScalar.signatures));
                }), multiplyDependencies = {
                    addScalarDependencies,
                    dotDependencies,
                    equalScalarDependencies,
                    matrixDependencies,
                    multiplyScalarDependencies,
                    typedDependencies,
                    createMultiply
                }, createPow = factory_factory("pow", [
                    "typed",
                    "config",
                    "identity",
                    "multiply",
                    "matrix",
                    "fraction",
                    "number",
                    "Complex"
                ], (_ref)=>{
                    var { typed , config , identity , multiply , matrix , number , fraction , Complex  } = _ref;
                    return typed("pow", {
                        "number, number": _pow,
                        "Complex, Complex": function(x, y) {
                            return x.pow(y);
                        },
                        "BigNumber, BigNumber": function(x, y) {
                            return y.isInteger() || x >= 0 || config.predictable ? x.pow(y) : new Complex(x.toNumber(), 0).pow(y.toNumber(), 0);
                        },
                        "Fraction, Fraction": function(x, y) {
                            var result = x.pow(y);
                            if (null != result) return result;
                            if (config.predictable) throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");
                            return _pow(x.valueOf(), y.valueOf());
                        },
                        "Array, number": _powArray,
                        "Array, BigNumber": function(x, y) {
                            return _powArray(x, y.toNumber());
                        },
                        "Matrix, number": _powMatrix,
                        "Matrix, BigNumber": function(x, y) {
                            return _powMatrix(x, y.toNumber());
                        },
                        "Unit, number | BigNumber": function(x, y) {
                            return x.pow(y);
                        }
                    });
                    function _pow(x, y) {
                        if (config.predictable && !isInteger(y) && x < 0) try {
                            var yFrac = fraction(y), yNum = number(yFrac);
                            if ((y === yNum || Math.abs((y - yNum) / y) < 1e-14) && yFrac.d % 2 == 1) return (yFrac.n % 2 == 0 ? 1 : -1) * Math.pow(-x, y);
                        } catch (ex) {}
                        return config.predictable && (x < -1 && y === 1 / 0 || x > -1 && x < 0 && y === -1 / 0) ? NaN : isInteger(y) || x >= 0 || config.predictable ? powNumber(x, y) : x * x < 1 && y === 1 / 0 || x * x > 1 && y === -1 / 0 ? 0 : new Complex(x, 0).pow(y, 0);
                    }
                    function _powArray(x, y) {
                        if (!isInteger(y) || y < 0) throw new TypeError("For A^b, b must be a positive integer (value is " + y + ")");
                        var s = array_arraySize(x);
                        if (2 !== s.length) throw new Error("For A^b, A must be 2 dimensional (A has " + s.length + " dimensions)");
                        if (s[0] !== s[1]) throw new Error("For A^b, A must be square (size is " + s[0] + "x" + s[1] + ")");
                        for(var res = identity(s[0]).valueOf(), px = x; y >= 1;)1 == (1 & y) && (res = multiply(px, res)), y >>= 1, px = multiply(px, px);
                        return res;
                    }
                    function _powMatrix(x, y) {
                        return matrix(_powArray(x.valueOf(), y));
                    }
                }), powDependencies = {
                    ComplexDependencies,
                    fractionDependencies,
                    identityDependencies,
                    matrixDependencies,
                    multiplyDependencies,
                    numberDependencies,
                    typedDependencies,
                    createPow
                }, unaryMinusDependencies = {
                    typedDependencies,
                    createUnaryMinus: factory_factory("unaryMinus", [
                        "typed"
                    ], (_ref)=>{
                        var { typed  } = _ref;
                        return typed("unaryMinus", {
                            number: unaryMinusNumber,
                            Complex: function(x) {
                                return x.neg();
                            },
                            BigNumber: function(x) {
                                return x.neg();
                            },
                            Fraction: function(x) {
                                return x.neg();
                            },
                            Unit: function(x) {
                                var res = x.clone();
                                return res.value = this(x.value), res;
                            },
                            "Array | Matrix": function(x) {
                                return deepMap(x, this, !0);
                            }
                        });
                    })
                }, createAlgorithm01 = factory_factory("algorithm01", [
                    "typed"
                ], (_ref)=>{
                    var { typed  } = _ref;
                    return function(denseMatrix, sparseMatrix, callback, inverse) {
                        var adata = denseMatrix._data, asize = denseMatrix._size, adt = denseMatrix._datatype, bvalues = sparseMatrix._values, bindex = sparseMatrix._index, bptr = sparseMatrix._ptr, bsize = sparseMatrix._size, bdt = sparseMatrix._datatype;
                        if (asize.length !== bsize.length) throw new DimensionError(asize.length, bsize.length);
                        if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
                        if (!bvalues) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                        var i, j, rows = asize[0], columns = asize[1], dt = "string" == typeof adt && adt === bdt ? adt : void 0, cf = dt ? typed.find(callback, [
                            dt,
                            dt
                        ]) : callback, cdata = [];
                        for(i = 0; i < rows; i++)cdata[i] = [];
                        var x = [], w = [];
                        for(j = 0; j < columns; j++){
                            for(var mark = j + 1, k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++)x[i = bindex[k]] = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]), w[i] = mark;
                            for(i = 0; i < rows; i++)w[i] === mark ? cdata[i][j] = x[i] : cdata[i][j] = adata[i][j];
                        }
                        return denseMatrix.createDenseMatrix({
                            data: cdata,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                }), createAlgorithm05 = factory_factory("algorithm05", [
                    "typed",
                    "equalScalar"
                ], (_ref)=>{
                    var { typed , equalScalar  } = _ref;
                    return function(a, b, callback) {
                        var avalues = a._values, aindex = a._index, aptr = a._ptr, asize = a._size, adt = a._datatype, bvalues = b._values, bindex = b._index, bptr = b._ptr, bsize = b._size, bdt = b._datatype;
                        if (asize.length !== bsize.length) throw new DimensionError(asize.length, bsize.length);
                        if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
                        var dt, rows = asize[0], columns = asize[1], eq = equalScalar, zero = 0, cf = callback;
                        "string" == typeof adt && adt === bdt && (dt = adt, eq = typed.find(equalScalar, [
                            dt,
                            dt
                        ]), zero = typed.convert(0, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        var i, j, k, k1, cvalues = avalues && bvalues ? [] : void 0, cindex = [], cptr = [], xa = cvalues ? [] : void 0, xb = cvalues ? [] : void 0, wa = [], wb = [];
                        for(j = 0; j < columns; j++){
                            cptr[j] = cindex.length;
                            var mark = j + 1;
                            for(k = aptr[j], k1 = aptr[j + 1]; k < k1; k++)i = aindex[k], cindex.push(i), wa[i] = mark, xa && (xa[i] = avalues[k]);
                            for(k = bptr[j], k1 = bptr[j + 1]; k < k1; k++)wa[i = bindex[k]] !== mark && cindex.push(i), wb[i] = mark, xb && (xb[i] = bvalues[k]);
                            if (cvalues) for(k = cptr[j]; k < cindex.length;){
                                var wai = wa[i = cindex[k]], wbi = wb[i];
                                if (wai === mark || wbi === mark) {
                                    var vc = cf(wai === mark ? xa[i] : zero, wbi === mark ? xb[i] : zero);
                                    eq(vc, zero) ? cindex.splice(k, 1) : (cvalues.push(vc), k++);
                                }
                            }
                        }
                        return cptr[columns] = cindex.length, a.createSparseMatrix({
                            values: cvalues,
                            index: cindex,
                            ptr: cptr,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                }), createAlgorithm10 = factory_factory("algorithm10", [
                    "typed",
                    "DenseMatrix"
                ], (_ref)=>{
                    var { typed , DenseMatrix  } = _ref;
                    return function(s, b, callback, inverse) {
                        var avalues = s._values, aindex = s._index, aptr = s._ptr, asize = s._size, adt = s._datatype;
                        if (!avalues) throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");
                        var dt, rows = asize[0], columns = asize[1], cf = callback;
                        "string" == typeof adt && (dt = adt, b = typed.convert(b, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        for(var cdata = [], x = [], w = [], j = 0; j < columns; j++){
                            for(var mark = j + 1, k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++){
                                var r = aindex[k];
                                x[r] = avalues[k], w[r] = mark;
                            }
                            for(var i = 0; i < rows; i++)0 === j && (cdata[i] = []), w[i] === mark ? cdata[i][j] = inverse ? cf(b, x[i]) : cf(x[i], b) : cdata[i][j] = b;
                        }
                        return new DenseMatrix({
                            data: cdata,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                });
                function checkEqualDimensions(x, y) {
                    var xsize = x.size(), ysize = y.size();
                    if (xsize.length !== ysize.length) throw new DimensionError(xsize.length, ysize.length);
                }
                var subtractDependencies = {
                    DenseMatrixDependencies,
                    addScalarDependencies,
                    equalScalarDependencies,
                    matrixDependencies,
                    typedDependencies,
                    unaryMinusDependencies,
                    createSubtract: factory_factory("subtract", [
                        "typed",
                        "matrix",
                        "equalScalar",
                        "addScalar",
                        "unaryMinus",
                        "DenseMatrix"
                    ], (_ref)=>{
                        var { typed , matrix , equalScalar , addScalar , unaryMinus , DenseMatrix  } = _ref, algorithm01 = createAlgorithm01({
                            typed
                        }), algorithm03 = createAlgorithm03({
                            typed
                        }), algorithm05 = createAlgorithm05({
                            typed,
                            equalScalar
                        }), algorithm10 = createAlgorithm10({
                            typed,
                            DenseMatrix
                        }), algorithm13 = createAlgorithm13({
                            typed
                        }), algorithm14 = createAlgorithm14({
                            typed
                        });
                        return typed("subtract", {
                            "number, number": function(x, y) {
                                return x - y;
                            },
                            "Complex, Complex": function(x, y) {
                                return x.sub(y);
                            },
                            "BigNumber, BigNumber": function(x, y) {
                                return x.minus(y);
                            },
                            "Fraction, Fraction": function(x, y) {
                                return x.sub(y);
                            },
                            "Unit, Unit": function(x, y) {
                                if (null === x.value) throw new Error("Parameter x contains a unit with undefined value");
                                if (null === y.value) throw new Error("Parameter y contains a unit with undefined value");
                                if (!x.equalBase(y)) throw new Error("Units do not match");
                                var res = x.clone();
                                return res.value = this(res.value, y.value), res.fixPrefix = !1, res;
                            },
                            "SparseMatrix, SparseMatrix": function(x, y) {
                                return checkEqualDimensions(x, y), algorithm05(x, y, this);
                            },
                            "SparseMatrix, DenseMatrix": function(x, y) {
                                return checkEqualDimensions(x, y), algorithm03(y, x, this, !0);
                            },
                            "DenseMatrix, SparseMatrix": function(x, y) {
                                return checkEqualDimensions(x, y), algorithm01(x, y, this, !1);
                            },
                            "DenseMatrix, DenseMatrix": function(x, y) {
                                return checkEqualDimensions(x, y), algorithm13(x, y, this);
                            },
                            "Array, Array": function(x, y) {
                                return this(matrix(x), matrix(y)).valueOf();
                            },
                            "Array, Matrix": function(x, y) {
                                return this(matrix(x), y);
                            },
                            "Matrix, Array": function(x, y) {
                                return this(x, matrix(y));
                            },
                            "SparseMatrix, any": function(x, y) {
                                return algorithm10(x, unaryMinus(y), addScalar);
                            },
                            "DenseMatrix, any": function(x, y) {
                                return algorithm14(x, y, this);
                            },
                            "any, SparseMatrix": function(x, y) {
                                return algorithm10(y, x, this, !0);
                            },
                            "any, DenseMatrix": function(x, y) {
                                return algorithm14(y, x, this, !0);
                            },
                            "Array, any": function(x, y) {
                                return algorithm14(matrix(x), y, this, !1).valueOf();
                            },
                            "any, Array": function(x, y) {
                                return algorithm14(matrix(y), x, this, !0).valueOf();
                            }
                        });
                    })
                };
                function lruQueue(limit) {
                    var size = 0, base = 1, queue = Object.create(null), map = Object.create(null), index = 0, del = function(id) {
                        var oldIndex = map[id];
                        if (oldIndex && (delete queue[oldIndex], delete map[id], --size, base === oldIndex)) {
                            if (!size) return index = 0, void (base = 1);
                            for(; !hasOwnProperty.call(queue, ++base););
                        }
                    };
                    return limit = Math.abs(limit), {
                        hit: function(id) {
                            var oldIndex = map[id], nuIndex = ++index;
                            if (queue[nuIndex] = id, map[id] = nuIndex, !oldIndex) {
                                if (++size <= limit) return;
                                return id = queue[base], del(id), id;
                            }
                            if (delete queue[oldIndex], base === oldIndex) for(; !hasOwnProperty.call(queue, ++base););
                        },
                        delete: del,
                        clear: function() {
                            size = index = 0, base = 1, queue = Object.create(null), map = Object.create(null);
                        }
                    };
                }
                function memoize(fn) {
                    var { hasher , limit  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return limit = null == limit ? Number.POSITIVE_INFINITY : limit, hasher = null == hasher ? JSON.stringify : hasher, function memoize() {
                        "object" != typeof memoize.cache && (memoize.cache = {
                            values: new Map,
                            lru: lruQueue(limit || Number.POSITIVE_INFINITY)
                        });
                        for(var args = [], i = 0; i < arguments.length; i++)args[i] = arguments[i];
                        var hash = hasher(args);
                        if (memoize.cache.values.has(hash)) return memoize.cache.lru.hit(hash), memoize.cache.values.get(hash);
                        var newVal = fn.apply(fn, args);
                        return memoize.cache.values.set(hash, newVal), memoize.cache.values.delete(memoize.cache.lru.hit(hash)), newVal;
                    };
                }
                memoize(function(BigNumber) {
                    return new BigNumber(1).exp();
                }, {
                    hasher
                }), memoize(function(BigNumber) {
                    return new BigNumber(1).plus(new BigNumber(5).sqrt()).div(2);
                }, {
                    hasher
                });
                var createBigNumberPi = memoize(function(BigNumber) {
                    return BigNumber.acos(-1);
                }, {
                    hasher
                });
                memoize(function(BigNumber) {
                    return createBigNumberPi(BigNumber).times(2);
                }, {
                    hasher
                });
                function hasher(args) {
                    return args[0].precision;
                }
                function Unit_ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly && (symbols = symbols.filter(function(sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        })), keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function Unit_objectSpread(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? Unit_ownKeys(Object(source), !0).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Unit_ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                    return target;
                }
                var createUnitClass = factory_factory("Unit", [
                    "?on",
                    "config",
                    "addScalar",
                    "subtract",
                    "multiplyScalar",
                    "divideScalar",
                    "pow",
                    "abs",
                    "fix",
                    "round",
                    "equal",
                    "isNumeric",
                    "format",
                    "number",
                    "Complex",
                    "BigNumber",
                    "Fraction"
                ], (_ref)=>{
                    var text, index, c, { on , config , addScalar , subtract , multiplyScalar , divideScalar , pow , abs , fix , round , equal , isNumeric , format , number , Complex , BigNumber: _BigNumber , Fraction: _Fraction  } = _ref, toNumber = number;
                    function Unit(value, name) {
                        if (!(this instanceof Unit)) throw new Error("Constructor must be called with the new operator");
                        if (null != value && !isNumeric(value) && !isComplex(value)) throw new TypeError("First parameter in Unit constructor must be number, BigNumber, Fraction, Complex, or undefined");
                        if (void 0 !== name && ("string" != typeof name || "" === name)) throw new TypeError("Second parameter in Unit constructor must be a string");
                        if (void 0 !== name) {
                            var u = Unit.parse(name);
                            this.units = u.units, this.dimensions = u.dimensions;
                        } else {
                            this.units = [
                                {
                                    unit: UNIT_NONE,
                                    prefix: PREFIXES.NONE,
                                    power: 0
                                }
                            ], this.dimensions = [];
                            for(var i = 0; i < BASE_DIMENSIONS.length; i++)this.dimensions[i] = 0;
                        }
                        this.value = null != value ? this._normalize(value) : null, this.fixPrefix = !1, this.skipAutomaticSimplification = !0;
                    }
                    function skipWhitespace() {
                        for(; " " === c || "	" === c;)next();
                    }
                    function isDigit(c) {
                        return c >= "0" && c <= "9";
                    }
                    function next() {
                        index++, c = text.charAt(index);
                    }
                    function revert(oldIndex) {
                        index = oldIndex, c = text.charAt(index);
                    }
                    function parseNumber() {
                        var number = "", oldIndex = index;
                        if ("+" === c ? next() : "-" === c && (number += c, next()), !function(c) {
                            return c >= "0" && c <= "9" || "." === c;
                        }(c)) return revert(oldIndex), null;
                        if ("." === c) {
                            if (number += c, next(), !isDigit(c)) return revert(oldIndex), null;
                        } else {
                            for(; isDigit(c);)number += c, next();
                            "." === c && (number += c, next());
                        }
                        for(; isDigit(c);)number += c, next();
                        if ("E" === c || "e" === c) {
                            var tentativeNumber = "", tentativeIndex = index;
                            if (tentativeNumber += c, next(), "+" !== c && "-" !== c || (tentativeNumber += c, next()), !isDigit(c)) return revert(tentativeIndex), number;
                            for(number += tentativeNumber; isDigit(c);)number += c, next();
                        }
                        return number;
                    }
                    function parseUnit() {
                        for(var unitName = ""; isDigit(c) || Unit.isValidAlpha(c);)unitName += c, next();
                        var firstC = unitName.charAt(0);
                        return Unit.isValidAlpha(firstC) ? unitName : null;
                    }
                    function parseCharacter(toFind) {
                        return c === toFind ? (next(), toFind) : null;
                    }
                    Unit.prototype.type = "Unit", Unit.prototype.isUnit = !0, Unit.parse = function(str, options) {
                        if (options = options || {}, index = -1, c = "", "string" != typeof (text = str)) throw new TypeError("Invalid argument in Unit.parse, string expected");
                        var unit = new Unit;
                        unit.units = [];
                        var powerMultiplierCurrent = 1, expectingUnit = !1;
                        next(), skipWhitespace();
                        var valueStr = parseNumber(), value = null;
                        if (valueStr) {
                            if ("BigNumber" === config.number) value = new _BigNumber(valueStr);
                            else if ("Fraction" === config.number) try {
                                value = new _Fraction(valueStr);
                            } catch (err) {
                                value = parseFloat(valueStr);
                            }
                            else value = parseFloat(valueStr);
                            skipWhitespace(), parseCharacter("*") ? (powerMultiplierCurrent = 1, expectingUnit = !0) : parseCharacter("/") && (powerMultiplierCurrent = -1, expectingUnit = !0);
                        }
                        for(var powerMultiplierStack = [], powerMultiplierStackProduct = 1;;){
                            for(skipWhitespace(); "(" === c;)powerMultiplierStack.push(powerMultiplierCurrent), powerMultiplierStackProduct *= powerMultiplierCurrent, powerMultiplierCurrent = 1, next(), skipWhitespace();
                            var uStr = void 0;
                            if (!c) break;
                            var oldC = c;
                            if (null === (uStr = parseUnit())) throw new SyntaxError('Unexpected "' + oldC + '" in "' + text + '" at index ' + index.toString());
                            var res = _findUnit(uStr);
                            if (null === res) throw new SyntaxError('Unit "' + uStr + '" not found.');
                            var power = powerMultiplierCurrent * powerMultiplierStackProduct;
                            if (skipWhitespace(), parseCharacter("^")) {
                                skipWhitespace();
                                var p = parseNumber();
                                if (null === p) throw new SyntaxError('In "' + str + '", "^" must be followed by a floating-point number');
                                power *= p;
                            }
                            unit.units.push({
                                unit: res.unit,
                                prefix: res.prefix,
                                power
                            });
                            for(var i = 0; i < BASE_DIMENSIONS.length; i++)unit.dimensions[i] += (res.unit.dimensions[i] || 0) * power;
                            for(skipWhitespace(); ")" === c;){
                                if (0 === powerMultiplierStack.length) throw new SyntaxError('Unmatched ")" in "' + text + '" at index ' + index.toString());
                                powerMultiplierStackProduct /= powerMultiplierStack.pop(), next(), skipWhitespace();
                            }
                            if (expectingUnit = !1, parseCharacter("*") ? (powerMultiplierCurrent = 1, expectingUnit = !0) : parseCharacter("/") ? (powerMultiplierCurrent = -1, expectingUnit = !0) : powerMultiplierCurrent = 1, res.unit.base) {
                                var baseDim = res.unit.base.key;
                                UNIT_SYSTEMS.auto[baseDim] = {
                                    unit: res.unit,
                                    prefix: res.prefix
                                };
                            }
                        }
                        if (skipWhitespace(), c) throw new SyntaxError('Could not parse: "' + str + '"');
                        if (expectingUnit) throw new SyntaxError('Trailing characters: "' + str + '"');
                        if (0 !== powerMultiplierStack.length) throw new SyntaxError('Unmatched "(" in "' + text + '"');
                        if (0 === unit.units.length && !options.allowNoUnits) throw new SyntaxError('"' + str + '" contains no units');
                        return unit.value = void 0 !== value ? unit._normalize(value) : null, unit;
                    }, Unit.prototype.clone = function() {
                        var unit = new Unit;
                        unit.fixPrefix = this.fixPrefix, unit.skipAutomaticSimplification = this.skipAutomaticSimplification, unit.value = clone(this.value), unit.dimensions = this.dimensions.slice(0), unit.units = [];
                        for(var i = 0; i < this.units.length; i++)for(var p in unit.units[i] = {}, this.units[i])object_hasOwnProperty(this.units[i], p) && (unit.units[i][p] = this.units[i][p]);
                        return unit;
                    }, Unit.prototype._isDerived = function() {
                        return 0 !== this.units.length && (this.units.length > 1 || Math.abs(this.units[0].power - 1) > 1e-15);
                    }, Unit.prototype._normalize = function(value) {
                        var unitValue, unitOffset, unitPower, unitPrefixValue, convert;
                        if (null == value || 0 === this.units.length) return value;
                        if (this._isDerived()) {
                            var res = value;
                            convert = Unit._getNumberConverter(is_typeOf(value));
                            for(var i = 0; i < this.units.length; i++)unitValue = convert(this.units[i].unit.value), unitPrefixValue = convert(this.units[i].prefix.value), unitPower = convert(this.units[i].power), res = multiplyScalar(res, pow(multiplyScalar(unitValue, unitPrefixValue), unitPower));
                            return res;
                        }
                        return unitValue = (convert = Unit._getNumberConverter(is_typeOf(value)))(this.units[0].unit.value), unitOffset = convert(this.units[0].unit.offset), unitPrefixValue = convert(this.units[0].prefix.value), multiplyScalar(addScalar(value, unitOffset), multiplyScalar(unitValue, unitPrefixValue));
                    }, Unit.prototype._denormalize = function(value, prefixValue) {
                        var unitValue, unitOffset, unitPower, unitPrefixValue, convert;
                        if (null == value || 0 === this.units.length) return value;
                        if (this._isDerived()) {
                            var res = value;
                            convert = Unit._getNumberConverter(is_typeOf(value));
                            for(var i = 0; i < this.units.length; i++)unitValue = convert(this.units[i].unit.value), unitPrefixValue = convert(this.units[i].prefix.value), unitPower = convert(this.units[i].power), res = divideScalar(res, pow(multiplyScalar(unitValue, unitPrefixValue), unitPower));
                            return res;
                        }
                        return unitValue = (convert = Unit._getNumberConverter(is_typeOf(value)))(this.units[0].unit.value), unitPrefixValue = convert(this.units[0].prefix.value), unitOffset = convert(this.units[0].unit.offset), subtract(divideScalar(divideScalar(value, unitValue), null == prefixValue ? unitPrefixValue : prefixValue), unitOffset);
                    };
                    var _findUnit = memoize((str)=>{
                        if (object_hasOwnProperty(UNITS, str)) {
                            var unit = UNITS[str];
                            return {
                                unit,
                                prefix: unit.prefixes[""]
                            };
                        }
                        for(var _name in UNITS)if (object_hasOwnProperty(UNITS, _name) && endsWith(str, _name)) {
                            var _unit = UNITS[_name], prefixLen = str.length - _name.length, prefixName = str.substring(0, prefixLen), _prefix = object_hasOwnProperty(_unit.prefixes, prefixName) ? _unit.prefixes[prefixName] : void 0;
                            if (void 0 !== _prefix) return {
                                unit: _unit,
                                prefix: _prefix
                            };
                        }
                        return null;
                    }, {
                        hasher: (args)=>args[0],
                        limit: 100
                    });
                    function getNumericIfUnitless(unit) {
                        return unit.equalBase(BASE_UNITS.NONE) && null !== unit.value && !config.predictable ? unit.value : unit;
                    }
                    Unit.isValuelessUnit = function(name) {
                        return null !== _findUnit(name);
                    }, Unit.prototype.hasBase = function(base) {
                        if ("string" == typeof base && (base = BASE_UNITS[base]), !base) return !1;
                        for(var i = 0; i < BASE_DIMENSIONS.length; i++)if (Math.abs((this.dimensions[i] || 0) - (base.dimensions[i] || 0)) > 1e-12) return !1;
                        return !0;
                    }, Unit.prototype.equalBase = function(other) {
                        for(var i = 0; i < BASE_DIMENSIONS.length; i++)if (Math.abs((this.dimensions[i] || 0) - (other.dimensions[i] || 0)) > 1e-12) return !1;
                        return !0;
                    }, Unit.prototype.equals = function(other) {
                        return this.equalBase(other) && equal(this.value, other.value);
                    }, Unit.prototype.multiply = function(other) {
                        for(var res = this.clone(), i = 0; i < BASE_DIMENSIONS.length; i++)res.dimensions[i] = (this.dimensions[i] || 0) + (other.dimensions[i] || 0);
                        for(var _i = 0; _i < other.units.length; _i++){
                            var inverted = Unit_objectSpread({}, other.units[_i]);
                            res.units.push(inverted);
                        }
                        if (null !== this.value || null !== other.value) {
                            var valThis = null === this.value ? this._normalize(1) : this.value, valOther = null === other.value ? other._normalize(1) : other.value;
                            res.value = multiplyScalar(valThis, valOther);
                        } else res.value = null;
                        return res.skipAutomaticSimplification = !1, getNumericIfUnitless(res);
                    }, Unit.prototype.divide = function(other) {
                        for(var res = this.clone(), i = 0; i < BASE_DIMENSIONS.length; i++)res.dimensions[i] = (this.dimensions[i] || 0) - (other.dimensions[i] || 0);
                        for(var _i2 = 0; _i2 < other.units.length; _i2++){
                            var inverted = Unit_objectSpread(Unit_objectSpread({}, other.units[_i2]), {}, {
                                power: -other.units[_i2].power
                            });
                            res.units.push(inverted);
                        }
                        if (null !== this.value || null !== other.value) {
                            var valThis = null === this.value ? this._normalize(1) : this.value, valOther = null === other.value ? other._normalize(1) : other.value;
                            res.value = divideScalar(valThis, valOther);
                        } else res.value = null;
                        return res.skipAutomaticSimplification = !1, getNumericIfUnitless(res);
                    }, Unit.prototype.pow = function(p) {
                        for(var res = this.clone(), i = 0; i < BASE_DIMENSIONS.length; i++)res.dimensions[i] = (this.dimensions[i] || 0) * p;
                        for(var _i3 = 0; _i3 < res.units.length; _i3++)res.units[_i3].power *= p;
                        return null !== res.value ? res.value = pow(res.value, p) : res.value = null, res.skipAutomaticSimplification = !1, getNumericIfUnitless(res);
                    }, Unit.prototype.abs = function() {
                        var ret = this.clone();
                        for(var i in ret.value = null !== ret.value ? abs(ret.value) : null, ret.units)"VA" !== ret.units[i].unit.name && "VAR" !== ret.units[i].unit.name || (ret.units[i].unit = UNITS.W);
                        return ret;
                    }, Unit.prototype.to = function(valuelessUnit) {
                        var other, value = null === this.value ? this._normalize(1) : this.value;
                        if ("string" == typeof valuelessUnit) {
                            if (other = Unit.parse(valuelessUnit), !this.equalBase(other)) throw new Error("Units do not match ('".concat(other.toString(), "' != '").concat(this.toString(), "')"));
                            if (null !== other.value) throw new Error("Cannot convert to a unit with a value");
                            return other.value = clone(value), other.fixPrefix = !0, other.skipAutomaticSimplification = !0, other;
                        }
                        if (isUnit(valuelessUnit)) {
                            if (!this.equalBase(valuelessUnit)) throw new Error("Units do not match ('".concat(valuelessUnit.toString(), "' != '").concat(this.toString(), "')"));
                            if (null !== valuelessUnit.value) throw new Error("Cannot convert to a unit with a value");
                            return (other = valuelessUnit.clone()).value = clone(value), other.fixPrefix = !0, other.skipAutomaticSimplification = !0, other;
                        }
                        throw new Error("String or Unit expected as parameter");
                    }, Unit.prototype.toNumber = function(valuelessUnit) {
                        return toNumber(this.toNumeric(valuelessUnit));
                    }, Unit.prototype.toNumeric = function(valuelessUnit) {
                        var other;
                        return (other = valuelessUnit ? this.to(valuelessUnit) : this.clone())._isDerived() || 0 === other.units.length ? other._denormalize(other.value) : other._denormalize(other.value, other.units[0].prefix.value);
                    }, Unit.prototype.toString = function() {
                        return this.format();
                    }, Unit.prototype.toJSON = function() {
                        return {
                            mathjs: "Unit",
                            value: this._denormalize(this.value),
                            unit: this.formatUnits(),
                            fixPrefix: this.fixPrefix
                        };
                    }, Unit.fromJSON = function(json) {
                        var unit = new Unit(json.value, json.unit);
                        return unit.fixPrefix = json.fixPrefix || !1, unit;
                    }, Unit.prototype.valueOf = Unit.prototype.toString, Unit.prototype.simplify = function() {
                        var matchingBase, matchingUnit, ret = this.clone(), proposedUnitList = [];
                        for(var key in currentUnitSystem)if (object_hasOwnProperty(currentUnitSystem, key) && ret.hasBase(BASE_UNITS[key])) {
                            matchingBase = key;
                            break;
                        }
                        if ("NONE" === matchingBase) ret.units = [];
                        else if (matchingBase && object_hasOwnProperty(currentUnitSystem, matchingBase) && (matchingUnit = currentUnitSystem[matchingBase]), matchingUnit) ret.units = [
                            {
                                unit: matchingUnit.unit,
                                prefix: matchingUnit.prefix,
                                power: 1
                            }
                        ];
                        else {
                            for(var missingBaseDim = !1, i = 0; i < BASE_DIMENSIONS.length; i++){
                                var baseDim = BASE_DIMENSIONS[i];
                                Math.abs(ret.dimensions[i] || 0) > 1e-12 && (object_hasOwnProperty(currentUnitSystem, baseDim) ? proposedUnitList.push({
                                    unit: currentUnitSystem[baseDim].unit,
                                    prefix: currentUnitSystem[baseDim].prefix,
                                    power: ret.dimensions[i] || 0
                                }) : missingBaseDim = !0);
                            }
                            proposedUnitList.length < ret.units.length && !missingBaseDim && (ret.units = proposedUnitList);
                        }
                        return ret;
                    }, Unit.prototype.toSI = function() {
                        for(var ret = this.clone(), proposedUnitList = [], i = 0; i < BASE_DIMENSIONS.length; i++){
                            var baseDim = BASE_DIMENSIONS[i];
                            if (Math.abs(ret.dimensions[i] || 0) > 1e-12) {
                                if (!object_hasOwnProperty(UNIT_SYSTEMS.si, baseDim)) throw new Error("Cannot express custom unit " + baseDim + " in SI units");
                                proposedUnitList.push({
                                    unit: UNIT_SYSTEMS.si[baseDim].unit,
                                    prefix: UNIT_SYSTEMS.si[baseDim].prefix,
                                    power: ret.dimensions[i] || 0
                                });
                            }
                        }
                        return ret.units = proposedUnitList, ret.fixPrefix = !0, ret.skipAutomaticSimplification = !0, ret;
                    }, Unit.prototype.formatUnits = function() {
                        for(var strNum = "", strDen = "", nNum = 0, nDen = 0, i = 0; i < this.units.length; i++)this.units[i].power > 0 ? (nNum++, strNum += " " + this.units[i].prefix.name + this.units[i].unit.name, Math.abs(this.units[i].power - 1) > 1e-15 && (strNum += "^" + this.units[i].power)) : this.units[i].power < 0 && nDen++;
                        if (nDen > 0) for(var _i4 = 0; _i4 < this.units.length; _i4++)this.units[_i4].power < 0 && (nNum > 0 ? (strDen += " " + this.units[_i4].prefix.name + this.units[_i4].unit.name, Math.abs(this.units[_i4].power + 1) > 1e-15 && (strDen += "^" + -this.units[_i4].power)) : (strDen += " " + this.units[_i4].prefix.name + this.units[_i4].unit.name, strDen += "^" + this.units[_i4].power));
                        strNum = strNum.substr(1), strDen = strDen.substr(1), nNum > 1 && nDen > 0 && (strNum = "(" + strNum + ")"), nDen > 1 && nNum > 0 && (strDen = "(" + strDen + ")");
                        var str = strNum;
                        return nNum > 0 && nDen > 0 && (str += " / "), str += strDen;
                    }, Unit.prototype.format = function(options) {
                        var simp = this.skipAutomaticSimplification || null === this.value ? this.clone() : this.simplify(), isImaginary = !1;
                        for(var i in void 0 !== simp.value && null !== simp.value && isComplex(simp.value) && (isImaginary = Math.abs(simp.value.re) < 1e-14), simp.units)object_hasOwnProperty(simp.units, i) && simp.units[i].unit && ("VA" === simp.units[i].unit.name && isImaginary ? simp.units[i].unit = UNITS.VAR : "VAR" !== simp.units[i].unit.name || isImaginary || (simp.units[i].unit = UNITS.VA));
                        1 !== simp.units.length || simp.fixPrefix || Math.abs(simp.units[0].power - Math.round(simp.units[0].power)) < 1e-14 && (simp.units[0].prefix = simp._bestPrefix());
                        var value = simp._denormalize(simp.value), str = null !== simp.value ? format(value, options || {}) : "", unitStr = simp.formatUnits();
                        return simp.value && isComplex(simp.value) && (str = "(" + str + ")"), unitStr.length > 0 && str.length > 0 && (str += " "), str += unitStr;
                    }, Unit.prototype._bestPrefix = function() {
                        if (1 !== this.units.length) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
                        if (Math.abs(this.units[0].power - Math.round(this.units[0].power)) >= 1e-14) throw new Error("Can only compute the best prefix for single units with integer powers, like kg, s^2, N^-1, and so forth!");
                        var absValue = null !== this.value ? abs(this.value) : 0, absUnitValue = abs(this.units[0].unit.value), bestPrefix = this.units[0].prefix;
                        if (0 === absValue) return bestPrefix;
                        var power = this.units[0].power, bestDiff = Math.log(absValue / Math.pow(bestPrefix.value * absUnitValue, power)) / Math.LN10 - 1.2;
                        if (bestDiff > -2.200001 && bestDiff < 1.800001) return bestPrefix;
                        bestDiff = Math.abs(bestDiff);
                        var prefixes = this.units[0].unit.prefixes;
                        for(var p in prefixes)if (object_hasOwnProperty(prefixes, p)) {
                            var prefix = prefixes[p];
                            if (prefix.scientific) {
                                var diff = Math.abs(Math.log(absValue / Math.pow(prefix.value * absUnitValue, power)) / Math.LN10 - 1.2);
                                (diff < bestDiff || diff === bestDiff && prefix.name.length < bestPrefix.name.length) && (bestPrefix = prefix, bestDiff = diff);
                            }
                        }
                        return bestPrefix;
                    }, Unit.prototype.splitUnit = function(parts) {
                        for(var x = this.clone(), ret = [], i = 0; i < parts.length && (x = x.to(parts[i]), i !== parts.length - 1); i++){
                            var xNumeric = x.toNumeric(), xRounded = round(xNumeric), y = new Unit(equal(xRounded, xNumeric) ? xRounded : fix(x.toNumeric()), parts[i].toString());
                            ret.push(y), x = subtract(x, y);
                        }
                        for(var testSum = 0, _i5 = 0; _i5 < ret.length; _i5++)testSum = addScalar(testSum, ret[_i5].value);
                        return equal(testSum, this.value) && (x.value = 0), ret.push(x), ret;
                    };
                    var PREFIXES = {
                        NONE: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            }
                        },
                        SHORT: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            da: {
                                name: "da",
                                value: 10,
                                scientific: !1
                            },
                            h: {
                                name: "h",
                                value: 100,
                                scientific: !1
                            },
                            k: {
                                name: "k",
                                value: 1e3,
                                scientific: !0
                            },
                            M: {
                                name: "M",
                                value: 1e6,
                                scientific: !0
                            },
                            G: {
                                name: "G",
                                value: 1e9,
                                scientific: !0
                            },
                            T: {
                                name: "T",
                                value: 1e12,
                                scientific: !0
                            },
                            P: {
                                name: "P",
                                value: 1e15,
                                scientific: !0
                            },
                            E: {
                                name: "E",
                                value: 1e18,
                                scientific: !0
                            },
                            Z: {
                                name: "Z",
                                value: 1e21,
                                scientific: !0
                            },
                            Y: {
                                name: "Y",
                                value: 1e24,
                                scientific: !0
                            },
                            d: {
                                name: "d",
                                value: .1,
                                scientific: !1
                            },
                            c: {
                                name: "c",
                                value: .01,
                                scientific: !1
                            },
                            m: {
                                name: "m",
                                value: .001,
                                scientific: !0
                            },
                            u: {
                                name: "u",
                                value: 1e-6,
                                scientific: !0
                            },
                            n: {
                                name: "n",
                                value: 1e-9,
                                scientific: !0
                            },
                            p: {
                                name: "p",
                                value: 1e-12,
                                scientific: !0
                            },
                            f: {
                                name: "f",
                                value: 1e-15,
                                scientific: !0
                            },
                            a: {
                                name: "a",
                                value: 1e-18,
                                scientific: !0
                            },
                            z: {
                                name: "z",
                                value: 1e-21,
                                scientific: !0
                            },
                            y: {
                                name: "y",
                                value: 1e-24,
                                scientific: !0
                            }
                        },
                        LONG: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            deca: {
                                name: "deca",
                                value: 10,
                                scientific: !1
                            },
                            hecto: {
                                name: "hecto",
                                value: 100,
                                scientific: !1
                            },
                            kilo: {
                                name: "kilo",
                                value: 1e3,
                                scientific: !0
                            },
                            mega: {
                                name: "mega",
                                value: 1e6,
                                scientific: !0
                            },
                            giga: {
                                name: "giga",
                                value: 1e9,
                                scientific: !0
                            },
                            tera: {
                                name: "tera",
                                value: 1e12,
                                scientific: !0
                            },
                            peta: {
                                name: "peta",
                                value: 1e15,
                                scientific: !0
                            },
                            exa: {
                                name: "exa",
                                value: 1e18,
                                scientific: !0
                            },
                            zetta: {
                                name: "zetta",
                                value: 1e21,
                                scientific: !0
                            },
                            yotta: {
                                name: "yotta",
                                value: 1e24,
                                scientific: !0
                            },
                            deci: {
                                name: "deci",
                                value: .1,
                                scientific: !1
                            },
                            centi: {
                                name: "centi",
                                value: .01,
                                scientific: !1
                            },
                            milli: {
                                name: "milli",
                                value: .001,
                                scientific: !0
                            },
                            micro: {
                                name: "micro",
                                value: 1e-6,
                                scientific: !0
                            },
                            nano: {
                                name: "nano",
                                value: 1e-9,
                                scientific: !0
                            },
                            pico: {
                                name: "pico",
                                value: 1e-12,
                                scientific: !0
                            },
                            femto: {
                                name: "femto",
                                value: 1e-15,
                                scientific: !0
                            },
                            atto: {
                                name: "atto",
                                value: 1e-18,
                                scientific: !0
                            },
                            zepto: {
                                name: "zepto",
                                value: 1e-21,
                                scientific: !0
                            },
                            yocto: {
                                name: "yocto",
                                value: 1e-24,
                                scientific: !0
                            }
                        },
                        SQUARED: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            da: {
                                name: "da",
                                value: 100,
                                scientific: !1
                            },
                            h: {
                                name: "h",
                                value: 1e4,
                                scientific: !1
                            },
                            k: {
                                name: "k",
                                value: 1e6,
                                scientific: !0
                            },
                            M: {
                                name: "M",
                                value: 1e12,
                                scientific: !0
                            },
                            G: {
                                name: "G",
                                value: 1e18,
                                scientific: !0
                            },
                            T: {
                                name: "T",
                                value: 1e24,
                                scientific: !0
                            },
                            P: {
                                name: "P",
                                value: 1e30,
                                scientific: !0
                            },
                            E: {
                                name: "E",
                                value: 1e36,
                                scientific: !0
                            },
                            Z: {
                                name: "Z",
                                value: 1e42,
                                scientific: !0
                            },
                            Y: {
                                name: "Y",
                                value: 1e48,
                                scientific: !0
                            },
                            d: {
                                name: "d",
                                value: .01,
                                scientific: !1
                            },
                            c: {
                                name: "c",
                                value: 1e-4,
                                scientific: !1
                            },
                            m: {
                                name: "m",
                                value: 1e-6,
                                scientific: !0
                            },
                            u: {
                                name: "u",
                                value: 1e-12,
                                scientific: !0
                            },
                            n: {
                                name: "n",
                                value: 1e-18,
                                scientific: !0
                            },
                            p: {
                                name: "p",
                                value: 1e-24,
                                scientific: !0
                            },
                            f: {
                                name: "f",
                                value: 1e-30,
                                scientific: !0
                            },
                            a: {
                                name: "a",
                                value: 1e-36,
                                scientific: !0
                            },
                            z: {
                                name: "z",
                                value: 1e-42,
                                scientific: !0
                            },
                            y: {
                                name: "y",
                                value: 1e-48,
                                scientific: !0
                            }
                        },
                        CUBIC: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            da: {
                                name: "da",
                                value: 1e3,
                                scientific: !1
                            },
                            h: {
                                name: "h",
                                value: 1e6,
                                scientific: !1
                            },
                            k: {
                                name: "k",
                                value: 1e9,
                                scientific: !0
                            },
                            M: {
                                name: "M",
                                value: 1e18,
                                scientific: !0
                            },
                            G: {
                                name: "G",
                                value: 1e27,
                                scientific: !0
                            },
                            T: {
                                name: "T",
                                value: 1e36,
                                scientific: !0
                            },
                            P: {
                                name: "P",
                                value: 1e45,
                                scientific: !0
                            },
                            E: {
                                name: "E",
                                value: 1e54,
                                scientific: !0
                            },
                            Z: {
                                name: "Z",
                                value: 1e63,
                                scientific: !0
                            },
                            Y: {
                                name: "Y",
                                value: 1e72,
                                scientific: !0
                            },
                            d: {
                                name: "d",
                                value: .001,
                                scientific: !1
                            },
                            c: {
                                name: "c",
                                value: 1e-6,
                                scientific: !1
                            },
                            m: {
                                name: "m",
                                value: 1e-9,
                                scientific: !0
                            },
                            u: {
                                name: "u",
                                value: 1e-18,
                                scientific: !0
                            },
                            n: {
                                name: "n",
                                value: 1e-27,
                                scientific: !0
                            },
                            p: {
                                name: "p",
                                value: 1e-36,
                                scientific: !0
                            },
                            f: {
                                name: "f",
                                value: 1e-45,
                                scientific: !0
                            },
                            a: {
                                name: "a",
                                value: 1e-54,
                                scientific: !0
                            },
                            z: {
                                name: "z",
                                value: 1e-63,
                                scientific: !0
                            },
                            y: {
                                name: "y",
                                value: 1e-72,
                                scientific: !0
                            }
                        },
                        BINARY_SHORT_SI: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            k: {
                                name: "k",
                                value: 1e3,
                                scientific: !0
                            },
                            M: {
                                name: "M",
                                value: 1e6,
                                scientific: !0
                            },
                            G: {
                                name: "G",
                                value: 1e9,
                                scientific: !0
                            },
                            T: {
                                name: "T",
                                value: 1e12,
                                scientific: !0
                            },
                            P: {
                                name: "P",
                                value: 1e15,
                                scientific: !0
                            },
                            E: {
                                name: "E",
                                value: 1e18,
                                scientific: !0
                            },
                            Z: {
                                name: "Z",
                                value: 1e21,
                                scientific: !0
                            },
                            Y: {
                                name: "Y",
                                value: 1e24,
                                scientific: !0
                            }
                        },
                        BINARY_SHORT_IEC: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            Ki: {
                                name: "Ki",
                                value: 1024,
                                scientific: !0
                            },
                            Mi: {
                                name: "Mi",
                                value: Math.pow(1024, 2),
                                scientific: !0
                            },
                            Gi: {
                                name: "Gi",
                                value: Math.pow(1024, 3),
                                scientific: !0
                            },
                            Ti: {
                                name: "Ti",
                                value: Math.pow(1024, 4),
                                scientific: !0
                            },
                            Pi: {
                                name: "Pi",
                                value: Math.pow(1024, 5),
                                scientific: !0
                            },
                            Ei: {
                                name: "Ei",
                                value: Math.pow(1024, 6),
                                scientific: !0
                            },
                            Zi: {
                                name: "Zi",
                                value: Math.pow(1024, 7),
                                scientific: !0
                            },
                            Yi: {
                                name: "Yi",
                                value: Math.pow(1024, 8),
                                scientific: !0
                            }
                        },
                        BINARY_LONG_SI: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            kilo: {
                                name: "kilo",
                                value: 1e3,
                                scientific: !0
                            },
                            mega: {
                                name: "mega",
                                value: 1e6,
                                scientific: !0
                            },
                            giga: {
                                name: "giga",
                                value: 1e9,
                                scientific: !0
                            },
                            tera: {
                                name: "tera",
                                value: 1e12,
                                scientific: !0
                            },
                            peta: {
                                name: "peta",
                                value: 1e15,
                                scientific: !0
                            },
                            exa: {
                                name: "exa",
                                value: 1e18,
                                scientific: !0
                            },
                            zetta: {
                                name: "zetta",
                                value: 1e21,
                                scientific: !0
                            },
                            yotta: {
                                name: "yotta",
                                value: 1e24,
                                scientific: !0
                            }
                        },
                        BINARY_LONG_IEC: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            kibi: {
                                name: "kibi",
                                value: 1024,
                                scientific: !0
                            },
                            mebi: {
                                name: "mebi",
                                value: Math.pow(1024, 2),
                                scientific: !0
                            },
                            gibi: {
                                name: "gibi",
                                value: Math.pow(1024, 3),
                                scientific: !0
                            },
                            tebi: {
                                name: "tebi",
                                value: Math.pow(1024, 4),
                                scientific: !0
                            },
                            pebi: {
                                name: "pebi",
                                value: Math.pow(1024, 5),
                                scientific: !0
                            },
                            exi: {
                                name: "exi",
                                value: Math.pow(1024, 6),
                                scientific: !0
                            },
                            zebi: {
                                name: "zebi",
                                value: Math.pow(1024, 7),
                                scientific: !0
                            },
                            yobi: {
                                name: "yobi",
                                value: Math.pow(1024, 8),
                                scientific: !0
                            }
                        },
                        BTU: {
                            "": {
                                name: "",
                                value: 1,
                                scientific: !0
                            },
                            MM: {
                                name: "MM",
                                value: 1e6,
                                scientific: !0
                            }
                        }
                    };
                    PREFIXES.SHORTLONG = _extends({}, PREFIXES.SHORT, PREFIXES.LONG), PREFIXES.BINARY_SHORT = _extends({}, PREFIXES.BINARY_SHORT_SI, PREFIXES.BINARY_SHORT_IEC), PREFIXES.BINARY_LONG = _extends({}, PREFIXES.BINARY_LONG_SI, PREFIXES.BINARY_LONG_IEC);
                    var BASE_DIMENSIONS = [
                        "MASS",
                        "LENGTH",
                        "TIME",
                        "CURRENT",
                        "TEMPERATURE",
                        "LUMINOUS_INTENSITY",
                        "AMOUNT_OF_SUBSTANCE",
                        "ANGLE",
                        "BIT"
                    ], BASE_UNITS = {
                        NONE: {
                            dimensions: [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        MASS: {
                            dimensions: [
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        LENGTH: {
                            dimensions: [
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        TIME: {
                            dimensions: [
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        CURRENT: {
                            dimensions: [
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        TEMPERATURE: {
                            dimensions: [
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        LUMINOUS_INTENSITY: {
                            dimensions: [
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0,
                                0
                            ]
                        },
                        AMOUNT_OF_SUBSTANCE: {
                            dimensions: [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0,
                                0
                            ]
                        },
                        FORCE: {
                            dimensions: [
                                1,
                                1,
                                -2,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        SURFACE: {
                            dimensions: [
                                0,
                                2,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        VOLUME: {
                            dimensions: [
                                0,
                                3,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ENERGY: {
                            dimensions: [
                                1,
                                2,
                                -2,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        POWER: {
                            dimensions: [
                                1,
                                2,
                                -3,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        PRESSURE: {
                            dimensions: [
                                1,
                                -1,
                                -2,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ELECTRIC_CHARGE: {
                            dimensions: [
                                0,
                                0,
                                1,
                                1,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ELECTRIC_CAPACITANCE: {
                            dimensions: [
                                -1,
                                -2,
                                4,
                                2,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ELECTRIC_POTENTIAL: {
                            dimensions: [
                                1,
                                2,
                                -3,
                                -1,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ELECTRIC_RESISTANCE: {
                            dimensions: [
                                1,
                                2,
                                -3,
                                -2,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ELECTRIC_INDUCTANCE: {
                            dimensions: [
                                1,
                                2,
                                -2,
                                -2,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ELECTRIC_CONDUCTANCE: {
                            dimensions: [
                                -1,
                                -2,
                                3,
                                2,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        MAGNETIC_FLUX: {
                            dimensions: [
                                1,
                                2,
                                -2,
                                -1,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        MAGNETIC_FLUX_DENSITY: {
                            dimensions: [
                                1,
                                0,
                                -2,
                                -1,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        FREQUENCY: {
                            dimensions: [
                                0,
                                0,
                                -1,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0
                            ]
                        },
                        ANGLE: {
                            dimensions: [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1,
                                0
                            ]
                        },
                        BIT: {
                            dimensions: [
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                0,
                                1
                            ]
                        }
                    };
                    for(var key in BASE_UNITS)object_hasOwnProperty(BASE_UNITS, key) && (BASE_UNITS[key].key = key);
                    var UNIT_NONE = {
                        name: "",
                        base: {},
                        value: 1,
                        offset: 0,
                        dimensions: BASE_DIMENSIONS.map((x)=>0)
                    }, UNITS = {
                        meter: {
                            name: "meter",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        inch: {
                            name: "inch",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .0254,
                            offset: 0
                        },
                        foot: {
                            name: "foot",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .3048,
                            offset: 0
                        },
                        yard: {
                            name: "yard",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .9144,
                            offset: 0
                        },
                        mile: {
                            name: "mile",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 1609.344,
                            offset: 0
                        },
                        link: {
                            name: "link",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .201168,
                            offset: 0
                        },
                        rod: {
                            name: "rod",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 5.0292,
                            offset: 0
                        },
                        chain: {
                            name: "chain",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 20.1168,
                            offset: 0
                        },
                        angstrom: {
                            name: "angstrom",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 1e-10,
                            offset: 0
                        },
                        m: {
                            name: "m",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        in: {
                            name: "in",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .0254,
                            offset: 0
                        },
                        ft: {
                            name: "ft",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .3048,
                            offset: 0
                        },
                        yd: {
                            name: "yd",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .9144,
                            offset: 0
                        },
                        mi: {
                            name: "mi",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 1609.344,
                            offset: 0
                        },
                        li: {
                            name: "li",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: .201168,
                            offset: 0
                        },
                        rd: {
                            name: "rd",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 5.02921,
                            offset: 0
                        },
                        ch: {
                            name: "ch",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 20.1168,
                            offset: 0
                        },
                        mil: {
                            name: "mil",
                            base: BASE_UNITS.LENGTH,
                            prefixes: PREFIXES.NONE,
                            value: 254e-7,
                            offset: 0
                        },
                        m2: {
                            name: "m2",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.SQUARED,
                            value: 1,
                            offset: 0
                        },
                        sqin: {
                            name: "sqin",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: 64516e-8,
                            offset: 0
                        },
                        sqft: {
                            name: "sqft",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: .09290304,
                            offset: 0
                        },
                        sqyd: {
                            name: "sqyd",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: .83612736,
                            offset: 0
                        },
                        sqmi: {
                            name: "sqmi",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: 2589988.110336,
                            offset: 0
                        },
                        sqrd: {
                            name: "sqrd",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: 25.29295,
                            offset: 0
                        },
                        sqch: {
                            name: "sqch",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: 404.6873,
                            offset: 0
                        },
                        sqmil: {
                            name: "sqmil",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: 6.4516e-10,
                            offset: 0
                        },
                        acre: {
                            name: "acre",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: 4046.86,
                            offset: 0
                        },
                        hectare: {
                            name: "hectare",
                            base: BASE_UNITS.SURFACE,
                            prefixes: PREFIXES.NONE,
                            value: 1e4,
                            offset: 0
                        },
                        m3: {
                            name: "m3",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.CUBIC,
                            value: 1,
                            offset: 0
                        },
                        L: {
                            name: "L",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.SHORT,
                            value: .001,
                            offset: 0
                        },
                        l: {
                            name: "l",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.SHORT,
                            value: .001,
                            offset: 0
                        },
                        litre: {
                            name: "litre",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.LONG,
                            value: .001,
                            offset: 0
                        },
                        cuin: {
                            name: "cuin",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 16387064e-12,
                            offset: 0
                        },
                        cuft: {
                            name: "cuft",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .028316846592,
                            offset: 0
                        },
                        cuyd: {
                            name: "cuyd",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .764554857984,
                            offset: 0
                        },
                        teaspoon: {
                            name: "teaspoon",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 5e-6,
                            offset: 0
                        },
                        tablespoon: {
                            name: "tablespoon",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 15e-6,
                            offset: 0
                        },
                        drop: {
                            name: "drop",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 5e-8,
                            offset: 0
                        },
                        gtt: {
                            name: "gtt",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 5e-8,
                            offset: 0
                        },
                        minim: {
                            name: "minim",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 6.161152e-8,
                            offset: 0
                        },
                        fluiddram: {
                            name: "fluiddram",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 36966911e-13,
                            offset: 0
                        },
                        fluidounce: {
                            name: "fluidounce",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 2957353e-11,
                            offset: 0
                        },
                        gill: {
                            name: "gill",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0001182941,
                            offset: 0
                        },
                        cc: {
                            name: "cc",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 1e-6,
                            offset: 0
                        },
                        cup: {
                            name: "cup",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0002365882,
                            offset: 0
                        },
                        pint: {
                            name: "pint",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0004731765,
                            offset: 0
                        },
                        quart: {
                            name: "quart",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0009463529,
                            offset: 0
                        },
                        gallon: {
                            name: "gallon",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .003785412,
                            offset: 0
                        },
                        beerbarrel: {
                            name: "beerbarrel",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .1173478,
                            offset: 0
                        },
                        oilbarrel: {
                            name: "oilbarrel",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .1589873,
                            offset: 0
                        },
                        hogshead: {
                            name: "hogshead",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .238481,
                            offset: 0
                        },
                        fldr: {
                            name: "fldr",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 36966911e-13,
                            offset: 0
                        },
                        floz: {
                            name: "floz",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: 2957353e-11,
                            offset: 0
                        },
                        gi: {
                            name: "gi",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0001182941,
                            offset: 0
                        },
                        cp: {
                            name: "cp",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0002365882,
                            offset: 0
                        },
                        pt: {
                            name: "pt",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0004731765,
                            offset: 0
                        },
                        qt: {
                            name: "qt",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .0009463529,
                            offset: 0
                        },
                        gal: {
                            name: "gal",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .003785412,
                            offset: 0
                        },
                        bbl: {
                            name: "bbl",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .1173478,
                            offset: 0
                        },
                        obl: {
                            name: "obl",
                            base: BASE_UNITS.VOLUME,
                            prefixes: PREFIXES.NONE,
                            value: .1589873,
                            offset: 0
                        },
                        g: {
                            name: "g",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.SHORT,
                            value: .001,
                            offset: 0
                        },
                        gram: {
                            name: "gram",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.LONG,
                            value: .001,
                            offset: 0
                        },
                        ton: {
                            name: "ton",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.SHORT,
                            value: 907.18474,
                            offset: 0
                        },
                        t: {
                            name: "t",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.SHORT,
                            value: 1e3,
                            offset: 0
                        },
                        tonne: {
                            name: "tonne",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.LONG,
                            value: 1e3,
                            offset: 0
                        },
                        grain: {
                            name: "grain",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: 6479891e-11,
                            offset: 0
                        },
                        dram: {
                            name: "dram",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: .0017718451953125,
                            offset: 0
                        },
                        ounce: {
                            name: "ounce",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: .028349523125,
                            offset: 0
                        },
                        poundmass: {
                            name: "poundmass",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: .45359237,
                            offset: 0
                        },
                        hundredweight: {
                            name: "hundredweight",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: 45.359237,
                            offset: 0
                        },
                        stick: {
                            name: "stick",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: .115,
                            offset: 0
                        },
                        stone: {
                            name: "stone",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: 6.35029318,
                            offset: 0
                        },
                        gr: {
                            name: "gr",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: 6479891e-11,
                            offset: 0
                        },
                        dr: {
                            name: "dr",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: .0017718451953125,
                            offset: 0
                        },
                        oz: {
                            name: "oz",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: .028349523125,
                            offset: 0
                        },
                        lbm: {
                            name: "lbm",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: .45359237,
                            offset: 0
                        },
                        cwt: {
                            name: "cwt",
                            base: BASE_UNITS.MASS,
                            prefixes: PREFIXES.NONE,
                            value: 45.359237,
                            offset: 0
                        },
                        s: {
                            name: "s",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        min: {
                            name: "min",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 60,
                            offset: 0
                        },
                        h: {
                            name: "h",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 3600,
                            offset: 0
                        },
                        second: {
                            name: "second",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        sec: {
                            name: "sec",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        minute: {
                            name: "minute",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 60,
                            offset: 0
                        },
                        hour: {
                            name: "hour",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 3600,
                            offset: 0
                        },
                        day: {
                            name: "day",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 86400,
                            offset: 0
                        },
                        week: {
                            name: "week",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 604800,
                            offset: 0
                        },
                        month: {
                            name: "month",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 2629800,
                            offset: 0
                        },
                        year: {
                            name: "year",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 31557600,
                            offset: 0
                        },
                        decade: {
                            name: "decade",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 315576e3,
                            offset: 0
                        },
                        century: {
                            name: "century",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 315576e4,
                            offset: 0
                        },
                        millennium: {
                            name: "millennium",
                            base: BASE_UNITS.TIME,
                            prefixes: PREFIXES.NONE,
                            value: 315576e5,
                            offset: 0
                        },
                        hertz: {
                            name: "Hertz",
                            base: BASE_UNITS.FREQUENCY,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0,
                            reciprocal: !0
                        },
                        Hz: {
                            name: "Hz",
                            base: BASE_UNITS.FREQUENCY,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0,
                            reciprocal: !0
                        },
                        rad: {
                            name: "rad",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        radian: {
                            name: "radian",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        deg: {
                            name: "deg",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.SHORT,
                            value: null,
                            offset: 0
                        },
                        degree: {
                            name: "degree",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.LONG,
                            value: null,
                            offset: 0
                        },
                        grad: {
                            name: "grad",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.SHORT,
                            value: null,
                            offset: 0
                        },
                        gradian: {
                            name: "gradian",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.LONG,
                            value: null,
                            offset: 0
                        },
                        cycle: {
                            name: "cycle",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.NONE,
                            value: null,
                            offset: 0
                        },
                        arcsec: {
                            name: "arcsec",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.NONE,
                            value: null,
                            offset: 0
                        },
                        arcmin: {
                            name: "arcmin",
                            base: BASE_UNITS.ANGLE,
                            prefixes: PREFIXES.NONE,
                            value: null,
                            offset: 0
                        },
                        A: {
                            name: "A",
                            base: BASE_UNITS.CURRENT,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        ampere: {
                            name: "ampere",
                            base: BASE_UNITS.CURRENT,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        K: {
                            name: "K",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1,
                            offset: 0
                        },
                        degC: {
                            name: "degC",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1,
                            offset: 273.15
                        },
                        degF: {
                            name: "degF",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1 / 1.8,
                            offset: 459.67
                        },
                        degR: {
                            name: "degR",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1 / 1.8,
                            offset: 0
                        },
                        kelvin: {
                            name: "kelvin",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1,
                            offset: 0
                        },
                        celsius: {
                            name: "celsius",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1,
                            offset: 273.15
                        },
                        fahrenheit: {
                            name: "fahrenheit",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1 / 1.8,
                            offset: 459.67
                        },
                        rankine: {
                            name: "rankine",
                            base: BASE_UNITS.TEMPERATURE,
                            prefixes: PREFIXES.NONE,
                            value: 1 / 1.8,
                            offset: 0
                        },
                        mol: {
                            name: "mol",
                            base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        mole: {
                            name: "mole",
                            base: BASE_UNITS.AMOUNT_OF_SUBSTANCE,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        cd: {
                            name: "cd",
                            base: BASE_UNITS.LUMINOUS_INTENSITY,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        candela: {
                            name: "candela",
                            base: BASE_UNITS.LUMINOUS_INTENSITY,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        N: {
                            name: "N",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        newton: {
                            name: "newton",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        dyn: {
                            name: "dyn",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.SHORT,
                            value: 1e-5,
                            offset: 0
                        },
                        dyne: {
                            name: "dyne",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.LONG,
                            value: 1e-5,
                            offset: 0
                        },
                        lbf: {
                            name: "lbf",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.NONE,
                            value: 4.4482216152605,
                            offset: 0
                        },
                        poundforce: {
                            name: "poundforce",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.NONE,
                            value: 4.4482216152605,
                            offset: 0
                        },
                        kip: {
                            name: "kip",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.LONG,
                            value: 4448.2216,
                            offset: 0
                        },
                        kilogramforce: {
                            name: "kilogramforce",
                            base: BASE_UNITS.FORCE,
                            prefixes: PREFIXES.NONE,
                            value: 9.80665,
                            offset: 0
                        },
                        J: {
                            name: "J",
                            base: BASE_UNITS.ENERGY,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        joule: {
                            name: "joule",
                            base: BASE_UNITS.ENERGY,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        erg: {
                            name: "erg",
                            base: BASE_UNITS.ENERGY,
                            prefixes: PREFIXES.NONE,
                            value: 1e-7,
                            offset: 0
                        },
                        Wh: {
                            name: "Wh",
                            base: BASE_UNITS.ENERGY,
                            prefixes: PREFIXES.SHORT,
                            value: 3600,
                            offset: 0
                        },
                        BTU: {
                            name: "BTU",
                            base: BASE_UNITS.ENERGY,
                            prefixes: PREFIXES.BTU,
                            value: 1055.05585262,
                            offset: 0
                        },
                        eV: {
                            name: "eV",
                            base: BASE_UNITS.ENERGY,
                            prefixes: PREFIXES.SHORT,
                            value: 1602176565e-28,
                            offset: 0
                        },
                        electronvolt: {
                            name: "electronvolt",
                            base: BASE_UNITS.ENERGY,
                            prefixes: PREFIXES.LONG,
                            value: 1602176565e-28,
                            offset: 0
                        },
                        W: {
                            name: "W",
                            base: BASE_UNITS.POWER,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        watt: {
                            name: "watt",
                            base: BASE_UNITS.POWER,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        hp: {
                            name: "hp",
                            base: BASE_UNITS.POWER,
                            prefixes: PREFIXES.NONE,
                            value: 745.6998715386,
                            offset: 0
                        },
                        VAR: {
                            name: "VAR",
                            base: BASE_UNITS.POWER,
                            prefixes: PREFIXES.SHORT,
                            value: Complex.I,
                            offset: 0
                        },
                        VA: {
                            name: "VA",
                            base: BASE_UNITS.POWER,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        Pa: {
                            name: "Pa",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        psi: {
                            name: "psi",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.NONE,
                            value: 6894.75729276459,
                            offset: 0
                        },
                        atm: {
                            name: "atm",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.NONE,
                            value: 101325,
                            offset: 0
                        },
                        bar: {
                            name: "bar",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.SHORTLONG,
                            value: 1e5,
                            offset: 0
                        },
                        torr: {
                            name: "torr",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.NONE,
                            value: 133.322,
                            offset: 0
                        },
                        mmHg: {
                            name: "mmHg",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.NONE,
                            value: 133.322,
                            offset: 0
                        },
                        mmH2O: {
                            name: "mmH2O",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.NONE,
                            value: 9.80665,
                            offset: 0
                        },
                        cmH2O: {
                            name: "cmH2O",
                            base: BASE_UNITS.PRESSURE,
                            prefixes: PREFIXES.NONE,
                            value: 98.0665,
                            offset: 0
                        },
                        coulomb: {
                            name: "coulomb",
                            base: BASE_UNITS.ELECTRIC_CHARGE,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        C: {
                            name: "C",
                            base: BASE_UNITS.ELECTRIC_CHARGE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        farad: {
                            name: "farad",
                            base: BASE_UNITS.ELECTRIC_CAPACITANCE,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        F: {
                            name: "F",
                            base: BASE_UNITS.ELECTRIC_CAPACITANCE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        volt: {
                            name: "volt",
                            base: BASE_UNITS.ELECTRIC_POTENTIAL,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        V: {
                            name: "V",
                            base: BASE_UNITS.ELECTRIC_POTENTIAL,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        ohm: {
                            name: "ohm",
                            base: BASE_UNITS.ELECTRIC_RESISTANCE,
                            prefixes: PREFIXES.SHORTLONG,
                            value: 1,
                            offset: 0
                        },
                        henry: {
                            name: "henry",
                            base: BASE_UNITS.ELECTRIC_INDUCTANCE,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        H: {
                            name: "H",
                            base: BASE_UNITS.ELECTRIC_INDUCTANCE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        siemens: {
                            name: "siemens",
                            base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        S: {
                            name: "S",
                            base: BASE_UNITS.ELECTRIC_CONDUCTANCE,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        weber: {
                            name: "weber",
                            base: BASE_UNITS.MAGNETIC_FLUX,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        Wb: {
                            name: "Wb",
                            base: BASE_UNITS.MAGNETIC_FLUX,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        tesla: {
                            name: "tesla",
                            base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
                            prefixes: PREFIXES.LONG,
                            value: 1,
                            offset: 0
                        },
                        T: {
                            name: "T",
                            base: BASE_UNITS.MAGNETIC_FLUX_DENSITY,
                            prefixes: PREFIXES.SHORT,
                            value: 1,
                            offset: 0
                        },
                        b: {
                            name: "b",
                            base: BASE_UNITS.BIT,
                            prefixes: PREFIXES.BINARY_SHORT,
                            value: 1,
                            offset: 0
                        },
                        bits: {
                            name: "bits",
                            base: BASE_UNITS.BIT,
                            prefixes: PREFIXES.BINARY_LONG,
                            value: 1,
                            offset: 0
                        },
                        B: {
                            name: "B",
                            base: BASE_UNITS.BIT,
                            prefixes: PREFIXES.BINARY_SHORT,
                            value: 8,
                            offset: 0
                        },
                        bytes: {
                            name: "bytes",
                            base: BASE_UNITS.BIT,
                            prefixes: PREFIXES.BINARY_LONG,
                            value: 8,
                            offset: 0
                        }
                    }, ALIASES = {
                        meters: "meter",
                        inches: "inch",
                        feet: "foot",
                        yards: "yard",
                        miles: "mile",
                        links: "link",
                        rods: "rod",
                        chains: "chain",
                        angstroms: "angstrom",
                        lt: "l",
                        litres: "litre",
                        liter: "litre",
                        liters: "litre",
                        teaspoons: "teaspoon",
                        tablespoons: "tablespoon",
                        minims: "minim",
                        fluiddrams: "fluiddram",
                        fluidounces: "fluidounce",
                        gills: "gill",
                        cups: "cup",
                        pints: "pint",
                        quarts: "quart",
                        gallons: "gallon",
                        beerbarrels: "beerbarrel",
                        oilbarrels: "oilbarrel",
                        hogsheads: "hogshead",
                        gtts: "gtt",
                        grams: "gram",
                        tons: "ton",
                        tonnes: "tonne",
                        grains: "grain",
                        drams: "dram",
                        ounces: "ounce",
                        poundmasses: "poundmass",
                        hundredweights: "hundredweight",
                        sticks: "stick",
                        lb: "lbm",
                        lbs: "lbm",
                        kips: "kip",
                        kgf: "kilogramforce",
                        acres: "acre",
                        hectares: "hectare",
                        sqfeet: "sqft",
                        sqyard: "sqyd",
                        sqmile: "sqmi",
                        sqmiles: "sqmi",
                        mmhg: "mmHg",
                        mmh2o: "mmH2O",
                        cmh2o: "cmH2O",
                        seconds: "second",
                        secs: "second",
                        minutes: "minute",
                        mins: "minute",
                        hours: "hour",
                        hr: "hour",
                        hrs: "hour",
                        days: "day",
                        weeks: "week",
                        months: "month",
                        years: "year",
                        decades: "decade",
                        centuries: "century",
                        millennia: "millennium",
                        hertz: "hertz",
                        radians: "radian",
                        degrees: "degree",
                        gradians: "gradian",
                        cycles: "cycle",
                        arcsecond: "arcsec",
                        arcseconds: "arcsec",
                        arcminute: "arcmin",
                        arcminutes: "arcmin",
                        BTUs: "BTU",
                        watts: "watt",
                        joules: "joule",
                        amperes: "ampere",
                        coulombs: "coulomb",
                        volts: "volt",
                        ohms: "ohm",
                        farads: "farad",
                        webers: "weber",
                        teslas: "tesla",
                        electronvolts: "electronvolt",
                        moles: "mole",
                        bit: "bits",
                        byte: "bytes"
                    };
                    function calculateAngleValues(config) {
                        if ("BigNumber" === config.number) {
                            var pi = createBigNumberPi(_BigNumber);
                            UNITS.rad.value = new _BigNumber(1), UNITS.deg.value = pi.div(180), UNITS.grad.value = pi.div(200), UNITS.cycle.value = pi.times(2), UNITS.arcsec.value = pi.div(648e3), UNITS.arcmin.value = pi.div(10800);
                        } else UNITS.rad.value = 1, UNITS.deg.value = Math.PI / 180, UNITS.grad.value = Math.PI / 200, UNITS.cycle.value = 2 * Math.PI, UNITS.arcsec.value = Math.PI / 648e3, UNITS.arcmin.value = Math.PI / 10800;
                        UNITS.radian.value = UNITS.rad.value, UNITS.degree.value = UNITS.deg.value, UNITS.gradian.value = UNITS.grad.value;
                    }
                    calculateAngleValues(config), on && on("config", function(curr, prev) {
                        curr.number !== prev.number && calculateAngleValues(curr);
                    });
                    var UNIT_SYSTEMS = {
                        si: {
                            NONE: {
                                unit: UNIT_NONE,
                                prefix: PREFIXES.NONE[""]
                            },
                            LENGTH: {
                                unit: UNITS.m,
                                prefix: PREFIXES.SHORT[""]
                            },
                            MASS: {
                                unit: UNITS.g,
                                prefix: PREFIXES.SHORT.k
                            },
                            TIME: {
                                unit: UNITS.s,
                                prefix: PREFIXES.SHORT[""]
                            },
                            CURRENT: {
                                unit: UNITS.A,
                                prefix: PREFIXES.SHORT[""]
                            },
                            TEMPERATURE: {
                                unit: UNITS.K,
                                prefix: PREFIXES.SHORT[""]
                            },
                            LUMINOUS_INTENSITY: {
                                unit: UNITS.cd,
                                prefix: PREFIXES.SHORT[""]
                            },
                            AMOUNT_OF_SUBSTANCE: {
                                unit: UNITS.mol,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ANGLE: {
                                unit: UNITS.rad,
                                prefix: PREFIXES.SHORT[""]
                            },
                            BIT: {
                                unit: UNITS.bits,
                                prefix: PREFIXES.SHORT[""]
                            },
                            FORCE: {
                                unit: UNITS.N,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ENERGY: {
                                unit: UNITS.J,
                                prefix: PREFIXES.SHORT[""]
                            },
                            POWER: {
                                unit: UNITS.W,
                                prefix: PREFIXES.SHORT[""]
                            },
                            PRESSURE: {
                                unit: UNITS.Pa,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ELECTRIC_CHARGE: {
                                unit: UNITS.C,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ELECTRIC_CAPACITANCE: {
                                unit: UNITS.F,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ELECTRIC_POTENTIAL: {
                                unit: UNITS.V,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ELECTRIC_RESISTANCE: {
                                unit: UNITS.ohm,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ELECTRIC_INDUCTANCE: {
                                unit: UNITS.H,
                                prefix: PREFIXES.SHORT[""]
                            },
                            ELECTRIC_CONDUCTANCE: {
                                unit: UNITS.S,
                                prefix: PREFIXES.SHORT[""]
                            },
                            MAGNETIC_FLUX: {
                                unit: UNITS.Wb,
                                prefix: PREFIXES.SHORT[""]
                            },
                            MAGNETIC_FLUX_DENSITY: {
                                unit: UNITS.T,
                                prefix: PREFIXES.SHORT[""]
                            },
                            FREQUENCY: {
                                unit: UNITS.Hz,
                                prefix: PREFIXES.SHORT[""]
                            }
                        }
                    };
                    UNIT_SYSTEMS.cgs = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si)), UNIT_SYSTEMS.cgs.LENGTH = {
                        unit: UNITS.m,
                        prefix: PREFIXES.SHORT.c
                    }, UNIT_SYSTEMS.cgs.MASS = {
                        unit: UNITS.g,
                        prefix: PREFIXES.SHORT[""]
                    }, UNIT_SYSTEMS.cgs.FORCE = {
                        unit: UNITS.dyn,
                        prefix: PREFIXES.SHORT[""]
                    }, UNIT_SYSTEMS.cgs.ENERGY = {
                        unit: UNITS.erg,
                        prefix: PREFIXES.NONE[""]
                    }, UNIT_SYSTEMS.us = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si)), UNIT_SYSTEMS.us.LENGTH = {
                        unit: UNITS.ft,
                        prefix: PREFIXES.NONE[""]
                    }, UNIT_SYSTEMS.us.MASS = {
                        unit: UNITS.lbm,
                        prefix: PREFIXES.NONE[""]
                    }, UNIT_SYSTEMS.us.TEMPERATURE = {
                        unit: UNITS.degF,
                        prefix: PREFIXES.NONE[""]
                    }, UNIT_SYSTEMS.us.FORCE = {
                        unit: UNITS.lbf,
                        prefix: PREFIXES.NONE[""]
                    }, UNIT_SYSTEMS.us.ENERGY = {
                        unit: UNITS.BTU,
                        prefix: PREFIXES.BTU[""]
                    }, UNIT_SYSTEMS.us.POWER = {
                        unit: UNITS.hp,
                        prefix: PREFIXES.NONE[""]
                    }, UNIT_SYSTEMS.us.PRESSURE = {
                        unit: UNITS.psi,
                        prefix: PREFIXES.NONE[""]
                    }, UNIT_SYSTEMS.auto = JSON.parse(JSON.stringify(UNIT_SYSTEMS.si));
                    var currentUnitSystem = UNIT_SYSTEMS.auto;
                    for(var _key2 in Unit.setUnitSystem = function(name) {
                        if (!object_hasOwnProperty(UNIT_SYSTEMS, name)) throw new Error("Unit system " + name + " does not exist. Choices are: " + Object.keys(UNIT_SYSTEMS).join(", "));
                        currentUnitSystem = UNIT_SYSTEMS[name];
                    }, Unit.getUnitSystem = function() {
                        for(var _key in UNIT_SYSTEMS)if (object_hasOwnProperty(UNIT_SYSTEMS, _key) && UNIT_SYSTEMS[_key] === currentUnitSystem) return _key;
                    }, Unit.typeConverters = {
                        BigNumber: function(x) {
                            return new _BigNumber(x + "");
                        },
                        Fraction: function(x) {
                            return new _Fraction(x);
                        },
                        Complex: function(x) {
                            return x;
                        },
                        number: function(x) {
                            return x;
                        }
                    }, Unit._getNumberConverter = function(type) {
                        if (!Unit.typeConverters[type]) throw new TypeError('Unsupported type "' + type + '"');
                        return Unit.typeConverters[type];
                    }, UNITS)if (object_hasOwnProperty(UNITS, _key2)) {
                        var unit = UNITS[_key2];
                        unit.dimensions = unit.base.dimensions;
                    }
                    for(var _name2 in ALIASES)if (object_hasOwnProperty(ALIASES, _name2)) {
                        var _unit2 = UNITS[ALIASES[_name2]], alias = {};
                        for(var _key3 in _unit2)object_hasOwnProperty(_unit2, _key3) && (alias[_key3] = _unit2[_key3]);
                        alias.name = _name2, UNITS[_name2] = alias;
                    }
                    return Unit.isValidAlpha = function(c) {
                        return /^[a-zA-Z]$/.test(c);
                    }, Unit.createUnit = function(obj, options) {
                        if ("object" != typeof obj) throw new TypeError("createUnit expects first parameter to be of type 'Object'");
                        if (options && options.override) {
                            for(var _key4 in obj)if (object_hasOwnProperty(obj, _key4) && Unit.deleteUnit(_key4), obj[_key4].aliases) for(var i = 0; i < obj[_key4].aliases.length; i++)Unit.deleteUnit(obj[_key4].aliases[i]);
                        }
                        var lastUnit;
                        for(var _key5 in obj)object_hasOwnProperty(obj, _key5) && (lastUnit = Unit.createUnitSingle(_key5, obj[_key5]));
                        return lastUnit;
                    }, Unit.createUnitSingle = function(name, obj, options) {
                        if (null == obj && (obj = {}), "string" != typeof name) throw new TypeError("createUnitSingle expects first parameter to be of type 'string'");
                        if (object_hasOwnProperty(UNITS, name)) throw new Error('Cannot create unit "' + name + '": a unit with that name already exists');
                        !function(name) {
                            for(var i = 0; i < name.length; i++){
                                if (c = name.charAt(i), 0 === i && !Unit.isValidAlpha(c)) throw new Error('Invalid unit name (must begin with alpha character): "' + name + '"');
                                if (i > 0 && !Unit.isValidAlpha(c) && !isDigit(c)) throw new Error('Invalid unit name (only alphanumeric characters are allowed): "' + name + '"');
                            }
                        }(name);
                        var definition, prefixes, baseName, defUnit = null, aliases = [], offset = 0;
                        if (obj && "Unit" === obj.type) defUnit = obj.clone();
                        else if ("string" == typeof obj) "" !== obj && (definition = obj);
                        else {
                            if ("object" != typeof obj) throw new TypeError('Cannot create unit "' + name + '" from "' + obj.toString() + '": expecting "string" or "Unit" or "Object"');
                            definition = obj.definition, prefixes = obj.prefixes, offset = obj.offset, baseName = obj.baseName, obj.aliases && (aliases = obj.aliases.valueOf());
                        }
                        if (aliases) {
                            for(var i = 0; i < aliases.length; i++)if (object_hasOwnProperty(UNITS, aliases[i])) throw new Error('Cannot create alias "' + aliases[i] + '": a unit with that name already exists');
                        }
                        if (definition && "string" == typeof definition && !defUnit) try {
                            defUnit = Unit.parse(definition, {
                                allowNoUnits: !0
                            });
                        } catch (ex) {
                            throw ex.message = 'Could not create unit "' + name + '" from "' + definition + '": ' + ex.message, ex;
                        }
                        else definition && "Unit" === definition.type && (defUnit = definition.clone());
                        aliases = aliases || [], offset = offset || 0, prefixes = prefixes && prefixes.toUpperCase && PREFIXES[prefixes.toUpperCase()] || PREFIXES.NONE;
                        var newUnit = {};
                        if (defUnit) {
                            newUnit = {
                                name,
                                value: defUnit.value,
                                dimensions: defUnit.dimensions.slice(0),
                                prefixes,
                                offset
                            };
                            var anyMatch = !1;
                            for(var _i7 in BASE_UNITS)if (object_hasOwnProperty(BASE_UNITS, _i7)) {
                                for(var match = !0, j = 0; j < BASE_DIMENSIONS.length; j++)if (Math.abs((newUnit.dimensions[j] || 0) - (BASE_UNITS[_i7].dimensions[j] || 0)) > 1e-12) {
                                    match = !1;
                                    break;
                                }
                                if (match) {
                                    anyMatch = !0, newUnit.base = BASE_UNITS[_i7];
                                    break;
                                }
                            }
                            if (!anyMatch) {
                                baseName = baseName || name + "_STUFF";
                                var _newBaseUnit = {
                                    dimensions: defUnit.dimensions.slice(0)
                                };
                                _newBaseUnit.key = baseName, BASE_UNITS[baseName] = _newBaseUnit, currentUnitSystem[baseName] = {
                                    unit: newUnit,
                                    prefix: PREFIXES.NONE[""]
                                }, newUnit.base = BASE_UNITS[baseName];
                            }
                        } else {
                            if (baseName = baseName || name + "_STUFF", BASE_DIMENSIONS.indexOf(baseName) >= 0) throw new Error('Cannot create new base unit "' + name + '": a base unit with that name already exists (and cannot be overridden)');
                            for(var b in BASE_DIMENSIONS.push(baseName), BASE_UNITS)object_hasOwnProperty(BASE_UNITS, b) && (BASE_UNITS[b].dimensions[BASE_DIMENSIONS.length - 1] = 0);
                            for(var newBaseUnit = {
                                dimensions: []
                            }, _i6 = 0; _i6 < BASE_DIMENSIONS.length; _i6++)newBaseUnit.dimensions[_i6] = 0;
                            newBaseUnit.dimensions[BASE_DIMENSIONS.length - 1] = 1, newBaseUnit.key = baseName, BASE_UNITS[baseName] = newBaseUnit, newUnit = {
                                name,
                                value: 1,
                                dimensions: BASE_UNITS[baseName].dimensions.slice(0),
                                prefixes,
                                offset,
                                base: BASE_UNITS[baseName]
                            }, currentUnitSystem[baseName] = {
                                unit: newUnit,
                                prefix: PREFIXES.NONE[""]
                            };
                        }
                        Unit.UNITS[name] = newUnit;
                        for(var _i8 = 0; _i8 < aliases.length; _i8++){
                            var aliasName = aliases[_i8], _alias = {};
                            for(var _key6 in newUnit)object_hasOwnProperty(newUnit, _key6) && (_alias[_key6] = newUnit[_key6]);
                            _alias.name = aliasName, Unit.UNITS[aliasName] = _alias;
                        }
                        return delete _findUnit.cache, new Unit(null, name);
                    }, Unit.deleteUnit = function(name) {
                        delete Unit.UNITS[name];
                    }, Unit.PREFIXES = PREFIXES, Unit.BASE_DIMENSIONS = BASE_DIMENSIONS, Unit.BASE_UNITS = BASE_UNITS, Unit.UNIT_SYSTEMS = UNIT_SYSTEMS, Unit.UNITS = UNITS, Unit;
                }, {
                    isClass: !0
                }), UnitDependencies = {
                    BigNumberDependencies,
                    ComplexDependencies,
                    FractionDependencies,
                    absDependencies,
                    addScalarDependencies,
                    divideScalarDependencies,
                    equalDependencies,
                    fixDependencies,
                    formatDependencies,
                    isNumericDependencies,
                    multiplyScalarDependencies,
                    numberDependencies,
                    powDependencies,
                    roundDependencies,
                    subtractDependencies,
                    createUnitClass
                }, createSymbolNode = factory_factory("SymbolNode", [
                    "math",
                    "?Unit",
                    "Node"
                ], (_ref)=>{
                    var { math , Unit , Node  } = _ref;
                    function isValuelessUnit(name) {
                        return !!Unit && Unit.isValuelessUnit(name);
                    }
                    function SymbolNode(name) {
                        if (!(this instanceof SymbolNode)) throw new SyntaxError("Constructor must be called with the new operator");
                        if ("string" != typeof name) throw new TypeError('String expected for parameter "name"');
                        this.name = name;
                    }
                    return SymbolNode.prototype = new Node, SymbolNode.prototype.type = "SymbolNode", SymbolNode.prototype.isSymbolNode = !0, SymbolNode.prototype._compile = function(math, argNames) {
                        var name = this.name;
                        if (!0 === argNames[name]) return function(scope, args, context) {
                            return args[name];
                        };
                        if (name in math) return function(scope, args, context) {
                            return scope.has(name) ? scope.get(name) : getSafeProperty(math, name);
                        };
                        var isUnit = isValuelessUnit(name);
                        return function(scope, args, context) {
                            return scope.has(name) ? scope.get(name) : isUnit ? new Unit(null, name) : SymbolNode.onUndefinedSymbol(name);
                        };
                    }, SymbolNode.prototype.forEach = function(callback) {}, SymbolNode.prototype.map = function(callback) {
                        return this.clone();
                    }, SymbolNode.onUndefinedSymbol = function(name) {
                        throw new Error("Undefined symbol " + name);
                    }, SymbolNode.prototype.clone = function() {
                        return new SymbolNode(this.name);
                    }, SymbolNode.prototype._toString = function(options) {
                        return this.name;
                    }, SymbolNode.prototype.toHTML = function(options) {
                        var name = string_escape(this.name);
                        return "true" === name || "false" === name ? '<span class="math-symbol math-boolean">' + name + "</span>" : "i" === name ? '<span class="math-symbol math-imaginary-symbol">' + name + "</span>" : "Infinity" === name ? '<span class="math-symbol math-infinity-symbol">' + name + "</span>" : "NaN" === name ? '<span class="math-symbol math-nan-symbol">' + name + "</span>" : "null" === name ? '<span class="math-symbol math-null-symbol">' + name + "</span>" : "undefined" === name ? '<span class="math-symbol math-undefined-symbol">' + name + "</span>" : '<span class="math-symbol">' + name + "</span>";
                    }, SymbolNode.prototype.toJSON = function() {
                        return {
                            mathjs: "SymbolNode",
                            name: this.name
                        };
                    }, SymbolNode.fromJSON = function(json) {
                        return new SymbolNode(json.name);
                    }, SymbolNode.prototype._toTex = function(options) {
                        var isUnit = !1;
                        void 0 === math[this.name] && isValuelessUnit(this.name) && (isUnit = !0);
                        var symbol = toSymbol(this.name, isUnit);
                        return "\\" === symbol[0] ? symbol : " " + symbol;
                    }, SymbolNode;
                }, {
                    isClass: !0,
                    isNode: !0
                }), SymbolNodeDependencies = {
                    UnitDependencies,
                    NodeDependencies,
                    createSymbolNode
                };
                function createSubScope(parentScope) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
                    return "function" == typeof parentScope.createSubScope ? map_assign(parentScope.createSubScope(), ...args) : map_assign(createEmptyMap(), parentScope, ...args);
                }
                var createFunctionNode = factory_factory("FunctionNode", [
                    "math",
                    "Node",
                    "SymbolNode"
                ], (_ref)=>{
                    var { math , Node , SymbolNode  } = _ref;
                    function FunctionNode(fn, args) {
                        if (!(this instanceof FunctionNode)) throw new SyntaxError("Constructor must be called with the new operator");
                        if ("string" == typeof fn && (fn = new SymbolNode(fn)), !isNode(fn)) throw new TypeError('Node expected as parameter "fn"');
                        if (!Array.isArray(args) || !args.every(isNode)) throw new TypeError('Array containing Nodes expected for parameter "args"');
                        this.fn = fn, this.args = args || [], Object.defineProperty(this, "name", {
                            get: (function() {
                                return this.fn.name || "";
                            }).bind(this),
                            set: function() {
                                throw new Error("Cannot assign a new name, name is read-only");
                            }
                        });
                    }
                    FunctionNode.prototype = new Node, FunctionNode.prototype.type = "FunctionNode", FunctionNode.prototype.isFunctionNode = !0, FunctionNode.prototype._compile = function(math, argNames) {
                        if (!(this instanceof FunctionNode)) throw new TypeError("No valid FunctionNode");
                        var evalArgs = this.args.map((arg)=>arg._compile(math, argNames));
                        if (!isSymbolNode(this.fn)) {
                            if (isAccessorNode(this.fn) && isIndexNode(this.fn.index) && this.fn.index.isObjectProperty()) {
                                var evalObject = this.fn.object._compile(math, argNames), prop = this.fn.index.getObjectProperty(), _rawArgs = this.args;
                                return function(scope, args, context) {
                                    var object = evalObject(scope, args, context);
                                    if (function(object, method) {
                                        if (!isSafeMethod(object, method)) throw new Error('No access to method "' + method + '"');
                                    }(object, prop), object[prop] && object[prop].rawArgs) return object[prop](_rawArgs, math, createSubScope(scope, args), scope);
                                    var values = evalArgs.map((evalArg)=>evalArg(scope, args, context));
                                    return object[prop].apply(object, values);
                                };
                            }
                            var evalFn = this.fn._compile(math, argNames), _rawArgs2 = this.args;
                            return function(scope, args, context) {
                                var fn = evalFn(scope, args, context);
                                if (fn && fn.rawArgs) return fn(_rawArgs2, math, createSubScope(scope, args), scope);
                                var values = evalArgs.map((evalArg)=>evalArg(scope, args, context));
                                return fn.apply(fn, values);
                            };
                        }
                        var _name = this.fn.name, fn = _name in math ? getSafeProperty(math, _name) : void 0, isRaw = "function" == typeof fn && !0 === fn.rawArgs, resolveFn = (scope)=>scope.has(_name) ? scope.get(_name) : _name in math ? getSafeProperty(math, _name) : FunctionNode.onUndefinedFunction(_name);
                        if (isRaw) {
                            var rawArgs = this.args;
                            return function(scope, args, context) {
                                return resolveFn(scope)(rawArgs, math, createSubScope(scope, args), scope);
                            };
                        }
                        switch(evalArgs.length){
                            case 0:
                                return function(scope, args, context) {
                                    return resolveFn(scope)();
                                };
                            case 1:
                                return function(scope, args, context) {
                                    return resolveFn(scope)((0, evalArgs[0])(scope, args, context));
                                };
                            case 2:
                                return function(scope, args, context) {
                                    var fn = resolveFn(scope), evalArg0 = evalArgs[0], evalArg1 = evalArgs[1];
                                    return fn(evalArg0(scope, args, context), evalArg1(scope, args, context));
                                };
                            default:
                                return function(scope, args, context) {
                                    return resolveFn(scope)(...evalArgs.map((evalArg)=>evalArg(scope, args, context)));
                                };
                        }
                    }, FunctionNode.prototype.forEach = function(callback) {
                        callback(this.fn, "fn", this);
                        for(var i = 0; i < this.args.length; i++)callback(this.args[i], "args[" + i + "]", this);
                    }, FunctionNode.prototype.map = function(callback) {
                        for(var fn = this._ifNode(callback(this.fn, "fn", this)), args = [], i = 0; i < this.args.length; i++)args[i] = this._ifNode(callback(this.args[i], "args[" + i + "]", this));
                        return new FunctionNode(fn, args);
                    }, FunctionNode.prototype.clone = function() {
                        return new FunctionNode(this.fn, this.args.slice(0));
                    }, FunctionNode.onUndefinedFunction = function(name) {
                        throw new Error("Undefined function " + name);
                    };
                    var nodeToString = FunctionNode.prototype.toString;
                    function expandTemplate(template, node, options) {
                        for(var match, latex = "", regex = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi, inputPos = 0; null !== (match = regex.exec(template));)if (latex += template.substring(inputPos, match.index), inputPos = match.index, "$$" === match[0]) latex += "$", inputPos++;
                        else {
                            inputPos += match[0].length;
                            var property = node[match[1]];
                            if (!property) throw new ReferenceError("Template: Property " + match[1] + " does not exist.");
                            if (void 0 === match[2]) switch(typeof property){
                                case "string":
                                    latex += property;
                                    break;
                                case "object":
                                    if (isNode(property)) latex += property.toTex(options);
                                    else {
                                        if (!Array.isArray(property)) throw new TypeError("Template: " + match[1] + " has to be a Node, String or array of Nodes");
                                        latex += property.map(function(arg, index) {
                                            if (isNode(arg)) return arg.toTex(options);
                                            throw new TypeError("Template: " + match[1] + "[" + index + "] is not a Node.");
                                        }).join(",");
                                    }
                                    break;
                                default:
                                    throw new TypeError("Template: " + match[1] + " has to be a Node, String or array of Nodes");
                            }
                            else {
                                if (!isNode(property[match[2]] && property[match[2]])) throw new TypeError("Template: " + match[1] + "[" + match[2] + "] is not a Node.");
                                latex += property[match[2]].toTex(options);
                            }
                        }
                        return latex += template.slice(inputPos);
                    }
                    FunctionNode.prototype.toString = function(options) {
                        var customString, name = this.fn.toString(options);
                        return options && "object" == typeof options.handler && object_hasOwnProperty(options.handler, name) && (customString = options.handler[name](this, options)), void 0 !== customString ? customString : nodeToString.call(this, options);
                    }, FunctionNode.prototype._toString = function(options) {
                        var args = this.args.map(function(arg) {
                            return arg.toString(options);
                        });
                        return (isFunctionAssignmentNode(this.fn) ? "(" + this.fn.toString(options) + ")" : this.fn.toString(options)) + "(" + args.join(", ") + ")";
                    }, FunctionNode.prototype.toJSON = function() {
                        return {
                            mathjs: "FunctionNode",
                            fn: this.fn,
                            args: this.args
                        };
                    }, FunctionNode.fromJSON = function(json) {
                        return new FunctionNode(json.fn, json.args);
                    }, FunctionNode.prototype.toHTML = function(options) {
                        var args = this.args.map(function(arg) {
                            return arg.toHTML(options);
                        });
                        return '<span class="math-function">' + string_escape(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + args.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
                    };
                    var nodeToTex = FunctionNode.prototype.toTex;
                    return FunctionNode.prototype.toTex = function(options) {
                        var customTex;
                        return options && "object" == typeof options.handler && object_hasOwnProperty(options.handler, this.name) && (customTex = options.handler[this.name](this, options)), void 0 !== customTex ? customTex : nodeToTex.call(this, options);
                    }, FunctionNode.prototype._toTex = function(options) {
                        var latexConverter, customToTex, args = this.args.map(function(arg) {
                            return arg.toTex(options);
                        });
                        switch(latexFunctions[this.name] && (latexConverter = latexFunctions[this.name]), !math[this.name] || "function" != typeof math[this.name].toTex && "object" != typeof math[this.name].toTex && "string" != typeof math[this.name].toTex || (latexConverter = math[this.name].toTex), typeof latexConverter){
                            case "function":
                                customToTex = latexConverter(this, options);
                                break;
                            case "string":
                                customToTex = expandTemplate(latexConverter, this, options);
                                break;
                            case "object":
                                switch(typeof latexConverter[args.length]){
                                    case "function":
                                        customToTex = latexConverter[args.length](this, options);
                                        break;
                                    case "string":
                                        customToTex = expandTemplate(latexConverter[args.length], this, options);
                                }
                        }
                        return void 0 !== customToTex ? customToTex : expandTemplate("\\mathrm{${name}}\\left(${args}\\right)", this, options);
                    }, FunctionNode.prototype.getIdentifier = function() {
                        return this.type + ":" + this.name;
                    }, FunctionNode;
                }, {
                    isClass: !0,
                    isNode: !0
                }), FunctionNodeDependencies = {
                    NodeDependencies,
                    SymbolNodeDependencies,
                    createFunctionNode
                }, IndexNodeDependencies = {
                    NodeDependencies,
                    RangeDependencies: {
                        createRangeClass: factory_factory("Range", [], ()=>{
                            function Range(start, end, step) {
                                if (!(this instanceof Range)) throw new SyntaxError("Constructor must be called with the new operator");
                                var hasStart = null != start, hasEnd = null != end, hasStep = null != step;
                                if (hasStart) {
                                    if (isBigNumber(start)) start = start.toNumber();
                                    else if ("number" != typeof start) throw new TypeError("Parameter start must be a number");
                                }
                                if (hasEnd) {
                                    if (isBigNumber(end)) end = end.toNumber();
                                    else if ("number" != typeof end) throw new TypeError("Parameter end must be a number");
                                }
                                if (hasStep) {
                                    if (isBigNumber(step)) step = step.toNumber();
                                    else if ("number" != typeof step) throw new TypeError("Parameter step must be a number");
                                }
                                this.start = hasStart ? parseFloat(start) : 0, this.end = hasEnd ? parseFloat(end) : 0, this.step = hasStep ? parseFloat(step) : 1;
                            }
                            return Range.prototype.type = "Range", Range.prototype.isRange = !0, Range.parse = function(str) {
                                if ("string" != typeof str) return null;
                                var nums = str.split(":").map(function(arg) {
                                    return parseFloat(arg);
                                });
                                if (nums.some(function(num) {
                                    return isNaN(num);
                                })) return null;
                                switch(nums.length){
                                    case 2:
                                        return new Range(nums[0], nums[1]);
                                    case 3:
                                        return new Range(nums[0], nums[2], nums[1]);
                                    default:
                                        return null;
                                }
                            }, Range.prototype.clone = function() {
                                return new Range(this.start, this.end, this.step);
                            }, Range.prototype.size = function() {
                                var len = 0, start = this.start, step = this.step, diff = this.end - start;
                                return sign(step) === sign(diff) ? len = Math.ceil(diff / step) : 0 === diff && (len = 0), isNaN(len) && (len = 0), [
                                    len
                                ];
                            }, Range.prototype.min = function() {
                                var size = this.size()[0];
                                return size > 0 ? this.step > 0 ? this.start : this.start + (size - 1) * this.step : void 0;
                            }, Range.prototype.max = function() {
                                var size = this.size()[0];
                                return size > 0 ? this.step > 0 ? this.start + (size - 1) * this.step : this.start : void 0;
                            }, Range.prototype.forEach = function(callback) {
                                var x = this.start, step = this.step, end = this.end, i = 0;
                                if (step > 0) for(; x < end;)callback(x, [
                                    i
                                ], this), x += step, i++;
                                else if (step < 0) for(; x > end;)callback(x, [
                                    i
                                ], this), x += step, i++;
                            }, Range.prototype.map = function(callback) {
                                var array = [];
                                return this.forEach(function(value, index, obj) {
                                    array[index[0]] = callback(value, index, obj);
                                }), array;
                            }, Range.prototype.toArray = function() {
                                var array = [];
                                return this.forEach(function(value, index) {
                                    array[index[0]] = value;
                                }), array;
                            }, Range.prototype.valueOf = function() {
                                return this.toArray();
                            }, Range.prototype.format = function(options) {
                                var str = format(this.start, options);
                                return 1 !== this.step && (str += ":" + format(this.step, options)), str += ":" + format(this.end, options);
                            }, Range.prototype.toString = function() {
                                return this.format();
                            }, Range.prototype.toJSON = function() {
                                return {
                                    mathjs: "Range",
                                    start: this.start,
                                    end: this.end,
                                    step: this.step
                                };
                            }, Range.fromJSON = function(json) {
                                return new Range(json.start, json.end, json.step);
                            }, Range;
                        }, {
                            isClass: !0
                        })
                    },
                    sizeDependencies,
                    createIndexNode: factory_factory("IndexNode", [
                        "Range",
                        "Node",
                        "size"
                    ], (_ref)=>{
                        var { Range , Node , size  } = _ref;
                        function IndexNode(dimensions, dotNotation) {
                            if (!(this instanceof IndexNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (this.dimensions = dimensions, this.dotNotation = dotNotation || !1, !Array.isArray(dimensions) || !dimensions.every(isNode)) throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
                            if (this.dotNotation && !this.isObjectProperty()) throw new Error("dotNotation only applicable for object properties");
                        }
                        function createRange(start, end, step) {
                            return new Range(isBigNumber(start) ? start.toNumber() : start, isBigNumber(end) ? end.toNumber() : end, isBigNumber(step) ? step.toNumber() : step);
                        }
                        return IndexNode.prototype = new Node, IndexNode.prototype.type = "IndexNode", IndexNode.prototype.isIndexNode = !0, IndexNode.prototype._compile = function(math, argNames) {
                            var evalDimensions = map(this.dimensions, function(range, i) {
                                if (isRangeNode(range)) {
                                    if (range.needsEnd()) {
                                        var childArgNames = Object.create(argNames);
                                        childArgNames.end = !0;
                                        var evalStart = range.start._compile(math, childArgNames), evalEnd = range.end._compile(math, childArgNames), evalStep = range.step ? range.step._compile(math, childArgNames) : function() {
                                            return 1;
                                        };
                                        return function(scope, args, context) {
                                            var s = size(context).valueOf(), childArgs = Object.create(args);
                                            return childArgs.end = s[i], createRange(evalStart(scope, childArgs, context), evalEnd(scope, childArgs, context), evalStep(scope, childArgs, context));
                                        };
                                    }
                                    var _evalStart = range.start._compile(math, argNames), _evalEnd = range.end._compile(math, argNames), _evalStep = range.step ? range.step._compile(math, argNames) : function() {
                                        return 1;
                                    };
                                    return function(scope, args, context) {
                                        return createRange(_evalStart(scope, args, context), _evalEnd(scope, args, context), _evalStep(scope, args, context));
                                    };
                                }
                                if (isSymbolNode(range) && "end" === range.name) {
                                    var _childArgNames = Object.create(argNames);
                                    _childArgNames.end = !0;
                                    var evalRange = range._compile(math, _childArgNames);
                                    return function(scope, args, context) {
                                        var s = size(context).valueOf(), childArgs = Object.create(args);
                                        return childArgs.end = s[i], evalRange(scope, childArgs, context);
                                    };
                                }
                                var _evalRange = range._compile(math, argNames);
                                return function(scope, args, context) {
                                    return _evalRange(scope, args, context);
                                };
                            }), index = getSafeProperty(math, "index");
                            return function(scope, args, context) {
                                var dimensions = map(evalDimensions, function(evalDimension) {
                                    return evalDimension(scope, args, context);
                                });
                                return index(...dimensions);
                            };
                        }, IndexNode.prototype.forEach = function(callback) {
                            for(var i = 0; i < this.dimensions.length; i++)callback(this.dimensions[i], "dimensions[" + i + "]", this);
                        }, IndexNode.prototype.map = function(callback) {
                            for(var dimensions = [], i = 0; i < this.dimensions.length; i++)dimensions[i] = this._ifNode(callback(this.dimensions[i], "dimensions[" + i + "]", this));
                            return new IndexNode(dimensions, this.dotNotation);
                        }, IndexNode.prototype.clone = function() {
                            return new IndexNode(this.dimensions.slice(0), this.dotNotation);
                        }, IndexNode.prototype.isObjectProperty = function() {
                            return 1 === this.dimensions.length && isConstantNode(this.dimensions[0]) && "string" == typeof this.dimensions[0].value;
                        }, IndexNode.prototype.getObjectProperty = function() {
                            return this.isObjectProperty() ? this.dimensions[0].value : null;
                        }, IndexNode.prototype._toString = function(options) {
                            return this.dotNotation ? "." + this.getObjectProperty() : "[" + this.dimensions.join(", ") + "]";
                        }, IndexNode.prototype.toJSON = function() {
                            return {
                                mathjs: "IndexNode",
                                dimensions: this.dimensions,
                                dotNotation: this.dotNotation
                            };
                        }, IndexNode.fromJSON = function(json) {
                            return new IndexNode(json.dimensions, json.dotNotation);
                        }, IndexNode.prototype.toHTML = function(options) {
                            for(var dimensions = [], i = 0; i < this.dimensions.length; i++)dimensions[i] = this.dimensions[i].toHTML();
                            return this.dotNotation ? '<span class="math-operator math-accessor-operator">.</span><span class="math-symbol math-property">' + string_escape(this.getObjectProperty()) + "</span>" : '<span class="math-parenthesis math-square-parenthesis">[</span>' + dimensions.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
                        }, IndexNode.prototype._toTex = function(options) {
                            var dimensions = this.dimensions.map(function(range) {
                                return range.toTex(options);
                            });
                            return this.dotNotation ? "." + this.getObjectProperty() : "_{" + dimensions.join(",") + "}";
                        }, IndexNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, createObjectNode = factory_factory("ObjectNode", [
                    "Node"
                ], (_ref)=>{
                    var { Node  } = _ref;
                    function ObjectNode(properties) {
                        if (!(this instanceof ObjectNode)) throw new SyntaxError("Constructor must be called with the new operator");
                        if (this.properties = properties || {}, properties && ("object" != typeof properties || !Object.keys(properties).every(function(key) {
                            return isNode(properties[key]);
                        }))) throw new TypeError("Object containing Nodes expected");
                    }
                    return ObjectNode.prototype = new Node, ObjectNode.prototype.type = "ObjectNode", ObjectNode.prototype.isObjectNode = !0, ObjectNode.prototype._compile = function(math, argNames) {
                        var evalEntries = {};
                        for(var key in this.properties)if (object_hasOwnProperty(this.properties, key)) {
                            var stringifiedKey = stringify(key), parsedKey = JSON.parse(stringifiedKey);
                            if (!isSafeProperty(this.properties, parsedKey)) throw new Error('No access to property "' + parsedKey + '"');
                            evalEntries[parsedKey] = this.properties[key]._compile(math, argNames);
                        }
                        return function(scope, args, context) {
                            var obj = {};
                            for(var _key in evalEntries)object_hasOwnProperty(evalEntries, _key) && (obj[_key] = evalEntries[_key](scope, args, context));
                            return obj;
                        };
                    }, ObjectNode.prototype.forEach = function(callback) {
                        for(var key in this.properties)object_hasOwnProperty(this.properties, key) && callback(this.properties[key], "properties[" + stringify(key) + "]", this);
                    }, ObjectNode.prototype.map = function(callback) {
                        var properties = {};
                        for(var key in this.properties)object_hasOwnProperty(this.properties, key) && (properties[key] = this._ifNode(callback(this.properties[key], "properties[" + stringify(key) + "]", this)));
                        return new ObjectNode(properties);
                    }, ObjectNode.prototype.clone = function() {
                        var properties = {};
                        for(var key in this.properties)object_hasOwnProperty(this.properties, key) && (properties[key] = this.properties[key]);
                        return new ObjectNode(properties);
                    }, ObjectNode.prototype._toString = function(options) {
                        var entries = [];
                        for(var key in this.properties)object_hasOwnProperty(this.properties, key) && entries.push(stringify(key) + ": " + this.properties[key].toString(options));
                        return "{" + entries.join(", ") + "}";
                    }, ObjectNode.prototype.toJSON = function() {
                        return {
                            mathjs: "ObjectNode",
                            properties: this.properties
                        };
                    }, ObjectNode.fromJSON = function(json) {
                        return new ObjectNode(json.properties);
                    }, ObjectNode.prototype.toHTML = function(options) {
                        var entries = [];
                        for(var key in this.properties)object_hasOwnProperty(this.properties, key) && entries.push('<span class="math-symbol math-property">' + string_escape(key) + '</span><span class="math-operator math-assignment-operator math-property-assignment-operator math-binary-operator">:</span>' + this.properties[key].toHTML(options));
                        return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + entries.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
                    }, ObjectNode.prototype._toTex = function(options) {
                        var entries = [];
                        for(var key in this.properties)object_hasOwnProperty(this.properties, key) && entries.push("\\mathbf{" + key + ":} & " + this.properties[key].toTex(options) + "\\\\");
                        return "\\left\\{\\begin{array}{ll}".concat(entries.join("\n"), "\\end{array}\\right\\}");
                    }, ObjectNode;
                }, {
                    isClass: !0,
                    isNode: !0
                }), ObjectNodeDependencies = {
                    NodeDependencies,
                    createObjectNode
                }, createOperatorNode = factory_factory("OperatorNode", [
                    "Node"
                ], (_ref)=>{
                    var { Node  } = _ref;
                    function OperatorNode(op, fn, args, implicit, isPercentage) {
                        if (!(this instanceof OperatorNode)) throw new SyntaxError("Constructor must be called with the new operator");
                        if ("string" != typeof op) throw new TypeError('string expected for parameter "op"');
                        if ("string" != typeof fn) throw new TypeError('string expected for parameter "fn"');
                        if (!Array.isArray(args) || !args.every(isNode)) throw new TypeError('Array containing Nodes expected for parameter "args"');
                        this.implicit = !0 === implicit, this.isPercentage = !0 === isPercentage, this.op = op, this.fn = fn, this.args = args || [];
                    }
                    function calculateNecessaryParentheses(root, parenthesis, implicit, args, latex) {
                        var result, precedence = getPrecedence(root, parenthesis), associativity = getAssociativity(root, parenthesis);
                        if ("all" === parenthesis || args.length > 2 && "OperatorNode:add" !== root.getIdentifier() && "OperatorNode:multiply" !== root.getIdentifier()) return args.map(function(arg) {
                            switch(arg.getContent().type){
                                case "ArrayNode":
                                case "ConstantNode":
                                case "SymbolNode":
                                case "ParenthesisNode":
                                    return !1;
                                default:
                                    return !0;
                            }
                        });
                        switch(args.length){
                            case 0:
                                result = [];
                                break;
                            case 1:
                                var operandPrecedence = getPrecedence(args[0], parenthesis);
                                if (latex && null !== operandPrecedence) {
                                    var operandIdentifier, rootIdentifier;
                                    if ("keep" === parenthesis ? (operandIdentifier = args[0].getIdentifier(), rootIdentifier = root.getIdentifier()) : (operandIdentifier = args[0].getContent().getIdentifier(), rootIdentifier = root.getContent().getIdentifier()), !1 === properties[precedence][rootIdentifier].latexLeftParens) {
                                        result = [
                                            !1
                                        ];
                                        break;
                                    }
                                    if (!1 === properties[operandPrecedence][operandIdentifier].latexParens) {
                                        result = [
                                            !1
                                        ];
                                        break;
                                    }
                                }
                                if (null === operandPrecedence) {
                                    result = [
                                        !1
                                    ];
                                    break;
                                }
                                if (operandPrecedence <= precedence) {
                                    result = [
                                        !0
                                    ];
                                    break;
                                }
                                result = [
                                    !1
                                ];
                                break;
                            case 2:
                                var lhsParens, rhsParens, lhsPrecedence = getPrecedence(args[0], parenthesis), assocWithLhs = isAssociativeWith(root, args[0], parenthesis);
                                lhsParens = null !== lhsPrecedence && (lhsPrecedence === precedence && "right" === associativity && !assocWithLhs || lhsPrecedence < precedence);
                                var _rootIdentifier, lhsIdentifier, rhsIdentifier, rhsPrecedence = getPrecedence(args[1], parenthesis), assocWithRhs = isAssociativeWith(root, args[1], parenthesis);
                                if (rhsParens = null !== rhsPrecedence && (rhsPrecedence === precedence && "left" === associativity && !assocWithRhs || rhsPrecedence < precedence), latex) "keep" === parenthesis ? (_rootIdentifier = root.getIdentifier(), lhsIdentifier = root.args[0].getIdentifier(), rhsIdentifier = root.args[1].getIdentifier()) : (_rootIdentifier = root.getContent().getIdentifier(), lhsIdentifier = root.args[0].getContent().getIdentifier(), rhsIdentifier = root.args[1].getContent().getIdentifier()), null !== lhsPrecedence && (!1 === properties[precedence][_rootIdentifier].latexLeftParens && (lhsParens = !1), !1 === properties[lhsPrecedence][lhsIdentifier].latexParens && (lhsParens = !1)), null !== rhsPrecedence && (!1 === properties[precedence][_rootIdentifier].latexRightParens && (rhsParens = !1), !1 === properties[rhsPrecedence][rhsIdentifier].latexParens && (rhsParens = !1));
                                result = [
                                    lhsParens,
                                    rhsParens
                                ];
                                break;
                            default:
                                "OperatorNode:add" !== root.getIdentifier() && "OperatorNode:multiply" !== root.getIdentifier() || (result = args.map(function(arg) {
                                    var argPrecedence = getPrecedence(arg, parenthesis), assocWithArg = isAssociativeWith(root, arg, parenthesis), argAssociativity = getAssociativity(arg, parenthesis);
                                    return null !== argPrecedence && (precedence === argPrecedence && associativity === argAssociativity && !assocWithArg || argPrecedence < precedence);
                                }));
                        }
                        return args.length >= 2 && "OperatorNode:multiply" === root.getIdentifier() && root.implicit && "auto" === parenthesis && "hide" === implicit && (result = args.map(function(arg, index) {
                            var isParenthesisNode = "ParenthesisNode" === arg.getIdentifier();
                            return !(!result[index] && !isParenthesisNode);
                        })), result;
                    }
                    return OperatorNode.prototype = new Node, OperatorNode.prototype.type = "OperatorNode", OperatorNode.prototype.isOperatorNode = !0, OperatorNode.prototype._compile = function(math, argNames) {
                        if ("string" != typeof this.fn || !isSafeMethod(math, this.fn)) throw math[this.fn] ? new Error('No access to function "' + this.fn + '"') : new Error("Function " + this.fn + ' missing in provided namespace "math"');
                        var fn = getSafeProperty(math, this.fn), evalArgs = map(this.args, function(arg) {
                            return arg._compile(math, argNames);
                        });
                        if (1 === evalArgs.length) {
                            var evalArg0 = evalArgs[0];
                            return function(scope, args, context) {
                                return fn(evalArg0(scope, args, context));
                            };
                        }
                        if (2 === evalArgs.length) {
                            var _evalArg = evalArgs[0], evalArg1 = evalArgs[1];
                            return function(scope, args, context) {
                                return fn(_evalArg(scope, args, context), evalArg1(scope, args, context));
                            };
                        }
                        return function(scope, args, context) {
                            return fn.apply(null, map(evalArgs, function(evalArg) {
                                return evalArg(scope, args, context);
                            }));
                        };
                    }, OperatorNode.prototype.forEach = function(callback) {
                        for(var i = 0; i < this.args.length; i++)callback(this.args[i], "args[" + i + "]", this);
                    }, OperatorNode.prototype.map = function(callback) {
                        for(var args = [], i = 0; i < this.args.length; i++)args[i] = this._ifNode(callback(this.args[i], "args[" + i + "]", this));
                        return new OperatorNode(this.op, this.fn, args, this.implicit, this.isPercentage);
                    }, OperatorNode.prototype.clone = function() {
                        return new OperatorNode(this.op, this.fn, this.args.slice(0), this.implicit, this.isPercentage);
                    }, OperatorNode.prototype.isUnary = function() {
                        return 1 === this.args.length;
                    }, OperatorNode.prototype.isBinary = function() {
                        return 2 === this.args.length;
                    }, OperatorNode.prototype._toString = function(options) {
                        var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", implicit = options && options.implicit ? options.implicit : "hide", args = this.args, parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, !1);
                        if (1 === args.length) {
                            var assoc = getAssociativity(this, parenthesis), operand = args[0].toString(options);
                            parens[0] && (operand = "(" + operand + ")");
                            var opIsNamed = /[a-zA-Z]+/.test(this.op);
                            return "right" === assoc ? this.op + (opIsNamed ? " " : "") + operand : "left" === assoc ? operand + (opIsNamed ? " " : "") + this.op : operand + this.op;
                        }
                        if (2 === args.length) {
                            var lhs = args[0].toString(options), rhs = args[1].toString(options);
                            return parens[0] && (lhs = "(" + lhs + ")"), parens[1] && (rhs = "(" + rhs + ")"), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === implicit ? lhs + " " + rhs : lhs + " " + this.op + " " + rhs;
                        }
                        if (args.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
                            var stringifiedArgs = args.map(function(arg, index) {
                                return arg = arg.toString(options), parens[index] && (arg = "(" + arg + ")"), arg;
                            });
                            return this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === implicit ? stringifiedArgs.join(" ") : stringifiedArgs.join(" " + this.op + " ");
                        }
                        return this.fn + "(" + this.args.join(", ") + ")";
                    }, OperatorNode.prototype.toJSON = function() {
                        return {
                            mathjs: "OperatorNode",
                            op: this.op,
                            fn: this.fn,
                            args: this.args,
                            implicit: this.implicit,
                            isPercentage: this.isPercentage
                        };
                    }, OperatorNode.fromJSON = function(json) {
                        return new OperatorNode(json.op, json.fn, json.args, json.implicit, json.isPercentage);
                    }, OperatorNode.prototype.toHTML = function(options) {
                        var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", implicit = options && options.implicit ? options.implicit : "hide", args = this.args, parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, !1);
                        if (1 === args.length) {
                            var assoc = getAssociativity(this, parenthesis), operand = args[0].toHTML(options);
                            return parens[0] && (operand = '<span class="math-parenthesis math-round-parenthesis">(</span>' + operand + '<span class="math-parenthesis math-round-parenthesis">)</span>'), "right" === assoc ? '<span class="math-operator math-unary-operator math-lefthand-unary-operator">' + string_escape(this.op) + "</span>" + operand : operand + '<span class="math-operator math-unary-operator math-righthand-unary-operator">' + string_escape(this.op) + "</span>";
                        }
                        if (2 === args.length) {
                            var lhs = args[0].toHTML(options), rhs = args[1].toHTML(options);
                            return parens[0] && (lhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + lhs + '<span class="math-parenthesis math-round-parenthesis">)</span>'), parens[1] && (rhs = '<span class="math-parenthesis math-round-parenthesis">(</span>' + rhs + '<span class="math-parenthesis math-round-parenthesis">)</span>'), this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === implicit ? lhs + '<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>' + rhs : lhs + '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + string_escape(this.op) + "</span>" + rhs;
                        }
                        var stringifiedArgs = args.map(function(arg, index) {
                            return arg = arg.toHTML(options), parens[index] && (arg = '<span class="math-parenthesis math-round-parenthesis">(</span>' + arg + '<span class="math-parenthesis math-round-parenthesis">)</span>'), arg;
                        });
                        return args.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier()) ? this.implicit && "OperatorNode:multiply" === this.getIdentifier() && "hide" === implicit ? stringifiedArgs.join('<span class="math-operator math-binary-operator math-implicit-binary-operator"></span>') : stringifiedArgs.join('<span class="math-operator math-binary-operator math-explicit-binary-operator">' + string_escape(this.op) + "</span>") : '<span class="math-function">' + string_escape(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + stringifiedArgs.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
                    }, OperatorNode.prototype._toTex = function(options) {
                        var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", implicit = options && options.implicit ? options.implicit : "hide", args = this.args, parens = calculateNecessaryParentheses(this, parenthesis, implicit, args, !0), op = latexOperators[this.fn];
                        if (op = void 0 === op ? this.op : op, 1 === args.length) {
                            var assoc = getAssociativity(this, parenthesis), operand = args[0].toTex(options);
                            return parens[0] && (operand = "\\left(".concat(operand, "\\right)")), "right" === assoc ? op + operand : operand + op;
                        }
                        if (2 === args.length) {
                            var lhs = args[0], lhsTex = lhs.toTex(options);
                            parens[0] && (lhsTex = "\\left(".concat(lhsTex, "\\right)"));
                            var lhsIdentifier, rhsTex = args[1].toTex(options);
                            switch(parens[1] && (rhsTex = "\\left(".concat(rhsTex, "\\right)")), lhsIdentifier = "keep" === parenthesis ? lhs.getIdentifier() : lhs.getContent().getIdentifier(), this.getIdentifier()){
                                case "OperatorNode:divide":
                                    return op + "{" + lhsTex + "}{" + rhsTex + "}";
                                case "OperatorNode:pow":
                                    switch(lhsTex = "{" + lhsTex + "}", rhsTex = "{" + rhsTex + "}", lhsIdentifier){
                                        case "ConditionalNode":
                                        case "OperatorNode:divide":
                                            lhsTex = "\\left(".concat(lhsTex, "\\right)");
                                    }
                                    break;
                                case "OperatorNode:multiply":
                                    if (this.implicit && "hide" === implicit) return lhsTex + "~" + rhsTex;
                            }
                            return lhsTex + op + rhsTex;
                        }
                        if (args.length > 2 && ("OperatorNode:add" === this.getIdentifier() || "OperatorNode:multiply" === this.getIdentifier())) {
                            var texifiedArgs = args.map(function(arg, index) {
                                return arg = arg.toTex(options), parens[index] && (arg = "\\left(".concat(arg, "\\right)")), arg;
                            });
                            return "OperatorNode:multiply" === this.getIdentifier() && this.implicit ? texifiedArgs.join("~") : texifiedArgs.join(op);
                        }
                        return "\\mathrm{" + this.fn + "}\\left(" + args.map(function(arg) {
                            return arg.toTex(options);
                        }).join(",") + "\\right)";
                    }, OperatorNode.prototype.getIdentifier = function() {
                        return this.type + ":" + this.fn;
                    }, OperatorNode;
                }, {
                    isClass: !0,
                    isNode: !0
                }), OperatorNodeDependencies = {
                    NodeDependencies,
                    createOperatorNode
                }, ParenthesisNodeDependencies = {
                    NodeDependencies,
                    createParenthesisNode: factory_factory("ParenthesisNode", [
                        "Node"
                    ], (_ref)=>{
                        var { Node  } = _ref;
                        function ParenthesisNode(content) {
                            if (!(this instanceof ParenthesisNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (!isNode(content)) throw new TypeError('Node expected for parameter "content"');
                            this.content = content;
                        }
                        return ParenthesisNode.prototype = new Node, ParenthesisNode.prototype.type = "ParenthesisNode", ParenthesisNode.prototype.isParenthesisNode = !0, ParenthesisNode.prototype._compile = function(math, argNames) {
                            return this.content._compile(math, argNames);
                        }, ParenthesisNode.prototype.getContent = function() {
                            return this.content.getContent();
                        }, ParenthesisNode.prototype.forEach = function(callback) {
                            callback(this.content, "content", this);
                        }, ParenthesisNode.prototype.map = function(callback) {
                            return new ParenthesisNode(callback(this.content, "content", this));
                        }, ParenthesisNode.prototype.clone = function() {
                            return new ParenthesisNode(this.content);
                        }, ParenthesisNode.prototype._toString = function(options) {
                            return !options || options && !options.parenthesis || options && "keep" === options.parenthesis ? "(" + this.content.toString(options) + ")" : this.content.toString(options);
                        }, ParenthesisNode.prototype.toJSON = function() {
                            return {
                                mathjs: "ParenthesisNode",
                                content: this.content
                            };
                        }, ParenthesisNode.fromJSON = function(json) {
                            return new ParenthesisNode(json.content);
                        }, ParenthesisNode.prototype.toHTML = function(options) {
                            return !options || options && !options.parenthesis || options && "keep" === options.parenthesis ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : this.content.toHTML(options);
                        }, ParenthesisNode.prototype._toTex = function(options) {
                            return !options || options && !options.parenthesis || options && "keep" === options.parenthesis ? "\\left(".concat(this.content.toTex(options), "\\right)") : this.content.toTex(options);
                        }, ParenthesisNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, createRangeNode = factory_factory("RangeNode", [
                    "Node"
                ], (_ref)=>{
                    var { Node  } = _ref;
                    function RangeNode(start, end, step) {
                        if (!(this instanceof RangeNode)) throw new SyntaxError("Constructor must be called with the new operator");
                        if (!isNode(start)) throw new TypeError("Node expected");
                        if (!isNode(end)) throw new TypeError("Node expected");
                        if (step && !isNode(step)) throw new TypeError("Node expected");
                        if (arguments.length > 3) throw new Error("Too many arguments");
                        this.start = start, this.end = end, this.step = step || null;
                    }
                    function calculateNecessaryParentheses(node, parenthesis) {
                        var precedence = getPrecedence(node, parenthesis), parens = {}, startPrecedence = getPrecedence(node.start, parenthesis);
                        if (parens.start = null !== startPrecedence && startPrecedence <= precedence || "all" === parenthesis, node.step) {
                            var stepPrecedence = getPrecedence(node.step, parenthesis);
                            parens.step = null !== stepPrecedence && stepPrecedence <= precedence || "all" === parenthesis;
                        }
                        var endPrecedence = getPrecedence(node.end, parenthesis);
                        return parens.end = null !== endPrecedence && endPrecedence <= precedence || "all" === parenthesis, parens;
                    }
                    return RangeNode.prototype = new Node, RangeNode.prototype.type = "RangeNode", RangeNode.prototype.isRangeNode = !0, RangeNode.prototype.needsEnd = function() {
                        return this.filter(function(node) {
                            return isSymbolNode(node) && "end" === node.name;
                        }).length > 0;
                    }, RangeNode.prototype._compile = function(math, argNames) {
                        var range = math.range, evalStart = this.start._compile(math, argNames), evalEnd = this.end._compile(math, argNames);
                        if (this.step) {
                            var evalStep = this.step._compile(math, argNames);
                            return function(scope, args, context) {
                                return range(evalStart(scope, args, context), evalEnd(scope, args, context), evalStep(scope, args, context));
                            };
                        }
                        return function(scope, args, context) {
                            return range(evalStart(scope, args, context), evalEnd(scope, args, context));
                        };
                    }, RangeNode.prototype.forEach = function(callback) {
                        callback(this.start, "start", this), callback(this.end, "end", this), this.step && callback(this.step, "step", this);
                    }, RangeNode.prototype.map = function(callback) {
                        return new RangeNode(this._ifNode(callback(this.start, "start", this)), this._ifNode(callback(this.end, "end", this)), this.step && this._ifNode(callback(this.step, "step", this)));
                    }, RangeNode.prototype.clone = function() {
                        return new RangeNode(this.start, this.end, this.step && this.step);
                    }, RangeNode.prototype._toString = function(options) {
                        var str, parens = calculateNecessaryParentheses(this, options && options.parenthesis ? options.parenthesis : "keep"), start = this.start.toString(options);
                        if (parens.start && (start = "(" + start + ")"), str = start, this.step) {
                            var step = this.step.toString(options);
                            parens.step && (step = "(" + step + ")"), str += ":" + step;
                        }
                        var end = this.end.toString(options);
                        return parens.end && (end = "(" + end + ")"), str += ":" + end;
                    }, RangeNode.prototype.toJSON = function() {
                        return {
                            mathjs: "RangeNode",
                            start: this.start,
                            end: this.end,
                            step: this.step
                        };
                    }, RangeNode.fromJSON = function(json) {
                        return new RangeNode(json.start, json.end, json.step);
                    }, RangeNode.prototype.toHTML = function(options) {
                        var str, parens = calculateNecessaryParentheses(this, options && options.parenthesis ? options.parenthesis : "keep"), start = this.start.toHTML(options);
                        if (parens.start && (start = '<span class="math-parenthesis math-round-parenthesis">(</span>' + start + '<span class="math-parenthesis math-round-parenthesis">)</span>'), str = start, this.step) {
                            var step = this.step.toHTML(options);
                            parens.step && (step = '<span class="math-parenthesis math-round-parenthesis">(</span>' + step + '<span class="math-parenthesis math-round-parenthesis">)</span>'), str += '<span class="math-operator math-range-operator">:</span>' + step;
                        }
                        var end = this.end.toHTML(options);
                        return parens.end && (end = '<span class="math-parenthesis math-round-parenthesis">(</span>' + end + '<span class="math-parenthesis math-round-parenthesis">)</span>'), str += '<span class="math-operator math-range-operator">:</span>' + end;
                    }, RangeNode.prototype._toTex = function(options) {
                        var parens = calculateNecessaryParentheses(this, options && options.parenthesis ? options.parenthesis : "keep"), str = this.start.toTex(options);
                        if (parens.start && (str = "\\left(".concat(str, "\\right)")), this.step) {
                            var step = this.step.toTex(options);
                            parens.step && (step = "\\left(".concat(step, "\\right)")), str += ":" + step;
                        }
                        var end = this.end.toTex(options);
                        return parens.end && (end = "\\left(".concat(end, "\\right)")), str += ":" + end;
                    }, RangeNode;
                }, {
                    isClass: !0,
                    isNode: !0
                }), RangeNodeDependencies = {
                    NodeDependencies,
                    createRangeNode
                }, RelationalNodeDependencies = {
                    NodeDependencies,
                    createRelationalNode: factory_factory("RelationalNode", [
                        "Node"
                    ], (_ref)=>{
                        var { Node  } = _ref;
                        function RelationalNode(conditionals, params) {
                            if (!(this instanceof RelationalNode)) throw new SyntaxError("Constructor must be called with the new operator");
                            if (!Array.isArray(conditionals)) throw new TypeError("Parameter conditionals must be an array");
                            if (!Array.isArray(params)) throw new TypeError("Parameter params must be an array");
                            if (conditionals.length !== params.length - 1) throw new TypeError("Parameter params must contain exactly one more element than parameter conditionals");
                            this.conditionals = conditionals, this.params = params;
                        }
                        return RelationalNode.prototype = new Node, RelationalNode.prototype.type = "RelationalNode", RelationalNode.prototype.isRelationalNode = !0, RelationalNode.prototype._compile = function(math, argNames) {
                            var self = this, compiled = this.params.map((p)=>p._compile(math, argNames));
                            return function(scope, args, context) {
                                for(var evalLhs, evalRhs = compiled[0](scope, args, context), i = 0; i < self.conditionals.length; i++){
                                    if (evalLhs = evalRhs, evalRhs = compiled[i + 1](scope, args, context), !getSafeProperty(math, self.conditionals[i])(evalLhs, evalRhs)) return !1;
                                }
                                return !0;
                            };
                        }, RelationalNode.prototype.forEach = function(callback) {
                            this.params.forEach((n, i)=>callback(n, "params[" + i + "]", this), this);
                        }, RelationalNode.prototype.map = function(callback) {
                            return new RelationalNode(this.conditionals.slice(), this.params.map((n, i)=>this._ifNode(callback(n, "params[" + i + "]", this)), this));
                        }, RelationalNode.prototype.clone = function() {
                            return new RelationalNode(this.conditionals, this.params);
                        }, RelationalNode.prototype._toString = function(options) {
                            for(var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", precedence = getPrecedence(this, parenthesis), paramStrings = this.params.map(function(p, index) {
                                var paramPrecedence = getPrecedence(p, parenthesis);
                                return "all" === parenthesis || null !== paramPrecedence && paramPrecedence <= precedence ? "(" + p.toString(options) + ")" : p.toString(options);
                            }), operatorMap = {
                                equal: "==",
                                unequal: "!=",
                                smaller: "<",
                                larger: ">",
                                smallerEq: "<=",
                                largerEq: ">="
                            }, ret = paramStrings[0], i = 0; i < this.conditionals.length; i++)ret += " " + operatorMap[this.conditionals[i]] + " " + paramStrings[i + 1];
                            return ret;
                        }, RelationalNode.prototype.toJSON = function() {
                            return {
                                mathjs: "RelationalNode",
                                conditionals: this.conditionals,
                                params: this.params
                            };
                        }, RelationalNode.fromJSON = function(json) {
                            return new RelationalNode(json.conditionals, json.params);
                        }, RelationalNode.prototype.toHTML = function(options) {
                            for(var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", precedence = getPrecedence(this, parenthesis), paramStrings = this.params.map(function(p, index) {
                                var paramPrecedence = getPrecedence(p, parenthesis);
                                return "all" === parenthesis || null !== paramPrecedence && paramPrecedence <= precedence ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + p.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : p.toHTML(options);
                            }), operatorMap = {
                                equal: "==",
                                unequal: "!=",
                                smaller: "<",
                                larger: ">",
                                smallerEq: "<=",
                                largerEq: ">="
                            }, ret = paramStrings[0], i = 0; i < this.conditionals.length; i++)ret += '<span class="math-operator math-binary-operator math-explicit-binary-operator">' + string_escape(operatorMap[this.conditionals[i]]) + "</span>" + paramStrings[i + 1];
                            return ret;
                        }, RelationalNode.prototype._toTex = function(options) {
                            for(var parenthesis = options && options.parenthesis ? options.parenthesis : "keep", precedence = getPrecedence(this, parenthesis), paramStrings = this.params.map(function(p, index) {
                                var paramPrecedence = getPrecedence(p, parenthesis);
                                return "all" === parenthesis || null !== paramPrecedence && paramPrecedence <= precedence ? "\\left(" + p.toTex(options) + "\right)" : p.toTex(options);
                            }), ret = paramStrings[0], i = 0; i < this.conditionals.length; i++)ret += latexOperators[this.conditionals[i]] + paramStrings[i + 1];
                            return ret;
                        }, RelationalNode;
                    }, {
                        isClass: !0,
                        isNode: !0
                    })
                }, createParse = factory_factory("parse", [
                    "typed",
                    "numeric",
                    "config",
                    "AccessorNode",
                    "ArrayNode",
                    "AssignmentNode",
                    "BlockNode",
                    "ConditionalNode",
                    "ConstantNode",
                    "FunctionAssignmentNode",
                    "FunctionNode",
                    "IndexNode",
                    "ObjectNode",
                    "OperatorNode",
                    "ParenthesisNode",
                    "RangeNode",
                    "RelationalNode",
                    "SymbolNode"
                ], (_ref)=>{
                    var { typed , numeric , config , AccessorNode , ArrayNode , AssignmentNode , BlockNode , ConditionalNode , ConstantNode , FunctionAssignmentNode , FunctionNode , IndexNode , ObjectNode , OperatorNode , ParenthesisNode , RangeNode , RelationalNode , SymbolNode  } = _ref, parse = typed("parse", {
                        string: function(expression) {
                            return parseStart(expression, {});
                        },
                        "Array | Matrix": function(expressions) {
                            return parseMultiple(expressions, {});
                        },
                        "string, Object": function(expression, options) {
                            return parseStart(expression, void 0 !== options.nodes ? options.nodes : {});
                        },
                        "Array | Matrix, Object": parseMultiple
                    });
                    function parseMultiple(expressions) {
                        var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, extraNodes = void 0 !== options.nodes ? options.nodes : {};
                        return deepMap(expressions, function(elem) {
                            if ("string" != typeof elem) throw new TypeError("String expected");
                            return parseStart(elem, extraNodes);
                        });
                    }
                    var TOKENTYPE_NULL = 0, TOKENTYPE_DELIMITER = 1, TOKENTYPE_NUMBER = 2, TOKENTYPE_SYMBOL = 3, TOKENTYPE_UNKNOWN = 4, DELIMITERS = {
                        ",": !0,
                        "(": !0,
                        ")": !0,
                        "[": !0,
                        "]": !0,
                        "{": !0,
                        "}": !0,
                        '"': !0,
                        "'": !0,
                        ";": !0,
                        "+": !0,
                        "-": !0,
                        "*": !0,
                        ".*": !0,
                        "/": !0,
                        "./": !0,
                        "%": !0,
                        "^": !0,
                        ".^": !0,
                        "~": !0,
                        "!": !0,
                        "&": !0,
                        "|": !0,
                        "^|": !0,
                        "=": !0,
                        ":": !0,
                        "?": !0,
                        "==": !0,
                        "!=": !0,
                        "<": !0,
                        ">": !0,
                        "<=": !0,
                        ">=": !0,
                        "<<": !0,
                        ">>": !0,
                        ">>>": !0
                    }, NAMED_DELIMITERS = {
                        mod: !0,
                        to: !0,
                        in: !0,
                        and: !0,
                        xor: !0,
                        or: !0,
                        not: !0
                    }, CONSTANTS = {
                        true: !0,
                        false: !1,
                        null: null,
                        undefined: void 0
                    }, NUMERIC_CONSTANTS = [
                        "NaN",
                        "Infinity"
                    ];
                    function currentString(state, length) {
                        return state.expression.substr(state.index, length);
                    }
                    function currentCharacter(state) {
                        return currentString(state, 1);
                    }
                    function next(state) {
                        state.index++;
                    }
                    function prevCharacter(state) {
                        return state.expression.charAt(state.index - 1);
                    }
                    function nextCharacter(state) {
                        return state.expression.charAt(state.index + 1);
                    }
                    function getToken(state) {
                        for(state.tokenType = TOKENTYPE_NULL, state.token = "", state.comment = ""; parse.isWhitespace(currentCharacter(state), state.nestingLevel);)next(state);
                        if ("#" === currentCharacter(state)) for(; "\n" !== currentCharacter(state) && "" !== currentCharacter(state);)state.comment += currentCharacter(state), next(state);
                        if ("" !== currentCharacter(state)) {
                            if ("\n" === currentCharacter(state) && !state.nestingLevel) return state.tokenType = TOKENTYPE_DELIMITER, state.token = currentCharacter(state), void next(state);
                            var c1 = currentCharacter(state), c2 = currentString(state, 2), c3 = currentString(state, 3);
                            if (3 === c3.length && DELIMITERS[c3]) return state.tokenType = TOKENTYPE_DELIMITER, state.token = c3, next(state), next(state), void next(state);
                            if (2 === c2.length && DELIMITERS[c2]) return state.tokenType = TOKENTYPE_DELIMITER, state.token = c2, next(state), void next(state);
                            if (DELIMITERS[c1]) return state.tokenType = TOKENTYPE_DELIMITER, state.token = c1, void next(state);
                            if (parse.isDigitDot(c1)) {
                                state.tokenType = TOKENTYPE_NUMBER;
                                var _c = currentString(state, 2);
                                if ("0b" === _c || "0o" === _c || "0x" === _c) {
                                    for(state.token += currentCharacter(state), next(state), state.token += currentCharacter(state), next(state); parse.isHexDigit(currentCharacter(state));)state.token += currentCharacter(state), next(state);
                                    if ("." === currentCharacter(state)) for(state.token += ".", next(state); parse.isHexDigit(currentCharacter(state));)state.token += currentCharacter(state), next(state);
                                    else if ("i" === currentCharacter(state)) for(state.token += "i", next(state); parse.isDigit(currentCharacter(state));)state.token += currentCharacter(state), next(state);
                                    return;
                                }
                                if ("." === currentCharacter(state)) {
                                    if (state.token += currentCharacter(state), next(state), !parse.isDigit(currentCharacter(state))) return void (state.tokenType = TOKENTYPE_DELIMITER);
                                } else {
                                    for(; parse.isDigit(currentCharacter(state));)state.token += currentCharacter(state), next(state);
                                    parse.isDecimalMark(currentCharacter(state), nextCharacter(state)) && (state.token += currentCharacter(state), next(state));
                                }
                                for(; parse.isDigit(currentCharacter(state));)state.token += currentCharacter(state), next(state);
                                if ("E" === currentCharacter(state) || "e" === currentCharacter(state)) {
                                    if (parse.isDigit(nextCharacter(state)) || "-" === nextCharacter(state) || "+" === nextCharacter(state)) {
                                        if (state.token += currentCharacter(state), next(state), "+" !== currentCharacter(state) && "-" !== currentCharacter(state) || (state.token += currentCharacter(state), next(state)), !parse.isDigit(currentCharacter(state))) throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
                                        for(; parse.isDigit(currentCharacter(state));)state.token += currentCharacter(state), next(state);
                                        if (parse.isDecimalMark(currentCharacter(state), nextCharacter(state))) throw createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
                                    } else if ("." === nextCharacter(state)) throw next(state), createSyntaxError(state, 'Digit expected, got "' + currentCharacter(state) + '"');
                                }
                            } else {
                                if (!parse.isAlpha(currentCharacter(state), prevCharacter(state), nextCharacter(state))) {
                                    for(state.tokenType = TOKENTYPE_UNKNOWN; "" !== currentCharacter(state);)state.token += currentCharacter(state), next(state);
                                    throw createSyntaxError(state, 'Syntax error in part "' + state.token + '"');
                                }
                                for(; parse.isAlpha(currentCharacter(state), prevCharacter(state), nextCharacter(state)) || parse.isDigit(currentCharacter(state));)state.token += currentCharacter(state), next(state);
                                object_hasOwnProperty(NAMED_DELIMITERS, state.token) ? state.tokenType = TOKENTYPE_DELIMITER : state.tokenType = TOKENTYPE_SYMBOL;
                            }
                        } else state.tokenType = TOKENTYPE_DELIMITER;
                    }
                    function getTokenSkipNewline(state) {
                        do getToken(state);
                        while ("\n" === state.token);
                    }
                    function openParams(state) {
                        state.nestingLevel++;
                    }
                    function closeParams(state) {
                        state.nestingLevel--;
                    }
                    function parseStart(expression, extraNodes) {
                        var state = {
                            extraNodes: {},
                            expression: "",
                            comment: "",
                            index: 0,
                            token: "",
                            tokenType: TOKENTYPE_NULL,
                            nestingLevel: 0,
                            conditionalLevel: null
                        };
                        _extends(state, {
                            expression,
                            extraNodes
                        }), getToken(state);
                        var node = function(state) {
                            var node, visible, blocks = [];
                            "" !== state.token && "\n" !== state.token && ";" !== state.token && ((node = parseAssignment(state)).comment = state.comment);
                            for(; "\n" === state.token || ";" === state.token;)0 === blocks.length && node && (visible = ";" !== state.token, blocks.push({
                                node,
                                visible
                            })), getToken(state), "\n" !== state.token && ";" !== state.token && "" !== state.token && ((node = parseAssignment(state)).comment = state.comment, visible = ";" !== state.token, blocks.push({
                                node,
                                visible
                            }));
                            return blocks.length > 0 ? new BlockNode(blocks) : (node || ((node = new ConstantNode(void 0)).comment = state.comment), node);
                        }(state);
                        if ("" !== state.token) throw state.tokenType === TOKENTYPE_DELIMITER ? createError(state, "Unexpected operator " + state.token) : createSyntaxError(state, 'Unexpected part "' + state.token + '"');
                        return node;
                    }
                    function parseAssignment(state) {
                        var name, args, value, valid, node = function(state) {
                            var node = function(state) {
                                var node = parseLogicalXor(state);
                                for(; "or" === state.token;)getTokenSkipNewline(state), node = new OperatorNode("or", "or", [
                                    node,
                                    parseLogicalXor(state)
                                ]);
                                return node;
                            }(state);
                            for(; "?" === state.token;){
                                var prev = state.conditionalLevel;
                                state.conditionalLevel = state.nestingLevel, getTokenSkipNewline(state);
                                var condition = node, trueExpr = parseAssignment(state);
                                if (":" !== state.token) throw createSyntaxError(state, "False part of conditional expression expected");
                                state.conditionalLevel = null, getTokenSkipNewline(state);
                                var falseExpr = parseAssignment(state);
                                node = new ConditionalNode(condition, trueExpr, falseExpr), state.conditionalLevel = prev;
                            }
                            return node;
                        }(state);
                        if ("=" === state.token) {
                            if (isSymbolNode(node)) return name = node.name, getTokenSkipNewline(state), value = parseAssignment(state), new AssignmentNode(new SymbolNode(name), value);
                            if (isAccessorNode(node)) return getTokenSkipNewline(state), value = parseAssignment(state), new AssignmentNode(node.object, node.index, value);
                            if (isFunctionNode(node) && isSymbolNode(node.fn) && (valid = !0, args = [], name = node.name, node.args.forEach(function(arg, index) {
                                isSymbolNode(arg) ? args[index] = arg.name : valid = !1;
                            }), valid)) return getTokenSkipNewline(state), value = parseAssignment(state), new FunctionAssignmentNode(name, args, value);
                            throw createSyntaxError(state, "Invalid left hand side of assignment operator =");
                        }
                        return node;
                    }
                    function parseLogicalXor(state) {
                        for(var node = parseLogicalAnd(state); "xor" === state.token;)getTokenSkipNewline(state), node = new OperatorNode("xor", "xor", [
                            node,
                            parseLogicalAnd(state)
                        ]);
                        return node;
                    }
                    function parseLogicalAnd(state) {
                        for(var node = parseBitwiseOr(state); "and" === state.token;)getTokenSkipNewline(state), node = new OperatorNode("and", "and", [
                            node,
                            parseBitwiseOr(state)
                        ]);
                        return node;
                    }
                    function parseBitwiseOr(state) {
                        for(var node = parseBitwiseXor(state); "|" === state.token;)getTokenSkipNewline(state), node = new OperatorNode("|", "bitOr", [
                            node,
                            parseBitwiseXor(state)
                        ]);
                        return node;
                    }
                    function parseBitwiseXor(state) {
                        for(var node = parseBitwiseAnd(state); "^|" === state.token;)getTokenSkipNewline(state), node = new OperatorNode("^|", "bitXor", [
                            node,
                            parseBitwiseAnd(state)
                        ]);
                        return node;
                    }
                    function parseBitwiseAnd(state) {
                        for(var node = parseRelational(state); "&" === state.token;)getTokenSkipNewline(state), node = new OperatorNode("&", "bitAnd", [
                            node,
                            parseRelational(state)
                        ]);
                        return node;
                    }
                    function parseRelational(state) {
                        for(var params = [
                            parseShift(state)
                        ], conditionals = [], operators = {
                            "==": "equal",
                            "!=": "unequal",
                            "<": "smaller",
                            ">": "larger",
                            "<=": "smallerEq",
                            ">=": "largerEq"
                        }; object_hasOwnProperty(operators, state.token);){
                            var cond = {
                                name: state.token,
                                fn: operators[state.token]
                            };
                            conditionals.push(cond), getTokenSkipNewline(state), params.push(parseShift(state));
                        }
                        return 1 === params.length ? params[0] : 2 === params.length ? new OperatorNode(conditionals[0].name, conditionals[0].fn, params) : new RelationalNode(conditionals.map((c)=>c.fn), params);
                    }
                    function parseShift(state) {
                        var node, name, fn, params;
                        node = parseConversion(state);
                        for(var operators = {
                            "<<": "leftShift",
                            ">>": "rightArithShift",
                            ">>>": "rightLogShift"
                        }; object_hasOwnProperty(operators, state.token);)fn = operators[name = state.token], getTokenSkipNewline(state), params = [
                            node,
                            parseConversion(state)
                        ], node = new OperatorNode(name, fn, params);
                        return node;
                    }
                    function parseConversion(state) {
                        var node, name, fn, params;
                        node = parseRange(state);
                        for(var operators = {
                            to: "to",
                            in: "to"
                        }; object_hasOwnProperty(operators, state.token);)fn = operators[name = state.token], getTokenSkipNewline(state), "in" === name && "" === state.token ? node = new OperatorNode("*", "multiply", [
                            node,
                            new SymbolNode("in")
                        ], !0) : (params = [
                            node,
                            parseRange(state)
                        ], node = new OperatorNode(name, fn, params));
                        return node;
                    }
                    function parseRange(state) {
                        var node, params = [];
                        if (node = ":" === state.token ? new ConstantNode(1) : parseAddSubtract(state), ":" === state.token && state.conditionalLevel !== state.nestingLevel) {
                            for(params.push(node); ":" === state.token && params.length < 3;)getTokenSkipNewline(state), ")" === state.token || "]" === state.token || "," === state.token || "" === state.token ? params.push(new SymbolNode("end")) : params.push(parseAddSubtract(state));
                            node = 3 === params.length ? new RangeNode(params[0], params[2], params[1]) : new RangeNode(params[0], params[1]);
                        }
                        return node;
                    }
                    function parseAddSubtract(state) {
                        var node, name, fn, params;
                        node = parseMultiplyDivide(state);
                        for(var operators = {
                            "+": "add",
                            "-": "subtract"
                        }; object_hasOwnProperty(operators, state.token);){
                            fn = operators[name = state.token], getTokenSkipNewline(state);
                            var rightNode = parseMultiplyDivide(state);
                            params = rightNode.isPercentage ? [
                                node,
                                new OperatorNode("*", "multiply", [
                                    node,
                                    rightNode
                                ])
                            ] : [
                                node,
                                rightNode
                            ], node = new OperatorNode(name, fn, params);
                        }
                        return node;
                    }
                    function parseMultiplyDivide(state) {
                        var node, last, name, fn;
                        last = node = parseImplicitMultiplication(state);
                        for(var operators = {
                            "*": "multiply",
                            ".*": "dotMultiply",
                            "/": "divide",
                            "./": "dotDivide"
                        }; object_hasOwnProperty(operators, state.token);)fn = operators[name = state.token], getTokenSkipNewline(state), last = parseImplicitMultiplication(state), node = new OperatorNode(name, fn, [
                            node,
                            last
                        ]);
                        return node;
                    }
                    function parseImplicitMultiplication(state) {
                        var node, last;
                        for(last = node = parseRule2(state); state.tokenType === TOKENTYPE_SYMBOL || "in" === state.token && isConstantNode(node) || !(state.tokenType !== TOKENTYPE_NUMBER || isConstantNode(last) || isOperatorNode(last) && "!" !== last.op) || "(" === state.token;)last = parseRule2(state), node = new OperatorNode("*", "multiply", [
                            node,
                            last
                        ], !0);
                        return node;
                    }
                    function parseRule2(state) {
                        for(var node = parsePercentage(state), last = node, tokenStates = []; "/" === state.token && isConstantNode(last);){
                            if (tokenStates.push(_extends({}, state)), getTokenSkipNewline(state), state.tokenType !== TOKENTYPE_NUMBER) {
                                _extends(state, tokenStates.pop());
                                break;
                            }
                            if (tokenStates.push(_extends({}, state)), getTokenSkipNewline(state), state.tokenType !== TOKENTYPE_SYMBOL && "(" !== state.token) {
                                tokenStates.pop(), _extends(state, tokenStates.pop());
                                break;
                            }
                            _extends(state, tokenStates.pop()), tokenStates.pop(), last = parsePercentage(state), node = new OperatorNode("/", "divide", [
                                node,
                                last
                            ]);
                        }
                        return node;
                    }
                    function parsePercentage(state) {
                        var node, name, fn, params;
                        node = parseUnary(state);
                        for(var operators = {
                            "%": "mod",
                            mod: "mod"
                        }; object_hasOwnProperty(operators, state.token);)fn = operators[name = state.token], getTokenSkipNewline(state), "%" === name && state.tokenType === TOKENTYPE_DELIMITER && "(" !== state.token ? node = new OperatorNode("/", "divide", [
                            node,
                            new ConstantNode(100)
                        ], !1, !0) : (params = [
                            node,
                            parseUnary(state)
                        ], node = new OperatorNode(name, fn, params));
                        return node;
                    }
                    function parseUnary(state) {
                        var name, params, fn, operators = {
                            "-": "unaryMinus",
                            "+": "unaryPlus",
                            "~": "bitNot",
                            not: "not"
                        };
                        return object_hasOwnProperty(operators, state.token) ? (fn = operators[state.token], name = state.token, getTokenSkipNewline(state), params = [
                            parseUnary(state)
                        ], new OperatorNode(name, fn, params)) : function(state) {
                            var node, name, fn, params;
                            node = function(state) {
                                var node, name, fn;
                                node = function(state) {
                                    var params = [];
                                    if (state.tokenType === TOKENTYPE_SYMBOL && object_hasOwnProperty(state.extraNodes, state.token)) {
                                        var CustomNode = state.extraNodes[state.token];
                                        if (getToken(state), "(" === state.token) {
                                            if (params = [], openParams(state), getToken(state), ")" !== state.token) for(params.push(parseAssignment(state)); "," === state.token;)getToken(state), params.push(parseAssignment(state));
                                            if (")" !== state.token) throw createSyntaxError(state, "Parenthesis ) expected");
                                            closeParams(state), getToken(state);
                                        }
                                        return new CustomNode(params);
                                    }
                                    return function(state) {
                                        var name;
                                        if (state.tokenType === TOKENTYPE_SYMBOL || state.tokenType === TOKENTYPE_DELIMITER && state.token in NAMED_DELIMITERS) return name = state.token, getToken(state), parseAccessors(state, object_hasOwnProperty(CONSTANTS, name) ? new ConstantNode(CONSTANTS[name]) : -1 !== NUMERIC_CONSTANTS.indexOf(name) ? new ConstantNode(numeric(name, "number")) : new SymbolNode(name));
                                        return function(state) {
                                            var str;
                                            if ('"' === state.token) return str = parseDoubleQuotesStringToken(state), parseAccessors(state, new ConstantNode(str));
                                            return function(state) {
                                                var str;
                                                if ("'" === state.token) return str = parseSingleQuotesStringToken(state), parseAccessors(state, new ConstantNode(str));
                                                return function(state) {
                                                    var array, params, rows, cols;
                                                    if ("[" === state.token) {
                                                        if (openParams(state), getToken(state), "]" !== state.token) {
                                                            var row = parseRow(state);
                                                            if (";" === state.token) {
                                                                for(rows = 1, params = [
                                                                    row
                                                                ]; ";" === state.token;)getToken(state), params[rows] = parseRow(state), rows++;
                                                                if ("]" !== state.token) throw createSyntaxError(state, "End of matrix ] expected");
                                                                closeParams(state), getToken(state), cols = params[0].items.length;
                                                                for(var r = 1; r < rows; r++)if (params[r].items.length !== cols) throw createError(state, "Column dimensions mismatch (" + params[r].items.length + " !== " + cols + ")");
                                                                array = new ArrayNode(params);
                                                            } else {
                                                                if ("]" !== state.token) throw createSyntaxError(state, "End of matrix ] expected");
                                                                closeParams(state), getToken(state), array = row;
                                                            }
                                                        } else closeParams(state), getToken(state), array = new ArrayNode([]);
                                                        return parseAccessors(state, array);
                                                    }
                                                    return function(state) {
                                                        if ("{" === state.token) {
                                                            var key;
                                                            openParams(state);
                                                            var properties = {};
                                                            do if (getToken(state), "}" !== state.token) {
                                                                if ('"' === state.token) key = parseDoubleQuotesStringToken(state);
                                                                else if ("'" === state.token) key = parseSingleQuotesStringToken(state);
                                                                else {
                                                                    if (!(state.tokenType === TOKENTYPE_SYMBOL || state.tokenType === TOKENTYPE_DELIMITER && state.token in NAMED_DELIMITERS)) throw createSyntaxError(state, "Symbol or string expected as object key");
                                                                    key = state.token, getToken(state);
                                                                }
                                                                if (":" !== state.token) throw createSyntaxError(state, "Colon : expected after object key");
                                                                getToken(state), properties[key] = parseAssignment(state);
                                                            }
                                                            while ("," === state.token);
                                                            if ("}" !== state.token) throw createSyntaxError(state, "Comma , or bracket } expected after object value");
                                                            closeParams(state), getToken(state);
                                                            var node = new ObjectNode(properties);
                                                            return node = parseAccessors(state, node);
                                                        }
                                                        return function(state) {
                                                            var numberStr;
                                                            if (state.tokenType === TOKENTYPE_NUMBER) return numberStr = state.token, getToken(state), new ConstantNode(numeric(numberStr, config.number));
                                                            return function(state) {
                                                                var node;
                                                                if ("(" === state.token) {
                                                                    if (openParams(state), getToken(state), node = parseAssignment(state), ")" !== state.token) throw createSyntaxError(state, "Parenthesis ) expected");
                                                                    return closeParams(state), getToken(state), node = parseAccessors(state, node = new ParenthesisNode(node));
                                                                }
                                                                return function(state) {
                                                                    throw "" === state.token ? createSyntaxError(state, "Unexpected end of expression") : createSyntaxError(state, "Value expected");
                                                                }(state);
                                                            }(state);
                                                        }(state);
                                                    }(state);
                                                }(state);
                                            }(state);
                                        }(state);
                                    }(state);
                                }(state);
                                var operators = {
                                    "!": "factorial",
                                    "'": "ctranspose"
                                };
                                for(; object_hasOwnProperty(operators, state.token);)fn = operators[name = state.token], getToken(state), node = parseAccessors(state, node = new OperatorNode(name, fn, [
                                    node
                                ]));
                                return node;
                            }(state), ("^" === state.token || ".^" === state.token) && (fn = "^" === (name = state.token) ? "pow" : "dotPow", getTokenSkipNewline(state), params = [
                                node,
                                parseUnary(state)
                            ], node = new OperatorNode(name, fn, params));
                            return node;
                        }(state);
                    }
                    function parseAccessors(state, node, types) {
                        for(var params; !("(" !== state.token && "[" !== state.token && "." !== state.token || types && -1 === types.indexOf(state.token));)if (params = [], "(" === state.token) {
                            if (!isSymbolNode(node) && !isAccessorNode(node)) return node;
                            if (openParams(state), getToken(state), ")" !== state.token) for(params.push(parseAssignment(state)); "," === state.token;)getToken(state), params.push(parseAssignment(state));
                            if (")" !== state.token) throw createSyntaxError(state, "Parenthesis ) expected");
                            closeParams(state), getToken(state), node = new FunctionNode(node, params);
                        } else if ("[" === state.token) {
                            if (openParams(state), getToken(state), "]" !== state.token) for(params.push(parseAssignment(state)); "," === state.token;)getToken(state), params.push(parseAssignment(state));
                            if ("]" !== state.token) throw createSyntaxError(state, "Parenthesis ] expected");
                            closeParams(state), getToken(state), node = new AccessorNode(node, new IndexNode(params));
                        } else {
                            if (getToken(state), state.tokenType !== TOKENTYPE_SYMBOL) throw createSyntaxError(state, "Property name expected after dot");
                            params.push(new ConstantNode(state.token)), getToken(state);
                            node = new AccessorNode(node, new IndexNode(params, !0));
                        }
                        return node;
                    }
                    function parseDoubleQuotesStringToken(state) {
                        for(var str = ""; "" !== currentCharacter(state) && '"' !== currentCharacter(state);)"\\" === currentCharacter(state) && (str += currentCharacter(state), next(state)), str += currentCharacter(state), next(state);
                        if (getToken(state), '"' !== state.token) throw createSyntaxError(state, 'End of string " expected');
                        return getToken(state), JSON.parse('"' + str + '"');
                    }
                    function parseSingleQuotesStringToken(state) {
                        for(var str = ""; "" !== currentCharacter(state) && "'" !== currentCharacter(state);)"\\" === currentCharacter(state) && (str += currentCharacter(state), next(state)), str += currentCharacter(state), next(state);
                        if (getToken(state), "'" !== state.token) throw createSyntaxError(state, "End of string ' expected");
                        return getToken(state), JSON.parse('"' + str + '"');
                    }
                    function parseRow(state) {
                        for(var params = [
                            parseAssignment(state)
                        ], len = 1; "," === state.token;)getToken(state), params[len] = parseAssignment(state), len++;
                        return new ArrayNode(params);
                    }
                    function col(state) {
                        return state.index - state.token.length + 1;
                    }
                    function createSyntaxError(state, message) {
                        var c = col(state), error = new SyntaxError(message + " (char " + c + ")");
                        return error.char = c, error;
                    }
                    function createError(state, message) {
                        var c = col(state), error = new SyntaxError(message + " (char " + c + ")");
                        return error.char = c, error;
                    }
                    return parse.isAlpha = function(c, cPrev, cNext) {
                        return parse.isValidLatinOrGreek(c) || parse.isValidMathSymbol(c, cNext) || parse.isValidMathSymbol(cPrev, c);
                    }, parse.isValidLatinOrGreek = function(c) {
                        return /^[a-zA-Z_$\u00C0-\u02AF\u0370-\u03FF\u2100-\u214F]$/.test(c);
                    }, parse.isValidMathSymbol = function(high, low) {
                        return /^[\uD835]$/.test(high) && /^[\uDC00-\uDFFF]$/.test(low) && /^[^\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDFCC\uDFCD]$/.test(low);
                    }, parse.isWhitespace = function(c, nestingLevel) {
                        return " " === c || "	" === c || "\n" === c && nestingLevel > 0;
                    }, parse.isDecimalMark = function(c, cNext) {
                        return "." === c && "/" !== cNext && "*" !== cNext && "^" !== cNext;
                    }, parse.isDigitDot = function(c) {
                        return c >= "0" && c <= "9" || "." === c;
                    }, parse.isDigit = function(c) {
                        return c >= "0" && c <= "9";
                    }, parse.isHexDigit = function(c) {
                        return c >= "0" && c <= "9" || c >= "a" && c <= "f" || c >= "A" && c <= "F";
                    }, parse;
                }), evaluateDependencies = {
                    parseDependencies: {
                        AccessorNodeDependencies,
                        ArrayNodeDependencies,
                        AssignmentNodeDependencies,
                        BlockNodeDependencies,
                        ConditionalNodeDependencies,
                        ConstantNodeDependencies,
                        FunctionAssignmentNodeDependencies,
                        FunctionNodeDependencies,
                        IndexNodeDependencies,
                        ObjectNodeDependencies,
                        OperatorNodeDependencies,
                        ParenthesisNodeDependencies,
                        RangeNodeDependencies,
                        RelationalNodeDependencies,
                        SymbolNodeDependencies,
                        numericDependencies,
                        typedDependencies,
                        createParse
                    },
                    typedDependencies,
                    createEvaluate: factory_factory("evaluate", [
                        "typed",
                        "parse"
                    ], (_ref)=>{
                        var { typed , parse  } = _ref;
                        return typed("evaluate", {
                            string: function(expr) {
                                var scope = createEmptyMap();
                                return parse(expr).compile().evaluate(scope);
                            },
                            "string, Map | Object": function(expr, scope) {
                                return parse(expr).compile().evaluate(scope);
                            },
                            "Array | Matrix": function(expr) {
                                var scope = createEmptyMap();
                                return deepMap(expr, function(entry) {
                                    return parse(entry).compile().evaluate(scope);
                                });
                            },
                            "Array | Matrix, Map | Object": function(expr, scope) {
                                return deepMap(expr, function(entry) {
                                    return parse(entry).compile().evaluate(scope);
                                });
                            }
                        });
                    })
                }, createAlgorithm04 = factory_factory("algorithm04", [
                    "typed",
                    "equalScalar"
                ], (_ref)=>{
                    var { typed , equalScalar  } = _ref;
                    return function(a, b, callback) {
                        var avalues = a._values, aindex = a._index, aptr = a._ptr, asize = a._size, adt = a._datatype, bvalues = b._values, bindex = b._index, bptr = b._ptr, bsize = b._size, bdt = b._datatype;
                        if (asize.length !== bsize.length) throw new DimensionError(asize.length, bsize.length);
                        if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
                        var dt, rows = asize[0], columns = asize[1], eq = equalScalar, zero = 0, cf = callback;
                        "string" == typeof adt && adt === bdt && (dt = adt, eq = typed.find(equalScalar, [
                            dt,
                            dt
                        ]), zero = typed.convert(0, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        var i, j, k, k0, k1, cvalues = avalues && bvalues ? [] : void 0, cindex = [], cptr = [], xa = avalues && bvalues ? [] : void 0, xb = avalues && bvalues ? [] : void 0, wa = [], wb = [];
                        for(j = 0; j < columns; j++){
                            cptr[j] = cindex.length;
                            var mark = j + 1;
                            for(k0 = aptr[j], k1 = aptr[j + 1], k = k0; k < k1; k++)i = aindex[k], cindex.push(i), wa[i] = mark, xa && (xa[i] = avalues[k]);
                            for(k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++)if (wa[i = bindex[k]] === mark) {
                                if (xa) {
                                    var v = cf(xa[i], bvalues[k]);
                                    eq(v, zero) ? wa[i] = null : xa[i] = v;
                                }
                            } else cindex.push(i), wb[i] = mark, xb && (xb[i] = bvalues[k]);
                            if (xa && xb) for(k = cptr[j]; k < cindex.length;)wa[i = cindex[k]] === mark ? (cvalues[k] = xa[i], k++) : wb[i] === mark ? (cvalues[k] = xb[i], k++) : cindex.splice(k, 1);
                        }
                        return cptr[columns] = cindex.length, a.createSparseMatrix({
                            values: cvalues,
                            index: cindex,
                            ptr: cptr,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                }), addDependencies = {
                    DenseMatrixDependencies,
                    SparseMatrixDependencies,
                    addScalarDependencies,
                    equalScalarDependencies,
                    matrixDependencies,
                    typedDependencies,
                    createAdd: factory_factory("add", [
                        "typed",
                        "matrix",
                        "addScalar",
                        "equalScalar",
                        "DenseMatrix",
                        "SparseMatrix"
                    ], (_ref)=>{
                        var { typed , matrix , addScalar , equalScalar , DenseMatrix , SparseMatrix  } = _ref, algorithm01 = createAlgorithm01({
                            typed
                        }), algorithm04 = createAlgorithm04({
                            typed,
                            equalScalar
                        }), algorithm10 = createAlgorithm10({
                            typed,
                            DenseMatrix
                        }), algorithm13 = createAlgorithm13({
                            typed
                        }), algorithm14 = createAlgorithm14({
                            typed
                        });
                        return typed("add", extend({
                            "DenseMatrix, DenseMatrix": function(x, y) {
                                return algorithm13(x, y, addScalar);
                            },
                            "DenseMatrix, SparseMatrix": function(x, y) {
                                return algorithm01(x, y, addScalar, !1);
                            },
                            "SparseMatrix, DenseMatrix": function(x, y) {
                                return algorithm01(y, x, addScalar, !0);
                            },
                            "SparseMatrix, SparseMatrix": function(x, y) {
                                return algorithm04(x, y, addScalar);
                            },
                            "Array, Array": function(x, y) {
                                return this(matrix(x), matrix(y)).valueOf();
                            },
                            "Array, Matrix": function(x, y) {
                                return this(matrix(x), y);
                            },
                            "Matrix, Array": function(x, y) {
                                return this(x, matrix(y));
                            },
                            "DenseMatrix, any": function(x, y) {
                                return algorithm14(x, y, addScalar, !1);
                            },
                            "SparseMatrix, any": function(x, y) {
                                return algorithm10(x, y, addScalar, !1);
                            },
                            "any, DenseMatrix": function(x, y) {
                                return algorithm14(y, x, addScalar, !0);
                            },
                            "any, SparseMatrix": function(x, y) {
                                return algorithm10(y, x, addScalar, !0);
                            },
                            "Array, any": function(x, y) {
                                return algorithm14(matrix(x), y, addScalar, !1).valueOf();
                            },
                            "any, Array": function(x, y) {
                                return algorithm14(matrix(y), x, addScalar, !0).valueOf();
                            },
                            "any, any": addScalar,
                            "any, any, ...any": function(x, y, rest) {
                                for(var result = this(x, y), i = 0; i < rest.length; i++)result = this(result, rest[i]);
                                return result;
                            }
                        }, addScalar.signatures));
                    })
                }, largerDependencies = {
                    DenseMatrixDependencies,
                    matrixDependencies,
                    typedDependencies,
                    createLarger: factory_factory("larger", [
                        "typed",
                        "config",
                        "matrix",
                        "DenseMatrix"
                    ], (_ref)=>{
                        var { typed , config , matrix , DenseMatrix  } = _ref, algorithm03 = createAlgorithm03({
                            typed
                        }), algorithm07 = createAlgorithm07({
                            typed,
                            DenseMatrix
                        }), algorithm12 = createAlgorithm12({
                            typed,
                            DenseMatrix
                        }), algorithm13 = createAlgorithm13({
                            typed
                        }), algorithm14 = createAlgorithm14({
                            typed
                        });
                        return typed("larger", {
                            "boolean, boolean": function(x, y) {
                                return x > y;
                            },
                            "number, number": function(x, y) {
                                return x > y && !number_nearlyEqual(x, y, config.epsilon);
                            },
                            "BigNumber, BigNumber": function(x, y) {
                                return x.gt(y) && !nearlyEqual_nearlyEqual(x, y, config.epsilon);
                            },
                            "Fraction, Fraction": function(x, y) {
                                return 1 === x.compare(y);
                            },
                            "Complex, Complex": function() {
                                throw new TypeError("No ordering relation is defined for complex numbers");
                            },
                            "Unit, Unit": function(x, y) {
                                if (!x.equalBase(y)) throw new Error("Cannot compare units with different base");
                                return this(x.value, y.value);
                            },
                            "SparseMatrix, SparseMatrix": function(x, y) {
                                return algorithm07(x, y, this);
                            },
                            "SparseMatrix, DenseMatrix": function(x, y) {
                                return algorithm03(y, x, this, !0);
                            },
                            "DenseMatrix, SparseMatrix": function(x, y) {
                                return algorithm03(x, y, this, !1);
                            },
                            "DenseMatrix, DenseMatrix": function(x, y) {
                                return algorithm13(x, y, this);
                            },
                            "Array, Array": function(x, y) {
                                return this(matrix(x), matrix(y)).valueOf();
                            },
                            "Array, Matrix": function(x, y) {
                                return this(matrix(x), y);
                            },
                            "Matrix, Array": function(x, y) {
                                return this(x, matrix(y));
                            },
                            "SparseMatrix, any": function(x, y) {
                                return algorithm12(x, y, this, !1);
                            },
                            "DenseMatrix, any": function(x, y) {
                                return algorithm14(x, y, this, !1);
                            },
                            "any, SparseMatrix": function(x, y) {
                                return algorithm12(y, x, this, !0);
                            },
                            "any, DenseMatrix": function(x, y) {
                                return algorithm14(y, x, this, !0);
                            },
                            "Array, any": function(x, y) {
                                return algorithm14(matrix(x), y, this, !1).valueOf();
                            },
                            "any, Array": function(x, y) {
                                return algorithm14(matrix(y), x, this, !0).valueOf();
                            }
                        });
                    })
                }, FibonacciHeapDependencies = {
                    largerDependencies,
                    smallerDependencies: {
                        DenseMatrixDependencies,
                        matrixDependencies,
                        typedDependencies,
                        createSmaller: factory_factory("smaller", [
                            "typed",
                            "config",
                            "matrix",
                            "DenseMatrix"
                        ], (_ref)=>{
                            var { typed , config , matrix , DenseMatrix  } = _ref, algorithm03 = createAlgorithm03({
                                typed
                            }), algorithm07 = createAlgorithm07({
                                typed,
                                DenseMatrix
                            }), algorithm12 = createAlgorithm12({
                                typed,
                                DenseMatrix
                            }), algorithm13 = createAlgorithm13({
                                typed
                            }), algorithm14 = createAlgorithm14({
                                typed
                            });
                            return typed("smaller", {
                                "boolean, boolean": function(x, y) {
                                    return x < y;
                                },
                                "number, number": function(x, y) {
                                    return x < y && !number_nearlyEqual(x, y, config.epsilon);
                                },
                                "BigNumber, BigNumber": function(x, y) {
                                    return x.lt(y) && !nearlyEqual_nearlyEqual(x, y, config.epsilon);
                                },
                                "Fraction, Fraction": function(x, y) {
                                    return -1 === x.compare(y);
                                },
                                "Complex, Complex": function(x, y) {
                                    throw new TypeError("No ordering relation is defined for complex numbers");
                                },
                                "Unit, Unit": function(x, y) {
                                    if (!x.equalBase(y)) throw new Error("Cannot compare units with different base");
                                    return this(x.value, y.value);
                                },
                                "SparseMatrix, SparseMatrix": function(x, y) {
                                    return algorithm07(x, y, this);
                                },
                                "SparseMatrix, DenseMatrix": function(x, y) {
                                    return algorithm03(y, x, this, !0);
                                },
                                "DenseMatrix, SparseMatrix": function(x, y) {
                                    return algorithm03(x, y, this, !1);
                                },
                                "DenseMatrix, DenseMatrix": function(x, y) {
                                    return algorithm13(x, y, this);
                                },
                                "Array, Array": function(x, y) {
                                    return this(matrix(x), matrix(y)).valueOf();
                                },
                                "Array, Matrix": function(x, y) {
                                    return this(matrix(x), y);
                                },
                                "Matrix, Array": function(x, y) {
                                    return this(x, matrix(y));
                                },
                                "SparseMatrix, any": function(x, y) {
                                    return algorithm12(x, y, this, !1);
                                },
                                "DenseMatrix, any": function(x, y) {
                                    return algorithm14(x, y, this, !1);
                                },
                                "any, SparseMatrix": function(x, y) {
                                    return algorithm12(y, x, this, !0);
                                },
                                "any, DenseMatrix": function(x, y) {
                                    return algorithm14(y, x, this, !0);
                                },
                                "Array, any": function(x, y) {
                                    return algorithm14(matrix(x), y, this, !1).valueOf();
                                },
                                "any, Array": function(x, y) {
                                    return algorithm14(matrix(y), x, this, !0).valueOf();
                                }
                            });
                        })
                    },
                    createFibonacciHeapClass: factory_factory("FibonacciHeap", [
                        "smaller",
                        "larger"
                    ], (_ref)=>{
                        var { smaller , larger  } = _ref, oneOverLogPhi = 1 / Math.log((1 + Math.sqrt(5)) / 2);
                        function FibonacciHeap() {
                            if (!(this instanceof FibonacciHeap)) throw new SyntaxError("Constructor must be called with the new operator");
                            this._minimum = null, this._size = 0;
                        }
                        function _cut(minimum, node, parent) {
                            node.left.right = node.right, node.right.left = node.left, parent.degree--, parent.child === node && (parent.child = node.right), 0 === parent.degree && (parent.child = null), node.left = minimum, node.right = minimum.right, minimum.right = node, node.right.left = node, node.parent = null, node.mark = !1;
                        }
                        function _cascadingCut(minimum, node) {
                            var parent = node.parent;
                            parent && (node.mark ? (_cut(minimum, node, parent), _cascadingCut(parent)) : node.mark = !0);
                        }
                        FibonacciHeap.prototype.type = "FibonacciHeap", FibonacciHeap.prototype.isFibonacciHeap = !0, FibonacciHeap.prototype.insert = function(key, value) {
                            var node = {
                                key,
                                value,
                                degree: 0
                            };
                            if (this._minimum) {
                                var minimum = this._minimum;
                                node.left = minimum, node.right = minimum.right, minimum.right = node, node.right.left = node, smaller(key, minimum.key) && (this._minimum = node);
                            } else node.left = node, node.right = node, this._minimum = node;
                            return this._size++, node;
                        }, FibonacciHeap.prototype.size = function() {
                            return this._size;
                        }, FibonacciHeap.prototype.clear = function() {
                            this._minimum = null, this._size = 0;
                        }, FibonacciHeap.prototype.isEmpty = function() {
                            return 0 === this._size;
                        }, FibonacciHeap.prototype.extractMinimum = function() {
                            var node = this._minimum;
                            if (null === node) return node;
                            for(var minimum = this._minimum, numberOfChildren = node.degree, x = node.child; numberOfChildren > 0;){
                                var tempRight = x.right;
                                x.left.right = x.right, x.right.left = x.left, x.left = minimum, x.right = minimum.right, minimum.right = x, x.right.left = x, x.parent = null, x = tempRight, numberOfChildren--;
                            }
                            return node.left.right = node.right, node.right.left = node.left, minimum = node === node.right ? null : function(minimum, size) {
                                var y, arraySize = Math.floor(Math.log(size) * oneOverLogPhi) + 1, array = new Array(arraySize), numRoots = 0, x = minimum;
                                if (x) for(numRoots++, x = x.right; x !== minimum;)numRoots++, x = x.right;
                                for(; numRoots > 0;){
                                    for(var d = x.degree, next = x.right; y = array[d];){
                                        if (larger(x.key, y.key)) {
                                            var temp = y;
                                            y = x, x = temp;
                                        }
                                        _linkNodes(y, x), array[d] = null, d++;
                                    }
                                    array[d] = x, x = next, numRoots--;
                                }
                                minimum = null;
                                for(var i = 0; i < arraySize; i++)(y = array[i]) && (minimum ? (y.left.right = y.right, y.right.left = y.left, y.left = minimum, y.right = minimum.right, minimum.right = y, y.right.left = y, smaller(y.key, minimum.key) && (minimum = y)) : minimum = y);
                                return minimum;
                            }(minimum = node.right, this._size), this._size--, this._minimum = minimum, node;
                        }, FibonacciHeap.prototype.remove = function(node) {
                            this._minimum = function(minimum, node, key) {
                                node.key = key;
                                var parent = node.parent;
                                parent && smaller(node.key, parent.key) && (_cut(minimum, node, parent), _cascadingCut(minimum, parent));
                                smaller(node.key, minimum.key) && (minimum = node);
                                return minimum;
                            }(this._minimum, node, -1), this.extractMinimum();
                        };
                        var _linkNodes = function(node, parent) {
                            node.left.right = node.right, node.right.left = node.left, node.parent = parent, parent.child ? (node.left = parent.child, node.right = parent.child.right, parent.child.right = node, node.right.left = node) : (parent.child = node, node.right = node, node.left = node), parent.degree++, node.mark = !1;
                        };
                        return FibonacciHeap;
                    }, {
                        isClass: !0
                    })
                }, createSpaClass = factory_factory("Spa", [
                    "addScalar",
                    "equalScalar",
                    "FibonacciHeap"
                ], (_ref)=>{
                    var { addScalar , equalScalar , FibonacciHeap  } = _ref;
                    function Spa() {
                        if (!(this instanceof Spa)) throw new SyntaxError("Constructor must be called with the new operator");
                        this._values = [], this._heap = new FibonacciHeap;
                    }
                    return Spa.prototype.type = "Spa", Spa.prototype.isSpa = !0, Spa.prototype.set = function(i, v) {
                        if (this._values[i]) this._values[i].value = v;
                        else {
                            var node = this._heap.insert(i, v);
                            this._values[i] = node;
                        }
                    }, Spa.prototype.get = function(i) {
                        var node = this._values[i];
                        return node ? node.value : 0;
                    }, Spa.prototype.accumulate = function(i, v) {
                        var node = this._values[i];
                        node ? node.value = addScalar(node.value, v) : (node = this._heap.insert(i, v), this._values[i] = node);
                    }, Spa.prototype.forEach = function(from, to, callback) {
                        var heap = this._heap, values = this._values, nodes = [], node = heap.extractMinimum();
                        for(node && nodes.push(node); node && node.key <= to;)node.key >= from && (equalScalar(node.value, 0) || callback(node.key, node.value, this)), (node = heap.extractMinimum()) && nodes.push(node);
                        for(var i = 0; i < nodes.length; i++){
                            var n = nodes[i];
                            values[(node = heap.insert(n.key, n.value)).key] = node;
                        }
                    }, Spa.prototype.swap = function(i, j) {
                        var nodei = this._values[i], nodej = this._values[j];
                        if (!nodei && nodej) nodei = this._heap.insert(i, nodej.value), this._heap.remove(nodej), this._values[i] = nodei, this._values[j] = void 0;
                        else if (nodei && !nodej) nodej = this._heap.insert(j, nodei.value), this._heap.remove(nodei), this._values[j] = nodej, this._values[i] = void 0;
                        else if (nodei && nodej) {
                            var v = nodei.value;
                            nodei.value = nodej.value, nodej.value = v;
                        }
                    }, Spa;
                }, {
                    isClass: !0
                }), SpaDependencies = {
                    FibonacciHeapDependencies,
                    addScalarDependencies,
                    equalScalarDependencies,
                    createSpaClass
                }, createLup = factory_factory("lup", [
                    "typed",
                    "matrix",
                    "abs",
                    "addScalar",
                    "divideScalar",
                    "multiplyScalar",
                    "subtract",
                    "larger",
                    "equalScalar",
                    "unaryMinus",
                    "DenseMatrix",
                    "SparseMatrix",
                    "Spa"
                ], (_ref)=>{
                    var { typed , matrix , abs , addScalar , divideScalar , multiplyScalar , subtract , larger , equalScalar , unaryMinus , DenseMatrix , SparseMatrix , Spa  } = _ref;
                    return typed("lup", {
                        DenseMatrix: function(m) {
                            return _denseLUP(m);
                        },
                        SparseMatrix: function(m) {
                            return _sparseLUP(m);
                        },
                        Array: function(a) {
                            var r = _denseLUP(matrix(a));
                            return {
                                L: r.L.valueOf(),
                                U: r.U.valueOf(),
                                p: r.p
                            };
                        }
                    });
                    function _denseLUP(m) {
                        var i, j, k, rows = m._size[0], columns = m._size[1], n = Math.min(rows, columns), data = clone(m._data), ldata = [], lsize = [
                            rows,
                            n
                        ], udata = [], usize = [
                            n,
                            columns
                        ], p = [];
                        for(i = 0; i < rows; i++)p[i] = i;
                        for(j = 0; j < columns; j++){
                            var _pi;
                            if (j > 0) for(i = 0; i < rows; i++){
                                var min = Math.min(i, j), s = 0;
                                for(k = 0; k < min; k++)s = addScalar(s, multiplyScalar(data[i][k], data[k][j]));
                                data[i][j] = subtract(data[i][j], s);
                            }
                            var pi = j, pabsv = 0, vjj = 0;
                            for(i = j; i < rows; i++){
                                var v = data[i][j], absv = abs(v);
                                larger(absv, pabsv) && (pi = i, pabsv = absv, vjj = v);
                            }
                            if (j !== pi && (p[j] = (_pi = p[pi], p[pi] = p[j], _pi), DenseMatrix._swapRows(j, pi, data)), j < rows) for(i = j + 1; i < rows; i++){
                                var vij = data[i][j];
                                equalScalar(vij, 0) || (data[i][j] = divideScalar(data[i][j], vjj));
                            }
                        }
                        for(j = 0; j < columns; j++)for(i = 0; i < rows; i++)0 === j && (i < columns && (udata[i] = []), ldata[i] = []), i < j ? (i < columns && (udata[i][j] = data[i][j]), j < rows && (ldata[i][j] = 0)) : i !== j ? (i < columns && (udata[i][j] = 0), j < rows && (ldata[i][j] = data[i][j])) : (i < columns && (udata[i][j] = data[i][j]), j < rows && (ldata[i][j] = 1));
                        var l = new DenseMatrix({
                            data: ldata,
                            size: lsize
                        }), u = new DenseMatrix({
                            data: udata,
                            size: usize
                        }), pv = [];
                        for(i = 0, n = p.length; i < n; i++)pv[p[i]] = i;
                        return {
                            L: l,
                            U: u,
                            p: pv,
                            toString: function() {
                                return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p;
                            }
                        };
                    }
                    function _sparseLUP(m) {
                        var i, j, k, rows = m._size[0], columns = m._size[1], n = Math.min(rows, columns), values = m._values, index = m._index, ptr = m._ptr, lvalues = [], lindex = [], lptr = [], lsize = [
                            rows,
                            n
                        ], uvalues = [], uindex = [], uptr = [], usize = [
                            n,
                            columns
                        ], pvCo = [], pvOc = [];
                        for(i = 0; i < rows; i++)pvCo[i] = i, pvOc[i] = i;
                        var _loop = function() {
                            var spa = new Spa;
                            j < rows && (lptr.push(lvalues.length), lvalues.push(1), lindex.push(j)), uptr.push(uvalues.length);
                            var k0 = ptr[j], k1 = ptr[j + 1];
                            for(k = k0; k < k1; k++)i = index[k], spa.set(pvCo[i], values[k]);
                            j > 0 && spa.forEach(0, j - 1, function(k, vkj) {
                                SparseMatrix._forEachRow(k, lvalues, lindex, lptr, function(i, vik) {
                                    i > k && spa.accumulate(i, unaryMinus(multiplyScalar(vik, vkj)));
                                });
                            });
                            var x, y, kx, ky, pi = j, vjj = spa.get(j), pabsv = abs(vjj);
                            spa.forEach(j + 1, rows - 1, function(x, v) {
                                var absv = abs(v);
                                larger(absv, pabsv) && (pi = x, pabsv = absv, vjj = v);
                            }), j !== pi && (SparseMatrix._swapRows(j, pi, lsize[1], lvalues, lindex, lptr), SparseMatrix._swapRows(j, pi, usize[1], uvalues, uindex, uptr), spa.swap(j, pi), y = pi, kx = pvOc[x = j], ky = pvOc[y], pvCo[kx] = y, pvCo[ky] = x, pvOc[x] = ky, pvOc[y] = kx), spa.forEach(0, rows - 1, function(x, v) {
                                x <= j ? (uvalues.push(v), uindex.push(x)) : (v = divideScalar(v, vjj), equalScalar(v, 0) || (lvalues.push(v), lindex.push(x)));
                            });
                        };
                        for(j = 0; j < columns; j++)_loop();
                        return uptr.push(uvalues.length), lptr.push(lvalues.length), {
                            L: new SparseMatrix({
                                values: lvalues,
                                index: lindex,
                                ptr: lptr,
                                size: lsize
                            }),
                            U: new SparseMatrix({
                                values: uvalues,
                                index: uindex,
                                ptr: uptr,
                                size: usize
                            }),
                            p: pvCo,
                            toString: function() {
                                return "L: " + this.L.toString() + "\nU: " + this.U.toString() + "\nP: " + this.p;
                            }
                        };
                    }
                }), divideDependencies = {
                    divideScalarDependencies,
                    equalScalarDependencies,
                    invDependencies: {
                        absDependencies,
                        addScalarDependencies,
                        detDependencies: {
                            lupDependencies: {
                                DenseMatrixDependencies,
                                SpaDependencies,
                                SparseMatrixDependencies,
                                absDependencies,
                                addScalarDependencies,
                                divideScalarDependencies,
                                equalScalarDependencies,
                                largerDependencies,
                                matrixDependencies,
                                multiplyScalarDependencies,
                                subtractDependencies,
                                typedDependencies,
                                unaryMinusDependencies,
                                createLup
                            },
                            matrixDependencies,
                            multiplyDependencies,
                            subtractDependencies,
                            typedDependencies,
                            unaryMinusDependencies,
                            createDet: factory_factory("det", [
                                "typed",
                                "matrix",
                                "subtract",
                                "multiply",
                                "unaryMinus",
                                "lup"
                            ], (_ref)=>{
                                var { typed , matrix , subtract , multiply , unaryMinus , lup  } = _ref;
                                return typed("det", {
                                    any: function(x) {
                                        return clone(x);
                                    },
                                    "Array | Matrix": function(x) {
                                        var size;
                                        switch((size = is_isMatrix(x) ? x.size() : Array.isArray(x) ? (x = matrix(x)).size() : []).length){
                                            case 0:
                                                return clone(x);
                                            case 1:
                                                if (1 === size[0]) return clone(x.valueOf()[0]);
                                                throw new RangeError("Matrix must be square (size: " + string_format(size) + ")");
                                            case 2:
                                                var rows = size[0], cols = size[1];
                                                if (rows === cols) return function(matrix, rows, cols) {
                                                    if (1 === rows) return clone(matrix[0][0]);
                                                    if (2 === rows) return subtract(multiply(matrix[0][0], matrix[1][1]), multiply(matrix[1][0], matrix[0][1]));
                                                    for(var decomp = lup(matrix), det = decomp.U[0][0], _i = 1; _i < rows; _i++)det = multiply(det, decomp.U[_i][_i]);
                                                    for(var evenCycles = 0, i = 0, visited = [];;){
                                                        for(; visited[i];)i++;
                                                        if (i >= rows) break;
                                                        for(var j = i, cycleLen = 0; !visited[decomp.p[j]];)visited[decomp.p[j]] = !0, j = decomp.p[j], cycleLen++;
                                                        cycleLen % 2 == 0 && evenCycles++;
                                                    }
                                                    return evenCycles % 2 == 0 ? det : unaryMinus(det);
                                                }(x.clone().valueOf(), rows);
                                                throw new RangeError("Matrix must be square (size: " + string_format(size) + ")");
                                            default:
                                                throw new RangeError("Matrix must be two dimensional (size: " + string_format(size) + ")");
                                        }
                                    }
                                });
                            })
                        },
                        divideScalarDependencies,
                        identityDependencies,
                        matrixDependencies,
                        multiplyDependencies,
                        typedDependencies,
                        unaryMinusDependencies,
                        createInv: factory_factory("inv", [
                            "typed",
                            "matrix",
                            "divideScalar",
                            "addScalar",
                            "multiply",
                            "unaryMinus",
                            "det",
                            "identity",
                            "abs"
                        ], (_ref)=>{
                            var { typed , matrix , divideScalar , addScalar , multiply , unaryMinus , det , identity , abs  } = _ref;
                            return typed("inv", {
                                "Array | Matrix": function(x) {
                                    var size = is_isMatrix(x) ? x.size() : array_arraySize(x);
                                    switch(size.length){
                                        case 1:
                                            if (1 === size[0]) return is_isMatrix(x) ? matrix([
                                                divideScalar(1, x.valueOf()[0])
                                            ]) : [
                                                divideScalar(1, x[0])
                                            ];
                                            throw new RangeError("Matrix must be square (size: " + string_format(size) + ")");
                                        case 2:
                                            var rows = size[0], cols = size[1];
                                            if (rows === cols) return is_isMatrix(x) ? matrix(_inv(x.valueOf(), rows, cols), x.storage()) : _inv(x, rows, cols);
                                            throw new RangeError("Matrix must be square (size: " + string_format(size) + ")");
                                        default:
                                            throw new RangeError("Matrix must be two dimensional (size: " + string_format(size) + ")");
                                    }
                                },
                                any: function(x) {
                                    return divideScalar(1, x);
                                }
                            });
                            function _inv(mat, rows, cols) {
                                var r, s, f, value, temp;
                                if (1 === rows) {
                                    if (0 === (value = mat[0][0])) throw Error("Cannot calculate inverse, determinant is zero");
                                    return [
                                        [
                                            divideScalar(1, value)
                                        ]
                                    ];
                                }
                                if (2 === rows) {
                                    var d = det(mat);
                                    if (0 === d) throw Error("Cannot calculate inverse, determinant is zero");
                                    return [
                                        [
                                            divideScalar(mat[1][1], d),
                                            divideScalar(unaryMinus(mat[0][1]), d)
                                        ],
                                        [
                                            divideScalar(unaryMinus(mat[1][0]), d),
                                            divideScalar(mat[0][0], d)
                                        ]
                                    ];
                                }
                                var A = mat.concat();
                                for(r = 0; r < rows; r++)A[r] = A[r].concat();
                                for(var B = identity(rows).valueOf(), c = 0; c < cols; c++){
                                    var ABig = abs(A[c][c]), rBig = c;
                                    for(r = c + 1; r < rows;)abs(A[r][c]) > ABig && (ABig = abs(A[r][c]), rBig = r), r++;
                                    if (0 === ABig) throw Error("Cannot calculate inverse, determinant is zero");
                                    (r = rBig) !== c && (temp = A[c], A[c] = A[r], A[r] = temp, temp = B[c], B[c] = B[r], B[r] = temp);
                                    var Ac = A[c], Bc = B[c];
                                    for(r = 0; r < rows; r++){
                                        var Ar = A[r], Br = B[r];
                                        if (r !== c) {
                                            if (0 !== Ar[c]) {
                                                for(f = divideScalar(unaryMinus(Ar[c]), Ac[c]), s = c; s < cols; s++)Ar[s] = addScalar(Ar[s], multiply(f, Ac[s]));
                                                for(s = 0; s < cols; s++)Br[s] = addScalar(Br[s], multiply(f, Bc[s]));
                                            }
                                        } else {
                                            for(f = Ac[c], s = c; s < cols; s++)Ar[s] = divideScalar(Ar[s], f);
                                            for(s = 0; s < cols; s++)Br[s] = divideScalar(Br[s], f);
                                        }
                                    }
                                }
                                return B;
                            }
                        })
                    },
                    matrixDependencies,
                    multiplyDependencies,
                    typedDependencies,
                    createDivide: factory_factory("divide", [
                        "typed",
                        "matrix",
                        "multiply",
                        "equalScalar",
                        "divideScalar",
                        "inv"
                    ], (_ref)=>{
                        var { typed , matrix , multiply , equalScalar , divideScalar , inv  } = _ref, algorithm11 = createAlgorithm11({
                            typed,
                            equalScalar
                        }), algorithm14 = createAlgorithm14({
                            typed
                        });
                        return typed("divide", extend({
                            "Array | Matrix, Array | Matrix": function(x, y) {
                                return multiply(x, inv(y));
                            },
                            "DenseMatrix, any": function(x, y) {
                                return algorithm14(x, y, divideScalar, !1);
                            },
                            "SparseMatrix, any": function(x, y) {
                                return algorithm11(x, y, divideScalar, !1);
                            },
                            "Array, any": function(x, y) {
                                return algorithm14(matrix(x), y, divideScalar, !1).valueOf();
                            },
                            "any, Array | Matrix": function(x, y) {
                                return multiply(x, inv(y));
                            }
                        }, divideScalar.signatures));
                    })
                }, createAlgorithm02 = factory_factory("algorithm02", [
                    "typed",
                    "equalScalar"
                ], (_ref)=>{
                    var { typed , equalScalar  } = _ref;
                    return function(denseMatrix, sparseMatrix, callback, inverse) {
                        var adata = denseMatrix._data, asize = denseMatrix._size, adt = denseMatrix._datatype, bvalues = sparseMatrix._values, bindex = sparseMatrix._index, bptr = sparseMatrix._ptr, bsize = sparseMatrix._size, bdt = sparseMatrix._datatype;
                        if (asize.length !== bsize.length) throw new DimensionError(asize.length, bsize.length);
                        if (asize[0] !== bsize[0] || asize[1] !== bsize[1]) throw new RangeError("Dimension mismatch. Matrix A (" + asize + ") must match Matrix B (" + bsize + ")");
                        if (!bvalues) throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");
                        var dt, rows = asize[0], columns = asize[1], eq = equalScalar, zero = 0, cf = callback;
                        "string" == typeof adt && adt === bdt && (dt = adt, eq = typed.find(equalScalar, [
                            dt,
                            dt
                        ]), zero = typed.convert(0, dt), cf = typed.find(callback, [
                            dt,
                            dt
                        ]));
                        for(var cvalues = [], cindex = [], cptr = [], j = 0; j < columns; j++){
                            cptr[j] = cindex.length;
                            for(var k0 = bptr[j], k1 = bptr[j + 1], k = k0; k < k1; k++){
                                var i = bindex[k], cij = inverse ? cf(bvalues[k], adata[i][j]) : cf(adata[i][j], bvalues[k]);
                                eq(cij, zero) || (cindex.push(i), cvalues.push(cij));
                            }
                        }
                        return cptr[columns] = cindex.length, sparseMatrix.createSparseMatrix({
                            values: cvalues,
                            index: cindex,
                            ptr: cptr,
                            size: [
                                rows,
                                columns
                            ],
                            datatype: dt
                        });
                    };
                }), modDependencies = {
                    DenseMatrixDependencies,
                    equalScalarDependencies,
                    matrixDependencies,
                    typedDependencies,
                    createMod: factory_factory("mod", [
                        "typed",
                        "matrix",
                        "equalScalar",
                        "DenseMatrix"
                    ], (_ref)=>{
                        var { typed , matrix , equalScalar , DenseMatrix  } = _ref, algorithm02 = createAlgorithm02({
                            typed,
                            equalScalar
                        }), algorithm03 = createAlgorithm03({
                            typed
                        }), algorithm05 = createAlgorithm05({
                            typed,
                            equalScalar
                        }), algorithm11 = createAlgorithm11({
                            typed,
                            equalScalar
                        }), algorithm12 = createAlgorithm12({
                            typed,
                            DenseMatrix
                        }), algorithm13 = createAlgorithm13({
                            typed
                        }), algorithm14 = createAlgorithm14({
                            typed
                        });
                        return typed("mod", {
                            "number, number": modNumber,
                            "BigNumber, BigNumber": function(x, y) {
                                if (y.isNeg()) throw new Error("Cannot calculate mod for a negative divisor");
                                return y.isZero() ? x : x.mod(y);
                            },
                            "Fraction, Fraction": function(x, y) {
                                if (y.compare(0) < 0) throw new Error("Cannot calculate mod for a negative divisor");
                                return x.compare(0) >= 0 ? x.mod(y) : x.mod(y).add(y).mod(y);
                            },
                            "SparseMatrix, SparseMatrix": function(x, y) {
                                return algorithm05(x, y, this, !1);
                            },
                            "SparseMatrix, DenseMatrix": function(x, y) {
                                return algorithm02(y, x, this, !0);
                            },
                            "DenseMatrix, SparseMatrix": function(x, y) {
                                return algorithm03(x, y, this, !1);
                            },
                            "DenseMatrix, DenseMatrix": function(x, y) {
                                return algorithm13(x, y, this);
                            },
                            "Array, Array": function(x, y) {
                                return this(matrix(x), matrix(y)).valueOf();
                            },
                            "Array, Matrix": function(x, y) {
                                return this(matrix(x), y);
                            },
                            "Matrix, Array": function(x, y) {
                                return this(x, matrix(y));
                            },
                            "SparseMatrix, any": function(x, y) {
                                return algorithm11(x, y, this, !1);
                            },
                            "DenseMatrix, any": function(x, y) {
                                return algorithm14(x, y, this, !1);
                            },
                            "any, SparseMatrix": function(x, y) {
                                return algorithm12(y, x, this, !0);
                            },
                            "any, DenseMatrix": function(x, y) {
                                return algorithm14(y, x, this, !0);
                            },
                            "Array, any": function(x, y) {
                                return algorithm14(matrix(x), y, this, !1).valueOf();
                            },
                            "any, Array": function(x, y) {
                                return algorithm14(matrix(y), x, this, !0).valueOf();
                            }
                        });
                    })
                };
                const { evaluate  } = function create_create(factories, config) {
                    var configInternal = _extends({}, DEFAULT_CONFIG, config);
                    if ("function" != typeof Object.create) throw new Error("ES5 not supported by this JavaScript engine. Please load the es5-shim and es5-sham library for compatibility.");
                    var obj, emitter, math = (obj = {
                        isNumber,
                        isComplex,
                        isBigNumber,
                        isFraction,
                        isUnit,
                        isString: is_isString,
                        isArray,
                        isMatrix: is_isMatrix,
                        isCollection: is_isCollection,
                        isDenseMatrix,
                        isSparseMatrix,
                        isRange,
                        isIndex,
                        isBoolean,
                        isResultSet,
                        isHelp,
                        isFunction,
                        isDate,
                        isRegExp,
                        isObject,
                        isNull,
                        isUndefined,
                        isAccessorNode,
                        isArrayNode,
                        isAssignmentNode,
                        isBlockNode,
                        isConditionalNode,
                        isConstantNode,
                        isFunctionAssignmentNode,
                        isFunctionNode,
                        isIndexNode,
                        isNode,
                        isObjectNode,
                        isOperatorNode,
                        isParenthesisNode,
                        isRangeNode,
                        isSymbolNode,
                        isChain
                    }, emitter = new tiny_emitter, obj.on = emitter.on.bind(emitter), obj.off = emitter.off.bind(emitter), obj.once = emitter.once.bind(emitter), obj.emit = emitter.emit.bind(emitter), obj);
                    math.config = configFactory(configInternal, math.emit), math.expression = {
                        transform: {},
                        mathWithTransform: {
                            config: math.config
                        }
                    };
                    var importedFactories = {}, internalImport = importFactory(function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                        return math.typed.apply(math.typed, args);
                    }, 0, math, importedFactories);
                    return math.import = internalImport, math.on("config", ()=>{
                        values(importedFactories).forEach((factory)=>{
                            factory && factory.meta && factory.meta.recreateOnConfigChange && internalImport(factory, {
                                override: !0
                            });
                        });
                    }), math.create = create_create.bind(null, factories), math.factory = factory_factory, math.import(values(deepFlatten(factories))), math.ArgumentsError = ArgumentsError, math.DimensionError = DimensionError, math.IndexError = IndexError_IndexError, math;
                }({
                    evaluateDependencies,
                    addDependencies,
                    divideDependencies,
                    multiplyDependencies,
                    modDependencies
                }), round = (val, precision = 2)=>{
                    const hunderd = Math.pow(10, precision);
                    return Math.round(val * hunderd) / hunderd;
                }, getCalculatedValue = (value, roundPrecision = 2)=>{
                    const input = ((input)=>input.replace(/[^0-9,\-+/*.%]/gi, "").replace(/,/gi, "."))(value);
                    return 0 === input.length || null === input ? null : round(evaluate(input), roundPrecision);
                };
                function getEditorResponseData(response, parse = !0) {
                    return Object.assign(Object.assign({}, response), {
                        parsedData: response.success && response.data ? parse ? JSON.parse(response.data) : response.data : null
                    });
                }
                var _FrameController_editorAPI, __awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, __classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, __classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class FrameController {
                    constructor(editorAPI){
                        _FrameController_editorAPI.set(this, void 0), this.getFrames = ()=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getFrames().then((result)=>getEditorResponseData(result));
                            }), this.getSelectedFrames = ()=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getSelectedFrames().then((result)=>getEditorResponseData(result));
                            }), this.getFramesByPageId = (pageId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getFramesByPageId(pageId).then((result)=>getEditorResponseData(result));
                            }), this.getFrameByName = (name)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getFrameByName(name).then((result)=>getEditorResponseData(result));
                            }), this.getFrameById = (id)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getFrameById(id).then((result)=>getEditorResponseData(result));
                            }), this.getFramePropertiesOnSelectedLayout = ()=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getFramePropertiesOnSelectedLayout().then((result)=>getEditorResponseData(result));
                            }), this.getFramePropertiesByFrameId = (frameId, layoutId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getFramePropertiesByFrameId(frameId, layoutId).then((result)=>getEditorResponseData(result));
                            }), this.getFramesProperties = (layoutId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).getFramesProperties(layoutId).then((result)=>getEditorResponseData(result));
                            }), this.resetFrameSize = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).resetFrameSize(frameId).then((result)=>getEditorResponseData(result));
                            }), this.selectFrame = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).selectFrames([
                                    frameId
                                ]).then((result)=>getEditorResponseData(result));
                            }), this.selectMultipleFrames = (frameIds)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).selectFrames(frameIds).then((result)=>getEditorResponseData(result));
                            }), this.setFrameHeight = (frameId, value)=>__awaiter(this, void 0, void 0, function*() {
                                const res = yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f"), calc = getCalculatedValue(value);
                                return null === calc || calc === 1 / 0 ? null : res.setFrameHeight(frameId, parseFloat(calc.toString())).then((result)=>getEditorResponseData(result));
                            }), this.setFrameRotation = (frameId, value)=>__awaiter(this, void 0, void 0, function*() {
                                const res = yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f"), calc = getCalculatedValue(value);
                                return null === calc || calc === 1 / 0 ? null : res.setFrameRotation(frameId, parseFloat(calc.toString())).then((result)=>getEditorResponseData(result));
                            }), this.setFrameWidth = (frameId, value)=>__awaiter(this, void 0, void 0, function*() {
                                const res = yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f"), calc = getCalculatedValue(value);
                                return null === calc || calc === 1 / 0 ? null : res.setFrameWidth(frameId, parseFloat(calc.toString())).then((result)=>getEditorResponseData(result));
                            }), this.setFrameX = (frameId, value)=>__awaiter(this, void 0, void 0, function*() {
                                const res = yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f"), calc = getCalculatedValue(value);
                                return null === calc || calc === 1 / 0 ? null : res.setFrameX(frameId, parseFloat(calc.toString())).then((result)=>getEditorResponseData(result));
                            }), this.setFrameY = (frameId, value)=>__awaiter(this, void 0, void 0, function*() {
                                const res = yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f"), calc = getCalculatedValue(value);
                                return null === calc || calc === 1 / 0 ? null : res.setFrameY(frameId, parseFloat(calc.toString())).then((result)=>getEditorResponseData(result));
                            }), this.setFrameName = (frameId, frameName)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).renameFrame(frameId, frameName).then((result)=>getEditorResponseData(result));
                            }), this.resetFrame = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).resetFrame(frameId).then((result)=>getEditorResponseData(result));
                            }), this.resetFrameX = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).resetFrameX(frameId).then((result)=>getEditorResponseData(result));
                            }), this.resetFrameY = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).resetFrameY(frameId).then((result)=>getEditorResponseData(result));
                            }), this.resetFrameRotation = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).resetFrameRotation(frameId).then((result)=>getEditorResponseData(result));
                            }), this.resetFrameWidth = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).resetFrameWidth(frameId).then((result)=>getEditorResponseData(result));
                            }), this.resetFrameHeight = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).resetFrameHeight(frameId).then((result)=>getEditorResponseData(result));
                            }), this.setFrameVisibility = (frameId, value)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).setFrameVisibility(frameId, value).then((result)=>getEditorResponseData(result));
                            }), this.removeFrame = (frameId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).removeFrame(frameId).then((result)=>getEditorResponseData(result));
                            }), this.addFrame = (frameType, x, y, width, height)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).addFrame(frameType, x, y, width, height).then((result)=>getEditorResponseData(result));
                            }), this.setImageFromConnector = (imageFrameId, connectorId, resourceId)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).assignImage(imageFrameId, connectorId, resourceId).then((result)=>getEditorResponseData(result));
                            }), this.setImageFrameFitMode = (imageFrameId, fitMode)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).setFitMode(imageFrameId, fitMode).then((result)=>getEditorResponseData(result));
                            }), this.setVerticalAlignment = (frameId, verticalAlign)=>__awaiter(this, void 0, void 0, function*() {
                                return (yield __classPrivateFieldGet(this, _FrameController_editorAPI, "f")).setVerticalAlignment(frameId, verticalAlign).then((result)=>getEditorResponseData(result));
                            }), __classPrivateFieldSet(this, _FrameController_editorAPI, editorAPI, "f");
                    }
                }
                _FrameController_editorAPI = new WeakMap;
                var _AnimationController_editorAPI, AnimationController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, AnimationController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, AnimationController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class AnimationController {
                    constructor(children){
                        _AnimationController_editorAPI.set(this, void 0), this.getAnimationsOnSelectedLayout = ()=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).getAnimationsOnSelectedLayout().then((result)=>getEditorResponseData(result));
                            }), this.getAnimationByFrameId = (frameId, layoutId)=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).getAnimationByFrameId(frameId, layoutId).then((result)=>getEditorResponseData(result));
                            }), this.getAnimationsByLayoutId = (layoutId)=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).getAnimationsByLayoutId(layoutId).then((result)=>getEditorResponseData(result));
                            }), this.setFrameAnimation = (animation)=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).setFrameAnimation(JSON.stringify(animation)).then((result)=>getEditorResponseData(Object.assign(Object.assign({}, result), {
                                        data: JSON.stringify(animation)
                                    })));
                            }), this.playAnimation = ()=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).playAnimation().then((result)=>getEditorResponseData(result));
                            }), this.pauseAnimation = ()=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).pauseAnimation().then((result)=>getEditorResponseData(result));
                            }), this.setScrubberPosition = (timeInMS)=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).setScrubberPosition(timeInMS);
                            }), this.setAnimationDuration = (timeInMS)=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).setAnimationDuration(timeInMS).then((result)=>getEditorResponseData(result));
                            }), this.resetFrameAnimation = (frameId)=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).resetFrameAnimation(frameId);
                            }), this.resetAnimation = ()=>AnimationController_awaiter(this, void 0, void 0, function*() {
                                return (yield AnimationController_classPrivateFieldGet(this, _AnimationController_editorAPI, "f")).resetAnimation();
                            }), AnimationController_classPrivateFieldSet(this, _AnimationController_editorAPI, children, "f");
                    }
                }
                _AnimationController_editorAPI = new WeakMap;
                var _LayoutController_editorAPI, LayoutController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, LayoutController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, LayoutController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class LayoutController {
                    constructor(editorAPI){
                        _LayoutController_editorAPI.set(this, void 0), this.getLayouts = ()=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).getLayouts().then((result)=>getEditorResponseData(result));
                            }), this.getLayoutById = (id)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).getLayoutById(id).then((result)=>getEditorResponseData(result));
                            }), this.getLayoutByName = (name)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).getLayoutByName(name).then((result)=>getEditorResponseData(result));
                            }), this.getSelectedLayout = ()=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).getSelectedLayout().then((result)=>getEditorResponseData(result));
                            }), this.removeLayout = (layoutId)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).removeLayout(layoutId).then((result)=>getEditorResponseData(result));
                            }), this.addLayout = (parentId)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).addLayout(parentId).then((result)=>getEditorResponseData(result));
                            }), this.setLayoutName = (layoutId, layoutName)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).renameLayout(layoutId, layoutName).then((result)=>getEditorResponseData(result));
                            }), this.selectLayout = (layoutId)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).selectLayout(layoutId).then((result)=>getEditorResponseData(result));
                            }), this.duplicateLayout = (layoutId)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).duplicateLayout(layoutId).then((result)=>getEditorResponseData(result));
                            }), this.resetLayout = (layoutId)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).resetLayout(layoutId).then((result)=>getEditorResponseData(result));
                            }), this.setLayoutHeight = (layoutId, value)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                const res = yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f"), calc = getCalculatedValue(value);
                                return null === calc || calc === 1 / 0 ? null : res.setLayoutHeight(layoutId, parseFloat(calc.toString())).then((result)=>getEditorResponseData(result));
                            }), this.setLayoutWidth = (layoutId, value)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                const res = yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f"), calc = getCalculatedValue(value);
                                return null === calc || calc === 1 / 0 ? null : res.setLayoutWidth(layoutId, parseFloat(calc.toString())).then((result)=>getEditorResponseData(result));
                            }), this.resetLayoutHeight = (layoutId)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).resetLayoutHeight(layoutId).then((result)=>getEditorResponseData(result));
                            }), this.resetLayoutWidth = (layoutId)=>LayoutController_awaiter(this, void 0, void 0, function*() {
                                return (yield LayoutController_classPrivateFieldGet(this, _LayoutController_editorAPI, "f")).resetLayoutWidth(layoutId).then((result)=>getEditorResponseData(result));
                            }), LayoutController_classPrivateFieldSet(this, _LayoutController_editorAPI, editorAPI, "f");
                    }
                }
                _LayoutController_editorAPI = new WeakMap;
                var _PageController_editorAPI, FrameProperyNames, LayoutProperyNames, renderURLs, ToolType, DownloadFormats, PageController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, PageController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, PageController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class PageController {
                    constructor(editorAPI){
                        _PageController_editorAPI.set(this, void 0), this.getPages = ()=>PageController_awaiter(this, void 0, void 0, function*() {
                                return (yield PageController_classPrivateFieldGet(this, _PageController_editorAPI, "f")).getPages().then((result)=>getEditorResponseData(result));
                            }), this.getPageById = (pageId)=>PageController_awaiter(this, void 0, void 0, function*() {
                                return (yield PageController_classPrivateFieldGet(this, _PageController_editorAPI, "f")).getPageById(pageId).then((result)=>getEditorResponseData(result));
                            }), PageController_classPrivateFieldSet(this, _PageController_editorAPI, editorAPI, "f");
                    }
                }
                _PageController_editorAPI = new WeakMap;
                class UtilsController {
                    constructor(){
                        this.calculateFromString = (val, precision)=>getEditorResponseData({
                                data: String(getCalculatedValue(val, precision)),
                                success: !0,
                                status: 200,
                                parsedData: null
                            }), this.round = (val, precision)=>getEditorResponseData({
                                data: String(round(val, precision)),
                                success: !0,
                                status: 200,
                                parsedData: null
                            });
                    }
                }
                class SubscriberController {
                    constructor(config){
                        this.onAnimationChanged = (animation)=>{
                            const callBack = this.config.onFrameAnimationsChanged;
                            callBack && callBack(JSON.parse(animation));
                        }, this.onAnimationPlaybackChanged = (animationPlaybackState)=>{
                            const callBack = this.config.onScrubberPositionChanged;
                            callBack && callBack(JSON.parse(animationPlaybackState));
                        }, this.onSelectedLayoutPropertiesChanged = (properties)=>{
                            const callBack = this.config.onSelectedLayoutPropertiesChanged;
                            callBack && callBack(JSON.parse(properties));
                        }, this.onSelectedFrameLayoutChanged = (frame)=>{
                            const callBack = this.config.onSelectedFrameLayoutChanged;
                            callBack && callBack(JSON.parse(frame));
                        }, this.onSelectedFrameContentChanged = (frame)=>{
                            const callBack = this.config.onSelectedFrameContentChanged;
                            callBack && callBack(JSON.parse(frame));
                        }, this.onStateChanged = (document1)=>{
                            const callBack = this.config.onStateChanged;
                            callBack && callBack(JSON.parse(document1));
                        }, this.onPageSelectionChanged = ()=>{
                            const callBack = this.config.onPageSelectionChanged;
                            callBack && callBack();
                        }, this.onVariableListChanged = (variablesJson)=>{
                            const callBack = this.config.onVariableListChanged;
                            callBack && callBack(JSON.parse(variablesJson));
                        }, this.onSelectedToolChanged = (tool)=>{
                            const callBack = this.config.onSelectedToolChanged;
                            callBack && callBack(tool);
                        }, this.onUndoStateChanged = (undoState)=>{
                            const callBack = this.config.onUndoStackStateChanged;
                            callBack && callBack(JSON.parse(undoState));
                        }, this.onSelectedLayoutFramesChanged = (frames)=>{
                            const callBack = this.config.onSelectedLayoutFramesChanged;
                            callBack && callBack(JSON.parse(frames));
                        }, this.onSelectedTextStyleChanged = (styles)=>{
                            const callBack = this.config.onSelectedTextStyleChanged;
                            callBack && callBack(JSON.parse(styles));
                        }, this.onColorsChanged = (colors)=>{
                            const callBack = this.config.onColorsChanged;
                            callBack && callBack(JSON.parse(colors));
                        }, this.onParagraphStylesChanged = (paragraphStyles)=>{
                            const callBack = this.config.onParagraphStylesChanged;
                            callBack && callBack(JSON.parse(paragraphStyles));
                        }, this.onCharacterStylesChanged = (characterStyles)=>{
                            const callBack = this.config.onCharacterStylesChanged;
                            callBack && callBack(JSON.parse(characterStyles));
                        }, this.onFontsChanged = (fonts)=>{
                            const callBack = this.config.onFontsChanged;
                            callBack && callBack(JSON.parse(fonts));
                        }, this.onSelectedLayoutIdChanged = (layoutId)=>{
                            const callBack = this.config.onSelectedLayoutIdChanged;
                            callBack && callBack(layoutId);
                        }, this.onLayoutsChanged = (layouts)=>{
                            const callBack = this.config.onLayoutsChanged;
                            callBack && callBack(JSON.parse(layouts));
                        }, this.config = config;
                    }
                }
                !function(FrameProperyNames) {
                    FrameProperyNames.FRAME_X = "frameX", FrameProperyNames.FRAME_Y = "frameY", FrameProperyNames.WIDTH = "width", FrameProperyNames.HEIGHT = "height", FrameProperyNames.FRAME_ROTATION = "frameRotation";
                }(FrameProperyNames || (FrameProperyNames = {})), function(LayoutProperyNames) {
                    LayoutProperyNames.LAYOUT_HEIGHT = "layoutHeight", LayoutProperyNames.LAYOUT_WIDTH = "layoutWidth";
                }(LayoutProperyNames || (LayoutProperyNames = {})), function(renderURLs) {
                    renderURLs.BASE_URL = "https://rendering.chili-publish-sandbox.online";
                }(renderURLs || (renderURLs = {})), function(ToolType) {
                    ToolType.SELECT = "select", ToolType.ZOOM = "zoom", ToolType.HAND = "hand", ToolType.IMAGE_FRAME = "imageFrame", ToolType.TEXT_FRAME = "textFrame";
                }(ToolType || (ToolType = {})), function(DownloadFormats) {
                    DownloadFormats.MP4 = "mp4", DownloadFormats.GIF = "gif";
                }(DownloadFormats || (DownloadFormats = {}));
                var _DocumentController_editorAPI, DocumentController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, DocumentController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, DocumentController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class DocumentController {
                    constructor(editorAPI){
                        _DocumentController_editorAPI.set(this, void 0), this.getCurrentDocumentState = ()=>DocumentController_awaiter(this, void 0, void 0, function*() {
                                return (yield DocumentController_classPrivateFieldGet(this, _DocumentController_editorAPI, "f")).getCurrentDocumentState().then((result)=>getEditorResponseData(result));
                            }), this.loadDocument = (doc)=>DocumentController_awaiter(this, void 0, void 0, function*() {
                                const res = yield DocumentController_classPrivateFieldGet(this, _DocumentController_editorAPI, "f");
                                return "string" == typeof doc ? res.loadDocument(doc) : res.loadDocument(JSON.stringify(doc)).then((result)=>getEditorResponseData(result));
                            }), this.getDownloadLink = (format, layoutId)=>DocumentController_awaiter(this, void 0, void 0, function*() {
                                var _a, _b, _c;
                                let error = null, PREPARE_DOWNLOAD_URL = null, DOWNLOAD_URL = "";
                                const documentResponse = yield this.getCurrentDocumentState(), FETCH_URL = ((format, layoutId)=>`${renderURLs.BASE_URL}/rendering?outputType=${format}&fps=30&layoutId=${null != layoutId ? layoutId : 0}&pixelRatio=1&encoding=rawRgba&socket=false`)(format, layoutId);
                                try {
                                    const response = yield fetch(FETCH_URL, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: null !== (_a = documentResponse.data) && void 0 !== _a ? _a : null
                                    }).then((data)=>data.json()).catch((err)=>(error = err.code ? {
                                            code: err.code,
                                            error: err.message || err
                                        } : {
                                            code: 400,
                                            error: err.message || err
                                        }, error));
                                    if ((null == response ? void 0 : response.error) || error) return getEditorResponseData({
                                        success: !1,
                                        data: DOWNLOAD_URL,
                                        error,
                                        status: response.status,
                                        parsedData: null
                                    }, !1);
                                    PREPARE_DOWNLOAD_URL = (null == response ? void 0 : response.resultUrl) ? renderURLs.BASE_URL + (null == response ? void 0 : response.resultUrl) : null, DOWNLOAD_URL = (null == response ? void 0 : response.downloadUrl) ? renderURLs.BASE_URL + (null == response ? void 0 : response.downloadUrl) : "";
                                    let isFileDownloadable = error;
                                    try {
                                        isFileDownloadable = yield this.startPollingOnEndpoint(PREPARE_DOWNLOAD_URL);
                                    } catch (err) {
                                        error = err;
                                    }
                                    return !0 !== isFileDownloadable && (error = isFileDownloadable), getEditorResponseData(error ? {
                                        success: !1,
                                        data: "",
                                        error,
                                        status: null !== (_b = null == error ? void 0 : error.code) && void 0 !== _b ? _b : 400,
                                        parsedData: null
                                    } : {
                                        success: !0,
                                        status: 200,
                                        data: DOWNLOAD_URL,
                                        parsedData: null
                                    }, !1);
                                } catch (err1) {
                                    return error = err1, getEditorResponseData({
                                        success: !1,
                                        data: DOWNLOAD_URL,
                                        error,
                                        status: null !== (_c = null == error ? void 0 : error.code) && void 0 !== _c ? _c : 400,
                                        parsedData: null
                                    }, !1);
                                }
                            }), this.startPollingOnEndpoint = (endpoint)=>DocumentController_awaiter(this, void 0, void 0, function*() {
                                try {
                                    const response = yield fetch(endpoint).then((data)=>data).catch((err)=>err);
                                    return 202 !== (null == response ? void 0 : response.status) || (yield new Promise((resolve)=>setTimeout(resolve, 2e3)), yield this.startPollingOnEndpoint(endpoint));
                                } catch (err) {
                                    return err;
                                }
                            }), DocumentController_classPrivateFieldSet(this, _DocumentController_editorAPI, editorAPI, "f");
                    }
                }
                _DocumentController_editorAPI = new WeakMap;
                var _DebugController_editorAPI, DebugController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, DebugController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, DebugController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class DebugController {
                    constructor(editorAPI){
                        _DebugController_editorAPI.set(this, void 0), this.getLogs = ()=>DebugController_awaiter(this, void 0, void 0, function*() {
                                return (yield DebugController_classPrivateFieldGet(this, _DebugController_editorAPI, "f")).getLogs().then((result)=>getEditorResponseData(result));
                            }), this.toggleDebugPanel = ()=>DebugController_awaiter(this, void 0, void 0, function*() {
                                return (yield DebugController_classPrivateFieldGet(this, _DebugController_editorAPI, "f")).toggleDebugPanel().then((result)=>getEditorResponseData(result));
                            }), this.enableDebug = ()=>DebugController_awaiter(this, void 0, void 0, function*() {
                                return (yield DebugController_classPrivateFieldGet(this, _DebugController_editorAPI, "f")).enableDebug().then((result)=>getEditorResponseData(result));
                            }), this.disableDebug = ()=>DebugController_awaiter(this, void 0, void 0, function*() {
                                return (yield DebugController_classPrivateFieldGet(this, _DebugController_editorAPI, "f")).disableDebug().then((result)=>getEditorResponseData(result));
                            }), DebugController_classPrivateFieldSet(this, _DebugController_editorAPI, editorAPI, "f");
                    }
                }
                _DebugController_editorAPI = new WeakMap;
                var _VariableController_editorAPI, VariableController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, VariableController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, VariableController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class VariableController {
                    constructor(editorAPI){
                        _VariableController_editorAPI.set(this, void 0), this.getVariables = ()=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).getVariables().then((result)=>getEditorResponseData(result));
                            }), this.getVariableById = (variableId)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).getVariableById(variableId).then((result)=>getEditorResponseData(result));
                            }), this.getVariableByName = (variableName)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).getVariableByName(variableName).then((result)=>getEditorResponseData(result));
                            }), this.addVariable = (parentId, variableType)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).addVariable(parentId, variableType).then((result)=>getEditorResponseData(result));
                            }), this.removeVariables = (variableIds)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).removeVariables(variableIds).then((result)=>getEditorResponseData(result));
                            }), this.setVariableName = (variableId, name)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setVariableName(variableId, name).then((result)=>getEditorResponseData(result));
                            }), this.setVariableLabel = (variableId, label)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setVariableLabel(variableId, label).then((result)=>getEditorResponseData(result));
                            }), this.setVariableType = (variableId, type)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setVariableType(variableId, type).then((result)=>getEditorResponseData(result));
                            }), this.setDefaultVariableValue = (variableId, value)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setDefaultVariableValue(variableId, value).then((result)=>getEditorResponseData(result));
                            }), this.setVariableValue = (variableId, value)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setVariableValue(variableId, value).then((result)=>getEditorResponseData(result));
                            }), this.duplicateVariable = (variableId)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).duplicateVariable(variableId).then((result)=>getEditorResponseData(result));
                            }), this.groupVariables = (groupName, variableIds)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).groupVariables(groupName, variableIds).then((result)=>getEditorResponseData(result));
                            }), this.ungroupVariable = (groupId)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).ungroupVariable(groupId).then((result)=>getEditorResponseData(result));
                            }), this.moveVariable = (variableId, parentId, orderIndex)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).moveVariable(variableId, parentId, orderIndex).then((result)=>getEditorResponseData(result));
                            }), this.moveVariables = (movedVariables)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).moveVariables(movedVariables.moves, movedVariables.parent, movedVariables.order).then((result)=>getEditorResponseData(result));
                            }), this.setVariableIsHidden = (variableId, isHidden)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setVariableIsHidden(variableId, isHidden).then((result)=>getEditorResponseData(result));
                            }), this.setVariableIsRequired = (variableId, isRequired)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setVariableIsRequired(variableId, isRequired).then((result)=>getEditorResponseData(result));
                            }), this.setVariableIsReadonly = (variableId, isReadonly)=>VariableController_awaiter(this, void 0, void 0, function*() {
                                return (yield VariableController_classPrivateFieldGet(this, _VariableController_editorAPI, "f")).setVariableIsReadonly(variableId, isReadonly).then((result)=>getEditorResponseData(result));
                            }), VariableController_classPrivateFieldSet(this, _VariableController_editorAPI, editorAPI, "f");
                    }
                }
                _VariableController_editorAPI = new WeakMap;
                var _ToolController_editorAPI, ToolController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, ToolController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, ToolController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class ToolController {
                    constructor(editorAPI){
                        _ToolController_editorAPI.set(this, void 0), this.setTool = (tool)=>ToolController_awaiter(this, void 0, void 0, function*() {
                                return (yield ToolController_classPrivateFieldGet(this, _ToolController_editorAPI, "f")).setTool(tool).then((result)=>getEditorResponseData(result));
                            }), this.getSelectedTool = ()=>ToolController_awaiter(this, void 0, void 0, function*() {
                                return (yield ToolController_classPrivateFieldGet(this, _ToolController_editorAPI, "f")).getSelectedTool().then((result)=>getEditorResponseData(result));
                            }), this.setSelectTool = ()=>ToolController_awaiter(this, void 0, void 0, function*() {
                                return this.setTool(ToolType.SELECT);
                            }), this.setHandTool = ()=>ToolController_awaiter(this, void 0, void 0, function*() {
                                return this.setTool(ToolType.HAND);
                            }), this.setZoomTool = ()=>ToolController_awaiter(this, void 0, void 0, function*() {
                                yield this.setTool(ToolType.ZOOM);
                            }), this.setTextFrameTool = ()=>ToolController_awaiter(this, void 0, void 0, function*() {
                                return this.setTool(ToolType.TEXT_FRAME);
                            }), this.setImageFrameTool = ()=>ToolController_awaiter(this, void 0, void 0, function*() {
                                return this.setTool(ToolType.IMAGE_FRAME);
                            }), ToolController_classPrivateFieldSet(this, _ToolController_editorAPI, editorAPI, "f");
                    }
                }
                _ToolController_editorAPI = new WeakMap;
                var _UndoManagerController_editorAPI, UndoManagerController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, UndoManagerController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, UndoManagerController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class UndoManagerController {
                    constructor(children){
                        _UndoManagerController_editorAPI.set(this, void 0), this.undo = ()=>UndoManagerController_awaiter(this, void 0, void 0, function*() {
                                return (yield UndoManagerController_classPrivateFieldGet(this, _UndoManagerController_editorAPI, "f")).undo().then((result)=>getEditorResponseData(result));
                            }), this.redo = ()=>UndoManagerController_awaiter(this, void 0, void 0, function*() {
                                return (yield UndoManagerController_classPrivateFieldGet(this, _UndoManagerController_editorAPI, "f")).redo().then((result)=>getEditorResponseData(result));
                            }), UndoManagerController_classPrivateFieldSet(this, _UndoManagerController_editorAPI, children, "f");
                    }
                }
                _UndoManagerController_editorAPI = new WeakMap;
                var _TextStyleController_editorAPI, TextStyleController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, TextStyleController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, TextStyleController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class TextStyleController {
                    constructor(editorAPI){
                        _TextStyleController_editorAPI.set(this, void 0), this.setTextStyleProperties = (style)=>TextStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield TextStyleController_classPrivateFieldGet(this, _TextStyleController_editorAPI, "f")).selectedTextStyleDeltaUpdate(JSON.stringify(style)).then((result)=>getEditorResponseData(result));
                            }), TextStyleController_classPrivateFieldSet(this, _TextStyleController_editorAPI, editorAPI, "f");
                    }
                }
                _TextStyleController_editorAPI = new WeakMap;
                var _ColorStyleController_editorAPI, ColorStyleController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, ColorStyleController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, ColorStyleController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class ColorStyleController {
                    constructor(editorAPI){
                        _ColorStyleController_editorAPI.set(this, void 0), this.getColors = ()=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).getColors().then((result)=>getEditorResponseData(result));
                            }), this.getColorById = (colorId)=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).getColorById(colorId).then((result)=>getEditorResponseData(result));
                            }), this.createColor = ()=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).createColor().then((result)=>getEditorResponseData(result));
                            }), this.duplicateColor = (colorId)=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).duplicateColor(colorId).then((result)=>getEditorResponseData(result));
                            }), this.moveColors = (order, colorIds)=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).moveColors(order, colorIds).then((result)=>getEditorResponseData(result));
                            }), this.renameColor = (id, name)=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).renameColor(id, name).then((result)=>getEditorResponseData(result));
                            }), this.updateColor = (id, color)=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).updateColor(id, JSON.stringify(color)).then((result)=>getEditorResponseData(result));
                            }), this.removeColor = (id)=>ColorStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ColorStyleController_classPrivateFieldGet(this, _ColorStyleController_editorAPI, "f")).removeColor(id).then((result)=>getEditorResponseData(result));
                            }), ColorStyleController_classPrivateFieldSet(this, _ColorStyleController_editorAPI, editorAPI, "f");
                    }
                }
                _ColorStyleController_editorAPI = new WeakMap;
                var _ParagraphStyleController_editorAPI, ParagraphStyleController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, ParagraphStyleController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, ParagraphStyleController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class ParagraphStyleController {
                    constructor(editorAPI){
                        _ParagraphStyleController_editorAPI.set(this, void 0), this.getParagraphStyles = ()=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).getParagraphStyles().then((result)=>getEditorResponseData(result));
                            }), this.getParagraphStyleById = (paragraphStyleId)=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).getParagraphStyleById(paragraphStyleId).then((result)=>getEditorResponseData(result));
                            }), this.createParagraphStyle = ()=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).createParagraphStyle().then((result)=>getEditorResponseData(result));
                            }), this.duplicateParagraphStyle = (paragraphStyleId)=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).duplicateParagraphStyle(paragraphStyleId).then((result)=>getEditorResponseData(result));
                            }), this.updateParagraphStyle = (id, paragraphStyle)=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).updateParagraphStyle(id, JSON.stringify(paragraphStyle)).then((result)=>getEditorResponseData(result));
                            }), this.renameParagraphStyle = (id, name)=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).renameParagraphStyle(id, name).then((result)=>getEditorResponseData(result));
                            }), this.removeParagraphStyle = (id)=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).removeParagraphStyle(id).then((result)=>getEditorResponseData(result));
                            }), this.moveParagraphStyles = (order, paragraphStyleIds)=>ParagraphStyleController_awaiter(this, void 0, void 0, function*() {
                                return (yield ParagraphStyleController_classPrivateFieldGet(this, _ParagraphStyleController_editorAPI, "f")).moveParagraphStyles(order, paragraphStyleIds).then((result)=>getEditorResponseData(result));
                            }), ParagraphStyleController_classPrivateFieldSet(this, _ParagraphStyleController_editorAPI, editorAPI, "f");
                    }
                }
                _ParagraphStyleController_editorAPI = new WeakMap;
                var _ConfigurationController_editorAPI, DeprecatedMediaType, MediaType, SortBy, SortOrder, ConnectorRegistrationSource, ConfigurationController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, ConfigurationController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, ConfigurationController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class ConfigurationController {
                    constructor(editorAPI){
                        _ConfigurationController_editorAPI.set(this, void 0), this.getValue = (key)=>ConfigurationController_awaiter(this, void 0, void 0, function*() {
                                return (yield ConfigurationController_classPrivateFieldGet(this, _ConfigurationController_editorAPI, "f")).getConfigValue(key).then((result)=>getEditorResponseData(result));
                            }), this.setValue = (key, value)=>ConfigurationController_awaiter(this, void 0, void 0, function*() {
                                return (yield ConfigurationController_classPrivateFieldGet(this, _ConfigurationController_editorAPI, "f")).setConfigValue(key, value).then((result)=>getEditorResponseData(result));
                            }), ConfigurationController_classPrivateFieldSet(this, _ConfigurationController_editorAPI, editorAPI, "f");
                    }
                }
                _ConfigurationController_editorAPI = new WeakMap, function(DeprecatedMediaType) {
                    DeprecatedMediaType[DeprecatedMediaType.file = 0] = "file", DeprecatedMediaType[DeprecatedMediaType.collection = 1] = "collection";
                }(DeprecatedMediaType || (DeprecatedMediaType = {})), function(MediaType) {
                    MediaType.file = "file", MediaType.collection = "collection";
                }(MediaType || (MediaType = {})), function(SortBy) {
                    SortBy.name = "name", SortBy.path = "relativePath", SortBy.id = "id";
                }(SortBy || (SortBy = {})), function(SortOrder) {
                    SortOrder.ascending = "asc", SortOrder.descending = "desc";
                }(SortOrder || (SortOrder = {})), function(ConnectorRegistrationSource) {
                    ConnectorRegistrationSource.url = "url";
                }(ConnectorRegistrationSource || (ConnectorRegistrationSource = {}));
                var _MediaConnectorController_editorAPI, _MediaConnectorController_blobAPI, WellKnownConfigurationKeys, MediaConnectorController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, MediaConnectorController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, MediaConnectorController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class MediaConnectorController {
                    constructor(editorAPI){
                        _MediaConnectorController_editorAPI.set(this, void 0), _MediaConnectorController_blobAPI.set(this, void 0), this.query = (connectorId, queryOptions, context)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_editorAPI, "f")).mediaConnectorQuery(connectorId, JSON.stringify(queryOptions), JSON.stringify(context)).then((result)=>getEditorResponseData(result));
                            }), this.download = (connectorId, mediaId, downloadType, context)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_blobAPI, "f")).mediaConnectorDownload(connectorId, mediaId, downloadType, JSON.stringify(context)).then((result)=>{
                                    var _a;
                                    return null !== (_a = result) && void 0 !== _a ? _a : result;
                                });
                            }), this.upload = (connectorId, mediaId, blob)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_editorAPI, "f")).mediaConnectorUpload(connectorId, mediaId, blob).then((result)=>getEditorResponseData(result));
                            }), this.remove = (connectorId, mediaId)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_editorAPI, "f")).mediaConnectorRemove(connectorId, mediaId).then((result)=>getEditorResponseData(result));
                            }), this.copy = (connectorId, mediaId, newName)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_editorAPI, "f")).mediaConnectorCopy(connectorId, mediaId, newName).then((result)=>getEditorResponseData(result));
                            }), this.getQueryOptions = (connectorId)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_editorAPI, "f")).mediaConnectorGetQueryOptions(connectorId).then((result)=>getEditorResponseData(result));
                            }), this.getDownloadOptions = (connectorId)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_editorAPI, "f")).mediaConnectorGetDownloadOptions(connectorId).then((result)=>getEditorResponseData(result));
                            }), this.getCapabilities = (connectorId)=>MediaConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield MediaConnectorController_classPrivateFieldGet(this, _MediaConnectorController_editorAPI, "f")).mediaConnectorGetCapabilities(connectorId).then((result)=>getEditorResponseData(result));
                            }), this.parseDeprecatedMediaType = (deprecatedType)=>deprecatedType === DeprecatedMediaType.file ? MediaType.file : deprecatedType === DeprecatedMediaType.collection ? MediaType.collection : void 0, MediaConnectorController_classPrivateFieldSet(this, _MediaConnectorController_editorAPI, editorAPI, "f"), MediaConnectorController_classPrivateFieldSet(this, _MediaConnectorController_blobAPI, editorAPI, "f");
                    }
                }
                _MediaConnectorController_editorAPI = new WeakMap, _MediaConnectorController_blobAPI = new WeakMap, function(WellKnownConfigurationKeys) {
                    WellKnownConfigurationKeys.GraFxStudioEnvironmentApiUrl = "ENVIRONMENT_API", WellKnownConfigurationKeys.GraFxStudioSdkVersion = "SDK_VERSION";
                }(WellKnownConfigurationKeys || (WellKnownConfigurationKeys = {}));
                const package_namespaceObject_i8 = "0.78.1";
                var _FontConnectorController_editorAPI, _FontConnectorController_blobAPI, FontConnectorController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, FontConnectorController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, FontConnectorController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class FontConnectorController {
                    constructor(editorAPI){
                        _FontConnectorController_editorAPI.set(this, void 0), _FontConnectorController_blobAPI.set(this, void 0), this.query = (connectorId, queryOptions, context)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_editorAPI, "f")).fontConnectorQuery(connectorId, JSON.stringify(queryOptions), JSON.stringify(context)).then((result)=>getEditorResponseData(result));
                            }), this.download = (connectorId, FontId, downloadType, context)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_blobAPI, "f")).fontConnectorDownload(connectorId, FontId, downloadType, JSON.stringify(context)).then((result)=>{
                                    var _a;
                                    return null !== (_a = result) && void 0 !== _a ? _a : result;
                                });
                            }), this.upload = (connectorId, FontId, blob)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_editorAPI, "f")).fontConnectorUpload(connectorId, FontId, blob).then((result)=>getEditorResponseData(result));
                            }), this.remove = (connectorId, FontId)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_editorAPI, "f")).fontConnectorRemove(connectorId, FontId).then((result)=>getEditorResponseData(result));
                            }), this.copy = (connectorId, FontId, newName)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_editorAPI, "f")).fontConnectorCopy(connectorId, FontId, newName).then((result)=>getEditorResponseData(result));
                            }), this.getQueryOptions = (connectorId)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_editorAPI, "f")).fontConnectorGetQueryOptions(connectorId).then((result)=>getEditorResponseData(result));
                            }), this.getDownloadOptions = (connectorId)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_editorAPI, "f")).fontConnectorGetDownloadOptions(connectorId).then((result)=>getEditorResponseData(result));
                            }), this.getCapabilities = (connectorId)=>FontConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield FontConnectorController_classPrivateFieldGet(this, _FontConnectorController_editorAPI, "f")).fontConnectorGetCapabilities(connectorId).then((result)=>getEditorResponseData(result));
                            }), this.parseDeprecatedFontType = (deprecatedType)=>deprecatedType === DeprecatedMediaType.file ? MediaType.file : deprecatedType === DeprecatedMediaType.collection ? MediaType.collection : void 0, FontConnectorController_classPrivateFieldSet(this, _FontConnectorController_editorAPI, editorAPI, "f"), FontConnectorController_classPrivateFieldSet(this, _FontConnectorController_blobAPI, editorAPI, "f");
                    }
                }
                _FontConnectorController_editorAPI = new WeakMap, _FontConnectorController_blobAPI = new WeakMap;
                var _ConnectorAuthenticationController_editorAPI, ConnectorAuthenticationController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, ConnectorAuthenticationController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, ConnectorAuthenticationController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class ConnectorAuthenticationController {
                    constructor(editorAPI){
                        _ConnectorAuthenticationController_editorAPI.set(this, void 0), this.setChiliToken = (connectorId, token)=>ConnectorAuthenticationController_awaiter(this, void 0, void 0, function*() {
                                return (yield ConnectorAuthenticationController_classPrivateFieldGet(this, _ConnectorAuthenticationController_editorAPI, "f")).connectorAuthenticationSetChiliToken(connectorId, token).then((result)=>getEditorResponseData(result));
                            }), this.setHttpHeader = (connectorId, headerName, headerValue)=>ConnectorAuthenticationController_awaiter(this, void 0, void 0, function*() {
                                return (yield ConnectorAuthenticationController_classPrivateFieldGet(this, _ConnectorAuthenticationController_editorAPI, "f")).connectorAuthenticationSetHttpHeader(connectorId, headerName, headerValue).then((result)=>getEditorResponseData(result));
                            }), ConnectorAuthenticationController_classPrivateFieldSet(this, _ConnectorAuthenticationController_editorAPI, editorAPI, "f");
                    }
                }
                _ConnectorAuthenticationController_editorAPI = new WeakMap;
                var _ConnectorController_editorAPI, SlideDirections, ShakeDirections, EaseTypes, TweenTypes, BasicAnimationsEmphasisStyles, LayoutType, FrameTypeEnum, TextDirection, FlowDirection, VerticalAlign, BlendMode, FitMode, VariableType, ColorUsageType, FontWeights, Alignment, TextPosition, Case, Scripting, SelectedTextStyleSections, SelectedTextStyles, BlendModes, ColorType, MediaDownloadType, ConnectorController_awaiter = function(thisArg, _arguments, P, generator) {
                    return new (P || (P = Promise))(function(resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator.throw(value));
                            } catch (e) {
                                reject(e);
                            }
                        }
                        function step(result) {
                            var value;
                            result.done ? resolve(result.value) : (value = result.value, value instanceof P ? value : new P(function(resolve) {
                                resolve(value);
                            })).then(fulfilled, rejected);
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next());
                    });
                }, ConnectorController_classPrivateFieldSet = function(receiver, state, value, kind, f) {
                    if ("m" === kind) throw new TypeError("Private method is not writable");
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === kind ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
                }, ConnectorController_classPrivateFieldGet = function(receiver, state, kind, f) {
                    if ("a" === kind && !f) throw new TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof state ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === kind ? f : "a" === kind ? f.call(receiver) : f ? f.value : state.get(receiver);
                };
                class ConnectorController {
                    constructor(editorAPI){
                        _ConnectorController_editorAPI.set(this, void 0), this.registerConnector = (registration)=>ConnectorController_awaiter(this, void 0, void 0, function*() {
                                return (yield ConnectorController_classPrivateFieldGet(this, _ConnectorController_editorAPI, "f")).registerConnector(JSON.stringify(registration)).then((result)=>getEditorResponseData(result));
                            }), ConnectorController_classPrivateFieldSet(this, _ConnectorController_editorAPI, editorAPI, "f"), this.authentication = new ConnectorAuthenticationController(editorAPI);
                    }
                }
                let connection;
                _ConnectorController_editorAPI = new WeakMap, function(SlideDirections) {
                    SlideDirections.top = "top", SlideDirections.left = "left", SlideDirections.right = "right", SlideDirections.bottom = "bottom", SlideDirections.topLeft = "topLeft", SlideDirections.topRight = "topRight", SlideDirections.bottomLeft = "bottomLeft", SlideDirections.bottomRight = "bottomRight";
                }(SlideDirections || (SlideDirections = {})), function(ShakeDirections) {
                    ShakeDirections.horizontal = "horizontal", ShakeDirections.vertical = "vertical";
                }(ShakeDirections || (ShakeDirections = {})), function(EaseTypes) {
                    EaseTypes.easeIn = "easeIn", EaseTypes.easeOut = "easeOut", EaseTypes.easeInOut = "easeInOut";
                }(EaseTypes || (EaseTypes = {})), function(TweenTypes) {
                    TweenTypes.quadratic = "Quadratic", TweenTypes.cubic = "Cubic", TweenTypes.quartic = "Quartic", TweenTypes.quintic = "Quintic", TweenTypes.sine = "Sine", TweenTypes.exponential = "Exponential", TweenTypes.circular = "Circular", TweenTypes.elastic = "Elastic", TweenTypes.bounce = "Bounce", TweenTypes.back = "Back";
                }(TweenTypes || (TweenTypes = {})), function(BasicAnimationsEmphasisStyles) {
                    BasicAnimationsEmphasisStyles.bounce = "bounce", BasicAnimationsEmphasisStyles.flash = "flash", BasicAnimationsEmphasisStyles.headshake = "headShake", BasicAnimationsEmphasisStyles.heartbeat = "heartbeat", BasicAnimationsEmphasisStyles.pulse = "pulse", BasicAnimationsEmphasisStyles.rubberBand = "rubberBand", BasicAnimationsEmphasisStyles.vertical = "vertical", BasicAnimationsEmphasisStyles.horizontal = "horizontal", BasicAnimationsEmphasisStyles.swing = "swing", BasicAnimationsEmphasisStyles.tada = "tada";
                }(BasicAnimationsEmphasisStyles || (BasicAnimationsEmphasisStyles = {})), function(LayoutType) {
                    LayoutType.top = "top", LayoutType.child = "child";
                }(LayoutType || (LayoutType = {})), function(FrameTypeEnum) {
                    FrameTypeEnum.text = "text", FrameTypeEnum.image = "image";
                }(FrameTypeEnum || (FrameTypeEnum = {})), function(TextDirection) {
                    TextDirection.leftToRight = "leftToRight", TextDirection.rightToLeft = "rightToLeft", TextDirection.weak = "weak";
                }(TextDirection || (TextDirection = {})), function(FlowDirection) {
                    FlowDirection.horizontal = "horizontal", FlowDirection.vertical = "vertical", FlowDirection.onPath = "onPath";
                }(FlowDirection || (FlowDirection = {})), function(VerticalAlign) {
                    VerticalAlign.top = "top", VerticalAlign.bottom = "bottom", VerticalAlign.middle = "middle", VerticalAlign.justify = "justify";
                }(VerticalAlign || (VerticalAlign = {})), function(BlendMode) {
                    BlendMode.clear = "clear", BlendMode.src = "src", BlendMode.dst = "dst", BlendMode.srcOver = "srcOver", BlendMode.dstOver = "dstOver", BlendMode.srcIn = "srcIn", BlendMode.dstIn = "dstIn", BlendMode.srcOut = "srcOut", BlendMode.dstOut = "dstOut", BlendMode.srcATop = "srcATop", BlendMode.dstATop = "dstATop", BlendMode.xor = "xor", BlendMode.plus = "plus", BlendMode.modulate = "modulate", BlendMode.screen = "screen", BlendMode.overlay = "overlay", BlendMode.darken = "darken", BlendMode.lighten = "lighten", BlendMode.colorDodge = "colorDodge", BlendMode.colorBurn = "colorBurn", BlendMode.hardLight = "hardLight", BlendMode.softLight = "softLight", BlendMode.difference = "difference", BlendMode.exclusion = "exclusion", BlendMode.multiply = "multiply", BlendMode.hue = "hue", BlendMode.saturation = "saturation", BlendMode.color = "color", BlendMode.luminosity = "luminosity";
                }(BlendMode || (BlendMode = {})), function(FitMode) {
                    FitMode.fit = "fit", FitMode.fill = "fill";
                }(FitMode || (FitMode = {})), function(VariableType) {
                    VariableType.shorttext = "shorttext", VariableType.longtext = "longtext", VariableType.image = "image", VariableType.group = "group";
                }(VariableType || (VariableType = {})), function(ColorUsageType) {
                    ColorUsageType.local = "local", ColorUsageType.reference = "reference";
                }(ColorUsageType || (ColorUsageType = {})), function(FontWeights) {
                    FontWeights.BOLD = "Bold", FontWeights.ITALIC = "Italic", FontWeights.REGULAR = "Regular";
                }(FontWeights || (FontWeights = {})), function(Alignment) {
                    Alignment.LEFT = "left", Alignment.CENTER = "center", Alignment.RIGHT = "right", Alignment.JUSTIFY = "justify";
                }(Alignment || (Alignment = {})), function(TextPosition) {
                    TextPosition.TOP = "top", TextPosition.CENTER = "center", TextPosition.BOTTOM = "bottom";
                }(TextPosition || (TextPosition = {})), function(Case) {
                    Case.TO_LOWER_CASE = "lowercase", Case.TO_UPPER_CASE = "uppercase", Case.NORMAL = "normal";
                }(Case || (Case = {})), function(Scripting) {
                    Scripting.SUPERSCRIPT = "superscript", Scripting.SUBSCRIPT = "subscript", Scripting.NORMAL = "normal";
                }(Scripting || (Scripting = {})), function(SelectedTextStyleSections) {
                    SelectedTextStyleSections.STYLE = "textStyle", SelectedTextStyleSections.PROPERTIES = "textProperties", SelectedTextStyleSections.APPEARANCE = "appearance";
                }(SelectedTextStyleSections || (SelectedTextStyleSections = {})), function(SelectedTextStyles) {
                    SelectedTextStyles.PARAGRAPH = "paragraphStyleId", SelectedTextStyles.CHARACTER = "characterStyleId", SelectedTextStyles.FONT_FAMILY = "fontKey", SelectedTextStyles.FONT_STYLE = "fontStyle", SelectedTextStyles.FONT_SIZE = "fontSize", SelectedTextStyles.LETTER_SPACING = "letterSpacing", SelectedTextStyles.LINE_HEIGHT = "lineHeight", SelectedTextStyles.TEXT_ALIGN = "textAlign", SelectedTextStyles.VERTICAL_ALIGN = "verticalAlign", SelectedTextStyles.TYPOGRAPHIC_CASE = "typographicCase", SelectedTextStyles.SUB_SUPER_SCRIPT = "subSuperScript", SelectedTextStyles.UNDERLINE = "underline", SelectedTextStyles.LINETHROUGH = "lineThrough", SelectedTextStyles.FILL_COLOR = "fillColor", SelectedTextStyles.COLOR = "color", SelectedTextStyles.STROKE_COLOR = "strokeColor", SelectedTextStyles.DROP_SHADOW_COLOR = "dropShadowColor", SelectedTextStyles.BLEND_MODE = "blendMode", SelectedTextStyles.OPACITY = "opacity";
                }(SelectedTextStyles || (SelectedTextStyles = {})), function(BlendModes) {
                    BlendModes.NORMAL = "normal", BlendModes.DARKEN = "darken", BlendModes.MULTIPLY = "multiply", BlendModes.COLOR_BURN = "color burn", BlendModes.LIGHT = "light", BlendModes.SCREEN = "screen", BlendModes.COLOR_DODGE = "color dodge", BlendModes.OVERLAY = "overlay", BlendModes.SOFT_LIGHT = "soft light", BlendModes.HARD_LIGHT = "hard light", BlendModes.DIFFERENCE = "difference", BlendModes.EXCLUSION = "exclusion", BlendModes.HUE = "hue", BlendModes.SATURATION = "saturation", BlendModes.COLOR = "color", BlendModes.LUMINOSITY = "luminosity";
                }(BlendModes || (BlendModes = {})), function(ColorType) {
                    ColorType.rgb = "rgb", ColorType.cmyk = "cmyk", ColorType.lab = "lab", ColorType.gray = "gray", ColorType.xyz = "xyz", ColorType.hls = "hls", ColorType.spotCmyk = "spotCmyk", ColorType.spotRgb = "spotRgb", ColorType.custom = "custom";
                }(ColorType || (ColorType = {})), function(MediaDownloadType) {
                    MediaDownloadType.LowResolutionWeb = "lowresWeb", MediaDownloadType.HighResolutionWeb = "highresWeb";
                }(MediaDownloadType || (MediaDownloadType = {}));
                class SDK {
                    constructor(config){
                        this.loadEditor = ()=>{
                            connector(this.config.editorLink || "https://studio-cdn.chiligrafx.com/editor/0.0.12/web", {
                                onStateChanged: this.subscriber.onStateChanged,
                                onSelectedFrameContentChanged: this.subscriber.onSelectedFrameContentChanged,
                                onSelectedFrameLayoutChanged: this.subscriber.onSelectedFrameLayoutChanged,
                                onSelectedLayoutPropertiesChanged: this.subscriber.onSelectedLayoutPropertiesChanged,
                                onPageSelectionChanged: this.subscriber.onPageSelectionChanged,
                                onScrubberPositionChanged: this.subscriber.onAnimationPlaybackChanged,
                                onFrameAnimationsChanged: this.subscriber.onAnimationChanged,
                                onVariableListChanged: this.subscriber.onVariableListChanged,
                                onSelectedToolChanged: this.subscriber.onSelectedToolChanged,
                                onUndoStateChanged: this.subscriber.onUndoStateChanged,
                                onSelectedLayoutFramesChanged: this.subscriber.onSelectedLayoutFramesChanged,
                                onSelectedTextStyleChanged: this.subscriber.onSelectedTextStyleChanged,
                                onColorsChanged: this.subscriber.onColorsChanged,
                                onParagraphStylesChanged: this.subscriber.onParagraphStylesChanged,
                                onCharacterStylesChanged: this.subscriber.onCharacterStylesChanged,
                                onFontsChanged: this.subscriber.onFontsChanged,
                                onSelectedLayoutIdChanged: this.subscriber.onSelectedLayoutIdChanged,
                                onLayoutsChanged: this.subscriber.onLayoutsChanged
                            }, this.setConnection, this.config.editorId), this.editorAPI = null == connection ? void 0 : connection.promise.then((editorAPI)=>editorAPI), this.layout = new LayoutController(this.editorAPI), this.frame = new FrameController(this.editorAPI), this.animation = new AnimationController(this.editorAPI), this.document = new DocumentController(this.editorAPI), this.configuration = new ConfigurationController(this.editorAPI), this.variable = new VariableController(this.editorAPI), this.utils = new UtilsController, this.tool = new ToolController(this.editorAPI), this.page = new PageController(this.editorAPI), this.debug = new DebugController(this.editorAPI), this.undoManager = new UndoManagerController(this.editorAPI), this.textSelection = new TextStyleController(this.editorAPI), this.colorStyle = new ColorStyleController(this.editorAPI), this.paragraphStyle = new ParagraphStyleController(this.editorAPI), this.mediaConnector = new MediaConnectorController(this.editorAPI), this.fontConnector = new FontConnectorController(this.editorAPI), this.connector = new ConnectorController(this.editorAPI), this.configuration.setValue(WellKnownConfigurationKeys.GraFxStudioSdkVersion, package_namespaceObject_i8);
                        }, this.setConnection = (newConnection)=>{
                            connection = newConnection;
                        }, this.config = config, this.connection = connection, this.editorAPI = null == connection ? void 0 : connection.promise.then((child)=>child), this.layout = new LayoutController(this.editorAPI), this.frame = new FrameController(this.editorAPI), this.connector = new ConnectorController(this.editorAPI), this.mediaConnector = new MediaConnectorController(this.editorAPI), this.fontConnector = new FontConnectorController(this.editorAPI), this.animation = new AnimationController(this.editorAPI), this.document = new DocumentController(this.editorAPI), this.configuration = new ConfigurationController(this.editorAPI), this.variable = new VariableController(this.editorAPI), this.utils = new UtilsController, this.subscriber = new SubscriberController(this.config), this.tool = new ToolController(this.editorAPI), this.page = new PageController(this.editorAPI), this.debug = new DebugController(this.editorAPI), this.undoManager = new UndoManagerController(this.editorAPI), this.textSelection = new TextStyleController(this.editorAPI), this.colorStyle = new ColorStyleController(this.editorAPI), this.paragraphStyle = new ParagraphStyleController(this.editorAPI);
                    }
                }
                const src = SDK;
            },
            287: function(module1, exports) {
                "use strict";
                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
                __WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = function() {
                    function ok() {
                        return !0;
                    }
                    function notOk() {
                        return !1;
                    }
                    function undef() {}
                    function create() {
                        var _types = [
                            {
                                name: "number",
                                test: function(x) {
                                    return "number" == typeof x;
                                }
                            },
                            {
                                name: "string",
                                test: function(x) {
                                    return "string" == typeof x;
                                }
                            },
                            {
                                name: "boolean",
                                test: function(x) {
                                    return "boolean" == typeof x;
                                }
                            },
                            {
                                name: "Function",
                                test: function(x) {
                                    return "function" == typeof x;
                                }
                            },
                            {
                                name: "Array",
                                test: Array.isArray
                            },
                            {
                                name: "Date",
                                test: function(x) {
                                    return x instanceof Date;
                                }
                            },
                            {
                                name: "RegExp",
                                test: function(x) {
                                    return x instanceof RegExp;
                                }
                            },
                            {
                                name: "Object",
                                test: function(x) {
                                    return "object" == typeof x && null !== x && x.constructor === Object;
                                }
                            },
                            {
                                name: "null",
                                test: function(x) {
                                    return null === x;
                                }
                            },
                            {
                                name: "undefined",
                                test: function(x) {
                                    return void 0 === x;
                                }
                            }
                        ], anyType = {
                            name: "any",
                            test: ok
                        }, _ignore = [], _conversions = [], typed = {
                            types: _types,
                            conversions: _conversions,
                            ignore: _ignore
                        };
                        function findTypeByName(typeName) {
                            var entry = findInArray(typed.types, function(entry) {
                                return entry.name === typeName;
                            });
                            if (entry) return entry;
                            if ("any" === typeName) return anyType;
                            var hint = findInArray(typed.types, function(entry) {
                                return entry.name.toLowerCase() === typeName.toLowerCase();
                            });
                            throw new TypeError('Unknown type "' + typeName + '"' + (hint ? '. Did you mean "' + hint.name + '"?' : ""));
                        }
                        function findTypeIndex(type) {
                            return type === anyType ? 999 : typed.types.indexOf(type);
                        }
                        function findTypeName(value) {
                            var entry = findInArray(typed.types, function(entry) {
                                return entry.test(value);
                            });
                            if (entry) return entry.name;
                            throw new TypeError("Value has unknown type. Value: " + value);
                        }
                        function find(fn, signature) {
                            if (!fn.signatures) throw new TypeError("Function is no typed-function");
                            var arr;
                            if ("string" == typeof signature) {
                                arr = signature.split(",");
                                for(var i = 0; i < arr.length; i++)arr[i] = arr[i].trim();
                            } else {
                                if (!Array.isArray(signature)) throw new TypeError("String array or a comma separated string expected");
                                arr = signature;
                            }
                            var str = arr.join(","), match = fn.signatures[str];
                            if (match) return match;
                            throw new TypeError("Signature not found (signature: " + (fn.name || "unnamed") + "(" + arr.join(", ") + "))");
                        }
                        function convert(value, type) {
                            var from = findTypeName(value);
                            if (type === from) return value;
                            for(var i = 0; i < typed.conversions.length; i++){
                                var conversion = typed.conversions[i];
                                if (conversion.from === from && conversion.to === type) return conversion.convert(value);
                            }
                            throw new Error("Cannot convert from " + from + " to " + type);
                        }
                        function stringifyParams(params) {
                            return params.map(function(param) {
                                var typeNames = param.types.map(getTypeName);
                                return (param.restParam ? "..." : "") + typeNames.join("|");
                            }).join(",");
                        }
                        function parseParam(param, conversions) {
                            var restParam = 0 === param.indexOf("..."), typeNames = (restParam ? param.length > 3 ? param.slice(3) : "any" : param).split("|").map(trim).filter(notEmpty).filter(notIgnore), matchingConversions = filterConversions(conversions, typeNames), exactTypes = typeNames.map(function(typeName) {
                                var type = findTypeByName(typeName);
                                return {
                                    name: typeName,
                                    typeIndex: findTypeIndex(type),
                                    test: type.test,
                                    conversion: null,
                                    conversionIndex: -1
                                };
                            }), convertibleTypes = matchingConversions.map(function(conversion) {
                                var type = findTypeByName(conversion.from);
                                return {
                                    name: conversion.from,
                                    typeIndex: findTypeIndex(type),
                                    test: type.test,
                                    conversion,
                                    conversionIndex: conversions.indexOf(conversion)
                                };
                            });
                            return {
                                types: exactTypes.concat(convertibleTypes),
                                restParam
                            };
                        }
                        function parseSignature(signature, fn, conversions) {
                            var params = [];
                            return "" !== signature.trim() && (params = signature.split(",").map(trim).map(function(param, index, array) {
                                var parsedParam = parseParam(param, conversions);
                                if (parsedParam.restParam && index !== array.length - 1) throw new SyntaxError('Unexpected rest parameter "' + param + '": only allowed for the last parameter');
                                return parsedParam;
                            })), params.some(isInvalidParam) ? null : {
                                params,
                                fn
                            };
                        }
                        function hasRestParam(params) {
                            var param = last(params);
                            return !!param && param.restParam;
                        }
                        function hasConversions(param) {
                            return param.types.some(function(type) {
                                return null != type.conversion;
                            });
                        }
                        function compileTest(param) {
                            if (param && 0 !== param.types.length) {
                                if (1 === param.types.length) return findTypeByName(param.types[0].name).test;
                                if (2 === param.types.length) {
                                    var test0 = findTypeByName(param.types[0].name).test, test1 = findTypeByName(param.types[1].name).test;
                                    return function(x) {
                                        return test0(x) || test1(x);
                                    };
                                }
                                var tests = param.types.map(function(type) {
                                    return findTypeByName(type.name).test;
                                });
                                return function(x) {
                                    for(var i = 0; i < tests.length; i++)if (tests[i](x)) return !0;
                                    return !1;
                                };
                            }
                            return ok;
                        }
                        function compileTests(params) {
                            var tests, test0, test1;
                            if (hasRestParam(params)) {
                                var varIndex = (tests = initial(params).map(compileTest)).length, lastTest = compileTest(last(params)), testRestParam = function(args) {
                                    for(var i = varIndex; i < args.length; i++)if (!lastTest(args[i])) return !1;
                                    return !0;
                                };
                                return function(args) {
                                    for(var i = 0; i < tests.length; i++)if (!tests[i](args[i])) return !1;
                                    return testRestParam(args) && args.length >= varIndex + 1;
                                };
                            }
                            return 0 === params.length ? function(args) {
                                return 0 === args.length;
                            } : 1 === params.length ? (test0 = compileTest(params[0]), function(args) {
                                return test0(args[0]) && 1 === args.length;
                            }) : 2 === params.length ? (test0 = compileTest(params[0]), test1 = compileTest(params[1]), function(args) {
                                return test0(args[0]) && test1(args[1]) && 2 === args.length;
                            }) : (tests = params.map(compileTest), function(args) {
                                for(var i = 0; i < tests.length; i++)if (!tests[i](args[i])) return !1;
                                return args.length === tests.length;
                            });
                        }
                        function getParamAtIndex(signature, index) {
                            return index < signature.params.length ? signature.params[index] : hasRestParam(signature.params) ? last(signature.params) : null;
                        }
                        function getExpectedTypeNames(signature, index, excludeConversions) {
                            var param = getParamAtIndex(signature, index);
                            return (param ? excludeConversions ? param.types.filter(isExactType) : param.types : []).map(getTypeName);
                        }
                        function getTypeName(type) {
                            return type.name;
                        }
                        function isExactType(type) {
                            return null === type.conversion || void 0 === type.conversion;
                        }
                        function mergeExpectedParams(signatures, index) {
                            var typeNames = uniq(flatMap(signatures, function(signature) {
                                return getExpectedTypeNames(signature, index, !1);
                            }));
                            return -1 !== typeNames.indexOf("any") ? [
                                "any"
                            ] : typeNames;
                        }
                        function createError(name, args, signatures) {
                            var err, expected, index, _name = name || "unnamed", matchingSignatures = signatures;
                            for(index = 0; index < args.length; index++){
                                var nextMatchingDefs = matchingSignatures.filter(function(signature) {
                                    var test = compileTest(getParamAtIndex(signature, index));
                                    return (index < signature.params.length || hasRestParam(signature.params)) && test(args[index]);
                                });
                                if (0 === nextMatchingDefs.length) {
                                    if ((expected = mergeExpectedParams(matchingSignatures, index)).length > 0) {
                                        var actualType = findTypeName(args[index]);
                                        return (err = new TypeError("Unexpected type of argument in function " + _name + " (expected: " + expected.join(" or ") + ", actual: " + actualType + ", index: " + index + ")")).data = {
                                            category: "wrongType",
                                            fn: _name,
                                            index,
                                            actual: actualType,
                                            expected
                                        }, err;
                                    }
                                } else matchingSignatures = nextMatchingDefs;
                            }
                            var lengths = matchingSignatures.map(function(signature) {
                                return hasRestParam(signature.params) ? 1 / 0 : signature.params.length;
                            });
                            if (args.length < Math.min.apply(null, lengths)) return expected = mergeExpectedParams(matchingSignatures, index), (err = new TypeError("Too few arguments in function " + _name + " (expected: " + expected.join(" or ") + ", index: " + args.length + ")")).data = {
                                category: "tooFewArgs",
                                fn: _name,
                                index: args.length,
                                expected
                            }, err;
                            var maxLength = Math.max.apply(null, lengths);
                            return args.length > maxLength ? ((err = new TypeError("Too many arguments in function " + _name + " (expected: " + maxLength + ", actual: " + args.length + ")")).data = {
                                category: "tooManyArgs",
                                fn: _name,
                                index: args.length,
                                expectedLength: maxLength
                            }, err) : ((err = new TypeError('Arguments of type "' + args.join(", ") + '" do not match any of the defined signatures of function ' + _name + ".")).data = {
                                category: "mismatch",
                                actual: args.map(findTypeName)
                            }, err);
                        }
                        function getLowestTypeIndex(param) {
                            for(var min = 999, i = 0; i < param.types.length; i++)isExactType(param.types[i]) && (min = Math.min(min, param.types[i].typeIndex));
                            return min;
                        }
                        function getLowestConversionIndex(param) {
                            for(var min = 999, i = 0; i < param.types.length; i++)isExactType(param.types[i]) || (min = Math.min(min, param.types[i].conversionIndex));
                            return min;
                        }
                        function compareParams(param1, param2) {
                            var c;
                            return 0 != (c = param1.restParam - param2.restParam) || 0 != (c = hasConversions(param1) - hasConversions(param2)) || 0 != (c = getLowestTypeIndex(param1) - getLowestTypeIndex(param2)) ? c : getLowestConversionIndex(param1) - getLowestConversionIndex(param2);
                        }
                        function compareSignatures(signature1, signature2) {
                            var i, c, len = Math.min(signature1.params.length, signature2.params.length);
                            if (0 != (c = signature1.params.some(hasConversions) - signature2.params.some(hasConversions))) return c;
                            for(i = 0; i < len; i++)if (0 != (c = hasConversions(signature1.params[i]) - hasConversions(signature2.params[i]))) return c;
                            for(i = 0; i < len; i++)if (0 !== (c = compareParams(signature1.params[i], signature2.params[i]))) return c;
                            return signature1.params.length - signature2.params.length;
                        }
                        function filterConversions(conversions, typeNames) {
                            var matches = {};
                            return conversions.forEach(function(conversion) {
                                -1 !== typeNames.indexOf(conversion.from) || -1 === typeNames.indexOf(conversion.to) || matches[conversion.from] || (matches[conversion.from] = conversion);
                            }), Object.keys(matches).map(function(from) {
                                return matches[from];
                            });
                        }
                        function compileArgsPreprocessing(params, fn) {
                            var fnConvert = fn;
                            if (params.some(hasConversions)) {
                                var restParam = hasRestParam(params), compiledConversions = params.map(compileArgConversion);
                                fnConvert = function() {
                                    for(var args = [], last = restParam ? arguments.length - 1 : arguments.length, i = 0; i < last; i++)args[i] = compiledConversions[i](arguments[i]);
                                    return restParam && (args[last] = arguments[last].map(compiledConversions[last])), fn.apply(this, args);
                                };
                            }
                            var fnPreprocess = fnConvert;
                            if (hasRestParam(params)) {
                                var offset = params.length - 1;
                                fnPreprocess = function() {
                                    return fnConvert.apply(this, slice(arguments, 0, offset).concat([
                                        slice(arguments, offset)
                                    ]));
                                };
                            }
                            return fnPreprocess;
                        }
                        function compileArgConversion(param) {
                            var test0, test1, conversion0, conversion1, tests = [], conversions = [];
                            switch(param.types.forEach(function(type) {
                                type.conversion && (tests.push(findTypeByName(type.conversion.from).test), conversions.push(type.conversion.convert));
                            }), conversions.length){
                                case 0:
                                    return function(arg) {
                                        return arg;
                                    };
                                case 1:
                                    return test0 = tests[0], conversion0 = conversions[0], function(arg) {
                                        return test0(arg) ? conversion0(arg) : arg;
                                    };
                                case 2:
                                    return test0 = tests[0], test1 = tests[1], conversion0 = conversions[0], conversion1 = conversions[1], function(arg) {
                                        return test0(arg) ? conversion0(arg) : test1(arg) ? conversion1(arg) : arg;
                                    };
                                default:
                                    return function(arg) {
                                        for(var i = 0; i < conversions.length; i++)if (tests[i](arg)) return conversions[i](arg);
                                        return arg;
                                    };
                            }
                        }
                        function createSignaturesMap(signatures) {
                            var signaturesMap = {};
                            return signatures.forEach(function(signature) {
                                signature.params.some(hasConversions) || splitParams(signature.params, !0).forEach(function(params) {
                                    signaturesMap[stringifyParams(params)] = signature.fn;
                                });
                            }), signaturesMap;
                        }
                        function splitParams(params, ignoreConversionTypes) {
                            function _splitParams(params, index, types) {
                                if (index < params.length) {
                                    var typeGroups, param = params[index], filteredTypes = ignoreConversionTypes ? param.types.filter(isExactType) : param.types;
                                    if (param.restParam) {
                                        var exactTypes = filteredTypes.filter(isExactType);
                                        typeGroups = exactTypes.length < filteredTypes.length ? [
                                            exactTypes,
                                            filteredTypes
                                        ] : [
                                            filteredTypes
                                        ];
                                    } else typeGroups = filteredTypes.map(function(type) {
                                        return [
                                            type
                                        ];
                                    });
                                    return flatMap(typeGroups, function(typeGroup) {
                                        return _splitParams(params, index + 1, types.concat([
                                            typeGroup
                                        ]));
                                    });
                                }
                                return [
                                    types.map(function(type, typeIndex) {
                                        return {
                                            types: type,
                                            restParam: typeIndex === params.length - 1 && hasRestParam(params)
                                        };
                                    })
                                ];
                            }
                            return _splitParams(params, 0, []);
                        }
                        function hasConflictingParams(signature1, signature2) {
                            for(var ii = Math.max(signature1.params.length, signature2.params.length), i = 0; i < ii; i++)if (!hasOverlap(getExpectedTypeNames(signature1, i, !0), getExpectedTypeNames(signature2, i, !0))) return !1;
                            var len1 = signature1.params.length, len2 = signature2.params.length, restParam1 = hasRestParam(signature1.params), restParam2 = hasRestParam(signature2.params);
                            return restParam1 ? restParam2 ? len1 === len2 : len2 >= len1 : restParam2 ? len1 >= len2 : len1 === len2;
                        }
                        function createTypedFunction(name, signaturesMap) {
                            if (0 === Object.keys(signaturesMap).length) throw new SyntaxError("No signatures provided");
                            var parsedSignatures = [];
                            Object.keys(signaturesMap).map(function(signature) {
                                return parseSignature(signature, signaturesMap[signature], typed.conversions);
                            }).filter(notNull).forEach(function(parsedSignature) {
                                var conflictingSignature = findInArray(parsedSignatures, function(s) {
                                    return hasConflictingParams(s, parsedSignature);
                                });
                                if (conflictingSignature) throw new TypeError('Conflicting signatures "' + stringifyParams(conflictingSignature.params) + '" and "' + stringifyParams(parsedSignature.params) + '".');
                                parsedSignatures.push(parsedSignature);
                            });
                            var signatures = flatMap(parsedSignatures, function(parsedSignature) {
                                return (parsedSignature ? splitParams(parsedSignature.params, !1) : []).map(function(params) {
                                    return {
                                        params,
                                        fn: parsedSignature.fn
                                    };
                                });
                            }).filter(notNull);
                            signatures.sort(compareSignatures);
                            var ok0 = signatures[0] && signatures[0].params.length <= 2 && !hasRestParam(signatures[0].params), ok1 = signatures[1] && signatures[1].params.length <= 2 && !hasRestParam(signatures[1].params), ok2 = signatures[2] && signatures[2].params.length <= 2 && !hasRestParam(signatures[2].params), ok3 = signatures[3] && signatures[3].params.length <= 2 && !hasRestParam(signatures[3].params), ok4 = signatures[4] && signatures[4].params.length <= 2 && !hasRestParam(signatures[4].params), ok5 = signatures[5] && signatures[5].params.length <= 2 && !hasRestParam(signatures[5].params), allOk = ok0 && ok1 && ok2 && ok3 && ok4 && ok5, tests = signatures.map(function(signature) {
                                return compileTests(signature.params);
                            }), test00 = ok0 ? compileTest(signatures[0].params[0]) : notOk, test10 = ok1 ? compileTest(signatures[1].params[0]) : notOk, test20 = ok2 ? compileTest(signatures[2].params[0]) : notOk, test30 = ok3 ? compileTest(signatures[3].params[0]) : notOk, test40 = ok4 ? compileTest(signatures[4].params[0]) : notOk, test50 = ok5 ? compileTest(signatures[5].params[0]) : notOk, test01 = ok0 ? compileTest(signatures[0].params[1]) : notOk, test11 = ok1 ? compileTest(signatures[1].params[1]) : notOk, test21 = ok2 ? compileTest(signatures[2].params[1]) : notOk, test31 = ok3 ? compileTest(signatures[3].params[1]) : notOk, test41 = ok4 ? compileTest(signatures[4].params[1]) : notOk, test51 = ok5 ? compileTest(signatures[5].params[1]) : notOk, fns = signatures.map(function(signature) {
                                return compileArgsPreprocessing(signature.params, signature.fn);
                            }), fn0 = ok0 ? fns[0] : undef, fn1 = ok1 ? fns[1] : undef, fn2 = ok2 ? fns[2] : undef, fn3 = ok3 ? fns[3] : undef, fn4 = ok4 ? fns[4] : undef, fn5 = ok5 ? fns[5] : undef, len0 = ok0 ? signatures[0].params.length : -1, len1 = ok1 ? signatures[1].params.length : -1, len2 = ok2 ? signatures[2].params.length : -1, len3 = ok3 ? signatures[3].params.length : -1, len4 = ok4 ? signatures[4].params.length : -1, len5 = ok5 ? signatures[5].params.length : -1, iStart = allOk ? 6 : 0, iEnd = signatures.length, generic = function() {
                                for(var i = iStart; i < iEnd; i++)if (tests[i](arguments)) return fns[i].apply(this, arguments);
                                throw createError(name, arguments, signatures);
                            }, fn = function fn(arg0, arg1) {
                                return arguments.length === len0 && test00(arg0) && test01(arg1) ? fn0.apply(fn, arguments) : arguments.length === len1 && test10(arg0) && test11(arg1) ? fn1.apply(fn, arguments) : arguments.length === len2 && test20(arg0) && test21(arg1) ? fn2.apply(fn, arguments) : arguments.length === len3 && test30(arg0) && test31(arg1) ? fn3.apply(fn, arguments) : arguments.length === len4 && test40(arg0) && test41(arg1) ? fn4.apply(fn, arguments) : arguments.length === len5 && test50(arg0) && test51(arg1) ? fn5.apply(fn, arguments) : generic.apply(fn, arguments);
                            };
                            try {
                                Object.defineProperty(fn, "name", {
                                    value: name
                                });
                            } catch (err) {}
                            return fn.signatures = createSignaturesMap(signatures), fn;
                        }
                        function notIgnore(typeName) {
                            return -1 === typed.ignore.indexOf(typeName);
                        }
                        function trim(str) {
                            return str.trim();
                        }
                        function notEmpty(str) {
                            return !!str;
                        }
                        function notNull(value) {
                            return null !== value;
                        }
                        function isInvalidParam(param) {
                            return 0 === param.types.length;
                        }
                        function initial(arr) {
                            return arr.slice(0, arr.length - 1);
                        }
                        function last(arr) {
                            return arr[arr.length - 1];
                        }
                        function slice(arr, start, end) {
                            return Array.prototype.slice.call(arr, start, end);
                        }
                        function contains(array, item) {
                            return -1 !== array.indexOf(item);
                        }
                        function hasOverlap(array1, array2) {
                            for(var i = 0; i < array1.length; i++)if (contains(array2, array1[i])) return !0;
                            return !1;
                        }
                        function findInArray(arr, test) {
                            for(var i = 0; i < arr.length; i++)if (test(arr[i])) return arr[i];
                        }
                        function uniq(arr) {
                            for(var entries = {}, i = 0; i < arr.length; i++)entries[arr[i]] = !0;
                            return Object.keys(entries);
                        }
                        function flatMap(arr, callback) {
                            return Array.prototype.concat.apply([], arr.map(callback));
                        }
                        function getName(fns) {
                            for(var name = "", i = 0; i < fns.length; i++){
                                var fn = fns[i];
                                if (("object" == typeof fn.signatures || "string" == typeof fn.signature) && "" !== fn.name) {
                                    if ("" === name) name = fn.name;
                                    else if (name !== fn.name) {
                                        var err = new Error("Function names do not match (expected: " + name + ", actual: " + fn.name + ")");
                                        throw err.data = {
                                            actual: fn.name,
                                            expected: name
                                        }, err;
                                    }
                                }
                            }
                            return name;
                        }
                        function extractSignatures(fns) {
                            var err, signaturesMap = {};
                            function validateUnique(_signature, _fn) {
                                if (signaturesMap.hasOwnProperty(_signature) && _fn !== signaturesMap[_signature]) throw (err = new Error('Signature "' + _signature + '" is defined twice')).data = {
                                    signature: _signature
                                }, err;
                            }
                            for(var i = 0; i < fns.length; i++){
                                var fn = fns[i];
                                if ("object" == typeof fn.signatures) for(var signature in fn.signatures)fn.signatures.hasOwnProperty(signature) && (validateUnique(signature, fn.signatures[signature]), signaturesMap[signature] = fn.signatures[signature]);
                                else {
                                    if ("string" != typeof fn.signature) throw (err = new TypeError("Function is no typed-function (index: " + i + ")")).data = {
                                        index: i
                                    }, err;
                                    validateUnique(fn.signature, fn), signaturesMap[fn.signature] = fn;
                                }
                            }
                            return signaturesMap;
                        }
                        return (typed = createTypedFunction("typed", {
                            "string, Object": createTypedFunction,
                            Object: function(signaturesMap) {
                                var fns = [];
                                for(var signature in signaturesMap)signaturesMap.hasOwnProperty(signature) && fns.push(signaturesMap[signature]);
                                return createTypedFunction(getName(fns), signaturesMap);
                            },
                            "...Function": function(fns) {
                                return createTypedFunction(getName(fns), extractSignatures(fns));
                            },
                            "string, ...Function": function(name, fns) {
                                return createTypedFunction(name, extractSignatures(fns));
                            }
                        })).create = create, typed.types = _types, typed.conversions = _conversions, typed.ignore = _ignore, typed.convert = convert, typed.find = find, typed.addType = function(type, beforeObjectTest) {
                            if (!type || "string" != typeof type.name || "function" != typeof type.test) throw new TypeError("Object with properties {name: string, test: function} expected");
                            if (!1 !== beforeObjectTest) {
                                for(var i = 0; i < typed.types.length; i++)if ("Object" === typed.types[i].name) return void typed.types.splice(i, 0, type);
                            }
                            typed.types.push(type);
                        }, typed.addConversion = function(conversion) {
                            if (!conversion || "string" != typeof conversion.from || "string" != typeof conversion.to || "function" != typeof conversion.convert) throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");
                            typed.conversions.push(conversion);
                        }, typed;
                    }
                    return create();
                }, void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module1.exports = __WEBPACK_AMD_DEFINE_RESULT__);
            }
        }, __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (void 0 !== cachedModule) return cachedModule.exports;
            var module1 = __webpack_module_cache__[moduleId] = {
                exports: {}
            };
            return __webpack_modules__[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__), module1.exports;
        }
        return __webpack_require__.d = (exports, definition)=>{
            for(var key in definition)__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key) && Object.defineProperty(exports, key, {
                enumerable: !0,
                get: definition[key]
            });
        }, __webpack_require__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop), __webpack_require__.r = (exports)=>{
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(exports, "__esModule", {
                value: !0
            });
        }, __webpack_require__(961);
    })();
});

},{}],"iA36X":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["fJc2q","5w5Zp"], "5w5Zp", "parcelRequire94c2")

//# sourceMappingURL=index2.c1107ca3.js.map
