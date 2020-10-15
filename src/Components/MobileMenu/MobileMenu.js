import React from 'react';
import '../../sass/section/MobileMenu.scss'

const ModalHeader = () => {
  
    return (
        <div  className="mobileMenu">
            <ul className='firstList'>
                <li className="firstListItem"><p className="listName">About me</p></li>
                <li className="firstListItem"><p className="listName">Relationships </p></li>
                <li className="firstListItem"><p className="listName">Users</p></li>
                <li className="firstListItem"><p className="listName">Sign up</p></li>
                <li className="firstListItem"><p className="listName">Terms and Conditions</p></li>
            </ul>
            <ul className="secondList">
                <li className="secondListItem"><p className="listName">How it works</p></li>
                <li className="secondListItem"><p className="listName">Partnership</p></li>
                <li className="secondListItem"><p className="listName">Help</p></li>
                <li className="secondListItem"><p className="listName">Leave testimonial</p></li>
                <li className="secondListItem"><p className="listName">Contact us</p></li>
            </ul>
            <ul className="thirdList">
                <li className="thirdListItem"><p className="listName">Articles</p></li>
                <li className="thirdListItem"><p className="listName">Our news</p></li>
                <li className="thirdListItem"><p className="listName">Testimonials</p></li>
                <li className="thirdListItem"><p className="listName">Licenses</p></li>
                <li className="thirdListItem"><p className="listName">Privacy Policy</p></li>
            </ul>
        </div>
    );
}

export default ModalHeader;