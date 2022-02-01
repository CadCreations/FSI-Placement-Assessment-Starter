
let yourName = "David May" 

// variables for cookies
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let maxCookies = 0  //cookie total

// get the id=credit and assign name
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

//create variables for the button elements
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const ssPlusBtn = document.querySelector('#add-sugar')
const ssMinusBtn = document.querySelector('#minus-sugar')

//create variables for the table
const gbTotal = document.querySelector('#qty-gb')
const ccTotal = document.querySelector('#qty-cc')
const ssTotal = document.querySelector('#qty-sugar')
const cookieTotal = document.querySelector('#qty-total')

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbTotal.textContent = gb
    maxCookies = gb + cc + sugar
    cookieTotal.textContent = maxCookies
})
ccPlusBtn.addEventListener('click', function() {
    cc++
    ccTotal.textContent = cc
    maxCookies = gb + cc + sugar
    cookieTotal.textContent = maxCookies
})
ssPlusBtn.addEventListener('click', function(){
    sugar++
    ssTotal.textContent = sugar
    maxCookies = gb + cc + sugar
    cookieTotal.textContent = maxCookies
})
gbMinusBtn.addEventListener('click', function(){
    if ( gb > 0) {gb--}
    else {gb = 0}
    gbTotal.textContent = gb
    maxCookies = gb + cc + sugar
    cookieTotal.textContent = maxCookies
})
ccMinusBtn.addEventListener('click', function(){
    if ( cc > 0) {cc--}
    else {cc = 0}
    ccTotal.textContent = cc
    maxCookies = gb + cc + sugar
    cookieTotal.textContent = maxCookies
})
ssMinusBtn.addEventListener('click', function(){
    if ( sugar > 0) {sugar--}
    else {sugar = 0}
    ssTotal.textContent = sugar
    maxCookies = gb + cc + sugar
    cookieTotal.textContent = maxCookies
})






