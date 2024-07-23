import jwt from "jsonwebtoken";

//middleware to get password token
const authMiddleware = (req, res, next) => {
  //put out token out header
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ errors: [{ msg: "no token,Auth Denied" }] });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.user;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errors: [{ msg: "token is not valid" }] });
  }
};

export default authMiddleware;
