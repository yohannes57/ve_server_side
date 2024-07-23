import { check, ExpressValidator, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import authMiddleware from "../../middleware/authMiddleware.mjs";
import User from "../../models/users.mjs";
import bcrypt from "bcryptjs";
import express from "express";
const router = express.Router();
//---------------
router.get("/", authMiddleware, async (req, res) => {
  try {
    //get user from data base except database (use select('_password'))
    const user = await User.findById(req.user.id).select("-password");

    //send user
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ errors: [{ msg: "bad request" }] });
  }
});
///for sign in
router.post(
  "/",
  [
    //check inputs: validation arrya,parameter,error,validation function
    check("email", "Please use valid email"),
    check("password", "password Required").not().isEmpty(),
  ],
  async (req, res) => {
    //check if any invalid inputs
    const errors = validationResult(req);

    //if erros send them to as a 400 error cause it client side
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //distructuring the inputs
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: "Invalid email" }] });
      }
      //check if password match
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ erros: [{ msg: "Incorrect password" }] });
      }

      //create payload with jwt
      const payload = {
        user: {
          id: user._id,
        },
      };
      //sign and send jwt in response
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(err);
      res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
  }
);

export default router;
