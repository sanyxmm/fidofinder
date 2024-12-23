import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { setaddtag, setpetDetails } from '../StateMangement/cartSlice'
import { useDispatch } from "react-redux";
import "./petdata.css";

const AddPet = () => {
  const dispatch = useDispatch();
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
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent default submission if u donst wrtie this u will face with error
    dispatch(setpetDetails(formData))
    dispatch(setaddtag(false))
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen absolute left-0 top-0 bg-auto backdrop-blur-[4px] z-20">
      <OutsideClickHandler onOutsideClick={() => dispatch(setaddtag(false))}>
        <form
          onSubmit={handleSubmit}
          className="relative w-[290px] p-[20px_15px] border border-gray-300 rounded-md shadow-md backdrop-blur-sm image2 "
        >
      <img onClick={() => dispatch(setaddtag(false))} src={require('../assets/icons8-go-back-48.png')} className='absolute mt-[-12px] ml-[-8px] w-[1.5rem]' alt="" />

          <div class="text-[10px] p-[15px] mx-0 mb-[15px] mt-[15px] rounded-md bg-white shadow-md">
            <div class="flex flex-row gap-[7px]">
              <img class="rounded-[15px]" src={require("../assets/doggy.jpg")} alt="" width={"60px"} />
              <div>
                <input required
                  className="text-[15px]  mb-[4px] "
                  name="petname"
                  value={formData.petname}
                  type="PetName"
                  onChange={handleChange}
                  placeholder="PetName"
                />
                Parent :{" "}
                <input required
                  className="text-[#2980b9]"
                  name="parentName"
                  value={formData.parentName}
                  type="ParentName"
                  onChange={handleChange}
                  placeholder="ParentName"
                />
                <br />
                {/* <img src={location} alt="" width={'8px'}  /> */}
                <input required
                  name="address"
                  value={formData.address}
                  type="address"
                  onChange={handleChange}
                  placeholder="Parent Address"
                />
                <br />
                <input required
                  name="parentemail"
                  value={formData.parentemail}
                  type="parentemail"
                  onChange={handleChange}
                  placeholder="EmailAddress"
                />
                <br />
                  <input required
                  name="contact"
                  value={formData.contact}
                  type="contact"
                  onChange={handleChange}
                  placeholder="contact"
                />
                <br />
              </div>
            </div>
           
          </div>
          <label htmlFor="" className="text-[13px]">
            <strong>About Handsome Ransom</strong>
          </label>
          <br />
          <input required
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
              <input required
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
              <input required
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
              <input required
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
              <input required
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
              <input required
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
              <input required
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
              <input required
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
              <input required
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
              <input required
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
