import { MMKV } from "react-native-mmkv";
import { NavigationList } from "../routes";
import { Alert } from "react-native";
import { renderTextByHash } from "../utils";

export const storage = new MMKV();

export type MedType = NavigationList['bula'] &
  { uri?: string;
    schedule?: {
      date: Date;
      id: string | null;
      isToggled: boolean;
    }
  }

const MEDICINE_KEY = 'myMeds'

export function getMeds() {
  return JSON.parse(storage.getString(MEDICINE_KEY) || '[]') as MedType[];
}

export function getMed(id: string) {
  const meds = getMeds();
  return meds.find(item => item.id === id);
}

export function updateMed(id: string, info: MedType) {
  const meds = getMeds();

  const updatedMeds = meds.map(item => {
    if (item.id === id) {
      return info
    }
    return item
  });
  storage.set(MEDICINE_KEY, JSON.stringify(updatedMeds));

}


export function saveMed(data: MedType) {
  const meds = getMeds();
  if (meds.find(med => med.id === data.id)) {
    return Alert.alert(renderTextByHash('medicine-exists'))
  }

  const updatedMeds = [...meds, data];

  storage.set(MEDICINE_KEY, JSON.stringify(updatedMeds));

  return updatedMeds;
}

export function deleteMed(id: string) {
  const meds = getMeds();

  const updatedMeds = meds.filter(item => item.id !== id);

  storage.set(MEDICINE_KEY, JSON.stringify(updatedMeds))

  return updatedMeds;
}
