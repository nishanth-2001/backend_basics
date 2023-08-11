const fs = require("node:fs")
const { resolve } = require("node:path")

const data = fs.readFileSync("./src/files/text.txt", { encoding: "utf-8"})
console.log(data)

fs.readFile("./src/files/text.txt", { encoding:"utf-8"}, (err, data) => {
    if (err) {
        console.log("if")
        console.log(err)
    } else {
        console.log("else")
        console.log(data)
    }
})


//promise
const readFilePromiseFn = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: "utf-8"} , (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// readFilePromiseFn("./src/files/text.txt")
// .then((data) => {
//     console.log("Success =>", data)
//     return readFilePromiseFn("./src/files/text2.txt")
// })
// .then((data2) => {
//     console.log("Success2 => ", data2)
// })
// .catch((err) => {
//     console.log("err =>", err)
// })

//asyn await

const asyncCheck = async () => {
    try {
        // const data = await readFilePromiseFn("./src/files/text.txt")
        // console.log("Async data => ", data)
        // const data2 = await readFilePromiseFn("./src/files/text.txt2")
        // console.log("Async data2", data2)

        const datas = await Promise.all([
            readFilePromiseFn("./src/files/text2.txt"),
            readFilePromiseFn("./src/files/text.txt"),
            readFilePromiseFn("./src/files/text3.txt")
        ])
        console.log("Datas => ", datas)
    } catch (err) {
        console.log("Async err => ",err)
    }
} 

asyncCheck()

