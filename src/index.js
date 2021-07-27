const fetch = require("node-fetch")
const event = require("events")

class spam extends event {

constructor(){
    super()
}


start(link , number){
    if(!link) {
        return this.emit("error" , {reason:"Link value not entered" , code:404})
    }

    if(!number) {
        return this.emit("error" , {reason:"Enter how many times to request" , code:404})
    }

    if(typeof link !== "string") {
        return this.emit("error" , {reason:"Link string cannot be external value" , code:404})
    }

    if(typeof number !== "number") {
        return this.emit("error" , {reason:"Request Value to be Discarded Must be Number" , code:404})
    }

    this.emit("ready")

    for(var i = 0 ; i < number ; i++) {
        fetch(link)}
        this.emit("spam" , {link:link , number:number})
    }

 get info(){
     return {
         github: "https://github.com/lunexdev/node-spam",
         npm: "https://npmjs.org/node-spam",
    }
  }
}

module.exports = new spam
