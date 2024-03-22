import { useState } from "react";
import RNBU from 'react-native-blob-util';

import { MedType, deleteMed, getMed, saveMed } from "../services"
import { useBula } from "./useBula";
import { Alert } from "react-native";
import { renderTextByHash } from "../utils";

export const useMed = ({ id, name, producer }: Omit<MedType, 'uri'>) => {
  const { data: uri } = useBula(id);

  const [isChecked, setIsChecked] = useState(Boolean(getMed(id)));

  async function saveMedicine() {
    try {
      if (isChecked) {
        deleteMed(id)
        setIsChecked(false);
        return;
      };
      if (!uri) throw {};
      setIsChecked(true);
      const response = await RNBU
      .config({
        fileCache: true,
      })
      .fetch('GET', uri);

      saveMed({
        id,
        name,
        producer,
        uri: response.path()
      })
    } catch {
      setIsChecked(false);
      Alert.alert(renderTextByHash('apologize'), renderTextByHash('generic-error-saving-bula'))
    }

  }

  const cacheFileName = `${name}-${id}`;


  return {
    uri,
    saveMedicine,
    isChecked,
    cacheFileName
  }
}
