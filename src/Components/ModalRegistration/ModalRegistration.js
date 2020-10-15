import React from "react";
import "../../sass/section/ModalRegistration.scss";

const ModalRegistration = ({closeModal}) => {
  return (
    <div className="wrap">
      <div className="modalRegistration">
        <div className="topWrapper">
          <h3 className="titleModal">Congratulations</h3>
          <button onClick={closeModal} className="closeModal">X</button>
        </div>
        <p className="descriptionModal">
          You have successfully passed the registration
        </p>
        <button onClick={closeModal} className="greatModal">Great</button>
      </div>
    </div>
  );
};

export default ModalRegistration;
