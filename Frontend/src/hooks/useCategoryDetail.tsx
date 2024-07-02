import { useQuery } from "@tanstack/react-query";
import categoryApi from "../api/category-api";

const useCategoryDetail = (categoryId: number) => {
  return useQuery({
    queryKey: ["category-detail", categoryId],
    staleTime: Infinity,

    queryFn: () => categoryApi.getCategoyById(Number(categoryId)),
    enabled: !!categoryId,
  });
};

export default useCategoryDetail;
