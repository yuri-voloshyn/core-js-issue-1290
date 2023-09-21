"use strict";

require("core-js/stable/global-this");

console.log("stable", window.globalThis);

function load_full() {
  require("core-js/full/global-this");
}

load_full();

console.log("full", window.globalThis);
