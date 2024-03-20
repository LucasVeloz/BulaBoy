import { useState } from "react";
import { MedType, deleteMed, getMed, getMeds, saveMed } from "../services"
import { useBula } from "./useBula";

export const useMed = ({ id, name, producer }: Omit<MedType, 'uri'>) => {
  const { data: uri } = useBula(id);

  const [isChecked, setIsChecked] = useState(Boolean(getMed(id)));

  function saveMedicine() {
    if (isChecked) {
      deleteMed(id)
      setIsChecked(false);
      return;
    }
    saveMed({
      id,
      name,
      producer,
      uri
    })
    setIsChecked(true);
  }

  const cacheFileName = `${name}-${id}`;


  return {
    uri,
    saveMedicine,
    isChecked,
    cacheFileName
  }
}
