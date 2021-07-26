const spammer = require("../src/index")

spammer.on("spam" , data => {
    console.log(`${data.link} | ${data.number}`)
})

spammer.on("error" , data => {
   console.log(`${data.reason} this error code ${data.code}`)
})

spammer.start("https://lunexdev.ml" , 5)