import express from "express";
import { Order } from "../models/Order.model.js";
import { authenticate } from "../middleware/authenticate.js";
const router = express.Router();
router.post("/add-pet/", authenticate, async (req, res) => {
  const {
    petname,
    parentName,
    address,
    parentemail,
    petBio,
    petGender,
    petAge,
    petType,
    petBreed,
    petBirth,
    petweight,
    petFavfood,
    petchipstatus,
    petVaccstatus,
    contact,
  } = req.body;
  const newpet = new Pet({
    petname,
    parentName,
    address,
    parentemail,
    petBio,
    petGender,
    petAge,
    petType,
    petBreed,
    petBirth,
    petweight,
    petFavfood,
    petchipstatus,
    petVaccstatus,
    contact,
    userId: req.user.id,
  });
  await newpet.save();
  console.log(newpet);
  res.status(201).json({ message: "Pet added successfully" });
});

router.get("/search-pet/:payloadId", async (req, res) => {
  try {
    const _id = req.params.payloadId;
    const pet = await Order.findOne({ _id });
    console.log(pet);
    if (!pet) {
      return res.status(404).json({ error: "Pet not found" });
    }
    res.status(200).json({petDetails: pet.petDetails });
  } catch (error) {
    res.status(500).json({ error: "Pet search failed" });
  }
});
export { router as PetRouter };
