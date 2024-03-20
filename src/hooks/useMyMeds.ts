import { useState } from "react";
import { Alert } from "react-native";

import { getMeds, storage } from "../services"

import { renderTextByHash } from "../utils";


function generateUniqueID() {
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
}

export const useMyMeds = () => {
  const [meds, setMeds] = useState<{name: string, id: string}[]>(getMeds);

  function createNewMed(name: string, cb?: () => void) {
    if (meds.find(med => med.name === name)) {
      return Alert.alert(renderTextByHash('medicine-exists'))
    }
    const newList = [...meds, {
      name,
      id: generateUniqueID()
    }]
    storage.set('myMeds', JSON.stringify(newList))
    setMeds(newList)
    cb && cb()
  }

  function deleteAllMeds() {
    storage.set('myMeds', '[]')
    setMeds([])
  }

  return {
    createNewMed,
    data: meds
  }
}
