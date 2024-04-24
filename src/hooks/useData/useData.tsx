import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface UseDataArgs {
  endpoint: string;
  id?: string;
}

const useData = <T,>(args: UseDataArgs) => {
  const { endpoint, id } = args;
  const { data, isLoading, error } = useQuery({
    queryKey: [],
    queryFn: async (): Promise<T> => {
      const response = await axios.get(
        `https://api.sampleapis.com/futurama/${endpoint}/${id ?? ""}`
      );
      return response.data;
    },
  });
  return { data, isLoading, error };
};

export default useData;
