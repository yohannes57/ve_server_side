import express from "express";
import User from "../../models/users.mjs";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

// User registration route
router.post(
  "/",
  [
    // Input validation
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please provide a valid email format").isEmail(),
    check("password", "Password must be at least 6 characters long").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    // Handle validation errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      // Create new user
      user = new User({
        name,
        email,
        password,
      });

      // Hash password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save user to database
      await user.save();

      // Create payload for JWT and frontend
      const payload = {
        user: {
          id: user.id,
          name: user.name,
        },
      };

      // Sign and return JWT token
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" }, // Set token expiration time
        (err, token) => {
          if (err) throw err;
          res.json(token);
        }
      );
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: [{ msg: "Server error" }] });
    }
  }
);

export default router;
