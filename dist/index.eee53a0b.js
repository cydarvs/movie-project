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
})({"ktLRR":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "acaebb41eee53a0b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_USE_SSE: boolean;
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2jDv3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "moviesEl", ()=>moviesEl);
var _api = require("./api");
var _createGalleryMarkup = require("./create-gallery-markup");
var _pagination = require("./pagination");
var _state = require("./state");
const moviesEl = document.querySelector(".movies");
window.addEventListener("load", ()=>{
    (0, _pagination.resetCurrentPage)();
    (0, _api.fetchPopularMovies)((0, _state.state).currentPage).then((res)=>{
        if ((0, _state.state).whatPaginated === "local") return;
        (0, _state.state).whatPaginated = "main";
        const { results, total_pages } = res;
        (0, _state.state).totalPages = total_pages;
        (0, _pagination.renderPaginationMarkup)();
        return (0, _createGalleryMarkup.renderGallery)(results);
    }).then((res)=>{
        moviesEl?.insertAdjacentHTML("beforeend", res);
    });
});

},{"./api":"9u7qN","./create-gallery-markup":"5nFxi","./pagination":"9j1Dd","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9u7qN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "page", ()=>page);
parcelHelpers.export(exports, "query", ()=>query);
parcelHelpers.export(exports, "fetchPopularMovies", ()=>fetchPopularMovies);
parcelHelpers.export(exports, "fetchTodayPopularMovies", ()=>fetchTodayPopularMovies);
parcelHelpers.export(exports, "fetchMoviesByQuery", ()=>fetchMoviesByQuery);
parcelHelpers.export(exports, "fetchMovieById", ()=>fetchMovieById);
parcelHelpers.export(exports, "fetchTrailerById", ()=>fetchTrailerById);
parcelHelpers.export(exports, "fetchGenres", ()=>fetchGenres);
parcelHelpers.export(exports, "BASE_URL", ()=>BASE_URL);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
let page;
let query;
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "9ce408291b177c2a2e598968d33c0b4a";
// const WATCH_KEY = 'watched';
// const QUEUE_KEY = 'queue';
async function fetchPopularMovies(page) {
    const url = new URL(`${BASE_URL}/trending/movie/week`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("page", page);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchTodayPopularMovies() {
    const url = new URL(`${BASE_URL}/trending/movie/day`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchMoviesByQuery(query, page) {
    const url = new URL(`${BASE_URL}/search/movie`);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("query", query);
    url.searchParams.append("page", page);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchMovieById(id) {
    const url = new URL(`${BASE_URL}/movie/${id}`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchTrailerById(id) {
    const url = new URL(`${BASE_URL}/movie/${id}/videos`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function fetchGenres() {
    const url = new URL(`${BASE_URL}/genre/movie/list`);
    url.searchParams.append("api_key", API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data.genres;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"5nFxi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGenres", ()=>getGenres);
parcelHelpers.export(exports, "renderGallery", ()=>renderGallery);
var _api = require("./api");
const NO_POSTER = `https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png`;
function getGenres(arrayId, genres) {
    const arr = [];
    for (const value of genres){
        if (arrayId === "N/A" || arrayId.length === 0) {
            arr.push("Other");
            break;
        } else if (arrayId.includes(value.id)) arr.push(value.name);
    }
    if (arr.length > 2) arr.splice(2, arr.length - 2, "Other");
    return arr.join(", ");
}
async function renderGallery(movies) {
    const genres = await (0, _api.fetchGenres)();
    return movies.map(({ id, poster_path, title, release_date, genre_ids, original_title, vote_average, popularity, vote_count, overview } = movies)=>{
        const poster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : NO_POSTER;
        const releaseYear = release_date ? release_date.split("-")[0] : "Unknown";
        const checkGenres = genre_ids ? getGenres(genre_ids, genres) : "Unknown";
        return `
      <li class='movie_list_item' data-id="${id}" >
      <div href="" class='movie_list_link link' id=${id}>
      <div class="movie__cover--darkened"
        data-id="${id}"
        data-poster_path="${poster_path}"
        data-title="${title}"
        data-genre_ids="${checkGenres}"
        data-original_title="${original_title}"
        data-vote_average="${vote_average}"
        data-popularity="${popularity}"
        data-vote_count="${vote_count}"
        data-overview="${overview}"
        data-release_date="${release_date}"
      ></div>
        <img class="movie_list_image" src=${poster} alt='Poster ${original_title}' loading='lazy' />
        <div class='movie-info'>
            <p class='movie-title'>
              <b>${title.toUpperCase()}</b>
            </p>
            <p class='movie-date'>
              <span>${checkGenres} | ${releaseYear}</span>
            </p>
            
        </div>
        </div>
      </li>
      `;
    }).join("");
}

},{"./api":"9u7qN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9j1Dd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resetCurrentPage", ()=>resetCurrentPage);
parcelHelpers.export(exports, "clearPagination", ()=>clearPagination);
parcelHelpers.export(exports, "renderPaginationMarkup", ()=>renderPaginationMarkup);
parcelHelpers.export(exports, "onBtnPageClick", ()=>onBtnPageClick);
var _api = require("./api");
var _createGalleryMarkup = require("./create-gallery-markup");
var _localStorage = require("./local-storage");
var _refs = require("./refs");
var _renderFromStorage = require("./render-from-storage");
var _renderingMovieCards = require("./rendering-movie-cards");
var _state = require("./state");
const { pagination } = (0, _refs.refs);
const resetCurrentPage = ()=>{
    (0, _state.state).currentPage = 1;
};
const clearPagination = ()=>{
    pagination.innerHTML = "";
};
const whatPaginated = async (where)=>{
    let markupGallery;
    switch(where){
        case "main":
            try {
                const { results } = await (0, _api.fetchPopularMovies)((0, _state.state).currentPage);
                markupGallery = await (0, _createGalleryMarkup.renderGallery)(results);
                (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markupGallery);
            } catch (error) {
                console.error(error.message);
            }
            break;
        case "search":
            try {
                const { results } = await (0, _api.fetchMoviesByQuery)((0, _state.state).query, (0, _state.state).currentPage);
                markupGallery = await (0, _createGalleryMarkup.renderGallery)(results);
                (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markupGallery);
            } catch (error) {
                console.error(error.message);
            }
            break;
        case "local":
            try {
                const films = (0, _state.state).whatchedOrQueue === "WATCHED" ? (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [] : (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
                markupGallery = await (0, _createGalleryMarkup.renderGallery)((0, _renderFromStorage.localPaginate)(films, (0, _state.state).currentPage));
            } catch (error) {
                console.error(error.message);
            }
            break;
        default:
            throw new Error(`Invalid 'where' parameter: ${where}`);
    }
    (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markupGallery);
};
const paginate = (totalPages, currentPage)=>{
    const groupSize = 5;
    const numGroups = Math.ceil(totalPages / groupSize);
    const currentGroup = Math.ceil(currentPage / groupSize);
    const startPage = (currentGroup - 1) * groupSize + 1;
    const endPage = Math.min(startPage + groupSize - 1, totalPages);
    const pages = Array.from({
        length: endPage - startPage + 1
    }, (_, i)=>startPage + i);
    const hasPrevGroup = currentGroup > 1;
    const hasNextGroup = currentGroup < numGroups;
    return {
        pages,
        hasPrevGroup,
        hasNextGroup
    };
};
const paginationMarkup = ()=>{
    if ((0, _state.state).totalPages <= 1) return;
    const { pages, hasPrevGroup, hasNextGroup } = paginate((0, _state.state).totalPages, (0, _state.state).currentPage);
    const firstPage = `<button type="button" class="start-btn page-btn">1</button>`;
    const lastPage = `<button type="button" class="end-btn page-btn">${(0, _state.state).totalPages}</button>`;
    const prev = `<button type="button" class="prev-btn page-btn"><svg class="icon icon-arrow-left">
    <use xlink:href="${(0, _state.state).sprite}#icon-arrow-left"></use>
  </svg></button>`;
    const next = `<button type="button" class="next-btn page-btn"><svg class="icon icon-arrow-right">
    <use xlink:href="${(0, _state.state).sprite}#icon-arrow-right"></use>
  </svg></button>`;
    const dotsBtnPrev = `<button class="page-btn prev-dots">...</button>`;
    const dotsBtnNext = `<button class="page-btn next-dots">...</button>`;
    const btnPages = pages.map((num)=>{
        const isActive = num === (0, _state.state).currentPage ? "active-page" : "";
        return `<button type="button" class="page-btn ${isActive}
        ">${num}</button>`;
    }).join("");
    const leftGroup = hasPrevGroup ? prev + firstPage + dotsBtnPrev : "";
    const rightGroup = hasNextGroup ? dotsBtnNext + lastPage + next : "";
    return leftGroup + btnPages + rightGroup;
};
const renderPaginationMarkup = ()=>{
    pagination.insertAdjacentHTML("beforeend", paginationMarkup());
};
const updateCurrentPage = (newPage)=>{
    (0, _state.state).currentPage = newPage;
    clearPagination();
    renderPaginationMarkup();
};
const goToNextPage = ()=>{
    updateCurrentPage((0, _state.state).currentPage + 1);
};
const goToPrevPage = ()=>{
    updateCurrentPage((0, _state.state).currentPage - 1);
};
const goToNextGroupBtn = ()=>{
    const { pages } = paginate((0, _state.state).totalPages, (0, _state.state).currentPage);
    const lastPageOfCurrentGroup = pages[pages.length - 1];
    const newPage = Math.min(lastPageOfCurrentGroup + 1, (0, _state.state).totalPages);
    (0, _state.state).currentPage = pages[pages.length - 1] + 1;
    updateCurrentPage(newPage);
};
const goToPrevGroupBtn = ()=>{
    const { pages } = paginate((0, _state.state).totalPages, (0, _state.state).currentPage);
    const firstPageOfCurrentGroup = pages[0];
    const newPage = Math.max(firstPageOfCurrentGroup - 1, 1);
    updateCurrentPage(newPage);
};
const changePageByClick = (evt)=>{
    const activeBtn = document.querySelector(".active-page");
    const selectedPage = Number(evt.target.textContent) || (0, _state.state).currentPage;
    if (selectedPage === (0, _state.state).currentPage) return;
    updateCurrentPage(selectedPage);
    activeBtn.classList.remove("active-page");
    evt.target.classList.add("active-page");
};
const onBtnPageClick = async (evt)=>{
    if (evt.target.nodeName !== "BUTTON") return;
    if (Number(evt.target.textContent) === (0, _state.state).currentPage) return;
    if (evt.target.classList.contains("next-btn")) goToNextPage();
    if (evt.target.classList.contains("prev-btn")) goToPrevPage();
    if (evt.target.classList.contains("next-dots")) goToNextGroupBtn();
    if (evt.target.classList.contains("prev-dots")) goToPrevGroupBtn();
    changePageByClick(evt);
    window.scrollTo({
        top: 0
    });
    (0, _renderingMovieCards.moviesEl).innerHTML = "";
    whatPaginated((0, _state.state).whatPaginated);
};

},{"./api":"9u7qN","./create-gallery-markup":"5nFxi","./local-storage":"4Qyzi","./refs":"2WoF2","./render-from-storage":"gir1X","./rendering-movie-cards":"2jDv3","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Qyzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setToLocalStorage", ()=>setToLocalStorage);
parcelHelpers.export(exports, "getFromStorage", ()=>getFromStorage);
parcelHelpers.export(exports, "localStorageKeys", ()=>localStorageKeys);
const setToLocalStorage = (key, value)=>{
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error.messege);
    }
};
const getFromStorage = (key)=>{
    try {
        const serialisedState = localStorage.getItem(key);
        return serialisedState === null ? undefined : JSON.parse(serialisedState);
    } catch (error) {
        console.log(error.messege);
    }
};
const localStorageKeys = {
    WATCHED: "watched",
    QUEUE: "queue"
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2WoF2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refs", ()=>refs);
const refs = {
    foterLink: document.querySelector(".footer__link"),
    form: document.querySelector(".header-search-form"),
    pagination: document.querySelector(".pagination"),
    btnWrapper: document.querySelector("#buttonWrapper"),
    addToWatchedBtn: document.querySelector(".add-to-watched-btn"),
    addToQueueBtn: document.querySelector(".add-to-queue-btn"),
    moviesLib: document.querySelector(".movies-lib"),
    watchedQueueBtnBlock: document.querySelector(".buttons-block"),
    buttonWatched: document.querySelector(".button-watched"),
    buttonQueue: document.querySelector(".button-queue")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gir1X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateLibRender", ()=>updateLibRender);
parcelHelpers.export(exports, "localPaginate", ()=>localPaginate);
parcelHelpers.export(exports, "loadFromStorageWatched", ()=>loadFromStorageWatched);
parcelHelpers.export(exports, "onClickWatched", ()=>onClickWatched);
var _createGalleryMarkup = require("./create-gallery-markup");
var _localStorage = require("./local-storage");
var _pagination = require("./pagination");
var _renderingMovieCards = require("./rendering-movie-cards");
var _state = require("./state");
const updateLibRender = async (data)=>{
    try {
        let markup = "";
        const warning = `<li class="watched-img"><p class="watched-warning">No movies added yet.</p></li>`;
        (0, _pagination.resetCurrentPage)();
        const films = localPaginate(data, (0, _state.state).currentPage);
        if (data === undefined || data.length === 0) {
            (0, _pagination.clearPagination)();
            markup = warning;
        } else {
            markup = await (0, _createGalleryMarkup.renderGallery)(films);
            (0, _pagination.clearPagination)();
            (0, _pagination.renderPaginationMarkup)();
        }
        (0, _renderingMovieCards.moviesEl).innerHTML = "";
        (0, _renderingMovieCards.moviesEl).insertAdjacentHTML("beforeend", markup);
    } catch (error) {
        console.error(error.message);
    }
};
const localPaginate = (array, currentPage)=>{
    if (!array) return;
    const itemsPerPage = 6;
    const startIndex = (currentPage - 1) * itemsPerPage;
    (0, _state.state).totalPages = Math.ceil(array.length / itemsPerPage);
    return array.slice(startIndex, startIndex + itemsPerPage);
};
const loadFromStorageWatched = ()=>{
    const data = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED);
    (0, _state.state).whatPaginated = "local";
    (0, _state.state).whatchedOrQueue = "WATCHED";
    updateLibRender(data);
};
const onClickWatched = async (evt)=>{
    if (evt.target.nodeName !== "BUTTON") return;
    if (evt.target.classList.contains("active")) return;
    const activeBtn = document.querySelector(".active");
    let key = evt.target.dataset.value.toUpperCase();
    (0, _state.state).whatchedOrQueue = key;
    const data = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys)[key]);
    updateLibRender(data);
    activeBtn.classList.remove("active");
    evt.target.classList.add("active");
};

},{"./create-gallery-markup":"5nFxi","./local-storage":"4Qyzi","./pagination":"9j1Dd","./rendering-movie-cards":"2jDv3","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FZFo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    currentPage: 1,
    totalPages: 0,
    activeFilm: null,
    query: null,
    whatPaginated: null,
    whatchedOrQueue: null,
    sprite: new URL(require("93f2b2b725a48c83"))
};

},{"93f2b2b725a48c83":"kruyQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kruyQ":[function(require,module,exports) {
module.exports = require("85dbb1a8db7cb0f0").getBundleURL("ePbtE") + "sprite.f14d31f7.svg" + "?" + Date.now();

},{"85dbb1a8db7cb0f0":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"dFNG1":[function(require,module,exports) {
var _addToWatchedQueue = require("./add-to-watched&queue");
var _api = require("./api");
var _loadingIntoModal = require("./loading-into-modal");
var _localStorage = require("./local-storage");
var _refs = require("./refs");
var _state = require("./state");
const modal = document.getElementById("info-modal");
const modalWind = document.getElementById("modal");
const animationLogic = ()=>{
    modalWind.classList.remove("openModalAnimation");
    modalWind.classList.add("closeModalAnimation");
    setTimeout(()=>{
        modal.classList.remove("open");
        localStorage.removeItem("modalCardData");
    }, 600);
};
window.addEventListener("keydown", (event)=>{
    if (event.key === "Escape") animationLogic();
});
const backdrop = document.getElementById("close-modal");
backdrop.addEventListener("click", (event)=>{
    if (event.target == backdrop) animationLogic();
});
window.onclick = (event)=>{
    let modal = document.getElementById("info-modal");
    if (event.target == modal) animationLogic();
};
window.onload = ()=>{
    const movieListItems = document.getElementsByClassName("movies")[0];
    const movieLib = document.getElementsByClassName("movies-lib")[0];
    movieListItems?.addEventListener("click", (e)=>{
        onMovieItemHandler(e);
    });
    movieLib?.addEventListener("click", (e)=>{
        onMovieItemHandler(e);
    });
    const onMovieItemHandler = (e)=>{
        const cardData = {
            ...e.target.dataset
        };
        if (!Object.keys(cardData).length) return;
        ////buttons
        (0, _state.state).activeFilm = cardData;
        ////buttons
        localStorage.setItem("modalCardData", JSON.stringify(cardData));
        openModal();
        //buttons
        const watchedFilms = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [];
        const queueFilms = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
        if (watchedFilms.find((film)=>film.id === (0, _state.state).activeFilm.id)) (0, _refs.refs).addToWatchedBtn.innerText = "REMOVE FROM WATCHED";
        else (0, _refs.refs).addToWatchedBtn.innerText = "ADD TO WATCHED";
        if (queueFilms.find((film)=>film.id === (0, _state.state).activeFilm.id)) (0, _refs.refs).addToQueueBtn.innerText = "REMOVE FROM QUEUE";
        else (0, _refs.refs).addToQueueBtn.innerText = "ADD TO QUEUE";
    //buttons
    };
};
const openModal = ()=>{
    const modal = document.getElementById("info-modal");
    modal.classList.add("open");
    modalWind.classList.add("openModalAnimation");
    _loadingIntoModal.getInitialModalData();
};

},{"./add-to-watched&queue":"7FmdW","./api":"9u7qN","./loading-into-modal":"coViy","./local-storage":"4Qyzi","./refs":"2WoF2","./state":"2FZFo"}],"7FmdW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onBtnAddToLibrary", ()=>onBtnAddToLibrary);
parcelHelpers.export(exports, "updateMarkupLibrary", ()=>updateMarkupLibrary);
var _localStorage = require("./local-storage");
var _pagination = require("./pagination");
var _refs = require("./refs");
var _renderFromStorage = require("./render-from-storage");
var _state = require("./state");
const onBtnAddToLibrary = (evt)=>{
    const watchedFilmsArray = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [];
    const queueFilmsArray = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
    if (evt.target.innerText === "ADD TO WATCHED") saveToStorageFilm(watchedFilmsArray, (0, _localStorage.localStorageKeys).WATCHED, "WATCHED", evt);
    else if (evt.target.innerText === "REMOVE FROM WATCHED") deleteFromStorageFilm(watchedFilmsArray, (0, _localStorage.localStorageKeys).WATCHED, "WATCHED", evt);
    else if (evt.target.innerText === "ADD TO QUEUE") saveToStorageFilm(queueFilmsArray, (0, _localStorage.localStorageKeys).QUEUE, "QUEUE", evt);
    else if (evt.target.innerText === "REMOVE FROM QUEUE") deleteFromStorageFilm(queueFilmsArray, (0, _localStorage.localStorageKeys).QUEUE, "QUEUE", evt);
};
function saveToStorageFilm(array, key, keyValue, evt) {
    array.push((0, _state.state).activeFilm);
    (0, _localStorage.setToLocalStorage)(key, array);
    evt.target.innerText = `REMOVE FROM ${keyValue}`;
}
function deleteFromStorageFilm(array, key, keyValue, evt) {
    const filteredFilms = array.filter((film)=>film.id !== (0, _state.state).activeFilm.id);
    (0, _localStorage.setToLocalStorage)(key, filteredFilms);
    evt.target.innerText = `ADD TO ${keyValue}`;
}
function updateMarkupLibrary(evt) {
    if (evt.target.innerText === "ADD TO WATCHED") deleteFromWatchedMarkup();
    else if (evt.target.innerText === "REMOVE FROM WATCHED") deleteFromWatchedMarkup();
    else if (evt.target.innerText === "ADD TO QUEUE") deleteFromQueueMarkup();
    else if (evt.target.innerText === "REMOVE FROM QUEUE") deleteFromQueueMarkup();
}
async function deleteFromWatchedMarkup() {
    (0, _pagination.resetCurrentPage)();
    const watchedFilmsinLocalStorage = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).WATCHED) || [];
    const films = (0, _renderFromStorage.localPaginate)(watchedFilmsinLocalStorage, (0, _state.state).currentPage);
    (0, _renderFromStorage.updateLibRender)(films);
    chahgeBtnActiveStatus((0, _refs.refs).buttonWatched, (0, _refs.refs).buttonQueue);
}
async function deleteFromQueueMarkup() {
    (0, _pagination.resetCurrentPage)();
    const queueFilmsinLocalStorage = (0, _localStorage.getFromStorage)((0, _localStorage.localStorageKeys).QUEUE) || [];
    const films = (0, _renderFromStorage.localPaginate)(queueFilmsinLocalStorage, (0, _state.state).currentPage);
    (0, _renderFromStorage.updateLibRender)(films);
    chahgeBtnActiveStatus((0, _refs.refs).buttonQueue, (0, _refs.refs).buttonWatched);
}
function chahgeBtnActiveStatus(elFirst, elSecond) {
    elFirst.classList.add("active");
    elSecond.classList.remove("active");
}

},{"./local-storage":"4Qyzi","./pagination":"9j1Dd","./refs":"2WoF2","./render-from-storage":"gir1X","./state":"2FZFo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"coViy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filmId", ()=>filmId);
parcelHelpers.export(exports, "getInitialModalData", ()=>getInitialModalData);
let filmId;
const NO_POSTER = "https://i.ibb.co/r76r6Vt/oie-30214851-Ms-Wl-PTS0.png";
const averageElement = document.createElement("span");
const countElement = document.createElement("span");
const getInitialModalData = ()=>{
    const cardData = JSON.parse(localStorage.getItem("modalCardData"));
    const filmImg = document.getElementById("film-img");
    const filmTitle = document.getElementById("film-title");
    const votes = document.getElementById("votes");
    const popul = document.getElementById("popul");
    const origTitle = document.getElementById("origTitle");
    const genre = document.getElementById("genre");
    filmId = cardData.id;
    filmImg.src = cardData.poster_path !== "null" ? filmImg.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500${cardData.poster_path}')` : filmImg.style.backgroundImage = `url('${NO_POSTER}')`;
    filmTitle.innerText = cardData.title ? `${cardData.title}` : "N/A";
    about.innerText = cardData.overview ? `${cardData.overview}` : "N/A";
    averageElement.className = "average";
    countElement.className = "count";
    averageElement.innerText = cardData.vote_average ? `${(cardData.vote_average * 1).toFixed(1)}` : "N/A";
    countElement.innerText = cardData.vote_count ? `/ ${cardData.vote_count}` : "N/A";
    votes.append(averageElement, countElement);
    popul.innerText = cardData.popularity ? `${(cardData.popularity * 1).toFixed(1)}` : "N/A";
    origTitle.innerText = cardData.original_title ? `${cardData.original_title}` : "N/A";
    genre.innerText = cardData.genre_ids ? `${cardData.genre_ids}` : "N/A";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jQ8Lr":[function(require,module,exports) {
const refs = {
    openModal: document.querySelector(".open-modal-team"),
    closeModal: document.querySelector(".close-modal-team"),
    teamBackdrop: document.querySelector(".backdrop-modal"),
    teamModal: document.getElementsByClassName("team__modal")
};
refs.openModal.addEventListener("click", openModalTeam);
refs.closeModal.addEventListener("click", closeModalTeam);
function openModalTeam(event) {
    refs.teamBackdrop.classList.remove("team__backdrop--hidden");
    document.addEventListener("keydown", onEscapeClose);
    document.addEventListener("click", onBackdropClose);
    refs.teamModal[0].classList.add("openModalAnimationTeam");
// document.body.style.overflow = 'hidden';
}
function closeModalTeam(event) {
    refs.teamModal[0].classList.remove("closeModalAnimationTeam");
    refs.teamBackdrop.classList.add("team__backdrop--hidden");
    document.removeEventListener("keydown", onEscapeClose);
    document.body.style.overflow = "";
}
function onEscapeClose(event) {
    if (event.code === "Escape") {
        refs.teamModal[0].classList.remove("openModalAnimationTeam");
        refs.teamModal[0].classList.add("closeModalAnimationTeam");
        setTimeout(()=>{
            closeModalTeam();
        }, 400);
        closeModalTeam();
    }
}
function onBackdropClose(event) {
    if (event.target === refs.teamBackdrop) {
        refs.teamModal[0].classList.remove("openModalAnimationTeam");
        refs.teamModal[0].classList.add("closeModalAnimationTeam");
        setTimeout(()=>{
            closeModalTeam();
        }, 400);
    }
}

},{}],"aAovl":[function(require,module,exports) {
const mask = document.querySelector(".mask");
window.addEventListener("load", ()=>{
    mask.classList.add("hide");
});

},{}]},["ktLRR"], null, "parcelRequired7c6")

//# sourceMappingURL=index.eee53a0b.js.map
