import React from "react";
import "../../sass/section/secondSection.scss";

const SecondSection = () => {
  return (
    <section className="secondSection">
      <div className="secondSectionWrapper">
        <h2 className="secondTittle">Let's get acquainted</h2>
        <ul className="contentWrapper">
          <li className="contentWrapperImage">
            {/* <img src={ManSvg} alt="Man" className="man" /> */}
          </li>
          <li className="contentWrapperText  container">
            <h3 className="aboutTestTitle">I am cool frontend developer</h3>
            <p className="aboutTestDescription">
              We will evaluate how clean your approach to writing CSS and
              Javascript code is. You can use any CSS and Javascript 3rd party
              libraries without any restriction.
            </p>
            <p className="aboutTestDescription">
              If 3rd party css/javascript libraries are added to the project via
              bower/npm/yarn you will get bonus points. If you use any task
              runner (gulp/webpack) you will get bonus points as well. Slice
              service directory page P​SD mockup​ into HTML5/CSS3.
            </p>
            <a href="#form" className="SingUpLink">
              Sing up now
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SecondSection;
