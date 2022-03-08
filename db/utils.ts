import {connect} from 'mongoose'

export const connectDB:Function = (url:string) => {
  return connect(url)
}
