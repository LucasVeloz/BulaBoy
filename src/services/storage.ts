import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();


export function getMeds() {
  return JSON.parse(storage.getString('myMeds') || '[]') as {
    id: string;
    name: string;
  }[];
}
