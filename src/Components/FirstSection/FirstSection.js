import React from "react";
import "../../sass/section/firstSection.scss";

const FirstSection = () => {
  return (
    <section className="firstSection">
      <div className="firstSectionBackGround">
        <div className="firstSectionWrapper  container ">
          <h1 className="firstTitle">
            Test assignment for Frontend Developer position
          </h1>
          <p className="reminderDescription">
            We kindly remind you that your test assignment should be submitted
            as a link to github/bitbucket repository.
          </p>
          <a className='ancor' href="#form">

          <button className="btnSign">Sing up now</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
