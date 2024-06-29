import { useCallback, useState } from "react";

import { BulaBoyApi, MedType, getMeds } from "../services";
import { useFocusEffect } from "@react-navigation/native";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useMyMeds = () => {
  const [meds, setMeds] = useState<MedType[]>(getMeds);

  const medsNames = meds.map((item) => item.name);
  const {
    data: verifyData,
    isLoading,
    mutate: dispatchVerify,
  } = useMutation({
    mutationKey: medsNames,
    mutationFn: async () => {
      const response = await BulaBoyApi.getInfo(medsNames);
      return response;
    },
  });

  useFocusEffect(
    useCallback(() => {
      setMeds(getMeds());
    }, [])
  );

  return {
    data: meds,
    verifyData,
    isLoading,
    dispatchVerify,
  };
};
