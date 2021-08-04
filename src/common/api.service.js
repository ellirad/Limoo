import axios from "axios";
import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
    token: JwtService.getToken(),
  },
});

const ApiService = {
  // resource: api address
  get(resource, params) {
    return axiosInstance
      .get(resource, {
        params,
      })
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },
};

export default ApiService;

export const SearchProduct = {
  get(params) {
    return ApiService.get(`/search/?${transformRequestOptions(params)}`);
  },
};

export const ProductDetails = {
  get(id) {
    return ApiService.get(`/product/${id}`);
  },
};

function transformRequestOptions(params) {
  let options = "";
  for (const key in params) {
    if (typeof params[key] !== "object" && params[key]) {
      options += `${key}=${params[key]}&`;
    } else if (
      typeof params[key] === "object" &&
      params[key] &&
      params[key].length
    ) {
      params[key].forEach((el, i) => {
        options += `${key}[${i}]=${el}&`;
      });
    }
  }
  return options ? options.slice(0, -1) : options;
}
