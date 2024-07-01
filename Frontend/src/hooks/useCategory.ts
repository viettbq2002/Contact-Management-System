import { useQuery } from "@tanstack/react-query";
import categoryApi from "../api/category-api";
import { getUser } from "../utils/auth.utils";

const useCategory = () => {
  const user = getUser();
  return useQuery({
    queryKey: ["category"],
    staleTime: Infinity,
    queryFn: () => categoryApi.getCategories(user?.id as string),
    enabled: !!user?.id,
  });
};

export default useCategory;
