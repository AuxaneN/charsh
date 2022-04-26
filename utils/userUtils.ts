import * as bcrypt from "bcryptjs"
import * as jwt from "jsonwebtoken"
import config from 'config'
/**
 * Validate the user password
 * @param  password                   User input
 * @param  hash                       Stored and hashed password
 * @return boolean
 */
export const validatePassword = async (password:string, hash:string) => {
  const res = await bcrypt.compare(password, hash)
  return res
}

export const generatePassword = (password:string) => {
  const generatedHash = bcrypt.hash(password, 10, function(err:Error, hash:string){
    if (err) {console.log(err)}
    return hash
  });
  return generatedHash
}

export const issueJWT = (user:any) => {
  const _id = user._id
  const expiresIn = '1d'
  const key = config.get('jwt_secret') as string
  const payload = {
    sub:_id,
    iat: Date.now()
  }
  const signedToken = jwt.sign(payload, key, {expiresIn:expiresIn, algorithm:'RS256'})

  return {
    token:"Bearer" + signedToken,
    expires: expiresIn
  }

}
