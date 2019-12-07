const express = require("express")
require("./db/mongoose")

const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT
// app.use((req, res, next) => {
//     if (req.method === "GET") {
//         res.send("Get request are disabled")
//     } else {
//         next();
//     }
// })

// const multer = require("multer")
// const upload = multer({
//     dest: "images",
//     limits: {
//         fileSize: 1000000 //1mb
//     },
//     fileFilter(req, file, cb) {
//         // if (!file.originalname.endsWith(".pdf")) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {            
//             return cb(new Error("File must be a PDF"))
//         }
//         cb(undefined, true)
        
//     //     cb(new Error("File must be a PDF"))
//     //     cb(undefined, true)
//     //     cb(undefined, false)
//     }
// })

// app.post("/upload", upload.single("upload"), (req, res) => {
//     res.send()
// })
// const errorMiddleware = (req, res, next) => {
//     throw new Error("from my middeware")
// }
// app.post("/upload", errorMiddleware, (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send()
// })
// app.post("/upload", upload.single("upload"), (req, res) => {
//     res.send()
// }, (error, req, res, next) => { //this will provide custom error instead of the ugly html error
//     res.status(400).send({error: error.message})
// })

/** express middleware function */
// app.use((req, res, next) => {
//     res.status(503).send("site is currently down. Check back soon!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => console.log("Server is up on the port " + port))

// const bcrypt = require("bcryptjs")
// const myFunc = async () => {
//     const password = "Red12345!"
//     const hashPassword = await bcrypt.hash(password, 8)
// }

// const jwt = require("jsonwebtoken")
// const myFunc = async () => {
//     const token = jwt.sign({_id: "abc123"}, JWT_SECRET, {expiresIn: "7 days"})
//     const data = jwt.verify(token, process.env.JWT_SECRET)
// }
// myFunc()

// const pet = {
//     name: "Hal"
// }

// pet.toJSON = function(){
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet)) 

// const Task = require("./models/task")
// const User = require("./models/user")

// const main = async () => {
//     // const task = await Task.findById("5de8a30b40b4720aa0b088c3")
//     // await task.populate("owner").execPopulate()
//     // console.log(task.owner)
    
//     const user = await User.findById("5de8a2f340b4720aa0b088c1")
//     await user.populate("tasks").execPopulate()
//     console.log(user.tasks)
// }

// main()