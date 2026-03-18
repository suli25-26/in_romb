/*
* File: app.js
* Author: Erős István
* Copyright: 2026, Erős István
* Group: Szoft I-N
* Date: 2026-03-18
* Github: https://github.com/eros12345/
* Licenc: MIT
*/

import { calcPerimeter, calcArea } from "./rhombus.js"

const rhombusForm = document.querySelector('#rhombusForm')
const sideInput = document.querySelector('#side')
const angleInput = document.querySelector('#angle')
const perimeterInput = document.querySelector('#perimeter')
const areaInput = document.querySelector('#area')

rhombusForm.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log('Számít...')
    startCalc()
})

function startCalc() {
    const side = Number(sideInput.value)
    const angle = Number(angleInput.value)
    console.log(side, angle)

    const perimeter = calcPerimeter(side)
    const area = calcArea(side, angle)
    perimeterInput.value = perimeter
    areaInput.value = area
}

