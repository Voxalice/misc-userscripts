// ==UserScript==
// @name         Genius - Bring Back Old Song Page
// @namespace    https://github.com/Voxalice/
// @version      3
// @description  Disables new song page.
// @author       Voxalice
// @match        https://genius.com/*
// @icon         https://genius.com/favicon.ico
// ==/UserScript==
!location.search&&(location.href+="?bagon=1")
