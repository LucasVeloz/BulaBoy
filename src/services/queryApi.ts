import axios from "axios";
import Config from "react-native-config";

export const queryApi = axios.create({
  baseURL: Config.QUERY_API,
  params: {
    "access-token": Config.ACCESS_API_QUERY_API,
    "_format": "json"
  }
})
