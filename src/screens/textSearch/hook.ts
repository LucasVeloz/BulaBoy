import { useState } from "react";
import { useDebounce } from "../../hooks";
import { useQuery } from "@tanstack/react-query";
import { MedicineApi } from "../../services";

export const useSearch = () => {
  const [input, setInput] = useState('');
  const debouncedSearch = useDebounce(input);


  const { data } = useQuery(['medicine', debouncedSearch], async () => {
    const { content } = await MedicineApi.search(debouncedSearch);
    if (!Array.isArray(content)) return []
    return content as { idBulaPacienteProtegido: string, idBulaProfissionalProtegido: string,nomeProduto: string, razaoSocial: string}[];
  })


  return {
    input,
    setInput,
    data
  }
}
