import { useEffect, useState } from "react";
import onehandred from "../images/cars-big/100sal.jpg"
import jeneyat from "../images/cars-big/jenayat.jpg"
import dn from "../images/cars-big/dn.jpg"
import eshq from "../images/cars-big/eshq.jpg"
import {IconX, IconBook } from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";

function BookBook() {
  const [modal, setModal] = useState(false); //  class - active-modal

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");

    setModal(!modal);
    const modalDiv = document.querySelector(".booking-modal");
    modalDiv.scroll(0, 0);
    errorMsg.style.display = "none";

    console.log(carType,pickUp,pickTime,dropTime)    
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";

    console.log(name,phone,age,email,address,city,zipcode)
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl;
  switch (carImg) { 
    case "100":
      imgUrl = onehandred;
      break;
    case "jn":
      imgUrl = jeneyat;
      break;
    case "elvis":
      imgUrl = dn;
      break;
    case "eshq":
      imgUrl = eshq;
      break;
      case "search":
        imgUrl = eshq;
        break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>کتاب های موجود </h2>

              <p className="error-message">
                All fields required! <IconX width={20} height={20} />
              </p>

              <p className="booking-done">
                ایمیلت رو چک کن همین الان لینک برات ارسال شد.{" "}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <IconBook className="input-icon" /> &nbsp; انتخاب کتاب
                    <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar} >
                    <option>:کتاب های موجود</option>
                    <option value="jn">جنایت و مکافات </option>
                    <option value="100">100 سال تنهایی</option>
                    <option value="elvis">الویس</option>
                    <option value="search">در جست‌وجوی زمان از دست رفته</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <IconMapPinFilled className="input-icon" /> &nbsp; محل تحویل{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>کرج </option>
                    <option>تهران</option>
                    <option>قزوین</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; تاریخ تحویل گرفتن{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <IconCalendarEvent className="input-icon" /> &nbsp; تاریخ تحویل دادن{" "}
                    <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>تکمیل مراحل تحویل</h2>
          <IconX onClick={openModal} />
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>زمان و مکان</h5>
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>تاریخ تحویل گرفتن </h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6> تاریخ تحویل دادن</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <IconMapPinFilled />
                <div>
                  <h6>محل تحویل گرفتن</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>کتاب </span> {carType}
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>تطاعات شخصی</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  نام <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="اسمت چیه"
                ></input>
                <p className="error-modal">پر کردن این فیلد اجباری است</p>
              </span>

              <span>
                <label>
                  نام خانوداگی <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="فامیلیت"
                ></input>
                <p className="error-modal ">پر کردن این فیلد اجباری است</p>
              </span>

              <span>
                <label>
                  شماره تلفن <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="با چی بهت زنگ بزنیم"
                ></input>
                <p className="error-modal">پر کردن این فیلد اجباری است</p>
              </span>

              <span>
                <label>
                  سن <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="چقدر پیر شدی؟"
                ></input>
                <p className="error-modal ">پر کردن این فیلد اجباری است</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  ایمیلت <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="  ...  اونی که توش @ داره"
                ></input>
                <p className="error-modal">پر کردن این فیلد اجباری است</p>
              </span>

              <span>
                <label>
                  آدرس <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="کجا بفرستیم کتاب رو "
                ></input>
                <p className="error-modal ">پر کردن این فیلد اجباری است</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  شهر <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="محل سکونتت"
                ></input>
                <p className="error-modal">پر کردن این فیلد اجباری است</p>
              </span>

              <span>
                <label>
                  کد پستی <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="کد پستی"
                ></input>
                <p className="error-modal ">پر کردن این فیلد اجباری است</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>اگه میخای از کتاب های جدیدمون با خبر بشی</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>ثبت نهایی</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookBook;
