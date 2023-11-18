import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { useDebounce } from "../../hooks";
import { MedicineApi } from "../../services";

export const useSearch = () => {
  const [input, setInput] = useState('');
  const debouncedSearch = useDebounce(input);

  const { data } = useQuery(['medicine', debouncedSearch], async () => {
    const content = await MedicineApi.search(debouncedSearch);
    if (!Array.isArray(content)) return []
    return content
  })


  return {
    input,
    setInput,
    data,
  }
}
