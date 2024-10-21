import express from "express";
import { Shipping } from "../models/User.js";
import { authenticate } from "../middleware/authenticate.js";
const router = express.Router();
router.post("/add-Shipping", authenticate, async (req, res) => {
  const {
    Firstname,
    LastName,
    Address,
    Country,
    Landmark,
    Contact,
    State,
    Town,
    Zipcode,
    EmailAddress,
  } = req.body;
  const newShipping = new Shipping({
    Firstname,
    LastName,
    Address,
    Country,
    Landmark,
    Contact,
    State,
    Town,
    Zipcode,
    EmailAddress,
    userId: req.user.id,
  });
  await newShipping.save();
  console.log(newShipping);
  res.status(201).json({ message: "Shipping details added successfully" });
});

export { router as ShippingRouter };
