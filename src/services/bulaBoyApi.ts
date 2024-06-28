import axios from "axios";

export const BulaBoyApi = {
  async getInfo(meds: string[]) {
    const uri = "http://localhost:3333";

    const response = await axios.post<{ message: string }>(uri, { meds });
    return response.data.message;
  },
};
