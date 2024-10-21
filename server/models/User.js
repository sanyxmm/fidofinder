import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const PetSchema = new mongoose.Schema({
  petname: { type: String, required: true},
  parentName: { type: String, required: true},
  address: { type: String, required: true},
  parentemail: { type: String, required: true},
  petBio: { type: String, required: true},
  petGender: { type: String, required: true},
  petAge: { type: String, required: true},
  petType: { type: String, required: true},
  petBreed: { type: String, required: true},
  petBirth: { type: String, required: true},
  petweight: { type: String, required: true},
  petFavfood: { type: String, required: true},
  petchipstatus: { type: String, required: true},
  petVaccstatus: { type: String, required: true},
  contact: { type: String,},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});
const ShippingSchema = new mongoose.Schema({
  Firstname: { type: String, required: true},
  LastName: { type: String, required: true},
  Address: { type: String, required: true},
  Country: { type: String, required: true},
  Landmark: { type: String, required: true},
  Contact: { type: String, required: true},
  State: { type: String, required: true},
  Town: { type: String, required: true},
  Zipcode: { type: String, required: true},
  EmailAddress: { type: String, required: true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});
const UserModel = mongoose.model("User", UserSchema)
const PetModel = mongoose.model("Pet", PetSchema)
const ShippingModel = mongoose.model("Shipping", ShippingSchema)
export { UserModel as User,PetModel as Pet, ShippingModel as Shipping }

 