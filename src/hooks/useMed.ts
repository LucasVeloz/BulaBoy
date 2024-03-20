import { getMeds } from "../services"

export const useMed = (id: string) => {
  const meds = getMeds();

  return meds.find(med => med.id === id)
}
