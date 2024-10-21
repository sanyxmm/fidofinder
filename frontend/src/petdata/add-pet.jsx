import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { setaddtag } from '../StateMangement/cartSlice'
import { useDispatch } from "react-redux";
import Axios from 'axios'
import "./petdata.css";

const AddPet = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    petname: "",
    parentName: "",
    address: "",
    parentemail: "",
    petBio: "",
    petGender: "",
    petAge: "",
    petType: "",
    petBreed: "",
    petBirth: "",
    petweight: "",
    petFavfood: "",
    petchipstatus: "",
    petVaccstatus: "",
    contact: "",
  });
  // const navigate = useNavigate()
  Axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default submission if u donst wrtie this u will face with error

    //axios is http request response library to go call our server side up
    //using post method to pass the data
    //here we write server side app url
    Axios.post("http://localhost:4000/pet/add-pet/", formData)
      .then((response) => {
        console.log(formData);
        if (response.data.status) setaddtag(0);
        else setError(response.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen absolute left-0 top-0 bg-auto backdrop-blur-[4px]">
      <OutsideClickHandler onOutsideClick={() => dispatch(setaddtag(false))}>
        <form
          onSubmit={handleSubmit}
          className="relative w-[290px] p-[20px_15px] border border-gray-300 rounded-md shadow-md backdrop-blur-sm image2 "
        >
          {/* <img src={arrow} alt="" width={'25px'}  class='absolute top-3 left-3 '/> */}
          <div class="text-[10px] p-[15px] mx-0 mb-[15px] mt-[15px] rounded-md bg-white shadow-md">
            <div class="flex flex-row gap-[7px]">
              <img class="rounded-[15px]" src={require("../assets/doggy.jpg")} alt="" width={"60px"} />
              <div>
                <input
                  className="text-[15px]  mb-[4px] "
                  name="petname"
                  value={formData.petname}
                  type="PetName"
                  onChange={handleChange}
                  placeholder="PetName"
                />
                Parent :{" "}
                <input
                  className="text-[#2980b9]"
                  name="parentName"
                  value={formData.parentName}
                  type="ParentName"
                  onChange={handleChange}
                  placeholder="ParentName"
                />
                <br />
                {/* <img src={location} alt="" width={'8px'}  /> */}
                <input
                  name="address"
                  value={formData.address}
                  type="address"
                  onChange={handleChange}
                  placeholder="Parent Address"
                />
                <br />
                <input
                  name="parentemail"
                  value={formData.parentemail}
                  type="parentemail"
                  onChange={handleChange}
                  placeholder="EmailAddress"
                />
                <br />
              </div>
            </div>
           
          </div>
          <label htmlFor="" className="text-[13px]">
            <strong>About Handsome Ransom</strong>
          </label>
          <br />
          <input
            className="text-[13px] "
            name="petBio"
            value={formData.petBio}
            type="petBio"
            onChange={handleChange}
            placeholder="PetBio"
          />
          <br />
          <div class="grid bg-[rgba(247,246,249,1)] grid-cols-3 gap-[20px] rounded-md shadow-md">
            <div class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
              <div className="text-[9px] text-[#2980b9]">GENDER</div>
              <input
                className="text-[11px] w-[40px]"
                name="petGender"
                value={formData.petGender}
                type="petGender"
                onChange={handleChange}
                placeholder="Gender"
              />
            </div>
            <div class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
              <div className="text-[9px] text-[#2980b9]">AGE</div>
              <input
                className="text-[11px] w-[40px]"
                name="petAge"
                value={formData.petAge}
                type="text"
                onChange={handleChange}
                placeholder="In Years"
              />
            </div>
            <div class="pt-[9px] pb-[13px] pl-[7px] pr-[0px] text-center font-medium">
              <div className="text-[9px] text-[#2980b9]">PET TYPE</div>
              <input
                className="text-[11px] w-[30px]"
                name="petType"
                value={formData.petType}
                type="text"
                onChange={handleChange}
                placeholder="Type"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-20px shadow rounded  mt-[15px]">
            <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
              <div className="text-[8px] text-[rgb(186,186,186,1)]">BREED</div>
              <input
                className="text-[11px] w-[60px]"
                name="petBreed"
                value={formData.petBreed}
                type="text"
                onChange={handleChange}
                placeholder="enter Breed"
              />{" "}
            </div>
            <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
              <div className="text-[8px] text-[rgb(186,186,186,1)]">
                PET BIRTHDAY
              </div>
              <input
                className="text-[11px] w-[60px]"
                name="petBirth"
                value={formData.petBirth}
                type="text"
                onChange={handleChange}
                placeholder="enter date"
              />
            </div>
            <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
              <div className="text-[8px] text-[rgb(186,186,186,1)]">WEIGHT</div>
              <input
                className="text-[11px] w-[80px]"
                name="petweight"
                value={formData.petweight}
                type="text"
                onChange={handleChange}
                placeholder="enter weight"
              />
            </div>
            <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
              <div className="text-[8px] text-[rgb(186,186,186,1)]">
                MICROCHIP
              </div>
              <input
                className="text-[11px] w-[60px]"
                name="petchipstatus"
                value={formData.petchipstatus}
                type="text"
                onChange={handleChange}
                placeholder="enter status"
              />
            </div>
            <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
              <div className="text-[8px] text-[rgb(186,186,186,1)]">
                RABIES VACC.
              </div>
              <input
                className="text-[11px] w-[60px]"
                name="petVaccstatus"
                value={formData.petVaccstatus}
                type="text"
                onChange={handleChange}
                placeholder="enter status"
              />
            </div>
            <div class="pt-[9px] pb-[13px] pl-[12px] pr-[0px] font-medium">
              <div className="text-[8px] text-[rgb(186,186,186,1)]">
                FAV FOOD...
              </div>
              <input
                className="text-[11px] w-[60px]"
                name="petFavfood"
                value={formData.petFavfood}
                type="text"
                onChange={handleChange}
                placeholder="enter food"
              />
            </div>
          </div>
          <button
              type="submit"
              class="rounded-[8px] bg-[#3498db] text-[12px] font-[700] mt-[10px] p-[10px] w-full text-white"
            >
              Submit
            </button>
        </form>
      </OutsideClickHandler>
    </div>

  );
};

export default AddPet;
