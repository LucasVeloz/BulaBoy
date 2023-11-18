import { useQuery } from "@tanstack/react-query"
import { MedicineApi } from "../services"

export const useBula = (id: string) => {
  return useQuery({
    queryKey: ['medicine', id],
    queryFn: async () => await MedicineApi.linkPDF(id)
  })
}
