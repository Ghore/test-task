import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "../../sass/section/fourSection.scss";
import authOperation from "../../redux/auth/authOperation";
import ModalRegistration from "../ModalRegistration/ModalRegistration";
const initialState = {
  name: "",
  email: "",
  phone: "",
  position_id: Number(null),
  photo: [],
};
const Foursection = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const positions = useSelector((state) => state.user.positions);
  const token = useSelector((state) => state.auth.access_token);
  const auth = useSelector((state) => state.auth.isAuth);
  const [isSend, setIsSend] = useState(auth);

  const nameInput = uuidv4();
  const emailInput = uuidv4();
  const phoneInput = uuidv4();
  const photoInput = uuidv4();
  const radioInput = uuidv4();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files;
    setState((prev) => ({ ...prev, photo: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ...user } = state;
    dispatch(authOperation.registration(user, token));
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        isSend === true ? setIsSend(false) : setIsSend(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isSend]);

  function closeModal() {
    dispatch(authOperation.closeModal());
  }

  return (
    <>
      {auth === false ? null : <ModalRegistration closeModal={closeModal} />}
      <section className="fourSection container">
        <h2 className="fourSectionTitle">Register to get a work</h2>
        <p className="attention">
          Attention! After successful registration and alert, update the list of
          users in the block from the top
        </p>
        <form id="form" onSubmit={handleSubmit} className="userForm">
          <ul className="inputList">
            <li className="inputListItem">
              <h3 className="nameInput">Name</h3>
              <label htmlFor={nameInput} className="nameInput">
                <input
                  value={state.name}
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  id={nameInput}
                />
              </label>
            </li>
            <li className="inputListItem">
              <h3 className="nameInput">Email</h3>
              <label htmlFor={emailInput} className="emailInput">
                <input
                  value={state.email}
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  onChange={handleChange}
                  id={emailInput}
                />
              </label>
            </li>
            <li className="inputListItem">
              <h3 className="nameInput">Phone number</h3>
              <label htmlFor={phoneInput} className="phoneInput">
                <input
                  value={state.phone}
                  className="input"
                  type="text"
                  name="phone"
                  placeholder="Your tel"
                  onChange={handleChange}
                  id={phoneInput}
                />
              </label>
              <p className="PasswordInstruction">
                Enter phone number in open format
              </p>
            </li>
          </ul>
          <p className="positionInWeb">Select your position</p>
          <ul className="radioList">
            {positions.map((position) => (
              <li key={position.id} className="radioListItem">
                <label htmlFor={radioInput} className="radioInput">
                  <input
                    onChange={handleChange}
                    value={Number(position.id)}
                    name="position_id"
                    type="radio"
                    id={radioInput}
                  />
                </label>
                <p className="radioName">{position.name}</p>
              </li>
            ))}
          </ul>
          <div className="InputPhotoWrapper">
            <p className="positionFormPhoto">Photo</p>
            <label htmlFor={photoInput} className="photoInput">
              <input
                onChange={handleFile}
                className="inputPhoto"
                type="file"
                name="photo"
                placeholder="Upload your photo"
                id={photoInput}
              />
              <button className="browse">Browse</button>
            </label>
          </div>
          <div className="btnwrapper">
            <button type="submit" className="btnSignUp">
              Sing up now
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Foursection;
