// ==UserScript==
// @name         Genius - Bring Back Old Song Page
// @namespace    http://github.com/Voxalice/
// @version      2
// @description  Automatically opts out of new song page
// @author       Voxalice
// @match        https://genius.com/*
// @icon         https://genius.com/favicon.ico
// @grant        none
// ==/UserScript==
window.location.href.endsWith("lyrics")&&(window.location.href+="?bagon=1");
