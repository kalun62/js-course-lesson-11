"use strict";

const button = document.getElementById('btn')
const input = document.getElementById('text')
const square = document.getElementById('square')
const e_btn = document.getElementById('e_btn')
const range = document.getElementById('range')
let rangeSpan = document.getElementById('range-span')
const circle = document.getElementById('circle')
let color = ''



button.addEventListener('click', clickButton)
input.addEventListener('change', backColor)
range.addEventListener('input', sizeCircle)

function backColor() {
    color = input.value
}

function clickButton() {
    square.style.backgroundColor = color
}

function sizeCircle() {
    let size = range.value
    rangeSpan.textContent = size
    circle.style.width = size + '%'
    circle.style.height = size + '%'
}

e_btn.style.display = 'none'
