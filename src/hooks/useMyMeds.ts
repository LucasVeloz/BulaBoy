import { useCallback, useState } from "react";

import { MedType, getMeds, storage } from "../services"
import { useFocusEffect } from "@react-navigation/native";

export const useMyMeds = () => {
  const [meds, setMeds] = useState<MedType[]>(getMeds);


  useFocusEffect(useCallback(() => {
    setMeds(getMeds())
  }, []))

  return {
    data: meds
  }
}
