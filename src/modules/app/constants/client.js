import axios from "axios";
import { handleErrorResponse } from "../middlewares/handleError";

const defaultClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

defaultClient.interceptors.response.use(
  (response) => response,
  (error) => handleErrorResponse(error)
);

export { defaultClient };
