import { useEffect, useState, useRef } from "react";
import Mustang from "../images/cars-big/mustang.png";
import BmwX1 from "../images/cars-big/bmwx1.png";
import GLA from "../images/cars-big/GLA.png";
import sClass from "../images/cars-big/sClass.png";
import Audi from "../images/cars-big/Audi.png";
import AudiA4 from "../images/cars-big/audiA4.png";
// import emailjs from '@emailjs/browser';
import emailjs from 'emailjs-com';
import { CAR_TYPES } from "./CarTypes";

function BookCar() {
  const [modal, setModal] = useState(false);

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w62nzho', 'template_1x82yuz', form.current, 'J2joeCP1S9xvjfV0x')
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const resetForm = () => {
    setCarType("");
    setPickUp("");
    setDropOff("");
    setPickTime("");
    setDropTime("");
    setCarImg("");
    setName("");
    setLastName("");
    setPhone("");
    setAge("");
    setEmail("");
    setCar("");
    setDLNumber("");
    setAadharCardNumber("");
    setTermsAgreed(false);
    setIsFormValid(false);
  };



  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const confirmBooking = (e) => {
    if (!isFormValid) {
      e.preventDefault();
      window.alert('Please fill in all required fields before submitting.');
    } else {
      // e.preventDefault();
      setModal(!modal);
      const doneMsg = document.querySelector(".booking-done");
      doneMsg.style.display = "flex";
    }
    resetForm();
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };


  const [minDropOff, setMinDropOff] = useState('');
  const currentDate = new Date().toISOString().split('T')[0];
  
  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    const selectedPickTime = e.target.value;
    setPickTime(selectedPickTime);
    setMinDropTime(selectedPickTime);
  };


  const handleDropTime = (e) => {
    const selectedDropTime = e.target.value;
    setDropTime(selectedDropTime);
  };

  const setMinDropTime = (pickUpDate) => {
    const minDropTime = new Date(pickUpDate);
    minDropTime.setDate(minDropTime.getDate() + 1); // Set minimum drop-off date as the next day
    const formattedMinDropTime = minDropTime.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    setMinDropOff(formattedMinDropTime);
  };


  // Car Types Modles
  const [carTypes, setCarTypes] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const handleCarTypeChange = (event) => {
    const selectedType = event.target.value;
    setCarType(selectedType);
    setSelectedModel('');
  };

  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    setSelectedModel(selectedModel);
  };

  const getModelsForCarType = () => {
    const carTypeData = CAR_TYPES.find((car) => car.type === carType);
    return carTypeData ? carTypeData.models : [];
  };

  const carImages = {
    'Ford Mustang': Mustang,
    'BMW X1': BmwX1,
    'Mercedes-Benz GLA': GLA,
    'Mercedes-Benz S-Class': sClass,
    'Audi': Audi,
    'Audi A4': AudiA4,
  };
  // Car Types Modles

  // check if form is valid
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [car, setCar] = useState('');
  const [dlNumber, setDLNumber] = useState('');
  const [aadharCardNumber, setAadharCardNumber] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleSelectedCar = (e) => setCar(e.target.value);
  const handleDL = (e) => setDLNumber(e.target.value);
  const handleCard = (e) => setAadharCardNumber(e.target.value);

  const handleCheckboxChange = (e) => setTermsAgreed(e.target.checked);

  useEffect(() => {
    const formFields = [name, lastName, phone, age, email, car, dlNumber, aadharCardNumber];
    const allFieldsFilled = formFields.every((field) => field.trim() !== '' && field !== null);
    setIsFormValid(allFieldsFilled && termsAgreed);
  }, [name, lastName, phone, age, email, car, dlNumber, aadharCardNumber, termsAgreed]);


  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };
  const notAvailable = () => {
    alert("The booking services will be availble soon.");
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Select your car type</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="SUV">SUV</option>
                    <option value="Convertible">Convertible</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Sports">Sports</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Select State{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Select your city</option>
                    <option>Jammu & Kashmir</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick Up{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Select pick up location</option>
                    <option>Bantlab</option>
                    <option>Janipur</option>
                    <option>Kachi Chawni</option>
                    <option>Gandhi Nagar</option>
                    <option>Channi Himmat</option>
                  </select>
                </div>

                <div className="box-form__car-time">
        <label htmlFor="picktime">
          <i className="fa-regular fa-calendar-days"></i> &nbsp; Pick-up <b>*</b>
        </label>
        <input
          id="picktime"
          value={pickTime}
          onChange={handlePickTime}
          type="date"
          min={currentDate} // Set minimum date as the current date
        ></input>
      </div>

      <div className="box-form__car-time">
        <label htmlFor="droptime">
          <i className="fa-regular fa-calendar-days"></i> &nbsp; Drop-off <b>*</b>
        </label>
        <input
          id="droptime"
          value={dropTime}
          onChange={handleDropTime}
          type="date"
          min={minDropOff} // Set minimum date based on the pick-up date
        ></input>
      </div>

                <button
                  onClick={openModal}
                  // onClick={notAvailable}
                  type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>

        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>City</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-up Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          {/* <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div> */}
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car Type</span> {carTypes}
            </h5>

            {/* Dropdown for Car Type */}
            <select value={carType} onChange={handleCarTypeChange}>
              <option value="">Select Car Type</option>
              {CAR_TYPES.map((car) => (
                <option key={car.type} value={car.type}>
                  {car.type}
                </option>
              ))}
            </select>

            {/* Dropdown for Car Model */}
            {carType && (
              <select value={selectedModel} onChange={handleModelChange}>
                <option value="">Select Car Model</option>
                {getModelsForCarType().map((model) => (
                  <option key={model.name} value={model.name}>
                    {model.name}
                  </option>
                ))}
              </select>
            )}

            {selectedModel && (
              <img
                src={carImages[selectedModel]}
                alt="car_img"
              />
            )}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form" ref={form} onSubmit={sendEmail}>
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  required
                />
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  required
                />
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  name="message"
                  placeholder="Enter your phone number"
                  required
                />
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  name="message"
                  placeholder="18"
                  required
                />
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </span>

              <span>
                <label>
                  Selected Car <b>*</b>
                </label>
                <input
                  value={car}
                  onChange={handleSelectedCar}
                  name="text"
                  type="text"
                  required
                  placeholder="Enter the selected car"
                />
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  DL Number <b>*</b>
                </label>
                <input
                  value={dlNumber}
                  onChange={handleDL}
                  name="message"
                  type="text"
                  placeholder="Enter your driving licence number"
                  required
                />
              </span>

              <span>
                <label>
                  Aadhar Card Number <b>*</b>
                </label>
                <input
                  value={aadharCardNumber}
                  onChange={handleCard}
                  name="message"
                  type="text"
                  placeholder="Enter your Aadhar card number"
                  required
                />
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox" onClick={handleCheckboxChange} required />
              <p>
                I confirm that I have read and agreed to the{' '}
                <a href="/terms-and-conditions">terms and conditions</a>.
              </p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking} disabled={!isFormValid}>Reserve Now</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
}

export default BookCar;
