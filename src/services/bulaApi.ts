import axios from "axios";
import Config from "react-native-config";

export const bulaApi = axios.create({
  baseURL: Config.BULA_API,
});
