import axios from "axios";
import { usersSlice } from "./userReducer";

axios.defaults.baseURL = "https://frontend-test-assignment-api.abz.agency";
const usersListEndPoint = "/api/v1/users?page=1&count=6";
const positionEndpoint = "/api/v1/positions";

const getUserList = () => async (dispatch) => {
  try {
    await axios.get(usersListEndPoint).then((response) => {
      const users = response.data.users;
      dispatch(usersSlice.actions.getAllUsers({ users }));
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllPositions = () => async (dispatch) => {
  try {
    await axios.get(positionEndpoint).then((response) => {
      const positions = response.data.positions;
      dispatch(usersSlice.actions.getPositions({ positions }));
    });
  } catch (error) {
    console.log(error);
  }
};

const nextPage = ({ pageNumber }) => async (dispatch) => {
  try {
    await axios
      .get(`/api/v1/users?page=${pageNumber}&count=6`)
      .then((response) => {
        const users = response.data.users;
        dispatch(usersSlice.actions.getAllUsers({ users }));
      });
  } catch (error) {
    console.log(error);
  }
};

export default { getUserList, getAllPositions, nextPage };
