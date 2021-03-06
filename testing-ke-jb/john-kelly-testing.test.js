// 1.Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
    // Write the function that will make the test pass.

const { TestWatcher } = require("@jest/core")

    // Putting in a describe method that returns "drink coffee" or "keep working"

//     describe("areYouTired", () => {
//         // The test method describing what the function does
//         test("return a string that says drink coffee or keep working based on input", () => {
//             // expect method calling on the coffee function followed by the .toEqual()
//             expect(areYouTired("yes")).toEqual("drink coffee")
//             expect(areYouTired("no")).toEqual("keep working")
//         })
//     })

// const areYouTired = (string) => {
//     if(string === "yes"){
//         return "drink coffee"
//     } else if(string === "no"){
//         return "keep working"
//     }
// }

// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
    // Write the function that will make the test pass.

    // Write a describe function that will log "Relax" or "keep going" if you are not stressed
    describe("areYouStressed", () => {
        test ("return relaxed or keep going based on input", () => {
            // expect method calling on the function to return yes or no
            expect(areYouStressed("yes")).toEqual("relax")
            expect(areYouStressed("no")).toEqual("keep going")
        })
    })

    const areYouStressed = (string) => {
        if(string === "yes"){
            return "relax"
        } else if(string === "no"){
            return "keep going"
        }
    }

// 3. Write the test for a function that returns "in budget" if a price is lower than $300.
// Write the function that will make the test pass.

describe("withinBudget", () => {
    test ("return in budget based on input", () => {
        // expect method calling on the function to return in budget
        expect(withinBudget("yes")).toEqual("in budget")
    })
})

const areYouStressed = (string) => {
    if(string === "yes"){
        return "relax"
    } else if(string === "no"){
        return "keep going"
    }
}

// Write the test for a function that takes in two arguments(numbers) and returns the smaller number.
// Write the function that will make the test pass.
// Write the test for a function that takes in one argument(number) and returns whether the number is odd.
// Write the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Write the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".
// Write the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Write the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Write the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Write the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Write the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Write the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
// Write the function that will make the test pass.
