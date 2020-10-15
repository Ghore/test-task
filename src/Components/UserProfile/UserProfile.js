import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../sass/section/userProfile.scss";
import userOperation from "../../redux/user/userOperation";
import authOperation from "../../redux/auth/authOperation";

import { v4 as uuidv4 } from "uuid";

function UserProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userOperation.getUserList());
    dispatch(authOperation.getToken());
    dispatch(userOperation.getAllPositions());
  }, [dispatch]);
  
  const allUsers = useSelector((state) => state.user.users);
  return (
    <ul  className="userCard">
      {allUsers.map((user) => (
        <>
          <li  key={uuidv4()} id={user.id} className="userCardItem">
            <img  src={user.photo} alt="avatar" className="avatar" />
            <h3 className="userName">{user.name.slice(0, 15)}</h3>
            <p className="position">{user.position}</p>
            <a className="userEmail" href={user.email}>
              {user.email.slice(1, 30)}
            </a>
            <a className="userTel" href={user.phone}>
              {user.phone}
            </a>
          </li>
        </>
      ))}
    </ul>
  );
}

export default UserProfile;
