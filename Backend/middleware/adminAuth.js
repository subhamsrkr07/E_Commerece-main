// import jwt from 'jsonwebtoken'


// const adminAuth = async (req, res, next) => {
//     try {
//         let { token } = req.cookies

//         if (!token) {
//             return res.status(400).json({ message: "user does not token for Admin_pannel" })
//         }


//         let verifyToken;
//         try {
//             verifyToken = jwt.verify(token, process.env.JWT_SECRET);
//         } catch (err) {
//             return res.status(401).json({ message: "Invalid token for Admin_panel" });
//         }
//         req.adminEmail = process.env.ADMIN_EMAIL
//         next()

//     } catch (error) {
//         console.log("is adminAuth error")
//         return res.status(500).json({ message: `is aadminAuth error ${error}` })
//     }
// }


// export default adminAuth



import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;

    if (!token) {
      return res.status(400).json({ message: "user does not token for Admin_pannel" });
    }

    let verifyToken;
    try {
      verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid token for Admin_panel" });
    }

    // ✅ Ensure this is the admin user
    if (verifyToken.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: "Access denied: not an admin" });
    }

    req.adminEmail = verifyToken.email;
    next();
  } catch (error) {
    console.log("is adminAuth error", error);
    return res.status(500).json({ message: `is adminAuth error ${error}` });
  }
};

export default adminAuth;
