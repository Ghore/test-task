import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../sass/section/thirdSection.scss";
import UserProfile from "../UserProfile/UserProfile";
import userOperation from "../../redux/user/userOperation";

const ThirdSection = () => {
  let pageNumber = useSelector((state) => state.user.page);
  const dispatch = useDispatch();
  const changeNumber = () => {
    if (pageNumber <= 14) {
      pageNumber = pageNumber + 1;
      dispatch(userOperation.nextPage({ pageNumber }));
    }
  };
  return (
    <>
      <section className="thirdSection">
        <div className="thirdSectionBackground">
          <div className="thirdSectionTextWrapper container">
            <h2 className="thirdSectionTitle">Our cheerful users</h2>
            <p className="attentionThird">
              Attention! Sorting users by registration date
            </p>
            <UserProfile />
            <button onClick={changeNumber} className="btnShowMore">
              Show more
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
