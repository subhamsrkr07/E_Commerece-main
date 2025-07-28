import jwt from 'jsonwebtoken'


const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies
        console.log("🍪 Token from cookie:", token);

        if (!token) {
            return res.status(400).json({ message: "user does not token" })
        }


        let verifyToken;
        try {
            verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.userId = verifyToken.userId
        next()

    } catch (error) {
        console.log("isAuth error")
        return res.status(500).json({ message: `isAuth error ${error}` })
    }
}


export default isAuth

