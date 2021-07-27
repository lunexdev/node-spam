>  node-spammer

**a simple spam module that requests a link**

# Use

```js
const spammer = require("node-spam")

spammer.on("spam" , data => {
console.log(`${data.number} requests sent to ${data.link}`)
});

spammer.on("error" , data => {
console.log(`Error due to ${data.reason} , error code: ${data.code}`)
});

spammer.start("link" , number)
```

**function docs**

|Function|Param|Param|
|-|-|-|
|start|link|number|

**event docs**

|Event|Param|Variables|Variables|
|-|-|-|-|
|spam|data|link|number|
|error|data|reason|code|
|ready|none|<none>|<none>|
