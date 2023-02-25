// ==UserScript==
// @name         Twitch Ad Blocker
// @namespace    https://github.com/jaemin1508
// @version      0.0.1
// @description  Block or decrease chance of ads by faking I am watching this stream in front page
// @author       https://github.com/jaemin1508
// @match        *://*.twitch.tv/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(()=>{if(window._twAdblock)throw Error("Script already loaded");window._twAdblock=!0;let e=window.fetch;window.fetch=function(){let t;if("https://gql.twitch.tv/gql#origin=twilight"===arguments[0]){let o=JSON.parse(arguments[1].body);if("object"==typeof o)"PlaybackAccessToken"===o.operationName&&(o.variables.playerType="frontpage",console.log("hooked"));else if("array"==typeof o)for(let a of o)"PlaybackAccessToken"===a.operationName&&(o.variables.playerType="frontpage",console.log("hooked"));arguments[1].body=JSON.stringify(o),t=e.apply(this,arguments)}else t=e.apply(this,arguments);return t},console.log("script loaded")})();
