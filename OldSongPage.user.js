// ==UserScript==
// @name         Genius - Bring Back Old Song Page
// @namespace    http://github.com/Voxalice/
// @version      1
// @description  Automatically opts out of new song page
// @author       Voxalice
// @match        https://genius.com/*
// @icon         https://genius.com/favicon.ico
// @grant        none
// ==/UserScript==

document.querySelector("#lyrics-root > div.LyricsControls__Container-sghmdv-0.bnFCuj > a").click();
