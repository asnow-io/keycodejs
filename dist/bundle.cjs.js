"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Keycode=void 0,(e=exports.Keycode||(exports.Keycode={})).BACKSPACE="Backspace",e.TAB="Tab",e.ENTER="Enter",e.SHIFT_LEFT="ShiftLeft",e.SHIFT_RIGHT="ShiftRight",e.CTRL_LEFT="ControlLeft",e.CTRL_RIGHT="ControlRight",e.ALT_LEFT="AltLeft",e.ALT_RIGHT="AltRight",e.ESCAPE="Escape",e.SPACE="Space",e.ARROW_LEFT="ArrowLeft",e.ARROW_RIGHT="ArrowRight",e.ARROW_UP="ArrowUp",e.ARROW_DOWN="ArrowDown",e.DELETE="Delete",e.F1="F1",e.F2="F2",e.F3="F3",e.F4="F4",e.F5="F5",e.F6="F6",e.F7="F7",e.F8="F8",e.F9="F9",e.F10="F10",e.F11="F11",e.F12="F12",exports.wasPressed=function(e,F){return Array.isArray(F)?F.some((function(F){return e.code===F})):e.code===F};
