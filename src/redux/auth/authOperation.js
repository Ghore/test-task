import axios from "axios";
import { authSlice } from "./authReducer";
import userOperation from "../user/userOperation";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency";

const postUserendpoint = "/api/v1/users";

const tokenEndpoint = "/api/v1/token";
const closeModal = () => async (dispatch) => {
  dispatch(authSlice.actions.close());
}
const getToken = () => async (dispatch) => {
  try {
    await axios.get(tokenEndpoint).then((response) => {
      const token = response.data;
      dispatch(authSlice.actions.addToken(token));
    });
  } catch (error) {
    console.log(error);
  }
};

const registration = (userData, token) => async (dispatch) => {
  try {
    // const responseRegister = await axios.get(tokenEndpoint);
    // const token = responseRegister.data;
    // dispatch(authSlice.actions.addToken(token));

    const formData = new FormData();
    formData.append("position_id", userData.position_id);
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("phone", userData.phone);
    formData.append("photo", userData.photo[0]);


    await axios
      .post(postUserendpoint, formData, {
        headers: { Token: token, "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
      
        if (response.status === 201) {
          dispatch(authSlice.actions.sucsessRegistration());
          dispatch(userOperation.getUserList());
        }
      });
    dispatch(authSlice.actions.register(userData));
  } catch (error) {
    console.log(error);
  }
};

export default { registration, getToken, closeModal };
