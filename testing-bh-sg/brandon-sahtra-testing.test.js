// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Write the function that will make the test pass.

// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");
// const { CHAR_FORM_FEED } = require("picomatch/lib/constants");
// const { describe } = require("yargs");

// Write the function that will make the test pass.

describe('tired meter', ()=>{
    test('whether tired meter is true or not', ()=>{
        var tired = true
        var notTired = false
        expect(tiredMeter(tired)("drink coffee")).toEqual(true)
        expect(tiredMeter(notTired)("keep working")).toEqual(false)
    })
})

// declare a function named tiredMeter
// evaluation should be tired or not tired
// conditionals if tired = true then drink Coffee if not, keep working
const tiredMeter = (a) => {
    if(tiredMeter === tired){
        return "Drink coffee"
    } else{
        return "Keep working"
    }
}