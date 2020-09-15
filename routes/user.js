const express = require("express");
const { body, validationResult } = require("express-validator");

const User = require("../models/User");

const router = express.Router();

// Create a new user
router.post(
  "/",
  [
      body("name").exists(),
    body("email").isEmail(),
    // body("remarks").isLength({ min: 10 }),
  ],
  async (req, res) => {

    try {
        
        const errors = validationResult(req);
        if(!errors.isEmpty()){
          console.log(errors)
            throw new Error(errors.array());
        }
            const { name, email, remarks } = req.body;
            
        const user = new User({
            name,
            email,
            remarks
        });

        await user.save();
        res.status(201).json(user);
    } catch (e) {
      
        res.status(500).json({ message: `Internal server error ${e}`});

    }
  }
);

// Get data of all the users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: `Sorry bad request ${e}` });
  }
});


module.exports = router;