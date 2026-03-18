/*
* File: rhombus.js
* Author: Erős István
* Copyright: 2026, Erős István
* Group: Szoft I-N
* Date: 2026-03-18
* Github: https://github.com/eros12345/
* Licenc: MIT
*/

function calcPerimeter(side) {
    return side * 4
}

function calcArea(side, angle) {
    const rad = angle * Math.PI / 180
    return Math.pow(side, 2) * Math.sin(rad)
}

export { calcPerimeter, calcArea }
