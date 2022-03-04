import express,{Application} from 'express'
import config from 'config'

const connectDB:Function = require('./db/utils')

const port:number = config.get("port")


const characterRoutes = require('./routes/characters')
 

const app: Application = express()

app.use('/api/v1/characters', characterRoutes)
    

app.listen(port, async ()=>
    {
        await connectDB(config.get("mongo_uri"))
        console.log(`Server listening on port ${port}`)
    }
)
