// ==UserScript==
// @name         Youtube AutoCensor
// @namespace    https://github.com/Voxalice/
// @homepage     https://github.com/Voxalice/
// @version      1.0.1
// @encoding     utf-8
// @description  Automatically mutes certain words (AUTOMATIC CAPTIONS)
// @icon         https://youtube.com/favicon.ico
// @author       Voxalice
// @match        *://*.youtube.com/*
// ==/UserScript==

/*/
    This line broadly censors harsh curse words:
    var blockedWords = ['[ __ ]'];

    May not work if YouTube tab isn't visible.

    This userscript doesn't work perfectly.
    It's based off YouTube's automatic captioning system,
    which seems to be a lot more accurate nowadays.
/*/

// The automatic captions must end with one of the items
// in this array to censor.
var blockedWords = ['[ __ ]'];

// Self-explanatory
function mutePlayer(b) {
    document.querySelector("video").muted = b;
}

setInterval(function() {
    // Find the last caption line...
    var ulast_caption = document.querySelectorAll(".ytp-caption-segment");
    ulast_caption = ulast_caption[ulast_caption.length-1];

    if (ulast_caption) {
        var uls_cp_vlw = ulast_caption.innerText.split(" ");
        uls_cp_vlw = uls_cp_vlw[uls_cp_vlw.length-1];

        // Checks if automatic captions end with any array item
        if (blockedWords.some(s => uls_cp_vlw.endsWith(s))) {
            mutePlayer(true);
        } else {
            // If the mute button is toggled on, don't unmute the player
            if (!document.querySelector("div.ytp-left-controls > span > div").ariaValueText.includes("muted")) {
                mutePlayer(false);
                console.log(uls_cp_vlw);
            }
        }
    }
},5);

// Credz
document.querySelector("#logo-icon").insertAdjacentText("afterend"," autocensored ");
console.log("Youtube AutoCensor 1.0");
