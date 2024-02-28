import jwt from 'jsonwebtoken'

const authentication = async(req, res ,next) => {
    const token = req.cookies.token

    if(!token){
        return  res.status(400).json({error: 'no authorization token'})
     }

     try{
        const decodedToken = jwt.verify(token,process.env.SECRET)
        if(!decodedToken){
            return res.status(400).json({error: 'not a valid token'})
          }
          req.user = decodedToken
          next()

     }
     catch(error){
        res.status(500).json({error: error.message})
     }
}

export default authentication