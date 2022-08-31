import Axios from "axios";
import BASE_URL from "./config";

export const getAPI = async (path) => {
  try {
    const response = await Axios.get(`${BASE_URL}${path}`);
    // console.log("raw", response);
    if (response && response?.data) {
      console.log(response.data);
      return {
        isSuccess: true,
        statusCode: response.status,
        data: response.data,
        message: "ok",
      };
    }
  } catch (error) {
    console.log(error);
    return {
      isSuccess: false,
      statusCode: error.response ? error.response.status : null,
      data: null,
      message: error.message,
    };
  }
};
