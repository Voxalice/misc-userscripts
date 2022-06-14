// ==UserScript==
// @name         Neopets - Games Room Ad Space Remover
// @namespace    https://github.com/Voxalice/
// @homepage     https://github.com/Voxalice/
// @version      2.0
// @encoding     utf-8
// @description  Removes empty ad space in old Games Room
// @author       Voxalice
// @match        *://www.neopets.com/games/*
// @icon         http://neopets.com/favicon.ico
// ==/UserScript==
for(i=2;i>-1;i--)$(".mid-content br.clear").eq(i).remove();