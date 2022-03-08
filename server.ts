import express,{Application} from 'express'
import config from 'config'
import bodyParser from 'body-parser'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import * as morgan from 'morgan'

import {connectDB} from './db/utils'
import {createCustomError, errorHandler} from './middleware/errorHandler'

const port:number = config.get("port")


const characterRoutes = require('./routes/characters')


const app: Application = express()


// // Middlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload({
    createParentPath:true
}))
app.use(errorHandler)
app.use(morgan.default('dev'))

// // Routes
app.use('/api/v1/characters', characterRoutes)

// // Error handling
// // 404
// Typescript doesn't check if parameters with a "_" are unused
app.all('/*',(_req,_res,next) => {
  const err = createCustomError("URL doesn't exist", 404)
  next(err)
})

app.listen(port, async ()=>
    {
        console.log("Attempting to connect to database")
        await connectDB(config.get("mongo_uri"))
        .then(function(){
            console.log('Connection established')
          },function(error:Error){
            console.error("Error connecting to the database",error)
          })
        console.log(`Server listening on port ${port}`)
    }
)
